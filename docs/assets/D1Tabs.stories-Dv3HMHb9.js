import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,a as c,in as l,j as u,jt as d,qt as f,tn as p}from"./library-C6UyfMBX.js";import{D as m,d as ee,f as te,g as ne,h,i as re,k as ie,n as ae,s as oe,t as g,u as se}from"./wiki-Cqdd-d3l.js";import{n as ce,t as le}from"./EventClickInclude-BePe4mYM-CJXSyzTR.js";import{n as ue,t as _}from"./ModelInclude-CSCLC3Le-BPdhkRTk.js";import{n as v,t as y}from"./ComponentIncludeAbstract-BSJ_gXSk-01afegtM.js";import{n as b,t as de}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as fe,t as x}from"./D1MotionAxis-CyPuWNZe.js";import{n as pe,t as me}from"./D1TabsNavigation-_mkw4IZM.js";var S;function C(){return(C=e((()=>{y(),m(),S=class extends v{emits;selected;name=`motionAxis`;propsAttrsName=`motionAxisAttrs`;constructor(e,t,n,r,i,a,o){super(e,t,n,r,i),this.emits=a,this.selected=o}get selectedItem(){return this.selected?h(this.selected):this.getProps().selected}getAttrs(e){return{...super.getAttrs(e),selected:this.selectedItem}}toBinds(){return{...super.toBinds(),onMotionAxis:this.onMotionAxis}}onMotionAxis=e=>{this.emits?.(`motionAxis`,e)}}})))()}var w;function T(){return(T=e((()=>{y(),m(),w=class extends v{name=`tabsNavigation`;propsAttrsName=`tabsNavigationAttrs`;get ids(){return this.element.value?.ids()??{}}getExtra(){return ie(this.getProps().tabs,super.getExtra(),`list`)}toBinds(){return{...super.toBinds(),itemAttrs:this.getProps().tabItemAttrs}}}})))()}var E,D,O,k;function A(){return(A=e((()=>{de(),le(),_(),C(),T(),n(),m(),E=class{props;refs;item=p();constructor(e,t){this.props=e,this.refs=t,this.item.value=e.selected||c(e.tabs)?.value,f([this.refs.selected],this.update)}is(e){return u(e,this.item.value)}set=e=>{this.item.value=e};update=()=>{this.is(this.props.selected)||this.set(this.props.selected)}},D=class{props;refs;element;classDesign;className;components;slots;emits;event;motionAxis;tabsNavigation;selected;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=ce,ModelIncludeConstructor:u=ue,MotionAxisIncludeConstructor:d=S,TabsNavigationIncludeConstructor:f=w,TabsSelectedConstructor:p=E}=c;this.selected=new p(e,t),this.event=new l(void 0,void 0,s),new u(`selected`,s,this.selected.item),this.tabsNavigation=new f(this.className,this.props,this.components,()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set})),this.motionAxis=new d(this.className,this.props,this.components,void 0,void 0,s,()=>String(this.selected.item.value))}},O={},k=class extends ne{item;constructor(e,t,n,r=D){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:{},slide:this.getSubClass(`slide`)}}initStyles(){return{}}initRender(){return[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]}slidesRender=()=>{if(this.slots){let e={};for(let t in this.slots){let n=this.item.tabsNavigation.ids?.[t];e[t]=()=>a(`div`,{class:this.classes?.value.slide,...b.role(`tabpanel`),...b.labelledby(n)},this.initSlot(t))}return e}}}})))()}var j;function M(){return(M=e((()=>{pe(),j=me})))()}var N;function P(){return(P=e((()=>{fe(),N=x})))()}var F;function I(){return(I=e((()=>{A(),F={...O}})))()}var L;function R(){return(R=e((()=>{n(),A(),M(),P(),I(),L=i({name:`D1Tabs`,__name:`D1Tabs`,props:o({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},F),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`,`motionAxis`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=d(()=>({main:{"d1-tabs":!0}})),c=d(()=>({})),u=new k(`d1.tabs`,a,{emits:i,classes:o,styles:c,components:{tabsNavigation:j,motionAxis:N}}),f=u.render();return t(u.expose()),(e,t)=>(s(),r(l(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Tabs`,exportName:`default`,displayName:`D1Tabs`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{g(),I(),V=[{name:`modelSelected`,type:`ListSelectedList`},{name:`motionAxisAttrs`,type:`ConstrBind<MotionAxisProps>`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`MotionAxisSelectedValue`},{name:`tabItemAttrs`,type:`ConstrBind<TabItemProps>`},{name:`tabs`,type:`ListRecord<TabItemProps> | ConstrBind<TabsNavigationProps>`},{name:`tabsNavigationAttrs`,type:`ConstrBind<TabsNavigationProps>`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`motionAxis`,description:`Event emission/Вызов события`,properties:[{name:`options`,type:`MotionAxisEmitOptions`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],W={component:`Tabs`,props:V,slots:H,events:U,defaults:F,wikiDesign:ae}})))()}var K;function q(){return(q=e((()=>{ee(),oe(),G(),K=new se(W.component,W.props,W.defaults,W.wikiDesign,re,te)})))()}var he=t({Tabs:()=>Y,TabsBasic:()=>X,TabsVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),n(),J={title:`Ui/Tabs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Tabs:z},setup:()=>({args:e}),template:`
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