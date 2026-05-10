import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{A as n,E as r,P as i,a,c as o,d as s,g as c,i as l,r as u,s as d,t as f}from"./vue.esm-bundler-KrdxwWaE.js";import{N as p,P as m,Y as h,at as g,f as _,t as ee}from"./iframe-UEhCQgdF.js";import{t as te}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as ne,d as re,f as v,n as y,o as b,p as x,t as S,u as C}from"./wiki-YLJtDFp2.js";import{n as w,t as T}from"./AriaStaticInclude-CS1hPGyK-lIJjWVl9.js";import{n as ie,t as ae}from"./TextInclude-DAHxDKmO-B24MLVNy.js";import{n as E,t as D}from"./D1SnackbarItem-CSz8_eUG.js";var O,k,A,j,M,N=e((()=>{T(),v(),ie(),f(),_(),h(),O=class{constructor(e){this.emits=e}show(e,t){var n;(n=this.emits)==null||n.call(this,`show`,e,t)}hide(e,t){var n;(n=this.emits)==null||n.call(this,`hide`,e,t)}},k=class{constructor(e,t,r,i){x(this,`item`,n([])),x(this,`itemNumber`,0),x(this,`isItem`,l(()=>this.item.value.length>0)),x(this,`isPriority`,l(()=>this.isItem.value&&this.item.value.findIndex(e=>e.highPriority===!0)!==-1)),x(this,`add`,e=>{let t=this.getItemValue(e),n=this.getItemDelay(e);this.item.value=[...this.item.value,{...e,delay:n,value:t}],this.toScroll(),this.initDisplay(t,n)}),x(this,`remove`,e=>{if(this.getItemByValue(e)){let t=this.getElementItem(e);t?(t.addEventListener(`transitionend`,()=>this.performHide(e)),t.classList.add(`${this.className}--hide`),setTimeout(()=>this.performHide(e),512)):this.performHide(e)}}),x(this,`clear`,()=>{this.item.value.forEach(e=>e.value&&this.remove(e.value))}),x(this,`pause`,()=>{this.item.value.forEach(e=>e.resumableTimer?.pause()),console.log(`pause`)}),x(this,`resume`,()=>{this.item.value.forEach(e=>e.resumableTimer?.resume())}),this.props=e,this.element=t,this.className=r,this.event=i}getItemByValue(e){return this.item.value.find(t=>t.value===e)}getElementItem(e){return this.element.value?.querySelector(`[data-snackbar-item="${e}"]`)??void 0}getItemValue(e){return e.value??`snackbar-item-${++this.itemNumber}`}getItemDelay(e){return e.delay??this.props.delay??1e4}addShowItem(e,t){let n=this.getItemByValue(e);return n&&!n.resumableTimer&&(n.resumableTimer=new p(()=>this.remove(e),t+256)),this}performHide(e){let t=this.getItemByValue(e);if(t){var n,r;(n=t.resumableTimer)==null||n.clear(),this.item.value=this.item.value.filter(t=>t.value!==e),(r=this.event)==null||r.hide(e,t)}}initDisplay(e,t){t<0||requestAnimationFrame(()=>{let n=this.getElementItem(e),r=this.getItemByValue(e);if(r)if(n&&g(n)){var i;(i=this.event)==null||i.show(e,r),this.addShowItem(e,t)}else setTimeout(()=>this.initDisplay(e,t),128)})}toScroll(){requestAnimationFrame(()=>{this.element.value&&(this.element.value.scrollTop=this.element.value.scrollHeight)})}},A=class{constructor(e,t,n,r,i,a,o,s,c){x(this,`data`,void 0),x(this,`event`,void 0),x(this,`text`,void 0),x(this,`binds`,l(()=>({onMouseenter:this.data.pause,onMouseleave:this.data.resume,...w.role(`region`),...w.label(this.text.notifications.value)}))),x(this,`onClose`,e=>this.data.remove(e)),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{DataConstructor:u=k,EventConstructor:d=O}=c??{};this.event=new d(s),this.data=new u(e,n,i,this.event),this.text=new ae(e)}},j={delay:8e3},M=class extends ee{constructor(e,t,n,i=A){super(e,t,n),x(this,`item`,void 0),x(this,`renderData`,()=>{let e=[];return this.item.data.item.value.forEach(t=>e.push(o(t.highPriority?`aside`:`div`,{key:t.value,class:{[this.classes?.value.item??`item`]:!0,[this.classes?.value.priority??`priority`]:t.highPriority},"data-snackbar-item":t.value},this.renderItem(t)))),e}),x(this,`renderItem`,e=>{let t={...e.data,value:e.value,onClose:this.item.onClose};return e.component?o({...r(e.component)},t):this.components.renderOne(`snackbarItem`,t,void 0,e.value)}),x(this,`renderSpace`,()=>this.item.data.isPriority.value?[o(`div`,{class:this.classes?.value.space})]:[]),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{isItem:this.item.data.isItem,add:this.item.data.add,remove:this.item.data.remove,clear:this.item.data.clear}}initClasses(){return{main:{},item:this.getSubClass(`item`),space:this.getSubClass(`space`),priority:this.getSubClass(`priority`)}}initStyles(){return{}}initRender(){if(this.item.data.isItem.value)return o(u,{key:`teleport`,to:`body`},o(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds.value},[...this.renderData(),...this.renderSpace()]))}}})),P,F=e((()=>{E(),P=D})),I,L,R=e((()=>{N(),I={limit:[`1`,`2`,`4`,`6`,`8`],vertical:[`top`,`bottom`],horizontal:[`right`,`left`,`block`],origin:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},L={...j}})),z=e((()=>{})),B,V=e((()=>{f(),_(),N(),F(),R(),z(),B=d({name:`D1Snackbar`,__name:`D1Snackbar`,props:s({textNotifications:{type:[String,Function]},delay:{},full:{type:Boolean},all:{type:Boolean},limit:{},vertical:{},horizontal:{},origin:{}},L),emits:[`show`,`hide`],setup(e,{expose:t,emit:n}){let r=n,o=e,s=new M(`d1.snackbar`,o,{emits:r,classes:l(()=>({main:{"d1-snackbar":!0,"d1-snackbar--full":o.full,"d1-snackbar--all":o.all,[`d1-snackbar--limit--${o.limit}`]:m(I.limit,o.limit),[`d1-snackbar--vertical--${o.vertical}`]:m(I.vertical,o.vertical),[`d1-snackbar--horizontal--${o.horizontal}`]:m(I.horizontal,o.horizontal),[`d1-snackbar--origin--${o.origin}`]:m(I.origin,o.origin)}})),styles:l(()=>({})),components:{snackbarItem:P}}),u=s.render();return t(s.expose()),(e,t)=>(c(),a(i(u)))}})})),H,U=e((()=>{V(),V(),H=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{name:`D1Snackbar`,exportName:`default`,displayName:`D1Snackbar`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Snackbar/D1Snackbar.vue`]})})),W,G,K,q,oe=e((()=>{S(),R(),W=[{name:`all`,type:`boolean | undefined`},{name:`delay`,type:`number | undefined`},{name:`full`,type:`boolean | undefined`},{name:`horizontal`,type:`string | undefined`,option:[`right`,`left`,`block`]},{name:`limit`,type:`string | undefined`,option:[`1`,`2`,`4`,`6`,`8`]},{name:`origin`,type:`string | undefined`,option:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},{name:`textNotifications`,type:`TextValue`},{name:`vertical`,type:`string | undefined`,option:[`top`,`bottom`]}],G=[],K=[{name:`hide`,description:`Event triggered when notification is hidden/ Событие при скрытии уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]},{name:`show`,description:`Event triggered when notification is shown/ Событие при показе уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]}],q={component:`Snackbar`,props:W,slots:G,events:K,defaults:L,wikiDesign:y}})),J,Y=e((()=>{re(),b(),oe(),J=new C(q.component,q.props,q.defaults,q.wikiDesign,ne,te)})),se=t({Snackbar:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),X,Z,Q,$=e((()=>{U(),Y(),X={title:`Ui/Snackbar`,component:H,parameters:{design:`d1`,docs:{description:{component:J.getDescription()}}},argTypes:J.getWiki(),args:J.getValues()},Z={render:e=>({components:{D1Snackbar:H},setup:()=>({args:e}),template:`
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