webpackJsonp([1],{"2pWG":function(t,s){},"5OML":function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("router-view")],1)},staticRenderFns:[]},a=i("VU/8")({name:"App"},n,!1,null,null,null).exports,o=i("/ocq"),c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content",on:{click:function(s){t.isShow()}}},[i("div",{staticClass:"list"},[i("div",{staticClass:"itemList"},[i("div",{staticClass:"itemTitle"},[t._v("字体")]),i("div",{staticClass:"option"},[i("button",{class:{active:"smallFont"==this.$store.state.fontSize},on:{click:function(s){t.fontSize("smallFont")}}},[t._v("小")]),i("button",{class:{active:"middleFont"==this.$store.state.fontSize},on:{click:function(s){t.fontSize("middleFont")}}},[t._v("中")]),i("button",{class:{active:"bigFont"==this.$store.state.fontSize},on:{click:function(s){t.fontSize("bigFont")}}},[t._v("大")])])]),i("div",{staticClass:"itemList"},[i("div",{staticClass:"itemTitle"},[t._v("背景")]),i("div",{staticClass:"option colorList"},[i("div",{staticClass:"white",class:{active:"white"==this.$store.state.backgroundColor},on:{click:function(s){t.backgroundColor("white")}}}),i("div",{staticClass:"pink",class:{active:"pink"==this.$store.state.backgroundColor},on:{click:function(s){t.backgroundColor("pink")}}}),i("div",{staticClass:"yellow",class:{active:"yellow"==this.$store.state.backgroundColor},on:{click:function(s){t.backgroundColor("yellow")}}}),i("div",{staticClass:"green",class:{active:"green"==this.$store.state.backgroundColor},on:{click:function(s){t.backgroundColor("green")}}})])]),i("div",{staticClass:"itemList"},[i("div",{staticClass:"itemTitle"},[t._v("阅读模式")]),"byDay"==this.$store.state.isNight?i("img",{attrs:{src:"/static/daytime.png"},on:{click:function(s){t.isNight("night")}}}):t._e(),"night"==this.$store.state.isNight?i("img",{attrs:{src:"/static/night.png"},on:{click:function(s){t.isNight("byDay")}}}):t._e()])])])},staticRenderFns:[]};var r=i("VU/8")({data:function(){return{}},methods:{isShow:function(){this.$parent.setPattern(0)},fontSize:function(t){this.$store.commit("setFontSize",t)},backgroundColor:function(t){this.$store.commit("setBackgroundColor",t)},isNight:function(t){this.$store.commit("setIsNight",t)}}},c,!1,function(t){i("2pWG")},"data-v-fb9b85f6",null).exports,l={data:function(){return{isToday:0}},props:{detailsData:{type:Object,default:{}}},methods:{isShow:function(){this.$parent.setOption(0)},isAdvance:function(){this.dayData(this.detailsData.date.prev)},isRetreat:function(){this.dayData(this.detailsData.date.next)},isRandom:function(){var t=this;this.$axios.get("/article/random?dev=1").then(function(s){t.$parent.callback(s.data)})},isDay:function(){this.dayData(this.$store.state.day)},dayData:function(t){var s=this;this.$axios.get("/article/day?dev=1&date="+t).then(function(t){s.isToday=1,s.$parent.callback(t.data)})}}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content",on:{click:function(s){t.isShow()}}},[i("div",{staticClass:"list"},[i("div",{staticClass:"advance",on:{click:function(s){t.isAdvance()}}},[i("img",{attrs:{src:"/static/advance.png"}}),i("div",{staticClass:"t"},[t._v("前一天")])]),this.$store.state.day!=this.$store.state.currentTime&&0!=t.isToday?i("div",{staticClass:"retreat",on:{click:function(s){t.isRetreat()}}},[i("img",{attrs:{src:"/static/retreat.png"}}),i("div",{staticClass:"t"},[t._v("后一天")])]):t._e(),i("div",{staticClass:"random",on:{click:function(s){t.isRandom()}}},[i("img",{attrs:{src:"/static/random.png"}}),i("div",{staticClass:"t"},[t._v("随机")])]),this.$store.state.day!=this.$store.state.currentTime&&0!=t.isToday?i("div",{staticClass:"day",on:{click:function(s){t.isDay()}}},[i("img",{attrs:{src:"/static/day.png"}}),i("div",{staticClass:"t"},[t._v("今天")])]):t._e()])])},staticRenderFns:[]};var u=i("VU/8")(l,d,!1,function(t){i("5OML")},"data-v-1755c376",null).exports,v={data:function(){return{details:{},isSet:0,isOption:0,scrollTop:0}},components:{settings:r,optionList:u},methods:{getToday:function(){var t=this;this.$axios.get("/article/today?dev=1").then(function(s){t.details=s.data,t.$store.commit("setDay",s.data.date.curr)})},setPattern:function(t){this.isSet=t},setOption:function(t){this.isOption=t},callback:function(t){this.details=t,this.$store.commit("setCurrentTime",t.date.curr)},handleScroll:function(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop}},mounted:function(){this.getToday(),window.addEventListener("scroll",this.handleScroll)}},h={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{class:[this.$store.state.backgroundColor,this.$store.state.isNight],attrs:{id:"app"}},[i("div",{staticClass:"head"},[i("img",{staticClass:"set",attrs:{src:"/static/set_icon.png"},on:{click:function(s){t.setPattern(1)}}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollTop>=100,expression:"scrollTop>=100"}],staticClass:"minTitle"},[t._v(t._s(t.details.title))]),t._v(" "),i("img",{staticClass:"option",attrs:{src:"/static/x_icon.png"},on:{click:function(s){t.setOption(1)}}})]),t._v(" "),i("div",{class:this.$store.state.fontSize},[i("div",{staticClass:"title"},[t._v(t._s(t.details.title))]),t._v(" "),i("div",{staticClass:"author"},[t._v(t._s(t.details.author))]),t._v(" "),i("div",{staticClass:"detailsContent",domProps:{innerHTML:t._s(t.details.content)}}),t._v(" "),i("div",{staticClass:"wc"},[t._v("全文完 共"+t._s(t.details.wc)+"字")])]),t._v(" "),1===t.isSet?i("settings"):t._e(),t._v(" "),i("optionList",{directives:[{name:"show",rawName:"v-show",value:1===t.isOption,expression:"isOption===1"}],attrs:{detailsData:t.details}})],1)},staticRenderFns:[]};var f=i("VU/8")(v,h,!1,function(t){i("haiC")},null,null).exports;e.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"home",component:f},{path:"/components/settings",name:"settings",component:r},{path:"/components/optionList",name:"optionList",component:u}]}),m=i("NYxO");e.a.use(m.a);var g=new m.a.Store({state:{day:0,currentTime:0,fontSize:"smallFont",backgroundColor:"white",isNight:"byDay"},mutations:{setDay:function(t,s){t.day=s},setCurrentTime:function(t,s){t.currentTime=s},setFontSize:function(t,s){t.fontSize=s},setBackgroundColor:function(t,s){t.backgroundColor=s},setIsNight:function(t,s){t.isNight=s}}}),C=i("//Fk"),_=i.n(C),k=i("mtWM"),y=i.n(k);y.a.defaults.timeout=12e3,y.a.defaults.baseURL="https://interface.meiriyiwen.com",y.a.interceptors.response.use(function(t){if(200==t.status)return t.data},function(t){return _.a.reject(t)}),e.a.prototype.$axios=y.a,e.a.config.productionTip=!1,new e.a({el:"#app",router:p,store:g,components:{App:a},template:"<App/>"})},haiC:function(t,s){}},["NHnr"]);