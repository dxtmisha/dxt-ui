import{r as m,c as n,e as d,f,g as w,m as D,C as k,h as x,l as S,z as V,A as B,D as I,E as M,F as C}from"./iframe-BlCC38XJ.js";import{_ as T}from"./D1Menu-xwJcyOBv.js";import{F as A,a as F,b as _,c as P,e as O,f as E,g as L,h as N,_ as W,D as j}from"./D1Input-BVydMC_J.js";import{_ as U}from"./D1SelectValue-BVIfe_AC.js";import{W as $,w as H,a as R,b as z}from"./wiki-fb_eBW86.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as q}from"./D1Skeleton-_eyYcCpr.js";class J{constructor(e,t,o,l,s){this.props=e,this.className=t,this.components=o,this.extra=l,this.index=s}element=m();is=n(()=>!!(!this.props.disabled&&this.components));binds=n(()=>{const e=d(f(this.extra),this.props.menuAttrs,{class:`${this.className}__menu`});return{disabled:this.props.disabled,...e}});expose={open:n(()=>!!this.element.value?.open),setOpen:async e=>this.element.value?.setOpen(e),toOpen:async()=>this.element.value?.toOpen(),toClose:async()=>this.element.value?.toClose(),toggle:async()=>this.element.value?.toggle(),menuElement:this.element};getElement(){return this.element.value}render=(e,t)=>this.components?this.components.render("menu",{ref:this.element,...w(t??{},this.binds.value)},e,this.index):[]}class K{constructor(e,t,o,l){this.props=e,this.attributes=t,this.value=o,this.event=l}isEdit=n(()=>!!(this.props.editValue&&!this.props.multiple));binds=n(()=>d(this.attributes.listForInput.value,{name:this.props.name,type:"text",required:this.props.required,readonly:!this.isEdit.value,placeholder:this.props.placeholder,"data-menu-control":"1",onInput:this.isEdit.value?this.event.onInput:this.event.onSelect}));onKeydown=e=>{e.target.click(),e.preventDefault()}}class G{value=m("");get(){return this.value.value}set(e){this.value.value=e}onInput=e=>{this.value.value=String(e.value??"")}}let Q=class{constructor(e,t,o,l,s,y,h,v){this.props=e,this.refs=t,this.element=o,this.classDesign=l,this.className=s,this.components=y,this.slots=h,this.emits=v,this.attributes=new A(this.props),this.change=new F(this.props),this.elementItem=new _(this.props,this.element),this.value=new P(this.props,this.refs,this.elementItem),this.code=new O(this.props),this.validation=new E(this.props,this.attributes,this.value,this.change,this.code),this.event=new L(this.props,this.change,this.value,this.validation,this.emits),this.field=new N(this.props,this.value,this.components,this.event,void 0,void 0,()=>this.menu.getElement()?.toggle,()=>this.menu.getElement()?.next(),()=>this.menu.getElement()?.previous(),n(()=>({iconTrailing:this.iconTrailing.value,maxlength:this.props.max,cancel:this.props.cancel??(this.props.multiple?"auto":"none")}))),this.menu=new J(this.props,this.className,this.components,n(()=>({windowAttrs:{hide:!k(e.option)&&!this.isSlot.value,widthMatch:!0},tag:"span",barsLabel:e.label,barsDescription:e.helperMessage,disabled:e.disabled||e.readonly,autoClose:!e.multiple,list:D(e.option),max:this.props.max,filterMode:this.props.filterMode,hideList:e.hideList,onClick:this.event.onSelect,onClickSlot:this.onClick,onUpdateValue:this.isArrow()?this.event.onValue:void 0,isSelectedByValue:!0,roleItem:this.props.multiple?"menuitemcheckbox":"menuitemradio"}))),this.input=new K(this.props,this.attributes,this.value,this.event),this.filter=new G}attributes;elementItem;change;value;code;validation;event;field;menu;input;filter;isSlot=n(()=>!!(this.slots?.contextTop||this.slots?.contextBottom));iconTrailing=n(()=>{if(!this.props.disabled&&!this.isArrow())return this.props.iconTrailing??this.props.iconArrowDown});onClick=e=>{e&&this.value.set(e)};isArrow(){return!!this.props.arrow&&this.props.arrow!=="none"}};const X={};class Y extends x{item;constructor(e,t,o){super(e,t,o),this.item=new Q(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.menu.expose,value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass("input")}}initStyles(){return{}}initRender(){return this.item.field.render({default:this.renderMenu},{...this.getAttrs(),iconTurn:this.item.menu.expose.open.value,class:this.classes?.value.main,validationMessage:this.item.validation.message.value})}renderMenu=e=>this.item.menu.render({control:t=>this.renderMenuControl(e,t),title:t=>this.renderTitle(t),footer:t=>this.initSlot("footer",void 0,t),contextTop:t=>this.initSlot("contextTop",void 0,t),contextBottom:t=>this.initSlot("contextBottom",void 0,t)},{selected:this.item.value.item.value,highlight:this.item.filter.get()});renderMenuControl=(e,t)=>{const o=[];return this.item.input.isEdit.value||o.push(this.renderMenuControlValue(e,t)),o.push(this.renderMenuControlInput(e,t)),o};renderMenuControlInput=(e,t)=>{const o=this.item.input.isEdit.value,l=o?e.className:e.classForFocus,s={};return S("input",d(this.item.input.binds.value,t.binds,{ref:this.element,id:e.id,value:this.item.value.get(),class:[t.classesWindow.controlOpenOnly,l]},o?void 0:s))};renderMenuControlValue=(e,t)=>this.components.renderOne("selectValue",d(t.binds,{class:e.className,disabled:this.props.disabled,value:t.selectedList.value,multiple:this.props.multiple,placeholder:this.props.placeholder,onClick:this.item.event.onSelect}));renderTitle=e=>{const t=[];return this.props.showSearch&&t.push(this.renderFilterInput(e)),this.initSlot("title",t,e),t};renderFilterInput=e=>S("div",{class:[this.classes?.value.input,e.classesWindow.static]},this.components.renderOne("input",d({icon:this.props.iconSearch,onInputLite:this.item.filter.onInput,inputAttrs:{"data-menu-control":"1"}},this.props.inputSearchAttrs)))}const Z=T,ee=U,te=W,g={...X,iconArrowDown:"keyboard_arrow_down",iconSearch:"search",menuAttrs:{itemAttrs:{dense:!0}},inputSearchAttrs:{fieldAttrs:{size:"sm"}}},a=V({name:"D1Select",__name:"D1Select",props:B({editValue:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{},iconSearch:{},inputSearchAttrs:{},focus:{type:Boolean},selected:{type:Boolean},readonly:{type:Boolean},disabled:{type:Boolean},align:{},cancel:{},fieldAttrs:{},id:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},icon:{},prefix:{},suffix:{},caption:{},required:{type:Boolean},fieldLabelAttrs:{},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},forceShowMessage:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},detail:{},isSkeleton:{type:Boolean},option:{},multiple:{type:Boolean},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},placeholder:{},value:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},max:{},arrow:{},arrowStep:{},arrowAlign:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},menuAttrs:{}},g),emits:["update:value","update:modelValue","input","inputLite","change","changeLite"],setup(i,{expose:e,emit:t}){const o=t,l=i,s=n(()=>({main:{"d1-select":!0}})),y=n(()=>({})),h=new Y("d1.select",l,{emits:o,classes:s,styles:y,components:{menu:Z,field:j,selectValue:ee,input:te}}),v=h.render();return e(h.expose()),(le,se)=>(C(),I(M(v)))}});a.__docgenInfo={name:"D1Select",exportName:"default",displayName:"D1Select",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Select/D1Select.vue"]};const oe=[{name:"align",type:"string",option:["center","right","left"]},{name:"arrow",type:"string",option:["auto","none","carousel","stepper"]},{name:"arrowAlign",type:"string",option:["center","right","left"]},{name:"arrowStep",type:"NumberOrString"},{name:"autocapitalize",type:"string",option:["off","none","sentences","words","characters"]},{name:"autocomplete",type:"string"},{name:"autocorrect",type:"string",option:["on","off"]},{name:"autofocus",type:"boolean"},{name:"cancel",type:"string",option:["auto","always","none"]},{name:"caption",type:"string | number"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"editValue",type:"boolean"},{name:"enterKeyHint",type:"string",option:["enter","done","go","next","previous","search","send"]},{name:"fieldAttrs",type:"ConstrBind<FieldProps>"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounterProps>"},{name:"fieldLabelAttrs",type:"ConstrBind<FieldLabelProps>"},{name:"fieldMessageAttrs",type:"ConstrBind<FieldMessageProps>"},{name:"filterMode",type:"boolean"},{name:"focus",type:"boolean"},{name:"forceShowMessage",type:"boolean"},{name:"form",type:"string"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"hideList",type:"boolean"},{name:"icon",type:"IconValue<IconProps>"},{name:"iconArrowDown",type:"IconValue<IconProps>"},{name:"iconAttrs",type:"ConstrBind<IconProps>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconSearch",type:"IconValue<IconProps>"},{name:"iconTrailing",type:"IconValue<IconProps>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"id",type:"string | number"},{name:"inputAttrs",type:"Record<string, any>"},{name:"inputMode",type:"string",option:["none","text","decimal","numeric","tel","search","email","url"]},{name:"inputSearchAttrs",type:"ConstrBind<InputProps>"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"loading",type:"boolean | ConstrBind<ProgressProps>"},{name:"match",type:"FieldMatch"},{name:"max",type:"NumberOrString"},{name:"menuAttrs",type:"ConstrBind<MenuProps>"},{name:"modelValue",type:"Value"},{name:"multiple",type:"boolean"},{name:"name",type:"string"},{name:"onUpdate:modelValue",type:"(value: any) => void"},{name:"onUpdate:value",type:"(value: any) => void"},{name:"option",type:"ListRecord"},{name:"placeholder",type:"string"},{name:"prefix",type:"string | number"},{name:"readonly",type:"boolean"},{name:"required",type:"boolean"},{name:"selected",type:"boolean"},{name:"showSearch",type:"boolean"},{name:"spellcheck",type:"string",option:["true","false"]},{name:"suffix",type:"string | number"},{name:"tabindex",type:"number"},{name:"validationCode",type:"FieldValidityCode"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"},{name:"value",type:"Value"}],b=new $("Select",oe,g,H,R,z),ne={title:"Ui/Select",component:a,parameters:{design:"d1",docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},r={render:i=>({components:{D1Select:a},setup:()=>({args:i}),template:`
      <D1Select v-bind="args" />
    `})},p={name:"Базовые",render:()=>({components:{D1Select:a},setup(){return{options:m([{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"},{label:"Python",value:"py"},{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Ruby",value:"rb"},{label:"Go",value:"go"},{label:"PHP",value:"php"}])}},template:`
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
    `})},c={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Select:a},setup(){return{singleValue:m("option2"),multipleValue:m(["option1","option3"])}},template:`
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
    `})},u={name:"Скелетон",render:()=>({components:{D1Select:a,D1Skeleton:q},template:`
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
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["Select","SelectBasic","SelectVModel","SelectSkeleton"],ye=Object.freeze(Object.defineProperty({__proto__:null,Select:r,SelectBasic:p,SelectSkeleton:u,SelectVModel:c,__namedExportsOrder:ie,default:ne},Symbol.toStringTag,{value:"Module"}));export{ye as S,r as a,b,p as c,c as d,u as e};
