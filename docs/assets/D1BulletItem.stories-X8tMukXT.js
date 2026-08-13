import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,l as r,m as i,n as a,r as o,t as s,u as c}from"./wiki-wIqBVsyI.js";import{i as l,n as u,r as d,t as f}from"./D1BulletItem-OVOfkELh.js";var p,m,h,g;function _(){return(_=e((()=>{s(),l(),p=[{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],m=[{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[],g={component:`BulletItem`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})))()}var v;function y(){return(y=e((()=>{n(),r(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,o,i)})))()}var b=t({BulletItem:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C;function w(){return(w=e((()=>{u(),y(),x={title:`Ui/BulletItem`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1BulletItem:f},setup:()=>({args:e}),template:`
      <ul style="list-style: none">
      <D1BulletItem v-bind="args"/>
      <D1BulletItem v-bind="args"/>
      <D1BulletItem v-bind="args"/>
    </ul>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1BulletItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <ul style="list-style: none">
      <D1BulletItem v-bind="args"/>
      <D1BulletItem v-bind="args"/>
      <D1BulletItem v-bind="args"/>
    </ul>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C=[`BulletItem`]})))()}export{y as a,v as i,b as n,w as r,S as t};