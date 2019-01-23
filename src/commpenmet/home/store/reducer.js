import {HOME_CHANGE} from './constants';
const defaultState = {
    name: 'dell lee111',
    newsList: []
};


export default (state = defaultState, action) => {
    switch(action.type){
        case HOME_CHANGE:
            return {
                ...state,
                newsList: action.list
            } 
        default: 
            return state;
    }
}