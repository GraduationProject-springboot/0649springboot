(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meishidingdan/add-or-update"],{1330:function(e,n,r){"use strict";var a=r("aef4"),i=r.n(a);i.a},"9f67":function(e,n,r){"use strict";r.r(n);var a=r("a886"),i=r.n(a);for(var t in a)"default"!==t&&function(e){r.d(n,e,(function(){return a[e]}))}(t);n["default"]=i.a},a886:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function t(e,n,r,a,i,t,u){try{var o=e[t](u),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(a,i)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(a,i){var u=e.apply(n,r);function o(e){t(u,a,i,o,s,"next",e)}function s(e){t(u,a,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("08a3"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{dingdanbianhao:this.getUUID(),meishimingcheng:"",tupian:"",caipinfenlei:"",jiage:"",shuliang:"",zongjine:"",shitangmingcheng:"",diancanshijian:"",yonghuzhanghao:"",yonghuxingming:"",lianxifangshi:"",ispay:""},user:{},ro:{dingdanbianhao:!1,meishimingcheng:!1,tupian:!1,caipinfenlei:!1,jiage:!1,shuliang:!1,zongjine:!1,shitangmingcheng:!1,diancanshijian:!1,yonghuzhanghao:!1,yonghuxingming:!1,lianxifangshi:!1,ispay:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url},zongjine:{get:function(){return 1*this.ruleForm.jiage*this.ruleForm.shuliang}}},onLoad:function(n){var r=this;return u(a.default.mark((function i(){var t,u,o,s;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r.ruleForm.diancanshijian=r.$utils.getCurDateTime(),t=e.getStorageSync("nowTable"),i.next=4,r.$api.session(t);case 4:if(u=i.sent,r.user=u.data,r.ruleForm.yonghuzhanghao=r.user.yonghuzhanghao,r.ro.yonghuzhanghao=!0,r.ruleForm.yonghuxingming=r.user.yonghuxingming,r.ro.yonghuxingming=!0,r.ruleForm.lianxifangshi=r.user.lianxifangshi,r.ro.lianxifangshi=!0,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=20;break}return r.ruleForm.id=n.id,i.next=18,r.$api.info("meishidingdan",r.ruleForm.id);case 18:u=i.sent,r.ruleForm=u.data;case 20:if(r.cross=n.cross,!n.cross){i.next=78;break}o=e.getStorageSync("crossObj"),i.t0=a.default.keys(o);case 24:if((i.t1=i.t0()).done){i.next=76;break}if(s=i.t1.value,"dingdanbianhao"!=s){i.next=30;break}return r.ruleForm.dingdanbianhao=o[s],r.ro.dingdanbianhao=!0,i.abrupt("continue",24);case 30:if("meishimingcheng"!=s){i.next=34;break}return r.ruleForm.meishimingcheng=o[s],r.ro.meishimingcheng=!0,i.abrupt("continue",24);case 34:if("tupian"!=s){i.next=38;break}return r.ruleForm.tupian=o[s],r.ro.tupian=!0,i.abrupt("continue",24);case 38:if("caipinfenlei"!=s){i.next=42;break}return r.ruleForm.caipinfenlei=o[s],r.ro.caipinfenlei=!0,i.abrupt("continue",24);case 42:if("jiage"!=s){i.next=46;break}return r.ruleForm.jiage=o[s],r.ro.jiage=!0,i.abrupt("continue",24);case 46:if("shuliang"!=s){i.next=50;break}return r.ruleForm.shuliang=o[s],r.ro.shuliang=!0,i.abrupt("continue",24);case 50:if("zongjine"!=s){i.next=54;break}return r.ruleForm.zongjine=o[s],r.ro.zongjine=!0,i.abrupt("continue",24);case 54:if("shitangmingcheng"!=s){i.next=58;break}return r.ruleForm.shitangmingcheng=o[s],r.ro.shitangmingcheng=!0,i.abrupt("continue",24);case 58:if("diancanshijian"!=s){i.next=62;break}return r.ruleForm.diancanshijian=o[s],r.ro.diancanshijian=!0,i.abrupt("continue",24);case 62:if("yonghuzhanghao"!=s){i.next=66;break}return r.ruleForm.yonghuzhanghao=o[s],r.ro.yonghuzhanghao=!0,i.abrupt("continue",24);case 66:if("yonghuxingming"!=s){i.next=70;break}return r.ruleForm.yonghuxingming=o[s],r.ro.yonghuxingming=!0,i.abrupt("continue",24);case 70:if("lianxifangshi"!=s){i.next=74;break}return r.ruleForm.lianxifangshi=o[s],r.ro.lianxifangshi=!0,i.abrupt("continue",24);case 74:i.next=24;break;case 76:r.ruleForm.shuliang=0,r.ro.shuliang=!1;case 78:r.styleChange();case 79:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},diancanshijianConfirm:function(e){console.log(e),this.ruleForm.diancanshijian=e.result,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function r(){var i,t,u,o,s,c,g,l,h,f;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.zongjine=n.zongjine,i=e.getStorageSync("crossObj"),t=e.getStorageSync("crossTable"),i.shuliang=i.shuliang-n.ruleForm.shuliang,!(i.shuliang<0)){r.next=7;break}return n.$utils.msg("数量不足"),r.abrupt("return");case 7:if(!n.ruleForm.jiage||n.$validate.isNumber(n.ruleForm.jiage)){r.next=10;break}return n.$utils.msg("价格应输入数字"),r.abrupt("return");case 10:if(!n.ruleForm.shuliang||n.$validate.isIntNumer(n.ruleForm.shuliang)){r.next=13;break}return n.$utils.msg("数量应输入整数"),r.abrupt("return");case 13:if(!n.ruleForm.zongjine||n.$validate.isNumber(n.ruleForm.zongjine)){r.next=16;break}return n.$utils.msg("总金额应输入数字"),r.abrupt("return");case 16:if(!n.ruleForm.lianxifangshi||n.$validate.isMobile(n.ruleForm.lianxifangshi)){r.next=19;break}return n.$utils.msg("联系方式应输入手机格式"),r.abrupt("return");case 19:if(!n.cross){r.next=35;break}if(c=e.getStorageSync("statusColumnName"),g=e.getStorageSync("statusColumnValue"),""==c){r.next=35;break}if(i=e.getStorageSync("crossObj"),c.startsWith("[")){r.next=31;break}for(l in i)l==c&&(i[l]=g);return t=e.getStorageSync("crossTable"),r.next=29,n.$api.update("".concat(t),i);case 29:r.next=35;break;case 31:u=Number(e.getStorageSync("userid")),o=i["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 35:if(!o||!u){r.next=62;break}return n.ruleForm.crossuserid=u,n.ruleForm.crossrefid=o,h={page:1,limit:10,crossuserid:u,crossrefid:o},r.next=41,n.$api.list("meishidingdan",h);case 41:if(f=r.sent,!(f.data.total>=s)){r.next=47;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 47:return i=e.getStorageSync("crossObj"),t=e.getStorageSync("crossTable"),i.shuliang=parseFloat(i.shuliang)-parseFloat(n.ruleForm.shuliang),r.next=52,n.$api.update("".concat(t),i);case 52:if(!n.ruleForm.id){r.next=57;break}return r.next=55,n.$api.update("meishidingdan",n.ruleForm);case 55:r.next=59;break;case 57:return r.next=59,n.$api.add("meishidingdan",n.ruleForm);case 59:n.$utils.msgBack("提交成功");case 60:r.next=75;break;case 62:return i=e.getStorageSync("crossObj"),t=e.getStorageSync("crossTable"),i.shuliang=i.shuliang-n.ruleForm.shuliang,r.next=67,n.$api.update("".concat(t),i);case 67:if(!n.ruleForm.id){r.next=72;break}return r.next=70,n.$api.update("meishidingdan",n.ruleForm);case 70:r.next=74;break;case 72:return r.next=74,n.$api.add("meishidingdan",n.ruleForm);case 74:n.$utils.msgBack("提交成功");case 75:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),a=n.getMonth()+1,i=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(r,"-").concat(a,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},aef4:function(e,n,r){},eb5a:function(e,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return t})),r.d(n,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"08a3"))}},i=function(){var e=this,n=e.$createElement;e._self._c},t=[]},f3bb:function(e,n,r){"use strict";r.r(n);var a=r("eb5a"),i=r("9f67");for(var t in i)"default"!==t&&function(e){r.d(n,e,(function(){return i[e]}))}(t);r("1330");var u,o=r("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"3a42e6de",null,!1,a["a"],u);n["default"]=s.exports},f68e:function(e,n,r){"use strict";(function(e){r("0924");a(r("66fd"));var n=a(r("f3bb"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])}},[["f68e","common/runtime","common/vendor"]]]);