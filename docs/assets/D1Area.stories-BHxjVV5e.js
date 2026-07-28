import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Gt as n,Ut as r,Vt as i,Wt as a,Yt as o,d as s,dn as c,en as l,f as u}from"./iframe-D7czqiJA.js";import{a as d,d as f,f as p,l as m,m as h,n as g,p as _,t as v,u as y}from"./wiki-CUC2UhNU.js";import{n as b,t as x}from"./getAreaValue-Xc_XgXhl-fWanB0U_.js";var S,C,w,T=t((()=>{p(),x(),i(),s(),S=class{constructor(e,t,n,r,i,a,o,s){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get area(){return b()??this.props.areaDefault}},C={},w=class extends u{constructor(e,t,n,r=S){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.area;if(this.slots){if(e&&e in this.slots)return this.initSlot(e);if(`default`in this.slots)return this.initSlot(`default`)}}}})),E,D=t((()=>{T(),E={...C}})),O=t((()=>{})),k,A=t((()=>{i(),T(),D(),O(),k=n({name:`D1Area`,__name:`D1Area`,props:o({areaDefault:{}},E),setup(e,{expose:t,emit:n}){let i=new w(`d1.area`,e,{emits:n,classes:r(()=>({main:{"d1-area":!0}})),styles:r(()=>({}))}),o=i.render();return t(i.expose()),(e,t)=>(l(),a(c(o)))}})})),j,M=t((()=>{A(),A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1Area`,exportName:`default`,displayName:`D1Area`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Area/D1Area.vue`]})})),N,P,F,I,L=t((()=>{v(),D(),N=[{name:`areaDefault`,type:`string`}],P=[],F=[],I={component:`Area`,props:N,slots:P,events:F,defaults:E,wikiDesign:g}})),R,z=t((()=>{f(),m(),L(),R=new y(I.component,I.props,I.defaults,I.wikiDesign,d,h)})),B=e({Area:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U,W=t((()=>{M(),z(),V={title:`Ui/Area`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1Area:j},setup:()=>({args:e}),template:`
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