import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,an as c,jt as l,ut as u}from"./library-BfcLFF_v.js";import{O as d,d as f,i as p,k as ee,l as m,m as h,n as g,o as _,p as v,t as y,u as te}from"./wiki-BHyzKkJP.js";import{n as b,t as ne}from"./AriaStaticInclude-DoPfNULn-DLb49dmA.js";import{n as re,t as x}from"./DescriptionInclude-uh0wozaB-CAxgQn2N.js";import{n as S,t as C}from"./LabelInclude-B0RqVypu-gKg52iET.js";import{n as w,t as ie}from"./ImageInclude-oUPVvBa5-Cdfj0QLg.js";import{n as ae,t as T}from"./Image-w2_n59c4.js";import{i as E,n as D,r as O,t as k}from"./Actions-DGxrWzBP.js";var A,j,M;function N(){return(N=e((()=>{ne(),ie(),O(),x(),C(),n(),d(),A=class{constructor(e,t,n,r,i,a,o,s,c={}){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),v(this,`actions`,void 0),v(this,`description`,void 0),v(this,`image`,void 0),v(this,`label`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{ActionsIncludeConstructor:l=E,DescriptionIncludeConstructor:u=re,ImageIncludeConstructor:d=w,LabelIncludeConstructor:f=S}=c;this.image=new d(i,e,a,void 0,s),this.description=new u(e,i,o),this.label=new f(e,i,void 0,o),this.actions=new l(i,e,a,()=>({align:`center`}),void 0,s)}get binds(){let e={};return this.label.is&&Object.assign(e,b.labelledby(this.label.id)),this.description.is&&Object.assign(e,b.describedby(this.description.id)),e}},j={},M=class extends ee{constructor(e,t,n,r=A){super(e,t,n),v(this,`item`,void 0),v(this,`renderBodyImage`,()=>this.item.image.is?[a(`div`,this.getKeyClass(`image`),this.item.image.render())]:[]),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},image:this.getSubClass(`image`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),actions:this.getSubClass(`actions`)}}initStyles(){return{}}initRender(){let e=[...this.renderBodyImage(),...this.item.label.render(),...this.item.description.render()];return this.initSlot(`context`,e),e.push(...this.item.actions.render()),a(`div`,{...this.getAttrs(),class:this.classes?.value.main,...this.item.binds},e)}}})))()}var P,F;function I(){return(I=e((()=>{N(),P={size:[`sm`,`md`,`lg`]},F={...j,size:`md`}})))()}var L;function R(){return(R=e((()=>{n(),d(),N(),ae(),D(),I(),L=i({name:`D1Placeholder`,__name:`D1Placeholder`,props:o({image:{},imageAttrs:{},label:{},labelId:{},description:{},descriptionId:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},size:{}},F),emits:[`load`,`actions`,`actionsLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-placeholder":!0,[`d1-placeholder--size--${a.size}`]:u(P.size,a.size)}})),d=l(()=>({})),f=new M(`d1.placeholder`,a,{emits:i,classes:o,styles:d,components:{image:T,actions:k}}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Placeholder`,exportName:`default`,displayName:`D1Placeholder`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Placeholder/D1Placeholder.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{y(),I(),V=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],H=[{name:`context`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],W={component:`Placeholder`,props:V,slots:H,events:U,defaults:F,wikiDesign:g}})))()}var K;function q(){return(q=e((()=>{f(),m(),G(),K=new te(W.component,W.props,W.defaults,W.wikiDesign,p,h)})))()}var oe=t({Placeholder:()=>Y,PlaceholderBasic:()=>X,PlaceholderSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),m(),J={title:`Ui/Placeholder`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1Placeholder:z},setup(){return{image1:_}},template:`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Placeholder:z},setup(){return{image1:_}},template:`
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