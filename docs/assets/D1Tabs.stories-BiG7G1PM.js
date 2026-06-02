import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,Dt as i,Ft as a,Ht as o,L as s,Lt as c,Mt as l,Nt as u,V as d,Xt as f,kt as p,m,qt as h,r as ee}from"./iframe-53vFWNoU.js";import{t as te}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as ne,f as g,l as _,n as v,o as y,p as b,t as x,u as S}from"./wiki-DwIxUKqL.js";import{l as C,u as w}from"./D1Icon-D5nVRATx.js";import{n as re,t as ie}from"./ModelInclude-C9EN9zdy-2u80iyON.js";import{n as T,t as ae}from"./AriaStaticInclude-CS1hPGyK-DN8tdKs-.js";import{a as oe,n as se,o as ce,t as le}from"./D1MotionAxis-D5sRTx_X.js";import{a as ue,n as de,o as fe,t as pe}from"./D1TabsNavigation-ChU8bllS.js";var E,D,O,k,A=t((()=>{ae(),g(),w(),re(),oe(),ue(),i(),m(),E=class{constructor(e,t){b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`item`,h()),b(this,`set`,e=>{this.item.value=e}),b(this,`update`,()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=t,this.item.value=e.selected||s(e.tabs)?.value,c(()=>{o([this.refs.selected],this.update)})}is(e){return d(e,this.item.value)}},D=class{constructor(e,t,n,r,i,a,o,s,c={}){b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`element`,void 0),b(this,`classDesign`,void 0),b(this,`className`,void 0),b(this,`components`,void 0),b(this,`slots`,void 0),b(this,`emits`,void 0),b(this,`event`,void 0),b(this,`motionAxis`,void 0),b(this,`tabsNavigation`,void 0),b(this,`selected`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=C,ModelIncludeConstructor:u=ie,MotionAxisIncludeConstructor:d=ce,TabsNavigationIncludeConstructor:f=fe,TabsSelectedConstructor:p=E}=c;this.selected=new p(e,t),this.event=new l(void 0,void 0,s),new u(`selected`,s,this.selected.item),this.tabsNavigation=new f(this.className,this.props,this.components,()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set})),this.motionAxis=new d(this.className,this.props,this.components,void 0,void 0,s,()=>String(this.selected.item.value))}},O={},k=class extends ee{constructor(e,t,n,r=D){super(e,t,n),b(this,`item`,void 0),b(this,`slidesRender`,()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids?.[t];e[t]=()=>u(`div`,{class:this.classes?.value.slide,...T.role(`tabpanel`),...T.labelledby(n)},this.initSlot(t))}return e}}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]}}})),j,M=t((()=>{de(),j=pe})),N,P=t((()=>{se(),N=le})),F,I=t((()=>{A(),F={...O}})),L=t((()=>{})),R,z=t((()=>{i(),A(),M(),P(),I(),L(),R=l({name:`D1Tabs`,__name:`D1Tabs`,props:a({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:i}){let a=new k(`d1.tabs`,e,{emits:i,classes:p(()=>({main:{"d1-tabs":!0}})),styles:p(()=>({})),components:{tabsNavigation:j,motionAxis:N}}),o=a.render();return t(a.expose()),(e,t)=>(r(),n(f(o)))}})})),B,me=t((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})),V,H,U,W,he=t((()=>{x(),I(),V=[{name:`modelSelected`,type:`ListSelectedList`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxisProps>`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`MotionAxisSelectedValue`},{name:`tabItemAttrs`,type:`ConstrBind<TabItemProps>`},{name:`tabs`,type:`ListRecord<TabItemProps> | ConstrBind<TabsNavigationProps>`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigationProps>`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],W={component:`Tabs`,props:V,slots:H,events:U,defaults:F,wikiDesign:v}})),G,K=t((()=>{ne(),y(),he(),G=new S(W.component,W.props,W.defaults,W.wikiDesign,_,te)})),q=e({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{me(),K(),i(),J={title:`Ui/Tabs`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1Tabs:B},setup:()=>({args:e}),template:`
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
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:B},setup(){return{selected:h(`tab1`)}},template:`
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