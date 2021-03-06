import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header/';
import { actions } from './components/Header/store/';

const App = (props) => {
 
    return (
        <div>
            <Header staticContext={props.staticContext} />
            {
                renderRoutes(props.route.routes)
            }
        </div>
    )
}
App.loadData = (store) => {
    return store.dispatch(actions.getHeadInfo());
}
export default App;