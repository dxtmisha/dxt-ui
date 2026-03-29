import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-Dd40E_Te.js";import{n as l,t as u}from"./D1Skeleton-BY0eTLzu.js";import{i as d,n as f,r as p,t as m}from"./D1TabItem-sW6_dHpK.js";var h,g,_,v,y=e((()=>{c(),s(),d(),h=[{name:`adaptive`,type:`string`,option:[`iconAlways`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`badge`,type:`string | number | ConstrBind<Badge>`},{name:`badgeDot`,type:`boolean`},{name:`container`,type:`string`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`index`,type:`any`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`,option:[`button`,`a`,`span`,`li`,`div`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`TabItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})),b,x=e((()=>{c(),n(),y(),b=new r(v.component,v.props,v.defaults,v.wikiDesign,a,i)})),S=t({TabItem:()=>w,TabItemBasic:()=>T,TabItemSkeleton:()=>E,__namedExportsOrder:()=>D,default:()=>C}),C,w,T,E,D,O=e((()=>{f(),x(),l(),C={title:`Ui/TabItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1TabItem:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-flex">
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
    </div>
    `})},T={name:`Базовое использование`,render:()=>({components:{D1TabItem:m},template:`
        <div class="wiki-storybook-flex-column">
            <D1TabItem label="Tab Item" />
            <D1TabItem label="Tab Item" icon="home" />
            <D1TabItem label="Messages" badge="5" />
            <D1TabItem label="Updates" badge-dot />
            <D1TabItem label="Selected Tab" selected />
            <D1TabItem label="Disabled Tab" disabled />
        </div>
    `})},E={name:`Скелетон`,render:()=>({components:{D1TabItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <D1TabItem isSkeleton>Tab item</D1TabItem>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`TabItem`,`TabItemBasic`,`TabItemSkeleton`]}));O();export{w as TabItem,T as TabItemBasic,E as TabItemSkeleton,D as __namedExportsOrder,C as default,x as i,O as n,b as r,S as t};