(this["webpackJsonpfile-upload"]=this["webpackJsonpfile-upload"]||[]).push([[0],{19:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(13),r=a.n(c),i=(a(19),a(20),a(3)),l=a(14),o=a.n(l).a.create({baseURL:"http://localhost:8080",headers:{"Content-type":"application/json"}}),d=function(e,t,a){var n=new FormData;return n.append("image",e),n.append("user-token",t),o.post("/upload",n,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:a})},u=function(){return o.get("/files")},j=a(0),b=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(void 0),r=Object(i.a)(c,2),l=r[0],o=r[1],b=Object(n.useState)(0),h=Object(i.a)(b,2),p=h[0],f=h[1],O=Object(n.useState)(""),g=Object(i.a)(O,2),m=g[0],v=g[1],x=Object(n.useState)([]),N=Object(i.a)(x,2),C=N[0],y=N[1];return Object(n.useEffect)((function(){u().then((function(e){y(e.data)}))}),[]),Object(j.jsxs)("div",{children:[l&&Object(j.jsx)("div",{className:"progress",children:Object(j.jsxs)("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":p,"aria-valuemin":"0","aria-valuemax":"100",style:{width:p+"%"},children:[p,"%"]})}),Object(j.jsx)("label",{className:"btn btn-default",children:Object(j.jsx)("input",{type:"file",onChange:function(e){console.log(typeof e.target.files),s(e.target.files)}})}),Object(j.jsx)("button",{className:"btn btn-success",disabled:!a,onClick:function(){var e=a[0];f(0),o(e),d(e,(function(e){f(Math.round(100*e.loaded/e.total))})).then((function(e){return v(e.data.message),u()})).then((function(e){y(e.data)})).catch((function(){f(0),v("Could not upload the file!"),o(void 0)})),s(void 0)},children:"Subir"}),Object(j.jsx)("div",{className:"alert alert-light",role:"alert",children:m}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-header",children:"List of Files"}),Object(j.jsx)("ul",{className:"list-group list-group-flush",children:C&&C.map((function(e,t){return Object(j.jsx)("li",{className:"list-group-item",children:Object(j.jsx)("a",{href:e.url,children:e.name})},t)}))})]})]})},h=function(){return Object(j.jsxs)("div",{className:"container",style:{width:"600px"},children:[Object(j.jsx)("div",{className:"my-3",children:Object(j.jsx)("h3",{children:"Cargo"})}),Object(j.jsx)(b,{})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.745cdb98.chunk.js.map