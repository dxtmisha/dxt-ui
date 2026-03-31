import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-CxP3o-n8.js";import{i as l,n as u,r as d,t as f}from"./D1FieldCounter-D3-p44ZP.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`counter`,type:`string | number`},{name:`id`,type:`string`},{name:`maxlength`,type:`string | number`},{name:`maxlengthOnce`,type:`string | number`},{name:`template`,type:`string`},{name:`textCharacterLimit`,type:`TextValue`},{name:`textCharacterRemaining`,type:`TextValue`}],m=[],h=[],g={component:`FieldCounter`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({FieldCounter:()=>S,FieldCounterTemplate:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=e((()=>{u(),y(),x={title:`Ui/FieldCounter`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Пользовательский шаблон`,render:()=>({components:{D1FieldCounter:f},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`FieldCounter`,`FieldCounterTemplate`]}));T();export{S as FieldCounter,C as FieldCounterTemplate,w as __namedExportsOrder,x as default,y as i,T as n,v as r,b as t};