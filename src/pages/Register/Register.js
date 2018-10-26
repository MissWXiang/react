import React,{Component} from 'react';

//引入样式
import '../../asset/styles/register.less';

//引入的插件
import { NavBar, Icon } from 'antd-mobile';

//引入子组件
import FromButton from '../../components/FormButton'

//定义组件
class Register extends Component {

    //自定义函数
    nextlogin(){
        window.location.href = 'http://localhost:3000/';
    }
    render(){
        return(
            <div className='register'>
                <NavBar mode="light" icon={<Icon type="left" />} className='register-nav'>注册</NavBar>
                <form action="#" className='register-from'>
                    <p><span>片&emsp;区</span> <input type="text" placeholder='成都政法委'/></p>
                    <p><span>手&nbsp;机&nbsp;号</span> <input type="text" placeholder='请输入手机号'/></p>
                    <p><span>密&emsp;码</span> <input type="password" placeholder='请输入密码'/></p>
                    <p><span>确认密码</span> <input type="password" placeholder='请输入确认密码'/></p>
                    <p><span>验&nbsp;证&nbsp;码</span> <input type="password" placeholder='请输入验证码'/></p>
                    <div className='register-checkbox'>
                        <input type="checkbox"/>
                        同意接收智慧社区Life使用协议
                    </div>
                    {/* 按钮 */}
                    <FromButton value='下一步' next='next' onClick={this.nextlogin.bind(this)}/>
                </form>
            </div>
        )
    }
}

export default Register;