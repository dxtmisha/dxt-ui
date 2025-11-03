import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Input component
 *
 * Описания свойств компонента Input
 */
export const wikiDescriptionsInput: StorybookComponentsDescriptionItem = {
  name: 'Input',
  description: {
    en: 'Text input field component with validation, masking and formatting support',
    ru: 'Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования'
  },
  possibilities: {
    en: [
      'multiple input types: text, number, email, password, tel, url, date, time and more',
      'built-in validation with custom messages',
      'mask support for formatted input (phone, date, custom patterns)',
      'currency and number formatting',
      'password visibility toggle',
      'prefix and suffix support',
      'counter for character limits',
      'navigation arrows for numeric and selection inputs',
      'autocomplete, spellcheck and autocorrect support',
      'integrated with Field component for consistent styling'
    ],
    ru: [
      'множественные типы ввода: text, number, email, password, tel, url, date, time и другие',
      'встроенная валидация с пользовательскими сообщениями',
      'поддержка маскирования для форматированного ввода (телефон, дата, пользовательские паттерны)',
      'форматирование валюты и чисел',
      'переключатель видимости пароля',
      'поддержка префикса и суффикса',
      'счётчик для ограничения символов',
      'стрелки навигации для числовых и выборочных полей',
      'поддержка автозаполнения, проверки орфографии и автокоррекции',
      'интегрирован с компонентом Field для единообразной стилизации'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
      <DesignComponent v-bind="args" />
    `,
  stories: [
    {
      id: 'InputTypes',
      name: {
        en: 'Input types',
        ru: 'Типы ввода'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="text" label="Text" placeholder="Enter text" />
          <DesignComponent type="email" label="Email" placeholder="email@example.com" />
          <DesignComponent type="password" label="Password" placeholder="Enter password" />
          <DesignComponent type="number" label="Number" placeholder="0" />
          <DesignComponent type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <DesignComponent type="date" label="Date" />
          <DesignComponent type="search" label="Search" placeholder="Search..." />
        </div>
      `
    },
    {
      id: 'InputNumber',
      name: {
        en: 'Number formatting',
        ru: 'Форматирование чисел'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="number" value="1234567" label="Number" />
          <DesignComponent type="number-format" value="1234567" language="en-US" label="Formatted" />
          <DesignComponent type="number" value="50" :min="0" :max="100" label="From 0 to 100" />
          <DesignComponent type="number" value="10" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />
          <DesignComponent type="number-format" value="1234567.89" align="center" :fraction="2" label="Centered" />
        </div>
      `
    },
    {
      id: 'InputVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        inputValue: ref('Initial value'),
        emailValue: ref(''),
        numberValue: ref(42)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div>
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button" @click="inputValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />
          <div>Value: {{ inputValue }}</div>

          <DesignComponent
            v-model="emailValue"
            type="email"
            label="Email input"
            placeholder="email@example.com"
          />
          <div>Email: {{ emailValue }}</div>

          <div>
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <DesignComponent
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
          <div>Number: {{ numberValue }}</div>
        </div>
      `
    },
    {
      id: 'InputCurrency',
      name: {
        en: 'Currency & number formatting',
        ru: 'Валюта и форматирование чисел'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="currency"
            label="Price (USD)"
            currency="USD"
          />
          <DesignComponent
            type="currency"
            label="Price (USD)"
            currency="USD"
            value="1234.56"
          />
          <DesignComponent
            type="currency"
            label="Price (EUR)"
            currency="EUR"
            value="1234.56"
          />
        </div>
      `
    },
    {
      id: 'InputMask',
      name: {
        en: 'Masked input',
        ru: 'Маскированный ввод'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Phone" />
          <DesignComponent type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Card" />
          <DesignComponent type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="No placeholder" />
        </div>
      `
    },
    {
      id: 'InputSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              isSkeleton
              label="Loading field"
              helperMessage="This field is loading..."
            />
            <DesignComponent
              isSkeleton
              label="Another field"
              counterShow
            />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Input'} type={'input'}/>

<StorybookDescriptions componentName={'Input'} type={'type'}/>
<Canvas of={Component.InputTypes}/>

<StorybookDescriptions componentName={'Input'} type={'number'}/>
<Canvas of={Component.InputNumber}/>

<StorybookDescriptions componentName={'Input'} type={'currency'}/>
<Canvas of={Component.InputCurrency}/>

<StorybookDescriptions componentName={'Input'} type={'mask'}/>
<Canvas of={Component.InputMask}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
<StorybookDescriptions componentName={'Event'} type={'blur'}/>
<StorybookDescriptions componentName={'Event'} type={'focus'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Input'} type={'slots'} />
    `
  }
}
