!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=32)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("@babel/runtime/helpers/objectSpread")},function(t,e){t.exports=require("@babel/runtime/helpers/classCallCheck")},function(t,e){t.exports=require("@babel/runtime/helpers/createClass")},function(t,e){t.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(t,e){t.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(t,e){t.exports=require("@babel/runtime/helpers/inherits")},function(t,e){t.exports=require("react-router-dom")},function(t,e){t.exports=require("react-redux")},function(t,e){t.exports=require("react-router-config")},function(t,e){t.exports=require("redux")},function(t,e){t.exports=require("axios")},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";var r=i(n(27)),o=i(n(28));function i(t){return t&&t.__esModule?t:{default:t}}var a="s",u={};t.exports=function(t){for(var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.replace,c=void 0!==i&&i,s=n.prepend,l=void 0!==s&&s,f=[],p=0;p<t.length;p++){var d=(0,o.default)(t[p],4),h=d[0],m=d[1],g=d[2],v=d[3],y=h+"-"+p;if(f.push(y),!u[y]||c){u[y]=1;var b=document.getElementById(a+y),x=!1;b||(x=!0,(b=document.createElement("style")).setAttribute("type","text/css"),b.id=a+y,g&&b.setAttribute("media",g));var E=m;v&&"function"==typeof btoa&&(E+="\n/*# sourceMappingURL=data:application/json;base64,"+(e=(0,r.default)(v),btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(t,e){return String.fromCharCode("0x"+e)})))+"*/",E+="\n/*# sourceURL="+v.file+"?"+y+"*/"),"textContent"in b?b.textContent=E:b.styleSheet.cssText=E,x&&(l?document.head.insertBefore(b,document.head.childNodes[0]):document.head.appendChild(b))}else u[y]++}return function(t){t.forEach(function(t){if(--u[t]<=0){var e=document.getElementById(a+t);e&&e.parentNode.removeChild(e)}})}.bind(null,f)}},function(t,e){t.exports=require("@babel/runtime/regenerator")},function(t,e){t.exports=require("redux-thunk")},function(t,e,n){var r=n(26),o=n(13);"string"==typeof r&&(r=[[t.i,r,""]]),t.exports=r.locals||{},t.exports._getContent=function(){return r},t.exports._getCss=function(){return r.toString()},t.exports._insertCss=function(t){return o(r,t)}},function(t,e,n){var r=n(29),o=n(13);"string"==typeof r&&(r=[[t.i,r,""]]),t.exports=r.locals||{},t.exports._getContent=function(){return r},t.exports._getCss=function(){return r.toString()},t.exports._insertCss=function(t){return o(r,t)}},function(t,e,n){var r=n(30),o=n(13);"string"==typeof r&&(r=[[t.i,r,""]]),t.exports=r.locals||{},t.exports._getContent=function(){return r},t.exports._getCss=function(){return r.toString()},t.exports._insertCss=function(t){return o(r,t)}},function(t,e){t.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(t,e){t.exports=require("koa")},function(t,e){t.exports=require("koa-static-cache")},function(t,e){t.exports=require("koa-proxies")},function(t,e){t.exports=require("react-dom/server")},function(t,e){t.exports=require("react-helmet")},function(t,e){t.exports=require("path")},function(t,e,n){(e=t.exports=n(12)(!1)).push([t.i,"body {\r\n    background-color: red;\r\n}\r\n.style_test_2Qbif {\r\n    font-size: 40px;\r\n}",""]),e.locals={test:"style_test_2Qbif"}},function(t,e){t.exports=require("babel-runtime/core-js/json/stringify")},function(t,e){t.exports=require("babel-runtime/helpers/slicedToArray")},function(t,e,n){(e=t.exports=n(12)(!1)).push([t.i,".style_test_3rvmv{\r\n    background: black;\r\n}",""]),e.locals={test:"style_test_3rvmv"}},function(t,e,n){(e=t.exports=n(12)(!1)).push([t.i,".style_test_2H-qk {\r\n    background: pink;\r\n}",""]),e.locals={test:"style_test_2H-qk"}},function(t,e){t.exports=require("any-promise")},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"login",function(){return N}),n.d(r,"logout",function(){return H}),n.d(r,"getHeadInfo",function(){return R});var o=n(14),i=n.n(o),a=n(19),u=n.n(a),c=n(20),s=n.n(c),l=n(21),f=n.n(l),p=(n(25),n(9)),d=n(22),h=n.n(d),m=n(0),g=n.n(m),v=n(7),y=n(23),b=n(24),x=n(8),E=function(t,e,n,r){var o=Object(y.renderToString)(g.a.createElement(x.Provider,{store:t},g.a.createElement(v.StaticRouter,{location:n.path,context:r},g.a.createElement("div",null,Object(p.renderRoutes)(e))))),i=b.Helmet.renderStatic(),a=r.css.length?r.css.join("\n"):"";return'\n            <!DOCTYPE html>\n            <html lang="en">\n            <head>\n                '.concat(i.title.toString(),"\n                ").concat(i.meta.toString(),"\n                <style>").concat(a,'</style>\n            </head>\n            <body>\n                <div id="root">').concat(o,"</div>\n                <script>\n                        window.content = {\n                            state: ").concat(JSON.stringify(t.getState()),'\n                        }\n                <\/script>\n                <script src="/index.js"><\/script>\n            </body>\n            </html>\n        ')},C=n(10),k=n(15),_=n.n(k),L=n(1),j=n.n(L),O={name:"dell lee111",newsList:[]},q={login:!0},S=function(t){return{type:"CHANGE_LOGIN",value:t}},N=function(){return function(t,e,n){return n.get("/api/login.json").then(function(e){t(S(!0))})}},H=function(){return function(t,e,n){return n.get("/api/logout.json").then(function(e){t(S(!1))})}},R=function(){return function(t,e,n){return n.get("/api/isLogin.json").then(function(e){t(S(e.data.data.login))})}},A={translationList:[]},w=n(11),M=n.n(w),T={params:{secret:"PP87ANTIPIRATE"}},D=(M.a.create(j()({baseURL:"/"},T)),function(t){return M.a.create(j()({baseURL:"http://47.95.113.63/ssr",headers:{cookie:t.get("cookie")}},T))}),P=Object(C.combineReducers)({home:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"HOME_CHANGE":return j()({},t,{newsList:e.list});default:return t}},header:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_LOGIN":return j()({},t,{login:e.value});default:return t}},translationList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TRANSLATION_CHANGE":return j()({},t,{translationList:e.list});default:return t}}}),I=function(t){return Object(C.createStore)(P,Object(C.applyMiddleware)(_.a.withExtraArgument(D(t))))},G=n(2),U=n.n(G),F=n(3),B=n.n(F),J=n(4),Q=n.n(J),W=n(5),z=n.n(W),Y=n(6),K=n.n(Y),V=n(16),X=n.n(V),Z=function(t,e){return function(n){function r(){return U()(this,r),Q()(this,z()(r).apply(this,arguments))}return K()(r,n),B()(r,[{key:"componentWillMount",value:function(){this.props.staticContext&&this.props.staticContext.css.push(e._getCss())}},{key:"render",value:function(){return g.a.createElement(t,this.props)}}]),r}(m.Component)},$=function(t){function e(){return U()(this,e),Q()(this,z()(e).apply(this,arguments))}return K()(e,t),B()(e,[{key:"componentDidMount",value:function(){this.props.list.length||this.props.getHomeList(!1)}},{key:"getList",value:function(){return this.props.list.map(function(t){return g.a.createElement("div",{key:t.id},t.title)})}},{key:"render",value:function(){return g.a.createElement(m.Fragment,null,g.a.createElement(b.Helmet,null,g.a.createElement("meta",{charSet:"utf-8"}),g.a.createElement("title",null,"这是标题"),g.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),g.a.createElement("div",{className:X.a.test},this.getList()))}}]),e}(m.Component);$.loadData=function(t){return t.dispatch(function(t,e,n){return n.get("/api/news.json").then(function(e){var n=e.data.data;t(function(t){return{type:"HOME_CHANGE",list:t}}(n))})})};var tt=Object(x.connect)(function(t){return{list:t.home.newsList}},function(t){return{getHomeList:function(){t(function(t,e,n){return n.get("/api/news.json").then(function(e){var n=e.data.data;t(function(t){return{type:"HOME_CHANGE",list:t}}(n))})})}}})(Z($,X.a)),et=function(t){return{type:"TRANSLATION_CHANGE",list:t}},nt=function(){return function(t,e,n){return n.get("/api/translations.json").then(function(e){if(e.data.success){var n=e.data.data;t(et(n))}else{t(et([]))}})}},rt=n(17),ot=n.n(rt),it=function(t){function e(){return U()(this,e),Q()(this,z()(e).apply(this,arguments))}return K()(e,t),B()(e,[{key:"componentDidMount",value:function(){this.props.list.length||this.props.getTranslationList()}},{key:"getList",value:function(){var t=this.props.list;return console.log(t),t.map(function(t){return g.a.createElement("div",{key:t.id},t.title)})}},{key:"render",value:function(){return this.props.login?g.a.createElement(m.Fragment,null,g.a.createElement(b.Helmet,null,g.a.createElement("meta",{charSet:"utf-8"}),g.a.createElement("title",null,"翻译页面"),g.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),g.a.createElement("div",{className:ot.a.test},this.getList())):g.a.createElement(v.Redirect,{to:"/"})}}]),e}(m.Component);it.loadData=function(t){return t.dispatch(nt())};var at=Object(x.connect)(function(t){return{list:t.translationList.translationList,login:t.header.login}},function(t){return{getTranslationList:function(){t(nt())}}})(Z(it,ot.a)),ut=n(18),ct=n.n(ut),st=function(t){function e(){return U()(this,e),Q()(this,z()(e).apply(this,arguments))}return K()(e,t),B()(e,[{key:"render",value:function(){var t=this.props,e=t.login,n=t.handleLogin,r=t.handleLogout;return g.a.createElement("div",{className:ct.a.test},g.a.createElement(v.Link,{to:"/"},"首页"),g.a.createElement("br",null),e?g.a.createElement(m.Fragment,null,g.a.createElement(v.Link,{to:"/translation"},"翻译列表"),g.a.createElement("br",null),g.a.createElement("div",{onClick:r},"退出"),g.a.createElement("br",null)):g.a.createElement("div",{onClick:n},"登录"))}}]),e}(m.Component),lt=Object(x.connect)(function(t){return{login:t.header.login}},function(t){return{handleLogin:function(){t(r.login())},handleLogout:function(){t(r.logout())}}})(Z(st,ct.a)),ft=function(t){return g.a.createElement("div",null,g.a.createElement(lt,{staticContext:t.staticContext}),Object(p.renderRoutes)(t.route.routes))};ft.loadData=function(t){return t.dispatch(r.getHeadInfo())};var pt=ft,dt=function(t){function e(){return U()(this,e),Q()(this,z()(e).apply(this,arguments))}return K()(e,t),B()(e,[{key:"componentWillMount",value:function(){var t=this.props.staticContext;t&&(t.NotFound=!0)}},{key:"render",value:function(){return g.a.createElement("div",null,"404,sorry, page not found")}}]),e}(m.Component),ht=[{path:"/",component:pt,key:"Header",loadData:pt.loadData,routes:[{path:"/",component:tt,exact:!0,key:"home",loadData:tt.loadData},{path:"/translation",component:at,loadData:at.loadData,exact:!0,key:"translation"},{component:dt}]}],mt=(n(31),new s.a);mt.use(f()("public")),mt.use(h()("/api",{target:"http://47.95.113.63",rewrite:function(t){return"ssr"+t},changeOrigin:!0,logs:!0})),mt.use(function(){var t=u()(i.a.mark(function t(e){var n,r,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=I(e),r=Object(p.matchRoutes)(ht,e.path),o=[],r.forEach(function(t){if(t.route.loadData){var e=new Promise(function(e,r){t.route.loadData(n).then(e).catch(e)});o.push(e)}}),t.next=6,Promise.all(o).then(function(){var t={css:[]},r=E(n,ht,e,t);"REPLACE"==t.action?e.redirect(t.url):t.NotFound?(e.status=404,e.body=r):e.body=r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),mt.listen(4e3,function(){console.log("启动成功111")})}]);