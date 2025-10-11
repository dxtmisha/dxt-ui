import{c as n,d as b,D as v,r as o,H as y,Y as w,Z as f,E as k,w as M,U as D,Q as B,M as L,h as S,e as A,m as x,o as C,f as V,g as _,u as T,j}from"./iframe-CFZkzvey.js";import{_ as q}from"./D1List-CLBfwR3j.js";import{_ as N}from"./D1Bars-D_z9Jy-h.js";import{W as H,D as W}from"./D1ListMenu-BRVMJozx.js";import{a as P}from"./IconTrailingInclude-DL_EO-II.js";import{M as O}from"./ModelInclude-C-H473W0.js";import{W as U,w as I,a as $,b as F}from"./wiki-NZJqstoo.js";import"./jsx-runtime-D_zvdyIk.js";class X{constructor(e,t,s,a,r,l){this.props=e,this.className=t,this.components=s,this.emits=a,this.extra=r,this.index=l}is=n(()=>!!(this.props.barsLabel||this.props.barsDescription||this.props.barsBackHide!==!0));binds=n(()=>({...b(v(this.extra),this.props.barsAttrs,{class:`${this.className}__bars`}),label:this.props.barsLabel,description:this.props.barsDescription,backHide:this.props.barsBackHide,bars:this.props.barsList}));render=()=>(console.log("this.props.barsHide",this.props.barsHide),this.components&&!this.props.barsHide?this.components.render("bars",{...this.binds.value,onClick:this.onClick},void 0,this.index??"bars"):[]);onClick=(e,t)=>{this.emits?.("bars",e,t),this.emits?.("barsLite",t),t.type==="back"&&this.emits?.("barsBack",t)}}class E{constructor(e){this.props=e}progress=o(!1);buffer=o();item=n(()=>this.buffer.value??this.props.list??[]);is(){return!!(this.props.ajax||this.props.request)}async preparation(){return await this.update(),!0}async update(){await this.read(e=>this.buffer.value=e)}async getAjax(){return y(this.props.ajax)?w(this.props.ajax):await f.request({path:this.props.ajax,...this.props.request})}async read(e){this.is()&&(this.props.cache&&this.buffer.value!==void 0&&e(this.buffer.value),this.progress.value=!0,e(await this.getAjax()),this.progress.value=!1)}}class R{item=o();set(e){const t=this.getValue(e);this.item.value!==t&&(this.item.value=t)}reset(){return this.set(),this}getValue(e){if(k(e))return e.trim()}}class J{constructor(e,t){this.props=e,this.request=t}lite=o();control=o();getExtra(){return{adaptive:"menu",preparation:this.preparation,opening:this.opening,closing:this.closing}}preparation=async()=>{await this.request.preparation(),this.props.list&&this.props.liteThreshold&&Number(this.props.liteThreshold)<=Object.keys(this.props.list).length&&(this.lite.value=!0)};opening=async()=>(this.lite.value=!1,this.control.value=!0,!0);closing=async()=>(this.lite.value=!1,this.control.value=!1,!0)}class z{constructor(e,t,s){this.props=e,this.refs=t,this.emits=s,this.props.isSelectedByValue&&(new O("value",this.emits,this.value),t.selected&&M(t.selected,a=>{this.value.value=a},{immediate:!0}))}value=o();selected=n(()=>this.props.isSelectedByValue?this.value.value:this.props.selected);setValue(e){return this.props.isSelectedByValue&&!D(e)&&this.value.value!==e&&(this.value.value=e),this}}let Q=class{constructor(e,t,s,a,r,l,h,c){this.props=e,this.refs=t,this.element=s,this.classDesign=a,this.className=r,this.components=l,this.slots=h,this.emits=c,this.request=new E(this.props),this.search=new R,this.value=new z(this.props,this.refs,this.emits),this.data=new B(this.request.item,void 0,void 0,void 0,this.value.selected,this.refs.keyValue,this.refs.keyLabel),this.bars=new X(this.props,this.className,this.components,this.emits),this.menuWindow=new J(this.props,this.request),this.window=new H(this.props,this.className,this.components,this.emits,this.menuWindow.getExtra()),this.event=new P(void 0,void 0,this.emits),this.slotData={loading:this.request.progress,isSelected:this.data.isSelected,selectedList:this.data.selectedList,selectedNames:this.data.selectedNames,selectedValues:this.data.selectedValues}}request;search;value;data;bars;window;menuWindow;event;slotData;binds=n(()=>({liteThreshold:this.props.liteThreshold,keyLabel:this.props.keyLabel,keyValue:this.props.keyValue,tag:this.props.tag,onClick:this.onClick,onClose:this.window.expose.toClose,control:!0}));getControlBinds(){return this.slotData}onClick=(e,t)=>{t&&"value"in t&&this.value.setValue(t.value),this.event.onClick(e,t)};onClickSlot=e=>{const t=e.target,s=t.closest("*[data-value]");s&&!t.closest(`.${this.className}__list`)&&this.emits?.("clickSlot",s.dataset.value)}};const Y={liteThreshold:40,barsHide:!0,barsBackHide:!0,tag:"a",autoClose:!0};class Z extends L{item;constructor(e,t,s){super(e,t,s),this.item=new Q(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.window.expose,...this.item.getControlBinds()}}initClasses(){return{main:{},bars:this.getSubClass("bars"),list:this.getSubClass("list")}}initStyles(){return{}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderList,footer:this.renderFooter},{class:this.classes?.value.main})}renderControl=e=>this.initSlot("control",void 0,this.getBinds(e));renderTitle=e=>{const t=[];return this.item.bars.is.value&&(t.push(...this.item.bars.render()),console.log("this.item.bars.is.value",t)),this.initSlot("title",t,this.getBinds(e)),t};renderList=e=>{const t=this.item.request.item.value;if(t){const s=[];return this.initSlot("contextTop",s,this.getBinds(e)),this.props.hideList||s.push(this.components.render("list",b({...this.item.binds.value,class:this.classes?.value.list,selected:this.item.value.selected.value,highlight:this.item.search.item.value,list:t,lite:this.item.menuWindow.lite.value},this.props.listAttrs),this.slots)),this.initSlot("contextBottom",s,this.getBinds(e)),S("div",{...this.getAttrs(),ref:this.element,onClick:this.item.onClickSlot},s)}};renderFooter=e=>this.initSlot("footer",void 0,this.getBinds(e));getBinds(e){return{...e,...this.item.getControlBinds()}}}const G=q,K=N,ee={barsAdaptive:["showAlways","showSm","showMd","showLg","showXl","show2xl"]},g={...Y},d=A({name:"D1Menu",__name:"D1Menu",props:x({selected:{type:[Number,String,Boolean,Array]},highlightLengthStart:{},hideList:{type:Boolean},list:{},liteThreshold:{},ajax:{type:[String,Function]},request:{},cache:{type:Boolean},keyLabel:{},keyValue:{},tag:{},listAttrs:{},itemAttrs:{},isSelectedByValue:{type:Boolean},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},barsAdaptive:{}},g),emits:["bars","barsLite","barsBack","click","clickLite","window","update:value","update:modelValue","clickSlot"],setup(i,{expose:e,emit:t}){const s=t,a=i,r=n(()=>({main:{"d1-menu":!0,"d1-menu--hideList":a.hideList,[`d1-menu--barsAdaptive--${a.barsAdaptive}`]:C(ee.barsAdaptive,a.barsAdaptive)}})),l=n(()=>({})),h=new Z("d1.menu",a,{emits:s,classes:r,styles:l,components:{list:G,bars:K,window:W}}),c=h.render();return e(h.expose()),(ae,ne)=>(j(),V(_(T(c))))}});d.__docgenInfo={name:"D1Menu",exportName:"default",displayName:"D1Menu",description:"",tags:{},props:[{name:"barsAdaptive",required:!1,type:{name:"union",elements:[{name:'"showAlways"'},{name:'"showSm"'},{name:'"showMd"'},{name:'"showLg"'},{name:'"showXl"'},{name:'"show2xl"'}]}},{name:"hideList",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Menu/D1Menu.vue"]};const te=[{name:"ajax",type:"string | (() => NormalOrPromise<ListRecord<ListItemProps>>)"},{name:"autoClose",type:"boolean"},{name:"barsAdaptive",type:"string",option:["showAlways","showSm","showMd","showLg","showXl","show2xl"]},{name:"barsAttrs",type:"ConstrBind<BarsProps>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"Bars['bars']"},{name:"cache",type:"boolean"},{name:"disabled",type:"boolean"},{name:"hideList",type:"boolean"},{name:"highlightLengthStart",type:"number"},{name:"isSelectedByValue",type:"boolean"},{name:"itemAttrs",type:"ConstrBind<ListItemProps>"},{name:"keyLabel",type:"string"},{name:"keyValue",type:"string"},{name:"list",type:"ListRecord<ListItemProps>"},{name:"listAttrs",type:"ConstrBind<ListProps>"},{name:"liteThreshold",type:"number"},{name:"modelValue",type:"string"},{name:"onUpdate:modelValue",type:"(value: string) => void"},{name:"onUpdate:value",type:"(value: string) => void"},{name:"request",type:"ApiFetch"},{name:"selected",type:"ListSelectedList"},{name:"tag",type:"string"},{name:"windowAttrs",type:"ConstrBind<WindowProps>"}],m=new U("Menu",te,g,I,$,F),se={title:"Ui/Menu",component:d,parameters:{design:"d1",docs:{description:{component:m.getDescription()}}},argTypes:m.getWiki(),args:m.getValues()},p={render:i=>({components:{D1Menu:d},setup:()=>({args:i}),template:`
      <D1Menu v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </D1Menu>
    `})},u={name:"AJAX Загрузка",render:()=>({components:{D1Menu:d},setup(){return{loadMenuData:()=>new Promise(e=>setTimeout(()=>e([{label:"Dashboard",value:"dashboard",icon:"dashboard"},{label:"Users",value:"users",icon:"people"},{label:"Settings",value:"settings",icon:"settings"},{label:"Reports",value:"reports",icon:"assessment"}]),512))}},template:`
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["Menu","MenuAjax"],be=Object.freeze(Object.defineProperty({__proto__:null,Menu:p,MenuAjax:u,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{be as M,p as a,m as b,u as c};
