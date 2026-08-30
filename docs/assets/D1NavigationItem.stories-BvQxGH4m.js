import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,f as r,i,l as a,n as o,t as s,u as c}from"./wiki-BMj2WokS.js";import{n as l,t as u}from"./D1Skeleton-0ed2Yx2u.js";import{i as d,n as f,r as p,t as m}from"./D1NavigationItem-D20wv-lU.js";var h,g,_,v;function y(){return(y=e((()=>{s(),d(),h=[{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`checkboxAttrs`,type:`ConstrBind<CheckboxProps>`},{name:`controlPosition`,type:`string`,option:[`start`,`end`,`autoSm`,`autoMd`,`autoLg`,`autoXl`,`auto2xl`]},{name:`dense`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`fill`,type:`string`,option:[`custom`]},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`highlight`,type:`string`},{name:`highlightLengthStart`,type:`number`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAlign`,type:`string`,option:[`center`,`edge`]},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconCheckbox`,type:`IconValue<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTop`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconProps>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`index`,type:`any`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`listId`,type:`number`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`open`,type:`boolean`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`parent`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`radioAttrs`,type:`ConstrBind<RadioProps>`},{name:`readonly`,type:`boolean`},{name:`role`,type:`string`},{name:`search`,type:`string`},{name:`selected`,type:`boolean`},{name:`selectedChild`,type:`boolean`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`checkmark`]},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`string | number`},{name:`tag`,type:`string`,option:[`button`,`a`,`span`,`li`,`div`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`type`,type:`string`},{name:`value`,type:`any`}],g=[{name:`body`,description:`Slot for the list item body/ Слот для содержимого элемента списка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for the leading element/ Слот для ведущего элемента`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for the trailing element/ Слот для замыкающего элемента`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`NavigationItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})))()}var b;function x(){return(x=e((()=>{n(),a(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,i,r)})))()}var S=t({NavigationItem:()=>w,NavigationItemHighlight:()=>T,NavigationItemSkeleton:()=>E,__namedExportsOrder:()=>D,default:()=>C}),C,w,T,E,D;function O(){return(O=e((()=>{f(),x(),l(),C={title:`Ui/NavigationItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Выделение`,render:()=>({components:{D1NavigationItem:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationItem highlight="nav" label="Navigation link item"/>
            <D1NavigationItem highlight="set" :highlightLengthStart="3" label="Settings panel"/>
          </div>
        </div>
    `})},E={name:`Загрузка скелетона`,render:()=>({components:{D1NavigationItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1NavigationItem>
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the navigation item component."
          >Navigation Item Label Example</D1NavigationItem>
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the navigation item."
          >Very Long Navigation Item Label Example for Skeleton</D1NavigationItem>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Выделение',
  render: () => ({
    components: {
      D1NavigationItem
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationItem highlight="nav" label="Navigation link item"/>
            <D1NavigationItem highlight="set" :highlightLengthStart="3" label="Settings panel"/>
          </div>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1NavigationItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1NavigationItem>
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the navigation item component."
          >Navigation Item Label Example</D1NavigationItem>
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the navigation item."
          >Very Long Navigation Item Label Example for Skeleton</D1NavigationItem>
        </D1Skeleton>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`NavigationItem`,`NavigationItemHighlight`,`NavigationItemSkeleton`]})))()}export{O as a,E as i,w as n,b as o,T as r,x as s,S as t};