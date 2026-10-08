import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Rt as a,Ut as o,in as s,jt as c,tn as l}from"./library-C6UyfMBX.js";import{d as u,f as d,i as f,n as p,s as m,t as h,u as g}from"./wiki-Cqdd-d3l.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./HorizontalScroll-CPaEwOLt.js";import{n as C,t as w}from"./D1SegmentControlItem-BRuuHLYt.js";var T,E,D;function O(){return(O=e((()=>{_(),T=class extends v{},E={...b,horizontalScrollAlign:!0},D=class extends x{itemComponent=`segmentControlItem`;constructor(e,t,n,r=T){super(e,t,n,r)}}})))()}var k;function A(){return(A=e((()=>{C(),k=w})))()}var j;function M(){return(M=e((()=>{O(),j={...E}})))()}var N;function P(){return(P=e((()=>{n(),O(),y(),A(),M(),N=i({name:`D1SegmentControl`,__name:`D1SegmentControl`,props:a({horizontalScrollBleed:{type:Boolean},horizontalScrollAlign:{},horizontalScrollAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},selected:{type:[Number,String,Boolean,Array]},list:{},tag:{},keyLabel:{},keyValue:{},itemAttrs:{},divider:{type:Boolean}},j),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:n}){let i=n,a=e,l=c(()=>({main:{"d1-segmentControl":!0,"d1-segmentControl--divider":a.divider}})),u=c(()=>({})),d=new D(`d1.segmentControl`,a,{emits:i,classes:l,styles:u,components:{horizontalScroll:S,segmentControlItem:k}}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(s(f)))}})})))()}var F;function I(){return(I=e((()=>{P(),F=N,N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{name:`D1SegmentControl`,exportName:`default`,displayName:`D1SegmentControl`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/SegmentControl/D1SegmentControl.vue`]})})))()}var L,R,z,B;function V(){return(V=e((()=>{h(),M(),L=[{name:`divider`,type:`boolean`},{name:`horizontalScrollAlign`,type:`string`,option:[`block`,`left`]},{name:`horizontalScrollAttrs`,type:`ConstrBind<HorizontalScrollPropsBasic>`},{name:`horizontalScrollBleed`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<SegmentControlItemProps>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<SegmentControlItemProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`tag`,type:`string`}],R=[{name:`leading`,description:`Slot for content before the tabs/ Слот для содержимого перед вкладками`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for content after the tabs/ Слот для содержимого после вкладок`,properties:[{name:`props`,type:`(any) | undefined`}]}],z=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],B={component:`SegmentControl`,props:L,slots:R,events:z,defaults:j,wikiDesign:p}})))()}var H;function U(){return(U=e((()=>{u(),m(),V(),H=new g(B.component,B.props,B.defaults,B.wikiDesign,f,d)})))()}var W=t({SegmentControl:()=>K,SegmentControlVModel:()=>q,__namedExportsOrder:()=>J,default:()=>G}),G,K,q,J;function Y(){return(Y=e((()=>{I(),U(),n(),G={title:`Ui/SegmentControl`,component:F,parameters:{design:`d1`,docs:{description:{component:H.getDescription()}}},argTypes:H.getWiki(),args:H.getValues()},K={render:e=>({components:{D1SegmentControl:F},setup:()=>({args:e}),template:`
      <D1SegmentControl v-bind="args"/>
    `})},q={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1SegmentControl:F},setup(){return{list:[{label:`Segment 1`,value:`1`},{label:`Segment 2`,value:`2`},{label:`Segment 3`,value:`3`}],selected:l(`1`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <D1SegmentControl :list="list" v-model:selected="selected"/>
        </div>
    `})},J=[`SegmentControl`,`SegmentControlVModel`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1SegmentControl
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1SegmentControl v-bind="args"/>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1SegmentControl
    },
    setup() {
      const list = [{
        label: 'Segment 1',
        value: '1'
      }, {
        label: 'Segment 2',
        value: '2'
      }, {
        label: 'Segment 3',
        value: '3'
      }];
      const selected = ref('1');
      return {
        list,
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <D1SegmentControl :list="list" v-model:selected="selected"/>
        </div>
    \`
  })
}`,...q.parameters?.docs?.source}}}})))()}export{H as a,Y as i,K as n,U as o,q as r,W as t};