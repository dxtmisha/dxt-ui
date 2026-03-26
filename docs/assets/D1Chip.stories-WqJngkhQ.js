import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{n as l,t as u}from"./D1Skeleton-CXvijoBv.js";import{i as d,n as f,r as p,t as m}from"./D1Chip-DSrYUCUE.js";var h,g,_=e((()=>{c(),s(),d(),h=[{name:`adaptive`,type:`string`,option:[`iconAlways`,`block`,`auto`,`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`ariaLabel`,type:`string`},{name:`assistive`,type:`boolean`},{name:`container`,type:`string`,option:[`iconSm`,`iconMd`,`iconLg`,`iconXl`,`icon2xl`,`fullSm`,`fullMd`,`fullLg`,`fullXl`,`full2xl`]},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`grid`,type:`boolean`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`input`,type:`boolean`},{name:`inverse`,type:`boolean`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`readonly`,type:`boolean`},{name:`roundedFull`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]},{name:`tag`,type:`string`,option:[`button`,`a`,`span`]},{name:`textAlign`,type:`string`,option:[`left`,`center`,`right`]},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`type`,type:`string`,option:[`button`,`submit`,`reset`]},{name:`value`,type:`EventClickValue['value']`}],g={component:`Chip`,props:h,defaults:p,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,i,a)})),b=t({Chip:()=>S,ChipAdaptive:()=>E,ChipAssistive:()=>T,ChipBasic:()=>C,ChipInput:()=>w,ChipSkeleton:()=>D,__namedExportsOrder:()=>O,default:()=>x}),x,S,C,w,T,E,D,O,k=e((()=>{f(),y(),l(),x={title:`Ui/Chip`,component:m,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Базовые`,render:()=>({components:{D1Chip:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip icon="star">Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip selected>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <D1Chip disabled>Chip</D1Chip>
          </div>
        </div>
    `})},w={name:`Ввод (input)`,render:()=>({components:{D1Chip:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Input</div>
            <D1Chip input>Tag</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip input icon="person">Contact</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip input selected icon="tag">Keyword</D1Chip>
          </div>
        </div>
    `})},T={name:`Вспомогательные (assistive)`,render:()=>({components:{D1Chip:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Assistive</div>
            <D1Chip assistive>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip assistive icon="lightbulb">Suggestion</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip assistive selected icon="check">Recommended</D1Chip>
          </div>
        </div>
    `})},E={name:`Адаптивные`,render:()=>({components:{D1Chip:m},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Chip adaptive="fullSm" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Chip container="fullSm" icon="star" label="Chip"/>
          </div>
        </div>
    `})},D={name:`Скелетон`,render:()=>({components:{D1Chip:m,D1Skeleton:u},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Skeleton>
              <D1Chip>Chip</D1Chip>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Skeleton :active="true">
              <D1Chip isSkeleton>Chip</D1Chip>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <D1Skeleton :active="true">
              <D1Chip>Chip</D1Chip>
            </D1Skeleton>
          </div>
        </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Chip
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip icon="star">Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip selected>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <D1Chip disabled>Chip</D1Chip>
          </div>
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Ввод (input)',
  render: () => ({
    components: {
      D1Chip
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Input</div>
            <D1Chip input>Tag</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip input icon="person">Contact</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip input selected icon="tag">Keyword</D1Chip>
          </div>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Вспомогательные (assistive)',
  render: () => ({
    components: {
      D1Chip
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Assistive</div>
            <D1Chip assistive>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip assistive icon="lightbulb">Suggestion</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip assistive selected icon="check">Recommended</D1Chip>
          </div>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Адаптивные',
  render: () => ({
    components: {
      D1Chip
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Chip adaptive="fullSm" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Chip container="fullSm" icon="star" label="Chip"/>
          </div>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Chip,
      D1Skeleton
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Skeleton>
              <D1Chip>Chip</D1Chip>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Skeleton :active="true">
              <D1Chip isSkeleton>Chip</D1Chip>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <D1Skeleton :active="true">
              <D1Chip>Chip</D1Chip>
            </D1Skeleton>
          </div>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Chip`,`ChipBasic`,`ChipInput`,`ChipAssistive`,`ChipAdaptive`,`ChipSkeleton`]}));k();export{S as Chip,E as ChipAdaptive,T as ChipAssistive,C as ChipBasic,w as ChipInput,D as ChipSkeleton,O as __namedExportsOrder,x as default,y as i,k as n,v as r,b as t};