import React, { Component } from 'react';

//引入样式
import '../../asset/styles/service.less';

//引入的插件
import { NavBar, Icon } from 'antd-mobile';

//引入子组件
import NavigationBar from '../../components/NavigationBar';

//定义组件
class Service extends Component {
    moreservice(){
        window.location.href = "http://localhost:3000/#/moreservice";
    }
    govern(){
        window.location.href = "http://localhost:3000/#/govern";
    }
    render() {
        return (
            <div className='service'>
                <NavBar mode="dark">服务</NavBar>
                {/* 列表 */}
                <p className='content'>政府服务</p>
                <div className='service-govern'>
                    <ul>
                        <li onClick={this.govern.bind(this)}>
                            <span className='iconfont icon-zixun'></span>
                            <p>政府公告</p>
                        </li>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>政策宣传</p>
                        </li>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>居民意见</p>
                        </li>
                        <li className='icon'>
                            <span className='iconfont icon-zixun'></span>
                            <p>办事指南</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>社区党建</p>
                        </li>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>就业创业</p>
                        </li>
                        <li onClick={this.moreservice.bind(this)}>
                            <span className='iconfont icon-zixun'></span>
                            <p>更多服务</p>
                        </li>
                    </ul>
                </div>
                <p className='content1'>生活服务</p>
                <div className='service-govern'>
                    <ul>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>小区公告</p>
                        </li>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>缴费管理</p>
                        </li>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>家政服务</p>
                        </li>
                        <li className='icon'>
                            <span className='iconfont icon-zixun'></span>
                            <p>物业服务</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>快递服务</p>
                        </li>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>房屋出租</p>
                        </li>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>洗衣店</p>
                        </li>
                        <li className='icon'>
                            <span className='iconfont icon-zixun'></span>
                            <p>便民电话</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>二手物品</p>
                        </li>
                        <li>
                            <span className='iconfont icon-zixun'></span>
                            <p>店铺申请</p>
                        </li>
                        <li onClick={this.moreservice.bind(this)}>
                            <span className='iconfont icon-zixun'></span>
                            <p>更多服务</p>
                        </li>
                    </ul>
                </div>
                {/* 导航栏 */}
                <NavigationBar />
            </div>
        )
    }
}

export default Service;