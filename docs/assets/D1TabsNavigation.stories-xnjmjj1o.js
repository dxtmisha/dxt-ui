import{d as c,_ as i}from"./D1TabsNavigation-CU6_3K6G.js";import{w as b,W as d,a as m,b as p}from"./wiki-BeTUR4cU.js";import{r}from"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const u=[{name:"divider",type:"boolean"},{name:"focus",type:"boolean"},{name:"horizontalScrollAlign",type:"string",option:["block","left"]},{name:"horizontalScrollAttrs",type:"ConstrBind<HorizontalScrollPropsBasic>"},{name:"horizontalScrollFlush",type:"boolean"},{name:"itemAttrs",type:"ConstrBind<TabItem>"},{name:"keyLabel",type:"string"},{name:"keyValue",type:"string"},{name:"list",type:"ListRecord<any>"},{name:"modelSelected",type:"ListSelectedList"},{name:"onUpdate:modelSelected",type:"(value: ListSelectedList) => void"},{name:"onUpdate:selected",type:"(value: ListSelectedList) => void"},{name:"selected",type:"ListSelectedList"},{name:"tag",type:"TabItem['tag']"}],s={component:"TabsNavigation",props:u,defaults:c,wikiDesign:b},n=new d(s.component,s.props,s.defaults,s.wikiDesign,m,p),v={title:"Ui/TabsNavigation",component:i,parameters:{design:"d1",docs:{description:{component:n.getDescription()}}},argTypes:n.getWiki(),args:n.getValues()},t={render:e=>({components:{D1TabsNavigation:i},setup:()=>({args:e}),template:`
      <D1TabsNavigation v-bind="args"/>
    `})},a={name:"Базовое использование",render:()=>({components:{D1TabsNavigation:i},setup(){const e=[{label:"Tab 1",value:"1"},{label:"Tab 2",value:"2"},{label:"Tab 3",value:"3"}],l=r("2");return{list:e,selected:l}},template:`
        <D1TabsNavigation :list="list" v-model:selected="selected"/>
    `})},o={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1TabsNavigation:i},setup(){const e=[{label:"Tab 1",value:"1"},{label:"Tab 2",value:"2"},{label:"Tab 3",value:"3"}],l=r("1");return{list:e,selected:l}},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
              <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
              <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
              <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
            </div>
            <div class="wiki-storybook-item--padding">
              Current value: {{ selected }}
            </div>
            <D1TabsNavigation :list="list" v-model:selected="selected"/>
          </div>
        </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1TabsNavigation
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1TabsNavigation v-bind="args"/>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1TabsNavigation
    },
    setup() {
      const list = [{
        label: 'Tab 1',
        value: '1'
      }, {
        label: 'Tab 2',
        value: '2'
      }, {
        label: 'Tab 3',
        value: '3'
      }];
      const selected = ref('2');
      return {
        list,
        selected
      };
    },
    template: \`
        <D1TabsNavigation :list="list" v-model:selected="selected"/>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1TabsNavigation
    },
    setup() {
      const list = [{
        label: 'Tab 1',
        value: '1'
      }, {
        label: 'Tab 2',
        value: '2'
      }, {
        label: 'Tab 3',
        value: '3'
      }];
      const selected = ref('1');
      return {
        list,
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
              <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
              <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
              <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
            </div>
            <div class="wiki-storybook-item--padding">
              Current value: {{ selected }}
            </div>
            <D1TabsNavigation :list="list" v-model:selected="selected"/>
          </div>
        </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const k=["TabsNavigation","TabsNavigationBasic","TabsNavigationVModel"],S=Object.freeze(Object.defineProperty({__proto__:null,TabsNavigation:t,TabsNavigationBasic:a,TabsNavigationVModel:o,__namedExportsOrder:k,default:v},Symbol.toStringTag,{value:"Module"}));export{S as T,t as a,n as b,a as c,o as d};
