import{c as a,E as g,b as v,a as S,w as B,N as k,B as C,x as I,R as P,U as L,G as T,k as M,h as l,V,f as $,m as q,g as N,j as A,l as E,u as R,o as O}from"./iframe-CpPdPYqc.js";import{_ as W}from"./D1Icon-C_FdSDGx.js";import{_ as H,D as U}from"./D1FieldLabel-BrYa-NYY.js";import{_ as z}from"./D1FieldMessage-BztFAjQP.js";import{C as j}from"./CaptionInclude-bVG7GYl3.js";import{P as G,S as J}from"./SuffixInclude-aSaDpDIt.js";import{I as K,E as Q,a as X}from"./EventClickInclude-Cs8cEZG8.js";import{F as _}from"./index-BAIXuGol.js";import{P as Y}from"./ProgressInclude-BecAH_mI.js";import{S as Z}from"./SkeletonInclude-DPqZwiUk.js";import{W as ee,w as se,a as ae,b as te}from"./wiki-b8Pce8s9.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as le}from"./D1Skeleton-Dvv1lbQv.js";class ie{constructor(e,t,n,s,d,c,r){this.props=e,this.className=t,this.components=n,this.slots=s,this.isCounter=d,this.extra=c,this.index=r,this.fieldCounter=new _(this.props,this.className)}fieldCounter;is=a(()=>g(this.props.label));binds=a(()=>v(S(this.extra),this.isCounter?.value?this.fieldCounter.bindsIntermediary.value:{},{label:this.props.label,required:this.props.required},this.props.fieldLabelAttrs));render=()=>this.components&&this.is.value?this.components.render("fieldLabel",{...v(this.binds.value,{class:`${this.className}__fieldLabel`})},this.slots,this.index):[]}class ne{constructor(e,t,n,s,d,c,r){this.props=e,this.className=t,this.components=n,this.validationMessage=s,this.isCounter=d,this.extra=c,this.index=r,this.fieldCounter=new _(this.props,this.className)}fieldCounter;validation=a(()=>g(this.props.validationMessage)?this.props.validationMessage:S(this.validationMessage));isValidationMessage=a(()=>g(this.validation.value));binds=a(()=>v(S(this.extra),this.isCounter?.value?this.fieldCounter.bindsIntermediary.value:{},{disabled:this.props.disabled,forceShow:this.props.forceShowMessage,helperMessage:this.props.helperMessage,validationMessage:this.validation.value},this.props.fieldMessageAttrs));render=()=>this.components?this.components.render("fieldMessage",{...v(this.binds.value,{class:`${this.className}__fieldMessage`})},void 0,this.index):[]}class oe{constructor(e,t){this.props=e,this.className=t}isArrow=a(()=>!!((this.props.arrowCarousel||this.props.arrowStepper)&&!this.props.disabled));isCancel=a(()=>!!(this.props.cancel&&!this.props.readonly&&!this.props.disabled&&!this.props.arrowCarousel&&!this.props.arrowStepper&&(this.props.cancel==="auto"&&this.props.cancelShow||this.props.cancel==="always")));cancelBind=a(()=>({class:`${this.className}__cancel`,icon:this.props.iconClose,dynamic:!0,"data-event-type":"cancel"}));previousBind=a(()=>({class:`${this.className}__previous`,icon:this.props.arrowCarousel?this.props.iconArrowLeft:this.props.iconMinus,disabled:this.props.disabled||this.props.disabledPrevious,dynamic:!0,"data-event-type":"previous"}));nextBind=a(()=>({class:`${this.className}__next`,icon:this.props.arrowCarousel?this.props.iconArrowRight:this.props.iconPlus,disabled:this.props.disabled||this.props.disabledNext,dynamic:!0,"data-event-type":"next"}))}class re{constructor(e,t){this.element=e,this.className=t,B(e,()=>this.update,{immediate:!0}),k()&&(this.event=new C(window,"resize",this.update),I(()=>this.event?.stop())),P(this.update),L(this.update)}left=0;right=0;title=0;event;update=()=>{requestAnimationFrame(()=>{const e=this.getElementSpace(),t=this.getElementPrefix();e&&(this.left=e.offsetLeft,this.right=(e.parentElement?.offsetWidth??0)-this.left-e.offsetWidth),this.title=t?.offsetLeft??e?.offsetLeft??0,this.make()})};getElementSpace(){return this.element.value?.querySelector(`.${this.className}__body__scoreboard__space`)??void 0}getElementPrefix(){return this.element.value?.querySelector(`.${this.className}__prefix`)??void 0}make(){const e=this.element.value;e&&(e.style.setProperty(`--${this.className}-sys-left`,`${this.left}px`),e.style.setProperty(`--${this.className}-sys-right`,`${this.right}px`),e.style.setProperty(`--${this.className}-sys-title`,`${this.title}px`),e.classList.contains(`${this.className}--show`)||requestAnimationFrame(()=>e.classList.add(`${this.className}--show`)))}}let de=class{constructor(e,t,n,s,d,c,r,F){this.props=e,this.refs=t,this.element=n,this.classDesign=s,this.className=d,this.components=c,this.slots=r,this.emits=F,this.icon=new K(this.props,this.className,this.components),this.caption=new j(this.props,this.className,this.slots),this.prefix=new G(this.props,this.className,this.slots),this.suffix=new J(this.props,this.className,this.slots),this.fieldLabel=new ie(this.props,this.className,this.components,this.slots,this.refs.counterTop,this.propsSkeleton),this.fieldMessage=new ne(this.props,this.className,this.components,void 0,a(()=>!this.props.counterTop),this.propsSkeleton),this.progress=new Y(this.props,this.className,this.components,{circular:!0,position:"static",dense:!0}),this.enabled=new Q(this.props,this.progress),this.event=new X(this.props,this.enabled,this.emits),this.skeleton=new Z(this.props,this.classDesign,["classBackground"]),this.icons=new oe(this.props,this.className),this.size=new re(this.element,this.className)}icon;caption;prefix;suffix;fieldLabel;fieldMessage;progress;enabled;event;skeleton;icons;size;isValidation=a(()=>!!(this.props.validationMessage&&(this.props.forceShowMessage||!this.props.readonly&&!this.props.disabled)));classes=a(()=>({[`${this.className}--cancel`]:this.icons.isCancel.value,[`${this.className}--suffix`]:this.props.suffix,[`${this.className}--validation`]:this.isValidation.value}));getControl(){return{id:T(),className:`${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`,classHidden:`${this.className}__body__hidden`}}propsSkeleton=a(()=>({isSkeleton:this.props.isSkeleton}))};const ce={cancel:"auto",align:"center"};class pe extends M{item;constructor(e,t,n){super(e,t,n),this.item=new de(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:this.item.classes.value,body:this.getSubClass("body"),bodyInput:this.getSubClass("body__input"),bodyTitle:this.getSubClass("body__title"),bodyTitleLabel:this.getSubClass("body__title__label"),bodyTitleLabelText:this.getSubClass("body__title__label__text"),bodyScoreboard:this.getSubClass("body__scoreboard"),bodyScoreboardLeft:this.getSubClass("body__scoreboard__left"),bodyScoreboardRight:this.getSubClass("body__scoreboard__right"),bodyScoreboardSpace:this.getSubClass("body__scoreboard__space"),bodyScoreboardInput:this.getSubClass("body__scoreboard__input"),bodyBorder:this.getSubClass("body__border"),required:this.getSubClass("required")}}initStyles(){return{}}initRender(){const e=[];return this.props.classic&&!this.props.basic&&!this.props.boxed&&!this.props.filled&&!this.props.outlined&&!this.props.tonal&&e.push(...this.item.fieldLabel.render()),e.push(...this.renderBody(),...this.item.fieldMessage.render()),l("label",{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,style:this.styles?.value},e)}renderBody=()=>{const e=[this.initSlot("default",void 0,this.item.getControl()),this.renderBodyLabel(),this.renderBodyScoreboard(),this.renderBodyBorder()];return[l("span",{class:[this.classes?.value.body,this.item.skeleton.classes.value],onClick:this.item.event.onClick},e)]};renderBodyLabel=()=>{const e=[this.props.label];return this.props.required&&e.push(l("span",{class:this.classes?.value.required})),l("span",{class:this.classes?.value.bodyTitle},l("span",{class:this.classes?.value.bodyTitleLabel},l("span",{class:this.classes?.value.bodyTitleLabelText},e)))};renderBodyScoreboard=()=>{const e=[...this.renderBodyScoreboardSlot(),...this.renderBodyScoreboardIcon(),...this.item.prefix.render(),...this.item.suffix.render(),...this.item.progress.render(),...this.renderBodyScoreboardSpace()];return l("span",{class:this.classes?.value.bodyScoreboard,"data-element":"scoreboard"},e)};renderBodyScoreboardSlot=()=>{const e=[];return this.slots&&("leading"in this.slots&&e.push(l("span",{class:this.classes?.value.bodyScoreboardLeft},this.initSlot("leading"))),"trailing"in this.slots&&e.push(l("span",{class:this.classes?.value.bodyScoreboardRight},this.initSlot("trailing")))),e};renderBodyScoreboardIcon=()=>{const e=[...this.item.icon.render()];return this.item.icons.isCancel.value&&this.components.renderAdd(e,"icon",this.item.icons.cancelBind.value,void 0,"cancel"),this.item.icons.isArrow.value&&(this.components.renderAdd(e,"icon",this.item.icons.previousBind.value,void 0,"previous"),this.components.renderAdd(e,"icon",this.item.icons.nextBind.value,void 0,"next")),e};renderBodyScoreboardSpace=()=>{const e=[];return this.item.caption.is.value&&e.push(l("span",{class:this.classes?.value.bodyScoreboardInput},this.focusValue.value),...this.item.caption.render()),[l("span",{class:this.classes?.value.bodyScoreboardSpace},e)]};renderBodyBorder=()=>l("span",{class:this.classes?.value.bodyBorder});focusValue=a(()=>{if(V(this.props.value))return this.props.value;const e=this.lengthElement.value??this.inputElement.value;return e?.nodeName==="INPUT"?e.value.toString():e?.innerText.replace(/[\r\n]+/ig,"").trim()});lengthElement=a(()=>this.element.value?.querySelector(`.${this.classes?.value.bodyInput} [data-length]`)??void 0);inputElement=a(()=>this.element.value?.querySelector(`input.${this.classes?.value.bodyInput}, .${this.classes?.value.bodyInput} input`)??void 0)}const me=W,ue=H,he=z,D={cancel:["auto","always"],align:["center","right","left"],width:[]},x={...ce,iconArrowLeft:"keyboard_arrow_left",iconArrowRight:"keyboard_arrow_right",iconPlus:"add",iconMinus:"remove",iconClose:"close_small",classic:!0,cancel:"auto",align:"center"},o=$({name:"D1Field",__name:"D1Field",props:q({disabledPrevious:{type:Boolean},disabledNext:{type:Boolean},counterTop:{type:Boolean},cancelShow:{type:Boolean},iconArrowLeft:{},iconArrowRight:{},iconPlus:{},iconMinus:{},iconClose:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},icon:{},prefix:{},suffix:{},caption:{},required:{type:Boolean},fieldLabelAttrs:{},label:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},maxlength:{},fieldCounterAttrs:{},forceShowMessage:{type:Boolean},disabled:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},loading:{type:[Boolean,Object]},readonly:{type:Boolean},to:{},value:{},detail:{},isSkeleton:{type:Boolean},focus:{type:Boolean},block:{type:Boolean},isValue:{type:Boolean},basic:{type:Boolean},boxed:{type:Boolean},tonal:{type:Boolean},filled:{type:Boolean},outlined:{type:Boolean},classic:{type:Boolean},arrowCarousel:{type:Boolean},arrowStepper:{type:Boolean},cancel:{},align:{},width:{}},x),emits:["click","clickLite"],setup(i,{expose:e,emit:t}){const n=t,s=i,d=a(()=>({main:{"d1-field":!0,"d1-field--focus":s.focus,"d1-field--disabled":s.disabled,"d1-field--selected":s.selected,"d1-field--readonly":s.readonly,"d1-field--block":s.block,"d1-field--isValue":s.isValue,"d1-field--basic":s.basic,"d1-field--boxed":s.boxed,"d1-field--tonal":s.tonal,"d1-field--filled":s.filled,"d1-field--outlined":s.outlined,"d1-field--classic":s.classic&&!s.basic&&!s.boxed&&!s.tonal&&!s.filled&&!s.outlined,"d1-field--arrowCarousel":s.arrowCarousel,"d1-field--arrowStepper":s.arrowStepper,[`d1-field--cancel--${s.cancel}`]:N(D.cancel,s.cancel),[`d1-field--align--${s.align}`]:N(D.align,s.align),"d1-field--width--custom":g(s.width)&&!N(D.width,s.width)}})),c=a(()=>({"--d1-field-sys-width":s.width??null})),r=new pe("d1.field",s,{emits:n,classes:d,styles:c,components:{icon:me,fieldLabel:ue,fieldMessage:he,progress:U},compMod:{icon:{rounded:"full"},iconTrailing:{rounded:"full"},cancel:{rounded:"full"},previous:{rounded:"full"},next:{rounded:"full"}}}),F=r.render();return e(r.expose()),(ge,ve)=>(O(),A(E(R(F))))}});o.__docgenInfo={name:"D1Field",exportName:"default",displayName:"D1Field",description:"",tags:{},props:[{name:"width",required:!1,type:{name:"union",elements:[{name:"string"},{name:'"custom"'}]}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"center"'},{name:'"right"'},{name:'"left"'}]}},{name:"cancel",required:!1,type:{name:"union",elements:[{name:'"auto"'},{name:'"always"'}]}},{name:"arrowStepper",required:!1,type:{name:"boolean"}},{name:"arrowCarousel",required:!1,type:{name:"boolean"}},{name:"classic",required:!1,type:{name:"boolean"}},{name:"outlined",required:!1,type:{name:"boolean"}},{name:"filled",required:!1,type:{name:"boolean"}},{name:"tonal",required:!1,type:{name:"boolean"}},{name:"boxed",required:!1,type:{name:"boolean"}},{name:"basic",required:!1,type:{name:"boolean"}},{name:"isValue",required:!1,type:{name:"boolean"}},{name:"block",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"focus",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Git/dxt-ui/packages/d1/src/components/Ui/Field/D1Field.vue"]};const be=[{name:"align",type:"string",option:["center","right","left"]},{name:"arrowCarousel",type:"boolean"},{name:"arrowStepper",type:"boolean"},{name:"basic",type:"boolean"},{name:"block",type:"boolean"},{name:"boxed",type:"boolean"},{name:"cancel",type:"string",option:["auto","always"]},{name:"cancelShow",type:"boolean"},{name:"caption",type:"string | number"},{name:"classic",type:"boolean"},{name:"counter",type:"string | number"},{name:"counterShow",type:"boolean"},{name:"counterTemplate",type:"string"},{name:"counterTop",type:"boolean"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"disabledNext",type:"boolean"},{name:"disabledPrevious",type:"boolean"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounterPropsBasic>"},{name:"fieldLabelAttrs",type:"ConstrBind<FieldLabelPropsBasic<FieldCounterPropsBasic, ProgressPropsBasic>>"},{name:"fieldMessageAttrs",type:"ConstrBind<FieldMessagePropsBasic<FieldCounterPropsBasic>>"},{name:"filled",type:"boolean"},{name:"focus",type:"boolean"},{name:"forceShowMessage",type:"boolean"},{name:"helperMessage",type:"string"},{name:"icon",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconArrowLeft",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconArrowRight",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconAttrs",type:"ConstrBind<IconPropsBasic<ImagePropsBasic>>"},{name:"iconClose",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconMinus",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconPalette",type:"boolean"},{name:"iconPlus",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconTrailing",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"isSkeleton",type:"boolean"},{name:"isValue",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"loading",type:"boolean | ConstrBind<ProgressPropsBasic>"},{name:"maxlength",type:"string | number"},{name:"outlined",type:"boolean"},{name:"prefix",type:"string | number"},{name:"readonly",type:"boolean"},{name:"required",type:"boolean"},{name:"selected",type:"boolean"},{name:"suffix",type:"string | number"},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"tonal",type:"boolean"},{name:"validationMessage",type:"string"},{name:"value",type:"any"},{name:"width",type:"string",option:["custom"]}],w=new ee("Field",be,x,se,ae,te),ye={title:"Ui/Field",component:o,parameters:{design:"d1",docs:{description:{component:w.getDescription()}}},argTypes:w.getWiki(),args:w.getValues()},p={render:i=>({components:{D1Field:o},setup:()=>({args:i}),template:`
      <D1Field v-bind="args">
        <template v-slot:default="{id, className}">
          <input :value="args.value" :id="id" :class="className" readonly/>
        </template>
      </D1Field>
    `})},m={name:"Кнопка очистки",render:()=>({components:{D1Field:o},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
        </div>
    `})},u={name:"Навигация / стрелки",render:()=>({components:{D1Field:o},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </D1Field>
        </div>
    `})},h={name:"Скелетон",render:()=>({components:{D1Field:o,D1Skeleton:le},template:`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    `})},b={name:"Состояние значения",render:()=>({components:{D1Field:o},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </D1Field>
          <D1Field label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </D1Field>
        </div>
    `})},y={name:"Ширина",render:()=>({components:{D1Field:o},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    `})},f={name:"Использование слотов",render:()=>({components:{D1Field:o},template:`
        <D1Field
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
        >
          <template #default="{id, className}">
            <input :id="id" :class="className" value="Value" readonly/>
          </template>
          <template #leading>Leading slot</template>
          <template #trailing>Trailing slot</template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </D1Field>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Field
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Field v-bind="args">
        <template v-slot:default="{id, className}">
          <input :value="args.value" :id="id" :class="className" readonly/>
        </template>
      </D1Field>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Кнопка очистки',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Навигация / стрелки',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Field,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    \`
  })
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Состояние значения',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </D1Field>
          <D1Field label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Ширина',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <D1Field
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
        >
          <template #default="{id, className}">
            <input :id="id" :class="className" value="Value" readonly/>
          </template>
          <template #leading>Leading slot</template>
          <template #trailing>Trailing slot</template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </D1Field>
    \`
  })
}`,...f.parameters?.docs?.source}}};const fe=["Field","FieldCancel","FieldNavigation","FieldSkeleton","FieldValue","FieldWidth","FieldSlots"],Me=Object.freeze(Object.defineProperty({__proto__:null,Field:p,FieldCancel:m,FieldNavigation:u,FieldSkeleton:h,FieldSlots:f,FieldValue:b,FieldWidth:y,__namedExportsOrder:fe,default:ye},Symbol.toStringTag,{value:"Module"}));export{Me as F,p as a,w as b,b as c,y as d,m as e,u as f,h as g,f as h};
