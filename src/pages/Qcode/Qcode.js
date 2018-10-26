import React,{Component} from 'react';

//引入样式
import '../../asset/styles/qcode.less';

//引入的插件
import { NavBar, Icon } from 'antd-mobile';

//引入图片
import code from '../../asset/images/code.png'

//定义组件
class Qcode extends Component {
    render(){
        return(
            <div className='qcode'>
                <NavBar mode="light" icon={<Icon type="left" />} className='qcode-nav'>我的二维码</NavBar>
                <div className='qcode-img'>
                    <img src={code} alt="二维码图片"/>
                </div>
            </div>
        )
    }
}

export default Qcode;