import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Pt as s,mn as c}from"./library-ByXZ2YPj.js";import{_ as l,a as u,d,f,k as p,n as m,p as h,s as g,t as _}from"./wiki-CfN0XtvQ.js";import{n as v,t as y}from"./getAreaValue-Xc_XgXhl-t7XPXwbo.js";var b,x,S;function C(){return(C=e((()=>{y(),n(),p(),b=class{props;element;naming;components;slots;emits;constructor(e,t,n,r,i,a){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a}get area(){return v()??this.props.areaDefault}},x={},S=class extends l{item;constructor(e,t,n,r=b){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.area;if(this.slots){if(e&&e in this.slots)return this.initSlot(e);if(`default`in this.slots)return this.initSlot(`default`)}}}})))()}var w;function T(){return(T=e((()=>{C(),w={...x}})))()}var E;function D(){return(D=e((()=>{n(),C(),T(),E=a({name:`D1Area`,__name:`D1Area`,props:i({areaDefault:{}},w),setup(e,{expose:t,emit:n}){let i=n,a=e,l=s(()=>({main:{"d1-area":!0}})),u=s(()=>({})),d=new S(`d1.area`,a,{emits:i,classes:l,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(c(f)))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1Area`,exportName:`default`,displayName:`D1Area`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Area/D1Area.vue`]})})))()}var A,j,M,N;function P(){return(P=e((()=>{_(),T(),A=[{name:`areaDefault`,type:`string`}],j=[],M=[],N={component:`Area`,props:A,slots:j,events:M,defaults:w,wikiDesign:m}})))()}var F;function I(){return(I=e((()=>{f(),g(),P(),F=new d(N.component,N.props,N.defaults,N.wikiDesign,u,h)})))()}var L=t({Area:()=>z,__namedExportsOrder:()=>B,default:()=>R}),R,z,B;function V(){return(V=e((()=>{k(),I(),R={title:`Ui/Area`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1Area:O},setup:()=>({args:e}),template:`
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    `})},B=[`Area`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Area
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...z.parameters?.docs?.source}}}})))()}export{I as a,F as i,L as n,V as r,z as t};