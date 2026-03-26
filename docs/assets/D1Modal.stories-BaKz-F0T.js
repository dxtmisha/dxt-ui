import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,It as i,Ot as a,bt as o,gt as s,st as c,u as l,vt as u,yt as d}from"./iframe-InwAcaLb.js";import{a as f,d as p,l as m,m as h,n as g,t as _,u as v}from"./wiki-DiKtF90Q.js";import{a as y,i as b,n as x,r as S,t as C}from"./Actions-DKLl3KIK.js";import{n as w,t as T}from"./Window-CJ_ziFCb.js";import{n as E,t as D}from"./Bars-Lbp-4giz.js";var O,k,A,j=e((()=>{s(),l(),y(),O={barsBackHide:!0,imagePosition:`top`},k=class extends S{constructor(e,t,n,r,i,a,o,s){super(e,t,n,r,i,a,o,s,u(()=>({open:e.open,image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:e.barsBackHide}))),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},A=class extends b{initItem(e){return new(e??k)(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}}})),M,N,P=e((()=>{j(),M={imagePosition:[`top`,`left`],width:[`sm`,`md`,`lg`,`xl`,`auto`]},N={...O,imagePosition:`top`,width:`md`}})),F=e((()=>{})),I,L=e((()=>{s(),l(),j(),w(),E(),x(),P(),F(),I=o({name:`D1Modal`,__name:`D1Modal`,props:r({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},open:{type:Boolean},imagePosition:{},width:{}},N),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`],setup(e,{expose:t,emit:r}){let i=r,o=e,s=new A(`d1.modal`,o,{emits:i,classes:u(()=>({main:{"d1-modal":!0,[`d1-modal--imagePosition--${o.imagePosition}`]:c(M.imagePosition,o.imagePosition),[`d1-modal--width--${o.width}`]:c(M.width,o.width)}})),styles:u(()=>({})),components:{window:T,bars:D,actions:C}}),l=s.render();return t(s.expose()),(e,t)=>(a(),d(n(l)))}})})),R,z=e((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Modal`,exportName:`default`,displayName:`D1Modal`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Modal/D1Modal.vue`]})})),B,V,H=e((()=>{v(),_(),P(),B=[{name:`actionsAttrs`,type:`ConstrBind<Actions>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`ConstrBind<Actions['list']>`},{name:`actionsSecondary`,type:`ConstrBind<Actions['listSecondary']>`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<Bars>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`Bars['bars']`},{name:`disabled`,type:`boolean`},{name:`image`,type:`string | ConstrBind<Image>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`]},{name:`open`,type:`boolean`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`xl`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<Window>`}],V={component:`Modal`,props:B,defaults:N,wikiDesign:g}})),U,W=e((()=>{v(),f(),H(),U=new p(V.component,V.props,V.defaults,V.wikiDesign,m,h)})),G=t({Modal:()=>q,ModalAllSlots:()=>Y,ModalVModel:()=>J,__namedExportsOrder:()=>X,default:()=>K}),K,q,J,Y,X,Z=e((()=>{z(),W(),s(),K={title:`Ui/Modal`,component:R,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1Modal:R},setup:()=>({args:e}),template:`
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
    `})},J={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Modal:R},setup(){return{open:i(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Modal v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Modal>
    `})},Y={name:`Демонстрация всех слотов`,render:()=>({components:{D1Modal:R},template:`
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
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Modal`,`ModalVModel`,`ModalAllSlots`]}));Z();export{q as Modal,Y as ModalAllSlots,J as ModalVModel,X as __namedExportsOrder,K as default,W as i,Z as n,U as r,G as t};