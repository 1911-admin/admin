import React, { Component } from 'react';
import {Card} from 'antd'
import Echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
class Pie extends Component {
    constructor(){
        super()
        this.state = {
            option :{
                title : {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ].sort(function(a,b){return a.value - b.value;}),
                        roseType:'radius',
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        }
    }
    updata=()=>{
        // 修改引用类型的值的时候可能会导致原始值发生改变
        // 改变前的值和改变后的值相同
        // 改变前后的值相同不会引起页面的更新
        let options = JSON.parse(JSON.stringify(this.state.option)) 
        let newData = [
            {value:1000, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:24, name:'联盟广告'},
            {value:25, name:'视频广告'},
            {value:600, name:'搜索引擎'}
        ]
        options.series[0].data = newData
        // let newData={
        //     series : [
        //         {
        //             name: '访问来源',
        //             type: 'pie',
        //             radius : '55%',
        //             center: ['50%', '60%'],
        //             data:[
        //                 {value:1000, name:'直接访问'},
        //                 {value:310, name:'邮件营销'},
        //                 {value:24, name:'联盟广告'},
        //                 {value:25, name:'视频广告'},
        //                 {value:600, name:'搜索引擎'}
        //             ].sort(function(a,b){return a.value - b.value;}),
        //             roseType:'radius',
        //             itemStyle: {
        //                 emphasis: {
        //                     shadowBlur: 10,
        //                     shadowOffsetX: 0,
        //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
        //                 }
        //             }
        //         }
        //     ]
        // }
        this.setState({option:options})
    }
    render() {
        return (
            <Card title='饼状图'>
                <ReactEcharts option={this.state.option}></ReactEcharts>
                <button onClick={this.updata}>更新数据</button>
            </Card>
        );
    }
}

export default Pie;