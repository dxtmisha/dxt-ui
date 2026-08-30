import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,dt as u,in as d,kt as f,sn as p}from"./library-CO1fW2cN.js";import{E as m,d as h,f as g,i as _,l as v,n as y,t as ee,u as te,w as b}from"./wiki-BMj2WokS.js";import{n as ne,t as re}from"./DescriptionInclude-Bmc9HWp6-BIU41MmJ.js";import{n as ie,t as ae}from"./LabelInclude-DGpRRhTL-D4-73OEc.js";import{n as oe,t as x}from"./IconInclude-DOrGJ-yE-B9_pLsLQ.js";import{n as S,t as C}from"./TextInclude-D_yP3zRO-BEkUONuC.js";import{n as w,t as T}from"./Window-D1-LrCFm.js";import{n as E,t as D}from"./Actions-CS3-upu5.js";import{n as se,t as ce}from"./Bars-BIPA-mKb.js";import{n as le,r as ue,t as de}from"./ModalDesignAbstract-C_GxStS--rqJNqSk2.js";import{a as fe,n as pe}from"./WindowClassesInclude-D0NaexZU-BUlcTsET.js";import{n as me,t as O}from"./Icon-CGw5cc8T.js";var k,A,j;function M(){return(M=e((()=>{C(),pe(),re(),ae(),le(),oe(),f(),m(),c(),k=class extends de{constructor(e,t,n,i,a,o,s,c,l={}){let{DescriptionIncludeConstructor:u=ne,IconIncludeConstructor:d=x,LabelIncludeConstructor:f=ie,TextIncludeConstructor:p=S,WindowClassesIncludeConstructor:m=fe}=l;super(e,t,n,i,a,o,s,c,()=>({image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:e.closeButton}),void 0,()=>this.extraActions,l),r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`icon`,void 0),r(this,`label`,void 0),r(this,`description`,void 0),r(this,`windowClasses`,void 0),r(this,`text`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c,this.icon=new d(()=>({icon:this.iconValue}),a,o,()=>e.iconAttrs),this.label=new f(e,a,void 0,s,void 0,void 0,!0),this.description=new u(e,a,s),this.windowClasses=new m(i),this.text=new p(e)}get iconValue(){return this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon}get extraActions(){let e=[];return this.props.buttonClose!==null&&e.push(b(this.props.buttonClose,{label:this.text.close,value:`close`,class:this.windowClasses.get().close,onClick:()=>this.emits?.call(this,`close`)},`label`,!0)),this.props.buttonOk!==null&&e.push(b(this.props.buttonOk,{label:this.text.ok,value:`ok`,class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>this.emits?.call(this,`ok`)},`label`,!0)),{list:e,align:`center`}}},A={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:`top`},j=class extends ue{constructor(...e){super(...e),r(this,`renderContent`,e=>[...this.renderInformation(),...this.renderDefault(e)]),r(this,`renderInformation`,()=>[o(`div`,{class:this.classes?.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])])}initItem(){return new k(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),information:this.getSubClass(`information`),icon:this.getSubClass(`icon`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},{...this.getAttrs(),class:this.classes?.value.main})}}})))()}var N,P;function F(){return(F=e((()=>{M(),N={imagePosition:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`],width:[`sm`,`md`,`lg`,`auto`]},P={...A,buttonClose:{outline:!0},iconSuccess:`check_circle`,iconError:`error`,iconAttrs:{size:`4xl`},imagePosition:`top`,width:`sm`}})))()}var I;function L(){return(L=e((()=>{f(),m(),M(),w(),se(),E(),me(),F(),I=i({name:`D1Dialog`,__name:`D1Dialog`,props:n({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},imageAttrs:{},label:{},labelId:{},description:{},descriptionId:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},success:{type:Boolean},error:{type:Boolean},imagePosition:{},width:{}},P),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`update:open`,`update:modelOpen`,`ok`,`close`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-dialog":!0,"d1-dialog--success":i.success,"d1-dialog--error":i.error,[`d1-dialog--imagePosition--${i.imagePosition}`]:u(N.imagePosition,i.imagePosition),[`d1-dialog--width--${i.width}`]:u(N.width,i.width)}})),c=s(()=>({})),d=new j(`d1.dialog`,i,{emits:r,classes:o,styles:c,components:{window:T,bars:ce,actions:D,icon:O}}),f=d.render();return t(d.expose()),(e,t)=>(a(),l(p(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Dialog`,exportName:`default`,displayName:`D1Dialog`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{ee(),F(),B=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<BarsProps>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`ConstrBind<ButtonProps>[]`},{name:`buttonClose`,type:`string | ConstrBind<ButtonProps> | null`},{name:`buttonOk`,type:`string | ConstrBind<ButtonProps> | null`},{name:`clickOkAndClose`,type:`boolean`},{name:`closeButton`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`error`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconError`,type:`IconValue<IconProps>`},{name:`iconSuccess`,type:`IconValue<IconProps>`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`]},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`success`,type:`boolean`},{name:`textClose`,type:`TextValue`},{name:`textOk`,type:`TextValue`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps>`}],V=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],H=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for clicking the close button/ Событие клика на кнопку закрытия`},{name:`ok`,description:`Event for clicking the OK button/ Событие клика на кнопку подтверждения`},{name:`update:modelOpen`,description:`Update model open event/ Событие обновления открытия модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:open`,description:`Update open event/ Событие обновления открытия`,properties:[{name:`value`,type:`boolean`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],U={component:`Dialog`,props:B,slots:V,events:H,defaults:P,wikiDesign:y}})))()}var G;function K(){return(K=e((()=>{h(),v(),W(),G=new te(U.component,U.props,U.defaults,U.wikiDesign,_,g)})))()}var he=t({Dialog:()=>J,DialogAllSlots:()=>Z,DialogStates:()=>Y,DialogVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),f(),q={title:`Ui/Dialog`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Dialog:R},setup:()=>({args:e}),template:`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `})},Y={name:`Состояния успеха и ошибки`,render:()=>({components:{D1Dialog:R},setup(){return{openSuccess:d(!1),openError:d(!1)}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Dialog:R},setup(){return{open:d(!1)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1Dialog
            v-model:open="open"
            label="Confirmation"
            description="Are you sure you want to proceed with this action?"
          />
        </div>
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1Dialog:R},template:`
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1Dialog
            v-model:open="open"
            label="Confirmation"
            description="Are you sure you want to proceed with this action?"
          />
        </div>
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
}`,...Z.parameters?.docs?.source}}},Q=[`Dialog`,`DialogStates`,`DialogVModel`,`DialogAllSlots`]})))()}export{X as a,K as c,Y as i,J as n,$ as o,Z as r,G as s,he as t};