import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{Dt as n,qt as r}from"./iframe-53vFWNoU.js";import{t as i}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as a,l as o,n as s,o as c,t as l,u}from"./wiki-DwIxUKqL.js";import{i as d,n as f,r as p,t as m}from"./D1MenuCountry-BhLvbVZY.js";var h,g,_,v,y=t((()=>{l(),d(),h=[{name:`countryList`,type:`string[]`},{name:`disabled`,type:`boolean`},{name:`isSelectedByValue`,type:`boolean`},{name:`language`,type:`string`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`selected`,type:`ListSelectedList`},{name:`showPhoneCode`,type:`boolean`}],g=[],_=[],v={component:`MenuCountry`,props:h,slots:g,events:_,defaults:p,wikiDesign:s}})),b,x=t((()=>{a(),c(),y(),b=new u(v.component,v.props,v.defaults,v.wikiDesign,o,i)})),S=e({MenuCountry:()=>w,MenuCountryFilter:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E,D=t((()=>{f(),x(),n(),C={title:`Ui/MenuCountry`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1MenuCountry:m},setup:()=>({args:e}),template:`
      <D1MenuCountry v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Country</button>
      </template>
    </D1MenuCountry>
    `})},T={name:`Фильтрация стран`,render:()=>({components:{D1MenuCountry:m},setup(){return{selectedValue:r(`US`),list:[`US`,`CA`,`MX`,`GB`,`FR`,`DE`,`IT`,`ES`]}},template:`
        <D1MenuCountry
          v-model:selected="selectedValue"
          :country-list="list"
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
          :country-list="list"
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