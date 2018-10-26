import React,{Component} from 'react';

//引入样式
import '../asset/styles/navigationBar.less';
//引入路由，使用Link to
import { Link } from 'react-router';

//定义组件
class NavigationBar extends Component {
    //渲染
    render(){
        return(
            <div className='navigationBar'>
                <ul>
                    <li >
                        <span className='iconfont icon-wendaguanli'></span>
                        <p><Link to='home'>购物</Link></p>
                    </li>
                    <li >
                        <span className='iconfont icon-xing'></span>
                        <p><Link to='service'>服务</Link></p>
                    </li>
                    <li >
                        <span className='iconfont icon-haiwaifangchan'></span>
                        <p><Link to='friends'>社交</Link></p>
                    </li>
                    <li >
                        <span className='iconfont icon-wo'></span>
                        <p><Link to='pesonal'>我的</Link></p>
                    </li>
                </ul>
            </div>
        )
    };
}

export default NavigationBar;