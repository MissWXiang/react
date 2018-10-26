import React, { Component } from 'react';

//引入样式
import '../../asset/styles/moreservice.less';

//引入的插件
import { NavBar, Icon } from 'antd-mobile';
//引入图片
import icon1 from '../../asset/images/icon1.png';

//定义组件
class Moreservice extends Component {
    render() {
        return (
            <div className='moreservice'>
                <NavBar mode="dark"icon={<Icon type="left" />}>更多服务</NavBar>
                <div className='moreservice-list'>
                    <ul>
                        <li>
                            <p><img src={icon1} alt="图标"/></p>
                            <p>&nbsp;百度搜索</p>
                            <p className='right'>></p>
                        </li>
                        <li>
                            <p><img src={icon1} alt="图标"/></p>
                            <p>&nbsp;天气查询</p>
                            <p className='right'>></p>
                        </li>
                        <li>
                            <p><img src={icon1} alt="图标"/></p>
                            <p>&nbsp;快递查询</p>
                            <p className='right'>></p>
                        </li>
                        <li>
                            <p><img src={icon1} alt="图标"/></p>
                            <p>&nbsp;在线问诊</p>
                            <p className='right'>></p>
                        </li>
                        <li>
                            <p><img src={icon1} alt="图标"/></p>
                            <p>&nbsp;优酷直播</p>
                            <p className='right'>></p>
                        </li>
                        <li>
                            <p><img src={icon1} alt="图标"/></p>
                            <p>&nbsp;江苏智天下</p>
                            <p className='right'>></p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Moreservice;