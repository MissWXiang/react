//引入react 核心库
import React,{ Component } from 'react';

//引入样式
import '../../asset/styles/add.less';

//引入的插件
import { NavBar, Icon ,List } from 'antd-mobile';

//引入图片
import w1 from '../../asset/images/w1.png';
import w2 from '../../asset/images/w2.png';
import w3 from '../../asset/images/w3.png';
import w4 from '../../asset/images/w4.png';

const Item = List.Item;
const Brief = Item.Brief;

class Add extends Component{
    render(){
        return(
            <div className='add'>
                <NavBar mode="dark" icon={<Icon type="left" />}>添加</NavBar>
                <div className='add-p'>
                    <span className='iconfont icon-xing icon'></span>
                    <p>账号名称</p>
                </div>
                <div className='add-list'>
                    <List className="my-list">
                        <Item arrow="horizontal" thumb={w1}>
                            扫一扫 
                            <Brief>
                            扫描二维码添加好友或群主
                            </Brief>
                        </Item>
                    </List>
                    <List className="my-list">
                        <Item arrow="horizontal" thumb={w2}>
                            创建群主 
                            <Brief>
                            与身边的朋友进入同一个群聊
                            </Brief>
                        </Item>
                    </List>
                    <List className="my-list">
                        <Item arrow="horizontal" thumb={w3}>
                            查找群组
                            <Brief>
                            按账号和群名称查找群组
                            </Brief>
                        </Item>
                    </List>
                    <List className="my-list">
                        <Item arrow="horizontal" thumb={w4}>
                            附近好友 
                            <Brief>
                            添加附近好友
                            </Brief>
                        </Item>
                    </List>
                </div>
            </div>
        )
    }
} 

export default Add;