import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Vt as n,_t as r,bt as i,kt as a,u as o,wt as s,xt as c,yt as l}from"./iframe-I1fckF_t.js";import{a as u,d,g as f,l as p,n as m,t as h,u as g}from"./wiki-CMC-2lzg.js";import{n as _,t as v}from"./Icon-ClTi_ZVe.js";import{i as y,n as b,t as x}from"./BlockDesign-C6w_RCLR-D1hcCMYr.js";var S=e((()=>{b()})),C,w=e((()=>{S(),C={...y}})),T=e((()=>{})),E,D=e((()=>{r(),o(),S(),_(),w(),T(),E=c({name:`D1Block`,__name:`D1Block`,props:s({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},C),setup(e,{expose:t,emit:r}){let o=new x(`d1.block`,e,{emits:r,classes:l(()=>({main:{"d1-block":!0}})),styles:l(()=>({})),components:{icon:v}}),s=o.render();return t(o.expose()),(e,t)=>(a(),i(n(s)))}})})),O,k=e((()=>{D(),D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1Block`,exportName:`default`,displayName:`D1Block`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Block/D1Block.vue`]})})),A,j,M,N,P=e((()=>{g(),h(),w(),A=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],j=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,description:`Default slot/ Слот по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`},{name:`headline`,description:`Slot for headline/ Слот для заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`}],M=[],N={component:`Block`,props:A,slots:j,events:M,defaults:C,wikiDesign:m}})),F,I=e((()=>{g(),u(),P(),F=new d(N.component,N.props,N.defaults,N.wikiDesign,p,f)})),L=t({Block:()=>z,BlockBasic:()=>B,BlockSlots:()=>V,__namedExportsOrder:()=>H,default:()=>R}),R,z,B,V,H,U=e((()=>{k(),I(),R={title:`Ui/Block`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1Block:O},setup:()=>({args:e}),template:`
      <D1Block v-bind="args">
        <p>
          The Block component serves as a fundamental building unit for constructing complex user interfaces.
          It provides a flexible container that can host various content elements such as labels, descriptions, and icons.
        </p>
        <p>
          With its versatile design, the Block component adapts seamlessly to different layout requirements.
          Whether you need a simple content wrapper or a detailed card with a headline and caption, this component handles it all.
        </p>
        <p>
          Developers can easily customize the appearance and behavior of the Block using properties and slots.
          This ensures that the component fits perfectly into any design system while maintaining consistency across the application.
        </p>
      </D1Block>
    `})},B={name:`Базовые`,render:()=>({components:{D1Block:O},template:`
        <div class="wiki-storybook-flex-column">
          <D1Block>
            Simple content wrapper
          </D1Block>
          <D1Block label="User Profile" description="Manage your personal information">
            <button class="wiki-storybook-button">Edit Profile</button>
          </D1Block>
          <D1Block headline="Notifications" label="Settings">
            <label><input type="checkbox" checked> Email Notifications</label>
          </D1Block>
          <D1Block icon="home" label="Dashboard">
            <p>Welcome to your dashboard overview.</p>
          </D1Block>
        </div>
    `})},V={name:`Использование слотов`,render:()=>({components:{D1Block:O},template:`
        <D1Block>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Block>
    `})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Block
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Block v-bind="args">
        <p>
          The Block component serves as a fundamental building unit for constructing complex user interfaces.
          It provides a flexible container that can host various content elements such as labels, descriptions, and icons.
        </p>
        <p>
          With its versatile design, the Block component adapts seamlessly to different layout requirements.
          Whether you need a simple content wrapper or a detailed card with a headline and caption, this component handles it all.
        </p>
        <p>
          Developers can easily customize the appearance and behavior of the Block using properties and slots.
          This ensures that the component fits perfectly into any design system while maintaining consistency across the application.
        </p>
      </D1Block>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Block
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Block>
            Simple content wrapper
          </D1Block>
          <D1Block label="User Profile" description="Manage your personal information">
            <button class="wiki-storybook-button">Edit Profile</button>
          </D1Block>
          <D1Block headline="Notifications" label="Settings">
            <label><input type="checkbox" checked> Email Notifications</label>
          </D1Block>
          <D1Block icon="home" label="Dashboard">
            <p>Welcome to your dashboard overview.</p>
          </D1Block>
        </div>
    \`
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Block
    },
    template: \`
        <D1Block>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Block>
    \`
  })
}`,...V.parameters?.docs?.source}}},H=[`Block`,`BlockBasic`,`BlockSlots`]}));U();export{z as Block,B as BlockBasic,V as BlockSlots,H as __namedExportsOrder,R as default,I as i,U as n,F as r,L as t};