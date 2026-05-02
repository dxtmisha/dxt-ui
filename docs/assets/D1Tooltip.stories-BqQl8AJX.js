import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-BqBJrlEv.js";import{i as l,n as u,r as d,t as f}from"./D1Tooltip-Cd-C_dmy.js";var p,m,h,g,_=e((()=>{s(),l(),p=[{name:`arrowAttrs`,type:`ConstrBind<ArrowProps> | undefined`},{name:`arrowPosition`,type:`string | undefined`},{name:`arrowShow`,type:`boolean | undefined`},{name:`delay`,type:`number | undefined`},{name:`delayHide`,type:`number | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`embedded`,type:`boolean | undefined`},{name:`indent`,type:`number | undefined`},{name:`inDom`,type:`boolean | undefined`},{name:`interactive`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`maxWidth`,type:`string | undefined`,option:[`sm`,`md`,`lg`]},{name:`open`,type:`boolean | undefined`},{name:`top`,type:`boolean | undefined`}],m=[{name:`body`,description:`Slot for the tooltip body content/ Слот для основного содержимого тултипа`,properties:[{name:`props`,type:`(() => any) | undefined`}]},{name:`control`,description:`Slot for the control element that triggers the tooltip/ Слот для управляющего элемента, вызывающего тултип`,properties:[{name:`props`,type:`(TooltipControl) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[{name:`tooltip`,description:`Event triggered when the tooltip open state changes/ Событие при изменении состояния открытости тултипа`,properties:[{name:`open`,type:`boolean`}]}],g={component:`Tooltip`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=e((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,n,i)})),b=t({Tooltip:()=>S,TooltipAllSlots:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=e((()=>{u(),y(),x={title:`Ui/Tooltip`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Tooltip:f},setup:()=>({args:e}),template:`
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