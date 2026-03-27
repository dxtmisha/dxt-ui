import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-CMC-2lzg.js";import{i as l,n as u,r as d,t as f}from"./D1Button-CFCD_nny.js";import{n as p,t as m}from"./D1Skeleton-pMZYQwwY.js";var h,g,_,v,y=e((()=>{c(),s(),l(),h=[{name:`adaptive`,type:`string`,option:[`iconAlways`,`block`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`ariaLabel`,type:`string`},{name:`container`,type:`string`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`grid`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`inverse`,type:`boolean`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`outline`,type:`boolean`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`roundedFull`,type:`boolean`},{name:`secondary`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`size`,type:`string`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`tag`,type:`string`,option:[`button`,`a`,`span`]},{name:`text`,type:`boolean`},{name:`textAlign`,type:`string`,option:[`left`,`center`,`right`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`type`,type:`string`,option:[`button`,`submit`,`reset`]},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`Button`,props:h,slots:g,events:_,defaults:d,wikiDesign:o}})),b,x=e((()=>{c(),n(),y(),b=new r(v.component,v.props,v.defaults,v.wikiDesign,a,i)})),S=t({Button:()=>w,ButtonAdaptive:()=>A,ButtonBasic:()=>T,ButtonOutline:()=>O,ButtonPrimary:()=>E,ButtonSecondary:()=>D,ButtonSkeleton:()=>j,ButtonText:()=>k,__namedExportsOrder:()=>M,default:()=>C}),C,w,T,E,D,O,k,A,j,M,N=e((()=>{u(),x(),p(),C={title:`Ui/Button`,component:f,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Базовые`,render:()=>({components:{D1Button:f},template:`
        <div class="wiki-storybook-flex">
          <D1Button>Button</D1Button>
          <D1Button icon="home">Button</D1Button>
          <D1Button icon-trailing="arrow_forward">Button</D1Button>
        </div>
    `})},E={name:`Основные (primary)`,render:()=>({components:{D1Button:f},template:`
        <div class="wiki-storybook-flex">
          <D1Button primary>Button</D1Button>
          <D1Button primary icon="home">Button</D1Button>
          <D1Button primary selected>Button</D1Button>
          <D1Button primary disabled>Button</D1Button>
        </div>
    `})},D={name:`Второстепенные (secondary)`,render:()=>({components:{D1Button:f},template:`
        <div class="wiki-storybook-flex">
          <D1Button secondary>Button</D1Button>
          <D1Button secondary icon="home">Button</D1Button>
          <D1Button secondary selected>Button</D1Button>
          <D1Button secondary disabled>Button</D1Button>
        </div>
    `})},O={name:`Контурные (outline)`,render:()=>({components:{D1Button:f},template:`
        <div class="wiki-storybook-flex">
          <D1Button outline>Button</D1Button>
          <D1Button outline icon="home">Button</D1Button>
          <D1Button outline selected>Button</D1Button>
          <D1Button outline disabled>Button</D1Button>
        </div>
    `})},k={name:`Текстовые (text)`,render:()=>({components:{D1Button:f},template:`
        <div class="wiki-storybook-flex">
          <D1Button text>Button</D1Button>
          <D1Button text icon="home">Button</D1Button>
          <D1Button text selected>Button</D1Button>
          <D1Button text disabled>Button</D1Button>
        </div>
    `})},A={name:`Адаптивные`,render:()=>({components:{D1Button:f},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Button icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Button adaptive="fullSm" icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Button container="fullSm" icon="home" label="Button"/>
          </div>
        </div>
    `})},j={name:`Скелетон`,render:()=>({components:{D1Button:f,D1Skeleton:m},template:`
        <D1Skeleton :active="true">
          <D1Button isSkeleton>Button</D1Button>
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Button
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Button>Button</D1Button>
          <D1Button icon="home">Button</D1Button>
          <D1Button icon-trailing="arrow_forward">Button</D1Button>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Основные (primary)',
  render: () => ({
    components: {
      D1Button
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Button primary>Button</D1Button>
          <D1Button primary icon="home">Button</D1Button>
          <D1Button primary selected>Button</D1Button>
          <D1Button primary disabled>Button</D1Button>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Второстепенные (secondary)',
  render: () => ({
    components: {
      D1Button
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Button secondary>Button</D1Button>
          <D1Button secondary icon="home">Button</D1Button>
          <D1Button secondary selected>Button</D1Button>
          <D1Button secondary disabled>Button</D1Button>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Контурные (outline)',
  render: () => ({
    components: {
      D1Button
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Button outline>Button</D1Button>
          <D1Button outline icon="home">Button</D1Button>
          <D1Button outline selected>Button</D1Button>
          <D1Button outline disabled>Button</D1Button>
        </div>
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Текстовые (text)',
  render: () => ({
    components: {
      D1Button
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Button text>Button</D1Button>
          <D1Button text icon="home">Button</D1Button>
          <D1Button text selected>Button</D1Button>
          <D1Button text disabled>Button</D1Button>
        </div>
    \`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Адаптивные',
  render: () => ({
    components: {
      D1Button
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Button icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Button adaptive="fullSm" icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Button container="fullSm" icon="home" label="Button"/>
          </div>
        </div>
    \`
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Button,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1Button isSkeleton>Button</D1Button>
        </D1Skeleton>
    \`
  })
}`,...j.parameters?.docs?.source}}},M=[`Button`,`ButtonBasic`,`ButtonPrimary`,`ButtonSecondary`,`ButtonOutline`,`ButtonText`,`ButtonAdaptive`,`ButtonSkeleton`]}));N();export{w as Button,A as ButtonAdaptive,T as ButtonBasic,O as ButtonOutline,E as ButtonPrimary,D as ButtonSecondary,j as ButtonSkeleton,k as ButtonText,M as __namedExportsOrder,C as default,x as i,N as n,b as r,S as t};