import{I as y,K as h,L as g,M as D,d as c,N as f}from"./iframe-B21bnPHY.js";import{T as v}from"./BlockDesign-DHCkcwP1-DmXCTJhG.js";import{D as w}from"./index-XKQBLxn2.js";import{w as S,W as _,a as x,b as T}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";const I={tag:"div",tagHeader:"h3"},r={...I},e=y({name:"D1Block",__name:"D1Block",props:D({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},r),setup(s,{expose:p,emit:m}){const d=m,k=s,u=c(()=>({main:{"d1-block":!0}})),b=c(()=>({})),l=new v("d1.block",k,{emits:d,classes:u,styles:b,components:{icon:w}}),B=l.render();return p(l.expose()),(P,C)=>(f(),h(g(B)))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{name:"D1Block",exportName:"default",displayName:"D1Block",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Block/D1Block.vue"]});const W=[{name:"caption",type:"string | number"},{name:"captionDecorative",type:"boolean"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"headline",type:"string"},{name:"icon",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"selected",type:"boolean"},{name:"tag",type:"string"},{name:"tagHeader",type:"string"}],a={component:"Block",props:W,defaults:r,wikiDesign:S},i=new _(a.component,a.props,a.defaults,a.wikiDesign,x,T),N={title:"Ui/Block",component:e,parameters:{design:"d1",docs:{description:{component:i.getDescription()}}},argTypes:i.getWiki(),args:i.getValues()},t={render:s=>({components:{D1Block:e},setup:()=>({args:s}),template:`
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
    `})},n={name:"Базовые",render:()=>({components:{D1Block:e},template:`
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
    `})},o={name:"Использование слотов",render:()=>({components:{D1Block:e},template:`
        <D1Block>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Block>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["Block","BlockBasic","BlockSlots"],z=Object.freeze(Object.defineProperty({__proto__:null,Block:t,BlockBasic:n,BlockSlots:o,__namedExportsOrder:H,default:N},Symbol.toStringTag,{value:"Module"}));export{z as B,t as a,i as b,n as c,o as d};
