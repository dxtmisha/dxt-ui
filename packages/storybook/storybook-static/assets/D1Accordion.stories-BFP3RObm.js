import{r as h,c as s,g as y,f as b,h as v,e as x,l as A,z as w,A as T,B as D,D as k,E as S,F as C}from"./iframe-BlCC38XJ.js";import{_ as B}from"./D1Cell-CaFaQ11v.js";import{D as I}from"./index-DnhItdS4.js";import{a as O}from"./IconTrailingInclude-Dl0qqbyn.js";import{M as _}from"./ModelInclude-BztEWw6e.js";import{W as M,w as F,a as H,b as N}from"./wiki-fb_eBW86.js";import"./jsx-runtime-D_zvdyIk.js";class L{constructor(n,t,o,e,a,r){this.props=n,this.className=t,this.components=o,this.emits=e,this.extra=a,this.index=r}element=h();binds=s(()=>({...y(b(this.extra)??{},this.props.motionTransformAttrs??{}),open:this.props.open,clickOpen:this.props.clickOpen,autoClose:this.props.autoClose}));expose={open:s(()=>!!this.element.value?.open),isShow:s(()=>!!this.element.value?.isShow),setOpen:async n=>this.element.value?.setOpen(n),toOpen:async()=>this.element.value?.toOpen(),toClose:async()=>this.element.value?.toClose(),toggle:async()=>this.element.value?.toggle(),motionTransformElement:this.element};onTransform=(n,t)=>{this.emits?.("transform",n,t),this.emits?.("transformLite",t)};render=(n,t)=>this.components?this.components.render("motionTransform",{onTransform:this.onTransform,...y(t??{},this.binds.value),ref:this.element},n,this.index):[]}let z=class{constructor(n,t,o,e,a,r,m,u){this.props=n,this.refs=t,this.element=o,this.classDesign=e,this.className=a,this.components=r,this.slots=m,this.emits=u,this.motionTransform=new L(this.props,this.className,this.components,this.emits,s(()=>({section:!0,adaptive:"planeAlways",inDom:!0,ariaLabelledby:this.elementHead.value?.labelId,ariaDescribedby:this.elementHead.value?.descriptionId}))),this.event=new O(void 0,void 0,u),this.model=new _("open",this.emits,this.open)}motionTransform;event;open=h(!1);model;elementHead=h()};const U={clickOpen:!0,autoClose:!0,divider:!0};class E extends v{item;constructor(n,t,o){super(n,t,o),this.item=new z(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.motionTransform.expose}}initClasses(){return{main:{},head:this.getSubClass("head"),body:this.getSubClass("body")}}initStyles(){return{}}initRender(){return this.item.motionTransform.render({head:this.renderHead,body:this.renderBody},{...this.getAttrs(),class:this.classes?.value.main,"data-divider":this.props.divider?"divider":void 0,...this.item.model.getBinds()})}renderHead=({isOpen:n,binds:t})=>{const o={};return this.slots&&("label"in this.slots&&(o.label=e=>this.initSlot("label",void 0,e)),"description"in this.slots&&(o.description=e=>this.initSlot("description",void 0,e)),"caption"in this.slots&&(o.caption=e=>this.initSlot("caption",void 0,e)),"trailing"in this.slots&&(o.trailing=e=>this.initSlot("trailing",void 0,e)),"body"in this.slots&&(o.body=e=>this.initSlot("body",void 0,e))),this.components.renderOne("cell",x({ref:this.item.elementHead,icon:this.props.icon,iconTrailing:this.props.iconArrowDown,iconTurn:n.value,label:this.props.label,description:this.props.description,class:this.classes?.value.head,dynamic:!0,onClick:this.item.event.onClick,...t},this.props.cellAttrs),o)};renderBody=n=>A("div",{class:this.classes?.value.body},this.initSlot("default",void 0,n))}const V=B,q={padding:["sm","md","lg","ySm","yMd","yLg","none"]},f={...U,iconArrowDown:"keyboard_arrow_down",divider:!0,padding:"none",paddingByIndent:!0},c=w({name:"D1Accordion",__name:"D1Accordion",props:T({cellAttrs:{},iconArrowDown:{},modelOpen:{type:Boolean},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},label:{},labelId:{},description:{},icon:{},open:{type:Boolean},clickOpen:{type:Boolean},autoClose:{type:Boolean},motionTransformAttrs:{},divider:{type:Boolean},padding:{},paddingByIndent:{type:Boolean}},f),emits:["click","clickLite","transform","transformLite","update:open","update:modelOpen"],setup(i,{expose:n,emit:t}){const o=t,e=i,a=s(()=>({main:{"d1-accordion":!0,"d1-accordion--divider":e.divider,[`d1-accordion--padding--${e.padding}`]:D(q.padding,e.padding),"d1-accordion--paddingByIndent":e.paddingByIndent}})),r=s(()=>({})),m=new E("d1.accordion",e,{emits:o,classes:a,styles:r,components:{cell:V,motionTransform:I}}),u=m.render();return n(m.expose()),(j,K)=>(C(),k(S(u)))}});c.__docgenInfo={name:"D1Accordion",exportName:"default",displayName:"D1Accordion",description:"",tags:{},props:[{name:"paddingByIndent",required:!1,type:{name:"boolean"}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"ySm"'},{name:'"yMd"'},{name:'"yLg"'},{name:'"none"'}]}},{name:"divider",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Accordion/D1Accordion.vue"]};const P=[{name:"autoClose",type:"boolean"},{name:"cellAttrs",type:"ConstrBind<CellProps>"},{name:"clickOpen",type:"boolean"},{name:"description",type:"string | number"},{name:"divider",type:"boolean"},{name:"icon",type:"IconValue<IconProps>"},{name:"iconArrowDown",type:"IconValue<IconProps>"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"modelOpen",type:"boolean"},{name:"motionTransformAttrs",type:"ConstrBind<MotionTransformProps>"},{name:"onUpdate:modelOpen",type:"(value: boolean) => void"},{name:"onUpdate:open",type:"(value: boolean) => void"},{name:"open",type:"boolean"},{name:"padding",type:"string",option:["sm","md","lg","ySm","yMd","yLg","none"]},{name:"paddingByIndent",type:"boolean"}],g=new M("Accordion",P,f,F,H,N),W={title:"Ui/Accordion",component:c,parameters:{design:"d1",docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},d={render:i=>({components:{D1Accordion:c},setup:()=>({args:i}),template:`
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
    `})},l={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Accordion:c},setup(){return{open:h(!1)}},template:`
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
    `})},p={name:"Использование слотов",render:()=>({components:{D1Accordion:c},template:`
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
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const $=["Accordion","AccordionVModel","AccordionSlots"],ne=Object.freeze(Object.defineProperty({__proto__:null,Accordion:d,AccordionSlots:p,AccordionVModel:l,__namedExportsOrder:$,default:W},Symbol.toStringTag,{value:"Module"}));export{ne as A,d as a,g as b,l as c,p as d};
