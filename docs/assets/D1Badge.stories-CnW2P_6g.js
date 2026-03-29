import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-BtAa-rOh.js";import{i as l,n as u,r as d,t as f}from"./D1Badge-C1cML2kg.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`ariaLabel`,type:`string`},{name:`dot`,type:`boolean`},{name:`formatting`,type:`boolean`},{name:`hide`,type:`boolean`},{name:`horizontal`,type:`string`,option:[`center`,`right`,`left`]},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`labelMax`,type:`NumberOrString`},{name:`outline`,type:`boolean`},{name:`overlap`,type:`string`,option:[`rectangular`,`circular`,`static`]},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean`},{name:`secondary`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`,`none`]},{name:`vertical`,type:`string`,option:[`top`,`center`,`bottom`]}],m=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`}],h=[],g={component:`Badge`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({Badge:()=>S,BadgeBasic:()=>C,BadgeDot:()=>w,BadgeOutline:()=>D,BadgePrimary:()=>T,BadgeSecondary:()=>E,__namedExportsOrder:()=>O,default:()=>x}),x,S,C,w,T,E,D,O,k=e((()=>{u(),y(),x={title:`Ui/Badge`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Badge:f},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <D1Badge v-bind="args"/>
        </div>
      </div>
    `})},C={name:`Базовые`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge overlap="static">Badge</D1Badge>
          <D1Badge overlap="static" icon="home">Badge</D1Badge>
          <D1Badge overlap="static">99</D1Badge>
          <D1Badge overlap="static" label="999" label-max="99"/>
        </div>
    `})},w={name:`Точечные (dot)`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge dot overlap="static"/>
        </div>
    `})},T={name:`Основные (primary)`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge primary overlap="static" icon="home"/>
          <D1Badge primary overlap="static">Badge</D1Badge>
        </div>
    `})},E={name:`Второстепенные (secondary)`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge secondary overlap="static" icon="home"/>
          <D1Badge secondary overlap="static">Badge</D1Badge>
        </div>
    `})},D={name:`Контурные (outline)`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge outline overlap="static" icon="home"/>
          <D1Badge outline overlap="static">Badge</D1Badge>
        </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Badge
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <D1Badge v-bind="args"/>
        </div>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Badge
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Badge overlap="static">Badge</D1Badge>
          <D1Badge overlap="static" icon="home">Badge</D1Badge>
          <D1Badge overlap="static">99</D1Badge>
          <D1Badge overlap="static" label="999" label-max="99"/>
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Точечные (dot)',
  render: () => ({
    components: {
      D1Badge
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Badge dot overlap="static"/>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Основные (primary)',
  render: () => ({
    components: {
      D1Badge
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Badge primary overlap="static" icon="home"/>
          <D1Badge primary overlap="static">Badge</D1Badge>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Второстепенные (secondary)',
  render: () => ({
    components: {
      D1Badge
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Badge secondary overlap="static" icon="home"/>
          <D1Badge secondary overlap="static">Badge</D1Badge>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Контурные (outline)',
  render: () => ({
    components: {
      D1Badge
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Badge outline overlap="static" icon="home"/>
          <D1Badge outline overlap="static">Badge</D1Badge>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Badge`,`BadgeBasic`,`BadgeDot`,`BadgePrimary`,`BadgeSecondary`,`BadgeOutline`]}));k();export{S as Badge,C as BadgeBasic,w as BadgeDot,D as BadgeOutline,T as BadgePrimary,E as BadgeSecondary,O as __namedExportsOrder,x as default,y as i,k as n,v as r,b as t};