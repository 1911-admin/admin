import React, { Component } from 'react';
import {Card,Button, message} from 'antd'

class UploadBase64 extends Component {
    constructor(){
        super()
        this.state = {
            img:''
        }
    }
    submit=()=>{
        let file=this.refs.file.files[0]
        var r = new FileReader(); //本地预览
        r.onload = ()=>{
                 console.log(r.result);//图片的base64)
                 this.setState({img:r.result})
        }
        r.readAsDataURL(file);//本地预览对象进行读取
    }
    render() {
        
        return (
            <Card title='商品添加'>
               
                <span>缩略图:</span> <input type="file" ref='file'/><br/>
                <img src={this.state.img}/>
                <Button type='primary' onClick={this.submit}>提交</Button>
            </Card>
        );
    }
}

export default UploadBase64;