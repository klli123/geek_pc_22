import React, { Component } from 'react'
import { Card, Select, Breadcrumb, Button, Form, Radio, DatePicker, Space, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'
import { ArticleStatus } from 'api/constants'
import { getChannels } from 'api/channel'
import { getArticles } from 'api/article'
import defaultImg from 'assets/defaultImage.png'

const { Option } = Select;
const { RangePicker } = DatePicker;



export default class List extends Component {
  state = {
    channels: [],
    articles: {}
  }
  columns = [
    {
      title: 'Cover',
      render(data) {
        if (data.cover.type === 0) {
          return <img src={defaultImg} style={{ width: 200, height: 120, objectFit: 'cover' }} alt='' />
        }
        return <img src={data.cover.images[0]} style={{ width: 200, height: 120, objectFit: 'cover' }} alt = ''/>
      }
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'State',
      dataIndex: 'status',
      render(status) {
        const obj = ArticleStatus.find((item) => { return item.id === status })
        return <Tag color={obj.color}>{obj.name}</Tag>
      }
    },
    {
      title: 'Publish Date',
      dataIndex: 'pubdate',
    },
    {
      title: 'Views',
      dataIndex: 'read_count',
    },
    {
      title: 'Comments',
      dataIndex: 'comment_count',
    },
    {
      title: 'Like',
      dataIndex: 'like_count',
    },
    {
      title: 'Control',
      render(data) {
        return (
        <Space>
        <Button type='primary' shape='circle' icon={<EditOutlined />}></Button>
        <Button type='primary' danger shape='circle' icon={<DeleteOutlined />}></Button>
        </Space>
        )
      }
    },
  ];

  render() {
    const { results, total_count } = this.state.articles;
    return (
      <>
        <Card title={<Breadcrumb>
          <Breadcrumb.Item><Link to='/home'>Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            Article Management
        </Breadcrumb.Item>

        </Breadcrumb>}>
          <Form initialValues={{ status: -1 }} onFinish={this.onFinish}>
            <Form.Item
              label="Article State"
              // name comes from API document
              name="status">
              <Radio.Group >
                {/* -1 means no match result in server, then server will response all data */}
                {ArticleStatus.map((item) => { return <Radio key={item.id} value={item.id}>{item.name}</Radio> })}
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Channel" name="channel_id">
              <Select
                // defaultValue="lucy"
                style={{
                  width: 250,
                }}
                placeholder="please select your article channel"
              >
                {this.state.channels.map((item) => {
                  return <Option key={item.id} value={item.id}>{item.name}</Option>
                })}

              </Select>
            </Form.Item>
            <Form.Item label="Date Range" name="date">
              <RangePicker />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType='submit'>Search</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title={`${total_count} results have been shown according to search criteria:`}>
          <Table columns={this.columns} dataSource={results} rowKey="id" />
        </Card>
      </>
    )
  }
  onFinish = (values) => { console.log(values) }

  async componentDidMount() {
    this.getChannelList();
    this.getArticleList();
  }

  async getChannelList() {
    const res = await getChannels()
    // console.log(res)
    this.setState({ channels: res.data.channels })
  }

  async getArticleList() {
    const res = await getArticles()
    // console.log(res)
    this.setState({ articles: res.data })
  }
}
