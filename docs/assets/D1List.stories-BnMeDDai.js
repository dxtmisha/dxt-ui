import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1List-BN1g07it.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`ariaMultiselectable`,type:`boolean`},{name:`axis`,type:`string`,option:[`x`,`y`]},{name:`control`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`highlight`,type:`string`},{name:`highlightLengthStart`,type:`number`},{name:`iconArrowDown`,type:`IconValue<Icon>`},{name:`iconArrowRight`,type:`IconValue<Icon>`},{name:`itemAttrs`,type:`ConstrBind<ListItem>`},{name:`itemGroupAttrs`,type:`ConstrBind<ListItem>`},{name:`itemManagementAttrs`,type:`ConstrBind<ListItem>`},{name:`itemMenuAttrs`,type:`ConstrBind<ListItem>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<any>`},{name:`lite`,type:`boolean`},{name:`liteThreshold`,type:`number`},{name:`max`,type:`string | number`},{name:`role`,type:`string`},{name:`roleItem`,type:`string`},{name:`selected`,type:`ListSelectedList`},{name:`tabindex`,type:`string | number`},{name:`tag`,type:`string`,option:[`div`,`button`,`a`,`span`]}],m={component:`List`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({List:()=>b,ListHighlight:()=>x,ListLiteMode:()=>S,__namedExportsOrder:()=>C,default:()=>y}),y,b,x,S,C,w=e((()=>{u(),_(),y={title:`Ui/List`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={},x={name:`Выделение`,render:()=>({components:{D1List:f},template:`
        <D1List
          :list="[
            {label: 'Project index example', value: 'projects', icon: 'folder'},
            {label: 'Advanced context options', value: 'experiments', icon: 'tune'},
            {label: 'Next examination notes', value: 'example', icon: 'description'},
            {label: 'User experience metrics', value: 'express', icon: 'insights'}
          ]"
          highlight="exam"
          :highlightLengthStart="4"
        />
    `})},S={name:`Облегчённый режим`,render:()=>({components:{D1List:f},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Without lite</div>
            <D1List
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">With lite</div>
            <D1List
              :lite="true"
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
        </div>
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Выделение',
  render: () => ({
    components: {
      D1List
    },
    template: \`
        <D1List
          :list="[
            {label: 'Project index example', value: 'projects', icon: 'folder'},
            {label: 'Advanced context options', value: 'experiments', icon: 'tune'},
            {label: 'Next examination notes', value: 'example', icon: 'description'},
            {label: 'User experience metrics', value: 'express', icon: 'insights'}
          ]"
          highlight="exam"
          :highlightLengthStart="4"
        />
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Облегчённый режим',
  render: () => ({
    components: {
      D1List
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Without lite</div>
            <D1List
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">With lite</div>
            <D1List
              :lite="true"
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
        </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C=[`List`,`ListHighlight`,`ListLiteMode`]}));w();export{b as List,x as ListHighlight,S as ListLiteMode,C as __namedExportsOrder,y as default,_ as i,w as n,g as r,v as t};