import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Et as r,Ht as i,Kt as a,Nt as o,Ot as s,P as c,Tt as l,f as u,i as d,l as f,t as p,wt as m,xt as h}from"./iframe-yo6yIkeP.js";import{a as g,d as _,f as v,m as y,n as b,o as x,p as S,t as C,u as w}from"./wiki-Ck-JDNL8.js";import{n as T,t as ee}from"./AriaStaticInclude-CS1hPGyK-B_wnUV8r.js";import{a as te,o as ne}from"./D1Progress-BNNOQXJZ.js";import{n as re,t as ie}from"./EnabledInclude-BvkWRxpe-YOhKKTt8.js";import{n as ae,r as oe}from"./SkeletonInclude-DtRzx2oh-pOj3kBXl.js";import{n as E,t as se}from"./LabelInclude-BeVk9z8H-Batge3rW.js";import{n as ce,t as le}from"./DescriptionInclude-CBzY5AM--BR76zIL4.js";import{a as ue,n as de,o as fe,t as pe}from"./D1Ripple-DdlzTkrG.js";import{n as me,t as he}from"./Image-Bf_buphc.js";import{n as ge,t as _e}from"./D1Skeleton-YL0_DuxC.js";import{a as ve,i as ye,t as be}from"./FieldInputCheckInclude-B0xGTYEZ-CUB0qBL9.js";import{a as xe,c as Se,i as Ce,n as we,o as Te,r as D}from"./FieldEventInclude-CXXXtxbQ-CVadklti.js";import{a as O,o as Ee}from"./D1FieldMessage-BXsne9zi.js";import{n as De,t as Oe}from"./FieldMessage-Bjdopcg7.js";import{n as ke,t as Ae}from"./Progress-D00-CkSE.js";var k,A,j,M,N=e((()=>{ee(),v(),te(),ie(),ae(),se(),ce(),ue(),ye(),Ce(),O(),h(),u(),k=class{constructor(e,t){S(this,`item`,n(()=>d(this.getIcon(),`value`))),this.props=e,this.value=t}getIcon(){if(this.value.boolean.value&&!this.props.loading)return this.props.indeterminate?this.props.iconIndeterminate:this.props.iconCheckbox}},A=class{constructor(e,t,n,r,i,a,o,s,c){S(this,`type`,`checkbox`),S(this,`attributes`,void 0),S(this,`change`,void 0),S(this,`code`,void 0),S(this,`description`,void 0),S(this,`elementItem`,void 0),S(this,`enabled`,void 0),S(this,`event`,void 0),S(this,`icon`,void 0),S(this,`label`,void 0),S(this,`message`,void 0),S(this,`progress`,void 0),S(this,`ripple`,void 0),S(this,`skeleton`,void 0),S(this,`validation`,void 0),S(this,`value`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{CheckboxIconConstructor:l=k,DescriptionConstructor:u=le,EnabledConstructor:d=re,FieldAttributesIncludeConstructor:f=xe,FieldChangeIncludeConstructor:p=Se,FieldCodeIncludeConstructor:m=we,FieldElementIncludeConstructor:h=be,FieldEventIncludeConstructor:g=Te,FieldMessageConstructor:_=Ee,FieldValidationIncludeConstructor:v=D,FieldValueIncludeConstructor:y=ve,LabelConstructor:b=E,ProgressConstructor:x=ne,RippleConstructor:C=fe,SkeletonConstructor:w=oe}=c??{};this.skeleton=new w(this.props,this.classDesign,[`classText`]),this.progress=new x(this.props,this.className,this.components,{circular:!0,inverse:!0}),this.change=new p(this.props),this.elementItem=new h(this.props,this.element),this.attributes=new f(this.props),this.value=new y(this.props,this.refs,this.elementItem),this.code=new m(this.props),this.validation=new v(this.props,this.attributes,this.value,this.change,this.code),this.event=new g(this.props,this.change,this.value,this.validation,this.emits),this.message=new _(this.props,this.className,this.components,this.validation.message),this.icon=new l(this.props,this.value),this.label=new b(e,i,void 0,o,void 0,void 0,void 0,this.skeleton),this.description=new u(e,i,o,this.skeleton),this.enabled=new d(e,this.progress),this.ripple=new C(i,a,this.enabled)}},j={valueVariantHide:`0`,block:!0,itemCenter:!0},M=class extends p{constructor(e,t,n,i=A){super(e,t,n),S(this,`item`,void 0),S(this,`renderBody`,()=>{let e=[...this.renderChecked(),...this.renderInfo()];return r(`span`,{class:this.classes?.value.body},e)}),S(this,`renderInput`,()=>r(`input`,f(this.item.attributes.listForCheckbox.value,{class:this.classes?.value.input,type:this.item.type,checked:this.item.value.item.value,onInput:this.item.event.onChecked,...T.invalid(this.item.validation.isError())}))),S(this,`renderInputHidden`,()=>r(`input`,{name:this.props.name,type:`hidden`,value:this.props.valueVariantHide})),S(this,`renderChecked`,()=>[r(`span`,{class:this.classes?.value.item,...T.hidden()},[...this.item.progress.render(),r(`span`,{class:[this.classes?.value.icon,this.item.skeleton.classesSkeleton.classBackground]},[this.components.renderOne(`image`,this.item.icon.item.value)]),...this.item.ripple.render()])]),S(this,`renderInfo`,()=>this.item.label.is.value||this.item.description.is.value?[r(`span`,{class:this.classes?.value.info},[...this.item.label.render(),...this.item.description.render(),...this.item.message.render()])]:[]),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{value:this.item.value.item,checkValidity:this.item.validation.checkValidity,validationMessage:this.item.validation.message}}initClasses(){return{main:{},input:this.getSubClass(`input`),body:this.getSubClass(`body`),item:this.getSubClass(`item`),icon:this.getSubClass(`icon`),loading:this.getSubClass(`loading`),info:this.getSubClass(`info`),label:this.getSubClass(`label`)}}initStyles(){return{}}initRender(){return r(`label`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},[this.renderInputHidden(),this.renderInput(),this.renderBody()])}}})),P,je=e((()=>{de(),P=pe})),F,I,L=e((()=>{N(),F={adaptive:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`],container:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},I={...j,iconCheckbox:`check`,iconIndeterminate:`remove`,block:!0,itemCenter:!0}})),Me=e((()=>{})),R,z=e((()=>{h(),u(),N(),me(),De(),ke(),je(),L(),Me(),R=l({name:`D1Checkbox`,__name:`D1Checkbox`,props:s({label:{},labelId:{},description:{},descriptionId:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},counterId:{},maxlength:{},fieldCounterAttrs:{},modelValue:{type:Boolean},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},detail:{},name:{},id:{},required:{type:Boolean},readonly:{type:Boolean},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},valueVariant:{type:[Number,String,Boolean]},valueVariantHide:{type:[Number,String,Boolean]},indeterminate:{type:Boolean},loading:{type:[Boolean,Object]},isSkeleton:{type:Boolean},iconCheckbox:{},iconIndeterminate:{},block:{type:Boolean},adaptive:{},container:{},itemCenter:{type:Boolean},focus:{type:Boolean}},I),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:r}){let i=r,s=e,l=new M(`d1.checkbox`,s,{emits:i,classes:n(()=>({main:{"d1-checkbox":!0,"d1-checkbox--block":s.block,[`d1-checkbox--adaptive--${s.adaptive}`]:c(F.adaptive,s.adaptive),[`d1-checkbox--container--${s.container}`]:c(F.container,s.container),"d1-checkbox--required":s.required,"d1-checkbox--itemCenter":s.itemCenter,"d1-checkbox--focus":s.focus,"d1-checkbox--disabled":s.disabled}})),styles:n(()=>({})),components:{image:he,fieldMessage:Oe,progress:Ae,ripple:P}}),u=l.render();return t(l.expose()),(e,t)=>(o(),m(a(u)))}})})),B,Ne=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Checkbox`,exportName:`default`,displayName:`D1Checkbox`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Checkbox/D1Checkbox.vue`]})})),V,H,U,W,Pe=e((()=>{C(),L(),V=[{name:`adaptive`,type:`string | undefined`,option:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`autocapitalize`,type:`string | undefined`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string | undefined`},{name:`autocorrect`,type:`string | undefined`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean | undefined`},{name:`block`,type:`boolean | undefined`},{name:`container`,type:`string | undefined`,option:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`counter`,type:`string | number | undefined`},{name:`counterId`,type:`string | undefined`},{name:`counterShow`,type:`boolean | undefined`},{name:`counterTemplate`,type:`string | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`detail`,type:`Record<string, any> | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`enterKeyHint`,type:`string | undefined`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps> | undefined`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps> | undefined`},{name:`focus`,type:`boolean | undefined`},{name:`forceShowMessage`,type:`boolean | undefined`},{name:`form`,type:`string | undefined`},{name:`helperId`,type:`string | undefined`},{name:`helperMessage`,type:`string | undefined`},{name:`iconCheckbox`,type:`string | ConstrBind<ImageProps> | null | undefined`},{name:`iconIndeterminate`,type:`string | ConstrBind<ImageProps> | null | undefined`},{name:`id`,type:`string | number | undefined`},{name:`indeterminate`,type:`boolean | undefined`},{name:`inputAttrs`,type:`Record<string, any> | undefined`},{name:`inputMode`,type:`string | undefined`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean | undefined`},{name:`itemCenter`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps> | undefined`},{name:`match`,type:`FieldMatch | undefined`},{name:`maxlength`,type:`string | number | undefined`},{name:`modelValue`,type:`boolean | undefined`},{name:`name`,type:`string | undefined`},{name:`onUpdate:modelValue`,type:`((value: boolean) => void) | undefined`},{name:`onUpdate:value`,type:`((value: boolean) => void) | undefined`},{name:`placeholder`,type:`string | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`required`,type:`boolean | undefined`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`tabindex`,type:`number | undefined`},{name:`validationCode`,type:`FieldValidityCode | undefined`},{name:`validationId`,type:`string | undefined`},{name:`validationMessage`,type:`string | undefined`},{name:`value`,type:`boolean | undefined`},{name:`valueVariant`,type:`NumberOrStringOrBoolean | undefined`},{name:`valueVariantHide`,type:`NumberOrStringOrBoolean | undefined`}],H=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`boolean`}]}],W={component:`Checkbox`,props:V,slots:H,events:U,defaults:I,wikiDesign:b}})),G,K=e((()=>{_(),x(),Pe(),G=new w(W.component,W.props,W.defaults,W.wikiDesign,g,y)})),Fe=t({Checkbox:()=>J,CheckboxSkeleton:()=>X,CheckboxSlots:()=>Z,CheckboxVModel:()=>Y,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{Ne(),K(),ge(),h(),q={title:`Ui/Checkbox`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={},Y={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Checkbox:B},setup(){return{checkboxValue:i(!1),indeterminateValue:i(null)}},template:`
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