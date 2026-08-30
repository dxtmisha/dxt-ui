import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{in as n,kt as r}from"./library-CO1fW2cN.js";import{d as i,f as a,i as o,l as s,n as c,t as l,u}from"./wiki-BMj2WokS.js";import{i as d,n as f,r as p,t as m}from"./D1CropArea-DVIMTAuO.js";var h,g,_,v;function y(){return(y=e((()=>{l(),d(),h=[{name:`disabled`,type:`boolean`},{name:`disabledBottom`,type:`boolean`},{name:`disabledLeft`,type:`boolean`},{name:`disabledRight`,type:`boolean`},{name:`disabledTop`,type:`boolean`},{name:`max`,type:`NumberOrString`},{name:`min`,type:`NumberOrString`},{name:`modelValue`,type:`Value`},{name:`onUpdate:modelValue`,type:`((value: any) => void)`},{name:`onUpdate:value`,type:`((value: any) => void)`},{name:`readonly`,type:`boolean`},{name:`step`,type:`NumberOrString`},{name:`tabindex`,type:`string | number`},{name:`tag`,type:`string`},{name:`value`,type:`CropAreaCoordinator`}],g=[],_=[{name:`resize`,description:`Event emitted during resizing or moving / Событие, вызываемое при изменении размера или перемещении`,properties:[{name:`parameters`,type:`CropAreaEventParameters`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],v={component:`CropArea`,props:h,slots:g,events:_,defaults:p,wikiDesign:c}})))()}var b;function x(){return(x=e((()=>{i(),s(),y(),b=new u(v.component,v.props,v.defaults,v.wikiDesign,o,a)})))()}var S=t({CropArea:()=>w,CropAreaVModel:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E;function D(){return(D=e((()=>{f(),x(),r(),C={title:`Ui/CropArea`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1CropArea:m},setup:()=>({args:e}),template:`
      <div
      class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
    >
      <D1CropArea v-bind="args"/>
    </div>
    `})},T={name:`v-model`,render:()=>({components:{D1CropArea:m},setup(){return{coordinator:n([15,20,15,20])}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
          >
            <D1CropArea v-model="coordinator"/>
          </div>
        </div>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1CropArea
    },
    setup: () => ({
      args
    }),
    template: \`
      <div
      class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
    >
      <D1CropArea v-bind="args"/>
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'v-model',
  render: () => ({
    components: {
      D1CropArea
    },
    setup() {
      return {
        coordinator: ref([15, 20, 15, 20])
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
          >
            <D1CropArea v-model="coordinator"/>
          </div>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`CropArea`,`CropAreaVModel`]})))()}export{b as a,D as i,T as n,x as o,S as r,w as t};