import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,It as i,O as a,Ot as o,bt as s,d as c,gt as l,h as u,u as d,vt as f,xt as p,yt as m}from"./iframe-InwAcaLb.js";import{a as h,d as g,l as _,m as v,n as ee,t as te,u as y}from"./wiki-DiKtF90Q.js";import{c as ne,s as b}from"./D1Icon-jtYe35RL.js";import{n as x,t as re}from"./ModelInclude-BiYm_iCQ-CyIpfNzl.js";import{a as S,o as C}from"./D1MotionTransform-BDUcJHCL.js";import{n as w,t as T}from"./D1Cell-DE_7VXgl.js";import{n as E,t as ie}from"./MotionTransform-BbM48YgY.js";var D,O,k,A,j,M,N=e((()=>{l(),d(),ne(),x(),C(),D=Object.defineProperty,O=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t,n)=>O(e,typeof t==`symbol`?t:t+``,n),A=class{constructor(e,t,n,r,o,s,c,l,u){k(this,`motionTransform`),k(this,`event`),k(this,`open`,i(!1)),k(this,`model`),k(this,`elementHead`,i()),k(this,`labelId`,a()),k(this,`descriptionId`,a()),k(this,`bindsCell`,f(()=>({ref:this.elementHead,icon:this.props.icon,iconTrailing:this.props.iconArrowDown,label:this.props.label,description:this.props.description,dynamic:!0,labelId:this.labelId,descriptionId:this.descriptionId,onClick:this.event.onClick,onKeydown:this.event.onKeydown}))),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=o,this.components=s,this.slots=c,this.emits=l;let{EventClickIncludeConstructor:d=b,ModelIncludeConstructor:p=re,MotionTransformIncludeConstructor:m=S}=u??{};this.motionTransform=new m(this.props,this.className,this.components,this.emits,f(()=>({section:!0,adaptive:`planeAlways`,inDom:!0,ariaLabelledby:this.labelId,ariaDescribedby:this.descriptionId}))),this.event=new d(void 0,void 0,l),this.model=new p(`open`,this.emits,this.open)}},j={clickOpen:!0,autoClose:!0,divider:!0},M=class extends c{constructor(e,t,n){super(e,t,n),k(this,`item`),k(this,`renderHead`,({isOpen:e,binds:t})=>{let n={};return this.slots&&(`label`in this.slots&&(n.label=e=>this.initSlot(`label`,void 0,e)),`description`in this.slots&&(n.description=e=>this.initSlot(`description`,void 0,e)),`caption`in this.slots&&(n.caption=e=>this.initSlot(`caption`,void 0,e)),`trailing`in this.slots&&(n.trailing=e=>this.initSlot(`trailing`,void 0,e)),`body`in this.slots&&(n.body=e=>this.initSlot(`body`,void 0,e))),this.components.renderOne(`cell`,u(this.item.bindsCell.value,t,this.props.cellAttrs,{ref:this.item.elementHead,iconTurn:e.value,class:this.classes?.value.head}),n)}),k(this,`renderBody`,e=>p(`div`,{class:this.classes?.value.body},this.initSlot(`default`,void 0,e))),this.item=new A(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.motionTransform.expose}}initClasses(){return{main:{},head:this.getSubClass(`head`),body:this.getSubClass(`body`)}}initStyles(){return{}}initRender(){return this.item.motionTransform.render({head:this.renderHead,body:this.renderBody},{...this.getAttrs(),class:this.classes?.value.main,"data-divider":this.props.divider?`divider`:void 0,...this.item.model.getBinds()})}}})),P,ae=e((()=>{w(),P=T})),F,I=e((()=>{N(),F={...j,iconArrowDown:`keyboard_arrow_down`,divider:!0}})),L=e((()=>{})),R,z=e((()=>{l(),d(),N(),ae(),E(),I(),L(),R=s({name:`D1Accordion`,__name:`D1Accordion`,props:r({label:{},labelId:{},description:{},descriptionId:{},icon:{},open:{type:Boolean},clickOpen:{type:Boolean},autoClose:{type:Boolean},motionTransformAttrs:{},modelOpen:{},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},cellAttrs:{},iconArrowDown:{},divider:{type:Boolean}},F),emits:[`click`,`clickLite`,`transform`,`transformLite`,`update:open`,`update:modelOpen`],setup(e,{expose:t,emit:r}){let i=r,a=e,s=new M(`d1.accordion`,a,{emits:i,classes:f(()=>({main:{"d1-accordion":!0,"d1-accordion--divider":a.divider}})),styles:f(()=>({})),components:{cell:P,motionTransform:ie}}),c=s.render();return t(s.expose()),(e,t)=>(o(),m(n(c)))}})})),B,V=e((()=>{z(),z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1Accordion`,exportName:`default`,displayName:`D1Accordion`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Accordion/D1Accordion.vue`]})})),H,U,W=e((()=>{y(),te(),I(),H=[{name:`autoClose`,type:`boolean`},{name:`cellAttrs`,type:`ConstrBind<Cell>`},{name:`clickOpen`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`divider`,type:`boolean`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconArrowDown`,type:`IconValue<Icon>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`modelOpen`,type:`boolean`},{name:`motionTransformAttrs`,type:`ConstrBind<MotionTransform>`},{name:`onUpdate:modelOpen`,type:`(value: boolean) => void`},{name:`onUpdate:open`,type:`(value: boolean) => void`},{name:`open`,type:`boolean`}],U={component:`Accordion`,props:H,defaults:F,wikiDesign:ee}})),G,K=e((()=>{y(),h(),W(),G=new g(U.component,U.props,U.defaults,U.wikiDesign,_,v)})),q=t({Accordion:()=>Y,AccordionSlots:()=>Z,AccordionVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{V(),K(),l(),J={title:`Ui/Accordion`,component:B,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1Accordion:B},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Accordion:B},setup(){return{open:i(!1)}},template:`
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
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Accordion:B},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Accordion`,`AccordionVModel`,`AccordionSlots`]}));$();export{Y as Accordion,Z as AccordionSlots,X as AccordionVModel,Q as __namedExportsOrder,J as default,K as i,$ as n,G as r,q as t};