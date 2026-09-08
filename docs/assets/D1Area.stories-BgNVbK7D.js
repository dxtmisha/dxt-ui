import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Rt as a,Ut as o,an as s,jt as c}from"./library-BfcLFF_v.js";import{O as l,d as u,i as d,k as f,l as p,m,n as h,p as g,t as _,u as v}from"./wiki-BHyzKkJP.js";import{n as y,t as b}from"./getAreaValue-Xc_XgXhl-DTOLPslz.js";var x,S,C;function w(){return(w=e((()=>{b(),n(),l(),x=class{constructor(e,t,n,r,i,a,o,s){g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`element`,void 0),g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`slots`,void 0),g(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get area(){return y()??this.props.areaDefault}},S={},C=class extends f{constructor(e,t,n,r=x){super(e,t,n),g(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.area;if(this.slots){if(e&&e in this.slots)return this.initSlot(e);if(`default`in this.slots)return this.initSlot(`default`)}}}})))()}var T;function E(){return(E=e((()=>{w(),T={...S}})))()}var D;function O(){return(O=e((()=>{n(),w(),E(),D=i({name:`D1Area`,__name:`D1Area`,props:a({areaDefault:{}},T),setup(e,{expose:t,emit:n}){let i=n,a=e,l=c(()=>({main:{"d1-area":!0}})),u=c(()=>({})),d=new C(`d1.area`,a,{emits:i,classes:l,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(s(f)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Area`,exportName:`default`,displayName:`D1Area`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Area/D1Area.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{_(),E(),j=[{name:`areaDefault`,type:`string`}],M=[],N=[],P={component:`Area`,props:j,slots:M,events:N,defaults:T,wikiDesign:h}})))()}var I;function L(){return(L=e((()=>{u(),p(),F(),I=new v(P.component,P.props,P.defaults,P.wikiDesign,d,m)})))()}var R=t({Area:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V;function H(){return(H=e((()=>{A(),L(),z={title:`Ui/Area`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Area:k},setup:()=>({args:e}),template:`
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