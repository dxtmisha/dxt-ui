import{d,_ as e}from"./D1Input-Bqf5hLUA.js";import{w as b,W as y,a as k,b as g}from"./wiki-BeTUR4cU.js";import{r as u}from"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";import{_ as I}from"./D1Skeleton-DmRdoI9z.js";const D=[{name:"align",type:"string",option:["center","right","left"]},{name:"arrow",type:"string",option:["auto","none","carousel","stepper"]},{name:"arrowAlign",type:"string",option:["center","right","left"]},{name:"arrowStep",type:"NumberOrString"},{name:"autocapitalize",type:"string",option:["off","none","sentences","words","characters"]},{name:"autocomplete",type:"string"},{name:"autocorrect",type:"string",option:["on","off"]},{name:"autofocus",type:"boolean"},{name:"cancel",type:"string",option:["auto","always","none"]},{name:"caption",type:"string | number"},{name:"captionDecorative",type:"boolean"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"currency",type:"string"},{name:"currencyHide",type:"boolean"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"enterKeyHint",type:"string",option:["enter","done","go","next","previous","search","send"]},{name:"fieldAttrs",type:"ConstrBind<Field>"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounter>"},{name:"fieldLabelAttrs",type:"ConstrBind<FieldLabel>"},{name:"fieldMessageAttrs",type:"ConstrBind<FieldMessage>"},{name:"focus",type:"boolean"},{name:"forceShowMessage",type:"boolean"},{name:"form",type:"string"},{name:"fraction",type:"MaskFractionItem"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"href",type:"string"},{name:"icon",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTrailing",type:"IconValue<Icon>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"iconVisibility",type:"string"},{name:"iconVisibilityOff",type:"string"},{name:"id",type:"string | number"},{name:"inputAttrs",type:"Record<string, any>"},{name:"inputMode",type:"string",option:["none","text","decimal","numeric","tel","search","email","url"]},{name:"isSkeleton",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"list",type:"string"},{name:"loading",type:"boolean | ConstrBind<Progress>"},{name:"mask",type:"string | ConstrBind<Mask>"},{name:"maskAttrs",type:"ConstrBind<Mask>"},{name:"maskNone",type:"boolean"},{name:"maskVisible",type:"boolean"},{name:"match",type:"FieldMatch"},{name:"max",type:"NumberOrString"},{name:"maxlength",type:"NumberOrString"},{name:"min",type:"NumberOrString"},{name:"minlength",type:"NumberOrString"},{name:"modelValue",type:"NumberOrString"},{name:"name",type:"string"},{name:"onUpdate:modelValue",type:"(value: NumberOrString) => void"},{name:"onUpdate:value",type:"(value: NumberOrString) => void"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"prefix",type:"string | number"},{name:"prefixId",type:"string"},{name:"readonly",type:"boolean"},{name:"required",type:"boolean"},{name:"selected",type:"boolean"},{name:"spellcheck",type:"string",option:["true","false"]},{name:"step",type:"NumberOrString"},{name:"suffix",type:"string | number"},{name:"suffixId",type:"string"},{name:"tabindex",type:"number"},{name:"textCancel",type:"TextValue"},{name:"type",type:"string",option:["number","text","search","number-format","currency","email","password","datetime","date","year-month","time","hour-minute","tel","url","checkbox","radio"]},{name:"validationCode",type:"FieldValidityCode"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"},{name:"value",type:"NumberOrString"}],p={component:"Input",props:D,defaults:d,wikiDesign:b},m=new y(p.component,p.props,p.defaults,p.wikiDesign,k,g),v={title:"Ui/Input",component:e,parameters:{design:"d1",docs:{description:{component:m.getDescription()}}},argTypes:m.getWiki(),args:m.getValues()},n={render:c=>({components:{D1Input:e},setup:()=>({args:c}),template:`
      <D1Input v-bind="args" />
    `})},t={name:"Типы ввода",render:()=>({components:{D1Input:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input type="text" label="Text" placeholder="Enter text" />
          <D1Input type="email" label="Email" placeholder="email@example.com" />
          <D1Input type="password" label="Password" placeholder="Enter password" />
          <D1Input type="number" label="Number" placeholder="0" />
          <D1Input type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <D1Input type="date" label="Date" />
          <D1Input type="search" label="Search" placeholder="Search..." />
        </div>
    `})},a={name:"Форматирование чисел",render:()=>({components:{D1Input:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input type="number" value="1234567" label="Number" />
          <D1Input type="number-format" value="1234567" language="en-US" label="Formatted" />
          <D1Input type="number" value="50" :min="0" :max="100" label="From 0 to 100" />
          <D1Input type="number" value="10" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />
          <D1Input type="number-format" value="1234567.89" align="center" :fraction="2" label="Centered" />
        </div>
    `})},r={name:"Валюта и форматирование чисел",render:()=>({components:{D1Input:e},template:`
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
    `})},o={name:"Дата и время",render:()=>({components:{D1Input:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input type="date" label="Date" language="ru-RU" />
          <D1Input type="datetime" label="Date and Time" language="en-US" />
          <D1Input type="year-month" label="Period" language="ru-RU" />
          <D1Input type="time" label="Time" />
          <D1Input type="hour-minute" label="Hours:Minutes" />
          <D1Input type="date" label="Limited Date" language="ru-RU" min="2024-01-01" max="2024-12-31" />
        </div>
    `})},l={name:"Маскированный ввод",render:()=>({components:{D1Input:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Input type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Phone" />
          <D1Input type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Card" />
          <D1Input type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="No placeholder" />
        </div>
    `})},i={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Input:e},setup(){return{inputValue:u("Initial value"),maskValue:u(""),numberValue:u(42)}},template:`
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
    `})},s={name:"Скелетон",render:()=>({components:{D1Input:e,D1Skeleton:I},template:`
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
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const f=["Input","InputTypes","InputNumber","InputCurrency","InputDate","InputMask","InputVModel","InputSkeleton"],C=Object.freeze(Object.defineProperty({__proto__:null,Input:n,InputCurrency:r,InputDate:o,InputMask:l,InputNumber:a,InputSkeleton:s,InputTypes:t,InputVModel:i,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{C as I,n as a,m as b,t as c,a as d,r as e,o as f,l as g,i as h,s as i};
