import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Kt as s,Pt as c,Rt as l,mn as u,un as d}from"./library-ByXZ2YPj.js";import{N as f,_ as p,a as m,d as h,f as g,k as _,n as v,p as ee,s as te,t as ne}from"./wiki-CfN0XtvQ.js";import{n as re,t as ie}from"./TextInclude-BD6x3h_g-C2E9k1CV.js";import{a as y,c as ae,i as oe,n as se,o as ce,r as b,s as x,t as S}from"./FieldEventInclude-BEzUXSC7-DQCg0EbD.js";import{n as C,t as w}from"./FieldElementInclude-DtbsjT9i-DFR3iNr_.js";import{i as T,n as E,r as D,t as O}from"./Field-DsCcuhLh.js";import{n as k,t as le}from"./FieldInputModeInclude-Bqey4rTq-C_hW1oHk.js";var A,j,M,N;function P(){return(P=e((()=>{re(),y(),C(),D(),k(),n(),_(),A=class{props;value;event;loading=d(!1);timer=void 0;eventItem=void 0;data=void 0;constructor(e,t,n){this.props=e,this.value=t,this.event=n,s(()=>{this.stopTimer()})}onChange=e=>{this.timer!==void 0&&this.emitInput(),this.event.onChange(e)};onClear=e=>{this.stopTimer(),this.event.onClear(e)};onInput=(e,t)=>{this.stopTimer();let n=this.getValue(e,t),r=this.getMinQuery();if(n.length===0||n.length>=r){let n=this.getDelay();n>0?(this.eventItem=e,this.data=t,this.loading.value=!0,this.timer=setTimeout(this.emitInput,n)):this.event.onInput(e,t)}};onKeydown=e=>{e.key===`Enter`&&this.timer!==void 0&&this.emitInput()};stopTimer=()=>{this.timer!==void 0&&(clearTimeout(this.timer),this.timer=void 0,this.loading.value=!1,this.eventItem=void 0,this.data=void 0)};getDelay(){return Number(this.props.delay??0)}getMinQuery(){return Number(this.props.minQuery??0)}getValue(e,t){return String(t?.value??e?.target?.value??``)}emitInput=()=>{if(this.eventItem){let e=this.eventItem,t=this.data;this.stopTimer(),this.event.onInput(e,t)}}},j=class{props;element;naming;components;slots;emits;text;change;inputMode;attributes;elementItem;value;code;validation;form;event;query;field;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{FieldAttributesIncludeConstructor:s=ae,FieldChangeIncludeConstructor:c=oe,FieldCodeIncludeConstructor:l=x,FieldElementIncludeConstructor:u=w,FieldEventIncludeConstructor:d=b,FieldFormIncludeConstructor:f=ce,FieldIncludeConstructor:p=T,FieldInputModeIncludeConstructor:m=le,FieldValidationIncludeConstructor:h=se,FieldValueIncludeConstructor:g=S,InputSearchQueryConstructor:_=A,TextIncludeConstructor:v=ie}=o;this.text=new v(this.props),this.change=new c(this.props),this.inputMode=new m(this.props),this.attributes=new s(()=>({placeholder:this.text.search,...this.props}),void 0,void 0,this.inputMode,`search`),this.elementItem=new u(this.props,this.element),this.value=new g(this.props,this.elementItem),this.code=new l(this.props),this.validation=new h(this.props,this.attributes,this.value,this.change,this.code),this.form=new f(this.props,this.value,this.validation),this.event=new d(this.props,this.change,this.value,this.validation,this.emits,this.form),this.query=new _(this.props,this.value,this.event),this.field=new p(this.naming,this.props,this.components,()=>({loading:this.props.loading??this.query.loading.value}),void 0,this.value,this.event)}get binds(){return{...this.attributes.listForInput,value:this.value.item.value,onBlur:this.event.onBlur,onInput:this.query.onInput,onChange:this.query.onChange,onKeydown:this.query.onKeydown}}},M={type:`search`,autocomplete:`off`,autocapitalize:`off`,autocorrect:`off`,spellcheck:!1,enterKeyHint:`search`,inputMode:`search`,cancel:!0,icon:`search`,minQuery:2,delay:320},N=class extends p{item;constructor(e,t,n,r=j){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{...this.item.value.expose(),...this.item.validation.expose()}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return this.item.field.render({default:this.renderInput},{...this.getAttrs(),class:this.classes?.value.main,validationMessage:this.item.validation.message})}renderInput=e=>[l(`input`,f(this.item.binds,e.binds,{ref:this.element}))]}})))()}var F;function I(){return(I=e((()=>{P(),F={...M}})))()}var L;function R(){return(R=e((()=>{n(),P(),E(),I(),L=a({name:`D1InputSearch`,__name:`D1InputSearch`,props:i({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},prefix:{},prefixId:{},suffix:{},suffixId:{},caption:{},captionDecorative:{type:Boolean},label:{},labelId:{},counterShow:{type:Boolean},counterId:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},href:{},detail:{},index:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},id:{},focus:{type:Boolean},align:{},cancel:{},fieldAttrs:{},textSearch:{type:[String,Function]},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},name:{},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},match:{},inputAttrs:{},minlength:{},maxlength:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},type:{},minQuery:{},delay:{}},F),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,s=c(()=>({main:{"d1-inputSearch":!0}})),l=c(()=>({})),d=new N(`d1.inputSearch`,a,{emits:i,classes:s,styles:l,components:{field:O}}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(u(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1InputSearch`,exportName:`default`,displayName:`D1InputSearch`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/InputSearch/D1InputSearch.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{ne(),I(),V=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`delay`,type:`number`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<FieldProps>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconProps>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`index`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`match`,type:`FieldMatch`},{name:`maxlength`,type:`NumberOrString`},{name:`minlength`,type:`NumberOrString`},{name:`minQuery`,type:`number`},{name:`modelValue`,type:`string`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: string) => void)`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textCancel`,type:`TextValue`},{name:`textSearch`,type:`TextValue`},{name:`type`,type:`string`,option:[`text`,`search`]},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`string`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for displaying content after the input area/ Слот для отображения контента после области ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]}],U=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<string>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<string>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<string>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<string>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],W={component:`InputSearch`,props:V,slots:H,events:U,defaults:F,wikiDesign:v}})))()}var K;function q(){return(q=e((()=>{g(),te(),G(),K=new h(W.component,W.props,W.defaults,W.wikiDesign,m,ee)})))()}var ue=t({InputSearch:()=>Y,InputSearchQuery:()=>Z,InputSearchVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),n(),J={title:`Ui/InputSearch`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1InputSearch:z},setup:()=>({args:e}),template:`
      <D1InputSearch v-bind="args" />
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputSearch:z},setup(){return{query:d(``)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current query: {{ query || '—' }}</span>
            <button class="wiki-storybook-button" @click="query = 'search text'">Set query</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="query = ''">Clear</button>
          </div>
          <D1InputSearch
            v-model:value="query"
            placeholder="Search query..."
          />
        </div>
    `})},Z={name:`Управление запросом (minQuery и delay)`,render:()=>({components:{D1InputSearch:z},template:`
        <div class="wiki-storybook-flex-column">
          <D1InputSearch
            :min-query="3"
            :delay="500"
            placeholder="Min 3 chars, 500ms delay..."
            helper-message="Triggers only after 3 characters with 500ms debounce"
          />
        </div>
    `})},Q=[`InputSearch`,`InputSearchVModel`,`InputSearchQuery`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1InputSearch
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1InputSearch v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1InputSearch
    },
    setup() {
      return {
        query: ref('')
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current query: {{ query || '—' }}</span>
            <button class="wiki-storybook-button" @click="query = 'search text'">Set query</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="query = ''">Clear</button>
          </div>
          <D1InputSearch
            v-model:value="query"
            placeholder="Search query..."
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Управление запросом (minQuery и delay)',
  render: () => ({
    components: {
      D1InputSearch
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1InputSearch
            :min-query="3"
            :delay="500"
            placeholder="Min 3 chars, 500ms delay..."
            helper-message="Triggers only after 3 characters with 500ms debounce"
          />
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,X as i,Y as n,K as o,Z as r,q as s,ue as t};