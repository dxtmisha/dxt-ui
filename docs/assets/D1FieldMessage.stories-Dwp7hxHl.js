import{d as i,_ as n}from"./D1FieldMessage-BdxMbkhQ.js";import{w as o,W as r,a as l,b as p}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const m=[{name:"counter",type:"string | number"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"counterTemplate",type:"string"},{name:"disabled",type:"boolean"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounter>"},{name:"forceShow",type:"boolean"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"isSkeleton",type:"boolean"},{name:"maxlength",type:"string | number"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"}],a={component:"FieldMessage",props:m,defaults:i,wikiDesign:o},t=new r(a.component,a.props,a.defaults,a.wikiDesign,l,p),d={title:"Ui/FieldMessage",component:n,parameters:{design:"d1",docs:{description:{component:t.getDescription()}}},argTypes:t.getWiki(),args:t.getValues()},e={},s={name:"Слоты",render:()=>({components:{D1FieldMessage:n},template:`
        <div class="wiki-storybook-flex-column">
          <D1FieldMessage>
            <template #helper>
              <span><b>Helper:</b> You can use Latin letters</span>
            </template>
          </D1FieldMessage>
          <D1FieldMessage>
            <template #validation>
              <span><b>Validation:</b> Please fill out this field</span>
            </template>
          </D1FieldMessage>
        </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Слоты',
  render: () => ({
    components: {
      D1FieldMessage
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1FieldMessage>
            <template #helper>
              <span><b>Helper:</b> You can use Latin letters</span>
            </template>
          </D1FieldMessage>
          <D1FieldMessage>
            <template #validation>
              <span><b>Validation:</b> Please fill out this field</span>
            </template>
          </D1FieldMessage>
        </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const c=["FieldMessage","FieldMessageSlots"],M=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:e,FieldMessageSlots:s,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{M as F,e as a,t as b,s as c};
