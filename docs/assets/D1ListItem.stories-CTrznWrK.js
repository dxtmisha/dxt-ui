import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{n as l,t as u}from"./D1Skeleton-CxiItvxF.js";import{i as d,n as f,r as p,t as m}from"./D1ListItem-Ct0xVA8K.js";var h,g,_,v,y=t((()=>{s(),d(),h=[{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`checkboxAttrs`,type:`ConstrBind<CheckboxPropsBasic>`},{name:`controlPosition`,type:`string`,option:[`start`,`end`,`autoSm`,`autoMd`,`autoLg`,`autoXl`,`auto2xl`]},{name:`dense`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`fill`,type:`string`,option:[`custom`]},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`highlight`,type:`string`},{name:`highlightLengthStart`,type:`number`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAlign`,type:`string`,option:[`center`,`edge`]},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconCheckbox`,type:`IconValue<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTop`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconProps>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`index`,type:`any`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`listId`,type:`number`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`open`,type:`boolean`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`parent`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`radioAttrs`,type:`ConstrBind<RadioPropsBasic>`},{name:`readonly`,type:`boolean`},{name:`role`,type:`string`},{name:`search`,type:`string`},{name:`selected`,type:`boolean`},{name:`selectedChild`,type:`boolean`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`checkmark`]},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`string | number`},{name:`tag`,type:`string`,option:[`button`,`a`,`span`,`li`,`div`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`type`,type:`string`},{name:`value`,type:`any`}],g=[{name:`body`,description:`Slot for the list item body/ Слот для содержимого элемента списка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for the leading element/ Слот для ведущего элемента`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for the trailing element/ Слот для замыкающего элемента`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`ListItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:i}})),b,x=t((()=>{n(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,a,r)})),S=e({ListItem:()=>w,ListItemBasic:()=>T,ListItemFill:()=>D,ListItemHighlight:()=>E,ListItemSkeleton:()=>O,__namedExportsOrder:()=>k,default:()=>C}),C,w,T,E,D,O,k,A=t((()=>{f(),x(),l(),C={title:`Ui/ListItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={args:{controlPosition:`start`},render:e=>({components:{D1ListItem:m},setup:()=>({args:e}),template:`
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
  args: {
    controlPosition: 'start'
  },
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