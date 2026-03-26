import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1Icon-jtYe35RL.js";import{n as p,t as m}from"./D1Skeleton-CXvijoBv.js";var h,g,_=e((()=>{c(),s(),l(),h=[{name:`active`,type:`boolean`},{name:`animationShow`,type:`boolean`},{name:`animationType`,type:`string`,option:[`type1`,`type2`]},{name:`ariaLabel`,type:`string`},{name:`asPalette`,type:`boolean`},{name:`circle`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`dir`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`dynamic`,type:`boolean`},{name:`end`,type:`boolean`},{name:`hide`,type:`boolean`},{name:`high`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`ImageValue<Image>`},{name:`iconActive`,type:`ImageValue<Image>`},{name:`inverse`,type:`boolean`},{name:`isSkeleton`,type:`boolean`},{name:`overlay`,type:`boolean`},{name:`rect`,type:`boolean`},{name:`role`,type:`string`},{name:`rounded`,type:`string`,option:[`auto`,`sm`,`md`,`lg`,`xl`,`full`]},{name:`size`,type:`string`,option:[`auto`,`x`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`6xl`,`7xl`,`8xl`,`9xl`]},{name:`square`,type:`boolean`},{name:`start`,type:`boolean`},{name:`tabindex`,type:`string | number`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`turn`,type:`boolean`},{name:`value`,type:`EventClickValue['value']`}],g={component:`Icon`,props:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,i,a)})),b=t({Icon:()=>S,IconDirection:()=>w,IconPalette:()=>T,IconSkeleton:()=>E,IconState:()=>C,__namedExportsOrder:()=>D,default:()=>x}),x,S,C,w,T,E,D,O=e((()=>{u(),y(),p(),x={title:`Ui/Icon`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Состояние иконки`,render:()=>({components:{D1Icon:f},template:`
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
    `})},w={name:`Направление компонента`,render:()=>({components:{D1Icon:f},template:`
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
    `})},T={name:`Палитра`,render:()=>({components:{D1Icon:f},template:`
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
    `})},E={name:`Скелетон`,render:()=>({components:{D1Icon:f,D1Skeleton:m},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Icon`,`IconState`,`IconDirection`,`IconPalette`,`IconSkeleton`]}));O();export{S as Icon,w as IconDirection,T as IconPalette,E as IconSkeleton,C as IconState,D as __namedExportsOrder,x as default,y as i,O as n,v as r,b as t};