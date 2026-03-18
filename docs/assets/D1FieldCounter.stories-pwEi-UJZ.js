import{d as r,_ as s}from"./D1FieldCounter-C7EnkoSC.js";import{w as a,W as n,a as m,b as l}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const d=[{name:"counter",type:"string | number"},{name:"id",type:"string"},{name:"maxlength",type:"string | number"},{name:"maxlengthOnce",type:"string | number"},{name:"template",type:"string"},{name:"textCharacterLimit",type:"TextValue"},{name:"textCharacterRemaining",type:"TextValue"}],i={component:"FieldCounter",props:d,defaults:r,wikiDesign:a},o=new n(i.component,i.props,i.defaults,i.wikiDesign,m,l),k={title:"Ui/FieldCounter",component:s,parameters:{design:"d1",docs:{description:{component:o.getDescription()}}},argTypes:o.getWiki(),args:o.getValues()},e={},t={name:"Пользовательский шаблон",render:()=>({components:{D1FieldCounter:s},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default template</div>
            <D1FieldCounter :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom template: "Characters: [c] of [m]"</div>
            <D1FieldCounter :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter only with template: "[c] chars"</div>
            <D1FieldCounter :counter="42" template="<b>[c]</b> chars"/>
          </div>
        </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Пользовательский шаблон',
  render: () => ({
    components: {
      D1FieldCounter
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default template</div>
            <D1FieldCounter :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom template: "Characters: [c] of [m]"</div>
            <D1FieldCounter :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter only with template: "[c] chars"</div>
            <D1FieldCounter :counter="42" template="<b>[c]</b> chars"/>
          </div>
        </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};const c=["FieldCounter","FieldCounterTemplate"],w=Object.freeze(Object.defineProperty({__proto__:null,FieldCounter:e,FieldCounterTemplate:t,__namedExportsOrder:c,default:k},Symbol.toStringTag,{value:"Module"}));export{w as F,e as a,o as b,t as c};
