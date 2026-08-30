import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,dt as u,kt as d,sn as f}from"./library-CO1fW2cN.js";import{E as p,O as m,d as h,f as g,i as _,l as v,n as ee,o as y,t as te,u as ne}from"./wiki-BMj2WokS.js";import{n as b,t as x}from"./AriaStaticInclude-DoPfNULn-CgdAxtFN.js";import{n as S,t as re}from"./DescriptionInclude-Bmc9HWp6-BIU41MmJ.js";import{n as ie,t as ae}from"./LabelInclude-DGpRRhTL-D4-73OEc.js";import{n as oe,t as C}from"./ImageInclude-CU6ghcSh-D6Wfm7KW.js";import{n as w,t as T}from"./Image-eoFD_ywJ.js";import{i as E,n as D,r as O,t as k}from"./Actions-CS3-upu5.js";var A,j,M;function N(){return(N=e((()=>{x(),C(),O(),re(),ae(),d(),p(),c(),A=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`actions`,void 0),r(this,`description`,void 0),r(this,`image`,void 0),r(this,`label`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{ActionsIncludeConstructor:u=E,DescriptionIncludeConstructor:d=S,ImageIncludeConstructor:f=oe,LabelIncludeConstructor:p=ie}=l;this.image=new f(a,e,o,void 0,c),this.description=new d(e,a,s),this.label=new p(e,a,void 0,s),this.actions=new u(a,e,o,()=>({align:`center`}),void 0,c)}get binds(){let e={};return this.label.is&&Object.assign(e,b.labelledby(this.label.id)),this.description.is&&Object.assign(e,b.describedby(this.description.id)),e}},j={},M=class extends m{constructor(e,t,n,i=A){super(e,t,n),r(this,`item`,void 0),r(this,`renderBodyImage`,()=>this.item.image.is?[o(`div`,this.getKeyClass(`image`),this.item.image.render())]:[]),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},image:this.getSubClass(`image`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),actions:this.getSubClass(`actions`)}}initStyles(){return{}}initRender(){let e=[...this.renderBodyImage(),...this.item.label.render(),...this.item.description.render()];return this.initSlot(`context`,e),e.push(...this.item.actions.render()),o(`div`,{...this.getAttrs(),class:this.classes?.value.main,...this.item.binds},e)}}})))()}var P,F;function I(){return(I=e((()=>{N(),P={size:[`sm`,`md`,`lg`]},F={...j,size:`md`}})))()}var L;function R(){return(R=e((()=>{d(),p(),N(),w(),D(),I(),L=i({name:`D1Placeholder`,__name:`D1Placeholder`,props:n({image:{},imageAttrs:{},label:{},labelId:{},description:{},descriptionId:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},size:{}},F),emits:[`load`,`actions`,`actionsLite`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-placeholder":!0,[`d1-placeholder--size--${i.size}`]:u(P.size,i.size)}})),c=s(()=>({})),d=new M(`d1.placeholder`,i,{emits:r,classes:o,styles:c,components:{image:T,actions:k}}),p=d.render();return t(d.expose()),(e,t)=>(a(),l(f(p)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Placeholder`,exportName:`default`,displayName:`D1Placeholder`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Placeholder/D1Placeholder.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{te(),I(),V=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],H=[{name:`context`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],W={component:`Placeholder`,props:V,slots:H,events:U,defaults:F,wikiDesign:ee}})))()}var K;function q(){return(q=e((()=>{h(),v(),G(),K=new ne(W.component,W.props,W.defaults,W.wikiDesign,_,g)})))()}var se=t({Placeholder:()=>Y,PlaceholderBasic:()=>X,PlaceholderSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),v(),J={title:`Ui/Placeholder`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1Placeholder:z},setup(){return{image1:y}},template:`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Placeholder:z},setup(){return{image1:y}},template:`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder>
            <template #default>
              <span>Default Slot (Label)</span>
            </template>
            <template #description>
              <span>Description Slot</span>
            </template>
            <template #context>
              <span>Context Slot (overrides default/label and description)</span>
            </template>
          </D1Placeholder>
        </div>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Базовый',
  render: () => ({
    components: {
      D1Placeholder
    },
    setup() {
      return {
        image1
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Placeholder
    },
    setup() {
      return {
        image1
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder>
            <template #default>
              <span>Default Slot (Label)</span>
            </template>
            <template #description>
              <span>Description Slot</span>
            </template>
            <template #context>
              <span>Context Slot (overrides default/label and description)</span>
            </template>
          </D1Placeholder>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Placeholder`,`PlaceholderBasic`,`PlaceholderSlots`]})))()}export{$ as a,Z as i,Y as n,K as o,X as r,q as s,se as t};