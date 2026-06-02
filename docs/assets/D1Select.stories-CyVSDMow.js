import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,Dt as i,Ft as a,Mt as o,Nt as s,Xt as c,kt as l,m as u,qt as d,r as f,s as p}from"./iframe-53vFWNoU.js";import{t as ee}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as m,f as h,l as g,n as te,o as ne,p as _,t as re,u as ie}from"./wiki-DwIxUKqL.js";import{n as v,t as ae}from"./AriaStaticInclude-CS1hPGyK-DN8tdKs-.js";import{n as y,t as oe}from"./D1Skeleton-Cxor4m_W.js";import{a as se,o as ce}from"./D1Field-BDs9e5bW.js";import{n as b,t as x}from"./Field-DqFbmLu0.js";import{n as S,t as C}from"./Menu-DIyXSgxf.js";import{n as w,t as T}from"./SelectAbstract-hbQSiUOX-Da1lbTG3.js";import{n as E,t as le}from"./D1SelectValue-B5R3CZqE.js";var D,O,k,A,j=t((()=>{ae(),h(),ce(),w(),i(),u(),D=class{constructor(e,t,n,r){_(this,`props`,void 0),_(this,`attributes`,void 0),_(this,`value`,void 0),_(this,`event`,void 0),_(this,`onKeydown`,e=>{e.target.click(),e.preventDefault()}),this.props=e,this.attributes=t,this.value=n,this.event=r}isEdit(){return!!(this.props.editValue&&!this.props.multiple)}get binds(){return p(this.attributes.listForInput,{name:this.props.name,type:`text`,required:this.props.required,readonly:!this.isEdit(),placeholder:this.props.placeholder,"data-menu-control":`1`,onInput:this.isEdit()?this.event.onInput:this.event.onSelect})}},O=class extends T{constructor(e,t,n,r,i,a,o,s,c={}){super(e,t,n,r,i,a,o,s,c),_(this,`field`,void 0),_(this,`input`,void 0),_(this,`onInputValue`,()=>{var e;(e=this.menu.getElement())==null||e.toOpen()});let{FieldIncludeConstructor:l=se,SelectInputConstructor:u=D}=c;this.input=new u(this.props,this.attributes,this.value,this.event),this.field=new l(this.className,this.props,this.components,()=>({iconTrailing:this.iconTrailing,maxlength:this.props.max,cancel:this.props.cancel??(this.props.multiple?`auto`:`none`)}),void 0,this.value,this.event,void 0,void 0,()=>this.menu.getElement()?.toggle(),()=>this.menu.getElement()?.next(),()=>this.menu.getElement()?.previous())}},k={},A=class extends f{constructor(e,t,n,r=O){super(e,t,n),_(this,`item`,void 0),_(this,`renderMenu`,e=>this.item.menu.render({control:t=>this.renderMenuControl(e,t),title:e=>this.renderTitle(e),footer:e=>this.initSlot(`footer`,void 0,e),contextTop:e=>this.initSlot(`contextTop`,void 0,e),contextBottom:e=>this.initSlot(`contextBottom`,void 0,e)},{selected:this.item.value.item.value})),_(this,`renderMenuControl`,(e,t)=>{let n=[];return this.item.input.isEdit()||n.push(this.renderMenuControlValue(e,t)),n.push(this.renderMenuControlInput(e,t)),n}),_(this,`renderMenuControlInput`,(e,t)=>{let n=this.item.input.isEdit(),r=n?e.className:e.classForFocus,i={};return s(`input`,p(this.item.input.binds,t.binds,{ref:this.element,id:e.id,value:this.item.value.get(),class:r,autocomplete:`off`,onInput:this.item.onInputValue,...v.role(`combobox`)},n?void 0:i))}),_(this,`renderMenuControlValue`,(e,t)=>this.components.renderOne(`selectValue`,p(t.binds,{class:e.className,disabled:this.props.disabled,value:t.selectedList.value,multiple:this.props.multiple,placeholder:this.props.placeholder,onClick:this.item.event.onSelect,...v.role(`combobox`)}))),_(this,`renderTitle`,e=>{let t=[];return this.initSlot(`title`,t,e),t}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.menu.expose,...this.item.value.expose(),...this.item.validation.expose()}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.menu.expose.getOpen();return this.item.field.render({default:this.renderMenu},{...this.getAttrs(),focus:e,iconTurn:e,class:this.classes?.value.main,validationMessage:this.item.validation.message})}}})),M,N=t((()=>{E(),M=le})),P,F=t((()=>{j(),P={...k,iconArrowDown:`keyboard_arrow_down`,menuAttrs:{itemAttrs:{dense:!0}}}})),I=t((()=>{})),L,R=t((()=>{i(),j(),S(),b(),N(),F(),I(),L=o({name:`D1Select`,__name:`D1Select`,props:a({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},max:{},arrow:{},arrowStep:{},arrowAlign:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},selectionStyle:{},menuAttrs:{},editValue:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{}},P),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:i}){let a=new A(`d1.select`,e,{emits:i,classes:l(()=>({main:{"d1-select":!0}})),styles:l(()=>({})),components:{menu:C,field:x,selectValue:M}}),o=a.render();return t(a.expose()),(e,t)=>(r(),n(c(o)))}})})),z,B=t((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Select`,exportName:`default`,displayName:`D1Select`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Select/D1Select.vue`]})})),V,H,U,W,ue=t((()=>{re(),F(),V=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrow`,type:`string`,option:[`none`,`auto`,`carousel`,`stepper`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowStep`,type:`NumberOrString`},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`cancel`,type:`string`,option:[`none`,`auto`,`always`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`editValue`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<FieldProps>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`hideList`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconProps>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`match`,type:`FieldMatch`},{name:`max`,type:`NumberOrString`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`modelValue`,type:`Value`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: any) => void)`},{name:`onUpdate:value`,type:`((value: any) => void)`},{name:`option`,type:`ListRecord`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`auto`,`checkmark`]},{name:`showSearch`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textCancel`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`Value`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`trailing`,description:`Slot for displaying content after the input area/ Слот для отображения контента после области ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]}],U=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],W={component:`Select`,props:V,slots:H,events:U,defaults:P,wikiDesign:te}})),G,K=t((()=>{m(),ne(),ue(),G=new ie(W.component,W.props,W.defaults,W.wikiDesign,g,ee)})),de=e({Select:()=>J,SelectBasic:()=>Y,SelectSkeleton:()=>Z,SelectVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=t((()=>{B(),K(),y(),i(),q={title:`Ui/Select`,component:z,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={args:{editValue:!0,multiple:!0},render:e=>({components:{D1Select:z},setup:()=>({args:e}),template:`
      <D1Select v-bind="args" />
    `})},Y={name:`Базовые`,render:()=>({components:{D1Select:z},setup(){return{options:d([{label:`JavaScript`,value:`js`},{label:`TypeScript`,value:`ts`},{label:`Python`,value:`py`},{label:`Java`,value:`java`},{label:`C++`,value:`cpp`},{label:`Ruby`,value:`rb`},{label:`Go`,value:`go`},{label:`PHP`,value:`php`}])}},template:`
        <div class="wiki-storybook-flex-column">
          <D1Select
            type="select"
            label="Standard select"
            placeholder="Select option"
            :option="options"
          />
          <D1Select
            type="select"
            label="With search"
            placeholder="Search..."
            showSearch
            :option="options"
          />
          <D1Select
            type="select"
            label="With filter"
            placeholder="Type to filter"
            showSearch
            filterMode
            :option="options"
          />
          <D1Select
            type="select"
            label="Edit value"
            placeholder="Select or type"
            editValue
            filterMode
            :option="options"
          />
          <D1Select
            type="select"
            label="With arrows"
            placeholder="Select option"
            arrow="carousel"
            :option="options"
          />
        </div>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Select:z},setup(){return{valueSingle:d(`option2`),valueMultiple:d([`option1`,`option3`]),options:[{label:`First option`,value:`option1`},{label:`Second option`,value:`option2`},{label:`Third option`,value:`option3`}]}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueSingle }}</strong></span>
            <button class="wiki-storybook-button" @click="valueSingle = 'option1'">option 1</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option2'">option 2</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option3'">option 3</button>
          </div>

          <D1Select
            v-model="valueSingle"
            type="select"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <D1Select
            v-model="valueMultiple"
            type="select"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Select:z,D1Skeleton:oe},template:`
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1Select
              isSkeleton
              type="select"
              label="Loading select"
              helperMessage="Options are loading..."
              :option="[
                {label: 'First option', value: 'option1'},
                {label: 'Second option', value: 'option2'},
                {label: 'Third option', value: 'option3'}
              ]"
            />
          </div>
        </D1Skeleton>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    editValue: true,
    multiple: true
  },
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Select
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Select v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Select
    },
    setup() {
      const options = ref([{
        label: 'JavaScript',
        value: 'js'
      }, {
        label: 'TypeScript',
        value: 'ts'
      }, {
        label: 'Python',
        value: 'py'
      }, {
        label: 'Java',
        value: 'java'
      }, {
        label: 'C++',
        value: 'cpp'
      }, {
        label: 'Ruby',
        value: 'rb'
      }, {
        label: 'Go',
        value: 'go'
      }, {
        label: 'PHP',
        value: 'php'
      }]);
      return {
        options
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Select
            type="select"
            label="Standard select"
            placeholder="Select option"
            :option="options"
          />
          <D1Select
            type="select"
            label="With search"
            placeholder="Search..."
            showSearch
            :option="options"
          />
          <D1Select
            type="select"
            label="With filter"
            placeholder="Type to filter"
            showSearch
            filterMode
            :option="options"
          />
          <D1Select
            type="select"
            label="Edit value"
            placeholder="Select or type"
            editValue
            filterMode
            :option="options"
          />
          <D1Select
            type="select"
            label="With arrows"
            placeholder="Select option"
            arrow="carousel"
            :option="options"
          />
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Select
    },
    setup() {
      const valueSingle = ref('option2');
      const valueMultiple = ref(['option1', 'option3']);
      const options = [{
        label: 'First option',
        value: 'option1'
      }, {
        label: 'Second option',
        value: 'option2'
      }, {
        label: 'Third option',
        value: 'option3'
      }];
      return {
        valueSingle,
        valueMultiple,
        options
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueSingle }}</strong></span>
            <button class="wiki-storybook-button" @click="valueSingle = 'option1'">option 1</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option2'">option 2</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option3'">option 3</button>
          </div>

          <D1Select
            v-model="valueSingle"
            type="select"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <D1Select
            v-model="valueMultiple"
            type="select"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Select,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1Select
              isSkeleton
              type="select"
              label="Loading select"
              helperMessage="Options are loading..."
              :option="[
                {label: 'First option', value: 'option1'},
                {label: 'Second option', value: 'option2'},
                {label: 'Third option', value: 'option3'}
              ]"
            />
          </div>
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Select`,`SelectBasic`,`SelectVModel`,`SelectSkeleton`]}));$();export{J as Select,Y as SelectBasic,Z as SelectSkeleton,X as SelectVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,de as t};