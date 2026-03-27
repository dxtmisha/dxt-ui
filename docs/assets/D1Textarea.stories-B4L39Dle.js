import{n as e,r as t}from"./chunk-BneVvdWh.js";import{St as n,Vt as r,_t as i,bt as a,d as o,h as s,kt as c,u as l,wt as u,xt as d,yt as f}from"./iframe-I1fckF_t.js";import{a as p,d as m,f as h,g,l as _,n as v,p as y,t as ee,u as b}from"./wiki-CMC-2lzg.js";import{a as te,c as ne,d as re,i as ie,n as ae,r as x,t as S,u as C}from"./FieldEventInclude-Dtd9ULXn-DwlBlP8W.js";import{i as w,n as T,r as E,t as D}from"./Field-C7ywrm21.js";import{n as O,t as oe}from"./D1TextareaAutosize-RU32Z61u.js";var k,A,j,M=e((()=>{h(),ne(),E(),i(),l(),k=class{constructor(e,t,n,r,i,a,o,c,l){y(this,`attributes`,void 0),y(this,`elementItem`,void 0),y(this,`change`,void 0),y(this,`value`,void 0),y(this,`code`,void 0),y(this,`validation`,void 0),y(this,`event`,void 0),y(this,`field`,void 0),y(this,`binds`,f(()=>({ref:this.element,autosize:this.props.autosize,value:this.value.item.value,onBlur:this.event.onBlur,onInput:this.event.onInput,onChange:this.event.onChange}))),y(this,`bindsInput`,f(()=>s(this.attributes.listForInput.value,this.props.textareaAttrs,{cols:this.props.cols,rows:this.props.rows,fieldSizing:this.props.fieldSizing}))),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=c;let{FieldAttributesIncludeConstructor:u=te,FieldChangeIncludeConstructor:d=re,FieldCodeIncludeConstructor:p=x,FieldElementIncludeConstructor:m=S,FieldEventIncludeConstructor:h=ae,FieldIncludeConstructor:g=w,FieldValidationIncludeConstructor:_=ie,FieldValueIncludeConstructor:v=C}=l??{};this.change=new d(this.props),this.attributes=new u(this.props),this.elementItem=new m(this.props,this.element),this.value=new v(this.props,this.refs,this.elementItem),this.code=new p(this.props),this.validation=new _(this.props,this.attributes,this.value,this.change,this.code),this.event=new h(this.props,this.change,this.value,this.validation,this.emits),this.field=new g(this.props,this.value,this.components,this.event,void 0,void 0,void 0,void 0,void 0,f(()=>({maxlength:this.props.maxlength})))}},A={cancel:`none`,autosize:!0},j=class extends o{constructor(e,t,r,i=k){super(e,t,r),y(this,`item`,void 0),y(this,`renderInput`,e=>{let t=s(e.binds,this.item.binds.value);return this.components.is(`textareaAutosize`)?[this.components.renderOne(`textareaAutosize`,{...t,inputAttrs:this.item.bindsInput.value})]:[n(`textarea`,{...t,...this.item.bindsInput.value})]}),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return this.item.field.render({default:this.renderInput},{...this.getAttrs(),class:this.classes?.value.main,validationMessage:this.item.validation.message.value})}}})),N,se=e((()=>{O(),N=oe})),P,F=e((()=>{M(),P={...A}})),I=e((()=>{})),L,R=e((()=>{i(),l(),M(),se(),T(),F(),I(),L=d({name:`D1Textarea`,__name:`D1Textarea`,props:u({textareaAttrs:{},autosize:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},minlength:{},maxlength:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},rows:{},cols:{},wrap:{},fieldSizing:{}},P),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let i=new j(`d1.textarea`,e,{emits:n,classes:f(()=>({main:{"d1-textarea":!0}})),styles:f(()=>({})),components:{textareaAutosize:N,field:D}}),o=i.render();return t(i.expose()),(e,t)=>(c(),a(r(o)))}})})),z,B=e((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Textarea`,exportName:`default`,displayName:`D1Textarea`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Textarea/D1Textarea.vue`]})})),V,H,U,W,G=e((()=>{b(),ee(),F(),V=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`autosize`,type:`boolean`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`cols`,type:`NumberOrString`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<Field>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabel>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`fieldSizing`,type:`string`,option:[`content`,`fixed`]},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`match`,type:`FieldMatch`},{name:`maxlength`,type:`NumberOrString`},{name:`minlength`,type:`NumberOrString`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: string) => void`},{name:`onUpdate:value`,type:`(value: string) => void`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`rows`,type:`NumberOrString`},{name:`selected`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textareaAttrs`,type:`ConstrBind<TextareaAutosize>`},{name:`textCancel`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`},{name:`wrap`,type:`string`,option:[`soft`,`hard`,`off`]}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`leading`,properties:[{name:`props`,type:`FieldControl`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`},{name:`suffix`,description:`Suffix slot/ Слот суффикса`},{name:`trailing`,properties:[{name:`props`,type:`FieldControl`}]}],U=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:` value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:` value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],W={component:`Textarea`,props:V,slots:H,events:U,defaults:P,wikiDesign:v}})),K,q=e((()=>{b(),p(),G(),K=new m(W.component,W.props,W.defaults,W.wikiDesign,_,g)})),ce=t({Textarea:()=>Y,TextareaAutosize:()=>Z,TextareaBasic:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{B(),q(),J={title:`Ui/Textarea`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Textarea:z},setup:()=>({args:e}),template:`
      <D1Textarea v-bind="args" />
    `})},X={name:`Базовое использование`,render:()=>({components:{D1Textarea:z},template:`
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
    `})},Z={name:`Авто-размер`,render:()=>({components:{D1Textarea:z},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Textarea`,`TextareaBasic`,`TextareaAutosize`]}));$();export{Y as Textarea,Z as TextareaAutosize,X as TextareaBasic,Q as __namedExportsOrder,J as default,q as i,$ as n,K as r,ce as t};