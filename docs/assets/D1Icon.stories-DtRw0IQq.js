import{d as a,_ as n}from"./D1Icon-C_FdSDGx.js";import{W as c,w as k,a as m,b as l}from"./wiki-b8Pce8s9.js";import"./iframe-CpPdPYqc.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as d}from"./D1Skeleton-Dvv1lbQv.js";const b=[{name:"active",type:"boolean"},{name:"animationShow",type:"boolean"},{name:"animationType",type:"string",option:["type1","type2"]},{name:"asPalette",type:"boolean"},{name:"circle",type:"boolean"},{name:"dir",type:"boolean"},{name:"disabled",type:"boolean"},{name:"dynamic",type:"boolean"},{name:"end",type:"boolean"},{name:"hide",type:"boolean"},{name:"high",type:"boolean"},{name:"icon",type:"ImageValue<ImageProps>"},{name:"iconActive",type:"ImageValue<ImageProps>"},{name:"inverse",type:"boolean"},{name:"isSkeleton",type:"boolean"},{name:"overlay",type:"boolean"},{name:"rect",type:"boolean"},{name:"rounded",type:"string",option:["auto","sm","md","lg","xl","full"]},{name:"size",type:"string",option:["auto","x","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]},{name:"square",type:"boolean"},{name:"start",type:"boolean"},{name:"turn",type:"boolean"}],r=new c("Icon",b,a,k,m,l),y={title:"Ui/Icon",component:n,parameters:{design:"d1",docs:{description:{component:r.getDescription()}}},argTypes:r.getWiki(),args:r.getValues()},o={},e={name:"Состояние иконки",render:()=>({components:{D1Icon:n},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Icon icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Icon icon="heart_minus" iconActive="favorite" :active="true"/>
          </div>
        </div>
    `})},i={name:"Направление компонента",render:()=>({components:{D1Icon:n},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">LTR</div>
            <D1Icon dir icon="arrow_forward"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl">
            <div class="wiki-storybook-item__label">RTL</div>
            <D1Icon dir icon="arrow_forward"/>
          </div>
        </div>
    `})},t={name:"Палитра",render:()=>({components:{D1Icon:n},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Icon icon="home" size="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Palette</div>
            <D1Icon icon="home" size="lg" asPalette/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Inverse</div>
            <D1Icon icon="home" size="lg" asPalette inverse/>
          </div>
        </div>
    `})},s={name:"Скелетон",render:()=>({components:{D1Icon:n,D1Skeleton:d},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Skeleton>
              <D1Icon icon="home"/>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Skeleton :active="true">
              <D1Icon isSkeleton icon="home" rounded="md"/>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <D1Skeleton :active="true">
              <D1Icon icon="home"/>
            </D1Skeleton>
          </div>
        </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Состояние иконки',
  render: () => ({
    components: {
      D1Icon
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Icon icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Icon icon="heart_minus" iconActive="favorite" :active="true"/>
          </div>
        </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Направление компонента',
  render: () => ({
    components: {
      D1Icon
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">LTR</div>
            <D1Icon dir icon="arrow_forward"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl">
            <div class="wiki-storybook-item__label">RTL</div>
            <D1Icon dir icon="arrow_forward"/>
          </div>
        </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Палитра',
  render: () => ({
    components: {
      D1Icon
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Icon icon="home" size="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Palette</div>
            <D1Icon icon="home" size="lg" asPalette/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Inverse</div>
            <D1Icon icon="home" size="lg" asPalette inverse/>
          </div>
        </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Icon,
      D1Skeleton
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Skeleton>
              <D1Icon icon="home"/>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Skeleton :active="true">
              <D1Icon isSkeleton icon="home" rounded="md"/>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <D1Skeleton :active="true">
              <D1Icon icon="home"/>
            </D1Skeleton>
          </div>
        </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const v=["Icon","IconState","IconDirection","IconPalette","IconSkeleton"],I=Object.freeze(Object.defineProperty({__proto__:null,Icon:o,IconDirection:i,IconPalette:t,IconSkeleton:s,IconState:e,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{I,o as a,r as b,e as c,i as d,t as e,s as f};
