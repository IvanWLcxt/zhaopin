(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-962a"],{HKMi:function(a,e,t){},"KCQ/":function(a,e,t){"use strict";var n=t("HKMi");t.n(n).a},cLhO:function(a,e,t){"use strict";t.r(e);var n={name:"appManage",data:function(){return{activeName:"category"}},methods:{handleClick:function(a,e){this.activeName=a.name,this.$router.push("/appManage/index/"+a.name)}}},i=(t("KCQ/"),t("ZrdR")),c=Object(i.a)(n,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"appManage"}},[t("el-tabs",{attrs:{type:"card"},on:{"tab-click":a.handleClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"栏目管理",name:"category"}}),a._v(" "),t("el-tab-pane",{attrs:{label:"热门推荐",name:"hot"}}),a._v(" "),t("el-tab-pane",{attrs:{label:"广告管理",name:"adv"}})],1),a._v(" "),t("div",{staticClass:"tbl-content"},[t("router-view")],1)],1)},[],!1,null,"38c8b42a",null);c.options.__file="index.vue";e.default=c.exports}}]);