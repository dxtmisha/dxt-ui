import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,Ht as o,It as s,K as c,Nt as l,Ot as u,Pt as d,Yt as ee,gt as f,in as p,kt as m,sn as h}from"./library-CO1fW2cN.js";import{E as g,O as _,d as te,f as ne,i as v,l as re,n as ie,t as ae,u as oe}from"./wiki-BMj2WokS.js";import{n as se,t as y}from"./ModelInclude-BQRqVrGp-Cc9lyfN2.js";import{n as ce,t as le}from"./ComponentIncludeAbstract-DTK8bDBQ-BdHKAxjK.js";import{n as b,t as ue}from"./AriaStaticInclude-DoPfNULn-CgdAxtFN.js";import{n as x,t as S}from"./D1Skeleton-0ed2Yx2u.js";import{i as C,n as w,r as T,t as E}from"./FieldMessage-b-ORdfhW.js";import{i as de,n as fe,r as pe,t as me}from"./FieldLabel-VE1TBwhM.js";import{n as he,t as ge}from"./D1InputCodeItem-m7PUhql6.js";var D;function O(){return(O=e((()=>{le(),m(),g(),u(),D=class extends ce{constructor(e,t,n,i){super(e,t,n),r(this,`onUpdate`,void 0),r(this,`name`,`inputCodeItem`),r(this,`propsAttrsName`,`itemAttrs`),r(this,`items`,p([])),r(this,`getValue`,e=>{let t=this.getProps().match;return t?c(String(e??``).split(``),e=>{if(e.match(t))return e}):[]}),r(this,`focus`,()=>{if(this.items.value.length>0){var e;for(let e of this.items.value)if(!f(e.getValue(),!0)){e.focusInput();return}(e=this.items.value[0])==null||e.focusInput()}}),r(this,`update`,e=>{let t=this.getValue(e);this.items.value.forEach((e,n)=>e.set(t?.[n]??``)),this.updateTabindex()}),r(this,`updateTabindex`,()=>{let e=!1;this.items.value.forEach(t=>{e?t.setTabindex(-1):t.setTabindex(void 0),f(t.getValue(),!0)||(e=!0)})}),r(this,`reset`,()=>{this.items.value=[]}),r(this,`resetValue`,()=>{this.update(``),this.onInput()}),r(this,`onInput`,()=>{var e;let t=``;for(let e of this.items.value){if(!f(e.getValue(),!0))break;t+=e.getValue()}this.updateTabindex(),(e=this.onUpdate)==null||e.call(this,t)}),r(this,`onBackspace`,()=>{let e=!1;this.items.value.forEach((t,n)=>{(!f(t.getValue(),!0)||e)&&(e=!0,t.set(this.items.value[n+1]?.getValue()||``))})}),r(this,`onPaste`,(e,t)=>{let n=!1,r=0,i=this.getValue(t);this.items.value.forEach(t=>{r in i&&(t.index===e||n)&&(n=!0,t.set(i?.[r++]??``))}),this.onInput(),this.focus()}),r(this,`renderItem`,(e,t,n,r)=>this.render(void 0,{move:t,index:e,success:n,error:r},void 0,`item-${String(e)}`)),this.onUpdate=i}toBinds(){let e=this.getProps();return{...super.toBinds(),ref:e=>{e&&this.items.value.push(e)},disabled:e.disabled,hide:e.hide,isSkeleton:e.isSkeleton,name:e.name,match:e.match,inputMode:e.inputMode,placeholder:e.placeholder,onInput:this.onInput,onPaste:this.onPaste,onBackspace:this.onBackspace}}}})))()}var k,A,j;function M(){return(M=e((()=>{ue(),se(),T(),pe(),O(),m(),g(),u(),k=class{constructor(e,t,n,i,a,s,c,l,u={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`fieldLabel`,void 0),r(this,`fieldMessage`,void 0),r(this,`inputCodeItem`,void 0),r(this,`model`,void 0),r(this,`value`,p(``)),r(this,`onInput`,e=>{if(this.value.value!==e){var t;this.value.value=e,(t=this.emits)==null||t.call(this,`input`,e),this.model.emit(e)}}),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=s,this.slots=c,this.emits=l;let{FieldLabelIncludeConstructor:d=de,FieldMessageIncludeConstructor:f=C,InputCodeItemIncludeConstructor:m=D,ModelIncludeConstructor:h=y}=u;this.fieldLabel=new d(a,e,s,()=>({loading:e.loading})),this.fieldMessage=new f(a,e,s),this.inputCodeItem=new m(a,e,s,this.onInput),this.model=new h(`value`,l,this.value),o(()=>{ee([this.refs.value,this.refs.modelValue],()=>{this.inputCodeItem.update(this.props.value??this.props.modelValue??``)},{immediate:!0})})}get aria(){return{...b.role(`group`),...b.labelledby(this.fieldLabel.id),...b.describedby(this.fieldMessage.id)}}isValidation(){return f(this.props.validation||this.fieldMessage.validation)}},A={length:4,match:/[0-9]/,inputMode:`numeric`},j=class extends _{constructor(e,t,n,i=k){super(e,t,n),r(this,`item`,void 0),r(this,`renderContext`,()=>s(`div`,this.getKeyClass(`context`),this.renderItems())),r(this,`renderItems`,()=>{let e=[];this.item.inputCodeItem.reset();for(let t=0;t<(this.props.length??4);t++)e.push(...this.item.inputCodeItem.renderItem(t,!0,this.props.success,this.item.isValidation()));return e}),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getValue:()=>this.item.value.value,set:e=>this.item.inputCodeItem.update(String(e)),reset:()=>this.item.inputCodeItem.resetValue(),focus:()=>this.item.inputCodeItem.focus()}}initClasses(){return{main:{},context:this.getSubClass(`context`)}}initStyles(){return{}}initRender(){let e=[...this.item.fieldLabel.render(),this.renderContext(),...this.item.fieldMessage.render()];return s(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.aria},e)}}})))()}var N;function P(){return(P=e((()=>{he(),N=ge})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{m(),M(),fe(),w(),P(),I(),L=i({name:`D1InputCode`,__name:`D1InputCode`,props:n({isSkeleton:{type:Boolean},disabled:{type:Boolean},hide:{type:Boolean},name:{},match:{},inputMode:{},placeholder:{},itemAttrs:{},label:{},labelId:{},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},success:{type:Boolean},loading:{type:Boolean},value:{},length:{},validation:{type:Boolean}},F),emits:[`update:value`,`update:modelValue`,`input`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=l(()=>({main:{"d1-inputCode":!0,"d1-inputCode--validation":i.validation}})),s=l(()=>({})),c=new j(`d1.inputCode`,i,{emits:r,classes:o,styles:s,components:{inputCodeItem:N,fieldLabel:me,fieldMessage:E}}),u=c.render();return t(c.expose()),(e,t)=>(a(),d(h(u)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1InputCode`,exportName:`default`,displayName:`D1InputCode`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/InputCode/D1InputCode.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{ae(),I(),V=[{name:`disabled`,type:`boolean`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`forceShowMessage`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`hide`,type:`boolean`},{name:`inputMode`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<InputCodeItemProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`length`,type:`number`},{name:`loading`,type:`boolean`},{name:`match`,type:`RegExp`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: string) => void)`},{name:`placeholder`,type:`string`},{name:`success`,type:`boolean`},{name:`validation`,type:`boolean`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`}],H=[],U=[{name:`input`,description:`Event triggered on value change / Событие, вызываемое при изменении значения`,properties:[{name:`value`,type:`string`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],W={component:`InputCode`,props:V,slots:H,events:U,defaults:F,wikiDesign:ie}})))()}var K;function q(){return(q=e((()=>{te(),re(),G(),K=new oe(W.component,W.props,W.defaults,W.wikiDesign,v,ne)})))()}var _e=t({InputCode:()=>Y,InputCodeSkeleton:()=>Z,InputCodeVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),x(),m(),J={title:`Ui/InputCode`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputCode:z},setup(){return{codeValue:p(`1234`)}},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1InputCode:z,D1Skeleton:S},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`InputCode`,`InputCodeVModel`,`InputCodeSkeleton`]})))()}export{$ as a,X as i,Y as n,K as o,Z as r,q as s,_e as t};