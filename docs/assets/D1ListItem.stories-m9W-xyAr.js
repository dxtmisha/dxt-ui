import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-Ck-JDNL8.js";import{n as l,t as u}from"./D1Skeleton-YL0_DuxC.js";import{i as d,n as f,r as p,t as m}from"./D1ListItem-h2S77H4h.js";var h,g,_,v,y=e((()=>{s(),d(),h=[{name:`badge`,type:`string | number | ConstrBind<BadgeProps> | undefined`},{name:`badgeDot`,type:`boolean | undefined`},{name:`caption`,type:`string | number | undefined`},{name:`captionDecorative`,type:`boolean | undefined`},{name:`dense`,type:`boolean | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`detail`,type:`Record<string, any> | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`divider`,type:`boolean | undefined`},{name:`fill`,type:`string | undefined`,option:[`custom`]},{name:`filterMode`,type:`boolean | undefined`},{name:`focus`,type:`boolean | undefined`},{name:`highlight`,type:`string | undefined`},{name:`highlightLengthStart`,type:`number | undefined`},{name:`href`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconAlign`,type:`string | undefined`,option:[`center`,`edge`]},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconTop`,type:`boolean | undefined`},{name:`iconTrailing`,type:`IconValue<IconProps> | undefined`},{name:`iconTrailingDirOnly`,type:`boolean | undefined`},{name:`iconTrailingPalette`,type:`boolean | undefined`},{name:`iconTrailingTurnOnly`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`index`,type:`any`},{name:`isSkeleton`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`listId`,type:`number | undefined`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps> | undefined`},{name:`open`,type:`boolean | undefined`},{name:`palette`,type:`string | undefined`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`parent`,type:`string | undefined`},{name:`prefix`,type:`string | number | undefined`},{name:`prefixId`,type:`string | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`role`,type:`string | undefined`},{name:`search`,type:`string | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`selectedChild`,type:`boolean | undefined`},{name:`size`,type:`string | undefined`,option:[`sm`,`md`,`lg`]},{name:`suffix`,type:`string | number | undefined`},{name:`suffixId`,type:`string | undefined`},{name:`tabindex`,type:`string | number | undefined`},{name:`tag`,type:`string | undefined`,option:[`button`,`a`,`span`,`li`,`div`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined`},{name:`type`,type:`string | undefined`},{name:`value`,type:`any`}],g=[{name:`body`,description:`Slot for the list item body/ Слот для содержимого элемента списка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for the leading element/ Слот для ведущего элемента`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for the trailing element/ Слот для замыкающего элемента`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`ListItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})),b,x=e((()=>{r(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,n,i)})),S=t({ListItem:()=>w,ListItemBasic:()=>T,ListItemFill:()=>D,ListItemHighlight:()=>E,ListItemSkeleton:()=>O,__namedExportsOrder:()=>k,default:()=>C}),C,w,T,E,D,O,k,A=e((()=>{f(),x(),l(),C={title:`Ui/ListItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1ListItem:m},setup:()=>({args:e}),template:`
      <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    `})},T={name:`Базовые`,render:()=>({components:{D1ListItem:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem>Simple Item</D1ListItem>
            <D1ListItem icon="person">Item with Icon</D1ListItem>
            <D1ListItem description="Additional information">Item with Description</D1ListItem>
            <D1ListItem focus>Focus</D1ListItem>
            <D1ListItem selected>Selected</D1ListItem>
            <D1ListItem disabled>Disabled</D1ListItem>
            <D1ListItem readonly>Readonly</D1ListItem>
            <D1ListItem prefix="01" suffix="Info">With Prefix & Suffix</D1ListItem>
            <D1ListItem caption="Caption" description="Description text here">Full Content</D1ListItem>
            <D1ListItem icon="star" badge="new">Icon with Badge</D1ListItem>
          </div>
        </div>
    `})},E={name:`Выделение`,render:()=>({components:{D1ListItem:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem highlight="search" label="Search result item"/>
            <D1ListItem highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
            <D1ListItem highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
            <D1ListItem highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
          </div>
        </div>
    `})},D={name:`Заливка`,render:()=>({components:{D1ListItem:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem label="Default fill"/>
            <D1ListItem fill="#ff0000" label="Red fill"/>
            <D1ListItem fill="rgb(0, 128, 255)" label="Blue fill"/>
            <D1ListItem fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
          </div>
        </div>
    `})},O={name:`Загрузка скелетона`,render:()=>({components:{D1ListItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</D1ListItem>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1ListItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1ListItem
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem>Simple Item</D1ListItem>
            <D1ListItem icon="person">Item with Icon</D1ListItem>
            <D1ListItem description="Additional information">Item with Description</D1ListItem>
            <D1ListItem focus>Focus</D1ListItem>
            <D1ListItem selected>Selected</D1ListItem>
            <D1ListItem disabled>Disabled</D1ListItem>
            <D1ListItem readonly>Readonly</D1ListItem>
            <D1ListItem prefix="01" suffix="Info">With Prefix & Suffix</D1ListItem>
            <D1ListItem caption="Caption" description="Description text here">Full Content</D1ListItem>
            <D1ListItem icon="star" badge="new">Icon with Badge</D1ListItem>
          </div>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Выделение',
  render: () => ({
    components: {
      D1ListItem
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem highlight="search" label="Search result item"/>
            <D1ListItem highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
            <D1ListItem highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
            <D1ListItem highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
          </div>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Заливка',
  render: () => ({
    components: {
      D1ListItem
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem label="Default fill"/>
            <D1ListItem fill="#ff0000" label="Red fill"/>
            <D1ListItem fill="rgb(0, 128, 255)" label="Blue fill"/>
            <D1ListItem fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
          </div>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1ListItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</D1ListItem>
        </D1Skeleton>
    \`
  })
}`,...O.parameters?.docs?.source}}},k=[`ListItem`,`ListItemBasic`,`ListItemHighlight`,`ListItemFill`,`ListItemSkeleton`]}));A();export{w as ListItem,T as ListItemBasic,D as ListItemFill,E as ListItemHighlight,O as ListItemSkeleton,k as __namedExportsOrder,C as default,x as i,A as n,b as r,S as t};