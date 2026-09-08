import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,an as c,c as l,jt as u,nn as d,ut as f}from"./library-BfcLFF_v.js";import{O as p,d as m,i as h,l as g,m as ee,n as _,p as v,t as y,u as b}from"./wiki-BHyzKkJP.js";import{n as x,t as S}from"./Window-hQuDkKWt.js";import{n as te,t as ne}from"./Actions-DGxrWzBP.js";import{n as re,t as C}from"./Bars-Bt_Tm5ve.js";import{n as w,r as ie,t as T}from"./ModalDesignAbstract-Bdi85ElK-nouB6JAP.js";var E,D;function O(){return(O=e((()=>{n(),p(),E=80,D=class{constructor(e,t,n,r){v(this,`start`,void 0),v(this,`move`,void 0),v(this,`end`,void 0),v(this,`element`,void 0),v(this,`touche`,d()),v(this,`toucheMove`,d()),v(this,`mouse`,d()),v(this,`mouseMove`,d()),v(this,`onTouch`,{onTouchstart:e=>{this.touche.value=e.targetTouches?.[0],this.mouse.value={x:this.touche.value?.clientX??0,y:this.touche.value?.clientY??0},this.update(e.target)},onTouchend:e=>this.reset(e.target),onTouchcancel:e=>this.reset(e.target),onTouchmove:e=>{this.toucheMove.value=e.targetTouches?.[0],this.mouseMove.value={x:this.toucheMove.value?.clientX??0,y:this.toucheMove.value?.clientY??0},this.updateMove(e.target)}}),v(this,`onMouse`,{onMousedown:e=>{this.mouse.value={x:e.clientX,y:e.clientY},this.update(e.target)},onMouseup:e=>this.reset(e.target),onMousemove:e=>{this.mouseMove.value={x:e.clientX,y:e.clientY},this.updateMove(e.target)}}),this.start=e,this.move=t,this.end=n,this.element=r}getElement(e){return this.element?.value??e.closest(`[data-touch]`)}getTypeX(e){return e>=E?`right`:e<-80?`left`:`none`}getTypeY(e){return e>=E?`bottom`:e<-80?`top`:`none`}async callback(e){let t=this.mouse.value,n=this.mouseMove.value;if(t&&n){let r=n.x-t.x,i=n.y-t.y;if(!e||await l(e(this.getTypeX(r),this.getTypeY(i),r,i,t,n,this.touche.value,this.toucheMove.value)))return{x:r,y:i}}}reset(e){let t=this.getElement(e);this.callback(this.end).then(e=>{t&&(e?this.resetData(t):setTimeout(()=>this.resetData(t),400))})}resetData(e){this.touche.value=void 0,this.toucheMove.value=void 0,this.mouse.value=void 0,this.mouseMove.value=void 0,e.style.removeProperty(`--sys-touch-start-x`),e.style.removeProperty(`--sys-touch-start-y`),e.style.removeProperty(`--sys-touch-move-x`),e.style.removeProperty(`--sys-touch-move-y`)}update(e){let t=this.getElement(e),n=this.mouse.value;t&&n&&(t.style.setProperty(`--sys-touch-start-x`,`${n.x}px`),t.style.setProperty(`--sys-touch-start-y`,`${n.y}px`),l(this.start?.call(this,n,this.touche.value)).then())}updateMove(e){let t=this.getElement(e);this.callback(this.move).then(e=>{t&&e&&(t.style.setProperty(`--sys-touch-move-x`,`${e.x}px`),t.style.setProperty(`--sys-touch-move-y`,`${e.y}px`))})}}})))()}var k,A,j;function M(){return(M=e((()=>{O(),w(),n(),k=class extends T{constructor(e,t,n,r,i,a,o,s,c={}){let{TouchEventIncludeConstructor:l=D}=c;super(e,t,n,r,i,a,o,s,()=>({adaptive:`actionSheetRight`,closeButton:this.props.barsBackHide,closeMobileHide:this.props.touchClose}),void 0,()=>({align:`auto`}),c),v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),v(this,`touchEvent`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.touchEvent=new l(void 0,(e,t,n,r)=>r>=0,(e,t)=>t!==`bottom`||(this.window.expose.setOpen(!1).then(),!1))}},A={barsBackHide:!0,touchClose:!0},j=class extends ie{constructor(...e){super(...e),v(this,`renderTitleTouch`,e=>{let t=this.renderTitle(e);return this.props.touchClose?[a(`div`,{key:`touch`,class:this.classes?.value.touch,...this.item.touchEvent.onTouch},[a(`div`,{class:this.classes?.value.tab}),...t])]:t})}initItem(){return new k(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`),touch:this.getSubClass(`touch`),tab:this.getSubClass(`tab`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitleTouch,default:this.renderDefault,footer:this.renderFooter},{...this.getAttrs(),class:this.classes?.value.main,"data-touch":`touch`})}}})))()}var N,P;function F(){return(F=e((()=>{M(),N={width:[`sm`,`md`,`lg`,`auto`]},P={...A,windowAttrs:{adaptive:`actionSheet`},width:`md`}})))()}var I;function L(){return(L=e((()=>{n(),p(),M(),x(),re(),te(),F(),I=i({name:`D1ActionSheet`,__name:`D1ActionSheet`,props:o({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},open:{type:Boolean},touchClose:{type:Boolean},width:{}},P),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`update:open`,`update:modelOpen`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=u(()=>({main:{"d1-actionSheet":!0,[`d1-actionSheet--width--${a.width}`]:f(N.width,a.width)}})),l=u(()=>({})),d=new j(`d1.actionSheet`,a,{emits:i,classes:o,styles:l,components:{window:S,bars:C,actions:ne},compMod:{window:{divider:!0}}}),p=d.render();return t(d.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ActionSheet`,exportName:`default`,displayName:`D1ActionSheet`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/ActionSheet/D1ActionSheet.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{y(),F(),B=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<BarsProps>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`ConstrBind<ButtonProps>[]`},{name:`disabled`,type:`boolean`},{name:`open`,type:`boolean`},{name:`touchClose`,type:`boolean`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps>`}],V=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],H=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelOpen`,description:`Update model open event/ Событие обновления открытия модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:open`,description:`Update open event/ Событие обновления открытия`,properties:[{name:`value`,type:`boolean`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],U={component:`ActionSheet`,props:B,slots:V,events:H,defaults:P,wikiDesign:_}})))()}var G;function K(){return(K=e((()=>{m(),g(),W(),G=new b(U.component,U.props,U.defaults,U.wikiDesign,h,ee)})))()}var q=t({ActionSheet:()=>Y,ActionSheetAllSlots:()=>Z,ActionSheetVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),n(),J={title:`Ui/ActionSheet`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1ActionSheet:R},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ActionSheet:R},setup(){return{open:d(!1)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1ActionSheet v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </D1ActionSheet>
        </div>
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1ActionSheet:R},template:`
        <D1ActionSheet>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet with All Slots</button>
          </template>

          <template #title>Title slot</template>
          <template #default>Default slot</template>
          <template #footer>Footer slot</template>
        </D1ActionSheet>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1ActionSheet v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </D1ActionSheet>
        </div>
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

          <template #title>Title slot</template>
          <template #default>Default slot</template>
          <template #footer>Footer slot</template>
        </D1ActionSheet>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`ActionSheet`,`ActionSheetVModel`,`ActionSheetAllSlots`]})))()}export{$ as a,q as i,Z as n,G as o,X as r,K as s,Y as t};