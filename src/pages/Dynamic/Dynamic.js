import React, { Component } from 'react';

//引入样式
import '../../asset/styles/dynamic.less';

//引入的插件
// import { NavBar, Icon } from 'antd-mobile';

//引入子组件
// import NavigationBar from '../../components/NavigationBar';

//定义组件
class Dynamic extends Component {
    render() {
        return (
            <div className='dynamic'>
                <nav className='dynamic-nav'>
                    <span>动态</span>
                    <span>贴吧</span>
                    <span>活动</span>
                    <span>好友</span>
                    <i>+</i>
                </nav>
                <div className='dynamic-content'>
                   111
                </div>
                
                {/* 导航栏 */}
                {/* <NavigationBar /> */}
            </div>
        )
    }
}

export default Dynamic;