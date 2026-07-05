import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Gt as i,Jt as a,Lt as o,Rt as s,Ut as c,Xt as l,an as u,d,nn as f,ot as p,u as m,zt as h}from"./iframe-B-LNhFWZ.js";import{d as g,f as ee,m as _,n as v,o as y,p as b,s as x,t as S,u as C}from"./wiki-DgltPJFG.js";import{n as w,t as T}from"./ModelInclude-zsqgq6XZ-BDSuND0X.js";import{n as E,t as te}from"./AriaStaticInclude-D-DjeyB8-BwXGOxr0.js";import{n as ne,t as re}from"./D1Skeleton-CxiItvxF.js";import{a as ie,o as ae}from"./D1FieldMessage-BuCbgztS.js";import{n as oe,t as se}from"./FieldMessage-Co1i52kC.js";import{a as ce,o as le}from"./D1FieldLabel-eeyoG2vL.js";import{n as ue,t as de}from"./FieldLabel-tOCUo0R6.js";import{a as fe,n as pe,o as D,t as O}from"./D1InputCodeItem-Yoc1CrLx.js";var k,A,j,M=t((()=>{te(),ee(),w(),ie(),ce(),D(),r(),m(),k=class{constructor(e,t,n,r,a,o,s,c,u={}){b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`element`,void 0),b(this,`classDesign`,void 0),b(this,`className`,void 0),b(this,`components`,void 0),b(this,`slots`,void 0),b(this,`emits`,void 0),b(this,`fieldLabel`,void 0),b(this,`fieldMessage`,void 0),b(this,`inputCodeItem`,void 0),b(this,`model`,void 0),b(this,`value`,f(``)),b(this,`onInput`,e=>{if(this.value.value!==e){var t;this.value.value=e,(t=this.emits)==null||t.call(this,`input`,e),this.model.emit(e)}}),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=a,this.components=o,this.slots=s,this.emits=c;let{FieldLabelIncludeConstructor:d=le,FieldMessageIncludeConstructor:p=ae,InputCodeItemIncludeConstructor:m=fe,ModelIncludeConstructor:h=T}=u;this.fieldLabel=new d(a,e,o,()=>({loading:e.loading})),this.fieldMessage=new p(a,e,o),this.inputCodeItem=new m(a,e,o,this.onInput),this.model=new h(`value`,c,this.value),i(()=>{l([this.refs.value,this.refs.modelValue],()=>{this.inputCodeItem.update(this.props.value??this.props.modelValue??``)},{immediate:!0})})}get aria(){return{...E.role(`group`),...E.labelledby(this.fieldLabel.id),...E.describedby(this.fieldMessage.id)}}isValidation(){return p(this.props.validation||this.fieldMessage.validation)}},A={length:4,match:/[0-9]/,inputMode:`numeric`},j=class extends d{constructor(e,t,r,i=k){super(e,t,r),b(this,`item`,void 0),b(this,`renderContext`,()=>n(`div`,{class:this.classes?.value.context},this.renderItems())),b(this,`renderItems`,()=>{let e=[];this.item.inputCodeItem.reset();for(let t=0;t<(this.props.length??4);t++)e.push(...this.item.inputCodeItem.renderItem(t,!0,this.props.success,this.item.isValidation()));return e}),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getValue:()=>this.item.value.value,set:e=>this.item.inputCodeItem.update(String(e)),reset:()=>this.item.inputCodeItem.resetValue(),focus:()=>this.item.inputCodeItem.focus()}}initClasses(){return{main:{},context:this.getSubClass(`context`)}}initStyles(){return{}}initRender(){let e=[...this.item.fieldLabel.render(),this.renderContext(),...this.item.fieldMessage.render()];return n(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.aria},e)}}})),N,P=t((()=>{pe(),N=O})),F,I=t((()=>{M(),F={...A}})),L=t((()=>{})),R,z=t((()=>{r(),M(),ue(),oe(),P(),I(),L(),R=h({name:`D1InputCode`,__name:`D1InputCode`,props:c({isSkeleton:{type:Boolean},disabled:{type:Boolean},name:{},match:{},inputMode:{},placeholder:{},itemAttrs:{},label:{},labelId:{},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},success:{type:Boolean},loading:{type:Boolean},value:{},length:{},validation:{type:Boolean}},F),emits:[`update:value`,`update:modelValue`,`input`],setup(e,{expose:t,emit:n}){let r=n,i=e,c=new j(`d1.inputCode`,i,{emits:r,classes:o(()=>({main:{"d1-inputCode":!0,"d1-inputCode--validation":i.validation}})),styles:o(()=>({})),components:{inputCodeItem:N,fieldLabel:de,fieldMessage:se}}),l=c.render();return t(c.expose()),(e,t)=>(a(),s(u(l)))}})})),B,me=t((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1InputCode`,exportName:`default`,displayName:`D1InputCode`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/InputCode/D1InputCode.vue`]})})),V,H,U,W,he=t((()=>{S(),I(),V=[{name:`disabled`,type:`boolean`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelPropsBasic>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessagePropsBasic>`},{name:`forceShowMessage`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`inputMode`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<InputCodeItemPropsBasic>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`length`,type:`number`},{name:`loading`,type:`boolean`},{name:`match`,type:`RegExp`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: string) => void)`},{name:`placeholder`,type:`string`},{name:`success`,type:`boolean`},{name:`validation`,type:`boolean`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`}],H=[],U=[{name:`input`,description:`Event triggered on value change / Событие, вызываемое при изменении значения`,properties:[{name:`value`,type:`string`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],W={component:`InputCode`,props:V,slots:H,events:U,defaults:F,wikiDesign:v}})),G,K=t((()=>{g(),x(),he(),G=new C(W.component,W.props,W.defaults,W.wikiDesign,y,_)})),q=e({InputCode:()=>Y,InputCodeSkeleton:()=>Z,InputCodeVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{me(),K(),ne(),r(),J={title:`Ui/InputCode`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputCode:B},setup(){return{codeValue:f(`1234`)}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1InputCode:B,D1Skeleton:re},template:`
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