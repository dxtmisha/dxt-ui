import{d as c,_ as t}from"./D1Button-CpUMWTfw.js";import{W as m,w as d,a as B,b as p}from"./wiki-b8Pce8s9.js";import"./iframe-CpPdPYqc.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as y}from"./D1Skeleton-Dvv1lbQv.js";const D=[{name:"adaptive",type:"string",option:["iconAlways","block","auto","iconSm","iconMd","iconLg","iconXl","icon2xl","fullSm","fullMd","fullLg","fullXl","full2xl"]},{name:"container",type:"string",option:["iconSm","iconMd","iconLg","iconXl","icon2xl","fullSm","fullMd","fullLg","fullXl","full2xl"]},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"focus",type:"boolean"},{name:"grid",type:"boolean"},{name:"icon",type:"IconValue<IconProps>"},{name:"iconAttrs",type:"ConstrBind<IconProps>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTrailing",type:"IconValue<IconProps>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"inverse",type:"boolean"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"loading",type:"boolean | ConstrBind<ProgressProps>"},{name:"outline",type:"boolean"},{name:"palette",type:"string",option:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone","black","white"]},{name:"primary",type:"boolean"},{name:"readonly",type:"boolean"},{name:"roundedFull",type:"boolean"},{name:"secondary",type:"boolean"},{name:"selected",type:"boolean"},{name:"size",type:"string",option:["xs","sm","md","lg","xl"]},{name:"tag",type:"string",option:["button","a","span"]},{name:"text",type:"boolean"},{name:"textAlign",type:"string",option:["left","center","right"]},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"value",type:"EventClickValue['value']"}],l=new m("Button",D,c,d,B,p),k={title:"Ui/Button",component:t,parameters:{design:"d1",docs:{description:{component:l.getDescription()}}},argTypes:l.getWiki(),args:l.getValues()},o={},n={name:"Базовые",render:()=>({components:{D1Button:t},template:`
      <div class="wiki-storybook-flex">
        <D1Button>Button</D1Button>
        <D1Button icon="home">Button</D1Button>
        <D1Button icon-trailing="arrow_forward">Button</D1Button>
      </div>
    `})},e={name:"Основные (primary)",render:()=>({components:{D1Button:t},template:`
      <div class="wiki-storybook-flex">
        <D1Button primary>Button</D1Button>
        <D1Button primary icon="home">Button</D1Button>
        <D1Button primary selected>Button</D1Button>
        <D1Button primary disabled>Button</D1Button>
      </div>
    `})},i={name:"Второстепенные (secondary)",render:()=>({components:{D1Button:t},template:`
      <div class="wiki-storybook-flex">
        <D1Button secondary>Button</D1Button>
        <D1Button secondary icon="home">Button</D1Button>
        <D1Button secondary selected>Button</D1Button>
        <D1Button secondary disabled>Button</D1Button>
      </div>
    `})},a={name:"Контурные (outline)",render:()=>({components:{D1Button:t},template:`
      <div class="wiki-storybook-flex">
        <D1Button outline>Button</D1Button>
        <D1Button outline icon="home">Button</D1Button>
        <D1Button outline selected>Button</D1Button>
        <D1Button outline disabled>Button</D1Button>
      </div>
    `})},r={name:"Текстовые (text)",render:()=>({components:{D1Button:t},template:`
      <div class="wiki-storybook-flex">
        <D1Button text>Button</D1Button>
        <D1Button text icon="home">Button</D1Button>
        <D1Button text selected>Button</D1Button>
        <D1Button text disabled>Button</D1Button>
      </div>
    `})},s={name:"Адаптивные",render:()=>({components:{D1Button:t},template:`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Default</div>
          <D1Button icon="home" label="Button"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Adaptive</div>
          <D1Button adaptive="fullSm" icon="home" label="Button"/>
        </div>
        <div
          class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
          <div class="wiki-storybook-item__label">Container</div>
          <D1Button container="fullSm" icon="home" label="Button"/>
        </div>
      </div>
    `})},u={name:"Скелетон",render:()=>({components:{D1Button:t,D1Skeleton:y},template:`
      <D1Skeleton :active="true">
        <D1Button isSkeleton>Button</D1Button>
      </D1Skeleton>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <div
          class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
          <div class="wiki-storybook-item__label">Container</div>
          <D1Button container="fullSm" icon="home" label="Button"/>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const b=["Button","ButtonBasic","ButtonPrimary","ButtonSecondary","ButtonOutline","ButtonText","ButtonAdaptive","ButtonSkeleton"],x=Object.freeze(Object.defineProperty({__proto__:null,Button:o,ButtonAdaptive:s,ButtonBasic:n,ButtonOutline:a,ButtonPrimary:e,ButtonSecondary:i,ButtonSkeleton:u,ButtonText:r,__namedExportsOrder:b,default:k},Symbol.toStringTag,{value:"Module"}));export{x as B,o as a,l as b,n as c,e as d,i as e,a as f,r as g,s as h,u as i};
