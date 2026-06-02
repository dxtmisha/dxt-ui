import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,D as i,Dt as a,Ft as o,Mt as s,Nt as c,Xt as l,h as u,kt as d,m as f,qt as p}from"./iframe-53vFWNoU.js";import{t as m}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as h,f as g,l as _,n as v,o as y,p as b,t as x,u as S}from"./wiki-DwIxUKqL.js";import{c as C,s as ee}from"./D1Icon-D5nVRATx.js";import{n as te,t as ne}from"./DescriptionInclude-BCRkJx2Z-CZ16TXzV.js";import{n as re,t as ie}from"./LabelInclude-n3o9w4AW-Bh_paJM4.js";import{n as ae,t as oe}from"./TextInclude-DlJA8b8Y-D4fD3kYc.js";import{n as se,r as ce,t as le}from"./ModalDesignAbstract-CZcvOdUO-DcE8b9DB.js";import{a as ue,n as de}from"./WindowClassesInclude-D6l33JB3-Ds1g8cfI.js";import{n as fe,t as pe}from"./Window-DdiERalU.js";import{n as me,t as w}from"./Bars-pzKhmONj.js";import{n as T,t as E}from"./Actions-pRy5R3ic.js";import{n as D,t as O}from"./Icon-pfHanFeD.js";var k,A,j,M=t((()=>{g(),ae(),de(),ne(),ie(),se(),ee(),a(),f(),k=class extends le{constructor(e,t,n,r,i,a,o,s,c={}){let{DescriptionIncludeConstructor:l=te,IconIncludeConstructor:u=C,LabelIncludeConstructor:d=re,TextIncludeConstructor:f=oe,WindowClassesIncludeConstructor:p=ue}=c;super(e,t,n,r,i,a,o,s,()=>({image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:e.closeButton}),void 0,()=>this.extraActions,c),b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`element`,void 0),b(this,`classDesign`,void 0),b(this,`className`,void 0),b(this,`components`,void 0),b(this,`slots`,void 0),b(this,`emits`,void 0),b(this,`icon`,void 0),b(this,`label`,void 0),b(this,`description`,void 0),b(this,`windowClasses`,void 0),b(this,`text`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.icon=new u(()=>({icon:this.iconValue}),i,a,()=>e.iconAttrs),this.label=new d(e,i,void 0,o,void 0,void 0,!0),this.description=new l(e,i,o),this.windowClasses=new p(r),this.text=new f(e)}get iconValue(){return this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon}get extraActions(){let e=[];return this.props.buttonClose!==null&&e.push(u(this.props.buttonClose,{label:this.text.close,value:`close`,class:this.windowClasses.get().close,onClick:()=>this.emits?.call(this,`close`)},`label`,!0)),this.props.buttonOk!==null&&e.push(u(this.props.buttonOk,{label:this.text.ok,value:`ok`,class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>this.emits?.call(this,`ok`)},`label`,!0)),{list:e,align:`center`}}},A={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:`top`},j=class extends ce{constructor(...e){super(...e),b(this,`renderContent`,e=>[...this.renderInformation(),...this.renderDefault(e)]),b(this,`renderInformation`,()=>[c(`div`,{class:this.classes?.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])])}initItem(){return new k(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),information:this.getSubClass(`information`),icon:this.getSubClass(`icon`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},{...this.getAttrs(),class:this.classes?.value.main})}}})),N,P,F=t((()=>{M(),N={imagePosition:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`],width:[`sm`,`md`,`lg`,`auto`]},P={...A,buttonClose:{outline:!0},iconSuccess:`check_circle`,iconError:`error`,iconAttrs:{size:`4xl`},imagePosition:`top`,width:`sm`}})),I=t((()=>{})),L,R=t((()=>{a(),f(),M(),fe(),me(),T(),D(),F(),I(),L=s({name:`D1Dialog`,__name:`D1Dialog`,props:o({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},imageAttrs:{},label:{},labelId:{},description:{},descriptionId:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},success:{type:Boolean},error:{type:Boolean},imagePosition:{},width:{}},P),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`update:open`,`update:modelOpen`,`ok`,`close`],setup(e,{expose:t,emit:a}){let o=a,s=e,c=new j(`d1.dialog`,s,{emits:o,classes:d(()=>({main:{"d1-dialog":!0,"d1-dialog--success":s.success,"d1-dialog--error":s.error,[`d1-dialog--imagePosition--${s.imagePosition}`]:i(N.imagePosition,s.imagePosition),[`d1-dialog--width--${s.width}`]:i(N.width,s.width)}})),styles:d(()=>({})),components:{window:pe,bars:w,actions:E,icon:O}}),u=c.render();return t(c.expose()),(e,t)=>(r(),n(l(u)))}})})),z,he=t((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Dialog`,exportName:`default`,displayName:`D1Dialog`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue`]})})),B,V,H,U,ge=t((()=>{x(),F(),B=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<BarsProps>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`ConstrBind<ButtonProps>[]`},{name:`buttonClose`,type:`string | ConstrBind<ButtonProps> | null`},{name:`buttonOk`,type:`string | ConstrBind<ButtonProps> | null`},{name:`clickOkAndClose`,type:`boolean`},{name:`closeButton`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`error`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconError`,type:`IconValue<IconProps>`},{name:`iconSuccess`,type:`IconValue<IconProps>`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`]},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`success`,type:`boolean`},{name:`textClose`,type:`TextValue`},{name:`textOk`,type:`TextValue`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps>`}],V=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],H=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for clicking the close button/ Событие клика на кнопку закрытия`},{name:`ok`,description:`Event for clicking the OK button/ Событие клика на кнопку подтверждения`},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],U={component:`Dialog`,props:B,slots:V,events:H,defaults:P,wikiDesign:v}})),W,G=t((()=>{h(),y(),ge(),W=new S(U.component,U.props,U.defaults,U.wikiDesign,_,m)})),K=e({Dialog:()=>J,DialogAllSlots:()=>Z,DialogStates:()=>Y,DialogVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=t((()=>{he(),G(),a(),q={title:`Ui/Dialog`,component:z,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1Dialog:z},setup:()=>({args:e}),template:`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `})},Y={name:`Состояния успеха и ошибки`,render:()=>({components:{D1Dialog:z},setup(){return{openSuccess:p(!1),openError:p(!1)}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Dialog:z},setup(){return{open:p(!1)}},template:`
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
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1Dialog:z},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Dialog`,`DialogStates`,`DialogVModel`,`DialogAllSlots`]}));$();export{J as Dialog,Z as DialogAllSlots,Y as DialogStates,X as DialogVModel,Q as __namedExportsOrder,q as default,G as i,$ as n,W as r,K as t};