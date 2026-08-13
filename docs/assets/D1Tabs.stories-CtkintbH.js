import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,C as r,Et as i,Ht as a,Kt as o,Lt as s,Mt as c,Nt as l,bt as u,in as d,jt as f,tn as p,zt as ee}from"./library-CUIf7uCS.js";import{O as m,S as h,d as g,k as te,l as ne,m as re,n as ie,p as _,r as ae,t as oe,u as se,y as ce}from"./wiki-wIqBVsyI.js";import{n as v,t as le}from"./EventClickInclude-CZ1iA_Fp-BOBjazBg.js";import{n as ue,t as de}from"./ModelInclude-D7Nt6tKY-Dvax6Hhk.js";import{n as y,t as b}from"./ComponentIncludeAbstract-CH6F0Rvb-UISzxO4W.js";import{n as x,t as fe}from"./AriaStaticInclude-CI16qWQ7-QE8vrVOk.js";import{n as pe,t as me}from"./D1MotionAxis-CwsfMU8Z.js";import{n as he,t as ge}from"./D1TabsNavigation-Ct3oIMaH.js";var S;function C(){return(C=e((()=>{b(),m(),S=class extends y{constructor(e,t,n,r,i,a,o){super(e,t,n,r,i),_(this,`emits`,void 0),_(this,`selected`,void 0),_(this,`name`,`motionAxis`),_(this,`propsAttrsName`,`motionAxisAttrs`),_(this,`onMotionAxis`,e=>{var t;(t=this.emits)==null||t.call(this,`motionAxis`,e)}),this.emits=a,this.selected=o}get selectedItem(){return this.selected?ce(this.selected):this.getProps().selected}getAttrs(e){return{...super.getAttrs(e),selected:this.selectedItem}}toBinds(){return{...super.toBinds(),onMotionAxis:this.onMotionAxis}}}})))()}var w;function T(){return(T=e((()=>{b(),m(),w=class extends y{constructor(...e){super(...e),_(this,`name`,`tabsNavigation`),_(this,`propsAttrsName`,`tabsNavigationAttrs`)}get ids(){return this.element.value?.ids()??{}}getExtra(){return h(this.getProps().tabs,super.getExtra(),`list`)}toBinds(){return{...super.toBinds(),itemAttrs:this.getProps().tabItemAttrs}}}})))()}var E,D,O,k;function A(){return(A=e((()=>{fe(),v(),ue(),C(),T(),i(),m(),E=class{constructor(e,t){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`item`,p()),_(this,`set`,e=>{this.item.value=e}),_(this,`update`,()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=t,this.item.value=e.selected||r(e.tabs)?.value,ee(()=>{o([this.refs.selected],this.update)})}is(e){return u(e,this.item.value)}},D=class{constructor(e,t,n,r,i,a,o,s,c={}){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),_(this,`event`,void 0),_(this,`motionAxis`,void 0),_(this,`tabsNavigation`,void 0),_(this,`selected`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=le,ModelIncludeConstructor:u=de,MotionAxisIncludeConstructor:d=S,TabsNavigationIncludeConstructor:f=w,TabsSelectedConstructor:p=E}=c;this.selected=new p(e,t),this.event=new l(void 0,void 0,s),new u(`selected`,s,this.selected.item),this.tabsNavigation=new f(this.className,this.props,this.components,()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set})),this.motionAxis=new d(this.className,this.props,this.components,void 0,void 0,s,()=>String(this.selected.item.value))}},O={},k=class extends te{constructor(e,t,n,r=D){super(e,t,n),_(this,`item`,void 0),_(this,`slidesRender`,()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids?.[t];e[t]=()=>l(`div`,{class:this.classes?.value.slide,...x.role(`tabpanel`),...x.labelledby(n)},this.initSlot(t))}return e}}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]}}})))()}var j;function M(){return(M=e((()=>{he(),j=ge})))()}var N;function P(){return(P=e((()=>{pe(),N=me})))()}var F;function I(){return(I=e((()=>{A(),F={...O}})))()}var L;function R(){return(R=e((()=>{i(),A(),M(),P(),I(),L=c({name:`D1Tabs`,__name:`D1Tabs`,props:s({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:r}){let i=r,o=e,s=n(()=>({main:{"d1-tabs":!0}})),c=n(()=>({})),l=new k(`d1.tabs`,o,{emits:i,classes:s,styles:c,components:{tabsNavigation:j,motionAxis:N}}),u=l.render();return t(l.expose()),(e,t)=>(a(),f(d(u)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{oe(),I(),V=[{name:`modelSelected`,type:`ListSelectedList`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxisProps>`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`MotionAxisSelectedValue`},{name:`tabItemAttrs`,type:`ConstrBind<TabItemProps>`},{name:`tabs`,type:`ListRecord<TabItemProps> | ConstrBind<TabsNavigationProps>`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigationProps>`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],W={component:`Tabs`,props:V,slots:H,events:U,defaults:F,wikiDesign:ie}})))()}var K;function q(){return(q=e((()=>{g(),ne(),G(),K=new se(W.component,W.props,W.defaults,W.wikiDesign,ae,re)})))()}var _e=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),i(),J={title:`Ui/Tabs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Tabs:z},setup:()=>({args:e}),template:`
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
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:z},setup(){return{selected:p(`tab1`)}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Tabs`,`TabsBasic`,`TabsVModel`]})))()}export{$ as a,Z as i,Y as n,K as o,X as r,q as s,_e as t};