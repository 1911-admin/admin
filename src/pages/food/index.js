import React, { Component } from 'react';
import {Card,Table,Button,Pagination,Spin,Popconfirm,message} from 'antd'
import './index.less'
class Food extends Component {
    constructor(){
        super()
        this.state={
            dataSource:[],
            page:1,
            pageSize:3,
            total:0,
            loading:true
        }
    }
    columns=[
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
          width:100,
          fixed:'left'
        },
        {
          title: '类型',
          dataIndex: 'foodtype',
          key: 'foodtype',
          width:100,
          fixed:'left'
        },
        {
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            width:200,
            render(data){
                return(
                    <img src={data} alt=""/>
                )
            }
        },
        {
          title: '描述',
          dataIndex: 'desc',
          key: 'desc',
          width:300
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            width:100
        },
        {
            title: '操作',
            width:200,
            dataIndex: 'action',
            key: 'action',
            fixed:'right',
            render:(txt,record)=> {
                // console.log('删除数据',txt,record)
                return(
                    <div>
                       <Button type='primary' size='small'>修改</Button>
                       <Popconfirm
                         title='你确定要删除吗?'
                         onConfirm={this.confirmDel.bind(this,record._id)}>
                         <Button type='danger' size='small'>删除</Button>  
                       </Popconfirm>
                    </div>
                    
                )
            }
        }, 
      ]
      confirmDel=(id)=>{
            console.log(id)
            let {page,pageSize} = this.state
            this.$axios.post('/hehe/admin/food/del',{_id:id})
            .then((data)=>{
                console.log(data)
                if(data.err===0){
                    message.success('删除ok')
                    this.initData(page,pageSize)
                }else{
                    message.error('删除失败请重试')
                }
            })
      }
      pageChange=(page,pageSize)=>{
          console.log('页面改变',page,pageSize)
          this.initData(page,this.state.pageSize)
      }
      initData=(page,pageSize)=>{
          this.setState({loading:true})
            this.$axios.post('/hehe/admin/food/findByTypePage',{page,pageSize})
            .then((data)=>{
                if(data.err === 0){
                    this.setState({dataSource:data.list,total:data.total,loading:false})
                }
                console.log(data)
            })
        }
        componentDidMount(){
            let {page,pageSize} = this.state
            this.initData(page,pageSize)
        }
    render() {
        let {total,pageSize,loading} = this.state
        return (
            <Card className='food-container'>
                <Spin tip='数据加载中'
                      spinning={loading}>
                <Table dataSource={this.state.dataSource} 
                       className='test'
                       columns={this.columns} 
                       scroll={{ y: 300,x:1100 }}
                       pagination={false}
                       />  
                </Spin>
                <Pagination simple defaultCurrent={1} total={total} pageSize={pageSize} onChange={this.pageChange}/>
            </Card>  
        )
    }
}

export default Food;