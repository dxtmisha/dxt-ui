import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Et as r,Ft as i,Ht as a,Kt as o,Nt as s,Ot as c,Tt as l,f as u,gt as d,t as f,wt as p,xt as m}from"./iframe-yo6yIkeP.js";import{a as ee,d as te,f as ne,m as re,n as ie,o as h,p as g,t as _,u as ae}from"./wiki-Ck-JDNL8.js";import{c as oe,s as se}from"./D1Icon-Bmj9etR0.js";import{n as ce,t as le}from"./ModelInclude-B9usSTAS-DomJOYOv.js";import{n as v,t as y}from"./AriaStaticInclude-CS1hPGyK-B_wnUV8r.js";import{a as b,n as x,o as S,t as C}from"./D1MotionAxis--Qzx7MIP.js";import{a as w,n as ue,o as de,t as fe}from"./D1TabsNavigation-7OBz_2Nr.js";var T,E,D,O,k=e((()=>{y(),ne(),oe(),le(),S(),w(),m(),u(),T=class{constructor(e,t){g(this,`item`,a()),g(this,`set`,e=>{this.item.value=e}),g(this,`update`,()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=t,this.item.value=e.selected,i([this.refs.selected],this.update)}is(e){return d(e,this.item.value)}},E=class{constructor(e,t,r,i,a,o,s,c,l){g(this,`event`,void 0),g(this,`motionAxis`,void 0),g(this,`tabsNavigation`,void 0),g(this,`selected`,void 0),this.props=e,this.refs=t,this.element=r,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{EventClickIncludeConstructor:u=se,ModelIncludeConstructor:d=ce,MotionAxisIncludeConstructor:f=b,TabsNavigationIncludeConstructor:p=de,TabsSelectedConstructor:m=T}=l??{};this.selected=new m(this.props,this.refs),this.event=new u(void 0,void 0,this.emits),this.tabsNavigation=new p(this.props,this.className,this.components,n(()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set}))),this.motionAxis=new f(this.props,this.className,this.components,this.emits,void 0,n(()=>String(this.selected.item.value))),new d(`selected`,this.emits,this.selected.item)}},D={},O=class extends f{constructor(e,t,n,i=E){super(e,t,n),g(this,`item`,void 0),g(this,`slidesRender`,()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids.value?.[t];e[t]=()=>r(`div`,{class:this.classes?.value.slide,...v.role(`tabpanel`),...v.labelledby(n)},this.initSlot(t))}return e}}),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return this.item.tabsNavigation.ids.value?[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]:this.item.tabsNavigation.render()}}})),A,j=e((()=>{ue(),A=fe})),M,N=e((()=>{x(),M=C})),P,F=e((()=>{k(),P={...D}})),I=e((()=>{})),L,R=e((()=>{m(),k(),j(),N(),F(),I(),L=l({name:`D1Tabs`,__name:`D1Tabs`,props:c({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},P),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:r}){let i=new O(`d1.tabs`,e,{emits:r,classes:n(()=>({main:{"d1-tabs":!0}})),styles:n(()=>({})),components:{tabsNavigation:A,motionAxis:M}}),a=i.render();return t(i.expose()),(e,t)=>(s(),p(o(a)))}})})),z,B=e((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})),V,H,U,W,pe=e((()=>{_(),F(),V=[{name:`modelSelected`,type:`ListSelectedList | undefined`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxisProps> | undefined`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void) | undefined`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void) | undefined`},{name:`selected`,type:`MotionAxisSelectedValue`},{name:`tabItemAttrs`,type:`ConstrBind<TabItemProps> | undefined`},{name:`tabs`,type:`ListRecord<TabItemProps> | ConstrBind<TabsNavigationProps> | undefined`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigationProps> | undefined`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],W={component:`Tabs`,props:V,slots:H,events:U,defaults:P,wikiDesign:ie}})),G,K=e((()=>{te(),h(),pe(),G=new ae(W.component,W.props,W.defaults,W.wikiDesign,ee,re)})),q=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{B(),K(),m(),J={title:`Ui/Tabs`,component:z,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1Tabs:z},setup:()=>({args:e}),template:`
      <D1Tabs v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</D1Tabs>
    `})},X={name:`Базовый`,render:()=>({components:{D1Tabs:z},template:`
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
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:z},setup(){return{selected:a(`tab1`)}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Tabs`,`TabsBasic`,`TabsVModel`]}));$();export{Y as Tabs,X as TabsBasic,Z as TabsVModel,Q as __namedExportsOrder,J as default,K as i,$ as n,G as r,q as t};