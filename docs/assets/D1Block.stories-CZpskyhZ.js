import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,Ot as i,bt as a,gt as o,u as s,vt as c,yt as l}from"./iframe-InwAcaLb.js";import{a as u,d,l as f,m as p,n as m,t as h,u as g}from"./wiki-DiKtF90Q.js";import{n as _,t as v}from"./Icon-Bi9xfi8S.js";import{n as y,t as b}from"./BlockDesign-DHCkcwP1-DfVnVrYF.js";var x,S=e((()=>{y(),x={tag:`div`,tagHeader:`h3`}})),C,w=e((()=>{S(),C={...x}})),T=e((()=>{})),E,D=e((()=>{o(),s(),S(),_(),w(),T(),E=a({name:`D1Block`,__name:`D1Block`,props:r({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},C),setup(e,{expose:t,emit:r}){let a=new b(`d1.block`,e,{emits:r,classes:c(()=>({main:{"d1-block":!0}})),styles:c(()=>({})),components:{icon:v}}),o=a.render();return t(a.expose()),(e,t)=>(i(),l(n(o)))}})})),O,k=e((()=>{D(),D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1Block`,exportName:`default`,displayName:`D1Block`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Block/D1Block.vue`]})})),A,j,M=e((()=>{g(),h(),w(),A=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],j={component:`Block`,props:A,defaults:C,wikiDesign:m}})),N,P=e((()=>{g(),u(),M(),N=new d(j.component,j.props,j.defaults,j.wikiDesign,f,p)})),F=t({Block:()=>L,BlockBasic:()=>R,BlockSlots:()=>z,__namedExportsOrder:()=>B,default:()=>I}),I,L,R,z,B,V=e((()=>{k(),P(),I={title:`Ui/Block`,component:O,parameters:{design:`d1`,docs:{description:{component:N.getDescription()}}},argTypes:N.getWiki(),args:N.getValues()},L={render:e=>({components:{D1Block:O},setup:()=>({args:e}),template:`
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
    `})},R={name:`Базовые`,render:()=>({components:{D1Block:O},template:`
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
    `})},z={name:`Использование слотов`,render:()=>({components:{D1Block:O},template:`
        <D1Block>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Block>
    `})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Block`,`BlockBasic`,`BlockSlots`]}));V();export{L as Block,R as BlockBasic,z as BlockSlots,B as __namedExportsOrder,I as default,P as i,V as n,N as r,F as t};