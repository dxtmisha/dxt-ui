import{Q as z,d as c,$ as k,h as C,I as A,K as S,L as F,M,N as O}from"./iframe-B21bnPHY.js";import{w as V,D as N,O as q,T as L,V as P,N as R,H as U}from"./FieldEventInclude-h5Fg7306-DZi5NvtN.js";import{y as j,D as H}from"./index-CyvQbBIu.js";import{_ as W}from"./D1TextareaAutosize-DeyniCi-.js";import{w as E,W as $,a as K,b as Q}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";var G=Object.defineProperty,J=(i,e,n)=>e in i?G(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,t=(i,e,n)=>J(i,typeof e!="symbol"?e+"":e,n);class X{constructor(e,n,s,r,l,o,u,h,b){t(this,"attributes"),t(this,"elementItem"),t(this,"change"),t(this,"value"),t(this,"code"),t(this,"validation"),t(this,"event"),t(this,"field"),t(this,"binds",c(()=>({ref:this.element,autosize:this.props.autosize,value:this.value.item.value,onBlur:this.event.onBlur,onInput:this.event.onInput,onChange:this.event.onChange}))),t(this,"bindsInput",c(()=>k(this.attributes.listForInput.value,this.props.textareaAttrs,{cols:this.props.cols,rows:this.props.rows,fieldSizing:this.props.fieldSizing}))),this.props=e,this.refs=n,this.element=s,this.classDesign=r,this.className=l,this.components=o,this.slots=u,this.emits=h;const{FieldAttributesIncludeConstructor:v=N,FieldChangeIncludeConstructor:w=q,FieldCodeIncludeConstructor:x=L,FieldElementIncludeConstructor:T=P,FieldEventIncludeConstructor:D=R,FieldIncludeConstructor:I=j,FieldValidationIncludeConstructor:_=U,FieldValueIncludeConstructor:B=V}=b??{};this.change=new w(this.props),this.attributes=new v(this.props),this.elementItem=new T(this.props,this.element),this.value=new B(this.props,this.refs,this.elementItem),this.code=new x(this.props),this.validation=new _(this.props,this.attributes,this.value,this.change,this.code),this.event=new D(this.props,this.change,this.value,this.validation,this.emits),this.field=new I(this.props,this.value,this.components,this.event,void 0,void 0,void 0,void 0,void 0,c(()=>({maxlength:this.props.maxlength})))}}const Y={cancel:"none",autosize:!0};class Z extends z{constructor(e,n,s,r=X){super(e,n,s),t(this,"item"),t(this,"renderInput",l=>{const o=k(l.binds,this.item.binds.value);return this.components.is("textareaAutosize")?[this.components.renderOne("textareaAutosize",{...o,inputAttrs:this.item.bindsInput.value})]:[C("textarea",{...o,...this.item.bindsInput.value})]}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){var e;return this.item.field.render({default:this.renderInput},{...this.getAttrs(),class:(e=this.classes)==null?void 0:e.value.main,validationMessage:this.item.validation.message.value})}}const ee=W,f={...Y},a=A({name:"D1Textarea",__name:"D1Textarea",props:M({textareaAttrs:{},autosize:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},minlength:{},maxlength:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},rows:{},cols:{},wrap:{},fieldSizing:{}},f),emits:["update:value","update:modelValue","input","inputLite","change","changeLite"],setup(i,{expose:e,emit:n}){const s=n,r=i,l=c(()=>({main:{"d1-textarea":!0}})),o=c(()=>({})),u=new Z("d1.textarea",r,{emits:s,classes:l,styles:o,components:{textareaAutosize:ee,field:H}}),h=u.render();return e(u.expose()),(b,v)=>(O(),S(F(h)))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{name:"D1Textarea",exportName:"default",displayName:"D1Textarea",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Textarea/D1Textarea.vue"]});const te=[{name:"align",type:"string",option:["center","right","left"]},{name:"autocapitalize",type:"string",option:["off","none","sentences","words","characters"]},{name:"autocomplete",type:"string"},{name:"autocorrect",type:"string",option:["on","off"]},{name:"autofocus",type:"boolean"},{name:"autosize",type:"boolean"},{name:"cancel",type:"string",option:["auto","always","none"]},{name:"caption",type:"string | number"},{name:"captionDecorative",type:"boolean"},{name:"cols",type:"NumberOrString"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"enterKeyHint",type:"string",option:["enter","done","go","next","previous","search","send"]},{name:"fieldAttrs",type:"ConstrBind<Field>"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounter>"},{name:"fieldLabelAttrs",type:"ConstrBind<FieldLabel>"},{name:"fieldMessageAttrs",type:"ConstrBind<FieldMessage>"},{name:"fieldSizing",type:"string",option:["content","fixed"]},{name:"focus",type:"boolean"},{name:"forceShowMessage",type:"boolean"},{name:"form",type:"string"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"href",type:"string"},{name:"icon",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTrailing",type:"IconValue<Icon>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"id",type:"string | number"},{name:"inputAttrs",type:"Record<string, any>"},{name:"inputMode",type:"string",option:["none","text","decimal","numeric","tel","search","email","url"]},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"loading",type:"boolean | ConstrBind<Progress>"},{name:"match",type:"FieldMatch"},{name:"maxlength",type:"NumberOrString"},{name:"minlength",type:"NumberOrString"},{name:"modelValue",type:"string"},{name:"name",type:"string"},{name:"onUpdate:modelValue",type:"(value: string) => void"},{name:"onUpdate:value",type:"(value: string) => void"},{name:"placeholder",type:"string"},{name:"prefix",type:"string | number"},{name:"prefixId",type:"string"},{name:"readonly",type:"boolean"},{name:"required",type:"boolean"},{name:"rows",type:"NumberOrString"},{name:"selected",type:"boolean"},{name:"spellcheck",type:"string",option:["true","false"]},{name:"suffix",type:"string | number"},{name:"suffixId",type:"string"},{name:"tabindex",type:"number"},{name:"textareaAttrs",type:"ConstrBind<TextareaAutosize>"},{name:"textCancel",type:"TextValue"},{name:"validationCode",type:"FieldValidityCode"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"},{name:"value",type:"string"},{name:"wrap",type:"string",option:["soft","hard","off"]}],y={component:"Textarea",props:te,defaults:f,wikiDesign:E},g=new $(y.component,y.props,y.defaults,y.wikiDesign,K,Q),ie={title:"Ui/Textarea",component:a,parameters:{design:"d1",docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},d={render:i=>({components:{D1Textarea:a},setup:()=>({args:i}),template:`
      <D1Textarea v-bind="args" />
    `})},p={name:"Базовое использование",render:()=>({components:{D1Textarea:a},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Textarea label="Label" placeholder="Placeholder" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Filled</div>
            <D1Textarea
              label="Label"
              value="Modern web development relies heavily on robust form components. The Textarea component offers a flexible solution for multi-line input, adapting to user content with auto-resizing capabilities. It integrates seamlessly with validation systems and provides visual feedback through states and helper text, ensuring a smooth user experience across different devices and screen sizes."
            />
          </div>
        </div>
    `})},m={name:"Авто-размер",render:()=>({components:{D1Textarea:a},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Autosize (default)</div>
            <D1Textarea label="Autosize" autosize />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Fixed Rows</div>
            <D1Textarea label="5 Rows" :autosize="false" rows="5" />
          </div>
        </div>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Textarea
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Textarea v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1Textarea
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Textarea label="Label" placeholder="Placeholder" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Filled</div>
            <D1Textarea
              label="Label"
              value="Modern web development relies heavily on robust form components. The Textarea component offers a flexible solution for multi-line input, adapting to user content with auto-resizing capabilities. It integrates seamlessly with validation systems and provides visual feedback through states and helper text, ensuring a smooth user experience across different devices and screen sizes."
            />
          </div>
        </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Авто-размер',
  render: () => ({
    components: {
      D1Textarea
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Autosize (default)</div>
            <D1Textarea label="Autosize" autosize />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Fixed Rows</div>
            <D1Textarea label="5 Rows" :autosize="false" rows="5" />
          </div>
        </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};const ne=["Textarea","TextareaBasic","TextareaAutosize"],pe=Object.freeze(Object.defineProperty({__proto__:null,Textarea:d,TextareaAutosize:m,TextareaBasic:p,__namedExportsOrder:ne,default:ie},Symbol.toStringTag,{value:"Module"}));export{pe as T,d as a,g as b,p as c,m as d};
