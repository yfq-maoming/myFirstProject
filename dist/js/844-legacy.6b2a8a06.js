(self["webpackChunktest_app"]=self["webpackChunktest_app"]||[]).push([[844],{3844:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return m}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("TypeNav"),s("div",{staticClass:"main"},[s("div",{staticClass:"py-container"},[s("div",{staticClass:"bread"},[t._m(0),s("ul",{staticClass:"fl sui-tag"},[t.searchList.categoryName?s("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchList.categoryName)),s("i",{on:{click:t.cansle}},[t._v("×")])]):t._e(),t.searchList.keyword?s("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchList.keyword)),s("i",{on:{click:t.removekeyword}},[t._v("×")])]):t._e(),t.searchList.trademark?s("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchList.trademark.split(":")[1])),s("i",{on:{click:t.removeTrademark}},[t._v("×")])]):t._e(),t._l(t.searchList.props,(function(e,i){return s("li",{key:i,staticClass:"with-x"},[t._v(" "+t._s(e.split(":")[1])),s("i",{on:{click:function(e){return t.removeAttr(i)}}},[t._v("×")])])}))],2)]),s("SearchSelector",{on:{trademakeInfo:t.trademakeInfo,attrInfo:t.attrInfo}}),s("div",{staticClass:"details clearfix"},[s("div",{staticClass:"sui-navbar"},[s("div",{staticClass:"navbar-inner filter"},[s("ul",{staticClass:"sui-nav"},[s("li",{class:{active:t.isOne},on:{click:function(e){return t.changeOrder("1")}}},[s("a",[t._v("综合"),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isOne,expression:"isOne"}],staticClass:"iconfont",class:{"icon-xiangxiajiantoucuxiao":t.isDesc,"icon-xiangshangjiantoucuxiao":t.isAsc}})])]),s("li",{class:{active:t.isTwo},on:{click:function(e){return t.changeOrder("2")}}},[s("a",[t._v("价格"),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isTwo,expression:"isTwo"}],staticClass:"iconfont",class:{"icon-xiangxiajiantoucuxiao":t.isDesc,"icon-xiangshangjiantoucuxiao":t.isAsc}})])])])])]),s("div",{staticClass:"goods-list"},[s("ul",{staticClass:"yui3-g"},t._l(t.goodsList,(function(e){return s("li",{key:e.id,staticClass:"yui3-u-1-5"},[s("div",{staticClass:"list-wrap"},[s("div",{staticClass:"p-img"},[s("router-link",{attrs:{to:"/detail/"+e.id}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.defaultImg,expression:"goods.defaultImg"}]})])],1),s("div",{staticClass:"price"},[s("strong",[s("em",[t._v("¥ ")]),s("i",[t._v(t._s(e.price)+".00")])])]),s("div",{staticClass:"attr"},[s("a",{attrs:{target:"_blank",href:"item.html",title:"促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"}},[t._v(t._s(e.title))])]),t._m(1,!0),t._m(2,!0)])])})),0)]),s("Pagination",{attrs:{pageNo:t.searchList.pageNo,pageSize:t.searchList.pageSize,total:t.total,continues:5},on:{getPageNo:t.getPageNo}})],1)],1)])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"fl sui-breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("全部结果")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"commit"},[s("i",{staticClass:"command"},[t._v("已有"),s("span",[t._v("2000")]),t._v("人评价")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"operate"},[s("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[t._v("加入购物车")]),s("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[t._v("收藏")])])}],r=s(3019),n=(s(4916),s(4765),s(2222),s(561),s(3123),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clearfix selector"},[s("div",{staticClass:"type-wrap logo"},[s("div",{staticClass:"fl key brand"},[t._v("品牌")]),s("div",{staticClass:"value logos"},[s("ul",{staticClass:"logo-list"},t._l(t.trademarkList,(function(e){return s("li",{key:e.tmId,on:{click:function(s){return t.trademark(e)}}},[t._v(t._s(e.tmName))])})),0)]),t._m(0)]),t._l(t.attrsList,(function(e){return s("div",{key:e.attrId,staticClass:"type-wrap"},[s("div",{staticClass:"fl key"},[t._v(t._s(e.attrName))]),s("div",{staticClass:"fl value"},[s("ul",{staticClass:"type-list"},t._l(e.attrValueList,(function(i,a){return s("li",{key:a,on:{click:function(s){return t.attrInfo(e,i)}}},[s("a",[t._v(t._s(i))])])})),0)]),s("div",{staticClass:"fl ext"})])}))],2)}),c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ext"},[s("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[t._v("多选")]),s("a",{attrs:{href:"javascript:void(0);"}},[t._v("更多")])])}],o=s(629),l={name:"SearchSelector",computed:(0,r.Z)({},(0,o.Se)(["trademarkList","attrsList"])),methods:{trademark:function(t){this.$emit("trademakeInfo",t)},attrInfo:function(t,e){this.$emit("attrInfo",t,e)}}},u=l,h=s(1001),d=(0,h.Z)(u,n,c,!1,null,"1990d46f",null),f=d.exports,v={name:"Search",components:{SearchSelector:f},data:function(){return{searchList:{category1Id:"",category2Id:"",category3Id:"",categoryName:"",keyword:"",order:"1:desc",pageNo:1,pageSize:10,props:[],trademark:""}}},computed:(0,r.Z)((0,r.Z)((0,r.Z)({},(0,o.Se)(["goodsList"])),(0,o.rn)({total:function(t){return t.search.searchList.total}})),{},{isOne:function(){return-1!=this.searchList.order.indexOf("1")},isTwo:function(){return-1!=this.searchList.order.indexOf("2")},isAsc:function(){return-1!=this.searchList.order.indexOf("asc")},isDesc:function(){return-1!=this.searchList.order.indexOf("desc")}}),watch:{$route:function(){this.searchList.category1Id=void 0,this.searchList.category2Id=void 0,this.searchList.category3Id=void 0,Object.assign(this.searchList,this.$route.query,this.$route.params),this.getData()}},beforeMount:function(){Object.assign(this.searchList,this.$route.query,this.$route.params)},mounted:function(){this.getData()},methods:{getData:function(){this.$store.dispatch("getSearchInfo",this.searchList)},cansle:function(){this.searchList.category1Id=void 0,this.searchList.category2Id=void 0,this.searchList.category3Id=void 0,this.searchList.categoryName=void 0,this.getData(),this.$route.params&&this.$router.push({name:"search",params:this.$route.params})},removekeyword:function(){this.searchList.keyword=void 0,this.getData(),this.$bus.$emit("clear"),this.$route.query&&this.$router.push({name:"search",query:this.$route.query})},removeTrademark:function(){this.searchList.trademark=void 0,this.getData()},trademakeInfo:function(t){this.searchList.trademark="".concat(t.tmId,":").concat(t.tmName),this.getData()},attrInfo:function(t,e){var s="".concat(t.attrId,":").concat(e,":").concat(t.attrName);-1==this.searchList.props.indexOf(s)&&this.searchList.props.push(s),this.getData()},removeAttr:function(t){this.searchList.props.splice(t,1),this.getData()},changeOrder:function(t){var e=this.searchList.order.split(":")[0],s=this.searchList.order.split(":")[1],i="";i=e==t?"".concat(e,":").concat("desc"==s?"asc":"desc"):"".concat(t,":","desc"),this.searchList.order=i,this.getData()},getPageNo:function(t){this.searchList.pageNo=t,this.getData()}}},g=v,p=(0,h.Z)(g,i,a,!1,null,"6b629ff8",null),m=p.exports},1530:function(t,e,s){"use strict";var i=s(8710).charAt;t.exports=function(t,e,s){return e+(s?i(t,e).length:1)}},7007:function(t,e,s){"use strict";s(4916);var i=s(1702),a=s(1320),r=s(2261),n=s(7293),c=s(5112),o=s(8880),l=c("species"),u=RegExp.prototype;t.exports=function(t,e,s,h){var d=c(t),f=!n((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=f&&!n((function(){var e=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[l]=function(){return s},s.flags="",s[d]=/./[d]),s.exec=function(){return e=!0,null},s[d](""),!e}));if(!f||!v||s){var g=i(/./[d]),p=e(d,""[t],(function(t,e,s,a,n){var c=i(t),o=e.exec;return o===r||o===u.exec?f&&!n?{done:!0,value:g(e,s,a)}:{done:!0,value:c(s,e,a)}:{done:!1}}));a(String.prototype,t,p[0]),a(u,d,p[1])}h&&o(u[d],"sham",!0)}},7850:function(t,e,s){var i=s(111),a=s(4326),r=s(5112),n=r("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==a(t))}},7651:function(t,e,s){var i=s(7854),a=s(6916),r=s(9670),n=s(614),c=s(4326),o=s(2261),l=i.TypeError;t.exports=function(t,e){var s=t.exec;if(n(s)){var i=a(s,t,e);return null!==i&&r(i),i}if("RegExp"===c(t))return a(o,t,e);throw l("RegExp#exec called on incompatible receiver")}},1150:function(t){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},561:function(t,e,s){"use strict";var i=s(2109),a=s(7854),r=s(1400),n=s(9303),c=s(6244),o=s(7908),l=s(5417),u=s(6135),h=s(1194),d=h("splice"),f=a.TypeError,v=Math.max,g=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var s,i,a,h,d,x,_=o(this),y=c(_),k=r(t,y),C=arguments.length;if(0===C?s=i=0:1===C?(s=0,i=y-k):(s=C-2,i=g(v(n(e),0),y-k)),y+s-i>p)throw f(m);for(a=l(_,i),h=0;h<i;h++)d=k+h,d in _&&u(a,h,_[d]);if(a.length=i,s<i){for(h=k;h<y-i;h++)d=h+i,x=h+s,d in _?_[x]=_[d]:delete _[x];for(h=y;h>y-i+s;h--)delete _[h-1]}else if(s>i)for(h=y-i;h>k;h--)d=h+i-1,x=h+s-1,d in _?_[x]=_[d]:delete _[x];for(h=0;h<s;h++)_[h+k]=arguments[h+2];return _.length=y-i+s,a}})},4765:function(t,e,s){"use strict";var i=s(6916),a=s(7007),r=s(9670),n=s(4488),c=s(1150),o=s(1340),l=s(8173),u=s(7651);a("search",(function(t,e,s){return[function(e){var s=n(this),a=void 0==e?void 0:l(e,t);return a?i(a,e,s):new RegExp(e)[t](o(s))},function(t){var i=r(this),a=o(t),n=s(e,i,a);if(n.done)return n.value;var l=i.lastIndex;c(l,0)||(i.lastIndex=0);var h=u(i,a);return c(i.lastIndex,l)||(i.lastIndex=l),null===h?-1:h.index}]}))},3123:function(t,e,s){"use strict";var i=s(2104),a=s(6916),r=s(1702),n=s(7007),c=s(7850),o=s(9670),l=s(4488),u=s(6707),h=s(1530),d=s(7466),f=s(1340),v=s(8173),g=s(1589),p=s(7651),m=s(2261),x=s(2999),_=s(7293),y=x.UNSUPPORTED_Y,k=4294967295,C=Math.min,L=[].push,I=r(/./.exec),w=r(L),b=r("".slice),$=!_((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));n("split",(function(t,e,s){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var r=f(l(this)),n=void 0===s?k:s>>>0;if(0===n)return[];if(void 0===t)return[r];if(!c(t))return a(e,r,t,n);var o,u,h,d=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,x=new RegExp(t.source,v+"g");while(o=a(m,x,r)){if(u=x.lastIndex,u>p&&(w(d,b(r,p,o.index)),o.length>1&&o.index<r.length&&i(L,d,g(o,1)),h=o[0].length,p=u,d.length>=n))break;x.lastIndex===o.index&&x.lastIndex++}return p===r.length?!h&&I(x,"")||w(d,""):w(d,b(r,p)),d.length>n?g(d,0,n):d}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:a(e,this,t,s)}:e,[function(e,s){var i=l(this),n=void 0==e?void 0:v(e,t);return n?a(n,e,i,s):a(r,f(i),e,s)},function(t,i){var a=o(this),n=f(t),c=s(r,a,n,i,r!==e);if(c.done)return c.value;var l=u(a,RegExp),v=a.unicode,g=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(y?"g":"y"),m=new l(y?"^(?:"+a.source+")":a,g),x=void 0===i?k:i>>>0;if(0===x)return[];if(0===n.length)return null===p(m,n)?[n]:[];var _=0,L=0,I=[];while(L<n.length){m.lastIndex=y?0:L;var $,N=p(m,y?b(n,L):n);if(null===N||($=C(d(m.lastIndex+(y?L:0)),n.length))===_)L=h(n,L,v);else{if(w(I,b(n,_,L)),I.length===x)return I;for(var E=1;E<=N.length-1;E++)if(w(I,N[E]),I.length===x)return I;L=_=$}}return w(I,b(n,_)),I}]}),!$,y)}}]);