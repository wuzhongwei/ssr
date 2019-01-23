import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {reducer as homeRedux} from '../commpenmet/home/store';
import {reducer as HeaderRedux} from '../components/Header/store';
import {reducer as translationRedux} from '../commpenmet/translation/store'

import requestClient from '../client/request';
import requestServer from '../server/request';

const reducer = combineReducers({
    home: homeRedux,
    header: HeaderRedux,
    translationList: translationRedux
})

export const getStore = (ctx) => {
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(requestServer(ctx))));
}

export const getStoreClient = () => {
    const defaultState = window.content.state;
    return createStore(reducer,defaultState,applyMiddleware(thunk.withExtraArgument(requestClient)));
}


