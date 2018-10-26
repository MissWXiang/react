import React,{Component} from 'react';

//引入样式
import '../../asset/styles/pesonal.less';

//引入图片
import t1 from '../../asset/images/t1.png';
import t2 from '../../asset/images/t2.png';
import t3 from '../../asset/images/t3.png';
import t4 from '../../asset/images/t4.png';

//引入自定义插件
import NavigationBar from '../../components/NavigationBar'
//引入的插件
import { NavBar, Icon ,List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

//定义组件
class Pesonal extends Component {
    render(){
        return(
            <div className='pesonal'>
                <NavBar mode="dark" className='qcode-nav'>个人中心</NavBar>
                <div className='pesonal-img'>
                    <img src={t4} alt="个人信息"/>
                </div>
                <div className='pesonal-list'>
                    <ul>
                        <li>
                            &emsp;<img src={t1} alt="个人信息"/>
                            &emsp;<p>兑换码&nbsp; 0</p>
                        </li>
                        <li>
                            <img src={t2} alt="个人信息"/>
                            &emsp;<p>我的收藏 0</p>
                        </li>
                        <li className='right'>
                            <img src={t3} alt="个人信息"/>
                            &emsp;<p>我的钱包 0.00</p>
                        </li>
                    </ul>
                </div>
                <div className='personal-list-all'>
                    <List>
                        <Item thumb={t1} arrow="horizontal">我的红包</Item>
                    </List>
                    <List>
                        <Item thumb={t1} arrow="horizontal">我的发布</Item>
                    </List>
                </div>
                <div className='personal-list-all'>
                    <List>
                        <Item thumb={t1} arrow="horizontal">普通订单</Item>
                    </List>
                    <List>
                        <Item thumb={t1} arrow="horizontal">配送订单</Item>
                    </List>
                    <List>
                        <Item thumb={t1} arrow="horizontal">团购订单</Item>
                    </List>
                    <List>
                        <Item thumb={t1} arrow="horizontal">积分订单</Item>
                    </List>
                    <List>
                        <Item thumb={t1} arrow="horizontal">服务订单</Item>
                    </List>
                </div>
                <div className='personal-list-all'>
                    <List>
                        <Item thumb={t1} arrow="horizontal">万科新城</Item>
                    </List>
                </div>
                <div className='personal-list-all'>
                    <List>
                        <Item thumb={t1} arrow="horizontal">客服电话</Item>
                    </List>
                </div>
                <div className='personal-list-all'>
                    <List>
                        <Item thumb={t1} arrow="horizontal">投诉建议</Item>
                    </List>
                </div>
                {/* 导航栏 */}
                <NavigationBar />
            </div>
        )
    }
}

export default Pesonal;