(this["webpackJsonpfile-upload"]=this["webpackJsonpfile-upload"]||[]).push([[0],{19:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(13),r=a.n(c),i=(a(19),a(20),a(3)),o=a(14),l=a.n(o).a.create({baseURL:"http://localhost:8080",headers:{"Content-type":"application/json"}}),d=function(e,t,a){var n=new FormData;return n.append("image",e),n.append("user-token",t),l.post("/upload",n,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:a})},u=function(){return l.get("/files")},b=a(0),j=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(void 0),r=Object(i.a)(c,2),o=r[0],l=r[1],j=Object(n.useState)(0),p=Object(i.a)(j,2),h=p[0],f=p[1],O=Object(n.useState)(""),g=Object(i.a)(O,2),v=g[0],m=g[1],x=Object(n.useState)([]),C=Object(i.a)(x,2),y=(C[0],C[1]);return Object(b.jsxs)("div",{children:[o&&Object(b.jsx)("div",{className:"progress",children:Object(b.jsxs)("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":h,"aria-valuemin":"0","aria-valuemax":"100",style:{width:h+"%"},children:[h,"%"]})}),Object(b.jsx)("label",{className:"btn btn-default",children:Object(b.jsx)("input",{type:"file",onChange:function(e){console.log(typeof e.target.files),s(e.target.files)}})}),Object(b.jsx)("button",{className:"btn btn-success",disabled:!a,onClick:function(){var e=a[0];f(0),l(e),d(e,(function(e){f(Math.round(100*e.loaded/e.total))})).then((function(e){return m(e.data.message),u()})).then((function(e){y(e.data)})).catch((function(){f(0),m("Could not upload the file!"),l(void 0)})),s(void 0)},children:"Subir"}),Object(b.jsx)("div",{className:"alert alert-light",role:"alert",children:v})]})},p=function(){return Object(b.jsxs)("div",{className:"container",style:{width:"600px"},children:[Object(b.jsx)("div",{className:"my-3",children:Object(b.jsx)("h3",{children:"Cargo"})}),Object(b.jsx)(j,{})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.d1860995.chunk.js.map