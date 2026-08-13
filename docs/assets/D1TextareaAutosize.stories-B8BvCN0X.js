import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,l as r,m as i,n as a,r as o,t as s,u as c}from"./wiki-wIqBVsyI.js";import{i as l,n as u,r as d,t as f}from"./D1TextareaAutosize-a5_8e9VI.js";var p,m,h,g;function _(){return(_=e((()=>{s(),l(),p=[{name:`autosize`,type:`boolean`},{name:`height`,type:`string`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`inputAttrs`,type:`Record<string, any>`},{name:`value`,type:`string`}],m=[],h=[{name:`input`,description:`Event triggered on input/ Событие при вводе`,properties:[{name:`event`,type:`InputEvent`}]}],g={component:`TextareaAutosize`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})))()}var v;function y(){return(y=e((()=>{n(),r(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,o,i)})))()}var b=t({TextareaAutosize:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C;function w(){return(w=e((()=>{u(),y(),x={title:`Ui/TextareaAutosize`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1TextareaAutosize:f},setup:()=>({args:e}),template:`
      <D1TextareaAutosize v-bind="args" :inputAttrs="{style: 'width: 240px; border: 1px solid #90A1B9FF'}" />
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`TextareaAutosize`]})))()}export{y as a,v as i,S as n,w as r,b as t};