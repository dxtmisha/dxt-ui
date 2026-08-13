import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,Nt as s,in as c,jt as l}from"./library-CUIf7uCS.js";import{O as u,d,j as f,k as p,l as m,m as h,n as g,p as _,r as v,t as y,u as b}from"./wiki-wIqBVsyI.js";import{n as x,t as S}from"./ComponentIncludeAbstract-CH6F0Rvb-UISzxO4W.js";import{n as C,t as w}from"./D1BulletItem-OVOfkELh.js";var T;function E(){return(E=e((()=>{S(),r(),u(),T=class extends x{constructor(...e){super(...e),_(this,`name`,`bulletItem`),_(this,`propsAttrsName`,`itemAttrs`)}get is(){return!!this.getProps().list}getName(){return this.className}getItemClass(){return`${this.getName()}Item`}getBulletItemClass(){return`${this.getName()}__bullet__item`}getClasses(){return`${this.getItemClass()} ${this.getBulletItemClass()}`}initRender(e,t,n=()=>this.is){if(this.components&&n()){var r;let n=[];return(r=this.getProps().list)==null||r.forEach((r,i)=>{var a;(a=this.components)==null||a.renderAdd(n,this.name,f(this.getAttrs(t),{description:r,class:this.getBulletItemClass()}),e,`bulletItem-${i}`)}),n}return[]}}})))()}var D,O,k;function A(){return(A=e((()=>{E(),r(),u(),D=class{constructor(e,t,n,r,i,a,o,s,c={}){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),_(this,`list`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{BulletItemIncludeConstructor:l=T}=c;this.list=new l(i,e,a)}getHtml(){if(this.props.html)return this.props.html.replace(/<li>/gi,`<li class="${this.list.getClasses()}">`)}},O={},k=class extends p{constructor(e,t,n,r=D){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.item.getHtml(),t={...this.getAttrs(),class:this.classes?.value.main},n=[...this.item.list.render()];return this.slots&&`default`in this.slots&&this.initSlot(`default`,n),e?s(`ul`,{...t,innerHTML:e}):s(`ul`,t,n)}}})))()}var j;function M(){return(M=e((()=>{C(),j=w})))()}var N;function P(){return(P=e((()=>{A(),N={...O}})))()}var F;function I(){return(I=e((()=>{r(),A(),M(),P(),F=o({name:`D1Bullet`,__name:`D1Bullet`,props:a({list:{},itemAttrs:{},html:{}},N),setup(e,{expose:t,emit:r}){let a=r,o=e,s=n(()=>({main:{"d1-bullet":!0}})),u=n(()=>({})),d=new k(`d1.bullet`,o,{emits:a,classes:s,styles:u,components:{bulletItem:j}}),f=d.render();return t(d.expose()),(e,t)=>(i(),l(c(f)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1Bullet`,exportName:`default`,displayName:`D1Bullet`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Bullet/D1Bullet.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{y(),P(),z=[{name:`html`,type:`string`},{name:`itemAttrs`,type:`ConstrBind<DescriptionProps>`},{name:`list`,type:`string[]`}],B=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[],H={component:`Bullet`,props:z,slots:B,events:V,defaults:N,wikiDesign:g}})))()}var W;function G(){return(G=e((()=>{d(),m(),U(),W=new b(H.component,H.props,H.defaults,H.wikiDesign,v,h)})))()}var K=t({Bullet:()=>J,BulletHtml:()=>Y,__namedExportsOrder:()=>X,default:()=>q}),q,J,Y,X;function Z(){return(Z=e((()=>{R(),G(),q={title:`Ui/Bullet`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1Bullet:L},setup:()=>({args:e}),template:`
      <D1Bullet v-bind="args"/>
    `})},Y={name:`Содержимое HTML`,render:()=>({components:{D1Bullet:L},template:`
        <D1Bullet html="<li>First parsed item</li><li>Second parsed item</li>"/>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Содержимое HTML',
  render: () => ({
    components: {
      D1Bullet
    },
    template: \`
        <D1Bullet html="<li>First parsed item</li><li>Second parsed item</li>"/>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X=[`Bullet`,`BulletHtml`]})))()}export{W as a,Z as i,Y as n,G as o,K as r,J as t};