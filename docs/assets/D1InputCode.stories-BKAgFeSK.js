import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$t as n,At as r,Ft as i,Gt as a,Ht as o,It as s,Jt as c,Pt as l,Rt as u,U as d,X as f,mn as ee,un as p}from"./library-ByXZ2YPj.js";import{_ as m,a as h,d as g,f as te,k as _,n as ne,p as v,s as re,t as ie}from"./wiki-CfN0XtvQ.js";import{n as ae,t as oe}from"./ModelInclude-CSCLC3Le-Dak8eD0T.js";import{n as se,t as y}from"./ComponentIncludeAbstract-CwPk6byu-B8vlefjC.js";import{n as b,t as ce}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as le,t as x}from"./D1Skeleton-fWB3UQoT.js";import{i as S,n as C,r as w,t as T}from"./FieldMessage-DLdGpQfO.js";import{i as E,n as ue,r as de,t as fe}from"./FieldLabel-BCFuMzZE.js";import{n as pe,t as me}from"./D1InputCodeItem-BdVPrR86.js";var D;function O(){return(O=e((()=>{y(),r(),_(),D=class extends se{onUpdate;name=`inputCodeItem`;propsAttrsName=`itemAttrs`;items=p([]);constructor(e,t,n,r){super(e,t,n),this.onUpdate=r}getValue=e=>{let t=this.getProps().match;return t?f(String(e??``).split(``),e=>{if(e.match(t))return e}):[]};focus=()=>{if(this.items.value.length>0){for(let e of this.items.value)if(!d(e.getValue(),!0)){e.focusInput?.();return}this.items.value[this.items.value.length-1]?.focusInput?.()}};update=e=>{let t=this.getValue(e);this.items.value.forEach((e,n)=>e.set(t?.[n]??``)),this.updateTabindex(),this.focus()};updateTabindex=()=>{let e=!1;this.items.value.forEach(t=>{e?t.setTabindex(-1):t.setTabindex(void 0),d(t.getValue(),!0)||(e=!0)})};reset=()=>{this.items.value=[]};resetValue=()=>{this.update(``),this.onInput()};onInput=()=>{let e=``;for(let t of this.items.value){if(!d(t.getValue(),!0))break;e+=t.getValue()}this.updateTabindex(),this.onUpdate?.(e)};onBackspace=()=>{let e=!1;this.items.value.forEach((t,n)=>{(!d(t.getValue(),!0)||e)&&(e=!0,t.set(this.items.value[n+1]?.getValue()||``))})};onPaste=(e,t)=>{let n=!1,r=0,i=this.getValue(t);this.items.value.forEach(t=>{r in i&&(t.index===e||n)&&(n=!0,t.set(i?.[r++]??``))}),this.onInput(),this.focus()};renderItem=(e,t,n,r)=>this.render(void 0,{move:t,index:e,success:n,error:r},void 0,`item-${String(e)}`);toBinds(){let e=this.getProps();return{...super.toBinds(),ref:e=>{e&&this.items.value.push(e)},disabled:e.disabled,hide:e.hide,isSkeleton:e.isSkeleton,name:e.name,autocomplete:e.autocomplete,match:e.match,inputMode:e.inputMode,placeholder:e.placeholder,onInput:this.onInput,onPaste:this.onPaste,onBackspace:this.onBackspace}}}})))()}var k,A,j;function M(){return(M=e((()=>{ce(),oe(),S(),E(),O(),r(),_(),k=class{props;element;naming;components;slots;emits;fieldLabel;fieldMessage;inputCodeItem;model;value=p(``);constructor(e,t,r,i,o,s,c={}){this.props=e,this.element=t,this.naming=r,this.components=i,this.slots=o,this.emits=s;let{FieldLabelIncludeConstructor:l=de,FieldMessageIncludeConstructor:u=w,InputCodeItemIncludeConstructor:d=D,ModelIncludeConstructor:f=ae}=c;this.fieldLabel=new l(r,e,i,()=>({loading:e.loading})),this.fieldMessage=new u(r,e,i),this.inputCodeItem=new d(r,e,i,this.onInput),this.model=new f(`value`,s,this.value),n([()=>this.props.value,()=>this.props.modelValue],this.update),a(this.update)}update=()=>{let e=this.props.value??this.props.modelValue??``;this.value.value=e,this.inputCodeItem.update(e)};get aria(){return{...b.role(`group`),...b.labelledby(this.fieldLabel.id),...b.describedby(this.fieldMessage.id)}}isValidation(){return d(this.props.validation||this.fieldMessage.validation)}onInput=e=>{this.value.value!==e&&(this.value.value=e,this.model.emit(e),this.emits?.(`input`,e))}},A={length:4,match:/[0-9]/,autocomplete:`one-time-code`,inputMode:`numeric`},j=class extends m{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{getValue:()=>this.item.value.value,set:e=>this.item.inputCodeItem.update(String(e)),reset:()=>this.item.inputCodeItem.resetValue(),focus:()=>this.item.inputCodeItem.focus()}}initClasses(){return{main:{},context:this.naming.getSubClass(`context`)}}initStyles(){return{}}initRender(){let e=[...this.item.fieldLabel.render(),this.renderContext(),...this.item.fieldMessage.render()];return u(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.aria},e)}renderContext=()=>u(`div`,this.getKeyClass(`context`),this.renderItems());renderItems=()=>{let e=[];this.item.inputCodeItem.reset();for(let t=0;t<(this.props.length??4);t++)e.push(...this.item.inputCodeItem.renderItem(t,!0,this.props.success,this.item.isValidation()));return e}}})))()}var N;function P(){return(P=e((()=>{pe(),N=me})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{r(),M(),ue(),C(),P(),I(),L=s({name:`D1InputCode`,__name:`D1InputCode`,props:o({isSkeleton:{type:Boolean},disabled:{type:Boolean},hide:{type:Boolean},name:{},autocomplete:{},match:{},inputMode:{},placeholder:{},itemAttrs:{},label:{},labelId:{},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},success:{type:Boolean},loading:{type:Boolean},value:{},length:{},validation:{type:Boolean}},F),emits:[`update:value`,`update:modelValue`,`input`],setup(e,{expose:t,emit:n}){let r=n,a=e,o=l(()=>({main:{"d1-inputCode":!0,"d1-inputCode--validation":a.validation}})),s=l(()=>({})),u=new j(`d1.inputCode`,a,{emits:r,classes:o,styles:s,components:{inputCodeItem:N,fieldLabel:fe,fieldMessage:T}}),d=u.render();return t(u.expose()),(e,t)=>(c(),i(ee(d)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1InputCode`,exportName:`default`,displayName:`D1InputCode`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/InputCode/D1InputCode.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{ie(),I(),V=[{name:`autocomplete`,type:`string`},{name:`disabled`,type:`boolean`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`forceShowMessage`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`hide`,type:`boolean`},{name:`inputMode`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<InputCodeItemProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`length`,type:`number`},{name:`loading`,type:`boolean`},{name:`match`,type:`RegExp`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: string) => void)`},{name:`placeholder`,type:`string`},{name:`success`,type:`boolean`},{name:`validation`,type:`boolean`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`}],H=[],U=[{name:`input`,description:`Event triggered on value change / Событие, вызываемое при изменении значения`,properties:[{name:`value`,type:`string`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],W={component:`InputCode`,props:V,slots:H,events:U,defaults:F,wikiDesign:ne}})))()}var K;function q(){return(q=e((()=>{te(),re(),G(),K=new g(W.component,W.props,W.defaults,W.wikiDesign,h,v)})))()}var he=t({InputCode:()=>Y,InputCodeSkeleton:()=>Z,InputCodeVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),le(),r(),J={title:`Ui/InputCode`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputCode:z},setup(){return{codeValue:p(`1234`)}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1InputCode:z,D1Skeleton:x},template:`
        <D1Skeleton :active="true" style="max-width:320px">
          <D1InputCode
            isSkeleton
            label="Loading field"
            helperMessage="This field is loading..."
          />
        </D1Skeleton>
    `})},Q=[`InputCode`,`InputCodeVModel`,`InputCodeSkeleton`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,O as c,X as i,Y as n,K as o,Z as r,q as s,he as t};