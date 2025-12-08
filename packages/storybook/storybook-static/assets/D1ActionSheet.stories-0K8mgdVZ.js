import{r as i,R as f,c as w,e as C,l as k,z as x,A as M,B as S,D as W,E as B,F as _}from"./iframe-BlCC38XJ.js";import{D as E}from"./index-Cl5idLwM.js";import{D as I}from"./index-BPfSqOYD.js";import{M as O,a as P,D as Y}from"./index-B3KIeo7o.js";import{W as L,w as H,a as V,b as N}from"./wiki-fb_eBW86.js";import"./jsx-runtime-D_zvdyIk.js";const b=80;class ${constructor(t,e,o,n){this.start=t,this.move=e,this.end=o,this.element=n}touche=i();toucheMove=i();mouse=i();mouseMove=i();onTouch={onTouchstart:t=>{this.touche.value=t.targetTouches?.[0],this.mouse.value={x:this.touche.value?.clientX??0,y:this.touche.value?.clientY??0},this.update(t.target)},onTouchend:t=>this.reset(t.target),onTouchcancel:t=>this.reset(t.target),onTouchmove:t=>{this.toucheMove.value=t.targetTouches?.[0],this.mouseMove.value={x:this.toucheMove.value?.clientX??0,y:this.toucheMove.value?.clientY??0},this.updateMove(t.target)}};onMouse={onMousedown:t=>{this.mouse.value={x:t.clientX,y:t.clientY},this.update(t.target)},onMouseup:t=>this.reset(t.target),onMousemove:t=>{this.mouseMove.value={x:t.clientX,y:t.clientY},this.updateMove(t.target)}};getElement(t){return this.element?.value??t.closest("[data-touch]")}getTypeX(t){return t>=b?"right":t<-b?"left":"none"}getTypeY(t){return t>=b?"bottom":t<-b?"top":"none"}async callback(t){const e=this.mouse.value,o=this.mouseMove.value;if(e&&o){const n=o.x-e.x,s=o.y-e.y;if(!t||await f(t(this.getTypeX(n),this.getTypeY(s),n,s,e,o,this.touche.value,this.toucheMove.value)))return{x:n,y:s}}}reset(t){const e=this.getElement(t);this.callback(this.end).then(o=>{e&&(o?this.resetData(e):setTimeout(()=>this.resetData(e),400))})}resetData(t){this.touche.value=void 0,this.toucheMove.value=void 0,this.mouse.value=void 0,this.mouseMove.value=void 0,t.style.removeProperty("--sys-touch-start-x"),t.style.removeProperty("--sys-touch-start-y"),t.style.removeProperty("--sys-touch-move-x"),t.style.removeProperty("--sys-touch-move-y")}update(t){const e=this.getElement(t),o=this.mouse.value;e&&o&&(e.style.setProperty("--sys-touch-start-x",`${o.x}px`),e.style.setProperty("--sys-touch-start-y",`${o.y}px`),f(this.start?.(o,this.touche.value)).then())}updateMove(t){const e=this.getElement(t);this.callback(this.move).then(o=>{e&&o&&(e.style.setProperty("--sys-touch-move-x",`${o.x}px`),e.style.setProperty("--sys-touch-move-y",`${o.y}px`))})}}let z=class extends O{constructor(t,e,o,n,s,p,r,m){super(t,e,o,n,s,p,r,m,w(()=>({open:t.open,adaptive:"actionSheet",closeButton:t.barsBackHide,closeMobileHide:t.touchClose})),void 0,{align:"auto"}),this.props=t,this.refs=e,this.element=o,this.classDesign=n,this.className=s,this.components=p,this.slots=r,this.emits=m,this.touchEvent=new $(void 0,(v,y,K,D)=>D>=0,(v,y)=>y==="bottom"?(this.window.expose.setOpen(!1).then(),!1):!0)}touchEvent};const X={barsBackHide:!0,touchClose:!0};class q extends P{initItem(){return new z(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass("title"),header:this.getSubClass("header"),body:this.getSubClass("body"),footer:this.getSubClass("footer"),touch:this.getSubClass("touch"),tab:this.getSubClass("tab")}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitleTouch,default:this.renderDefault,footer:this.renderFooter},C({class:this.classes?.value.main,"data-touch":"touch"},this.getAttrs()))}renderTitleTouch=t=>{const e=this.renderTitle(t);return this.props.touchClose?[k("div",{class:this.classes?.value.touch,...this.item.touchEvent.onTouch},[k("div",{class:this.classes?.value.tab}),...e])]:e}}const A={padding:["sm","md","lg"],width:["sm","md","lg","auto"]},T={...X,paddingByIndent:!0,width:"md"},c=x({name:"D1ActionSheet",__name:"D1ActionSheet",props:M({open:{type:Boolean},touchClose:{type:Boolean},disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},padding:{},paddingByIndent:{type:Boolean},width:{}},T),emits:["window","bars","barsLite","barsBack","actions","actionsLite"],setup(a,{expose:t,emit:e}){const o=e,n=a,s=w(()=>({main:{"d1-actionSheet":!0,[`d1-actionSheet--padding--${n.padding}`]:S(A.padding,n.padding),"d1-actionSheet--paddingByIndent":n.paddingByIndent,[`d1-actionSheet--width--${n.width}`]:S(A.width,n.width)}})),p=w(()=>({})),r=new q("d1.actionSheet",n,{emits:o,classes:s,styles:p,components:{window:E,bars:I,actions:Y},compMod:{window:{divider:!0}}}),m=r.render();return t(r.expose()),(v,y)=>(_(),W(B(m)))}});c.__docgenInfo={name:"D1ActionSheet",exportName:"default",displayName:"D1ActionSheet",description:"",tags:{},props:[{name:"width",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"auto"'}]}},{name:"paddingByIndent",required:!1,type:{name:"boolean"}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}}],sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ActionSheet/D1ActionSheet.vue"]};const F=[{name:"actionsAttrs",type:"ConstrBind<ActionsProps>"},{name:"actionsHide",type:"boolean"},{name:"actionsList",type:"ConstrBind<unknown>"},{name:"actionsSecondary",type:"ConstrBind<unknown>"},{name:"autoClose",type:"boolean"},{name:"barsAttrs",type:"ConstrBind<BarsProps>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"Bars['bars']"},{name:"disabled",type:"boolean"},{name:"open",type:"boolean"},{name:"padding",type:"string",option:["sm","md","lg"]},{name:"paddingByIndent",type:"boolean"},{name:"touchClose",type:"boolean"},{name:"width",type:"string",option:["sm","md","lg","auto"]},{name:"windowAttrs",type:"ConstrBind<WindowProps>"}],g=new L("ActionSheet",F,T,H,V,N),j={title:"Ui/ActionSheet",component:c,parameters:{design:"d1",docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},l={render:a=>({components:{D1ActionSheet:c},setup:()=>({args:a}),template:`
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
    `})},h={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1ActionSheet:c},setup(){return{open:i(!1)}},template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1ActionSheet v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1ActionSheet>
    `})},d={name:"Закрытие жестом",render:()=>({components:{D1ActionSheet:c},setup(){return{openWithTouch:i(!1),openWithoutTouch:i(!1)}},template:`
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
    `})},u={name:"Демонстрация всех слотов",render:()=>({components:{D1ActionSheet:c},template:`
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
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const G=["ActionSheet","ActionSheetVModel","ActionSheetTouchClose","ActionSheetAllSlots"],ot=Object.freeze(Object.defineProperty({__proto__:null,ActionSheet:l,ActionSheetAllSlots:u,ActionSheetTouchClose:d,ActionSheetVModel:h,__namedExportsOrder:G,default:j},Symbol.toStringTag,{value:"Module"}));export{ot as A,l as a,g as b,d as c,h as d,u as e};
