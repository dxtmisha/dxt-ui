import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,D as r,Ft as i,Ht as a,It as o,Jt as s,Pt as c,Rt as l,mn as u}from"./library-ByXZ2YPj.js";import{_ as d,a as f,d as p,f as ee,i as m,k as h,n as g,p as _,s as v,t as te}from"./wiki-CfN0XtvQ.js";import{n as y,t as ne}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as b,t as x}from"./DescriptionInclude-C4lmPRHu-BJ9J-b7o.js";import{n as S,t as C}from"./LabelInclude-VdD0o-a0-CMD-JztE.js";import{n as w,t as re}from"./ImageInclude-CwOv50rs-CDvVPyXe.js";import{n as ie,t as ae}from"./Image-AOghbe00.js";import{i as T,n as E,r as D,t as O}from"./Actions-CSN9HE7d.js";var k,A,j;function M(){return(M=e((()=>{ne(),re(),D(),x(),S(),n(),h(),k=class{props;element;naming;components;slots;emits;actions;description;image;label;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{ActionsIncludeConstructor:s=T,DescriptionIncludeConstructor:c=b,ImageIncludeConstructor:l=w,LabelIncludeConstructor:u=C}=o;this.image=new l(n,e,r,void 0,a),this.description=new c(e,n,i),this.label=new u(e,n,void 0,i),this.actions=new s(n,e,r,()=>({align:`center`}),void 0,a)}get binds(){let e={};return this.label.is&&Object.assign(e,y.labelledby(this.label.id)),this.description.is&&Object.assign(e,y.describedby(this.description.id)),e}},A={},j=class extends d{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{},image:this.naming.getSubClass(`image`),label:this.naming.getSubClass(`label`),description:this.naming.getSubClass(`description`),actions:this.naming.getSubClass(`actions`)}}initStyles(){return{}}initRender(){let e=[...this.renderBodyImage(),...this.item.label.render(),...this.item.description.render()];return this.initSlot(`context`,e),e.push(...this.item.actions.render()),l(`div`,{...this.getAttrs(),class:this.classes?.value.main,...this.item.binds},e)}renderBodyImage=()=>this.item.image.is?[l(`div`,this.getKeyClass(`image`),this.item.image.render())]:[]}})))()}var N,P;function F(){return(F=e((()=>{M(),N={size:[`sm`,`md`,`lg`]},P={...A,size:`md`}})))()}var I;function L(){return(L=e((()=>{n(),h(),M(),ie(),E(),F(),I=o({name:`D1Placeholder`,__name:`D1Placeholder`,props:a({image:{},imageAttrs:{},label:{},labelId:{},description:{},descriptionId:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},size:{}},P),emits:[`load`,`actions`,`actionsLite`],setup(e,{expose:t,emit:n}){let a=n,o=e,l=c(()=>({main:{"d1-placeholder":!0,[`d1-placeholder--size--${o.size}`]:r(N.size,o.size)}})),d=c(()=>({})),f=new j(`d1.placeholder`,o,{emits:a,classes:l,styles:d,components:{image:ae,actions:O}}),p=f.render();return t(f.expose()),(e,t)=>(s(),i(u(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Placeholder`,exportName:`default`,displayName:`D1Placeholder`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Placeholder/D1Placeholder.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{te(),F(),B=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],V=[{name:`context`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded / Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],U={component:`Placeholder`,props:B,slots:V,events:H,defaults:P,wikiDesign:g}})))()}var G;function K(){return(K=e((()=>{ee(),v(),W(),G=new p(U.component,U.props,U.defaults,U.wikiDesign,f,_)})))()}var q=t({Placeholder:()=>Y,PlaceholderBasic:()=>X,PlaceholderSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),v(),J={title:`Ui/Placeholder`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1Placeholder:R},setup(){return{image1:m}},template:`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Placeholder:R},setup(){return{image1:m}},template:`
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
    `})},Q=[`Placeholder`,`PlaceholderBasic`,`PlaceholderSlots`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,Z as i,Y as n,G as o,X as r,K as s,q as t};