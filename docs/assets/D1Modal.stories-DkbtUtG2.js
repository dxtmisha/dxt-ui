import{c as h,D as f,E as v,F as k,I as M,J as D,K as g,r as B}from"./iframe-okvuAVTt.js";import{T as S,F as C,D as A}from"./index-CEykQtFM.js";import{D as W}from"./index-CcaldjYc.js";import{D as x}from"./index-D9mtirJK.js";import{w as P,W as _,a as T,b as O}from"./wiki-BeTUR4cU.js";import"./jsx-runtime-u17CrQMm.js";const I={barsBackHide:!0,imagePosition:"top"};class H extends C{constructor(e,r,d,o,c,m,a,p){super(e,r,d,o,c,m,a,p,h(()=>({open:e.open,image:e.image,adaptive:"modal",imagePosition:e.imagePosition,closeButton:e.barsBackHide}))),this.props=e,this.refs=r,this.element=d,this.classDesign=o,this.className=c,this.components=m,this.slots=a,this.emits=p}}class L extends S{initItem(e){return new(e??H)(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass("title"),header:this.getSubClass("header"),body:this.getSubClass("body"),footer:this.getSubClass("footer")}}}const y={imagePosition:["top","left"],width:["sm","md","lg","xl","auto"]},w={...I,imagePosition:"top",width:"md"},t=f({name:"D1Modal",__name:"D1Modal",props:M({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},open:{type:Boolean},imagePosition:{},width:{}},w),emits:["window","bars","barsLite","barsBack","actions","actionsLite"],setup(n,{expose:e,emit:r}){const d=r,o=n,c=h(()=>({main:{"d1-modal":!0,[`d1-modal--imagePosition--${o.imagePosition}`]:g(y.imagePosition,o.imagePosition),[`d1-modal--width--${o.width}`]:g(y.width,o.width)}})),m=h(()=>({})),a=new L("d1.modal",o,{emits:d,classes:c,styles:m,components:{window:W,bars:x,actions:A}}),p=a.render();return e(a.expose()),(V,U)=>(D(),v(k(p)))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{name:"D1Modal",exportName:"default",displayName:"D1Modal",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Modal/D1Modal.vue"]});const E=[{name:"actionsAttrs",type:"ConstrBind<Actions>"},{name:"actionsHide",type:"boolean"},{name:"actionsList",type:"ConstrBind<Actions['list']>"},{name:"actionsSecondary",type:"ConstrBind<Actions['listSecondary']>"},{name:"autoClose",type:"boolean"},{name:"barsAttrs",type:"ConstrBind<Bars>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"Bars['bars']"},{name:"disabled",type:"boolean"},{name:"image",type:"string | ConstrBind<Image>"},{name:"imagePosition",type:"string",option:["top","left"]},{name:"open",type:"boolean"},{name:"width",type:"string",option:["sm","md","lg","xl","auto"]},{name:"windowAttrs",type:"ConstrBind<Window>"}],u={component:"Modal",props:E,defaults:w,wikiDesign:P},b=new _(u.component,u.props,u.defaults,u.wikiDesign,T,O),N={title:"Ui/Modal",component:t,parameters:{design:"d1",docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},s={render:n=>({components:{D1Modal:t},setup:()=>({args:n}),template:`
      <D1Modal v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Modal</button>
        </template>

        <template #default>
          <h4>Modal Component Overview</h4>
          <p>Modal is a specialized wrapper around the Window component with preset adaptive mode set to 'modal'. It provides a simplified API for creating centered modal dialogs without needing to configure positioning and adaptive behavior manually.</p>

          <p>The component automatically handles common modal dialog scenarios including confirmations, forms, alerts, and content previews. It manages focus, scroll behavior, and keyboard navigation to ensure accessibility and optimal user experience across different devices and screen sizes.</p>

          <h4>Best Practices</h4>
          <p>Use modals sparingly and only for content that genuinely requires immediate attention. Ensure modals have clear actions (confirm/cancel), provide easy ways to dismiss them, and avoid nesting modals within modals. The component should be large enough to display content comfortably but not so large that it overwhelms the screen.</p>

          <h4>Relationship with Window</h4>
          <p>Modal is essentially Window with <code>adaptive="modal"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in a Modal component.</p>
        </template>
      </D1Modal>
    `})},i={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Modal:t},setup(){return{open:B(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Modal v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Modal>
    `})},l={name:"Демонстрация всех слотов",render:()=>({components:{D1Modal:t},template:`
        <D1Modal>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Modal with All Slots</button>
          </template>

          <template #title>
            Modal Title Slot
          </template>

          <template #default>
            <h4>Default Slot Content</h4>
            <p>This is the main content area of the modal. You can place any content here, including text, forms, images, or other components.</p>

            <div class="wiki-storybook-info">
              <strong>Available slots:</strong>
              <ul>
                <li><code>#control</code> - trigger button or element</li>
                <li><code>#title</code> - modal header/title area</li>
                <li><code>#default</code> - main content area</li>
                <li><code>#footer</code> - footer with actions</li>
              </ul>
            </div>

            <p>Each slot receives control props that allow you to interact with the modal programmatically, such as closing it or accessing window classes.</p>
          </template>

          <template #footer="{classesWindow}">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
          </template>
        </D1Modal>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Modal
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Modal v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Modal</button>
        </template>

        <template #default>
          <h4>Modal Component Overview</h4>
          <p>Modal is a specialized wrapper around the Window component with preset adaptive mode set to 'modal'. It provides a simplified API for creating centered modal dialogs without needing to configure positioning and adaptive behavior manually.</p>

          <p>The component automatically handles common modal dialog scenarios including confirmations, forms, alerts, and content previews. It manages focus, scroll behavior, and keyboard navigation to ensure accessibility and optimal user experience across different devices and screen sizes.</p>

          <h4>Best Practices</h4>
          <p>Use modals sparingly and only for content that genuinely requires immediate attention. Ensure modals have clear actions (confirm/cancel), provide easy ways to dismiss them, and avoid nesting modals within modals. The component should be large enough to display content comfortably but not so large that it overwhelms the screen.</p>

          <h4>Relationship with Window</h4>
          <p>Modal is essentially Window with <code>adaptive="modal"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in a Modal component.</p>
        </template>
      </D1Modal>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Modal
    },
    setup() {
      return {
        open: ref(false)
      };
    },
    template: \`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Modal v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Modal>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: {
      D1Modal
    },
    template: \`
        <D1Modal>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Modal with All Slots</button>
          </template>

          <template #title>
            Modal Title Slot
          </template>

          <template #default>
            <h4>Default Slot Content</h4>
            <p>This is the main content area of the modal. You can place any content here, including text, forms, images, or other components.</p>

            <div class="wiki-storybook-info">
              <strong>Available slots:</strong>
              <ul>
                <li><code>#control</code> - trigger button or element</li>
                <li><code>#title</code> - modal header/title area</li>
                <li><code>#default</code> - main content area</li>
                <li><code>#footer</code> - footer with actions</li>
              </ul>
            </div>

            <p>Each slot receives control props that allow you to interact with the modal programmatically, such as closing it or accessing window classes.</p>
          </template>

          <template #footer="{classesWindow}">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
          </template>
        </D1Modal>
    \`
  })
}`,...l.parameters?.docs?.source}}};const z=["Modal","ModalVModel","ModalAllSlots"],J=Object.freeze(Object.defineProperty({__proto__:null,Modal:s,ModalAllSlots:l,ModalVModel:i,__namedExportsOrder:z,default:N},Symbol.toStringTag,{value:"Module"}));export{J as M,s as a,b,i as c,l as d};
