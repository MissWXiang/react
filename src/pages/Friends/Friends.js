import React, { Component } from 'react';

//引入样式
import '../../asset/styles/friends.less';

//引入的插件
import { NavBar, Icon } from 'antd-mobile';

//引入子组件
import NavigationBar from '../../components/NavigationBar';

//定义组件
class Friends extends Component {
    render() {
        return (
            <div className='friends'>
                <nav className='friends-nav'>
                    <span>动态</span>
                    <span>贴吧</span>
                    <span>活动</span>
                    <span>好友</span>
                    <i>+</i>
                </nav>
                <div className='friends-icon'>
                    <ul>
                        <li>
                            <span className='iconfont icon-wendaguanli icon'></span>
                            <p>消息</p>
                        </li>
                        <li>
                            <span className='iconfont icon-wo icon'></span>
                            <p>朋友</p>
                        </li>
                        <li>
                            <span className='iconfont icon-icon-p_lianxirenguanli icon'></span>
                            <p>群主</p>
                        </li>
                    </ul>
                </div>
                <div className='friends-list'>
                    <ul>
                        <li>
                            <span className='iconfont icon-wo icon'></span>
                            &emsp;<span>新的朋友</span>
                        </li>
                        <li>
                            <span className='iconfont icon-wo icon1'></span>
                            &emsp;<span>群通知</span>
                        </li>
                    </ul>
                </div>
                {/* 导航栏 */}
                <NavigationBar />
            </div>
        )
    }
}

export default Friends;