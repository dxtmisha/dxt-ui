import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Et as r,Kt as i,N as a,Nt as o,Ot as s,P as c,St as l,Tt as u,Ut as d,Y as f,at as p,f as m,t as h,wt as g,xt as _,zt as ee}from"./iframe-yo6yIkeP.js";import{a as te,d as ne,f as v,m as y,n as b,o as x,p as S,t as C,u as w}from"./wiki-Ck-JDNL8.js";import{n as T,t as re}from"./AriaStaticInclude-CS1hPGyK-B_wnUV8r.js";import{n as ie,t as ae}from"./TextInclude-6E-DvjvX-BsPkq62b.js";import{n as E,t as D}from"./D1SnackbarItem-BVMdrHLE.js";var O,k,A,j,M,N=e((()=>{re(),v(),ie(),_(),m(),f(),O=class{constructor(e){this.emits=e}show(e,t){var n;(n=this.emits)==null||n.call(this,`show`,e,t)}hide(e,t){var n;(n=this.emits)==null||n.call(this,`hide`,e,t)}},k=class{constructor(e,t,r,i){S(this,`item`,d([])),S(this,`itemNumber`,0),S(this,`isItem`,n(()=>this.item.value.length>0)),S(this,`isPriority`,n(()=>this.isItem.value&&this.item.value.findIndex(e=>e.highPriority===!0)!==-1)),S(this,`add`,e=>{let t=this.getItemValue(e),n=this.getItemDelay(e);this.item.value=[...this.item.value,{...e,delay:n,value:t}],this.toScroll(),this.initDisplay(t,n)}),S(this,`remove`,e=>{if(this.getItemByValue(e)){let t=this.getElementItem(e);t?(t.addEventListener(`transitionend`,()=>this.performHide(e)),t.classList.add(`${this.className}--hide`),setTimeout(()=>this.performHide(e),512)):this.performHide(e)}}),S(this,`clear`,()=>{this.item.value.forEach(e=>e.value&&this.remove(e.value))}),S(this,`pause`,()=>{this.item.value.forEach(e=>e.resumableTimer?.pause()),console.log(`pause`)}),S(this,`resume`,()=>{this.item.value.forEach(e=>e.resumableTimer?.resume())}),this.props=e,this.element=t,this.className=r,this.event=i}getItemByValue(e){return this.item.value.find(t=>t.value===e)}getElementItem(e){return this.element.value?.querySelector(`[data-snackbar-item="${e}"]`)??void 0}getItemValue(e){return e.value??`snackbar-item-${++this.itemNumber}`}getItemDelay(e){return e.delay??this.props.delay??1e4}addShowItem(e,t){let n=this.getItemByValue(e);return n&&!n.resumableTimer&&(n.resumableTimer=new a(()=>this.remove(e),t+256)),this}performHide(e){let t=this.getItemByValue(e);if(t){var n,r;(n=t.resumableTimer)==null||n.clear(),this.item.value=this.item.value.filter(t=>t.value!==e),(r=this.event)==null||r.hide(e,t)}}initDisplay(e,t){t<0||requestAnimationFrame(()=>{let n=this.getElementItem(e),r=this.getItemByValue(e);if(r)if(n&&p(n)){var i;(i=this.event)==null||i.show(e,r),this.addShowItem(e,t)}else setTimeout(()=>this.initDisplay(e,t),128)})}toScroll(){requestAnimationFrame(()=>{this.element.value&&(this.element.value.scrollTop=this.element.value.scrollHeight)})}},A=class{constructor(e,t,r,i,a,o,s,c,l){S(this,`data`,void 0),S(this,`event`,void 0),S(this,`text`,void 0),S(this,`binds`,n(()=>({onMouseenter:this.data.pause,onMouseleave:this.data.resume,...T.role(`region`),...T.label(this.text.notifications.value)}))),S(this,`onClose`,e=>this.data.remove(e)),this.props=e,this.refs=t,this.element=r,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{DataConstructor:u=k,EventConstructor:d=O}=l??{};this.event=new d(c),this.data=new u(e,r,a,this.event),this.text=new ae(e)}},j={delay:8e3},M=class extends h{constructor(e,t,n,i=A){super(e,t,n),S(this,`item`,void 0),S(this,`renderData`,()=>{let e=[];return this.item.data.item.value.forEach(t=>e.push(r(t.highPriority?`aside`:`div`,{key:t.value,class:{[this.classes?.value.item??`item`]:!0,[this.classes?.value.priority??`priority`]:t.highPriority},"data-snackbar-item":t.value},this.renderItem(t)))),e}),S(this,`renderItem`,e=>{let t={...e.data,value:e.value,onClose:this.item.onClose};return e.component?r({...ee(e.component)},t):this.components.renderOne(`snackbarItem`,t,void 0,e.value)}),S(this,`renderSpace`,()=>this.item.data.isPriority.value?[r(`div`,{class:this.classes?.value.space})]:[]),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{isItem:this.item.data.isItem,add:this.item.data.add,remove:this.item.data.remove,clear:this.item.data.clear}}initClasses(){return{main:{},item:this.getSubClass(`item`),space:this.getSubClass(`space`),priority:this.getSubClass(`priority`)}}initStyles(){return{}}initRender(){if(this.item.data.isItem.value)return r(l,{key:`teleport`,to:`body`},r(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds.value},[...this.renderData(),...this.renderSpace()]))}}})),P,F=e((()=>{E(),P=D})),I,L,R=e((()=>{N(),I={limit:[`1`,`2`,`4`,`6`,`8`],vertical:[`top`,`bottom`],horizontal:[`right`,`left`,`block`],origin:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},L={...j}})),z=e((()=>{})),B,V=e((()=>{_(),m(),N(),F(),R(),z(),B=u({name:`D1Snackbar`,__name:`D1Snackbar`,props:s({textNotifications:{type:[String,Function]},delay:{},full:{type:Boolean},all:{type:Boolean},limit:{},vertical:{},horizontal:{},origin:{}},L),emits:[`show`,`hide`],setup(e,{expose:t,emit:r}){let a=r,s=e,l=new M(`d1.snackbar`,s,{emits:a,classes:n(()=>({main:{"d1-snackbar":!0,"d1-snackbar--full":s.full,"d1-snackbar--all":s.all,[`d1-snackbar--limit--${s.limit}`]:c(I.limit,s.limit),[`d1-snackbar--vertical--${s.vertical}`]:c(I.vertical,s.vertical),[`d1-snackbar--horizontal--${s.horizontal}`]:c(I.horizontal,s.horizontal),[`d1-snackbar--origin--${s.origin}`]:c(I.origin,s.origin)}})),styles:n(()=>({})),components:{snackbarItem:P}}),u=l.render();return t(l.expose()),(e,t)=>(o(),g(i(u)))}})})),H,U=e((()=>{V(),V(),H=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{name:`D1Snackbar`,exportName:`default`,displayName:`D1Snackbar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Snackbar/D1Snackbar.vue`]})})),W,G,K,q,oe=e((()=>{C(),R(),W=[{name:`all`,type:`boolean | undefined`},{name:`delay`,type:`number | undefined`},{name:`full`,type:`boolean | undefined`},{name:`horizontal`,type:`string | undefined`,option:[`right`,`left`,`block`]},{name:`limit`,type:`string | undefined`,option:[`1`,`2`,`4`,`6`,`8`]},{name:`origin`,type:`string | undefined`,option:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},{name:`textNotifications`,type:`TextValue`},{name:`vertical`,type:`string | undefined`,option:[`top`,`bottom`]}],G=[],K=[{name:`hide`,description:`Event triggered when notification is hidden/ Событие при скрытии уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]},{name:`show`,description:`Event triggered when notification is shown/ Событие при показе уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]}],q={component:`Snackbar`,props:W,slots:G,events:K,defaults:L,wikiDesign:b}})),J,Y=e((()=>{ne(),x(),oe(),J=new w(q.component,q.props,q.defaults,q.wikiDesign,te,y)})),se=t({Snackbar:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),X,Z,Q,$=e((()=>{U(),Y(),X={title:`Ui/Snackbar`,component:H,parameters:{design:`d1`,docs:{description:{component:J.getDescription()}}},argTypes:J.getWiki(),args:J.getValues()},Z={render:e=>({components:{D1Snackbar:H},setup:()=>({args:e}),template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Snackbar`]}));$();export{Z as Snackbar,Q as __namedExportsOrder,X as default,Y as i,$ as n,J as r,se as t};