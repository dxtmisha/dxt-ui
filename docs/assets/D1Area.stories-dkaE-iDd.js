import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,in as s,jt as c}from"./library-CUIf7uCS.js";import{O as l,d as u,k as d,l as f,m as p,n as m,p as h,r as g,t as _,u as v}from"./wiki-wIqBVsyI.js";import{n as y,t as b}from"./getAreaValue-Xc_XgXhl-DXd4MpA5.js";var x,S,C;function w(){return(w=e((()=>{b(),r(),l(),x=class{constructor(e,t,n,r,i,a,o,s){h(this,`props`,void 0),h(this,`refs`,void 0),h(this,`element`,void 0),h(this,`classDesign`,void 0),h(this,`className`,void 0),h(this,`components`,void 0),h(this,`slots`,void 0),h(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get area(){return y()??this.props.areaDefault}},S={},C=class extends d{constructor(e,t,n,r=x){super(e,t,n),h(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.area;if(this.slots){if(e&&e in this.slots)return this.initSlot(e);if(`default`in this.slots)return this.initSlot(`default`)}}}})))()}var T;function E(){return(E=e((()=>{w(),T={...S}})))()}var D;function O(){return(O=e((()=>{r(),w(),E(),D=o({name:`D1Area`,__name:`D1Area`,props:a({areaDefault:{}},T),setup(e,{expose:t,emit:r}){let a=r,o=e,l=n(()=>({main:{"d1-area":!0}})),u=n(()=>({})),d=new C(`d1.area`,o,{emits:a,classes:l,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(i(),c(s(f)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Area`,exportName:`default`,displayName:`D1Area`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Area/D1Area.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{_(),E(),j=[{name:`areaDefault`,type:`string`}],M=[],N=[],P={component:`Area`,props:j,slots:M,events:N,defaults:T,wikiDesign:m}})))()}var I;function L(){return(L=e((()=>{u(),f(),F(),I=new v(P.component,P.props,P.defaults,P.wikiDesign,g,p)})))()}var R=t({Area:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V;function H(){return(H=e((()=>{A(),L(),z={title:`Ui/Area`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Area:k},setup:()=>({args:e}),template:`
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    `})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Area`]})))()}export{L as a,I as i,R as n,H as r,B as t};