import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from './store';
import style from './style.css';
import withStyle from '../../withStyle';

class Header extends Component {
    
    render(){
        const { login, handleLogin, handleLogout } = this.props;
        return (<div className={style.test}>
            <Link to="/">首页</Link>
            <br />
            {
                login ? <Fragment>
                <Link to="/translation">翻译列表</Link><br />
                <div onClick={handleLogout}>退出</div>
                <br />
                </Fragment>: <div onClick={handleLogin}>登录</div>
            }
        </div>)
    }

}

const mapState = (state) => ({
    login: state.header.login
})
const mapDispath = (dispath) => ({
    handleLogin(){
        dispath(actions.login())
    },
    handleLogout(){
        dispath(actions.logout())
    }
})
export default connect(mapState,mapDispath)(withStyle(Header,style));