import React, { Component } from 'react';
import { Form, Icon, Input, Button, Card,message} from 'antd';
import './index.less'
class Login extends Component {
    login = () => {
        // let result = this.props.form.getFieldsValue()
        this.props.form.validateFields((err,data)=>{
            console.log(err,data)
            if(err){
                // 前端验证错误
                message.error('输入信息有误请重试',1)
            }else{
                // 前端验证ok 调用ajax 接口
                this.$axios.post('/hehe/admin/user/login',{us:data.us,ps:data.ps})
                .then((data)=>{
                    if(data.err === 0){
                        localStorage.setItem('token',data.token)
                        message.success('登录ok1s后跳转到首页',1,()=>{
                            this.props.history.push('/admin/home')
                        })
                    }
                })
            }
        })
        // console.log(result)
    }
    render() {
        console.log(this)
        const { getFieldDecorator } = this.props.form;
        return (
            <Card className='login'>
                <Form.Item>
                    {getFieldDecorator('us', {
                        rules: [{ required: true, message: '不能为空!' },
                                { max:8, message: '最长8个字符!' },
                                { min:3, message: '最短5个字符!' },],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username" />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('ps', {})(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Password" />,
                    )}
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="">
                        Forgot password
          </a>
                    <Button type="primary"
                        onClick={this.login}
                        htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Card>

        );
    }
}

export default Form.create()(Login);