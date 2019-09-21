import React, { Component } from 'react';
import './index.less'
import LeftNav from 'components/leftNav'
import {withRouter} from 'react-router-dom'
import {Button} from 'antd'
class Admin extends Component {
    back=()=>{
        localStorage.clear('token')
        //路由跳转到登录界面
        this.props.history.push('/login')
      }
    render() {
        return (
            <div className='admin'>
               <div className='admin-left'>
                   <LeftNav></LeftNav>
               </div>
               <div className='admin-right'>
                   <div className='admin-right-top'>top
                     <Button onClick={this.back}>注销</Button>
                   </div>
                   <div className='admin-right-center'>{this.props.children}</div>
                   <div className='admin-right-footer'>bottom</div>
               </div>
            </div>
        );
    }
}

export default withRouter(Admin) ;