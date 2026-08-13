import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$t as n,At as r,Et as i,Ht as a,L as o,Lt as s,Mt as c,Nt as l,Z as u,in as d,it as f,jt as p,nn as m,w as h}from"./library-CUIf7uCS.js";import{O as g,d as _,k as v,l as ee,m as te,n as ne,p as y,r as b,t as x,u as S}from"./wiki-wIqBVsyI.js";import{n as C,t as w}from"./AriaStaticInclude-CI16qWQ7-QE8vrVOk.js";import{n as T,t as E}from"./TextInclude-4xgAEWd0-GZXePIdA.js";import{n as D,t as re}from"./TeleportInclude-BNN4N2Lc--PA6HxFR.js";import{n as ie,t as ae}from"./D1SnackbarItem-Kpx29exp.js";var O,k,A,j,M;function N(){return(N=e((()=>{w(),E(),D(),i(),g(),u(),O=class{constructor(e){y(this,`emits`,void 0),this.emits=e}show(e,t){var n;(n=this.emits)==null||n.call(this,`show`,e,t)}hide(e,t){var n;(n=this.emits)==null||n.call(this,`hide`,e,t)}},k=class{constructor(e,t,n,r){y(this,`props`,void 0),y(this,`element`,void 0),y(this,`className`,void 0),y(this,`event`,void 0),y(this,`item`,m([])),y(this,`itemNumber`,0),y(this,`isItem`,()=>this.item.value.length>0),y(this,`add`,e=>{let t=this.getItemValue(e),n=this.getItemDelay(e);this.item.value=[...this.item.value,{...e,delay:n,value:t}],this.toScroll(),this.initDisplay(t,n)}),y(this,`remove`,e=>{if(this.getItemByValue(e)){let t=this.getElementItem(e);t?(t.addEventListener(`transitionend`,()=>this.performHide(e)),t.classList.add(`${this.className}--hide`),setTimeout(()=>this.performHide(e),512)):this.performHide(e)}}),y(this,`clear`,()=>{this.item.value.forEach(e=>e.value&&this.remove(e.value))}),y(this,`pause`,()=>{this.item.value.forEach(e=>e.resumableTimer?.pause())}),y(this,`resume`,()=>{this.item.value.forEach(e=>e.resumableTimer?.resume())}),this.props=e,this.element=t,this.className=n,this.event=r}isPriority(){return this.isItem()&&this.item.value.findIndex(e=>e.highPriority===!0)!==-1}getItemByValue(e){return this.item.value.find(t=>t.value===e)}getElementItem(e){return this.element.value?.querySelector(`[data-snackbar-item="${e}"]`)??void 0}getItemValue(e){return e.value??`snackbar-item-${++this.itemNumber}`}getItemDelay(e){return e.delay??this.props.delay??1e4}addShowItem(e,t){let n=this.getItemByValue(e);return n&&!n.resumableTimer&&(n.resumableTimer=new h(()=>this.remove(e),t+256)),this}performHide(e){let t=this.getItemByValue(e);if(t){var n,r;(n=t.resumableTimer)==null||n.clear(),this.item.value=this.item.value.filter(t=>t.value!==e),(r=this.event)==null||r.hide(e,t)}}initDisplay(e,t){t<0||requestAnimationFrame(()=>{let n=this.getElementItem(e),r=this.getItemByValue(e);if(r){if(n&&f(n)){var i;(i=this.event)==null||i.show(e,r),this.addShowItem(e,t)}else setTimeout(()=>this.initDisplay(e,t),128)}})}toScroll(){requestAnimationFrame(()=>{this.element.value&&(this.element.value.scrollTop=this.element.value.scrollHeight)})}},A=class{constructor(e,t,n,r,i,a,o,s,c={}){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`data`,void 0),y(this,`event`,void 0),y(this,`text`,void 0),y(this,`teleport`,void 0),y(this,`onClose`,e=>this.data.remove(e)),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{DataConstructor:l=k,EventConstructor:u=O,TeleportIncludeConstructor:d=re}=c;this.event=new u(s),this.data=new l(e,n,i,this.event),this.text=new T(e),this.teleport=new d}get binds(){return{onMouseenter:this.data.pause,onMouseleave:this.data.resume,...C.role(`region`),...C.label(this.text.notifications)}}},j={delay:8e3},M=class extends v{constructor(e,t,r,i=A){super(e,t,r),y(this,`item`,void 0),y(this,`renderData`,()=>{let e=[];return this.item.data.item.value.forEach(t=>e.push(l(t.highPriority?`aside`:`div`,{key:t.value,class:{[this.classes?.value.item??`item`]:!0,[this.classes?.value.priority??`priority`]:t.highPriority},"data-snackbar-item":t.value},this.renderItem(t)))),e}),y(this,`renderItem`,e=>{let t={...e.data,value:e.value,onClose:this.item.onClose};if(e.component){let r={...n(e.component)};return l(r,t)}return this.components.renderOne(`snackbarItem`,t,void 0,e.value)}),y(this,`renderSpace`,()=>this.item.data.isPriority()?[l(`div`,{class:this.classes?.value.space})]:[]),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{isItem:this.item.data.isItem,add:this.item.data.add,remove:this.item.data.remove,clear:this.item.data.clear}}initClasses(){return{main:{},item:this.getSubClass(`item`),space:this.getSubClass(`space`),priority:this.getSubClass(`priority`)}}initStyles(){return{}}initRender(){return this.item.data.isItem()?this.item.teleport.render(l(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.renderData(),...this.renderSpace()])):[]}}})))()}var P;function F(){return(F=e((()=>{ie(),P=ae})))()}var I,L;function R(){return(R=e((()=>{N(),I={limit:[`1`,`2`,`4`,`6`,`8`],vertical:[`top`,`bottom`],horizontal:[`right`,`left`,`block`],origin:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},L={...j}})))()}var z;function B(){return(B=e((()=>{i(),g(),N(),F(),R(),z=c({name:`D1Snackbar`,__name:`D1Snackbar`,props:s({textNotifications:{type:[String,Function]},delay:{},full:{type:Boolean},all:{type:Boolean},limit:{},vertical:{},horizontal:{},origin:{}},L),emits:[`show`,`hide`],setup(e,{expose:t,emit:n}){let i=n,s=e,c=r(()=>({main:{"d1-snackbar":!0,"d1-snackbar--full":s.full,"d1-snackbar--all":s.all,[`d1-snackbar--limit--${s.limit}`]:o(I.limit,s.limit),[`d1-snackbar--vertical--${s.vertical}`]:o(I.vertical,s.vertical),[`d1-snackbar--horizontal--${s.horizontal}`]:o(I.horizontal,s.horizontal),[`d1-snackbar--origin--${s.origin}`]:o(I.origin,s.origin)}})),l=r(()=>({})),u=new M(`d1.snackbar`,s,{emits:i,classes:c,styles:l,components:{snackbarItem:P}}),f=u.render();return t(u.expose()),(e,t)=>(a(),p(d(f)))}})})))()}var V;function H(){return(H=e((()=>{B(),V=z,z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{name:`D1Snackbar`,exportName:`default`,displayName:`D1Snackbar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Snackbar/D1Snackbar.vue`]})})))()}var U,W,G,K;function q(){return(q=e((()=>{x(),R(),U=[{name:`all`,type:`boolean`},{name:`delay`,type:`number`},{name:`full`,type:`boolean`},{name:`horizontal`,type:`string`,option:[`right`,`left`,`block`]},{name:`limit`,type:`string`,option:[`1`,`2`,`4`,`6`,`8`]},{name:`origin`,type:`string`,option:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},{name:`textNotifications`,type:`TextValue`},{name:`vertical`,type:`string`,option:[`top`,`bottom`]}],W=[],G=[{name:`hide`,description:`Event triggered when notification is hidden/ Событие при скрытии уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]},{name:`show`,description:`Event triggered when notification is shown/ Событие при показе уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]}],K={component:`Snackbar`,props:U,slots:W,events:G,defaults:L,wikiDesign:ne}})))()}var J;function Y(){return(Y=e((()=>{_(),ee(),q(),J=new S(K.component,K.props,K.defaults,K.wikiDesign,b,te)})))()}var oe=t({Snackbar:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),X,Z,Q;function $(){return($=e((()=>{H(),Y(),X={title:`Ui/Snackbar`,component:V,parameters:{design:`d1`,docs:{description:{component:J.getDescription()}}},argTypes:J.getWiki(),args:J.getValues()},Z={render:e=>({components:{D1Snackbar:V},setup:()=>({args:e}),template:`
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