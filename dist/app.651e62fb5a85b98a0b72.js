webpackJsonp([5],{0:function(e,t,n){e.exports=n("lVK7")},"2cW/":function(e,t,n){e.exports=function(e){n.e(3).then(function(t){e(n("0WGl"))}.bind(null,n)).catch(n.oe)}},"4ufr":function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}t.__esModule=!0;var o=r();o.withExtraArgument=r,t.default=o},"6I0C":function(e,t,n){e.exports=function(e){n.e(1).then(function(t){e(n("1saR"))}.bind(null,n)).catch(n.oe)}},BVBi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUserInfo=function(){return function(e){return e({type:r}),fetch("http://localhost:8081/api/user.json").then(function(e){return e.json()}).then(function(t){e({type:o,userInfo:t})}).catch(function(){e({type:u})})}};var r=t.GET_USER_INFO_REQ="userInfo/request",o=t.GET_USER_INFO_SUC="userInfo/success",u=t.GET_USER_INFO_FAL="userInfo/failed"},"C+gl":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch(arguments[1].type){case r.INCREMENT:return{count:e.count+1};case r.DECREMENT:return{count:e.count-1};case r.RESET:return{count:0};default:return e}};var r=n("oTjF"),o={count:0}},"GQ+1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("GiK3"),u=l(o),c=l(n("yWdI"));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement(c.default,null)}}]),t}();t.default=a},PDYz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.GET_USER_INFO_REQ:return{isLoading:!0,userInfo:{},errorMsg:""};case r.GET_USER_INFO_SUC:return{isLoading:!1,userInfo:t.userInfo,errorMsg:""};case r.GET_USER_INFO_FAL:return{isLoading:!1,userInfo:{},errorMsg:"请求错误"};default:return e}};var r=n("BVBi"),o={isLoading:!1,userInfo:{},errorMsg:""}},PGiq:function(e,t,n){e.exports=function(e){n.e(0).then(function(t){e(n("26LQ"))}.bind(null,n)).catch(n.oe)}},WqZW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Ol7m"),o=c(n("qCuJ")),u=c(n("4ufr"));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.createStore)(o.default,(0,r.applyMiddleware)(u.default));console.log(l.getState()),t.default=l},WtOT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("GiK3"),c=(r=u)&&r.__esModule?r:{default:r};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){return c.default.createElement("div",null,"Loading...")}}]),t}();t.default=l},gYwO:function(e,t,n){e.exports=function(e){n.e(2).then(function(t){e(n("+e9Q"))}.bind(null,n)).catch(n.oe)}},gf5I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("GiK3");(r=u)&&r.__esModule;function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={mod:null},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.load!==this.props.load&&this.load(e)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})}},{key:"render",value:function(){return this.props.children(this.state.mod)}}]),t}();t.default=l},lVK7:function(e,t,n){"use strict";var r=a(n("GiK3")),o=a(n("O27J")),u=a(n("GQ+1")),c=n("RH2O"),l=a(n("WqZW"));function a(e){return e&&e.__esModule?e:{default:e}}o.default.render(r.default.createElement(c.Provider,{store:l.default},r.default.createElement(u.default,null)),document.getElementById("app"))},oTjF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.increment=function(){return{type:r}},t.decrement=function(){return{type:o}},t.reset=function(){return{type:u}};var r=t.INCREMENT="counter/INCREMENT",o=t.DECREMENT="counter/DECREMENT",u=t.RESET="counter/RESET"},qCuJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n("C+gl")),o=c(n("PDYz")),u=n("Ol7m");function c(e){return e&&e.__esModule?e:{default:e}}t.default=(0,u.combineReducers)({counter:r.default,userInfo:o.default})},yWdI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("GiK3"),u=d(o),c=n("F8kA"),l=d(n("gf5I")),a=d(n("gYwO")),i=d(n("PGiq")),f=d(n("2cW/")),s=d(n("6I0C")),p=d(n("WtOT"));function d(e){return e&&e.__esModule?e:{default:e}}var y=function(e){return function(t){return u.default.createElement(l.default,{load:e},function(e){return e?u.default.createElement(e,t):u.default.createElement(p.default,null)})}},_=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement(c.BrowserRouter,null,u.default.createElement("div",null,u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/"},"Home")),u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/page1"},"Page1")),u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/counter"},"Counter")),u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/userinfo"},"UserInfo"))),u.default.createElement(c.Switch,null,u.default.createElement(c.Route,{exact:!0,path:"/",component:y(a.default)}),u.default.createElement(c.Route,{path:"/page1",component:y(i.default)}),u.default.createElement(c.Route,{path:"/counter",component:y(f.default)}),u.default.createElement(c.Route,{path:"/userinfo",component:y(s.default)}))))}}]),t}();t.default=_}},[0]);