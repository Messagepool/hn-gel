!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["hn-gel-system"]=t():e["hn-gel-system"]=t()}(this,(()=>(()=>{var e={205:()=>{class e extends HTMLElement{constructor(){super();const e=document.querySelector(`[data-modal="#${this.id}"`);this.classList.add("hidden"),this.querySelectorAll('[aria-label="Close"]').forEach((e=>{e.addEventListener("click",(()=>this.close()))})),this.addEventListener("click",(e=>{"HN-MODAL"===e.target.tagName&&this.close()})),e?.addEventListener("click",(()=>this.open()))}open(){this.classList.remove("hidden")}close(){this.classList.add("hidden")}toggle(){this.classList.toggle("hidden")}}customElements.get("hn-modal")||customElements.define("hn-modal",e)}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";o(205)})(),(()=>{"use strict";o.r(s)})(),s})()));