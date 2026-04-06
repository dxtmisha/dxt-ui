import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Ht as n,Lt as r,Rt as i,St as a,_t as o,bt as s,f as c,kt as l,l as u,nt as d,r as f,wt as p,xt as m,yt as h}from"./iframe-DHvUfpTv.js";import{a as g,d as ee,f as te,g as ne,l as _,n as re,p as v,t as ie,u as y}from"./wiki-COBgMBNI.js";import{n as ae,t as b}from"./LabelInclude-DoZ7EUYO-Dp-gb-W1.js";import{n as x,t as S}from"./DescriptionInclude-B_Xf_j3l-D_XEcXi-.js";import{n as C,t as w}from"./IconInclude-BhzGfa3o-Ct0xnmbL.js";import{n as T,t as E}from"./TextInclude-OwyVCAbS--R0mFFER.js";import{i as D,n as oe,t as se}from"./ModalDesignAbstract-BaVdtb1N-oFRuX-d3.js";import{n as ce,t as le}from"./Icon-Bi6-zMfS.js";import{a as ue,n as de}from"./WindowClassesInclude-zm-ITw5d-DyPqbSXm.js";import{n as fe,t as pe}from"./Window-D2L66HTt.js";import{n as me,t as he}from"./Bars-CVztsf_Z.js";import{n as O,t as k}from"./Actions-C25dRrXB.js";var A,j,M,N=e((()=>{te(),T(),b(),x(),de(),oe(),w(),o(),c(),A=class extends se{constructor(e,t,n,i,a,o,s,c,l){let{DescriptionIncludeConstructor:d=S,IconIncludeConstructor:f=C,LabelIncludeConstructor:p=ae,TextIncludeConstructor:m=E,WindowClassesIncludeConstructor:g=ue}=l??{};super(e,t,n,i,a,o,s,c,h(()=>({open:e.open,image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:this.props.closeButton})),void 0,h(()=>{let t=[];return e.buttonClose!==null&&t.push(u(e.buttonClose,{label:this.text.close.value,value:`close`,class:this.windowClasses.get().close,onClick:()=>this.emits?.call(this,`close`)},`label`,!0)),e.buttonOk!==null&&t.push(u(e.buttonOk,{label:this.text.ok.value,value:`ok`,class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>this.emits?.call(this,`ok`)},`label`,!0)),{list:t,align:`center`}}),l),v(this,`icon`,void 0),v(this,`label`,void 0),v(this,`description`,void 0),v(this,`windowClasses`,void 0),v(this,`text`,void 0),v(this,`iconValue`,h(()=>this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon)),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c,this.icon=new f(r({icon:this.iconValue}),a,o,t.iconAttrs),this.label=new p(e,a,void 0,s,void 0,void 0,!0),this.description=new d(e,a,s),this.windowClasses=new g(i),this.text=new m(this.props)}},j={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:`top`},M=class extends D{constructor(...e){super(...e),v(this,`renderContent`,e=>[...this.renderInformation(),...this.renderDefault(e)]),v(this,`renderInformation`,()=>[a(`div`,{class:this.classes?.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])])}initItem(){return new A(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),information:this.getSubClass(`information`),icon:this.getSubClass(`icon`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},f({class:this.classes?.value.main,"data-touch":`touch`},this.getAttrs()))}}})),P,F,I=e((()=>{N(),P={imagePosition:[`top`,`left`],width:[`sm`,`md`,`lg`,`auto`]},F={...j,buttonClose:{outline:!0},imagePosition:`top`,width:`md`}})),L=e((()=>{})),R,z=e((()=>{o(),c(),N(),fe(),me(),O(),ce(),I(),L(),R=m({name:`D1Dialog`,__name:`D1Dialog`,props:p({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},label:{},labelId:{},description:{},descriptionId:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},success:{type:Boolean},error:{type:Boolean},imagePosition:{},width:{}},F),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`ok`,`close`],setup(e,{expose:t,emit:r}){let i=r,a=e,o=new M(`d1.dialog`,a,{emits:i,classes:h(()=>({main:{"d1-dialog":!0,"d1-dialog--success":a.success,"d1-dialog--error":a.error,[`d1-dialog--imagePosition--${a.imagePosition}`]:d(P.imagePosition,a.imagePosition),[`d1-dialog--width--${a.width}`]:d(P.width,a.width)}})),styles:h(()=>({})),components:{window:pe,bars:he,actions:k,icon:le}}),c=o.render();return t(o.expose()),(e,t)=>(l(),s(n(c)))}})})),B,ge=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Dialog`,exportName:`default`,displayName:`D1Dialog`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue`]})})),V,H,U,W,_e=e((()=>{y(),ie(),I(),V=[{name:`actionsAttrs`,type:`ConstrBind<ActionsPropsBasic>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`ConstrBind<ConstrBind<ButtonPropsBasic>[]>`},{name:`actionsSecondary`,type:`ConstrBind<ConstrBind<ButtonPropsBasic>[]>`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<BarsPropsBasic>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`ConstrBind<ButtonPropsBasic>[]`},{name:`buttonClose`,type:`string | ConstrBind<ButtonPropsBasic>`},{name:`buttonOk`,type:`string | ConstrBind<ButtonPropsBasic>`},{name:`clickOkAndClose`,type:`boolean`},{name:`closeButton`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`error`,type:`boolean`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconError`,type:`IconValue<IconPropsBasic>`},{name:`iconSuccess`,type:`IconValue<IconPropsBasic>`},{name:`image`,type:`string | ConstrBind<ImagePropsBasic>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`]},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`success`,type:`boolean`},{name:`textClose`,type:`TextValue`},{name:`textOk`,type:`TextValue`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowPropsBasic>`}],H=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`description`,description:`Description slot/ Слот описания`},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`WindowControlItem`}]}],U=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for clicking the close button/ Событие клика на кнопку закрытия`},{name:`ok`,description:`Event for clicking the OK button/ Событие клика на кнопку подтверждения`},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],W={component:`Dialog`,props:V,slots:H,events:U,defaults:F,wikiDesign:re}})),G,K=e((()=>{y(),g(),_e(),G=new ee(W.component,W.props,W.defaults,W.wikiDesign,_,ne)})),ve=t({Dialog:()=>J,DialogAllSlots:()=>Z,DialogStates:()=>Y,DialogVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{ge(),K(),o(),q={title:`Ui/Dialog`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Dialog:B},setup:()=>({args:e}),template:`
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