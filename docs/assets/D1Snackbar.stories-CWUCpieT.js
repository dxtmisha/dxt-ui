import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Q as o,Rt as s,Ut as c,an as l,en as u,jt as d,rn as f,u as ee,ut as p,yt as m}from"./library-BfcLFF_v.js";import{O as h,d as g,i as _,k as v,l as te,m as ne,n as re,p as y,t as b,u as ie}from"./wiki-BHyzKkJP.js";import{n as x,t as S}from"./AriaStaticInclude-DoPfNULn-DLb49dmA.js";import{n as C,t as w}from"./TextInclude-7NyN-fVx-DEXAuT0b.js";import{n as T,t as E}from"./TeleportInclude-D7wjw-J_-C5-vPuiA.js";import{n as D,t as ae}from"./D1SnackbarItem-BR5aV6Fm.js";var O,k,A,j,M;function N(){return(N=e((()=>{S(),w(),T(),n(),h(),o(),O=class{constructor(e){y(this,`emits`,void 0),this.emits=e}show(e,t){var n;(n=this.emits)==null||n.call(this,`show`,e,t)}hide(e,t){var n;(n=this.emits)==null||n.call(this,`hide`,e,t)}},k=class{constructor(e,t,n,r){y(this,`props`,void 0),y(this,`element`,void 0),y(this,`className`,void 0),y(this,`event`,void 0),y(this,`item`,f([])),y(this,`itemNumber`,0),y(this,`isItem`,()=>this.item.value.length>0),y(this,`add`,e=>{let t=this.getItemValue(e),n=this.getItemDelay(e);this.item.value=[...this.item.value,{...e,delay:n,value:t}],this.toScroll(),this.initDisplay(t,n)}),y(this,`remove`,e=>{if(this.getItemByValue(e)){let t=this.getElementItem(e);t?(t.addEventListener(`transitionend`,()=>this.performHide(e)),t.classList.add(`${this.className}--hide`),setTimeout(()=>this.performHide(e),512)):this.performHide(e)}}),y(this,`clear`,()=>{this.item.value.forEach(e=>e.value&&this.remove(e.value))}),y(this,`pause`,()=>{this.item.value.forEach(e=>e.resumableTimer?.pause())}),y(this,`resume`,()=>{this.item.value.forEach(e=>e.resumableTimer?.resume())}),this.props=e,this.element=t,this.className=n,this.event=r}isPriority(){return this.isItem()&&this.item.value.findIndex(e=>e.highPriority===!0)!==-1}getItemByValue(e){return this.item.value.find(t=>t.value===e)}getElementItem(e){return this.element.value?.querySelector(`[data-snackbar-item="${e}"]`)??void 0}getItemValue(e){return e.value??`snackbar-item-${++this.itemNumber}`}getItemDelay(e){return e.delay??this.props.delay??1e4}addShowItem(e,t){let n=this.getItemByValue(e);return n&&!n.resumableTimer&&(n.resumableTimer=new ee(()=>this.remove(e),t+256)),this}performHide(e){let t=this.getItemByValue(e);if(t){var n,r;(n=t.resumableTimer)==null||n.clear(),this.item.value=this.item.value.filter(t=>t.value!==e),(r=this.event)==null||r.hide(e,t)}}initDisplay(e,t){t<0||requestAnimationFrame(()=>{let n=this.getElementItem(e),r=this.getItemByValue(e);if(r){if(n&&m(n)){var i;(i=this.event)==null||i.show(e,r),this.addShowItem(e,t)}else setTimeout(()=>this.initDisplay(e,t),128)}})}toScroll(){requestAnimationFrame(()=>{this.element.value&&(this.element.value.scrollTop=this.element.value.scrollHeight)})}},A=class{constructor(e,t,n,r,i,a,o,s,c={}){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`data`,void 0),y(this,`event`,void 0),y(this,`text`,void 0),y(this,`teleport`,void 0),y(this,`onClose`,e=>this.data.remove(e)),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{DataConstructor:l=k,EventConstructor:u=O,TeleportIncludeConstructor:d=E}=c;this.event=new u(s),this.data=new l(e,n,i,this.event),this.text=new C(e),this.teleport=new d}get binds(){return{onMouseenter:this.data.pause,onMouseleave:this.data.resume,...x.role(`region`),...x.label(this.text.notifications)}}},j={delay:8e3},M=class extends v{constructor(e,t,n,r=A){super(e,t,n),y(this,`item`,void 0),y(this,`renderData`,()=>{let e=[];return this.item.data.item.value.forEach(t=>e.push(a(t.highPriority?`aside`:`div`,{key:t.value,class:{[this.classes?.value.item??`item`]:!0,[this.classes?.value.priority??`priority`]:t.highPriority},"data-snackbar-item":t.value},this.renderItem(t)))),e}),y(this,`renderItem`,e=>{let t={...e.data,value:e.value,onClose:this.item.onClose};if(e.component){let n={...u(e.component)};return a(n,t)}return this.components.renderOne(`snackbarItem`,t,void 0,e.value)}),y(this,`renderSpace`,()=>this.item.data.isPriority()?[a(`div`,this.getKeyClass(`space`))]:[]),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{isItem:this.item.data.isItem,add:this.item.data.add,remove:this.item.data.remove,clear:this.item.data.clear}}initClasses(){return{main:{},item:this.getSubClass(`item`),space:this.getSubClass(`space`),priority:this.getSubClass(`priority`)}}initStyles(){return{}}initRender(){return this.item.data.isItem()?this.item.teleport.render(a(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.renderData(),...this.renderSpace()])):[]}}})))()}var P;function F(){return(F=e((()=>{D(),P=ae})))()}var I,L;function R(){return(R=e((()=>{N(),I={limit:[`1`,`2`,`4`,`6`,`8`],vertical:[`top`,`bottom`],horizontal:[`right`,`left`,`block`],origin:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},L={...j}})))()}var z;function B(){return(B=e((()=>{n(),h(),N(),F(),R(),z=i({name:`D1Snackbar`,__name:`D1Snackbar`,props:s({textNotifications:{type:[String,Function]},delay:{},full:{type:Boolean},all:{type:Boolean},limit:{},vertical:{},horizontal:{},origin:{}},L),emits:[`show`,`hide`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=d(()=>({main:{"d1-snackbar":!0,"d1-snackbar--full":a.full,"d1-snackbar--all":a.all,[`d1-snackbar--limit--${a.limit}`]:p(I.limit,a.limit),[`d1-snackbar--vertical--${a.vertical}`]:p(I.vertical,a.vertical),[`d1-snackbar--horizontal--${a.horizontal}`]:p(I.horizontal,a.horizontal),[`d1-snackbar--origin--${a.origin}`]:p(I.origin,a.origin)}})),s=d(()=>({})),u=new M(`d1.snackbar`,a,{emits:i,classes:o,styles:s,components:{snackbarItem:P}}),f=u.render();return t(u.expose()),(e,t)=>(c(),r(l(f)))}})})))()}var V;function H(){return(H=e((()=>{B(),V=z,z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{name:`D1Snackbar`,exportName:`default`,displayName:`D1Snackbar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Snackbar/D1Snackbar.vue`]})})))()}var U,W,G,K;function q(){return(q=e((()=>{b(),R(),U=[{name:`all`,type:`boolean`},{name:`delay`,type:`number`},{name:`full`,type:`boolean`},{name:`horizontal`,type:`string`,option:[`right`,`left`,`block`]},{name:`limit`,type:`string`,option:[`1`,`2`,`4`,`6`,`8`]},{name:`origin`,type:`string`,option:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},{name:`textNotifications`,type:`TextValue`},{name:`vertical`,type:`string`,option:[`top`,`bottom`]}],W=[],G=[{name:`hide`,description:`Event triggered when notification is hidden/ Событие при скрытии уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]},{name:`show`,description:`Event triggered when notification is shown/ Событие при показе уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]}],K={component:`Snackbar`,props:U,slots:W,events:G,defaults:L,wikiDesign:re}})))()}var J;function Y(){return(Y=e((()=>{g(),te(),q(),J=new ie(K.component,K.props,K.defaults,K.wikiDesign,_,ne)})))()}var oe=t({Snackbar:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),X,Z,Q;function $(){return($=e((()=>{H(),Y(),X={title:`Ui/Snackbar`,component:V,parameters:{design:`d1`,docs:{description:{component:J.getDescription()}}},argTypes:J.getWiki(),args:J.getValues()},Z={render:e=>({components:{D1Snackbar:V},setup:()=>({args:e}),template:`
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
    `})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Snackbar`]})))()}export{Y as a,J as i,Z as n,$ as r,oe as t};