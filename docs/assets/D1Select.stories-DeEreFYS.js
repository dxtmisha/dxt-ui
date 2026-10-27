import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Pt as s,Rt as c,mn as ee,un as l}from"./library-ByXZ2YPj.js";import{N as u,_ as d,a as f,d as p,f as m,k as h,n as g,p as _,s as te,t as ne}from"./wiki-CfN0XtvQ.js";import{n as v,t as re}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as ie,t as ae}from"./D1Skeleton-fWB3UQoT.js";import{i as y,n as b,r as x,t as oe}from"./Field-DsCcuhLh.js";import{n as se,t as S}from"./Menu-BTPM0f5V.js";import{n as C,t as w}from"./SelectAbstract-B7R8Ek6L-DhG11dn9.js";import{n as T,t as E}from"./D1SelectValue-CmEZtSDA.js";var D,O,k,A;function j(){return(j=e((()=>{re(),x(),C(),n(),h(),D=class{props;attributes;value;event;constructor(e,t,n,r){this.props=e,this.attributes=t,this.value=n,this.event=r}isEdit(){return!(!this.props.editValue||this.props.multiple)}get binds(){return u(this.attributes.listForInput,{name:this.props.name,type:`text`,required:this.props.required,readonly:!this.isEdit(),placeholder:this.props.placeholder,"data-menu-control":`1`,onInput:this.isEdit()?this.event.onInput:this.event.onSelect})}onKeydown=e=>{e.target.click(),e.preventDefault()}},O=class extends w{field;input;constructor(e,t,n,r,i,a,o={}){super(e,t,n,r,i,a,o);let{FieldIncludeConstructor:s=y,SelectInputConstructor:c=D}=o;this.input=new c(this.props,this.attributes,this.value,this.event),this.field=new s(this.naming,this.props,this.components,()=>({iconTrailing:this.iconTrailing,maxlength:this.props.max,cancel:this.props.cancel??(this.props.multiple?`auto`:`none`)}),void 0,this.value,this.event,void 0,void 0,()=>this.menu.getElement()?.toggle(),()=>this.menu.getElement()?.next(),()=>this.menu.getElement()?.previous())}onInputValue=()=>{this.menu.getElement()?.toOpen()}},k={},A=class extends d{item;constructor(e,t,n,r=O){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{...this.item.menu.expose,...this.item.value.expose(),...this.item.validation.expose()}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.menu.expose.getOpen();return this.item.field.render({default:this.renderMenu},{...this.getAttrs(),focus:e,iconTurn:e,class:this.classes?.value.main,validationMessage:this.item.validation.message})}renderMenu=e=>this.item.menu.render({control:t=>this.renderMenuControl(e,t),title:e=>this.renderTitle(e),footer:e=>this.initSlot(`footer`,void 0,e),contextTop:e=>this.initSlot(`contextTop`,void 0,e),contextBottom:e=>this.initSlot(`contextBottom`,void 0,e)},{selected:this.item.value.item.value});renderMenuControl=(e,t)=>{let n=[];return this.item.input.isEdit()||n.push(this.renderMenuControlValue(e,t)),n.push(this.renderMenuControlInput(e,t)),n};renderMenuControlInput=(e,t)=>{let n=this.item.input.isEdit(),r=n?e.className:e.classForFocus,i={};return c(`input`,u(this.item.input.binds,t.binds,{ref:this.element,id:e.id,value:this.item.value.get(),class:r,autocomplete:`off`,onInput:this.item.onInputValue,...v.role(`combobox`)},n?void 0:i))};renderMenuControlValue=(e,t)=>this.components?.renderOne(`selectValue`,u(t.binds,{class:e.className,disabled:this.props.disabled,value:t.selectedList.value,multiple:this.props.multiple,placeholder:this.props.placeholder,onClick:this.item.event.onSelect,...v.role(`combobox`)}));renderTitle=e=>{let t=[];return this.initSlot(`title`,t,e),t}}})))()}var M;function N(){return(N=e((()=>{T(),M=E})))()}var P;function F(){return(F=e((()=>{j(),P={...k,iconArrowDown:`keyboard_arrow_down`,menuAttrs:{itemAttrs:{dense:!0}}}})))()}var I;function L(){return(L=e((()=>{n(),j(),se(),b(),N(),F(),I=a({name:`D1Select`,__name:`D1Select`,props:i({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},index:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},max:{},arrow:{},arrowStep:{},arrowAlign:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},selectionStyle:{},menuAttrs:{},editValue:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{}},P),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,c=s(()=>({main:{"d1-select":!0}})),l=s(()=>({})),u=new A(`d1.select`,a,{emits:i,classes:c,styles:l,components:{menu:S,field:oe,selectValue:M}}),d=u.render();return t(u.expose()),(e,t)=>(o(),r(ee(d)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Select`,exportName:`default`,displayName:`D1Select`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Select/D1Select.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{ne(),F(),B=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrow`,type:`string`,option:[`none`,`auto`,`carousel`,`stepper`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowStep`,type:`NumberOrString`},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`cancel`,type:`string`,option:[`none`,`auto`,`always`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`editValue`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<FieldProps>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`hideList`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconProps>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`index`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`match`,type:`FieldMatch`},{name:`max`,type:`NumberOrString`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`modelValue`,type:`Value`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: any) => void)`},{name:`onUpdate:value`,type:`((value: any) => void)`},{name:`option`,type:`ListRecord`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`auto`,`checkmark`]},{name:`showSearch`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textCancel`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`Value`}],V=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`trailing`,description:`Slot for displaying content after the input area/ Слот для отображения контента после области ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]}],H=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],U={component:`Select`,props:B,slots:V,events:H,defaults:P,wikiDesign:g}})))()}var G;function K(){return(K=e((()=>{m(),te(),W(),G=new p(U.component,U.props,U.defaults,U.wikiDesign,f,_)})))()}var ce=t({Select:()=>J,SelectBasic:()=>Y,SelectSkeleton:()=>Z,SelectVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),ie(),n(),q={title:`Ui/Select`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={args:{editValue:!0,multiple:!0},render:e=>({components:{D1Select:R},setup:()=>({args:e}),template:`
      <D1Select v-bind="args" />
    `})},Y={name:`Базовые`,render:()=>({components:{D1Select:R},setup(){return{options:l([{label:`JavaScript`,value:`js`},{label:`TypeScript`,value:`ts`},{label:`Python`,value:`py`},{label:`Java`,value:`java`},{label:`C++`,value:`cpp`},{label:`Ruby`,value:`rb`},{label:`Go`,value:`go`},{label:`PHP`,value:`php`}])}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Select:R},setup(){return{valueSingle:l(`option2`),valueMultiple:l([`option1`,`option3`]),options:[{label:`First option`,value:`option1`},{label:`Second option`,value:`option2`},{label:`Third option`,value:`option3`}]}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Select:R,D1Skeleton:ae},template:`
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
    `})},Q=[`Select`,`SelectBasic`,`SelectVModel`,`SelectSkeleton`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{X as a,K as c,Z as i,J as n,$ as o,Y as r,G as s,ce as t};