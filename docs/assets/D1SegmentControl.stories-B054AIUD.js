import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Gt as n,Ut as r,Vt as i,Wt as a,Yt as o,cn as s,dn as c,en as l}from"./iframe-D7czqiJA.js";import{a as u,d,f,l as p,m,n as h,p as g,t as _,u as v}from"./wiki-CUC2UhNU.js";import{a as y,i as b,n as x,o as S,r as C,t as w}from"./HorizontalScroll-D-K6xwMR.js";import{n as T,t as E}from"./D1SegmentControlItem-BkKhA4ty.js";var D,O,k,A=t((()=>{f(),b(),D=class extends S{},O={...C,horizontalScrollAlign:!0},k=class extends y{constructor(e,t,n,r=D){super(e,t,n,r),g(this,`itemComponent`,`segmentControlItem`)}}})),j,M=t((()=>{T(),j=E})),N,P=t((()=>{A(),N={...O}})),F=t((()=>{})),I,L=t((()=>{i(),A(),x(),M(),P(),F(),I=n({name:`D1SegmentControl`,__name:`D1SegmentControl`,props:o({horizontalScrollBleed:{type:Boolean},horizontalScrollAlign:{},horizontalScrollAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},selected:{type:[Number,String,Boolean,Array]},list:{},tag:{},keyLabel:{},keyValue:{},itemAttrs:{},divider:{type:Boolean}},N),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:n}){let i=n,o=e,s=new k(`d1.segmentControl`,o,{emits:i,classes:r(()=>({main:{"d1-segmentControl":!0,"d1-segmentControl--divider":o.divider}})),styles:r(()=>({})),components:{horizontalScroll:w,segmentControlItem:j}}),u=s.render();return t(s.expose()),(e,t)=>(l(),a(c(u)))}})})),R,z=t((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1SegmentControl`,exportName:`default`,displayName:`D1SegmentControl`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/SegmentControl/D1SegmentControl.vue`]})})),B,V,H,U,W=t((()=>{_(),P(),B=[{name:`divider`,type:`boolean`},{name:`horizontalScrollAlign`,type:`string`,option:[`block`,`left`]},{name:`horizontalScrollAttrs`,type:`ConstrBind<HorizontalScrollPropsBasic>`},{name:`horizontalScrollBleed`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<SegmentControlItemProps>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<SegmentControlItemProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`tag`,type:`string`}],V=[{name:`leading`,description:`Slot for content before the tabs/ Слот для содержимого перед вкладками`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for content after the tabs/ Слот для содержимого после вкладок`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],U={component:`SegmentControl`,props:B,slots:V,events:H,defaults:N,wikiDesign:h}})),G,K=t((()=>{d(),p(),W(),G=new v(U.component,U.props,U.defaults,U.wikiDesign,u,m)})),q=e({SegmentControl:()=>Y,SegmentControlVModel:()=>X,__namedExportsOrder:()=>Z,default:()=>J}),J,Y,X,Z,Q=t((()=>{z(),K(),i(),J={title:`Ui/SegmentControl`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1SegmentControl:R},setup:()=>({args:e}),template:`
      <D1SegmentControl v-bind="args"/>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1SegmentControl:R},setup(){return{list:[{label:`Segment 1`,value:`1`},{label:`Segment 2`,value:`2`},{label:`Segment 3`,value:`3`}],selected:s(`1`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <D1SegmentControl :list="list" v-model:selected="selected"/>
        </div>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z=[`SegmentControl`,`SegmentControlVModel`]}));Q();export{Y as SegmentControl,X as SegmentControlVModel,Z as __namedExportsOrder,J as default,K as i,Q as n,G as r,q as t};