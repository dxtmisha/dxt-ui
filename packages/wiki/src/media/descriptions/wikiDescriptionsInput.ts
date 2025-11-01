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
  import: [],
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
          <DesignComponent type="tel" label="Phone" placeholder="+1 (555) 000-0000" />
          <DesignComponent type="url" label="URL" placeholder="https://example.com" />
          <DesignComponent type="search" label="Search" placeholder="Search..." />
        </div>
      `
    },
    {
      id: 'InputStates',
      name: {
        en: 'States',
        ru: 'Состояния'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Default" placeholder="Enter text" />
          <DesignComponent label="With value" modelValue="Some text" />
          <DesignComponent label="Focus" focus placeholder="Focused" />
          <DesignComponent label="Disabled" disabled modelValue="Disabled input" />
          <DesignComponent label="Readonly" readonly modelValue="Readonly input" />
          <DesignComponent label="Loading" loading placeholder="Loading..." />
          <DesignComponent label="Required" required placeholder="Required field" />
        </div>
      `
    },
    {
      id: 'InputValidation',
      name: {
        en: 'Validation',
        ru: 'Валидация'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Valid input"
            modelValue="valid@email.com"
            type="email"
            helperMessage="Email format is correct"
          />
          <DesignComponent
            label="Invalid input"
            modelValue="invalid-email"
            type="email"
            validationMessage="Please enter a valid email address"
            forceShowMessage
          />
          <DesignComponent
            label="Required field"
            required
            validationMessage="This field is required"
            forceShowMessage
          />
          <DesignComponent
            label="Min/Max length"
            modelValue="Hi"
            minlength="5"
            maxlength="20"
            validationMessage="Minimum 5 characters required"
            forceShowMessage
          />
        </div>
      `
    },
    {
      id: 'InputPassword',
      name: {
        en: 'Password with visibility toggle',
        ru: 'Пароль с переключением видимости'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="password"
            label="Password"
            modelValue="MyPassword123"
            iconTrailing="visibility"
          />
          <DesignComponent
            type="password"
            label="Custom icons"
            modelValue="MyPassword123"
            iconVisibility="visibility"
            iconVisibilityOff="visibility_off"
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
          <DesignComponent
            type="tel"
            label="Phone number"
            mask="+1 (###) ###-####"
            placeholder="+1 (555) 000-0000"
          />
          <DesignComponent
            type="date"
            label="Date"
            mask="##/##/####"
            placeholder="MM/DD/YYYY"
          />
          <DesignComponent
            type="text"
            label="Credit card"
            mask="#### #### #### ####"
            placeholder="0000 0000 0000 0000"
          />
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
          <DesignComponent
            type="number-format"
            label="Formatted number"
            value="1234567.89"
          />
        </div>
      `
    },
    {
      id: 'InputPrefixSuffix',
      name: {
        en: 'Prefix & Suffix',
        ru: 'Префикс и суффикс'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Weight"
            modelValue="75"
            suffix="kg"
          />
          <DesignComponent
            label="Price"
            modelValue="99.99"
            prefix="$"
          />
          <DesignComponent
            label="URL"
            modelValue="example"
            prefix="https://"
            suffix=".com"
          />
        </div>
      `
    },
    {
      id: 'InputCounter',
      name: {
        en: 'Character counter',
        ru: 'Счётчик символов'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Tweet"
            modelValue="Hello world!"
            maxlength="280"
            counterShow
            helperMessage="Maximum 280 characters"
          />
          <DesignComponent
            label="Short description"
            modelValue="Brief text"
            maxlength="50"
            counterShow
          />
        </div>
      `
    },
    {
      id: 'InputArrows',
      name: {
        en: 'Navigation arrows',
        ru: 'Стрелки навигации'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="number"
            label="Quantity"
            modelValue="5"
            arrowStep="1"
          />
          <DesignComponent
            type="number"
            label="Price step (0.01)"
            modelValue="19.99"
            arrowStep="0.01"
            step="0.01"
          />
          <DesignComponent
            type="number"
            label="Large step (10)"
            modelValue="100"
            arrowStep="10"
          />
        </div>
      `
    },
    {
      id: 'InputIcons',
      name: {
        en: 'With icons',
        ru: 'С иконками'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Search"
            icon="search"
            placeholder="Search..."
          />
          <DesignComponent
            label="Email"
            icon="email"
            iconTrailing="info"
            placeholder="email@example.com"
          />
          <DesignComponent
            label="Location"
            icon="location_on"
            modelValue="New York"
          />
        </div>
      `
    },
    {
      id: 'InputCancel',
      name: {
        en: 'Clear button',
        ru: 'Кнопка очистки'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Auto clear (empty)"
            cancel="auto"
            placeholder="Type something..."
          />
          <DesignComponent
            label="Auto clear (with value)"
            cancel="auto"
            modelValue="Clear me"
          />
          <DesignComponent
            label="Always show clear"
            cancel="always"
            modelValue="Text with clear button"
          />
        </div>
      `
    },
    {
      id: 'InputAutocomplete',
      name: {
        en: 'Autocomplete & hints',
        ru: 'Автозаполнение и подсказки'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Username"
            autocomplete="username"
            placeholder="Enter username"
          />
          <DesignComponent
            label="Email"
            type="email"
            autocomplete="email"
            placeholder="Enter email"
          />
          <DesignComponent
            label="Phone"
            type="tel"
            autocomplete="tel"
            placeholder="Enter phone"
          />
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

<StorybookDescriptions componentName={'Input'} type={'types'}/>
<Canvas of={Component.InputTypes}/>

<StorybookDescriptions componentName={'Input'} type={'currency'}/>
<Canvas of={Component.InputCurrency}/>

<StorybookDescriptions componentName={'Input'} type={'states'}/>
<Canvas of={Component.InputStates}/>

<StorybookDescriptions componentName={'Input'} type={'validation'}/>
<Canvas of={Component.InputValidation}/>

<StorybookDescriptions componentName={'Input'} type={'password'}/>
<Canvas of={Component.InputPassword}/>

<StorybookDescriptions componentName={'Input'} type={'mask'}/>
<Canvas of={Component.InputMask}/>

<StorybookDescriptions componentName={'Input'} type={'prefix-suffix'}/>
<Canvas of={Component.InputPrefixSuffix}/>

<StorybookDescriptions componentName={'Input'} type={'counter'}/>
<Canvas of={Component.InputCounter}/>

<StorybookDescriptions componentName={'Input'} type={'arrows'}/>
<Canvas of={Component.InputArrows}/>

<StorybookDescriptions componentName={'Input'} type={'icons'}/>
<Canvas of={Component.InputIcons}/>

<StorybookDescriptions componentName={'Input'} type={'cancel'}/>
<Canvas of={Component.InputCancel}/>

<StorybookDescriptions componentName={'Input'} type={'autocomplete'}/>
<Canvas of={Component.InputAutocomplete}/>

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
