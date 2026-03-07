import{Q as E,h as l,d as x,$ as R,W as j,I as P,K as X,L as q,M as z,N as K,O as f,r as D}from"./iframe-B21bnPHY.js";import{v as Q}from"./DescriptionInclude-D4ane9aR-CZ15f9ou.js";import{h as G}from"./EnabledInclude-B9oXYBtR-DBiaBpt0.js";import{x as J}from"./LabelInclude-D-mLvjK5-ChLwDT3O.js";import{D as Y,O as Z,T as ee,V as te,N as ne,H as oe,w as se}from"./FieldEventInclude-h5Fg7306-DZi5NvtN.js";import{b as ie,D as ae}from"./index-DcX0HAx8.js";import{$ as re}from"./SkeletonInclude-BIUzAO2s-Cv6A7S7E.js";import{b as le}from"./ProgressInclude-DlEbC7XP-DODvJZXk.js";import{o as ce}from"./RippleInclude-Du5yIzX_-Dn-UuUvY.js";import{l as S}from"./AriaStaticInclude-DRHG8ILX-IjLEgAa7.js";import{D as de}from"./index-B65AS5-8.js";import{D as he}from"./index-BslfpVYv.js";import{_ as pe}from"./D1Ripple-DaSf7R-W.js";import{w as me,W as ue,a as be,b as ke}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";import{_ as ge}from"./D1Skeleton-LvRPzgGQ.js";var ve=Object.defineProperty,ye=(s,t,i)=>t in s?ve(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,e=(s,t,i)=>ye(s,typeof t!="symbol"?t+"":t,i);class xe{constructor(t,i){e(this,"item",x(()=>j(this.getIcon(),"value"))),this.props=t,this.value=i}getIcon(){if(this.value.boolean.value&&!this.props.loading)return this.props.indeterminate?this.props.iconIndeterminate:this.props.iconCheckbox}}class Ce{constructor(t,i,d,o,n,a,c,g,v){e(this,"type","checkbox"),e(this,"attributes"),e(this,"change"),e(this,"code"),e(this,"description"),e(this,"elementItem"),e(this,"enabled"),e(this,"event"),e(this,"icon"),e(this,"label"),e(this,"message"),e(this,"progress"),e(this,"ripple"),e(this,"skeleton"),e(this,"validation"),e(this,"value"),this.props=t,this.refs=i,this.element=d,this.classDesign=o,this.className=n,this.components=a,this.slots=c,this.emits=g;const{CheckboxIconConstructor:C=xe,DescriptionConstructor:V=Q,EnabledConstructor:B=G,FieldAttributesIncludeConstructor:M=Y,FieldChangeIncludeConstructor:_=Z,FieldCodeIncludeConstructor:F=ee,FieldElementIncludeConstructor:N=te,FieldEventIncludeConstructor:O=ne,FieldMessageConstructor:$=ie,FieldValidationIncludeConstructor:A=oe,FieldValueIncludeConstructor:L=se,LabelConstructor:U=J,ProgressConstructor:H=le,RippleConstructor:T=ce,SkeletonConstructor:W=re}=v??{};this.skeleton=new W(this.props,this.classDesign,["classText"]),this.progress=new H(this.props,this.className,this.components,{circular:!0,inverse:!0}),this.change=new _(this.props),this.elementItem=new N(this.props,this.element),this.attributes=new M(this.props),this.value=new L(this.props,this.refs,this.elementItem),this.code=new F(this.props),this.validation=new A(this.props,this.attributes,this.value,this.change,this.code),this.event=new O(this.props,this.change,this.value,this.validation,this.emits),this.message=new $(this.props,this.className,this.components,this.validation.message),this.icon=new C(this.props,this.value),this.label=new U(t,n,void 0,c,void 0,void 0,void 0,this.skeleton),this.description=new V(t,n,c,this.skeleton),this.enabled=new B(t,this.progress),this.ripple=new T(n,a,this.enabled)}}const fe={valueVariantHide:"0",block:!0,itemCenter:!0};class De extends E{constructor(t,i,d,o=Ce){super(t,i,d),e(this,"item"),e(this,"renderBody",()=>{var n;const a=[...this.renderChecked(),...this.renderInfo()];return l("span",{class:(n=this.classes)==null?void 0:n.value.body},a)}),e(this,"renderInput",()=>{var n;return l("input",R(this.item.attributes.listForCheckbox.value,{class:(n=this.classes)==null?void 0:n.value.input,type:this.item.type,checked:this.item.value.item.value,onInput:this.item.event.onChecked,...S.invalid(this.item.validation.isError())}))}),e(this,"renderInputHidden",()=>l("input",{name:this.props.name,type:"hidden",value:this.props.valueVariantHide})),e(this,"renderChecked",()=>{var n,a;return[l("span",{class:(n=this.classes)==null?void 0:n.value.item,...S.hidden()},[...this.item.progress.render(),l("span",{class:[(a=this.classes)==null?void 0:a.value.icon,this.item.skeleton.classesSkeleton.classBackground]},[this.components.renderOne("image",this.item.icon.item.value)]),...this.item.ripple.render()])]}),e(this,"renderInfo",()=>{var n;return this.item.label.is.value||this.item.description.is.value?[l("span",{class:(n=this.classes)==null?void 0:n.value.info},[...this.item.label.render(),...this.item.description.render(),...this.item.message.render()])]:[]}),this.item=new o(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass("input"),body:this.getSubClass("body"),item:this.getSubClass("item"),icon:this.getSubClass("icon"),loading:this.getSubClass("loading"),info:this.getSubClass("info"),label:this.getSubClass("label")}}initStyles(){return{}}initRender(){var t;return l("label",{...this.getAttrs(),ref:this.element,class:(t=this.classes)==null?void 0:t.value.main},[this.renderInputHidden(),this.renderInput(),this.renderBody()])}}const Se=pe,w={adaptive:["rightAlways","rightSm","rightMd","rightLg","rightXl","right2xl"],container:["rightSm","rightMd","rightLg","rightXl","right2xl"]},I={...fe,iconCheckbox:"check",iconIndeterminate:"remove",block:!0,itemCenter:!0},r=P({name:"D1Checkbox",__name:"D1Checkbox",props:z({label:{},labelId:{},description:{},descriptionId:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},counterId:{},maxlength:{},fieldCounterAttrs:{},modelValue:{type:Boolean},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},detail:{},name:{},id:{},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},valueVariant:{type:[Number,String,Boolean]},valueVariantHide:{type:[Number,String,Boolean]},indeterminate:{type:Boolean},loading:{type:[Boolean,Object]},isSkeleton:{type:Boolean},iconCheckbox:{},iconIndeterminate:{},block:{type:Boolean},adaptive:{},container:{},itemCenter:{type:Boolean},focus:{type:Boolean}},I),emits:["update:value","update:modelValue","input","inputLite","change","changeLite"],setup(s,{expose:t,emit:i}){const d=i,o=s,n=x(()=>({main:{"d1-checkbox":!0,"d1-checkbox--block":o.block,[`d1-checkbox--adaptive--${o.adaptive}`]:f(w.adaptive,o.adaptive),[`d1-checkbox--container--${o.container}`]:f(w.container,o.container),"d1-checkbox--required":o.required,"d1-checkbox--itemCenter":o.itemCenter,"d1-checkbox--focus":o.focus,"d1-checkbox--disabled":o.disabled}})),a=x(()=>({})),c=new De("d1.checkbox",o,{emits:d,classes:n,styles:a,components:{image:de,fieldMessage:ae,progress:he,ripple:Se}}),g=c.render();return t(c.expose()),(v,C)=>(K(),X(q(g)))}});r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{name:"D1Checkbox",exportName:"default",displayName:"D1Checkbox",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Checkbox/D1Checkbox.vue"]});const we=[{name:"adaptive",type:"string",option:["rightAlways","rightSm","rightMd","rightLg","rightXl","right2xl"]},{name:"autocapitalize",type:"string",option:["off","none","sentences","words","characters"]},{name:"autocomplete",type:"string"},{name:"autocorrect",type:"string",option:["on","off"]},{name:"autofocus",type:"boolean"},{name:"block",type:"boolean"},{name:"container",type:"string",option:["rightSm","rightMd","rightLg","rightXl","right2xl"]},{name:"counter",type:"string | number"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"counterTemplate",type:"string"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"enterKeyHint",type:"string",option:["enter","done","go","next","previous","search","send"]},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounter>"},{name:"fieldMessageAttrs",type:"ConstrBind<FieldMessage>"},{name:"focus",type:"boolean"},{name:"forceShowMessage",type:"boolean"},{name:"form",type:"string"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"iconCheckbox",type:"string | ConstrBind<Image> | null"},{name:"iconIndeterminate",type:"string | ConstrBind<Image> | null"},{name:"id",type:"string | number"},{name:"indeterminate",type:"boolean"},{name:"inputAttrs",type:"Record<string, any>"},{name:"inputMode",type:"string",option:["none","text","decimal","numeric","tel","search","email","url"]},{name:"isSkeleton",type:"boolean"},{name:"itemCenter",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"loading",type:"boolean | ConstrBind<Progress>"},{name:"match",type:"FieldMatch"},{name:"maxlength",type:"string | number"},{name:"modelValue",type:"boolean"},{name:"name",type:"string"},{name:"onUpdate:modelValue",type:"(value: boolean) => void"},{name:"onUpdate:value",type:"(value: boolean) => void"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"required",type:"boolean"},{name:"spellcheck",type:"string",option:["true","false"]},{name:"tabindex",type:"number"},{name:"validationCode",type:"FieldValidityCode"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"},{name:"value",type:"boolean"},{name:"valueVariant",type:"NumberOrStringOrBoolean"},{name:"valueVariantHide",type:"NumberOrStringOrBoolean"}],k={component:"Checkbox",props:we,defaults:I,wikiDesign:me},y=new ue(k.component,k.props,k.defaults,k.wikiDesign,be,ke),Ie={title:"Ui/Checkbox",component:r,parameters:{design:"d1",docs:{description:{component:y.getDescription()}}},argTypes:y.getWiki(),args:y.getValues()},h={render:s=>({components:{D1Checkbox:r},setup:()=>({args:s}),template:`
      <D1Checkbox v-bind="args" />
    `})},p={name:"Базовые",render:()=>({components:{D1Checkbox:r},template:`
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Unchecked" />
          <D1Checkbox label="Checked" :value="true" />
          <D1Checkbox label="Indeterminate" indeterminate :value="true" />
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Disabled & Checked" :value="true" disabled />
        </div>
    `})},m={name:"Состояния",render:()=>({components:{D1Checkbox:r},template:`
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Normal" />
          <D1Checkbox label="Focus" focus />
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Loading" loading />
          <D1Checkbox label="Readonly" readonly />
        </div>
    `})},u={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Checkbox:r},setup(){return{checkboxValue:D(!1),indeterminateValue:D(null)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = true">Check</button>
            <button class="wiki-storybook-button" @click="checkboxValue = false">Uncheck</button>
          </div>
          <div>Value: {{ checkboxValue }}</div>
          <D1Checkbox
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
    `})},b={name:"Скелетон",render:()=>({components:{D1Checkbox:r,D1Skeleton:ge},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Checkbox isSkeleton label="Loading checkbox" />
            <D1Checkbox isSkeleton label="Another loading checkbox" />
          </div>
        </D1Skeleton>
    `})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Checkbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Checkbox v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Checkbox
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Unchecked" />
          <D1Checkbox label="Checked" :value="true" />
          <D1Checkbox label="Indeterminate" indeterminate :value="true" />
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Disabled & Checked" :value="true" disabled />
        </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Состояния',
  render: () => ({
    components: {
      D1Checkbox
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Normal" />
          <D1Checkbox label="Focus" focus />
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Loading" loading />
          <D1Checkbox label="Readonly" readonly />
        </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Checkbox
    },
    setup() {
      return {
        checkboxValue: ref(false),
        indeterminateValue: ref(null)
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = true">Check</button>
            <button class="wiki-storybook-button" @click="checkboxValue = false">Uncheck</button>
          </div>
          <div>Value: {{ checkboxValue }}</div>
          <D1Checkbox
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Checkbox,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Checkbox isSkeleton label="Loading checkbox" />
            <D1Checkbox isSkeleton label="Another loading checkbox" />
          </div>
        </D1Skeleton>
    \`
  })
}`,...b.parameters?.docs?.source}}};const Ve=["Checkbox","CheckboxBasic","CheckboxStates","CheckboxVModel","CheckboxSkeleton"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:h,CheckboxBasic:p,CheckboxSkeleton:b,CheckboxStates:m,CheckboxVModel:u,__namedExportsOrder:Ve,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Pe as C,h as a,y as b,p as c,m as d,u as e,b as f};
