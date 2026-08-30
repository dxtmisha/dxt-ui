import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,f as r,i,l as a,n as o,t as s,u as c}from"./wiki-BMj2WokS.js";import{n as l,t as u}from"./D1Skeleton-0ed2Yx2u.js";import{i as d,n as f,r as p,t as m}from"./D1NavigationRailItem-BXMcPJ_1.js";var h,g,_,v;function y(){return(y=e((()=>{s(),d(),h=[{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`index`,type:`any`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`listId`,type:`number`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`open`,type:`boolean`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`parent`,type:`string`},{name:`readonly`,type:`boolean`},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`selectedChild`,type:`boolean`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`checkmark`]},{name:`tabindex`,type:`string | number`},{name:`tag`,type:`string`,option:[`button`,`a`,`span`,`li`,`div`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`type`,type:`string`},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`body`,description:`Slot for the list item body/ Слот для содержимого элемента списка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for the leading element/ Слот для ведущего элемента`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`NavigationRailItem`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})))()}var b;function x(){return(x=e((()=>{n(),a(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,i,r)})))()}var S=t({NavigationRailItem:()=>w,NavigationRailItemSkeleton:()=>T,NavigationRailItemSlots:()=>E,__namedExportsOrder:()=>D,default:()=>C}),C,w,T,E,D;function O(){return(O=e((()=>{f(),x(),l(),C={title:`Ui/NavigationRailItem`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={args:{badge:``,icon:``,badgeDot:!0}},T={name:`Загрузка скелетона`,render:()=>({components:{D1NavigationRailItem:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <D1NavigationRailItem
            :isSkeleton="true"
            icon="home"
            badge="5"
          >Home</D1NavigationRailItem>
          <D1NavigationRailItem
            :isSkeleton="true"
            icon="settings"
          >Navigation Rail Item Label Example</D1NavigationRailItem>
        </D1Skeleton>
    `})},E={name:`Использование слотов`,render:()=>({components:{D1NavigationRailItem:m},template:`
        <D1NavigationRailItem>
          <template #default>Default slot</template>
          <template #leading>Leading slot</template>
          <template #body>Body slot</template>
        </D1NavigationRailItem>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    badge: '',
    icon: '',
    badgeDot: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1NavigationRailItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1NavigationRailItem
            :isSkeleton="true"
            icon="home"
            badge="5"
          >Home</D1NavigationRailItem>
          <D1NavigationRailItem
            :isSkeleton="true"
            icon="settings"
          >Navigation Rail Item Label Example</D1NavigationRailItem>
        </D1Skeleton>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1NavigationRailItem
    },
    template: \`
        <D1NavigationRailItem>
          <template #default>Default slot</template>
          <template #leading>Leading slot</template>
          <template #body>Body slot</template>
        </D1NavigationRailItem>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`NavigationRailItem`,`NavigationRailItemSkeleton`,`NavigationRailItemSlots`]})))()}export{O as a,E as i,w as n,b as o,T as r,x as s,S as t};