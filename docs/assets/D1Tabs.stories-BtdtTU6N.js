import{Q as _,d,w as S,ah as I,r as y,$ as g,h as M,g as T,W as $,I as L,K as W,L as B,M as U,N as V}from"./iframe-B21bnPHY.js";import{g as j}from"./D1Icon-vXIBGmPr.js";import{V as H}from"./ModelInclude-BiYm_iCQ-NMUfVkBD.js";import{l as x}from"./AriaStaticInclude-DRHG8ILX-IjLEgAa7.js";import{_ as P}from"./D1TabsNavigation-DY0EMsG3.js";import{_ as O}from"./D1MotionAxis-C7zsOLOF.js";import{w as R,W as E,a as F,b as Q}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";var Y=Object.defineProperty,z=(a,e,s)=>e in a?Y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,t=(a,e,s)=>z(a,typeof e!="symbol"?e+"":e,s);class G{constructor(e,s,n,c,r,i,o){t(this,"element",y()),t(this,"selectedItem",d(()=>this.selected?T(this.selected):this.props.selected)),t(this,"binds",d(()=>g(T(this.extra),{class:`${this.className}__motionAxis`},this.props.motionAxisAttrs))),t(this,"render",(m,l)=>this.components?this.components.render("motionAxis",{...g(l,this.binds.value,{selected:this.selectedItem.value}),ref:this.element,onMotionAxis:this.onMotionAxis},m,this.index):[]),t(this,"onMotionAxis",m=>{var l;(l=this.emits)==null||l.call(this,"motionAxis",m)}),this.props=e,this.className=s,this.components=n,this.emits=c,this.extra=r,this.selected=i,this.index=o}}class K{constructor(e,s,n,c,r){t(this,"element",y()),t(this,"binds",d(()=>g(T(this.extra),{class:`${this.className}__tabsNavigation`,itemAttrs:this.props.tabItemAttrs},$(this.props.tabs,"list"),this.props.tabsNavigationAttrs))),t(this,"ids",d(()=>{var i;return(i=this.element.value)==null?void 0:i.ids})),t(this,"render",(i,o)=>this.components?this.components.render("tabsNavigation",g(o,this.binds.value,{ref:this.element}),i,this.index):[]),this.props=e,this.className=s,this.components=n,this.extra=c,this.index=r}}class q{constructor(e,s){t(this,"item",y()),t(this,"set",n=>{this.item.value=n}),t(this,"update",()=>{this.is(this.props.selected)||this.set(this.props.selected)}),this.props=e,this.refs=s,this.item.value=e.selected,S([this.refs.selected],this.update)}is(e){return I(e,this.item.value)}}class J{constructor(e,s,n,c,r,i,o,m,l){t(this,"event"),t(this,"motionAxis"),t(this,"tabsNavigation"),t(this,"selected"),this.props=e,this.refs=s,this.element=n,this.classDesign=c,this.className=r,this.components=i,this.slots=o,this.emits=m;const{EventClickIncludeConstructor:k=j,ModelIncludeConstructor:D=H,MotionAxisIncludeConstructor:A=G,TabsNavigationIncludeConstructor:N=K,TabsSelectedConstructor:C=q}=l??{};this.selected=new C(this.props,this.refs),this.event=new k(void 0,void 0,this.emits),this.tabsNavigation=new N(this.props,this.className,this.components,d(()=>({selected:this.selected.item.value,onClick:this.event.onClick,"onUpdate:selected":this.selected.set}))),this.motionAxis=new A(this.props,this.className,this.components,this.emits,void 0,d(()=>String(this.selected.item.value))),new D("selected",this.emits,this.selected.item)}}const X={};class Z extends _{constructor(e,s,n,c=J){super(e,s,n),t(this,"item"),t(this,"slidesRender",()=>{var r;if(this.slots){const i={};for(const o in this.slots){const m=(r=this.item.tabsNavigation.ids.value)==null?void 0:r[o];i[o]=()=>{var l;return M("div",{class:(l=this.classes)==null?void 0:l.value.slide,...x.role("tabpanel"),...x.labelledby(m)},this.initSlot(o))}}return i}}),this.item=new c(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},slide:this.getSubClass("slide")}}initStyles(){return{}}initRender(){return this.item.tabsNavigation.ids.value?[...this.item.tabsNavigation.render(),...this.item.motionAxis.render(this.slidesRender())]:this.item.tabsNavigation.render()}}const ee=P,te=O,w={...X},p=L({name:"D1Tabs",__name:"D1Tabs",props:U({tabs:{},tabItemAttrs:{},tabsNavigationAttrs:{},selected:{},motionAxisAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function}},w),emits:["click","clickLite","update:selected","update:modelSelected","motionAxis"],setup(a,{expose:e,emit:s}){const n=s,c=a,r=d(()=>({main:{"d1-tabs":!0}})),i=d(()=>({})),o=new Z("d1.tabs",c,{emits:n,classes:r,styles:i,components:{tabsNavigation:ee,motionAxis:te}}),m=o.render();return e(o.expose()),(l,k)=>(V(),W(B(m)))}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{name:"D1Tabs",exportName:"default",displayName:"D1Tabs",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Tabs/D1Tabs.vue"]});const se=[{name:"modelSelected",type:"ListSelectedList"},{name:"motionAxisAttrs",type:"ConstrBind<MotionAxis>"},{name:"onUpdate:modelSelected",type:"(value: ListSelectedList) => void"},{name:"onUpdate:selected",type:"(value: ListSelectedList) => void"},{name:"selected",type:"string"},{name:"tabItemAttrs",type:"ConstrBind<TabItem>"},{name:"tabs",type:"ListRecord<TabItem> | ConstrBind<TabsNavigation>"},{name:"tabsNavigationAttrs",type:"ConstrBind<TabsNavigation>"}],v={component:"Tabs",props:se,defaults:w,wikiDesign:R},f=new E(v.component,v.props,v.defaults,v.wikiDesign,F,Q),ae={title:"Ui/Tabs",component:p,parameters:{design:"d1",docs:{description:{component:f.getDescription()}}},argTypes:f.getWiki(),args:f.getValues()},b={render:a=>({components:{D1Tabs:p},setup:()=>({args:a}),template:`
      <D1Tabs v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</D1Tabs>
    `})},u={name:"Базовый",render:()=>({components:{D1Tabs:p},template:`
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
    `})},h={name:"v-model",render:()=>({components:{D1Tabs:p},setup(){return{selected:y("tab1")}},template:`
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
    `})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const ie=["Tabs","TabsBasic","TabsVModel"],be=Object.freeze(Object.defineProperty({__proto__:null,Tabs:b,TabsBasic:u,TabsVModel:h,__namedExportsOrder:ie,default:ae},Symbol.toStringTag,{value:"Module"}));export{be as T,b as a,f as b,u as c,h as d};
