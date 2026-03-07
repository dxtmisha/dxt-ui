import{d as m,_ as e}from"./D1Badge-DUEwPENk.js";import{w as l,W as p,a as g,b as B}from"./wiki-BeIQM_4B.js";import"./iframe-B21bnPHY.js";import"./jsx-runtime-u17CrQMm.js";const y=[{name:"ariaLabel",type:"string"},{name:"dot",type:"boolean"},{name:"formatting",type:"boolean"},{name:"hide",type:"boolean"},{name:"horizontal",type:"string",option:["center","right","left"]},{name:"icon",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"labelMax",type:"NumberOrString"},{name:"outline",type:"boolean"},{name:"overlap",type:"string",option:["rectangular","circular","static"]},{name:"palette",type:"string",option:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone","black","white"]},{name:"primary",type:"boolean"},{name:"secondary",type:"boolean"},{name:"selected",type:"boolean"},{name:"size",type:"string",option:["sm","md","lg","none"]},{name:"vertical",type:"string",option:["top","center","bottom"]}],i={component:"Badge",props:y,defaults:m,wikiDesign:l},d=new p(i.component,i.props,i.defaults,i.wikiDesign,g,B),b={title:"Ui/Badge",component:e,parameters:{design:"d1",docs:{description:{component:d.getDescription()}}},argTypes:d.getWiki(),args:d.getValues()},a={render:c=>({components:{D1Badge:e},setup:()=>({args:c}),template:`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <D1Badge v-bind="args"/>
        </div>
      </div>
    `})},o={name:"Базовые",render:()=>({components:{D1Badge:e},template:`
        <div class="wiki-storybook-flex">
          <D1Badge overlap="static">Badge</D1Badge>
          <D1Badge overlap="static" icon="home">Badge</D1Badge>
          <D1Badge overlap="static">99</D1Badge>
          <D1Badge overlap="static" label="999" label-max="99"/>
        </div>
    `})},n={name:"Точечные (dot)",render:()=>({components:{D1Badge:e},template:`
        <div class="wiki-storybook-flex">
          <D1Badge dot overlap="static"/>
        </div>
    `})},t={name:"Основные (primary)",render:()=>({components:{D1Badge:e},template:`
        <div class="wiki-storybook-flex">
          <D1Badge primary overlap="static" icon="home"/>
          <D1Badge primary overlap="static">Badge</D1Badge>
        </div>
    `})},r={name:"Второстепенные (secondary)",render:()=>({components:{D1Badge:e},template:`
        <div class="wiki-storybook-flex">
          <D1Badge secondary overlap="static" icon="home"/>
          <D1Badge secondary overlap="static">Badge</D1Badge>
        </div>
    `})},s={name:"Контурные (outline)",render:()=>({components:{D1Badge:e},template:`
        <div class="wiki-storybook-flex">
          <D1Badge outline overlap="static" icon="home"/>
          <D1Badge outline overlap="static">Badge</D1Badge>
        </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["Badge","BadgeBasic","BadgeDot","BadgePrimary","BadgeSecondary","BadgeOutline"],f=Object.freeze(Object.defineProperty({__proto__:null,Badge:a,BadgeBasic:o,BadgeDot:n,BadgeOutline:s,BadgePrimary:t,BadgeSecondary:r,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{f as B,a,d as b,o as c,n as d,t as e,r as f,s as g};
