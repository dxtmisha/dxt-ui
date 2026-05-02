import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-Ck-JDNL8.js";import{i as l,n as u,r as d,t as f}from"./D1ListGroup-Df2Fcz6o.js";var p,m,h,g,_=e((()=>{s(),l(),p=[{name:`divider`,type:`boolean | undefined`},{name:`open`,type:`boolean | undefined`}],m=[{name:`head`,description:`Slot for the group header/ Слот для заголовка группы`,properties:[{name:`props`,type:`(ListGroupSlotsPropsInclude) | undefined`}]},{name:`list`,description:`Slot for the group list content/ Слот для содержимого списка группы`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[],g={component:`ListGroup`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=e((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,n,i)})),b=t({ListGroup:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=e((()=>{u(),y(),x={title:`Ui/ListGroup`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1ListGroup:f},setup:()=>({args:e}),template:`
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