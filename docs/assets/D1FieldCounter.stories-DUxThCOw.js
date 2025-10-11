import{d as s,_ as i}from"./D1FieldCounter-FhyxkzU6.js";import{W as r,w as a,a as n,b as m}from"./wiki-CHTdS6ju.js";import"./iframe-C6i5AnHO.js";import"./jsx-runtime-D_zvdyIk.js";const l=[{name:"counter",type:"string | number"},{name:"maxlength",type:"string | number"},{name:"template",type:"string"}],e=new r("FieldCounter",l,s,a,n,m),d={title:"Ui/FieldCounter",component:i,parameters:{design:"d1",docs:{description:{component:e.getDescription()}}},argTypes:e.getWiki(),args:e.getValues()},t={},o={name:"Пользовательский шаблон",render:()=>({components:{D1FieldCounter:i},template:`
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
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const k=["FieldCounter","FieldCounterTemplate"],y=Object.freeze(Object.defineProperty({__proto__:null,FieldCounter:t,FieldCounterTemplate:o,__namedExportsOrder:k,default:d},Symbol.toStringTag,{value:"Module"}));export{y as F,t as a,e as b,o as c};
