import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-BtAa-rOh.js";import{n as l,t as u}from"./D1Skeleton-C-Z5T1LH.js";import{i as d,n as f,r as p,t as m}from"./D1Field-BaKhSELD.js";var h,g,_,v,y=e((()=>{c(),s(),d(),h=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowCarousel`,type:`boolean`},{name:`arrowStepper`,type:`boolean`},{name:`basic`,type:`boolean`},{name:`block`,type:`boolean`},{name:`boxed`,type:`boolean`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`cancelShow`,type:`boolean`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`classic`,type:`boolean`},{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`counterTop`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`disabledNext`,type:`boolean`},{name:`disabledPrevious`,type:`boolean`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabel>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`filled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconArrowLeft`,type:`IconValue<Icon>`},{name:`iconArrowRight`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconClose`,type:`IconValue<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconMinus`,type:`IconValue<Icon>`},{name:`iconPalette`,type:`boolean`},{name:`iconPlus`,type:`IconValue<Icon>`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`id`,type:`string | number`},{name:`isSkeleton`,type:`boolean`},{name:`isValue`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`maxlength`,type:`string | number`},{name:`outlined`,type:`boolean`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`,`display`]},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`textCancel`,type:`TextValue`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`tonal`,type:`boolean`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`EventClickValue['value']`},{name:`width`,type:`string`,option:[`custom`]}],g=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,properties:[{name:`props`,type:`FieldControl`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`leading`,properties:[{name:`props`,type:`FieldControl`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`},{name:`suffix`,description:`Suffix slot/ Слот суффикса`},{name:`trailing`,properties:[{name:`props`,type:`FieldControl`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`Field`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})),b,x=e((()=>{c(),n(),y(),b=new r(v.component,v.props,v.defaults,v.wikiDesign,a,i)})),S=t({Field:()=>w,FieldCancel:()=>T,FieldNavigation:()=>E,FieldSkeleton:()=>D,FieldSlots:()=>A,FieldValue:()=>O,FieldWidth:()=>k,__namedExportsOrder:()=>j,default:()=>C}),C,w,T,E,D,O,k,A,j,M=e((()=>{f(),x(),l(),C={title:`Ui/Field`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1Field:m},setup:()=>({args:e}),template:`
      <D1Field v-bind="args">
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
        </template>
      </D1Field>
    `})},T={name:`Кнопка очистки`,render:()=>({components:{D1Field:m},template:`
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
    `})},E={name:`Навигация / стрелки`,render:()=>({components:{D1Field:m},template:`
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
    `})},D={name:`Скелетон`,render:()=>({components:{D1Field:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    `})},O={name:`Состояние значения`,render:()=>({components:{D1Field:m},template:`
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
    `})},k={name:`Ширина`,render:()=>({components:{D1Field:m},template:`
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
    `})},A={name:`Использование слотов`,render:()=>({components:{D1Field:m},template:`
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
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Field`,`FieldCancel`,`FieldNavigation`,`FieldSkeleton`,`FieldValue`,`FieldWidth`,`FieldSlots`]}));M();export{w as Field,T as FieldCancel,E as FieldNavigation,D as FieldSkeleton,A as FieldSlots,O as FieldValue,k as FieldWidth,j as __namedExportsOrder,C as default,x as i,M as n,b as r,S as t};