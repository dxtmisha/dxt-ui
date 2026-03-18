import{d as r,_ as a}from"./D1Cell-BIXJFnHc.js";import{w as s,W as p,a as m,b as c}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";import{_ as d}from"./D1Skeleton-DmRdoI9z.js";const y=[{name:"caption",type:"string | number"},{name:"captionDecorative",type:"boolean"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"divider",type:"boolean"},{name:"dividerLabel",type:"string",option:["always","none","adaptiveSm","adaptiveMd","adaptiveLg","adaptiveXl","adaptive2xl","containerSm","containerMd","containerLg","containerXl","container2xl"]},{name:"dynamic",type:"boolean"},{name:"dynamicHover",type:"boolean"},{name:"focus",type:"boolean"},{name:"href",type:"string"},{name:"icon",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTop",type:"boolean"},{name:"iconTrailing",type:"IconValue<Icon>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"loading",type:"boolean | ConstrBind<Progress>"},{name:"padding",type:"string",option:["none","sm","md","lg","ySm","yMd","yLg"]},{name:"paddingByIndent",type:"boolean"},{name:"readonly",type:"boolean"},{name:"role",type:"string"},{name:"selected",type:"boolean"},{name:"tag",type:"string"},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"value",type:"EventClickValue['value']"}],o={component:"Cell",props:y,defaults:r,wikiDesign:s},l=new p(o.component,o.props,o.defaults,o.wikiDesign,m,c),g={title:"Ui/Cell",component:a,parameters:{design:"d1",docs:{description:{component:l.getDescription()}}},argTypes:l.getWiki(),args:l.getValues()},e={render:i=>({components:{D1Cell:a},setup:()=>({args:i}),template:`
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    `})},n={name:"Загрузка скелетона",render:()=>({components:{D1Cell:a,D1Skeleton:d},template:`
        <D1Skeleton :active="true">
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
            label="A"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the cell."
            label="Very Long Label Example for Skeleton"
          />
        </D1Skeleton>
    `})},t={name:"Использование слотов",render:()=>({components:{D1Cell:a},template:`
        <D1Cell icon="home">
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </D1Cell>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Cell
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1Cell,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
            label="A"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the cell."
            label="Very Long Label Example for Skeleton"
          />
        </D1Skeleton>
    \`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Cell
    },
    template: \`
        <D1Cell icon="home">
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </D1Cell>
    \`
  })
}`,...t.parameters?.docs?.source}}};const b=["Cell","CellSkeleton","CellSlots"],f=Object.freeze(Object.defineProperty({__proto__:null,Cell:e,CellSkeleton:n,CellSlots:t,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{f as C,e as a,l as b,n as c,t as d};
