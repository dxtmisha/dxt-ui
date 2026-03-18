import{d as c,_ as n}from"./D1Icon-Brgfn8k6.js";import{w as k,W as m,a as l,b as d}from"./wiki-BeTUR4cU.js";import"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";import{_ as b}from"./D1Skeleton-DmRdoI9z.js";const y=[{name:"active",type:"boolean"},{name:"animationShow",type:"boolean"},{name:"animationType",type:"string",option:["type1","type2"]},{name:"ariaLabel",type:"string"},{name:"asPalette",type:"boolean"},{name:"circle",type:"boolean"},{name:"detail",type:"Record<string, any>"},{name:"dir",type:"boolean"},{name:"disabled",type:"boolean"},{name:"dynamic",type:"boolean"},{name:"end",type:"boolean"},{name:"hide",type:"boolean"},{name:"high",type:"boolean"},{name:"href",type:"string"},{name:"icon",type:"ImageValue<Image>"},{name:"iconActive",type:"ImageValue<Image>"},{name:"inverse",type:"boolean"},{name:"isSkeleton",type:"boolean"},{name:"overlay",type:"boolean"},{name:"rect",type:"boolean"},{name:"role",type:"string"},{name:"rounded",type:"string",option:["auto","sm","md","lg","xl","full"]},{name:"size",type:"string",option:["auto","x","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]},{name:"square",type:"boolean"},{name:"start",type:"boolean"},{name:"tabindex",type:"string | number"},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"turn",type:"boolean"},{name:"value",type:"EventClickValue['value']"}],r={component:"Icon",props:y,defaults:c,wikiDesign:k},a=new m(r.component,r.props,r.defaults,r.wikiDesign,l,d),v={title:"Ui/Icon",component:n,parameters:{design:"d1",docs:{description:{component:a.getDescription()}}},argTypes:a.getWiki(),args:a.getValues()},o={},e={name:"Состояние иконки",render:()=>({components:{D1Icon:n},template:`
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
    `})},s={name:"Скелетон",render:()=>({components:{D1Icon:n,D1Skeleton:b},template:`
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
}`,...s.parameters?.docs?.source}}};const w=["Icon","IconState","IconDirection","IconPalette","IconSkeleton"],g=Object.freeze(Object.defineProperty({__proto__:null,Icon:o,IconDirection:i,IconPalette:t,IconSkeleton:s,IconState:e,__namedExportsOrder:w,default:v},Symbol.toStringTag,{value:"Module"}));export{g as I,o as a,a as b,e as c,i as d,t as e,s as f};
