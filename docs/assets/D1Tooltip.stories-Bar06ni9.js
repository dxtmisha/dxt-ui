import{d as p,_ as a}from"./D1Tooltip-Bdn6A3Uv.js";import{w as s,W as r,a as l,b as m}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const d=[{name:"arrowAttrs",type:"ConstrBind<ArrowProps>"},{name:"arrowPosition",type:"string",option:["auto","top","bottom","left","right"]},{name:"arrowShow",type:"boolean"},{name:"delay",type:"number"},{name:"delayHide",type:"number"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"disabled",type:"boolean"},{name:"embedded",type:"boolean"},{name:"indent",type:"number"},{name:"inDom",type:"boolean"},{name:"interactive",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"maxWidth",type:"string",option:["sm","md","lg"]},{name:"open",type:"boolean"},{name:"top",type:"boolean"}],o={component:"Tooltip",props:d,defaults:p,wikiDesign:s},n=new r(o.component,o.props,o.defaults,o.wikiDesign,l,m),b={title:"Ui/Tooltip",component:a,parameters:{design:"d1",docs:{description:{component:n.getDescription()}}},argTypes:n.getWiki(),args:n.getValues()},t={render:i=>({components:{D1Tooltip:a},setup:()=>({args:i}),template:`
      <D1Tooltip v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </D1Tooltip>
    `})},e={name:"Демонстрация всех слотов",render:()=>({components:{D1Tooltip:a},template:`
        <D1Tooltip>
          <template #control="{ binds }">
            <button class="wiki-storybook-button" v-bind="binds">
              Hover me (All Slots)
            </button>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #description>
            Description Slot
          </template>

          <template #body>
            <div class="wiki-storybook-item--padding">
              Body Slot Content
            </div>
          </template>
        </D1Tooltip>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Tooltip v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </D1Tooltip>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: {
      D1Tooltip
    },
    template: \`
        <D1Tooltip>
          <template #control="{ binds }">
            <button class="wiki-storybook-button" v-bind="binds">
              Hover me (All Slots)
            </button>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #description>
            Description Slot
          </template>

          <template #body>
            <div class="wiki-storybook-item--padding">
              Body Slot Content
            </div>
          </template>
        </D1Tooltip>
    \`
  })
}`,...e.parameters?.docs?.source}}};const c=["Tooltip","TooltipAllSlots"],D=Object.freeze(Object.defineProperty({__proto__:null,Tooltip:t,TooltipAllSlots:e,__namedExportsOrder:c,default:b},Symbol.toStringTag,{value:"Module"}));export{D as T,t as a,n as b,e as c};
