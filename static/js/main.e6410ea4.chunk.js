(this["webpackJsonpfile-upload"]=this["webpackJsonpfile-upload"]||[]).push([[0],{19:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(13),i=a.n(c),r=(a(19),a(20),a(3)),l=a(14),o=a.n(l).a.create({baseURL:"http://localhost:8080",headers:{"Content-type":"application/json"}}),d=function(e,t){var a=new FormData;return a.append("file",e),o.post("/upload",a,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t})},u=function(){return o.get("/files")},j=a(0),b=function(){var e=Object(n.useState)(void 0),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(void 0),i=Object(r.a)(c,2),l=i[0],o=i[1],b=Object(n.useState)(0),h=Object(r.a)(b,2),p=h[0],f=h[1],O=Object(n.useState)(""),m=Object(r.a)(O,2),g=m[0],x=m[1],v=Object(n.useState)([]),N=Object(r.a)(v,2),C=N[0],y=N[1];return Object(n.useEffect)((function(){u().then((function(e){y(e.data)}))}),[]),Object(j.jsxs)("div",{children:[l&&Object(j.jsx)("div",{className:"progress",children:Object(j.jsxs)("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":p,"aria-valuemin":"0","aria-valuemax":"100",style:{width:p+"%"},children:[p,"%"]})}),Object(j.jsx)("label",{className:"btn btn-default",children:Object(j.jsx)("input",{type:"file",onChange:function(e){s(e.target.files)}})}),Object(j.jsx)("button",{className:"btn btn-success",disabled:!a,onClick:function(){var e=a[0];f(0),o(e),d(e,(function(e){f(Math.round(100*e.loaded/e.total))})).then((function(e){return x(e.data.message),u()})).then((function(e){y(e.data)})).catch((function(){f(0),x("Could not upload the file!"),o(void 0)})),s(void 0)},children:"Upload"}),Object(j.jsx)("div",{className:"alert alert-light",role:"alert",children:g}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-header",children:"List of Files"}),Object(j.jsx)("ul",{className:"list-group list-group-flush",children:C&&C.map((function(e,t){return Object(j.jsx)("li",{className:"list-group-item",children:Object(j.jsx)("a",{href:e.url,children:e.name})},t)}))})]})]})},h=function(){return Object(j.jsxs)("div",{className:"container",style:{width:"600px"},children:[Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("h3",{children:"Cargo"}),Object(j.jsx)("h4",{children:"File Upload"})]}),Object(j.jsx)(b,{})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.e6410ea4.chunk.js.map