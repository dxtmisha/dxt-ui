import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-Ck-JDNL8.js";import{i as l,n as u,r as d,t as f}from"./D1Icon-Bmj9etR0.js";import{n as p,t as m}from"./D1Skeleton-YL0_DuxC.js";var h,g,_,v,y=e((()=>{s(),l(),h=[{name:`active`,type:`boolean | undefined`},{name:`animationShow`,type:`boolean | undefined`},{name:`animationType`,type:`string | undefined`,option:[`type1`,`type2`]},{name:`ariaLabel`,type:`string | undefined`},{name:`asPalette`,type:`boolean | undefined`},{name:`circle`,type:`boolean | undefined`},{name:`detail`,type:`Record<string, any> | undefined`},{name:`dir`,type:`boolean | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`dynamic`,type:`boolean | undefined`},{name:`end`,type:`boolean | undefined`},{name:`hide`,type:`boolean | undefined`},{name:`high`,type:`boolean | undefined`},{name:`href`,type:`string | undefined`},{name:`icon`,type:`ImageValue<ImageProps> | undefined`},{name:`iconActive`,type:`ImageValue<ImageProps> | undefined`},{name:`inverse`,type:`boolean | undefined`},{name:`isSkeleton`,type:`boolean | undefined`},{name:`overlay`,type:`boolean | undefined`},{name:`rect`,type:`boolean | undefined`},{name:`role`,type:`string | undefined`},{name:`rounded`,type:`string | undefined`,option:[`auto`,`sm`,`md`,`lg`,`xl`,`full`]},{name:`size`,type:`string | undefined`,option:[`auto`,`x`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`6xl`,`7xl`,`8xl`,`9xl`]},{name:`square`,type:`boolean | undefined`},{name:`start`,type:`boolean | undefined`},{name:`tabindex`,type:`string | number | undefined`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined`},{name:`turn`,type:`boolean | undefined`},{name:`value`,type:`EventClickValue['value']`}],g=[{name:`default`,description:`Slot for custom icon content/ Слот для пользовательского контента иконки`,properties:[{name:`props`,type:`(any) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],v={component:`Icon`,props:h,slots:g,events:_,defaults:d,wikiDesign:a}})),b,x=e((()=>{r(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,n,i)})),S=t({Icon:()=>w,IconDirection:()=>E,IconPalette:()=>D,IconSkeleton:()=>O,IconState:()=>T,__namedExportsOrder:()=>k,default:()=>C}),C,w,T,E,D,O,k,A=e((()=>{u(),x(),p(),C={title:`Ui/Icon`,component:f,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Состояние иконки`,render:()=>({components:{D1Icon:f},template:`
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
        <D1Skeleton :active="true">
          <D1Icon isSkeleton icon="home" rounded="md"/>
        </D1Skeleton>
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
        <D1Skeleton :active="true">
          <D1Icon isSkeleton icon="home" rounded="md"/>
        </D1Skeleton>
    \`
  })
}`,...O.parameters?.docs?.source}}},k=[`Icon`,`IconState`,`IconDirection`,`IconPalette`,`IconSkeleton`]}));A();export{w as Icon,E as IconDirection,D as IconPalette,O as IconSkeleton,T as IconState,k as __namedExportsOrder,C as default,x as i,A as n,b as r,S as t};