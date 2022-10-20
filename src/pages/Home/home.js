
import { LaptopOutlined, NotificationOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import './home.css';

const { Header, Content, Sider } = Layout

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

    };
});

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
                <Sider width={200} className="site-layout-background">
                    <Menu
                        theme='dark'
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        // style={{
                        //     height: '100%',
                        //     borderRight: 0,
                        // }}
                        items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '24px',
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
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
        )
    }
}






export default Home;