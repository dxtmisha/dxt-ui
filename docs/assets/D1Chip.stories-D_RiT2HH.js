import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-COBgMBNI.js";import{n as l,t as u}from"./D1Skeleton-CFezRexj.js";import{i as d,n as f,r as p,t as m}from"./D1Chip-CxuOKVvE.js";var h,g,_,v,y=e((()=>{c(),s(),d(),h=[{name:`adaptive`,type:`string`,option:[`iconAlways`,`block`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`ariaLabel`,type:`string`},{name:`assistive`,type:`boolean`},{name:`container`,type:`string`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`grid`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconPropsBasic>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`input`,type:`boolean`},{name:`inverse`,type:`boolean`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<ProgressPropsBasic>`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`readonly`,type:`boolean`},{name:`roundedFull`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]},{name:`tag`,type:`string`,option:[`button`,`a`,`span`]},{name:`textAlign`,type:`string`,option:[`left`,`center`,`right`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`type`,type:`string`,option:[`button`,`submit`,`reset`]},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`Chip`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})),b,x=e((()=>{c(),n(),y(),b=new r(v.component,v.props,v.defaults,v.wikiDesign,a,i)})),S=t({Chip:()=>w,ChipAdaptive:()=>D,ChipAssistive:()=>E,ChipInput:()=>T,ChipSkeleton:()=>O,__namedExportsOrder:()=>k,default:()=>C}),C,w,T,E,D,O,k,A=e((()=>{f(),x(),l(),C={title:`Ui/Chip`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Ввод (input)`,render:()=>({components:{D1Chip:m},template:`
        <div class="wiki-storybook-flex">
          <D1Chip>Chip</D1Chip>
          <D1Chip input>Tag</D1Chip>
          <D1Chip input icon="person">Contact</D1Chip>
          <D1Chip input selected icon="tag">Keyword</D1Chip>
        </div>
    `})},E={name:`Вспомогательные (assistive)`,render:()=>({components:{D1Chip:m},template:`
        <div class="wiki-storybook-flex">
          <D1Chip>Chip</D1Chip>
          <D1Chip assistive>Chip</D1Chip>
          <D1Chip assistive icon="lightbulb">Suggestion</D1Chip>
          <D1Chip assistive selected icon="check">Recommended</D1Chip>
        </div>
    `})},D={name:`Адаптивные`,render:()=>({components:{D1Chip:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Chip adaptive="fullSm" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Chip container="fullSm" icon="star" label="Chip"/>
          </div>
        </div>
    `})},O={name:`Скелетон`,render:()=>({components:{D1Chip:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true">
          <D1Chip isSkeleton>Chip</D1Chip>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Ввод (input)',
  render: () => ({
    components: {
      D1Chip
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Chip>Chip</D1Chip>
          <D1Chip input>Tag</D1Chip>
          <D1Chip input icon="person">Contact</D1Chip>
          <D1Chip input selected icon="tag">Keyword</D1Chip>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Вспомогательные (assistive)',
  render: () => ({
    components: {
      D1Chip
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Chip>Chip</D1Chip>
          <D1Chip assistive>Chip</D1Chip>
          <D1Chip assistive icon="lightbulb">Suggestion</D1Chip>
          <D1Chip assistive selected icon="check">Recommended</D1Chip>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Адаптивные',
  render: () => ({
    components: {
      D1Chip
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Chip adaptive="fullSm" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Chip container="fullSm" icon="star" label="Chip"/>
          </div>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Chip,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1Chip isSkeleton>Chip</D1Chip>
        </D1Skeleton>
    \`
  })
}`,...O.parameters?.docs?.source}}},k=[`Chip`,`ChipInput`,`ChipAssistive`,`ChipAdaptive`,`ChipSkeleton`]}));A();export{w as Chip,D as ChipAdaptive,E as ChipAssistive,T as ChipInput,O as ChipSkeleton,k as __namedExportsOrder,C as default,x as i,A as n,b as r,S as t};