import{c as m,x as k,M as S,e as C,l as B,z as v,A as I,B as D,D as A,E as x,F as P,r as f}from"./iframe-BlCC38XJ.js";import{D as O}from"./index-Cl5idLwM.js";import{D as _}from"./index-BPfSqOYD.js";import{M as L,a as T,D as V}from"./index-B3KIeo7o.js";import{D as E}from"./index-C6jvvNQV.js";import{L as W}from"./LabelInclude-LO41h5FV.js";import{D as F}from"./DescriptionInclude-DKD7KYip.js";import{T as q}from"./TextInclude-Co3fBJ24.js";import{I as H}from"./IconInclude-Dv2ENl69.js";import{W as M}from"./WindowClassesInclude-CVb6KSq0.js";import{W as $,w as z,a as j,b as N}from"./wiki-fb_eBW86.js";import"./jsx-runtime-D_zvdyIk.js";let U=class extends L{constructor(e,a,u,t,n,r,o,b){super(e,a,u,t,n,r,o,b,m(()=>({open:e.open,image:e.image,adaptive:"modal",imagePosition:e.imagePosition,closeButton:this.props.closeButton})),void 0,m(()=>{const g=[];return e.buttonClose!==null&&g.push(k(e.buttonClose,{label:this.text.close.value,value:"close",class:this.windowClasses.get().close,onClick:()=>this.emits?.("close")},"label",!0)),e.buttonOk!==null&&g.push(k(e.buttonOk,{label:this.text.ok.value,value:"ok",class:this.props.clickOkAndClose?this.windowClasses.get().close:void 0,onClick:()=>this.emits?.("ok")},"label",!0)),{list:g,align:"center"}})),this.props=e,this.refs=a,this.element=u,this.classDesign=t,this.className=n,this.components=r,this.slots=o,this.emits=b,this.icon=new H(S({icon:this.iconValue}),n,r,a.iconAttrs),this.label=new W(e,n,void 0,o,void 0,void 0,!0),this.description=new F(e,n,o),this.windowClasses=new M(t),this.text=new q(this.props)}icon;label;description;windowClasses;text;iconValue=m(()=>this.props.success?this.props.iconSuccess:this.props.error?this.props.iconError:this.props.icon)};const Y={barsBackHide:!0,barsHide:!0,clickOkAndClose:!0,imagePosition:"top"};class R extends T{initItem(){return new U(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass("title"),header:this.getSubClass("header"),information:this.getSubClass("information"),icon:this.getSubClass("icon"),label:this.getSubClass("label"),description:this.getSubClass("description"),body:this.getSubClass("body"),footer:this.getSubClass("footer")}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitle,default:this.renderContent,footer:this.renderFooter},C({class:this.classes?.value.main,"data-touch":"touch"},this.getAttrs()))}renderContent=e=>[...this.renderInformation(),...this.renderDefault(e)];renderInformation=()=>[B("div",{class:this.classes?.value.information},[...this.item.icon.renderIcon(),...this.item.label.render(),...this.item.description.render()])]}const y={imagePosition:["top","left"],padding:["sm","md","lg"],width:["sm","md","lg","auto"]},w={...Y,buttonClose:{outline:!0},iconSuccess:"check_circle",iconError:"error",iconAttrs:{size:"3xl"},imagePosition:"top",paddingByIndent:!0,width:"md"},s=v({name:"D1Dialog",__name:"D1Dialog",props:I({open:{type:Boolean},icon:{},buttonOk:{},buttonClose:{},closeButton:{type:Boolean},clickOkAndClose:{type:Boolean},iconSuccess:{},iconError:{},iconAttrs:{},disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},label:{},labelId:{},description:{},textClose:{type:[String,Function]},textOk:{type:[String,Function]},success:{type:Boolean},error:{type:Boolean},imagePosition:{},padding:{},paddingByIndent:{type:Boolean},width:{}},w),emits:["window","bars","barsLite","barsBack","actions","actionsLite","ok","close"],setup(i,{expose:e,emit:a}){const u=a,t=i,n=m(()=>({main:{"d1-dialog":!0,"d1-dialog--success":t.success,"d1-dialog--error":t.error,[`d1-dialog--imagePosition--${t.imagePosition}`]:D(y.imagePosition,t.imagePosition),[`d1-dialog--padding--${t.padding}`]:D(y.padding,t.padding),"d1-dialog--paddingByIndent":t.paddingByIndent,[`d1-dialog--width--${t.width}`]:D(y.width,t.width)}})),r=m(()=>({})),o=new R("d1.dialog",t,{emits:u,classes:n,styles:r,components:{window:O,bars:_,actions:V,icon:E}}),b=o.render();return e(o.expose()),(g,Q)=>(P(),A(x(b)))}});s.__docgenInfo={name:"D1Dialog",exportName:"default",displayName:"D1Dialog",description:"",tags:{},props:[{name:"width",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"auto"'}]}},{name:"paddingByIndent",required:!1,type:{name:"boolean"}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"imagePosition",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"left"'}]}},{name:"error",required:!1,type:{name:"boolean"}},{name:"success",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Dialog/D1Dialog.vue"]};const G=[{name:"actionsAttrs",type:"ConstrBind<ActionsProps>"},{name:"actionsHide",type:"boolean"},{name:"actionsList",type:"ConstrBind<unknown>"},{name:"actionsSecondary",type:"ConstrBind<unknown>"},{name:"autoClose",type:"boolean"},{name:"barsAttrs",type:"ConstrBind<BarsProps>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"Bars['bars']"},{name:"buttonClose",type:"string | ConstrBind<ButtonProps>"},{name:"buttonOk",type:"string | ConstrBind<ButtonProps>"},{name:"clickOkAndClose",type:"boolean"},{name:"closeButton",type:"boolean"},{name:"description",type:"string | number"},{name:"disabled",type:"boolean"},{name:"error",type:"boolean"},{name:"icon",type:"IconValue<IconProps>"},{name:"iconAttrs",type:"ConstrBind<IconProps>"},{name:"iconError",type:"IconValue<IconProps>"},{name:"iconSuccess",type:"IconValue<IconProps>"},{name:"image",type:"string | ConstrBind<ImageProps>"},{name:"imagePosition",type:"string",option:["top","left"]},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"open",type:"boolean"},{name:"padding",type:"string",option:["sm","md","lg"]},{name:"paddingByIndent",type:"boolean"},{name:"success",type:"boolean"},{name:"textClose",type:"TextValue"},{name:"textOk",type:"TextValue"},{name:"width",type:"string",option:["sm","md","lg","auto"]},{name:"windowAttrs",type:"ConstrBind<WindowProps>"}],h=new $("Dialog",G,w,z,j,N),J={title:"Ui/Dialog",component:s,parameters:{design:"d1",docs:{description:{component:h.getDescription()}}},argTypes:h.getWiki(),args:h.getValues()},l={render:i=>({components:{D1Dialog:s},setup:()=>({args:i}),template:`
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `})},c={name:"Состояния успеха и ошибки",render:()=>({components:{D1Dialog:s},setup(){return{openSuccess:f(!1),openError:f(!1)}},template:`
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
    `})},p={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Dialog:s},setup(){return{open:f(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Dialog
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        />
    `})},d={name:"Демонстрация всех слотов",render:()=>({components:{D1Dialog:s},template:`
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
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const K=["Dialog","DialogStates","DialogVModel","DialogAllSlots"],de=Object.freeze(Object.defineProperty({__proto__:null,Dialog:l,DialogAllSlots:d,DialogStates:c,DialogVModel:p,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{de as D,l as a,h as b,c,p as d,d as e};
