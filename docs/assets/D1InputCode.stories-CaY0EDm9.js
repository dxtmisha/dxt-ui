import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Gt as n,Kt as r,Ut as i,Vt as a,Wt as o,Yt as s,Zt as c,cn as l,d as u,dn as d,en as f,f as p,ht as m,nn as h}from"./iframe-D7czqiJA.js";import{a as ee,d as g,f as _,l as v,m as y,n as b,p as x,t as S,u as C}from"./wiki-CUC2UhNU.js";import{n as w,t as te}from"./ModelInclude-zsqgq6XZ-7pEdeGAf.js";import{n as T,t as ne}from"./AriaStaticInclude-BsKgXpT8-Crt3dq7t.js";import{n as re,t as ie}from"./D1Skeleton-atWhpGi3.js";import{a as ae,o as oe}from"./D1FieldMessage-BvM8U1Au.js";import{n as se,t as ce}from"./FieldMessage-Djq3tUz9.js";import{a as le,o as ue}from"./D1FieldLabel-DgbaicG-.js";import{n as de,t as fe}from"./FieldLabel-D1Zy0llz.js";import{a as pe,n as E,o as D,t as O}from"./D1InputCodeItem-drbw2Z1q.js";var k,A,j,M=t((()=>{ne(),_(),w(),ae(),le(),D(),a(),u(),k=class{constructor(e,t,n,r,i,a,o,s,u={}){x(this,`props`,void 0),x(this,`refs`,void 0),x(this,`element`,void 0),x(this,`classDesign`,void 0),x(this,`className`,void 0),x(this,`components`,void 0),x(this,`slots`,void 0),x(this,`emits`,void 0),x(this,`fieldLabel`,void 0),x(this,`fieldMessage`,void 0),x(this,`inputCodeItem`,void 0),x(this,`model`,void 0),x(this,`value`,l(``)),x(this,`onInput`,e=>{if(this.value.value!==e){var t;this.value.value=e,(t=this.emits)==null||t.call(this,`input`,e),this.model.emit(e)}}),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{FieldLabelIncludeConstructor:d=ue,FieldMessageIncludeConstructor:f=oe,InputCodeItemIncludeConstructor:p=pe,ModelIncludeConstructor:m=te}=u;this.fieldLabel=new d(i,e,a,()=>({loading:e.loading})),this.fieldMessage=new f(i,e,a),this.inputCodeItem=new p(i,e,a,this.onInput),this.model=new m(`value`,s,this.value),c(()=>{h([this.refs.value,this.refs.modelValue],()=>{this.inputCodeItem.update(this.props.value??this.props.modelValue??``)},{immediate:!0})})}get aria(){return{...T.role(`group`),...T.labelledby(this.fieldLabel.id),...T.describedby(this.fieldMessage.id)}}isValidation(){return m(this.props.validation||this.fieldMessage.validation)}},A={length:4,match:/[0-9]/,inputMode:`numeric`},j=class extends p{constructor(e,t,n,i=k){super(e,t,n),x(this,`item`,void 0),x(this,`renderContext`,()=>r(`div`,{class:this.classes?.value.context},this.renderItems())),x(this,`renderItems`,()=>{let e=[];this.item.inputCodeItem.reset();for(let t=0;t<(this.props.length??4);t++)e.push(...this.item.inputCodeItem.renderItem(t,!0,this.props.success,this.item.isValidation()));return e}),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getValue:()=>this.item.value.value,set:e=>this.item.inputCodeItem.update(String(e)),reset:()=>this.item.inputCodeItem.resetValue(),focus:()=>this.item.inputCodeItem.focus()}}initClasses(){return{main:{},context:this.getSubClass(`context`)}}initStyles(){return{}}initRender(){let e=[...this.item.fieldLabel.render(),this.renderContext(),...this.item.fieldMessage.render()];return r(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.aria},e)}}})),N,P=t((()=>{E(),N=O})),F,I=t((()=>{M(),F={...A}})),L=t((()=>{})),R,z=t((()=>{a(),M(),de(),se(),P(),I(),L(),R=n({name:`D1InputCode`,__name:`D1InputCode`,props:s({isSkeleton:{type:Boolean},disabled:{type:Boolean},name:{},match:{},inputMode:{},placeholder:{},itemAttrs:{},label:{},labelId:{},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},success:{type:Boolean},loading:{type:Boolean},value:{},length:{},validation:{type:Boolean}},F),emits:[`update:value`,`update:modelValue`,`input`],setup(e,{expose:t,emit:n}){let r=n,a=e,s=new j(`d1.inputCode`,a,{emits:r,classes:i(()=>({main:{"d1-inputCode":!0,"d1-inputCode--validation":a.validation}})),styles:i(()=>({})),components:{inputCodeItem:N,fieldLabel:fe,fieldMessage:ce}}),c=s.render();return t(s.expose()),(e,t)=>(f(),o(d(c)))}})})),B,me=t((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1InputCode`,exportName:`default`,displayName:`D1InputCode`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/InputCode/D1InputCode.vue`]})})),V,H,U,W,he=t((()=>{S(),I(),V=[{name:`disabled`,type:`boolean`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`forceShowMessage`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`inputMode`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<InputCodeItemProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`length`,type:`number`},{name:`loading`,type:`boolean`},{name:`match`,type:`RegExp`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: string) => void)`},{name:`placeholder`,type:`string`},{name:`success`,type:`boolean`},{name:`validation`,type:`boolean`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`}],H=[],U=[{name:`input`,description:`Event triggered on value change / Событие, вызываемое при изменении значения`,properties:[{name:`value`,type:`string`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],W={component:`InputCode`,props:V,slots:H,events:U,defaults:F,wikiDesign:b}})),G,K=t((()=>{g(),v(),he(),G=new C(W.component,W.props,W.defaults,W.wikiDesign,ee,y)})),q=e({InputCode:()=>Y,InputCodeSkeleton:()=>Z,InputCodeVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{me(),K(),re(),a(),J={title:`Ui/InputCode`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputCode:B},setup(){return{codeValue:l(`1234`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ codeValue }}</span>
            <button class="wiki-storybook-button" @click="codeValue = '4321'">Set '4321'</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="codeValue = ''">Clear</button>
          </div>
          <D1InputCode
            v-model="codeValue"
            label="Code input"
          />
        </div>
    `})},Z={name:`Скелетон`,render:()=>({components:{D1InputCode:B,D1Skeleton:ie},template:`
        <D1Skeleton :active="true" style="max-width:320px">
          <D1InputCode
            isSkeleton
            label="Loading field"
            helperMessage="This field is loading..."
          />
        </D1Skeleton>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1InputCode
    },
    setup() {
      const codeValue = ref('1234');
      return {
        codeValue
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ codeValue }}</span>
            <button class="wiki-storybook-button" @click="codeValue = '4321'">Set '4321'</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="codeValue = ''">Clear</button>
          </div>
          <D1InputCode
            v-model="codeValue"
            label="Code input"
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1InputCode,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true" style="max-width:320px">
          <D1InputCode
            isSkeleton
            label="Loading field"
            helperMessage="This field is loading..."
          />
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`InputCode`,`InputCodeVModel`,`InputCodeSkeleton`]}));$();export{Y as InputCode,Z as InputCodeSkeleton,X as InputCodeVModel,Q as __namedExportsOrder,J as default,K as i,$ as n,G as r,q as t};