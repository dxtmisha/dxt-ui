import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Pt as s,Rt as c,mn as l}from"./library-ByXZ2YPj.js";import{N as u,_ as d,a as f,d as p,f as m,k as h,n as g,p as _,s as v,t as y}from"./wiki-CfN0XtvQ.js";import{n as b,t as x}from"./ComponentIncludeAbstract-CwPk6byu-B8vlefjC.js";import{n as S,t as C}from"./D1BulletItem-C_ehoKcD.js";var w;function T(){return(T=e((()=>{x(),n(),h(),w=class extends b{name=`bulletItem`;propsAttrsName=`itemAttrs`;get is(){return!!this.getProps().list}getName(){return this.naming.getName()}getItemClass(){return`${this.getName()}Item`}getBulletItemClass(){return`${this.getName()}__bullet__item`}getClasses(){return`${this.getItemClass()} ${this.getBulletItemClass()}`}initRender(e,t,n=()=>this.is){if(this.components&&n()){let n=[];return this.getProps().list?.forEach((r,i)=>{this.components?.renderAdd(n,this.name,u(this.getAttrs(t),{description:r,class:this.getBulletItemClass()}),e,`bulletItem-${i}`)}),n}return[]}}})))()}var E,D,O;function k(){return(k=e((()=>{T(),n(),h(),E=class{props;element;naming;components;slots;emits;list;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{BulletItemIncludeConstructor:s=w}=o;this.list=new s(n,e,r)}getHtml(){if(this.props.html)return this.props.html.replace(/<li>/gi,`<li class="${this.list.getClasses()}">`)}},D={},O=class extends d{item;constructor(e,t,n,r=E){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{},item:this.naming.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.item.getHtml(),t={...this.getAttrs(),class:this.classes?.value.main},n=[...this.item.list.render()];return this.slots&&`default`in this.slots&&this.initSlot(`default`,n),e?c(`ul`,{...t,innerHTML:e}):c(`ul`,t,n)}}})))()}var A;function j(){return(j=e((()=>{S(),A=C})))()}var M;function N(){return(N=e((()=>{k(),M={...D}})))()}var P;function F(){return(F=e((()=>{n(),k(),j(),N(),P=a({name:`D1Bullet`,__name:`D1Bullet`,props:i({list:{},itemAttrs:{},html:{}},M),setup(e,{expose:t,emit:n}){let i=n,a=e,c=s(()=>({main:{"d1-bullet":!0}})),u=s(()=>({})),d=new O(`d1.bullet`,a,{emits:i,classes:c,styles:u,components:{bulletItem:A}}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(l(f)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1Bullet`,exportName:`default`,displayName:`D1Bullet`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Bullet/D1Bullet.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{y(),N(),R=[{name:`html`,type:`string`},{name:`itemAttrs`,type:`ConstrBind<DescriptionProps>`},{name:`list`,type:`string[]`}],z=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[],V={component:`Bullet`,props:R,slots:z,events:B,defaults:M,wikiDesign:g}})))()}var U;function W(){return(W=e((()=>{m(),v(),H(),U=new p(V.component,V.props,V.defaults,V.wikiDesign,f,_)})))()}var G=t({Bullet:()=>q,BulletHtml:()=>J,__namedExportsOrder:()=>Y,default:()=>K}),K,q,J,Y;function X(){return(X=e((()=>{L(),W(),K={title:`Ui/Bullet`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1Bullet:I},setup:()=>({args:e}),template:`
      <D1Bullet v-bind="args"/>
    `})},J={name:`Содержимое HTML`,render:()=>({components:{D1Bullet:I},template:`
        <D1Bullet html="<li>First parsed item</li><li>Second parsed item</li>"/>
    `})},Y=[`Bullet`,`BulletHtml`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}}})))()}export{U as a,X as i,J as n,W as o,G as r,T as s,q as t};