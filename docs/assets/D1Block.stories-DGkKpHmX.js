import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Vt as n,_t as r,bt as i,kt as a,wt as o,xt as s,yt as c}from"./iframe-DZnBmjcm.js";import{a as l,d as u,g as d,l as f,n as p,t as m,u as h}from"./wiki-CxP3o-n8.js";import{n as g,t as _}from"./Icon-BkuYCQtt.js";import{i as v,n as y,t as b}from"./BlockDesign-C6w_RCLR-D2Fdx075.js";var x=e((()=>{y()})),S,C=e((()=>{x(),S={...v}})),w=e((()=>{})),T,E=e((()=>{r(),x(),g(),C(),w(),T=s({name:`D1Block`,__name:`D1Block`,props:o({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},S),setup(e,{expose:t,emit:r}){let o=new b(`d1.block`,e,{emits:r,classes:c(()=>({main:{"d1-block":!0}})),styles:c(()=>({})),components:{icon:_}}),s=o.render();return t(o.expose()),(e,t)=>(a(),i(n(s)))}})})),D,O=e((()=>{E(),E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{name:`D1Block`,exportName:`default`,displayName:`D1Block`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Block/D1Block.vue`]})})),k,A,j,M,N=e((()=>{h(),m(),C(),k=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],A=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,description:`Default slot/ Слот по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`},{name:`headline`,description:`Slot for headline/ Слот для заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`}],j=[],M={component:`Block`,props:k,slots:A,events:j,defaults:S,wikiDesign:p}})),P,F=e((()=>{h(),l(),N(),P=new u(M.component,M.props,M.defaults,M.wikiDesign,f,d)})),I=t({Block:()=>R,BlockBasic:()=>z,BlockSlots:()=>B,__namedExportsOrder:()=>V,default:()=>L}),L,R,z,B,V,H=e((()=>{O(),F(),L={title:`Ui/Block`,component:D,parameters:{design:`d1`,docs:{description:{component:P.getDescription()}}},argTypes:P.getWiki(),args:P.getValues()},R={render:e=>({components:{D1Block:D},setup:()=>({args:e}),template:`
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
    `})},z={name:`Базовые`,render:()=>({components:{D1Block:D},template:`
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
    `})},B={name:`Использование слотов`,render:()=>({components:{D1Block:D},template:`
        <D1Block>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Block>
    `})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Block`,`BlockBasic`,`BlockSlots`]}));H();export{R as Block,z as BlockBasic,B as BlockSlots,V as __namedExportsOrder,L as default,F as i,H as n,P as r,I as t};