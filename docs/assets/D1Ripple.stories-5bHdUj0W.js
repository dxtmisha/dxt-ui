import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{i as l,n as u,r as d,t as f}from"./D1Ripple-wFMmxct8.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`disabled`,type:`boolean`}],m=[],h=[],g={component:`Ripple`,props:p,slots:m,events:h,defaults:d,wikiDesign:i}})),v,y=t((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,a,r)})),b=e({Ripple:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=t((()=>{u(),y(),x={title:`Ui/Ripple`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Ripple:f},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Ripple v-bind="args"/>
      </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Ripple`]}));w();export{S as Ripple,C as __namedExportsOrder,x as default,y as i,w as n,v as r,b as t};