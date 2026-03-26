import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,It as i,Ot as a,bt as o,c as s,d as c,gt as l,h as u,st as d,u as f,vt as p,xt as m,yt as h}from"./iframe-InwAcaLb.js";import{a as g,d as _,l as v,m as y,n as b,t as x,u as S}from"./wiki-DiKtF90Q.js";import{n as ee,t as C}from"./LabelInclude-D-mLvjK5-DIhPuV9X.js";import{n as w,t as te}from"./AriaStaticInclude-DRHG8ILX-NB6_d56h.js";import{n as ne,t as re}from"./DescriptionInclude-D4ane9aR-CsdAjI0e.js";import{n as ie,t as ae}from"./EnabledInclude-B9oXYBtR-BWoFxKZ7.js";import{n as oe,t as se}from"./SkeletonInclude-BIUzAO2s-Clg69TKC.js";import{a as ce,o as le}from"./D1Progress-v8Jdz3E4.js";import{a as ue,n as de,o as fe,t as pe}from"./D1Ripple-Ck9bicWm.js";import{n as me,t as T}from"./Image-yxTicQn1.js";import{n as he,t as ge}from"./D1Skeleton-CXvijoBv.js";import{a as _e,c as ve,i as ye,n as be,o as xe,r as Se,s as Ce,t as we}from"./FieldEventInclude-h5Fg7306-CBfO9EUW.js";import{a as Te,o as Ee}from"./D1FieldMessage-vVhmPrCM.js";import{n as De,t as E}from"./FieldMessage-92Q6t2hr.js";import{n as Oe,t as ke}from"./Progress-kBQQU3P9.js";var D,O,k,A,j,M,N,P=e((()=>{f(),re(),ie(),C(),Ce(),l(),Ee(),oe(),le(),ue(),te(),D=Object.defineProperty,O=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t,n)=>O(e,typeof t==`symbol`?t:t+``,n),A=class{constructor(e,t){k(this,`item`,p(()=>s(this.getIcon(),`value`))),this.props=e,this.value=t}getIcon(){if(this.value.boolean.value&&!this.props.loading)return this.props.indeterminate?this.props.iconIndeterminate:this.props.iconCheckbox}},j=class{constructor(e,t,n,r,i,a,o,s,c){k(this,`type`,`checkbox`),k(this,`attributes`),k(this,`change`),k(this,`code`),k(this,`description`),k(this,`elementItem`),k(this,`enabled`),k(this,`event`),k(this,`icon`),k(this,`label`),k(this,`message`),k(this,`progress`),k(this,`ripple`),k(this,`skeleton`),k(this,`validation`),k(this,`value`),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{CheckboxIconConstructor:l=A,DescriptionConstructor:u=ne,EnabledConstructor:d=ae,FieldAttributesIncludeConstructor:f=we,FieldChangeIncludeConstructor:p=ye,FieldCodeIncludeConstructor:m=_e,FieldElementIncludeConstructor:h=xe,FieldEventIncludeConstructor:g=Se,FieldMessageConstructor:_=Te,FieldValidationIncludeConstructor:v=be,FieldValueIncludeConstructor:y=ve,LabelConstructor:b=ee,ProgressConstructor:x=ce,RippleConstructor:S=fe,SkeletonConstructor:C=se}=c??{};this.skeleton=new C(this.props,this.classDesign,[`classText`]),this.progress=new x(this.props,this.className,this.components,{circular:!0,inverse:!0}),this.change=new p(this.props),this.elementItem=new h(this.props,this.element),this.attributes=new f(this.props),this.value=new y(this.props,this.refs,this.elementItem),this.code=new m(this.props),this.validation=new v(this.props,this.attributes,this.value,this.change,this.code),this.event=new g(this.props,this.change,this.value,this.validation,this.emits),this.message=new _(this.props,this.className,this.components,this.validation.message),this.icon=new l(this.props,this.value),this.label=new b(e,i,void 0,o,void 0,void 0,void 0,this.skeleton),this.description=new u(e,i,o,this.skeleton),this.enabled=new d(e,this.progress),this.ripple=new S(i,a,this.enabled)}},M={valueVariantHide:`0`,block:!0,itemCenter:!0},N=class extends c{constructor(e,t,n,r=j){super(e,t,n),k(this,`item`),k(this,`renderBody`,()=>{let e=[...this.renderChecked(),...this.renderInfo()];return m(`span`,{class:this.classes?.value.body},e)}),k(this,`renderInput`,()=>m(`input`,u(this.item.attributes.listForCheckbox.value,{class:this.classes?.value.input,type:this.item.type,checked:this.item.value.item.value,onInput:this.item.event.onChecked,...w.invalid(this.item.validation.isError())}))),k(this,`renderInputHidden`,()=>m(`input`,{name:this.props.name,type:`hidden`,value:this.props.valueVariantHide})),k(this,`renderChecked`,()=>[m(`span`,{class:this.classes?.value.item,...w.hidden()},[...this.item.progress.render(),m(`span`,{class:[this.classes?.value.icon,this.item.skeleton.classesSkeleton.classBackground]},[this.components.renderOne(`image`,this.item.icon.item.value)]),...this.item.ripple.render()])]),k(this,`renderInfo`,()=>this.item.label.is.value||this.item.description.is.value?[m(`span`,{class:this.classes?.value.info},[...this.item.label.render(),...this.item.description.render(),...this.item.message.render()])]:[]),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass(`input`),body:this.getSubClass(`body`),item:this.getSubClass(`item`),icon:this.getSubClass(`icon`),loading:this.getSubClass(`loading`),info:this.getSubClass(`info`),label:this.getSubClass(`label`)}}initStyles(){return{}}initRender(){return m(`label`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},[this.renderInputHidden(),this.renderInput(),this.renderBody()])}}})),F,Ae=e((()=>{de(),F=pe})),I,L,R=e((()=>{P(),I={adaptive:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`],container:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},L={...M,iconCheckbox:`check`,iconIndeterminate:`remove`,block:!0,itemCenter:!0}})),je=e((()=>{})),z,B=e((()=>{l(),f(),P(),me(),De(),Oe(),Ae(),R(),je(),z=o({name:`D1Checkbox`,__name:`D1Checkbox`,props:r({label:{},labelId:{},description:{},descriptionId:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},counterId:{},maxlength:{},fieldCounterAttrs:{},modelValue:{type:Boolean},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},detail:{},name:{},id:{},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},valueVariant:{type:[Number,String,Boolean]},valueVariantHide:{type:[Number,String,Boolean]},indeterminate:{type:Boolean},loading:{type:[Boolean,Object]},isSkeleton:{type:Boolean},iconCheckbox:{},iconIndeterminate:{},block:{type:Boolean},adaptive:{},container:{},itemCenter:{type:Boolean},focus:{type:Boolean}},L),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:r}){let i=r,o=e,s=new N(`d1.checkbox`,o,{emits:i,classes:p(()=>({main:{"d1-checkbox":!0,"d1-checkbox--block":o.block,[`d1-checkbox--adaptive--${o.adaptive}`]:d(I.adaptive,o.adaptive),[`d1-checkbox--container--${o.container}`]:d(I.container,o.container),"d1-checkbox--required":o.required,"d1-checkbox--itemCenter":o.itemCenter,"d1-checkbox--focus":o.focus,"d1-checkbox--disabled":o.disabled}})),styles:p(()=>({})),components:{image:T,fieldMessage:E,progress:ke,ripple:F}}),c=s.render();return t(s.expose()),(e,t)=>(a(),h(n(c)))}})})),V,Me=e((()=>{B(),B(),V=z,z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{name:`D1Checkbox`,exportName:`default`,displayName:`D1Checkbox`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Checkbox/D1Checkbox.vue`]})})),H,U,Ne=e((()=>{S(),x(),R(),H=[{name:`adaptive`,type:`string`,option:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`block`,type:`boolean`},{name:`container`,type:`string`,option:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`iconCheckbox`,type:`string | ConstrBind<Image> | null`},{name:`iconIndeterminate`,type:`string | ConstrBind<Image> | null`},{name:`id`,type:`string | number`},{name:`indeterminate`,type:`boolean`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`itemCenter`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`match`,type:`FieldMatch`},{name:`maxlength`,type:`string | number`},{name:`modelValue`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: boolean) => void`},{name:`onUpdate:value`,type:`(value: boolean) => void`},{name:`placeholder`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`tabindex`,type:`number`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`boolean`},{name:`valueVariant`,type:`NumberOrStringOrBoolean`},{name:`valueVariantHide`,type:`NumberOrStringOrBoolean`}],U={component:`Checkbox`,props:H,defaults:L,wikiDesign:b}})),W,G=e((()=>{S(),g(),Ne(),W=new _(U.component,U.props,U.defaults,U.wikiDesign,v,y)})),Pe=t({Checkbox:()=>q,CheckboxBasic:()=>J,CheckboxSkeleton:()=>Z,CheckboxStates:()=>Y,CheckboxVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>K}),K,q,J,Y,X,Z,Q,$=e((()=>{Me(),G(),he(),l(),K={title:`Ui/Checkbox`,component:V,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},q={render:e=>({components:{D1Checkbox:V},setup:()=>({args:e}),template:`
      <D1Checkbox v-bind="args" />
    `})},J={name:`Базовые`,render:()=>({components:{D1Checkbox:V},template:`
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Unchecked" />
          <D1Checkbox label="Checked" :value="true" />
          <D1Checkbox label="Indeterminate" indeterminate :value="true" />
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Disabled & Checked" :value="true" disabled />
        </div>
    `})},Y={name:`Состояния`,render:()=>({components:{D1Checkbox:V},template:`
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Normal" />
          <D1Checkbox label="Focus" focus />
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Loading" loading />
          <D1Checkbox label="Readonly" readonly />
        </div>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Checkbox:V},setup(){return{checkboxValue:i(!1),indeterminateValue:i(null)}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Checkbox:V,D1Skeleton:ge},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Checkbox`,`CheckboxBasic`,`CheckboxStates`,`CheckboxVModel`,`CheckboxSkeleton`]}));$();export{q as Checkbox,J as CheckboxBasic,Z as CheckboxSkeleton,Y as CheckboxStates,X as CheckboxVModel,Q as __namedExportsOrder,K as default,G as i,$ as n,W as r,Pe as t};