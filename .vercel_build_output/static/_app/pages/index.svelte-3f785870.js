import{S as j,i as I,s as w,e as g,k as b,t as S,c as h,a as p,d,n as E,g as V,F as U,b as f,f as $,G as m,H as z,P as k,Q as J,j as G,m as B,o as q,x as H,u as P,v as R}from"../chunks/vendor-ea73343c.js";import{g as K,S as L}from"../chunks/Search-6cc4a71a.js";import"../chunks/singletons-12a22614.js";function M(o,t,n){const r=o.slice();return r[2]=t[n],r}function O(o){let t,n,r,s,c,a,e,i,l=o[2].name+"",u,C,D,y;function Q(){return o[1](o[2])}return{c(){t=g("div"),n=g("div"),r=g("figure"),s=g("img"),e=b(),i=g("h2"),u=S(l),C=b(),this.h()},l(_){t=h(_,"DIV",{class:!0});var v=p(t);n=h(v,"DIV",{class:!0});var x=p(n);r=h(x,"FIGURE",{class:!0});var F=p(r);s=h(F,"IMG",{src:!0,class:!0,alt:!0}),F.forEach(d),e=E(x),i=h(x,"H2",{class:!0});var A=p(i);u=V(A,l),A.forEach(d),x.forEach(d),C=E(v),v.forEach(d),this.h()},h(){U(s.src,c=o[2].icon)||f(s,"src",c),f(s,"class","rounded-full shadow-xl"),f(s,"alt",a=o[2].name),f(r,"class","px-12 py-6"),f(i,"class","card-title"),f(n,"class","justify-end card-body"),f(t,"class","card glass shadow-xl text-center cursor-pointer")},m(_,v){$(_,t,v),m(t,n),m(n,r),m(r,s),m(n,e),m(n,i),m(i,u),m(t,C),D||(y=z(t,"click",Q),D=!0)},p(_,v){o=_},d(_){_&&d(t),D=!1,y()}}}function N(o){let t,n,r,s,c=o[0],a=[];for(let e=0;e<c.length;e+=1)a[e]=O(M(o,c,e));return{c(){t=g("div"),n=S("Featured Diamonds"),r=b(),s=g("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=h(e,"DIV",{class:!0});var i=p(t);n=V(i,"Featured Diamonds"),i.forEach(d),r=E(e),s=h(e,"DIV",{class:!0});var l=p(s);for(let u=0;u<a.length;u+=1)a[u].l(l);l.forEach(d),this.h()},h(){f(t,"class","text-center text-4xl "),f(s,"class","grid grid-cols-3 lg:grid-cols-5 bg-base-300 p-5 gap-5 rounded-box")},m(e,i){$(e,t,i),m(t,n),$(e,r,i),$(e,s,i);for(let l=0;l<a.length;l+=1)a[l].m(s,null)},p(e,[i]){if(i&1){c=e[0];let l;for(l=0;l<c.length;l+=1){const u=M(e,c,l);a[l]?a[l].p(u,i):(a[l]=O(u),a[l].c(),a[l].m(s,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=c.length}},i:k,o:k,d(e){e&&d(t),e&&d(r),e&&d(s),J(a,e)}}}function T(o){return[[{name:"Aavegotchi",icon:"/img/aavegotchi-polygon-logo.jpg",url:"/diamond/0x86935F11C86623deC8a25696E1C19a8659CbF95d?network=polygon"},{name:"Aavegotchi Staking",icon:"/img/aavegotchi-mainnet-logo.png",url:"/diamond/0x93eA6ec350Ace7473f7694D43dEC2726a515E31A"},{name:"BarnBridge",icon:"/img/barnbridge-logo.jpg",url:"/diamond/0x10e138877df69Ca44Fdc68655f86c88CDe142D7F"},{name:"PieDAO",icon:"/img/piedao-logo.png",url:"/diamond/0x17525E4f4Af59fbc29551bC4eCe6AB60Ed49CE31"},{name:"Gelato V2",icon:"/img/gelato-logo.png",url:"/diamond/0x3CACa7b48D0573D793d3b0279b5F0029180E83b6"}],r=>K(r.url)]}class W extends j{constructor(t){super();I(this,t,T,N,w,{})}}function X(o){let t,n,r,s,c;return n=new L({}),s=new W({}),{c(){t=g("div"),G(n.$$.fragment),r=b(),G(s.$$.fragment),this.h()},l(a){t=h(a,"DIV",{class:!0});var e=p(t);B(n.$$.fragment,e),r=E(e),B(s.$$.fragment,e),e.forEach(d),this.h()},h(){f(t,"class","flex flex-col w-full space-y-10 my-5")},m(a,e){$(a,t,e),q(n,t,null),m(t,r),q(s,t,null),c=!0},p:k,i(a){c||(H(n.$$.fragment,a),H(s.$$.fragment,a),c=!0)},o(a){P(n.$$.fragment,a),P(s.$$.fragment,a),c=!1},d(a){a&&d(t),R(n),R(s)}}}class te extends j{constructor(t){super();I(this,t,null,X,w,{})}}export{te as default};