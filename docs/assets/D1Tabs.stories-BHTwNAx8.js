import{n as e,r as t}from"./chunk-BneVvdWh.js";import{H as n,Ht as r,Rt as i,St as a,_t as o,bt as s,f as c,jt as l,kt as u,m as d,wt as f,xt as p,yt as m}from"./iframe-DHvUfpTv.js";import{a as ee,d as te,f as ne,g as re,l as ie,n as h,p as g,t as ae,u as _}from"./wiki-COBgMBNI.js";import{c as oe,s as se}from"./D1Icon-CBp6FETd.js";import{n as ce,t as le}from"./ModelInclude-D8LkrhPp-D2CCvSDy.js";import{n as v,t as y}from"./AriaStaticInclude-CS1hPGyK-WhXq7-dT.js";import{a as b,n as x,o as S,t as C}from"./D1MotionAxis-B3lakxXW.js";import{a as w,n as T,o as ue,t as de}from"./D1TabsNavigation-r1hPgk1E.js";var E,D,O,k,A=e((()=>{y(),ne(),oe(),le(),S(),w(),o(),c(),E=class{constructor(e,t){g(this,`item`,i()),g(this,`set`,e=>{this.item.value=e}),g(this,`update`,()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=t,this.item.value=e.selected,l([this.refs.selected],this.update)}is(e){return n(e,this.item.value)}},D=class{constructor(e,t,n,r,i,a,o,s,c){g(this,`event`,void 0),g(this,`motionAxis`,void 0),g(this,`tabsNavigation`,void 0),g(this,`selected`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=se,ModelIncludeConstructor:u=ce,MotionAxisIncludeConstructor:d=b,TabsNavigationIncludeConstructor:f=ue,TabsSelectedConstructor:p=E}=c??{};this.selected=new p(this.props,this.refs),this.event=new l(void 0,void 0,this.emits),this.tabsNavigation=new f(this.props,this.className,this.components,m(()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set}))),this.motionAxis=new d(this.props,this.className,this.components,this.emits,void 0,m(()=>String(this.selected.item.value))),new u(`selected`,this.emits,this.selected.item)}},O={},k=class extends d{constructor(e,t,n,r=D){super(e,t,n),g(this,`item`,void 0),g(this,`slidesRender`,()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids.value?.[t];e[t]=()=>a(`div`,{class:this.classes?.value.slide,...v.role(`tabpanel`),...v.labelledby(n)},this.initSlot(t))}return e}}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return this.item.tabsNavigation.ids.value?[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]:this.item.tabsNavigation.render()}}})),j,M=e((()=>{T(),j=de})),N,P=e((()=>{x(),N=C})),F,I=e((()=>{A(),F={...O}})),L=e((()=>{})),R,z=e((()=>{o(),A(),M(),P(),I(),L(),R=p({name:`D1Tabs`,__name:`D1Tabs`,props:f({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:n}){let i=new k(`d1.tabs`,e,{emits:n,classes:m(()=>({main:{"d1-tabs":!0}})),styles:m(()=>({})),components:{tabsNavigation:j,motionAxis:N}}),a=i.render();return t(i.expose()),(e,t)=>(u(),s(r(a)))}})})),B,V=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})),H,U,W,G,fe=e((()=>{_(),ae(),I(),H=[{name:`modelSelected`,type:`ListSelectedList`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxisPropsBasic>`},{name:`onUpdate:modelSelected`,type:`(value: ListSelectedList) => void`},{name:`onUpdate:selected`,type:`(value: ListSelectedList) => void`},{name:`selected`,type:`string`},{name:`tabItemAttrs`,type:`ConstrBind<TabItemPropsBasic>`},{name:`tabs`,type:`ListRecord<TabItemPropsBasic> | ConstrBind<TabsNavigationPropsBasic>`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigationPropsBasic>`}],U=[],W=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],G={component:`Tabs`,props:H,slots:U,events:W,defaults:F,wikiDesign:h}})),K,q=e((()=>{_(),ee(),fe(),K=new te(G.component,G.props,G.defaults,G.wikiDesign,ie,re)})),pe=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{V(),q(),o(),J={title:`Ui/Tabs`,component:B,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Tabs:B},setup:()=>({args:e}),template:`
      <D1Tabs v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</D1Tabs>
    `})},X={name:`Базовый`,render:()=>({components:{D1Tabs:B},template:`
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
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:B},setup(){return{selected:i(`tab1`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Tab 3</button>
          </div>

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
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Tab 3</button>
          </div>

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