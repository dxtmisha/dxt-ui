import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,L as a,Lt as o,Mt as s,in as c,jt as l,tn as u}from"./library-CUIf7uCS.js";import{O as d,d as f,l as p,m,n as h,p as g,r as _,t as v,u as y}from"./wiki-wIqBVsyI.js";import{n as ee,t as te}from"./Image-GZvXUXys.js";import{n as b,t as x}from"./Window-wEOhR1U2.js";import{n as S,t as C}from"./Actions-Dn5w3w7V.js";import{n as w,t as T}from"./Bars-f_6Sbnte.js";import{n as E,r as D,t as O}from"./ModalDesignAbstract-XCwZ_hG6-Du76050Y.js";var k,A,j;function M(){return(M=e((()=>{E(),k=class extends O{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,()=>({image:e.image,adaptive:`modal`,imagePosition:e.imagePosition,closeButton:e.barsBackHide}),void 0,void 0,c),g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`element`,void 0),g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`slots`,void 0),g(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},A={barsBackHide:!0,imagePosition:`top`},j=class extends D{initItem(e){return new(e??k)(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`)}}}})))()}var N,P;function F(){return(F=e((()=>{M(),N={imagePosition:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`],width:[`sm`,`md`,`lg`,`xl`,`auto`]},P={...A,imagePosition:`top`,width:`md`}})))()}var I;function L(){return(L=e((()=>{r(),d(),M(),b(),w(),S(),ee(),F(),I=s({name:`D1Modal`,__name:`D1Modal`,props:o({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},image:{},imageAttrs:{},modelOpen:{},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},open:{type:Boolean},imagePosition:{},width:{}},P),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`update:open`,`update:modelOpen`],setup(e,{expose:t,emit:r}){let o=r,s=e,u=n(()=>({main:{"d1-modal":!0,[`d1-modal--imagePosition--${s.imagePosition}`]:a(N.imagePosition,s.imagePosition),[`d1-modal--width--${s.width}`]:a(N.width,s.width)}})),d=n(()=>({})),f=new j(`d1.modal`,s,{emits:o,classes:u,styles:d,components:{window:x,bars:T,actions:C,image:te}}),p=f.render();return t(f.expose()),(e,t)=>(i(),l(c(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Modal`,exportName:`default`,displayName:`D1Modal`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Modal/D1Modal.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{v(),F(),B=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<BarsProps>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`ConstrBind<ButtonProps>[]`},{name:`disabled`,type:`boolean`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`imagePosition`,type:`string`,option:[`top`,`left`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`]},{name:`modelOpen`,type:`boolean`},{name:`onUpdate:modelOpen`,type:`((value: boolean) => void)`},{name:`onUpdate:open`,type:`((value: boolean) => void)`},{name:`open`,type:`boolean`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`xl`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps>`}],V=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],H=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelOpen`,description:`Update model open event/ Событие обновления открытия модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:open`,description:`Update open event/ Событие обновления открытия`,properties:[{name:`value`,type:`boolean`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],U={component:`Modal`,props:B,slots:V,events:H,defaults:P,wikiDesign:h}})))()}var G;function K(){return(K=e((()=>{f(),p(),W(),G=new y(U.component,U.props,U.defaults,U.wikiDesign,_,m)})))()}var q=t({Modal:()=>Y,ModalAllSlots:()=>Z,ModalVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),r(),J={title:`Ui/Modal`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1Modal:R},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Modal:R},setup(){return{open:u(!1)}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Modal`,`ModalVModel`,`ModalAllSlots`]})))()}export{$ as a,X as i,Y as n,G as o,Z as r,K as s,q as t};