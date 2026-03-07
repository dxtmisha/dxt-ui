import{r as f,d as r,t as $,$ as S,g as P,Q as W,h as C,B as j,b as H,I as U,K as R,L as q,M as z,N as J}from"./iframe-B21bnPHY.js";import{D as K,O as G,T as Q,V as X,N as Y,H as Z,w as ee}from"./FieldEventInclude-h5Fg7306-DZi5NvtN.js";import{y as te,D as oe}from"./index-CyvQbBIu.js";import{l as I}from"./AriaStaticInclude-DRHG8ILX-IjLEgAa7.js";import{_ as ne}from"./D1Menu-BPEZh7-p.js";import{_ as ie}from"./D1SelectValue-C1EidVpA.js";import{_ as le}from"./D1Input-Bc0WnIrx.js";import{w as se,W as ae,a as re,b as pe}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";import{_ as ce}from"./D1Skeleton-LvRPzgGQ.js";var ue=Object.defineProperty,de=(l,t,n)=>t in l?ue(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,d=(l,t,n)=>de(l,typeof t!="symbol"?t+"":t,n);class me{constructor(t,n,p,c,i){d(this,"element",f()),d(this,"is",r(()=>!!(!this.props.disabled&&this.components))),d(this,"isOpen",r(()=>{var e;return!!((e=this.element.value)!=null&&e.open)})),d(this,"binds",r(()=>{const e=S(P(this.extra),this.props.menuAttrs,{class:`${this.className}__menu`});return{disabled:this.props.disabled,...e}})),d(this,"expose",{open:r(()=>{var e;return!!((e=this.element.value)!=null&&e.open)}),setOpen:async e=>{var a;return(a=this.element.value)==null?void 0:a.setOpen(e)},toOpen:async()=>{var e;return(e=this.element.value)==null?void 0:e.toOpen()},toClose:async()=>{var e;return(e=this.element.value)==null?void 0:e.toClose()},toggle:async()=>{var e;return(e=this.element.value)==null?void 0:e.toggle()},menuElement:this.element}),d(this,"render",(e,a)=>this.components?this.components.render("menu",{ref:this.element,...$(a??{},this.binds.value)},e,this.index):[]),this.props=t,this.className=n,this.components=p,this.extra=c,this.index=i}getElement(){return this.element.value}}var he=Object.defineProperty,ve=(l,t,n)=>t in l?he(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,o=(l,t,n)=>ve(l,typeof t!="symbol"?t+"":t,n);class ye{constructor(t,n,p,c){o(this,"isEdit",r(()=>!!(this.props.editValue&&!this.props.multiple))),o(this,"binds",r(()=>S(this.attributes.listForInput.value,{name:this.props.name,type:"text",required:this.props.required,readonly:!this.isEdit.value,placeholder:this.props.placeholder,"data-menu-control":"1",onInput:this.isEdit.value?this.event.onInput:this.event.onSelect}))),o(this,"onKeydown",i=>{i.target.click(),i.preventDefault()}),this.props=t,this.attributes=n,this.value=p,this.event=c}}class be{constructor(){o(this,"value",f("")),o(this,"onInput",t=>{var n;this.value.value=String((n=t.value)!=null?n:"")})}get(){return this.value.value}set(t){this.value.value=t}}class ge{constructor(t,n,p,c,i,e,a,m,h){o(this,"attributes"),o(this,"elementItem"),o(this,"change"),o(this,"value"),o(this,"code"),o(this,"validation"),o(this,"event"),o(this,"field"),o(this,"menu"),o(this,"input"),o(this,"filter"),o(this,"isSlot",r(()=>{var s,k;return!!((s=this.slots)!=null&&s.contextTop||(k=this.slots)!=null&&k.contextBottom)})),o(this,"iconTrailing",r(()=>{var s;if(!this.props.disabled&&!this.isArrow())return(s=this.props.iconTrailing)!=null?s:this.props.iconArrowDown})),o(this,"onClick",s=>{s&&this.value.set(s)}),this.props=t,this.refs=n,this.element=p,this.classDesign=c,this.className=i,this.components=e,this.slots=a,this.emits=m;const{FieldAttributesIncludeConstructor:x=K,FieldChangeIncludeConstructor:M=G,FieldCodeIncludeConstructor:B=Q,FieldElementIncludeConstructor:T=X,FieldEventIncludeConstructor:A=Y,FieldIncludeConstructor:_=te,FieldValidationIncludeConstructor:F=Z,FieldValueIncludeConstructor:O=ee,MenuIncludeConstructor:E=me,SelectFilterConstructor:L=be,SelectInputConstructor:N=ye}=h??{};this.attributes=new x(this.props),this.change=new M(this.props),this.elementItem=new T(this.props,this.element),this.value=new O(this.props,this.refs,this.elementItem),this.code=new B(this.props),this.validation=new F(this.props,this.attributes,this.value,this.change,this.code),this.event=new A(this.props,this.change,this.value,this.validation,this.emits),this.field=new _(this.props,this.value,this.components,this.event,void 0,void 0,()=>{var s;return(s=this.menu.getElement())==null?void 0:s.toggle()},()=>{var s;return(s=this.menu.getElement())==null?void 0:s.next()},()=>{var s;return(s=this.menu.getElement())==null?void 0:s.previous()},r(()=>{var s;return{iconTrailing:this.iconTrailing.value,maxlength:this.props.max,cancel:(s=this.props.cancel)!=null?s:this.props.multiple?"auto":"none"}})),this.menu=new E(this.props,this.className,this.components,r(()=>({windowAttrs:{hide:!H(this.props.option)&&!this.isSlot.value,widthMatch:!0},tag:"span",barsLabel:this.props.label,barsDescription:this.props.helperMessage,disabled:this.props.disabled||this.props.readonly,autoClose:!this.props.multiple,list:j(this.props.option),max:this.props.max,filterMode:this.props.filterMode,hideList:this.props.hideList,onClick:this.event.onSelect,onClickSlot:this.onClick,onUpdateValue:this.isArrow()?this.event.onValue:void 0,isSelectedByValue:!0,ariaMultiselectable:this.props.multiple}))),this.input=new N(this.props,this.attributes,this.value,this.event),this.filter=new L}isArrow(){return!!this.props.arrow&&this.props.arrow!=="none"}}const Se={};class fe extends W{constructor(t,n,p,c=ge){super(t,n,p),o(this,"item"),o(this,"renderMenu",i=>this.item.menu.render({control:e=>this.renderMenuControl(i,e),title:e=>this.renderTitle(e),footer:e=>this.initSlot("footer",void 0,e),contextTop:e=>this.initSlot("contextTop",void 0,e),contextBottom:e=>this.initSlot("contextBottom",void 0,e)},{selected:this.item.value.item.value,highlight:this.item.filter.get()})),o(this,"renderMenuControl",(i,e)=>{const a=[];return this.item.input.isEdit.value||a.push(this.renderMenuControlValue(i,e)),a.push(this.renderMenuControlInput(i,e)),a}),o(this,"renderMenuControlInput",(i,e)=>{const a=this.item.input.isEdit.value,m=a?i.className:i.classForFocus,h={};return C("input",S(this.item.input.binds.value,e.binds,{ref:this.element,id:i.id,value:this.item.value.get(),class:[e.classesWindow.controlOpenOnly,m],...I.role("combobox")},a?void 0:h))}),o(this,"renderMenuControlValue",(i,e)=>this.components.renderOne("selectValue",S(e.binds,{class:i.className,disabled:this.props.disabled,value:e.selectedList.value,multiple:this.props.multiple,placeholder:this.props.placeholder,onClick:this.item.event.onSelect,...I.role("combobox")}))),o(this,"renderTitle",i=>{const e=[];return this.props.showSearch&&e.push(this.renderFilterInput(i)),this.initSlot("title",e,i),e}),o(this,"renderFilterInput",i=>{var e;return C("div",{class:[(e=this.classes)==null?void 0:e.value.input,i.classesWindow.static]},this.components.renderOne("input",S({icon:this.props.iconSearch,onInputLite:this.item.filter.onInput,inputAttrs:{"data-menu-control":"1"}},this.props.inputSearchAttrs)))}),this.item=new c(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.menu.expose,value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass("input")}}initStyles(){return{}}initRender(){var t;const n=this.item.menu.expose.open.value;return this.item.field.render({default:this.renderMenu},{...this.getAttrs(),focus:n,iconTurn:n,class:(t=this.classes)==null?void 0:t.value.main,validationMessage:this.item.validation.message.value})}}const we=ne,De=ie,xe=le,V={...Se,iconArrowDown:"keyboard_arrow_down",iconSearch:"search",menuAttrs:{itemAttrs:{dense:!0}},inputSearchAttrs:{fieldAttrs:{size:"sm"}}},u=U({name:"D1Select",__name:"D1Select",props:z({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},max:{},arrow:{},arrowStep:{},arrowAlign:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},option:{},multiple:{type:Boolean},menuAttrs:{},editValue:{type:Boolean},hideList:{type:Boolean},showSearch:{type:Boolean},filterMode:{type:Boolean},iconArrowDown:{},iconSearch:{},inputSearchAttrs:{}},V),emits:["update:value","update:modelValue","input","inputLite","change","changeLite"],setup(l,{expose:t,emit:n}){const p=n,c=l,i=r(()=>({main:{"d1-select":!0}})),e=r(()=>({})),a=new fe("d1.select",c,{emits:p,classes:i,styles:e,components:{menu:we,field:oe,selectValue:De,input:xe}}),m=a.render();return t(a.expose()),(h,x)=>(J(),R(q(m)))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{name:"D1Select",exportName:"default",displayName:"D1Select",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Select/D1Select.vue"]});const ke=[{name:"align",type:"string",option:["center","right","left"]},{name:"arrow",type:"string",option:["auto","none","carousel","stepper"]},{name:"arrowAlign",type:"string",option:["center","right","left"]},{name:"arrowStep",type:"NumberOrString"},{name:"autocapitalize",type:"string",option:["off","none","sentences","words","characters"]},{name:"autocomplete",type:"string"},{name:"autocorrect",type:"string",option:["on","off"]},{name:"autofocus",type:"boolean"},{name:"cancel",type:"string",option:["auto","always","none"]},{name:"caption",type:"string | number"},{name:"captionDecorative",type:"boolean"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"editValue",type:"boolean"},{name:"enterKeyHint",type:"string",option:["enter","done","go","next","previous","search","send"]},{name:"fieldAttrs",type:"ConstrBind<Field>"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounter>"},{name:"fieldLabelAttrs",type:"ConstrBind<FieldLabel>"},{name:"fieldMessageAttrs",type:"ConstrBind<FieldMessage>"},{name:"filterMode",type:"boolean"},{name:"focus",type:"boolean"},{name:"forceShowMessage",type:"boolean"},{name:"form",type:"string"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"hideList",type:"boolean"},{name:"href",type:"string"},{name:"icon",type:"IconValue<Icon>"},{name:"iconArrowDown",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconSearch",type:"IconValue<Icon>"},{name:"iconTrailing",type:"IconValue<Icon>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"id",type:"string | number"},{name:"inputAttrs",type:"Record<string, any>"},{name:"inputMode",type:"string",option:["none","text","decimal","numeric","tel","search","email","url"]},{name:"inputSearchAttrs",type:"ConstrBind<Input>"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"loading",type:"boolean | ConstrBind<Progress>"},{name:"match",type:"FieldMatch"},{name:"max",type:"NumberOrString"},{name:"menuAttrs",type:"ConstrBind<Menu>"},{name:"modelValue",type:"Value"},{name:"multiple",type:"boolean"},{name:"name",type:"string"},{name:"onUpdate:modelValue",type:"(value: any) => void"},{name:"onUpdate:value",type:"(value: any) => void"},{name:"option",type:"ListRecord"},{name:"placeholder",type:"string"},{name:"prefix",type:"string | number"},{name:"prefixId",type:"string"},{name:"readonly",type:"boolean"},{name:"required",type:"boolean"},{name:"selected",type:"boolean"},{name:"showSearch",type:"boolean"},{name:"spellcheck",type:"string",option:["true","false"]},{name:"suffix",type:"string | number"},{name:"suffixId",type:"string"},{name:"tabindex",type:"number"},{name:"textCancel",type:"TextValue"},{name:"validationCode",type:"FieldValidityCode"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"},{name:"value",type:"Value"}],w={component:"Select",props:ke,defaults:V,wikiDesign:se},D=new ae(w.component,w.props,w.defaults,w.wikiDesign,re,pe),Ce={title:"Ui/Select",component:u,parameters:{design:"d1",docs:{description:{component:D.getDescription()}}},argTypes:D.getWiki(),args:D.getValues()},v={render:l=>({components:{D1Select:u},setup:()=>({args:l}),template:`
      <D1Select v-bind="args" />
    `})},y={name:"Базовые",render:()=>({components:{D1Select:u},setup(){return{options:f([{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"},{label:"Python",value:"py"},{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Ruby",value:"rb"},{label:"Go",value:"go"},{label:"PHP",value:"php"}])}},template:`
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
    `})},b={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Select:u},setup(){return{singleValue:f("option2"),multipleValue:f(["option1","option3"])}},template:`
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
    `})},g={name:"Скелетон",render:()=>({components:{D1Select:u,D1Skeleton:ce},template:`
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
    `})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const Ie=["Select","SelectBasic","SelectVModel","SelectSkeleton"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Select:v,SelectBasic:y,SelectSkeleton:g,SelectVModel:b,__namedExportsOrder:Ie,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Ne as S,v as a,D as b,y as c,b as d,g as e};
