(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{100:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var c,r,i,a,o=n(0),d=n.n(o),s=n(23),u=n.n(s),j=(n(99),n(4)),l=n(39),b=(n(100),n(40)),O=b.a.main(c||(c=Object(l.a)(["\nwidth: 600px;\nmargin: 0 auto;\n"]))),h=n(118),f=n(117),x=n(62),p=n(120),g=n(30),v=n.n(g),y=n(38),m="ADD_TODO",k="DELETE_TODO",T="EDIT_TODO",C="TOGGLE_TODO",D="ALL",E="COMPLETED",I="ACTIVE",w="SET_FILTER",A=function(e){return{type:w,filter:e}},S=n(8),L=function(e){var t=e.after,n=e.children;return t?Object(S.jsx)(M,{children:n}):Object(S.jsx)(M,{after:!0,children:n})},M=b.a.div(r||(r=Object(l.a)(["\ndisplay: flex;\njustify-content: space-between;\nmargin: 10px 0;\nbackground-color: ",";\npadding: 8px;\nborderRadius: 5px;\n"])),(function(e){return e.after?"pink":"beige"})),R=function(e){var t=e.todo,n=e.id,c=(e.currentFilter,Object(y.b)());var r=v()(t.deadline).format("MMMM Do YYYY"),i=v()(t.deadline).isAfter(v()());return Object(S.jsxs)(L,{after:i,children:[Object(S.jsx)("input",{style:{border:"none",background:"none",textDecoration:t.checked?"line-through":"none"},type:"text",value:t.text,onChange:function(e){c(function(e,t){return{type:T,id:e,text:t}}(n,e.target.value))}}),Object(S.jsx)("i",{style:{textDecoration:t.checked?"line-through":"none"},children:r}),Object(S.jsxs)("div",{children:[Object(S.jsx)(p.a,{checked:t.checked,style:{marginRight:10},onChange:function(e){c(function(e,t){return{type:C,id:e,value:t}}(n,e.target.checked))}}),Object(S.jsx)(x.a,{onClick:function(){c(function(e){return{type:k,id:e}}(n))},type:"primary",danger:!0,children:"delete"})]})]})},_=b.a.h1(i||(i=Object(l.a)(["\n  text-align: center;\n  margin-bottom: 10px;\n"]))),J=b.a.div(a||(a=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n"])));var Y=function(){var e=Object(o.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(""),i=Object(j.a)(r,2),a=i[0],d=i[1],s=Object(y.c)((function(e){return e.todos})),u=Object(y.c)((function(e){return e.filter})),l=Object(y.b)();return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(O,{children:[Object(S.jsx)(_,{children:"Todo List"}),Object(S.jsxs)(J,{children:[Object(S.jsx)(h.a,{value:n,onChange:function(e){return c(e.target.value)},placeholder:"type smth ...",style:{width:350}}),Object(S.jsx)(f.a,{value:a,onChange:function(e){d(e)}}),Object(S.jsx)(x.a,{onClick:function(){n&&a&&l(function(e,t){return{type:m,text:e,date:t}}(n,a))},type:"primary",children:"Add"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(p.a,{checked:u===D,style:{marginRight:10},onChange:function(){l(A(D))},children:"All"}),Object(S.jsx)(p.a,{checked:u===E,style:{marginRight:10},onChange:function(){l(A(E))},children:"Completed"}),Object(S.jsx)(p.a,{checked:u===I,style:{marginRight:10},onChange:function(){l(A(I))},children:"Active"})]}),Object(S.jsx)("div",{children:function(){switch(u){case D:return s;case E:return s.filter((function(e){return!0===e.checked}));case I:return s.filter((function(e){return!1===e.checked}));default:return s}}().map((function(e,t){return Object(S.jsx)(R,{id:e.id,todo:e},t)}))})]})})},N=(n(114),n(91)),F=n(63),G=n(1),B={todos:[],filter:D,nextTodoId:0},P=function(e){localStorage.setItem("state",JSON.stringify(e))},V=JSON.parse(localStorage.getItem("state")),q=Object(N.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V||B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=Object(G.a)(Object(G.a)({},e),{},{todos:[].concat(Object(F.a)(e.todos),[{id:e.nextTodoId++,text:t.text,deadline:t.date,checked:!1}]),nextTodoId:e.nextTodoId++});return P(n),n;case k:var c=Object(G.a)(Object(G.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});return P(c),c;case C:var r=Object(G.a)(Object(G.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(G.a)(Object(G.a)({},e),{},{checked:t.value}):e}))});return P(r),r;case T:var i=Object(G.a)(Object(G.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(G.a)(Object(G.a)({},e),{},{text:t.text}):e}))});return P(i),i;case w:var a=Object(G.a)(Object(G.a)({},e),{},{filter:t.filter});return P(a),a;default:return e}}));u.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(y.a,{store:q,children:Object(S.jsx)(Y,{})})}),document.getElementById("root"))},99:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.17a9e8d6.chunk.js.map