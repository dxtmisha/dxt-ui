import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{n as l,t as u}from"./D1Skeleton-CXvijoBv.js";import{i as d,n as f,r as p,t as m}from"./D1TabItem-Y5Tr1GE1.js";var h,g,_=e((()=>{c(),s(),d(),h=[{name:`adaptive`,type:`string`,option:[`iconAlways`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`badge`,type:`string | number | ConstrBind<Badge>`},{name:`badgeDot`,type:`boolean`},{name:`container`,type:`string`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`index`,type:`any`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`,option:[`button`,`a`,`span`,`li`,`div`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],g={component:`TabItem`,props:h,defaults:p,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,i,a)})),b=t({TabItem:()=>S,TabItemBasic:()=>C,TabItemSkeleton:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T,E=e((()=>{f(),y(),l(),x={title:`Ui/TabItem`,component:m,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1TabItem:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-flex">
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
    </div>
    `})},C={name:`Базовое использование`,render:()=>({components:{D1TabItem:m},template:`
        <div class="wiki-storybook-flex-column">
            <D1TabItem label="Tab Item" />
            <D1TabItem label="Tab Item" icon="home" />
            <D1TabItem label="Messages" badge="5" />
            <D1TabItem label="Updates" badge-dot />
            <D1TabItem label="Selected Tab" selected />
            <D1TabItem label="Disabled Tab" disabled />
        </div>
    `})},w={name:`Скелетон`,render:()=>({components:{D1TabItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <D1TabItem isSkeleton>Tab item</D1TabItem>
        </D1Skeleton>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`TabItem`,`TabItemBasic`,`TabItemSkeleton`]}));E();export{S as TabItem,C as TabItemBasic,w as TabItemSkeleton,T as __namedExportsOrder,x as default,y as i,E as n,v as r,b as t};