var udscrollprogress=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=react},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);const c=(e,t=5)=>Number(e.toFixed(t)),s=e=>window.requestAnimationFrame(e),a=({backgroundColor:e,height:t,barColor:n,target:o,refTarget:a})=>{let i;const[l,u]=Object(r.useState)("0%");Object(r.useEffect)(()=>(i=o?document.getElementById(o):null,d(),window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)),[]);const d=()=>{const e=a?a.current:i||null;let t=0,n=0;const r=(()=>{let e=0;return document.documentElement&&null!==document.documentElement&&(e=document.documentElement.scrollTop),window.pageYOffset||e})();e?(t=(e=>{let t=e.offsetHeight;const n=window.getComputedStyle(e),{marginBottom:r,marginTop:o}=n;return r&&o&&(t+=parseInt(o,10)+parseInt(r,10)),t})(e)-document.documentElement.clientHeight,n=e.offsetTop):t=document.documentElement.scrollHeight-document.documentElement.clientHeight;const o=c(r-n);if(r<n)return s(()=>u("0%"));if(o>t)return s(()=>u("100%"));const l=c(o/t),d=`${c(100*l)}%`;s(()=>u(d))};return Object(r.createElement)("div",{style:{background:e,height:t,width:"100vw"}},Object(r.createElement)("div",{style:{height:t,background:n,width:l}}))};a.defaultProps={backgroundColor:"#CCC",height:"5px",barColor:"#e91e63"};var i=Object(r.memo)(a),l=(e=>{const t=(e,t)=>new Promise((n,r)=>{UniversalDashboard.post(`/api/internal/component/element/${e}`,t,e=>{n(e)})}),n=(e,t)=>UniversalDashboard.subscribe(e,(e,n)=>{let r=n.type;"requestState"===r&&(r="getState"),t(r,n)}),r=e=>{UniversalDashboard.unsubscribe(e)};const o=(e,t)=>((function(e){return"[object String]"===Object.prototype.toString.call(e)})(e)||(e.version||(e.version="0"),!t&&e.history&&(t=e.history)),UniversalDashboard.renderComponent(e,t));return c=>{const[s,a]=react.useState(c);react.useEffect(()=>{a(c)},[c.version]);const i=(e,t)=>{if("setState"===e&&a({...s,...t.state}),"getState"===e&&((e,t)=>new Promise((n,r)=>{UniversalDashboard.post(`/api/internal/component/element/sessionState/${e}`,t,e=>{e.error?r(e.error.message):n(e)})}))(t.requestId,s),"addElement"===e){let e=s.children;null==e&&(e=[]),e=e.concat(t.elements),a({...s,children:e})}"clearElement"===e&&a({...s,children:[]}),"removeElement"===e&&a({...s,hidden:!0}),"syncElement"===e&&a({...s,version:Math.random().toString(36).substr(2,5)})};react.useEffect(()=>{const e=n(c.id,i);return()=>{r(e)}});const l={render:o,setState:e=>{let t={...s,...e};a(t)},publish:UniversalDashboard.publish,notifyOfEvent:(e,t)=>{UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:c.id+e,eventName:e,eventData:t})},post:t,subscribeToIncomingEvents:n,unsubscribeFromIncomingEvents:r};return Object.keys(s).forEach(e=>{null!=s[e]&&s[e].endpoint&&(l[e]=(t=>{let n={};return s[e].accept&&""!==s[e].accept&&(n.Accept=s[e].accept),s[e].contentType&&""!==s[e].contentType&&(n["Content-Type"]=s[e].contentType),((e,t,n)=>new Promise((r,o)=>{UniversalDashboard.postWithHeaders(`/api/internal/component/element/${e}`,t,e=>{r(e)},n)}))(s[e].name,t,n)}))}),s.hidden?react.createElement(react.Fragment):e({...s,...l})}})(function(e){return o.a.createElement(i,{key:e.id,backgroundColor:e.bgColor,barColor:e.color,height:e.height})});UniversalDashboard.register("udscrollprogress",l)}]);
//# sourceMappingURL=index.f1f762f2527151cba30a.bundle.map