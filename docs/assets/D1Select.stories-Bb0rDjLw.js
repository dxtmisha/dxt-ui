import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{P as n,a as r,c as i,d as a,g as o,i as s,k as c,s as l,t as u}from"./vue.esm-bundler-KrdxwWaE.js";import{Q as ee,f as d,ht as te,t as f,u as p}from"./iframe-UEhCQgdF.js";import{t as m}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as h,d as g,f as _,n as v,o as y,p as b,t as x,u as ne}from"./wiki-YLJtDFp2.js";import{n as S,t as re}from"./AriaStaticInclude-CS1hPGyK-lIJjWVl9.js";import{n as ie,t as C}from"./D1Skeleton-Q9RSuxTW.js";import{a as w,i as T,t as ae}from"./FieldInputCheckInclude-CtZ4rF2b-DasOUrSH.js";import{a as oe,c as se,i as ce,n as le,o as ue,r as E}from"./FieldEventInclude-BS2ddEe8-YdrPYGoC.js";import{a as de,o as fe}from"./D1Field-CJF7Pt9K.js";import{n as pe,t as me}from"./D1Input-CQGiSMVy.js";import{n as he,t as ge}from"./Field-Bcc8Gk-B.js";import{a as _e,n as ve,o as ye,t as be}from"./D1Menu-DUNOYmXW.js";import{n as xe,t as Se}from"./D1SelectValue-c63hm3V5.js";var D,O,k,A,j,M=e((()=>{re(),_(),T(),ce(),de(),_e(),u(),d(),D=class{constructor(e,t,n,r){b(this,`isEdit`,s(()=>!!(this.props.editValue&&!this.props.multiple))),b(this,`binds`,s(()=>p(this.attributes.listForInput.value,{name:this.props.name,type:`text`,required:this.props.required,readonly:!this.isEdit.value,placeholder:this.props.placeholder,"data-menu-control":`1`,onInput:this.isEdit.value?this.event.onInput:this.event.onSelect}))),b(this,`onKeydown`,e=>{e.target.click(),e.preventDefault()}),this.props=e,this.attributes=t,this.value=n,this.event=r}},O=class{constructor(){b(this,`value`,c(``)),b(this,`onInput`,e=>{this.value.value=String(e.value??``)})}get(){return this.value.value}set(e){this.value.value=e}},k=class{constructor(e,t,n,r,i,a,o,c,l){b(this,`attributes`,void 0),b(this,`elementItem`,void 0),b(this,`change`,void 0),b(this,`value`,void 0),b(this,`code`,void 0),b(this,`validation`,void 0),b(this,`event`,void 0),b(this,`field`,void 0),b(this,`menu`,void 0),b(this,`input`,void 0),b(this,`filter`,void 0),b(this,`isSlot`,s(()=>{var e,t;return!!((e=this.slots)!=null&&e.contextTop||(t=this.slots)!=null&&t.contextBottom)})),b(this,`iconTrailing`,s(()=>{if(!this.props.disabled&&!this.isArrow())return this.props.iconTrailing??this.props.iconArrowDown})),b(this,`onClick`,e=>{e&&this.value.set(e)}),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=c;let{FieldAttributesIncludeConstructor:u=oe,FieldChangeIncludeConstructor:d=se,FieldCodeIncludeConstructor:f=le,FieldElementIncludeConstructor:p=ae,FieldEventIncludeConstructor:m=ue,FieldIncludeConstructor:h=fe,FieldValidationIncludeConstructor:g=E,FieldValueIncludeConstructor:_=w,MenuIncludeConstructor:v=ye,SelectFilterConstructor:y=O,SelectInputConstructor:x=D}=l??{};this.attributes=new u(this.props),this.change=new d(this.props),this.elementItem=new p(this.props,this.element),this.value=new _(this.props,this.refs,this.elementItem),this.code=new f(this.props),this.validation=new g(this.props,this.attributes,this.value,this.change,this.code),this.event=new m(this.props,this.change,this.value,this.validation,this.emits),this.field=new h(this.props,this.value,this.components,this.event,void 0,void 0,()=>this.menu.getElement()?.toggle(),()=>this.menu.getElement()?.next(),()=>this.menu.getElement()?.previous(),s(()=>({iconTrailing:this.iconTrailing.value,maxlength:this.props.max,cancel:this.props.cancel??(this.props.multiple?`auto`:`none`)}))),this.menu=new v(this.props,this.className,this.components,s(()=>({windowAttrs:{hide:!ee(this.props.option)&&!this.isSlot.value,widthMatch:!0},tag:`span`,barsLabel:this.props.label,barsDescription:this.props.helperMessage,disabled:this.props.disabled||this.props.readonly,autoClose:!this.props.multiple,list:te(this.props.option),max:this.props.max,filterMode:this.props.filterMode,hideList:this.props.hideList,onClick:this.event.onSelect,onClickSlot:this.onClick,onUpdateValue:this.isArrow()?this.event.onValue:void 0,isSelectedByValue:!0,ariaMultiselectable:this.props.multiple}))),this.input=new x(this.props,this.attributes,this.value,this.event),this.filter=new y}isArrow(){return!!this.props.arrow&&this.props.arrow!==`none`}},A={},j=class extends f{constructor(e,t,n,r=k){super(e,t,n),b(this,`item`,void 0),b(this,`renderMenu`,e=>this.item.menu.render({control:t=>this.renderMenuControl(e,t),title:e=>this.renderTitle(e),footer:e=>this.initSlot(`footer`,void 0,e),contextTop:e=>this.initSlot(`contextTop`,void 0,e),contextBottom:e=>this.initSlot(`contextBottom`,void 0,e)},{selected:this.item.value.item.value,highlight:this.item.filter.get()})),b(this,`renderMenuControl`,(e,t)=>{let n=[];return this.item.input.isEdit.value||n.push(this.renderMenuControlValue(e,t)),n.push(this.renderMenuControlInput(e,t)),n}),b(this,`renderMenuControlInput`,(e,t)=>{let n=this.item.input.isEdit.value,r=n?e.className:e.classForFocus,a={};return i(`input`,p(this.item.input.binds.value,t.binds,{ref:this.element,id:e.id,value:this.item.value.get(),class:[t.classesWindow.controlOpenOnly,r],...S.role(`combobox`)},n?void 0:a))}),b(this,`renderMenuControlValue`,(e,t)=>this.components.renderOne(`selectValue`,p(t.binds,{class:e.className,disabled:this.props.disabled,value:t.selectedList.value,multiple:this.props.multiple,placeholder:this.props.placeholder,onClick:this.item.event.onSelect,...S.role(`combobox`)}))),b(this,`renderTitle`,e=>{let t=[];return this.props.showSearch&&t.push(this.renderFilterInput(e)),this.initSlot(`title`,t,e),t}),b(this,`renderFilterInput`,e=>i(`div`,{class:[this.classes?.value.input,e.classesWindow.static]},this.components.renderOne(`input`,p({icon:this.props.iconSearch,onInputLite:this.item.filter.onInput,inputAttrs:{"data-menu-control":`1`}},this.props.inputSearchAttrs)))),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.menu.expose,value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass(`input`)}}initStyles(){return{}}initRender(){let e=this.item.menu.expose.open.value;return this.item.field.render({default:this.renderMenu},{...this.getAttrs(),focus:e,iconTurn:e,class:this.classes?.value.main,validationMessage:this.item.validation.message.value})}}})),N,Ce=e((()=>{ve(),N=be})),P,we=e((()=>{xe(),P=Se})),F,Te=e((()=>{pe(),F=me})),I,L=e((()=>{M(),I={...A,iconArrowDown:`keyboard_arrow_down`,iconSearch:`search`,menuAttrs:{itemAttrs:{dense:!0}},inputSearchAttrs:{fieldAttrs:{size:`sm`}}}})),Ee=e((()=>{})),R,z=e((()=>{u(),M(),Ce(),he(),we(),Te(),L(),Ee(),R=l({name:`D1Select`,__name:`D1Select`,props:a({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},max:{},arrow:{},arrowStep:{},arrowAlign:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},menuAttrs:{},editValue:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{},iconSearch:{},inputSearchAttrs:{}},I),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:i}){let a=new j(`d1.select`,e,{emits:i,classes:s(()=>({main:{"d1-select":!0}})),styles:s(()=>({})),components:{menu:N,field:ge,selectValue:P,input:F}}),c=a.render();return t(a.expose()),(e,t)=>(o(),r(n(c)))}})})),B,De=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Select`,exportName:`default`,displayName:`D1Select`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Select/D1Select.vue`]})})),V,H,U,W,Oe=e((()=>{x(),L(),V=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrow`,type:`string`,option:[`none`,`auto`,`carousel`,`stepper`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowStep`,type:`NumberOrString | undefined`},{name:`autocapitalize`,type:`string | undefined`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string | undefined`},{name:`autocorrect`,type:`string | undefined`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean | undefined`},{name:`cancel`,type:`string`,option:[`none`,`auto`,`always`]},{name:`caption`,type:`string | number | undefined`},{name:`captionDecorative`,type:`boolean | undefined`},{name:`counterId`,type:`string | undefined`},{name:`counterShow`,type:`boolean | undefined`},{name:`detail`,type:`Record<string, any> | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`editValue`,type:`boolean | undefined`},{name:`enterKeyHint`,type:`string | undefined`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<FieldProps> | undefined`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps> | undefined`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps> | undefined`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps> | undefined`},{name:`filterMode`,type:`boolean | undefined`},{name:`focus`,type:`boolean | undefined`},{name:`forceShowMessage`,type:`boolean | undefined`},{name:`form`,type:`string | undefined`},{name:`helperId`,type:`string | undefined`},{name:`helperMessage`,type:`string | undefined`},{name:`hideList`,type:`boolean | undefined`},{name:`href`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconArrowDown`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconSearch`,type:`IconValue<IconProps> | undefined`},{name:`iconTrailing`,type:`IconValue<IconProps> | undefined`},{name:`iconTrailingDirOnly`,type:`boolean | undefined`},{name:`iconTrailingPalette`,type:`boolean | undefined`},{name:`iconTrailingTurnOnly`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`id`,type:`string | number | undefined`},{name:`inputAttrs`,type:`Record<string, any> | undefined`},{name:`inputMode`,type:`string | undefined`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`inputSearchAttrs`,type:`ConstrBind<InputProps> | undefined`},{name:`isSkeleton`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps> | undefined`},{name:`match`,type:`FieldMatch | undefined`},{name:`max`,type:`NumberOrString | undefined`},{name:`menuAttrs`,type:`ConstrBind<MenuProps> | undefined`},{name:`modelValue`,type:`Value`},{name:`multiple`,type:`boolean | undefined`},{name:`name`,type:`string | undefined`},{name:`onUpdate:modelValue`,type:`((value: any) => void) | undefined`},{name:`onUpdate:value`,type:`((value: any) => void) | undefined`},{name:`option`,type:`ListRecord | undefined`},{name:`placeholder`,type:`string | undefined`},{name:`prefix`,type:`string | number | undefined`},{name:`prefixId`,type:`string | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`required`,type:`boolean | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`showSearch`,type:`boolean | undefined`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number | undefined`},{name:`suffixId`,type:`string | undefined`},{name:`tabindex`,type:`number | undefined`},{name:`textCancel`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode | undefined`},{name:`validationId`,type:`string | undefined`},{name:`validationMessage`,type:`string | undefined`},{name:`value`,type:`Value`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`trailing`,description:`Slot for displaying content after the input area/ Слот для отображения контента после области ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]}],U=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],W={component:`Select`,props:V,slots:H,events:U,defaults:I,wikiDesign:v}})),G,K=e((()=>{g(),y(),Oe(),G=new ne(W.component,W.props,W.defaults,W.wikiDesign,h,m)})),ke=t({Select:()=>J,SelectBasic:()=>Y,SelectSkeleton:()=>Z,SelectVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{De(),K(),ie(),u(),q={title:`Ui/Select`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Select:B},setup:()=>({args:e}),template:`
      <D1Select v-bind="args" />
    `})},Y={name:`Базовые`,render:()=>({components:{D1Select:B},setup(){return{options:c([{label:`JavaScript`,value:`js`},{label:`TypeScript`,value:`ts`},{label:`Python`,value:`py`},{label:`Java`,value:`java`},{label:`C++`,value:`cpp`},{label:`Ruby`,value:`rb`},{label:`Go`,value:`go`},{label:`PHP`,value:`php`}])}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Select:B},setup(){return{valueSingle:c(`option2`),valueMultiple:c([`option1`,`option3`]),options:[{label:`First option`,value:`option1`},{label:`Second option`,value:`option2`},{label:`Third option`,value:`option3`}]}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Select:B,D1Skeleton:C},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Select`,`SelectBasic`,`SelectVModel`,`SelectSkeleton`]}));$();export{J as Select,Y as SelectBasic,Z as SelectSkeleton,X as SelectVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,ke as t};