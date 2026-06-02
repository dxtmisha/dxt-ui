import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,D as i,Dt as a,Ft as o,Jt as s,Kt as c,M as l,Mt as u,Nt as d,X as f,Xt as ee,kt as p,m,nt as h,r as g}from"./iframe-53vFWNoU.js";import{t as te}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as _,f as v,l as ne,n as re,o as y,p as b,t as x,u as ie}from"./wiki-DwIxUKqL.js";import{n as S,t as ae}from"./AriaStaticInclude-CS1hPGyK-DN8tdKs-.js";import{n as oe,t as C}from"./TextInclude-DlJA8b8Y-D4fD3kYc.js";import{n as w,t as T}from"./TeleportInclude-snLZMJxC-B22GXWsC.js";import{n as E,t as D}from"./D1SnackbarItem-Dbcdnfw1.js";var O,k,A,j,M,N=t((()=>{ae(),v(),oe(),w(),a(),m(),f(),O=class{constructor(e){b(this,`emits`,void 0),this.emits=e}show(e,t){var n;(n=this.emits)==null||n.call(this,`show`,e,t)}hide(e,t){var n;(n=this.emits)==null||n.call(this,`hide`,e,t)}},k=class{constructor(e,t,n,r){b(this,`props`,void 0),b(this,`element`,void 0),b(this,`className`,void 0),b(this,`event`,void 0),b(this,`item`,s([])),b(this,`itemNumber`,0),b(this,`isItem`,()=>this.item.value.length>0),b(this,`add`,e=>{let t=this.getItemValue(e),n=this.getItemDelay(e);this.item.value=[...this.item.value,{...e,delay:n,value:t}],this.toScroll(),this.initDisplay(t,n)}),b(this,`remove`,e=>{if(this.getItemByValue(e)){let t=this.getElementItem(e);t?(t.addEventListener(`transitionend`,()=>this.performHide(e)),t.classList.add(`${this.className}--hide`),setTimeout(()=>this.performHide(e),512)):this.performHide(e)}}),b(this,`clear`,()=>{this.item.value.forEach(e=>e.value&&this.remove(e.value))}),b(this,`pause`,()=>{this.item.value.forEach(e=>e.resumableTimer?.pause())}),b(this,`resume`,()=>{this.item.value.forEach(e=>e.resumableTimer?.resume())}),this.props=e,this.element=t,this.className=n,this.event=r}isPriority(){return this.isItem()&&this.item.value.findIndex(e=>e.highPriority===!0)!==-1}getItemByValue(e){return this.item.value.find(t=>t.value===e)}getElementItem(e){return this.element.value?.querySelector(`[data-snackbar-item="${e}"]`)??void 0}getItemValue(e){return e.value??`snackbar-item-${++this.itemNumber}`}getItemDelay(e){return e.delay??this.props.delay??1e4}addShowItem(e,t){let n=this.getItemByValue(e);return n&&!n.resumableTimer&&(n.resumableTimer=new h(()=>this.remove(e),t+256)),this}performHide(e){let t=this.getItemByValue(e);if(t){var n,r;(n=t.resumableTimer)==null||n.clear(),this.item.value=this.item.value.filter(t=>t.value!==e),(r=this.event)==null||r.hide(e,t)}}initDisplay(e,t){t<0||requestAnimationFrame(()=>{let n=this.getElementItem(e),r=this.getItemByValue(e);if(r)if(n&&l(n)){var i;(i=this.event)==null||i.show(e,r),this.addShowItem(e,t)}else setTimeout(()=>this.initDisplay(e,t),128)})}toScroll(){requestAnimationFrame(()=>{this.element.value&&(this.element.value.scrollTop=this.element.value.scrollHeight)})}},A=class{constructor(e,t,n,r,i,a,o,s,c={}){b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`element`,void 0),b(this,`classDesign`,void 0),b(this,`className`,void 0),b(this,`components`,void 0),b(this,`slots`,void 0),b(this,`emits`,void 0),b(this,`data`,void 0),b(this,`event`,void 0),b(this,`text`,void 0),b(this,`teleport`,void 0),b(this,`onClose`,e=>this.data.remove(e)),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{DataConstructor:l=k,EventConstructor:u=O,TeleportIncludeConstructor:d=T}=c;this.event=new u(s),this.data=new l(e,n,i,this.event),this.text=new C(e),this.teleport=new d}get binds(){return{onMouseenter:this.data.pause,onMouseleave:this.data.resume,...S.role(`region`),...S.label(this.text.notifications)}}},j={delay:8e3},M=class extends g{constructor(e,t,n,r=A){super(e,t,n),b(this,`item`,void 0),b(this,`renderData`,()=>{let e=[];return this.item.data.item.value.forEach(t=>e.push(d(t.highPriority?`aside`:`div`,{key:t.value,class:{[this.classes?.value.item??`item`]:!0,[this.classes?.value.priority??`priority`]:t.highPriority},"data-snackbar-item":t.value},this.renderItem(t)))),e}),b(this,`renderItem`,e=>{let t={...e.data,value:e.value,onClose:this.item.onClose};return e.component?d({...c(e.component)},t):this.components.renderOne(`snackbarItem`,t,void 0,e.value)}),b(this,`renderSpace`,()=>this.item.data.isPriority()?[d(`div`,{class:this.classes?.value.space})]:[]),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{isItem:this.item.data.isItem,add:this.item.data.add,remove:this.item.data.remove,clear:this.item.data.clear}}initClasses(){return{main:{},item:this.getSubClass(`item`),space:this.getSubClass(`space`),priority:this.getSubClass(`priority`)}}initStyles(){return{}}initRender(){return this.item.data.isItem()?this.item.teleport.render(d(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.renderData(),...this.renderSpace()])):[]}}})),P,F=t((()=>{E(),P=D})),I,L,R=t((()=>{N(),I={limit:[`1`,`2`,`4`,`6`,`8`],vertical:[`top`,`bottom`],horizontal:[`right`,`left`,`block`],origin:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},L={...j}})),z=t((()=>{})),B,V=t((()=>{a(),m(),N(),F(),R(),z(),B=u({name:`D1Snackbar`,__name:`D1Snackbar`,props:o({textNotifications:{type:[String,Function]},delay:{},full:{type:Boolean},all:{type:Boolean},limit:{},vertical:{},horizontal:{},origin:{}},L),emits:[`show`,`hide`],setup(e,{expose:t,emit:a}){let o=a,s=e,c=new M(`d1.snackbar`,s,{emits:o,classes:p(()=>({main:{"d1-snackbar":!0,"d1-snackbar--full":s.full,"d1-snackbar--all":s.all,[`d1-snackbar--limit--${s.limit}`]:i(I.limit,s.limit),[`d1-snackbar--vertical--${s.vertical}`]:i(I.vertical,s.vertical),[`d1-snackbar--horizontal--${s.horizontal}`]:i(I.horizontal,s.horizontal),[`d1-snackbar--origin--${s.origin}`]:i(I.origin,s.origin)}})),styles:p(()=>({})),components:{snackbarItem:P}}),l=c.render();return t(c.expose()),(e,t)=>(r(),n(ee(l)))}})})),H,U=t((()=>{V(),V(),H=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{name:`D1Snackbar`,exportName:`default`,displayName:`D1Snackbar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Snackbar/D1Snackbar.vue`]})})),W,G,K,q,se=t((()=>{x(),R(),W=[{name:`all`,type:`boolean`},{name:`delay`,type:`number`},{name:`full`,type:`boolean`},{name:`horizontal`,type:`string`,option:[`right`,`left`,`block`]},{name:`limit`,type:`string`,option:[`1`,`2`,`4`,`6`,`8`]},{name:`origin`,type:`string`,option:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},{name:`textNotifications`,type:`TextValue`},{name:`vertical`,type:`string`,option:[`top`,`bottom`]}],G=[],K=[{name:`hide`,description:`Event triggered when notification is hidden/ Событие при скрытии уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]},{name:`show`,description:`Event triggered when notification is shown/ Событие при показе уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]}],q={component:`Snackbar`,props:W,slots:G,events:K,defaults:L,wikiDesign:re}})),J,Y=t((()=>{_(),y(),se(),J=new ie(q.component,q.props,q.defaults,q.wikiDesign,ne,te)})),ce=e({Snackbar:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),X,Z,Q,$=t((()=>{U(),Y(),X={title:`Ui/Snackbar`,component:H,parameters:{design:`d1`,docs:{description:{component:J.getDescription()}}},argTypes:J.getWiki(),args:J.getValues()},Z={render:e=>({components:{D1Snackbar:H},setup:()=>({args:e}),template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Snackbar`]}));$();export{Z as Snackbar,Q as __namedExportsOrder,X as default,Y as i,$ as n,J as r,ce as t};