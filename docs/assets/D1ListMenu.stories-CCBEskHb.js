import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-Ck-JDNL8.js";import{i as l,n as u,r as d,t as f}from"./D1ListMenu-C6U4v2Zj.js";var p,m,h,g,_=e((()=>{s(),l(),p=[{name:`autoClose`,type:`boolean | undefined`},{name:`axis`,type:`string | undefined`,option:[`x`,`y`]},{name:`disabled`,type:`boolean | undefined`},{name:`divider`,type:`boolean | undefined`},{name:`open`,type:`boolean | undefined`},{name:`windowAttrs`,type:`ConstrBind<WindowProps> | undefined`}],m=[{name:`head`,description:`Slot for the menu header/ Слот для заголовка меню`,properties:[{name:`props`,type:`(WindowControlItem) | undefined`}]},{name:`list`,description:`Slot for the menu list content/ Слот для содержимого списка меню`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],g={component:`ListMenu`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=e((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,n,i)})),b=t({ListMenu:()=>S,__namedExportsOrder:()=>C,default:()=>x}),x,S,C,w=e((()=>{u(),y(),x={title:`Ui/ListMenu`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1ListMenu:f},setup:()=>({args:e}),template:`
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