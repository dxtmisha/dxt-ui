import{d as r,_ as a}from"./D1TextareaAutosize-DeyniCi-.js";import{w as i,W as n,a as p,b as m}from"./wiki-BeIQM_4B.js";import"./iframe-B21bnPHY.js";import"./jsx-runtime-u17CrQMm.js";const u=[{name:"autosize",type:"boolean"},{name:"height",type:"string",option:["xs","sm","md","lg","xl"]},{name:"inputAttrs",type:"Record<string, any>"},{name:"value",type:"string"}],t={component:"TextareaAutosize",props:u,defaults:r,wikiDesign:i},s=new n(t.component,t.props,t.defaults,t.wikiDesign,p,m),c={title:"Ui/TextareaAutosize",component:a,parameters:{design:"d1",docs:{description:{component:s.getDescription()}}},argTypes:s.getWiki(),args:s.getValues()},e={render:o=>({components:{D1TextareaAutosize:a},setup:()=>({args:o}),template:`
      <D1TextareaAutosize v-bind="args" :inputAttrs="{style: 'width: 240px; border: 1px solid #90A1B9FF'}" />
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1TextareaAutosize
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1TextareaAutosize v-bind="args" :inputAttrs="{style: 'width: 240px; border: 1px solid #90A1B9FF'}" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};const d=["TextareaAutosize"],A=Object.freeze(Object.defineProperty({__proto__:null,TextareaAutosize:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{A as T,e as a,s as b};
