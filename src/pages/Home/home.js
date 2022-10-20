
import { LogoutOutlined, HomeOutlined, DiffOutlined, EditOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Popconfirm } from 'antd';
import React from 'react';
import Article from 'pages/Article'
import List from 'pages/List'
import Image from 'pages/Image'
// import PopConfirm from 'components/PopConfirm'
import { Routes, Route, Link } from 'react-router-dom'
import './home.css';

const { Header, Content, Sider } = Layout
const text = 'Are you sure to logout now?'


class Home extends React.Component {

    // item represents which link has been clicked, then correspondent child route has to be rendered 
    render() {
        return (<Layout className="layout">
            <Header className="header">
                <div className="logo" />
                <div className="hRight">
                    <span className="userInfo">username</span>
                    <span className="logout">
                        <Popconfirm
                            placement="bottomRight"
                            title={text}
                            // onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button><LogoutOutlined />Logout</Button>
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} >
                    <Menu
                        mode="inline"
                        theme='dark'
                        //This is for default highlight option
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to=''>Data Overview</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DiffOutlined />}>
                            <Link to='list'>Article Management</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<EditOutlined />}>
                            <Link to='publish'>Article Publishment</Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout
                    style={{
                        //This can adjust content part padding
                        padding: '14px',
                    }}
                >

                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Routes>
                            <Route path='' element={<Image />}></Route>
                            <Route path='list' element={<List />}></Route>
                            <Route path='publish' element={<Article />}></Route>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
        )
    }
}






export default Home;