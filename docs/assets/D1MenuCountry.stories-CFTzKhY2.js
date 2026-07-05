import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Ft as n,nn as r}from"./iframe-B-LNhFWZ.js";import{d as i,m as a,n as o,o as s,s as c,t as l,u}from"./wiki-DgltPJFG.js";import{i as d,n as f,r as p,t as m}from"./D1MenuCountry-CidH9AER.js";var h,g,_,v,y=t((()=>{l(),d(),h=[{name:`disabled`,type:`boolean`},{name:`isSelectedByValue`,type:`boolean`},{name:`language`,type:`string`},{name:`list`,type:`string[]`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`showPhoneCode`,type:`boolean`}],g=[{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`control`,description:`Control slot for window management / Слот управления для управления окном`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]},{name:`updateValue`,description:`Event for updating the value/ Событие обновления значения`,properties:[{name:`value?`,type:`NumberOrStringOrBoolean | undefined`}]}],v={component:`MenuCountry`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})),b,x=t((()=>{i(),c(),y(),b=new u(v.component,v.props,v.defaults,v.wikiDesign,s,a)})),S=e({MenuCountry:()=>w,MenuCountryFilter:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E,D=t((()=>{f(),x(),n(),C={title:`Ui/MenuCountry`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1MenuCountry:m},setup:()=>({args:e}),template:`
      <D1MenuCountry v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Country</button>
      </template>
    </D1MenuCountry>
    `})},T={name:`Фильтрация стран`,render:()=>({components:{D1MenuCountry:m},setup(){return{selectedValue:r(`US`),list:[`US`,`CA`,`MX`,`GB`,`FR`,`DE`,`IT`,`ES`]}},template:`
        <D1MenuCountry
          v-model:selected="selectedValue"
          :list="list"
          is-selected-by-value
        >
          <template #control="{binds, selectedNames}">
            <button class="wiki-storybook-button" v-bind="binds">
              Selected: {{ selectedNames.value[0] || 'None' }}
            </button>
          </template>
        </D1MenuCountry>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1MenuCountry
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1MenuCountry v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Country</button>
      </template>
    </D1MenuCountry>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Фильтрация стран',
  render: () => ({
    components: {
      D1MenuCountry
    },
    setup() {
      return {
        selectedValue: ref('US'),
        list: ['US', 'CA', 'MX', 'GB', 'FR', 'DE', 'IT', 'ES']
      };
    },
    template: \`
        <D1MenuCountry
          v-model:selected="selectedValue"
          :list="list"
          is-selected-by-value
        >
          <template #control="{binds, selectedNames}">
            <button class="wiki-storybook-button" v-bind="binds">
              Selected: {{ selectedNames.value[0] || 'None' }}
            </button>
          </template>
        </D1MenuCountry>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`MenuCountry`,`MenuCountryFilter`]}));D();export{w as MenuCountry,T as MenuCountryFilter,E as __namedExportsOrder,C as default,x as i,D as n,b as r,S as t};