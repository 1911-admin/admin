import React, { Component } from 'react';
import { Card, Button, message } from 'antd'

class FoodAdd extends Component {
    constructor() {
        super()
        this.state = { name: '', foodtype: '热菜', img: '', desc: '', price: '' }
    }
    submit = () => {
        let { name, foodtype, img, desc, price } = this.state
        console.log({ name, foodtype, img, desc, price })
        
        if (img === '') {
            message.error('请先上传图片')
        } else {
            this.$axios.post('/hehe/admin/food/add', { name, foodtype, img, desc, price })
            .then((data) => {
                if (data.err === 0) {
                    message.success('add ok')
                }
            })
        }
        
    }
    upload=()=>{
        let file = this.refs.file.files[0]
        let formdata = new FormData()
        formdata.append('img',file)
        this.$axios.post('/hehe/admin/file/upload',formdata)
        .then((data)=>{
            if(data.err===0){
               this.setState({img:'/hehe'+ data.imgpath})
            }else{
               message.error('文件上传失败请重试')
            }
        })
    }
    render() {
        let { name, foodtype, img, desc, price } = this.state
        return (
            <Card title='商品添加'>
                <span>name:</span> <input type='text' value={name} onChange={(e) => {
                    this.setState({ name: e.target.value })
                }} /><br />
                <span>类型:</span>
                <select value={foodtype} onChange={(e) => {
                    this.setState({ foodtype: e.target.value })
                }}>
                    <option>热菜</option>
                    <option>凉菜</option>
                    <option>食堂菜</option>
                </select>
                <br />
                <span>缩略图:</span> <input type="file" ref='file' /><br />
                <button onClick={this.upload}>上传</button>
                <img src={img} width='80' height='80' alt="" />
                <hr />
                <span>描述:</span> <input type='text' value={desc} onChange={(e) => {
                    this.setState({ desc: e.target.value })
                }} /><br />
                <span>价格:</span> <input type='text' value={price} onChange={(e) => {
                    this.setState({ price: e.target.value })
                }} /><br />
                <Button type='primary' onClick={this.submit}>提交</Button>
            </Card>
        );
    }
}

export default FoodAdd;