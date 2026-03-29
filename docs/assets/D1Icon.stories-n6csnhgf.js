import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-BtAa-rOh.js";import{i as l,n as u,r as d,t as f}from"./D1Icon-Ci1pDxDr.js";import{n as p,t as m}from"./D1Skeleton-C-Z5T1LH.js";var h,g,_,v,y=e((()=>{c(),s(),l(),h=[{name:`active`,type:`boolean`},{name:`animationShow`,type:`boolean`},{name:`animationType`,type:`string`,option:[`type1`,`type2`]},{name:`ariaLabel`,type:`string`},{name:`asPalette`,type:`boolean`},{name:`circle`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`dir`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`dynamic`,type:`boolean`},{name:`end`,type:`boolean`},{name:`hide`,type:`boolean`},{name:`high`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`ImageValue<Image>`},{name:`iconActive`,type:`ImageValue<Image>`},{name:`inverse`,type:`boolean`},{name:`isSkeleton`,type:`boolean`},{name:`overlay`,type:`boolean`},{name:`rect`,type:`boolean`},{name:`role`,type:`string`},{name:`rounded`,type:`string`,option:[`auto`,`sm`,`md`,`lg`,`xl`,`full`]},{name:`size`,type:`string`,option:[`auto`,`x`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`6xl`,`7xl`,`8xl`,`9xl`]},{name:`square`,type:`boolean`},{name:`start`,type:`boolean`},{name:`tabindex`,type:`string | number`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`turn`,type:`boolean`},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,properties:[{name:`image`,type:`ImageEventData`}]}],v={component:`Icon`,props:h,slots:g,events:_,defaults:d,wikiDesign:o}})),b,x=e((()=>{c(),n(),y(),b=new r(v.component,v.props,v.defaults,v.wikiDesign,a,i)})),S=t({Icon:()=>w,IconDirection:()=>E,IconPalette:()=>D,IconSkeleton:()=>O,IconState:()=>T,__namedExportsOrder:()=>k,default:()=>C}),C,w,T,E,D,O,k,A=e((()=>{u(),x(),p(),C={title:`Ui/Icon`,component:f,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Состояние иконки`,render:()=>({components:{D1Icon:f},template:`
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
    `})},E={name:`Направление компонента`,render:()=>({components:{D1Icon:f},template:`
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
    `})},D={name:`Палитра`,render:()=>({components:{D1Icon:f},template:`
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
    `})},O={name:`Скелетон`,render:()=>({components:{D1Icon:f,D1Skeleton:m},template:`
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
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Icon`,`IconState`,`IconDirection`,`IconPalette`,`IconSkeleton`]}));A();export{w as Icon,E as IconDirection,D as IconPalette,O as IconSkeleton,T as IconState,k as __namedExportsOrder,C as default,x as i,A as n,b as r,S as t};