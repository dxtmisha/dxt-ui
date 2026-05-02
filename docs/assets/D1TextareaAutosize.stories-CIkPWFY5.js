import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-Ck-JDNL8.js";import{i as l,n as u,r as d,t as f}from"./D1TextareaAutosize-C02jF4NO.js";var p,m,h,g,_=e((()=>{s(),l(),p=[{name:`autosize`,type:`boolean | undefined`},{name:`height`,type:`string | undefined`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`inputAttrs`,type:`Record<string, any> | undefined`},{name:`value`,type:`string | undefined`}],m=[],h=[{name:`input`,description:`Event triggered on input/ Событие при вводе`,properties:[{name:`event`,type:`InputEvent`}]}],g={component:`TextareaAutosize`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=e((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,n,i)})),b=t({TextareaAutosize:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=e((()=>{u(),y(),x={title:`Ui/TextareaAutosize`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1TextareaAutosize:f},setup:()=>({args:e}),template:`
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