import{r as g,c as l,F as y,D as b,M as v,d as x,h as A,e as w,m as T,o as D,f as k,g as C,u as S,j as B}from"./iframe-CFZkzvey.js";import{_ as I}from"./D1Cell-B2ss2wLg.js";import{D as O}from"./index-CgDSJSUR.js";import{a as M}from"./IconTrailingInclude-DL_EO-II.js";import{M as _}from"./ModelInclude-C-H473W0.js";import{W as F,w as N,a as P,b as L}from"./wiki-NZJqstoo.js";import"./jsx-runtime-D_zvdyIk.js";class U{constructor(n,e,t,o,s,a){this.props=n,this.className=e,this.components=t,this.emits=o,this.extra=s,this.index=a}element=g();binds=l(()=>({...y(b(this.extra)??{},this.props.motionTransformAttrs??{}),open:this.props.open,clickOpen:this.props.clickOpen,autoClose:this.props.autoClose}));expose={open:l(()=>!!this.element.value?.open),isShow:l(()=>!!this.element.value?.isShow),setOpen:async n=>this.element.value?.setOpen(n),toOpen:async()=>this.element.value?.toOpen(),toClose:async()=>this.element.value?.toClose(),toggle:async()=>this.element.value?.toggle(),motionTransformElement:this.element};onTransform=(n,e)=>{this.emits?.("transform",n,e),this.emits?.("transformLite",e)};render=(n,e)=>this.components?this.components.render("motionTransform",{onTransform:this.onTransform,...y(e??{},this.binds.value),ref:this.element},n,this.index):[]}let z=class{constructor(n,e,t,o,s,a,m,u){this.props=n,this.refs=e,this.element=t,this.classDesign=o,this.className=s,this.components=a,this.slots=m,this.emits=u,this.motionTransform=new U(this.props,this.className,this.components,this.emits,{section:!0,adaptive:"planeAlways"}),this.event=new M(void 0,void 0,u),this.model=new _("open",this.emits,this.open)}motionTransform;event;open=g(!1);model};const H={clickOpen:!0,autoClose:!0,divider:!0};class V extends v{item;constructor(n,e,t){super(n,e,t),this.item=new z(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.motionTransform.expose}}initClasses(){return{main:{},head:this.getSubClass("head"),body:this.getSubClass("body")}}initStyles(){return{}}initRender(){return this.item.motionTransform.render({head:this.renderHead,body:this.renderBody},{...this.getAttrs(),class:this.classes?.value.main,"data-divider":this.props.divider?"divider":void 0,...this.item.model.getBinds()})}renderHead=({isOpen:n})=>{const e={};return this.slots&&("label"in this.slots&&(e.label=t=>this.initSlot("label",void 0,t)),"description"in this.slots&&(e.description=t=>this.initSlot("description",void 0,t)),"caption"in this.slots&&(e.caption=t=>this.initSlot("caption",void 0,t)),"trailing"in this.slots&&(e.trailing=t=>this.initSlot("trailing",void 0,t)),"body"in this.slots&&(e.body=t=>this.initSlot("body",void 0,t))),this.components.renderOne("cell",x({icon:this.props.icon,iconTrailing:this.props.iconArrowDown,iconTurn:n.value,label:this.props.label,description:this.props.description,class:this.classes?.value.head,dynamic:!0,onClick:this.item.event.onClick},this.props.cellAttrs),e)};renderBody=n=>A("div",{class:this.classes?.value.body},this.initSlot("default",void 0,n))}const E=I,q={padding:["sm","md","lg","ySm","yMd","yLg","none"]},f={...H,iconArrowDown:"keyboard_arrow_down",divider:!0,padding:"yMd",paddingByIndent:!0},c=w({name:"D1Accordion",__name:"D1Accordion",props:T({cellAttrs:{},iconArrowDown:{},modelOpen:{type:Boolean},"onUpdate:open":{type:Function},"onUpdate:modelOpen":{type:Function},label:{},description:{},icon:{},open:{type:Boolean},clickOpen:{type:Boolean},autoClose:{type:Boolean},motionTransformAttrs:{},divider:{type:Boolean},padding:{},paddingByIndent:{type:Boolean}},f),emits:["click","clickLite","transform","transformLite","update:open","update:modelOpen"],setup(i,{expose:n,emit:e}){const t=e,o=i,s=l(()=>({main:{"d1-accordion":!0,"d1-accordion--divider":o.divider,[`d1-accordion--padding--${o.padding}`]:D(q.padding,o.padding),"d1-accordion--paddingByIndent":o.paddingByIndent}})),a=l(()=>({})),m=new V("d1.accordion",o,{emits:t,classes:s,styles:a,components:{cell:E,motionTransform:O}}),u=m.render();return n(m.expose()),(K,Y)=>(B(),k(C(S(u))))}});c.__docgenInfo={name:"D1Accordion",exportName:"default",displayName:"D1Accordion",description:"",tags:{},props:[{name:"paddingByIndent",required:!1,type:{name:"boolean"}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"ySm"'},{name:'"yMd"'},{name:'"yLg"'},{name:'"none"'}]}},{name:"divider",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Accordion/D1Accordion.vue"]};const W=[{name:"autoClose",type:"boolean"},{name:"cellAttrs",type:"ConstrBind<CellPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>"},{name:"clickOpen",type:"boolean"},{name:"description",type:"string | number"},{name:"divider",type:"boolean"},{name:"icon",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconArrowDown",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"label",type:"NumberOrString"},{name:"modelOpen",type:"boolean"},{name:"motionTransformAttrs",type:"ConstrBind<MotionTransformProps>"},{name:"onUpdate:modelOpen",type:"(value: boolean) => void"},{name:"onUpdate:open",type:"(value: boolean) => void"},{name:"open",type:"boolean"},{name:"padding",type:"string",option:["sm","md","lg","ySm","yMd","yLg","none"]},{name:"paddingByIndent",type:"boolean"}],h=new F("Accordion",W,f,N,P,L),$={title:"Ui/Accordion",component:c,parameters:{design:"d1",docs:{description:{component:h.getDescription()}}},argTypes:h.getWiki(),args:h.getValues()},r={render:i=>({components:{D1Accordion:c},setup:()=>({args:i}),template:`
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
    `})},d={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Accordion:c},setup(){return{open:g(!1)}},template:`
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
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const j=["Accordion","AccordionVModel","AccordionSlots"],te=Object.freeze(Object.defineProperty({__proto__:null,Accordion:r,AccordionSlots:p,AccordionVModel:d,__namedExportsOrder:j,default:$},Symbol.toStringTag,{value:"Module"}));export{te as A,r as a,h as b,d as c,p as d};
