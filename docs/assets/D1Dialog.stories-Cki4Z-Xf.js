import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,tn as r}from"./library-C6UyfMBX.js";import{d as i,f as a,i as o,n as s,s as c,t as l,u}from"./wiki-Cqdd-d3l.js";import{i as d,n as f,r as p,t as m}from"./D1Dialog-DIF4RXVc.js";var h,g,_,v;function y(){return(y=e((()=>{l(),d(),h=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<BarsProps>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`ConstrBind<ButtonProps>[]`},{name:`buttonClose`,type:`string | ConstrBind<ButtonProps> | null`},{name:`buttonOk`,type:`string | ConstrBind<ButtonProps> | null`},{name:`clickOkAndClose`,type:`boolean`},{name:`closeButton`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`error`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconError`,type:`IconValue<IconProps>`},{name:`iconSuccess`,type:`IconValue<IconProps>`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`]},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`success`,type:`boolean`},{name:`textClose`,type:`TextValue`},{name:`textOk`,type:`TextValue`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps>`}],g=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],_=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for clicking the close button/ Событие клика на кнопку закрытия`},{name:`ok`,description:`Event for clicking the OK button/ Событие клика на кнопку подтверждения`},{name:`update:modelOpen`,description:`Update model open event/ Событие обновления открытия модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:open`,description:`Update open event/ Событие обновления открытия`,properties:[{name:`value`,type:`boolean`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],v={component:`Dialog`,props:h,slots:g,events:_,defaults:p,wikiDesign:s}})))()}var b;function x(){return(x=e((()=>{i(),c(),y(),b=new u(v.component,v.props,v.defaults,v.wikiDesign,o,a)})))()}var S=t({Dialog:()=>w,DialogAllSlots:()=>D,DialogStates:()=>T,DialogVModel:()=>E,__namedExportsOrder:()=>O,default:()=>C}),C,w,T,E,D,O;function k(){return(k=e((()=>{f(),x(),n(),C={title:`Ui/Dialog`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1Dialog:m},setup:()=>({args:e}),template:`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `})},T={name:`Состояния успеха и ошибки`,render:()=>({components:{D1Dialog:m},setup(){return{openSuccess:r(!1),openError:r(!1)}},template:`
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
    `})},E={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Dialog:m},setup(){return{open:r(!1)}},template:`
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
    `})},D={name:`Демонстрация всех слотов`,render:()=>({components:{D1Dialog:m},template:`
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
    `})},O=[`Dialog`,`DialogStates`,`DialogVModel`,`DialogAllSlots`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}export{E as a,x as c,T as i,w as n,k as o,D as r,b as s,S as t};