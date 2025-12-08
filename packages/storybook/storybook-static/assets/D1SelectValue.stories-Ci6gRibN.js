import{d as a,_ as t}from"./D1SelectValue-BVIfe_AC.js";import{W as l,w as s,a as r,b as n}from"./wiki-fb_eBW86.js";import"./iframe-BlCC38XJ.js";import"./jsx-runtime-D_zvdyIk.js";const c=[{name:"chipAttrs",type:"ConstrBind<ChipProps>"},{name:"disabled",type:"boolean"},{name:"iconAttrs",type:"ConstrBind<IconProps>"},{name:"iconCancel",type:"IconValue<IconProps>"},{name:"iconShow",type:"boolean"},{name:"multiple",type:"boolean"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"value",type:"ListList"}],o=new l("SelectValue",c,a,s,r,n),m={title:"Ui/SelectValue",component:t,parameters:{design:"d1",docs:{description:{component:o.getDescription()}}},argTypes:o.getWiki(),args:o.getValues()},e={},i={name:"Базовые",render:()=>({components:{D1SelectValue:t},template:`
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
}`,...i.parameters?.docs?.source}}};const d=["SelectValue","SelectValueBasic"],y=Object.freeze(Object.defineProperty({__proto__:null,SelectValue:e,SelectValueBasic:i,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{y as S,e as a,o as b,i as c};
