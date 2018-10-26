import React, { Component } from 'react';

//引入样式
import '../../asset/styles/aboutus.less';

//引入的插件
import { NavBar, Icon } from 'antd-mobile';

//引入图片
import banner3 from '../../asset/images/banner3.png';

//定义组件
class AboutUs extends Component {
    render() {
        return (
            <div className='aboutus'>
                <NavBar mode="dark"icon={<Icon type="left" />}>关于我们</NavBar>
                <div className='aboutus-img'>
                    <img src={banner3} alt="图片"/>
                </div>
                <div className='aboutus-list'>
                    <ul>
                        <li>
                            <p>帮助与反馈</p>
                            <p className='right'>></p>
                        </li>
                        <li>
                            <p>欢迎页</p>
                            <p className='right'>></p>
                        </li>
                        <li>
                            <p>用户协议</p>
                            <p className='right'>></p>
                        </li>
                        <li>
                            <p>二维码</p>
                            <p className='right'>></p>
                        </li>
                    </ul>
                </div>
                <div className='aboutus-footer'>
                    <p>智慧社区Life软件许可及服务协议</p>
                    <p>江苏智天下网络科技有限公司 版权所有</p>
                    <p>copyright &copy; 2016 ZTX Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default AboutUs;