import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,l as r,m as i,n as a,r as o,t as s,u as c}from"./wiki-wIqBVsyI.js";import{n as l,t as u}from"./D1Skeleton-CTEnVdL2.js";import{i as d,n as f,r as p,t as m}from"./D1SegmentControlItem-D6lFRQLi.js";var h,g,_,v;function y(){return(y=e((()=>{s(),d(),h=[{name:`adaptive`,type:`string`,option:[`iconAlways`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`container`,type:`string`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`index`,type:`any`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`open`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`,option:[`button`,`a`,`span`,`li`,`div`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`SegmentControlItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})))()}var b;function x(){return(x=e((()=>{n(),r(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,o,i)})))()}var S=t({SegmentControlItem:()=>w,SegmentControlItemSkeleton:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E;function D(){return(D=e((()=>{f(),x(),l(),C={title:`Ui/SegmentControlItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1SegmentControlItem:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-flex">
      <D1SegmentControlItem v-bind="args" />
      <D1SegmentControlItem v-bind="args" />
      <D1SegmentControlItem v-bind="args" />
    </div>
    `})},T={name:`Скелетон`,render:()=>({components:{D1SegmentControlItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <D1SegmentControlItem isSkeleton>Segment control item</D1SegmentControlItem>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1SegmentControlItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-flex">
      <D1SegmentControlItem v-bind="args" />
      <D1SegmentControlItem v-bind="args" />
      <D1SegmentControlItem v-bind="args" />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1SegmentControlItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1SegmentControlItem isSkeleton>Segment control item</D1SegmentControlItem>
        </D1Skeleton>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`SegmentControlItem`,`SegmentControlItemSkeleton`]})))()}export{b as a,D as i,w as n,x as o,T as r,S as t};