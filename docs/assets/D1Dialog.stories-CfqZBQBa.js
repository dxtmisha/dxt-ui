import{n as e,r as t}from"./chunk-BneVvdWh.js";import{F as n,It as r,Lt as i,St as a,Vt as o,_t as s,bt as c,c as l,h as u,kt as d,u as f,wt as p,xt as m,yt as h}from"./iframe-I1fckF_t.js";import{a as g,d as ee,f as te,g as ne,l as re,n as ie,p as _,t as ae,u as v}from"./wiki-CMC-2lzg.js";import{n as oe,t as y}from"./LabelInclude-BJc8uC4Y-FTl9hNq7.js";import{n as b,t as x}from"./DescriptionInclude--_NvJ6ka-Dgf9WcGz.js";import{n as S,t as C}from"./IconInclude-Bex3cqNy-aQw90uMB.js";import{n as w,t as T}from"./TextInclude-BIa1AeDQ-BjSuPwZ1.js";import{i as E,n as se,o as ce,r as le,t as ue}from"./Actions-CxWHC0NA.js";import{a as de,n as fe}from"./WindowClassesInclude-C8R8pgeo-a67du_cn.js";import{n as pe,t as me}from"./Window-re3haz5v.js";import{n as he,t as D}from"./Bars-LNQkT_sd.js";import{n as O,t as k}from"./Icon-ClTi_ZVe.js";var A,j,M,N=e((()=>{te(),w(),fe(),y(),b(),E(),C(),s(),f(),A=class extends le{constructor(e,t,n,i,a,o,s,c,u){let{DescriptionIncludeConstructor:d=x,IconIncludeConstructor:f=S,LabelIncludeConstructor:p=oe,TextIncludeConstructor:m=T,WindowClassesIncludeConstructor:g=de}=u??{};super(e,t,n,i,a,o,s,c,h(()=>({open:e.open,image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:this.props.closeButton})),void 0,h(()=>{let t=[];return e.buttonClose!==null&&t.push(l(e.buttonClose,{label:this.text.close.value,value:`close`,class:this.windowClasses.get().close,onClick:()=>this.emits?.call(this,`close`)},`label`,!0)),e.buttonOk!==null&&t.push(l(e.buttonOk,{label:this.text.ok.value,value:`ok`,class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>this.emits?.call(this,`ok`)},`label`,!0)),{list:t,align:`center`}})),_(this,`icon`,void 0),_(this,`label`,void 0),_(this,`description`,void 0),_(this,`windowClasses`,void 0),_(this,`text`,void 0),_(this,`iconValue`,h(()=>this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon)),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c,this.icon=new f(r({icon:this.iconValue}),a,o,t.iconAttrs),this.label=new p(e,a,void 0,s,void 0,void 0,!0),this.description=new d(e,a,s),this.windowClasses=new g(i),this.text=new m(this.props)}},j={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:`top`},M=class extends ce{constructor(...e){super(...e),_(this,`renderContent`,e=>[...this.renderInformation(),...this.renderDefault(e)]),_(this,`renderInformation`,()=>[a(`div`,{class:this.classes?.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])])}initItem(){return new A(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),information:this.getSubClass(`information`),icon:this.getSubClass(`icon`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},u({class:this.classes?.value.main,"data-touch":`touch`},this.getAttrs()))}}})),P,F,I=e((()=>{N(),P={imagePosition:[`top`,`left`],width:[`sm`,`md`,`lg`,`auto`]},F={...j,buttonClose:{outline:!0},iconSuccess:`check_circle`,iconError:`error`,iconAttrs:{size:`3xl`},imagePosition:`top`,width:`md`}})),L=e((()=>{})),R,z=e((()=>{s(),f(),N(),pe(),he(),se(),O(),I(),L(),R=m({name:`D1Dialog`,__name:`D1Dialog`,props:p({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},label:{},labelId:{},description:{},descriptionId:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},success:{type:Boolean},error:{type:Boolean},imagePosition:{},width:{}},F),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`ok`,`close`],setup(e,{expose:t,emit:r}){let i=r,a=e,s=new M(`d1.dialog`,a,{emits:i,classes:h(()=>({main:{"d1-dialog":!0,"d1-dialog--success":a.success,"d1-dialog--error":a.error,[`d1-dialog--imagePosition--${a.imagePosition}`]:n(P.imagePosition,a.imagePosition),[`d1-dialog--width--${a.width}`]:n(P.width,a.width)}})),styles:h(()=>({})),components:{window:me,bars:D,actions:ue,icon:k}}),l=s.render();return t(s.expose()),(e,t)=>(d(),c(o(l)))}})})),B,ge=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Dialog`,exportName:`default`,displayName:`D1Dialog`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue`]})})),V,H,U,W,_e=e((()=>{v(),ae(),I(),V=[{name:`actionsAttrs`,type:`ConstrBind<Actions>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`ConstrBind<Actions['list']>`},{name:`actionsSecondary`,type:`ConstrBind<Actions['listSecondary']>`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<Bars>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`Bars['bars']`},{name:`buttonClose`,type:`string | ConstrBind<Button> | null`},{name:`buttonOk`,type:`string | ConstrBind<Button> | null`},{name:`clickOkAndClose`,type:`boolean`},{name:`closeButton`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`error`,type:`boolean`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconError`,type:`IconValue<Icon>`},{name:`iconSuccess`,type:`IconValue<Icon>`},{name:`image`,type:`string | ConstrBind<Image>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`]},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`success`,type:`boolean`},{name:`textClose`,type:`TextValue`},{name:`textOk`,type:`TextValue`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<Window>`}],H=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`description`,description:`Description slot/ Слот описания`},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`header`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`WindowControlItem`}]}],U=[{name:`actions`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`actionsLite`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`barsBack`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`},{name:`ok`},{name:`window`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],W={component:`Dialog`,props:V,slots:H,events:U,defaults:F,wikiDesign:ie}})),G,K=e((()=>{v(),g(),_e(),G=new ee(W.component,W.props,W.defaults,W.wikiDesign,re,ne)})),ve=t({Dialog:()=>J,DialogAllSlots:()=>Z,DialogStates:()=>Y,DialogVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{ge(),K(),s(),q={title:`Ui/Dialog`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Dialog:B},setup:()=>({args:e}),template:`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `})},Y={name:`Состояния успеха и ошибки`,render:()=>({components:{D1Dialog:B},setup(){return{openSuccess:i(!1),openError:i(!1)}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Dialog:B},setup(){return{open:i(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Dialog
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        />
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1Dialog:B},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Dialog`,`DialogStates`,`DialogVModel`,`DialogAllSlots`]}));$();export{J as Dialog,Z as DialogAllSlots,Y as DialogStates,X as DialogVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,ve as t};