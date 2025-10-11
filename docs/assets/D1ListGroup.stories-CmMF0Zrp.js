import{d as n,_ as o}from"./D1ListGroup-DZ3BITVZ.js";import{W as s,w as r,a as p,b as i}from"./wiki-CHTdS6ju.js";import"./iframe-C6i5AnHO.js";import"./jsx-runtime-D_zvdyIk.js";const l=[{name:"divider",type:"boolean"},{name:"open",type:"boolean"}],e=new s("ListGroup",l,n,r,p,i),m={title:"Ui/ListGroup",component:o,parameters:{design:"d1",docs:{description:{component:e.getDescription()}}},argTypes:e.getWiki(),args:e.getValues()},t={render:a=>({components:{D1ListGroup:o},setup:()=>({args:a}),template:`
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
}`,...t.parameters?.docs?.source}}};const d=["ListGroup"],y=Object.freeze(Object.defineProperty({__proto__:null,ListGroup:t,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{y as L,t as a,e as b};
