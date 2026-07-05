import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{d as n,m as r,n as i,o as a,s as o,t as s,u as c}from"./wiki-DgltPJFG.js";import{i as l,n as u,r as d,t as f}from"./D1Group-7fyxhTFp.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`area`,type:`string`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headerAttrs`,type:`ConstrBind<HeaderProps>`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],m=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot/ Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`headline`,description:`Slot for headline/ Слот для заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[],g={component:`Group`,props:p,slots:m,events:h,defaults:d,wikiDesign:i}})),v,y=t((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,a,r)})),b=e({Group:()=>S,GroupBasic:()=>C,GroupSlots:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T,E=t((()=>{u(),y(),x={title:`Ui/Group`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Group:f},setup:()=>({args:e}),template:`
      <D1Group v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </D1Group>
    `})},C={name:`Базовые`,render:()=>({components:{D1Group:f},template:`
        <D1Group
          headline="Notifications"
          label="Settings"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </D1Group>
    `})},w={name:`Использование слотов`,render:()=>({components:{D1Group:f},template:`
        <D1Group>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Group>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Group
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Group v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </D1Group>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Group
    },
    template: \`
        <D1Group
          headline="Notifications"
          label="Settings"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </D1Group>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Group
    },
    template: \`
        <D1Group>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Group>
    \`
  })
}`,...w.parameters?.docs?.source}}},T=[`Group`,`GroupBasic`,`GroupSlots`]}));E();export{S as Group,C as GroupBasic,w as GroupSlots,T as __namedExportsOrder,x as default,y as i,E as n,v as r,b as t};