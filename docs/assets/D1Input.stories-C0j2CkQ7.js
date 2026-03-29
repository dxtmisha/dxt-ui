import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,_t as r}from"./iframe-CqYdK-d6.js";import{a as i,d as a,g as o,l as s,n as c,t as l,u}from"./wiki-BtAa-rOh.js";import{n as d,t as f}from"./D1Skeleton-C-Z5T1LH.js";import{i as p,n as m,r as h,t as g}from"./D1Input-Ck0E44lr.js";var _,v,y,b,x=e((()=>{u(),l(),p(),_=[{name:`align`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrow`,type:`string`,option:[`auto`,`none`,`carousel`,`stepper`]},{name:`arrowAlign`,type:`string`,option:[`center`,`right`,`left`]},{name:`arrowStep`,type:`NumberOrString`},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`cancel`,type:`string`,option:[`auto`,`always`,`none`]},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`currency`,type:`string`},{name:`currencyHide`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldAttrs`,type:`ConstrBind<Field>`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounter>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabel>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessage>`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`fraction`,type:`MaskFractionItem`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<Icon>`},{name:`iconAttrs`,type:`ConstrBind<Icon>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<Icon>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`iconVisibility`,type:`string`},{name:`iconVisibilityOff`,type:`string`},{name:`id`,type:`string | number`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`list`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<Progress>`},{name:`mask`,type:`string | ConstrBind<Mask>`},{name:`maskAttrs`,type:`ConstrBind<Mask>`},{name:`maskNone`,type:`boolean`},{name:`maskVisible`,type:`boolean`},{name:`match`,type:`FieldMatch`},{name:`max`,type:`NumberOrString`},{name:`maxlength`,type:`NumberOrString`},{name:`min`,type:`NumberOrString`},{name:`minlength`,type:`NumberOrString`},{name:`modelValue`,type:`NumberOrString`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`(value: NumberOrString) => void`},{name:`onUpdate:value`,type:`(value: NumberOrString) => void`},{name:`pattern`,type:`string`},{name:`placeholder`,type:`string`},{name:`prefix`,type:`string | number`},{name:`prefixId`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`step`,type:`NumberOrString`},{name:`suffix`,type:`string | number`},{name:`suffixId`,type:`string`},{name:`tabindex`,type:`number`},{name:`textCancel`,type:`TextValue`},{name:`type`,type:`string`,option:[`number`,`text`,`search`,`number-format`,`currency`,`email`,`password`,`datetime`,`date`,`year-month`,`time`,`hour-minute`,`tel`,`url`,`checkbox`,`radio`]},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`NumberOrString`}],v=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`leading`,properties:[{name:`props`,type:`FieldControl`}]},{name:`prefix`,description:`Prefix slot/ Слот префикса`},{name:`suffix`,description:`Suffix slot/ Слот суффикса`},{name:`trailing`,properties:[{name:`props`,type:`FieldControl`}]}],y=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:` value`,type:`FieldValidationItem<any>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:` value`,type:`FieldValidationItem<any>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<any>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],b={component:`Input`,props:_,slots:v,events:y,defaults:h,wikiDesign:c}})),S,C=e((()=>{u(),i(),x(),S=new a(b.component,b.props,b.defaults,b.wikiDesign,s,o)})),w=t({Input:()=>E,InputCurrency:()=>k,InputDate:()=>A,InputMask:()=>j,InputNumber:()=>O,InputSkeleton:()=>N,InputTypes:()=>D,InputVModel:()=>M,__namedExportsOrder:()=>P,default:()=>T}),T,E,D,O,k,A,j,M,N,P,F=e((()=>{m(),C(),d(),r(),T={title:`Ui/Input`,component:g,parameters:{design:`d1`,docs:{description:{component:S.getDescription()}}},argTypes:S.getWiki(),args:S.getValues()},E={render:e=>({components:{D1Input:g},setup:()=>({args:e}),template:`
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
          <D1Input type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Phone" />
          <D1Input type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Card" />
          <D1Input type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="No placeholder" />
        </div>
    `})},M={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Input:g},setup(){return{inputValue:n(`Initial value`),maskValue:n(``),numberValue:n(42)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button" @click="inputValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />
          <div>Value: {{ inputValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="maskValue = '2022-05-13'">Set date</button>
            <button class="wiki-storybook-button" @click="maskValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="maskValue"
            type="date"
            label="Date input"
          />
          <div>Mask: {{ maskValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <D1Input
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
          <div>Number: {{ numberValue }}</div>
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
          <D1Input type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Phone" />
          <D1Input type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Card" />
          <D1Input type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="No placeholder" />
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
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button" @click="inputValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />
          <div>Value: {{ inputValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="maskValue = '2022-05-13'">Set date</button>
            <button class="wiki-storybook-button" @click="maskValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="maskValue"
            type="date"
            label="Date input"
          />
          <div>Mask: {{ maskValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <D1Input
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
          <div>Number: {{ numberValue }}</div>
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