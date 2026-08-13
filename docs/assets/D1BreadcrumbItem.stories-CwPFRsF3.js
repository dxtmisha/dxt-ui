import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,l as r,m as i,n as a,r as o,t as s,u as c}from"./wiki-wIqBVsyI.js";import{n as l,t as u}from"./D1Skeleton-CTEnVdL2.js";import{i as d,n as f,r as p,t as m}from"./D1BreadcrumbItem-BkOebD0H.js";var h,g,_,v;function y(){return(y=e((()=>{s(),d(),h=[{name:`back`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconArrowLeft`,type:`string`},{name:`iconArrowRight`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`BreadcrumbItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})))()}var b;function x(){return(x=e((()=>{n(),r(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,o,i)})))()}var S=t({BreadcrumbItem:()=>w,BreadcrumbItemSkeleton:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E;function D(){return(D=e((()=>{f(),x(),l(),C={title:`Ui/BreadcrumbItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Скелетон`,render:()=>({components:{D1BreadcrumbItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <D1BreadcrumbItem isSkeleton label="Breadcrumb item" />
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1BreadcrumbItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1BreadcrumbItem isSkeleton label="Breadcrumb item" />
        </D1Skeleton>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`BreadcrumbItem`,`BreadcrumbItemSkeleton`]})))()}export{b as a,D as i,T as n,x as o,S as r,w as t};