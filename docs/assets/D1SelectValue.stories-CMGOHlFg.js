import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{i as l,n as u,r as d,t as f}from"./D1SelectValue-DUoLHLfJ.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`chipAttrs`,type:`ConstrBind<ChipProps>`},{name:`disabled`,type:`boolean`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconCancel`,type:`IconValue<IconProps>`},{name:`iconShow`,type:`boolean`},{name:`multiple`,type:`boolean`},{name:`placeholder`,type:`string`},{name:`readonly`,type:`boolean`},{name:`value`,type:`ListList`}],m=[],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],g={component:`SelectValue`,props:p,slots:m,events:h,defaults:d,wikiDesign:i}})),v,y=t((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,a,r)})),b=e({SelectValue:()=>S,SelectValueBasic:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=t((()=>{u(),y(),x={title:`Ui/SelectValue`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Базовые`,render:()=>({components:{D1SelectValue:f},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`SelectValue`,`SelectValueBasic`]}));T();export{S as SelectValue,C as SelectValueBasic,w as __namedExportsOrder,x as default,y as i,T as n,v as r,b as t};