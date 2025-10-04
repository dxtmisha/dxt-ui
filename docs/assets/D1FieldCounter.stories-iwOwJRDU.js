import{d as r,_ as i}from"./D1FieldCounter-6cmV3IFu.js";import{W as s,w as a,a as n,b as m}from"./wiki-BNdC282o.js";import"./iframe-BGVIV1-M.js";import"./jsx-runtime-D_zvdyIk.js";const l=[{name:"counter",type:"string | number"},{name:"maxlength",type:"string | number"},{name:"template",type:"string"}],o=new s("FieldCounter",l,r,a,n,m),d={title:"Ui/FieldCounter",component:i,parameters:{design:"d1",docs:{description:{component:o.getDescription()}}},argTypes:o.getWiki(),args:o.getValues()},e={},t={name:"Пользовательский шаблон",render:()=>({components:{D1FieldCounter:i},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default template</div>
            <D1FieldCounter :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Custom template: "Characters: [c] of [m]"</div>
            <D1FieldCounter :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Counter only with template: "[c] chars"</div>
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
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default template</div>
            <D1FieldCounter :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Custom template: "Characters: [c] of [m]"</div>
            <D1FieldCounter :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Counter only with template: "[c] chars"</div>
            <D1FieldCounter :counter="42" template="<b>[c]</b> chars"/>
          </div>
        </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};const c=["FieldCounter","FieldCounterTemplate"],y=Object.freeze(Object.defineProperty({__proto__:null,FieldCounter:e,FieldCounterTemplate:t,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{y as F,e as a,o as b,t as c};
