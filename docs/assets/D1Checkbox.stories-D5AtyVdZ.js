import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,St as r,Vt as i,_t as a,at as o,bt as s,f as c,kt as l,l as u,m as d,r as f,wt as p,xt as m,yt as h}from"./iframe-CuL5mTF3.js";import{a as g,d as _,f as v,g as y,l as b,n as x,p as S,t as C,u as w}from"./wiki-Dd40E_Te.js";import{n as T,t as ee}from"./AriaStaticInclude-CS1hPGyK-s6BAVwCV.js";import{a as te,o as ne}from"./D1Progress-C3LNI2sR.js";import{n as re,t as ie}from"./EnabledInclude-D1O_lLPV-CMXfyvzk.js";import{n as ae,r as oe}from"./SkeletonInclude-DtQCG1qF-CFHKqpqp.js";import{n as se,t as ce}from"./LabelInclude-BJc8uC4Y-Cm6HzDRJ.js";import{n as le,t as ue}from"./DescriptionInclude--_NvJ6ka-DgftFLOt.js";import{a as de,n as fe,o as pe,t as me}from"./D1Ripple-B0KdmUjo.js";import{n as he,t as ge}from"./Image-gHjfHiQp.js";import{n as _e,t as ve}from"./D1Skeleton-BY0eTLzu.js";import{a as ye,c as be,d as xe,i as Se,n as Ce,r as we,t as Te,u as Ee}from"./FieldEventInclude-Dtd9ULXn-BK4o6SuH.js";import{a as De,o as E}from"./D1FieldMessage-BDt3Xu29.js";import{n as Oe,t as ke}from"./FieldMessage-CprybOEE.js";import{n as Ae,t as je}from"./Progress-DoWsqdpm.js";var D,O,k,A,j=e((()=>{ee(),v(),te(),ie(),ae(),ce(),le(),de(),be(),De(),a(),c(),D=class{constructor(e,t){S(this,`item`,h(()=>u(this.getIcon(),`value`))),this.props=e,this.value=t}getIcon(){if(this.value.boolean.value&&!this.props.loading)return this.props.indeterminate?this.props.iconIndeterminate:this.props.iconCheckbox}},O=class{constructor(e,t,n,r,i,a,o,s,c){S(this,`type`,`checkbox`),S(this,`attributes`,void 0),S(this,`change`,void 0),S(this,`code`,void 0),S(this,`description`,void 0),S(this,`elementItem`,void 0),S(this,`enabled`,void 0),S(this,`event`,void 0),S(this,`icon`,void 0),S(this,`label`,void 0),S(this,`message`,void 0),S(this,`progress`,void 0),S(this,`ripple`,void 0),S(this,`skeleton`,void 0),S(this,`validation`,void 0),S(this,`value`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{CheckboxIconConstructor:l=D,DescriptionConstructor:u=ue,EnabledConstructor:d=re,FieldAttributesIncludeConstructor:f=ye,FieldChangeIncludeConstructor:p=xe,FieldCodeIncludeConstructor:m=we,FieldElementIncludeConstructor:h=Te,FieldEventIncludeConstructor:g=Ce,FieldMessageConstructor:_=E,FieldValidationIncludeConstructor:v=Se,FieldValueIncludeConstructor:y=Ee,LabelConstructor:b=se,ProgressConstructor:x=ne,RippleConstructor:C=pe,SkeletonConstructor:w=oe}=c??{};this.skeleton=new w(this.props,this.classDesign,[`classText`]),this.progress=new x(this.props,this.className,this.components,{circular:!0,inverse:!0}),this.change=new p(this.props),this.elementItem=new h(this.props,this.element),this.attributes=new f(this.props),this.value=new y(this.props,this.refs,this.elementItem),this.code=new m(this.props),this.validation=new v(this.props,this.attributes,this.value,this.change,this.code),this.event=new g(this.props,this.change,this.value,this.validation,this.emits),this.message=new _(this.props,this.className,this.components,this.validation.message),this.icon=new l(this.props,this.value),this.label=new b(e,i,void 0,o,void 0,void 0,void 0,this.skeleton),this.description=new u(e,i,o,this.skeleton),this.enabled=new d(e,this.progress),this.ripple=new C(i,a,this.enabled)}},k={valueVariantHide:`0`,block:!0,itemCenter:!0},A=class extends d{constructor(e,t,n,i=O){super(e,t,n),S(this,`item`,void 0),S(this,`renderBody`,()=>{let e=[...this.renderChecked(),...this.renderInfo()];return r(`span`,{class:this.classes?.value.body},e)}),S(this,`renderInput`,()=>r(`input`,f(this.item.attributes.listForCheckbox.value,{class:this.classes?.value.input,type:this.item.type,checked:this.item.value.item.value,onInput:this.item.event.onChecked,...T.invalid(this.item.validation.isError())}))),S(this,`renderInputHidden`,()=>r(`input`,{name:this.props.name,type:`hidden`,value:this.props.valueVariantHide})),S(this,`renderChecked`,()=>[r(`span`,{class:this.classes?.value.item,...T.hidden()},[...this.item.progress.render(),r(`span`,{class:[this.classes?.value.icon,this.item.skeleton.classesSkeleton.classBackground]},[this.components.renderOne(`image`,this.item.icon.item.value)]),...this.item.ripple.render()])]),S(this,`renderInfo`,()=>this.item.label.is.value||this.item.description.is.value?[r(`span`,{class:this.classes?.value.info},[...this.item.label.render(),...this.item.description.render(),...this.item.message.render()])]:[]),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass(`input`),body:this.getSubClass(`body`),item:this.getSubClass(`item`),icon:this.getSubClass(`icon`),loading:this.getSubClass(`loading`),info:this.getSubClass(`info`),label:this.getSubClass(`label`)}}initStyles(){return{}}initRender(){return r(`label`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},[this.renderInputHidden(),this.renderInput(),this.renderBody()])}}})),M,N=e((()=>{fe(),M=me})),P,F,I=e((()=>{j(),P={adaptive:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`],container:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},F={...k,iconCheckbox:`check`,iconIndeterminate:`remove`,block:!0,itemCenter:!0}})),Me=e((()=>{})),L,R=e((()=>{a(),c(),j(),he(),Oe(),Ae(),N(),I(),Me(),L=m({name:`D1Checkbox`,__name:`D1Checkbox`,props:p({label:{},labelId:{},description:{},descriptionId:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},counterId:{},maxlength:{},fieldCounterAttrs:{},modelValue:{type:Boolean},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},detail:{},name:{},id:{},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},valueVariant:{type:[Number,String,Boolean]},valueVariantHide:{type:[Number,String,Boolean]},indeterminate:{type:Boolean},loading:{type:[Boolean,Object]},isSkeleton:{type:Boolean},iconCheckbox:{},iconIndeterminate:{},block:{type:Boolean},adaptive:{},container:{},itemCenter:{type:Boolean},focus:{type:Boolean}},F),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let r=n,a=e,c=new A(`d1.checkbox`,a,{emits:r,classes:h(()=>({main:{"d1-checkbox":!0,"d1-checkbox--block":a.block,[`d1-checkbox--adaptive--${a.adaptive}`]:o(P.adaptive,a.adaptive),[`d1-checkbox--container--${a.container}`]:o(P.container,a.container),"d1-checkbox--required":a.required,"d1-checkbox--itemCenter":a.itemCenter,"d1-checkbox--focus":a.focus,"d1-checkbox--disabled":a.disabled}})),styles:h(()=>({})),components:{image:ge,fieldMessage:ke,progress:je,ripple:M}}),u=c.render();return t(c.expose()),(e,t)=>(l(),s(i(u)))}})})),z,Ne=e((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Checkbox`,exportName:`default`,displayName:`D1Checkbox`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Checkbox/D1Checkbox.vue`]})})),B,V,H,U,Pe=e((()=>{w(),C(),I(),B=[{name:`adaptive`,type:`string`,option:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`block`,type:`boolean`},{name:`container`,type:`string`,option:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`iconCheckbox`,type:`string | ConstrBind<Image> | null`},{name:`iconIndeterminate`,type:`string | ConstrBind<Image> | null`},{name:`id`,type:`string | number`},{name:`indeterminate`,type:`boolean`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`itemCenter`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`match`,type:`FieldMatch`},{name:`maxlength`,type:`string | number`},{name:`modelValue`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: boolean) => void`},{name:`onUpdate:value`,type:`(value: boolean) => void`},{name:`placeholder`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`tabindex`,type:`number`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`boolean`},{name:`valueVariant`,type:`NumberOrStringOrBoolean`},{name:`valueVariantHide`,type:`NumberOrStringOrBoolean`}],V=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`}],H=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:` value`,type:`FieldValidationItem<boolean>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:` value`,type:`FieldValidationItem<boolean>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`boolean`}]}],U={component:`Checkbox`,props:B,slots:V,events:H,defaults:F,wikiDesign:x}})),W,G=e((()=>{w(),g(),Pe(),W=new _(U.component,U.props,U.defaults,U.wikiDesign,b,y)})),Fe=t({Checkbox:()=>q,CheckboxBasic:()=>J,CheckboxSkeleton:()=>Z,CheckboxStates:()=>Y,CheckboxVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>K}),K,q,J,Y,X,Z,Q,$=e((()=>{Ne(),G(),_e(),a(),K={title:`Ui/Checkbox`,component:z,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},q={render:e=>({components:{D1Checkbox:z},setup:()=>({args:e}),template:`
      <D1Checkbox v-bind="args" />
    `})},J={name:`Базовые`,render:()=>({components:{D1Checkbox:z},template:`
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Unchecked" />
          <D1Checkbox label="Checked" :value="true" />
          <D1Checkbox label="Indeterminate" indeterminate :value="true" />
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Disabled & Checked" :value="true" disabled />
        </div>
    `})},Y={name:`Состояния`,render:()=>({components:{D1Checkbox:z},template:`
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Normal" />
          <D1Checkbox label="Focus" focus />
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Loading" loading />
          <D1Checkbox label="Readonly" readonly />
        </div>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Checkbox:z},setup(){return{checkboxValue:n(!1),indeterminateValue:n(null)}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Checkbox:z,D1Skeleton:ve},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Checkbox isSkeleton label="Loading checkbox" />
            <D1Checkbox isSkeleton label="Another loading checkbox" />
          </div>
        </D1Skeleton>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Checkbox`,`CheckboxBasic`,`CheckboxStates`,`CheckboxVModel`,`CheckboxSkeleton`]}));$();export{q as Checkbox,J as CheckboxBasic,Z as CheckboxSkeleton,Y as CheckboxStates,X as CheckboxVModel,Q as __namedExportsOrder,K as default,G as i,$ as n,W as r,Fe as t};