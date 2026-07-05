import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{i as l,n as u,r as d,t as f}from"./D1ListMenu-Bk2DIgNY.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`autoClose`,type:`boolean`},{name:`axis`,type:`string`,option:[`x`,`y`]},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`open`,type:`boolean`},{name:`windowAttrs`,type:`ConstrBind<WindowProps>`}],m=[{name:`head`,description:`Slot for the menu header/ Слот для заголовка меню`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`list`,description:`Slot for the menu list content/ Слот для содержимого списка меню`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],g={component:`ListMenu`,props:p,slots:m,events:h,defaults:d,wikiDesign:i}})),v,y=t((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,a,r)})),b=e({ListMenu:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=t((()=>{u(),y(),x={title:`Ui/ListMenu`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1ListMenu:f},setup:()=>({args:e}),template:`
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