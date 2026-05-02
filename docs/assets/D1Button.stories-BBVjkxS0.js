import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-BqBJrlEv.js";import{i as l,n as u,r as d,t as f}from"./D1Button-B3AeI_jV.js";import{n as p,t as m}from"./D1Skeleton-CY2SBSLv.js";var h,g,_,v,y=e((()=>{s(),l(),h=[{name:`adaptive`,type:`string | undefined`,option:[`iconAlways`,`block`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`ariaLabel`,type:`string | undefined`},{name:`container`,type:`string | undefined`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any> | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`focus`,type:`boolean | undefined`},{name:`grid`,type:`boolean | undefined`},{name:`hasLabelMinWidth`,type:`boolean | undefined`},{name:`href`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconTrailing`,type:`IconValue<IconProps> | undefined`},{name:`iconTrailingDirOnly`,type:`boolean | undefined`},{name:`iconTrailingPalette`,type:`boolean | undefined`},{name:`iconTrailingTurnOnly`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`inverse`,type:`boolean | undefined`},{name:`isSkeleton`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps> | undefined`},{name:`outline`,type:`boolean | undefined`},{name:`palette`,type:`string | undefined`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`roundedFull`,type:`boolean | undefined`},{name:`secondary`,type:`boolean | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`size`,type:`string | undefined`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`tag`,type:`string | undefined`,option:[`button`,`a`,`span`]},{name:`text`,type:`boolean | undefined`},{name:`textAlign`,type:`string | undefined`,option:[`left`,`center`,`right`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined`},{name:`type`,type:`string | undefined`,option:[`button`,`submit`,`reset`]},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`Button`,props:h,slots:g,events:_,defaults:d,wikiDesign:a}})),b,x=e((()=>{r(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,n,i)})),S=t({Button:()=>w,ButtonAdaptive:()=>A,ButtonBasic:()=>T,ButtonOutline:()=>O,ButtonPrimary:()=>E,ButtonSecondary:()=>D,ButtonSkeleton:()=>j,ButtonText:()=>k,__namedExportsOrder:()=>M,default:()=>C}),C,w,T,E,D,O,k,A,j,M,N=e((()=>{u(),x(),p(),C={title:`Ui/Button`,component:f,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Базовые`,render:()=>({components:{D1Button:f},template:`
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