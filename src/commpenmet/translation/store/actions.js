import { TRANSLATION_CHANGE } from './constants';
const changeList = (list) => ({
    type:TRANSLATION_CHANGE,
    list
})
export const getTranslationList= () => { 
    return (dispatch,getState, axiosIns) => {
       return axiosIns.get('/api/translations.json').then((res) => {
           if (res.data.success) {
            const list = res.data.data;
            
            dispatch(changeList(list))
           } else {
            const list = [];
            dispatch(changeList(list))
           }

        })
    }
}