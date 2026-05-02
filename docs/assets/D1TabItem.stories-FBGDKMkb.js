import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-Ck-JDNL8.js";import{n as l,t as u}from"./D1Skeleton-YL0_DuxC.js";import{i as d,n as f,r as p,t as m}from"./D1TabItem-DLN27Mkv.js";var h,g,_,v,y=e((()=>{s(),d(),h=[{name:`adaptive`,type:`string | undefined`,option:[`iconAlways`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`badge`,type:`string | number | ConstrBind<BadgeProps> | undefined`},{name:`badgeDot`,type:`boolean | undefined`},{name:`container`,type:`string | undefined`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any> | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`focus`,type:`boolean | undefined`},{name:`href`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`index`,type:`any`},{name:`isSkeleton`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`open`,type:`boolean | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`role`,type:`string | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`tag`,type:`string | undefined`,option:[`button`,`a`,`span`,`li`,`div`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined`},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`TabItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})),b,x=e((()=>{r(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,n,i)})),S=t({TabItem:()=>w,TabItemSkeleton:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E,D=e((()=>{f(),x(),l(),C={title:`Ui/TabItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1TabItem:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-flex">
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
    </div>
    `})},T={name:`Скелетон`,render:()=>({components:{D1TabItem:m,D1Skeleton:u},template:`
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
}`,...T.parameters?.docs?.source}}},E=[`TabItem`,`TabItemSkeleton`]}));D();export{w as TabItem,T as TabItemSkeleton,E as __namedExportsOrder,C as default,x as i,D as n,b as r,S as t};