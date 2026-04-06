import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Ht as n,Rt as r,St as i,_t as a,bt as o,f as s,kt as c,l,m as u,nt as d,r as f,wt as p,xt as m,yt as h}from"./iframe-DHvUfpTv.js";import{a as g,d as _,f as v,g as y,l as b,n as x,p as S,t as C,u as w}from"./wiki-COBgMBNI.js";import{n as T,t as ee}from"./AriaStaticInclude-CS1hPGyK-WhXq7-dT.js";import{a as te,o as ne}from"./D1Progress-I6EVieBT.js";import{n as re,t as ie}from"./EnabledInclude-CkD_lxMY-DHbwVvua.js";import{n as ae,r as oe}from"./SkeletonInclude-D8on8xmw-C9jTKcO2.js";import{n as E,t as se}from"./LabelInclude-DoZ7EUYO-Dp-gb-W1.js";import{n as ce,t as le}from"./DescriptionInclude-B_Xf_j3l-D_XEcXi-.js";import{a as ue,n as de,o as fe,t as pe}from"./D1Ripple-_UQEFFlQ.js";import{n as me,t as he}from"./Image--LQF8tzj.js";import{n as ge,t as _e}from"./D1Skeleton-CFezRexj.js";import{a as ve,i as ye,t as be}from"./FieldInputCheckInclude-czZ02ymY-DuCMu4ME.js";import{a as xe,c as Se,i as Ce,n as we,o as Te,r as D}from"./FieldEventInclude-DLX__9aJ-CCnpz2G1.js";import{a as O,o as Ee}from"./D1FieldMessage-Dp7tRCwr.js";import{n as De,t as Oe}from"./FieldMessage-0V-3xQZY.js";import{n as ke,t as Ae}from"./Progress-D_Jv806l.js";var k,A,j,M,N=e((()=>{ee(),v(),te(),ie(),ae(),se(),ce(),ue(),ye(),Ce(),O(),a(),s(),k=class{constructor(e,t){S(this,`item`,h(()=>l(this.getIcon(),`value`))),this.props=e,this.value=t}getIcon(){if(this.value.boolean.value&&!this.props.loading)return this.props.indeterminate?this.props.iconIndeterminate:this.props.iconCheckbox}},A=class{constructor(e,t,n,r,i,a,o,s,c){S(this,`type`,`checkbox`),S(this,`attributes`,void 0),S(this,`change`,void 0),S(this,`code`,void 0),S(this,`description`,void 0),S(this,`elementItem`,void 0),S(this,`enabled`,void 0),S(this,`event`,void 0),S(this,`icon`,void 0),S(this,`label`,void 0),S(this,`message`,void 0),S(this,`progress`,void 0),S(this,`ripple`,void 0),S(this,`skeleton`,void 0),S(this,`validation`,void 0),S(this,`value`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{CheckboxIconConstructor:l=k,DescriptionConstructor:u=le,EnabledConstructor:d=re,FieldAttributesIncludeConstructor:f=xe,FieldChangeIncludeConstructor:p=Se,FieldCodeIncludeConstructor:m=we,FieldElementIncludeConstructor:h=be,FieldEventIncludeConstructor:g=Te,FieldMessageConstructor:_=Ee,FieldValidationIncludeConstructor:v=D,FieldValueIncludeConstructor:y=ve,LabelConstructor:b=E,ProgressConstructor:x=ne,RippleConstructor:C=fe,SkeletonConstructor:w=oe}=c??{};this.skeleton=new w(this.props,this.classDesign,[`classText`]),this.progress=new x(this.props,this.className,this.components,{circular:!0,inverse:!0}),this.change=new p(this.props),this.elementItem=new h(this.props,this.element),this.attributes=new f(this.props),this.value=new y(this.props,this.refs,this.elementItem),this.code=new m(this.props),this.validation=new v(this.props,this.attributes,this.value,this.change,this.code),this.event=new g(this.props,this.change,this.value,this.validation,this.emits),this.message=new _(this.props,this.className,this.components,this.validation.message),this.icon=new l(this.props,this.value),this.label=new b(e,i,void 0,o,void 0,void 0,void 0,this.skeleton),this.description=new u(e,i,o,this.skeleton),this.enabled=new d(e,this.progress),this.ripple=new C(i,a,this.enabled)}},j={valueVariantHide:`0`,block:!0,itemCenter:!0},M=class extends u{constructor(e,t,n,r=A){super(e,t,n),S(this,`item`,void 0),S(this,`renderBody`,()=>{let e=[...this.renderChecked(),...this.renderInfo()];return i(`span`,{class:this.classes?.value.body},e)}),S(this,`renderInput`,()=>i(`input`,f(this.item.attributes.listForCheckbox.value,{class:this.classes?.value.input,type:this.item.type,checked:this.item.value.item.value,onInput:this.item.event.onChecked,...T.invalid(this.item.validation.isError())}))),S(this,`renderInputHidden`,()=>i(`input`,{name:this.props.name,type:`hidden`,value:this.props.valueVariantHide})),S(this,`renderChecked`,()=>[i(`span`,{class:this.classes?.value.item,...T.hidden()},[...this.item.progress.render(),i(`span`,{class:[this.classes?.value.icon,this.item.skeleton.classesSkeleton.classBackground]},[this.components.renderOne(`image`,this.item.icon.item.value)]),...this.item.ripple.render()])]),S(this,`renderInfo`,()=>this.item.label.is.value||this.item.description.is.value?[i(`span`,{class:this.classes?.value.info},[...this.item.label.render(),...this.item.description.render(),...this.item.message.render()])]:[]),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass(`input`),body:this.getSubClass(`body`),item:this.getSubClass(`item`),icon:this.getSubClass(`icon`),loading:this.getSubClass(`loading`),info:this.getSubClass(`info`),label:this.getSubClass(`label`)}}initStyles(){return{}}initRender(){return i(`label`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},[this.renderInputHidden(),this.renderInput(),this.renderBody()])}}})),P,je=e((()=>{de(),P=pe})),F,I,L=e((()=>{N(),F={adaptive:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`],container:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},I={...j,iconCheckbox:`check`,iconIndeterminate:`remove`,block:!0,itemCenter:!0}})),Me=e((()=>{})),R,z=e((()=>{a(),s(),N(),me(),De(),ke(),je(),L(),Me(),R=m({name:`D1Checkbox`,__name:`D1Checkbox`,props:p({label:{},labelId:{},description:{},descriptionId:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},counterId:{},maxlength:{},fieldCounterAttrs:{},modelValue:{type:Boolean},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},detail:{},name:{},id:{},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},valueVariant:{type:[Number,String,Boolean]},valueVariantHide:{type:[Number,String,Boolean]},indeterminate:{type:Boolean},loading:{type:[Boolean,Object]},isSkeleton:{type:Boolean},iconCheckbox:{},iconIndeterminate:{},block:{type:Boolean},adaptive:{},container:{},itemCenter:{type:Boolean},focus:{type:Boolean}},I),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:r}){let i=r,a=e,s=new M(`d1.checkbox`,a,{emits:i,classes:h(()=>({main:{"d1-checkbox":!0,"d1-checkbox--block":a.block,[`d1-checkbox--adaptive--${a.adaptive}`]:d(F.adaptive,a.adaptive),[`d1-checkbox--container--${a.container}`]:d(F.container,a.container),"d1-checkbox--required":a.required,"d1-checkbox--itemCenter":a.itemCenter,"d1-checkbox--focus":a.focus,"d1-checkbox--disabled":a.disabled}})),styles:h(()=>({})),components:{image:he,fieldMessage:Oe,progress:Ae,ripple:P}}),l=s.render();return t(s.expose()),(e,t)=>(c(),o(n(l)))}})})),B,Ne=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Checkbox`,exportName:`default`,displayName:`D1Checkbox`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Checkbox/D1Checkbox.vue`]})})),V,H,U,W,Pe=e((()=>{w(),C(),L(),V=[{name:`adaptive`,type:`string`,option:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`block`,type:`boolean`},{name:`container`,type:`string`,option:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterPropsBasic>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessagePropsBasic>`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`iconCheckbox`,type:`string | ConstrBind<ImagePropsBasic>`},{name:`iconIndeterminate`,type:`string | ConstrBind<ImagePropsBasic>`},{name:`id`,type:`string | number`},{name:`indeterminate`,type:`boolean`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`itemCenter`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<ProgressPropsBasic>`},{name:`match`,type:`FieldMatch`},{name:`maxlength`,type:`string | number`},{name:`modelValue`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: boolean) => void`},{name:`onUpdate:value`,type:`(value: boolean) => void`},{name:`placeholder`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`tabindex`,type:`number`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`boolean`},{name:`valueVariant`,type:`NumberOrStringOrBoolean`},{name:`valueVariantHide`,type:`NumberOrStringOrBoolean`}],H=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`}],U=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`boolean`}]}],W={component:`Checkbox`,props:V,slots:H,events:U,defaults:I,wikiDesign:x}})),G,K=e((()=>{w(),g(),Pe(),G=new _(W.component,W.props,W.defaults,W.wikiDesign,b,y)})),Fe=t({Checkbox:()=>J,CheckboxSkeleton:()=>X,CheckboxSlots:()=>Z,CheckboxVModel:()=>Y,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{Ne(),K(),ge(),a(),q={title:`Ui/Checkbox`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={},Y={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Checkbox:B},setup(){return{checkboxValue:r(!1),indeterminateValue:r(null)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = !checkboxValue">Check {{ checkboxValue }}</button>
          </div>
          <D1Checkbox
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
    `})},X={name:`Скелетон`,render:()=>({components:{D1Checkbox:B,D1Skeleton:_e},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Checkbox isSkeleton label="Loading checkbox" />
            <D1Checkbox isSkeleton label="Another loading checkbox" />
          </div>
        </D1Skeleton>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Checkbox:B},template:`
        <D1Checkbox>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </D1Checkbox>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
            <button class="wiki-storybook-button" @click="checkboxValue = !checkboxValue">Check {{ checkboxValue }}</button>
          </div>
          <D1Checkbox
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Checkbox
    },
    template: \`
        <D1Checkbox>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </D1Checkbox>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Checkbox`,`CheckboxVModel`,`CheckboxSkeleton`,`CheckboxSlots`]}));$();export{J as Checkbox,X as CheckboxSkeleton,Z as CheckboxSlots,Y as CheckboxVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,Fe as t};