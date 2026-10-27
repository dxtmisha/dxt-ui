import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,d as r,f as i,n as a,p as o,s,t as c}from"./wiki-CfN0XtvQ.js";import{n as l,t as u}from"./D1Skeleton-fWB3UQoT.js";import{i as d,n as f,r as p,t as m}from"./D1InputCodeItem-BdVPrR86.js";var h,g,_,v;function y(){return(y=e((()=>{c(),d(),h=[{name:`autocomplete`,type:`string`},{name:`disabled`,type:`boolean`},{name:`error`,type:`boolean`},{name:`hide`,type:`boolean`},{name:`index`,type:`NumberOrString`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`match`,type:`RegExp`},{name:`move`,type:`boolean`},{name:`name`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`placeholder`,type:`string`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`,`display`]},{name:`success`,type:`boolean`},{name:`tabindex`,type:`string | number`},{name:`textSymbol`,type:`TextValue`}],g=[],_=[{name:`backspace`,description:`Event triggered on backspace / Событие, вызываемое при нажатии Backspace`,properties:[{name:`index`,type:`NumberOrString | undefined`}]},{name:`focus`,description:`Event triggered on focus / Событие, вызываемое при фокусе`,properties:[{name:`index`,type:`NumberOrString | undefined`}]},{name:`input`,description:`Event triggered on input / Событие, вызываемое при вводе`,properties:[{name:`index`,type:`NumberOrString | undefined`},{name:`value`,type:`string`}]},{name:`paste`,description:`Event triggered on paste / Событие, вызываемое при вставке`,properties:[{name:`index`,type:`NumberOrString | undefined`},{name:`value`,type:`string`}]}],v={component:`InputCodeItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})))()}var b;function x(){return(x=e((()=>{i(),s(),y(),b=new r(v.component,v.props,v.defaults,v.wikiDesign,n,o)})))()}var S=t({InputCodeItem:()=>w,InputCodeItemBasic:()=>T,InputCodeItemSkeleton:()=>E,__namedExportsOrder:()=>D,default:()=>C}),C,w,T,E,D;function O(){return(O=e((()=>{f(),x(),l(),C={title:`Ui/InputCodeItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Базовый`,render:()=>({components:{D1InputCodeItem:m},template:`
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
    `})},D=[`InputCodeItem`,`InputCodeItemBasic`,`InputCodeItemSkeleton`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}})))()}export{O as a,E as i,w as n,b as o,T as r,x as s,S as t};