import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Et as r,Ht as i,Kt as a,Nt as o,Ot as s,P as c,Tt as l,Vt as u,f as d,i as f,l as p,wt as m,xt as h}from"./iframe-yo6yIkeP.js";import{a as g,d as ee,f as te,m as ne,n as _,o as v,p as y,t as b,u as re}from"./wiki-Ck-JDNL8.js";import{n as ie,t as ae}from"./LabelInclude-BeVk9z8H-Batge3rW.js";import{n as x,t as S}from"./DescriptionInclude-CBzY5AM--BR76zIL4.js";import{n as C,t as w}from"./IconInclude-CMgylQlS-DBxncdtk.js";import{n as T,t as E}from"./TextInclude-6E-DvjvX-BsPkq62b.js";import{i as oe,n as se,t as ce}from"./ModalDesignAbstract-C8BVdaPa-Blkhh0ez.js";import{a as le,n as ue}from"./WindowClassesInclude-CnbSXnCx-B23bQA_y.js";import{n as de,t as fe}from"./Window-B1CUCany.js";import{n as pe,t as me}from"./Bars-Dp3Klhbe.js";import{n as he,t as D}from"./Actions-CCIM16nk.js";import{n as O,t as k}from"./Icon-dDGCLV_3.js";var A,j,M,N=e((()=>{te(),T(),ae(),x(),ue(),se(),w(),h(),d(),A=class extends ce{constructor(e,t,r,i,a,o,s,c,l){let{DescriptionIncludeConstructor:d=S,IconIncludeConstructor:p=C,LabelIncludeConstructor:m=ie,TextIncludeConstructor:h=E,WindowClassesIncludeConstructor:g=le}=l??{};super(e,t,r,i,a,o,s,c,n(()=>({open:e.open,image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:this.props.closeButton})),void 0,n(()=>{let t=[];return e.buttonClose!==null&&t.push(f(e.buttonClose,{label:this.text.close.value,value:`close`,class:this.windowClasses.get().close,onClick:()=>this.emits?.call(this,`close`)},`label`,!0)),e.buttonOk!==null&&t.push(f(e.buttonOk,{label:this.text.ok.value,value:`ok`,class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>this.emits?.call(this,`ok`)},`label`,!0)),{list:t,align:`center`}}),l),y(this,`icon`,void 0),y(this,`label`,void 0),y(this,`description`,void 0),y(this,`windowClasses`,void 0),y(this,`text`,void 0),y(this,`iconValue`,n(()=>this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon)),this.props=e,this.refs=t,this.element=r,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c,this.icon=new p(u({icon:this.iconValue}),a,o,t.iconAttrs),this.label=new m(e,a,void 0,s,void 0,void 0,!0),this.description=new d(e,a,s),this.windowClasses=new g(i),this.text=new h(this.props)}},j={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:`top`},M=class extends oe{constructor(...e){super(...e),y(this,`renderContent`,e=>[...this.renderInformation(),...this.renderDefault(e)]),y(this,`renderInformation`,()=>[r(`div`,{class:this.classes?.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])])}initItem(){return new A(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),information:this.getSubClass(`information`),icon:this.getSubClass(`icon`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},p({class:this.classes?.value.main,"data-touch":`touch`},this.getAttrs()))}}})),P,F,I=e((()=>{N(),P={imagePosition:[`top`,`left`],width:[`sm`,`md`,`lg`,`auto`]},F={...j,buttonClose:{outline:!0},imagePosition:`top`,width:`md`}})),L=e((()=>{})),R,z=e((()=>{h(),d(),N(),de(),pe(),he(),O(),I(),L(),R=l({name:`D1Dialog`,__name:`D1Dialog`,props:s({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},label:{},labelId:{},description:{},descriptionId:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},success:{type:Boolean},error:{type:Boolean},imagePosition:{},width:{}},F),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`ok`,`close`],setup(e,{expose:t,emit:r}){let i=r,s=e,l=new M(`d1.dialog`,s,{emits:i,classes:n(()=>({main:{"d1-dialog":!0,"d1-dialog--success":s.success,"d1-dialog--error":s.error,[`d1-dialog--imagePosition--${s.imagePosition}`]:c(P.imagePosition,s.imagePosition),[`d1-dialog--width--${s.width}`]:c(P.width,s.width)}})),styles:n(()=>({})),components:{window:fe,bars:me,actions:D,icon:k}}),u=l.render();return t(l.expose()),(e,t)=>(o(),m(a(u)))}})})),B,ge=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Dialog`,exportName:`default`,displayName:`D1Dialog`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue`]})})),V,H,U,W,_e=e((()=>{b(),I(),V=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps> | undefined`},{name:`actionsHide`,type:`boolean | undefined`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean | undefined`},{name:`barsAttrs`,type:`ConstrBind<BarsProps> | undefined`},{name:`barsBackHide`,type:`boolean | undefined`},{name:`barsDescription`,type:`string | undefined`},{name:`barsHide`,type:`boolean | undefined`},{name:`barsLabel`,type:`string | number | undefined`},{name:`barsList`,type:`ConstrBind<ButtonProps>[] | undefined`},{name:`buttonClose`,type:`string | ConstrBind<ButtonProps> | null | undefined`},{name:`buttonOk`,type:`string | ConstrBind<ButtonProps> | null | undefined`},{name:`clickOkAndClose`,type:`boolean | undefined`},{name:`closeButton`,type:`boolean | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`error`,type:`boolean | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconError`,type:`IconValue<IconProps> | undefined`},{name:`iconSuccess`,type:`IconValue<IconProps> | undefined`},{name:`image`,type:`string | ConstrBind<ImageProps> | undefined`},{name:`imagePosition`,type:`string | undefined`,option:[`top`,`left`]},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`open`,type:`boolean | undefined`},{name:`success`,type:`boolean | undefined`},{name:`textClose`,type:`TextValue`},{name:`textOk`,type:`TextValue`},{name:`width`,type:`string | undefined`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps> | undefined`}],H=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],U=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for clicking the close button/ Событие клика на кнопку закрытия`},{name:`ok`,description:`Event for clicking the OK button/ Событие клика на кнопку подтверждения`},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],W={component:`Dialog`,props:V,slots:H,events:U,defaults:F,wikiDesign:_}})),G,K=e((()=>{ee(),v(),_e(),G=new re(W.component,W.props,W.defaults,W.wikiDesign,g,ne)})),ve=t({Dialog:()=>J,DialogAllSlots:()=>Z,DialogStates:()=>Y,DialogVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{ge(),K(),h(),q={title:`Ui/Dialog`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Dialog:B},setup:()=>({args:e}),template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Dialog`,`DialogStates`,`DialogVModel`,`DialogAllSlots`]}));$();export{J as Dialog,Z as DialogAllSlots,Y as DialogStates,X as DialogVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,ve as t};