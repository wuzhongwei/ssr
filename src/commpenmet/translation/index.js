import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {getTranslationList} from './store/actions';
import style from './style.css';
import withStyle from '../../withStyle';


class Translation extends Component {
    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getTranslationList();
        }
        
    }
    getList() {
        const {list} = this.props;
        console.log(list)
        return list.map((item) => {return <div key={item.id}>{item.title}</div>})
    }
    render() {
        const {login} = this.props;
        if (login) {
            return (
                <Fragment>
                    <Helmet>
                    <meta charSet="utf-8" />
                    <title>翻译页面</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div className={style.test}>
                    {this.getList()}
                </div>
                </Fragment>
            )
        } else {
            return <Redirect to="/" />
        }
        
    }
    
}
Translation.loadData = (store) => {
    return store.dispatch(getTranslationList());
}

const mapStateToProps =  (state) => {
    return {
        list: state.translationList.translationList,
        login: state.header.login
    }
}
const mapDispatchToprops = dispatch => {
    return {
        getTranslationList(){
            dispatch(getTranslationList());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(withStyle(Translation,style));
