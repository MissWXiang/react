import React, { Component } from 'react';

//引入样式
import '../../asset/styles/home.less';

//引入的插件
import { NavBar, Icon } from 'antd-mobile';

//引入子组件
import NavigationBar from '../../components/NavigationBar';

//引入轮播图插件
import Iunbo from '../../components/Iunbo';

//引入图片
import list from '../../asset/images/list.png';
import tu1 from '../../asset/images/tu1.png';
import tu2 from '../../asset/images/tu2.png';
import tu3 from '../../asset/images/tu3.png';
//定义组3
class Home extends Component {
    render() {
        return (
            <div className='home'>
                <NavBar
                    mode="dark"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >购物</NavBar>
                <Iunbo />
                {/* 列表 */}
                <ul className='home-list'>
                    <li>
                        <img src={list} alt="周边"/>
                        <p>周边</p>
                    </li>
                    <li>
                        <img src={list} alt="周边"/>
                        <p>外卖</p>
                    </li>
                    <li>
                        <img src={list} alt="周边"/>
                        <p>生活超市</p>
                    </li>
                    <li>
                        <img src={list} alt="周边"/>
                        <p>团购</p>
                    </li>
                </ul>
                <ul className='home-list'>
                    <li>
                        <img src={list} alt="周边"/>
                        <p>积分商城</p>
                    </li>
                    <li>
                        <img src={list} alt="周边"/>
                        <p>热卖</p>
                    </li>
                    <li>
                        <img src={list} alt="周边"/>
                        <p>新店推荐</p>
                    </li>
                    <li>
                        <img src={list} alt="周边"/>
                        <p>活动</p>
                    </li>
                </ul>
                {/* 图片列表 */}
                <div className='home-img'>
                    <img src={tu1} alt="图1"/>
                    <img src={tu2} alt="图2"/>
                    <img src={tu3} alt="图3"/>
                </div>
                {/* 导航栏 */}
                <NavigationBar />
            </div>
        )
    }
}

export default Home;