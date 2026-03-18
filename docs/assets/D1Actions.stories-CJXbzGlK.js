import{d as c,_ as e}from"./D1Actions-DTgeW8_C.js";import{w as m,W as p,a as d,b}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const u=[{name:"align",type:"string",option:["none","center","left","right","block","auto"]},{name:"buttonAttrs",type:"ConstrBind<Button>"},{name:"buttonSecondaryAttrs",type:"ConstrBind<Button>"},{name:"flexible",type:"string",option:["adaptiveSm","adaptiveMd","adaptiveLg","adaptiveXl","adaptive2xl","containerSm","containerMd","containerLg","containerXl","container2xl"]},{name:"list",type:"any[]"},{name:"listSecondary",type:"any[]"},{name:"padding",type:"string",option:["none","sm","md","lg","ySm","yMd","yLg"]},{name:"paddingByIndent",type:"boolean"},{name:"wrap",type:"boolean"}],r={component:"Actions",props:u,defaults:c,wikiDesign:m},l=new p(r.component,r.props,r.defaults,r.wikiDesign,d,b),y={title:"Ui/Actions",component:e,parameters:{design:"d1",docs:{description:{component:l.getDescription()}}},argTypes:l.getWiki(),args:l.getValues()},t={},a={name:"Базовые",render:()=>({components:{D1Actions:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    `})},o={name:"Выравнивание",render:()=>({components:{D1Actions:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            align="left"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="center"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="right"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="block"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    `})},n={name:"Основная и вторичная группы",render:()=>({components:{D1Actions:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
            :list-secondary="[
              { label: 'Delete', text: true }
            ]"
          />
        </div>
    `})},s={name:"Гибкая раскладка",render:()=>({components:{D1Actions:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            flexible="adaptive"
            :list="[
              { label: 'Cancel' },
              { label: 'Apply' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    `})},i={name:"Пользовательские стили кнопок",render:()=>({components:{D1Actions:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel', outlined: true },
              { label: 'Save', primary: true }
            ]"
            :button-attrs="{ size: 'large' }"
          />
        </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Actions
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Выравнивание',
  render: () => ({
    components: {
      D1Actions
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            align="left"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="center"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="right"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="block"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Основная и вторичная группы',
  render: () => ({
    components: {
      D1Actions
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
            :list-secondary="[
              { label: 'Delete', text: true }
            ]"
          />
        </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Гибкая раскладка',
  render: () => ({
    components: {
      D1Actions
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            flexible="adaptive"
            :list="[
              { label: 'Cancel' },
              { label: 'Apply' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Пользовательские стили кнопок',
  render: () => ({
    components: {
      D1Actions
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel', outlined: true },
              { label: 'Save', primary: true }
            ]"
            :button-attrs="{ size: 'large' }"
          />
        </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};const A=["Actions","ActionsBasic","ActionsAlignment","ActionsPrimarySecondary","ActionsFlexible","ActionsCustomButtons"],D=Object.freeze(Object.defineProperty({__proto__:null,Actions:t,ActionsAlignment:o,ActionsBasic:a,ActionsCustomButtons:i,ActionsFlexible:s,ActionsPrimarySecondary:n,__namedExportsOrder:A,default:y},Symbol.toStringTag,{value:"Module"}));export{D as A,t as a,l as b};
