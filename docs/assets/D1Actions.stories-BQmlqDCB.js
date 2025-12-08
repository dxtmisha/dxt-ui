import{d as l,_ as e}from"./D1Actions-BJPjsPIG.js";import{W as c,w as m,a as p,b as d}from"./wiki-fb_eBW86.js";import"./iframe-BlCC38XJ.js";import"./jsx-runtime-D_zvdyIk.js";const u=[{name:"align",type:"string",option:["none","center","left","right","block","auto"]},{name:"buttonAttrs",type:"ConstrBind<ButtonProps>"},{name:"buttonSecondaryAttrs",type:"ConstrBind<ButtonProps>"},{name:"flexible",type:"string",option:["adaptiveSm","adaptiveMd","adaptiveLg","adaptiveXl","adaptive2xl","containerSm","containerMd","containerLg","containerXl","container2xl"]},{name:"list",type:"ConstrBind<ButtonProps>[]"},{name:"listSecondary",type:"ConstrBind<ButtonProps>[]"},{name:"padding",type:"string",option:["none","sm","md","lg","ySm","yMd","yLg"]},{name:"paddingByIndent",type:"boolean"}],i=new c("Actions",u,l,m,p,d),b={title:"Ui/Actions",component:e,parameters:{design:"d1",docs:{description:{component:i.getDescription()}}},argTypes:i.getWiki(),args:i.getValues()},t={},a={name:"Базовые",render:()=>({components:{D1Actions:e},template:`
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
    `})},s={name:"Основная и вторичная группы",render:()=>({components:{D1Actions:e},template:`
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
    `})},n={name:"Гибкая раскладка",render:()=>({components:{D1Actions:e},template:`
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
    `})},r={name:"Пользовательские стили кнопок",render:()=>({components:{D1Actions:e},template:`
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const y=["Actions","ActionsBasic","ActionsAlignment","ActionsPrimarySecondary","ActionsFlexible","ActionsCustomButtons"],k=Object.freeze(Object.defineProperty({__proto__:null,Actions:t,ActionsAlignment:o,ActionsBasic:a,ActionsCustomButtons:r,ActionsFlexible:n,ActionsPrimarySecondary:s,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{k as A,t as a,i as b};
