(function(t){function n(n){for(var l,o,c=n[0],s=n[1],u=n[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(t[l]=s[l]);a&&a(n);while(p.length)p.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],l=!0,c=1;c<e.length;c++){var s=e[c];0!==r[s]&&(l=!1)}l&&(i.splice(n--,1),t=o(o.s=e[0]))}return t}var l={},r={app:0},i=[];function o(n){if(l[n])return l[n].exports;var e=l[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=l,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var l in t)o.d(e,l,function(n){return t[n]}.bind(null,l));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var a=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var l=e("64a9"),r=e.n(l);r.a},"07e1":function(t,n,e){"use strict";var l=e("969d"),r=e.n(l);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var l=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[t._m(0),e("h1",[t._v("五子棋")]),e("div",[t._v("共走了"+t._s(t.n)+"步")]),e("div",{staticClass:"chess"},[e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(0,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(1,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(2,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(3,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(4,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(5,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(6,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(7,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(8,n)}}})],1),e("div",{style:{color:t.color,fontSize:t.size}},[t._v("结果:"+t._s(null===t.result?"胜负未分":"胜方"+t.result)+" \n      "),e("button",{on:{click:t.click}},[t._v("重新开始")])])])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{width:"100px",height:"30px","background-color":"red",position:"fixed",right:"0px",top:"50%","text-align":"center","line-height":"30px","font-size":"21px","border-radius":"8px","z-index":"999"}},[e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://dutianlong.github.io/index.html"}},[e("span",{staticStyle:{color:"yellow"}},[t._v("返回首页")])])])}],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"cell",on:{click:t.onClickSelf}},[t.a?[t._v(t._s(t.text))]:void 0],2)])},c=[],s={props:["n","finished"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""===this.text&&(this.a=!0,this.text=this.n%2===0?"x":"o",this.$emit("click",this.text))}}},u=s,a=(e("07e1"),e("2877")),f=Object(a["a"])(u,o,c,!1,null,null,null),p=f.exports,h={components:{Cell:p},data:function(){return{n:0,color:"black",size:"",map:[[null,null,null],[null,null,null],[null,null,null]],result:null}},methods:{click:function(){location.reload()},onClickCell:function(t,n){this.map[Math.floor(t/3)][t%3]=n,this.n=this.n+1,this.tell()},tell:function(){for(var t=this.map,n=0;n<3;n++)null!==t[n][0]&&t[n][0]===t[n][1]&&t[n][1]===t[n][2]&&(this.result=t[n][0],this.color="red",this.size="60px",alert(this.result+"获胜"));for(var e=0;e<3;e++)null!==t[0][e]&&t[0][e]===t[1][e]&&t[1][e]===t[2][e]&&(this.result=t[0][e],this.color="red",this.size="60px",alert(this.result+"获胜")),null!==t[0][0]&&t[0][0]===t[1][1]&&t[1][1]===t[2][2]&&(this.result=t[0][0],this.color="red",this.size="60px",alert(this.result+"获胜")),null!==t[0][2]&&t[0][2]===t[1][1]&&t[1][1]===t[2][0]&&(this.result=t[0][2],this.color="red",this.size="60px",alert(this.result+"获胜"))}}},d=h,v=(e("034f"),Object(a["a"])(d,r,i,!1,null,null,null)),C=v.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,n,e){},"969d":function(t,n,e){}});
//# sourceMappingURL=app.40f1f657.js.map