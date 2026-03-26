import{n as e,r as t}from"./chunk-BneVvdWh.js";import{It as n,gt as r}from"./iframe-InwAcaLb.js";import{a as i,d as a,l as o,m as s,n as c,t as l,u}from"./wiki-DiKtF90Q.js";import{i as d,n as f,r as p,t as m}from"./D1Bars-igRUTLv2.js";import{n as h,t as g}from"./D1Skeleton-CXvijoBv.js";var _,v,y=e((()=>{u(),l(),d(),_=[{name:`action`,type:`boolean`},{name:`actionBars`,type:`ConstrBind<ButtonPropsBasic>[]`},{name:`actionDescription`,type:`string | number`},{name:`actionLabel`,type:`NumberOrString`},{name:`backActionHide`,type:`boolean`},{name:`backButton`,type:`ConstrBind<ButtonPropsBasic>`},{name:`backHide`,type:`boolean`},{name:`bars`,type:`ConstrBind<ButtonPropsBasic>[]`},{name:`buttonAttrs`,type:`ConstrBind<ButtonPropsBasic>`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`iconBack`,type:`IconValue<Icon>`},{name:`iconClose`,type:`IconValue<Icon>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`modelAction`,type:`boolean`},{name:`onUpdate:action`,type:`(value: boolean) => void`},{name:`onUpdate:modelAction`,type:`(value: boolean) => void`},{name:`padding`,type:`string`,option:[`sm`,`md`,`lg`,`ySm`,`yMd`,`yLg`,`none`]},{name:`paddingByIndent`,type:`boolean`},{name:`textClose`,type:`TextValue`}],v={component:`Bars`,props:_,defaults:p,wikiDesign:c}})),b,x=e((()=>{u(),i(),y(),b=new a(v.component,v.props,v.defaults,v.wikiDesign,o,s)})),S=t({Bars:()=>w,BarsBasic:()=>T,BarsSkeleton:()=>D,BarsVModel:()=>E,__namedExportsOrder:()=>O,default:()=>C}),C,w,T,E,D,O,k=e((()=>{f(),x(),h(),r(),C={title:`Ui/Bars`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={},T={name:`Базовые`,render:()=>({components:{D1Bars:m},template:`
        <div class="wiki-storybook-flex-column">
          <D1Bars
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />

          <D1Bars
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share' },
              { icon: 'edit' },
              { icon: 'delete' }
            ]"
          />
        </div>
    `})},E={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Bars:m},setup(){return{isAction:n(!1)}},template:`
        <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
        <D1Bars
          v-model:action="isAction"
          label="Page Title"
          description="A concise description for this example"
          :bars="[
            { icon: 'search' },
            { icon: 'refresh' },
            { icon: 'more_vert' }
          ]"
          action-label="2 selected"
          action-description="Choose an action to apply"
          :action-bars="[
            { icon: 'share' },
            { icon: 'edit' },
            { icon: 'delete' }
          ]"
          style="margin-top: 8px;"
        />
    `})},D={name:`Загрузка скелетона`,render:()=>({components:{D1Bars:m,D1Skeleton:g},template:`
        <D1Skeleton :active="true">
          <D1Bars
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />
        </D1Skeleton>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Bars
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Bars
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />

          <D1Bars
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share' },
              { icon: 'edit' },
              { icon: 'delete' }
            ]"
          />
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Bars
    },
    setup() {
      return {
        isAction: ref(false)
      };
    },
    template: \`
        <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
        <D1Bars
          v-model:action="isAction"
          label="Page Title"
          description="A concise description for this example"
          :bars="[
            { icon: 'search' },
            { icon: 'refresh' },
            { icon: 'more_vert' }
          ]"
          action-label="2 selected"
          action-description="Choose an action to apply"
          :action-bars="[
            { icon: 'share' },
            { icon: 'edit' },
            { icon: 'delete' }
          ]"
          style="margin-top: 8px;"
        />
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1Bars,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1Bars
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />
        </D1Skeleton>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Bars`,`BarsBasic`,`BarsVModel`,`BarsSkeleton`]}));k();export{w as Bars,T as BarsBasic,D as BarsSkeleton,E as BarsVModel,O as __namedExportsOrder,C as default,x as i,k as n,b as r,S as t};