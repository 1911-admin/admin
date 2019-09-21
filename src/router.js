import React, { Component } from 'react';
import{HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Login from 'pages/login'
import Admin from 'pages/admin'
import FoodList from 'pages/food'
import FoodAdd from 'pages/foodadd'
import UploadFile from 'pages/foodadd/upload_file.js'
import UploadBase64 from 'pages/foodadd/upload_base64.js'
import UploadAntd from 'pages/foodadd/upload_antd.js'
import User from 'pages/user'
import TokenModel from 'components/tokenModel'
import Pie from 'pages/echarts/pie.js'
class RootRouter extends Component {
    render() {
        return (
            <App>
                <HashRouter>
                    <TokenModel></TokenModel>
                    <Switch>
                        <Redirect exact from='/' to='/admin'></Redirect>
                        <Route path = '/admin' render={()=>{
                            return(
                                <Admin>
                                    <Route path = '/admin/food/list' component={FoodList}></Route>
                                    <Route path = '/admin/food/add' component={FoodAdd}></Route>
                                    <Route path = '/admin/food/file' component={UploadFile}></Route>
                                    <Route path = '/admin/food/base64' component={UploadBase64}></Route>
                                    <Route path = '/admin/food/antd' component={UploadAntd}></Route>
                                    <Route path = '/admin/user' component={User}></Route>
                                    <Route path = '/admin/echarts/pie' component={Pie}></Route>
                                </Admin>
                            )
                        }}></Route>
                        <Route path = '/login' component={Login}></Route>
                    </Switch>
               </HashRouter>
            </App>
        );
    }
}

export default RootRouter;