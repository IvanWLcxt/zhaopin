(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3b1d"],{"72vp":function(t,e,n){},GLcP:function(t,e,n){"use strict";var i=n("72vp");n.n(i).a},LW1I:function(t,e,n){},"N/kD":function(t,e,n){"use strict";n.r(e);n("8t5x");var i=n("HyH5"),a=n.n(i),s=(n("Aeqt"),{name:"Index",computed:{},data:function(){return{rechargeData:[{id:1001,position:"前端工程师",name:"上海亚信科技有限公司"},{id:1002,position:"Web前端工程师",name:"哔哩哔哩电竞公司"},{id:1003,position:"Python工程师",name:"上海凯捷咨询有限公司"},{id:1004,position:1e3,name:"上海群硕软件开发公司"},{id:1004,position:1e3,name:"上海爱用宝科技有限公司"}],advanceData:[{id:1001,position:"Web前端工程师",name:"宋瑶"},{id:1002,position:"Web前端工程师",name:"吴鹏"},{id:1003,position:"Java工程师",name:"张数霞"},{id:1004,position:"Python工程师",name:"唐磊"},{id:1004,position:"Java工程师",name:"唐阳阳"}],resumeData:[{id:1001,content:"上传简历",name:"刘甜甜"},{id:1002,content:"上传简历",name:"李晓奕"},{id:1003,content:"上传简历",name:"王凯"},{id:1005,content:"上传简历",name:"范烨"},{id:1005,content:"上传简历",name:"郑戎"}]}},mounted:function(){this.toDraw(),this.toDrawBusiness(),this.toDrawBrush()},methods:{toVouncher:function(){this.$router.push("/voucherCenter/index")},toLogs:function(){this.$router.push("/logs/index")},toDraw:function(){a.a.chart("indexOrder",{credits:{enabled:!1},colors:["#27A9E3","#28B779"],chart:{type:"column",spacing:[0,0,0,0]},title:{text:"待就业和已就业",y:20,style:{fontSize:"14px"}},xAxis:{categories:["11月13日","11月14日","11月15日","11月16日","11月17日","11月18日","11月19日"]},yAxis:{min:0,title:{text:""},stackLabels:{enabled:!0,style:{fontWeight:"bold",color:a.a.theme&&a.a.theme.textColor||"gray"}}},legend:{align:"right",x:-30,verticalAlign:"top",y:25,floating:!0,backgroundColor:a.a.theme&&a.a.theme.background2||"white",borderColor:"#CCC",borderWidth:1,shadow:!1},tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}单</b><br/>',shared:!0},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!0,color:a.a.theme&&a.a.theme.dataLabelsColor||"white",style:{textOutline:"1px 1px black"}}}},series:[{name:"待就业",data:[234,545,373,454,363,243,101]},{name:"已就业",data:[234,545,373,454,363,243,101]}]})},toDrawBusiness:function(){a.a.chart("indexBusiness",{colors:["#0A7BCB","#0899FD","#4CB8FE","#8ED1FE"],credits:{enabled:!1},chart:{type:"pie",spacing:[0,0,0,0],margin:[0,0,0,-70]},title:{floating:!0,x:-35,text:"企业总计<br/>999009",style:{color:"#333333",fontSize:"10px"}},tooltip:{pointFormat:"{series.name}占比:<b>{point.y}%</b>"},legend:{align:"right",verticalAlign:"middle",floating:!0,layout:"vertical"},plotOptions:{pie:{innerSize:100,depth:25,dataLabels:{enabled:!0,distance:-15,format:"<b>{point.y}%</b>",style:{color:"white",fontSize:"12px"}},showInLegend:!0,allowPointSelect:!0,cursor:"pointer"}},series:[{type:"pie",innerSize:"50%",name:"企业数量",data:[["高级企业",30],["普通企业",30],["新手上路",40]]}]},function(t){var e=t.series[0].center[1],n=parseInt(t.title.styles.fontSize);t.setTitle({y:e+n/2-6})})},toDrawBrush:function(){a.a.chart("indexBrush",{colors:["#0A7BCB","#0899FD","#4CB8FE","#8ED1FE"],credits:{enabled:!1},chart:{type:"pie",spacing:[0,0,0,0],margin:[0,0,0,-70]},title:{floating:!0,x:-35,text:"用户总计<br/>999009",style:{color:"#333333",fontSize:"10px"}},tooltip:{pointFormat:"{series.name}占比:<b>{point.y}%</b>"},legend:{align:"right",verticalAlign:"middle",itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",weight:"100px"},layout:"vertical"},plotOptions:{pie:{innerSize:100,depth:25,dataLabels:{enabled:!0,distance:-15,format:"<b>{point.y}%</b>",style:{color:"white",fontSize:"12px"}},showInLegend:!0,allowPointSelect:!0,cursor:"pointer"}},series:[{type:"pie",innerSize:"50%",name:"用户数量",data:[["高级用户",40],["普通用户",50],["新手上路",10]]}]},function(t){var e=t.series[0].center[1],n=parseInt(t.title.styles.fontSize);t.setTitle({y:e+n/2-6})})}}}),l=(n("cMjy"),n("GLcP"),n("ZrdR")),o=Object(l.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("el-row",{staticClass:"index-num",attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"index-num-one"},[n("div",[t._v("\n          今日活动用户：\n          "),n("span",[t._v("220")]),t._v("个\n        ")]),t._v(" "),n("div",[t._v("\n          今日注册用户：\n          "),n("span",[t._v("288")]),t._v("人\n        ")]),t._v(" "),n("div",[t._v("\n          总注册用户：\n          "),n("span",[t._v("1999")]),t._v("人\n        ")])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"index-num-two"},[n("div",[t._v("\n          今日活动企业：\n          "),n("span",[t._v("120")]),t._v("家\n        ")]),t._v(" "),n("div",[t._v("\n          今日注册企业：\n          "),n("span",[t._v("28")]),t._v("家\n        ")]),t._v(" "),n("div",[t._v("\n          总注册企业：\n          "),n("span",[t._v("320")]),t._v("家\n        ")])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"index-num-three"},[n("div",[t._v("\n          今日岗位投放：\n          "),n("span",[t._v("220")]),t._v("个\n        ")]),t._v(" "),n("div",[t._v("\n          浏览个数：\n          "),n("span",[t._v("289")]),t._v("个\n        ")]),t._v(" "),n("div",[t._v("\n          今日简历上传：\n          "),n("span",[t._v("290")]),t._v("个\n        ")])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"index-num-four"},[n("div",[t._v("\n          今日企业联系：\n          "),n("span",[t._v("220")]),t._v("个\n        ")]),t._v(" "),n("div",[t._v("\n          等待面试人数：\n          "),n("span",[t._v("156")]),t._v("个\n        ")]),t._v(" "),n("div",[t._v("\n          今日撤岗个数：\n          "),n("span",[t._v("32")]),t._v("个\n        ")])])])],1),t._v(" "),n("div",{staticClass:"index-curve"},[n("el-row",[n("el-col",{attrs:{span:18}},[n("div",{staticClass:"index-curve-chart"},[n("div",{staticStyle:{"min-width":"400px",height:"300px"},attrs:{id:"indexOrder"}})])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"index-curve-chart"},[n("div",{staticStyle:{"min-width":"200px",height:"150px"},attrs:{id:"indexBusiness"}})]),t._v(" "),n("div",{staticClass:"index-curve-chart"},[n("div",{staticStyle:{"min-width":"200px",height:"150px"},attrs:{id:"indexBrush"}})])])],1)],1),t._v(" "),n("div",{staticClass:"index-news"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"news"},[n("div",{staticClass:"index-title"},[n("div",[t._v("最新招聘")]),t._v(" "),n("div",{staticClass:"linkSpan",on:{click:t.toVouncher}},[t._v("更多>>")])]),t._v(" "),n("div",{staticClass:"index-content"},[n("el-table",{staticStyle:{width:"100%","font-size":"12px"},attrs:{data:t.rechargeData}},[n("el-table-column",{attrs:{align:"center",prop:"id",label:"编号",width:"50"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"position",label:"岗位",width:"130"}}),t._v(" "),n("el-table-column",{attrs:{align:"right",prop:"name",label:"企业"}})],1)],1)])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"posts"},[n("div",{staticClass:"index-title"},[n("div",[t._v("最新就业")]),t._v(" "),n("div",{staticClass:"linkSpan",on:{click:t.toVouncher}},[t._v("更多>>")])]),t._v(" "),n("div",{staticClass:"index-content"},[n("el-table",{staticStyle:{width:"100%","font-size":"12px"},attrs:{data:t.advanceData}},[n("el-table-column",{attrs:{align:"left",prop:"id",label:"编号"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"position",label:"岗位"}}),t._v(" "),n("el-table-column",{attrs:{align:"right",prop:"name",label:"用户"}})],1)],1)])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"servers"},[n("div",{staticClass:"index-title"},[n("div",[t._v("最新简历")]),t._v(" "),n("div",{staticClass:"linkSpan",on:{click:t.toLogs}},[t._v("更多>>")])]),t._v(" "),n("div",{staticClass:"index-content"},[n("el-table",{staticStyle:{width:"100%","font-size":"12px"},attrs:{data:t.resumeData}},[n("el-table-column",{attrs:{align:"left",prop:"id",label:"编号"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"content",label:"内容"}}),t._v(" "),n("el-table-column",{attrs:{align:"right",prop:"name",label:"上传者"}})],1)],1)])])],1)],1)],1)},[],!1,null,"08921ea7",null);o.options.__file="index.vue";e.default=o.exports},cMjy:function(t,e,n){"use strict";var i=n("LW1I");n.n(i).a}}]);