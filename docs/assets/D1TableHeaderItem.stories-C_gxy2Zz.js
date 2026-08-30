import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,f as r,i,l as a,n as o,t as s,u as c}from"./wiki-BMj2WokS.js";import{n as l,t as u}from"./D1Skeleton-0ed2Yx2u.js";import{i as d,n as f,r as p,t as m}from"./D1TableHeaderItem-D2tNlnhX.js";var h,g,_,v;function y(){return(y=e((()=>{s(),d(),h=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`alignVertical`,type:`string`,option:[`center`,`top`,`bottom`]},{name:`chipAttrs`,type:`ConstrBind<ChipProps>`},{name:`colspan`,type:`string | number`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`dividerX`,type:`boolean`},{name:`dividerY`,type:`boolean`},{name:`iconArrowDown`,type:`string | ConstrBind<IconProps>`},{name:`iconArrowUp`,type:`string | ConstrBind<IconProps>`},{name:`iconSort`,type:`string | ConstrBind<IconProps>`},{name:`iconTooltip`,type:`string | ConstrBind<IconProps>`},{name:`index`,type:`string | number`},{name:`isSkeleton`,type:`boolean`},{name:`keyItem`,type:`string`},{name:`label`,type:`NumberOrString`},{name:`labelClamp`,type:`boolean`},{name:`labelId`,type:`string`},{name:`rowspan`,type:`string | number`},{name:`scope`,type:`string`,option:[`row`,`col`,`rowgroup`,`colgroup`]},{name:`selected`,type:`boolean`},{name:`showSort`,type:`boolean`},{name:`sortColumn`,type:`string | number`},{name:`sortDir`,type:`string`,option:[`asc`,`desc`]},{name:`stickyLeft`,type:`boolean`},{name:`stickyTop`,type:`boolean`},{name:`tag`,type:`string`},{name:`tooltipAttrs`,type:`ConstrBind<TooltipProps>`},{name:`tooltipDescription`,type:`string`},{name:`tooltipLabel`,type:`string`},{name:`value`,type:`string`}],g=[{name:`context`,description:`Slot for custom cell context / Слот для пользовательского контекста ячейки`,properties:[{name:`props`,type:`(() => any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`tooltip`,description:`Slot for displaying custom tooltip body / Слот для отображения пользовательского содержимого подсказки`,properties:[{name:`props`,type:`(() => any) | undefined`}]}],_=[{name:`sort`,description:`Event triggered when sort button is clicked / Событие, вызываемое при клике по кнопке сортировки`,properties:[{name:`item`,type:`SortColumnItem`}]}],v={component:`TableHeaderItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})))()}var b;function x(){return(x=e((()=>{n(),a(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,i,r)})))()}var S=t({TableHeaderItem:()=>w,TableHeaderItemSkeleton:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E;function D(){return(D=e((()=>{f(),x(),l(),C={title:`Ui/TableHeaderItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={args:{showSort:!0,sortColumn:`123`,index:123},render:e=>({components:{D1TableHeaderItem:m},setup:()=>({args:e}),template:`
      <table>
      <thead>
        <tr>
          <D1TableHeaderItem v-bind="args"/>
          <D1TableHeaderItem v-bind="args"/>
          <D1TableHeaderItem v-bind="args"/>
        </tr>
      </thead>
    </table>
    `})},T={name:`Загрузка скелетона`,render:()=>({components:{D1TableHeaderItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <table>
            <thead>
              <tr>
                <D1TableHeaderItem
                  :isSkeleton="true"
                  value="Value"
                />
                <D1TableHeaderItem
                  :isSkeleton="true"
                  label="Label"
                  description="Description"
                />
              </tr>
            </thead>
          </table>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    showSort: true,
    sortColumn: '123',
    index: 123
  },
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1TableHeaderItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <table>
      <thead>
        <tr>
          <D1TableHeaderItem v-bind="args"/>
          <D1TableHeaderItem v-bind="args"/>
          <D1TableHeaderItem v-bind="args"/>
        </tr>
      </thead>
    </table>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1TableHeaderItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <table>
            <thead>
              <tr>
                <D1TableHeaderItem
                  :isSkeleton="true"
                  value="Value"
                />
                <D1TableHeaderItem
                  :isSkeleton="true"
                  label="Label"
                  description="Description"
                />
              </tr>
            </thead>
          </table>
        </D1Skeleton>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`TableHeaderItem`,`TableHeaderItemSkeleton`]})))()}export{b as a,D as i,w as n,x as o,T as r,S as t};