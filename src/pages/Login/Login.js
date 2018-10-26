import React,{Component} from 'react';

//引入样式
import '../../asset/styles/login.less';
import logo from '../../asset/images/logo.jpg'

//引入子组件
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

//定义组件
class Login extends Component {
    //自定义事件
    changeUsername(){
        alert("111");
    };
    btnlogin(){
       alert("登录成功！");
       window.location.href = "http://localhost:3000/#/home";
    }
    freereg(){
        window.location.href = "http://localhost:3000/#/register"
    }
    //渲染
    render(){
        return(
            <div className='login'>
                <div className='login-img'>
                    <img src={logo} />
                    <h1>智天下</h1>
                </div>
                <form className='login-form'>
                    {/* 账户 */}
                    <FormInput iconuser='iconfontshouji' onChange={this.changeUsername.bind(this)} />
                    {/* 密码 */}
                    <FormInput type='password' iconuser='lock' />
                    {/* 登录 */}
                    <FormButton value='登录' block='block' onClick={this.btnlogin.bind(this)}/>
                    {/* 忘记密码 */}
                    <p><a href="#">忘记密码?</a></p>
                    {/* 免费注册 */}
                    <FormButton value='免费注册' onClick={this.freereg.bind(this)} />&emsp;
                    {/* 游客登录 */}
                    <FormButton value='游客登录'/>
                </form>
            </div>
        )
    }
}

export default Login;