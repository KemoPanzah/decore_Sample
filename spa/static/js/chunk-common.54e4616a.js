"use strict";(globalThis["webpackChunkdecore_front"]=globalThis["webpackChunkdecore_front"]||[]).push([[996],{312:(e,l,a)=>{a.r(l),a.d(l,{default:()=>We});a(4748);var t=a(1758),n=a(8734),o=a(562),i=a(8790),s=a(7630),u=a(2703);const r={inheritAttrs:!1},d=Object.assign(r,{__name:"uf-view-context-menu",setup(e){const l=(0,t.OA)().use;return(e,a)=>{const o=(0,t.g2)("q-icon"),s=(0,t.g2)("q-item-section"),u=(0,t.g2)("q-item"),r=(0,t.g2)("q-list"),d=(0,t.g2)("q-menu");return(0,t.uX)(),(0,t.Wv)(d,{"auto-close":"",target:(0,n.R1)(l).item_menu_target,modelValue:(0,n.R1)(l).item_menu_model,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,n.R1)(l).item_menu_model=e)},{default:(0,t.k6)((()=>[(0,t.bF)(r,{style:{"min-width":"100px"}},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)((0,n.R1)(l).dialog_s,(e=>((0,t.uX)(),(0,t.CE)("span",{key:e.id},["context"==e.activator?((0,t.uX)(),(0,t.Wv)(u,{key:0,dense:"",clickable:"",onClick:a=>e.showDialog((0,n.R1)(l).item_menu_row_id)},{default:(0,t.k6)((()=>[(0,t.bF)(s,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(o,{name:e.icon},null,8,["name"])])),_:2},1024),(0,t.bF)(s,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(e.title),1)])),_:2},1024)])),_:2},1032,["onClick"])):(0,t.Q3)("",!0)])))),128)),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)((0,n.R1)(l).action_s,(e=>((0,t.uX)(),(0,t.CE)("span",{key:e.id},["context"==e.activator?((0,t.uX)(),(0,t.Wv)(u,{key:0,dense:"",clickable:"",onClick:l=>e.trigger(e.id,"click")},{default:(0,t.k6)((()=>[(0,t.bF)(s,{avatar:""},{default:(0,t.k6)((()=>[(0,t.bF)(o,{name:e.icon},null,8,["name"])])),_:2},1024),(0,t.bF)(s,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(e.title),1)])),_:2},1024)])),_:2},1032,["onClick"])):(0,t.Q3)("",!0)])))),128))])),_:1})])),_:1},8,["target","modelValue"])}}});var c=a(3638),p=a(4514),v=a(5329),m=a(3418),_=a(4609),k=a(8582),b=a.n(k);const f=d,g=f;b()(d,"components",{QMenu:c.A,QList:p.A,QItem:v.A,QItemSection:m.A,QIcon:_.A});const h={class:"row full-width items-center"},y={class:"col-auto float-left"},w={class:"col"},q={inheritAttrs:!1},F=Object.assign(q,{__name:"uf-view-header-menu",setup(e){const l=(0,t.OA)().use,a=(0,n.KR)(null),o=(0,n.KR)(null),i=(0,t.EW)((()=>{let e=[];return l.dialog_s.forEach((l=>{"default"==l.activator&&e.push(l)})),l.action_s.forEach((l=>{"default"==l.activator&&e.push(l)})),e})),s=(0,t.EW)((()=>{let e=[];return l.ql.totalWidth&&o.value&&a.value&&o.value.forEach(((l,t)=>{l.offsetLeft+l.offsetWidth>a.value.offsetWidth&&e.push(t)})),e}));return(0,t.wB)(s,(()=>{o.value&&o.value.forEach(((e,l)=>{s.value.includes(l)?e.classList.add("overflowed"):e.classList.remove("overflowed")}))})),(e,u)=>{const r=(0,t.g2)("q-btn"),d=(0,t.g2)("q-item-section"),c=(0,t.g2)("q-item"),p=(0,t.g2)("q-list"),v=(0,t.g2)("q-menu");return(0,t.uX)(),(0,t.CE)("div",h,[(0,t.Lk)("div",y,[s.value.length>0?((0,t.uX)(),(0,t.Wv)(r,{key:0,class:"float-right text-black",dense:"",round:"",flat:"",icon:"mdi-dots-vertical"},{default:(0,t.k6)((()=>[(0,t.bF)(v,{"auto-close":""},{default:(0,t.k6)((()=>[(0,t.bF)(p,null,{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.value,((e,l)=>((0,t.uX)(),(0,t.CE)("div",{key:e.id},["dialog"===e.kind&&s.value.includes(l)?((0,t.uX)(),(0,t.Wv)(c,{key:0,clickable:""},{default:(0,t.k6)((()=>[(0,t.bF)(d,null,{default:(0,t.k6)((()=>[(0,t.bF)(r,{class:"text-black no-wrap",flat:"",icon:e.icon,label:e.title,onClick:l=>e.showDialog(e.activator)},null,8,["icon","label","onClick"])])),_:2},1024)])),_:2},1024)):(0,t.Q3)("",!0),"action"===e.kind&&s.value.includes(l)?((0,t.uX)(),(0,t.Wv)(c,{key:1,clickable:""},{default:(0,t.k6)((()=>[(0,t.bF)(d,null,{default:(0,t.k6)((()=>[(0,t.bF)(r,{class:"text-black no-wrap",flat:"",icon:e.icon,label:e.title,onClick:l=>e.trigger(e.id,"click")},null,8,["icon","label","onClick"])])),_:2},1024)])),_:2},1024)):(0,t.Q3)("",!0)])))),128))])),_:1})])),_:1})])),_:1})):(0,t.Q3)("",!0)]),(0,t.Lk)("div",w,[(0,t.Lk)("div",{ref_key:"menu",ref:a,class:"row no-wrap items-center"},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.value,(e=>((0,t.uX)(),(0,t.CE)("div",{class:"col-auto",key:e.id},[(0,t.Lk)("div",{ref_for:!0,ref_key:"component",ref:o,class:"menu-item row no-wrap"},["dialog"==e.kind?((0,t.uX)(),(0,t.Wv)(r,{key:0,class:"text-black",flat:"",icon:e.icon,label:e.title,onClick:l=>e.showDialog(e.activator)},null,8,["icon","label","onClick"])):(0,t.Q3)("",!0),"action"==e.kind?((0,t.uX)(),(0,t.Wv)(r,{key:1,class:"text-black",flat:"",icon:e.icon,label:e.title,onClick:a=>(0,n.R1)(l).ref[e.id].trigger(e.id,"click")},null,8,["icon","label","onClick"])):(0,t.Q3)("",!0)],512)])))),128))],512)])])}}});var R=a(2807),A=a(9001);const Q=(0,R.A)(F,[["__scopeId","data-v-3dc703d8"]]),C=Q;b()(F,"components",{QBtn:A.A,QMenu:c.A,QList:p.A,QItem:v.A,QItemSection:m.A});var E=a(455);const W={class:"row full-width items-center"},x={class:"col-auto"},X={class:"col-auto"},L={key:0,class:"col"},V={key:1,class:"col"},O={key:2,class:"col full-width"},K={class:"row full-width items-center"},I={class:"col-auto"},P={class:"col"},S={class:"col-auto"},T={inheritAttrs:!1},j=Object.assign(T,{__name:"uf-view-filter",setup(e){const l=(0,t.OA)().use,a=(0,E.rd)(),o=(0,E.lq)(),i=(0,n.KR)(null),s=(0,n.KR)(null),u=(0,n.KR)("eq"),r=(0,n.KR)(null);function d(){i.value&&!s.value?(i.value=null,_.value=null,r.value=null):i.value&&s.value&&(s.value=null,_.value=null,r.value=null)}const c=(0,t.EW)((()=>{let e=!1;return!i.value||"ForeignKeyField"!=i.value.class&&"ManyToManyField"!=i.value.class&&"BackrefAccessor"!=i.value.class||(e=!0),e})),p=(0,t.EW)((()=>{let e=[];return l.filter_s.forEach((a=>{let t=!1;Object.entries(l.data.query).forEach((([e])=>{e.includes(a.name)&&"ForeignKeyField"!=a.class&&(t=!0)})),t||e.push(a)})),e})),v=(0,t.EW)((()=>{let e,a=[];if("ForeignKeyField"==i.value.class)e=i.value.rel_model;else{let a=l.data.source.rel_field_s.filter((e=>"ForeignKeyField"==e.class&&e.backref==i.value.name||"ManyToManyField"==e.class&&e.name==i.value.name))[0];e="ForeignKeyField"==a.class?a.model:a.rel_model}let t=l.decore.getSourceByModel(e);return t.field_s.forEach((e=>{let t=!1;Object.entries(l.data.query).forEach((([l])=>{l.includes(e.name)&&(t=!0)})),t||"ForeignKeyField"!=e.class&&i.value.filter_fields.includes(e.name)&&a.push(e)})),a})),m=(0,t.EW)((()=>{let e=[{name:"eq",verbose_name:"==",types:"*"}],l=[];return i.value&&e.forEach((e=>{"*"==e.types&&l.push(e),e.types.includes(i.value.class)&&l.push(e)})),l})),_=(0,n.KR)({});function k(){let e=o.query;i.value&&!c.value?l.data.source.getFilterValues(e,i.value.name,null).then((e=>{_.value=_.value=e.data})):s.value&&c.value&&l.data.source.getFilterValues(e,i.value.name,s.value.name).then((e=>{_.value=e.data}))}function b(){let e={...o.query},l="";c.value?c.value&&(l=l+i.value.name+"__"+s.value.name):l=i.value.name,l=l+"__"+u.value,e[l]=r.value,a.push({path:o.path,query:e})}return(e,a)=>{const f=(0,t.g2)("q-btn"),g=(0,t.g2)("q-select");return(0,t.uX)(),(0,t.CE)("div",W,[(0,t.Lk)("div",x,[(0,t.bF)(f,{class:"float-right text-black",dense:"",round:"",flat:"",icon:"mdi-content-save",onClick:a[0]||(a[0]=e=>(0,n.R1)(l).decore.queries.saveQuery((0,n.R1)(o)))})]),(0,t.Lk)("div",X,[(0,t.bF)(f,{class:"float-right text-black",dense:"",round:"",flat:"",icon:"mdi-undo",onClick:a[1]||(a[1]=e=>d()),disable:!i.value},null,8,["disable"])]),i.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",L,[(0,t.bF)(g,{dense:"",outlined:"",modelValue:i.value,"onUpdate:modelValue":[a[2]||(a[2]=e=>i.value=e),a[3]||(a[3]=e=>k())],options:p.value,"option-value":"name","option-label":"verbose_name","options-dense":"",label:"Select field for filtering",style:{width:"100%"}},null,8,["modelValue","options"])])),c.value&&i.value&&!s.value?((0,t.uX)(),(0,t.CE)("div",V,[(0,t.bF)(g,{dense:"",outlined:"",modelValue:s.value,"onUpdate:modelValue":[a[4]||(a[4]=e=>s.value=e),a[5]||(a[5]=e=>k())],options:v.value,"option-value":"name","option-label":"verbose_name","options-dense":"",label:"Select related field for filtering",style:{width:"100%"}},null,8,["modelValue","options"])])):(0,t.Q3)("",!0),c.value&&i.value&&s.value||!c.value&&i.value?((0,t.uX)(),(0,t.CE)("div",O,[(0,t.Lk)("div",K,[(0,t.Lk)("div",I,[(0,t.bF)(g,{dense:"",outlined:"",modelValue:u.value,"onUpdate:modelValue":a[6]||(a[6]=e=>u.value=e),options:m.value,"option-value":"name","option-label":"verbose_name","options-dense":"","map-options":"","emit-value":""},null,8,["modelValue","options"])]),(0,t.Lk)("div",P,["eq"==u.value?((0,t.uX)(),(0,t.Wv)(g,{key:0,dense:"",outlined:"",modelValue:r.value,"onUpdate:modelValue":a[7]||(a[7]=e=>r.value=e),multiple:"","option-label":"label","option-value":"value","map-options":"","emit-value":"",options:Object.entries(_.value).map((([e,l])=>({label:e,value:l}))),"options-dense":"",label:"Select value for filtering",style:{width:"100%"},disable:!_.value,loading:!_.value},null,8,["modelValue","options","disable","loading"])):(0,t.Q3)("",!0)])])])):(0,t.Q3)("",!0),(0,t.Lk)("div",S,[(0,t.bF)(f,{class:"float-right text-black",dense:"",round:"",flat:"",icon:"mdi-database-search",onClick:a[8]||(a[8]=e=>b()),disable:!r.value},null,8,["disable"])])])}}});var M=a(9378);const U=j,z=U;b()(j,"components",{QBtn:A.A,QSelect:M.A});const B={class:"row full-width row items-center"},D={key:0,class:"col-1"},$={class:"col-6"},G={class:"col"},H={class:"row full-width items-center"},J={inheritAttrs:!1},N=Object.assign(J,{__name:"uf-view-header",setup(e){const l=(0,t.OA)().use;function a(){let e=l.root_view;delete l.data.query[l.rel_view_page_query_key],delete e.data.query[l.rel_view_page_query_key],l.rel_view_page_query_key="",e.rel_view_page--,e.data.setItems()}return(e,o)=>{const i=(0,t.g2)("q-btn"),s=(0,t.g2)("q-toolbar"),u=(0,t.g2)("q-chip");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(s,{class:"bg-grey-2"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",B,["relview"===(0,n.R1)(l).kind&&(0,n.R1)(l).root_view.rel_view_page>0?((0,t.uX)(),(0,t.CE)("div",D,[(0,t.bF)(i,{class:"text-black",dense:"",round:"",flat:"",icon:"mdi-arrow-left",onClick:o[0]||(o[0]=e=>a())})])):(0,t.Q3)("",!0),(0,t.Lk)("div",$,[(0,t.bF)(C,{use:(0,n.R1)(l)},null,8,["use"])]),(0,t.Lk)("div",G,[(0,n.R1)(l).filter_s.length>0?((0,t.uX)(),(0,t.Wv)(z,{key:0,use:(0,n.R1)(l)},null,8,["use"])):(0,t.Q3)("",!0)])])])),_:1}),(0,t.Lk)("div",H,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)((0,n.R1)(l).app.route.query,((e,l)=>((0,t.uX)(),(0,t.Wv)(u,{label:l+"="+e,key:l},null,8,["label"])))),128))])],64)}}});var Y=a(9351),Z=a(8020),ee=a(8141);const le=N,ae=le;b()(N,"components",{QToolbar:Y.A,QBtn:A.A,QInput:Z.A,QChip:ee.A});const te={class:"row items-center"},ne={class:"view-footer-pagination col-auto"},oe={class:"col-auto"},ie={inheritAttrs:!1},se=Object.assign(ie,{__name:"uf-view-footer",setup(e){const l=(0,t.OA)().use,a=(0,t.EW)((()=>{let e=Math.ceil(l.data.count/l.pagination.rowsPerPage);return e}));return(e,o)=>{const i=(0,t.g2)("q-space"),s=(0,t.g2)("q-pagination"),u=(0,t.g2)("q-select"),r=(0,t.g2)("q-toolbar");return(0,t.uX)(),(0,t.Wv)(r,{class:"bg-grey-2"},{default:(0,t.k6)((()=>[(0,t.bF)(i),(0,t.Lk)("div",te,[(0,t.Lk)("div",ne,[(0,t.bF)(s,{modelValue:(0,n.R1)(l).pagination.page,"onUpdate:modelValue":o[0]||(o[0]=e=>(0,n.R1)(l).pagination.page=e),max:a.value,"max-pages":5,"direction-links":"","boundary-links":"","boundary-numbers":"",color:"black"},null,8,["modelValue","max"])]),(0,t.Lk)("div",oe,[(0,t.bF)(u,{modelValue:(0,n.R1)(l).pagination.rowsPerPage,"onUpdate:modelValue":o[1]||(o[1]=e=>(0,n.R1)(l).pagination.rowsPerPage=e),options:(0,n.R1)(l).pagination.rowsPerPageOptions,dense:"",outlined:""},null,8,["modelValue","options"])])])])),_:1})}}});var ue=a(1173),re=a(3489);const de=se,ce=de;b()(se,"components",{QToolbar:Y.A,QSpace:ue.A,QPagination:re.A,QSelect:M.A});const pe={class:"text-black"},ve={class:"text-black"},me={class:"text-black"},_e={inheritAttrs:!1},ke=Object.assign(_e,{__name:"uf-view-layout",setup(e){const l=(0,t.OA)().use,a=(0,t.EW)((()=>{let e=l.intra.params.dialog_id+l.intra.params.item_id;return e})),o=(0,t.EW)((()=>{let e=l.app.route.params.base_id+l.app.route.params.view_id+JSON.stringify(l.app.route.query)+l.app.route.params.dialog_id+l.app.route.params.item_id;return e})),r=(0,t.EW)((()=>{let e=0;return l.app.ql.hasOwnProperty("header")&&(e=l.app.ql.header.size),l.app.ql.hasOwnProperty("footer")&&(e+=l.app.ql.footer.size),e})),d=(0,t.EW)((()=>{let e="0 px";return l.ql.hasOwnProperty("header")&&(e=l.ql.header.size+"px"),e}));return(e,c)=>{const p=(0,t.g2)("router-view"),v=(0,t.g2)("q-header"),m=(0,t.g2)("q-footer"),_=(0,t.g2)("q-layout");return(0,t.uX)(),(0,t.CE)(t.FK,null,["relview"===(0,n.R1)(l).kind&&"dialog"===(0,n.R1)(l).intra.name?((0,t.uX)(),(0,t.Wv)(s["default"],{key:a.value,name:"dialog",dialog_id:(0,n.R1)(l).intra.params.dialog_id},null,8,["dialog_id"])):(0,t.Q3)("",!0),"view"===(0,n.R1)(l).kind?((0,t.uX)(),(0,t.Wv)(p,{name:"dialog",key:o.value})):(0,t.Q3)("",!0),(0,t.bF)(g,{use:(0,n.R1)(l)},null,8,["use"]),(0,t.bF)(_,{container:"",style:(0,i.Tr)({height:`calc(100vh - ${r.value}px)`})},{default:(0,t.k6)((()=>[(0,t.bF)(u.A,{use:(0,n.R1)(l)},null,8,["use"]),(0,t.bF)(v,{class:"bg-white",style:{position:"fixed",width:"100%",top:"0"}},{default:(0,t.k6)((()=>[(0,t.bF)(ae,{use:(0,n.R1)(l)},null,8,["use"])])),_:1}),(0,t.Lk)("div",{class:"view-content",style:(0,i.Tr)({"padding-top":d.value})},[(0,t.RG)(e.$slots,"view-content")],4),(0,t.bF)(m,{class:"bg-white",style:{position:"fixed",width:"100%",bottom:"0"}},{default:(0,t.k6)((()=>[(0,t.bF)(ce,{use:(0,n.R1)(l)},null,8,["use"]),(0,t.Lk)("div",pe,(0,i.v_)((0,n.R1)(l).title),1),(0,t.Lk)("div",ve,(0,i.v_)((0,n.R1)(l).data.query),1),(0,t.Lk)("div",me,(0,i.v_)((0,n.R1)(l).rel_view_page_query_key),1)])),_:1})])),_:3},8,["style"])],64)}}});var be=a(500),fe=a(133),ge=a(8889);const he=ke,ye=he;b()(ke,"components",{QLayout:be.A,QHeader:fe.A,QFooter:ge.A});const we={inheritAttrs:!1},qe=Object.assign(we,{__name:"uf-view-table",setup(e){const l=(0,t.OA)().use;l.data.items_mode=!0;const a=(0,t.EW)((()=>{let e=!1;return l.ql.totalWidth-l.ql.scrollbarWidth<=l.breakpoint&&(e=!0),e})),o=(0,t.EW)((()=>{let e=16,a="0 px";return e+=l.app.ql.header.size,e+=l.app.ql.footer.size,e+=l.ql.header.size,e+=l.ql.footer.size,a="calc(100vh - "+e+"px)",a}));return(e,s)=>{const u=(0,t.g2)("q-btn"),r=(0,t.g2)("q-td"),d=(0,t.g2)("q-table");return(0,t.uX)(),(0,t.Wv)(d,{grid:a.value,columns:(0,n.R1)(l).column_s,filter:(0,n.R1)(l).data.search,rows:(0,n.R1)(l).data.item_s,style:(0,i.Tr)({height:o.value}),class:"sticky-header-table",dense:"",flat:"","hide-bottom":"","row-key":"id",selection:"multiple",pagination:(0,n.R1)(l).pagination,"onUpdate:pagination":s[0]||(s[0]=e=>(0,n.R1)(l).pagination=e),selected:(0,n.R1)(l).data.select_s,"onUpdate:selected":s[1]||(s[1]=e=>(0,n.R1)(l).data.select_s=e),onRowClick:s[2]||(s[2]=(e,a,t)=>{(0,n.R1)(l).onItemClick(e,a,t)})},{"body-cell-actions":(0,t.k6)((e=>[(0,t.bF)(r,{props:e},{default:(0,t.k6)((()=>[(0,t.bF)(u,{dense:"",round:"",flat:"",icon:"mdi-dots-vertical",onClick:a=>{(0,n.R1)(l).onItemMenuClick(a,e.row)}},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["grid","columns","filter","rows","style","pagination","selected"])}}});var Fe=a(481),Re=a(7109);const Ae=qe,Qe=Ae;b()(qe,"components",{QTable:Fe.A,QTd:Re.A,QBtn:A.A,QMenu:c.A,QList:p.A,QItem:v.A,QItemSection:m.A});const Ce={__name:"uf-view",props:{base_id:{},view_id:{}},setup(e){const l=e,a=(0,n.Kh)((0,o.V)().use[l.view_id]);return a.rel_view_page=0,a.data.query={...a.data.query,...a.query,...a.app.route.query},(0,t.sV)((()=>{a.data.setItems(a.query),"view"===a.app.route.name&&(a.app.expanded_nodes=[],a.app.expanded_nodes.push(a.app.route.params.base_id),a.app.expanded_nodes.push(a.app.route.params.view_id)),"dialog"===a.app.route.name&&(a.app.expanded_nodes=[],a.app.expanded_nodes.push(a.app.route.params.base_id),a.app.expanded_nodes.push(a.app.route.params.view_id)),"subdialog"===a.app.route.name&&(a.app.expanded_nodes=[],a.app.expanded_nodes.push(a.app.route.params.base_id),a.app.expanded_nodes.push(a.app.route.params.view_id));for(const e of a.dialog_s)if("empty"==e.activator||"first"==e.activator||"last"==e.activator){e.showDialog(e.activator);break}})),(e,l)=>((0,t.uX)(),(0,t.Wv)(ye,{use:a},{"view-content":(0,t.k6)((()=>["table"==a.type?((0,t.uX)(),(0,t.Wv)(Qe,{key:0,use:a},null,8,["use"])):(0,t.Q3)("",!0)])),_:1},8,["use"]))}},Ee=Ce,We=Ee}}]);