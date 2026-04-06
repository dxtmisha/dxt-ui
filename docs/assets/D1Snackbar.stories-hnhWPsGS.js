import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Ft as n,Ht as r,St as i,W as a,X as o,_t as s,bt as c,f as l,kt as u,m as d,nt as f,vt as p,wt as m,xt as h,yt as g,zt as _}from"./iframe-DHvUfpTv.js";import{a as v,d as y,f as b,g as x,l as S,n as C,p as w,t as T,u as E}from"./wiki-COBgMBNI.js";var D,O,k,A,j,M,N=e((()=>{b(),s(),l(),o(),D=class{constructor(e){this.emits=e}show(e,t){var n;(n=this.emits)==null||n.call(this,`show`,e,t)}hide(e,t){var n;(n=this.emits)==null||n.call(this,`hide`,e,t)}},O=0,k=class{constructor(e,t,n,r){w(this,`item`,_([])),w(this,`isItem`,g(()=>this.item.value.length>0)),w(this,`isPriority`,g(()=>this.isItem.value&&this.item.value.findIndex(e=>e.highPriority===!0)!==-1)),w(this,`add`,e=>{let t=this.getItemValue(e),n=this.getItemDelay(e);this.item.value=[...this.item.value,{...e,delay:n,value:t}],this.toScroll(),this.toShow(t,n)}),w(this,`remove`,e=>{if(this.getItemByValue(e)){let t=this.getElementItem(e);t?(t.addEventListener(`transitionend`,()=>this.toNone(e)),t.classList.add(`${this.className}--hide`),setTimeout(()=>this.toNone(e),512)):this.toNone(e)}}),w(this,`clear`,()=>{this.item.value.forEach(e=>e.value&&this.remove(e.value))}),this.props=e,this.element=t,this.className=n,this.event=r}getItemByValue(e){return this.item.value.find(t=>t.value===e)}getElementItem(e){return this.element.value?.querySelector(`[data-snackbar-item="${e}"]`)??void 0}getItemValue(e){return e.value??`snackbar-item-${++O}`}getItemDelay(e){return e.delay??this.props.delay??1e4}toNone(e){let t=this.getItemByValue(e);if(t){var n;this.item.value=this.item.value.filter(t=>t.value!==e),(n=this.event)==null||n.hide(e,t)}}toShow(e,t){t<0||requestAnimationFrame(()=>{let n=this.getElementItem(e),r=this.getItemByValue(e);if(r)if(n&&a(n)){var i;(i=this.event)==null||i.show(e,r),setTimeout(()=>this.remove(e),t+256)}else setTimeout(()=>this.toShow(e,t),128)})}toScroll(){requestAnimationFrame(()=>{this.element.value&&(this.element.value.scrollTop=1e6)})}},A=class{constructor(e,t,n,r,i,a,o,s,c){w(this,`data`,void 0),w(this,`event`,void 0),w(this,`onClose`,e=>this.data.remove(e)),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{DataConstructor:l=k,EventConstructor:u=D}=c??{};this.event=new u(s),this.data=new l(e,n,i,this.event)}},j={delay:8e3},M=class extends d{constructor(e,t,r,a=A){super(e,t,r),w(this,`item`,void 0),w(this,`renderData`,()=>{let e=[];return this.item.data.item.value.forEach(t=>e.push(i(t.highPriority?`aside`:`div`,{key:t.value,class:{[this.classes?.value.item??`item`]:!0,[this.classes?.value.priority??`priority`]:t.highPriority},"data-snackbar-item":t.value},this.renderItem(t)))),e}),w(this,`renderItem`,e=>{let t={...e.data,value:e.value,onClose:this.item.onClose};return e.component?i({...n(e.component)},t):this.components.renderOne(`snackbarItem`,t,void 0,e.value)}),w(this,`renderSpace`,()=>this.item.data.isPriority.value?[i(`div`,{class:this.classes?.value.space})]:[]),this.item=new a(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{isItem:this.item.data.isItem,add:this.item.data.add,remove:this.item.data.remove,clear:this.item.data.clear}}initClasses(){return{main:{},item:this.getSubClass(`item`),space:this.getSubClass(`space`),priority:this.getSubClass(`priority`)}}initStyles(){return{}}initRender(){if(this.item.data.isItem.value)return i(p,{key:`teleport`,to:`body`},i(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},[...this.renderData(),...this.renderSpace()]))}}})),P,F,I=e((()=>{N(),P={limit:[`1`,`2`,`4`,`6`,`8`],vertical:[`top`,`bottom`],horizontal:[`right`,`left`,`block`],origin:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},F={...j}})),L=e((()=>{})),R,z=e((()=>{s(),l(),N(),I(),L(),R=h({name:`D1Snackbar`,__name:`D1Snackbar`,props:m({delay:{},full:{type:Boolean},all:{type:Boolean},limit:{},vertical:{},horizontal:{},origin:{}},F),emits:[`show`,`hide`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=new M(`d1.snackbar`,a,{emits:i,classes:g(()=>({main:{"d1-snackbar":!0,"d1-snackbar--full":a.full,"d1-snackbar--all":a.all,[`d1-snackbar--limit--${a.limit}`]:f(P.limit,a.limit),[`d1-snackbar--vertical--${a.vertical}`]:f(P.vertical,a.vertical),[`d1-snackbar--horizontal--${a.horizontal}`]:f(P.horizontal,a.horizontal),[`d1-snackbar--origin--${a.origin}`]:f(P.origin,a.origin)}})),styles:g(()=>({}))}),s=o.render();return t(o.expose()),(e,t)=>(u(),c(r(s)))}})})),B,V=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Snackbar`,exportName:`default`,displayName:`D1Snackbar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Snackbar/D1Snackbar.vue`]})})),H,U,W,G,K=e((()=>{E(),T(),I(),H=[{name:`all`,type:`boolean`},{name:`delay`,type:`number`},{name:`full`,type:`boolean`},{name:`horizontal`,type:`string`,option:[`right`,`left`,`block`]},{name:`limit`,type:`string`,option:[`1`,`2`,`4`,`6`,`8`]},{name:`origin`,type:`string`,option:[`topToBottom`,`bottomToTop`,`rightToLeft`,`leftToRight`]},{name:`vertical`,type:`string`,option:[`top`,`bottom`]}],U=[],W=[{name:`hide`,description:`Event triggered when notification is hidden/ Событие при скрытии уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]},{name:`show`,description:`Event triggered when notification is shown/ Событие при показе уведомления`,properties:[{name:`value`,type:`string`},{name:`item`,type:`SnackbarValue`}]}],G={component:`Snackbar`,props:H,slots:U,events:W,defaults:F,wikiDesign:C}})),q,J=e((()=>{E(),v(),K(),q=new y(G.component,G.props,G.defaults,G.wikiDesign,S,x)})),Y=t({Snackbar:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),X,Z,Q,$=e((()=>{V(),J(),X={title:`Ui/Snackbar`,component:B,parameters:{design:`d1`,docs:{description:{component:q.getDescription()}}},argTypes:q.getWiki(),args:q.getValues()},Z={render:e=>({components:{D1Snackbar:B},setup:()=>({args:e}),template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Snackbar`]}));$();export{Z as Snackbar,Q as __namedExportsOrder,X as default,J as i,$ as n,q as r,Y as t};