import { HOME_CHANGE } from './constants';
const changeList = (list) => ({
    type:HOME_CHANGE,
    list
})
export const getHomeList = () => {

 
    return (dispatch,getState, axiosIns) => {
       return axiosIns.get('/api/news.json').then((res) => {
            const list = res.data.data;
            dispatch(changeList(list))
        })
    }
}