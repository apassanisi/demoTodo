import{b as T,w as $,g as K,d as Q,s as X,u as v,e as I,f as Y,h as V,o as O,c as S,i as d,j,v as Z,k,l as ee,m as te,n as oe,t as A,p as ne,a as le,q as re,F as ie,x as ae,y as se,z as ue}from"./app.73ba84b7.js";import{b as D}from"./route-block.ae25339e.js";var L;const h=typeof window<"u",de=e=>typeof e<"u",fe=e=>typeof e=="string",N=()=>{};h&&((L=window==null?void 0:window.navigator)==null?void 0:L.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pe(e,t){function o(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return o}const J=e=>e();function ce(e=J){const t=T(!0);function o(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:o,resume:n,eventFilter:(...r)=>{t.value&&e(...r)}}}function ve(e){return K()?(Q(e),!0):!1}var W=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,ge=(e,t)=>{var o={};for(var n in e)me.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&W)for(var n of W(e))t.indexOf(n)<0&&_e.call(e,n)&&(o[n]=e[n]);return o};function we(e,t,o={}){const n=o,{eventFilter:l=J}=n,r=ge(n,["eventFilter"]);return $(e,pe(l,t),r)}var ye=Object.defineProperty,be=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,R=(e,t,o)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Se=(e,t)=>{for(var o in t||(t={}))M.call(t,o)&&R(e,o,t[o]);if(F)for(var o of F(t))U.call(t,o)&&R(e,o,t[o]);return e},Te=(e,t)=>be(e,Oe(t)),he=(e,t)=>{var o={};for(var n in e)M.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&F)for(var n of F(e))t.indexOf(n)<0&&U.call(e,n)&&(o[n]=e[n]);return o};function $e(e,t,o={}){const n=o,{eventFilter:l}=n,r=he(n,["eventFilter"]),{eventFilter:u,pause:a,resume:i,isActive:m}=ce(l);return{stop:we(e,t,Te(Se({},r),{eventFilter:u})),pause:a,resume:i,isActive:m}}function Fe(e){var t;const o=v(e);return(t=o==null?void 0:o.$el)!=null?t:o}const P=h?window:void 0;h&&window.document;h&&window.navigator;h&&window.location;function Ne(...e){let t,o,n,l;if(fe(e[0])?([o,n,l]=e,t=P):[t,o,n,l]=e,!t)return N;let r=N;const u=$(()=>Fe(t),i=>{r(),i&&(i.addEventListener(o,n,l),r=()=>{i.removeEventListener(o,n,l),r=N})},{immediate:!0,flush:"post"}),a=()=>{u(),r()};return ve(a),a}const x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C="__vueuse_ssr_handlers__";x[C]=x[C]||{};const Pe=x[C];function xe(e,t){return Pe[e]||t}function Ce(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Ve={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ee(e,t,o,n={}){var l;const{flush:r="pre",deep:u=!0,listenToStorageChanges:a=!0,writeDefaults:i=!0,shallow:m,window:p=P,eventFilter:f,onError:b=s=>{console.error(s)}}=n,c=(m?X:T)(t);if(!o)try{o=xe("getDefaultStorage",()=>{var s;return(s=P)==null?void 0:s.localStorage})()}catch(s){b(s)}if(!o)return c;const w=v(t),y=Ce(w),_=(l=n.serializer)!=null?l:Ve[y],{pause:B,resume:H}=$e(c,()=>G(c.value),{flush:r,deep:u,eventFilter:f});return p&&a&&Ne(p,"storage",E),E(),c;function G(s){try{s==null?o.removeItem(e):o.setItem(e,_.write(s))}catch(g){b(g)}}function q(s){if(!(s&&s.key!==e)){B();try{const g=s?s.newValue:o.getItem(e);return g==null?(i&&w!==null&&o.setItem(e,_.write(w)),w):typeof g!="string"?g:_.read(g)}catch(g){b(g)}finally{H()}}}function E(s){s&&s.key!==e||(c.value=q(s))}}var z;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(z||(z={}));function je(e,t,o,n={}){var l,r,u;const{passive:a=!1,eventName:i,deep:m=!1,defaultValue:p}=n,f=Y(),b=o||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f))||((u=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:u.bind(f==null?void 0:f.proxy));let c=i;t||(t="modelValue"),c=i||c||`update:${t.toString()}`;const w=()=>de(e[t])?e[t]:p;if(a){const y=T(w());return $(()=>e[t],_=>y.value=_),$(y,_=>{(_!==e[t]||m)&&b(c,_)},{deep:m}),y}else return I({get(){return w()},set(y){b(c,y)}})}const Ae={class:"todolist"},De=d("h1",null,[d("span",null,"TODO"),oe(" APP")],-1),Le={class:"todolist__add-todo"},We=d("option",{value:"all"},"Select Filter...",-1),Re=d("option",{value:"complete"},"Complete",-1),ze=d("option",{value:"incomplete"},"Incomplete",-1),Ie=[We,Re,ze],Je=V({__name:"TodoList",props:{modelValue:null},emits:["addTodo","updateFilter"],setup(e,{emit:t}){const o=e,n=T(),l=je(o,"modelValue",t,{passive:!0}),r=()=>{n.value&&(t("addTodo",{title:n.value,complete:!1}),n.value="")};return(u,a)=>(O(),S("div",Ae,[De,d("div",Le,[j(d("input",{type:"text",placeholder:"Add a new todo...","onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i)},null,512),[[Z,n.value]]),d("button",{onClick:a[1]||(a[1]=i=>r())},"Add Todo")]),j(d("select",{class:"todolist__filter","onUpdate:modelValue":a[2]||(a[2]=i=>ee(l)?l.value=i:null),onChange:a[3]||(a[3]=i=>t("updateFilter",v(l)))},Ie,544),[[k,v(l)]]),te(u.$slots,"default")]))}});const Me=V({__name:"Todo",props:{todo:null,index:null},emits:["deleteTodo","toggleComplete"],setup(e,{emit:t}){return(o,n)=>(O(),S("div",{onClick:n[1]||(n[1]=l=>t("toggleComplete",e.index)),class:ne(["todo",{complete:e.todo.complete}])},[d("p",null,A(e.todo.title),1),d("small",null,A(e.todo.complete?"Complete":"Incomplete"),1),d("button",{onClick:n[0]||(n[0]=l=>t("deleteTodo",e.index))},"Delete")],2))}});const Ue={id:"app"},Be={key:0},He=V({__name:"index",setup(e){const t=T("all"),o=Ee("demo-Todo:todolist",[{title:"First Todo",complete:!1}]),n=I(()=>{if(t.value==="all")return o.value;if(t.value==="complete")return o.value.filter(l=>l.complete===!0);if(t.value==="incomplete")return o.value.filter(l=>l.complete===!1)});return(l,r)=>{const u=Me,a=Je;return O(),S("div",Ue,[le(a,{onAddTodo:r[2]||(r[2]=i=>v(o).push(i)),onUpdateFilter:r[3]||(r[3]=i=>t.value=i),modelValue:t.value},{default:re(()=>[(O(!0),S(ie,null,ae(v(n),(i,m)=>(O(),ue(u,{key:m,todo:i,index:m,title:i.title,complete:i.complete,onDeleteTodo:r[0]||(r[0]=p=>v(o).splice(p,1)),onToggleComplete:r[1]||(r[1]=p=>v(o)[p].complete=!v(o)[p].complete)},null,8,["todo","index","title","complete"]))),128)),v(o).length?se("",!0):(O(),S("p",Be,"Enter a todo item!"))]),_:1},8,["modelValue"])])}}});typeof D=="function"&&D(He);export{He as default};