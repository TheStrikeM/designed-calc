(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),initialState={example:"",result:""};__webpack_exports__.a=function(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,_ref=arguments.length>1?arguments[1]:void 0,type=_ref.type,payload=_ref.payload;switch(type){case"ADD_TO_EXAMPLE":return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{example:state.example+payload});case"SOLVE_EXAMPLE":try{return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{result:Math.round(eval(state.example),-1)})}catch(_unused){return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{result:""})}return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{result:""});case"CLEAR_EXAMPLE":return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{example:""});case"CLEAR_RESULT":return Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_ReactApps_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{result:""});default:return state}}},17:function(e,t,_){},25:function(e,t,_){"use strict";_.r(t);var c=_(1),s=_.n(c),r=_(5),n=_.n(r),a=(_(17),function(e){return{type:"ADD_TO_EXAMPLE",payload:e}}),l=_(0);function i(e){var t=e.dispatch,_="light"==e.theme?"light":"dark";return Object(l.jsxs)("div",{class:"keyboard",children:[Object(l.jsx)("div",{class:"dec",children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/"+_+"-polosa.svg",alt:""})}),Object(l.jsxs)("div",{class:"buttons",children:[Object(l.jsx)("div",{class:"button__c",onClick:function(){t({type:"CLEAR_RESULT"}),t({type:"CLEAR_EXAMPLE"})},children:"C"}),Object(l.jsx)("div",{class:"button__plmin",onClick:function(){return t(a("-"))},children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/plmin.svg",alt:""})}),Object(l.jsx)("div",{class:"button__percent",onClick:function(){return t(a("%"))},children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/percent.svg",alt:""})}),Object(l.jsx)("div",{class:"button__act",onClick:function(){return t(a("/"))},children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/split.svg",alt:""})}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("7"))},children:"7"}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("8"))},children:"8"}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("9"))},children:"9"}),Object(l.jsx)("div",{class:"button__act",onClick:function(){return t(a("*"))},children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/mult.svg",alt:""})}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("4"))},children:"4"}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("5"))},children:"5"}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("6"))},children:"6"}),Object(l.jsx)("div",{class:"button__act",onClick:function(){return t(a("-"))},children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/-.svg",alt:""})}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("1"))},children:"1"}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("2"))},children:"2"}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("3"))},children:"3"}),Object(l.jsx)("div",{class:"button__act",onClick:function(){return t(a("+"))},children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/+.svg",alt:""})}),Object(l.jsx)("div",{class:"button__null",onClick:function(){return t(a("0"))},children:"0"}),Object(l.jsx)("div",{class:"button__number",onClick:function(){return t(a("."))},children:"."}),Object(l.jsx)("div",{class:"button__result",onClick:function(){return t({type:"SOLVE_EXAMPLE"})},children:"="})]})]})}var u=function(e){return{type:"SET_THEME",payload:e}};var o=function(e){var t=e.result,_=e.example,c=e.dispatch,s="light"==e.theme?"light":"dark";return Object(l.jsxs)("div",{class:"result",children:[Object(l.jsxs)("div",{class:"controller",children:[Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/"+s+"-moon.svg",onClick:function(){return c(u("dark"))},alt:"",class:"controller__item"}),Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/"+s+"-sun.svg",onClick:function(){return c(u("light"))},alt:"",class:"controller__item"})]}),Object(l.jsx)("div",{class:"result__sample",children:_}),Object(l.jsx)("div",{class:"result__result",children:t})]})};var b=function(e){var t=e.dispatch,_=e.theme,c=e.result,s=e.example;return Object(l.jsx)("div",{class:"wrapper",style:"light"==_?{background:"black"}:{background:"white"},children:Object(l.jsxs)("div",{class:_,children:[Object(l.jsx)(o,{result:c,example:s,dispatch:t,theme:_}),Object(l.jsx)(i,{dispatch:t,theme:_})]})})},d=_(4);var p=function(){var e=Object(d.c)((function(e){var t=e.result,_=e.theme;return{result:t.result,example:t.example,theme:_.theme}})),t=e.result,_=e.theme,c=e.example,s=Object(d.b)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(b,{result:t,theme:_,example:c,dispatch:s})})},m=_(3),j=_(2),h={theme:"light"},O=_(10),E=Object(m.c)({theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,_=t.type,c=t.payload;switch(_){case"SET_THEME":return Object(j.a)(Object(j.a)({},e),{},{theme:c});default:return e}},result:O.a}),x=_(12),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,v=Object(m.e)(E,g(Object(m.a)(x.a)));window.store=v;var M=v;n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d.a,{store:M,children:Object(l.jsx)(p,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b3bde06f.chunk.js.map