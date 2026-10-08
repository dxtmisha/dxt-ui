import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l,nt as u}from"./library-C6UyfMBX.js";import{D as d,a as f,d as p,f as m,g as ee,i as te,n as ne,s as h,t as g,u as _}from"./wiki-Cqdd-d3l.js";import{n as v,t as re}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as ie,t as y}from"./DescriptionInclude-DdTwZihG-eUzeSMGF.js";import{n as b,t as x}from"./LabelInclude-CWEQPAb8-jdG3a9TG.js";import{n as S,t as ae}from"./ImageInclude-hU1Z946m-CdLR1X4P.js";import{n as C,t as w}from"./Image-J28XS_3L.js";import{i as T,n as E,r as D,t as O}from"./Actions-CnYNxz7t.js";var k,A,j;function M(){return(M=e((()=>{re(),ae(),D(),y(),b(),n(),d(),k=class{props;refs;element;classDesign;className;components;slots;emits;actions;description;image;label;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{ActionsIncludeConstructor:l=T,DescriptionIncludeConstructor:u=ie,ImageIncludeConstructor:d=S,LabelIncludeConstructor:f=x}=c;this.image=new d(i,e,a,void 0,s),this.description=new u(e,i,o),this.label=new f(e,i,void 0,o),this.actions=new l(i,e,a,()=>({align:`center`}),void 0,s)}get binds(){let e={};return this.label.is&&Object.assign(e,v.labelledby(this.label.id)),this.description.is&&Object.assign(e,v.describedby(this.description.id)),e}},A={},j=class extends ee{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},image:this.getSubClass(`image`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),actions:this.getSubClass(`actions`)}}initStyles(){return{}}initRender(){let e=[...this.renderBodyImage(),...this.item.label.render(),...this.item.description.render()];return this.initSlot(`context`,e),e.push(...this.item.actions.render()),a(`div`,{...this.getAttrs(),class:this.classes?.value.main,...this.item.binds},e)}renderBodyImage=()=>this.item.image.is?[a(`div`,this.getKeyClass(`image`),this.item.image.render())]:[]}})))()}var N,P;function F(){return(F=e((()=>{M(),N={size:[`sm`,`md`,`lg`]},P={...A,size:`md`}})))()}var I;function L(){return(L=e((()=>{n(),d(),M(),C(),E(),F(),I=i({name:`D1Placeholder`,__name:`D1Placeholder`,props:o({image:{},imageAttrs:{},label:{},labelId:{},description:{},descriptionId:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},size:{}},P),emits:[`load`,`actions`,`actionsLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-placeholder":!0,[`d1-placeholder--size--${a.size}`]:u(N.size,a.size)}})),d=l(()=>({})),f=new j(`d1.placeholder`,a,{emits:i,classes:o,styles:d,components:{image:w,actions:O}}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Placeholder`,exportName:`default`,displayName:`D1Placeholder`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Placeholder/D1Placeholder.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{g(),F(),B=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],V=[{name:`context`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],U={component:`Placeholder`,props:B,slots:V,events:H,defaults:P,wikiDesign:ne}})))()}var G;function K(){return(K=e((()=>{p(),h(),W(),G=new _(U.component,U.props,U.defaults,U.wikiDesign,te,m)})))()}var q=t({Placeholder:()=>Y,PlaceholderBasic:()=>X,PlaceholderSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),h(),J={title:`Ui/Placeholder`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1Placeholder:R},setup(){return{image1:f}},template:`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Placeholder:R},setup(){return{image1:f}},template:`
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