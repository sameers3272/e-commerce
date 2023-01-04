"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[578],{35663:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(80184),a=function(e){var n=e.children,r=e.className;return(0,t.jsx)("h1",{className:"h1 ".concat(r),children:n})}},82955:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(96338),a=r(11087),s=r(16856),c=r(78842),i=r(70912),o=r(80184),u=function(){return(0,o.jsxs)("div",{className:"sideBar",children:[(0,o.jsx)(a.Link,{to:"/",children:(0,o.jsx)("img",{src:t,alt:"Ecommerces"})}),(0,o.jsxs)(a.Link,{to:"/admin/dashboard",children:[(0,o.jsx)(s.bUq,{}),(0,o.jsx)("p",{children:"DashBoard"})]}),(0,o.jsx)(c.Z,{defaultCollapseIcon:(0,o.jsx)(s.Yc6,{}),defaultExpandIcon:(0,o.jsx)(s.x8E,{}),children:(0,o.jsxs)(i.Z,{nodeId:"1",label:"Products",children:[(0,o.jsx)(a.Link,{to:"/admin/products",children:(0,o.jsx)(i.Z,{nodeId:"2",label:"All",icon:(0,o.jsx)(s.cfK,{})})}),(0,o.jsx)(a.Link,{to:"/admin/product",children:(0,o.jsx)(i.Z,{nodeId:"3",label:"Create",icon:(0,o.jsx)(s.x06,{})})})]})}),(0,o.jsxs)(a.Link,{to:"/admin/orders",children:[(0,o.jsx)(s.r4W,{}),(0,o.jsx)("p",{children:"Orders"})]}),(0,o.jsxs)(a.Link,{to:"/admin/users",children:[(0,o.jsx)(s.J8I,{}),(0,o.jsx)("p",{children:"Users"})]}),(0,o.jsxs)(a.Link,{to:"/admin/reviews",children:[(0,o.jsx)(s._YV,{}),(0,o.jsx)("p",{children:"Reviews"})]})]})}},27578:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t=r(72791),a=r(26513),s=r(81814),c=r(56534),i=r(16856),o=r(59434),u=r(57689),d=r(11087),l=r(72326),p=r(17234),f=r(36548),h=r(28927),x=r(6705),m=r(82955),v=r(35663),y=r(80184),j=function(){var e=(0,u.s0)(),n=(0,o.I0)(),r=(0,c.VY)(),j=(0,o.v9)((function(e){return e.user})),Z=j.isAuthenticated,k=j.user,g=(0,o.v9)((function(e){return e.allOrders})),b=g.error,w=g.orders,C=(0,o.v9)((function(e){return e.order})),A=C.error,N=C.isDeleted,I=C.loading,L=[{field:"id",headerName:"Order ID",flex:.5,minWidth:180},{field:"status",headerName:"Status",flex:.2,minWidth:130,cellClassName:function(e){return"Delivered"===e.getValue(e.id,"status")?"greenColor":"redColor"}},{field:"noOfItems",headerName:"No of Items",type:"number",minWidth:130,flex:.2},{field:"amount",headerName:"Amount",type:"number",minWidth:130,flex:.2},{field:"actions",headerName:"Actions",flex:.2,minWidth:130,type:"number",sortable:!1,renderCell:function(e){return(0,y.jsxs)(t.Fragment,{children:[(0,y.jsx)(d.Link,{to:"/admin/order/".concat(e.getValue(e.id,"id")),children:(0,y.jsx)(i.zmo,{})}),(0,y.jsx)(a.Z,{onClick:function(){return r=e.getValue(e.id,"id"),void n((0,l.wH)(r));var r},children:(0,y.jsx)(i.ZkW,{})})]})}}],O=[];return w&&w.forEach((function(e){O.push({id:e._id,noOfItems:e.orderItems.length,status:e.orderStatus,amount:e.totalPrice})})),(0,t.useEffect)((function(){(0,f.l)(Z,e),(0,f.C)(!0,k,e,r),b&&(r.error(b),n((0,l.b9)())),A&&(r.error(A),n((0,l.b9)())),N&&(r.success("Order Deleted Successfully"),n({type:p.zE})),n((0,l.zk)())}),[Z,e,r,k,n,b,A,N]),(0,y.jsxs)(t.Fragment,{children:[(0,y.jsx)(x.Z,{title:"All Orders - Admin"}),(0,y.jsxs)("div",{className:"dashboard",children:[(0,y.jsx)(m.Z,{}),(0,y.jsxs)("div",{className:"productListContainer",children:[(0,y.jsx)(v.Z,{children:"All Orders"}),I?(0,y.jsx)(h.Z,{}):(0,y.jsx)(s._$r,{columns:L,rows:O,pageSize:10,disableSelectionOnClick:!0,className:"productListTable",autoHeight:!0})]})]})]})}},6705:function(e,n,r){var t=r(54270),a=r(80184);n.Z=function(e){var n=e.title;return(0,a.jsx)(t.Z,{children:(0,a.jsx)("title",{children:n})})}},72326:function(e,n,r){r.d(n,{Cs:function(){return p},LV:function(){return o},TG:function(){return u},b9:function(){return h},s$:function(){return d},wH:function(){return f},zk:function(){return l}});var t=r(74165),a=r(15861),s=r(74569),c=r.n(s),i=r(17234),o=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,s,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.ib}),a={headers:{"Content-Type":"application/json"}},n.next=5,c().post("/api/v1/order/new",e,a);case 5:s=n.sent,o=s.data,r({type:i.mr,payload:o}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.Sr,payload:n.t0.response.data.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},u=function(){return function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:i.A4}),e.next=4,c().get("/api/v1/orders/me");case 4:r=e.sent,a=r.data,n({type:i.SJ,payload:a.orders}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:i.ut,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},d=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.YO}),n.next=4,c().get("/api/v1/order/".concat(e));case 4:a=n.sent,s=a.data,r({type:i.um,payload:s.order}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r({type:i.Ab,payload:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},l=function(){return function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:i.Ux}),e.next=4,c().get("/api/v1/admin/orders");case 4:r=e.sent,a=r.data,n({type:i.g6,payload:a.orders}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:i.xH,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},p=function(e,n){return function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){var s,o,u;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:i.Mi}),s={headers:{"Content-Type":"application/json"}},r.next=5,c().put("/api/v1/admin/order/".concat(e),n,s);case 5:o=r.sent,u=o.data,a({type:i.Bx,payload:u.success}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),a({type:i.vs,payload:r.t0.response.data.message});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()},f=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.B6}),n.next=4,c().delete("/api/v1/admin/order/".concat(e));case 4:a=n.sent,s=a.data,r({type:i.Sn,payload:s.success}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r({type:i.gq,payload:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},h=function(){return function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:i.pp});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}},36548:function(e,n,r){r.d(n,{C:function(){return a},l:function(){return t}});var t=function(e,n){void 0!==e&&setTimeout((function(){!1===e&&(console.log("userAuth",e),n("/login"))}),500)},a=function(e,n,r,t){!0===e&&n&&void 0!==n.role&&"admin"!==n.role&&(console.log("adminAuth"),r("/login"),t.error("Cannot Access Admin Authorities"))}}}]);
//# sourceMappingURL=578.14189586.chunk.js.map