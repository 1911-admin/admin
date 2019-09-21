import React, { Component } from 'react';
import { Menu } from 'antd'
import {withRouter} from 'react-router-dom'
import navData from './navData'
const { SubMenu } = Menu;

class LeftNav extends Component {
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({data:navData})
        },200)
    }
    jump(path){
        this.props.history.push(path) 
    }
    renderItem(arr){
        if(!arr.length){return '暂无数据'}
        return arr.map((item)=>{
            if(item.children){
                return(
                   <SubMenu key={item.key} title={item.name}>
                     {this.renderItem(item.children)}
                   </SubMenu> 
                )     
            }else{
               return (
                   <Menu.Item key={item.key} onClick={
                       this.jump.bind(this,item.path)
                   }>{item.name}</Menu.Item>
               )
            }
        })
    }
    render() {
        return (
            <Menu theme='dark'  mode="vertical">
                   {this.renderItem(this.state.data)}
                   {/* {data.map((item)=>{
                       
                           if(item.children){
                               return(
                                   <SubMenu key={item.key} title={item.name}>
                                       {item.children.map((item)=>{
                                           return(
                                            <Menu.Item key={item.key}
                                            onClick={this.jump.bind(this,item.path)}
                                            >{item.name}</Menu.Item>
                                           )
                                       })}
                                   </SubMenu>
                               )
                           }else{
                               return(
                                   <Menu.Item key={item.key}
                           onClick={this.jump.bind(this,item.path)}
                           >{item.name}</Menu.Item>
                               )
                           }
                           
                       
                   })}
                 */}
            </Menu>
        );
    }
}

export default withRouter(LeftNav);