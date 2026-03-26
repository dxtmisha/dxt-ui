import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1FieldMessage-vVhmPrCM.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`disabled`,type:`boolean`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`forceShow`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`maxlength`,type:`string | number`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`}],m={component:`FieldMessage`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({FieldMessage:()=>b,FieldMessageSlots:()=>x,__namedExportsOrder:()=>S,default:()=>y}),y,b,x,S,C=e((()=>{u(),_(),y={title:`Ui/FieldMessage`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={},x={name:`Слоты`,render:()=>({components:{D1FieldMessage:f},template:`
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
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`FieldMessage`,`FieldMessageSlots`]}));C();export{b as FieldMessage,x as FieldMessageSlots,S as __namedExportsOrder,y as default,_ as i,C as n,g as r,v as t};