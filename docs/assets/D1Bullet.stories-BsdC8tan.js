import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l}from"./library-C6UyfMBX.js";import{C as u,D as d,d as f,f as p,g as m,i as h,n as g,s as _,t as v,u as y}from"./wiki-Cqdd-d3l.js";import{n as b,t as x}from"./ComponentIncludeAbstract-BSJ_gXSk-01afegtM.js";import{n as S,t as C}from"./D1BulletItem-U1Kf9YHE.js";var w;function T(){return(T=e((()=>{x(),n(),d(),w=class extends b{name=`bulletItem`;propsAttrsName=`itemAttrs`;get is(){return!!this.getProps().list}getName(){return this.className}getItemClass(){return`${this.getName()}Item`}getBulletItemClass(){return`${this.getName()}__bullet__item`}getClasses(){return`${this.getItemClass()} ${this.getBulletItemClass()}`}initRender(e,t,n=()=>this.is){if(this.components&&n()){let n=[];return this.getProps().list?.forEach((r,i)=>{this.components?.renderAdd(n,this.name,u(this.getAttrs(t),{description:r,class:this.getBulletItemClass()}),e,`bulletItem-${i}`)}),n}return[]}}})))()}var E,D,O;function k(){return(k=e((()=>{T(),n(),d(),E=class{props;refs;element;classDesign;className;components;slots;emits;list;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{BulletItemIncludeConstructor:l=w}=c;this.list=new l(i,e,a)}getHtml(){if(this.props.html)return this.props.html.replace(/<li>/gi,`<li class="${this.list.getClasses()}">`)}},D={},O=class extends m{item;constructor(e,t,n,r=E){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.item.getHtml(),t={...this.getAttrs(),class:this.classes?.value.main},n=[...this.item.list.render()];return this.slots&&`default`in this.slots&&this.initSlot(`default`,n),e?a(`ul`,{...t,innerHTML:e}):a(`ul`,t,n)}}})))()}var A;function j(){return(j=e((()=>{S(),A=C})))()}var M;function N(){return(N=e((()=>{k(),M={...D}})))()}var P;function F(){return(F=e((()=>{n(),k(),j(),N(),P=i({name:`D1Bullet`,__name:`D1Bullet`,props:o({list:{},itemAttrs:{},html:{}},M),setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-bullet":!0}})),u=l(()=>({})),d=new O(`d1.bullet`,a,{emits:i,classes:o,styles:u,components:{bulletItem:A}}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1Bullet`,exportName:`default`,displayName:`D1Bullet`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Bullet/D1Bullet.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{v(),N(),R=[{name:`html`,type:`string`},{name:`itemAttrs`,type:`ConstrBind<DescriptionProps>`},{name:`list`,type:`string[]`}],z=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[],V={component:`Bullet`,props:R,slots:z,events:B,defaults:M,wikiDesign:g}})))()}var U;function W(){return(W=e((()=>{f(),_(),H(),U=new y(V.component,V.props,V.defaults,V.wikiDesign,h,p)})))()}var G=t({Bullet:()=>q,BulletHtml:()=>J,__namedExportsOrder:()=>Y,default:()=>K}),K,q,J,Y;function X(){return(X=e((()=>{L(),W(),K={title:`Ui/Bullet`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1Bullet:I},setup:()=>({args:e}),template:`
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