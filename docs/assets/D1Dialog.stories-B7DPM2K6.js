import{X as P,c as b,ax as T,h as V,e as C,D as L,E,F,I as W,J as H,K as S,r as f}from"./iframe-okvuAVTt.js";import{x as N}from"./LabelInclude-D-mLvjK5-DsZQ3OF7.js";import{v as j}from"./DescriptionInclude-D4ane9aR-Du4eEctP.js";import{a as M}from"./TextInclude--GERRCGj-Bba7rGS0.js";import{T as $,F as q,D as z}from"./index-CEykQtFM.js";import{y as J}from"./WindowClassesInclude-B56usxgx-HJj-iPab.js";import{B as U}from"./IconInclude-CLqwI29Q-B_xjs2bG.js";import{D as X}from"./index-CcaldjYc.js";import{D as Y}from"./index-D9mtirJK.js";import{D as G}from"./index-CDim1ist.js";import{w as K,W as R,a as Q,b as Z}from"./wiki-BeTUR4cU.js";import"./jsx-runtime-u17CrQMm.js";var ee=Object.defineProperty,te=(t,e,n)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e,n)=>te(t,typeof e!="symbol"?e+"":e,n);class oe extends q{constructor(e,n,g,o,a,l,r,D,y){const{DescriptionIncludeConstructor:v=j,IconIncludeConstructor:I=U,LabelIncludeConstructor:O=N,TextIncludeConstructor:x=M,WindowClassesIncludeConstructor:_=J}=y??{};super(e,n,g,o,a,l,r,D,b(()=>({open:e.open,image:e.image,adaptive:"modal",imagePosition:e.imagePosition,closeButton:this.props.closeButton})),void 0,b(()=>{const k=[];return e.buttonClose!==null&&k.push(C(e.buttonClose,{label:this.text.close.value,value:"close",class:this.windowClasses.get().close,onClick:()=>{var c;return(c=this.emits)==null?void 0:c.call(this,"close")}},"label",!0)),e.buttonOk!==null&&k.push(C(e.buttonOk,{label:this.text.ok.value,value:"ok",class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>{var c;return(c=this.emits)==null?void 0:c.call(this,"ok")}},"label",!0)),{list:k,align:"center"}})),s(this,"icon"),s(this,"label"),s(this,"description"),s(this,"windowClasses"),s(this,"text"),s(this,"iconValue",b(()=>this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon)),this.props=e,this.refs=n,this.element=g,this.classDesign=o,this.className=a,this.components=l,this.slots=r,this.emits=D,this.icon=new I(T({icon:this.iconValue}),a,l,n.iconAttrs),this.label=new O(e,a,void 0,r,void 0,void 0,!0),this.description=new v(e,a,r),this.windowClasses=new _(o),this.text=new x(this.props)}}const ne={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:"top"};class se extends ${constructor(){super(...arguments),s(this,"renderContent",e=>[...this.renderInformation(),...this.renderDefault(e)]),s(this,"renderInformation",()=>{var e;return[V("div",{class:(e=this.classes)==null?void 0:e.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])]})}initItem(){return new oe(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass("title"),header:this.getSubClass("header"),information:this.getSubClass("information"),icon:this.getSubClass("icon"),label:this.getSubClass("label"),description:this.getSubClass("description"),body:this.getSubClass("body"),footer:this.getSubClass("footer")}}initRender(){var e;return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},P({class:(e=this.classes)==null?void 0:e.value.main,"data-touch":"touch"},this.getAttrs()))}}const B={imagePosition:["top","left"],width:["sm","md","lg","auto"]},A={...ne,buttonClose:{outline:!0},iconSuccess:"check_circle",iconError:"error",iconAttrs:{size:"3xl"},imagePosition:"top",width:"md"},i=L({name:"D1Dialog",__name:"D1Dialog",props:W({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},label:{},labelId:{},description:{},descriptionId:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},success:{type:Boolean},error:{type:Boolean},imagePosition:{},width:{}},A),emits:["window","bars","barsLite","barsBack","actions","actionsLite","ok","close"],setup(t,{expose:e,emit:n}){const g=n,o=t,a=b(()=>({main:{"d1-dialog":!0,"d1-dialog--success":o.success,"d1-dialog--error":o.error,[`d1-dialog--imagePosition--${o.imagePosition}`]:S(B.imagePosition,o.imagePosition),[`d1-dialog--width--${o.width}`]:S(B.width,o.width)}})),l=b(()=>({})),r=new se("d1.dialog",o,{emits:g,classes:a,styles:l,components:{window:X,bars:Y,actions:z,icon:G}}),D=r.render();return e(r.expose()),(y,v)=>(H(),E(F(D)))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{name:"D1Dialog",exportName:"default",displayName:"D1Dialog",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue"]});const ie=[{name:"actionsAttrs",type:"ConstrBind<Actions>"},{name:"actionsHide",type:"boolean"},{name:"actionsList",type:"ConstrBind<Actions['list']>"},{name:"actionsSecondary",type:"ConstrBind<Actions['listSecondary']>"},{name:"autoClose",type:"boolean"},{name:"barsAttrs",type:"ConstrBind<Bars>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"Bars['bars']"},{name:"buttonClose",type:"string | ConstrBind<Button> | null"},{name:"buttonOk",type:"string | ConstrBind<Button> | null"},{name:"clickOkAndClose",type:"boolean"},{name:"closeButton",type:"boolean"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"disabled",type:"boolean"},{name:"error",type:"boolean"},{name:"icon",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconError",type:"IconValue<Icon>"},{name:"iconSuccess",type:"IconValue<Icon>"},{name:"image",type:"string | ConstrBind<Image>"},{name:"imagePosition",type:"string",option:["top","left"]},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"open",type:"boolean"},{name:"success",type:"boolean"},{name:"textClose",type:"TextValue"},{name:"textOk",type:"TextValue"},{name:"width",type:"string",option:["sm","md","lg","auto"]},{name:"windowAttrs",type:"ConstrBind<Window>"}],h={component:"Dialog",props:ie,defaults:A,wikiDesign:K},w=new R(h.component,h.props,h.defaults,h.wikiDesign,Q,Z),ae={title:"Ui/Dialog",component:i,parameters:{design:"d1",docs:{description:{component:w.getDescription()}}},argTypes:w.getWiki(),args:w.getValues()},p={render:t=>({components:{D1Dialog:i},setup:()=>({args:t}),template:`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `})},m={name:"Состояния успеха и ошибки",render:()=>({components:{D1Dialog:i},setup(){return{openSuccess:f(!1),openError:f(!1)}},template:`
        <div class="wiki-storybook-flex">
          <D1Dialog
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Success Dialog</button>
            </template>
          </D1Dialog>

          <D1Dialog
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Error Dialog</button>
            </template>
          </D1Dialog>
        </div>
    `})},d={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Dialog:i},setup(){return{open:f(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Dialog
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        />
    `})},u={name:"Демонстрация всех слотов",render:()=>({components:{D1Dialog:i},template:`
        <D1Dialog>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Dialog with All Slots</button>
          </template>

          <template #title>
            Title Slot
          </template>

          <template #label>
            <strong>Label Slot</strong>
          </template>

          <template #description>
            <em>Description Slot</em>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #footer="{classesWindow}">
            Footer Slot
          </template>
        </D1Dialog>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Dialog
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Состояния успеха и ошибки',
  render: () => ({
    components: {
      D1Dialog
    },
    setup() {
      return {
        openSuccess: ref(false),
        openError: ref(false)
      };
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Dialog
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Success Dialog</button>
            </template>
          </D1Dialog>

          <D1Dialog
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Error Dialog</button>
            </template>
          </D1Dialog>
        </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Dialog
    },
    setup() {
      return {
        open: ref(false)
      };
    },
    template: \`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Dialog
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        />
    \`
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: {
      D1Dialog
    },
    template: \`
        <D1Dialog>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Dialog with All Slots</button>
          </template>

          <template #title>
            Title Slot
          </template>

          <template #label>
            <strong>Label Slot</strong>
          </template>

          <template #description>
            <em>Description Slot</em>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #footer="{classesWindow}">
            Footer Slot
          </template>
        </D1Dialog>
    \`
  })
}`,...u.parameters?.docs?.source}}};const re=["Dialog","DialogStates","DialogVModel","DialogAllSlots"],we=Object.freeze(Object.defineProperty({__proto__:null,Dialog:p,DialogAllSlots:u,DialogStates:m,DialogVModel:d,__namedExportsOrder:re,default:ae},Symbol.toStringTag,{value:"Module"}));export{we as D,p as a,w as b,m as c,d,u as e};
