import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Mt as i,Nt as a,Pt as o,Rt as s,Ut as c,X as l,in as u,jt as d,lt as f,qt as p,tn as m}from"./library-C6UyfMBX.js";import{D as h,d as g,f as _,g as v,i as ee,n as te,s as ne,t as re,u as y}from"./wiki-Cqdd-d3l.js";import{n as ie,t as ae}from"./ModelInclude-CSCLC3Le-BPdhkRTk.js";import{n as oe,t as se}from"./ComponentIncludeAbstract-BSJ_gXSk-01afegtM.js";import{n as b,t as ce}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as le,t as ue}from"./D1Skeleton-PNuSU8Wy.js";import{i as x,n as S,r as C,t as w}from"./FieldMessage-Cmq6mEex.js";import{i as T,n as E,r as de,t as fe}from"./FieldLabel-BpKj1W0p.js";import{n as pe,t as me}from"./D1InputCodeItem-CSD8QWN0.js";var D;function O(){return(O=e((()=>{se(),r(),h(),D=class extends oe{onUpdate;name=`inputCodeItem`;propsAttrsName=`itemAttrs`;items=m([]);constructor(e,t,n,r){super(e,t,n),this.onUpdate=r}getValue=e=>{let t=this.getProps().match;return t?f(String(e??``).split(``),e=>{if(e.match(t))return e}):[]};focus=()=>{if(this.items.value.length>0){for(let e of this.items.value)if(!l(e.getValue(),!0)){e.focusInput?.();return}this.items.value[this.items.value.length-1]?.focusInput?.()}};update=e=>{let t=this.getValue(e);this.items.value.forEach((e,n)=>e.set(t?.[n]??``)),this.updateTabindex(),this.focus()};updateTabindex=()=>{let e=!1;this.items.value.forEach(t=>{e?t.setTabindex(-1):t.setTabindex(void 0),l(t.getValue(),!0)||(e=!0)})};reset=()=>{this.items.value=[]};resetValue=()=>{this.update(``),this.onInput()};onInput=()=>{let e=``;for(let t of this.items.value){if(!l(t.getValue(),!0))break;e+=t.getValue()}this.updateTabindex(),this.onUpdate?.(e)};onBackspace=()=>{let e=!1;this.items.value.forEach((t,n)=>{(!l(t.getValue(),!0)||e)&&(e=!0,t.set(this.items.value[n+1]?.getValue()||``))})};onPaste=(e,t)=>{let n=!1,r=0,i=this.getValue(t);this.items.value.forEach(t=>{r in i&&(t.index===e||n)&&(n=!0,t.set(i?.[r++]??``))}),this.onInput(),this.focus()};renderItem=(e,t,n,r)=>this.render(void 0,{move:t,index:e,success:n,error:r},void 0,`item-${String(e)}`);toBinds(){let e=this.getProps();return{...super.toBinds(),ref:e=>{e&&this.items.value.push(e)},disabled:e.disabled,hide:e.hide,isSkeleton:e.isSkeleton,name:e.name,autocomplete:e.autocomplete,match:e.match,inputMode:e.inputMode,placeholder:e.placeholder,onInput:this.onInput,onPaste:this.onPaste,onBackspace:this.onBackspace}}}})))()}var k,A,j;function M(){return(M=e((()=>{ce(),ae(),x(),T(),O(),r(),h(),k=class{props;refs;element;classDesign;className;components;slots;emits;fieldLabel;fieldMessage;inputCodeItem;model;value=m(``);constructor(e,t,r,i,a,o,s,c,l={}){this.props=e,this.refs=t,this.element=r,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{FieldLabelIncludeConstructor:u=de,FieldMessageIncludeConstructor:d=C,InputCodeItemIncludeConstructor:f=D,ModelIncludeConstructor:m=ie}=l;this.fieldLabel=new u(a,e,o,()=>({loading:e.loading})),this.fieldMessage=new d(a,e,o),this.inputCodeItem=new f(a,e,o,this.onInput),this.model=new m(`value`,c,this.value),p([this.refs.value,this.refs.modelValue],this.update),n(this.update)}update=()=>{let e=this.props.value??this.props.modelValue??``;this.value.value=e,this.inputCodeItem.update(e)};get aria(){return{...b.role(`group`),...b.labelledby(this.fieldLabel.id),...b.describedby(this.fieldMessage.id)}}isValidation(){return l(this.props.validation||this.fieldMessage.validation)}onInput=e=>{this.value.value!==e&&(this.value.value=e,this.model.emit(e),this.emits?.(`input`,e))}},A={length:4,match:/[0-9]/,autocomplete:`one-time-code`,inputMode:`numeric`},j=class extends v{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getValue:()=>this.item.value.value,set:e=>this.item.inputCodeItem.update(String(e)),reset:()=>this.item.inputCodeItem.resetValue(),focus:()=>this.item.inputCodeItem.focus()}}initClasses(){return{main:{},context:this.getSubClass(`context`)}}initStyles(){return{}}initRender(){let e=[...this.item.fieldLabel.render(),this.renderContext(),...this.item.fieldMessage.render()];return o(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.aria},e)}renderContext=()=>o(`div`,this.getKeyClass(`context`),this.renderItems());renderItems=()=>{let e=[];this.item.inputCodeItem.reset();for(let t=0;t<(this.props.length??4);t++)e.push(...this.item.inputCodeItem.renderItem(t,!0,this.props.success,this.item.isValidation()));return e}}})))()}var N;function P(){return(P=e((()=>{pe(),N=me})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{r(),M(),E(),S(),P(),I(),L=a({name:`D1InputCode`,__name:`D1InputCode`,props:s({isSkeleton:{type:Boolean},disabled:{type:Boolean},hide:{type:Boolean},name:{},autocomplete:{},match:{},inputMode:{},placeholder:{},itemAttrs:{},label:{},labelId:{},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},success:{type:Boolean},loading:{type:Boolean},value:{},length:{},validation:{type:Boolean}},F),emits:[`update:value`,`update:modelValue`,`input`],setup(e,{expose:t,emit:n}){let r=n,a=e,o=d(()=>({main:{"d1-inputCode":!0,"d1-inputCode--validation":a.validation}})),s=d(()=>({})),l=new j(`d1.inputCode`,a,{emits:r,classes:o,styles:s,components:{inputCodeItem:N,fieldLabel:fe,fieldMessage:w}}),f=l.render();return t(l.expose()),(e,t)=>(c(),i(u(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1InputCode`,exportName:`default`,displayName:`D1InputCode`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/InputCode/D1InputCode.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{re(),I(),V=[{name:`autocomplete`,type:`string`},{name:`disabled`,type:`boolean`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`forceShowMessage`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`hide`,type:`boolean`},{name:`inputMode`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<InputCodeItemProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`length`,type:`number`},{name:`loading`,type:`boolean`},{name:`match`,type:`RegExp`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: string) => void)`},{name:`placeholder`,type:`string`},{name:`success`,type:`boolean`},{name:`validation`,type:`boolean`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`}],H=[],U=[{name:`input`,description:`Event triggered on value change / Событие, вызываемое при изменении значения`,properties:[{name:`value`,type:`string`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],W={component:`InputCode`,props:V,slots:H,events:U,defaults:F,wikiDesign:te}})))()}var K;function q(){return(q=e((()=>{g(),ne(),G(),K=new y(W.component,W.props,W.defaults,W.wikiDesign,ee,_)})))()}var he=t({InputCode:()=>Y,InputCodeSkeleton:()=>Z,InputCodeVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),le(),r(),J={title:`Ui/InputCode`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputCode:z},setup(){return{codeValue:m(`1234`)}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1InputCode:z,D1Skeleton:ue},template:`
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