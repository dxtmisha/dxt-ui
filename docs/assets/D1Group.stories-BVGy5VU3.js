import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Vt as n,_t as r,bt as i,kt as a,wt as o,xt as s,yt as c}from"./iframe-DZnBmjcm.js";import{a as l,d as u,g as d,l as f,n as p,t as m,u as h}from"./wiki-CxP3o-n8.js";import{n as g,t as _}from"./Icon-BkuYCQtt.js";import{n as v,r as y,t as b}from"./BlockDesign-C6w_RCLR-D2Fdx075.js";var x,S,C,w=e((()=>{v(),x=class extends y{},S={tag:`div`,tagHeader:`h4`},C=class extends b{constructor(e,t,n,r=x){super(e,t,n,r)}}})),T,E=e((()=>{w(),T={...S}})),D=e((()=>{})),O,k=e((()=>{r(),w(),g(),E(),D(),O=s({name:`D1Group`,__name:`D1Group`,props:o({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},T),setup(e,{expose:t,emit:r}){let o=new C(`d1.group`,e,{emits:r,classes:c(()=>({main:{"d1-group":!0}})),styles:c(()=>({})),components:{icon:_}}),s=o.render();return t(o.expose()),(e,t)=>(a(),i(n(s)))}})})),A,j=e((()=>{k(),k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1Group`,exportName:`default`,displayName:`D1Group`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Group/D1Group.vue`]})})),M,N,P,F,I=e((()=>{h(),m(),E(),M=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],N=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,description:`Default slot/ Слот по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`},{name:`headline`,description:`Slot for headline/ Слот для заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`}],P=[],F={component:`Group`,props:M,slots:N,events:P,defaults:T,wikiDesign:p}})),L,R=e((()=>{h(),l(),I(),L=new u(F.component,F.props,F.defaults,F.wikiDesign,f,d)})),z=t({Group:()=>V,GroupBasic:()=>H,GroupSlots:()=>U,__namedExportsOrder:()=>W,default:()=>B}),B,V,H,U,W,G=e((()=>{j(),R(),B={title:`Ui/Group`,component:A,parameters:{design:`d1`,docs:{description:{component:L.getDescription()}}},argTypes:L.getWiki(),args:L.getValues()},V={render:e=>({components:{D1Group:A},setup:()=>({args:e}),template:`
      <D1Group v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </D1Group>
    `})},H={name:`Базовые`,render:()=>({components:{D1Group:A},template:`
        <D1Group
          headline="Notifications"
          label="Settings"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </D1Group>
    `})},U={name:`Использование слотов`,render:()=>({components:{D1Group:A},template:`
        <D1Group>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Group>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Group
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Group v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </D1Group>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Group
    },
    template: \`
        <D1Group
          headline="Notifications"
          label="Settings"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </D1Group>
    \`
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Group
    },
    template: \`
        <D1Group>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Group>
    \`
  })
}`,...U.parameters?.docs?.source}}},W=[`Group`,`GroupBasic`,`GroupSlots`]}));G();export{V as Group,H as GroupBasic,U as GroupSlots,W as __namedExportsOrder,B as default,R as i,G as n,L as r,z as t};