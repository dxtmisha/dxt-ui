import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{i as l,n as u,r as d,t as f}from"./D1BulletItem-C215h6RK.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],m=[{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[],g={component:`BulletItem`,props:p,slots:m,events:h,defaults:d,wikiDesign:i}})),v,y=t((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,a,r)})),b=e({BulletItem:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=t((()=>{u(),y(),x={title:`Ui/BulletItem`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1BulletItem:f},setup:()=>({args:e}),template:`
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
}`,...S.parameters?.docs?.source}}},C=[`BulletItem`]}));w();export{S as BulletItem,C as __namedExportsOrder,x as default,y as i,w as n,v as r,b as t};