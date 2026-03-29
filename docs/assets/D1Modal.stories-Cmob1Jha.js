import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,Vt as r,_t as i,at as a,bt as o,f as s,kt as c,wt as l,xt as u,yt as d}from"./iframe-CuL5mTF3.js";import{a as f,d as p,g as m,l as h,n as g,t as _,u as v}from"./wiki-Dd40E_Te.js";import{a as y,i as b,n as x,o as S,r as C,t as w}from"./Actions-BoAjbR6b.js";import{n as T,t as E}from"./Window-e21LYE2F.js";import{n as D,t as O}from"./Bars-CRiRqszd.js";var k,A,j=e((()=>{b(),i(),k=class extends C{constructor(e,t,n,r,i,a,o,s){super(e,t,n,r,i,a,o,s,d(()=>({open:e.open,image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:e.barsBackHide}))),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},A=class extends S{initItem(e){return new(e??k)(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}}})),M,N,P=e((()=>{j(),M={imagePosition:[`top`,`left`],width:[`sm`,`md`,`lg`,`xl`,`auto`]},N={...y,imagePosition:`top`,width:`md`}})),F=e((()=>{})),I,L=e((()=>{i(),s(),j(),T(),D(),x(),P(),F(),I=u({name:`D1Modal`,__name:`D1Modal`,props:l({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},open:{type:Boolean},imagePosition:{},width:{}},N),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`],setup(e,{expose:t,emit:n}){let i=n,s=e,l=new A(`d1.modal`,s,{emits:i,classes:d(()=>({main:{"d1-modal":!0,[`d1-modal--imagePosition--${s.imagePosition}`]:a(M.imagePosition,s.imagePosition),[`d1-modal--width--${s.width}`]:a(M.width,s.width)}})),styles:d(()=>({})),components:{window:E,bars:O,actions:w}}),u=l.render();return t(l.expose()),(e,t)=>(c(),o(r(u)))}})})),R,z=e((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Modal`,exportName:`default`,displayName:`D1Modal`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Modal/D1Modal.vue`]})})),B,V,H,U,W=e((()=>{v(),_(),P(),B=[{name:`actionsAttrs`,type:`ConstrBind<Actions>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`ConstrBind<Actions['list']>`},{name:`actionsSecondary`,type:`ConstrBind<Actions['listSecondary']>`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<Bars>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`Bars['bars']`},{name:`disabled`,type:`boolean`},{name:`image`,type:`string | ConstrBind<Image>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`]},{name:`open`,type:`boolean`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`xl`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<Window>`}],V=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`header`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`WindowControlItem`}]}],H=[{name:`actions`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`actionsLite`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`barsBack`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`window`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],U={component:`Modal`,props:B,slots:V,events:H,defaults:N,wikiDesign:g}})),G,K=e((()=>{v(),f(),W(),G=new p(U.component,U.props,U.defaults,U.wikiDesign,h,m)})),q=t({Modal:()=>Y,ModalAllSlots:()=>Z,ModalVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{z(),K(),i(),J={title:`Ui/Modal`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1Modal:R},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Modal:R},setup(){return{open:n(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Modal v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Modal>
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1Modal:R},template:`
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
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Modal`,`ModalVModel`,`ModalAllSlots`]}));$();export{Y as Modal,Z as ModalAllSlots,X as ModalVModel,Q as __namedExportsOrder,J as default,K as i,$ as n,G as r,q as t};