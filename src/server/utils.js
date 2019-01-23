import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import {Helmet} from 'react-helmet';
import {Provider} from 'react-redux';



export const render = (store, routes, ctx, context) => {
    
        const content = renderToString((
            <Provider store={store}>
                <StaticRouter location={ctx.path} context={context}>
                    <div>

                        {
                           renderRoutes(routes)
                        }
                    </div>
                </StaticRouter>
            </Provider>
        ));
        const helmet = Helmet.renderStatic();
        const cssStr = context.css.length ? context.css.join('\n') : '';
                        
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <style>${cssStr}</style>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                        window.content = {
                            state: ${JSON.stringify(store.getState())}
                        }
                </script>
                <script src="/index.js"></script>
            </body>
            </html>
        `
    
}
