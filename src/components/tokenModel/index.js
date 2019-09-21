import React, { Component,Fragment } from 'react';
import {Card} from 'antd'
import {connect} from 'react-redux'
import ActionCreator from '../../store/actionCreator'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import './index.less'
class TokenModel extends Component {
  back=()=>{
    //将状态框隐藏
    this.props.changeModelState()
    //路由跳转到登录界面
    this.props.history.push('/login')
  }
    render() {
      console.log(this)
        return (
          <Fragment>
            {!this.props.modelState||<div className='tokenmodel'>
              <Card>
                <p>token丢失请重新登陆</p>
                <button onClick={this.back}>返回登录</button>
              </Card>  
            </div>}
          </Fragment>  
        );
    }
}

let Newcomponent = withRouter(TokenModel)
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(Newcomponent) ;