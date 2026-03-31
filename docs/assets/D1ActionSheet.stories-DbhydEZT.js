import{n as e,r as t}from"./chunk-BneVvdWh.js";import{J as n,Lt as r,St as i,Vt as a,_t as o,bt as s,f as c,kt as l,nt as ee,r as u,wt as d,xt as f,yt as p}from"./iframe-DZnBmjcm.js";import{a as m,d as h,f as g,g as te,l as ne,n as re,p as _,t as ie,u as v}from"./wiki-CxP3o-n8.js";import{i as y,n as b,o as x,r as S,t as C}from"./Actions-B_KcHvQ3.js";import{n as ae,t as oe}from"./Window-CR4NmY7l.js";import{n as se,t as w}from"./Bars-DsSqAlVA.js";var T,E,D=e((()=>{g(),o(),c(),T=80,E=class{constructor(e,t,n,i){_(this,`touche`,r()),_(this,`toucheMove`,r()),_(this,`mouse`,r()),_(this,`mouseMove`,r()),_(this,`onTouch`,{onTouchstart:e=>{this.touche.value=e.targetTouches?.[0],this.mouse.value={x:this.touche.value?.clientX??0,y:this.touche.value?.clientY??0},this.update(e.target)},onTouchend:e=>this.reset(e.target),onTouchcancel:e=>this.reset(e.target),onTouchmove:e=>{this.toucheMove.value=e.targetTouches?.[0],this.mouseMove.value={x:this.toucheMove.value?.clientX??0,y:this.toucheMove.value?.clientY??0},this.updateMove(e.target)}}),_(this,`onMouse`,{onMousedown:e=>{this.mouse.value={x:e.clientX,y:e.clientY},this.update(e.target)},onMouseup:e=>this.reset(e.target),onMousemove:e=>{this.mouseMove.value={x:e.clientX,y:e.clientY},this.updateMove(e.target)}}),this.start=e,this.move=t,this.end=n,this.element=i}getElement(e){return this.element?.value??e.closest(`[data-touch]`)}getTypeX(e){return e>=T?`right`:e<-T?`left`:`none`}getTypeY(e){return e>=T?`bottom`:e<-T?`top`:`none`}async callback(e){let t=this.mouse.value,r=this.mouseMove.value;if(t&&r){let i=r.x-t.x,a=r.y-t.y;if(!e||await n(e(this.getTypeX(i),this.getTypeY(a),i,a,t,r,this.touche.value,this.toucheMove.value)))return{x:i,y:a}}}reset(e){let t=this.getElement(e);this.callback(this.end).then(e=>{t&&(e?this.resetData(t):setTimeout(()=>this.resetData(t),400))})}resetData(e){this.touche.value=void 0,this.toucheMove.value=void 0,this.mouse.value=void 0,this.mouseMove.value=void 0,e.style.removeProperty(`--sys-touch-start-x`),e.style.removeProperty(`--sys-touch-start-y`),e.style.removeProperty(`--sys-touch-move-x`),e.style.removeProperty(`--sys-touch-move-y`)}update(e){let t=this.getElement(e),r=this.mouse.value;t&&r&&(t.style.setProperty(`--sys-touch-start-x`,`${r.x}px`),t.style.setProperty(`--sys-touch-start-y`,`${r.y}px`),n(this.start?.call(this,r,this.touche.value)).then())}updateMove(e){let t=this.getElement(e);this.callback(this.move).then(e=>{t&&e&&(t.style.setProperty(`--sys-touch-move-x`,`${e.x}px`),t.style.setProperty(`--sys-touch-move-y`,`${e.y}px`))})}}})),O,k,A,j=e((()=>{g(),y(),D(),o(),c(),O=class extends S{constructor(e,t,n,r,i,a,o,s,c){let{TouchEventIncludeConstructor:l=E}=c??{};super(e,t,n,r,i,a,o,s,p(()=>({open:e.open,adaptive:`actionSheet`,closeButton:e.barsBackHide,closeMobileHide:e.touchClose})),void 0,{align:`auto`}),_(this,`touchEvent`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.touchEvent=new l(void 0,(e,t,n,r)=>r>=0,(e,t)=>t===`bottom`?(this.window.expose.setOpen(!1).then(),!1):!0)}},k={barsBackHide:!0,touchClose:!0},A=class extends x{constructor(...e){super(...e),_(this,`renderTitleTouch`,e=>{let t=this.renderTitle(e);return this.props.touchClose?[i(`div`,{class:this.classes?.value.touch,...this.item.touchEvent.onTouch},[i(`div`,{class:this.classes?.value.tab}),...t])]:t})}initItem(){return new O(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`),touch:this.getSubClass(`touch`),tab:this.getSubClass(`tab`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitleTouch,default:this.renderDefault,footer:this.renderFooter},u({class:this.classes?.value.main,"data-touch":`touch`},this.getAttrs()))}}})),M,N,P=e((()=>{j(),M={width:[`sm`,`md`,`lg`,`auto`]},N={...k,width:`md`}})),F=e((()=>{})),I,L=e((()=>{o(),c(),j(),ae(),se(),b(),P(),F(),I=f({name:`D1ActionSheet`,__name:`D1ActionSheet`,props:d({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},open:{type:Boolean},touchClose:{type:Boolean},width:{}},N),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=new A(`d1.actionSheet`,i,{emits:r,classes:p(()=>({main:{"d1-actionSheet":!0,[`d1-actionSheet--width--${i.width}`]:ee(M.width,i.width)}})),styles:p(()=>({})),components:{window:oe,bars:w,actions:C},compMod:{window:{divider:!0}}}),c=o.render();return t(o.expose()),(e,t)=>(l(),s(a(c)))}})})),R,z=e((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ActionSheet`,exportName:`default`,displayName:`D1ActionSheet`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ActionSheet/D1ActionSheet.vue`]})})),B,V,H,U,W=e((()=>{v(),ie(),P(),B=[{name:`actionsAttrs`,type:`ConstrBind<Actions>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`ConstrBind<Actions['list']>`},{name:`actionsSecondary`,type:`ConstrBind<Actions['listSecondary']>`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<Bars>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`Bars['bars']`},{name:`disabled`,type:`boolean`},{name:`open`,type:`boolean`},{name:`touchClose`,type:`boolean`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<Window>`}],V=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`header`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`WindowControlItem`}]}],H=[{name:`actions`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`window`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],U={component:`ActionSheet`,props:B,slots:V,events:H,defaults:N,wikiDesign:re}})),G,K=e((()=>{v(),m(),W(),G=new h(U.component,U.props,U.defaults,U.wikiDesign,ne,te)})),ce=t({ActionSheet:()=>J,ActionSheetAllSlots:()=>Z,ActionSheetTouchClose:()=>X,ActionSheetVModel:()=>Y,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{z(),K(),o(),q={title:`Ui/ActionSheet`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1ActionSheet:R},setup:()=>({args:e}),template:`
      <D1ActionSheet v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet</button>
        </template>

        <template #title>
          Action Sheet Menu
        </template>

        <template #default>
          <h4>Mobile Action Sheet Component</h4>
          <p>The Action Sheet component provides a mobile-optimized interface for presenting users with a set of actions or choices. It slides up from the bottom of the screen, following familiar patterns from iOS and Material Design guidelines.</p>

          <p>This component is particularly effective for contextual actions related to specific content, such as sharing options, editing tools, or destructive operations. The bottom-anchored design makes it easily accessible on mobile devices while maintaining a clear visual hierarchy.</p>

          <h4>Key Features</h4>
          <p>The Action Sheet includes support for primary and secondary action lists, allowing you to group related actions logically. It automatically handles touch interactions, backdrop dismissal, and keyboard accessibility, ensuring a consistent user experience across different input methods.</p>

          <p>Integration with List and Actions components provides flexibility in content presentation, while the customizable appearance adapts seamlessly to different design systems and brand requirements. The component automatically adjusts its height based on content, preventing overflow issues while maintaining optimal usability.</p>
        </template>
      </D1ActionSheet>
    `})},Y={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ActionSheet:R},setup(){return{open:r(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1ActionSheet v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1ActionSheet>
    `})},X={name:`Закрытие жестом`,render:()=>({components:{D1ActionSheet:R},setup(){return{openWithTouch:r(!1),openWithoutTouch:r(!1)}},template:`
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="openWithTouch = true">
            With Touch Close ({{ openWithTouch }})
          </button>
          <button class="wiki-storybook-button" @click="openWithoutTouch = true">
            Without Touch Close ({{ openWithoutTouch }})
          </button>
        </div>

        <D1ActionSheet v-model:open="openWithTouch" :touchClose="true">
          <template #title>
            Swipe Down to Close
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Enabled</strong>
                <p>This action sheet can be closed by swiping down on the title area. Notice the tab indicator at the top that signals the drag interaction.</p>
                <p>Try swiping down on the header to close this panel. This follows iOS and Material Design patterns for mobile interfaces.</p>
              </div>
            </div>
          </template>
        </D1ActionSheet>

        <D1ActionSheet v-model:open="openWithoutTouch" :touchClose="false">
          <template #title>
            No Swipe Gesture
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Disabled</strong>
                <p>This action sheet cannot be closed by swiping down. The tab indicator is not displayed, and touch gestures are disabled.</p>
                <p>You must use the backdrop click or close button to dismiss this panel. This is useful when you want to prevent accidental dismissal.</p>
              </div>
            </div>
          </template>
          <template #footer="{classesWindow}">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Close</button>
          </template>
        </D1ActionSheet>
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1ActionSheet:R},template:`
        <D1ActionSheet>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet with All Slots</button>
          </template>

          <template #title>
            Action Sheet Title Slot
          </template>

          <template #default>
            <div class="wiki-storybook-item--padding">
              <h4>Default Slot Content</h4>
              <p>This is the main content area of the action sheet. You can place any content here including action lists, forms, or other components.</p>

              <div class="wiki-storybook-info">
                <strong>Available slots:</strong>
                <ul>
                  <li><code>#control</code> - trigger button or element</li>
                  <li><code>#title</code> - action sheet header/title area</li>
                  <li><code>#default</code> - main content area</li>
                  <li><code>#footer</code> - footer with actions or cancel button</li>
                </ul>
              </div>

              <p>Each slot receives control props that allow you to interact with the action sheet programmatically, such as closing it or accessing window classes. The component slides up from the bottom with touch gesture support.</p>
            </div>
          </template>

          <template #footer="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </template>
        </D1ActionSheet>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1ActionSheet
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1ActionSheet v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet</button>
        </template>

        <template #title>
          Action Sheet Menu
        </template>

        <template #default>
          <h4>Mobile Action Sheet Component</h4>
          <p>The Action Sheet component provides a mobile-optimized interface for presenting users with a set of actions or choices. It slides up from the bottom of the screen, following familiar patterns from iOS and Material Design guidelines.</p>

          <p>This component is particularly effective for contextual actions related to specific content, such as sharing options, editing tools, or destructive operations. The bottom-anchored design makes it easily accessible on mobile devices while maintaining a clear visual hierarchy.</p>

          <h4>Key Features</h4>
          <p>The Action Sheet includes support for primary and secondary action lists, allowing you to group related actions logically. It automatically handles touch interactions, backdrop dismissal, and keyboard accessibility, ensuring a consistent user experience across different input methods.</p>

          <p>Integration with List and Actions components provides flexibility in content presentation, while the customizable appearance adapts seamlessly to different design systems and brand requirements. The component automatically adjusts its height based on content, preventing overflow issues while maintaining optimal usability.</p>
        </template>
      </D1ActionSheet>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1ActionSheet
    },
    setup() {
      return {
        open: ref(false)
      };
    },
    template: \`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1ActionSheet v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1ActionSheet>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие жестом',
  render: () => ({
    components: {
      D1ActionSheet
    },
    setup() {
      return {
        openWithTouch: ref(false),
        openWithoutTouch: ref(false)
      };
    },
    template: \`
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="openWithTouch = true">
            With Touch Close ({{ openWithTouch }})
          </button>
          <button class="wiki-storybook-button" @click="openWithoutTouch = true">
            Without Touch Close ({{ openWithoutTouch }})
          </button>
        </div>

        <D1ActionSheet v-model:open="openWithTouch" :touchClose="true">
          <template #title>
            Swipe Down to Close
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Enabled</strong>
                <p>This action sheet can be closed by swiping down on the title area. Notice the tab indicator at the top that signals the drag interaction.</p>
                <p>Try swiping down on the header to close this panel. This follows iOS and Material Design patterns for mobile interfaces.</p>
              </div>
            </div>
          </template>
        </D1ActionSheet>

        <D1ActionSheet v-model:open="openWithoutTouch" :touchClose="false">
          <template #title>
            No Swipe Gesture
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Disabled</strong>
                <p>This action sheet cannot be closed by swiping down. The tab indicator is not displayed, and touch gestures are disabled.</p>
                <p>You must use the backdrop click or close button to dismiss this panel. This is useful when you want to prevent accidental dismissal.</p>
              </div>
            </div>
          </template>
          <template #footer="{classesWindow}">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Close</button>
          </template>
        </D1ActionSheet>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: {
      D1ActionSheet
    },
    template: \`
        <D1ActionSheet>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet with All Slots</button>
          </template>

          <template #title>
            Action Sheet Title Slot
          </template>

          <template #default>
            <div class="wiki-storybook-item--padding">
              <h4>Default Slot Content</h4>
              <p>This is the main content area of the action sheet. You can place any content here including action lists, forms, or other components.</p>

              <div class="wiki-storybook-info">
                <strong>Available slots:</strong>
                <ul>
                  <li><code>#control</code> - trigger button or element</li>
                  <li><code>#title</code> - action sheet header/title area</li>
                  <li><code>#default</code> - main content area</li>
                  <li><code>#footer</code> - footer with actions or cancel button</li>
                </ul>
              </div>

              <p>Each slot receives control props that allow you to interact with the action sheet programmatically, such as closing it or accessing window classes. The component slides up from the bottom with touch gesture support.</p>
            </div>
          </template>

          <template #footer="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </template>
        </D1ActionSheet>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`ActionSheet`,`ActionSheetVModel`,`ActionSheetTouchClose`,`ActionSheetAllSlots`]}));$();export{J as ActionSheet,Z as ActionSheetAllSlots,X as ActionSheetTouchClose,Y as ActionSheetVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,ce as t};