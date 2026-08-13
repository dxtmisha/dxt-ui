import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,Nt as s,in as c,jt as l,tn as u,x as d}from"./library-CUIf7uCS.js";import{O as f,d as p,j as m,k as ee,l as h,m as g,n as _,p as v,r as y,t as te,u as ne}from"./wiki-wIqBVsyI.js";import{n as re,t as b}from"./EventClickInclude-CZ1iA_Fp-BOBjazBg.js";import{n as x,t as ie}from"./ModelInclude-D7Nt6tKY-Dvax6Hhk.js";import{n as ae,t as S}from"./ComponentIncludeAbstract-CH6F0Rvb-UISzxO4W.js";import{n as C,t as w}from"./D1Cell-BIvPdQ6k.js";import{n as T,t as E}from"./MotionTransform-Ddu3PjZg.js";var D;function O(){return(O=e((()=>{S(),D=class extends ae{constructor(e,t,n,r,i,a){super(e,t,n,r,i),v(this,`emits`,void 0),v(this,`exposeItems`,[{name:`isShow`,type:`boolean`},{name:`getOpen`,type:`boolean`},{name:`setOpen`},{name:`toOpen`},{name:`toClose`},{name:`toggle`}]),v(this,`name`,`motionTransform`),v(this,`propsAttrsName`,`motionTransformAttrs`),v(this,`onTransform`,(e,t)=>{var n,r;(n=this.emits)==null||n.call(this,`transform`,e,t),(r=this.emits)==null||r.call(this,`transformLite`,t)}),this.emits=a}getAttrs(e){let t=this.getProps();return{...super.getAttrs(e),open:t.open}}toBinds(){let e=this.getProps();return{...super.toBinds(),clickOpen:e.clickOpen,autoClose:e.autoClose,onTransform:this.onTransform}}toExpose(){return{...super.toExpose(),getMotionTransformElement:()=>this.element.value}}}})))()}var k,A,j;function M(){return(M=e((()=>{re(),x(),O(),r(),f(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),v(this,`motionTransform`,void 0),v(this,`event`,void 0),v(this,`open`,u(!1)),v(this,`model`,void 0),v(this,`elementHead`,u()),v(this,`labelId`,d()),v(this,`descriptionId`,d()),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=b,ModelIncludeConstructor:f=ie,MotionTransformIncludeConstructor:p=D}=c;this.motionTransform=new p(this.className,this.props,this.components,()=>({section:!0,adaptive:`planeAlways`,inDom:!0,ariaLabelledby:this.labelId,ariaDescribedby:this.descriptionId,"data-divider":this.props.divider?`divider`:void 0}),void 0,this.emits),this.event=new l(void 0,void 0,s),this.model=new f(`open`,this.emits,this.open)}get bindsCell(){return m(this.props.cellAttrs,{ref:this.elementHead,icon:this.props.icon,iconTrailing:this.props.iconArrowDown,label:this.props.label,description:this.props.description,dynamic:!0,labelId:this.labelId,descriptionId:this.descriptionId,onClick:this.event.onClick,onKeydown:this.event.onKeydown})}},A={clickOpen:!0,autoClose:!0,divider:!0},j=class extends ee{constructor(e,t,n){super(e,t,n),v(this,`item`,void 0),v(this,`renderHead`,({isOpen:e,binds:t})=>{let n={};return this.slots&&(`label`in this.slots&&(n.label=e=>this.initSlot(`label`,void 0,e)),`description`in this.slots&&(n.description=e=>this.initSlot(`description`,void 0,e)),`caption`in this.slots&&(n.caption=e=>this.initSlot(`caption`,void 0,e)),`trailing`in this.slots&&(n.trailing=e=>this.initSlot(`trailing`,void 0,e)),`body`in this.slots&&(n.body=e=>this.initSlot(`body`,void 0,e))),this.components.renderOne(`cell`,m(this.item.bindsCell,t,{iconTurn:e,class:this.classes?.value.head}),n)}),v(this,`renderBody`,e=>s(`div`,{class:this.classes?.value.body},this.initSlot(`default`,void 0,e))),this.item=new k(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.motionTransform.expose}}initClasses(){return{main:{},head:this.getSubClass(`head`),body:this.getSubClass(`body`)}}initStyles(){return{}}initRender(){return this.item.motionTransform.render({head:this.renderHead,body:this.renderBody},{...this.getAttrs(),class:this.classes?.value.main,...this.item.model.getBinds()})}}})))()}var N;function P(){return(P=e((()=>{C(),N=w})))()}var F;function I(){return(I=e((()=>{M(),F={...A,iconArrowDown:`keyboard_arrow_down`,divider:!0}})))()}var L;function R(){return(R=e((()=>{r(),M(),P(),T(),I(),L=o({name:`D1Accordion`,__name:`D1Accordion`,props:a({label:{},labelId:{},description:{},descriptionId:{},icon:{},open:{type:Boolean},clickOpen:{type:Boolean},autoClose:{type:Boolean},motionTransformAttrs:{},modelOpen:{},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},iconArrowDown:{},cellAttrs:{},divider:{type:Boolean}},F),emits:[`click`,`clickLite`,`transform`,`transformLite`,`update:open`,`update:modelOpen`],setup(e,{expose:t,emit:r}){let a=r,o=e,s=n(()=>({main:{"d1-accordion":!0,"d1-accordion--divider":o.divider}})),u=n(()=>({})),d=new j(`d1.accordion`,o,{emits:a,classes:s,styles:u,components:{cell:N,motionTransform:E}}),f=d.render();return t(d.expose()),(e,t)=>(i(),l(c(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Accordion`,exportName:`default`,displayName:`D1Accordion`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Accordion/D1Accordion.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{te(),I(),V=[{name:`autoClose`,type:`boolean`},{name:`cellAttrs`,type:`ConstrBind<CellProps>`},{name:`clickOpen`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`divider`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`modelOpen`,type:`boolean`},{name:`motionTransformAttrs`,type:`ConstrBind<MotionTransformProps>`},{name:`onUpdate:modelOpen`,type:`((value: boolean) => void)`},{name:`onUpdate:open`,type:`((value: boolean) => void)`},{name:`open`,type:`boolean`}],H=[{name:`body`,description:`Slot for the main body content/ Слот для основного контента тела`,properties:[{name:`props`,type:`(CellClassesSub) | undefined`}]},{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Main expandable content of the accordion/ Основное раскрывающееся содержимое аккордеона`,properties:[{name:`props`,type:`(MotionTransformControlItem) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for elements on the right/ Слот для элементов справа`,properties:[{name:`props`,type:`(CellClassesSub) | undefined`}]}],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`transform`,description:`Transform event with native event and options/ Событие трансформации с нативным событием и опциями`,properties:[{name:`event`,type:`Event | undefined`},{name:`options`,type:`MotionTransformEmitOptions`}]},{name:`transformLite`,description:`Lightweight transform event with options only/ Облегчённое событие трансформации только с опциями`,properties:[{name:`options`,type:`MotionTransformEmitOptions`}]},{name:`update:modelOpen`,description:`Update model open event/ Событие обновления открытия модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:open`,description:`Update open event/ Событие обновления открытия`,properties:[{name:`value`,type:`boolean`}]}],W={component:`Accordion`,props:V,slots:H,events:U,defaults:F,wikiDesign:_}})))()}var K;function q(){return(q=e((()=>{p(),h(),G(),K=new ne(W.component,W.props,W.defaults,W.wikiDesign,y,g)})))()}var oe=t({Accordion:()=>Y,AccordionSlots:()=>Z,AccordionVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),r(),J={title:`Ui/Accordion`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Accordion:z},setup:()=>({args:e}),template:`
      <D1Accordion v-bind="args">
      <template #default>
        <p>Accordion content goes here. This section can contain any HTML elements, components, or text.</p>
        <p>You can include multiple paragraphs, lists, and other structured content to demonstrate the accordion's flexibility and behavior.</p>
        <ul>
          <li>First example item with some details</li>
          <li>Second example showing list formatting</li>
          <li>Third item demonstrating nested content</li>
        </ul>
        <p>Additional text can be added to show how the accordion handles longer content with smooth animations and proper spacing.</p>
        <div style="padding: 12px; background: #f5f5f5; border-radius: 4px; margin-top: 8px;">
          <strong>Note:</strong> This is a highlighted section within the accordion body.
        </div>
        <p style="margin-top: 12px;">The accordion component automatically manages the height transitions and ensures all content is properly displayed when expanded.</p>
      </template>
    </D1Accordion>
    <D1Accordion v-bind="args">
      <template #default>
        <h4 style="margin-top: 0;">Features Overview</h4>
        <p>This accordion demonstrates different content types and layout possibilities:</p>
        <ol>
          <li>Numbered lists for sequential information</li>
          <li>Headings for content structure</li>
          <li>Mixed content types in a single container</li>
        </ol>
        <p>The component supports various HTML elements and maintains proper spacing throughout the animation cycle.</p>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <span style="padding: 4px 8px; background: #e3f2fd; border-radius: 4px; font-size: 12px;">Tag 1</span>
          <span style="padding: 4px 8px; background: #f3e5f5; border-radius: 4px; font-size: 12px;">Tag 2</span>
          <span style="padding: 4px 8px; background: #e8f5e9; border-radius: 4px; font-size: 12px;">Tag 3</span>
        </div>
      </template>
    </D1Accordion>
    <D1Accordion v-bind="args">
      <template #default>
        <p>This is the third variant showing simplified content structure.</p>
        <p>Accordion components support various content formats while maintaining consistent behavior.</p>
        <h5>Key Features:</h5>
        <ul>
          <li>Flexible content layouts</li>
          <li>Smooth animations</li>
          <li>Easy customization</li>
        </ul>
      </template>
    </D1Accordion>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Accordion:z},setup(){return{open:u(!1)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = !open">
              Toggle ({{ open }})
            </button>
          </div>
          <D1Accordion v-model:open="open" label="Settings" description="Click to expand" icon="settings">
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Content is {{ open ? 'visible' : 'hidden' }}</p>
                <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the accordion's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>
                <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the accordion, such as in complex forms or coordinated UI interactions.</p>
              </div>
            </template>
          </D1Accordion>
        </div>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Accordion:z},template:`
        <D1Accordion label="Default label" description="Default description" icon="settings">
          <template #label>Custom label slot</template>
          <template #description>Custom description slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #default>
              <p>Custom default slot content (main accordion body)</p>
          </template>
        </D1Accordion>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Accordion
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Accordion v-bind="args">
      <template #default>
        <p>Accordion content goes here. This section can contain any HTML elements, components, or text.</p>
        <p>You can include multiple paragraphs, lists, and other structured content to demonstrate the accordion's flexibility and behavior.</p>
        <ul>
          <li>First example item with some details</li>
          <li>Second example showing list formatting</li>
          <li>Third item demonstrating nested content</li>
        </ul>
        <p>Additional text can be added to show how the accordion handles longer content with smooth animations and proper spacing.</p>
        <div style="padding: 12px; background: #f5f5f5; border-radius: 4px; margin-top: 8px;">
          <strong>Note:</strong> This is a highlighted section within the accordion body.
        </div>
        <p style="margin-top: 12px;">The accordion component automatically manages the height transitions and ensures all content is properly displayed when expanded.</p>
      </template>
    </D1Accordion>
    <D1Accordion v-bind="args">
      <template #default>
        <h4 style="margin-top: 0;">Features Overview</h4>
        <p>This accordion demonstrates different content types and layout possibilities:</p>
        <ol>
          <li>Numbered lists for sequential information</li>
          <li>Headings for content structure</li>
          <li>Mixed content types in a single container</li>
        </ol>
        <p>The component supports various HTML elements and maintains proper spacing throughout the animation cycle.</p>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <span style="padding: 4px 8px; background: #e3f2fd; border-radius: 4px; font-size: 12px;">Tag 1</span>
          <span style="padding: 4px 8px; background: #f3e5f5; border-radius: 4px; font-size: 12px;">Tag 2</span>
          <span style="padding: 4px 8px; background: #e8f5e9; border-radius: 4px; font-size: 12px;">Tag 3</span>
        </div>
      </template>
    </D1Accordion>
    <D1Accordion v-bind="args">
      <template #default>
        <p>This is the third variant showing simplified content structure.</p>
        <p>Accordion components support various content formats while maintaining consistent behavior.</p>
        <h5>Key Features:</h5>
        <ul>
          <li>Flexible content layouts</li>
          <li>Smooth animations</li>
          <li>Easy customization</li>
        </ul>
      </template>
    </D1Accordion>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Accordion
    },
    setup() {
      return {
        open: ref(false)
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = !open">
              Toggle ({{ open }})
            </button>
          </div>
          <D1Accordion v-model:open="open" label="Settings" description="Click to expand" icon="settings">
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Content is {{ open ? 'visible' : 'hidden' }}</p>
                <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the accordion's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>
                <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the accordion, such as in complex forms or coordinated UI interactions.</p>
              </div>
            </template>
          </D1Accordion>
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Accordion
    },
    template: \`
        <D1Accordion label="Default label" description="Default description" icon="settings">
          <template #label>Custom label slot</template>
          <template #description>Custom description slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #default>
              <p>Custom default slot content (main accordion body)</p>
          </template>
        </D1Accordion>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Accordion`,`AccordionVModel`,`AccordionSlots`]})))()}export{$ as a,oe as i,Z as n,K as o,X as r,q as s,Y as t};