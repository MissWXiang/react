import React,{Component} from 'react';

//引入样式
import '../../asset/styles/usdata.less';

//引入图片
import banner4 from '../../asset/images/banner4.png';

//引入子组件
import NavigationBar from '../../components/NavigationBar';

//引入的插件
import { NavBar, Icon , List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

//定义组件
class UsData extends Component {
    render(){
        return(
            <div className='usdata'>
                <NavBar mode="dark" icon={<Icon type="left" />}  rightContent='保存'>我的资料</NavBar>
                <div className='usdata-img'>
                    <img src={banner4} art='图片'/>
                </div>
                <div className='usdata-list'>
                    <List className="my-list">
                        <Item extra="Sirius" arrow="horizontal">昵称</Item>
                    </List>
                    <List className="my-list">
                        <Item extra="保密" arrow="horizontal">性别</Item>
                    </List>
                    <List className="my-list">
                        <Item extra="2016-11-07" arrow="horizontal">生日</Item>
                    </List>
                    <List className="my-list">
                        <Item extra='图标' arrow="horizontal">二维码</Item>
                    </List>
                    <List className="my-list">
                        <Item arrow="horizontal">个性签名</Item>
                    </List>
                </div>
                <div className='usdata-p'>
                    <List className="my-list">
                        <Item extra="修改/添加" arrow="horizontal">收货地址</Item>
                    </List>
                </div>
                <div className='usdata-p'>
                    <List className="my-list">
                        <Item extra="修改" arrow="horizontal">登录密码</Item>
                    </List>
                </div>
                {/* 导航栏 */}
                <NavigationBar />
            </div>
        )
    }
}
export default UsData;