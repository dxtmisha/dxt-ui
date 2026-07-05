import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{i as l,n as u,r as d,t as f}from"./D1ListGroup-LvKOEmcS.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`divider`,type:`boolean`},{name:`open`,type:`boolean`}],m=[{name:`head`,description:`Slot for the group header/ Слот для заголовка группы`,properties:[{name:`props`,type:`(ListGroupSlotsPropsInclude) | undefined`}]},{name:`list`,description:`Slot for the group list content/ Слот для содержимого списка группы`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[],g={component:`ListGroup`,props:p,slots:m,events:h,defaults:d,wikiDesign:i}})),v,y=t((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,a,r)})),b=e({ListGroup:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=t((()=>{u(),y(),x={title:`Ui/ListGroup`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1ListGroup:f},setup:()=>({args:e}),template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`ListGroup`]}));w();export{S as ListGroup,C as __namedExportsOrder,x as default,y as i,w as n,v as r,b as t};