import{k as D,m as g,c as k,s as o,l as _,n as f,u as S,o as q}from"./iframe-BGVIV1-M.js";import{_ as x}from"./D1Icon-BgbSUe0A.js";import{_ as B}from"./D1Progress-C0TI2H2s.js";import{_ as A}from"./D1Ripple-BDM2s-Z1.js";import{B as T}from"./ButtonDesign-BjUb3TEt.js";import{W as L,w as z,a as M,b as X}from"./wiki-BNdC282o.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as P}from"./D1Skeleton-T6eLt5ZL.js";const I={tag:"span"};class W extends T{}const t={adaptive:["iconAlways","block","auto","iconSm","iconMd","iconLg","iconXl","icon2xl","fullSm","fullMd","fullLg","fullXl","full2xl"],container:["iconSm","iconMd","iconLg","iconXl","icon2xl","fullSm","fullMd","fullLg","fullXl","full2xl"],textAlign:["left","center","right"],size:["sm","md","lg"],palette:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone","black","white"]},b={...I,input:!0,size:"md"},e=D({name:"D1Chip",__name:"D1Chip",props:g({tag:{},label:{},readonly:{type:Boolean},disabled:{type:Boolean},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},icon:{},loading:{type:[Boolean,Object]},isSkeleton:{type:Boolean},to:{},value:{},detail:{},focus:{type:Boolean},adaptive:{},container:{},inverse:{type:Boolean},grid:{type:Boolean},textAlign:{},input:{type:Boolean},assistive:{type:Boolean},size:{},roundedFull:{type:Boolean},palette:{}},b),emits:["click","clickLite"],setup(d,{expose:y,emit:u}){const v=u,i=d,w=k(()=>({main:{"d1-chip":!0,"d1-chip--focus":i.focus,"d1-chip--disabled":i.disabled,"d1-chip--selected":i.selected,"d1-chip--readonly":i.readonly,[`d1-chip--adaptive--${i.adaptive}`]:o(t.adaptive,i.adaptive),[`d1-chip--container--${i.container}`]:o(t.container,i.container),"d1-chip--inverse":i.inverse,"d1-chip--grid":i.grid,[`d1-chip--textAlign--${i.textAlign}`]:o(t.textAlign,i.textAlign),"d1-chip--input":i.input&&!i.assistive,"d1-chip--assistive":i.assistive,[`d1-chip--size--${i.size}`]:o(t.size,i.size),"d1-chip--roundedFull":i.roundedFull,[`d1-palette d1-palette--${i.palette}`]:o(t.palette,i.palette)}})),h=k(()=>({})),p=new W("d1.chip",i,{emits:v,classes:w,styles:h,components:{icon:x,progress:B,ripple:A}}),C=p.render();return y(p.expose()),(R,V)=>(q(),_(f(S(C))))}});e.__docgenInfo={name:"D1Chip",exportName:"default",displayName:"D1Chip",description:"",tags:{},props:[{name:"palette",required:!1,type:{name:"union",elements:[{name:'"red"'},{name:'"orange"'},{name:'"amber"'},{name:'"yellow"'},{name:'"lime"'},{name:'"green"'},{name:'"emerald"'},{name:'"teal"'},{name:'"cyan"'},{name:'"sky"'},{name:'"blue"'},{name:'"indigo"'},{name:'"violet"'},{name:'"purple"'},{name:'"fuchsia"'},{name:'"pink"'},{name:'"rose"'},{name:'"slate"'},{name:'"gray"'},{name:'"zinc"'},{name:'"neutral"'},{name:'"stone"'},{name:'"black"'},{name:'"white"'}]}},{name:"roundedFull",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"assistive",required:!1,type:{name:"boolean"}},{name:"input",required:!1,type:{name:"boolean"}},{name:"textAlign",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]}},{name:"grid",required:!1,type:{name:"boolean"}},{name:"inverse",required:!1,type:{name:"boolean"}},{name:"container",required:!1,type:{name:"union",elements:[{name:'"iconSm"'},{name:'"iconMd"'},{name:'"iconLg"'},{name:'"iconXl"'},{name:'"icon2xl"'},{name:'"fullSm"'},{name:'"fullMd"'},{name:'"fullLg"'},{name:'"fullXl"'},{name:'"full2xl"'}]}},{name:"adaptive",required:!1,type:{name:"union",elements:[{name:'"iconAlways"'},{name:'"block"'},{name:'"auto"'},{name:'"iconSm"'},{name:'"iconMd"'},{name:'"iconLg"'},{name:'"iconXl"'},{name:'"icon2xl"'},{name:'"fullSm"'},{name:'"fullMd"'},{name:'"fullLg"'},{name:'"fullXl"'},{name:'"full2xl"'}]}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"focus",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Git/dxt-ui/packages/d1/src/components/Ui/Chip/D1Chip.vue"]};const $=[{name:"adaptive",type:"string",option:["iconAlways","block","auto","iconSm","iconMd","iconLg","iconXl","icon2xl","fullSm","fullMd","fullLg","fullXl","full2xl"]},{name:"assistive",type:"boolean"},{name:"container",type:"string",option:["iconSm","iconMd","iconLg","iconXl","icon2xl","fullSm","fullMd","fullLg","fullXl","full2xl"]},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"focus",type:"boolean"},{name:"grid",type:"boolean"},{name:"icon",type:"IconValue<IconProps>"},{name:"iconAttrs",type:"ConstrBind<IconProps>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTrailing",type:"IconValue<IconProps>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"input",type:"boolean"},{name:"inverse",type:"boolean"},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"loading",type:"boolean | ConstrBind<ProgressProps>"},{name:"palette",type:"string",option:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone","black","white"]},{name:"readonly",type:"boolean"},{name:"roundedFull",type:"boolean"},{name:"selected",type:"boolean"},{name:"size",type:"string",option:["sm","md","lg"]},{name:"tag",type:"string",option:["button","a","span"]},{name:"textAlign",type:"string",option:["left","center","right"]},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"value",type:"any"}],c=new L("Chip",$,b,z,M,X),O={title:"Ui/Chip",component:e,parameters:{design:"d1",docs:{description:{component:c.getDescription()}}},argTypes:c.getWiki(),args:c.getValues()},s={},n={name:"Базовые",render:()=>({components:{D1Chip:e},template:`
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
    `})},a={name:"Ввод (input)",render:()=>({components:{D1Chip:e},template:`
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
    `})},r={name:"Вспомогательные (assistive)",render:()=>({components:{D1Chip:e},template:`
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
    `})},l={name:"Адаптивные",render:()=>({components:{D1Chip:e},template:`
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
    `})},m={name:"Скелетон",render:()=>({components:{D1Chip:e,D1Skeleton:P},template:`
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
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const F=["Chip","ChipBasic","ChipInput","ChipAssistive","ChipAdaptive","ChipSkeleton"],Q=Object.freeze(Object.defineProperty({__proto__:null,Chip:s,ChipAdaptive:l,ChipAssistive:r,ChipBasic:n,ChipInput:a,ChipSkeleton:m,__namedExportsOrder:F,default:O},Symbol.toStringTag,{value:"Module"}));export{Q as C,s as a,c as b,n as c,a as d,r as e,l as f,m as g};
