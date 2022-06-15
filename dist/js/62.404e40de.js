"use strict";(self["webpackChunktest_app"]=self["webpackChunktest_app"]||[]).push([[62],{1062:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var r=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"register-container"},[a("div",{staticClass:"register"},[a("h3",[e._v(" 注册新用户 "),a("span",{staticClass:"go"},[e._v("我有账号，去 "),a("router-link",{attrs:{to:"/login"}},[e._v("登陆")])],1)]),a("div",{staticClass:"content"},[a("label",[e._v("手机号:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^1\d{10}$/},expression:"{ required: true, regex: /^1\\d{10}$/ }"}],class:{invalid:e.errors.has("phone")},attrs:{placeholder:"请输入你的手机号",name:"phone"},domProps:{value:e.phone},on:{input:function(s){s.target.composing||(e.phone=s.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("phone")))])]),a("div",{staticClass:"content"},[a("label",[e._v("验证码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^\d{6}$/},expression:"{ required: true, regex: /^\\d{6}$/ }"}],class:{invalid:e.errors.has("code")},attrs:{placeholder:"请输入验证码",name:"code"},domProps:{value:e.code},on:{input:function(s){s.target.composing||(e.code=s.target.value)}}}),a("button",{staticStyle:{width:"100px",height:"38px"},on:{click:e.getCode}},[e._v(" 获取验证码 ")]),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("code")))])]),a("div",{staticClass:"content"},[a("label",[e._v("登录密码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[0-9A-Za-z]{8,20}$/},expression:"{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }"}],class:{invalid:e.errors.has("password")},attrs:{type:"password",placeholder:"请输入登录密码",name:"password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password")))])]),a("div",{staticClass:"content"},[a("label",[e._v("确认密码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"},{name:"validate",rawName:"v-validate",value:{required:!0,is:e.password},expression:"{ required: true, is: password }"}],class:{invalid:e.errors.has("password1")},attrs:{type:"password",placeholder:"请输入确认密码",name:"password1"},domProps:{value:e.password1},on:{input:function(s){s.target.composing||(e.password1=s.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password1")))])]),a("div",{staticClass:"controls"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"},{name:"validate",rawName:"v-validate",value:{required:!0,agree:!0},expression:"{ required: true, agree: true }"}],class:{invalid:e.errors.has("agree")},attrs:{type:"checkbox",name:"agree"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(s){var a=e.agree,r=s.target,t=!!r.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);r.checked?o<0&&(e.agree=a.concat([i])):o>-1&&(e.agree=a.slice(0,o).concat(a.slice(o+1)))}else e.agree=t}}}),a("span",[e._v("同意协议并注册《尚品汇用户协议》")]),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("agree")))])]),a("div",{staticClass:"btn"},[a("button",{on:{click:e.userRegister}},[e._v("完成注册")])])]),e._m(0)])},t=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"copyright"},[a("ul",[a("li",[e._v("关于我们")]),a("li",[e._v("联系我们")]),a("li",[e._v("联系客服")]),a("li",[e._v("商家入驻")]),a("li",[e._v("营销中心")]),a("li",[e._v("手机尚品汇")]),a("li",[e._v("销售联盟")]),a("li",[e._v("尚品汇社区")])]),a("div",{staticClass:"address"},[e._v("地址：北京市昌平区宏福科技园综合楼6层")]),a("div",{staticClass:"beian"},[e._v("京ICP备19006430号")])])}],i={name:"Register",data(){return{phone:"",code:"",password:"",password1:"",agree:!0}},methods:{async getCode(){try{const{phone:e}=this;e&&await this.$store.dispatch("getCode",e),this.code=this.$store.state.user.code}catch(e){console.log(e.message)}},async userRegister(){const e=await this.$validator.validateAll();if(e)try{const{phone:e,code:s,password:a,password1:r}=this;await this.$store.dispatch("userRegister",{phone:e,code:s,password:a}),this.$router.push("/login")}catch(s){console.log(s.message)}}}},o=i,n=a(1001),l=(0,n.Z)(o,r,t,!1,null,"6e5abb93",null),d=l.exports}}]);