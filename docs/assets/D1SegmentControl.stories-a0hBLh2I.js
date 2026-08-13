import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,in as s,jt as c,tn as l}from"./library-CUIf7uCS.js";import{d as u,l as d,m as f,n as p,p as m,r as h,t as g,u as _}from"./wiki-wIqBVsyI.js";import{a as v,i as y,n as b,o as x,r as S,t as C}from"./HorizontalScroll-CMdlRXpI.js";import{n as w,t as T}from"./D1SegmentControlItem-D6lFRQLi.js";var E,D,O;function k(){return(k=e((()=>{y(),E=class extends x{},D={...S,horizontalScrollAlign:!0},O=class extends v{constructor(e,t,n,r=E){super(e,t,n,r),m(this,`itemComponent`,`segmentControlItem`)}}})))()}var A;function j(){return(j=e((()=>{w(),A=T})))()}var M;function N(){return(N=e((()=>{k(),M={...D}})))()}var P;function F(){return(F=e((()=>{r(),k(),b(),j(),N(),P=o({name:`D1SegmentControl`,__name:`D1SegmentControl`,props:a({horizontalScrollBleed:{type:Boolean},horizontalScrollAlign:{},horizontalScrollAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},selected:{type:[Number,String,Boolean,Array]},list:{},tag:{},keyLabel:{},keyValue:{},itemAttrs:{},divider:{type:Boolean}},M),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:r}){let a=r,o=e,l=n(()=>({main:{"d1-segmentControl":!0,"d1-segmentControl--divider":o.divider}})),u=n(()=>({})),d=new O(`d1.segmentControl`,o,{emits:a,classes:l,styles:u,components:{horizontalScroll:C,segmentControlItem:A}}),f=d.render();return t(d.expose()),(e,t)=>(i(),c(s(f)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1SegmentControl`,exportName:`default`,displayName:`D1SegmentControl`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/SegmentControl/D1SegmentControl.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{g(),N(),R=[{name:`divider`,type:`boolean`},{name:`horizontalScrollAlign`,type:`string`,option:[`block`,`left`]},{name:`horizontalScrollAttrs`,type:`ConstrBind<HorizontalScrollPropsBasic>`},{name:`horizontalScrollBleed`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<SegmentControlItemProps>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<SegmentControlItemProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`tag`,type:`string`}],z=[{name:`leading`,description:`Slot for content before the tabs/ Слот для содержимого перед вкладками`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for content after the tabs/ Слот для содержимого после вкладок`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],V={component:`SegmentControl`,props:R,slots:z,events:B,defaults:M,wikiDesign:p}})))()}var U;function W(){return(W=e((()=>{u(),d(),H(),U=new _(V.component,V.props,V.defaults,V.wikiDesign,h,f)})))()}var G=t({SegmentControl:()=>q,SegmentControlVModel:()=>J,__namedExportsOrder:()=>Y,default:()=>K}),K,q,J,Y;function X(){return(X=e((()=>{L(),W(),r(),K={title:`Ui/SegmentControl`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1SegmentControl:I},setup:()=>({args:e}),template:`
      <D1SegmentControl v-bind="args"/>
    `})},J={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1SegmentControl:I},setup(){return{list:[{label:`Segment 1`,value:`1`},{label:`Segment 2`,value:`2`},{label:`Segment 3`,value:`3`}],selected:l(`1`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <D1SegmentControl :list="list" v-model:selected="selected"/>
        </div>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`SegmentControl`,`SegmentControlVModel`]})))()}export{U as a,X as i,q as n,W as o,J as r,G as t};