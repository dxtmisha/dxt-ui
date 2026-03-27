import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-CMC-2lzg.js";import{i as l,n as u,r as d,t as f}from"./D1Actions-CgZFOApi.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`align`,type:`string`,option:[`none`,`center`,`left`,`right`,`block`,`auto`]},{name:`buttonAttrs`,type:`ConstrBind<Button>`},{name:`buttonSecondaryAttrs`,type:`ConstrBind<Button>`},{name:`flexible`,type:`string`,option:[`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`,`containerSm`,`containerMd`,`containerLg`,`containerXl`,`container2xl`]},{name:`list`,type:`any[]`},{name:`listSecondary`,type:`any[]`},{name:`padding`,type:`string`,option:[`none`,`sm`,`md`,`lg`,`ySm`,`yMd`,`yLg`]},{name:`paddingByIndent`,type:`boolean`},{name:`wrap`,type:`boolean`}],m=[{name:`default`},{name:`secondary`}],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],g={component:`Actions`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({Actions:()=>S,ActionsAlignment:()=>w,ActionsBasic:()=>C,ActionsCustomButtons:()=>D,ActionsFlexible:()=>E,ActionsPrimarySecondary:()=>T,__namedExportsOrder:()=>O,default:()=>x}),x,S,C,w,T,E,D,O,k=e((()=>{u(),y(),x={title:`Ui/Actions`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Базовые`,render:()=>({components:{D1Actions:f},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    `})},w={name:`Выравнивание`,render:()=>({components:{D1Actions:f},template:`
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
    `})},T={name:`Основная и вторичная группы`,render:()=>({components:{D1Actions:f},template:`
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
    `})},E={name:`Гибкая раскладка`,render:()=>({components:{D1Actions:f},template:`
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
    `})},D={name:`Пользовательские стили кнопок`,render:()=>({components:{D1Actions:f},template:`
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel', outlined: true },
              { label: 'Save', primary: true }
            ]"
            :button-attrs="{ size: 'large' }"
          />
        </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Actions`,`ActionsBasic`,`ActionsAlignment`,`ActionsPrimarySecondary`,`ActionsFlexible`,`ActionsCustomButtons`]}));k();export{S as Actions,w as ActionsAlignment,C as ActionsBasic,D as ActionsCustomButtons,E as ActionsFlexible,T as ActionsPrimarySecondary,O as __namedExportsOrder,x as default,y as i,k as n,v as r,b as t};