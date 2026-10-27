import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,P as s,Pt as c,Rt as l,mn as u,un as d}from"./library-ByXZ2YPj.js";import{N as f,_ as ee,a as p,d as m,f as h,k as g,n as _,p as v,s as y,t as b}from"./wiki-CfN0XtvQ.js";import{n as te,t as ne}from"./EventClickInclude-BePe4mYM-K44ha_OT.js";import{n as re,t as x}from"./ModelInclude-CSCLC3Le-Dak8eD0T.js";import{n as S,t as C}from"./ComponentIncludeAbstract-CwPk6byu-B8vlefjC.js";import{n as w,t as T}from"./D1Cell-C1u_SFgC.js";import{n as ie,t as ae}from"./MotionTransform-CGPcKs9y.js";var E;function D(){return(D=e((()=>{C(),E=class extends S{emits;exposeItems=[{name:`isShow`,type:`boolean`},{name:`getOpen`,type:`boolean`},{name:`setOpen`},{name:`toOpen`},{name:`toClose`},{name:`toggle`}];name=`motionTransform`;propsAttrsName=`motionTransformAttrs`;constructor(e,t,n,r,i,a){super(e,t,n,r,i),this.emits=a}getAttrs(e){let t=this.getProps();return{...super.getAttrs(e),open:t.open}}toBinds(){let e=this.getProps();return{...super.toBinds(),clickOpen:e.clickOpen,autoClose:e.autoClose,onTransform:this.onTransform}}toExpose(){return{...super.toExpose(),getMotionTransformElement:()=>this.element.value}}onTransform=(e,t)=>{this.emits?.(`transform`,e,t),this.emits?.(`transformLite`,t)}}})))()}var O,k,A;function j(){return(j=e((()=>{ne(),x(),D(),n(),g(),O=class{props;element;naming;components;slots;emits;motionTransform;event;open=d(!1);model;elementHead=d();labelId=s();descriptionId=s();constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{EventClickIncludeConstructor:s=te,ModelIncludeConstructor:c=re,MotionTransformIncludeConstructor:l=E}=o;this.motionTransform=new l(this.naming,this.props,this.components,()=>({section:!0,adaptive:`planeAlways`,inDom:!0,ariaLabelledby:this.labelId,ariaDescribedby:this.descriptionId,"data-divider":this.props.divider?`divider`:void 0}),void 0,this.emits),this.event=new s(void 0,void 0,a),this.model=new c(`open`,this.emits,this.open)}get bindsCell(){return f(this.props.cellAttrs,{ref:this.elementHead,icon:this.props.icon,iconTrailing:this.props.iconArrowDown,label:this.props.label,description:this.props.description,dynamic:!0,labelId:this.labelId,descriptionId:this.descriptionId,onClick:this.event.onClick,onKeydown:this.event.onKeydown})}},k={clickOpen:!0,autoClose:!0,divider:!0},A=class extends ee{item;constructor(e,t,n){super(e,t,n),this.item=new O(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{...this.item.motionTransform.expose}}initClasses(){return{main:{},head:this.naming.getSubClass(`head`),body:this.naming.getSubClass(`body`)}}initStyles(){return{}}initRender(){return this.item.motionTransform.render({head:this.renderHead,body:this.renderBody},{...this.getAttrs(),class:this.classes?.value.main,...this.item.model.getBinds()})}renderHead=({isOpen:e,binds:t})=>{let n={};return this.slots&&(`label`in this.slots&&(n.label=e=>this.initSlot(`label`,void 0,e)),`description`in this.slots&&(n.description=e=>this.initSlot(`description`,void 0,e)),`caption`in this.slots&&(n.caption=e=>this.initSlot(`caption`,void 0,e)),`trailing`in this.slots&&(n.trailing=e=>this.initSlot(`trailing`,void 0,e)),`body`in this.slots&&(n.body=e=>this.initSlot(`body`,void 0,e))),this.components?.renderOne(`cell`,f(this.item.bindsCell,t,{iconTurn:e,class:this.classes?.value.head}),n)};renderBody=e=>l(`div`,this.getKeyClass(`body`),this.initSlot(`default`,void 0,e))}})))()}var M;function N(){return(N=e((()=>{w(),M=T})))()}var P;function F(){return(F=e((()=>{j(),P={...k,iconArrowDown:`keyboard_arrow_down`,divider:!0}})))()}var I;function L(){return(L=e((()=>{n(),j(),N(),ie(),F(),I=a({name:`D1Accordion`,__name:`D1Accordion`,props:i({label:{},labelId:{},description:{},descriptionId:{},icon:{},open:{type:Boolean},clickOpen:{type:Boolean},autoClose:{type:Boolean},motionTransformAttrs:{},modelOpen:{},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},iconArrowDown:{},cellAttrs:{},divider:{type:Boolean}},P),emits:[`click`,`clickLite`,`transform`,`transformLite`,`update:open`,`update:modelOpen`],setup(e,{expose:t,emit:n}){let i=n,a=e,s=c(()=>({main:{"d1-accordion":!0,"d1-accordion--divider":a.divider}})),l=c(()=>({})),d=new A(`d1.accordion`,a,{emits:i,classes:s,styles:l,components:{cell:M,motionTransform:ae}}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(u(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Accordion`,exportName:`default`,displayName:`D1Accordion`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Accordion/D1Accordion.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{b(),F(),B=[{name:`autoClose`,type:`boolean`},{name:`cellAttrs`,type:`ConstrBind<CellProps>`},{name:`clickOpen`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`divider`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`modelOpen`,type:`boolean`},{name:`motionTransformAttrs`,type:`ConstrBind<MotionTransformProps>`},{name:`onUpdate:modelOpen`,type:`((value: boolean) => void)`},{name:`onUpdate:open`,type:`((value: boolean) => void)`},{name:`open`,type:`boolean`}],V=[{name:`body`,description:`Slot for the main body content/ Слот для основного контента тела`,properties:[{name:`props`,type:`(CellClassesSub) | undefined`}]},{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Main expandable content of the accordion/ Основное раскрывающееся содержимое аккордеона`,properties:[{name:`props`,type:`(MotionTransformControlItem) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for elements on the right/ Слот для элементов справа`,properties:[{name:`props`,type:`(CellClassesSub) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`transform`,description:`Transform event with native event and options/ Событие трансформации с нативным событием и опциями`,properties:[{name:`event`,type:`Event | undefined`},{name:`options`,type:`MotionTransformEmitOptions`}]},{name:`transformLite`,description:`Lightweight transform event with options only/ Облегчённое событие трансформации только с опциями`,properties:[{name:`options`,type:`MotionTransformEmitOptions`}]},{name:`update:modelOpen`,description:`Update model open event/ Событие обновления открытия модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:open`,description:`Update open event/ Событие обновления открытия`,properties:[{name:`value`,type:`boolean`}]}],U={component:`Accordion`,props:B,slots:V,events:H,defaults:P,wikiDesign:_}})))()}var G;function K(){return(K=e((()=>{h(),y(),W(),G=new m(U.component,U.props,U.defaults,U.wikiDesign,p,v)})))()}var q=t({Accordion:()=>Y,AccordionSlots:()=>Z,AccordionVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),n(),J={title:`Ui/Accordion`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1Accordion:R},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Accordion:R},setup(){return{open:d(!1)}},template:`
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
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1Accordion:R},template:`
        <D1Accordion label="Default label" description="Default description" icon="settings">
          <template #label>Custom label slot</template>
          <template #description>Custom description slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #default>
              <p>Custom default slot content (main accordion body)</p>
          </template>
        </D1Accordion>
    `})},Q=[`Accordion`,`AccordionVModel`,`AccordionSlots`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,D as c,q as i,Z as n,G as o,X as r,K as s,Y as t};