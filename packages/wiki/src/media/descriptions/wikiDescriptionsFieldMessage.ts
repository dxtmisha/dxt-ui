import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FieldMessage component properties
 *
 * Описания свойств компонента FieldMessage
 */
export const wikiDescriptionsFieldMessage: StorybookComponentsDescriptionItem = {
  name: 'FieldMessage',
  description: {
    en: 'Component for displaying helper, warning, and validation messages, character counters, and skeleton states beneath form fields.',
    ru: 'Компонент для отображения вспомогательных сообщений, предупреждений, ошибок валидации, счётчика символов и состояния скелетона под полями форм.'
  },
  possibilities: {
    en: [
      'displaying helper text (`helperMessage`), non-blocking warnings (`warningMessage`), and validation errors (`validationMessage`) with CSS priority `--validation` > `--warning` > helper',
      'adding `role="alert"` on error nodes and custom `helperId`, `warningId`, `validationId`, and `counterId` identifiers',
      'hiding output when `disabled` unless `forceShow` is active, and unmounting when inactive',
      'supporting safe text escaping by default, opt-in `hasHtmlCode`, and `#helper` / `#warning` / `#validation` slots',
      'integrating character counters (`counterShow`, `counter`, `maxlength`, `maxlengthOnce`, `counterTemplate`, `fieldCounterAttrs`) and `isSkeleton`'
    ],
    ru: [
      'отображение вспомогательного текста (`helperMessage`), неблокирующих предупреждений (`warningMessage`) и ошибок валидации (`validationMessage`) с CSS-приоритетом `--validation` > `--warning` > подсказка',
      'добавление `role="alert"` для ошибок и настраиваемых идентификаторов `helperId`, `warningId`, `validationId` и `counterId`',
      'скрытие вывода при `disabled` без `forceShow` и полное размонтирование при отсутствии активного содержимого',
      'экранирование текста по умолчанию, явный `hasHtmlCode` и поддержка слотов `#helper` / `#warning` / `#validation`',
      'интеграция счётчика символов (`counterShow`, `counter`, `maxlength`, `maxlengthOnce`, `counterTemplate`, `fieldCounterAttrs`) и `isSkeleton`'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
if (component) {
  expect(component.tagName).toBe('DIV')
}
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/slots)
    // =========================================================================
    {
      id: 'FieldMessageBasic',
      name: {
        en: 'Helper, Validation & ARIA IDs',
        ru: 'Подсказка, валидация и ARIA-идентификаторы'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Helper Message</div>
            <DesignComponent helper-message="Enter your email address" helper-id="wiki-field-message-helper"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Warning Message</div>
            <DesignComponent warning-message="Phone from legacy profile needs confirmation" warning-id="wiki-field-message-warning"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Validation Message</div>
            <DesignComponent validation-message="Invalid email format" validation-id="wiki-field-message-validation"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Validation Overrides Helper & Warning</div>
            <DesignComponent
              helper-message="Helper text hidden by CSS when invalid"
              warning-message="Warning text hidden when invalid"
              validation-message="Validation takes visual priority"
            />
          </div>
        </div>
      `,
      play: `
const messages = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(messages.length).toBe(4)

expect(messages[0].classList.contains('design-component--validation')).toBe(false)
expect(messages[0].querySelector('#wiki-field-message-helper')?.textContent?.trim()).toBe('Enter your email address')

expect(messages[1].classList.contains('design-component--warning')).toBe(true)
expect(messages[1].classList.contains('design-component--validation')).toBe(false)
expect(messages[1].querySelector('#wiki-field-message-warning')?.textContent?.trim()).toBe('Phone from legacy profile needs confirmation')

expect(messages[2].classList.contains('design-component--validation')).toBe(true)
const errorElement = messages[2].querySelector<HTMLElement>('#wiki-field-message-validation')
await expect(errorElement).toBeInTheDocument()
await expect(errorElement).toHaveAttribute('role', 'alert')

expect(messages[3].classList.contains('design-component--validation')).toBe(true)
expect(messages[3].classList.contains('design-component--warning')).toBe(true)
const fourthInfo = messages[3].querySelector<HTMLElement>('.design-component__info')
const fourthWarning = messages[3].querySelector<HTMLElement>('.design-component__warning')
const fourthError = messages[3].querySelector<HTMLElement>('.design-component__error')
await expect(fourthInfo).toBeInTheDocument()
await expect(fourthWarning).toBeInTheDocument()
await expect(fourthError).toBeInTheDocument()
await expect(fourthError).toHaveAttribute('role', 'alert')
      `
    },
    {
      id: 'FieldMessageStates',
      name: {
        en: 'Disabled, Force Show, HTML & Skeleton',
        ru: 'Состояния disabled, forceShow, HTML и скелетон'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding disabled-host">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Disabled (hidden)</div>
            <DesignComponent helper-message="Hidden while disabled" disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Disabled + forceShow</div>
            <DesignComponent helper-message="Forced visible message" disabled force-show/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">hasHtmlCode</div>
            <DesignComponent helper-message="Formatted <strong>HTML</strong> helper" has-html-code/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">isSkeleton</div>
            <DesignComponent helper-message="Skeleton message" is-skeleton/>
          </div>
        </div>
      `,
      play: `
const disabledHost = canvasElement.querySelector<HTMLElement>('.disabled-host')
expect(disabledHost?.querySelector('.design-component')).toBeNull()

const messages = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(messages.length).toBe(3)
expect(messages[0].textContent?.trim()).toBe('Forced visible message')
await expect(messages[1].querySelector('strong')).toBeInTheDocument()
expect(messages[2].querySelector('.design-component__info')?.className).toContain('skeleton')
      `
    },
    {
      id: 'FieldMessageCounter',
      name: {
        en: 'Character Counter Integration',
        ru: 'Интеграция счётчика символов'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Helper + Counter</div>
            <DesignComponent helper-message="Short note" counter-show :counter="14" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Zero Counter</div>
            <DesignComponent helper-message="Zero value" counter-show :counter="0" :maxlength="50"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Template, ID & Attrs</div>
            <DesignComponent
              validation-message="Too long"
              counter-show
              :counter="95"
              :maxlength="100"
              :maxlength-once="10"
              counter-template="[c] of [m]"
              counter-id="wiki-field-message-counter"
              :field-counter-attrs="{ class: 'wiki-custom-message-counter' }"
            />
          </div>
        </div>
      `,
      play: `
const messages = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(messages.length).toBe(3)

expect(messages[0].textContent).toContain('14 / 100')
expect(messages[1].textContent).toContain('0 / 50')

const customCounter = messages[2].querySelector<HTMLElement>('#wiki-field-message-counter')
await expect(customCounter).toBeInTheDocument()
expect(customCounter?.classList.contains('wiki-custom-message-counter')).toBe(true)
expect(customCounter?.textContent?.trim()).toBe('95 of 100')
      `
    },
    {
      id: 'FieldMessageSlots',
      name: {
        en: 'Slots (#helper, #warning & #validation)',
        ru: 'Слоты (#helper, #warning и #validation)'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <template #helper>
              <span><b>Helper:</b> You can use Latin letters</span>
            </template>
          </DesignComponent>
          <DesignComponent>
            <template #warning>
              <span><b>Warning:</b> Value needs confirmation</span>
            </template>
          </DesignComponent>
          <DesignComponent>
            <template #validation>
              <span><b>Validation:</b> Please fill out this field</span>
            </template>
          </DesignComponent>
          <DesignComponent helper-message="Details" warning-message="Check" validation-message="Required">
            <template #helper="{ helperMessage }">
              <span>Scoped ({{ helperMessage }}): </span>
            </template>
            <template #warning="{ warningMessage }">
              <span>Warn ({{ warningMessage }}): </span>
            </template>
            <template #validation="{ validationMessage }">
              <span>Error ({{ validationMessage }}): </span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const messages = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(messages.length).toBe(4)
expect(messages[0].textContent?.trim()).toBe('Helper: You can use Latin letters')
expect(messages[1].classList.contains('design-component--warning')).toBe(true)
expect(messages[1].textContent?.trim()).toBe('Warning: Value needs confirmation')
expect(messages[2].classList.contains('design-component--validation')).toBe(true)
expect(messages[2].textContent?.trim()).toBe('Validation: Please fill out this field')
expect(messages[3].querySelector('.design-component__info')?.textContent?.trim()).toBe('Scoped (Details): Details')
expect(messages[3].querySelector('.design-component__warning')?.textContent?.trim()).toBe('Warn (Check): Check')
expect(messages[3].querySelector('.design-component__error')?.textContent?.trim()).toBe('Error (Required): Required')
      `
    },

    // =========================================================================
    // TIER 2: COMPREHENSIVE FEATURE & TEST STORIES
    // =========================================================================
    {
      id: 'FieldMessageTestReactivity',
      name: {
        en: 'Test: Reactive Toggling & Conditional Unmounting',
        ru: 'Тест: Реактивность и условное размонтирование'
      },
      setup: `
const helperMessage = ref('Initial helper')
const warningMessage = ref('')
const validationMessage = ref('')
const disabled = ref(false)
const forceShow = ref(false)
const hasHtmlCode = ref(false)
const isSkeleton = ref(false)
const counterShow = ref(true)
const counter = ref(5)

return {
  helperMessage,
  warningMessage,
  validationMessage,
  disabled,
  forceShow,
  hasHtmlCode,
  isSkeleton,
  counterShow,
  counter
}
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="helperMessage = helperMessage ? '' : 'Initial helper'">Toggle Helper</button>
            <button type="button" class="wiki-storybook-button" @click="warningMessage = warningMessage ? '' : 'Warning text'">Toggle Warning</button>
            <button type="button" class="wiki-storybook-button" @click="validationMessage = validationMessage ? '' : 'Error text'">Toggle Validation</button>
            <button type="button" class="wiki-storybook-button" @click="disabled = !disabled">Toggle Disabled</button>
            <button type="button" class="wiki-storybook-button" @click="forceShow = !forceShow">Toggle Force Show</button>
            <button type="button" class="wiki-storybook-button" @click="hasHtmlCode = !hasHtmlCode">Toggle HTML</button>
            <button type="button" class="wiki-storybook-button" @click="isSkeleton = !isSkeleton">Toggle Skeleton</button>
            <button type="button" class="wiki-storybook-button" @click="counterShow = !counterShow">Toggle Counter</button>
            <button type="button" class="wiki-storybook-button" @click="counter = counter + 5">Increment Counter</button>
          </div>
          <div class="reactive-host">
            <DesignComponent
              :helper-message="helperMessage"
              :warning-message="warningMessage"
              :validation-message="validationMessage"
              :disabled="disabled"
              :force-show="forceShow"
              :has-html-code="hasHtmlCode"
              :is-skeleton="isSkeleton"
              :counter-show="counterShow"
              :counter="counter"
              :maxlength="40"
            />
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const host = canvasElement.querySelector<HTMLElement>('.reactive-host')!

await step('Initial state renders helper message and counter', async () => {
  const root = host.querySelector<HTMLElement>('.design-component')
  await expect(root).toBeInTheDocument()
  expect(root?.querySelector('.design-component__info')?.textContent?.trim()).toBe('Initial helper')
  expect(root?.textContent).toContain('5 / 40')
})

await step('Toggling warning and validation switches modifiers and alert element', async () => {
  const toggleWarningButton = canvas.getByRole('button', { name: 'Toggle Warning' })
  const toggleValidationButton = canvas.getByRole('button', { name: 'Toggle Validation' })
  await userEvent.click(toggleWarningButton)
  expect(host.querySelector('.design-component')?.classList.contains('design-component--warning')).toBe(true)
  expect(host.querySelector('.design-component__warning')?.textContent?.trim()).toBe('Warning text')
  await userEvent.click(toggleValidationButton)
  expect(host.querySelector('.design-component')?.classList.contains('design-component--validation')).toBe(true)
  expect(host.querySelector('.design-component')?.classList.contains('design-component--warning')).toBe(true)
  await expect(host.querySelector('.design-component__error')).toHaveAttribute('role', 'alert')
  await userEvent.click(toggleValidationButton)
  expect(host.querySelector('.design-component')?.classList.contains('design-component--validation')).toBe(false)
  await userEvent.click(toggleWarningButton)
  expect(host.querySelector('.design-component')?.classList.contains('design-component--warning')).toBe(false)
})

await step('Toggling disabled hides root until forceShow is enabled', async () => {
  const toggleDisabledButton = canvas.getByRole('button', { name: 'Toggle Disabled' })
  const toggleForceShowButton = canvas.getByRole('button', { name: 'Toggle Force Show' })
  await userEvent.click(toggleDisabledButton)
  expect(host.querySelector('.design-component')).toBeNull()
  await userEvent.click(toggleForceShowButton)
  await expect(host.querySelector('.design-component')).toBeInTheDocument()
  await userEvent.click(toggleForceShowButton)
  await userEvent.click(toggleDisabledButton)
})

await step('Incrementing counter, toggling skeleton, and clearing all content updates DOM', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Increment Counter' }))
  expect(host.textContent).toContain('10 / 40')

  const toggleSkeletonButton = canvas.getByRole('button', { name: 'Toggle Skeleton' })
  await userEvent.click(toggleSkeletonButton)
  expect(host.querySelector('.design-component__info')?.className).toContain('skeleton')
  await userEvent.click(toggleSkeletonButton)

  await userEvent.click(canvas.getByRole('button', { name: 'Toggle Helper' }))
  await userEvent.click(canvas.getByRole('button', { name: 'Toggle Counter' }))
  expect(host.querySelector('.design-component')).toBeNull()
})
      `
    },
    {
      id: 'FieldMessageTestBoundaries',
      name: {
        en: 'Test: Boundaries, Multilingual, RTL & XSS Safety',
        ru: 'Тест: Граничные значения, RTL и безопасность XSS'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="empty-host">
            <DesignComponent helper-message="" warning-message="   " validation-message="   "/>
          </div>
          <div class="multilingual-host">
            <DesignComponent
              helper-message="Học tiếng Việt — Подсказка поля 🚀"
              validation-message="Lỗi xác thực — Ошибка ввода 🔒"
              counter-show
              :counter="24"
              :maxlength="100"
            />
          </div>
          <div class="rtl-host" dir="rtl">
            <DesignComponent
              helper-message="أدخل رقم الهاتف مع رمز الدولة"
              counter-show
              :counter="12"
              :maxlength="40"
            />
          </div>
          <div class="xss-host">
            <DesignComponent helper-message="<img src=x onerror=alert(1)>"/>
          </div>
        </div>
      `,
      play: `
await step('Empty and whitespace-only messages render nothing in DOM', async () => {
  expect(canvasElement.querySelector('.empty-host .design-component')).toBeNull()
})

await step('Multilingual diacritics, Cyrillic, Emoji, and RTL render cleanly', async () => {
  const multi = canvasElement.querySelector<HTMLElement>('.multilingual-host .design-component')
  await expect(multi).toBeInTheDocument()
  expect(multi?.querySelector('.design-component__info')?.textContent?.trim()).toBe('Học tiếng Việt — Подсказка поля 🚀')
  expect(multi?.querySelector('.design-component__error')?.textContent?.trim()).toBe('Lỗi xác thực — Ошибка ввода 🔒')

  const rtl = canvasElement.querySelector<HTMLElement>('.rtl-host .design-component')
  await expect(rtl).toBeInTheDocument()
  expect(window.getComputedStyle(rtl!).direction).toBe('rtl')
})

await step('HTML/XSS string renders strictly as escaped text when hasHtmlCode is false', async () => {
  const xss = canvasElement.querySelector<HTMLElement>('.xss-host .design-component')
  await expect(xss).toBeInTheDocument()
  expect(xss?.textContent?.trim()).toBe('<img src=x onerror=alert(1)>')
  expect(xss?.querySelector('img')).toBeNull()
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldMessage'} type={'fieldMessage'}/>
<Canvas of={Component.FieldMessageBasic}/>

<Canvas of={Component.FieldMessageStates}/>

<Canvas of={Component.FieldMessageCounter}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
    `,
    slots: `
<Canvas of={Component.FieldMessageSlots}/>
<StorybookDescriptions componentName={'FieldMessage'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <FieldMessage helper-message="Enter your email address" v-bind="args"/>
</div>
    `,
    description: `
Subcomponent of the Field wrapper used to display helper text, non-blocking warning messages, validation errors, and character counters beneath input fields.
Automatically activates validation state (--validation) when validationMessage or #validation slot is present, and warning state (--warning) when warningMessage or #warning slot is present (CSS priority: validation > warning > helper). Adds role="alert" to error nodes, hides output when disabled unless forceShow is true, supports opt-in hasHtmlCode markup, and integrates FieldCounter and isSkeleton.
Controlled via helperMessage, warningMessage, validationMessage, helperId, warningId, validationId, disabled, forceShow, hasHtmlCode, isSkeleton, counterShow, counter, maxlength, maxlengthOnce, counterTemplate, counterId, fieldCounterAttrs, and #helper/#warning/#validation slots.
    `,
    hide: true
  }
}
