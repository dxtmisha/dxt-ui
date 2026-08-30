import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,Nt as o,Ot as s,Pt as c,in as l,kt as u,sn as d}from"./library-CO1fW2cN.js";import{d as f,f as p,i as m,l as h,n as g,t as _,u as v}from"./wiki-BMj2WokS.js";import{a as y,i as b,n as x,o as S,r as C,t as w}from"./HorizontalScroll-C-naZ5wp.js";import{n as T,t as E}from"./D1SegmentControlItem-DhLrAZA1.js";var D,O,k;function A(){return(A=e((()=>{b(),s(),D=class extends S{},O={...C,horizontalScrollAlign:!0},k=class extends y{constructor(e,t,n,i=D){super(e,t,n,i),r(this,`itemComponent`,`segmentControlItem`)}}})))()}var j;function M(){return(M=e((()=>{T(),j=E})))()}var N;function P(){return(P=e((()=>{A(),N={...O}})))()}var F;function I(){return(I=e((()=>{u(),A(),x(),M(),P(),F=i({name:`D1SegmentControl`,__name:`D1SegmentControl`,props:n({horizontalScrollBleed:{type:Boolean},horizontalScrollAlign:{},horizontalScrollAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},selected:{type:[Number,String,Boolean,Array]},list:{},tag:{},keyLabel:{},keyValue:{},itemAttrs:{},divider:{type:Boolean}},N),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:n}){let r=n,i=e,s=o(()=>({main:{"d1-segmentControl":!0,"d1-segmentControl--divider":i.divider}})),l=o(()=>({})),u=new k(`d1.segmentControl`,i,{emits:r,classes:s,styles:l,components:{horizontalScroll:w,segmentControlItem:j}}),f=u.render();return t(u.expose()),(e,t)=>(a(),c(d(f)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1SegmentControl`,exportName:`default`,displayName:`D1SegmentControl`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/SegmentControl/D1SegmentControl.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{_(),P(),z=[{name:`divider`,type:`boolean`},{name:`horizontalScrollAlign`,type:`string`,option:[`block`,`left`]},{name:`horizontalScrollAttrs`,type:`ConstrBind<HorizontalScrollPropsBasic>`},{name:`horizontalScrollBleed`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<SegmentControlItemProps>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<SegmentControlItemProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`tag`,type:`string`}],B=[{name:`leading`,description:`Slot for content before the tabs/ Слот для содержимого перед вкладками`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for content after the tabs/ Слот для содержимого после вкладок`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],H={component:`SegmentControl`,props:z,slots:B,events:V,defaults:N,wikiDesign:g}})))()}var W;function G(){return(G=e((()=>{f(),h(),U(),W=new v(H.component,H.props,H.defaults,H.wikiDesign,m,p)})))()}var K=t({SegmentControl:()=>J,SegmentControlVModel:()=>Y,__namedExportsOrder:()=>X,default:()=>q}),q,J,Y,X;function Z(){return(Z=e((()=>{R(),G(),u(),q={title:`Ui/SegmentControl`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1SegmentControl:L},setup:()=>({args:e}),template:`
      <D1SegmentControl v-bind="args"/>
    `})},Y={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1SegmentControl:L},setup(){return{list:[{label:`Segment 1`,value:`1`},{label:`Segment 2`,value:`2`},{label:`Segment 3`,value:`3`}],selected:l(`1`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <D1SegmentControl :list="list" v-model:selected="selected"/>
        </div>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`SegmentControl`,`SegmentControlVModel`]})))()}export{W as a,Z as i,J as n,G as o,Y as r,K as t};