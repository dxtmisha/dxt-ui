import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Rt as a,Ut as o,in as s,jt as c}from"./library-C6UyfMBX.js";import{D as l,d as u,f as d,g as f,i as p,n as m,s as h,t as g,u as _}from"./wiki-Cqdd-d3l.js";import{n as v,t as y}from"./getAreaValue-Xc_XgXhl-Doc2Q2XU.js";var b,x,S;function C(){return(C=e((()=>{y(),n(),l(),b=class{props;refs;element;classDesign;className;components;slots;emits;constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get area(){return v()??this.props.areaDefault}},x={},S=class extends f{item;constructor(e,t,n,r=b){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.area;if(this.slots){if(e&&e in this.slots)return this.initSlot(e);if(`default`in this.slots)return this.initSlot(`default`)}}}})))()}var w;function T(){return(T=e((()=>{C(),w={...x}})))()}var E;function D(){return(D=e((()=>{n(),C(),T(),E=i({name:`D1Area`,__name:`D1Area`,props:a({areaDefault:{}},w),setup(e,{expose:t,emit:n}){let i=n,a=e,l=c(()=>({main:{"d1-area":!0}})),u=c(()=>({})),d=new S(`d1.area`,a,{emits:i,classes:l,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(s(f)))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1Area`,exportName:`default`,displayName:`D1Area`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Area/D1Area.vue`]})})))()}var A,j,M,N;function P(){return(P=e((()=>{g(),T(),A=[{name:`areaDefault`,type:`string`}],j=[],M=[],N={component:`Area`,props:A,slots:j,events:M,defaults:w,wikiDesign:m}})))()}var F;function I(){return(I=e((()=>{u(),h(),P(),F=new _(N.component,N.props,N.defaults,N.wikiDesign,p,d)})))()}var L=t({Area:()=>z,__namedExportsOrder:()=>B,default:()=>R}),R,z,B;function V(){return(V=e((()=>{k(),I(),R={title:`Ui/Area`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1Area:O},setup:()=>({args:e}),template:`
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