import{d as n,_ as t}from"./D1FieldMessage-BtS4W0mX.js";import{W as o,w as i,a as r,b as l}from"./wiki-fb_eBW86.js";import"./iframe-BlCC38XJ.js";import"./jsx-runtime-D_zvdyIk.js";const p=[{name:"counter",type:"string | number"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"counterTemplate",type:"string"},{name:"disabled",type:"boolean"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounterProps>"},{name:"forceShow",type:"boolean"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"isSkeleton",type:"boolean"},{name:"maxlength",type:"string | number"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"}],a=new o("FieldMessage",p,n,i,r,l),m={title:"Ui/FieldMessage",component:t,parameters:{design:"d1",docs:{description:{component:a.getDescription()}}},argTypes:a.getWiki(),args:a.getValues()},e={},s={name:"Слоты",render:()=>({components:{D1FieldMessage:t},template:`
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
}`,...s.parameters?.docs?.source}}};const d=["FieldMessage","FieldMessageSlots"],y=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:e,FieldMessageSlots:s,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{y as F,e as a,a as b,s as c};
