import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$t as n,At as r,Ft as i,Ht as a,It as o,Jt as s,Pt as c,Rt as l,et as u,mn as d,un as f,xt as p}from"./library-ByXZ2YPj.js";import{T as ee,_ as m,a as h,d as te,f as ne,k as g,n as re,p as ie,s as ae,t as oe,x as se}from"./wiki-CfN0XtvQ.js";import{n as ce,t as _}from"./EventClickInclude-BePe4mYM-K44ha_OT.js";import{n as le,t as ue}from"./ModelInclude-CSCLC3Le-Dak8eD0T.js";import{n as v,t as y}from"./ComponentIncludeAbstract-CwPk6byu-B8vlefjC.js";import{n as b,t as de}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as fe,t as pe}from"./D1MotionAxis-CSArK5_a.js";import{n as x,t as me}from"./D1TabsNavigation-BNYvKN4o.js";var S;function C(){return(C=e((()=>{y(),g(),S=class extends v{emits;selected;name=`motionAxis`;propsAttrsName=`motionAxisAttrs`;constructor(e,t,n,r,i,a,o){super(e,t,n,r,i),this.emits=a,this.selected=o}get selectedItem(){return this.selected?se(this.selected):this.getProps().selected}getAttrs(e){return{...super.getAttrs(e),selected:this.selectedItem}}toBinds(){return{...super.toBinds(),onMotionAxis:this.onMotionAxis}}onMotionAxis=e=>{this.emits?.(`motionAxis`,e)}}})))()}var w;function T(){return(T=e((()=>{y(),g(),w=class extends v{name=`tabsNavigation`;propsAttrsName=`tabsNavigationAttrs`;get ids(){return this.element.value?.ids()??{}}getExtra(){return ee(this.getProps().tabs,super.getExtra(),`list`)}toBinds(){return{...super.toBinds(),itemAttrs:this.getProps().tabItemAttrs}}}})))()}var E,D,O,k;function A(){return(A=e((()=>{de(),_(),ue(),C(),T(),r(),g(),E=class{props;item=f();constructor(e){this.props=e,this.item.value=e.selected||u(e.tabs)?.value,n(()=>this.props.selected,this.update)}is(e){return p(e,this.item.value)}set=e=>{this.item.value=e};update=()=>{this.is(this.props.selected)||this.set(this.props.selected)}},D=class{props;element;naming;components;slots;emits;event;motionAxis;tabsNavigation;selected;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{EventClickIncludeConstructor:s=ce,ModelIncludeConstructor:c=le,MotionAxisIncludeConstructor:l=S,TabsNavigationIncludeConstructor:u=w,TabsSelectedConstructor:d=E}=o;this.selected=new d(e),this.event=new s(void 0,void 0,a),new c(`selected`,a,this.selected.item),this.tabsNavigation=new u(this.naming,this.props,this.components,()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set})),this.motionAxis=new l(this.naming,this.props,this.components,void 0,void 0,a,()=>String(this.selected.item.value))}},O={},k=class extends m{item;constructor(e,t,n,r=D){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:{},slide:this.naming.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]}slidesRender=()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids?.[t];e[t]=()=>l(`div`,{class:this.classes?.value.slide,...b.role(`tabpanel`),...b.labelledby(n)},this.initSlot(t))}return e}}}})))()}var j;function M(){return(M=e((()=>{x(),j=me})))()}var N;function P(){return(P=e((()=>{fe(),N=pe})))()}var F;function I(){return(I=e((()=>{A(),F={...O}})))()}var L;function R(){return(R=e((()=>{r(),A(),M(),P(),I(),L=o({name:`D1Tabs`,__name:`D1Tabs`,props:a({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:n}){let r=n,a=e,o=c(()=>({main:{"d1-tabs":!0}})),l=c(()=>({})),u=new k(`d1.tabs`,a,{emits:r,classes:o,styles:l,components:{tabsNavigation:j,motionAxis:N}}),f=u.render();return t(u.expose()),(e,t)=>(s(),i(d(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{oe(),I(),V=[{name:`modelSelected`,type:`ListSelectedList`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxisProps>`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`MotionAxisSelectedValue`},{name:`tabItemAttrs`,type:`ConstrBind<TabItemProps>`},{name:`tabs`,type:`ListRecord<TabItemProps> | ConstrBind<TabsNavigationProps>`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigationProps>`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],W={component:`Tabs`,props:V,slots:H,events:U,defaults:F,wikiDesign:re}})))()}var K;function q(){return(q=e((()=>{ne(),ae(),G(),K=new te(W.component,W.props,W.defaults,W.wikiDesign,h,ie)})))()}var he=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),r(),J={title:`Ui/Tabs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Tabs:z},setup:()=>({args:e}),template:`
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
    `})},Z={name:`v-model`,render:()=>({components:{D1Tabs:z},setup(){return{selected:f(`tab1`)}},template:`
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
    `})},Q=[`Tabs`,`TabsBasic`,`TabsVModel`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,C as c,Z as i,Y as n,K as o,X as r,q as s,he as t};