import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,l as r,m as i,n as a,r as o,t as s,u as c}from"./wiki-wIqBVsyI.js";import{n as l,t as u}from"./D1Skeleton-CTEnVdL2.js";import{i as d,n as f,r as p,t as m}from"./D1TableFlexItem-WyRG8byG.js";var h,g,_,v;function y(){return(y=e((()=>{s(),d(),h=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`alignVertical`,type:`string`,option:[`center`,`top`,`bottom`]},{name:`colspan`,type:`string | number`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`dividerX`,type:`boolean`},{name:`dividerY`,type:`boolean`},{name:`index`,type:`string | number`},{name:`isSkeleton`,type:`boolean`},{name:`keyItem`,type:`string`},{name:`label`,type:`NumberOrString`},{name:`labelClamp`,type:`boolean`},{name:`labelId`,type:`string`},{name:`rowspan`,type:`string | number`},{name:`selected`,type:`boolean`},{name:`stickyLeft`,type:`boolean`},{name:`stickyTop`,type:`boolean`},{name:`tag`,type:`string`},{name:`value`,type:`string`}],g=[{name:`context`,description:`Slot for custom cell context / Слот для пользовательского контекста ячейки`,properties:[{name:`props`,type:`(() => any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[],v={component:`TableFlexItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})))()}var b;function x(){return(x=e((()=>{n(),r(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,o,i)})))()}var S=t({TableFlexItem:()=>w,TableFlexItemSkeleton:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E;function D(){return(D=e((()=>{f(),x(),l(),C={title:`Ui/TableFlexItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1TableFlexItem:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-flex">
      <D1TableFlexItem v-bind="args"/>
      <D1TableFlexItem v-bind="args"/>
      <D1TableFlexItem v-bind="args"/>
    </div>
    `})},T={name:`Загрузка скелетона`,render:()=>({components:{D1TableFlexItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1TableFlexItem
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <D1TableFlexItem
              :isSkeleton="true"
              label="Label"
              description="Description"
            />
          </div>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1TableFlexItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-flex">
      <D1TableFlexItem v-bind="args"/>
      <D1TableFlexItem v-bind="args"/>
      <D1TableFlexItem v-bind="args"/>
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1TableFlexItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1TableFlexItem
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <D1TableFlexItem
              :isSkeleton="true"
              label="Label"
              description="Description"
            />
          </div>
        </D1Skeleton>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`TableFlexItem`,`TableFlexItemSkeleton`]})))()}export{b as a,D as i,w as n,x as o,T as r,S as t};