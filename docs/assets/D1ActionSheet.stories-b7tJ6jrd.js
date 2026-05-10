import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{P as n,a as r,c as i,d as a,g as o,i as s,k as c,s as l,t as u}from"./vue.esm-bundler-KrdxwWaE.js";import{D as d,P as ee,f,u as p}from"./iframe-UEhCQgdF.js";import{t as m}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as h,d as g,f as _,n as v,o as te,p as y,t as ne,u as re}from"./wiki-YLJtDFp2.js";import{i as ie,n as b,t as x}from"./ModalDesignAbstract-mUlQo6qN-B1XKLQln.js";import{n as ae,t as S}from"./Window-BZqc26Av.js";import{n as C,t as w}from"./Bars-CDpENWJ0.js";import{n as T,t as oe}from"./Actions-yLVz8XVL.js";var E,D,O=e((()=>{_(),u(),f(),E=80,D=class{constructor(e,t,n,r){y(this,`touche`,c()),y(this,`toucheMove`,c()),y(this,`mouse`,c()),y(this,`mouseMove`,c()),y(this,`onTouch`,{onTouchstart:e=>{this.touche.value=e.targetTouches?.[0],this.mouse.value={x:this.touche.value?.clientX??0,y:this.touche.value?.clientY??0},this.update(e.target)},onTouchend:e=>this.reset(e.target),onTouchcancel:e=>this.reset(e.target),onTouchmove:e=>{this.toucheMove.value=e.targetTouches?.[0],this.mouseMove.value={x:this.toucheMove.value?.clientX??0,y:this.toucheMove.value?.clientY??0},this.updateMove(e.target)}}),y(this,`onMouse`,{onMousedown:e=>{this.mouse.value={x:e.clientX,y:e.clientY},this.update(e.target)},onMouseup:e=>this.reset(e.target),onMousemove:e=>{this.mouseMove.value={x:e.clientX,y:e.clientY},this.updateMove(e.target)}}),this.start=e,this.move=t,this.end=n,this.element=r}getElement(e){return this.element?.value??e.closest(`[data-touch]`)}getTypeX(e){return e>=E?`right`:e<-E?`left`:`none`}getTypeY(e){return e>=E?`bottom`:e<-E?`top`:`none`}async callback(e){let t=this.mouse.value,n=this.mouseMove.value;if(t&&n){let r=n.x-t.x,i=n.y-t.y;if(!e||await d(e(this.getTypeX(r),this.getTypeY(i),r,i,t,n,this.touche.value,this.toucheMove.value)))return{x:r,y:i}}}reset(e){let t=this.getElement(e);this.callback(this.end).then(e=>{t&&(e?this.resetData(t):setTimeout(()=>this.resetData(t),400))})}resetData(e){this.touche.value=void 0,this.toucheMove.value=void 0,this.mouse.value=void 0,this.mouseMove.value=void 0,e.style.removeProperty(`--sys-touch-start-x`),e.style.removeProperty(`--sys-touch-start-y`),e.style.removeProperty(`--sys-touch-move-x`),e.style.removeProperty(`--sys-touch-move-y`)}update(e){let t=this.getElement(e),n=this.mouse.value;t&&n&&(t.style.setProperty(`--sys-touch-start-x`,`${n.x}px`),t.style.setProperty(`--sys-touch-start-y`,`${n.y}px`),d(this.start?.call(this,n,this.touche.value)).then())}updateMove(e){let t=this.getElement(e);this.callback(this.move).then(e=>{t&&e&&(t.style.setProperty(`--sys-touch-move-x`,`${e.x}px`),t.style.setProperty(`--sys-touch-move-y`,`${e.y}px`))})}}})),k,A,j,M=e((()=>{_(),O(),b(),u(),f(),k=class extends x{constructor(e,t,n,r,i,a,o,c,l){let{TouchEventIncludeConstructor:u=D}=l??{};super(e,t,n,r,i,a,o,c,s(()=>({open:e.open,adaptive:`actionSheet`,closeButton:e.barsBackHide,closeMobileHide:e.touchClose})),void 0,{align:`auto`},l),y(this,`touchEvent`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=c,this.touchEvent=new u(void 0,(e,t,n,r)=>r>=0,(e,t)=>t===`bottom`?(this.window.expose.setOpen(!1).then(),!1):!0)}},A={barsBackHide:!0,touchClose:!0},j=class extends ie{constructor(...e){super(...e),y(this,`renderTitleTouch`,e=>{let t=this.renderTitle(e);return this.props.touchClose?[i(`div`,{class:this.classes?.value.touch,...this.item.touchEvent.onTouch},[i(`div`,{class:this.classes?.value.tab}),...t])]:t})}initItem(){return new k(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits)}initClasses(){return{main:{},title:this.getSubClass(`title`),header:this.getSubClass(`header`),body:this.getSubClass(`body`),footer:this.getSubClass(`footer`),touch:this.getSubClass(`touch`),tab:this.getSubClass(`tab`)}}initRender(){return this.item.window.render({control:this.renderControl,title:this.renderTitleTouch,default:this.renderDefault,footer:this.renderFooter},p({class:this.classes?.value.main,"data-touch":`touch`},this.getAttrs()))}}})),N,P,F=e((()=>{M(),N={width:[`sm`,`md`,`lg`,`auto`]},P={...A,width:`md`}})),I=e((()=>{})),L,R=e((()=>{u(),f(),M(),ae(),C(),T(),F(),I(),L=l({name:`D1ActionSheet`,__name:`D1ActionSheet`,props:a({disabled:{type:Boolean},autoClose:{type:Boolean},windowAttrs:{},barsLabel:{},barsDescription:{},barsBackHide:{type:Boolean},barsHide:{type:Boolean},barsList:{},barsAttrs:{},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},open:{type:Boolean},touchClose:{type:Boolean},width:{}},P),emits:[`window`,`bars`,`barsLite`,`barsBack`,`actions`,`actionsLite`],setup(e,{expose:t,emit:i}){let a=i,c=e,l=new j(`d1.actionSheet`,c,{emits:a,classes:s(()=>({main:{"d1-actionSheet":!0,[`d1-actionSheet--width--${c.width}`]:ee(N.width,c.width)}})),styles:s(()=>({})),components:{window:S,bars:w,actions:oe},compMod:{window:{divider:!0}}}),u=l.render();return t(l.expose()),(e,t)=>(o(),r(n(u)))}})})),z,B=e((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1ActionSheet`,exportName:`default`,displayName:`D1ActionSheet`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ActionSheet/D1ActionSheet.vue`]})})),V,H,U,W,G=e((()=>{ne(),F(),V=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps> | undefined`},{name:`actionsHide`,type:`boolean | undefined`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`autoClose`,type:`boolean | undefined`},{name:`barsAttrs`,type:`ConstrBind<BarsProps> | undefined`},{name:`barsBackHide`,type:`boolean | undefined`},{name:`barsDescription`,type:`string | undefined`},{name:`barsHide`,type:`boolean | undefined`},{name:`barsLabel`,type:`string | number | undefined`},{name:`barsList`,type:`ConstrBind<ButtonProps>[] | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`open`,type:`boolean | undefined`},{name:`touchClose`,type:`boolean | undefined`},{name:`width`,type:`string | undefined`,option:[`sm`,`md`,`lg`,`auto`]},{name:`windowAttrs`,type:`ConstrBind<WindowProps> | undefined`}],H=[{name:`control`,description:`Control slot for window management/
Слот управления для управления окном`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`default`,description:`Default slot for main content/
Основной слот для главного содержимого`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/
Слот подвала для низа окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`header`,description:`Slot for the modal header/ Слот для заголовка модального окна`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`title`,description:`Title slot for window header/
Слот заголовка для шапки окна`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]}],U=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],W={component:`ActionSheet`,props:V,slots:H,events:U,defaults:P,wikiDesign:v}})),K,q=e((()=>{g(),te(),G(),K=new re(W.component,W.props,W.defaults,W.wikiDesign,h,m)})),se=t({ActionSheet:()=>Y,ActionSheetAllSlots:()=>Z,ActionSheetVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{B(),q(),u(),J={title:`Ui/ActionSheet`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1ActionSheet:z},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ActionSheet:z},setup(){return{open:c(!1)}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`ActionSheet`,`ActionSheetVModel`,`ActionSheetAllSlots`]}));$();export{Y as ActionSheet,Z as ActionSheetAllSlots,X as ActionSheetVModel,Q as __namedExportsOrder,J as default,q as i,$ as n,K as r,se as t};