import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{t as n}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as r,l as i,n as a,o,t as s,u as c}from"./wiki-DwIxUKqL.js";import{i as l,n as u,r as d,t as f}from"./D1FieldMessage-CxVIwUPg.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`disabled`,type:`boolean`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps>`},{name:`forceShow`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`maxlength`,type:`string | number`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`}],m=[{name:`helper`,description:`Slot for helper message/ Слот для вспомогательного сообщения`,properties:[{name:`props`,type:`(FieldMessageSlot) | undefined`}]},{name:`validation`,description:`Slot for validation message/Слот для сообщения об ошибке`,properties:[{name:`props`,type:`(FieldMessageSlot) | undefined`}]}],h=[],g={component:`FieldMessage`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=t((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,i,n)})),b=e({FieldMessage:()=>S,FieldMessageSlots:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=t((()=>{u(),y(),x={title:`Ui/FieldMessage`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Слоты`,render:()=>({components:{D1FieldMessage:f},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`FieldMessage`,`FieldMessageSlots`]}));T();export{S as FieldMessage,C as FieldMessageSlots,w as __namedExportsOrder,x as default,y as i,T as n,v as r,b as t};