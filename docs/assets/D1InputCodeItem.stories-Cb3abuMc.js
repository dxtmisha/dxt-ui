import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{n as l,t as u}from"./D1Skeleton-CxiItvxF.js";import{i as d,n as f,r as p,t as m}from"./D1InputCodeItem-Yoc1CrLx.js";var h,g,_,v,y=t((()=>{s(),d(),h=[{name:`disabled`,type:`boolean`},{name:`error`,type:`boolean`},{name:`hide`,type:`boolean`},{name:`index`,type:`NumberOrString`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`match`,type:`RegExp`},{name:`move`,type:`boolean`},{name:`name`,type:`string`},{name:`placeholder`,type:`string`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`,`display`]},{name:`success`,type:`boolean`},{name:`tabindex`,type:`string | number`},{name:`textSymbol`,type:`TextValue`}],g=[],_=[{name:`backspace`,description:`Event triggered on backspace / Событие, вызываемое при нажатии Backspace`,properties:[{name:`index`,type:`NumberOrString | undefined`}]},{name:`focus`,description:`Event triggered on focus / Событие, вызываемое при фокусе`,properties:[{name:`index`,type:`NumberOrString | undefined`}]},{name:`input`,description:`Event triggered on input / Событие, вызываемое при вводе`,properties:[{name:`index`,type:`NumberOrString | undefined`},{name:`value`,type:`string`}]},{name:`paste`,description:`Event triggered on paste / Событие, вызываемое при вставке`,properties:[{name:`index`,type:`NumberOrString | undefined`},{name:`value`,type:`string`}]}],v={component:`InputCodeItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:i}})),b,x=t((()=>{n(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,a,r)})),S=e({InputCodeItem:()=>w,InputCodeItemBasic:()=>T,InputCodeItemSkeleton:()=>E,__namedExportsOrder:()=>D,default:()=>C}),C,w,T,E,D,O=t((()=>{f(),x(),l(),C={title:`Ui/InputCodeItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Базовый`,render:()=>({components:{D1InputCodeItem:m},template:`
        <div class="wiki-storybook-flex">
          <D1InputCodeItem value="0" />
          <D1InputCodeItem hide value="1" />
          <D1InputCodeItem success value="2" />
          <D1InputCodeItem error value="3" />
          <D1InputCodeItem disabled value="4" />
        </div>
    `})},E={name:`Скелетон`,render:()=>({components:{D1InputCodeItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex">
            <D1InputCodeItem isSkeleton value="0" />
            <D1InputCodeItem isSkeleton value="1" />
            <D1InputCodeItem isSkeleton value="2" />
          </div>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Базовый',
  render: () => ({
    components: {
      D1InputCodeItem
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1InputCodeItem value="0" />
          <D1InputCodeItem hide value="1" />
          <D1InputCodeItem success value="2" />
          <D1InputCodeItem error value="3" />
          <D1InputCodeItem disabled value="4" />
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1InputCodeItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex">
            <D1InputCodeItem isSkeleton value="0" />
            <D1InputCodeItem isSkeleton value="1" />
            <D1InputCodeItem isSkeleton value="2" />
          </div>
        </D1Skeleton>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`InputCodeItem`,`InputCodeItemBasic`,`InputCodeItemSkeleton`]}));O();export{w as InputCodeItem,T as InputCodeItemBasic,E as InputCodeItemSkeleton,D as __namedExportsOrder,C as default,x as i,O as n,b as r,S as t};