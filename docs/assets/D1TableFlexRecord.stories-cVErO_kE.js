import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,l as r,m as i,n as a,r as o,t as s,u as c}from"./wiki-wIqBVsyI.js";import{n as l,t as u}from"./D1Skeleton-CTEnVdL2.js";import{i as d,n as f,r as p,t as m}from"./D1TableFlexRecord-CE7TxbAF.js";var h,g,_,v;function y(){return(y=e((()=>{s(),d(),h=[{name:`columns`,type:`string[]`},{name:`defaultHeight`,type:`string | number`},{name:`disabled`,type:`boolean`},{name:`index`,type:`string`},{name:`isHeader`,type:`boolean`},{name:`isSkeleton`,type:`boolean`},{name:`item`,type:`Record<string, any>`},{name:`lazy`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`stickyLeft`,type:`string[]`},{name:`stickyTop`,type:`boolean`},{name:`tableItemAttrs`,type:`ConstrBind<TableFlexItemProps>`},{name:`tableItemColumnAttrs`,type:`Record<string, ConstrBind<TableFlexItemProps>>`}],g=[],_=[{name:`sort`,description:`Event triggered when sort button is clicked / Событие, вызываемое при клике по кнопке сортировки`,properties:[{name:`item`,type:`SortColumnItem`}]}],v={component:`TableFlexRecord`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})))()}var b;function x(){return(x=e((()=>{n(),r(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,o,i)})))()}var S=t({TableFlexRecord:()=>w,TableFlexRecordIsHeader:()=>T,TableFlexRecordSkeleton:()=>E,__namedExportsOrder:()=>D,default:()=>C}),C,w,T,E,D;function O(){return(O=e((()=>{f(),x(),l(),C={title:`Ui/TableFlexRecord`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1TableFlexRecord:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-flex-column">
      <D1TableFlexRecord v-bind="args" />
      <D1TableFlexRecord v-bind="args" />
      <D1TableFlexRecord v-bind="args" />
    </div>
    `})},T={name:`Строка заголовка`,render:()=>({components:{D1TableFlexRecord:m},template:`
        <div class="wiki-storybook-flex-column">
          <D1TableFlexRecord
            :isHeader="true"
            :columns="['id', 'name', 'role', 'status']"
            :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
          />
        </div>
    `})},E={name:`Загрузка скелетона`,render:()=>({components:{D1TableFlexRecord:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1TableFlexRecord
              :isSkeleton="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
            />
          </div>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1TableFlexRecord
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-flex-column">
      <D1TableFlexRecord v-bind="args" />
      <D1TableFlexRecord v-bind="args" />
      <D1TableFlexRecord v-bind="args" />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Строка заголовка',
  render: () => ({
    components: {
      D1TableFlexRecord
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1TableFlexRecord
            :isHeader="true"
            :columns="['id', 'name', 'role', 'status']"
            :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
          />
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1TableFlexRecord,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1TableFlexRecord
              :isSkeleton="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
            />
          </div>
        </D1Skeleton>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`TableFlexRecord`,`TableFlexRecordIsHeader`,`TableFlexRecordSkeleton`]})))()}export{O as a,E as i,w as n,b as o,T as r,x as s,S as t};