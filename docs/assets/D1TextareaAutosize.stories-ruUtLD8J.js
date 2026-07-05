import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{i as l,n as u,r as d,t as f}from"./D1TextareaAutosize-Cl_jqBgQ.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`autosize`,type:`boolean`},{name:`height`,type:`string`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`inputAttrs`,type:`Record<string, any>`},{name:`value`,type:`string`}],m=[],h=[{name:`input`,description:`Event triggered on input/ Событие при вводе`,properties:[{name:`event`,type:`InputEvent`}]}],g={component:`TextareaAutosize`,props:p,slots:m,events:h,defaults:d,wikiDesign:i}})),v,y=t((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,a,r)})),b=e({TextareaAutosize:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=t((()=>{u(),y(),x={title:`Ui/TextareaAutosize`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1TextareaAutosize:f},setup:()=>({args:e}),template:`
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
}`,...S.parameters?.docs?.source}}},C=[`TextareaAutosize`]}));w();export{S as TextareaAutosize,C as __namedExportsOrder,x as default,y as i,w as n,v as r,b as t};