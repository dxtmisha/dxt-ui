import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1Tooltip-CXKPKfL_.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`arrowAttrs`,type:`ConstrBind<ArrowProps>`},{name:`arrowPosition`,type:`string`,option:[`auto`,`top`,`bottom`,`left`,`right`]},{name:`arrowShow`,type:`boolean`},{name:`delay`,type:`number`},{name:`delayHide`,type:`number`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`embedded`,type:`boolean`},{name:`indent`,type:`number`},{name:`inDom`,type:`boolean`},{name:`interactive`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`maxWidth`,type:`string`,option:[`sm`,`md`,`lg`]},{name:`open`,type:`boolean`},{name:`top`,type:`boolean`}],m={component:`Tooltip`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({Tooltip:()=>b,TooltipAllSlots:()=>x,__namedExportsOrder:()=>S,default:()=>y}),y,b,x,S,C=e((()=>{u(),_(),y={title:`Ui/Tooltip`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={render:e=>({components:{D1Tooltip:f},setup:()=>({args:e}),template:`
      <D1Tooltip v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </D1Tooltip>
    `})},x={name:`Демонстрация всех слотов`,render:()=>({components:{D1Tooltip:f},template:`
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
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Tooltip`,`TooltipAllSlots`]}));C();export{b as Tooltip,x as TooltipAllSlots,S as __namedExportsOrder,y as default,_ as i,C as n,g as r,v as t};