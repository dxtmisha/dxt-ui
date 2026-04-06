import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Ht as n,Rt as r,St as i,U as a,_t as o,bt as s,dt as ee,f as c,kt as l,m as u,r as d,wt as f,xt as p,yt as m}from"./iframe-DHvUfpTv.js";import{a as h,d as g,f as _,g as v,l as y,n as b,p as x,t as S,u as C}from"./wiki-COBgMBNI.js";import{n as w,t as te}from"./AriaStaticInclude-CS1hPGyK-WhXq7-dT.js";import{n as ne,t as T}from"./D1Skeleton-CFezRexj.js";import{a as E,i as re,t as ie}from"./FieldInputCheckInclude-czZ02ymY-DuCMu4ME.js";import{a as ae,c as oe,i as se,n as ce,o as le,r as ue}from"./FieldEventInclude-DLX__9aJ-CCnpz2G1.js";import{a as de,o as fe}from"./D1Field-DIr6yDRO.js";import{n as pe,t as me}from"./D1Input-NpKmJmJ_.js";import{n as he,t as ge}from"./Field-CiGIiQ30.js";import{a as _e,n as ve,o as ye,t as be}from"./D1Menu-BUDpX2ZU.js";import{n as xe,t as Se}from"./D1SelectValue-GEvE-90L.js";var D,O,k,A,j,M=e((()=>{te(),_(),re(),se(),de(),_e(),o(),c(),D=class{constructor(e,t,n,r){x(this,`isEdit`,m(()=>!!(this.props.editValue&&!this.props.multiple))),x(this,`binds`,m(()=>d(this.attributes.listForInput.value,{name:this.props.name,type:`text`,required:this.props.required,readonly:!this.isEdit.value,placeholder:this.props.placeholder,"data-menu-control":`1`,onInput:this.isEdit.value?this.event.onInput:this.event.onSelect}))),x(this,`onKeydown`,e=>{e.target.click(),e.preventDefault()}),this.props=e,this.attributes=t,this.value=n,this.event=r}},O=class{constructor(){x(this,`value`,r(``)),x(this,`onInput`,e=>{this.value.value=String(e.value??``)})}get(){return this.value.value}set(e){this.value.value=e}},k=class{constructor(e,t,n,r,i,o,s,c,l){x(this,`attributes`,void 0),x(this,`elementItem`,void 0),x(this,`change`,void 0),x(this,`value`,void 0),x(this,`code`,void 0),x(this,`validation`,void 0),x(this,`event`,void 0),x(this,`field`,void 0),x(this,`menu`,void 0),x(this,`input`,void 0),x(this,`filter`,void 0),x(this,`isSlot`,m(()=>{var e,t;return!!((e=this.slots)!=null&&e.contextTop||(t=this.slots)!=null&&t.contextBottom)})),x(this,`iconTrailing`,m(()=>{if(!this.props.disabled&&!this.isArrow())return this.props.iconTrailing??this.props.iconArrowDown})),x(this,`onClick`,e=>{e&&this.value.set(e)}),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=o,this.slots=s,this.emits=c;let{FieldAttributesIncludeConstructor:u=ae,FieldChangeIncludeConstructor:d=oe,FieldCodeIncludeConstructor:f=ce,FieldElementIncludeConstructor:p=ie,FieldEventIncludeConstructor:h=le,FieldIncludeConstructor:g=fe,FieldValidationIncludeConstructor:_=ue,FieldValueIncludeConstructor:v=E,MenuIncludeConstructor:y=ye,SelectFilterConstructor:b=O,SelectInputConstructor:S=D}=l??{};this.attributes=new u(this.props),this.change=new d(this.props),this.elementItem=new p(this.props,this.element),this.value=new v(this.props,this.refs,this.elementItem),this.code=new f(this.props),this.validation=new _(this.props,this.attributes,this.value,this.change,this.code),this.event=new h(this.props,this.change,this.value,this.validation,this.emits),this.field=new g(this.props,this.value,this.components,this.event,void 0,void 0,()=>this.menu.getElement()?.toggle(),()=>this.menu.getElement()?.next(),()=>this.menu.getElement()?.previous(),m(()=>({iconTrailing:this.iconTrailing.value,maxlength:this.props.max,cancel:this.props.cancel??(this.props.multiple?`auto`:`none`)}))),this.menu=new y(this.props,this.className,this.components,m(()=>({windowAttrs:{hide:!a(this.props.option)&&!this.isSlot.value,widthMatch:!0},tag:`span`,barsLabel:this.props.label,barsDescription:this.props.helperMessage,disabled:this.props.disabled||this.props.readonly,autoClose:!this.props.multiple,list:ee(this.props.option),max:this.props.max,filterMode:this.props.filterMode,hideList:this.props.hideList,onClick:this.event.onSelect,onClickSlot:this.onClick,onUpdateValue:this.isArrow()?this.event.onValue:void 0,isSelectedByValue:!0,ariaMultiselectable:this.props.multiple}))),this.input=new S(this.props,this.attributes,this.value,this.event),this.filter=new b}isArrow(){return!!this.props.arrow&&this.props.arrow!==`none`}},A={},j=class extends u{constructor(e,t,n,r=k){super(e,t,n),x(this,`item`,void 0),x(this,`renderMenu`,e=>this.item.menu.render({control:t=>this.renderMenuControl(e,t),title:e=>this.renderTitle(e),footer:e=>this.initSlot(`footer`,void 0,e),contextTop:e=>this.initSlot(`contextTop`,void 0,e),contextBottom:e=>this.initSlot(`contextBottom`,void 0,e)},{selected:this.item.value.item.value,highlight:this.item.filter.get()})),x(this,`renderMenuControl`,(e,t)=>{let n=[];return this.item.input.isEdit.value||n.push(this.renderMenuControlValue(e,t)),n.push(this.renderMenuControlInput(e,t)),n}),x(this,`renderMenuControlInput`,(e,t)=>{let n=this.item.input.isEdit.value,r=n?e.className:e.classForFocus,a={};return i(`input`,d(this.item.input.binds.value,t.binds,{ref:this.element,id:e.id,value:this.item.value.get(),class:[t.classesWindow.controlOpenOnly,r],...w.role(`combobox`)},n?void 0:a))}),x(this,`renderMenuControlValue`,(e,t)=>this.components.renderOne(`selectValue`,d(t.binds,{class:e.className,disabled:this.props.disabled,value:t.selectedList.value,multiple:this.props.multiple,placeholder:this.props.placeholder,onClick:this.item.event.onSelect,...w.role(`combobox`)}))),x(this,`renderTitle`,e=>{let t=[];return this.props.showSearch&&t.push(this.renderFilterInput(e)),this.initSlot(`title`,t,e),t}),x(this,`renderFilterInput`,e=>i(`div`,{class:[this.classes?.value.input,e.classesWindow.static]},this.components.renderOne(`input`,d({icon:this.props.iconSearch,onInputLite:this.item.filter.onInput,inputAttrs:{"data-menu-control":`1`}},this.props.inputSearchAttrs)))),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.menu.expose,value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass(`input`)}}initStyles(){return{}}initRender(){let e=this.item.menu.expose.open.value;return this.item.field.render({default:this.renderMenu},{...this.getAttrs(),focus:e,iconTurn:e,class:this.classes?.value.main,validationMessage:this.item.validation.message.value})}}})),N,Ce=e((()=>{ve(),N=be})),P,we=e((()=>{xe(),P=Se})),F,Te=e((()=>{pe(),F=me})),I,L=e((()=>{M(),I={...A,iconArrowDown:`keyboard_arrow_down`,iconSearch:`search`,menuAttrs:{itemAttrs:{dense:!0}},inputSearchAttrs:{fieldAttrs:{size:`sm`}}}})),Ee=e((()=>{})),R,z=e((()=>{o(),M(),Ce(),he(),we(),Te(),L(),Ee(),R=p({name:`D1Select`,__name:`D1Select`,props:f({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},max:{},arrow:{},arrowStep:{},arrowAlign:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},menuAttrs:{},editValue:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{},iconSearch:{},inputSearchAttrs:{}},I),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:r}){let i=new j(`d1.select`,e,{emits:r,classes:m(()=>({main:{"d1-select":!0}})),styles:m(()=>({})),components:{menu:N,field:ge,selectValue:P,input:F}}),a=i.render();return t(i.expose()),(e,t)=>(l(),s(n(a)))}})})),B,De=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Select`,exportName:`default`,displayName:`D1Select`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Select/D1Select.vue`]})})),V,H,U,W,Oe=e((()=>{C(),S(),L(),V=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrow`,type:`string`,option:[`none`,`auto`,`carousel`,`stepper`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowStep`,type:`NumberOrString`},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`cancel`,type:`string`,option:[`none`,`auto`,`always`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`editValue`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<FieldPropsBasic>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterPropsBasic>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelPropsBasic>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessagePropsBasic>`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`hideList`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconArrowDown`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconSearch`,type:`IconValue<IconPropsBasic>`},{name:`iconTrailing`,type:`IconValue<IconPropsBasic>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`inputSearchAttrs`,type:`ConstrBind<InputPropsBasic>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<ProgressPropsBasic>`},{name:`match`,type:`FieldMatch`},{name:`max`,type:`NumberOrString`},{name:`menuAttrs`,type:`ConstrBind<MenuPropsBasic>`},{name:`modelValue`,type:`Value`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: any) => void`},{name:`onUpdate:value`,type:`(value: any) => void`},{name:`option`,type:`ListRecord`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`showSearch`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textCancel`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`Value`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`MenuControlItem`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`MenuControlItem`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`MenuControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`leading`,description:`Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`,properties:[{name:`props`,type:`FieldControl`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`},{name:`suffix`,description:`Suffix slot/ Слот суффикса`},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`MenuControlItem`}]},{name:`trailing`,description:`Slot for displaying content after the input area/ Слот для отображения контента после области ввода`,properties:[{name:`props`,type:`FieldControl`}]}],U=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],W={component:`Select`,props:V,slots:H,events:U,defaults:I,wikiDesign:b}})),G,K=e((()=>{C(),h(),Oe(),G=new g(W.component,W.props,W.defaults,W.wikiDesign,y,v)})),ke=t({Select:()=>J,SelectBasic:()=>Y,SelectSkeleton:()=>Z,SelectVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{De(),K(),ne(),o(),q={title:`Ui/Select`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Select:B},setup:()=>({args:e}),template:`
      <D1Select v-bind="args" />
    `})},Y={name:`Базовые`,render:()=>({components:{D1Select:B},setup(){return{options:r([{label:`JavaScript`,value:`js`},{label:`TypeScript`,value:`ts`},{label:`Python`,value:`py`},{label:`Java`,value:`java`},{label:`C++`,value:`cpp`},{label:`Ruby`,value:`rb`},{label:`Go`,value:`go`},{label:`PHP`,value:`php`}])}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Select:B},setup(){return{valueSingle:r(`option2`),valueMultiple:r([`option1`,`option3`]),options:[{label:`First option`,value:`option1`},{label:`Second option`,value:`option2`},{label:`Third option`,value:`option3`}]}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Select:B,D1Skeleton:T},template:`
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