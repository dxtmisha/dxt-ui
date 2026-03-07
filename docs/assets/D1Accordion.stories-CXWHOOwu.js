import{r as v,d as p,t as w,g as C,Q as S,z as A,$ as I,h as O,I as _,K as N,L as B,M,N as z}from"./iframe-B21bnPHY.js";import{g as F}from"./D1Icon-vXIBGmPr.js";import{V as H}from"./ModelInclude-BiYm_iCQ-NMUfVkBD.js";import{_ as U}from"./D1Cell-DDjFamGN.js";import{D as L}from"./index-ndQibiyU.js";import{w as $,W as V,a as E,b as j}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";var K=Object.defineProperty,W=(o,t,i)=>t in o?K(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,h=(o,t,i)=>W(o,typeof t!="symbol"?t+"":t,i);let q=class{constructor(t,i,d,a,r,l){h(this,"element",v()),h(this,"binds",p(()=>{var e,n;return{...w((e=C(this.extra))!=null?e:{},(n=this.props.motionTransformAttrs)!=null?n:{}),open:this.props.open,clickOpen:this.props.clickOpen,autoClose:this.props.autoClose}})),h(this,"expose",{open:p(()=>{var e;return!!((e=this.element.value)!=null&&e.open)}),isShow:p(()=>{var e;return!!((e=this.element.value)!=null&&e.isShow)}),setOpen:async e=>{var n;return(n=this.element.value)==null?void 0:n.setOpen(e)},toOpen:async()=>{var e;return(e=this.element.value)==null?void 0:e.toOpen()},toClose:async()=>{var e;return(e=this.element.value)==null?void 0:e.toClose()},toggle:async()=>{var e;return(e=this.element.value)==null?void 0:e.toggle()},motionTransformElement:this.element}),h(this,"onTransform",(e,n)=>{var m,u;(m=this.emits)==null||m.call(this,"transform",e,n),(u=this.emits)==null||u.call(this,"transformLite",n)}),h(this,"render",(e,n)=>this.components?this.components.render("motionTransform",{onTransform:this.onTransform,...w(n??{},this.binds.value),ref:this.element},e,this.index):[]),this.props=t,this.className=i,this.components=d,this.emits=a,this.extra=r,this.index=l}};var P=Object.defineProperty,Q=(o,t,i)=>t in o?P(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,s=(o,t,i)=>Q(o,typeof t!="symbol"?t+"":t,i);class Y{constructor(t,i,d,a,r,l,e,n,m){s(this,"motionTransform"),s(this,"event"),s(this,"open",v(!1)),s(this,"model"),s(this,"elementHead",v()),s(this,"labelId",A()),s(this,"descriptionId",A()),s(this,"bindsCell",p(()=>({ref:this.elementHead,icon:this.props.icon,iconTrailing:this.props.iconArrowDown,label:this.props.label,description:this.props.description,dynamic:!0,labelId:this.labelId,descriptionId:this.descriptionId,onClick:this.event.onClick,onKeydown:this.event.onKeydown}))),this.props=t,this.refs=i,this.element=d,this.classDesign=a,this.className=r,this.components=l,this.slots=e,this.emits=n;const{EventClickIncludeConstructor:u=F,ModelIncludeConstructor:k=H,MotionTransformIncludeConstructor:D=q}=m??{};this.motionTransform=new D(this.props,this.className,this.components,this.emits,p(()=>({section:!0,adaptive:"planeAlways",inDom:!0,ariaLabelledby:this.labelId,ariaDescribedby:this.descriptionId}))),this.event=new u(void 0,void 0,n),this.model=new k("open",this.emits,this.open)}}const R={clickOpen:!0,autoClose:!0,divider:!0};class G extends S{constructor(t,i,d){super(t,i,d),s(this,"item"),s(this,"renderHead",({isOpen:a,binds:r})=>{var l;const e={};return this.slots&&("label"in this.slots&&(e.label=n=>this.initSlot("label",void 0,n)),"description"in this.slots&&(e.description=n=>this.initSlot("description",void 0,n)),"caption"in this.slots&&(e.caption=n=>this.initSlot("caption",void 0,n)),"trailing"in this.slots&&(e.trailing=n=>this.initSlot("trailing",void 0,n)),"body"in this.slots&&(e.body=n=>this.initSlot("body",void 0,n))),this.components.renderOne("cell",I(this.item.bindsCell.value,r,this.props.cellAttrs,{ref:this.item.elementHead,iconTurn:a.value,class:(l=this.classes)==null?void 0:l.value.head}),e)}),s(this,"renderBody",a=>{var r;return O("div",{class:(r=this.classes)==null?void 0:r.value.body},this.initSlot("default",void 0,a))}),this.item=new Y(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.motionTransform.expose}}initClasses(){return{main:{},head:this.getSubClass("head"),body:this.getSubClass("body")}}initStyles(){return{}}initRender(){var t;return this.item.motionTransform.render({head:this.renderHead,body:this.renderBody},{...this.getAttrs(),class:(t=this.classes)==null?void 0:t.value.main,"data-divider":this.props.divider?"divider":void 0,...this.item.model.getBinds()})}}const J=U,T={...R,iconArrowDown:"keyboard_arrow_down",divider:!0},c=_({name:"D1Accordion",__name:"D1Accordion",props:M({label:{},labelId:{},description:{},descriptionId:{},icon:{},open:{type:Boolean},clickOpen:{type:Boolean},autoClose:{type:Boolean},motionTransformAttrs:{},modelOpen:{},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},cellAttrs:{},iconArrowDown:{},divider:{type:Boolean}},T),emits:["click","clickLite","transform","transformLite","update:open","update:modelOpen"],setup(o,{expose:t,emit:i}){const d=i,a=o,r=p(()=>({main:{"d1-accordion":!0,"d1-accordion--divider":a.divider}})),l=p(()=>({})),e=new G("d1.accordion",a,{emits:d,classes:r,styles:l,components:{cell:J,motionTransform:L}}),n=e.render();return t(e.expose()),(m,u)=>(z(),N(B(n)))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{name:"D1Accordion",exportName:"default",displayName:"D1Accordion",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Accordion/D1Accordion.vue"]});const X=[{name:"autoClose",type:"boolean"},{name:"cellAttrs",type:"ConstrBind<Cell>"},{name:"clickOpen",type:"boolean"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"divider",type:"boolean"},{name:"icon",type:"IconValue<Icon>"},{name:"iconArrowDown",type:"IconValue<Icon>"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"modelOpen",type:"boolean"},{name:"motionTransformAttrs",type:"ConstrBind<MotionTransform>"},{name:"onUpdate:modelOpen",type:"(value: boolean) => void"},{name:"onUpdate:open",type:"(value: boolean) => void"},{name:"open",type:"boolean"}],y={component:"Accordion",props:X,defaults:T,wikiDesign:$},x=new V(y.component,y.props,y.defaults,y.wikiDesign,E,j),Z={title:"Ui/Accordion",component:c,parameters:{design:"d1",docs:{description:{component:x.getDescription()}}},argTypes:x.getWiki(),args:x.getValues()},g={render:o=>({components:{D1Accordion:c},setup:()=>({args:o}),template:`
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
    `})},b={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Accordion:c},setup(){return{open:v(!1)}},template:`
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
    `})},f={name:"Использование слотов",render:()=>({components:{D1Accordion:c},template:`
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
    `})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const ee=["Accordion","AccordionVModel","AccordionSlots"],de=Object.freeze(Object.defineProperty({__proto__:null,Accordion:g,AccordionSlots:f,AccordionVModel:b,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{de as A,g as a,x as b,b as c,f as d};
