import{c as b,d as S,h as g,k as f,m as D,s as h,l as k,n as T,u as _,o as B}from"./iframe-BGVIV1-M.js";import{_ as x}from"./D1Icon-BgbSUe0A.js";import{_ as L}from"./D1Progress-C0TI2H2s.js";import{_ as w}from"./D1Ripple-BDM2s-Z1.js";import{R as I,g as P}from"./RippleInclude-LwaydNFr.js";import{L as $}from"./LabelInclude-nKXwVxUo.js";import{C as M}from"./CaptionInclude-CkSTBL66.js";import{D as q}from"./DescriptionInclude-BwB1qYqJ.js";import{E as A,I as E,a as O}from"./EventClickInclude-BTsveQTp.js";import{S as V}from"./SkeletonInclude-3sHaEU0y.js";import{P as H}from"./ProgressInclude-CpNMlIc0.js";import{W as R,w as X,a as N,b as W}from"./wiki-BNdC282o.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as j}from"./D1Skeleton-T6eLt5ZL.js";let G=class{constructor(n,l,s,e,t,a,i,m){this.props=n,this.refs=l,this.element=s,this.classDesign=e,this.className=t,this.components=a,this.slots=i,this.emits=m;const u=new H(n,t,a,{inverse:!0,position:"bottom"});this.skeleton=new V(n,e,["classTextVariant"]),this.label=new $(n,t,void 0,i,void 0,void 0,void 0,this.skeleton),this.caption=new M(n,t,i),this.description=new q(n,t,i,this.skeleton),this.enabled=new A(n,u),this.icon=new E(n,t,a),this.progress=u,this.ripple=new I(t,a,this.enabled),this.event=new O(n,this.enabled,m)}progress;skeleton;label;description;caption;enabled;icon;ripple;event;classes=b(()=>({[`${this.className}--description`]:this.description.is.value,[P(this.classDesign)]:!0}));getClassesSub(){return{label:`${this.className}__label`,description:`${this.className}__description`,caption:`${this.className}__caption`,trailing:`${this.className}__trailing`}}};const U={tag:"div",divider:!0};class z extends S{item;constructor(n,l,s){super(n,l,s),this.item=new G(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:this.item.classes.value,context:this.getSubClass("context"),contextTrailing:this.getSubClass("contextTrailing"),label:this.getSubClass("label"),description:this.getSubClass("description"),caption:this.getSubClass("caption"),icon:this.getSubClass("icon"),trailing:this.getSubClass("trailing"),body:this.getSubClass("body"),loading:this.getSubClass("loading")}}initStyles(){return{}}initRender(){return g(this.props.tag??"div",{...this.getAttrs(),class:this.classes?.value.main,"data-value":this.props.value,"data-divider":this.props.divider?"active":void 0,onClick:this.item.event.onClick},[...this.item.icon.render(),...this.renderContext(),...this.renderTrailing(),...this.renderBody(),...this.item.ripple.render(),...this.item.progress.render()])}renderContext=()=>[g("div",{class:this.classes?.value.context},[...this.item.label.render(),...this.item.caption.render(),...this.item.description.render()])];renderTrailing=()=>this.slots&&"trailing"in this.slots?[g("div",{class:this.classes?.value.contextTrailing},this.initSlot("trailing",void 0,this.item.getClassesSub()))]:[];renderBody=()=>this.slots&&"body"in this.slots?[g("div",{class:this.classes?.value.body},this.initSlot("body",void 0,this.item.getClassesSub()))]:[]}const v={dividerLabel:["always","none","adaptiveSm","adaptiveMd","adaptiveLg","adaptiveXl","adaptive2xl","containerSm","containerMd","containerLg","containerXl","container2xl"],padding:["sm","md","lg","ySm","yMd","yLg","none"]},C={...U,divider:!0,padding:"yMd"},p=f({name:"D1Cell",__name:"D1Cell",props:D({tag:{},divider:{type:Boolean},label:{},description:{},caption:{},readonly:{type:Boolean},disabled:{type:Boolean},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},icon:{},loading:{type:[Boolean,Object]},isSkeleton:{type:Boolean},to:{},value:{},detail:{},focus:{type:Boolean},dynamic:{type:Boolean},dynamicHover:{type:Boolean},dividerLabel:{},iconTop:{type:Boolean},padding:{}},C),emits:["click","clickLite"],setup(o,{expose:n,emit:l}){const s=l,e=o,t=b(()=>({main:{"d1-cell":!0,"d1-cell--focus":e.focus,"d1-cell--selected":e.selected,"d1-cell--readonly":e.readonly,"d1-cell--disabled":e.disabled,"d1-cell--dynamic":e.dynamic,"d1-cell--dynamicHover":e.dynamicHover,"d1-cell--divider":e.divider,[`d1-cell--dividerLabel--${e.dividerLabel}`]:h(v.dividerLabel,e.dividerLabel),"d1-cell--iconTop":e.iconTop,[`d1-cell--padding--${e.padding}`]:h(v.padding,e.padding)}})),a=b(()=>({})),i=new z("d1.cell",e,{emits:s,classes:t,styles:a,components:{icon:x,progress:L,ripple:w}}),m=i.render();return n(i.expose()),(u,Q)=>(B(),k(T(_(m))))}});p.__docgenInfo={name:"D1Cell",exportName:"default",displayName:"D1Cell",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"ySm"'},{name:'"yMd"'},{name:'"yLg"'},{name:'"none"'}]}},{name:"iconTop",required:!1,type:{name:"boolean"}},{name:"dividerLabel",required:!1,type:{name:"union",elements:[{name:'"always"'},{name:'"none"'},{name:'"adaptiveSm"'},{name:'"adaptiveMd"'},{name:'"adaptiveLg"'},{name:'"adaptiveXl"'},{name:'"adaptive2xl"'},{name:'"containerSm"'},{name:'"containerMd"'},{name:'"containerLg"'},{name:'"containerXl"'},{name:'"container2xl"'}]}},{name:"divider",required:!1,type:{name:"boolean"}},{name:"dynamicHover",required:!1,type:{name:"boolean"}},{name:"dynamic",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"focus",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Git/dxt-ui/packages/d1/src/components/Ui/Cell/D1Cell.vue"]};const F=[{name:"caption",type:"string | number"},{name:"description",type:"string | number"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"divider",type:"boolean"},{name:"dividerLabel",type:"string",option:["always","none","adaptiveSm","adaptiveMd","adaptiveLg","adaptiveXl","adaptive2xl","containerSm","containerMd","containerLg","containerXl","container2xl"]},{name:"dynamic",type:"boolean"},{name:"dynamicHover",type:"boolean"},{name:"focus",type:"boolean"},{name:"icon",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconAttrs",type:"ConstrBind<IconPropsBasic<ImagePropsBasic>>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTop",type:"boolean"},{name:"iconTrailing",type:"IconValue<IconPropsBasic<ImagePropsBasic>>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"loading",type:"boolean | ConstrBind<ProgressPropsBasic>"},{name:"padding",type:"string",option:["none","sm","md","lg","ySm","yMd","yLg"]},{name:"readonly",type:"boolean"},{name:"selected",type:"boolean"},{name:"tag",type:"string"},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"value",type:"any"}],y=new R("Cell",F,C,X,N,W),J={title:"Ui/Cell",component:p,parameters:{design:"d1",docs:{description:{component:y.getDescription()}}},argTypes:y.getWiki(),args:y.getValues()},r={render:o=>({components:{D1Cell:p},setup:()=>({args:o}),template:`
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    `})},d={name:"Загрузка скелетона",render:()=>({components:{D1Cell:p,D1Skeleton:j},template:`
        <D1Skeleton :active="true">
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
            label="A"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the cell."
            label="Very Long Label Example for Skeleton"
          />
        </D1Skeleton>
    `})},c={name:"Использование слотов",render:()=>({components:{D1Cell:p},template:`
        <D1Cell icon="home">
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </D1Cell>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Cell
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1Cell,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
            label="A"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the cell."
            label="Very Long Label Example for Skeleton"
          />
        </D1Skeleton>
    \`
  })
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Cell
    },
    template: \`
        <D1Cell icon="home">
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </D1Cell>
    \`
  })
}`,...c.parameters?.docs?.source}}};const K=["Cell","CellSkeleton","CellSlots"],ge=Object.freeze(Object.defineProperty({__proto__:null,Cell:r,CellSkeleton:d,CellSlots:c,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{ge as C,r as a,y as b,d as c,c as d};
