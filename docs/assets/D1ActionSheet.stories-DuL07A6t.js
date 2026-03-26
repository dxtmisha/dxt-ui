import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,It as i,K as a,Ot as o,bt as s,gt as c,h as l,st as u,u as d,vt as f,xt as p,yt as ee}from"./iframe-InwAcaLb.js";import{a as te,d as ne,l as re,m as ie,n as ae,t as m,u as h}from"./wiki-DiKtF90Q.js";import{a as oe,i as se,n as ce,r as le,t as g}from"./Actions-DKLl3KIK.js";import{n as _,t as v}from"./Window-CJ_ziFCb.js";import{n as y,t as b}from"./Bars-Lbp-4giz.js";var x,S,C,w,T,E=e((()=>{c(),d(),x=Object.defineProperty,S=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t,n)=>S(e,typeof t==`symbol`?t:t+``,n),w=80,T=class{constructor(e,t,n,r){C(this,`touche`,i()),C(this,`toucheMove`,i()),C(this,`mouse`,i()),C(this,`mouseMove`,i()),C(this,`onTouch`,{onTouchstart:e=>{this.touche.value=e.targetTouches?.[0],this.mouse.value={x:this.touche.value?.clientX??0,y:this.touche.value?.clientY??0},this.update(e.target)},onTouchend:e=>this.reset(e.target),onTouchcancel:e=>this.reset(e.target),onTouchmove:e=>{this.toucheMove.value=e.targetTouches?.[0],this.mouseMove.value={x:this.toucheMove.value?.clientX??0,y:this.toucheMove.value?.clientY??0},this.updateMove(e.target)}}),C(this,`onMouse`,{onMousedown:e=>{this.mouse.value={x:e.clientX,y:e.clientY},this.update(e.target)},onMouseup:e=>this.reset(e.target),onMousemove:e=>{this.mouseMove.value={x:e.clientX,y:e.clientY},this.updateMove(e.target)}}),this.start=e,this.move=t,this.end=n,this.element=r}getElement(e){return this.element?.value??e.closest(`[data-touch]`)}getTypeX(e){return e>=w?`right`:e<-w?`left`:`none`}getTypeY(e){return e>=w?`bottom`:e<-w?`top`:`none`}async callback(e){let t=this.mouse.value,n=this.mouseMove.value;if(t&&n){let r=n.x-t.x,i=n.y-t.y;if(!e||await a(e(this.getTypeX(r),this.getTypeY(i),r,i,t,n,this.touche.value,this.toucheMove.value)))return{x:r,y:i}}}reset(e){let t=this.getElement(e);this.callback(this.end).then(e=>{t&&(e?this.resetData(t):setTimeout(()=>this.resetData(t),400))})}resetData(e){this.touche.value=void 0,this.toucheMove.value=void 0,this.mouse.value=void 0,this.mouseMove.value=void 0,e.style.removeProperty(`--sys-touch-start-x`),e.style.removeProperty(`--sys-touch-start-y`),e.style.removeProperty(`--sys-touch-move-x`),e.style.removeProperty(`--sys-touch-move-y`)}update(e){let t=this.getElement(e),n=this.mouse.value;t&&n&&(t.style.setProperty(`--sys-touch-start-x`,`${n.x}px`),t.style.setProperty(`--sys-touch-start-y`,`${n.y}px`),a(this.start?.call(this,n,this.touche.value)).then())}updateMove(e){let t=this.getElement(e);this.callback(this.move).then(e=>{t&&e&&(t.style.setProperty(`--sys-touch-move-x`,`${e.x}px`),t.style.setProperty(`--sys-touch-move-y`,`${e.y}px`))})}}})),D,O,k,A,j,M,N=e((()=>{c(),d(),oe(),E(),D=Object.defineProperty,O=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t,n)=>O(e,typeof t==`symbol`?t:t+``,n),A=class extends le{constructor(e,t,n,r,i,a,o,s,c){let{TouchEventIncludeConstructor:l=T}=c??{};super(e,t,n,r,i,a,o,s,f(()=>({open:e.open,adaptive:`actionSheet`,closeButton:e.barsBackHide,closeMobileHide:e.touchClose})),void 0,{align:`auto`}),k(this,`touchEvent`),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.touchEvent=new l(void 0,(e,t,n,r)=>r>=0,(e,t)=>t===`bottom`?(this.window.expose.setOpen(!1).then(),!1):!0)}},j={barsBackHide:!0,touchClose:!0},M=class extends se{constructor(){super(...arguments),k(this,`renderTitleTouch`,e=>{let t=this.renderTitle(e);return this.props.touchClose?[p(`div`,{class:this.classes?.value.touch,...this.item.touchEvent.onTouch},[p(`div`,{class:this.classes?.value.tab}),...t])]:t})}initItem(){return new A(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`),touch:this.getSubClass(`touch`),tab:this.getSubClass(`tab`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitleTouch,default:this.renderDefault,footer:this.renderFooter},l({class:this.classes?.value.main,"data-touch":`touch`},this.getAttrs()))}}})),P,F,I=e((()=>{N(),P={width:[`sm`,`md`,`lg`,`auto`]},F={...j,width:`md`}})),L=e((()=>{})),R,z=e((()=>{c(),d(),N(),_(),y(),ce(),I(),L(),R=s({name:`D1ActionSheet`,__name:`D1ActionSheet`,props:r({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},open:{type:Boolean},touchClose:{type:Boolean},width:{}},F),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`],setup(e,{expose:t,emit:r}){let i=r,a=e,s=new M(`d1.actionSheet`,a,{emits:i,classes:f(()=>({main:{"d1-actionSheet":!0,[`d1-actionSheet--width--${a.width}`]:u(P.width,a.width)}})),styles:f(()=>({})),components:{window:v,bars:b,actions:g},compMod:{window:{divider:!0}}}),c=s.render();return t(s.expose()),(e,t)=>(o(),ee(n(c)))}})})),B,V=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1ActionSheet`,exportName:`default`,displayName:`D1ActionSheet`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ActionSheet/D1ActionSheet.vue`]})})),H,U,W=e((()=>{h(),m(),I(),H=[{name:`actionsAttrs`,type:`ConstrBind<Actions>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`ConstrBind<Actions['list']>`},{name:`actionsSecondary`,type:`ConstrBind<Actions['listSecondary']>`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<Bars>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`Bars['bars']`},{name:`disabled`,type:`boolean`},{name:`open`,type:`boolean`},{name:`touchClose`,type:`boolean`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<Window>`}],U={component:`ActionSheet`,props:H,defaults:F,wikiDesign:ae}})),G,K=e((()=>{h(),te(),W(),G=new ne(U.component,U.props,U.defaults,U.wikiDesign,re,ie)})),ue=t({ActionSheet:()=>J,ActionSheetAllSlots:()=>Z,ActionSheetTouchClose:()=>X,ActionSheetVModel:()=>Y,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=e((()=>{V(),K(),c(),q={title:`Ui/ActionSheet`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1ActionSheet:B},setup:()=>({args:e}),template:`
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
    `})},Y={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ActionSheet:B},setup(){return{open:i(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1ActionSheet v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1ActionSheet>
    `})},X={name:`Закрытие жестом`,render:()=>({components:{D1ActionSheet:B},setup(){return{openWithTouch:i(!1),openWithoutTouch:i(!1)}},template:`
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
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1ActionSheet:B},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`ActionSheet`,`ActionSheetVModel`,`ActionSheetTouchClose`,`ActionSheetAllSlots`]}));$();export{J as ActionSheet,Z as ActionSheetAllSlots,X as ActionSheetTouchClose,Y as ActionSheetVModel,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,ue as t};