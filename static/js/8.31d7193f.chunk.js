(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{216:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c(2),a=c(1),r=c(31),i=c(46),l=c(88),o=c(0);t.default=function(e){var t=e.Component,c=e.dataType,j=Object(n.g)().id,u=Object(a.useState)(null),b=Object(s.a)(u,2),d=b[0],O=b[1],h=Object(r.a)(),m=h.getComic,f=h.getCharacter,p=h.clearError,x=h.process,_=h.setProcess;Object(a.useEffect)((function(){k()}),[j]);var k=function(){switch(p(),c){case"comic":m(j).then(v).then((function(){return _("confirmed")}));break;case"character":f(j).then(v).then((function(){return _("confirmed")}))}},v=function(e){O(e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l.a,{}),Object(i.a)(x,t,d)]})}},46:function(e,t,c){"use strict";var s=c(9),n=c(25),a=(c(48),c(0)),r=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(a.jsx)(r,{});case"loading":return Object(a.jsx)(s.a,{});case"confirmed":return Object(a.jsx)(t,{data:c});case"error":return Object(a.jsx)(n.a,{});default:throw new Error("Unexpected process state")}}},48:function(e,t,c){}}]);
//# sourceMappingURL=8.31d7193f.chunk.js.map