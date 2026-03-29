import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,_t as r}from"./iframe-CqYdK-d6.js";import{a as i,d as a,g as o,l as s,n as c,t as l,u}from"./wiki-BtAa-rOh.js";import{i as d,n as f,r as p,t as m}from"./D1TabsNavigation-CExgdCVj.js";var h,g,_,v,y=e((()=>{u(),l(),d(),h=[{name:`divider`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`horizontalScrollAlign`,type:`string`,option:[`block`,`left`]},{name:`horizontalScrollAttrs`,type:`ConstrBind<HorizontalScrollPropsBasic>`},{name:`horizontalScrollFlush`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<TabItem>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<any>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`(value: ListSelectedList) => void`},{name:`onUpdate:selected`,type:`(value: ListSelectedList) => void`},{name:`selected`,type:`ListSelectedList`},{name:`tag`,type:`TabItem['tag']`}],g=[{name:`leading`},{name:`trailing`}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],v={component:`TabsNavigation`,props:h,slots:g,events:_,defaults:p,wikiDesign:c}})),b,x=e((()=>{u(),i(),y(),b=new a(v.component,v.props,v.defaults,v.wikiDesign,s,o)})),S=t({TabsNavigation:()=>w,TabsNavigationBasic:()=>T,TabsNavigationVModel:()=>E,__namedExportsOrder:()=>D,default:()=>C}),C,w,T,E,D,O=e((()=>{f(),x(),r(),C={title:`Ui/TabsNavigation`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1TabsNavigation:m},setup:()=>({args:e}),template:`
      <D1TabsNavigation v-bind="args"/>
    `})},T={name:`Базовое использование`,render:()=>({components:{D1TabsNavigation:m},setup(){return{list:[{label:`Tab 1`,value:`1`},{label:`Tab 2`,value:`2`},{label:`Tab 3`,value:`3`}],selected:n(`2`)}},template:`
        <D1TabsNavigation :list="list" v-model:selected="selected"/>
    `})},E={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1TabsNavigation:m},setup(){return{list:[{label:`Tab 1`,value:`1`},{label:`Tab 2`,value:`2`},{label:`Tab 3`,value:`3`}],selected:n(`1`)}},template:`
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
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`TabsNavigation`,`TabsNavigationBasic`,`TabsNavigationVModel`]}));O();export{w as TabsNavigation,T as TabsNavigationBasic,E as TabsNavigationVModel,D as __namedExportsOrder,C as default,x as i,O as n,b as r,S as t};