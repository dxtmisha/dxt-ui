import{d as l,_ as a}from"./D1SelectValue-xUKys10I.js";import{w as s,W as r,a as n,b as c}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const m=[{name:"chipAttrs",type:"ConstrBind<Chip>"},{name:"disabled",type:"boolean"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconCancel",type:"IconValue<Icon>"},{name:"iconShow",type:"boolean"},{name:"multiple",type:"boolean"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"value",type:"ListList"}],o={component:"SelectValue",props:m,defaults:l,wikiDesign:s},t=new r(o.component,o.props,o.defaults,o.wikiDesign,n,c),d={title:"Ui/SelectValue",component:a,parameters:{design:"d1",docs:{description:{component:t.getDescription()}}},argTypes:t.getWiki(),args:t.getValues()},e={},i={name:"Базовые",render:()=>({components:{D1SelectValue:a},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Placeholder</div>
            <D1SelectValue placeholder="Select option"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single value</div>
            <D1SelectValue :value="[{ label: 'Option 1', value: '1' }]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple values</div>
            <D1SelectValue
              :multiple="true"
              :value="[
                { label: 'Option 1', value: '1', index: '1' },
                { label: 'Option 2', value: '2', index: '2' },
                { label: 'Option 3', value: '3', index: '3' }
              ]"
            />
          </div>
        </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1SelectValue
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Placeholder</div>
            <D1SelectValue placeholder="Select option"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single value</div>
            <D1SelectValue :value="[{ label: 'Option 1', value: '1' }]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple values</div>
            <D1SelectValue
              :multiple="true"
              :value="[
                { label: 'Option 1', value: '1', index: '1' },
                { label: 'Option 2', value: '2', index: '2' },
                { label: 'Option 3', value: '3', index: '3' }
              ]"
            />
          </div>
        </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};const k=["SelectValue","SelectValueBasic"],v=Object.freeze(Object.defineProperty({__proto__:null,SelectValue:e,SelectValueBasic:i,__namedExportsOrder:k,default:d},Symbol.toStringTag,{value:"Module"}));export{v as S,e as a,t as b,i as c};
