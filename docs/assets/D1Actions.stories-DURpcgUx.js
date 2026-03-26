import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1Actions-DIspmg38.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`align`,type:`string`,option:[`none`,`center`,`left`,`right`,`block`,`auto`]},{name:`buttonAttrs`,type:`ConstrBind<Button>`},{name:`buttonSecondaryAttrs`,type:`ConstrBind<Button>`},{name:`flexible`,type:`string`,option:[`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`,`containerSm`,`containerMd`,`containerLg`,`containerXl`,`container2xl`]},{name:`list`,type:`any[]`},{name:`listSecondary`,type:`any[]`},{name:`padding`,type:`string`,option:[`none`,`sm`,`md`,`lg`,`ySm`,`yMd`,`yLg`]},{name:`paddingByIndent`,type:`boolean`},{name:`wrap`,type:`boolean`}],m={component:`Actions`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({Actions:()=>b,ActionsAlignment:()=>S,ActionsBasic:()=>x,ActionsCustomButtons:()=>T,ActionsFlexible:()=>w,ActionsPrimarySecondary:()=>C,__namedExportsOrder:()=>E,default:()=>y}),y,b,x,S,C,w,T,E,D=e((()=>{u(),_(),y={title:`Ui/Actions`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={},x={name:`Базовые`,render:()=>({components:{D1Actions:f},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    `})},S={name:`Выравнивание`,render:()=>({components:{D1Actions:f},template:`
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
    `})},C={name:`Основная и вторичная группы`,render:()=>({components:{D1Actions:f},template:`
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
    `})},w={name:`Гибкая раскладка`,render:()=>({components:{D1Actions:f},template:`
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
    `})},T={name:`Пользовательские стили кнопок`,render:()=>({components:{D1Actions:f},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel', outlined: true },
              { label: 'Save', primary: true }
            ]"
            :button-attrs="{ size: 'large' }"
          />
        </div>
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Actions`,`ActionsBasic`,`ActionsAlignment`,`ActionsPrimarySecondary`,`ActionsFlexible`,`ActionsCustomButtons`]}));D();export{b as Actions,S as ActionsAlignment,x as ActionsBasic,T as ActionsCustomButtons,w as ActionsFlexible,C as ActionsPrimarySecondary,E as __namedExportsOrder,y as default,_ as i,D as n,g as r,v as t};