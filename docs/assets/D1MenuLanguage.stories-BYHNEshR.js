import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,in as s,jt as c,tn as l}from"./library-CUIf7uCS.js";import{O as u,T as d,d as f,l as p,m,n as h,r as g,t as _,u as v}from"./wiki-wIqBVsyI.js";import{i as y,n as b,r as x,t as S}from"./MenuCountryDesign-BwxZVYQZ-CpJrTUD0.js";import{n as C,t as w}from"./Menu-Bb_q4yuZ.js";var T,E,D;function O(){return(O=e((()=>{b(),r(),u(),T=class extends S{initFlagList(){return new d(this.refs.language).getNationalLanguage(this.refs.list)}},E={...x},D=class extends y{constructor(e,t,n,r=T){super(e,t,n,r)}}})))()}var k;function A(){return(A=e((()=>{O(),k={...E}})))()}var j;function M(){return(M=e((()=>{r(),O(),C(),A(),j=o({name:`D1MenuLanguage`,__name:`D1MenuLanguage`,props:a({disabled:{type:Boolean},menuAttrs:{},modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},selected:{type:[Number,String,Boolean,Array]},list:{},showPhoneCode:{type:Boolean},isSelectedByValue:{type:Boolean},language:{}},k),emits:[`update:selected`,`update:modelSelected`,`click`,`clickLite`,`updateValue`],setup(e,{expose:t,emit:r}){let a=r,o=e,l=n(()=>({main:{"d1-menuLanguage":!0}})),u=n(()=>({})),d=new D(`d1.menuLanguage`,o,{emits:a,classes:l,styles:u,components:{menu:w},compMod:{menu:{itemAttrs:{iconAttrs:{rect:!0,size:`xl`}}}}}),f=d.render();return t(d.expose()),(e,t)=>(i(),c(s(f)))}})})))()}var N;function P(){return(P=e((()=>{M(),N=j,j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{name:`D1MenuLanguage`,exportName:`default`,displayName:`D1MenuLanguage`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/MenuLanguage/D1MenuLanguage.vue`]})})))()}var F,I,L,R;function z(){return(z=e((()=>{_(),A(),F=[{name:`disabled`,type:`boolean`},{name:`isSelectedByValue`,type:`boolean`},{name:`language`,type:`string`},{name:`list`,type:`string[]`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`showPhoneCode`,type:`boolean`}],I=[{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`control`,description:`Control slot for window management / Слот управления для управления окном`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]}],L=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]},{name:`updateValue`,description:`Event for updating the value/ Событие обновления значения`,properties:[{name:`value?`,type:`NumberOrStringOrBoolean | undefined`}]}],R={component:`MenuLanguage`,props:F,slots:I,events:L,defaults:k,wikiDesign:h}})))()}var B;function V(){return(V=e((()=>{f(),p(),z(),B=new v(R.component,R.props,R.defaults,R.wikiDesign,g,m)})))()}var H=t({MenuLanguage:()=>W,MenuLanguageFilter:()=>G,__namedExportsOrder:()=>K,default:()=>U}),U,W,G,K;function q(){return(q=e((()=>{P(),V(),r(),U={title:`Ui/MenuLanguage`,component:N,parameters:{design:`d1`,docs:{description:{component:B.getDescription()}}},argTypes:B.getWiki(),args:B.getValues()},W={render:e=>({components:{D1MenuLanguage:N},setup:()=>({args:e}),template:`
      <D1MenuLanguage v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Language</button>
      </template>
    </D1MenuLanguage>
    `})},G={name:`Фильтрация языков`,render:()=>({components:{D1MenuLanguage:N},setup(){return{selectedValue:l(`en`),list:[`en`,`ru`,`vi`,`zh`,`fr`,`de`]}},template:`
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
    `})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K=[`MenuLanguage`,`MenuLanguageFilter`]})))()}export{B as a,q as i,W as n,V as o,G as r,H as t};