(this["webpackJsonptwitch-queue"]=this["webpackJsonptwitch-queue"]||[]).push([[0],{69:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),o=n(31),r=n.n(o),a=n(33),i=n(32),l=(n(69),n(0));var u=function(){var e=Object(c.useState)([{username:"JanuZz_"}]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){console.log("Connecting to server...");var e=Object(i.io)("https://shadow-generated-jodhpur.glitch.me");return e.on("connect",(function(){console.log("Connected to "+e.id)})),e.on("queue",(function(e){s(e),console.log(e)})),function(){e.removeAllListeners("queue")}}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"bg-dark rounded p-2 fw-bolder lh-base shadow m-2",children:Object(l.jsx)("p",{className:"text-center fs-3 text-white",children:"Queue"})}),n.map((function(e,t){var n="Black",c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.color);c&&(parseInt(c[1],16)+parseInt(c[2],16)+parseInt(c[3],16)<382.5&&(n="White"));return Object(l.jsx)("div",{className:"d-flex flex-row justify-content-center align-items-center",children:Object(l.jsxs)("p",{className:"text-center fs-2 font-weight-bold personName outline"+n,style:{color:e.color},children:[Object(l.jsx)("b",{children:e.username})," ",e.mod?Object(l.jsx)("span",{className:"badge shadow",style:{backgroundColor:"#ff0000"},children:"MOD"}):"",Object(l.jsx)("p",{className:"text-center text-white fs-3",children:e.ign})]})})}))]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),o(e),r(e)}))};n(71);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),d()}},[[72,1,2]]]);
//# sourceMappingURL=main.74a115e6.chunk.js.map