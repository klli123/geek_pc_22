import React, { Component } from 'react'
import { Card, Select, Breadcrumb, Button, Form, Radio, DatePicker, Space, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
// import styles from './index.module.scss'
import { ArticleStatus } from 'api/constants'
import { getChannels } from 'api/channel'
import { getArticles } from 'api/article'

const { Option } = Select;
const { RangePicker } = DatePicker;


export default class List extends Component {
  state = {
    channels: [],
  articles: {}}
  columns = [
    {
      title: 'Cover',
      dataIndex: 'name',
    },
    {
      title: 'Title',
      dataIndex: 'age',
    },
    {
      title: 'State',
      dataIndex: 'address',
    },
    {
      title: 'Publish Date',
      dataIndex: 'tags',
    },
    {
      title: 'Views',
      dataIndex: 'tags',
    },
    {
      title: 'Comments',
      dataIndex: 'tags',
    },
    {
      title: 'Like',
      dataIndex: 'tags',
    },
    {
      title: 'Control',
      dataIndex: 'tags',
    },
  ];
  data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  render() {
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
                {/* <Radio value={-1}>All</Radio>
              <Radio value={0}>Draft</Radio>
              <Radio value={1}>Waiting for Audit</Radio>
              <Radio value={2}>Audit Success</Radio>
              <Radio value={3}>Audit Failure</Radio> */}
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
        <Card title="xxx results have been shown according to search criteria:">
          <Table columns={this.columns} dataSource={this.data} />
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
