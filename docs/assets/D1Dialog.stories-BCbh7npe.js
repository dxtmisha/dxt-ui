import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,Ft as i,It as a,Ot as o,bt as s,c,gt as l,h as u,st as d,u as f,vt as p,xt as m,yt as h}from"./iframe-InwAcaLb.js";import{a as g,d as ee,l as te,m as ne,n as _,t as v,u as y}from"./wiki-DiKtF90Q.js";import{n as b,t as x}from"./LabelInclude-D-mLvjK5-DIhPuV9X.js";import{n as S,t as C}from"./DescriptionInclude-D4ane9aR-CsdAjI0e.js";import{n as w,t as T}from"./IconInclude-CLqwI29Q-CXO5kSGU.js";import{n as E,t as D}from"./TextInclude--GERRCGj-DQWKO19n.js";import{a as O,i as re,n as ie,r as ae,t as oe}from"./Actions-DKLl3KIK.js";import{a as se,n as ce}from"./WindowClassesInclude-B56usxgx-BCtUaQDp.js";import{n as le,t as ue}from"./Window-CJ_ziFCb.js";import{n as de,t as fe}from"./Bars-Lbp-4giz.js";import{n as pe,t as k}from"./Icon-Bi9xfi8S.js";var A,j,M,N,P,F,I=e((()=>{l(),f(),x(),C(),E(),O(),ce(),w(),A=Object.defineProperty,j=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t,n)=>j(e,typeof t==`symbol`?t:t+``,n),N=class extends ae{constructor(e,t,n,r,a,o,s,l,u){let{DescriptionIncludeConstructor:d=S,IconIncludeConstructor:f=T,LabelIncludeConstructor:m=b,TextIncludeConstructor:h=D,WindowClassesIncludeConstructor:g=se}=u??{};super(e,t,n,r,a,o,s,l,p(()=>({open:e.open,image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:this.props.closeButton})),void 0,p(()=>{let t=[];return e.buttonClose!==null&&t.push(c(e.buttonClose,{label:this.text.close.value,value:`close`,class:this.windowClasses.get().close,onClick:()=>this.emits?.call(this,`close`)},`label`,!0)),e.buttonOk!==null&&t.push(c(e.buttonOk,{label:this.text.ok.value,value:`ok`,class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>this.emits?.call(this,`ok`)},`label`,!0)),{list:t,align:`center`}})),M(this,`icon`),M(this,`label`),M(this,`description`),M(this,`windowClasses`),M(this,`text`),M(this,`iconValue`,p(()=>this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon)),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=a,this.components=o,this.slots=s,this.emits=l,this.icon=new f(i({icon:this.iconValue}),a,o,t.iconAttrs),this.label=new m(e,a,void 0,s,void 0,void 0,!0),this.description=new d(e,a,s),this.windowClasses=new g(r),this.text=new h(this.props)}},P={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:`top`},F=class extends re{constructor(){super(...arguments),M(this,`renderContent`,e=>[...this.renderInformation(),...this.renderDefault(e)]),M(this,`renderInformation`,()=>[m(`div`,{class:this.classes?.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])])}initItem(){return new N(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),information:this.getSubClass(`information`),icon:this.getSubClass(`icon`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},u({class:this.classes?.value.main,"data-touch":`touch`},this.getAttrs()))}}})),L,R,z=e((()=>{I(),L={imagePosition:[`top`,`left`],width:[`sm`,`md`,`lg`,`auto`]},R={...P,buttonClose:{outline:!0},iconSuccess:`check_circle`,iconError:`error`,iconAttrs:{size:`3xl`},imagePosition:`top`,width:`md`}})),me=e((()=>{})),B,V=e((()=>{l(),f(),I(),le(),de(),ie(),pe(),z(),me(),B=s({name:`D1Dialog`,__name:`D1Dialog`,props:r({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},label:{},labelId:{},description:{},descriptionId:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},success:{type:Boolean},error:{type:Boolean},imagePosition:{},width:{}},R),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`ok`,`close`],setup(e,{expose:t,emit:r}){let i=r,a=e,s=new F(`d1.dialog`,a,{emits:i,classes:p(()=>({main:{"d1-dialog":!0,"d1-dialog--success":a.success,"d1-dialog--error":a.error,[`d1-dialog--imagePosition--${a.imagePosition}`]:d(L.imagePosition,a.imagePosition),[`d1-dialog--width--${a.width}`]:d(L.width,a.width)}})),styles:p(()=>({})),components:{window:ue,bars:fe,actions:oe,icon:k}}),c=s.render();return t(s.expose()),(e,t)=>(o(),h(n(c)))}})})),H,he=e((()=>{V(),V(),H=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{name:`D1Dialog`,exportName:`default`,displayName:`D1Dialog`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue`]})})),U,W,ge=e((()=>{y(),v(),z(),U=[{name:`actionsAttrs`,type:`ConstrBind<Actions>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`ConstrBind<Actions['list']>`},{name:`actionsSecondary`,type:`ConstrBind<Actions['listSecondary']>`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<Bars>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`Bars['bars']`},{name:`buttonClose`,type:`string | ConstrBind<Button> | null`},{name:`buttonOk`,type:`string | ConstrBind<Button> | null`},{name:`clickOkAndClose`,type:`boolean`},{name:`closeButton`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`error`,type:`boolean`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconError`,type:`IconValue<Icon>`},{name:`iconSuccess`,type:`IconValue<Icon>`},{name:`image`,type:`string | ConstrBind<Image>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`]},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`success`,type:`boolean`},{name:`textClose`,type:`TextValue`},{name:`textOk`,type:`TextValue`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<Window>`}],W={component:`Dialog`,props:U,defaults:R,wikiDesign:_}})),G,K=e((()=>{y(),g(),ge(),G=new ee(W.component,W.props,W.defaults,W.wikiDesign,te,ne)})),_e=t({Dialog:()=>J,DialogAllSlots:()=>Z,DialogStates:()=>Y,DialogVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{he(),K(),l(),q={title:`Ui/Dialog`,component:H,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Dialog:H},setup:()=>({args:e}),template:`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `})},Y={name:`Состояния успеха и ошибки`,render:()=>({components:{D1Dialog:H},setup(){return{openSuccess:a(!1),openError:a(!1)}},template:`
        <div class="wiki-storybook-flex">
          <D1Dialog
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Success Dialog</button>
            </template>
          </D1Dialog>

          <D1Dialog
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Error Dialog</button>
            </template>
          </D1Dialog>
        </div>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Dialog:H},setup(){return{open:a(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Dialog
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        />
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1Dialog:H},template:`
        <D1Dialog>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Dialog with All Slots</button>
          </template>

          <template #title>
            Title Slot
          </template>

          <template #label>
            <strong>Label Slot</strong>
          </template>

          <template #description>
            <em>Description Slot</em>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #footer="{classesWindow}">
            Footer Slot
          </template>
        </D1Dialog>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Dialog
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Состояния успеха и ошибки',
  render: () => ({
    components: {
      D1Dialog
    },
    setup() {
      return {
        openSuccess: ref(false),
        openError: ref(false)
      };
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Dialog
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Success Dialog</button>
            </template>
          </D1Dialog>

          <D1Dialog
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Error Dialog</button>
            </template>
          </D1Dialog>
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Dialog
    },
    setup() {
      return {
        open: ref(false)
      };
    },
    template: \`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Dialog
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        />
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: {
      D1Dialog
    },
    template: \`
        <D1Dialog>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Dialog with All Slots</button>
          </template>

          <template #title>
            Title Slot
          </template>

          <template #label>
            <strong>Label Slot</strong>
          </template>

          <template #description>
            <em>Description Slot</em>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #footer="{classesWindow}">
            Footer Slot
          </template>
        </D1Dialog>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Dialog`,`DialogStates`,`DialogVModel`,`DialogAllSlots`]}));$();export{J as Dialog,Z as DialogAllSlots,Y as DialogStates,X as DialogVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,_e as t};