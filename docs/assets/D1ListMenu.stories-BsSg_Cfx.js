import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-CMC-2lzg.js";import{i as l,n as u,r as d,t as f}from"./D1ListMenu-BemfoW2n.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`autoClose`,type:`boolean`},{name:`axis`,type:`string`,option:[`x`,`y`]},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`open`,type:`boolean`},{name:`windowAttrs`,type:`ConstrBind<Window>`}],m=[{name:`head`,properties:[{name:`props`,type:`WindowControlItem`}]},{name:`list`}],h=[{name:`window`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],g={component:`ListMenu`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({ListMenu:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=e((()=>{u(),y(),x={title:`Ui/ListMenu`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1ListMenu:f},setup:()=>({args:e}),template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`ListMenu`]}));w();export{S as ListMenu,C as __namedExportsOrder,x as default,y as i,w as n,v as r,b as t};