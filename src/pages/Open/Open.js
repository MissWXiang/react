import React,{Component} from 'react';

//引入样式
import '../../asset/styles/open.less';

//引入图片
import openstart from '../../asset/images/openstart.png';


//定义组件
class Open extends Component {
    render(){
        return(
            <div className='open'>
                <div className='open-content'>
                    <img src={openstart} alt="图片"/>
                    <p>只做最好的智慧生活服务商</p>
                </div>
            </div>
        )
    }
}

export default Open;