import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,kt as u,sn as d}from"./library-CO1fW2cN.js";import{E as f,O as p,d as m,f as h,i as g,l as _,m as v,n as y,t as b,u as x}from"./wiki-BMj2WokS.js";import{n as S,t as C}from"./ComponentIncludeAbstract-DTK8bDBQ-BdHKAxjK.js";import{n as w,t as T}from"./D1BulletItem-CV8MGG6s.js";var E;function D(){return(D=e((()=>{C(),u(),f(),c(),E=class extends S{constructor(...e){super(...e),r(this,`name`,`bulletItem`),r(this,`propsAttrsName`,`itemAttrs`)}get is(){return!!this.getProps().list}getName(){return this.className}getItemClass(){return`${this.getName()}Item`}getBulletItemClass(){return`${this.getName()}__bullet__item`}getClasses(){return`${this.getItemClass()} ${this.getBulletItemClass()}`}initRender(e,t,n=()=>this.is){if(this.components&&n()){var r;let n=[];return(r=this.getProps().list)==null||r.forEach((r,i)=>{var a;(a=this.components)==null||a.renderAdd(n,this.name,v(this.getAttrs(t),{description:r,class:this.getBulletItemClass()}),e,`bulletItem-${i}`)}),n}return[]}}})))()}var O,k,A;function j(){return(j=e((()=>{D(),u(),f(),c(),O=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`list`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{BulletItemIncludeConstructor:u=E}=l;this.list=new u(a,e,o)}getHtml(){if(this.props.html)return this.props.html.replace(/<li>/gi,`<li class="${this.list.getClasses()}">`)}},k={},A=class extends p{constructor(e,t,n,i=O){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.item.getHtml(),t={...this.getAttrs(),class:this.classes?.value.main},n=[...this.item.list.render()];return this.slots&&`default`in this.slots&&this.initSlot(`default`,n),e?o(`ul`,{...t,innerHTML:e}):o(`ul`,t,n)}}})))()}var M;function N(){return(N=e((()=>{w(),M=T})))()}var P;function F(){return(F=e((()=>{j(),P={...k}})))()}var I;function L(){return(L=e((()=>{u(),j(),N(),F(),I=i({name:`D1Bullet`,__name:`D1Bullet`,props:n({list:{},itemAttrs:{},html:{}},P),setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-bullet":!0}})),c=s(()=>({})),u=new A(`d1.bullet`,i,{emits:r,classes:o,styles:c,components:{bulletItem:M}}),f=u.render();return t(u.expose()),(e,t)=>(a(),l(d(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Bullet`,exportName:`default`,displayName:`D1Bullet`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Bullet/D1Bullet.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{b(),F(),B=[{name:`html`,type:`string`},{name:`itemAttrs`,type:`ConstrBind<DescriptionProps>`},{name:`list`,type:`string[]`}],V=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[],U={component:`Bullet`,props:B,slots:V,events:H,defaults:P,wikiDesign:y}})))()}var G;function K(){return(K=e((()=>{m(),_(),W(),G=new x(U.component,U.props,U.defaults,U.wikiDesign,g,h)})))()}var q=t({Bullet:()=>Y,BulletHtml:()=>X,__namedExportsOrder:()=>Z,default:()=>J}),J,Y,X,Z;function Q(){return(Q=e((()=>{z(),K(),J={title:`Ui/Bullet`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1Bullet:R},setup:()=>({args:e}),template:`
      <D1Bullet v-bind="args"/>
    `})},X={name:`Содержимое HTML`,render:()=>({components:{D1Bullet:R},template:`
        <D1Bullet html="<li>First parsed item</li><li>Second parsed item</li>"/>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Содержимое HTML',
  render: () => ({
    components: {
      D1Bullet
    },
    template: \`
        <D1Bullet html="<li>First parsed item</li><li>Second parsed item</li>"/>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z=[`Bullet`,`BulletHtml`]})))()}export{G as a,Q as i,X as n,K as o,q as r,Y as t};