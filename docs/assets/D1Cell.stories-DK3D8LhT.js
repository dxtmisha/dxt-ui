import{d as i,_ as o}from"./D1Cell-B2ss2wLg.js";import{W as r,w as s,a as p,b as m}from"./wiki-NZJqstoo.js";import"./iframe-CFZkzvey.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as c}from"./D1Skeleton-B_fEz_b_.js";const d=[{name:"caption",type:"string | number"},{name:"description",type:"string | number"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"divider",type:"boolean"},{name:"dividerLabel",type:"string",option:["always","none","adaptiveSm","adaptiveMd","adaptiveLg","adaptiveXl","adaptive2xl","containerSm","containerMd","containerLg","containerXl","container2xl"]},{name:"dynamic",type:"boolean"},{name:"dynamicHover",type:"boolean"},{name:"focus",type:"boolean"},{name:"icon",type:"IconValue<IconProps>"},{name:"iconAttrs",type:"ConstrBind<IconProps>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTop",type:"boolean"},{name:"iconTrailing",type:"IconValue<IconProps>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"loading",type:"boolean | ConstrBind<ProgressProps>"},{name:"padding",type:"string",option:["none","sm","md","lg","ySm","yMd","yLg"]},{name:"paddingByIndent",type:"boolean"},{name:"readonly",type:"boolean"},{name:"selected",type:"boolean"},{name:"tag",type:"string"},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"value",type:"EventClickValue['value']"}],a=new r("Cell",d,i,s,p,m),y={title:"Ui/Cell",component:o,parameters:{design:"d1",docs:{description:{component:a.getDescription()}}},argTypes:a.getWiki(),args:a.getValues()},e={render:l=>({components:{D1Cell:o},setup:()=>({args:l}),template:`
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    `})},n={name:"Загрузка скелетона",render:()=>({components:{D1Cell:o,D1Skeleton:c},template:`
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
    `})},t={name:"Использование слотов",render:()=>({components:{D1Cell:o},template:`
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
}`,...t.parameters?.docs?.source}}};const b=["Cell","CellSkeleton","CellSlots"],k=Object.freeze(Object.defineProperty({__proto__:null,Cell:e,CellSkeleton:n,CellSlots:t,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{k as C,e as a,a as b,n as c,t as d};
