"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[706],{35663:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(80184),a=function(e){var n=e.children,t=e.className;return(0,r.jsx)("h1",{className:"h1 ".concat(t),children:n})}},23348:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(80184),c=function(e){var n=e.type,t=e.children,c=e.name,s=e.onChange,i=e.value,o=e.disabled,u=e.className,l=e.icon,d=e.placeholder,p=e.onClick,f=e.cols,v=e.rows,h=e.accept,m=e.options,x=(e.id,e.autoComplete);switch(n){case"text":case"number":return(0,a.jsxs)("div",{className:"input",children:[l,(0,a.jsx)("input",{type:n,required:!0,value:i,name:c,placeholder:d,className:u,onChange:s,autoComplete:x})]});case"select":return(0,a.jsxs)("div",{className:"input",children:[l,(0,a.jsx)("select",{required:!0,name:c,onChange:s,className:u,type:n,value:i,placeholder:d,autoComplete:x,children:t})]});case"textarea":return(0,a.jsxs)("div",{className:"input",children:[l,(0,a.jsx)("textarea",{type:n,required:!0,value:i,name:c,placeholder:d,className:u,onChange:s,cols:f,rows:v,autoComplete:x})]});case"file":return(0,a.jsxs)("div",{className:"input file",children:[(0,a.jsx)("input",(0,r.Z)((0,r.Z)({type:n},m),{},{name:c,accept:h,onChange:s})),t]});case"submit":return(0,a.jsx)("div",{className:"input",children:(0,a.jsx)("input",{type:n,value:i,className:"input ".concat(u),disabled:o,onClick:p})});default:return(0,a.jsxs)("div",{className:"input",children:[l,(0,a.jsx)("input",{type:"text",required:!0,value:i,name:c,placeholder:d,className:u,onChange:s,autoComplete:x})]})}}},82955:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(96338),a=t(11087),c=t(16856),s=t(78842),i=t(70912),o=t(80184),u=function(){return(0,o.jsxs)("div",{className:"sideBar",children:[(0,o.jsx)(a.Link,{to:"/",children:(0,o.jsx)("img",{src:r,alt:"Ecommerces"})}),(0,o.jsxs)(a.Link,{to:"/admin/dashboard",children:[(0,o.jsx)(c.bUq,{}),(0,o.jsx)("p",{children:"DashBoard"})]}),(0,o.jsx)(s.Z,{defaultCollapseIcon:(0,o.jsx)(c.Yc6,{}),defaultExpandIcon:(0,o.jsx)(c.x8E,{}),children:(0,o.jsxs)(i.Z,{nodeId:"1",label:"Products",children:[(0,o.jsx)(a.Link,{to:"/admin/products",children:(0,o.jsx)(i.Z,{nodeId:"2",label:"All",icon:(0,o.jsx)(c.cfK,{})})}),(0,o.jsx)(a.Link,{to:"/admin/product",children:(0,o.jsx)(i.Z,{nodeId:"3",label:"Create",icon:(0,o.jsx)(c.x06,{})})})]})}),(0,o.jsxs)(a.Link,{to:"/admin/orders",children:[(0,o.jsx)(c.r4W,{}),(0,o.jsx)("p",{children:"Orders"})]}),(0,o.jsxs)(a.Link,{to:"/admin/users",children:[(0,o.jsx)(c.J8I,{}),(0,o.jsx)("p",{children:"Users"})]}),(0,o.jsxs)(a.Link,{to:"/admin/reviews",children:[(0,o.jsx)(c._YV,{}),(0,o.jsx)("p",{children:"Reviews"})]})]})}},74706:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(29439),a=t(56534),c=t(26513),s=t(81814),i=t(72791),o=t(16856),u=t(59434),l=t(57689),d=t(69452),p=t(51438),f=t(36548),v=t(6705),h=t(82955),m=t(35663),x=t(23348),y=t(80184),j=function(){var e=(0,l.s0)(),n=(0,u.I0)(),t=(0,a.VY)(),j=(0,u.v9)((function(e){return e.user})),g=j.isAuthenticated,Z=j.user,w=(0,u.v9)((function(e){return e.getAllReviews})),k=w.error,b=w.reviews,C=(0,u.v9)((function(e){return e.review})),N=C.error,I=C.isDeleted,A=(0,i.useState)(""),R=(0,r.Z)(A,2),q=R[0],L=R[1],M=[{field:"id",headerName:"Review Id",flex:.7,minWidth:180},{field:"user",headerName:"User",flex:.5,minWidth:150},{field:"comment",headerName:"Comment",flex:1,minWidth:250},{field:"rating",headerName:"Rating",type:"number",flex:.4,minWidth:130,cellClassName:function(e){return e.getValue(e.id,"rating")>3?"greenColor":"redColor"}},{field:"actions",headerName:"Actions",flex:.4,minWidth:130,type:"number",sortable:!1,renderCell:function(e){return(0,y.jsx)(i.Fragment,{children:(0,y.jsx)(c.Z,{onClick:function(){return t=e.getValue(e.id,"id"),void n((0,d.i0)(t,q));var t},children:(0,y.jsx)(o.ZkW,{})})})}}],T=[];return b&&b.length>0&&b.forEach((function(e){T.push({id:e._id,user:e.name,comment:e.comment,rating:e.rating})})),(0,i.useEffect)((function(){(0,f.l)(g,e),(0,f.C)(!0,Z,e,t),n({type:p.bF}),24===q.length&&n((0,d.Mm)(q)),N&&(t.error(N),n((0,d.b9)())),k&&(t.error(k),n((0,d.b9)())),I&&(t.success("Review Deleted Successfully"),(0,d.Mm)(q),n({type:p.qD}))}),[g,e,t,q,Z,n,N,k,I]),(0,y.jsxs)(i.Fragment,{children:[(0,y.jsx)(v.Z,{title:"All Reviews - Admin"}),(0,y.jsxs)("div",{className:"dashboard",children:[(0,y.jsx)(h.Z,{}),(0,y.jsxs)("div",{children:[(0,y.jsx)(m.Z,{children:"All Reviews"}),(0,y.jsx)("form",{className:"reviewform",children:(0,y.jsx)(x.Z,{icon:(0,y.jsx)(o.MVI,{}),type:"text",placeholder:"Product Id",value:q,onChange:function(e){return L(e.target.value)}})}),(0,y.jsx)("div",{children:b&&b.length>0?(0,y.jsx)(s._$r,{columns:M,rows:T,pageSize:10,disableSelectionOnClick:!0,className:"ReviewTable",autoHeight:!0}):(0,y.jsx)("div",{className:"noReview",children:"No Reviews Found"})})]})]})]})}},6705:function(e,n,t){var r=t(54270),a=t(80184);n.Z=function(e){var n=e.title;return(0,a.jsx)(r.Z,{children:(0,a.jsx)("title",{children:n})})}},69452:function(e,n,t){t.d(n,{Ir:function(){return p},Mm:function(){return h},Oq:function(){return u},b9:function(){return x},i0:function(){return m},jn:function(){return l},nM:function(){return v},rK:function(){return d},si:function(){return f},wv:function(){return o}});var r=t(74165),a=t(15861),c=t(74569),s=t.n(c),i=t(51438),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,25e3],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return function(){var u=(0,a.Z)((0,r.Z)().mark((function a(u){var l,d,p;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u({type:i.Ty}),l="/api/v1/products?keyword=".concat(e,"&page=").concat(n,"&price[gte]=").concat(t[0],"&price[lte]=").concat(t[1],"&ratings[gte]=").concat(o),c&&(l="/api/v1/products?keyword=".concat(e,"&page=").concat(n,"&price[gte]=").concat(t[0],"&price[lte]=").concat(t[1],"&category=").concat(c,"&ratings[gte]=").concat(o)),r.next=6,s().get(l);case 6:d=r.sent,p=d.data,u({type:i.js,payload:p}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),u({type:i.Vh,payload:{error:r.t0.response.data.message}});case 14:case"end":return r.stop()}}),a,null,[[0,11]])})));return function(e){return u.apply(this,arguments)}}()},u=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:i.Iq}),e.next=4,s().get("/api/v1/admin/products");case 4:t=e.sent,a=t.data,n({type:i.AT,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:i.zH,payload:{error:e.t0.response.data.message}});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},l=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:i.pb}),n.next=4,s().get("/api/v1/product/".concat(e));case 4:a=n.sent,c=a.data,t({type:i.iu,payload:c.product}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t({type:i.jM,payload:{error:n.t0.response.data.message}});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:i.zK}),a={headers:{"Content-Type":"application/json"}},n.next=5,s().put("/api/v1/review",e,a);case 5:c=n.sent,o=c.data,t({type:i.Yu,payload:o.success}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:i.V_,payload:{error:n.t0.response.data.message}});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:i.bi}),n.next=4,s().delete("/api/v1/admin/product/".concat(e));case 4:a=n.sent,c=a.data,t({type:i.cO,payload:c.success}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t({type:i.IX,payload:{error:n.t0.response.data.message}});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},f=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:i.TK}),a={headers:{"Content-Type":"multipart/form-data"}},n.next=5,s().post("/api/v1/admin/product/new",e,a);case 5:c=n.sent,o=c.data,t({type:i.Cy,payload:o}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:i.J$,payload:{error:n.t0.response.data.message}});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},v=function(e,n){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){var c,o,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.L7}),c={headers:{"Content-Type":"multipart/form-data"}},t.next=5,s().put("/api/v1/admin/product/".concat(e),n,c);case 5:o=t.sent,u=o.data,a({type:i.zk,payload:u.success}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:i.ki,payload:{error:t.t0.response.data.message}});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:i.OM}),n.next=4,s().get("/api/v1/admin/reviews?productId=".concat(e));case 4:a=n.sent,c=a.data,t({type:i.aK,payload:c.reviews}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t({type:i.NM,payload:{error:n.t0.response.data.message}});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},m=function(e,n){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){var c,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.fz}),t.next=4,s().delete("/api/v1/admin/reviews?id=".concat(e,"&productId=").concat(n));case 4:c=t.sent,o=c.data,a({type:i.g6,payload:o.success}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:i.Om,payload:{error:t.t0.response.data.message}});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},x=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:i.pp});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}},36548:function(e,n,t){t.d(n,{C:function(){return a},l:function(){return r}});var r=function(e,n){void 0!==e&&setTimeout((function(){!1===e&&(console.log("userAuth",e),n("/login"))}),500)},a=function(e,n,t,r){!0===e&&n&&void 0!==n.role&&"admin"!==n.role&&(console.log("adminAuth"),t("/login"),r.error("Cannot Access Admin Authorities"))}}}]);
//# sourceMappingURL=706.a07d3e56.chunk.js.map