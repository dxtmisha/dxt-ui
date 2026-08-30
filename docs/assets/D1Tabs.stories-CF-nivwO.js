import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,F as i,Ft as a,Gt as o,Ht as s,It as c,Nt as l,Ot as u,Pt as d,Y as f,Yt as p,in as m,kt as h,sn as ee}from"./library-CO1fW2cN.js";import{E as g,O as te,S as ne,d as re,f as ie,i as ae,l as oe,n as se,t as ce,u as le,w as _}from"./wiki-BMj2WokS.js";import{n as ue,t as de}from"./EventClickInclude-BgNX8brc-Ca5_keyg.js";import{n as v,t as fe}from"./ModelInclude-BQRqVrGp-Cc9lyfN2.js";import{n as y,t as b}from"./ComponentIncludeAbstract-DTK8bDBQ-BdHKAxjK.js";import{n as x,t as pe}from"./AriaStaticInclude-DoPfNULn-CgdAxtFN.js";import{n as me,t as he}from"./D1MotionAxis-B3vzoT1D.js";import{n as ge,t as _e}from"./D1TabsNavigation-BDeksF3J.js";var S;function C(){return(C=e((()=>{b(),g(),u(),S=class extends y{constructor(e,t,n,i,a,o,s){super(e,t,n,i,a),r(this,`emits`,void 0),r(this,`selected`,void 0),r(this,`name`,`motionAxis`),r(this,`propsAttrsName`,`motionAxisAttrs`),r(this,`onMotionAxis`,e=>{var t;(t=this.emits)==null||t.call(this,`motionAxis`,e)}),this.emits=o,this.selected=s}get selectedItem(){return this.selected?ne(this.selected):this.getProps().selected}getAttrs(e){return{...super.getAttrs(e),selected:this.selectedItem}}toBinds(){return{...super.toBinds(),onMotionAxis:this.onMotionAxis}}}})))()}var w;function T(){return(T=e((()=>{b(),g(),u(),w=class extends y{constructor(...e){super(...e),r(this,`name`,`tabsNavigation`),r(this,`propsAttrsName`,`tabsNavigationAttrs`)}get ids(){return this.element.value?.ids()??{}}getExtra(){return _(this.getProps().tabs,super.getExtra(),`list`)}toBinds(){return{...super.toBinds(),itemAttrs:this.getProps().tabItemAttrs}}}})))()}var E,D,O,k;function A(){return(A=e((()=>{pe(),ue(),v(),C(),T(),h(),g(),u(),E=class{constructor(e,t){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`item`,m()),r(this,`set`,e=>{this.item.value=e}),r(this,`update`,()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=t,this.item.value=e.selected||f(e.tabs)?.value,s(()=>{p([this.refs.selected],this.update)})}is(e){return i(e,this.item.value)}},D=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`event`,void 0),r(this,`motionAxis`,void 0),r(this,`tabsNavigation`,void 0),r(this,`selected`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{EventClickIncludeConstructor:u=de,ModelIncludeConstructor:d=fe,MotionAxisIncludeConstructor:f=S,TabsNavigationIncludeConstructor:p=w,TabsSelectedConstructor:m=E}=l;this.selected=new m(e,t),this.event=new u(void 0,void 0,c),new d(`selected`,c,this.selected.item),this.tabsNavigation=new p(this.className,this.props,this.components,()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set})),this.motionAxis=new f(this.className,this.props,this.components,void 0,void 0,c,()=>String(this.selected.item.value))}},O={},k=class extends te{constructor(e,t,n,i=D){super(e,t,n),r(this,`item`,void 0),r(this,`slidesRender`,()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids?.[t];e[t]=()=>c(`div`,{class:this.classes?.value.slide,...x.role(`tabpanel`),...x.labelledby(n)},this.initSlot(t))}return e}}),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]}}})))()}var j;function M(){return(M=e((()=>{ge(),j=_e})))()}var N;function P(){return(P=e((()=>{me(),N=he})))()}var F;function I(){return(I=e((()=>{A(),F={...O}})))()}var L;function R(){return(R=e((()=>{h(),A(),M(),P(),I(),L=a({name:`D1Tabs`,__name:`D1Tabs`,props:n({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:n}){let r=n,i=e,a=l(()=>({main:{"d1-tabs":!0}})),s=l(()=>({})),c=new k(`d1.tabs`,i,{emits:r,classes:a,styles:s,components:{tabsNavigation:j,motionAxis:N}}),u=c.render();return t(c.expose()),(e,t)=>(o(),d(ee(u)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{ce(),I(),V=[{name:`modelSelected`,type:`ListSelectedList`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxisProps>`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`MotionAxisSelectedValue`},{name:`tabItemAttrs`,type:`ConstrBind<TabItemProps>`},{name:`tabs`,type:`ListRecord<TabItemProps> | ConstrBind<TabsNavigationProps>`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigationProps>`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],W={component:`Tabs`,props:V,slots:H,events:U,defaults:F,wikiDesign:se}})))()}var K;function q(){return(q=e((()=>{re(),oe(),G(),K=new le(W.component,W.props,W.defaults,W.wikiDesign,ae,ie)})))()}var ve=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),h(),J={title:`Ui/Tabs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Tabs:z},setup:()=>({args:e}),template:`
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
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:z},setup(){return{selected:m(`tab1`)}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Tabs`,`TabsBasic`,`TabsVModel`]})))()}export{$ as a,Z as i,Y as n,K as o,X as r,q as s,ve as t};