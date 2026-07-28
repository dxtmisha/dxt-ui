import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Gt as n,Kt as r,Ut as i,Vt as a,Wt as o,Yt as s,d as c,dn as l,en as u,f as d}from"./iframe-D7czqiJA.js";import{a as f,d as p,f as m,l as h,m as g,n as _,p as v,t as y,u as b}from"./wiki-CUC2UhNU.js";import{a as x,n as S,o as C,t as w}from"./D1BulletItem-CacyNUPj.js";var T,E,D,O=t((()=>{m(),x(),a(),c(),T=class{constructor(e,t,n,r,i,a,o,s,c={}){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),v(this,`list`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{BulletItemIncludeConstructor:l=C}=c;this.list=new l(i,e,a)}getHtml(){if(this.props.html)return this.props.html.replace(/<li>/gi,`<li class="${this.list.getClasses()}">`)}},E={},D=class extends d{constructor(e,t,n,r=T){super(e,t,n),v(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.item.getHtml(),t={...this.getAttrs(),class:this.classes?.value.main},n=[...this.item.list.render()];return this.slots&&`default`in this.slots&&this.initSlot(`default`,n),e?r(`ul`,{...t,innerHTML:e}):r(`ul`,t,n)}}})),k,A=t((()=>{S(),k=w})),j,M=t((()=>{O(),j={...E}})),N=t((()=>{})),P,F=t((()=>{a(),O(),A(),M(),N(),P=n({name:`D1Bullet`,__name:`D1Bullet`,props:s({list:{},itemAttrs:{},html:{}},j),setup(e,{expose:t,emit:n}){let r=new D(`d1.bullet`,e,{emits:n,classes:i(()=>({main:{"d1-bullet":!0}})),styles:i(()=>({})),components:{bulletItem:k}}),a=r.render();return t(r.expose()),(e,t)=>(u(),o(l(a)))}})})),I,L=t((()=>{F(),F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1Bullet`,exportName:`default`,displayName:`D1Bullet`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Bullet/D1Bullet.vue`]})})),R,z,B,V,H=t((()=>{y(),M(),R=[{name:`html`,type:`string`},{name:`itemAttrs`,type:`ConstrBind<DescriptionProps>`},{name:`list`,type:`string[]`}],z=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[],V={component:`Bullet`,props:R,slots:z,events:B,defaults:j,wikiDesign:_}})),U,W=t((()=>{p(),h(),H(),U=new b(V.component,V.props,V.defaults,V.wikiDesign,f,g)})),G=e({Bullet:()=>q,BulletHtml:()=>J,__namedExportsOrder:()=>Y,default:()=>K}),K,q,J,Y,X=t((()=>{L(),W(),K={title:`Ui/Bullet`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1Bullet:I},setup:()=>({args:e}),template:`
      <D1Bullet v-bind="args"/>
    `})},J={name:`Содержимое HTML`,render:()=>({components:{D1Bullet:I},template:`
        <D1Bullet html="<li>First parsed item</li><li>Second parsed item</li>"/>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Bullet
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Bullet v-bind="args"/>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Содержимое HTML',
  render: () => ({
    components: {
      D1Bullet
    },
    template: \`
        <D1Bullet html="<li>First parsed item</li><li>Second parsed item</li>"/>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y=[`Bullet`,`BulletHtml`]}));X();export{q as Bullet,J as BulletHtml,Y as __namedExportsOrder,K as default,W as i,X as n,U as r,G as t};