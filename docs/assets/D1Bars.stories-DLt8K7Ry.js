import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ht as n,xt as r}from"./iframe-CXCBnhvn.js";import{a as i,d as a,m as o,n as s,o as c,t as l,u}from"./wiki-BqBJrlEv.js";import{i as d,n as f,r as p,t as m}from"./D1Bars-CVn2UMcQ.js";import{n as h,t as g}from"./D1Skeleton-CY2SBSLv.js";var _,v,y,b,x=e((()=>{l(),d(),_=[{name:`action`,type:`boolean | undefined`},{name:`actionBars`,type:`ConstrBind<ButtonProps>[] | undefined`},{name:`actionDescription`,type:`string | number | undefined`},{name:`actionLabel`,type:`NumberOrString | undefined`},{name:`backActionHide`,type:`boolean | undefined`},{name:`backButton`,type:`ConstrBind<ButtonProps> | undefined`},{name:`backHide`,type:`boolean | undefined`},{name:`bars`,type:`ConstrBind<ButtonProps>[] | undefined`},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps> | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`iconBack`,type:`IconValue<IconProps> | undefined`},{name:`iconClose`,type:`IconValue<IconProps> | undefined`},{name:`isSkeleton`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`modelAction`,type:`boolean | undefined`},{name:`onUpdate:action`,type:`((value: boolean) => void) | undefined`},{name:`onUpdate:modelAction`,type:`((value: boolean) => void) | undefined`},{name:`padding`,type:`string | undefined`,option:[`sm`,`md`,`lg`,`ySm`,`yMd`,`yLg`,`none`]},{name:`paddingByIndent`,type:`boolean | undefined`},{name:`textClose`,type:`TextValue`}],v=[{name:`actionBars`,description:`Slot for displaying a list of buttons in action mode/ Слот для отображения списка кнопок в режиме действия`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`bars`,description:`Slot for displaying a list of buttons/ Слот для отображения списка кнопок`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],y=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:action`,description:`Event for updating the action mode status/ Событие обновления статуса режима действия`,properties:[{name:`value`,type:`boolean`}]},{name:`update:modelAction`,description:`Event for updating the action mode model status/ Событие обновления статуса модели режима действия`,properties:[{name:`value`,type:`boolean`}]}],b={component:`Bars`,props:_,slots:v,events:y,defaults:p,wikiDesign:s}})),S,C=e((()=>{a(),c(),x(),S=new u(b.component,b.props,b.defaults,b.wikiDesign,i,o)})),w=t({Bars:()=>E,BarsBasic:()=>D,BarsSkeleton:()=>k,BarsSlots:()=>A,BarsVModel:()=>O,__namedExportsOrder:()=>j,default:()=>T}),T,E,D,O,k,A,j,M=e((()=>{f(),C(),h(),r(),T={title:`Ui/Bars`,component:m,parameters:{design:`d1`,docs:{description:{component:S.getDescription()}}},argTypes:S.getWiki(),args:S.getValues()},E={},D={name:`Базовые`,render:()=>({components:{D1Bars:m},template:`
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
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
        </div>
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
    `})},A={name:`Использование слотов`,render:()=>({components:{D1Bars:m},setup(){return{isAction:n(!1)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
          <D1Bars v-model:action="isAction">
            <template #default>Custom Label slot</template>
            <template #description>Custom Description slot</template>
            <template #bars>Custom Bars Slot</template>
            <template #actionBars>Custom ActionBars Slot</template>
          </D1Bars>
        </div>
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
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
        </div>
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
          <D1Bars v-model:action="isAction">
            <template #default>Custom Label slot</template>
            <template #description>Custom Description slot</template>
            <template #bars>Custom Bars Slot</template>
            <template #actionBars>Custom ActionBars Slot</template>
          </D1Bars>
        </div>
    \`
  })
}`,...A.parameters?.docs?.source}}},j=[`Bars`,`BarsBasic`,`BarsVModel`,`BarsSkeleton`,`BarsSlots`]}));M();export{E as Bars,D as BarsBasic,k as BarsSkeleton,A as BarsSlots,O as BarsVModel,j as __namedExportsOrder,T as default,C as i,M as n,S as r,w as t};