"use strict";(self["webpackChunktest_app"]=self["webpackChunktest_app"]||[]).push([[62],{1062:function(e,r,a){a.r(r),a.d(r,{default:function(){return d}});var s=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"register-container"},[a("div",{staticClass:"register"},[a("h3",[e._v(" 注册新用户 "),a("span",{staticClass:"go"},[e._v("我有账号，去 "),a("router-link",{attrs:{to:"/login"}},[e._v("登陆")])],1)]),a("div",{staticClass:"content"},[a("label",[e._v("手机号:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^1\d{10}$/},expression:"{ required: true, regex: /^1\\d{10}$/ }"}],class:{invalid:e.errors.has("phone")},attrs:{placeholder:"请输入你的手机号",name:"phone"},domProps:{value:e.phone},on:{input:function(r){r.target.composing||(e.phone=r.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("phone")))])]),a("div",{staticClass:"content"},[a("label",[e._v("验证码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^\d{6}$/},expression:"{ required: true, regex: /^\\d{6}$/ }"}],class:{invalid:e.errors.has("code")},attrs:{placeholder:"请输入验证码",name:"code"},domProps:{value:e.code},on:{input:function(r){r.target.composing||(e.code=r.target.value)}}}),a("button",{staticStyle:{width:"100px",height:"38px"},on:{click:e.getCode}},[e._v(" 获取验证码 ")]),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("code")))])]),a("div",{staticClass:"content"},[a("label",[e._v("登录密码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[0-9A-Za-z]{8,20}$/},expression:"{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }"}],class:{invalid:e.errors.has("password")},attrs:{type:"password",placeholder:"请输入登录密码",name:"password"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password")))])]),a("div",{staticClass:"content"},[a("label",[e._v("确认密码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"},{name:"validate",rawName:"v-validate",value:{required:!0,is:e.password},expression:"{ required: true, is: password }"}],class:{invalid:e.errors.has("password1")},attrs:{type:"password",placeholder:"请输入确认密码",name:"password1"},domProps:{value:e.password1},on:{input:function(r){r.target.composing||(e.password1=r.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password1")))])]),a("div",{staticClass:"controls"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"},{name:"validate",rawName:"v-validate",value:{required:!0,agree:!0},expression:"{ required: true, agree: true }"}],class:{invalid:e.errors.has("agree")},attrs:{type:"checkbox",name:"agree"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(r){var a=e.agree,s=r.target,t=!!s.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);s.checked?o<0&&(e.agree=a.concat([n])):o>-1&&(e.agree=a.slice(0,o).concat(a.slice(o+1)))}else e.agree=t}}}),a("span",[e._v("同意协议并注册《尚品汇用户协议》")]),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("agree")))])]),a("div",{staticClass:"btn"},[a("button",{on:{click:e.userRegister}},[e._v("完成注册")])])]),e._m(0)])},t=[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"copyright"},[a("ul",[a("li",[e._v("关于我们")]),a("li",[e._v("联系我们")]),a("li",[e._v("联系客服")]),a("li",[e._v("商家入驻")]),a("li",[e._v("营销中心")]),a("li",[e._v("手机尚品汇")]),a("li",[e._v("销售联盟")]),a("li",[e._v("尚品汇社区")])]),a("div",{staticClass:"address"},[e._v("地址：北京市昌平区宏福科技园综合楼6层")]),a("div",{staticClass:"beian"},[e._v("京ICP备19006430号")])])}],n=a(6198),o=(a(5666),{name:"Register",data:function(){return{phone:"",code:"",password:"",password1:"",agree:!0}},methods:{getCode:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,a=e.phone,r.t0=a,!r.t0){r.next=6;break}return r.next=6,e.$store.dispatch("getCode",a);case 6:e.code=e.$store.state.user.code,r.next=12;break;case 9:r.prev=9,r.t1=r["catch"](0),console.log(r.t1.message);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},userRegister:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var a,s,t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$validator.validateAll();case 2:if(a=r.sent,!a){r.next=14;break}return r.prev=4,s=e.phone,t=e.code,n=e.password,e.password1,r.next=8,e.$store.dispatch("userRegister",{phone:s,code:t,password:n});case 8:e.$router.push("/login"),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](4),console.log(r.t0.message);case 14:case"end":return r.stop()}}),r,null,[[4,11]])})))()}}}),i=o,l=a(1001),c=(0,l.Z)(i,s,t,!1,null,"6e5abb93",null),d=c.exports}}]);