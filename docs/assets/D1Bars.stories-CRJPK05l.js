import{d as r,_ as s}from"./D1Bars-Cb-yMoQu.js";import{w as c,W as l,a as p,b as m}from"./wiki-BeIQM_4B.js";import{r as d}from"./iframe-B21bnPHY.js";import"./jsx-runtime-u17CrQMm.js";import{_ as b}from"./D1Skeleton-LvRPzgGQ.js";const u=[{name:"action",type:"boolean"},{name:"actionBars",type:"ConstrBind<ButtonPropsBasic>[]"},{name:"actionDescription",type:"string | number"},{name:"actionLabel",type:"NumberOrString"},{name:"backActionHide",type:"boolean"},{name:"backButton",type:"ConstrBind<ButtonPropsBasic>"},{name:"backHide",type:"boolean"},{name:"bars",type:"ConstrBind<ButtonPropsBasic>[]"},{name:"buttonAttrs",type:"ConstrBind<ButtonPropsBasic>"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"iconBack",type:"IconValue<Icon>"},{name:"iconClose",type:"IconValue<Icon>"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"modelAction",type:"boolean"},{name:"onUpdate:action",type:"(value: boolean) => void"},{name:"onUpdate:modelAction",type:"(value: boolean) => void"},{name:"padding",type:"string",option:["sm","md","lg","ySm","yMd","yLg","none"]},{name:"paddingByIndent",type:"boolean"},{name:"textClose",type:"TextValue"}],a={component:"Bars",props:u,defaults:r,wikiDesign:c},i=new l(a.component,a.props,a.defaults,a.wikiDesign,p,m),B={title:"Ui/Bars",component:s,parameters:{design:"d1",docs:{description:{component:i.getDescription()}}},argTypes:i.getWiki(),args:i.getValues()},e={},o={name:"Базовые",render:()=>({components:{D1Bars:s},template:`
        <div class="wiki-storybook-flex-column">
          <D1Bars
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />

          <D1Bars
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share' },
              { icon: 'edit' },
              { icon: 'delete' }
            ]"
          />
        </div>
    `})},t={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Bars:s},setup(){return{isAction:d(!1)}},template:`
        <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
        <D1Bars
          v-model:action="isAction"
          label="Page Title"
          description="A concise description for this example"
          :bars="[
            { icon: 'search' },
            { icon: 'refresh' },
            { icon: 'more_vert' }
          ]"
          action-label="2 selected"
          action-description="Choose an action to apply"
          :action-bars="[
            { icon: 'share' },
            { icon: 'edit' },
            { icon: 'delete' }
          ]"
          style="margin-top: 8px;"
        />
    `})},n={name:"Загрузка скелетона",render:()=>({components:{D1Bars:s,D1Skeleton:b},template:`
        <D1Skeleton :active="true">
          <D1Bars
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />
        </D1Skeleton>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Bars
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Bars
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />

          <D1Bars
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share' },
              { icon: 'edit' },
              { icon: 'delete' }
            ]"
          />
        </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Bars
    },
    setup() {
      return {
        isAction: ref(false)
      };
    },
    template: \`
        <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
        <D1Bars
          v-model:action="isAction"
          label="Page Title"
          description="A concise description for this example"
          :bars="[
            { icon: 'search' },
            { icon: 'refresh' },
            { icon: 'more_vert' }
          ]"
          action-label="2 selected"
          action-description="Choose an action to apply"
          :action-bars="[
            { icon: 'share' },
            { icon: 'edit' },
            { icon: 'delete' }
          ]"
          style="margin-top: 8px;"
        />
    \`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1Bars,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1Bars
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />
        </D1Skeleton>
    \`
  })
}`,...n.parameters?.docs?.source}}};const y=["Bars","BarsBasic","BarsVModel","BarsSkeleton"],S=Object.freeze(Object.defineProperty({__proto__:null,Bars:e,BarsBasic:o,BarsSkeleton:n,BarsVModel:t,__namedExportsOrder:y,default:B},Symbol.toStringTag,{value:"Module"}));export{S as B,e as a,i as b,o as c,t as d,n as e};
