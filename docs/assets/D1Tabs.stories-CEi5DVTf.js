import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,St as r,Vt as i,_t as a,bt as o,c as s,d as c,h as l,jt as u,kt as d,l as f,tt as p,u as m,wt as ee,xt as te,yt as h}from"./iframe-I1fckF_t.js";import{a as ne,d as re,f as g,g as _,l as v,n as ie,p as y,t as ae,u as b}from"./wiki-CMC-2lzg.js";import{c as x,s as S}from"./D1Icon-D2SFCuR1.js";import{n as oe,t as se}from"./ModelInclude-ZrPu5V5T-B6iKFtQt.js";import{n as C,t as ce}from"./AriaStaticInclude-CS1hPGyK-DD0L8gdx.js";import{n as le,t as ue}from"./D1MotionAxis-B6XL5Sw3.js";import{n as w,t as T}from"./D1TabsNavigation-CJVN1dtL.js";var E,D,O,k,A,j,M=e((()=>{ce(),g(),x(),se(),a(),m(),E=class{constructor(e,t,r,i,a,o,s){y(this,`element`,n()),y(this,`selectedItem`,h(()=>this.selected?f(this.selected):this.props.selected)),y(this,`binds`,h(()=>l(f(this.extra),{class:`${this.className}__motionAxis`},this.props.motionAxisAttrs))),y(this,`render`,(e,t)=>this.components?this.components.render(`motionAxis`,{...l(t,this.binds.value,{selected:this.selectedItem.value}),ref:this.element,onMotionAxis:this.onMotionAxis},e,this.index):[]),y(this,`onMotionAxis`,e=>{var t;(t=this.emits)==null||t.call(this,`motionAxis`,e)}),this.props=e,this.className=t,this.components=r,this.emits=i,this.extra=a,this.selected=o,this.index=s}},D=class{constructor(e,t,r,i,a){y(this,`element`,n()),y(this,`binds`,h(()=>l(f(this.extra),{class:`${this.className}__tabsNavigation`,itemAttrs:this.props.tabItemAttrs},s(this.props.tabs,`list`),this.props.tabsNavigationAttrs))),y(this,`ids`,h(()=>this.element.value?.ids)),y(this,`render`,(e,t)=>this.components?this.components.render(`tabsNavigation`,l(t,this.binds.value,{ref:this.element}),e,this.index):[]),this.props=e,this.className=t,this.components=r,this.extra=i,this.index=a}},O=class{constructor(e,t){y(this,`item`,n()),y(this,`set`,e=>{this.item.value=e}),y(this,`update`,()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=t,this.item.value=e.selected,u([this.refs.selected],this.update)}is(e){return p(e,this.item.value)}},k=class{constructor(e,t,n,r,i,a,o,s,c){y(this,`event`,void 0),y(this,`motionAxis`,void 0),y(this,`tabsNavigation`,void 0),y(this,`selected`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=S,ModelIncludeConstructor:u=oe,MotionAxisIncludeConstructor:d=E,TabsNavigationIncludeConstructor:f=D,TabsSelectedConstructor:p=O}=c??{};this.selected=new p(this.props,this.refs),this.event=new l(void 0,void 0,this.emits),this.tabsNavigation=new f(this.props,this.className,this.components,h(()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set}))),this.motionAxis=new d(this.props,this.className,this.components,this.emits,void 0,h(()=>String(this.selected.item.value))),new u(`selected`,this.emits,this.selected.item)}},A={},j=class extends c{constructor(e,t,n,i=k){super(e,t,n),y(this,`item`,void 0),y(this,`slidesRender`,()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids.value?.[t];e[t]=()=>r(`div`,{class:this.classes?.value.slide,...C.role(`tabpanel`),...C.labelledby(n)},this.initSlot(t))}return e}}),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return this.item.tabsNavigation.ids.value?[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]:this.item.tabsNavigation.render()}}})),N,de=e((()=>{w(),N=T})),P,F=e((()=>{le(),P=ue})),I,L=e((()=>{M(),I={...A}})),R=e((()=>{})),z,B=e((()=>{a(),m(),M(),de(),F(),L(),R(),z=te({name:`D1Tabs`,__name:`D1Tabs`,props:ee({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},I),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:n}){let r=new j(`d1.tabs`,e,{emits:n,classes:h(()=>({main:{"d1-tabs":!0}})),styles:h(()=>({})),components:{tabsNavigation:N,motionAxis:P}}),a=r.render();return t(r.expose()),(e,t)=>(d(),o(i(a)))}})})),V,fe=e((()=>{B(),B(),V=z,z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})),H,U,W,G,pe=e((()=>{b(),ae(),L(),H=[{name:`modelSelected`,type:`ListSelectedList`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxis>`},{name:`onUpdate:modelSelected`,type:`(value: ListSelectedList) => void`},{name:`onUpdate:selected`,type:`(value: ListSelectedList) => void`},{name:`selected`,type:`string`},{name:`tabItemAttrs`,type:`ConstrBind<TabItem>`},{name:`tabs`,type:`ListRecord<TabItem> | ConstrBind<TabsNavigation>`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigation>`}],U=[],W=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],G={component:`Tabs`,props:H,slots:U,events:W,defaults:I,wikiDesign:ie}})),K,q=e((()=>{b(),ne(),pe(),K=new re(G.component,G.props,G.defaults,G.wikiDesign,v,_)})),me=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{fe(),q(),a(),J={title:`Ui/Tabs`,component:V,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Tabs:V},setup:()=>({args:e}),template:`
      <D1Tabs v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</D1Tabs>
    `})},X={name:`Базовый`,render:()=>({components:{D1Tabs:V},template:`
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
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:V},setup(){return{selected:n(`tab1`)}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Tabs`,`TabsBasic`,`TabsVModel`]}));$();export{Y as Tabs,X as TabsBasic,Z as TabsVModel,Q as __namedExportsOrder,J as default,q as i,$ as n,K as r,me as t};