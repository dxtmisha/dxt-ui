import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-Ck-JDNL8.js";import{n as l,t as u}from"./D1Skeleton-YL0_DuxC.js";import{i as d,n as f,r as p,t as m}from"./D1Chip-ChW1kmMI.js";var h,g,_,v,y=e((()=>{s(),d(),h=[{name:`adaptive`,type:`string | undefined`,option:[`iconAlways`,`block`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`ariaLabel`,type:`string | undefined`},{name:`assistive`,type:`boolean | undefined`},{name:`container`,type:`string | undefined`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any> | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`focus`,type:`boolean | undefined`},{name:`grid`,type:`boolean | undefined`},{name:`href`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconTrailing`,type:`IconValue<IconProps> | undefined`},{name:`iconTrailingDirOnly`,type:`boolean | undefined`},{name:`iconTrailingPalette`,type:`boolean | undefined`},{name:`iconTrailingTurnOnly`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`input`,type:`boolean | undefined`},{name:`inverse`,type:`boolean | undefined`},{name:`isSkeleton`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps> | undefined`},{name:`palette`,type:`string | undefined`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`readonly`,type:`boolean | undefined`},{name:`roundedFull`,type:`boolean | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`size`,type:`string | undefined`,option:[`sm`,`md`,`lg`]},{name:`tag`,type:`string | undefined`,option:[`button`,`a`,`span`]},{name:`textAlign`,type:`string | undefined`,option:[`left`,`center`,`right`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined`},{name:`type`,type:`string | undefined`,option:[`button`,`submit`,`reset`]},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`Chip`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})),b,x=e((()=>{r(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,n,i)})),S=t({Chip:()=>w,ChipAdaptive:()=>D,ChipAssistive:()=>E,ChipInput:()=>T,ChipSkeleton:()=>O,__namedExportsOrder:()=>k,default:()=>C}),C,w,T,E,D,O,k,A=e((()=>{f(),x(),l(),C={title:`Ui/Chip`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Ввод (input)`,render:()=>({components:{D1Chip:m},template:`
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