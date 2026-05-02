import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Kt as r,Nt as i,Ot as a,Tt as o,f as s,t as c,wt as l,xt as u}from"./iframe-CXCBnhvn.js";import{a as d,d as f,f as p,m,n as h,o as g,p as _,t as v,u as y}from"./wiki-BqBJrlEv.js";import{n as b,t as x}from"./getAreaValue-C-31Upc1-CekmkCqN.js";var S,C,w,T=e((()=>{p(),x(),u(),s(),S=class{constructor(e,t,r,i,a,o,s,c){_(this,`area`,n(()=>b()??this.props.areaDefault)),this.props=e,this.refs=t,this.element=r,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c}},C={},w=class extends c{constructor(e,t,n,r=S){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.area.value;if(this.slots){if(e&&e in this.slots)return this.initSlot(e);if(`default`in this.slots)return this.initSlot(`default`)}}}})),E,D=e((()=>{T(),E={...C}})),O=e((()=>{})),k,A=e((()=>{u(),T(),D(),O(),k=o({name:`D1Area`,__name:`D1Area`,props:a({areaDefault:{}},E),setup(e,{expose:t,emit:a}){let o=new w(`d1.area`,e,{emits:a,classes:n(()=>({main:{"d1-area":!0}})),styles:n(()=>({}))}),s=o.render();return t(o.expose()),(e,t)=>(i(),l(r(s)))}})})),j,M=e((()=>{A(),A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1Area`,exportName:`default`,displayName:`D1Area`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Area/D1Area.vue`]})})),N,P,F,I,L=e((()=>{v(),D(),N=[{name:`areaDefault`,type:`string | undefined`}],P=[],F=[],I={component:`Area`,props:N,slots:P,events:F,defaults:E,wikiDesign:h}})),R,z=e((()=>{f(),g(),L(),R=new y(I.component,I.props,I.defaults,I.wikiDesign,d,m)})),B=t({Area:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U,W=e((()=>{M(),z(),V={title:`Ui/Area`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1Area:j},setup:()=>({args:e}),template:`
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    `})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Area`]}));W();export{H as Area,U as __namedExportsOrder,V as default,z as i,W as n,R as r,B as t};