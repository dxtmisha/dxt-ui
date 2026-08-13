import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,L as a,Lt as o,Mt as s,Nt as c,in as l,jt as u}from"./library-CUIf7uCS.js";import{O as d,a as f,d as p,k as ee,l as m,m as h,n as g,p as _,r as v,t as y,u as te}from"./wiki-wIqBVsyI.js";import{n as b,t as ne}from"./AriaStaticInclude-CI16qWQ7-QE8vrVOk.js";import{n as x,t as S}from"./DescriptionInclude-DCg4_lRT-BGXxAOt3.js";import{n as C,t as w}from"./LabelInclude-gVJx5HOn-BeiC94Ne.js";import{n as T,t as re}from"./ImageInclude-D7vRI3z9-C9Dm3TVu.js";import{n as ie,t as ae}from"./Image-GZvXUXys.js";import{i as E,n as D,r as O,t as k}from"./Actions-Dn5w3w7V.js";var A,j,M;function N(){return(N=e((()=>{ne(),re(),O(),S(),w(),r(),d(),A=class{constructor(e,t,n,r,i,a,o,s,c={}){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),_(this,`actions`,void 0),_(this,`description`,void 0),_(this,`image`,void 0),_(this,`label`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{ActionsIncludeConstructor:l=E,DescriptionIncludeConstructor:u=x,ImageIncludeConstructor:d=T,LabelIncludeConstructor:f=C}=c;this.image=new d(i,e,a,void 0,s),this.description=new u(e,i,o),this.label=new f(e,i,void 0,o),this.actions=new l(i,e,a,()=>({align:`center`}),void 0,s)}get binds(){let e={};return this.label.is&&Object.assign(e,b.labelledby(this.label.id)),this.description.is&&Object.assign(e,b.describedby(this.description.id)),e}},j={},M=class extends ee{constructor(e,t,n,r=A){super(e,t,n),_(this,`item`,void 0),_(this,`renderBodyImage`,()=>this.item.image.is?[c(`div`,{class:this.classes?.value.image},this.item.image.render())]:[]),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},image:this.getSubClass(`image`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),actions:this.getSubClass(`actions`)}}initStyles(){return{}}initRender(){let e=[...this.renderBodyImage(),...this.item.label.render(),...this.item.description.render()];return this.initSlot(`context`,e),e.push(...this.item.actions.render()),c(`div`,{...this.getAttrs(),class:this.classes?.value.main,...this.item.binds},e)}}})))()}var P,F;function I(){return(I=e((()=>{N(),P={size:[`sm`,`md`,`lg`]},F={...j,size:`md`}})))()}var L;function R(){return(R=e((()=>{r(),d(),N(),ie(),D(),I(),L=s({name:`D1Placeholder`,__name:`D1Placeholder`,props:o({image:{},imageAttrs:{},label:{},labelId:{},description:{},descriptionId:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},size:{}},F),emits:[`load`,`actions`,`actionsLite`],setup(e,{expose:t,emit:r}){let o=r,s=e,c=n(()=>({main:{"d1-placeholder":!0,[`d1-placeholder--size--${s.size}`]:a(P.size,s.size)}})),d=n(()=>({})),f=new M(`d1.placeholder`,s,{emits:o,classes:c,styles:d,components:{image:ae,actions:k}}),p=f.render();return t(f.expose()),(e,t)=>(i(),u(l(p)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Placeholder`,exportName:`default`,displayName:`D1Placeholder`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Placeholder/D1Placeholder.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{y(),I(),V=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],H=[{name:`context`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],W={component:`Placeholder`,props:V,slots:H,events:U,defaults:F,wikiDesign:g}})))()}var K;function q(){return(q=e((()=>{p(),m(),G(),K=new te(W.component,W.props,W.defaults,W.wikiDesign,v,h)})))()}var oe=t({Placeholder:()=>Y,PlaceholderBasic:()=>X,PlaceholderSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),m(),J={title:`Ui/Placeholder`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1Placeholder:z},setup(){return{image1:f}},template:`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Placeholder:z},setup(){return{image1:f}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Placeholder`,`PlaceholderBasic`,`PlaceholderSlots`]})))()}export{$ as a,Z as i,Y as n,K as o,X as r,q as s,oe as t};