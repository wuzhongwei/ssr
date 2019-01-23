import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {getHomeList} from './store/actions';
import style from './style.css';
import withStyle from '../../withStyle';
import {Helmet} from 'react-helmet';

class Home extends Component {
    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getHomeList(false);
        }
        
    }
    getList() {
        const {list} = this.props;
         
        return list.map((item) => {return <div key={item.id}>{item.title}</div>})
    }
    render() {
        return (
            <Fragment>
                 <Helmet>
                    <meta charSet="utf-8" />
                    <title>这是标题</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div className={style.test}>
                    {this.getList()}
                </div>
            </Fragment>
        )
    }
    
}
Home.loadData = (store) => {
    return store.dispatch(getHomeList(true));
}

const mapStateToProps =  (state) => {
    return {
        list: state.home.newsList
    }
}
const mapDispatchToprops = dispatch => {
    return {
        getHomeList(){
            dispatch(getHomeList());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(withStyle(Home,style));