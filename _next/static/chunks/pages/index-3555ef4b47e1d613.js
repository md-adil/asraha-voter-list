(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4379)}])},4379:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var t=r(5893),a=r(387),i=r(7294),c=r(5574),o=r.n(c);function u(n){var e=n.card;return(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsx)("div",{className:o().id,children:e.id}),(0,t.jsx)("div",{children:e.epic_no}),(0,t.jsxs)("div",{children:["Age: ",e.age," | Source: ",e.source," | Status: ",e.status]}),(0,t.jsxs)("h3",{className:o().title,children:[(0,t.jsx)("div",{children:e.name_eng}),(0,t.jsxs)("div",{children:["(",e.name_hindi,")"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:"Father / Husband:"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:e.father_husband_name_eng}),(0,t.jsxs)("div",{children:["(",e.father_husband_name_hindi,")"]})]})]}),(0,t.jsxs)("div",{className:o().wards,children:[(0,t.jsxs)("span",{children:["Ward: ",e.ward_no]}),(0,t.jsxs)("span",{children:["Ward SN: ",e.sl_no_in_ward]})]})]})}var s=r(6515),l=r.n(s);function d(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function h(n){var e=(0,a.useRouter)(),r=e.query,i=e.push,c=function(n){i("?".concat(new URLSearchParams(function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){d(n,e,r[e])}))}return n}({},r,d({page:""},n.target.name,n.target.value)))),void 0,{shallow:!0})};return(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("input",{type:"text",placeholder:"ID Number",name:"epic_no",onChange:c,value:r.epic_no}),(0,t.jsx)("input",{type:"text",placeholder:"Name",name:"name_eng",onChange:c,value:r.name_eng}),(0,t.jsx)("input",{type:"text",placeholder:"Spouse Name",name:"father_husband_name_eng",onChange:c,value:r.father_husband_name_eng}),(0,t.jsx)("input",{type:"text",placeholder:"Ward Number",name:"ward_no",onChange:c,value:r.ward_no})]})}var f=r(4705),_=r.n(f),p=r(6486),v=r.n(p);function m(n){return function(n){if(Array.isArray(n)){for(var e=0,r=new Array(n.length);e<n.length;e++)r[e]=n[e];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var j=["epic_no","sl_no_in_ward","source","status","name_eng","name_hindi","relation_type","father_husband_name_eng","father_husband_name_hindi","age","ward_no"];function b(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function g(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,a=!1,i=void 0;try{for(var c,o=n[Symbol.iterator]();!(t=(c=o.next()).done)&&(r.push(c.value),!e||r.length!==e);t=!0);}catch(u){a=!0,i=u}finally{try{t||null==o.return||o.return()}finally{if(a)throw i}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(){var n=(0,a.useRouter)(),e=(0,i.useState)([]),r=e[0],c=e[1];(0,i.useEffect)((function(){fetch("/data.json").then((function(n){return n.json()})).then((function(n){return c(n)}))}),[]);var o=function(e){n.push("?".concat(new URLSearchParams(function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){b(n,e,r[e])}))}return n}({},n.query,{page:e.target.value}))))},s=function(n,e){return(0,i.useMemo)((function(){return j.every((function(n){return!e[n]}))?n:n.filter((function(n){return j.every((function(r){return!e[r]||n[r].toLowerCase().includes(e[r])}))}))}),[n].concat(m(j.map((function(n){return e[n]})))))}(r,n.query),l=g(function(n,e,r){var t=void 0===e?1:e,a=void 0===r?50:r;return(0,i.useMemo)((function(){var e=(t-1)*a,r=e+a;return[n.slice(e,r),Math.ceil(n.length/a)]}),[n,t,a])}(s,parseInt(n.query.page||1)),2),d=l[0],f=l[1];return(0,t.jsxs)("div",{className:_().container,children:[r.length>0&&(0,t.jsx)(h,{card:r[0]}),(0,t.jsxs)("div",{className:_().totalResults,children:["Total results: ",(0,t.jsx)("strong",{children:r.length})]}),(0,t.jsxs)("div",{className:_().totalResults,children:["Total matched: ",(0,t.jsx)("strong",{children:s.length})]}),(0,t.jsx)("div",{className:_().cards,children:d.map((function(n){return(0,t.jsx)(u,{card:n},n.id)}))}),v().range(1,Math.min(f,20)+1).map((function(n){return(0,t.jsx)("button",{onClick:o,value:n,type:"button",children:n},n)}))]})}},4705:function(n){n.exports={container:"index_container__3XRMM",cards:"index_cards__2pYdi",totalResults:"index_totalResults__2nfRp"}},5574:function(n){n.exports={container:"card_container__2_b1W",title:"card_title__34xPw",id:"card_id__lNQO-",wards:"card_wards__hZEl-"}},6515:function(n){n.exports={container:"filters_container__1hUKA"}}},function(n){n.O(0,[662,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);