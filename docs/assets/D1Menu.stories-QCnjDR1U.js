import{c as o,e as b,D as B,r as n,H as v,Y as y,V as w,E as f,w as k,$ as P,N as M,d as D,h as L,k as S,m as A,s as x,l as I,n as C,u as V,o as _}from"./iframe-BGVIV1-M.js";import{_ as T}from"./D1List-D45j13lN.js";import{_ as q}from"./D1Bars-D_UhvoZX.js";import{W as N,D as j}from"./D1ListMenu-BqDEqzuI.js";import{a as H}from"./EventClickInclude-BTsveQTp.js";import{M as W}from"./ModelInclude-CDUOu-Ne.js";import{W as O,w as U,a as $,b as F}from"./wiki-BNdC282o.js";import"./jsx-runtime-D_zvdyIk.js";class X{constructor(e,s,t,a,r,l){this.props=e,this.className=s,this.components=t,this.emits=a,this.extra=r,this.index=l}is=o(()=>!!(this.props.barsLabel||this.props.barsDescription||this.props.barsBackHide!==!0));binds=o(()=>({...b(B(this.extra),this.props.barsAttrs,{class:`${this.className}__bars`}),label:this.props.barsLabel,description:this.props.barsDescription,backHide:this.props.barsBackHide,bars:this.props.barsList}));render=()=>(console.log("this.props.barsHide",this.props.barsHide),this.components&&!this.props.barsHide?this.components.render("bars",{...this.binds.value,onClick:this.onClick},void 0,this.index??"bars"):[]);onClick=(e,s)=>{this.emits?.("bars",e,s),this.emits?.("barsLite",s),s.type==="back"&&this.emits?.("barsBack",s)}}class E{constructor(e){this.props=e}progress=n(!1);buffer=n();item=o(()=>this.buffer.value??this.props.list??[]);is(){return!!(this.props.ajax||this.props.request)}async preparation(){return await this.update(),!0}async update(){await this.read(e=>this.buffer.value=e)}async getAjax(){return v(this.props.ajax)?y(this.props.ajax):await w.request({path:this.props.ajax,...this.props.request})}async read(e){this.is()&&(this.props.cache&&this.buffer.value!==void 0&&e(this.buffer.value),this.progress.value=!0,e(await this.getAjax()),this.progress.value=!1)}}class R{item=n();set(e){const s=this.getValue(e);this.item.value!==s&&(this.item.value=s)}reset(){return this.set(),this}getValue(e){if(f(e))return e.trim()}}class J{constructor(e,s){this.props=e,this.request=s}lite=n();control=n();getExtra(){return{adaptive:"menu",preparation:this.preparation,opening:this.opening,closing:this.closing}}preparation=async()=>{await this.request.preparation(),this.props.list&&this.props.liteThreshold&&Number(this.props.liteThreshold)<=Object.keys(this.props.list).length&&(this.lite.value=!0)};opening=async()=>(this.lite.value=!1,this.control.value=!0,!0);closing=async()=>(this.lite.value=!1,this.control.value=!1,!0)}class z{constructor(e,s,t){this.props=e,this.refs=s,this.emits=t,this.props.isSelectedByValue&&(new W("value",this.emits,this.value),s.selected&&k(s.selected,a=>{this.value.value=a},{immediate:!0}))}value=n();selected=o(()=>this.props.isSelectedByValue?this.value.value:this.props.selected);setValue(e){return this.props.isSelectedByValue&&!P(e)&&this.value.value!==e&&(this.value.value=e),this}}let G=class{constructor(e,s,t,a,r,l,u,d){this.props=e,this.refs=s,this.element=t,this.classDesign=a,this.className=r,this.components=l,this.slots=u,this.emits=d,this.request=new E(this.props),this.search=new R,this.value=new z(this.props,this.refs,this.emits),this.data=new M(this.request.item,void 0,void 0,void 0,this.value.selected,this.refs.keyValue,this.refs.keyLabel),this.bars=new X(this.props,this.className,this.components,this.emits),this.menuWindow=new J(this.props,this.request),this.window=new N(this.props,this.className,this.components,this.emits,this.menuWindow.getExtra()),this.event=new H(void 0,void 0,this.emits),this.slotData={loading:this.request.progress,isSelected:this.data.isSelected,selectedList:this.data.selectedList,selectedNames:this.data.selectedNames,selectedValues:this.data.selectedValues}}request;search;value;data;bars;window;menuWindow;event;slotData;binds=o(()=>({liteThreshold:this.props.liteThreshold,keyLabel:this.props.keyLabel,keyValue:this.props.keyValue,tag:this.props.tag,onClick:this.onClick,onClose:this.window.expose.toClose,control:!0}));getControlBinds(){return this.slotData}onClick=(e,s)=>{s&&"value"in s&&this.value.setValue(s.value),this.event.onClick(e,s)};onClickSlot=e=>{const s=e.target,t=s.closest("*[data-value]");t&&!s.closest(`.${this.className}__list`)&&this.emits?.("clickSlot",t.dataset.value)}};const Y={liteThreshold:40,barsHide:!0,barsBackHide:!0,tag:"a",autoClose:!0};class K extends D{item;constructor(e,s,t){super(e,s,t),this.item=new G(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.window.expose,...this.item.getControlBinds()}}initClasses(){return{main:{},bars:this.getSubClass("bars"),list:this.getSubClass("list")}}initStyles(){return{}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderList,footer:this.renderFooter},{class:this.classes?.value.main})}renderControl=e=>this.initSlot("control",void 0,this.getBinds(e));renderTitle=e=>{const s=[];return this.item.bars.is.value&&(s.push(...this.item.bars.render()),console.log("this.item.bars.is.value",s)),this.initSlot("title",s,this.getBinds(e)),s};renderList=e=>{const s=this.item.request.item.value;if(s){const t=[];return this.initSlot("contextTop",t,this.getBinds(e)),this.props.hideList||t.push(this.components.render("list",b({...this.item.binds.value,class:this.classes?.value.list,selected:this.item.value.selected.value,highlight:this.item.search.item.value,list:s,lite:this.item.menuWindow.lite.value},this.props.listAttrs),this.slots)),this.initSlot("contextBottom",t,this.getBinds(e)),L("div",{...this.getAttrs(),ref:this.element,onClick:this.item.onClickSlot},t)}};renderFooter=e=>this.initSlot("footer",void 0,this.getBinds(e));getBinds(e){return{...e,...this.item.getControlBinds()}}}const Q=T,Z=q,ee={barsAdaptive:["showAlways","showSm","showMd","showLg","showXl","show2xl"]},g={...Y},h=S({name:"D1Menu",__name:"D1Menu",props:A({selected:{type:[Number,String,Boolean,Array]},highlightLengthStart:{},hideList:{type:Boolean},list:{},liteThreshold:{},ajax:{type:[String,Function]},request:{},cache:{type:Boolean},keyLabel:{},keyValue:{},tag:{},listAttrs:{},itemAttrs:{},isSelectedByValue:{type:Boolean},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},barsAdaptive:{}},g),emits:["bars","barsLite","barsBack","click","clickLite","window","update:value","update:modelValue","clickSlot"],setup(i,{expose:e,emit:s}){const t=s,a=i,r=o(()=>({main:{"d1-menu":!0,"d1-menu--hideList":a.hideList,[`d1-menu--barsAdaptive--${a.barsAdaptive}`]:x(ee.barsAdaptive,a.barsAdaptive)}})),l=o(()=>({})),u=new K("d1.menu",a,{emits:t,classes:r,styles:l,components:{list:Q,bars:Z,window:j}}),d=u.render();return e(u.expose()),(ae,oe)=>(_(),I(C(V(d))))}});h.__docgenInfo={name:"D1Menu",exportName:"default",displayName:"D1Menu",description:"",tags:{},props:[{name:"barsAdaptive",required:!1,type:{name:"union",elements:[{name:'"showAlways"'},{name:'"showSm"'},{name:'"showMd"'},{name:'"showLg"'},{name:'"showXl"'},{name:'"show2xl"'}]}},{name:"hideList",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Git/dxt-ui/packages/d1/src/components/Ui/Menu/D1Menu.vue"]};const se=[{name:"ajax",type:"string | (() => NormalOrPromise<ListRecord<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>>)"},{name:"autoClose",type:"boolean"},{name:"barsAdaptive",type:"string",option:["showAlways","showSm","showMd","showLg","showXl","show2xl"]},{name:"barsAttrs",type:"ConstrBind<BarsPropsBasic<IconPropsBasic<ImagePropsBasic>, ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[]"},{name:"cache",type:"boolean"},{name:"disabled",type:"boolean"},{name:"hideList",type:"boolean"},{name:"highlightLengthStart",type:"number"},{name:"isSelectedByValue",type:"boolean"},{name:"itemAttrs",type:"ConstrBind<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>"},{name:"keyLabel",type:"string"},{name:"keyValue",type:"string"},{name:"list",type:"ListRecord<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>"},{name:"listAttrs",type:"ConstrBind<ListPropsBasic<IconPropsBasic<ImagePropsBasic>, ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>>"},{name:"liteThreshold",type:"number"},{name:"modelValue",type:"string"},{name:"onUpdate:modelValue",type:"(value: string) => void"},{name:"onUpdate:value",type:"(value: string) => void"},{name:"request",type:"ApiFetch"},{name:"selected",type:"ListSelectedList"},{name:"tag",type:"string"},{name:"windowAttrs",type:"ConstrBind<WindowPropsBasic<ScrollbarPropsBasic, ImagePropsBasic>>"}],m=new O("Menu",se,g,U,$,F),te={title:"Ui/Menu",component:h,parameters:{design:"d1",docs:{description:{component:m.getDescription()}}},argTypes:m.getWiki(),args:m.getValues()},p={render:i=>({components:{D1Menu:h},setup:()=>({args:i}),template:`
      <D1Menu v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </D1Menu>
    `})},c={name:"AJAX Загрузка",render:()=>({components:{D1Menu:h},setup(){return{loadMenuData:()=>new Promise(e=>setTimeout(()=>e([{label:"Dashboard",value:"dashboard",icon:"dashboard"},{label:"Users",value:"users",icon:"people"},{label:"Settings",value:"settings",icon:"settings"},{label:"Reports",value:"reports",icon:"assessment"}]),512))}},template:`
        <D1Menu :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </D1Menu>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Menu
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Menu v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </D1Menu>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'AJAX Загрузка',
  render: () => ({
    components: {
      D1Menu
    },
    setup() {
      const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([{
        label: 'Dashboard',
        value: 'dashboard',
        icon: 'dashboard'
      }, {
        label: 'Users',
        value: 'users',
        icon: 'people'
      }, {
        label: 'Settings',
        value: 'settings',
        icon: 'settings'
      }, {
        label: 'Reports',
        value: 'reports',
        icon: 'assessment'
      }]), 512));
      return {
        loadMenuData
      };
    },
    template: \`
        <D1Menu :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </D1Menu>
    \`
  })
}`,...c.parameters?.docs?.source}}};const ie=["Menu","MenuAjax"],be=Object.freeze(Object.defineProperty({__proto__:null,Menu:p,MenuAjax:c,__namedExportsOrder:ie,default:te},Symbol.toStringTag,{value:"Module"}));export{be as M,p as a,m as b,c};
