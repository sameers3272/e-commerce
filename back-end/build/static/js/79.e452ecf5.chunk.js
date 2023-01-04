"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[79],{35663:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(80184),a=function(e){var t=e.children,n=e.className;return(0,r.jsx)("h1",{className:"h1 ".concat(n),children:t})}},23348:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),a=n(80184),c=function(e){var t=e.type,n=e.children,c=e.name,s=e.onChange,o=e.value,i=e.disabled,u=e.className,p=e.icon,d=e.placeholder,l=e.onClick,f=e.cols,v=e.rows,m=e.accept,h=e.options,x=(e.id,e.autoComplete);switch(t){case"text":case"number":return(0,a.jsxs)("div",{className:"input",children:[p,(0,a.jsx)("input",{type:t,required:!0,value:o,name:c,placeholder:d,className:u,onChange:s,autoComplete:x})]});case"select":return(0,a.jsxs)("div",{className:"input",children:[p,(0,a.jsx)("select",{required:!0,name:c,onChange:s,className:u,type:t,value:o,placeholder:d,autoComplete:x,children:n})]});case"textarea":return(0,a.jsxs)("div",{className:"input",children:[p,(0,a.jsx)("textarea",{type:t,required:!0,value:o,name:c,placeholder:d,className:u,onChange:s,cols:f,rows:v,autoComplete:x})]});case"file":return(0,a.jsxs)("div",{className:"input file",children:[(0,a.jsx)("input",(0,r.Z)((0,r.Z)({type:t},h),{},{name:c,accept:m,onChange:s})),n]});case"submit":return(0,a.jsx)("div",{className:"input",children:(0,a.jsx)("input",{type:t,value:o,className:"input ".concat(u),disabled:i,onClick:l})});default:return(0,a.jsxs)("div",{className:"input",children:[p,(0,a.jsx)("input",{type:"text",required:!0,value:o,name:c,placeholder:d,className:u,onChange:s,autoComplete:x})]})}}},82955:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(96338),a=n(11087),c=n(16856),s=n(78842),o=n(70912),i=n(80184),u=function(){return(0,i.jsxs)("div",{className:"sideBar",children:[(0,i.jsx)(a.Link,{to:"/",children:(0,i.jsx)("img",{src:r,alt:"Ecommerces"})}),(0,i.jsxs)(a.Link,{to:"/admin/dashboard",children:[(0,i.jsx)(c.bUq,{}),(0,i.jsx)("p",{children:"DashBoard"})]}),(0,i.jsx)(s.Z,{defaultCollapseIcon:(0,i.jsx)(c.Yc6,{}),defaultExpandIcon:(0,i.jsx)(c.x8E,{}),children:(0,i.jsxs)(o.Z,{nodeId:"1",label:"Products",children:[(0,i.jsx)(a.Link,{to:"/admin/products",children:(0,i.jsx)(o.Z,{nodeId:"2",label:"All",icon:(0,i.jsx)(c.cfK,{})})}),(0,i.jsx)(a.Link,{to:"/admin/product",children:(0,i.jsx)(o.Z,{nodeId:"3",label:"Create",icon:(0,i.jsx)(c.x06,{})})})]})}),(0,i.jsxs)(a.Link,{to:"/admin/orders",children:[(0,i.jsx)(c.r4W,{}),(0,i.jsx)("p",{children:"Orders"})]}),(0,i.jsxs)(a.Link,{to:"/admin/users",children:[(0,i.jsx)(c.J8I,{}),(0,i.jsx)("p",{children:"Users"})]}),(0,i.jsxs)(a.Link,{to:"/admin/reviews",children:[(0,i.jsx)(c._YV,{}),(0,i.jsx)("p",{children:"Reviews"})]})]})}},40079:function(e,t,n){n.r(t);var r=n(4942),a=n(1413),c=n(93433),s=n(29439),o=n(72791),i=n(56534),u=n(16856),p=n(7692),d=n(59434),l=n(57689),f=n(69452),v=n(51438),m=n(36548),h=n(6705),x=n(82955),y=n(28927),j=n(35663),g=n(23348),Z=n(80184);t.default=function(){var e=(0,l.s0)(),t=(0,d.I0)(),n=(0,i.VY)(),w=(0,d.v9)((function(e){return e.user})),k=w.user,C=w.isAuthenticated,b=(0,d.v9)((function(e){return e.newProduct})),N=b.loading,I=b.error,A=b.success,P=(0,o.useState)({name:"",price:0,description:"",category:"",stock:0}),L=(0,s.Z)(P,2),S=L[0],T=L[1],q=(0,o.useState)([]),D=(0,s.Z)(q,2),E=D[0],K=D[1],M=(0,o.useState)([]),O=(0,s.Z)(M,2),z=O[0],F=O[1],V=function(e){if("images"===e.target.name){var t=Array.from(e.target.files);K([]),F([]),t.forEach((function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&(F((function(e){return[].concat((0,c.Z)(e),[t.result])})),K((function(t){return[].concat((0,c.Z)(t),[e])})))},t.readAsDataURL(e)}))}else T((0,a.Z)((0,a.Z)({},S),{},(0,r.Z)({},e.target.name,e.target.value)))};return(0,o.useEffect)((function(){(0,m.l)(C,e),(0,m.C)(!0,k,e,n),I&&(n.error(I),t((0,f.b9)())),A&&(n.success("Product Created Successfully"),e("/admin/dashboard"),t({type:v.Q5}))}),[C,e,k,n,t,I,A]),N?(0,Z.jsx)(y.Z,{}):(0,Z.jsxs)(o.Fragment,{children:[(0,Z.jsx)(h.Z,{title:"Create Product"}),(0,Z.jsxs)("div",{className:"dashboard",children:[(0,Z.jsx)(x.Z,{}),(0,Z.jsxs)("div",{className:"newProductContainer",children:[(0,Z.jsx)(j.Z,{children:"Create Product"}),(0,Z.jsxs)("form",{className:"form",encType:"multipart/form-data",onSubmit:function(e){e.preventDefault();var n=new FormData;n.set("name",S.name),n.set("price",S.price),n.set("description",S.description),n.set("category",S.category),n.set("stock",S.stock),E.forEach((function(e){n.append("images",e)})),t((0,f.si)(n))},children:[(0,Z.jsx)(g.Z,{icon:(0,Z.jsx)(u.Du2,{}),type:"text",placeholder:"Product Name",name:"name",value:S.name,onChange:V}),(0,Z.jsx)(g.Z,{icon:(0,Z.jsx)(p.lQC,{}),type:"number",name:"price",placeholder:"Price",required:!0,onChange:V}),(0,Z.jsx)(g.Z,{icon:(0,Z.jsx)(u.aHI,{}),type:"textarea",name:"description",placeholder:"Product Description",value:S.description,cols:"30",rows:"1",onChange:V}),(0,Z.jsxs)(g.Z,{type:"select",icon:(0,Z.jsx)(u.xIQ,{}),value:S.category,name:"category",onChange:V,children:[(0,Z.jsx)("option",{value:"",children:"Select Category"}),["Laptop","Footwear","Bottom","Top","Attire","Camera","SmartPhone"].map((function(e,t){return(0,Z.jsx)("option",{value:e,children:e},t)}))]}),(0,Z.jsx)(g.Z,{icon:(0,Z.jsx)(u.WMK,{}),type:"number",name:"stock",placeholder:"Stock",onChange:V}),(0,Z.jsx)(g.Z,{type:"file",options:{multiple:!0},name:"images",accept:"image/*",onChange:V,children:(0,Z.jsx)("div",{id:"imagePreview",children:z.map((function(e,t){return(0,Z.jsx)("img",{src:e,alt:"Avatar Preview"},t)}))})}),(0,Z.jsx)(g.Z,{type:"submit",value:"Create",disabled:!!N})]})]})]})]})}},6705:function(e,t,n){var r=n(54270),a=n(80184);t.Z=function(e){var t=e.title;return(0,a.jsx)(r.Z,{children:(0,a.jsx)("title",{children:t})})}},69452:function(e,t,n){n.d(t,{Ir:function(){return l},Mm:function(){return m},Oq:function(){return u},b9:function(){return x},i0:function(){return h},jn:function(){return p},nM:function(){return v},rK:function(){return d},si:function(){return f},wv:function(){return i}});var r=n(74165),a=n(15861),c=n(74569),s=n.n(c),o=n(51438),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,25e3],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return function(){var u=(0,a.Z)((0,r.Z)().mark((function a(u){var p,d,l;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u({type:o.Ty}),p="/api/v1/products?keyword=".concat(e,"&page=").concat(t,"&price[gte]=").concat(n[0],"&price[lte]=").concat(n[1],"&ratings[gte]=").concat(i),c&&(p="/api/v1/products?keyword=".concat(e,"&page=").concat(t,"&price[gte]=").concat(n[0],"&price[lte]=").concat(n[1],"&category=").concat(c,"&ratings[gte]=").concat(i)),r.next=6,s().get(p);case 6:d=r.sent,l=d.data,u({type:o.js,payload:l}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),u({type:o.Vh,payload:{error:r.t0.response.data.message}});case 14:case"end":return r.stop()}}),a,null,[[0,11]])})));return function(e){return u.apply(this,arguments)}}()},u=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:o.Iq}),e.next=4,s().get("/api/v1/admin/products");case 4:n=e.sent,a=n.data,t({type:o.AT,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:o.zH,payload:{error:e.t0.response.data.message}});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.pb}),t.next=4,s().get("/api/v1/product/".concat(e));case 4:a=t.sent,c=a.data,n({type:o.iu,payload:c.product}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:o.jM,payload:{error:t.t0.response.data.message}});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.zK}),a={headers:{"Content-Type":"application/json"}},t.next=5,s().put("/api/v1/review",e,a);case 5:c=t.sent,i=c.data,n({type:o.Yu,payload:i.success}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:o.V_,payload:{error:t.t0.response.data.message}});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.bi}),t.next=4,s().delete("/api/v1/admin/product/".concat(e));case 4:a=t.sent,c=a.data,n({type:o.cO,payload:c.success}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:o.IX,payload:{error:t.t0.response.data.message}});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.TK}),a={headers:{"Content-Type":"multipart/form-data"}},t.next=5,s().post("/api/v1/admin/product/new",e,a);case 5:c=t.sent,i=c.data,n({type:o.Cy,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:o.J$,payload:{error:t.t0.response.data.message}});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var c,i,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:o.L7}),c={headers:{"Content-Type":"multipart/form-data"}},n.next=5,s().put("/api/v1/admin/product/".concat(e),t,c);case 5:i=n.sent,u=i.data,a({type:o.zk,payload:u.success}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a({type:o.ki,payload:{error:n.t0.response.data.message}});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},m=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.OM}),t.next=4,s().get("/api/v1/admin/reviews?productId=".concat(e));case 4:a=t.sent,c=a.data,n({type:o.aK,payload:c.reviews}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:o.NM,payload:{error:t.t0.response.data.message}});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var c,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:o.fz}),n.next=4,s().delete("/api/v1/admin/reviews?id=".concat(e,"&productId=").concat(t));case 4:c=n.sent,i=c.data,a({type:o.g6,payload:i.success}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a({type:o.Om,payload:{error:n.t0.response.data.message}});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},x=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:o.pp});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},36548:function(e,t,n){n.d(t,{C:function(){return a},l:function(){return r}});var r=function(e,t){void 0!==e&&setTimeout((function(){!1===e&&(console.log("userAuth",e),t("/login"))}),500)},a=function(e,t,n,r){!0===e&&t&&void 0!==t.role&&"admin"!==t.role&&(console.log("adminAuth"),n("/login"),r.error("Cannot Access Admin Authorities"))}}}]);
//# sourceMappingURL=79.e452ecf5.chunk.js.map