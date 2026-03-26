import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1ListMenu-BRgrCuHW.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`autoClose`,type:`boolean`},{name:`axis`,type:`string`,option:[`x`,`y`]},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`open`,type:`boolean`},{name:`windowAttrs`,type:`ConstrBind<Window>`}],m={component:`ListMenu`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({ListMenu:()=>b,__namedExportsOrder:()=>x,default:()=>y}),y,b,x,S=e((()=>{u(),_(),y={title:`Ui/ListMenu`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={render:e=>({components:{D1ListMenu:f},setup:()=>({args:e}),template:`
      <D1ListMenu v-bind="args">
      <template v-slot:head="{binds}">
        <span v-bind="binds">Primary menu header with expand/collapse toggle</span>
      </template>
      <template v-slot:list>
        <div class="wiki-storybook-item--padding">
          <h4>Menu Content</h4>
          <p>Navigation elements providing access to application sections.</p>

          <ul>
            <li><strong>Dashboard</strong> - Main control panel</li>
            <li><strong>Content</strong> - Content management</li>
            <li><strong>Analytics</strong> - Data analysis tools</li>
          </ul>

          <p>Supports nested submenus and adapts to user permissions.</p>
        </div>
      </template>
    </D1ListMenu>
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1ListMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1ListMenu v-bind="args">
      <template v-slot:head="{binds}">
        <span v-bind="binds">Primary menu header with expand/collapse toggle</span>
      </template>
      <template v-slot:list>
        <div class="wiki-storybook-item--padding">
          <h4>Menu Content</h4>
          <p>Navigation elements providing access to application sections.</p>

          <ul>
            <li><strong>Dashboard</strong> - Main control panel</li>
            <li><strong>Content</strong> - Content management</li>
            <li><strong>Analytics</strong> - Data analysis tools</li>
          </ul>

          <p>Supports nested submenus and adapts to user permissions.</p>
        </div>
      </template>
    </D1ListMenu>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...b.parameters?.docs?.source}}},x=[`ListMenu`]}));S();export{b as ListMenu,x as __namedExportsOrder,y as default,_ as i,S as n,g as r,v as t};