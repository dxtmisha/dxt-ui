import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{n as l,t as u}from"./D1Skeleton-CXvijoBv.js";import{i as d,n as f,r as p,t as m}from"./D1Field-9xoE12o1.js";var h,g,_=e((()=>{c(),s(),d(),h=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowCarousel`,type:`boolean`},{name:`arrowStepper`,type:`boolean`},{name:`basic`,type:`boolean`},{name:`block`,type:`boolean`},{name:`boxed`,type:`boolean`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`cancelShow`,type:`boolean`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`classic`,type:`boolean`},{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`counterTop`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`disabledNext`,type:`boolean`},{name:`disabledPrevious`,type:`boolean`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabel>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`filled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconArrowLeft`,type:`IconValue<Icon>`},{name:`iconArrowRight`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconClose`,type:`IconValue<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconMinus`,type:`IconValue<Icon>`},{name:`iconPalette`,type:`boolean`},{name:`iconPlus`,type:`IconValue<Icon>`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`isSkeleton`,type:`boolean`},{name:`isValue`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`maxlength`,type:`string | number`},{name:`outlined`,type:`boolean`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`,`display`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`textCancel`,type:`TextValue`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`tonal`,type:`boolean`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`EventClickValue['value']`},{name:`width`,type:`string`,option:[`custom`]}],g={component:`Field`,props:h,defaults:p,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,i,a)})),b=t({Field:()=>S,FieldCancel:()=>C,FieldNavigation:()=>w,FieldSkeleton:()=>T,FieldSlots:()=>O,FieldValue:()=>E,FieldWidth:()=>D,__namedExportsOrder:()=>k,default:()=>x}),x,S,C,w,T,E,D,O,k,A=e((()=>{f(),y(),l(),x={title:`Ui/Field`,component:m,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Field:m},setup:()=>({args:e}),template:`
      <D1Field v-bind="args">
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
        </template>
      </D1Field>
    `})},C={name:`Кнопка очистки`,render:()=>({components:{D1Field:m},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
        </div>
    `})},w={name:`Навигация / стрелки`,render:()=>({components:{D1Field:m},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </D1Field>
        </div>
    `})},T={name:`Скелетон`,render:()=>({components:{D1Field:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    `})},E={name:`Состояние значения`,render:()=>({components:{D1Field:m},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </D1Field>
          <D1Field label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </D1Field>
        </div>
    `})},D={name:`Ширина`,render:()=>({components:{D1Field:m},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    `})},O={name:`Использование слотов`,render:()=>({components:{D1Field:m},template:`
        <D1Field
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
        >
          <template #default="{id, className}">
            <input :id="id" :class="className" value="Value" readonly/>
          </template>
          <template #leading>Leading slot</template>
          <template #trailing>Trailing slot</template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </D1Field>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Field
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Field v-bind="args">
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
        </template>
      </D1Field>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Кнопка очистки',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Навигация / стрелки',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Field,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Состояние значения',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </D1Field>
          <D1Field label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Ширина',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <D1Field
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
        >
          <template #default="{id, className}">
            <input :id="id" :class="className" value="Value" readonly/>
          </template>
          <template #leading>Leading slot</template>
          <template #trailing>Trailing slot</template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </D1Field>
    \`
  })
}`,...O.parameters?.docs?.source}}},k=[`Field`,`FieldCancel`,`FieldNavigation`,`FieldSkeleton`,`FieldValue`,`FieldWidth`,`FieldSlots`]}));A();export{S as Field,C as FieldCancel,w as FieldNavigation,T as FieldSkeleton,O as FieldSlots,E as FieldValue,D as FieldWidth,k as __namedExportsOrder,x as default,y as i,A as n,v as r,b as t};