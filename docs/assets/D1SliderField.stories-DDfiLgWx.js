import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l,tn as u,yt as d}from"./library-C6UyfMBX.js";import{C as f,D as p,d as m,f as h,g,i as _,n as v,s as y,t as b,u as x}from"./wiki-Cqdd-d3l.js";import{n as ee,t as te}from"./IconTrailingInclude-B3iHo9Pr-CKrQC-u7.js";import{n as ne,t as re}from"./Icon-C_C3biyC.js";import{n as ie,t as ae}from"./D1Skeleton-PNuSU8Wy.js";import{a as S,c as oe,i as se,n as ce,o as le,r as ue,s as de,t as fe}from"./FieldEventInclude-h_dlQIjN-BGydilF8.js";import{i as pe,n as me,r as he,t as ge}from"./FieldMessage-Cmq6mEex.js";import{i as _e,n as ve,r as ye,t as be}from"./FieldLabel-BpKj1W0p.js";import{a as xe,n as Se,o as Ce,t as we}from"./D1Slider-oSNABoRP.js";var C,w,T,E,D,O;function k(){return(k=e((()=>{te(),S(),pe(),_e(),Ce(),n(),p(),C={...xe,showValue:!0,labelSeparator:`: `},w=class{props;event;valueItem;constructor(e,t,n){this.props=e,this.event=t,this.valueItem=n}onSliderInput=e=>{this.event.onInput(new InputEvent(`input`),{value:e})};onSliderChange=()=>{this.event.onChange(new InputEvent(`change`))};onFocus=e=>{let t=e.target;switch(t.dataset.type){case`min`:t.value=String(this.valueItem.min);break;case`max`:t.value=String(this.valueItem.max)}};onBlur=e=>{let t=e.target;t.value=``};onInput=e=>{let t=e.target,n=t.valueAsNumber||0;if(this.props.multiple){let e=t.dataset.type,r=e===`min`?n:this.valueItem.min,i=e===`max`?n:this.valueItem.max;this.valueItem.set([r,i])}else this.valueItem.set(n)};get inputBinds(){return{type:`number`,min:this.props.min,max:this.props.max,step:this.props.step,onBlur:this.onBlur,onFocus:this.onFocus,onInput:this.onInput}}},T=class{props;valueItem;constructor(e,t){this.props=e,this.valueItem=t}get min(){return String(this.valueItem.min)}get max(){return String(this.valueItem.max)}get label(){return this.props.multiple?`${this.min} - ${this.max}`:String(this.valueItem.max)}get labelProps(){let e=this.props.labelSeparator??`: `;return{...this.props,label:this.props.showValueInLabel?`${this.props.label?this.props.label+e:``}${this.label}`:this.props.label}}},E=class{props;value;constructor(e,t){this.props=e,this.value=t}get min(){let e=this.value.item.value;return d(Array.isArray(e)?e[0]:this.props.min??0)}get max(){let e=this.value.item.value;return Array.isArray(e)?d(e[1]):e?d(e):this.props.multiple?d(this.props.max??100):d(this.props.min??0)}set(e){this.value.set(e)}},D=class{props;refs;element;classDesign;className;components;slots;emits;change;attributes;value;valueItem;code;validation;form;event;sliderEvent;fieldLabel;fieldMessage;icon;label;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{FieldAttributesIncludeConstructor:l=oe,FieldChangeIncludeConstructor:u=se,FieldCodeIncludeConstructor:d=de,FieldEventIncludeConstructor:f=ue,FieldFormIncludeConstructor:p=le,FieldLabelIncludeConstructor:m=ye,FieldMessageIncludeConstructor:h=he,FieldValidationIncludeConstructor:g=ce,FieldValueIncludeConstructor:_=fe,IconTrailingIncludeConstructor:v=ee,SliderFieldEventConstructor:y=w,SliderFieldLabelConstructor:b=T,SliderFieldValueConstructor:x=E}=c;this.change=new u(e),this.attributes=new l(e),this.value=new _(e,t,void 0,void 0,!1),this.valueItem=new x(e,this.value),this.code=new d(e),this.validation=new g(e,this.attributes,this.value,this.change,this.code),this.form=new p(e,this.value,this.validation),this.event=new f(e,this.change,this.value,this.validation,s,this.form),this.sliderEvent=new y(e,this.event,this.valueItem),this.fieldLabel=new m(this.className,()=>this.label.labelProps,this.components),this.fieldMessage=new h(this.className,e,this.components,void 0,void 0,()=>this.validation.message),this.icon=new v(e,this.className,this.components),this.label=new b(e,this.valueItem)}getName(e){if(this.props.name)return e?`${this.props.name}-${e}`:this.props.name}},O=class extends g{item;constructor(e,t,n,r=D){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.value.expose(),...this.item.validation.expose()}}initClasses(){return{main:{},body:this.getSubClass(`body`),hidden:this.getSubClass(`hidden`),labelSlider:this.getSubClass(`labelSlider`),labelLeading:this.getSubClass(`labelLeading`),labelTrailing:this.getSubClass(`labelTrailing`),input:this.getSubClass(`input`),inputMin:this.getSubClass(`inputMin`),inputMax:this.getSubClass(`inputMax`),value:this.getSubClass(`value`),valueMin:this.getSubClass(`valueMin`),valueMax:this.getSubClass(`valueMax`),slider:this.getSubClass(`slider`)}}initStyles(){return{}}initRender(){return a(`div`,{key:`main`,...this.getAttrs(),class:this.classes?.value.main},[...this.item.fieldLabel.render(this.slots),...this.renderBody(),...this.item.fieldMessage.render()])}renderBody=()=>[a(`div`,this.getKeyClass(`body`),[...this.item.icon.render(),...this.renderLabelLeading(),...this.renderInputMin(),...this.renderValueMin(),...this.renderSlider(),...this.renderValueMax(),...this.renderInputMax(),...this.renderLabelTrailing()])];renderLabelLeading=()=>{let e=[];return this.props.labelLeading&&e.push(a(`span`,{key:`labelLeading`,class:[this.classes?.value.labelSlider,this.classes?.value.labelLeading]},this.props.labelLeading)),this.initSlot(`leading`,e),e};renderLabelTrailing=()=>{let e=[];return this.props.labelTrailing&&e.push(a(`span`,{key:`labelTrailing`,class:[this.classes?.value.labelSlider,this.classes?.value.labelTrailing]},this.props.labelTrailing)),this.initSlot(`trailing`,e),e};renderInputMin=()=>this.props.multiple&&this.props.showInput?[a(`input`,{key:`inputMin`,placeholder:this.item.label.min,class:[this.classes?.value.input,this.classes?.value.inputMin],name:this.item.getName(`min`),"data-type":`min`,...this.item.sliderEvent.inputBinds})]:[];renderInputMax=()=>this.props.showInput?[a(`input`,{key:`inputMax`,...this.props.inputAttrs,placeholder:this.item.label.max,class:[this.classes?.value.input,this.classes?.value.inputMax],name:this.item.getName(`max`),"data-type":`max`,...this.item.sliderEvent.inputBinds})]:[];renderValueMin=()=>this.props.multiple&&this.props.showValue&&!this.props.showInput?[a(`span`,{key:`valueMin`,class:[this.classes?.value.value,this.classes?.value.valueMin]},this.item.label.min)]:[];renderValueMax=()=>this.props.showValue&&!this.props.showInput?[a(`span`,{key:`valueMax`,class:[this.classes?.value.value,this.classes?.value.valueMax]},this.item.label.max)]:[];renderSlider=()=>{let e=this.components.renderOne(`slider`,f({readonly:this.props.readonly,disabled:this.props.disabled,selected:this.props.selected,name:this.props.name,marks:this.props.marks,magnet:this.props.magnet,keyLabel:this.props.keyLabel,keyValue:this.props.keyValue,required:this.props.required,step:this.props.step,min:this.props.min,max:this.props.max,multiple:this.props.multiple,minimumDistance:this.props.minimumDistance,showThumbLabel:this.props.showThumbLabel,vertical:this.props.vertical,isSkeleton:this.props.isSkeleton,inputAttrs:this.props.inputAttrs},this.props.sliderAttrs,{class:this.classes?.value.slider,value:this.item.value.item.value,onInputLite:this.item.sliderEvent.onSliderInput,onChangeLite:this.item.sliderEvent.onSliderChange}));return e?[e]:[]}}})))()}var A;function j(){return(j=e((()=>{Se(),A=we})))()}var M;function N(){return(N=e((()=>{k(),M={...C}})))()}var P;function F(){return(F=e((()=>{n(),k(),ne(),ve(),me(),j(),N(),P=i({name:`D1SliderField`,__name:`D1SliderField`,props:o({icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},label:{},labelId:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},counterId:{},maxlength:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},multiple:{type:Boolean},value:{},detail:{},step:{},min:{},max:{},readonly:{type:Boolean},isSkeleton:{type:Boolean},name:{},marks:{},magnet:{type:Boolean},keyLabel:{},keyValue:{},minimumDistance:{},vertical:{type:Boolean},showThumbLabel:{type:Boolean},inputAttrs:{},sliderAttrs:{},showValueInLabel:{type:Boolean},showInput:{type:Boolean},showValue:{type:Boolean},labelLeading:{},labelTrailing:{},labelSeparator:{}},M),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-sliderField":!0,"d1-sliderField--disabled":a.disabled,"d1-sliderField--vertical":a.vertical}})),u=l(()=>({})),d=new O(`d1.sliderField`,a,{emits:i,classes:o,styles:u,components:{icon:re,fieldLabel:be,fieldMessage:ge,slider:A}}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1SliderField`,exportName:`default`,displayName:`D1SliderField`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/SliderField/D1SliderField.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{b(),N(),R=[{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterPropsBasic>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`forceShowMessage`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconProps>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`inputAttrs`,type:`Partial<HTMLInputElement>`},{name:`isSkeleton`,type:`boolean`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`labelLeading`,type:`string`},{name:`labelSeparator`,type:`string`},{name:`labelTrailing`,type:`string`},{name:`magnet`,type:`boolean`},{name:`marks`,type:`number[] | ListRecord<SliderMarkItem>`},{name:`max`,type:`NumberOrString`},{name:`maxlength`,type:`string | number`},{name:`min`,type:`NumberOrString`},{name:`minimumDistance`,type:`NumberOrString`},{name:`modelValue`,type:`([number, number] & string)`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(((value: SliderValueType) => void) & ((value: string) => void))`},{name:`onUpdate:value`,type:`(((value: SliderValueType) => void) & ((value: string) => void))`},{name:`placeholder`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`showInput`,type:`boolean`},{name:`showThumbLabel`,type:`boolean`},{name:`showValue`,type:`boolean`},{name:`showValueInLabel`,type:`boolean`},{name:`sliderAttrs`,type:`SliderProps`},{name:`step`,type:`NumberOrString`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`(SliderValueType & SliderValueProp)`},{name:`vertical`,type:`boolean`}],z=[{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for leading content / Слот для префиксного содержимого`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`mark`,description:`Slot for mark custom rendering / Слот для пользовательского рендеринга метки`,properties:[{name:`props`,type:`(SliderMarkSlot) | undefined`}]},{name:`maxLabel`,description:`Slot for max thumb label / Слот для метки максимального ползунка`,properties:[{name:`props`,type:`(SliderThumbSlot) | undefined`}]},{name:`minLabel`,description:`Slot for min thumb label / Слот для метки минимального ползунка`,properties:[{name:`props`,type:`(SliderThumbSlot) | undefined`}]},{name:`trailing`,description:`Slot for trailing content / Слот для суффиксного содержимого`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<SliderValueType>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<SliderValueType>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<SliderValueType>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<SliderValueType>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`SliderValueType`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`SliderValueType`}]}],V={component:`SliderField`,props:R,slots:z,events:B,defaults:M,wikiDesign:v}})))()}var U;function W(){return(W=e((()=>{m(),y(),H(),U=new x(V.component,V.props,V.defaults,V.wikiDesign,_,h)})))()}var Te=t({SliderField:()=>K,SliderFieldMarks:()=>Y,SliderFieldMultiple:()=>J,SliderFieldOrientation:()=>q,SliderFieldSkeleton:()=>Z,SliderFieldVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>G}),G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{L(),W(),ie(),n(),G={title:`Ui/SliderField`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},K={args:{multiple:!0,selected:!1,icon:``,disabled:!1,labelLeading:``,labelSeparator:``,labelTrailing:``,placeholder:``,validationMessage:``,showValue:!0,showInput:!0}},q={name:`Ориентация`,render:()=>({components:{D1SliderField:I},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <D1SliderField label="Horizontal" :value="40" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <D1SliderField vertical label="Vertical" :value="60" />
          </div>
        </div>
    `})},J={name:`Выбор диапазона`,render:()=>({components:{D1SliderField:I},template:`
        <D1SliderField
          label="Range selection"
          multiple
          showInput
          :value="[20, 80]"
        />
    `})},Y={name:`Метки и деления`,render:()=>({components:{D1SliderField:I},setup(){return{customMarks:[{mark:0,label:`0%`},{mark:25,label:`25%`},{mark:50,label:`50%`},{mark:75,label:`75%`},{mark:100,label:`100%`}]}},template:`
        <D1SliderField
          label="Slider with marks"
          :marks="customMarks"
          magnet
          :step="5"
          showInput
        />
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1SliderField:I},setup(){return{singleValue:u(50),rangeValue:u([20,80])}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Single value: <strong>{{ singleValue }}</strong></span>
            <button class="wiki-storybook-button" @click="singleValue = 25">25</button>
            <button class="wiki-storybook-button" @click="singleValue = 75">75</button>
          </div>
          <D1SliderField
            v-model="singleValue"
            label="Single slider"
            showInput
            :min="0"
            :max="100"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Range value: <strong>{{ rangeValue }}</strong></span>
            <button class="wiki-storybook-button" @click="rangeValue = [10, 90]">10 - 90</button>
          </div>
          <D1SliderField
            v-model="rangeValue"
            label="Range slider"
            multiple
            showInput
            :min="0"
            :max="100"
          />
        </div>
    `})},Z={name:`Скелетон`,render:()=>({components:{D1SliderField:I,D1Skeleton:ae},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1SliderField
              isSkeleton
              label="Loading slider"
              showInput
            />
          </div>
        </D1Skeleton>
    `})},Q=[`SliderField`,`SliderFieldOrientation`,`SliderFieldMultiple`,`SliderFieldMarks`,`SliderFieldVModel`,`SliderFieldSkeleton`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    selected: false,
    icon: "",
    disabled: false,
    labelLeading: "",
    labelSeparator: "",
    labelTrailing: "",
    placeholder: "",
    validationMessage: "",
    showValue: true,
    showInput: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Ориентация',
  render: () => ({
    components: {
      D1SliderField
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <D1SliderField label="Horizontal" :value="40" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <D1SliderField vertical label="Vertical" :value="60" />
          </div>
        </div>
    \`
  })
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Выбор диапазона',
  render: () => ({
    components: {
      D1SliderField
    },
    template: \`
        <D1SliderField
          label="Range selection"
          multiple
          showInput
          :value="[20, 80]"
        />
    \`
  })
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Метки и деления',
  render: () => ({
    components: {
      D1SliderField
    },
    setup() {
      return {
        customMarks: [{
          mark: 0,
          label: '0%'
        }, {
          mark: 25,
          label: '25%'
        }, {
          mark: 50,
          label: '50%'
        }, {
          mark: 75,
          label: '75%'
        }, {
          mark: 100,
          label: '100%'
        }]
      };
    },
    template: \`
        <D1SliderField
          label="Slider with marks"
          :marks="customMarks"
          magnet
          :step="5"
          showInput
        />
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1SliderField
    },
    setup() {
      const singleValue = ref(50);
      const rangeValue = ref([20, 80]);
      return {
        singleValue,
        rangeValue
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Single value: <strong>{{ singleValue }}</strong></span>
            <button class="wiki-storybook-button" @click="singleValue = 25">25</button>
            <button class="wiki-storybook-button" @click="singleValue = 75">75</button>
          </div>
          <D1SliderField
            v-model="singleValue"
            label="Single slider"
            showInput
            :min="0"
            :max="100"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Range value: <strong>{{ rangeValue }}</strong></span>
            <button class="wiki-storybook-button" @click="rangeValue = [10, 90]">10 - 90</button>
          </div>
          <D1SliderField
            v-model="rangeValue"
            label="Range slider"
            multiple
            showInput
            :min="0"
            :max="100"
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1SliderField,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1SliderField
              isSkeleton
              label="Loading slider"
              showInput
            />
          </div>
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}}})))()}export{q as a,$ as c,J as i,U as l,K as n,Z as o,Y as r,X as s,Te as t,W as u};