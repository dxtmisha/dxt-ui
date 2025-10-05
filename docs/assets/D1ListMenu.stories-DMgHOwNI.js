import{d as a,_ as t}from"./D1ListMenu-CfSaItP-.js";import{W as o,w as i,a as r,b as p}from"./wiki-b8Pce8s9.js";import"./iframe-CpPdPYqc.js";import"./jsx-runtime-D_zvdyIk.js";const l=[{name:"autoClose",type:"boolean"},{name:"axis",type:"string",option:["x","y"]},{name:"disabled",type:"boolean"},{name:"divider",type:"boolean"},{name:"open",type:"boolean"},{name:"windowAttrs",type:"ConstrBind<WindowPropsBasic<ScrollbarPropsBasic, ImagePropsBasic>>"}],e=new o("ListMenu",l,a,i,r,p),m={title:"Ui/ListMenu",component:t,parameters:{design:"d1",docs:{description:{component:e.getDescription()}}},argTypes:e.getWiki(),args:e.getValues()},n={render:s=>({components:{D1ListMenu:t},setup:()=>({args:s}),template:`
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
}`,...n.parameters?.docs?.source}}};const d=["ListMenu"],y=Object.freeze(Object.defineProperty({__proto__:null,ListMenu:n,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{y as L,n as a,e as b};
