import React, { Component } from 'react';
import {Upload,Icon,Button, message} from 'antd'


class Demo extends Component {
    constructor(){
        super()
        this.state = {
           fileList: [],
           uploading: false //false还未上传 //true 上传中
        }
    }
 

  handleUpload = () => {
    // 将文件通过ajax请求调用接口上传服务器
    const { fileList } = this.state;
    console.log(fileList)
    const formData = new FormData();
      formData.append('img', fileList[0]);
    
      this.$axios.post('/hehe/admin/file/upload',formData)
      .then((data)=>{
        if(data.err===0){
          message.success('上传ok')
          this.setState({uploading:false})
        }else{
          message.error('上传失败')
        }
      })

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => { //删除某一条
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        // this.setState(state => ({
        //   fileList: [...state.fileList, file],
        // }));
        let fileList = this.state.fileList
        fileList.push(file)
        this.setState({fileList})
        return false;
      },
      fileList,
    };

    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
    );
  }
}

export default Demo;