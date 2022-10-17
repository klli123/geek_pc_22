import React from 'react';
import './Login.css';
import { Navigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import img from '../../assets/logo.png'
import { login } from '../../api/user_login'

class Login extends React.Component {
    // here the state is only used for triggering re-render in order to navigate to main page if there is a token
    state = { token: '' }

    render() {
        return (
            sessionStorage.getItem('token') ? <Navigate to="/layout" /> :
                <div className="login">
                    {/* Card Component is the login frame, it contains logo image and username/password input tag */}
                    <Card
                        className='login-container'
                        style={{
                            width: 400,
                        }}
                    >
                        <img src={img} alt='' className='img' />
                        <Form
                            className=''
                            validateTrigger={['onChange', 'onBlur']}
                            name="basic"
                            labelCol={{
                                span: 0,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            // initialValues={{
                            //     username: 4316665888,
                            //     password: 246810,
                            //     remember: true,
                            // }}

                            autoComplete="off"
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                className='username'
                                // according to API document,the name must be 'mobile'
                                name="mobile"
                                validateTrigger={['onChange', 'onBlur']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                    {
                                        pattern: /^1[3-9]\d{9}$/,
                                        message: 'Please enter correct Canadian phone number'
                                    }
                                ]}
                            >
                                <Input placeholder='Please enter your username' />
                            </Form.Item>

                            <Form.Item
                                validateTrigger={['onChange', 'onBlur']}
                                // according to API document, the name must be 'code'
                                name="code"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        pattern: /\d{6}/,
                                        message: 'please enter correct password'
                                    }

                                ]}
                            >
                                <Input.Password placeholder='please enter the password' />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 0,
                                    span: 24,
                                }}
                                rules={[
                                    {
                                        // there can use variable `rule` to replace `_`
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('you have to accept agreement to continue')),
                                    },
                                ]}

                            >
                                <Checkbox >I have read and accept Terms of Service</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                    span: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" block>

                                    Submit
                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>

        );
    };
    // because login() is an async function, there must have await keyword ahead of it, otherwise onFinish event would be no result 
    // before export default Login executed.
    onFinish = async ({ mobile, code }) => {
        const res = await login(mobile, code);
        console.log(res)
        sessionStorage.setItem('token', res.data.token);
        this.setState({ token: sessionStorage.getItem('token') })
    }
}

export default Login;