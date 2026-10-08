import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,f as r,i,n as a,s as o,t as s,u as c}from"./wiki-Cqdd-d3l.js";import{i as l,n as u,r as d,t as f}from"./D1Ripple-BFOZY_Xf.js";var p,m,h,g;function _(){return(_=e((()=>{s(),l(),p=[{name:`disabled`,type:`boolean`}],m=[],h=[],g={component:`Ripple`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})))()}var v;function y(){return(y=e((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,i,r)})))()}var b=t({Ripple:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C;function w(){return(w=e((()=>{u(),y(),x={title:`Ui/Ripple`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Ripple:f},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Ripple v-bind="args"/>
      </div>
    `})},C=[`Ripple`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}export{y as a,v as i,S as n,w as r,b as t};