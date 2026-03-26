import{n as e,r as t}from"./chunk-BneVvdWh.js";import{At as n,Bt as r,Ct as i,It as a,Ot as o,bt as s,c,d as l,gt as u,h as d,l as f,nt as p,u as m,vt as h,xt as ee,yt as te}from"./iframe-InwAcaLb.js";import{a as ne,d as re,l as ie,m as ae,n as oe,t as se,u as g}from"./wiki-DiKtF90Q.js";import{c as _,s as ce}from"./D1Icon-jtYe35RL.js";import{n as le,t as ue}from"./ModelInclude-BiYm_iCQ-CyIpfNzl.js";import{n as v,t as y}from"./AriaStaticInclude-DRHG8ILX-NB6_d56h.js";import{n as b,t as x}from"./D1MotionAxis-7OQGXFRT.js";import{n as S,t as C}from"./D1TabsNavigation-uBLVLepq.js";var w,T,E,D,O,k,A,j,M,N=e((()=>{u(),m(),_(),le(),y(),w=Object.defineProperty,T=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t,n)=>T(e,typeof t==`symbol`?t:t+``,n),D=class{constructor(e,t,n,r,i,o,s){E(this,`element`,a()),E(this,`selectedItem`,h(()=>this.selected?f(this.selected):this.props.selected)),E(this,`binds`,h(()=>d(f(this.extra),{class:`${this.className}__motionAxis`},this.props.motionAxisAttrs))),E(this,`render`,(e,t)=>this.components?this.components.render(`motionAxis`,{...d(t,this.binds.value,{selected:this.selectedItem.value}),ref:this.element,onMotionAxis:this.onMotionAxis},e,this.index):[]),E(this,`onMotionAxis`,e=>{var t;(t=this.emits)==null||t.call(this,`motionAxis`,e)}),this.props=e,this.className=t,this.components=n,this.emits=r,this.extra=i,this.selected=o,this.index=s}},O=class{constructor(e,t,n,r,i){E(this,`element`,a()),E(this,`binds`,h(()=>d(f(this.extra),{class:`${this.className}__tabsNavigation`,itemAttrs:this.props.tabItemAttrs},c(this.props.tabs,`list`),this.props.tabsNavigationAttrs))),E(this,`ids`,h(()=>this.element.value?.ids)),E(this,`render`,(e,t)=>this.components?this.components.render(`tabsNavigation`,d(t,this.binds.value,{ref:this.element}),e,this.index):[]),this.props=e,this.className=t,this.components=n,this.extra=r,this.index=i}},k=class{constructor(e,t){E(this,`item`,a()),E(this,`set`,e=>{this.item.value=e}),E(this,`update`,()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=t,this.item.value=e.selected,n([this.refs.selected],this.update)}is(e){return p(e,this.item.value)}},A=class{constructor(e,t,n,r,i,a,o,s,c){E(this,`event`),E(this,`motionAxis`),E(this,`tabsNavigation`),E(this,`selected`),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=ce,ModelIncludeConstructor:u=ue,MotionAxisIncludeConstructor:d=D,TabsNavigationIncludeConstructor:f=O,TabsSelectedConstructor:p=k}=c??{};this.selected=new p(this.props,this.refs),this.event=new l(void 0,void 0,this.emits),this.tabsNavigation=new f(this.props,this.className,this.components,h(()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set}))),this.motionAxis=new d(this.props,this.className,this.components,this.emits,void 0,h(()=>String(this.selected.item.value))),new u(`selected`,this.emits,this.selected.item)}},j={},M=class extends l{constructor(e,t,n,r=A){super(e,t,n),E(this,`item`),E(this,`slidesRender`,()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids.value?.[t];e[t]=()=>ee(`div`,{class:this.classes?.value.slide,...v.role(`tabpanel`),...v.labelledby(n)},this.initSlot(t))}return e}}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return this.item.tabsNavigation.ids.value?[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]:this.item.tabsNavigation.render()}}})),P,F=e((()=>{S(),P=C})),I,L=e((()=>{b(),I=x})),R,z=e((()=>{N(),R={...j}})),B=e((()=>{})),V,H=e((()=>{u(),m(),N(),F(),L(),z(),B(),V=s({name:`D1Tabs`,__name:`D1Tabs`,props:i({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},R),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:n}){let i=new M(`d1.tabs`,e,{emits:n,classes:h(()=>({main:{"d1-tabs":!0}})),styles:h(()=>({})),components:{tabsNavigation:P,motionAxis:I}}),a=i.render();return t(i.expose()),(e,t)=>(o(),te(r(a)))}})})),U,de=e((()=>{H(),H(),U=V,V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})),W,G,fe=e((()=>{g(),se(),z(),W=[{name:`modelSelected`,type:`ListSelectedList`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxis>`},{name:`onUpdate:modelSelected`,type:`(value: ListSelectedList) => void`},{name:`onUpdate:selected`,type:`(value: ListSelectedList) => void`},{name:`selected`,type:`string`},{name:`tabItemAttrs`,type:`ConstrBind<TabItem>`},{name:`tabs`,type:`ListRecord<TabItem> | ConstrBind<TabsNavigation>`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigation>`}],G={component:`Tabs`,props:W,defaults:R,wikiDesign:oe}})),K,q=e((()=>{g(),ne(),fe(),K=new re(G.component,G.props,G.defaults,G.wikiDesign,ie,ae)})),pe=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{de(),q(),u(),J={title:`Ui/Tabs`,component:U,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Tabs:U},setup:()=>({args:e}),template:`
      <D1Tabs v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</D1Tabs>
    `})},X={name:`Базовый`,render:()=>({components:{D1Tabs:U},template:`
        <D1Tabs
          :tabs="[
            { label: 'Home', value: 'home' },
            { label: 'Profile', value: 'profile' }
          ]"
          selected="home"
        >
          <template #home>Home</template>
          <template #profile>Profile</template>
        </D1Tabs>
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:U},setup(){return{selected:a(`tab1`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Tab 3</button>
          </div>
          <div>Current value: {{ selected }}</div>

          <D1Tabs
            :tabs="[
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' },
            { label: 'Tab 3', value: 'tab3' }
          ]"
            v-model:selected="selected"
          >
            <template #tab1>Content 1</template>
            <template #tab2>Content 2</template>
            <template #tab3>Content 3</template>
          </D1Tabs>
        </div>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Tabs
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Tabs v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</D1Tabs>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Базовый',
  render: () => ({
    components: {
      D1Tabs
    },
    template: \`
        <D1Tabs
          :tabs="[
            { label: 'Home', value: 'home' },
            { label: 'Profile', value: 'profile' }
          ]"
          selected="home"
        >
          <template #home>Home</template>
          <template #profile>Profile</template>
        </D1Tabs>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'v-model',
  render: () => ({
    components: {
      D1Tabs
    },
    setup() {
      return {
        selected: ref('tab1')
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Tab 3</button>
          </div>
          <div>Current value: {{ selected }}</div>

          <D1Tabs
            :tabs="[
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' },
            { label: 'Tab 3', value: 'tab3' }
          ]"
            v-model:selected="selected"
          >
            <template #tab1>Content 1</template>
            <template #tab2>Content 2</template>
            <template #tab3>Content 3</template>
          </D1Tabs>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Tabs`,`TabsBasic`,`TabsVModel`]}));$();export{Y as Tabs,X as TabsBasic,Z as TabsVModel,Q as __namedExportsOrder,J as default,q as i,$ as n,K as r,pe as t};