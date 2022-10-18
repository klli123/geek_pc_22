
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import chart from '../../assets/chart.png'
import './home.css'

class Home extends React.Component {
    // item represents which link has been clicked, then correspondent child route has to be rendered 
    state = { item: 1 }
    render() {
        return <Layout>
            <Header className="header">
                <div className="h_left"><img src={logo} className="logo" width={200} /></div>

                <div className="h_right">
                    <span className="user_profile">Jonathan</span>
                    <span className="logout">
                        <Link className='logout_btn' to='/'>logout</Link>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background" >
                    <div><Link className='home_item' to=''>Performance Overall</Link></div>
                    <div><Link className='home_item' to=''>Article Management</Link></div>
                    <div><Link className='home_item' to=''>Article Publishment</Link></div>


                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
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
                        <img src={chart} alt='' />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    }
}


const { Header, Content, Sider } = Layout;



export default Home;