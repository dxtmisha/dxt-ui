import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,D as i,Dt as a,Ft as o,Mt as s,Xt as c,kt as l,m as u,qt as d}from"./iframe-53vFWNoU.js";import{t as f}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as p,f as m,l as ee,n as te,o as h,p as g,t as _,u as v}from"./wiki-DwIxUKqL.js";import{i as y,n as b,r as x,t as S}from"./ModalDesignAbstract-CZcvOdUO-DcE8b9DB.js";import{n as C,t as w}from"./Window-DdiERalU.js";import{n as T,t as E}from"./Bars-pzKhmONj.js";import{n as D,t as O}from"./Actions-pRy5R3ic.js";var k,A,j=t((()=>{m(),b(),k=class extends S{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,()=>({image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:e.barsBackHide}),void 0,void 0,c),g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`element`,void 0),g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`slots`,void 0),g(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},A=class extends x{initItem(e){return new(e??k)(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}}})),M,N,P=t((()=>{j(),M={imagePosition:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`],width:[`sm`,`md`,`lg`,`xl`,`auto`]},N={...y,imagePosition:`top`,width:`md`}})),F=t((()=>{})),I,L=t((()=>{a(),u(),j(),C(),T(),D(),P(),F(),I=s({name:`D1Modal`,__name:`D1Modal`,props:o({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},imageAttrs:{},modelOpen:{},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},open:{type:Boolean},imagePosition:{},width:{}},N),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`update:open`,`update:modelOpen`],setup(e,{expose:t,emit:a}){let o=a,s=e,u=new A(`d1.modal`,s,{emits:o,classes:l(()=>({main:{"d1-modal":!0,[`d1-modal--imagePosition--${s.imagePosition}`]:i(M.imagePosition,s.imagePosition),[`d1-modal--width--${s.width}`]:i(M.width,s.width)}})),styles:l(()=>({})),components:{window:w,bars:E,actions:O}}),d=u.render();return t(u.expose()),(e,t)=>(r(),n(c(d)))}})})),R,z=t((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Modal`,exportName:`default`,displayName:`D1Modal`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Modal/D1Modal.vue`]})})),B,V,H,U,W=t((()=>{_(),P(),B=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<BarsProps>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`ConstrBind<ButtonProps>[]`},{name:`disabled`,type:`boolean`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`]},{name:`modelOpen`,type:`boolean`},{name:`onUpdate:modelOpen`,type:`((value: boolean) => void)`},{name:`onUpdate:open`,type:`((value: boolean) => void)`},{name:`open`,type:`boolean`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`xl`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps>`}],V=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],H=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],U={component:`Modal`,props:B,slots:V,events:H,defaults:N,wikiDesign:te}})),G,K=t((()=>{p(),h(),W(),G=new v(U.component,U.props,U.defaults,U.wikiDesign,ee,f)})),q=e({Modal:()=>Y,ModalAllSlots:()=>Z,ModalVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{z(),K(),a(),J={title:`Ui/Modal`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1Modal:R},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Modal:R},setup(){return{open:d(!1)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1Modal v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </D1Modal>
        </div>
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1Modal:R},template:`
        <D1Modal>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Modal with All Slots</button>
          </template>

          <template #title>Title slot</template>
          <template #default>Default slot</template>
          <template #footer>Footer slot</template>
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1Modal v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </D1Modal>
        </div>
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

          <template #title>Title slot</template>
          <template #default>Default slot</template>
          <template #footer>Footer slot</template>
        </D1Modal>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Modal`,`ModalVModel`,`ModalAllSlots`]}));$();export{Y as Modal,Z as ModalAllSlots,X as ModalVModel,Q as __namedExportsOrder,J as default,K as i,$ as n,G as r,q as t};