import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-BqBJrlEv.js";import{n as l,t as u}from"./D1Skeleton-CY2SBSLv.js";import{i as d,n as f,r as p,t as m}from"./D1Field-ChtgCu8h.js";var h,g,_,v,y=e((()=>{s(),d(),h=[{name:`align`,type:`string | undefined`,option:[`center`,`right`,`left`]},{name:`arrowAlign`,type:`string | undefined`,option:[`center`,`right`,`left`]},{name:`arrowCarousel`,type:`boolean | undefined`},{name:`arrowStepper`,type:`boolean | undefined`},{name:`basic`,type:`boolean | undefined`},{name:`block`,type:`boolean | undefined`},{name:`boxed`,type:`boolean | undefined`},{name:`cancel`,type:`string | undefined`,option:[`auto`,`always`,`none`]},{name:`cancelShow`,type:`boolean | undefined`},{name:`caption`,type:`string | number | undefined`},{name:`captionDecorative`,type:`boolean | undefined`},{name:`classic`,type:`boolean | undefined`},{name:`counter`,type:`string | number | undefined`},{name:`counterId`,type:`string | undefined`},{name:`counterShow`,type:`boolean | undefined`},{name:`counterTemplate`,type:`string | undefined`},{name:`counterTop`,type:`boolean | undefined`},{name:`detail`,type:`Record<string, any> | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`disabledNext`,type:`boolean | undefined`},{name:`disabledPrevious`,type:`boolean | undefined`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps> | undefined`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps> | undefined`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps> | undefined`},{name:`filled`,type:`boolean | undefined`},{name:`focus`,type:`boolean | undefined`},{name:`forceShowMessage`,type:`boolean | undefined`},{name:`helperId`,type:`string | undefined`},{name:`helperMessage`,type:`string | undefined`},{name:`href`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconArrowLeft`,type:`IconValue<IconProps> | undefined`},{name:`iconArrowRight`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconClose`,type:`IconValue<IconProps> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconMinus`,type:`IconValue<IconProps> | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconPlus`,type:`IconValue<IconProps> | undefined`},{name:`iconTrailing`,type:`IconValue<IconProps> | undefined`},{name:`iconTrailingDirOnly`,type:`boolean | undefined`},{name:`iconTrailingPalette`,type:`boolean | undefined`},{name:`iconTrailingTurnOnly`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`id`,type:`string | number | undefined`},{name:`isSkeleton`,type:`boolean | undefined`},{name:`isValue`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps> | undefined`},{name:`maxlength`,type:`string | number | undefined`},{name:`outlined`,type:`boolean | undefined`},{name:`prefix`,type:`string | number | undefined`},{name:`prefixId`,type:`string | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`required`,type:`boolean | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`size`,type:`string | undefined`,option:[`sm`,`md`,`lg`,`display`]},{name:`suffix`,type:`string | number | undefined`},{name:`suffixId`,type:`string | undefined`},{name:`textCancel`,type:`TextValue`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined`},{name:`tonal`,type:`boolean | undefined`},{name:`validationId`,type:`string | undefined`},{name:`validationMessage`,type:`string | undefined`},{name:`value`,type:`EventClickValue['value']`},{name:`width`,type:`string | undefined`,option:[`custom`]}],g=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot for the input element/ Слот по умолчанию для элемента ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for displaying content after the input area/ Слот для отображения контента после области ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]}],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],v={component:`Field`,props:h,slots:g,events:_,defaults:p,wikiDesign:a}})),b,x=e((()=>{r(),o(),y(),b=new c(v.component,v.props,v.defaults,v.wikiDesign,n,i)})),S=t({Field:()=>w,FieldCancel:()=>E,FieldNavigation:()=>D,FieldSkeleton:()=>O,FieldSlots:()=>k,FieldWidth:()=>T,__namedExportsOrder:()=>A,default:()=>C}),C,w,T,E,D,O,k,A,j=e((()=>{f(),x(),l(),C={title:`Ui/Field`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1Field:m},setup:()=>({args:e}),template:`
      <D1Field v-bind="args">
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
        </template>
      </D1Field>
    `})},T={name:`Ширина`,render:()=>({components:{D1Field:m},template:`
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
    `})},E={name:`Кнопка очистки`,render:()=>({components:{D1Field:m},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + value">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    `})},D={name:`Навигация / стрелки`,render:()=>({components:{D1Field:m},template:`
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
    `})},O={name:`Скелетон`,render:()=>({components:{D1Field:m,D1Skeleton:u},template:`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    `})},k={name:`Использование слотов`,render:()=>({components:{D1Field:m},template:`
        <D1Field
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
          value="Value"
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
          <D1Field cancel="auto" :cancel-show="true" label="auto + value">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
          value="Value"
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
}`,...k.parameters?.docs?.source}}},A=[`Field`,`FieldWidth`,`FieldCancel`,`FieldNavigation`,`FieldSkeleton`,`FieldSlots`]}));j();export{w as Field,E as FieldCancel,D as FieldNavigation,O as FieldSkeleton,k as FieldSlots,T as FieldWidth,A as __namedExportsOrder,C as default,x as i,j as n,b as r,S as t};