import{d as n,_ as s}from"./D1Ripple-DaSf7R-W.js";import{w as r,W as p,a,b as m}from"./wiki-BeIQM_4B.js";import"./iframe-B21bnPHY.js";import"./jsx-runtime-u17CrQMm.js";const c=[{name:"disabled",type:"boolean"}],i={component:"Ripple",props:c,defaults:n,wikiDesign:r},o=new p(i.component,i.props,i.defaults,i.wikiDesign,a,m),l={title:"Ui/Ripple",component:s,parameters:{design:"d1",docs:{description:{component:o.getDescription()}}},argTypes:o.getWiki(),args:o.getValues()},e={render:t=>({components:{D1Ripple:s},setup:()=>({args:t}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Ripple v-bind="args"/>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Ripple
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Ripple v-bind="args"/>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};const d=["Ripple"],w=Object.freeze(Object.defineProperty({__proto__:null,Ripple:e,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{w as R,e as a,o as b};
