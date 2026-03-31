import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-CxP3o-n8.js";import{i as l,n as u,r as d,t as f}from"./D1Tooltip-D-51U102.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`arrowAttrs`,type:`ConstrBind<ArrowProps>`},{name:`arrowPosition`,type:`string`,option:[`auto`,`top`,`bottom`,`left`,`right`]},{name:`arrowShow`,type:`boolean`},{name:`delay`,type:`number`},{name:`delayHide`,type:`number`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`embedded`,type:`boolean`},{name:`indent`,type:`number`},{name:`inDom`,type:`boolean`},{name:`interactive`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`maxWidth`,type:`string`,option:[`sm`,`md`,`lg`]},{name:`open`,type:`boolean`},{name:`top`,type:`boolean`}],m=[{name:`body`,properties:[{name:`props`,type:`() => any`}]},{name:`control`,properties:[{name:`props`,type:`TooltipControl`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`}],h=[{name:`tooltip`,properties:[{name:`open`,type:`boolean`}]}],g={component:`Tooltip`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({Tooltip:()=>S,TooltipAllSlots:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=e((()=>{u(),y(),x={title:`Ui/Tooltip`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Tooltip:f},setup:()=>({args:e}),template:`
      <D1Tooltip v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </D1Tooltip>
    `})},C={name:`Демонстрация всех слотов`,render:()=>({components:{D1Tooltip:f},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Tooltip`,`TooltipAllSlots`]}));T();export{S as Tooltip,C as TooltipAllSlots,w as __namedExportsOrder,x as default,y as i,T as n,v as r,b as t};