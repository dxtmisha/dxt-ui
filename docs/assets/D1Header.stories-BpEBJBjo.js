import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{i as l,n as u,r as d,t as f}from"./D1Header-CnPzr_4a.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`area`,type:`string`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`,option:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]}],m=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[],g={component:`Header`,props:p,slots:m,events:h,defaults:d,wikiDesign:i}})),v,y=t((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,a,r)})),b=e({Header:()=>S,HeaderBasic:()=>C,HeaderSlots:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T,E=t((()=>{u(),y(),x={title:`Ui/Header`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Базовые`,render:()=>({components:{D1Header:f},template:`
        <div class="wiki-storybook-flex--column">
          <D1Header label="Header Level 1" tag="h1" />
          <D1Header label="Header Level 2" tag="h2" />
          <D1Header label="Header Level 3" tag="h3" />
        </div>
    `})},w={name:`Слоты`,render:()=>({components:{D1Header:f},template:`
        <D1Header label="Default label" caption="Default caption">
          <template #default>Custom label slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Header>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Header
    },
    template: \`
        <div class="wiki-storybook-flex--column">
          <D1Header label="Header Level 1" tag="h1" />
          <D1Header label="Header Level 2" tag="h2" />
          <D1Header label="Header Level 3" tag="h3" />
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Слоты',
  render: () => ({
    components: {
      D1Header
    },
    template: \`
        <D1Header label="Default label" caption="Default caption">
          <template #default>Custom label slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Header>
    \`
  })
}`,...w.parameters?.docs?.source}}},T=[`Header`,`HeaderBasic`,`HeaderSlots`]}));E();export{S as Header,C as HeaderBasic,w as HeaderSlots,T as __namedExportsOrder,x as default,y as i,E as n,v as r,b as t};