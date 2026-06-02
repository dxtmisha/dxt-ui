import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,D as i,Dt as a,Ft as o,Mt as s,Nt as c,Xt as l,kt as u,m as d,r as f,s as p}from"./iframe-53vFWNoU.js";import{t as m}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as h,f as g,l as _,n as v,o as y,p as b,t as x,u as S}from"./wiki-DwIxUKqL.js";import{l as C,u as w}from"./D1Icon-D5nVRATx.js";import{n as T,t as E}from"./Button-ChpcxePA.js";import{n as D,t as O}from"./AreaInclude-BiOF0mye-Bg328ueX.js";var k,A,j,M=t((()=>{g(),w(),O(),a(),d(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`element`,void 0),b(this,`classDesign`,void 0),b(this,`className`,void 0),b(this,`components`,void 0),b(this,`slots`,void 0),b(this,`emits`,void 0),b(this,`area`,void 0),b(this,`event`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=D,EventConstructor:u=C}=c;this.area=new l(e),this.event=new u(void 0,void 0,s)}isList(){var e;return!!(this.props.list||(e=this.slots)!=null&&e.default)}},A={area:`button-group`,orientation:`horizontal`},j=class extends f{constructor(e,t,n,r=k){super(e,t,n),b(this,`item`,void 0),b(this,`renderList`,()=>{let e=[];return this.item.isList()&&(this.props.list&&this.props.list.forEach((t,n)=>{this.components.renderAdd(e,`button`,p({class:this.classes?.value.item,onClick:this.item.event.onClick},this.props.buttonAttrs,t),void 0,`list-${n}`)}),this.initSlot(`default`,e)),e}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){return c(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.renderList())}}})),N,P,F=t((()=>{M(),N={orientation:[`horizontal`,`vertical`]},P={...A,orientation:`horizontal`}})),I=t((()=>{})),L,R=t((()=>{a(),d(),M(),T(),F(),I(),L=s({name:`D1ButtonGroup`,__name:`D1ButtonGroup`,props:o({area:{},list:{},buttonAttrs:{},orientation:{},wrap:{type:Boolean}},P),emits:[`click`,`clickLite`],setup(e,{expose:t,emit:a}){let o=a,s=e,c=new j(`d1.buttonGroup`,s,{emits:o,classes:u(()=>({main:{"d1-buttonGroup":!0,[`d1-buttonGroup--orientation--${s.orientation}`]:i(N.orientation,s.orientation),"d1-buttonGroup--wrap":s.wrap}})),styles:u(()=>({})),components:{button:E}}),d=c.render();return t(c.expose()),(e,t)=>(r(),n(l(d)))}})})),z,B=t((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1ButtonGroup`,exportName:`default`,displayName:`D1ButtonGroup`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ButtonGroup/D1ButtonGroup.vue`]})})),V,H,U,W,G=t((()=>{x(),F(),V=[{name:`area`,type:`string`},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`list`,type:`ConstrBind<ButtonProps>[]`},{name:`orientation`,type:`string`,option:[`horizontal`,`vertical`]},{name:`wrap`,type:`boolean`}],H=[],U=[],W={component:`ButtonGroup`,props:V,slots:H,events:U,defaults:P,wikiDesign:v}})),K,q=t((()=>{h(),y(),G(),K=new S(W.component,W.props,W.defaults,W.wikiDesign,_,m)})),J=e({ButtonGroup:()=>X,ButtonGroupSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),Y,X,Z,Q,$=t((()=>{B(),q(),Y={title:`Ui/ButtonGroup`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},X={},Z={name:`Использование слотов`,render:()=>({components:{D1ButtonGroup:z},template:`
        <D1ButtonGroup>
          <template #default>
            Default Slot
          </template>
        </D1ButtonGroup>
    `})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1ButtonGroup
    },
    template: \`
        <D1ButtonGroup>
          <template #default>
            Default Slot
          </template>
        </D1ButtonGroup>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`ButtonGroup`,`ButtonGroupSlots`]}));$();export{X as ButtonGroup,Z as ButtonGroupSlots,Q as __namedExportsOrder,Y as default,q as i,$ as n,K as r,J as t};