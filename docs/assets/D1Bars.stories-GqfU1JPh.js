import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,_t as r}from"./iframe-I1fckF_t.js";import{a as i,d as a,g as o,l as s,n as c,t as l,u}from"./wiki-CMC-2lzg.js";import{i as d,n as f,r as p,t as m}from"./D1Bars-Btt5tCKI.js";import{n as h,t as g}from"./D1Skeleton-pMZYQwwY.js";var _,v,y,b,x=e((()=>{u(),l(),d(),_=[{name:`action`,type:`boolean`},{name:`actionBars`,type:`ConstrBind<ButtonPropsBasic>[]`},{name:`actionDescription`,type:`string | number`},{name:`actionLabel`,type:`NumberOrString`},{name:`backActionHide`,type:`boolean`},{name:`backButton`,type:`ConstrBind<ButtonPropsBasic>`},{name:`backHide`,type:`boolean`},{name:`bars`,type:`ConstrBind<ButtonPropsBasic>[]`},{name:`buttonAttrs`,type:`ConstrBind<ButtonPropsBasic>`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`iconBack`,type:`IconValue<Icon>`},{name:`iconClose`,type:`IconValue<Icon>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`modelAction`,type:`boolean`},{name:`onUpdate:action`,type:`(value: boolean) => void`},{name:`onUpdate:modelAction`,type:`(value: boolean) => void`},{name:`padding`,type:`string`,option:[`sm`,`md`,`lg`,`ySm`,`yMd`,`yLg`,`none`]},{name:`paddingByIndent`,type:`boolean`},{name:`textClose`,type:`TextValue`}],v=[{name:`actionBars`},{name:`bars`},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`}],y=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:action`,properties:[{name:`value`,type:`boolean`}]},{name:`update:modelAction`,properties:[{name:`value`,type:`boolean`}]}],b={component:`Bars`,props:_,slots:v,events:y,defaults:p,wikiDesign:c}})),S,C=e((()=>{u(),i(),x(),S=new a(b.component,b.props,b.defaults,b.wikiDesign,s,o)})),w=t({Bars:()=>E,BarsBasic:()=>D,BarsSkeleton:()=>k,BarsVModel:()=>O,__namedExportsOrder:()=>A,default:()=>T}),T,E,D,O,k,A,j=e((()=>{f(),C(),h(),r(),T={title:`Ui/Bars`,component:m,parameters:{design:`d1`,docs:{description:{component:S.getDescription()}}},argTypes:S.getWiki(),args:S.getValues()},E={},D={name:`Базовые`,render:()=>({components:{D1Bars:m},template:`
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
    `})},O={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Bars:m},setup(){return{isAction:n(!1)}},template:`
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
    `})},k={name:`Загрузка скелетона`,render:()=>({components:{D1Bars:m,D1Skeleton:g},template:`
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
    `})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Bars`,`BarsBasic`,`BarsVModel`,`BarsSkeleton`]}));j();export{E as Bars,D as BarsBasic,k as BarsSkeleton,O as BarsVModel,A as __namedExportsOrder,T as default,C as i,j as n,S as r,w as t};