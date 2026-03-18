import{d as s,_ as a}from"./D1ListGroup-BqC5pK5m.js";import{w as r,W as i,a as p,b as l}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const m=[{name:"divider",type:"boolean"},{name:"open",type:"boolean"}],e={component:"ListGroup",props:m,defaults:s,wikiDesign:r},o=new i(e.component,e.props,e.defaults,e.wikiDesign,p,l),d={title:"Ui/ListGroup",component:a,parameters:{design:"d1",docs:{description:{component:o.getDescription()}}},argTypes:o.getWiki(),args:o.getValues()},t={render:n=>({components:{D1ListGroup:a},setup:()=>({args:n}),template:`
      <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Primary group header with expand/collapse toggle
      </template>
      <template v-slot:list>
        Main content area for grouped list items
      </template>
    </D1ListGroup>

    <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Secondary group header with custom styling
      </template>
      <template v-slot:list>
        Alternative layout for nested components
      </template>
    </D1ListGroup>

    <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Tertiary group header with advanced options
      </template>
      <template v-slot:list>
        Extended content area with additional features
      </template>
    </D1ListGroup>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1ListGroup
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Primary group header with expand/collapse toggle
      </template>
      <template v-slot:list>
        Main content area for grouped list items
      </template>
    </D1ListGroup>

    <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Secondary group header with custom styling
      </template>
      <template v-slot:list>
        Alternative layout for nested components
      </template>
    </D1ListGroup>

    <D1ListGroup v-bind="args">
      <template v-slot:head="{open}">
        Tertiary group header with advanced options
      </template>
      <template v-slot:list>
        Extended content area with additional features
      </template>
    </D1ListGroup>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...t.parameters?.docs?.source}}};const u=["ListGroup"],L=Object.freeze(Object.defineProperty({__proto__:null,ListGroup:t,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{L,t as a,o as b};
