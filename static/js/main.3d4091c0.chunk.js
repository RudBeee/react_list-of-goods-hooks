(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(4),s=n.n(c),o=n(3),i=n(1),r=(n(9),n(10),n(0)),a=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(i.useState)(0),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),l=Object(o.a)(s,2),u=l[0],b=l[1],h=[].concat(a);h.sort((function(t,e){switch(n){case 1:return t.localeCompare(e);case 2:return t.length-e.length;default:return 1}})),u&&h.reverse();var j=a.toString()===h.toString(),d=Object(r.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return c(0),b(!1)},children:"Reset"});return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:"button is-info ".concat(1===n?"":"is-light"),onClick:function(){return c(1)},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:"button is-success ".concat(2===n?"":"is-light"),onClick:function(){return c(2)},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:"button is-warning ".concat(u?"":"is-light"),onClick:function(t){t.currentTarget.classList.toggle("is-light"),b(!u)},children:"Reverse"}),j?"":d]}),Object(r.jsx)("ul",{children:Object(r.jsx)("ul",{children:h.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};s.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3d4091c0.chunk.js.map