import{d as s,_ as o}from"./D1Ripple-BDM2s-Z1.js";import{W as r,w as n,a,b as p}from"./wiki-BNdC282o.js";import"./iframe-BGVIV1-M.js";import"./jsx-runtime-D_zvdyIk.js";const m=[{name:"disabled",type:"boolean"}],i=new r("Ripple",m,s,n,a,p),l={title:"Ui/Ripple",component:o,parameters:{design:"d1",docs:{description:{component:i.getDescription()}}},argTypes:i.getWiki(),args:i.getValues()},e={render:t=>({components:{D1Ripple:o},setup:()=>({args:t}),template:`
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
}`,...e.parameters?.docs?.source}}};const c=["Ripple"],g=Object.freeze(Object.defineProperty({__proto__:null,Ripple:e,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{g as R,e as a,i as b};
