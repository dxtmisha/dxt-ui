import{d as m,_ as e}from"./D1ListItem-BRKN6cb0.js";import{W as l,w as p,a as c,b as g}from"./wiki-b8Pce8s9.js";import"./iframe-CpPdPYqc.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as I}from"./D1Skeleton-Dvv1lbQv.js";const h=[{name:"badge",type:"string | number | ConstrBind<BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>>"},{name:"badgeDot",type:"boolean"},{name:"caption",type:"string | number"},{name:"description",type:"string | number"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"divider",type:"boolean"},{name:"fill",type:"string",option:["custom"]},{name:"focus",type:"boolean"},{name:"highlight",type:"string"},{name:"highlightLengthStart",type:"number"},{name:"icon",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconAlign",type:"string",option:["center","edge"]},{name:"iconAttrs",type:"ConstrBind<IconPropsBasic<ImagePropsBasic>>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTop",type:"boolean"},{name:"iconTrailing",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"index",type:"any"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"listId",type:"number"},{name:"loading",type:"boolean | ConstrBind<ProgressPropsBasic>"},{name:"open",type:"boolean"},{name:"palette",type:"string",option:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone","black","white"]},{name:"parent",type:"string"},{name:"prefix",type:"string | number"},{name:"readonly",type:"boolean"},{name:"search",type:"string"},{name:"selected",type:"boolean"},{name:"selectedChild",type:"boolean"},{name:"size",type:"string",option:["sm","md","lg"]},{name:"suffix",type:"string | number"},{name:"tag",type:"string",option:["button","a","span","div"]},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"type",type:"string"},{name:"value",type:"any"}],a=new l("ListItem",h,m,p,c,g),d={title:"Ui/ListItem",component:e,parameters:{design:"d1",docs:{description:{component:a.getDescription()}}},argTypes:a.getWiki(),args:a.getValues()},t={render:r=>({components:{D1ListItem:e},setup:()=>({args:r}),template:`
      <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    `})},n={name:"Базовые",render:()=>({components:{D1ListItem:e},template:`
        <D1ListItem>Simple Item</D1ListItem>
        <D1ListItem icon="person">Item with Icon</D1ListItem>
        <D1ListItem description="Additional information">Item with Description</D1ListItem>
        <D1ListItem focus>Focus</D1ListItem>
        <D1ListItem selected>Selected</D1ListItem>
        <D1ListItem disabled>Disabled</D1ListItem>
        <D1ListItem readonly>Readonly</D1ListItem>
        <D1ListItem prefix="01" suffix="Info">With Prefix & Suffix</D1ListItem>
        <D1ListItem caption="Caption" description="Description text here">Full Content</D1ListItem>
        <D1ListItem icon="star" badge="new">Icon with Badge</D1ListItem>
    `})},i={name:"Выделение",render:()=>({components:{D1ListItem:e},template:`
        <D1ListItem highlight="search" label="Search result item"/>
        <D1ListItem highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
        <D1ListItem highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
        <D1ListItem highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
    `})},s={name:"Заливка",render:()=>({components:{D1ListItem:e},template:`
        <D1ListItem label="Default fill"/>
        <D1ListItem fill="#ff0000" label="Red fill"/>
        <D1ListItem fill="rgb(0, 128, 255)" label="Blue fill"/>
        <D1ListItem fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
    `})},o={name:"Загрузка скелетона",render:()=>({components:{D1ListItem:e,D1Skeleton:I},template:`
        <D1Skeleton :active="true">
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</D1ListItem>
        </D1Skeleton>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1ListItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1ListItem
    },
    template: \`
        <D1ListItem>Simple Item</D1ListItem>
        <D1ListItem icon="person">Item with Icon</D1ListItem>
        <D1ListItem description="Additional information">Item with Description</D1ListItem>
        <D1ListItem focus>Focus</D1ListItem>
        <D1ListItem selected>Selected</D1ListItem>
        <D1ListItem disabled>Disabled</D1ListItem>
        <D1ListItem readonly>Readonly</D1ListItem>
        <D1ListItem prefix="01" suffix="Info">With Prefix & Suffix</D1ListItem>
        <D1ListItem caption="Caption" description="Description text here">Full Content</D1ListItem>
        <D1ListItem icon="star" badge="new">Icon with Badge</D1ListItem>
    \`
  })
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Выделение',
  render: () => ({
    components: {
      D1ListItem
    },
    template: \`
        <D1ListItem highlight="search" label="Search result item"/>
        <D1ListItem highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
        <D1ListItem highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
        <D1ListItem highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
    \`
  })
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Заливка',
  render: () => ({
    components: {
      D1ListItem
    },
    template: \`
        <D1ListItem label="Default fill"/>
        <D1ListItem fill="#ff0000" label="Red fill"/>
        <D1ListItem fill="rgb(0, 128, 255)" label="Blue fill"/>
        <D1ListItem fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
    \`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1ListItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</D1ListItem>
        </D1Skeleton>
    \`
  })
}`,...o.parameters?.docs?.source}}};const L=["ListItem","ListItemBasic","ListItemHighlight","ListItemFill","ListItemSkeleton"],S=Object.freeze(Object.defineProperty({__proto__:null,ListItem:t,ListItemBasic:n,ListItemFill:s,ListItemHighlight:i,ListItemSkeleton:o,__namedExportsOrder:L,default:d},Symbol.toStringTag,{value:"Module"}));export{S as L,t as a,a as b,n as c,i as d,s as e,o as f};
