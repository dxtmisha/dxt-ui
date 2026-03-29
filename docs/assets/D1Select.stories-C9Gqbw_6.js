import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,St as r,V as i,Vt as a,_t as o,bt as s,dt as ee,f as c,kt as l,m as u,r as d,wt as f,xt as p,yt as m}from"./iframe-CuL5mTF3.js";import{a as h,d as g,f as _,g as v,l as y,n as b,p as x,t as S,u as C}from"./wiki-Dd40E_Te.js";import{n as w,t as te}from"./AriaStaticInclude-CS1hPGyK-s6BAVwCV.js";import{n as ne,t as re}from"./D1Skeleton-BY0eTLzu.js";import{a as T,c as E,d as ie,i as ae,n as oe,r as se,t as ce,u as le}from"./FieldEventInclude-Dtd9ULXn-BK4o6SuH.js";import{n as ue,t as de}from"./D1Input-BXLRZP38.js";import{i as fe,n as pe,r as me,t as he}from"./Field-Bm0sNIEB.js";import{a as ge,n as _e,o as ve,t as ye}from"./D1Menu-BaXTkOdP.js";import{n as be,t as xe}from"./D1SelectValue-BhFIXV4D.js";var D,O,k,A,j,M=e((()=>{te(),_(),E(),me(),ge(),o(),c(),D=class{constructor(e,t,n,r){x(this,`isEdit`,m(()=>!!(this.props.editValue&&!this.props.multiple))),x(this,`binds`,m(()=>d(this.attributes.listForInput.value,{name:this.props.name,type:`text`,required:this.props.required,readonly:!this.isEdit.value,placeholder:this.props.placeholder,"data-menu-control":`1`,onInput:this.isEdit.value?this.event.onInput:this.event.onSelect}))),x(this,`onKeydown`,e=>{e.target.click(),e.preventDefault()}),this.props=e,this.attributes=t,this.value=n,this.event=r}},O=class{constructor(){x(this,`value`,n(``)),x(this,`onInput`,e=>{this.value.value=String(e.value??``)})}get(){return this.value.value}set(e){this.value.value=e}},k=class{constructor(e,t,n,r,a,o,s,c,l){x(this,`attributes`,void 0),x(this,`elementItem`,void 0),x(this,`change`,void 0),x(this,`value`,void 0),x(this,`code`,void 0),x(this,`validation`,void 0),x(this,`event`,void 0),x(this,`field`,void 0),x(this,`menu`,void 0),x(this,`input`,void 0),x(this,`filter`,void 0),x(this,`isSlot`,m(()=>{var e,t;return!!((e=this.slots)!=null&&e.contextTop||(t=this.slots)!=null&&t.contextBottom)})),x(this,`iconTrailing`,m(()=>{if(!this.props.disabled&&!this.isArrow())return this.props.iconTrailing??this.props.iconArrowDown})),x(this,`onClick`,e=>{e&&this.value.set(e)}),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=a,this.components=o,this.slots=s,this.emits=c;let{FieldAttributesIncludeConstructor:u=T,FieldChangeIncludeConstructor:d=ie,FieldCodeIncludeConstructor:f=se,FieldElementIncludeConstructor:p=ce,FieldEventIncludeConstructor:h=oe,FieldIncludeConstructor:g=fe,FieldValidationIncludeConstructor:_=ae,FieldValueIncludeConstructor:v=le,MenuIncludeConstructor:y=ve,SelectFilterConstructor:b=O,SelectInputConstructor:S=D}=l??{};this.attributes=new u(this.props),this.change=new d(this.props),this.elementItem=new p(this.props,this.element),this.value=new v(this.props,this.refs,this.elementItem),this.code=new f(this.props),this.validation=new _(this.props,this.attributes,this.value,this.change,this.code),this.event=new h(this.props,this.change,this.value,this.validation,this.emits),this.field=new g(this.props,this.value,this.components,this.event,void 0,void 0,()=>this.menu.getElement()?.toggle(),()=>this.menu.getElement()?.next(),()=>this.menu.getElement()?.previous(),m(()=>({iconTrailing:this.iconTrailing.value,maxlength:this.props.max,cancel:this.props.cancel??(this.props.multiple?`auto`:`none`)}))),this.menu=new y(this.props,this.className,this.components,m(()=>({windowAttrs:{hide:!i(this.props.option)&&!this.isSlot.value,widthMatch:!0},tag:`span`,barsLabel:this.props.label,barsDescription:this.props.helperMessage,disabled:this.props.disabled||this.props.readonly,autoClose:!this.props.multiple,list:ee(this.props.option),max:this.props.max,filterMode:this.props.filterMode,hideList:this.props.hideList,onClick:this.event.onSelect,onClickSlot:this.onClick,onUpdateValue:this.isArrow()?this.event.onValue:void 0,isSelectedByValue:!0,ariaMultiselectable:this.props.multiple}))),this.input=new S(this.props,this.attributes,this.value,this.event),this.filter=new b}isArrow(){return!!this.props.arrow&&this.props.arrow!==`none`}},A={},j=class extends u{constructor(e,t,n,i=k){super(e,t,n),x(this,`item`,void 0),x(this,`renderMenu`,e=>this.item.menu.render({control:t=>this.renderMenuControl(e,t),title:e=>this.renderTitle(e),footer:e=>this.initSlot(`footer`,void 0,e),contextTop:e=>this.initSlot(`contextTop`,void 0,e),contextBottom:e=>this.initSlot(`contextBottom`,void 0,e)},{selected:this.item.value.item.value,highlight:this.item.filter.get()})),x(this,`renderMenuControl`,(e,t)=>{let n=[];return this.item.input.isEdit.value||n.push(this.renderMenuControlValue(e,t)),n.push(this.renderMenuControlInput(e,t)),n}),x(this,`renderMenuControlInput`,(e,t)=>{let n=this.item.input.isEdit.value,i=n?e.className:e.classForFocus,a={};return r(`input`,d(this.item.input.binds.value,t.binds,{ref:this.element,id:e.id,value:this.item.value.get(),class:[t.classesWindow.controlOpenOnly,i],...w.role(`combobox`)},n?void 0:a))}),x(this,`renderMenuControlValue`,(e,t)=>this.components.renderOne(`selectValue`,d(t.binds,{class:e.className,disabled:this.props.disabled,value:t.selectedList.value,multiple:this.props.multiple,placeholder:this.props.placeholder,onClick:this.item.event.onSelect,...w.role(`combobox`)}))),x(this,`renderTitle`,e=>{let t=[];return this.props.showSearch&&t.push(this.renderFilterInput(e)),this.initSlot(`title`,t,e),t}),x(this,`renderFilterInput`,e=>r(`div`,{class:[this.classes?.value.input,e.classesWindow.static]},this.components.renderOne(`input`,d({icon:this.props.iconSearch,onInputLite:this.item.filter.onInput,inputAttrs:{"data-menu-control":`1`}},this.props.inputSearchAttrs)))),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.menu.expose,value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass(`input`)}}initStyles(){return{}}initRender(){let e=this.item.menu.expose.open.value;return this.item.field.render({default:this.renderMenu},{...this.getAttrs(),focus:e,iconTurn:e,class:this.classes?.value.main,validationMessage:this.item.validation.message.value})}}})),N,Se=e((()=>{_e(),N=ye})),P,Ce=e((()=>{be(),P=xe})),F,we=e((()=>{ue(),F=de})),I,L=e((()=>{M(),I={...A,iconArrowDown:`keyboard_arrow_down`,iconSearch:`search`,menuAttrs:{itemAttrs:{dense:!0}},inputSearchAttrs:{fieldAttrs:{size:`sm`}}}})),Te=e((()=>{})),R,z=e((()=>{o(),M(),Se(),pe(),Ce(),we(),L(),Te(),R=p({name:`D1Select`,__name:`D1Select`,props:f({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},max:{},arrow:{},arrowStep:{},arrowAlign:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},menuAttrs:{},editValue:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{},iconSearch:{},inputSearchAttrs:{}},I),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let r=new j(`d1.select`,e,{emits:n,classes:m(()=>({main:{"d1-select":!0}})),styles:m(()=>({})),components:{menu:N,field:he,selectValue:P,input:F}}),i=r.render();return t(r.expose()),(e,t)=>(l(),s(a(i)))}})})),B,Ee=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Select`,exportName:`default`,displayName:`D1Select`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Select/D1Select.vue`]})})),V,H,U,W,De=e((()=>{C(),S(),L(),V=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrow`,type:`string`,option:[`auto`,`none`,`carousel`,`stepper`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowStep`,type:`NumberOrString`},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`editValue`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<Field>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabel>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`hideList`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconArrowDown`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconSearch`,type:`IconValue<Icon>`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`inputSearchAttrs`,type:`ConstrBind<Input>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`match`,type:`FieldMatch`},{name:`max`,type:`NumberOrString`},{name:`menuAttrs`,type:`ConstrBind<Menu>`},{name:`modelValue`,type:`Value`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: any) => void`},{name:`onUpdate:value`,type:`(value: any) => void`},{name:`option`,type:`ListRecord`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`showSearch`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textCancel`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`Value`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`MenuControlItem`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`MenuControlItem`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`MenuControlItem`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`leading`,properties:[{name:`props`,type:`FieldControl`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`},{name:`suffix`,description:`Suffix slot/ Слот суффикса`},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`MenuControlItem`}]},{name:`trailing`,properties:[{name:`props`,type:`FieldControl`}]}],U=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:` value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:` value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],W={component:`Select`,props:V,slots:H,events:U,defaults:I,wikiDesign:b}})),G,K=e((()=>{C(),h(),De(),G=new g(W.component,W.props,W.defaults,W.wikiDesign,y,v)})),Oe=t({Select:()=>J,SelectBasic:()=>Y,SelectSkeleton:()=>Z,SelectVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{Ee(),K(),ne(),o(),q={title:`Ui/Select`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Select:B},setup:()=>({args:e}),template:`
      <D1Select v-bind="args" />
    `})},Y={name:`Базовые`,render:()=>({components:{D1Select:B},setup(){return{options:n([{label:`JavaScript`,value:`js`},{label:`TypeScript`,value:`ts`},{label:`Python`,value:`py`},{label:`Java`,value:`java`},{label:`C++`,value:`cpp`},{label:`Ruby`,value:`rb`},{label:`Go`,value:`go`},{label:`PHP`,value:`php`}])}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Select:B},setup(){return{singleValue:n(`option2`),multipleValue:n([`option1`,`option3`])}},template:`
        <div class="wiki-storybook-flex-column">
          <D1Select
            v-model="singleValue"
            type="select"
            label="Single select"
            arrow="carousel"
            :option="[
              {label: 'First option', value: 'option1'},
              {label: 'Second option', value: 'option2'},
              {label: 'Third option', value: 'option3'}
            ]"
          />
          <div>Selected: {{ singleValue }}</div>

          <D1Select
            v-model="multipleValue"
            type="select"
            label="Multiple select"
            multiple
            :option="[
              {label: 'First option', value: 'option1'},
              {label: 'Second option', value: 'option2'},
              {label: 'Third option', value: 'option3'}
            ]"
          />
          <div>Selected: {{ multipleValue }}</div>
        </div>
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Select:B,D1Skeleton:re},template:`
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
      return {
        singleValue: ref('option2'),
        multipleValue: ref(['option1', 'option3'])
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Select
            v-model="singleValue"
            type="select"
            label="Single select"
            arrow="carousel"
            :option="[
              {label: 'First option', value: 'option1'},
              {label: 'Second option', value: 'option2'},
              {label: 'Third option', value: 'option3'}
            ]"
          />
          <div>Selected: {{ singleValue }}</div>

          <D1Select
            v-model="multipleValue"
            type="select"
            label="Multiple select"
            multiple
            :option="[
              {label: 'First option', value: 'option1'},
              {label: 'Second option', value: 'option2'},
              {label: 'Third option', value: 'option3'}
            ]"
          />
          <div>Selected: {{ multipleValue }}</div>
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
}`,...Z.parameters?.docs?.source}}},Q=[`Select`,`SelectBasic`,`SelectVModel`,`SelectSkeleton`]}));$();export{J as Select,Y as SelectBasic,Z as SelectSkeleton,X as SelectVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,Oe as t};