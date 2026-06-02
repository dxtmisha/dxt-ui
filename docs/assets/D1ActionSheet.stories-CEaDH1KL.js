import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,Ct as i,D as a,Dt as o,Ft as s,Mt as c,Nt as l,Xt as u,kt as d,m as f,qt as p}from"./iframe-53vFWNoU.js";import{t as m}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as h,f as g,l as _,n as v,o as ee,p as y,t as te,u as ne}from"./wiki-DwIxUKqL.js";import{n as re,r as ie,t as b}from"./ModalDesignAbstract-CZcvOdUO-DcE8b9DB.js";import{n as ae,t as x}from"./Window-DdiERalU.js";import{n as S,t as C}from"./Bars-pzKhmONj.js";import{n as w,t as T}from"./Actions-pRy5R3ic.js";var E,D,O=t((()=>{g(),o(),f(),E=80,D=class{constructor(e,t,n,r){y(this,`start`,void 0),y(this,`move`,void 0),y(this,`end`,void 0),y(this,`element`,void 0),y(this,`touche`,p()),y(this,`toucheMove`,p()),y(this,`mouse`,p()),y(this,`mouseMove`,p()),y(this,`onTouch`,{onTouchstart:e=>{this.touche.value=e.targetTouches?.[0],this.mouse.value={x:this.touche.value?.clientX??0,y:this.touche.value?.clientY??0},this.update(e.target)},onTouchend:e=>this.reset(e.target),onTouchcancel:e=>this.reset(e.target),onTouchmove:e=>{this.toucheMove.value=e.targetTouches?.[0],this.mouseMove.value={x:this.toucheMove.value?.clientX??0,y:this.toucheMove.value?.clientY??0},this.updateMove(e.target)}}),y(this,`onMouse`,{onMousedown:e=>{this.mouse.value={x:e.clientX,y:e.clientY},this.update(e.target)},onMouseup:e=>this.reset(e.target),onMousemove:e=>{this.mouseMove.value={x:e.clientX,y:e.clientY},this.updateMove(e.target)}}),this.start=e,this.move=t,this.end=n,this.element=r}getElement(e){return this.element?.value??e.closest(`[data-touch]`)}getTypeX(e){return e>=E?`right`:e<-E?`left`:`none`}getTypeY(e){return e>=E?`bottom`:e<-E?`top`:`none`}async callback(e){let t=this.mouse.value,n=this.mouseMove.value;if(t&&n){let r=n.x-t.x,a=n.y-t.y;if(!e||await i(e(this.getTypeX(r),this.getTypeY(a),r,a,t,n,this.touche.value,this.toucheMove.value)))return{x:r,y:a}}}reset(e){let t=this.getElement(e);this.callback(this.end).then(e=>{t&&(e?this.resetData(t):setTimeout(()=>this.resetData(t),400))})}resetData(e){this.touche.value=void 0,this.toucheMove.value=void 0,this.mouse.value=void 0,this.mouseMove.value=void 0,e.style.removeProperty(`--sys-touch-start-x`),e.style.removeProperty(`--sys-touch-start-y`),e.style.removeProperty(`--sys-touch-move-x`),e.style.removeProperty(`--sys-touch-move-y`)}update(e){let t=this.getElement(e),n=this.mouse.value;t&&n&&(t.style.setProperty(`--sys-touch-start-x`,`${n.x}px`),t.style.setProperty(`--sys-touch-start-y`,`${n.y}px`),i(this.start?.call(this,n,this.touche.value)).then())}updateMove(e){let t=this.getElement(e);this.callback(this.move).then(e=>{t&&e&&(t.style.setProperty(`--sys-touch-move-x`,`${e.x}px`),t.style.setProperty(`--sys-touch-move-y`,`${e.y}px`))})}}})),k,A,j,M=t((()=>{g(),O(),re(),o(),k=class extends b{constructor(e,t,n,r,i,a,o,s,c={}){let{TouchEventIncludeConstructor:l=D}=c;super(e,t,n,r,i,a,o,s,()=>({adaptive:`actionSheetRight`,closeButton:this.props.barsBackHide,closeMobileHide:this.props.touchClose}),void 0,()=>({align:`auto`}),c),y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`touchEvent`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.touchEvent=new l(void 0,(e,t,n,r)=>r>=0,(e,t)=>t===`bottom`?(this.window.expose.setOpen(!1).then(),!1):!0)}},A={barsBackHide:!0,touchClose:!0},j=class extends ie{constructor(...e){super(...e),y(this,`renderTitleTouch`,e=>{let t=this.renderTitle(e);return this.props.touchClose?[l(`div`,{class:this.classes?.value.touch,...this.item.touchEvent.onTouch},[l(`div`,{class:this.classes?.value.tab}),...t])]:t})}initItem(){return new k(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`),touch:this.getSubClass(`touch`),tab:this.getSubClass(`tab`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitleTouch,default:this.renderDefault,footer:this.renderFooter},{...this.getAttrs(),class:this.classes?.value.main,"data-touch":`touch`})}}})),N,P,F=t((()=>{M(),N={width:[`sm`,`md`,`lg`,`auto`]},P={...A,windowAttrs:{adaptive:`actionSheet`},width:`md`}})),I=t((()=>{})),L,R=t((()=>{o(),f(),M(),ae(),S(),w(),F(),I(),L=c({name:`D1ActionSheet`,__name:`D1ActionSheet`,props:s({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},open:{type:Boolean},touchClose:{type:Boolean},width:{}},P),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`,`update:open`,`update:modelOpen`],setup(e,{expose:t,emit:i}){let o=i,s=e,c=new j(`d1.actionSheet`,s,{emits:o,classes:d(()=>({main:{"d1-actionSheet":!0,[`d1-actionSheet--width--${s.width}`]:a(N.width,s.width)}})),styles:d(()=>({})),components:{window:x,bars:C,actions:T},compMod:{window:{divider:!0}}}),l=c.render();return t(c.expose()),(e,t)=>(r(),n(u(l)))}})})),z,B=t((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1ActionSheet`,exportName:`default`,displayName:`D1ActionSheet`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ActionSheet/D1ActionSheet.vue`]})})),V,H,U,W,G=t((()=>{te(),F(),V=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean`},{name:`barsAttrs`,type:`ConstrBind<BarsProps>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`ConstrBind<ButtonProps>[]`},{name:`disabled`,type:`boolean`},{name:`open`,type:`boolean`},{name:`touchClose`,type:`boolean`},{name:`width`,type:`string`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps>`}],H=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],U=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],W={component:`ActionSheet`,props:V,slots:H,events:U,defaults:P,wikiDesign:v}})),K,q=t((()=>{h(),ee(),G(),K=new ne(W.component,W.props,W.defaults,W.wikiDesign,_,m)})),oe=e({ActionSheet:()=>Y,ActionSheetAllSlots:()=>Z,ActionSheetVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{B(),q(),o(),J={title:`Ui/ActionSheet`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1ActionSheet:z},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ActionSheet:z},setup(){return{open:p(!1)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1ActionSheet v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </D1ActionSheet>
        </div>
    `})},Z={name:`Демонстрация всех слотов`,render:()=>({components:{D1ActionSheet:z},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`ActionSheet`,`ActionSheetVModel`,`ActionSheetAllSlots`]}));$();export{Y as ActionSheet,Z as ActionSheetAllSlots,X as ActionSheetVModel,Q as __namedExportsOrder,J as default,q as i,$ as n,K as r,oe as t};