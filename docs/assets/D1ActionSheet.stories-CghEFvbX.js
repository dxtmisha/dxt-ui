import{a3 as A,r as p,$ as M,d as k,h as T,I as B,K as O,L as _,M as E,N as Y,O as I}from"./iframe-B21bnPHY.js";import{T as L,F as N,D as P}from"./index-iCokEgPP.js";import{D as $}from"./index-CV2r4llu.js";import{D as H}from"./index-BLNCa4Ok.js";import{w as j,W as X,a as z,b as F}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";var V=Object.defineProperty,K=(i,t,e)=>t in i?V(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,d=(i,t,e)=>K(i,typeof t!="symbol"?t+"":t,e);const g=80;class q{constructor(t,e,n,s){d(this,"touche",p()),d(this,"toucheMove",p()),d(this,"mouse",p()),d(this,"mouseMove",p()),d(this,"onTouch",{onTouchstart:o=>{var l,a,c,r,h;this.touche.value=(l=o.targetTouches)==null?void 0:l[0],this.mouse.value={x:(c=(a=this.touche.value)==null?void 0:a.clientX)!=null?c:0,y:(h=(r=this.touche.value)==null?void 0:r.clientY)!=null?h:0},this.update(o.target)},onTouchend:o=>this.reset(o.target),onTouchcancel:o=>this.reset(o.target),onTouchmove:o=>{var l,a,c,r,h;this.toucheMove.value=(l=o.targetTouches)==null?void 0:l[0],this.mouseMove.value={x:(c=(a=this.toucheMove.value)==null?void 0:a.clientX)!=null?c:0,y:(h=(r=this.toucheMove.value)==null?void 0:r.clientY)!=null?h:0},this.updateMove(o.target)}}),d(this,"onMouse",{onMousedown:o=>{this.mouse.value={x:o.clientX,y:o.clientY},this.update(o.target)},onMouseup:o=>this.reset(o.target),onMousemove:o=>{this.mouseMove.value={x:o.clientX,y:o.clientY},this.updateMove(o.target)}}),this.start=t,this.move=e,this.end=n,this.element=s}getElement(t){var e,n;return(n=(e=this.element)==null?void 0:e.value)!=null?n:t.closest("[data-touch]")}getTypeX(t){return t>=g?"right":t<-g?"left":"none"}getTypeY(t){return t>=g?"bottom":t<-g?"top":"none"}async callback(t){const e=this.mouse.value,n=this.mouseMove.value;if(e&&n){const s=n.x-e.x,o=n.y-e.y;if(!t||await A(t(this.getTypeX(s),this.getTypeY(o),s,o,e,n,this.touche.value,this.toucheMove.value)))return{x:s,y:o}}}reset(t){const e=this.getElement(t);this.callback(this.end).then(n=>{e&&(n?this.resetData(e):setTimeout(()=>this.resetData(e),400))})}resetData(t){this.touche.value=void 0,this.toucheMove.value=void 0,this.mouse.value=void 0,this.mouseMove.value=void 0,t.style.removeProperty("--sys-touch-start-x"),t.style.removeProperty("--sys-touch-start-y"),t.style.removeProperty("--sys-touch-move-x"),t.style.removeProperty("--sys-touch-move-y")}update(t){var e;const n=this.getElement(t),s=this.mouse.value;n&&s&&(n.style.setProperty("--sys-touch-start-x",`${s.x}px`),n.style.setProperty("--sys-touch-start-y",`${s.y}px`),A((e=this.start)==null?void 0:e.call(this,s,this.touche.value)).then())}updateMove(t){const e=this.getElement(t);this.callback(this.move).then(n=>{e&&n&&(e.style.setProperty("--sys-touch-move-x",`${n.x}px`),e.style.setProperty("--sys-touch-move-y",`${n.y}px`))})}}var G=Object.defineProperty,U=(i,t,e)=>t in i?G(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,D=(i,t,e)=>U(i,typeof t!="symbol"?t+"":t,e);class R extends N{constructor(t,e,n,s,o,l,a,c,r){const{TouchEventIncludeConstructor:h=q}=r??{};super(t,e,n,s,o,l,a,c,k(()=>({open:t.open,adaptive:"actionSheet",closeButton:t.barsBackHide,closeMobileHide:t.touchClose})),void 0,{align:"auto"}),D(this,"touchEvent"),this.props=t,this.refs=e,this.element=n,this.classDesign=s,this.className=o,this.components=l,this.slots=a,this.emits=c,this.touchEvent=new h(void 0,(x,S,nt,W)=>W>=0,(x,S)=>S==="bottom"?(this.window.expose.setOpen(!1).then(),!1):!0)}}const J={barsBackHide:!0,touchClose:!0};class Q extends L{constructor(){super(...arguments),D(this,"renderTitleTouch",t=>{var e,n;const s=this.renderTitle(t);return this.props.touchClose?[T("div",{class:(e=this.classes)==null?void 0:e.value.touch,...this.item.touchEvent.onTouch},[T("div",{class:(n=this.classes)==null?void 0:n.value.tab}),...s])]:s})}initItem(){return new R(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass("title"),header:this.getSubClass("header"),body:this.getSubClass("body"),footer:this.getSubClass("footer"),touch:this.getSubClass("touch"),tab:this.getSubClass("tab")}}initRender(){var t;return this.item.window.render({control:this.renderControl,title:this.renderTitleTouch,default:this.renderDefault,footer:this.renderFooter},M({class:(t=this.classes)==null?void 0:t.value.main,"data-touch":"touch"},this.getAttrs()))}}const Z={width:["sm","md","lg","auto"]},C={...J,width:"md"},u=B({name:"D1ActionSheet",__name:"D1ActionSheet",props:E({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},open:{type:Boolean},touchClose:{type:Boolean},width:{}},C),emits:["window","bars","barsLite","barsBack","actions","actionsLite"],setup(i,{expose:t,emit:e}){const n=e,s=i,o=k(()=>({main:{"d1-actionSheet":!0,[`d1-actionSheet--width--${s.width}`]:I(Z.width,s.width)}})),l=k(()=>({})),a=new Q("d1.actionSheet",s,{emits:n,classes:o,styles:l,components:{window:$,bars:H,actions:P},compMod:{window:{divider:!0}}}),c=a.render();return t(a.expose()),(r,h)=>(Y(),O(_(c)))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{name:"D1ActionSheet",exportName:"default",displayName:"D1ActionSheet",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ActionSheet/D1ActionSheet.vue"]});const tt=[{name:"actionsAttrs",type:"ConstrBind<Actions>"},{name:"actionsHide",type:"boolean"},{name:"actionsList",type:"ConstrBind<Actions['list']>"},{name:"actionsSecondary",type:"ConstrBind<Actions['listSecondary']>"},{name:"autoClose",type:"boolean"},{name:"barsAttrs",type:"ConstrBind<Bars>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"Bars['bars']"},{name:"disabled",type:"boolean"},{name:"open",type:"boolean"},{name:"touchClose",type:"boolean"},{name:"width",type:"string",option:["sm","md","lg","auto"]},{name:"windowAttrs",type:"ConstrBind<Window>"}],w={component:"ActionSheet",props:tt,defaults:C,wikiDesign:j},f=new X(w.component,w.props,w.defaults,w.wikiDesign,z,F),et={title:"Ui/ActionSheet",component:u,parameters:{design:"d1",docs:{description:{component:f.getDescription()}}},argTypes:f.getWiki(),args:f.getValues()},m={render:i=>({components:{D1ActionSheet:u},setup:()=>({args:i}),template:`
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
    `})},b={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1ActionSheet:u},setup(){return{open:p(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1ActionSheet v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1ActionSheet>
    `})},y={name:"Закрытие жестом",render:()=>({components:{D1ActionSheet:u},setup(){return{openWithTouch:p(!1),openWithoutTouch:p(!1)}},template:`
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
    `})},v={name:"Демонстрация всех слотов",render:()=>({components:{D1ActionSheet:u},template:`
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
    `})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const ot=["ActionSheet","ActionSheetVModel","ActionSheetTouchClose","ActionSheetAllSlots"],ht=Object.freeze(Object.defineProperty({__proto__:null,ActionSheet:m,ActionSheetAllSlots:v,ActionSheetTouchClose:y,ActionSheetVModel:b,__namedExportsOrder:ot,default:et},Symbol.toStringTag,{value:"Module"}));export{ht as A,m as a,f as b,y as c,b as d,v as e};
