import React, { Component } from 'react'
import { Card, Select, Radio, DatePicker, Space } from 'antd'
import styles from './index.module.scss'

const { Option } = Select;
const { RangePicker } = DatePicker;

export default class List extends Component {
  render() {
    return (
      <div className={styles.siteCardBorderLessWrapper}>
        <Card
          title="Main > Content"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>
          <RangePicker renderExtraFooter={() => 'extra footer'} />
        </Card>
      </div>
    )
  }
}
