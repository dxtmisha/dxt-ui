import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Kt as a,Lt as o,Mt as s,Nt as c,dt as l,in as u,jt as d,rt as f,tn as p,zt as ee}from"./library-CUIf7uCS.js";import{O as m,d as te,k as ne,l as re,m as h,n as g,p as _,r as ie,t as ae,u as oe}from"./wiki-wIqBVsyI.js";import{n as v,t as y}from"./ModelInclude-D7Nt6tKY-Dvax6Hhk.js";import{n as b,t as x}from"./ComponentIncludeAbstract-CH6F0Rvb-UISzxO4W.js";import{n as S,t as C}from"./AriaStaticInclude-CI16qWQ7-QE8vrVOk.js";import{n as w,t as T}from"./D1Skeleton-CTEnVdL2.js";import{i as se,n as ce,r as le,t as ue}from"./FieldMessage-BO6NZQC3.js";import{i as de,n as fe,r as pe,t as me}from"./FieldLabel-UxvtComN.js";import{n as he,t as E}from"./D1InputCodeItem-C-QwDxoc.js";var D;function O(){return(O=e((()=>{x(),r(),m(),D=class extends b{constructor(e,t,n,r){super(e,t,n),_(this,`onUpdate`,void 0),_(this,`name`,`inputCodeItem`),_(this,`propsAttrsName`,`itemAttrs`),_(this,`items`,p([])),_(this,`getValue`,e=>{let t=this.getProps().match;return t?l(e.split(``),e=>{if(e.match(t))return e}):[]}),_(this,`focus`,()=>{if(this.items.value.length>0){var e;for(let e of this.items.value)if(!f(e.getValue(),!0)){e.focusInput();return}(e=this.items.value[0])==null||e.focusInput()}}),_(this,`update`,e=>{let t=this.getValue(e);this.items.value.forEach((e,n)=>e.set(t?.[n]??``)),this.updateTabindex()}),_(this,`updateTabindex`,()=>{let e=!1;this.items.value.forEach(t=>{e?t.setTabindex(-1):t.setTabindex(void 0),f(t.getValue(),!0)||(e=!0)})}),_(this,`reset`,()=>{this.items.value=[]}),_(this,`resetValue`,()=>{this.update(``),this.onInput()}),_(this,`onInput`,()=>{var e;let t=``;for(let e of this.items.value){if(!f(e.getValue(),!0))break;t+=e.getValue()}this.updateTabindex(),(e=this.onUpdate)==null||e.call(this,t)}),_(this,`onBackspace`,()=>{let e=!1;this.items.value.forEach((t,n)=>{(!f(t.getValue(),!0)||e)&&(e=!0,t.set(this.items.value[n+1]?.getValue()||``))})}),_(this,`onPaste`,(e,t)=>{let n=!1,r=0,i=this.getValue(t);this.items.value.forEach(t=>{r in i&&(t.index===e||n)&&(n=!0,t.set(i?.[r++]??``))}),this.onInput(),this.focus()}),_(this,`renderItem`,(e,t,n,r)=>this.render(void 0,{move:t,index:e,success:n,error:r},void 0,`item-${String(e)}`)),this.onUpdate=r}toBinds(){let e=this.getProps();return{...super.toBinds(),ref:e=>{e&&this.items.value.push(e)},disabled:e.disabled,isSkeleton:e.isSkeleton,name:e.name,match:e.match,inputMode:e.inputMode,placeholder:e.placeholder,onInput:this.onInput,onPaste:this.onPaste,onBackspace:this.onBackspace}}}})))()}var k,A,j;function M(){return(M=e((()=>{C(),v(),le(),pe(),O(),r(),m(),k=class{constructor(e,t,n,r,i,o,s,c,l={}){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),_(this,`fieldLabel`,void 0),_(this,`fieldMessage`,void 0),_(this,`inputCodeItem`,void 0),_(this,`model`,void 0),_(this,`value`,p(``)),_(this,`onInput`,e=>{if(this.value.value!==e){var t;this.value.value=e,(t=this.emits)==null||t.call(this,`input`,e),this.model.emit(e)}}),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=o,this.slots=s,this.emits=c;let{FieldLabelIncludeConstructor:u=de,FieldMessageIncludeConstructor:d=se,InputCodeItemIncludeConstructor:f=D,ModelIncludeConstructor:m=y}=l;this.fieldLabel=new u(i,e,o,()=>({loading:e.loading})),this.fieldMessage=new d(i,e,o),this.inputCodeItem=new f(i,e,o,this.onInput),this.model=new m(`value`,c,this.value),ee(()=>{a([this.refs.value,this.refs.modelValue],()=>{this.inputCodeItem.update(this.props.value??this.props.modelValue??``)},{immediate:!0})})}get aria(){return{...S.role(`group`),...S.labelledby(this.fieldLabel.id),...S.describedby(this.fieldMessage.id)}}isValidation(){return f(this.props.validation||this.fieldMessage.validation)}},A={length:4,match:/[0-9]/,inputMode:`numeric`},j=class extends ne{constructor(e,t,n,r=k){super(e,t,n),_(this,`item`,void 0),_(this,`renderContext`,()=>c(`div`,{class:this.classes?.value.context},this.renderItems())),_(this,`renderItems`,()=>{let e=[];this.item.inputCodeItem.reset();for(let t=0;t<(this.props.length??4);t++)e.push(...this.item.inputCodeItem.renderItem(t,!0,this.props.success,this.item.isValidation()));return e}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getValue:()=>this.item.value.value,set:e=>this.item.inputCodeItem.update(String(e)),reset:()=>this.item.inputCodeItem.resetValue(),focus:()=>this.item.inputCodeItem.focus()}}initClasses(){return{main:{},context:this.getSubClass(`context`)}}initStyles(){return{}}initRender(){let e=[...this.item.fieldLabel.render(),this.renderContext(),...this.item.fieldMessage.render()];return c(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.aria},e)}}})))()}var N;function P(){return(P=e((()=>{he(),N=E})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{r(),M(),fe(),ce(),P(),I(),L=s({name:`D1InputCode`,__name:`D1InputCode`,props:o({isSkeleton:{type:Boolean},disabled:{type:Boolean},name:{},match:{},inputMode:{},placeholder:{},itemAttrs:{},label:{},labelId:{},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},success:{type:Boolean},loading:{type:Boolean},value:{},length:{},validation:{type:Boolean}},F),emits:[`update:value`,`update:modelValue`,`input`],setup(e,{expose:t,emit:r}){let a=r,o=e,s=n(()=>({main:{"d1-inputCode":!0,"d1-inputCode--validation":o.validation}})),c=n(()=>({})),l=new j(`d1.inputCode`,o,{emits:a,classes:s,styles:c,components:{inputCodeItem:N,fieldLabel:me,fieldMessage:ue}}),f=l.render();return t(l.expose()),(e,t)=>(i(),d(u(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1InputCode`,exportName:`default`,displayName:`D1InputCode`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/InputCode/D1InputCode.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{ae(),I(),V=[{name:`disabled`,type:`boolean`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`forceShowMessage`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`inputMode`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<InputCodeItemProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`length`,type:`number`},{name:`loading`,type:`boolean`},{name:`match`,type:`RegExp`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: string) => void)`},{name:`placeholder`,type:`string`},{name:`success`,type:`boolean`},{name:`validation`,type:`boolean`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`}],H=[],U=[{name:`input`,description:`Event triggered on value change / Событие, вызываемое при изменении значения`,properties:[{name:`value`,type:`string`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],W={component:`InputCode`,props:V,slots:H,events:U,defaults:F,wikiDesign:g}})))()}var K;function q(){return(q=e((()=>{te(),re(),G(),K=new oe(W.component,W.props,W.defaults,W.wikiDesign,ie,h)})))()}var ge=t({InputCode:()=>Y,InputCodeSkeleton:()=>Z,InputCodeVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),w(),r(),J={title:`Ui/InputCode`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputCode:z},setup(){return{codeValue:p(`1234`)}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1InputCode:z,D1Skeleton:T},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`InputCode`,`InputCodeVModel`,`InputCodeSkeleton`]})))()}export{$ as a,X as i,Y as n,K as o,Z as r,q as s,ge as t};