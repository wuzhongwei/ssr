import React from 'react';
import ReactDom  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {Provider} from 'react-redux';
import routes from '../Routes';
import {getStoreClient} from '../store';
const getClientStore = getStoreClient();
const App = () => {
    return (
        <Provider store={getClientStore}>
            <BrowserRouter>
                <div>
                    {
                        renderRoutes(routes)
                    }
                </div>
            </BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(<App/>, document.getElementById('root'));
