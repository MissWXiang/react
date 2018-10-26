import React, { Component } from 'react';

//引入样式
import '../../asset/styles/govern.less';

//引入的插件
import { NavBar, Icon } from 'antd-mobile';
//引入图片
import list1 from '../../asset/images/list1.png';

//定义组件
class Govern extends Component {
    render() {
        return (
            <div className='govern'>
                <NavBar mode="dark"icon={<Icon type="left" />}>政府公告</NavBar>
                <div className='govern-list'>
                    <ul>
                        <li>
                            <p><img src={list1} alt="图标"/></p>
                            <p>关于继续降低职工医疗保险企业缴费比例的通知</p>
                        </li>
                        <li>
                            <p><img src={list1} alt="图标"/></p>
                            <p>关于继续降低职工医疗保险企业缴费比例的通知</p>
                        </li>
                        <li>
                            <p><img src={list1} alt="图标"/></p>
                            <p>关于继续降低职工医疗保险企业缴费比例的通知</p>
                        </li>
                        <li>
                            <p><img src={list1} alt="图标"/></p>
                            <p>关于继续降低职工医疗保险企业缴费比例的通知</p>
                        </li>
                        <li>
                            <p><img src={list1} alt="图标"/></p>
                            <p>关于继续降低职工医疗保险企业缴费比例的通知</p>
                        </li>
                        <li>
                            <p><img src={list1} alt="图标"/></p>
                            <p>关于继续降低职工医疗保险企业缴费比例的通知</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Govern;