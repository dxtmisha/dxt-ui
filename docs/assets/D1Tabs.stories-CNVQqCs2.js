import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{P as n,a as r,b as i,c as a,d as o,g as s,i as c,k as l,s as u,t as d}from"./vue.esm-bundler-KrdxwWaE.js";import{f,gt as p,t as m}from"./iframe-UEhCQgdF.js";import{t as ee}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as te,d as ne,f as re,n as ie,o as ae,p as h,t as g,u as _}from"./wiki-YLJtDFp2.js";import{l as oe,u as se}from"./D1Icon-CzMiB96A.js";import{n as ce,t as le}from"./ModelInclude-pmMKdRM8-tFNPlRrR.js";import{n as v,t as y}from"./AriaStaticInclude-CS1hPGyK-lIJjWVl9.js";import{a as b,n as x,o as S,t as C}from"./D1MotionAxis-C8TbLNzO.js";import{a as w,n as T,o as ue,t as de}from"./D1TabsNavigation-DYuVvOFx.js";var E,D,O,k,A=e((()=>{y(),re(),se(),le(),S(),w(),d(),f(),E=class{constructor(e,t){h(this,`item`,l()),h(this,`set`,e=>{this.item.value=e}),h(this,`update`,()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=t,this.item.value=e.selected,i([this.refs.selected],this.update)}is(e){return p(e,this.item.value)}},D=class{constructor(e,t,n,r,i,a,o,s,l){h(this,`event`,void 0),h(this,`motionAxis`,void 0),h(this,`tabsNavigation`,void 0),h(this,`selected`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:u=oe,ModelIncludeConstructor:d=ce,MotionAxisIncludeConstructor:f=b,TabsNavigationIncludeConstructor:p=ue,TabsSelectedConstructor:m=E}=l??{};this.selected=new m(this.props,this.refs),this.event=new u(void 0,void 0,this.emits),this.tabsNavigation=new p(this.props,this.className,this.components,c(()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set}))),this.motionAxis=new f(this.props,this.className,this.components,this.emits,void 0,c(()=>String(this.selected.item.value))),new d(`selected`,this.emits,this.selected.item)}},O={},k=class extends m{constructor(e,t,n,r=D){super(e,t,n),h(this,`item`,void 0),h(this,`slidesRender`,()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids.value?.[t];e[t]=()=>a(`div`,{class:this.classes?.value.slide,...v.role(`tabpanel`),...v.labelledby(n)},this.initSlot(t))}return e}}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return this.item.tabsNavigation.ids.value?[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]:this.item.tabsNavigation.render()}}})),j,M=e((()=>{T(),j=de})),N,P=e((()=>{x(),N=C})),F,I=e((()=>{A(),F={...O}})),L=e((()=>{})),R,z=e((()=>{d(),A(),M(),P(),I(),L(),R=u({name:`D1Tabs`,__name:`D1Tabs`,props:o({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:i}){let a=new k(`d1.tabs`,e,{emits:i,classes:c(()=>({main:{"d1-tabs":!0}})),styles:c(()=>({})),components:{tabsNavigation:j,motionAxis:N}}),o=a.render();return t(a.expose()),(e,t)=>(s(),r(n(o)))}})})),B,V=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})),H,U,W,G,fe=e((()=>{g(),I(),H=[{name:`modelSelected`,type:`ListSelectedList | undefined`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxisProps> | undefined`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void) | undefined`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void) | undefined`},{name:`selected`,type:`MotionAxisSelectedValue`},{name:`tabItemAttrs`,type:`ConstrBind<TabItemProps> | undefined`},{name:`tabs`,type:`ListRecord<TabItemProps> | ConstrBind<TabsNavigationProps> | undefined`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigationProps> | undefined`}],U=[],W=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],G={component:`Tabs`,props:H,slots:U,events:W,defaults:F,wikiDesign:ie}})),K,q=e((()=>{ne(),ae(),fe(),K=new _(G.component,G.props,G.defaults,G.wikiDesign,te,ee)})),pe=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{V(),q(),d(),J={title:`Ui/Tabs`,component:B,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Tabs:B},setup:()=>({args:e}),template:`
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
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:B},setup(){return{selected:l(`tab1`)}},template:`
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