import{d as s,_ as o}from"./D1List-CLBfwR3j.js";import{W as l,w as n,a as r,b as m}from"./wiki-NZJqstoo.js";import"./iframe-CFZkzvey.js";import"./jsx-runtime-D_zvdyIk.js";const c=[{name:"axis",type:"string",option:["x","y"]},{name:"control",type:"boolean"},{name:"disabled",type:"boolean"},{name:"divider",type:"boolean"},{name:"focus",type:"NumberOrStringOrBoolean"},{name:"highlight",type:"string"},{name:"highlightLengthStart",type:"number"},{name:"iconArrowDown",type:"IconValue<IconProps>"},{name:"iconArrowRight",type:"IconValue<IconProps>"},{name:"itemAttrs",type:"ConstrBind<ListItemProps>"},{name:"itemGroupAttrs",type:"ConstrBind<ListItemProps>"},{name:"itemManagementAttrs",type:"ConstrBind<ListItemProps>"},{name:"itemMenuAttrs",type:"ConstrBind<ListItemProps>"},{name:"keyLabel",type:"string"},{name:"keyValue",type:"string"},{name:"list",type:"ListRecord<ListItemProps>"},{name:"lite",type:"boolean"},{name:"liteThreshold",type:"number"},{name:"selected",type:"ListSelectedList"},{name:"tag",type:"string",option:["div","button","a","span"]}],a=new l("List",c,s,n,r,m),p={title:"Ui/List",component:o,parameters:{design:"d1",docs:{description:{component:a.getDescription()}}},argTypes:a.getWiki(),args:a.getValues()},e={},t={name:"Выделение",render:()=>({components:{D1List:o},template:`
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
    `})},i={name:"Облегчённый режим",render:()=>({components:{D1List:o},template:`
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
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const d=["List","ListHighlight","ListLiteMode"],h=Object.freeze(Object.defineProperty({__proto__:null,List:e,ListHighlight:t,ListLiteMode:i,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{h as L,e as a,a as b,i as c,t as d};
