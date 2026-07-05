import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Ft as n,Jt as r,Lt as i,Rt as a,Ut as o,an as s,c,nn as l,u,zt as d}from"./iframe-B-LNhFWZ.js";import{d as f,f as p,m,n as h,o as g,s as _,t as v,u as y}from"./wiki-DgltPJFG.js";import{t as b}from"./ComponentIncludeAbstract-UnR7KeBc-DcJ8jW1a.js";import{i as x,n as S,r as C,t as w}from"./MenuCountryDesign-CNOU-9no-DyAsHiWd.js";import{n as T,t as E}from"./Menu-DAWSIMgR.js";var D,O,k,A=t((()=>{p(),b(),S(),n(),u(),D=class extends w{initFlagList(){return new c(this.refs.language).getNationalLanguage(this.refs.list)}},O={...C},k=class extends x{constructor(e,t,n,r=D){super(e,t,n,r)}}})),j,M=t((()=>{A(),j={...O}})),N=t((()=>{})),P,F=t((()=>{n(),A(),T(),M(),N(),P=d({name:`D1MenuLanguage`,__name:`D1MenuLanguage`,props:o({disabled:{type:Boolean},menuAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},selected:{type:[Number,String,Boolean,Array]},list:{},showPhoneCode:{type:Boolean},isSelectedByValue:{type:Boolean},language:{}},j),emits:[`update:selected`,`update:modelSelected`,`click`,`clickLite`,`updateValue`],setup(e,{expose:t,emit:n}){let o=new k(`d1.menuLanguage`,e,{emits:n,classes:i(()=>({main:{"d1-menuLanguage":!0}})),styles:i(()=>({})),components:{menu:E},compMod:{menu:{itemAttrs:{iconAttrs:{rect:!0,size:`xl`}}}}}),c=o.render();return t(o.expose()),(e,t)=>(r(),a(s(c)))}})})),I,L=t((()=>{F(),F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1MenuLanguage`,exportName:`default`,displayName:`D1MenuLanguage`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/MenuLanguage/D1MenuLanguage.vue`]})})),R,z,B,V,H=t((()=>{v(),M(),R=[{name:`disabled`,type:`boolean`},{name:`isSelectedByValue`,type:`boolean`},{name:`language`,type:`string`},{name:`list`,type:`string[]`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`showPhoneCode`,type:`boolean`}],z=[{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`control`,description:`Control slot for window management / Слот управления для управления окном`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]}],B=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]},{name:`updateValue`,description:`Event for updating the value/ Событие обновления значения`,properties:[{name:`value?`,type:`NumberOrStringOrBoolean | undefined`}]}],V={component:`MenuLanguage`,props:R,slots:z,events:B,defaults:j,wikiDesign:h}})),U,W=t((()=>{f(),_(),H(),U=new y(V.component,V.props,V.defaults,V.wikiDesign,g,m)})),G=e({MenuLanguage:()=>q,MenuLanguageFilter:()=>J,__namedExportsOrder:()=>Y,default:()=>K}),K,q,J,Y,X=t((()=>{L(),W(),n(),K={title:`Ui/MenuLanguage`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1MenuLanguage:I},setup:()=>({args:e}),template:`
      <D1MenuLanguage v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Language</button>
      </template>
    </D1MenuLanguage>
    `})},J={name:`Фильтрация языков`,render:()=>({components:{D1MenuLanguage:I},setup(){return{selectedValue:l(`en`),list:[`en`,`ru`,`vi`,`zh`,`fr`,`de`]}},template:`
        <D1MenuLanguage
          v-model:selected="selectedValue"
          :list="list"
          is-selected-by-value
        >
          <template #control="{binds, selectedNames}">
            <button class="wiki-storybook-button" v-bind="binds">
              Selected: {{ selectedNames.value[0] || 'None' }}
            </button>
          </template>
        </D1MenuLanguage>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1MenuLanguage
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1MenuLanguage v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Language</button>
      </template>
    </D1MenuLanguage>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Фильтрация языков',
  render: () => ({
    components: {
      D1MenuLanguage
    },
    setup() {
      return {
        selectedValue: ref('en'),
        list: ['en', 'ru', 'vi', 'zh', 'fr', 'de']
      };
    },
    template: \`
        <D1MenuLanguage
          v-model:selected="selectedValue"
          :list="list"
          is-selected-by-value
        >
          <template #control="{binds, selectedNames}">
            <button class="wiki-storybook-button" v-bind="binds">
              Selected: {{ selectedNames.value[0] || 'None' }}
            </button>
          </template>
        </D1MenuLanguage>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y=[`MenuLanguage`,`MenuLanguageFilter`]}));X();export{q as MenuLanguage,J as MenuLanguageFilter,Y as __namedExportsOrder,K as default,W as i,X as n,U as r,G as t};