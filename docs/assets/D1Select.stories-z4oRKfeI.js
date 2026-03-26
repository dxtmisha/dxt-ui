import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,It as i,J as a,Ot as o,bt as s,d as c,gt as l,h as u,lt as ee,u as d,vt as f,xt as p,yt as m}from"./iframe-InwAcaLb.js";import{a as h,d as g,l as _,m as v,n as y,t as b,u as x}from"./wiki-DiKtF90Q.js";import{n as S,t as C}from"./AriaStaticInclude-DRHG8ILX-NB6_d56h.js";import{n as w,t as te}from"./D1Skeleton-CXvijoBv.js";import{a as ne,c as re,i as ie,n as ae,o as T,r as oe,s as se,t as ce}from"./FieldEventInclude-h5Fg7306-CBfO9EUW.js";import{n as le,t as ue}from"./D1Input-BqTJw7O8.js";import{i as de,n as fe,r as pe,t as me}from"./Field-Cc3oi5Jh.js";import{a as he,n as ge,o as _e,t as ve}from"./D1Menu-j0Saf6Hh.js";import{n as ye,t as be}from"./D1SelectValue-BNutU5YT.js";var E,D,O,k,A,j,M,N,P=e((()=>{l(),d(),se(),pe(),_e(),C(),E=Object.defineProperty,D=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t,n)=>D(e,typeof t==`symbol`?t:t+``,n),k=class{constructor(e,t,n,r){O(this,`isEdit`,f(()=>!!(this.props.editValue&&!this.props.multiple))),O(this,`binds`,f(()=>u(this.attributes.listForInput.value,{name:this.props.name,type:`text`,required:this.props.required,readonly:!this.isEdit.value,placeholder:this.props.placeholder,"data-menu-control":`1`,onInput:this.isEdit.value?this.event.onInput:this.event.onSelect}))),O(this,`onKeydown`,e=>{e.target.click(),e.preventDefault()}),this.props=e,this.attributes=t,this.value=n,this.event=r}},A=class{constructor(){O(this,`value`,i(``)),O(this,`onInput`,e=>{this.value.value=String(e.value??``)})}get(){return this.value.value}set(e){this.value.value=e}},j=class{constructor(e,t,n,r,i,o,s,c,l){O(this,`attributes`),O(this,`elementItem`),O(this,`change`),O(this,`value`),O(this,`code`),O(this,`validation`),O(this,`event`),O(this,`field`),O(this,`menu`),O(this,`input`),O(this,`filter`),O(this,`isSlot`,f(()=>{var e,t;return!!((e=this.slots)!=null&&e.contextTop||(t=this.slots)!=null&&t.contextBottom)})),O(this,`iconTrailing`,f(()=>{if(!this.props.disabled&&!this.isArrow())return this.props.iconTrailing??this.props.iconArrowDown})),O(this,`onClick`,e=>{e&&this.value.set(e)}),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=o,this.slots=s,this.emits=c;let{FieldAttributesIncludeConstructor:u=ce,FieldChangeIncludeConstructor:d=ie,FieldCodeIncludeConstructor:p=ne,FieldElementIncludeConstructor:m=T,FieldEventIncludeConstructor:h=oe,FieldIncludeConstructor:g=de,FieldValidationIncludeConstructor:_=ae,FieldValueIncludeConstructor:v=re,MenuIncludeConstructor:y=he,SelectFilterConstructor:b=A,SelectInputConstructor:x=k}=l??{};this.attributes=new u(this.props),this.change=new d(this.props),this.elementItem=new m(this.props,this.element),this.value=new v(this.props,this.refs,this.elementItem),this.code=new p(this.props),this.validation=new _(this.props,this.attributes,this.value,this.change,this.code),this.event=new h(this.props,this.change,this.value,this.validation,this.emits),this.field=new g(this.props,this.value,this.components,this.event,void 0,void 0,()=>this.menu.getElement()?.toggle(),()=>this.menu.getElement()?.next(),()=>this.menu.getElement()?.previous(),f(()=>({iconTrailing:this.iconTrailing.value,maxlength:this.props.max,cancel:this.props.cancel??(this.props.multiple?`auto`:`none`)}))),this.menu=new y(this.props,this.className,this.components,f(()=>({windowAttrs:{hide:!ee(this.props.option)&&!this.isSlot.value,widthMatch:!0},tag:`span`,barsLabel:this.props.label,barsDescription:this.props.helperMessage,disabled:this.props.disabled||this.props.readonly,autoClose:!this.props.multiple,list:a(this.props.option),max:this.props.max,filterMode:this.props.filterMode,hideList:this.props.hideList,onClick:this.event.onSelect,onClickSlot:this.onClick,onUpdateValue:this.isArrow()?this.event.onValue:void 0,isSelectedByValue:!0,ariaMultiselectable:this.props.multiple}))),this.input=new x(this.props,this.attributes,this.value,this.event),this.filter=new b}isArrow(){return!!this.props.arrow&&this.props.arrow!==`none`}},M={},N=class extends c{constructor(e,t,n,r=j){super(e,t,n),O(this,`item`),O(this,`renderMenu`,e=>this.item.menu.render({control:t=>this.renderMenuControl(e,t),title:e=>this.renderTitle(e),footer:e=>this.initSlot(`footer`,void 0,e),contextTop:e=>this.initSlot(`contextTop`,void 0,e),contextBottom:e=>this.initSlot(`contextBottom`,void 0,e)},{selected:this.item.value.item.value,highlight:this.item.filter.get()})),O(this,`renderMenuControl`,(e,t)=>{let n=[];return this.item.input.isEdit.value||n.push(this.renderMenuControlValue(e,t)),n.push(this.renderMenuControlInput(e,t)),n}),O(this,`renderMenuControlInput`,(e,t)=>{let n=this.item.input.isEdit.value,r=n?e.className:e.classForFocus,i={};return p(`input`,u(this.item.input.binds.value,t.binds,{ref:this.element,id:e.id,value:this.item.value.get(),class:[t.classesWindow.controlOpenOnly,r],...S.role(`combobox`)},n?void 0:i))}),O(this,`renderMenuControlValue`,(e,t)=>this.components.renderOne(`selectValue`,u(t.binds,{class:e.className,disabled:this.props.disabled,value:t.selectedList.value,multiple:this.props.multiple,placeholder:this.props.placeholder,onClick:this.item.event.onSelect,...S.role(`combobox`)}))),O(this,`renderTitle`,e=>{let t=[];return this.props.showSearch&&t.push(this.renderFilterInput(e)),this.initSlot(`title`,t,e),t}),O(this,`renderFilterInput`,e=>p(`div`,{class:[this.classes?.value.input,e.classesWindow.static]},this.components.renderOne(`input`,u({icon:this.props.iconSearch,onInputLite:this.item.filter.onInput,inputAttrs:{"data-menu-control":`1`}},this.props.inputSearchAttrs)))),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.menu.expose,value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass(`input`)}}initStyles(){return{}}initRender(){let e=this.item.menu.expose.open.value;return this.item.field.render({default:this.renderMenu},{...this.getAttrs(),focus:e,iconTurn:e,class:this.classes?.value.main,validationMessage:this.item.validation.message.value})}}})),F,xe=e((()=>{ge(),F=ve})),I,Se=e((()=>{ye(),I=be})),L,Ce=e((()=>{le(),L=ue})),R,z=e((()=>{P(),R={...M,iconArrowDown:`keyboard_arrow_down`,iconSearch:`search`,menuAttrs:{itemAttrs:{dense:!0}},inputSearchAttrs:{fieldAttrs:{size:`sm`}}}})),we=e((()=>{})),B,V=e((()=>{l(),d(),P(),xe(),fe(),Se(),Ce(),z(),we(),B=s({name:`D1Select`,__name:`D1Select`,props:r({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},max:{},arrow:{},arrowStep:{},arrowAlign:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},menuAttrs:{},editValue:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{},iconSearch:{},inputSearchAttrs:{}},R),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:r}){let i=new N(`d1.select`,e,{emits:r,classes:f(()=>({main:{"d1-select":!0}})),styles:f(()=>({})),components:{menu:F,field:me,selectValue:I,input:L}}),a=i.render();return t(i.expose()),(e,t)=>(o(),m(n(a)))}})})),H,Te=e((()=>{V(),V(),H=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{name:`D1Select`,exportName:`default`,displayName:`D1Select`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Select/D1Select.vue`]})})),U,W,Ee=e((()=>{x(),b(),z(),U=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrow`,type:`string`,option:[`auto`,`none`,`carousel`,`stepper`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowStep`,type:`NumberOrString`},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`editValue`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<Field>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabel>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`hideList`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconArrowDown`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconSearch`,type:`IconValue<Icon>`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`inputSearchAttrs`,type:`ConstrBind<Input>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`match`,type:`FieldMatch`},{name:`max`,type:`NumberOrString`},{name:`menuAttrs`,type:`ConstrBind<Menu>`},{name:`modelValue`,type:`Value`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: any) => void`},{name:`onUpdate:value`,type:`(value: any) => void`},{name:`option`,type:`ListRecord`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`showSearch`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textCancel`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`Value`}],W={component:`Select`,props:U,defaults:R,wikiDesign:y}})),G,K=e((()=>{x(),h(),Ee(),G=new g(W.component,W.props,W.defaults,W.wikiDesign,_,v)})),De=t({Select:()=>J,SelectBasic:()=>Y,SelectSkeleton:()=>Z,SelectVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{Te(),K(),w(),l(),q={title:`Ui/Select`,component:H,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1Select:H},setup:()=>({args:e}),template:`
      <D1Select v-bind="args" />
    `})},Y={name:`Базовые`,render:()=>({components:{D1Select:H},setup(){return{options:i([{label:`JavaScript`,value:`js`},{label:`TypeScript`,value:`ts`},{label:`Python`,value:`py`},{label:`Java`,value:`java`},{label:`C++`,value:`cpp`},{label:`Ruby`,value:`rb`},{label:`Go`,value:`go`},{label:`PHP`,value:`php`}])}},template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Select:H},setup(){return{singleValue:i(`option2`),multipleValue:i([`option1`,`option3`])}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Select:H,D1Skeleton:te},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Select`,`SelectBasic`,`SelectVModel`,`SelectSkeleton`]}));$();export{J as Select,Y as SelectBasic,Z as SelectSkeleton,X as SelectVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,De as t};