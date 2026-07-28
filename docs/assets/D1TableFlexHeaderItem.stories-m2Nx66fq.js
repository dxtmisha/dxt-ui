import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-CUC2UhNU.js";import{n as l,t as u}from"./D1Skeleton-atWhpGi3.js";import{i as d,n as f,r as p,t as m}from"./D1TableFlexHeaderItem-k6s_373v.js";var h,g,_,v,y=t((()=>{s(),d(),h=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`alignVertical`,type:`string`,option:[`center`,`top`,`bottom`]},{name:`chipAttrs`,type:`ConstrBind<ChipProps>`},{name:`colspan`,type:`string | number`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`dividerX`,type:`boolean`},{name:`dividerY`,type:`boolean`},{name:`iconArrowDown`,type:`string | ConstrBind<IconProps>`},{name:`iconArrowUp`,type:`string | ConstrBind<IconProps>`},{name:`iconSort`,type:`string | ConstrBind<IconProps>`},{name:`iconTooltip`,type:`string | ConstrBind<IconProps>`},{name:`index`,type:`string | number`},{name:`isSkeleton`,type:`boolean`},{name:`keyItem`,type:`string`},{name:`label`,type:`NumberOrString`},{name:`labelClamp`,type:`boolean`},{name:`labelId`,type:`string`},{name:`rowspan`,type:`string | number`},{name:`scope`,type:`string`,option:[`row`,`col`,`rowgroup`,`colgroup`]},{name:`selected`,type:`boolean`},{name:`showSort`,type:`boolean`},{name:`sortColumn`,type:`string | number`},{name:`sortDir`,type:`string`,option:[`asc`,`desc`]},{name:`stickyLeft`,type:`boolean`},{name:`stickyTop`,type:`boolean`},{name:`tag`,type:`string`},{name:`tooltipAttrs`,type:`ConstrBind<TooltipProps>`},{name:`tooltipDescription`,type:`string`},{name:`tooltipLabel`,type:`string`},{name:`value`,type:`string`}],g=[{name:`context`,description:`Slot for custom cell context / Слот для пользовательского контекста ячейки`,properties:[{name:`props`,type:`(() => any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`tooltip`,description:`Slot for displaying custom tooltip body / Слот для отображения пользовательского содержимого подсказки`,properties:[{name:`props`,type:`(() => any) | undefined`}]}],_=[{name:`sort`,description:`Event triggered when sort button is clicked / Событие, вызываемое при клике по кнопке сортировки`,properties:[{name:`item`,type:`SortColumnItem`}]}],v={component:`TableFlexHeaderItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})),b,x=t((()=>{r(),i(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,n,a)})),S=e({TableFlexHeaderItem:()=>w,TableFlexHeaderItemSkeleton:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E,D=t((()=>{f(),x(),l(),C={title:`Ui/TableFlexHeaderItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1TableFlexHeaderItem:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-flex">
      <D1TableFlexHeaderItem v-bind="args"/>
      <D1TableFlexHeaderItem v-bind="args"/>
      <D1TableFlexHeaderItem v-bind="args"/>
    </div>
    `})},T={name:`Загрузка скелетона`,render:()=>({components:{D1TableFlexHeaderItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1TableFlexHeaderItem
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <D1TableFlexHeaderItem
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
      D1TableFlexHeaderItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-flex">
      <D1TableFlexHeaderItem v-bind="args"/>
      <D1TableFlexHeaderItem v-bind="args"/>
      <D1TableFlexHeaderItem v-bind="args"/>
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1TableFlexHeaderItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1TableFlexHeaderItem
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <D1TableFlexHeaderItem
              :isSkeleton="true"
              label="Label"
              description="Description"
            />
          </div>
        </D1Skeleton>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`TableFlexHeaderItem`,`TableFlexHeaderItemSkeleton`]}));D();export{w as TableFlexHeaderItem,T as TableFlexHeaderItemSkeleton,E as __namedExportsOrder,C as default,x as i,D as n,b as r,S as t};