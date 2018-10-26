import React,{Component} from 'react';


//定义组件
class FormButton extends Component {

    render(){
        //接收值
        let {value,block,next} = this.props;
        let styles = {
            marginTop:'20px',
            height:'40px',
            padding:'10px 20px',
            fontSize:'18px',
            background:'transparent',
            color:'#fff',
            outline:'none',
            border:'1px solid #fff',
            borderRadius:'8px'
        }
        //根据判断属性设置样式
        //登录页面
        if(block){
            Object.assign(styles,{
                width:'88%',
                fontSize:'20px'
            })
        }
        //注册页面
        if(next){
            Object.assign(styles,{
                width:'96%',
                fontSize:'20px',
                background:'#18B4ED',
                marginLeft:'6px',
                height:'50px'
            })
        }
        return(
            <input type="button" style={styles} className='form-button' value={value} onClick={this.props.onClick}/>
        )
    };
}

export default FormButton;