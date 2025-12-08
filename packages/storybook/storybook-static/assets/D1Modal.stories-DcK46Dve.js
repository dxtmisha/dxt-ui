import{c as h,z as w,A as f,B as u,D as v,E as M,F as k,r as D}from"./iframe-BlCC38XJ.js";import{D as B}from"./index-Cl5idLwM.js";import{D as C}from"./index-BPfSqOYD.js";import{M as S,a as A,D as P}from"./index-B3KIeo7o.js";import{W,w as x,a as I,b as _}from"./wiki-fb_eBW86.js";import"./jsx-runtime-D_zvdyIk.js";const T={barsBackHide:!0,imagePosition:"top"};let O=class extends S{constructor(o,d,r,e,m,c,n,p){super(o,d,r,e,m,c,n,p,h(()=>({open:o.open,image:o.image,adaptive:"modal",imagePosition:o.imagePosition,closeButton:o.barsBackHide}))),this.props=o,this.refs=d,this.element=r,this.classDesign=e,this.className=m,this.components=c,this.slots=n,this.emits=p}};class H extends A{initItem(){return new O(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass("title"),header:this.getSubClass("header"),body:this.getSubClass("body"),footer:this.getSubClass("footer")}}}const b={imagePosition:["top","left"],padding:["sm","md","lg"],width:["sm","md","lg","auto"]},y={...T,imagePosition:"top",paddingByIndent:!0,width:"md"},l=w({name:"D1Modal",__name:"D1Modal",props:f({open:{type:Boolean},disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},imagePosition:{},padding:{},paddingByIndent:{type:Boolean},width:{}},y),emits:["window","bars","barsLite","barsBack","actions","actionsLite"],setup(t,{expose:o,emit:d}){const r=d,e=t,m=h(()=>({main:{"d1-modal":!0,[`d1-modal--imagePosition--${e.imagePosition}`]:u(b.imagePosition,e.imagePosition),[`d1-modal--padding--${e.padding}`]:u(b.padding,e.padding),"d1-modal--paddingByIndent":e.paddingByIndent,[`d1-modal--width--${e.width}`]:u(b.width,e.width)}})),c=h(()=>({})),n=new H("d1.modal",e,{emits:r,classes:m,styles:c,components:{window:B,bars:C,actions:P}}),p=n.render();return o(n.expose()),(E,V)=>(k(),v(M(p)))}});l.__docgenInfo={name:"D1Modal",exportName:"default",displayName:"D1Modal",description:"",tags:{},props:[{name:"width",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"auto"'}]}},{name:"paddingByIndent",required:!1,type:{name:"boolean"}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"imagePosition",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"left"'}]}}],sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Modal/D1Modal.vue"]};const L=[{name:"actionsAttrs",type:"ConstrBind<ActionsProps>"},{name:"actionsHide",type:"boolean"},{name:"actionsList",type:"ConstrBind<unknown>"},{name:"actionsSecondary",type:"ConstrBind<unknown>"},{name:"autoClose",type:"boolean"},{name:"barsAttrs",type:"ConstrBind<BarsProps>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"Bars['bars']"},{name:"disabled",type:"boolean"},{name:"image",type:"string | ConstrBind<ImageProps>"},{name:"imagePosition",type:"string",option:["top","left"]},{name:"open",type:"boolean"},{name:"padding",type:"string",option:["sm","md","lg"]},{name:"paddingByIndent",type:"boolean"},{name:"width",type:"string",option:["sm","md","lg","auto"]},{name:"windowAttrs",type:"ConstrBind<WindowProps>"}],g=new W("Modal",L,y,x,I,_),q={title:"Ui/Modal",component:l,parameters:{design:"d1",docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},a={render:t=>({components:{D1Modal:l},setup:()=>({args:t}),template:`
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
          <p>Modal is essentially Window with <code>adaptive="modal"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in Modal component.</p>
        </template>
      </D1Modal>
    `})},s={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Modal:l},setup(){return{open:D(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Modal v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Modal>
    `})},i={name:"Демонстрация всех слотов",render:()=>({components:{D1Modal:l},template:`
        <D1Modal>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Modal with All Slots</button>
          </template>

          <template #title>
            Modal Title Slot
          </template>

          <template #default>
            <h4>Default Slot Content</h4>
            <p>This is the main content area of the modal. You can place any content here including text, forms, images, or other components.</p>

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
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
          <p>Modal is essentially Window with <code>adaptive="modal"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in Modal component.</p>
        </template>
      </D1Modal>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
            <p>This is the main content area of the modal. You can place any content here including text, forms, images, or other components.</p>

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
}`,...i.parameters?.docs?.source}}};const z=["Modal","ModalVModel","ModalAllSlots"],G=Object.freeze(Object.defineProperty({__proto__:null,Modal:a,ModalAllSlots:i,ModalVModel:s,__namedExportsOrder:z,default:q},Symbol.toStringTag,{value:"Module"}));export{G as M,a,g as b,s as c,i as d};
