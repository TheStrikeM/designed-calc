(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),initialState={example:"",result:""};__webpack_exports__.a=function(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,_ref=arguments.length>1?arguments[1]:void 0,type=_ref.type,payload=_ref.payload;switch(type){case"ADD_TO_EXAMPLE":return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{example:state.example+payload});case"SOLVE_EXAMPLE":try{return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{result:Math.round(eval(state.example),-1)})}catch(_unused){return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{result:""})}return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{result:""});case"CLEAR_EXAMPLE":return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{example:""});case"CLEAR_RESULT":return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{result:""});default:return state}}},17:function(e,t,_){},25:function(e,t,_){"use strict";_.r(t);var s=_(1),c=_.n(s),a=_(5),r=_.n(a),l=(_(17),function(e){return{type:"ADD_TO_EXAMPLE",payload:e}}),n=_(0);function o(e){var t=e.dispatch,_="light"==e.theme?"light":"dark";return Object(n.jsxs)("div",{class:"keyboard",children:[Object(n.jsx)("div",{class:"dec",children:Object(n.jsx)("img",{src:"http://localhost:9999/assets/"+_+"-polosa.svg",alt:""})}),Object(n.jsxs)("div",{class:"buttons",children:[Object(n.jsx)("div",{class:"button__c",onClick:function(){t({type:"CLEAR_RESULT"}),t({type:"CLEAR_EXAMPLE"})},children:"C"}),Object(n.jsx)("div",{class:"button__plmin",onClick:function(){return t(l("-"))},children:Object(n.jsx)("img",{src:"http://localhost:9999/assets/plmin.svg",alt:""})}),Object(n.jsx)("div",{class:"button__percent",onClick:function(){return t(l("%"))},children:Object(n.jsx)("img",{src:"http://localhost:9999/assets/percent.svg",alt:""})}),Object(n.jsx)("div",{class:"button__act",onClick:function(){return t(l("/"))},children:Object(n.jsx)("img",{src:"http://localhost:9999/assets/split.svg",alt:""})}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("7"))},children:"7"}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("8"))},children:"8"}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("9"))},children:"9"}),Object(n.jsx)("div",{class:"button__act",onClick:function(){return t(l("*"))},children:Object(n.jsx)("img",{src:"http://localhost:9999/assets/mult.svg",alt:""})}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("4"))},children:"4"}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("5"))},children:"5"}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("6"))},children:"6"}),Object(n.jsx)("div",{class:"button__act",onClick:function(){return t(l("-"))},children:Object(n.jsx)("img",{src:"http://localhost:9999/assets/-.svg",alt:""})}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("1"))},children:"1"}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("2"))},children:"2"}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("3"))},children:"3"}),Object(n.jsx)("div",{class:"button__act",onClick:function(){return t(l("+"))},children:Object(n.jsx)("img",{src:"http://localhost:9999/assets/+.svg",alt:""})}),Object(n.jsx)("div",{class:"button__null",onClick:function(){return t(l("0"))},children:"0"}),Object(n.jsx)("div",{class:"button__number",onClick:function(){return t(l("."))},children:"."}),Object(n.jsx)("div",{class:"button__result",onClick:function(){return t({type:"SOLVE_EXAMPLE"})},children:"="})]})]})}var u=function(e){return{type:"SET_THEME",payload:e}};var i=function(e){var t=e.result,_=e.example,s=e.dispatch,c="light"==e.theme?"light":"dark";return Object(n.jsxs)("div",{class:"result",children:[Object(n.jsxs)("div",{class:"controller",children:[Object(n.jsx)("img",{src:"http://localhost:9999/assets/"+c+"-moon.svg",onClick:function(){return s(u("dark"))},alt:"",class:"controller__item"}),Object(n.jsx)("img",{src:"http://localhost:9999/assets/"+c+"-sun.svg",onClick:function(){return s(u("light"))},alt:"",class:"controller__item"})]}),Object(n.jsx)("div",{class:"result__sample",children:_}),Object(n.jsx)("div",{class:"result__result",children:t})]})};var b=function(e){var t=e.dispatch,_=e.theme,s=e.result,c=e.example;return Object(n.jsx)("div",{class:"wrapper",style:"light"==_?{background:"black"}:{background:"white"},children:Object(n.jsxs)("div",{class:_,children:[Object(n.jsx)(i,{result:s,example:c,dispatch:t,theme:_}),Object(n.jsx)(o,{dispatch:t,theme:_})]})})},d=_(4);var p=function(){var e=Object(d.c)((function(e){var t=e.result,_=e.theme;return{result:t.result,example:t.example,theme:_.theme}})),t=e.result,_=e.theme,s=e.example,c=Object(d.b)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(b,{result:t,theme:_,example:s,dispatch:c})})},j=_(3),m=_(2),h={theme:"light"},O=_(10),E=Object(j.c)({theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,_=t.type,s=t.payload;switch(_){case"SET_THEME":return Object(m.a)(Object(m.a)({},e),{},{theme:s});default:return e}},result:O.a}),x=_(12),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,D=Object(j.e)(E,v(Object(j.a)(x.a)));window.store=D;var C=D;r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(d.a,{store:C,children:Object(n.jsx)(p,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.12d31481.chunk.js.map