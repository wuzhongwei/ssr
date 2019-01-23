import {TRANSLATION_CHANGE} from './constants';
const defaultState = {
    translationList: []
};


export default (state = defaultState, action) => {
    switch(action.type){
        case TRANSLATION_CHANGE:
            return {
                ...state,
                translationList: action.list
            } 
        default: 
            return state;
    }
}