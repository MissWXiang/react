import React,{Component} from 'react';

//引入样式
import '../asset/styles/frominput.less';

//定义组件
class FormInput extends Component {
    //设置默认属性
    static defaultProps = {
        value:'text'
    };

    render(){
        //接收值
        let {iconuser} = this.props;
        iconuser = 'icon iconfont icon-'+iconuser ;
        return(
            <div className='form-input'>
                <span className={iconuser}></span>
                <input type={this.props.type} onChange={this.props.onChange}/>
            </div>
        )
    };
}

export default FormInput;