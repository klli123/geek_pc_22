
import { LogoutOutlined, HomeOutlined, DiffOutlined, EditOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import './home.css';

const { Header, Content, Sider } = Layout



class Home extends React.Component {

    // item represents which link has been clicked, then correspondent child route has to be rendered 
    render() {
        return (<Layout className="layout">
            <Header className="header">
                <div className="logo" />
                <div className="hRight">
                    <span className="userInfo">username</span>
                    <span className="logout"><LogoutOutlined />Logout</span>
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
                        <Menu.Item key="1" icon={<HomeOutlined />}>Data Overview</Menu.Item>
                        <Menu.Item key="2" icon={<DiffOutlined />}>Article Management</Menu.Item>
                        <Menu.Item key="3" icon={<EditOutlined />}>Article Publishment</Menu.Item>

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

                    </Content>
                </Layout>
            </Layout>
        </Layout>
        )
    }
}






export default Home;