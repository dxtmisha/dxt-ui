import{d as m,_ as o}from"./D1TabItem-GKQYzDke.js";import{w as i,W as r,a as b,b as c}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";import{_ as p}from"./D1Skeleton-DmRdoI9z.js";const d=[{name:"adaptive",type:"string",option:["iconAlways","auto","iconSm","iconMd","iconLg","iconXl","icon2xl","fullSm","fullMd","fullLg","fullXl","full2xl"]},{name:"badge",type:"string | number | ConstrBind<Badge>"},{name:"badgeDot",type:"boolean"},{name:"container",type:"string",option:["iconSm","iconMd","iconLg","iconXl","icon2xl","fullSm","fullMd","fullLg","fullXl","full2xl"]},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"focus",type:"boolean"},{name:"href",type:"string"},{name:"icon",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"index",type:"any"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"open",type:"boolean"},{name:"readonly",type:"boolean"},{name:"role",type:"string"},{name:"selected",type:"boolean"},{name:"tag",type:"string",option:["button","a","span","li","div"]},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"value",type:"EventClickValue['value']"}],t={component:"TabItem",props:d,defaults:m,wikiDesign:i},s=new r(t.component,t.props,t.defaults,t.wikiDesign,b,c),T={title:"Ui/TabItem",component:o,parameters:{design:"d1",docs:{description:{component:s.getDescription()}}},argTypes:s.getWiki(),args:s.getValues()},e={render:l=>({components:{D1TabItem:o},setup:()=>({args:l}),template:`
      <div class="wiki-storybook-flex">
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
    </div>
    `})},a={name:"Базовое использование",render:()=>({components:{D1TabItem:o},template:`
        <div class="wiki-storybook-flex-column">
            <D1TabItem label="Tab Item" />
            <D1TabItem label="Tab Item" icon="home" />
            <D1TabItem label="Messages" badge="5" />
            <D1TabItem label="Updates" badge-dot />
            <D1TabItem label="Selected Tab" selected />
            <D1TabItem label="Disabled Tab" disabled />
        </div>
    `})},n={name:"Скелетон",render:()=>({components:{D1TabItem:o,D1Skeleton:p},template:`
        <D1Skeleton :active="true">
          <D1TabItem isSkeleton>Tab item</D1TabItem>
        </D1Skeleton>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1TabItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-flex">
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1TabItem
    },
    template: \`
        <div class="wiki-storybook-flex-column">
            <D1TabItem label="Tab Item" />
            <D1TabItem label="Tab Item" icon="home" />
            <D1TabItem label="Messages" badge="5" />
            <D1TabItem label="Updates" badge-dot />
            <D1TabItem label="Selected Tab" selected />
            <D1TabItem label="Disabled Tab" disabled />
        </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1TabItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1TabItem isSkeleton>Tab item</D1TabItem>
        </D1Skeleton>
    \`
  })
}`,...n.parameters?.docs?.source}}};const I=["TabItem","TabItemBasic","TabItemSkeleton"],S=Object.freeze(Object.defineProperty({__proto__:null,TabItem:e,TabItemBasic:a,TabItemSkeleton:n,__namedExportsOrder:I,default:T},Symbol.toStringTag,{value:"Module"}));export{S as T,e as a,s as b,a as c,n as d};
