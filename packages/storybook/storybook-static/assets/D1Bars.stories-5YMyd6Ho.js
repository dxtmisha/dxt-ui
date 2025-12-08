import{d as r,_ as s}from"./D1Bars-BF2gaqDO.js";import{W as i,w as c,a as p,b as l}from"./wiki-fb_eBW86.js";import{r as m}from"./iframe-BlCC38XJ.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as d}from"./D1Skeleton-_eyYcCpr.js";const b=[{name:"action",type:"boolean"},{name:"actionBars",type:"ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[]"},{name:"actionDescription",type:"string | number"},{name:"actionLabel",type:"NumberOrString"},{name:"backActionHide",type:"boolean"},{name:"backButton",type:"ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>"},{name:"backHide",type:"boolean"},{name:"bars",type:"ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[]"},{name:"buttonAttrs",type:"ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>"},{name:"description",type:"string | number"},{name:"iconBack",type:"IconValue<ButtonProps>"},{name:"iconClose",type:"IconValue<ButtonProps>"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"modelAction",type:"boolean"},{name:"onUpdate:action",type:"(value: boolean) => void"},{name:"onUpdate:modelAction",type:"(value: boolean) => void"},{name:"padding",type:"string",option:["sm","md","lg","ySm","yMd","yLg","none"]},{name:"paddingByIndent",type:"boolean"},{name:"textClose",type:"TextValue"}],n=new i("Bars",b,r,c,p,l),B={title:"Ui/Bars",component:s,parameters:{design:"d1",docs:{description:{component:n.getDescription()}}},argTypes:n.getWiki(),args:n.getValues()},e={},o={name:"Базовые",render:()=>({components:{D1Bars:s},template:`
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
    `})},t={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Bars:s},setup(){return{isAction:m(!1)}},template:`
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
    `})},a={name:"Загрузка скелетона",render:()=>({components:{D1Bars:s,D1Skeleton:d},template:`
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const u=["Bars","BarsBasic","BarsVModel","BarsSkeleton"],h=Object.freeze(Object.defineProperty({__proto__:null,Bars:e,BarsBasic:o,BarsSkeleton:a,BarsVModel:t,__namedExportsOrder:u,default:B},Symbol.toStringTag,{value:"Module"}));export{h as B,e as a,n as b,o as c,t as d,a as e};
