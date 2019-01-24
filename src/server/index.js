
// const Koa = require('koa');
import Koa from 'koa';
import Static from 'koa-static-cache';
import path from 'path';
import {matchRoutes} from 'react-router-config';  
import proxy from 'koa-proxies';

import {render} from './utils';
import {getStore} from '../store';
import routes from '../Routes';

const app = new Koa();



// 将/public文件夹设置为静态路径
app.use(Static('public'));

app.use(proxy('/api', {
    target: 'http://47.95.113.63',    
    rewrite: path => {
        return 'ssr' + path;
    },
    changeOrigin: true,
    logs: true,
}))
app.use( async (ctx) => {       
    const store = getStore(ctx);
    const mathRoute =  matchRoutes(routes, ctx.path ); // 匹配查找
    const promises = [];

    mathRoute.forEach((item) => {
        if (item.route.loadData) {
            const promise = new Promise((resolve,reject) => {
                item.route.loadData(store).then(resolve).catch(resolve);
            })
            promises.push(promise);
        }
    });

    await Promise.all(promises).then(() => {
        const context = {css: [] }; // 存服务端渲染的style
        const html = render(store, routes, ctx, context);
        console.log('html', html)
        if (context.action == 'REPLACE') { // 前端 重定向后会返回context.action
            ctx.redirect(context.url);
        } else if (context.NotFound) { 
            ctx.status = 404;
            ctx.body = html;
        } else {
            ctx.body = html;
        }
    })
    //ctx.body = render(store, routes, ctx);
});

app.listen(4000, () => {
    console.log('启动成功111')
});