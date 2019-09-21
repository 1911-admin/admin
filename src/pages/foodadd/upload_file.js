import React, { Component } from 'react';
import {Card,Button, message} from 'antd'

class UploadFile extends Component {
    constructor(){
        super()
        this.state = {img:''}
    }
    submit=()=>{
       let file = this.refs.file.files[0]
       console.log(file)
       let formData = new FormData()
       formData.append('img',file)
       let config = { 
           headers:{'Content-Type':'multipart/form-data'}
       };
       this.$axios.post('/hehe/admin/file/upload',formData,config)
       .then((res)=>{
           console.log(res)
           if(res.err===0){
                this.setState({img:'/hehe'+res.imgpath})
           }else{
               message.error('提交失败')
           }
          
       })
    }
    render() {
        let {img} = this.state
        return (
            <Card title='文件上传'>
         
                <span>缩略图:</span> <input type="file" ref='file'/><br/>
                 <img src={img} alt=''/>
                <Button type='primary' onClick={this.submit}>提交</Button>
            </Card>
        );
    }
}

export default UploadFile;