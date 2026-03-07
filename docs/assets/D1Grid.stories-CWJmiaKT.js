import{Q as y,h as k,I as b,K as g,L as w,d as p,N as h}from"./iframe-B21bnPHY.js";import{w as G,W as D,a as f,b as v}from"./wiki-BeIQM_4B.js";import"./jsx-runtime-u17CrQMm.js";var _=Object.defineProperty,x=(e,s,i)=>s in e?_(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,S=(e,s,i)=>x(e,s+"",i);class z{constructor(s,i,o,t,d,c,a,l){this.props=s,this.refs=i,this.element=o,this.classDesign=t,this.className=d,this.components=c,this.slots=a,this.emits=l}}const N={};class O extends y{constructor(s,i,o,t=z){super(s,i,o),S(this,"item"),this.item=new t(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){var s;return k("div",{...this.getAttrs(),class:(s=this.classes)==null?void 0:s.value.main},this.initSlot("default"))}}const T={...N},n=b({name:"D1Grid",__name:"D1Grid",setup(e,{expose:s,emit:i}){const o=i,t=e,d=p(()=>({main:{"d1-grid":!0}})),c=p(()=>({})),a=new O("d1.grid",t,{emits:o,classes:d,styles:c}),l=a.render();return s(a.expose()),(B,E)=>(h(),g(w(l)))}});n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{name:"D1Grid",exportName:"default",displayName:"D1Grid",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue"]});const W=[],m={component:"Grid",props:W,defaults:T,wikiDesign:G},u=new D(m.component,m.props,m.defaults,m.wikiDesign,f,v),j={title:"Ui/Grid",component:n,parameters:{design:"d1",docs:{description:{component:u.getDescription()}}},argTypes:u.getWiki(),args:u.getValues()},r={render:e=>({components:{D1Grid:n},setup:()=>({args:e}),template:`
      <D1Grid>
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
          style="grid-column: span 2;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
          style="grid-column: span 4;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
          style="grid-column: span 6;"
        />
    </D1Grid>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Grid
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Grid>
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
          style="grid-column: span 2;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
          style="grid-column: span 4;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
          style="grid-column: span 6;"
        />
    </D1Grid>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...r.parameters?.docs?.source}}};const C=["Grid"],U=Object.freeze(Object.defineProperty({__proto__:null,Grid:r,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{U as G,r as a,u as b};
