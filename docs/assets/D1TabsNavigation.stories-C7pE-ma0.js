import{n as e,r as t}from"./chunk-BneVvdWh.js";import{It as n,gt as r}from"./iframe-InwAcaLb.js";import{a as i,d as a,l as o,m as s,n as c,t as l,u}from"./wiki-DiKtF90Q.js";import{i as d,n as f,r as p,t as m}from"./D1TabsNavigation-uBLVLepq.js";var h,g,_=e((()=>{u(),l(),d(),h=[{name:`divider`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`horizontalScrollAlign`,type:`string`,option:[`block`,`left`]},{name:`horizontalScrollAttrs`,type:`ConstrBind<HorizontalScrollPropsBasic>`},{name:`horizontalScrollFlush`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<TabItem>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<any>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`(value: ListSelectedList) => void`},{name:`onUpdate:selected`,type:`(value: ListSelectedList) => void`},{name:`selected`,type:`ListSelectedList`},{name:`tag`,type:`TabItem['tag']`}],g={component:`TabsNavigation`,props:h,defaults:p,wikiDesign:c}})),v,y=e((()=>{u(),i(),_(),v=new a(g.component,g.props,g.defaults,g.wikiDesign,o,s)})),b=t({TabsNavigation:()=>S,TabsNavigationBasic:()=>C,TabsNavigationVModel:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T,E=e((()=>{f(),y(),r(),x={title:`Ui/TabsNavigation`,component:m,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1TabsNavigation:m},setup:()=>({args:e}),template:`
      <D1TabsNavigation v-bind="args"/>
    `})},C={name:`Базовое использование`,render:()=>({components:{D1TabsNavigation:m},setup(){return{list:[{label:`Tab 1`,value:`1`},{label:`Tab 2`,value:`2`},{label:`Tab 3`,value:`3`}],selected:n(`2`)}},template:`
        <D1TabsNavigation :list="list" v-model:selected="selected"/>
    `})},w={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1TabsNavigation:m},setup(){return{list:[{label:`Tab 1`,value:`1`},{label:`Tab 2`,value:`2`},{label:`Tab 3`,value:`3`}],selected:n(`1`)}},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`TabsNavigation`,`TabsNavigationBasic`,`TabsNavigationVModel`]}));E();export{S as TabsNavigation,C as TabsNavigationBasic,w as TabsNavigationVModel,T as __namedExportsOrder,x as default,y as i,E as n,v as r,b as t};