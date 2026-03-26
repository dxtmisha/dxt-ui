import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1Badge-0K_WsuBb.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`ariaLabel`,type:`string`},{name:`dot`,type:`boolean`},{name:`formatting`,type:`boolean`},{name:`hide`,type:`boolean`},{name:`horizontal`,type:`string`,option:[`center`,`right`,`left`]},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`labelMax`,type:`NumberOrString`},{name:`outline`,type:`boolean`},{name:`overlap`,type:`string`,option:[`rectangular`,`circular`,`static`]},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean`},{name:`secondary`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`,`none`]},{name:`vertical`,type:`string`,option:[`top`,`center`,`bottom`]}],m={component:`Badge`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({Badge:()=>b,BadgeBasic:()=>x,BadgeDot:()=>S,BadgeOutline:()=>T,BadgePrimary:()=>C,BadgeSecondary:()=>w,__namedExportsOrder:()=>E,default:()=>y}),y,b,x,S,C,w,T,E,D=e((()=>{u(),_(),y={title:`Ui/Badge`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={render:e=>({components:{D1Badge:f},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <D1Badge v-bind="args"/>
        </div>
      </div>
    `})},x={name:`Базовые`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge overlap="static">Badge</D1Badge>
          <D1Badge overlap="static" icon="home">Badge</D1Badge>
          <D1Badge overlap="static">99</D1Badge>
          <D1Badge overlap="static" label="999" label-max="99"/>
        </div>
    `})},S={name:`Точечные (dot)`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge dot overlap="static"/>
        </div>
    `})},C={name:`Основные (primary)`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge primary overlap="static" icon="home"/>
          <D1Badge primary overlap="static">Badge</D1Badge>
        </div>
    `})},w={name:`Второстепенные (secondary)`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge secondary overlap="static" icon="home"/>
          <D1Badge secondary overlap="static">Badge</D1Badge>
        </div>
    `})},T={name:`Контурные (outline)`,render:()=>({components:{D1Badge:f},template:`
        <div class="wiki-storybook-flex">
          <D1Badge outline overlap="static" icon="home"/>
          <D1Badge outline overlap="static">Badge</D1Badge>
        </div>
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Badge`,`BadgeBasic`,`BadgeDot`,`BadgePrimary`,`BadgeSecondary`,`BadgeOutline`]}));D();export{b as Badge,x as BadgeBasic,S as BadgeDot,T as BadgeOutline,C as BadgePrimary,w as BadgeSecondary,E as __namedExportsOrder,y as default,_ as i,D as n,g as r,v as t};