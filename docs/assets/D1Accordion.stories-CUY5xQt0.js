import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,N as r,St as i,Vt as a,_t as o,bt as s,f as c,kt as l,m as u,r as d,wt as f,xt as p,yt as m}from"./iframe-CqYdK-d6.js";import{a as h,d as ee,f as te,g as ne,l as re,n as ie,p as g,t as _,u as v}from"./wiki-BtAa-rOh.js";import{c as y,s as b}from"./D1Icon-Ci1pDxDr.js";import{n as x,t as S}from"./ModelInclude-ZrPu5V5T-L5x4BiPg.js";import{a as C,o as w}from"./D1MotionTransform-gr4bvVH2.js";import{n as T,t as E}from"./D1Cell-DDDHtx1l.js";import{n as D,t as O}from"./MotionTransform-BDmKsXrm.js";var k,A,j,M=e((()=>{te(),y(),S(),w(),o(),c(),k=class{constructor(e,t,i,a,o,s,c,l,u){g(this,`motionTransform`,void 0),g(this,`event`,void 0),g(this,`open`,n(!1)),g(this,`model`,void 0),g(this,`elementHead`,n()),g(this,`labelId`,r()),g(this,`descriptionId`,r()),g(this,`bindsCell`,m(()=>({ref:this.elementHead,icon:this.props.icon,iconTrailing:this.props.iconArrowDown,label:this.props.label,description:this.props.description,dynamic:!0,labelId:this.labelId,descriptionId:this.descriptionId,onClick:this.event.onClick,onKeydown:this.event.onKeydown}))),this.props=e,this.refs=t,this.element=i,this.classDesign=a,this.className=o,this.components=s,this.slots=c,this.emits=l;let{EventClickIncludeConstructor:d=b,ModelIncludeConstructor:f=x,MotionTransformIncludeConstructor:p=C}=u??{};this.motionTransform=new p(this.props,this.className,this.components,this.emits,m(()=>({section:!0,adaptive:`planeAlways`,inDom:!0,ariaLabelledby:this.labelId,ariaDescribedby:this.descriptionId}))),this.event=new d(void 0,void 0,l),this.model=new f(`open`,this.emits,this.open)}},A={clickOpen:!0,autoClose:!0,divider:!0},j=class extends u{constructor(e,t,n){super(e,t,n),g(this,`item`,void 0),g(this,`renderHead`,({isOpen:e,binds:t})=>{let n={};return this.slots&&(`label`in this.slots&&(n.label=e=>this.initSlot(`label`,void 0,e)),`description`in this.slots&&(n.description=e=>this.initSlot(`description`,void 0,e)),`caption`in this.slots&&(n.caption=e=>this.initSlot(`caption`,void 0,e)),`trailing`in this.slots&&(n.trailing=e=>this.initSlot(`trailing`,void 0,e)),`body`in this.slots&&(n.body=e=>this.initSlot(`body`,void 0,e))),this.components.renderOne(`cell`,d(this.item.bindsCell.value,t,this.props.cellAttrs,{ref:this.item.elementHead,iconTurn:e.value,class:this.classes?.value.head}),n)}),g(this,`renderBody`,e=>i(`div`,{class:this.classes?.value.body},this.initSlot(`default`,void 0,e))),this.item=new k(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.motionTransform.expose}}initClasses(){return{main:{},head:this.getSubClass(`head`),body:this.getSubClass(`body`)}}initStyles(){return{}}initRender(){return this.item.motionTransform.render({head:this.renderHead,body:this.renderBody},{...this.getAttrs(),class:this.classes?.value.main,"data-divider":this.props.divider?`divider`:void 0,...this.item.model.getBinds()})}}})),N,ae=e((()=>{T(),N=E})),P,F=e((()=>{M(),P={...A,iconArrowDown:`keyboard_arrow_down`,divider:!0}})),I=e((()=>{})),L,R=e((()=>{o(),M(),ae(),D(),F(),I(),L=p({name:`D1Accordion`,__name:`D1Accordion`,props:f({label:{},labelId:{},description:{},descriptionId:{},icon:{},open:{type:Boolean},clickOpen:{type:Boolean},autoClose:{type:Boolean},motionTransformAttrs:{},modelOpen:{},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},cellAttrs:{},iconArrowDown:{},divider:{type:Boolean}},P),emits:[`click`,`clickLite`,`transform`,`transformLite`,`update:open`,`update:modelOpen`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=new j(`d1.accordion`,i,{emits:r,classes:m(()=>({main:{"d1-accordion":!0,"d1-accordion--divider":i.divider}})),styles:m(()=>({})),components:{cell:N,motionTransform:O}}),c=o.render();return t(o.expose()),(e,t)=>(l(),s(a(c)))}})})),z,B=e((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Accordion`,exportName:`default`,displayName:`D1Accordion`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Accordion/D1Accordion.vue`]})})),V,H,U,W,G=e((()=>{v(),_(),F(),V=[{name:`autoClose`,type:`boolean`},{name:`cellAttrs`,type:`ConstrBind<Cell>`},{name:`clickOpen`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`divider`,type:`boolean`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconArrowDown`,type:`IconValue<Icon>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`modelOpen`,type:`boolean`},{name:`motionTransformAttrs`,type:`ConstrBind<MotionTransform>`},{name:`onUpdate:modelOpen`,type:`(value: boolean) => void`},{name:`onUpdate:open`,type:`(value: boolean) => void`},{name:`open`,type:`boolean`}],H=[{name:`body`,properties:[{name:`props`,type:`CellClassesSub`}]},{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,properties:[{name:`props`,type:`MotionTransformControlItem`}]},{name:`description`,description:`Description slot/ Слот описания`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`trailing`,properties:[{name:`props`,type:`CellClassesSub`}]}],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`transform`,description:`Transform event with native event and options/ Событие трансформации с нативным событием и опциями`,properties:[{name:`event`,type:`Event`},{name:` options`,type:`MotionTransformEmitOptions`}]},{name:`transformLite`,description:`Lightweight transform event with options only/ Облегчённое событие трансформации только с опциями`,properties:[{name:`options`,type:`MotionTransformEmitOptions`}]},{name:`update:modelOpen`,description:`Update model open event/ Событие обновления открытия модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:open`,description:`Update open event/ Событие обновления открытия`,properties:[{name:`value`,type:`boolean`}]}],W={component:`Accordion`,props:V,slots:H,events:U,defaults:P,wikiDesign:ie}})),K,q=e((()=>{v(),h(),G(),K=new ee(W.component,W.props,W.defaults,W.wikiDesign,re,ne)})),oe=t({Accordion:()=>Y,AccordionSlots:()=>Z,AccordionVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{B(),q(),o(),J={title:`Ui/Accordion`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1Accordion:z},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Accordion:z},setup(){return{open:n(!1)}},template:`
        <div class="wiki-storybook-item--padding">
          <button class="wiki-storybook-button" @click="open = !open">Toggle ({{ open }})</button>
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
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Accordion:z},template:`
        <D1Accordion label="Default label" description="Default description" icon="settings">
          <template #label>Custom label slot</template>
          <template #description>Custom description slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot content</template>
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
        <div class="wiki-storybook-item--padding">
          <button class="wiki-storybook-button" @click="open = !open">Toggle ({{ open }})</button>
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
          <template #body>Body slot content</template>
          <template #default>
              <p>Custom default slot content (main accordion body)</p>
          </template>
        </D1Accordion>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Accordion`,`AccordionVModel`,`AccordionSlots`]}));$();export{Y as Accordion,Z as AccordionSlots,X as AccordionVModel,Q as __namedExportsOrder,J as default,q as i,$ as n,K as r,oe as t};