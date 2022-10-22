
import { LogoutOutlined, HomeOutlined, DiffOutlined, EditOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Popconfirm } from 'antd';
import React from 'react';
import Article from 'pages/Article'
import List from 'pages/List'
import Image from 'pages/Image'
import { Token_Key, removeToken } from 'utils/token.js'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { getProfile } from 'api/user_login'
import './home.css';

const { Header, Content, Sider } = Layout
const text = 'Are you sure to logout now?'


export default class Home extends React.Component {
    state = {
        isLogout: false,
        profile: '',
    }

    // item represents which link has been clicked, then correspondent child route has to be rendered 
    render() {
        return this.state.isLogout ? <Navigate to='/login' /> :
            (<Layout className="layout">
                <Header className="header">
                    <div className="logo" />
                    <div className="hRight">
                        <span className="userInfo">{`${this.state.profile}`}</span>
                        <span className="logout">
                            <Popconfirm
                                placement="bottomRight"
                                title={text}
                                onConfirm={this.confirm}
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
                                <Link to='/home'>Data Overview</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DiffOutlined />}>
                                <Link to='/home/list'>Article Management</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<EditOutlined />}>
                                <Link to='/home/publish'>Article Publishment</Link>
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
                                padding: 14,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Routes>
                                <Route path='/' element={<Image />}></Route>
                                <Route path='list' element={<List />}></Route>
                                <Route path='publish' element={<Article />}></Route>
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            )
    }

    confirm = () => {
        removeToken(Token_Key);
        this.setState({ isLogout: true })
    }
    async componentDidMount() {
        try {
            const profile = await getProfile();
            console.log(profile);
            this.setState({ profile: profile.data.name })
        }
        catch (error) {
            console.log(error)
        }
    }
    componentWillUnmount() {
        this.setState({ isLogout: false });
    }
}
