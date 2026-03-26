import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1Cell-DE_7VXgl.js";import{n as p,t as m}from"./D1Skeleton-CXvijoBv.js";var h,g,_=e((()=>{c(),s(),l(),h=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`dividerLabel`,type:`string`,option:[`always`,`none`,`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`,`containerSm`,`containerMd`,`containerLg`,`containerXl`,`container2xl`]},{name:`dynamic`,type:`boolean`},{name:`dynamicHover`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTop`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`padding`,type:`string`,option:[`none`,`sm`,`md`,`lg`,`ySm`,`yMd`,`yLg`]},{name:`paddingByIndent`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],g={component:`Cell`,props:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,i,a)})),b=t({Cell:()=>S,CellSkeleton:()=>C,CellSlots:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T,E=e((()=>{u(),y(),p(),x={title:`Ui/Cell`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Cell:f},setup:()=>({args:e}),template:`
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    `})},C={name:`Загрузка скелетона`,render:()=>({components:{D1Cell:f,D1Skeleton:m},template:`
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
    `})},w={name:`Использование слотов`,render:()=>({components:{D1Cell:f},template:`
        <D1Cell icon="home">
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </D1Cell>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Cell`,`CellSkeleton`,`CellSlots`]}));E();export{S as Cell,C as CellSkeleton,w as CellSlots,T as __namedExportsOrder,x as default,y as i,E as n,v as r,b as t};