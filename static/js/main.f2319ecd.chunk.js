(this["webpackJsonpreact-hooks-demo"]=this["webpackJsonpreact-hooks-demo"]||[]).push([[0],{12:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),s=n(2),u=n(11),i=n.n(u),l=n(5),m=n.n(l);function f(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!0),u=Object(s.a)(o,2),i=u[0],l=u[1];return Object(a.useEffect)((function(){!function(){var t,n,a;m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.awrap(fetch(e));case 2:return t=r.sent,r.next=5,m.a.awrap(t.json());case 5:n=r.sent,"message"in(a=JSON.parse(JSON.stringify(n)))||(c(a),l(!1));case 8:case"end":return r.stop()}}))}()}),[e]),[r,i]}n(20);var p=function(e){return console.log("Jumped to profile number: "+e.count),r.a.createElement("div",{className:"profiles"},r.a.createElement("img",{className:"profile-image",src:e.users[e.count].avatar_url,alt:""}),r.a.createElement("div",{className:"username"},r.a.createElement("a",{href:e.users[e.count].html_url},e.users[e.count].login.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})))))},d=(n(21),n(9),n(4)),h=n(3);var v=function(e){var t=f("https://api.github.com/users/".concat(e.users[e.count].login,"/repos")),n=Object(s.a)(t,2),a=n[0];return n[1]?r.a.createElement("div",null):r.a.createElement("div",{className:"repos"},r.a.createElement("hr",null),a.sort((function(e,t){return e.stargazers_count<t.stargazers_count?1:-1})).map((function(e){return r.a.createElement("div",{className:"repo",key:e.id},r.a.createElement("a",{href:e.html_url},r.a.createElement(h.a,{icon:d.c})," ",e.stargazers_count," - ",e.name))})).slice(0,5))};n(27),n(28);var E=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],o=f("https://api.github.com/users"),u=Object(s.a)(o,2),l=u[0],m=u[1],E=m?0:Number(JSON.parse(JSON.stringify(l)).length),g=function(){c((function(e){return e===E-1?0:e+1}))},b=function(){c((function(e){return 0===e?E-1:e-1}))};return i()((function(e){39===e?g():37===e&&b()}),{detectKeys:[39,37]}),m?r.a.createElement("div",{className:"loading"},r.a.createElement("div",null)):r.a.createElement("div",{className:"card animate-bottom"},r.a.createElement(h.a,{className:"left-arrow button",icon:d.a,size:"3x",onClick:b})," ",r.a.createElement("div",{className:"content"},r.a.createElement(p,{users:l,count:n}),r.a.createElement(v,{users:l,count:n})),r.a.createElement(h.a,{className:"right-arrow button",icon:d.b,size:"3x",onClick:g})," ")};n(29);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.f2319ecd.chunk.js.map