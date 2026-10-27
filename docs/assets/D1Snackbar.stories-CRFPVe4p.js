import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,D as r,Ft as i,Ht as a,It as o,Jt as s,Pt as c,Rt as l,Z as u,dn as d,lt as f,mn as p,ot as m,sn as h}from"./library-ByXZ2YPj.js";import{_ as g,a as _,d as ee,f as te,k as v,n as y,p as b,s as x,t as S}from"./wiki-CfN0XtvQ.js";import{n as C,t as w}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as T,t as E}from"./TextInclude-BD6x3h_g-C2E9k1CV.js";import{n as ne,t as re}from"./TeleportInclude-Mp7lChPJ-BldYAE5O.js";import{n as ie,t as D}from"./D1SnackbarItem-eF2UTcL5.js";var O,k,A,j,M;function N(){return(N=e((()=>{w(),T(),re(),n(),v(),u(),O=class{emits;constructor(e){this.emits=e}show(e,t){this.emits?.(`show`,e,t)}hide(e,t){this.emits?.(`hide`,e,t)}},k=class{props;element;naming;event;item=d([]);itemNumber=0;constructor(e,t,n,r){this.props=e,this.element=t,this.naming=n,this.event=r}isItem=()=>this.item.value.length>0;isPriority(){return this.isItem()&&this.item.value.findIndex(e=>e.highPriority===!0)!==-1}getItemByValue(e){return this.item.value.find(t=>t.value===e)}add=e=>{let t=this.getItemValue(e),n=this.getItemDelay(e);this.item.value=[...this.item.value,{...e,delay:n,value:t}],this.toScroll(),this.initDisplay(t,n)};remove=e=>{if(this.getItemByValue(e)){let t=this.getElementItem(e);t?(t.addEventListener(`transitionend`,()=>this.performHide(e)),t.classList.add(this.naming.getStatusClass(`hide`)),setTimeout(()=>this.performHide(e),512)):this.performHide(e)}};clear=()=>{this.item.value.forEach(e=>e.value&&this.remove(e.value))};pause=()=>{this.item.value.forEach(e=>e.resumableTimer?.pause())};resume=()=>{this.item.value.forEach(e=>e.resumableTimer?.resume())};getElementItem(e){return this.element.value?.querySelector(`[data-snackbar-item="${e}"]`)??void 0}getItemValue(e){return e.value??`snackbar-item-${++this.itemNumber}`}getItemDelay(e){return e.delay??this.props.delay??1e4}addShowItem(e,t){let n=this.getItemByValue(e);return n&&!n.resumableTimer&&(n.resumableTimer=new f(()=>this.remove(e),t+256)),this}performHide(e){let t=this.getItemByValue(e);t&&(t.resumableTimer?.clear(),this.item.value=this.item.value.filter(t=>t.value!==e),this.event?.hide(e,t))}initDisplay(e,t){t<0||requestAnimationFrame(()=>{let n=this.getElementItem(e),r=this.getItemByValue(e);r&&(n&&m(n)?(this.event?.show(e,r),this.addShowItem(e,t)):setTimeout(()=>this.initDisplay(e,t),128))})}toScroll(){requestAnimationFrame(()=>{this.element.value&&(this.element.value.scrollTop=this.element.value.scrollHeight)})}},A=class{props;element;naming;components;slots;emits;data;event;text;teleport;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{DataConstructor:s=k,EventConstructor:c=O,TeleportIncludeConstructor:l=ne}=o;this.event=new c(a),this.data=new s(e,t,n,this.event),this.text=new E(e),this.teleport=new l}get binds(){return{onMouseenter:this.data.pause,onMouseleave:this.data.resume,...C.role(`region`),...C.label(this.text.notifications)}}onClose=e=>this.data.remove(e)},j={delay:8e3},M=class extends g{item;constructor(e,t,n,r=A){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{isItem:this.item.data.isItem,add:this.item.data.add,remove:this.item.data.remove,clear:this.item.data.clear}}initClasses(){return{main:{},item:this.naming.getSubClass(`item`),space:this.naming.getSubClass(`space`),priority:this.naming.getSubClass(`priority`)}}initStyles(){return{}}initRender(){return this.item.data.isItem()?this.item.teleport.render(l(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.renderData(),...this.renderSpace()])):[]}renderData=()=>{let e=[];return this.item.data.item.value.forEach(t=>e.push(l(t.highPriority?`aside`:`div`,{key:t.value,class:{[this.classes?.value.item??`item`]:!0,[this.classes?.value.priority??`priority`]:t.highPriority},"data-snackbar-item":t.value},this.renderItem(t)))),e};renderItem=e=>{let t={...e.data,value:e.value,onClose:this.item.onClose};if(e.component){let n={...h(e.component)};return l(n,t)}return this.components?.renderOne(`snackbarItem`,t,void 0,e.value)};renderSpace=()=>this.item.data.isPriority()?[l(`div`,this.getKeyClass(`space`))]:[]}})))()}var P;function F(){return(F=e((()=>{ie(),P=D})))()}var I,L;function R(){return(R=e((()=>{N(),I={limit:[`1`,`2`,`4`,`6`,`8`],vertical:[`top`,`bottom`],horizontal:[`right`,`left`,`block`],origin:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},L={...j}})))()}var z;function B(){return(B=e((()=>{n(),v(),N(),F(),R(),z=o({name:`D1Snackbar`,__name:`D1Snackbar`,props:a({textNotifications:{type:[String,Function]},delay:{},full:{type:Boolean},all:{type:Boolean},limit:{},vertical:{},horizontal:{},origin:{}},L),emits:[`show`,`hide`],setup(e,{expose:t,emit:n}){let a=n,o=e,l=c(()=>({main:{"d1-snackbar":!0,"d1-snackbar--full":o.full,"d1-snackbar--all":o.all,[`d1-snackbar--limit--${o.limit}`]:r(I.limit,o.limit),[`d1-snackbar--vertical--${o.vertical}`]:r(I.vertical,o.vertical),[`d1-snackbar--horizontal--${o.horizontal}`]:r(I.horizontal,o.horizontal),[`d1-snackbar--origin--${o.origin}`]:r(I.origin,o.origin)}})),u=c(()=>({})),d=new M(`d1.snackbar`,o,{emits:a,classes:l,styles:u,components:{snackbarItem:P}}),f=d.render();return t(d.expose()),(e,t)=>(s(),i(p(f)))}})})))()}var V;function H(){return(H=e((()=>{B(),V=z,z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{name:`D1Snackbar`,exportName:`default`,displayName:`D1Snackbar`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Snackbar/D1Snackbar.vue`]})})))()}var U,W,G,K;function q(){return(q=e((()=>{S(),R(),U=[{name:`all`,type:`boolean`},{name:`delay`,type:`number`},{name:`full`,type:`boolean`},{name:`horizontal`,type:`string`,option:[`right`,`left`,`block`]},{name:`limit`,type:`string`,option:[`1`,`2`,`4`,`6`,`8`]},{name:`origin`,type:`string`,option:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},{name:`textNotifications`,type:`TextValue`},{name:`vertical`,type:`string`,option:[`top`,`bottom`]}],W=[],G=[{name:`hide`,description:`Event triggered when notification is hidden/ Событие при скрытии уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]},{name:`show`,description:`Event triggered when notification is shown/ Событие при показе уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]}],K={component:`Snackbar`,props:U,slots:W,events:G,defaults:L,wikiDesign:y}})))()}var J;function Y(){return(Y=e((()=>{te(),x(),q(),J=new ee(K.component,K.props,K.defaults,K.wikiDesign,_,b)})))()}var ae=t({Snackbar:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),X,Z,Q;function $(){return($=e((()=>{H(),Y(),X={title:`Ui/Snackbar`,component:V,parameters:{design:`d1`,docs:{description:{component:J.getDescription()}}},argTypes:J.getWiki(),args:J.getValues()},Z={render:e=>({components:{D1Snackbar:V},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-flex-column">
      <div class="wiki-storybook-flex">
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 3000 })"
        >
          Success Message
        </button>
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true })"
        >
          System Error
        </button>
        <button
          class="wiki-storybook-button wiki-storybook-button--warning"
          @click="() => $refs.snackbar.clear()"
        >
          Clear Queue
        </button>
      </div>
      <D1Snackbar ref="snackbar" v-bind="args" />
    </div>
    `})},Q=[`Snackbar`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Snackbar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-flex-column">
      <div class="wiki-storybook-flex">
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 3000 })"
        >
          Success Message
        </button>
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true })"
        >
          System Error
        </button>
        <button
          class="wiki-storybook-button wiki-storybook-button--warning"
          @click="() => $refs.snackbar.clear()"
        >
          Clear Queue
        </button>
      </div>
      <D1Snackbar ref="snackbar" v-bind="args" />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Z.parameters?.docs?.source}}}})))()}export{Y as a,J as i,Z as n,$ as r,ae as t};