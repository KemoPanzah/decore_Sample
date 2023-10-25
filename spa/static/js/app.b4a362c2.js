(()=>{"use strict";var e={823:(e,t,s)=>{var i=s(1957),r=s(7933),n=s(499),o=s(9835);function a(e,t,s,i,r,n){const a=(0,o.up)("uf-app-layout");return(0,o.wg)(),(0,o.j4)(a,{use:e.use},null,8,["use"])}var l=s(8401),d=s(6970),c=s(5288);s(9665);const u={key:0,class:"row full-width"},h={key:0,class:"row full-width justify-center tree-mini-item-expand"},p={key:0},m={key:1},g={inheritAttrs:!1},f=Object.assign(g,{__name:"uf-app-navigation",setup(e){const t=(0,o.l1)().use,s=(0,n.iH)([]),r=(0,o.Fl)((()=>{let e=[];return t.base_s.forEach((s=>{if(s.view_s.length>0){let i={id:s.id,type:"base",title:s.title,icon:s.icon,selectable:!1,to:"",children:[]};s.view_s.forEach((e=>{let r={id:e.id,type:"view",title:e.title,icon:e.icon,to:"/"+s.id+"/"+e.id,children:[]};t.decore.queries.data.forEach((t=>{t.base_id==s.id&&t.view_id==e.id&&null==t.parent&&r.children.push(t)})),i.children.push(r)})),e.push(i)}})),e}));function a(e){console.log()}return(e,l)=>{const c=(0,o.up)("q-btn"),g=(0,o.up)("q-toolbar"),f=(0,o.up)("q-icon"),_=(0,o.up)("q-item-section"),w=(0,o.up)("q-item"),v=(0,o.up)("q-chip"),y=(0,o.up)("q-tree"),b=(0,o.up)("q-drawer");return(0,o.wg)(),(0,o.j4)(b,{"show-if-above":"",model:!0,width:300,side:"left",breakpoint:0,bordered:"",mini:(0,n.SU)(t).drawer_mini},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"bg-grey-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{dense:"",flat:"",round:"",icon:(0,n.SU)(t).drawer_icon,onClick:l[0]||(l[0]=e=>(0,n.SU)(t).toogleLayoutDrawer())},null,8,["icon"])])),_:1}),(0,o.Wm)(y,{nodes:(0,n.SU)(r),"node-key":"id","label-key":"title",expanded:(0,n.SU)(t).expanded_nodes,"onUpdate:expanded":l[1]||(l[1]=e=>(0,n.SU)(t).expanded_nodes=e),selected:s.value,"onUpdate:selected":l[2]||(l[2]=e=>s.value=e),"no-connectors":"",accordion:""},{"default-header":(0,o.w5)((e=>["base"==e.node.type?((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(w,{class:"tree-item-base full-width row",dense:"",onClick:t=>a(e.node.id)},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"items-center",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"tree-item-base-icon",name:e.node.icon},null,8,["name"])])),_:2},1024),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.node.title),1)])),_:2},1024),e.node.children.length>0?((0,o.wg)(),(0,o.j4)(_,{key:0,avatar:""},{default:(0,o.w5)((()=>[(0,n.SU)(t).expanded_nodes.includes(e.node.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(f,{key:0,name:"mdi-chevron-down"})),(0,n.SU)(t).expanded_nodes.includes(e.node.id)?((0,o.wg)(),(0,o.j4)(f,{key:1,name:"mdi-chevron-up"})):(0,o.kq)("",!0)])),_:2},1024)):(0,o.kq)("",!0)])),_:2},1032,["onClick"]),(0,n.SU)(t).drawer_mini?((0,o.wg)(),(0,o.iD)("div",h,[(0,n.SU)(t).expanded_nodes.includes(e.node.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(f,{key:0,name:"mdi-chevron-down"})),(0,n.SU)(t).expanded_nodes.includes(e.node.id)?((0,o.wg)(),(0,o.j4)(f,{key:1,name:"mdi-chevron-up"})):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])):(0,o.kq)("",!0),"view"==e.node.type?((0,o.wg)(),(0,o.j4)(w,{key:1,class:"tree-item-view full-width row",dense:"",exact:"",to:e.node.to},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"items-center",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"tree-item-view-icon",name:e.node.icon},null,8,["name"])])),_:2},1024),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.node.title),1)])),_:2},1024),e.node.children.length>0?((0,o.wg)(),(0,o.j4)(_,{key:0,avatar:""},{default:(0,o.w5)((()=>[(0,n.SU)(t).expanded_nodes.includes(e.node.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(f,{key:0,name:"mdi-chevron-down",onClick:(0,i.iM)((s=>(0,n.SU)(t).expanded_nodes.push(e.node.id)),["prevent"])},null,8,["onClick"])),(0,n.SU)(t).expanded_nodes.includes(e.node.id)?((0,o.wg)(),(0,o.j4)(f,{key:1,name:"mdi-chevron-up",onClick:(0,i.iM)((s=>(0,n.SU)(t).expanded_nodes.pop(e.node.id)),["prevent"])},null,8,["onClick"])):(0,o.kq)("",!0)])),_:2},1024)):(0,o.kq)("",!0)])),_:2},1032,["to"])):(0,o.kq)("",!0),"user"!=e.node.type||(0,n.SU)(t).drawer_mini?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(w,{key:2,class:"tree-item-query full-width row",dense:"",exact:"",to:JSON.parse(e.node.to)},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"items-center",avatar:""}),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"tree-item-query-chip",style:(0,d.j5)({"padding-left":16*e.node.depth+"px"}),outline:"",label:e.node.title,title:e.node.title},null,8,["style","label","title"])])),_:2},1024),(0,o.Wm)(_,{avatar:""},{default:(0,o.w5)((()=>[e.node.children.length>0?((0,o.wg)(),(0,o.iD)("div",p,[(0,n.SU)(t).expanded_nodes.includes(e.node.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(f,{key:0,name:"mdi-chevron-down",onClick:s=>(0,n.SU)(t).expanded_nodes.push(e.node.id)},null,8,["onClick"])),(0,n.SU)(t).expanded_nodes.includes(e.node.id)?((0,o.wg)(),(0,o.j4)(f,{key:1,name:"mdi-chevron-up",onClick:s=>(0,n.SU)(t).expanded_nodes.pop(e.node.id)},null,8,["onClick"])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",m,[0==e.node.children.length?((0,o.wg)(),(0,o.j4)(f,{key:0,class:"tree-item-query-icon",dense:"",round:"",flat:"",name:"mdi-delete",onClick:(0,i.iM)((s=>(0,n.SU)(t).decore.queries.removeQuery(e.node.id)),["prevent"])},null,8,["onClick"])):(0,o.kq)("",!0)]))])),_:2},1024)])),_:2},1032,["to"]))])),_:1},8,["nodes","expanded","selected"]),(0,o.Wm)(g,{class:"app-navigation-footer bg-grey-2"})])),_:1},8,["mini"])}}});var _=s(906),w=s(1663),v=s(8879),y=s(1893),b=s(490),k=s(1233),S=s(2857),q=s(7691),U=s(9984),j=s.n(U);const x=f,C=x;j()(f,"components",{QDrawer:_.Z,QToolbar:w.Z,QBtn:v.Z,QTree:y.Z,QItem:b.Z,QItemSection:k.Z,QIcon:S.Z,QChip:q.Z});const A={key:0,style:{width:"300px"}},Z={class:"row justify-end items-center"},O={class:"col-auto"},Q={key:0,class:"entry-text"},W={key:1,class:"entry-text"},D={class:"col-auto"},B={inheritAttrs:!1},E=Object.assign(B,{__name:"uf-app-actor",setup(e){const t=(0,o.l1)().use,s=(0,o.Fl)((()=>{let e=null;return t.decore.actor.active_s.length>0?e=t.decore.actor.active_s[t.decore.actor.active_s.length-1]:t.decore.actor.item_s.length>0&&(e=t.decore.actor.item_s[t.decore.actor.item_s.length-1]),e}));return(e,i)=>{const r=(0,o.up)("q-circular-progress"),a=(0,o.up)("q-icon"),l=(0,o.up)("q-badge"),c=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,n.SU)(s)?((0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("div",Z,[(0,o._)("div",O,[(0,n.SU)(s).result?((0,o.wg)(),(0,o.iD)("div",W,(0,d.zw)((0,n.SU)(s).result),1)):((0,o.wg)(),(0,o.iD)("div",Q,(0,d.zw)((0,n.SU)(s).title),1))]),(0,o._)("div",D,[!(0,n.SU)(s).finished&&(0,n.SU)(s).progress>0?((0,o.wg)(),(0,o.j4)(r,{key:0,thickness:.25,value:(0,n.SU)(s).progress,size:"21px"},null,8,["thickness","value"])):(0,n.SU)(s).finished||0!==(0,n.SU)(s).progress?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(r,{key:1,indeterminate:"",thickness:.25,size:"21px"},null,8,["thickness"])),(0,n.SU)(s).finished&&(0,n.SU)(s).success?((0,o.wg)(),(0,o.j4)(a,{key:2,size:"21px",name:"mdi-check-circle",color:"info"})):(0,n.SU)(s).finished&&!(0,n.SU)(s).success?((0,o.wg)(),(0,o.j4)(a,{key:3,size:"21px",name:"mdi-alert-circle",color:"warning"})):(0,o.kq)("",!0)])])])):(0,o.kq)("",!0),(0,o.Wm)(c,{dense:"",flat:"",round:"",icon:"mdi-menu-open"},{default:(0,o.w5)((()=>[(0,n.SU)(t).decore.actor.active_s.length>1?((0,o.wg)(),(0,o.j4)(l,{key:0,floating:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)((0,n.SU)(t).decore.actor.active_s.length),1)])),_:1})):(0,o.kq)("",!0)])),_:1})],64)}}});var P=s(1639),T=s(2074),M=s(4458),I=s(3190),L=s(3302),F=s(990);const z=(0,P.Z)(E,[["__scopeId","data-v-07f6c40b"]]),N=z;j()(E,"components",{QDialog:T.Z,QCard:M.Z,QCardSection:I.Z,QCircularProgress:L.Z,QIcon:S.Z,QBtn:v.Z,QBadge:F.Z});const R={inheritAttrs:!1},H=Object.assign(R,{__name:"uf-app-layout",setup(e){const t=(0,o.l1)().use,s=(0,o.Fl)((()=>{let e=t.route.params.view_id+JSON.stringify(t.route.query);return e}));return kofiWidgetOverlay.draw("decore_base",{type:"floating-chat","floating-chat.donateButton.text":"Support Dev","floating-chat.donateButton.background-color":"#075767","floating-chat.donateButton.text-color":"#fff"}),(e,i)=>{const r=(0,o.up)("q-toolbar-title"),a=(0,o.up)("q-toolbar"),l=(0,o.up)("q-header"),u=(0,o.up)("router-view"),h=(0,o.up)("q-page-container"),p=(0,o.up)("q-space"),m=(0,o.up)("q-footer"),g=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c.Z,{use:(0,n.SU)(t)},null,8,["use"]),(0,o.Wm)(l,{bordered:"",class:"bg-black text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)((0,n.SU)(t).title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(C,{use:(0,n.SU)(t)},null,8,["use"]),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(u,{key:(0,n.SU)(s)}))])),_:1}),(0,o.Wm)(m,{bordered:"",class:"bg-grey-8 text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{dense:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p),(0,o.Wm)(N,{use:(0,n.SU)(t)},null,8,["use"])])),_:1})])),_:1})])),_:1})}}});var G=s(7605),J=s(6602),X=s(1973),$=s(2133),K=s(1378),V=s(136);const Y=H,ee=Y;j()(H,"components",{QLayout:G.Z,QHeader:J.Z,QToolbar:w.Z,QToolbarTitle:X.Z,QPageContainer:$.Z,QFooter:K.Z,QSpace:V.Z});var te=s(5360),se=s(8339);class ie extends te.y{constructor(e){super(e),this.ql={},this.router=(0,se.tv)(),this.route=(0,se.yj)(),this.drawer_icon="mdi-backburger",this.drawer_mini=!1,this.expanded_nodes=[]}toogleLayoutDrawer(){this.drawer_mini=!this.drawer_mini,this.drawer_mini?this.drawer_icon="mdi-forwardburger":this.drawer_icon="mdi-backburger"}}const re=(0,o.aZ)({name:"App",components:{"uf-app-layout":ee},setup(){const e=(0,n.qj)(new ie("app"));return(0,l.Z)((()=>({title:e.title}))),{use:e}}}),ne=(0,P.Z)(re,[["render",a]]),oe=ne;var ae=s(3340),le=s(1809);const de=(0,ae.h)((()=>{const e=(0,le.WB)();return e})),ce=[{name:"view",path:"/:base_id/:view_id",component:()=>Promise.all([s.e(736),s.e(578)]).then(s.bind(s,578)),props:!0},{name:"dialog",path:"/:base_id/:view_id/:dialog_id/:item_id",component:()=>Promise.all([s.e(736),s.e(578)]).then(s.bind(s,578)),props:!0},{name:"subdialog",path:"/:base_id/:view_id/:dialog_id/:item_id/:subdialog_id/:subitem_id",component:()=>Promise.all([s.e(736),s.e(578)]).then(s.bind(s,578)),props:!0},{path:"/login",redirect:"/BI_Account_base/bi_login_view/bi_login_dialog/empty"},{path:"/:catchAll(.*)*",component:()=>s.e(65).then(s.bind(s,7065))}],ue=ce;s(198);const he=(0,ae.BC)((function(){const e=se.PO,t=(0,se.p7)({scrollBehavior:()=>({left:0,top:0}),routes:ue,history:e("/")});return t}));async function pe(e,t){const s=e(oe);s.use(r.Z,t);const i="function"===typeof de?await de({}):de;s.use(i);const o=(0,n.Xl)("function"===typeof he?await he({store:i}):he);return i.use((({store:e})=>{e.router=o})),{app:s,store:i,router:o}}const me={config:{}},ge="/static/",fe=/\/\//,_e=e=>(ge+e).replace(fe,"/");async function we({app:e,router:t,store:s},i){let r=!1;const n=e=>{try{return _e(t.resolve(e).href)}catch(s){}return Object(e)===e?null:e},o=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},a=window.location.href.replace(window.location.origin,"");for(let d=0;!1===r&&d<i.length;d++)try{await i[d]({app:e,router:t,store:s,ssrContext:null,redirect:o,urlPath:a,publicPath:ge})}catch(l){return l&&l.url?void o(l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&(e.use(t),e.mount("#q-app"))}pe(i.ri,me).then((e=>{const[t,i]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(s.bind(s,8619))]).then((t=>{const s=i(t).filter((e=>"function"===typeof e));we(e,s)}))}))},8619:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s(3340),r=s(9981),n=s.n(r),o=s(198),a=document.getElementsByTagName("meta")[5].content,l=document.getElementsByTagName("meta")[6].content,d="";d="{{port}}"==a?l:a,n().defaults.baseURL="http://localhost:"+d;const c=(0,i.xr)((async({router:e,store:t})=>{t.use((()=>({axios:n()})));const s=(0,o.n)();await s.guestLogin(),await s.setMeta(),await s.setSources(),e.addRoute({path:"/",redirect:s.meta.app.base_id+"/"+s.meta.app.view_id})}))},198:(e,t,s)=>{s.d(t,{n:()=>d});s(9665);var i=s(1809),r=s(9981),n=s.n(r);class o{constructor(e,t){this.id=e.id,this.model=e.model,this.field_s=e.field_s,this.rel_field_s=e.rel_field_s,this.schema=e.schema,this.ref=t}getItem(e){return e?n().get("/get_item/"+this.id+"/"+e):Promise.resolve({data:null})}getDefault(){return n().get("/get_default/"+this.id)}getFirst(){return n().get("/get_first/"+this.id)}getLast(){return n().get("/get_last/"+this.id)}getItems(e){return n().post("/post_item_s/"+this.id,e)}getRelItems(e){return n().post("/post_rel_item_s/"+this.id,e)}getFilterValues(e,t,s){return n().post("/post_filter_value_s/"+this.id,{query:e,attr:t,rel_attr:s})}getRefByModel(e){let t=null;for(const s in this.ref)this.ref[s].model==e&&(t=this.ref[s]);return t}}class a{constructor(){this.data=[],this.setData()}setData(){n().get("/get_query_s").then((e=>{this.data=e.data}))}saveQuery(e){n().post("/post_save_query/"+e.params.base_id+"/"+e.params.view_id,e.query).then((e=>{"success"==e.data&&this.setData()}))}removeQuery(e){n().get("get_remove_query/"+e).then((e=>{"success"==e.data&&this.setData()}))}}class l{constructor(e){this.active_s=[],this.item_s=[],this.interval=null}async callGetActorActives(e){this.active_s.push(e),this.item_s.push(e),this.interval||(this.interval=setInterval((()=>{this.getActorActives(),0===this.active_s.length&&(clearInterval(this.interval),this.interval=null)}),1e3))}getActorActives(){n().get("/get_actor_active_s").then((e=>{this.active_s=e.data}))}getActorItems(){n().get("/get_actor_item_s").then((e=>{this.item_s=e.data}))}async postAction(e,t){let s={};return this.callGetActorActives({id:"init",title:e.title,desc:e.desc,finished:!1,progress:0}),"standard"==e.type||"submit"==e.type?await n().post("/post_action/"+e.id,t).then((e=>{s=e.data,this.getActorItems()})).catch((e=>{console.log(e)})):"file"==e.type?n().post("/post_action/"+e.id,t,{responseType:"blob"}).then((e=>{let t=e.headers["content-disposition"].split(";")[1].split("=")[1];this.downloadFile(e.data,t)})).catch((e=>{console.log(e)})):"login"==e.type?await n().post("/post_action/"+e.id,t).then((e=>{s=e.data,this.getActorItems(),1==e.data.success?(n().defaults.headers.common.Authorization=`Bearer ${e.data.result}`,window.location.href="/"):console.log(e.data.result)})).catch((e=>{console.log(e)})):await n().post("/post_action/"+e.id,null).then((e=>{s=e.data,this.getActorItems()})).catch((e=>{console.log(e)})),s}downloadFile(e,t){const s=URL.createObjectURL(e),i=document.createElement("a");i.href=s,i.download=t,i.click()}}const d=(0,i.Q_)("decore",{state:()=>({meta:{},app:{},use:{},source:{},queries:new a,actor:new l}),getters:{},actions:{clear(){this.use={},this.source={}},getMetas(e){let t=[];return e.forEach((e=>{t.push(this.meta[e])})),t},async guestLogin(){const e="guest@decore.base",t="password";await this.axios.post("/login",{username:e,password:t}).then((e=>{this.axios.defaults.headers.common["Authorization"]=`Bearer ${e.data.result}`})).catch((e=>{console.log(e.response.data.result)}))},async setMeta(){await this.axios.get("/get_meta").then((e=>{this.axios.defaults.headers.common["X-CSRFToken"]=e.data.csrf_token,this.meta=e.data})),Object.values(this.meta).forEach((e=>{e.base_s=this.getMetas(e.base_id_s),e.view_s=this.getMetas(e.view_id_s),e.dialog_s=this.getMetas(e.dialog_id_s),e.widget_s=this.getMetas(e.widget_id_s),e.action_s=this.getMetas(e.action_id_s),e.element_s=this.getMetas(e.element_id_s)}))},async setSources(){this.meta.app.base_s.forEach((e=>{let t=new o(e,this.source);this.source[e.id]=t}))},getSourceByModel(e){for(const t of Object.values(this.source))if(e==t.model)return t},getSourceByMetaID(e){return this.source[this.meta[e].source_id]},regApp(e){this.app=e},regUse(e){this.use[e.id]=e}}})},5360:(e,t,s)=>{s.d(t,{y:()=>r});var i=s(198);class r{constructor(e){this.decore=(0,i.n)(),this.setProperties(this.decore.meta[e]),this.registerUse()}setProperties(e){var t=Object.keys(e);t.forEach((t=>{this[t]=e[t]}))}registerUse(){"app"===this.id?(this.decore.regApp(this),this.ref=this.decore.use):(this.decore.regUse(this),this.app=this.decore.app,this.ref=this.decore.use)}}},5288:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(9835);const r={inheritAttrs:!1},n=Object.assign(r,{__name:"uf-layout-injector",setup(e){const t=(0,i.l1)().use;return t.ql=(0,i.f3)("_q_l_"),(e,t)=>((0,i.wg)(),(0,i.iD)("span"))}}),o=n,a=o}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}s.m=e,(()=>{var e=[];s.O=(t,i,r,n)=>{if(!i){var o=1/0;for(c=0;c<e.length;c++){for(var[i,r,n]=e[c],a=!0,l=0;l<i.length;l++)(!1&n||o>=n)&&Object.keys(s.O).every((e=>s.O[e](i[l])))?i.splice(l--,1):(a=!1,n<o&&(o=n));if(a){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,r,n]}})(),(()=>{s.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return s.d(t,{a:t}),t}})(),(()=>{s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,i)=>(s.f[i](e,t),t)),[]))})(),(()=>{s.u=e=>"js/"+e+"."+{65:"5b01fac0",578:"3f04d830"}[e]+".js"})(),(()=>{s.miniCssF=e=>"css/"+e+".f298c8b0.css"})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="uniform_front:";s.l=(i,r,n,o)=>{if(e[i])e[i].push(r);else{var a,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+n){a=u;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",t+n),a.src=i),e[i]=[r];var h=(t,s)=>{a.onerror=a.onload=null,clearTimeout(p);var r=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(s))),t)return t(s)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),(()=>{s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{s.p="/static/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,s,i,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=s=>{if(n.onerror=n.onload=null,"load"===s.type)i();else{var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=a,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=o,n.href=t,s?s.parentNode.insertBefore(n,s.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var r=s[i],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){r=o[i],n=r.getAttribute("data-href");if(n===e||n===t)return r}},i=i=>new Promise(((r,n)=>{var o=s.miniCssF(i),a=s.p+o;if(t(o,a))return r();e(i,a,null,r,n)})),r={143:0};s.f.miniCss=(e,t)=>{var s={578:1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=i(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}}})(),(()=>{var e={143:0};s.f.j=(t,i)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise(((s,i)=>r=e[t]=[s,i]));i.push(r[2]=n);var o=s.p+s.u(t),a=new Error,l=i=>{if(s.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",a.name="ChunkLoadError",a.type=n,a.request=o,r[1](a)}};s.l(o,l,"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,i)=>{var r,n,[o,a,l]=i,d=0;if(o.some((t=>0!==e[t]))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(l)var c=l(s)}for(t&&t(i);d<o.length;d++)n=o[d],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(c)},i=globalThis["webpackChunkuniform_front"]=globalThis["webpackChunkuniform_front"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=s.O(void 0,[736],(()=>s(823)));i=s.O(i)})();