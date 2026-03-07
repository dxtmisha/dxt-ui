import{d as a,_ as s}from"./D1ListMenu-DGpwNJ3M.js";import{w as i,W as r,a as p,b as l}from"./wiki-BeIQM_4B.js";import"./iframe-B21bnPHY.js";import"./jsx-runtime-u17CrQMm.js";const m=[{name:"autoClose",type:"boolean"},{name:"axis",type:"string",option:["x","y"]},{name:"disabled",type:"boolean"},{name:"divider",type:"boolean"},{name:"open",type:"boolean"},{name:"windowAttrs",type:"ConstrBind<Window>"}],e={component:"ListMenu",props:m,defaults:a,wikiDesign:i},t=new r(e.component,e.props,e.defaults,e.wikiDesign,p,l),d={title:"Ui/ListMenu",component:s,parameters:{design:"d1",docs:{description:{component:t.getDescription()}}},argTypes:t.getWiki(),args:t.getValues()},n={render:o=>({components:{D1ListMenu:s},setup:()=>({args:o}),template:`
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
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const c=["ListMenu"],v=Object.freeze(Object.defineProperty({__proto__:null,ListMenu:n,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{v as L,n as a,t as b};
