(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c,s=n(5),o=n.n(s),i=n(4),r=n(1),a=n(2),l=n.n(a),u=(n(10),n(11),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(r.useState)(c.NONE),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(r.useState)(!1),a=Object(i.a)(o,2),h=a[0],j=a[1],d=[].concat(b);return d.sort((function(t,e){switch(n){case c.ALPHABET:return t.localeCompare(e);case c.LENGTH:return t.length-e.length;default:return 0}})),h&&d.reverse(),Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==c.ALPHABET}),onClick:function(){return s(c.ALPHABET)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==c.LENGTH}),onClick:function(){return s(c.LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!h}),onClick:function(t){t.currentTarget.classList.toggle("is-light"),j(!h)},children:"Reverse"}),(n!==c.NONE||h)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return s(c.NONE),j(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:d.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.377ce246.chunk.js.map