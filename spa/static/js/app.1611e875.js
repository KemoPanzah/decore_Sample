(()=>{"use strict";var e={823:(e,t,r)=>{var n=r(1957),i=r(7933),s=r(499),o=r(9835);function a(e,t,r,n,i,s){const a=(0,o.up)("uf-app-layout");return(0,o.wg)(),(0,o.j4)(a,{use:e.use},null,8,["use"])}var l=r(8401),d=r(6970),c=r(5288);r(9665);const u={key:0,class:"row full-width"},h={key:0,class:"row full-width justify-center tree-mini-item-expand"},p={key:0},m={key:1},f={inheritAttrs:!1},g=Object.assign(f,{__name:"uf-app-navigation",setup(e){const t=(0,o.l1)().use,r=(0,s.iH)([]),i=(0,s.iH)([]),a=(0,o.Fl)((()=>{let e=[];return t.base_s.forEach((r=>{if(r.view_s.length>0){let n={id:r.id,type:"base",title:r.title,icon:r.icon,selectable:!1,to:"",children:[]};r.view_s.forEach((e=>{let i={id:e.id,type:"view",title:e.title,icon:e.icon,to:"/"+r.id+"/"+e.id,children:[]};t.uniform.queries.data.forEach((t=>{t.base_id==r.id&&t.view_id==e.id&&null==t.parent&&i.children.push(t)})),n.children.push(i)})),e.push(n)}})),e}));function l(e){console.log()}return(e,c)=>{const f=(0,o.up)("q-btn"),g=(0,o.up)("q-toolbar"),v=(0,o.up)("q-icon"),w=(0,o.up)("q-item-section"),_=(0,o.up)("q-item"),y=(0,o.up)("q-chip"),b=(0,o.up)("q-tree"),k=(0,o.up)("q-drawer");return(0,o.wg)(),(0,o.j4)(k,{"show-if-above":"",model:!0,width:300,side:"left",breakpoint:0,bordered:"",mini:(0,s.SU)(t).drawer_mini},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"bg-grey-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{dense:"",flat:"",round:"",icon:(0,s.SU)(t).drawer_icon,onClick:c[0]||(c[0]=e=>(0,s.SU)(t).toogleLayoutDrawer())},null,8,["icon"])])),_:1}),(0,o.Wm)(b,{nodes:(0,s.SU)(a),"node-key":"id","label-key":"title",expanded:r.value,"onUpdate:expanded":c[1]||(c[1]=e=>r.value=e),selected:i.value,"onUpdate:selected":c[2]||(c[2]=e=>i.value=e),"no-connectors":"",accordion:""},{"default-header":(0,o.w5)((e=>["base"==e.node.type?((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(_,{class:"tree-item-base full-width row",dense:"",onClick:t=>l(e.node.id)},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"items-center",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"tree-item-base-icon",name:e.node.icon},null,8,["name"])])),_:2},1024),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.node.title),1)])),_:2},1024),e.node.children.length>0?((0,o.wg)(),(0,o.j4)(w,{key:0,avatar:""},{default:(0,o.w5)((()=>[r.value.includes(e.node.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:0,name:"mdi-chevron-down"})),r.value.includes(e.node.id)?((0,o.wg)(),(0,o.j4)(v,{key:1,name:"mdi-chevron-up"})):(0,o.kq)("",!0)])),_:2},1024)):(0,o.kq)("",!0)])),_:2},1032,["onClick"]),(0,s.SU)(t).drawer_mini?((0,o.wg)(),(0,o.iD)("div",h,[r.value.includes(e.node.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:0,name:"mdi-chevron-down"})),r.value.includes(e.node.id)?((0,o.wg)(),(0,o.j4)(v,{key:1,name:"mdi-chevron-up"})):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])):(0,o.kq)("",!0),"view"==e.node.type?((0,o.wg)(),(0,o.j4)(_,{key:1,class:"tree-item-view full-width row",dense:"",exact:"",to:e.node.to},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"items-center",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"tree-item-view-icon",name:e.node.icon},null,8,["name"])])),_:2},1024),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.node.title),1)])),_:2},1024),e.node.children.length>0?((0,o.wg)(),(0,o.j4)(w,{key:0,avatar:""},{default:(0,o.w5)((()=>[r.value.includes(e.node.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:0,name:"mdi-chevron-down",onClick:(0,n.iM)((t=>r.value.push(e.node.id)),["prevent"])},null,8,["onClick"])),r.value.includes(e.node.id)?((0,o.wg)(),(0,o.j4)(v,{key:1,name:"mdi-chevron-up",onClick:(0,n.iM)((t=>r.value.pop(e.node.id)),["prevent"])},null,8,["onClick"])):(0,o.kq)("",!0)])),_:2},1024)):(0,o.kq)("",!0)])),_:2},1032,["to"])):(0,o.kq)("",!0),"user"!=e.node.type||(0,s.SU)(t).drawer_mini?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(_,{key:2,class:"tree-item-query full-width row",dense:"",exact:"",to:JSON.parse(e.node.to)},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"items-center",avatar:""}),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"tree-item-query-chip",style:(0,d.j5)({"padding-left":16*e.node.depth+"px"}),outline:"",label:e.node.title,title:e.node.title},null,8,["style","label","title"])])),_:2},1024),(0,o.Wm)(w,{avatar:""},{default:(0,o.w5)((()=>[e.node.children.length>0?((0,o.wg)(),(0,o.iD)("div",p,[r.value.includes(e.node.id)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:0,name:"mdi-chevron-down",onClick:t=>r.value.push(e.node.id)},null,8,["onClick"])),r.value.includes(e.node.id)?((0,o.wg)(),(0,o.j4)(v,{key:1,name:"mdi-chevron-up",onClick:t=>r.value.pop(e.node.id)},null,8,["onClick"])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",m,[0==e.node.children.length?((0,o.wg)(),(0,o.j4)(v,{key:0,class:"tree-item-query-icon",dense:"",round:"",flat:"",name:"mdi-delete",onClick:(0,n.iM)((r=>(0,s.SU)(t).uniform.queries.removeQuery(e.node.id)),["prevent"])},null,8,["onClick"])):(0,o.kq)("",!0)]))])),_:2},1024)])),_:2},1032,["to"]))])),_:1},8,["nodes","expanded","selected"]),(0,o.Wm)(g,{class:"app-navigation-footer bg-grey-2"})])),_:1},8,["mini"])}}});var v=r(906),w=r(1663),_=r(8879),y=r(1893),b=r(490),k=r(1233),q=r(2857),j=r(7691),S=r(9984),U=r.n(S);const C=g,x=C;U()(g,"components",{QDrawer:v.Z,QToolbar:w.Z,QBtn:_.Z,QTree:y.Z,QItem:b.Z,QItemSection:k.Z,QIcon:q.Z,QChip:j.Z});const Z={key:0,style:{width:"300px"}},Q={class:"row justify-end items-center"},W={class:"col-auto"},O={key:0,class:"entry-text"},A={key:1,class:"entry-text"},E={class:"col-auto"},D={inheritAttrs:!1},P=Object.assign(D,{__name:"uf-app-actor",setup(e){const t=(0,o.l1)().use,r=(0,o.Fl)((()=>{let e=null;return t.uniform.actor.active_s.length>0?e=t.uniform.actor.active_s[t.uniform.actor.active_s.length-1]:t.uniform.actor.item_s.length>0&&(e=t.uniform.actor.item_s[t.uniform.actor.item_s.length-1]),e}));return(e,n)=>{const i=(0,o.up)("q-circular-progress"),a=(0,o.up)("q-icon"),l=(0,o.up)("q-badge"),c=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,s.SU)(r)?((0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",Q,[(0,o._)("div",W,[(0,s.SU)(r).result?((0,o.wg)(),(0,o.iD)("div",A,(0,d.zw)((0,s.SU)(r).result),1)):((0,o.wg)(),(0,o.iD)("div",O,(0,d.zw)((0,s.SU)(r).title),1))]),(0,o._)("div",E,[!(0,s.SU)(r).finished&&(0,s.SU)(r).progress>0?((0,o.wg)(),(0,o.j4)(i,{key:0,thickness:.25,value:(0,s.SU)(r).progress,size:"21px"},null,8,["thickness","value"])):(0,s.SU)(r).finished||0!==(0,s.SU)(r).progress?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(i,{key:1,indeterminate:"",thickness:.25,size:"21px"},null,8,["thickness"])),(0,s.SU)(r).finished&&(0,s.SU)(r).success?((0,o.wg)(),(0,o.j4)(a,{key:2,size:"21px",name:"mdi-check-circle",color:"info"})):(0,s.SU)(r).finished&&!(0,s.SU)(r).success?((0,o.wg)(),(0,o.j4)(a,{key:3,size:"21px",name:"mdi-alert-circle",color:"warning"})):(0,o.kq)("",!0)])])])):(0,o.kq)("",!0),(0,o.Wm)(c,{dense:"",flat:"",round:"",icon:"mdi-menu-open"},{default:(0,o.w5)((()=>[(0,s.SU)(t).uniform.actor.active_s.length>1?((0,o.wg)(),(0,o.j4)(l,{key:0,floating:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)((0,s.SU)(t).uniform.actor.active_s.length),1)])),_:1})):(0,o.kq)("",!0)])),_:1})],64)}}});var T=r(1639),B=r(2074),I=r(4458),M=r(3190),L=r(3302),F=r(990);const N=(0,T.Z)(P,[["__scopeId","data-v-7d35bdfe"]]),z=N;U()(P,"components",{QDialog:B.Z,QCard:I.Z,QCardSection:M.Z,QCircularProgress:L.Z,QIcon:q.Z,QBtn:_.Z,QBadge:F.Z});const R={inheritAttrs:!1},H=Object.assign(R,{__name:"uf-app-layout",setup(e){const t=(0,o.l1)().use;return kofiWidgetOverlay.draw("decore_base",{type:"floating-chat","floating-chat.donateButton.text":"Support Dev","floating-chat.donateButton.background-color":"#075767","floating-chat.donateButton.text-color":"#fff"}),(e,r)=>{const n=(0,o.up)("q-toolbar-title"),i=(0,o.up)("q-toolbar"),a=(0,o.up)("q-header"),l=(0,o.up)("router-view"),u=(0,o.up)("q-page-container"),h=(0,o.up)("q-space"),p=(0,o.up)("q-footer"),m=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c.Z,{use:(0,s.SU)(t)},null,8,["use"]),(0,o.Wm)(a,{bordered:"",class:"bg-black text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)((0,s.SU)(t).title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(x,{use:(0,s.SU)(t)},null,8,["use"]),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(l,{key:e.$route.fullPath}))])),_:1}),(0,o.Wm)(p,{bordered:"",class:"bg-grey-8 text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{dense:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h),(0,o.Wm)(z,{use:(0,s.SU)(t)},null,8,["use"])])),_:1})])),_:1})])),_:1})}}});var G=r(7605),X=r(6602),J=r(1973),K=r(2133),V=r(1378),Y=r(136);const $=H,ee=$;U()(H,"components",{QLayout:G.Z,QHeader:X.Z,QToolbar:w.Z,QToolbarTitle:J.Z,QPageContainer:K.Z,QFooter:V.Z,QSpace:Y.Z});var te=r(5360);class re extends te.y{constructor(e){super(e),this.ql={},this.drawer_icon="mdi-backburger",this.drawer_mini=!1,this.expanded_nodes=[]}toogleLayoutDrawer(){this.drawer_mini=!this.drawer_mini,this.drawer_mini?this.drawer_icon="mdi-forwardburger":this.drawer_icon="mdi-backburger"}}const ne=(0,o.aZ)({name:"App",components:{"uf-app-layout":ee},setup(){const e=(0,s.qj)(new re("app"));return(0,l.Z)((()=>({title:e.title}))),{use:e}}}),ie=(0,T.Z)(ne,[["render",a]]),se=ie;var oe=r(3340),ae=r(1809);const le=(0,oe.h)((()=>{const e=(0,ae.WB)();return e}));var de=r(8339);const ce=[{path:"/:base_id/:view_id",component:()=>Promise.all([r.e(736),r.e(746)]).then(r.bind(r,7746))},{path:"/:catchAll(.*)*",component:()=>r.e(65).then(r.bind(r,7065))}],ue=ce;var he=r(9167);const pe=(0,oe.BC)((function(){const e=de.PO,t=(0,de.p7)({scrollBehavior:()=>({left:0,top:0}),routes:ue,history:e("/")});return t.beforeEach(((e,t)=>{const r=(0,he.I)();return r.use.app.expanded_nodes.push(e.params.base_id),!0})),t}));async function me(e,t){const r=e(se);r.use(i.Z,t);const n="function"===typeof le?await le({}):le;r.use(n);const o=(0,s.Xl)("function"===typeof pe?await pe({store:n}):pe);return n.use((({store:e})=>{e.router=o})),{app:r,store:n,router:o}}const fe={config:{}},ge="/static/",ve=/\/\//,we=e=>(ge+e).replace(ve,"/");async function _e({app:e,router:t,store:r},n){let i=!1;const s=e=>{try{return we(t.resolve(e).href)}catch(r){}return Object(e)===e?null:e},o=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t)},a=window.location.href.replace(window.location.origin,"");for(let d=0;!1===i&&d<n.length;d++)try{await n[d]({app:e,router:t,store:r,ssrContext:null,redirect:o,urlPath:a,publicPath:ge})}catch(l){return l&&l.url?void o(l.url):void console.error("[Quasar] boot error:",l)}!0!==i&&(e.use(t),e.mount("#q-app"))}me(n.ri,fe).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,6898))]).then((t=>{const r=n(t).filter((e=>"function"===typeof e));_e(e,r)}))}))},6898:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(3340),i=r(9981),s=r.n(i),o=r(9167),a=document.getElementsByTagName("meta")[5].content,l=document.getElementsByTagName("meta")[6].content,d="";d="{{port}}"==a?l:a,s().defaults.baseURL="http://localhost:"+d;const c=(0,n.xr)((async({router:e,store:t})=>{t.use((()=>({axios:s()})));const r=(0,o.I)();await r.setMeta(),await r.setSources(),e.addRoute({path:"/",redirect:r.meta.app.base_id+"/"+r.meta.app.view_id})}))},9167:(e,t,r)=>{r.d(t,{I:()=>d});r(9665);var n=r(1809),i=r(9981),s=r.n(i);class o{constructor(e,t){this.id=e.id,this.model=e.model,this.field_s=e.field_s,this.rel_field_s=e.rel_field_s,this.schema=e.schema,this.ref=t}getItem(e){return e?s().get("/get_item/"+this.id+"/"+e):Promise.resolve({data:null})}getDefault(){return s().get("/get_default/"+this.id)}getLast(){return s().get("/get_last/"+this.id)}getItems(e){return s().post("/post_item_s/"+this.id,e)}getRelItems(e){return s().post("/post_rel_item_s/"+this.id,e)}getFilterValues(e,t,r){return s().post("/post_filter_value_s/"+this.id,{query:e,attr:t,rel_attr:r})}getRefByModel(e){let t=null;for(const r in this.ref)this.ref[r].model==e&&(t=this.ref[r]);return t}}class a{constructor(){this.data=[],this.setData()}setData(){s().get("/get_query_s").then((e=>{this.data=e.data}))}saveQuery(e){s().post("/post_save_query/"+e.params.base_id+"/"+e.params.view_id,e.query).then((e=>{"success"==e.data&&this.setData()}))}removeQuery(e){s().get("get_remove_query/"+e).then((e=>{"success"==e.data&&this.setData()}))}}class l{constructor(){this.active_s=[],this.item_s=[],this.interval=null}async callGetActorActives(e){this.active_s.push(e),this.item_s.push(e),this.interval||(console.log(this.interval),this.interval=setInterval((()=>{this.getActorActives(),0===this.active_s.length&&(clearInterval(this.interval),this.interval=null)}),1e3))}getActorActives(){s().get("/get_actor_active_s").then((e=>{this.active_s=e.data}))}getActorItems(){s().get("/get_actor_item_s").then((e=>{this.item_s=e.data}))}async postAction(e,t){let r=!0;return this.callGetActorActives({id:"init",title:e.title,desc:e.desc,finished:!1,progress:0}),"standard"==e.type||"submit"==e.type?await s().post("/post_action/"+e.id,t).then((e=>{r=e.data,this.getActorItems()})).catch((e=>{console.log(e)})):"file"==e.type?s().post("/post_action/"+e.id,t,{responseType:"blob"}).then((e=>{let t=e.headers["content-disposition"].split(";")[1].split("=")[1];this.downloadFile(e.data,t)})).catch((e=>{console.log(e)})):await s().post("/post_action/"+e.id,null).then((e=>{r=e.data})).catch((e=>{console.log(e)})),r}downloadFile(e,t){const r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,n.click()}}const d=(0,n.Q_)("uniform",{state:()=>({meta:{},use:{},source:{},queries:new a,actor:new l}),getters:{},actions:{clear(){this.use={},this.source={}},getMetas(e){let t=[];return e.forEach((e=>{t.push(this.meta[e])})),t},async setMeta(){await this.axios.get("/get_meta").then((e=>{this.axios.defaults.headers.common["X-CSRFToken"]=e.data.csrf_token,this.meta=e.data})),Object.values(this.meta).forEach((e=>{e.base_s=this.getMetas(e.base_id_s),e.view_s=this.getMetas(e.view_id_s),e.dialog_s=this.getMetas(e.dialog_id_s),e.widget_s=this.getMetas(e.widget_id_s),e.action_s=this.getMetas(e.action_id_s),e.element_s=this.getMetas(e.element_id_s)}))},async setSources(){this.meta.app.base_s.forEach((e=>{let t=new o(e,this.source);this.source[e.id]=t}))},getSourceByModel(e){for(const t of Object.values(this.source))if(e==t.model)return t},regUse(e){this.use[e.id]=e}}})},5360:(e,t,r)=>{r.d(t,{y:()=>i});var n=r(9167);class i{constructor(e){this.uniform=(0,n.I)(),this.setProperties(this.uniform.meta[e]),this.ref=this.uniform.use,this.uniform.regUse(this)}setProperties(e){var t=Object.keys(e);t.forEach((t=>{this[t]=e[t]}))}}},5288:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(9835);const i={inheritAttrs:!1},s=Object.assign(i,{__name:"uf-layout-injector",setup(e){const t=(0,n.l1)().use;return t.ql=(0,n.f3)("_q_l_"),(e,t)=>((0,n.wg)(),(0,n.iD)("span"))}}),o=s,a=o}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,(()=>{var e=[];r.O=(t,n,i,s)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){for(var[n,i,s]=e[c],a=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,i,s]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{65:"5b01fac0",746:"78228d54"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+".3fcd2463.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="uniform_front:";r.l=(n,i,s,o)=>{if(e[n])e[n].push(i);else{var a,l;if(void 0!==s)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){a=u;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+s),a.src=n),e[n]=[i];var h=(t,r)=>{a.onerror=a.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/static/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,i)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=r=>{if(s.onerror=s.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=a,s.parentNode.removeChild(s),i(l)}};return s.onerror=s.onload=o,s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var i=r[n],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===e||s===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){i=o[n],s=i.getAttribute("data-href");if(s===e||s===t)return i}},n=n=>new Promise(((i,s)=>{var o=r.miniCssF(n),a=r.p+o;if(t(o,a))return i();e(n,a,null,i,s)})),i={143:0};r.f.miniCss=(e,t)=>{var r={746:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=n(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var s=new Promise(((r,n)=>i=e[t]=[r,n]));n.push(i[2]=s);var o=r.p+r.u(t),a=new Error,l=n=>{if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,i[1](a)}};r.l(o,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[o,a,l]=n,d=0;if(o.some((t=>0!==e[t]))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(l)var c=l(r)}for(t&&t(n);d<o.length;d++)s=o[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},n=globalThis["webpackChunkuniform_front"]=globalThis["webpackChunkuniform_front"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(823)));n=r.O(n)})();