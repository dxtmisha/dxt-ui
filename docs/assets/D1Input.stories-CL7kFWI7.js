import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ht as n,xt as r}from"./iframe-yo6yIkeP.js";import{a as i,d as a,m as o,n as s,o as c,t as l,u}from"./wiki-Ck-JDNL8.js";import{n as d,t as f}from"./D1Skeleton-YL0_DuxC.js";import{i as p,n as m,r as h,t as g}from"./D1Input-BcLd52ok.js";var _,v,y,b,x=e((()=>{l(),p(),_=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrow`,type:`string`,option:[`auto`,`none`,`carousel`,`stepper`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowStep`,type:`NumberOrString | undefined`},{name:`autocapitalize`,type:`string | undefined`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string | undefined`},{name:`autocorrect`,type:`string | undefined`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean | undefined`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`caption`,type:`string | number | undefined`},{name:`captionDecorative`,type:`boolean | undefined`},{name:`counterId`,type:`string | undefined`},{name:`counterShow`,type:`boolean | undefined`},{name:`currency`,type:`string | undefined`},{name:`currencyHide`,type:`boolean | undefined`},{name:`detail`,type:`Record<string, any> | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`enterKeyHint`,type:`string | undefined`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<FieldProps> | undefined`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps> | undefined`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps> | undefined`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps> | undefined`},{name:`focus`,type:`boolean | undefined`},{name:`forceShowMessage`,type:`boolean | undefined`},{name:`form`,type:`string | undefined`},{name:`fraction`,type:`MaskFractionItem | undefined`},{name:`helperId`,type:`string | undefined`},{name:`helperMessage`,type:`string | undefined`},{name:`href`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconTrailing`,type:`IconValue<IconProps> | undefined`},{name:`iconTrailingDirOnly`,type:`boolean | undefined`},{name:`iconTrailingPalette`,type:`boolean | undefined`},{name:`iconTrailingTurnOnly`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`iconVisibility`,type:`string | undefined`},{name:`iconVisibilityOff`,type:`string | undefined`},{name:`id`,type:`string | number | undefined`},{name:`inputAttrs`,type:`Record<string, any> | undefined`},{name:`inputMode`,type:`string | undefined`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`list`,type:`string | undefined`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps> | undefined`},{name:`mask`,type:`string | ConstrBind<MaskProps> | undefined`},{name:`maskAttrs`,type:`ConstrBind<MaskProps> | undefined`},{name:`maskNone`,type:`boolean | undefined`},{name:`maskVisible`,type:`boolean | undefined`},{name:`match`,type:`FieldMatch | undefined`},{name:`max`,type:`NumberOrString | undefined`},{name:`maxlength`,type:`NumberOrString | undefined`},{name:`min`,type:`NumberOrString | undefined`},{name:`minlength`,type:`NumberOrString | undefined`},{name:`modelValue`,type:`NumberOrString | undefined`},{name:`name`,type:`string | undefined`},{name:`onUpdate:modelValue`,type:`((value: NumberOrString) => void) | undefined`},{name:`onUpdate:value`,type:`((value: NumberOrString) => void) | undefined`},{name:`pattern`,type:`string | undefined`},{name:`placeholder`,type:`string | undefined`},{name:`prefix`,type:`string | number | undefined`},{name:`prefixId`,type:`string | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`required`,type:`boolean | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`step`,type:`NumberOrString | undefined`},{name:`suffix`,type:`string | number | undefined`},{name:`suffixId`,type:`string | undefined`},{name:`tabindex`,type:`number | undefined`},{name:`textCancel`,type:`TextValue`},{name:`type`,type:`string`,option:[`number`,`text`,`search`,`number-format`,`currency`,`email`,`password`,`datetime`,`date`,`year-month`,`time`,`hour-minute`,`tel`,`url`,`checkbox`,`radio`]},{name:`validationCode`,type:`FieldValidityCode | undefined`},{name:`validationId`,type:`string | undefined`},{name:`validationMessage`,type:`string | undefined`},{name:`value`,type:`NumberOrString | undefined`}],v=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`leading`,description:`Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`suffix`,description:`Suffix slot/ Слот суффикса`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for displaying content after the input area/ Слот для отображения контента после области ввода`,properties:[{name:`props`,type:`(FieldControl) | undefined`}]}],y=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],b={component:`Input`,props:_,slots:v,events:y,defaults:h,wikiDesign:s}})),S,C=e((()=>{a(),c(),x(),S=new u(b.component,b.props,b.defaults,b.wikiDesign,i,o)})),w=t({Input:()=>E,InputCurrency:()=>k,InputDate:()=>A,InputMask:()=>j,InputNumber:()=>O,InputSkeleton:()=>N,InputTypes:()=>D,InputVModel:()=>M,__namedExportsOrder:()=>P,default:()=>T}),T,E,D,O,k,A,j,M,N,P,F=e((()=>{m(),C(),d(),r(),T={title:`Ui/Input`,component:g,parameters:{design:`d1`,docs:{description:{component:S.getDescription()}}},argTypes:S.getWiki(),args:S.getValues()},E={render:e=>({components:{D1Input:g},setup:()=>({args:e}),template:`
      <D1Input v-bind="args" />
    `})},D={name:`Типы ввода`,render:()=>({components:{D1Input:g},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input type="text" label="Text" placeholder="Enter text" />
          <D1Input type="email" label="Email" placeholder="email@example.com" />
          <D1Input type="password" label="Password" placeholder="Enter password" />
          <D1Input type="number" label="Number" placeholder="0" />
          <D1Input type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <D1Input type="date" label="Date" />
          <D1Input type="search" label="Search" placeholder="Search..." />
        </div>
    `})},O={name:`Форматирование чисел`,render:()=>({components:{D1Input:g},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input type="number" value="1234567" label="Number" />
          <D1Input type="number-format" value="1234567" language="en-US" label="Formatted" />
          <D1Input type="number" value="50" :min="0" :max="100" label="From 0 to 100" />
          <D1Input type="number" value="10" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />
          <D1Input type="number-format" value="1234567.89" align="center" :fraction="2" label="Centered" />
        </div>
    `})},k={name:`Валюта и форматирование чисел`,render:()=>({components:{D1Input:g},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
          />
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
            value="1234.56"
          />
          <D1Input
            type="currency"
            label="Price (currency-hide)"
            currency="EUR"
            currency-hide
            value="1234.56"
          />
        </div>
    `})},A={name:`Дата и время`,render:()=>({components:{D1Input:g},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input type="date" label="Date" language="ru-RU" />
          <D1Input type="datetime" label="Date and Time" language="en-US" />
          <D1Input type="year-month" label="Period" language="ru-RU" />
          <D1Input type="time" label="Time" />
          <D1Input type="hour-minute" label="Hours:Minutes" />
          <D1Input type="date" label="Limited Date" language="ru-RU" min="2024-01-01" max="2024-12-31" />
        </div>
    `})},j={name:`Маскированный ввод`,render:()=>({components:{D1Input:g},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input type="tel" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" label="Phone" />
          <D1Input type="text" mask="**** **** **** ****" placeholder="0000 0000 0000 0000" label="Card" />
          <D1Input type="tel" mask="+1 (***) ***-****" :mask-visible="false" label="No placeholder" />
        </div>
    `})},M={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Input:g},setup(){return{inputValue:n(`Initial value`),maskValue:n(``),numberValue:n(42)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ inputValue }}</span>
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="inputValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />

          <div class="wiki-storybook-flex">
            <span>Current value: {{ maskValue }}</span>
            <button class="wiki-storybook-button" @click="maskValue = '2022-05-13'">Set date</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="maskValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="maskValue"
            type="date"
            label="Date input"
          />

          <div class="wiki-storybook-flex">
            <span>Current value: {{ numberValue }}</span>
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <D1Input
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
        </div>
    `})},N={name:`Скелетон`,render:()=>({components:{D1Input:g,D1Skeleton:f},template:`
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1Input
              isSkeleton
              label="Loading field"
              helperMessage="This field is loading..."
            />
            <D1Input
              isSkeleton
              label="Another field"
              counterShow
            />
          </div>
        </D1Skeleton>
    `})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Input
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Input v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Типы ввода',
  render: () => ({
    components: {
      D1Input
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Input type="text" label="Text" placeholder="Enter text" />
          <D1Input type="email" label="Email" placeholder="email@example.com" />
          <D1Input type="password" label="Password" placeholder="Enter password" />
          <D1Input type="number" label="Number" placeholder="0" />
          <D1Input type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <D1Input type="date" label="Date" />
          <D1Input type="search" label="Search" placeholder="Search..." />
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Форматирование чисел',
  render: () => ({
    components: {
      D1Input
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Input type="number" value="1234567" label="Number" />
          <D1Input type="number-format" value="1234567" language="en-US" label="Formatted" />
          <D1Input type="number" value="50" :min="0" :max="100" label="From 0 to 100" />
          <D1Input type="number" value="10" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />
          <D1Input type="number-format" value="1234567.89" align="center" :fraction="2" label="Centered" />
        </div>
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Валюта и форматирование чисел',
  render: () => ({
    components: {
      D1Input
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
          />
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
            value="1234.56"
          />
          <D1Input
            type="currency"
            label="Price (currency-hide)"
            currency="EUR"
            currency-hide
            value="1234.56"
          />
        </div>
    \`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Дата и время',
  render: () => ({
    components: {
      D1Input
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Input type="date" label="Date" language="ru-RU" />
          <D1Input type="datetime" label="Date and Time" language="en-US" />
          <D1Input type="year-month" label="Period" language="ru-RU" />
          <D1Input type="time" label="Time" />
          <D1Input type="hour-minute" label="Hours:Minutes" />
          <D1Input type="date" label="Limited Date" language="ru-RU" min="2024-01-01" max="2024-12-31" />
        </div>
    \`
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Маскированный ввод',
  render: () => ({
    components: {
      D1Input
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Input type="tel" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" label="Phone" />
          <D1Input type="text" mask="**** **** **** ****" placeholder="0000 0000 0000 0000" label="Card" />
          <D1Input type="tel" mask="+1 (***) ***-****" :mask-visible="false" label="No placeholder" />
        </div>
    \`
  })
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Input
    },
    setup() {
      return {
        inputValue: ref('Initial value'),
        maskValue: ref(''),
        numberValue: ref(42)
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ inputValue }}</span>
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="inputValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />

          <div class="wiki-storybook-flex">
            <span>Current value: {{ maskValue }}</span>
            <button class="wiki-storybook-button" @click="maskValue = '2022-05-13'">Set date</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="maskValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="maskValue"
            type="date"
            label="Date input"
          />

          <div class="wiki-storybook-flex">
            <span>Current value: {{ numberValue }}</span>
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <D1Input
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
        </div>
    \`
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Input,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1Input
              isSkeleton
              label="Loading field"
              helperMessage="This field is loading..."
            />
            <D1Input
              isSkeleton
              label="Another field"
              counterShow
            />
          </div>
        </D1Skeleton>
    \`
  })
}`,...N.parameters?.docs?.source}}},P=[`Input`,`InputTypes`,`InputNumber`,`InputCurrency`,`InputDate`,`InputMask`,`InputVModel`,`InputSkeleton`]}));F();export{E as Input,k as InputCurrency,A as InputDate,j as InputMask,O as InputNumber,N as InputSkeleton,D as InputTypes,M as InputVModel,P as __namedExportsOrder,T as default,C as i,F as n,S as r,w as t};