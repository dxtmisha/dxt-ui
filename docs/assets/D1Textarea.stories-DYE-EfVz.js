import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,Ot as i,bt as a,d as o,gt as s,h as c,u as l,vt as u,xt as d,yt as f}from"./iframe-InwAcaLb.js";import{a as p,d as m,l as h,m as g,n as _,t as v,u as y}from"./wiki-DiKtF90Q.js";import{a as b,c as x,i as S,n as ee,o as te,r as ne,s as re,t as ie}from"./FieldEventInclude-h5Fg7306-CBfO9EUW.js";import{i as ae,n as C,r as w,t as T}from"./Field-Cc3oi5Jh.js";import{n as E,t as D}from"./D1TextareaAutosize-XbOP9QDR.js";var O,k,A,j,M,N,P=e((()=>{s(),l(),re(),w(),O=Object.defineProperty,k=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t,n)=>k(e,typeof t==`symbol`?t:t+``,n),j=class{constructor(e,t,n,r,i,a,o,s,l){A(this,`attributes`),A(this,`elementItem`),A(this,`change`),A(this,`value`),A(this,`code`),A(this,`validation`),A(this,`event`),A(this,`field`),A(this,`binds`,u(()=>({ref:this.element,autosize:this.props.autosize,value:this.value.item.value,onBlur:this.event.onBlur,onInput:this.event.onInput,onChange:this.event.onChange}))),A(this,`bindsInput`,u(()=>c(this.attributes.listForInput.value,this.props.textareaAttrs,{cols:this.props.cols,rows:this.props.rows,fieldSizing:this.props.fieldSizing}))),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{FieldAttributesIncludeConstructor:d=ie,FieldChangeIncludeConstructor:f=S,FieldCodeIncludeConstructor:p=b,FieldElementIncludeConstructor:m=te,FieldEventIncludeConstructor:h=ne,FieldIncludeConstructor:g=ae,FieldValidationIncludeConstructor:_=ee,FieldValueIncludeConstructor:v=x}=l??{};this.change=new f(this.props),this.attributes=new d(this.props),this.elementItem=new m(this.props,this.element),this.value=new v(this.props,this.refs,this.elementItem),this.code=new p(this.props),this.validation=new _(this.props,this.attributes,this.value,this.change,this.code),this.event=new h(this.props,this.change,this.value,this.validation,this.emits),this.field=new g(this.props,this.value,this.components,this.event,void 0,void 0,void 0,void 0,void 0,u(()=>({maxlength:this.props.maxlength})))}},M={cancel:`none`,autosize:!0},N=class extends o{constructor(e,t,n,r=j){super(e,t,n),A(this,`item`),A(this,`renderInput`,e=>{let t=c(e.binds,this.item.binds.value);return this.components.is(`textareaAutosize`)?[this.components.renderOne(`textareaAutosize`,{...t,inputAttrs:this.item.bindsInput.value})]:[d(`textarea`,{...t,...this.item.bindsInput.value})]}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return this.item.field.render({default:this.renderInput},{...this.getAttrs(),class:this.classes?.value.main,validationMessage:this.item.validation.message.value})}}})),F,oe=e((()=>{E(),F=D})),I,L=e((()=>{P(),I={...M}})),R=e((()=>{})),z,B=e((()=>{s(),l(),P(),oe(),C(),L(),R(),z=a({name:`D1Textarea`,__name:`D1Textarea`,props:r({textareaAttrs:{},autosize:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},minlength:{},maxlength:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},rows:{},cols:{},wrap:{},fieldSizing:{}},I),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:r}){let a=new N(`d1.textarea`,e,{emits:r,classes:u(()=>({main:{"d1-textarea":!0}})),styles:u(()=>({})),components:{textareaAutosize:F,field:T}}),o=a.render();return t(a.expose()),(e,t)=>(i(),f(n(o)))}})})),V,H=e((()=>{B(),B(),V=z,z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{name:`D1Textarea`,exportName:`default`,displayName:`D1Textarea`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Textarea/D1Textarea.vue`]})})),U,W,G=e((()=>{y(),v(),L(),U=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`autosize`,type:`boolean`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`cols`,type:`NumberOrString`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<Field>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabel>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`fieldSizing`,type:`string`,option:[`content`,`fixed`]},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`match`,type:`FieldMatch`},{name:`maxlength`,type:`NumberOrString`},{name:`minlength`,type:`NumberOrString`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: string) => void`},{name:`onUpdate:value`,type:`(value: string) => void`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`rows`,type:`NumberOrString`},{name:`selected`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textareaAttrs`,type:`ConstrBind<TextareaAutosize>`},{name:`textCancel`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`},{name:`wrap`,type:`string`,option:[`soft`,`hard`,`off`]}],W={component:`Textarea`,props:U,defaults:I,wikiDesign:_}})),K,q=e((()=>{y(),p(),G(),K=new m(W.component,W.props,W.defaults,W.wikiDesign,h,g)})),se=t({Textarea:()=>Y,TextareaAutosize:()=>Z,TextareaBasic:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{H(),q(),J={title:`Ui/Textarea`,component:V,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Textarea:V},setup:()=>({args:e}),template:`
      <D1Textarea v-bind="args" />
    `})},X={name:`Базовое использование`,render:()=>({components:{D1Textarea:V},template:`
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
    `})},Z={name:`Авто-размер`,render:()=>({components:{D1Textarea:V},template:`
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
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Textarea`,`TextareaBasic`,`TextareaAutosize`]}));$();export{Y as Textarea,Z as TextareaAutosize,X as TextareaBasic,Q as __namedExportsOrder,J as default,q as i,$ as n,K as r,se as t};