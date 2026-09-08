import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,an as c,jt as l}from"./library-BfcLFF_v.js";import{O as u,d,i as f,j as p,k as m,l as h,m as g,n as _,p as v,t as y,u as b}from"./wiki-BHyzKkJP.js";import{n as x,t as S}from"./ComponentIncludeAbstract-BW_HamXq-DX9ihqS3.js";import{n as C,t as w}from"./D1BulletItem-CU5GtkMt.js";var T;function E(){return(E=e((()=>{S(),n(),u(),T=class extends x{constructor(...e){super(...e),v(this,`name`,`bulletItem`),v(this,`propsAttrsName`,`itemAttrs`)}get is(){return!!this.getProps().list}getName(){return this.className}getItemClass(){return`${this.getName()}Item`}getBulletItemClass(){return`${this.getName()}__bullet__item`}getClasses(){return`${this.getItemClass()} ${this.getBulletItemClass()}`}initRender(e,t,n=()=>this.is){if(this.components&&n()){var r;let n=[];return(r=this.getProps().list)==null||r.forEach((r,i)=>{var a;(a=this.components)==null||a.renderAdd(n,this.name,p(this.getAttrs(t),{description:r,class:this.getBulletItemClass()}),e,`bulletItem-${i}`)}),n}return[]}}})))()}var D,O,k;function A(){return(A=e((()=>{E(),n(),u(),D=class{constructor(e,t,n,r,i,a,o,s,c={}){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),v(this,`list`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{BulletItemIncludeConstructor:l=T}=c;this.list=new l(i,e,a)}getHtml(){if(this.props.html)return this.props.html.replace(/<li>/gi,`<li class="${this.list.getClasses()}">`)}},O={},k=class extends m{constructor(e,t,n,r=D){super(e,t,n),v(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.item.getHtml(),t={...this.getAttrs(),class:this.classes?.value.main},n=[...this.item.list.render()];return this.slots&&`default`in this.slots&&this.initSlot(`default`,n),e?a(`ul`,{...t,innerHTML:e}):a(`ul`,t,n)}}})))()}var j;function M(){return(M=e((()=>{C(),j=w})))()}var N;function P(){return(P=e((()=>{A(),N={...O}})))()}var F;function I(){return(I=e((()=>{n(),A(),M(),P(),F=i({name:`D1Bullet`,__name:`D1Bullet`,props:o({list:{},itemAttrs:{},html:{}},N),setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-bullet":!0}})),u=l(()=>({})),d=new k(`d1.bullet`,a,{emits:i,classes:o,styles:u,components:{bulletItem:j}}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1Bullet`,exportName:`default`,displayName:`D1Bullet`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Bullet/D1Bullet.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{y(),P(),z=[{name:`html`,type:`string`},{name:`itemAttrs`,type:`ConstrBind<DescriptionProps>`},{name:`list`,type:`string[]`}],B=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[],H={component:`Bullet`,props:z,slots:B,events:V,defaults:N,wikiDesign:_}})))()}var W;function G(){return(G=e((()=>{d(),h(),U(),W=new b(H.component,H.props,H.defaults,H.wikiDesign,f,g)})))()}var K=t({Bullet:()=>J,BulletHtml:()=>Y,__namedExportsOrder:()=>X,default:()=>q}),q,J,Y,X;function Z(){return(Z=e((()=>{R(),G(),q={title:`Ui/Bullet`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1Bullet:L},setup:()=>({args:e}),template:`
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