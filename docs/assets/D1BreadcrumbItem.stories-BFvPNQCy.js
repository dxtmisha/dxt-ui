import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{n as l,t as u}from"./D1Skeleton-CxiItvxF.js";import{i as d,n as f,r as p,t as m}from"./D1BreadcrumbItem-CZEOmkR0.js";var h,g,_,v,y=t((()=>{s(),d(),h=[{name:`back`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconArrowLeft`,type:`string`},{name:`iconArrowRight`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`BreadcrumbItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:i}})),b,x=t((()=>{n(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,a,r)})),S=e({BreadcrumbItem:()=>w,BreadcrumbItemSkeleton:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E,D=t((()=>{f(),x(),l(),C={title:`Ui/BreadcrumbItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Скелетон`,render:()=>({components:{D1BreadcrumbItem:m,D1Skeleton:u},template:`
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
}`,...T.parameters?.docs?.source}}},E=[`BreadcrumbItem`,`BreadcrumbItemSkeleton`]}));D();export{w as BreadcrumbItem,T as BreadcrumbItemSkeleton,E as __namedExportsOrder,C as default,x as i,D as n,b as r,S as t};