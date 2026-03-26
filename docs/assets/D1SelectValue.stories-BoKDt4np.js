import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1SelectValue-BNutU5YT.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`chipAttrs`,type:`ConstrBind<Chip>`},{name:`disabled`,type:`boolean`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconCancel`,type:`IconValue<Icon>`},{name:`iconShow`,type:`boolean`},{name:`multiple`,type:`boolean`},{name:`placeholder`,type:`string`},{name:`readonly`,type:`boolean`},{name:`value`,type:`ListList`}],m={component:`SelectValue`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({SelectValue:()=>b,SelectValueBasic:()=>x,__namedExportsOrder:()=>S,default:()=>y}),y,b,x,S,C=e((()=>{u(),_(),y={title:`Ui/SelectValue`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={},x={name:`Базовые`,render:()=>({components:{D1SelectValue:f},template:`
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
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`SelectValue`,`SelectValueBasic`]}));C();export{b as SelectValue,x as SelectValueBasic,S as __namedExportsOrder,y as default,_ as i,C as n,g as r,v as t};