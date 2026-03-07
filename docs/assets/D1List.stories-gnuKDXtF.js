import{d as s,_ as l}from"./D1List-HtYuJNRq.js";import{w as n,W as r,a as m,b as c}from"./wiki-BeIQM_4B.js";import"./iframe-B21bnPHY.js";import"./jsx-runtime-u17CrQMm.js";const p=[{name:"ariaMultiselectable",type:"boolean"},{name:"axis",type:"string",option:["x","y"]},{name:"control",type:"boolean"},{name:"disabled",type:"boolean"},{name:"divider",type:"boolean"},{name:"filterMode",type:"boolean"},{name:"focus",type:"boolean"},{name:"highlight",type:"string"},{name:"highlightLengthStart",type:"number"},{name:"iconArrowDown",type:"IconValue<Icon>"},{name:"iconArrowRight",type:"IconValue<Icon>"},{name:"itemAttrs",type:"ConstrBind<ListItem>"},{name:"itemGroupAttrs",type:"ConstrBind<ListItem>"},{name:"itemManagementAttrs",type:"ConstrBind<ListItem>"},{name:"itemMenuAttrs",type:"ConstrBind<ListItem>"},{name:"keyLabel",type:"string"},{name:"keyValue",type:"string"},{name:"list",type:"ListRecord<any>"},{name:"lite",type:"boolean"},{name:"liteThreshold",type:"number"},{name:"max",type:"string | number"},{name:"role",type:"string"},{name:"roleItem",type:"string"},{name:"selected",type:"ListSelectedList"},{name:"tabindex",type:"string | number"},{name:"tag",type:"string",option:["div","button","a","span"]}],a={component:"List",props:p,defaults:s,wikiDesign:n},o=new r(a.component,a.props,a.defaults,a.wikiDesign,m,c),d={title:"Ui/List",component:l,parameters:{design:"d1",docs:{description:{component:o.getDescription()}}},argTypes:o.getWiki(),args:o.getValues()},e={},t={name:"Выделение",render:()=>({components:{D1List:l},template:`
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
    `})},i={name:"Облегчённый режим",render:()=>({components:{D1List:l},template:`
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
}`,...i.parameters?.docs?.source}}};const b=["List","ListHighlight","ListLiteMode"],k=Object.freeze(Object.defineProperty({__proto__:null,List:e,ListHighlight:t,ListLiteMode:i,__namedExportsOrder:b,default:d},Symbol.toStringTag,{value:"Module"}));export{k as L,e as a,o as b,i as c,t as d};
