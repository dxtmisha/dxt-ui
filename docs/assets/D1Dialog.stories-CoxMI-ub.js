import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{O as n,P as r,a as i,c as a,d as o,g as s,i as c,k as l,s as u,t as d}from"./vue.esm-bundler-KrdxwWaE.js";import{P as f,d as p,f as m,u as h}from"./iframe-UEhCQgdF.js";import{t as g}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as ee,d as te,f as ne,n as re,o as _,p as v,t as y,u as b}from"./wiki-YLJtDFp2.js";import{c as x,s as S}from"./D1Icon-CzMiB96A.js";import{n as C,t as w}from"./LabelInclude-ldz8tYWt-BZ4Tb4HI.js";import{n as T,t as ie}from"./DescriptionInclude-CKMq3Xdu-saQPyyr9.js";import{n as ae,t as oe}from"./TextInclude-DAHxDKmO-B24MLVNy.js";import{i as se,n as ce,t as le}from"./ModalDesignAbstract-mUlQo6qN-B1XKLQln.js";import{a as ue,n as de}from"./WindowClassesInclude-cq0gvMOB-CHHC9n3T.js";import{n as fe,t as pe}from"./Window-BZqc26Av.js";import{n as me,t as he}from"./Bars-CDpENWJ0.js";import{n as ge,t as E}from"./Actions-yLVz8XVL.js";import{n as D,t as O}from"./Icon-CciX-yQA.js";var k,A,j,M=e((()=>{ne(),ae(),w(),T(),de(),ce(),S(),d(),m(),k=class extends le{constructor(e,t,r,i,a,o,s,l,u){let{DescriptionIncludeConstructor:d=ie,IconIncludeConstructor:f=x,LabelIncludeConstructor:m=C,TextIncludeConstructor:h=oe,WindowClassesIncludeConstructor:g=ue}=u??{};super(e,t,r,i,a,o,s,l,c(()=>({open:e.open,image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:this.props.closeButton})),void 0,c(()=>{let t=[];return e.buttonClose!==null&&t.push(p(e.buttonClose,{label:this.text.close.value,value:`close`,class:this.windowClasses.get().close,onClick:()=>this.emits?.call(this,`close`)},`label`,!0)),e.buttonOk!==null&&t.push(p(e.buttonOk,{label:this.text.ok.value,value:`ok`,class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>this.emits?.call(this,`ok`)},`label`,!0)),{list:t,align:`center`}}),u),v(this,`icon`,void 0),v(this,`label`,void 0),v(this,`description`,void 0),v(this,`windowClasses`,void 0),v(this,`text`,void 0),v(this,`iconValue`,c(()=>this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon)),this.props=e,this.refs=t,this.element=r,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=l,this.icon=new f(n({icon:this.iconValue}),a,o,t.iconAttrs),this.label=new m(e,a,void 0,s,void 0,void 0,!0),this.description=new d(e,a,s),this.windowClasses=new g(i),this.text=new h(this.props)}},A={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:`top`},j=class extends se{constructor(...e){super(...e),v(this,`renderContent`,e=>[...this.renderInformation(),...this.renderDefault(e)]),v(this,`renderInformation`,()=>[a(`div`,{class:this.classes?.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])])}initItem(){return new k(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),information:this.getSubClass(`information`),icon:this.getSubClass(`icon`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},h({class:this.classes?.value.main,"data-touch":`touch`},this.getAttrs()))}}})),N,P,F=e((()=>{M(),N={imagePosition:[`top`,`left`],width:[`sm`,`md`,`lg`,`auto`]},P={...A,buttonClose:{outline:!0},imagePosition:`top`,width:`md`}})),I=e((()=>{})),L,R=e((()=>{d(),m(),M(),fe(),me(),ge(),D(),F(),I(),L=u({name:`D1Dialog`,__name:`D1Dialog`,props:o({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},label:{},labelId:{},description:{},descriptionId:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},success:{type:Boolean},error:{type:Boolean},imagePosition:{},width:{}},P),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`ok`,`close`],setup(e,{expose:t,emit:n}){let a=n,o=e,l=new j(`d1.dialog`,o,{emits:a,classes:c(()=>({main:{"d1-dialog":!0,"d1-dialog--success":o.success,"d1-dialog--error":o.error,[`d1-dialog--imagePosition--${o.imagePosition}`]:f(N.imagePosition,o.imagePosition),[`d1-dialog--width--${o.width}`]:f(N.width,o.width)}})),styles:c(()=>({})),components:{window:pe,bars:he,actions:E,icon:O}}),u=l.render();return t(l.expose()),(e,t)=>(s(),i(r(u)))}})})),z,_e=e((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Dialog`,exportName:`default`,displayName:`D1Dialog`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue`]})})),B,V,H,U,W=e((()=>{y(),F(),B=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps> | undefined`},{name:`actionsHide`,type:`boolean | undefined`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean | undefined`},{name:`barsAttrs`,type:`ConstrBind<BarsProps> | undefined`},{name:`barsBackHide`,type:`boolean | undefined`},{name:`barsDescription`,type:`string | undefined`},{name:`barsHide`,type:`boolean | undefined`},{name:`barsLabel`,type:`string | number | undefined`},{name:`barsList`,type:`ConstrBind<ButtonProps>[] | undefined`},{name:`buttonClose`,type:`string | ConstrBind<ButtonProps> | null | undefined`},{name:`buttonOk`,type:`string | ConstrBind<ButtonProps> | null | undefined`},{name:`clickOkAndClose`,type:`boolean | undefined`},{name:`closeButton`,type:`boolean | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`error`,type:`boolean | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconError`,type:`IconValue<IconProps> | undefined`},{name:`iconSuccess`,type:`IconValue<IconProps> | undefined`},{name:`image`,type:`string | ConstrBind<ImageProps> | undefined`},{name:`imagePosition`,type:`string | undefined`,option:[`top`,`left`]},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`open`,type:`boolean | undefined`},{name:`success`,type:`boolean | undefined`},{name:`textClose`,type:`TextValue`},{name:`textOk`,type:`TextValue`},{name:`width`,type:`string | undefined`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps> | undefined`}],V=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],H=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for clicking the close button/ Событие клика на кнопку закрытия`},{name:`ok`,description:`Event for clicking the OK button/ Событие клика на кнопку подтверждения`},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],U={component:`Dialog`,props:B,slots:V,events:H,defaults:P,wikiDesign:re}})),G,K=e((()=>{te(),_(),W(),G=new b(U.component,U.props,U.defaults,U.wikiDesign,ee,g)})),ve=t({Dialog:()=>J,DialogAllSlots:()=>Z,DialogStates:()=>Y,DialogVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{_e(),K(),d(),q={title:`Ui/Dialog`,component:z,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Dialog:z},setup:()=>({args:e}),template:`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `})},Y={name:`Состояния успеха и ошибки`,render:()=>({components:{D1Dialog:z},setup(){return{openSuccess:l(!1),openError:l(!1)}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Dialog:z},setup(){return{open:l(!1)}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Dialog`,`DialogStates`,`DialogVModel`,`DialogAllSlots`]}));$();export{J as Dialog,Z as DialogAllSlots,Y as DialogStates,X as DialogVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,ve as t};