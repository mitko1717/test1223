(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{17:function(t,e,c){},26:function(t,e,c){},27:function(t,e,c){},29:function(t,e,c){},35:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),s=c(19),r=c.n(s),o=(c(26),c(27),c(0)),i=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("p",{className:"header__text",children:"\u0421\u041f\u0418\u0421\u041e\u041a \u041f\u041e\u041a\u0423\u041f\u041e\u041a"})})},l=c(9),j=c(2),d=c(7),u=c(13),m=function(t){var e=t.name,c=t.total,a=t.price,n=t.src,s=t.decTotal,r=t.incTotal,i=t.deleteItem,l=t.i;return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{className:"item-img",children:Object(o.jsx)("img",{src:n,alt:n.name})}),Object(o.jsx)("h1",{children:e}),Object(o.jsxs)("div",{className:"amount",children:[Object(o.jsx)("p",{children:"\u041a\u041e\u041b-\u0412\u041e"}),Object(o.jsxs)("div",{className:"minus-plus",children:[Object(o.jsx)("button",{onClick:function(){s(l)},className:"minus",children:"\u2013"}),Object(o.jsx)("h2",{children:c}),Object(o.jsx)("button",{onClick:function(){r(l)},className:"plus",children:"+"})]})]}),Object(o.jsxs)("div",{className:"price",children:[0===c?c:c>0&&c<=2?c*a:c>=3&&c<5?c*a*.9:c*a*.85," \u20b4"]}),Object(o.jsx)("button",{onClick:function(){i(l)},className:"delete",children:"\u232b"})]})},b=(c(17),function(t){var e=Object(a.useState)(t.vegs),c=Object(u.a)(e,2),n=c[0],s=c[1],r=function(t){var e=Object(d.a)(n);e[t].total>0&&(e[t].total-=1,s(e))},i=function(t){var e=Object(d.a)(n);e[t].total+=1,s(e)},l=function(t){var e=Object(d.a)(n);e.splice(t,1),s(e)},j=n.map((function(t){return{product:t.name,type:!1===t.type?"\u0444\u0440\u0443\u043a\u0442":"\u043e\u0432\u043e\u0449",amount:t.total,totalPrice:0===t.total?t.total:t.total>0&&t.total<3?t.total*t.price:t.total>2&&t.total<5?t.total*t.price*.9:t.total*t.price*.85}})),b=n.reduce((function(t,e){return e.total>=3&&e.total<5?t+e.total*e.price*.9:e.total>=5?t+e.total*e.price*.85:t+e.total*e.price}),0);return Object(o.jsxs)("section",{className:"ren",children:[n.filter((function(t){return!t.type})).map((function(t,e){return Object(o.jsx)(m,{name:t.name,id:t.id,total:t.total,price:t.price,src:t.src,type:t.type,i:e,item:t,decTotal:r,incTotal:i,deleteItem:l,vegsArr:n,setVegsArr:s},t.id)})),Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-box",children:[Object(o.jsx)("div",{className:"footer-text",children:Object(o.jsxs)("div",{className:"sum",children:[Object(o.jsx)("strong",{children:"\u041e\u0411\u0429\u0410\u042f \u0421\u0423\u041c\u041c\u0410:"})," ",b," "," \u20b4"]})}),Object(o.jsx)("button",{onClick:function(){console.group(),console.log("\u0417\u0410\u041a\u0410\u0417:",JSON.stringify(j,null,5)),console.log("\u0421\u0423\u041c\u041c\u0410 \u0417\u0410\u041a\u0410\u0417\u0410:",b,"\u20b4"),console.groupEnd()},className:"footer-btn",children:"\u041e\u0424\u041e\u0420\u041c\u0418\u0422\u042c"})]})})]})}),p=function(t){var e=Object(a.useState)(t.vegs),c=Object(u.a)(e,2),n=c[0],s=c[1],r=function(t){var e=Object(d.a)(n);e[t].total>0&&(e[t].total-=1,s(e))},i=function(t){var e=Object(d.a)(n);e[t].total+=1,s(e),console.log(n)},l=function(t){var e=Object(d.a)(n);e.splice(t,1),s(e)},j=n.map((function(t){return{product:t.name,type:!1===t.type?"\u0444\u0440\u0443\u043a\u0442":"\u043e\u0432\u043e\u0449",amount:t.total,totalPrice:0===t.total?t.total:t.total>0&&t.total<3?t.total*t.price:t.total>2&&t.total<5?t.total*t.price*.9:t.total*t.price*.85}})),b=n.reduce((function(t,e){return e.total>=3&&e.total<5?t+e.total*e.price*.9:e.total>=5?t+e.total*e.price*.85:t+e.total*e.price}),0);return Object(o.jsxs)("section",{className:"vegs ren",children:[n.filter((function(t){return t.type})).map((function(t,e){return Object(o.jsx)(m,{name:t.name,id:t.id,total:t.total,price:t.price,src:t.src,type:t.type,i:e,item:t,totalPrice:t.totalPrice,decTotal:r,incTotal:i,deleteItem:l,vegsArr:n,setVegsArr:s},t.id)})),Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-box",children:[Object(o.jsx)("div",{className:"footer-text",children:Object(o.jsxs)("div",{className:"sum",children:[Object(o.jsx)("strong",{children:"\u041e\u0411\u0429\u0410\u042f \u0421\u0423\u041c\u041c\u0410:"})," ",b," "," \u20b4"]})}),Object(o.jsx)("button",{onClick:function(){console.group(),console.log("\u0417\u0410\u041a\u0410\u0417:",JSON.stringify(j,null,5)),console.log("\u0421\u0423\u041c\u041c\u0410 \u0417\u0410\u041a\u0410\u0417\u0410:",b,"\u20b4"),console.groupEnd()},className:"footer-btn",children:"\u041e\u0424\u041e\u0420\u041c\u0418\u0422\u042c"})]})})]})},h=(c(29),c.p+"static/media/pickle.3f3840fa.svg"),O=c.p+"static/media/tomato.0e114922.svg",x=c.p+"static/media/carrot.044eebf2.svg",f=c.p+"static/media/lemon.6e205030.svg",v=c.p+"static/media/cherry.d26607f7.svg",g=c.p+"static/media/apple.a9f2ff20.svg",N=[{name:"\u041e\u0413\u0423\u0420\u0415\u0426",src:h,price:220,total:2,id:Math.trunc(1e7*Math.random()),type:!0,totalPrice:""},{name:"\u041f\u041e\u041c\u0418\u0414\u041e\u0420",src:O,price:330,total:5,id:Math.trunc(1e7*Math.random()),type:!0,totalPrice:""},{name:"\u041c\u041e\u0420\u041a\u041e\u0412\u042c",src:x,price:110,total:2,id:Math.trunc(1e7*Math.random()),type:!0,totalPrice:""},{name:"\u0410\u041f\u0415\u041b\u042c\u0421\u0418\u041d",src:f,price:400,total:1,id:Math.trunc(1e7*Math.random()),type:!1,totalPrice:""},{name:"\u0412\u0418\u0428\u041d\u042f",src:v,price:300,total:4,id:Math.trunc(1e7*Math.random()),type:!1,totalPrice:""},{name:"\u042f\u0411\u041b\u041e\u041a\u041e",src:g,price:200,total:2,id:Math.trunc(1e7*Math.random()),type:!1,totalPrice:""}],y=function(){return Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"sales",children:[Object(o.jsxs)("h2",{children:[Object(o.jsx)("strong",{children:" \u0421\u041a\u0418\u0414\u041a\u0410 10% "})," \u041d\u0410 \u0422\u041e\u0412\u0410\u0420 \u041f\u0420\u0418 \u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u0415 3-\u0425 \u0415\u0414\u0418\u041d\u0418\u0426"]}),Object(o.jsxs)("h2",{children:[Object(o.jsx)("strong",{children:" \u0421\u041a\u0418\u0414\u041a\u0410 15%"})," \u041d\u0410 \u0422\u041e\u0412\u0410\u0420 \u041f\u0420\u0418 \u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u0415 5 \u0418 \u0411\u041e\u041b\u042c\u0428\u0415 \u0415\u0414\u0418\u041d\u0418\u0426"]})]}),Object(o.jsxs)(l.a,{children:[Object(o.jsx)("div",{className:"navlinks",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)(l.b,{activeClassName:"selected",className:"switcher",exact:!0,to:"/",children:"\u041e\u0412\u041e\u0429\u0418"}),Object(o.jsx)(l.b,{activeClassName:"selected",className:"switcher",to:"/fruits",children:"\u0424\u0420\u0423\u041a\u0422\u042b"})]})}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:function(){return Object(o.jsx)(p,{vegs:N})}}),Object(o.jsx)(j.a,{path:"/fruits",component:function(){return Object(o.jsx)(b,{vegs:N})}})]})]})]})};var M=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(i,{}),Object(o.jsx)(y,{})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.faf08ad9.chunk.js.map