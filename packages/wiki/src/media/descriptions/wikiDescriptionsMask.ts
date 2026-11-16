import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Mask component
 *
 * Описания компонента Mask
 */
export const wikiDescriptionsMask: StorybookComponentsDescriptionItem = {
  name: 'Mask',
  description: {
    en: 'Input masking utility for text, numbers, currency and dates with flexible patterns and validation.',
    ru: 'Утилита маскирования ввода для текста, чисел, валют и дат с гибкими шаблонами и валидацией.'
  },
  possibilities: {
    en: [
      'string or multi-pattern masks with automatic template selection',
      'special symbols define input groups while literal separators are inserted automatically',
      'per-group pattern and full-value check validation rules',
      'number, number-format, and currency modes with grouping and fraction control',
      'date and time formats with locale-aware validation',
      'rubber groups with dynamic length, transition characters, and groupSave deletion mode',
      'visibility modes (visible, visiblePartly), alignment (align), and text direction (dir)'
    ],
    ru: [
      'одиночные и множественные маски с автоматическим выбором шаблона',
      'спецсимволы задают группы ввода, а литеральные разделители подставляются автоматически',
      'валидация по группам (pattern) и полная проверка значения (check)',
      'числовые и валютные режимы (number, number-format, currency) с группировкой и дробной частью',
      'форматы даты и времени с локализованной валидацией',
      'резиновые группы переменной длины, символы перехода и режим удаления groupSave',
      'управление видимостью (visible, visiblePartly), выравниванием (align) и направлением (dir)'
    ]
  },
  render: `
    <div class="wiki-storybook-group">
      <DesignComponent
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
const inputElement = canvasElement.querySelector<HTMLInputElement>('.design-component__input')
await expect(component).toBeInTheDocument()
await expect(inputElement).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { FieldMasks, FieldValidationItem } from \'@dxtmisha/constructor\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'MaskBasic',
      name: {
        en: 'Mask Examples',
        ru: 'Примеры масок'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Phone number format (+1 area code)</div>
            <DesignComponent :mask="'+1 *** *** ** **'"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Auto format selection (multiple masks)</div>
            <DesignComponent :mask="['*** *** ***', '**** **** ****']"/>
          </div>
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.design-component__input')
await expect(inputs.length).toBe(2)

await step('Type into single phone mask', async () => {
  await userEvent.click(inputs[0])
  await userEvent.type(inputs[0], '900123')
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(inputs[0].value).toContain('+1 900 123')

await step('Type into multi-pattern mask', async () => {
  await userEvent.click(inputs[1])
  await userEvent.type(inputs[1], '1234567890')
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(inputs[1].value).toContain('1234 5678 90')
      `
    },
    {
      id: 'MaskSpecial',
      name: {
        en: 'Special Characters',
        ru: 'Специальные символы'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default special symbol (*)</div>
            <DesignComponent :mask="'+7 *** *** ** **'"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom special symbol (X)</div>
            <DesignComponent :mask="'XX.XX.XXXX'" special="X"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple special symbols (*, #, X)</div>
            <DesignComponent :mask="'***-###-XXX'" :special="['*', '#', 'X']"/>
          </div>
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.design-component__input')
await expect(inputs.length).toBe(3)

await step('Type into custom special character mask', async () => {
  await userEvent.click(inputs[1])
  await userEvent.type(inputs[1], '31122026')
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(inputs[1].value).toBe('31.12.2026')
      `
    },
    {
      id: 'MaskValidation',
      name: {
        en: 'Validation',
        ru: 'Валидация'
      },
      setup: `
      const checkPin = (masks?: FieldMasks) => {
        const groupValue = masks?.['*']?.value || ''
        return groupValue === '1234' ? {} : { pattern: '1234' }
      }

      return {
        checkPin
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Pattern validation (6-9 digits only)</div>
            <DesignComponent :mask="'***'" pattern="[6-9]{3}" value="123"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Group-specific pattern (*, # groups)</div>
            <DesignComponent :mask="'**:##'" :special="['*', '#']" pattern="[6-9]+"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Global check validation (requires 1234)</div>
            <DesignComponent :mask="'****'" :check="checkPin" value="9999"/>
          </div>
        </div>
      `,
      play: `
const maskElements = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(maskElements.length).toBe(3)
await expect(maskElements[0].querySelectorAll('.design-component__character__item--error').length).toBe(3)
await expect(maskElements[2].querySelectorAll('.design-component__character__item--error').length).toBe(4)
      `
    },
    {
      id: 'MaskGroupSave',
      name: {
        en: 'Group navigation (groupSave)',
        ru: 'Навигация по группам (groupSave)'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation enabled (groupSave: true)</div>
            <DesignComponent :mask="'****-####'" :special="['*', '#']" :groupSave="true" value="123456"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation disabled (groupSave: false)</div>
            <DesignComponent :mask="'****-####'" :special="['*', '#']" :groupSave="false" value="123456"/>
          </div>
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.design-component__input')
await expect(inputs.length).toBe(2)
await expect(inputs[0].value).toBe('1234-56')
await expect(inputs[1].value).toBe('1234-56')
      `
    },
    {
      id: 'MaskMatch',
      name: {
        en: 'Allowed characters (match)',
        ru: 'Допустимые символы (match)'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HEX characters (0-9, A-F)</div>
            <DesignComponent :mask="'***-***'" match="[A-F0-9]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Letters only (A-Z, a-z)</div>
            <DesignComponent :mask="'***-***'" match="[A-Za-z]"/>
          </div>
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.design-component__input')
await expect(inputs.length).toBe(2)

await step('Reject non-letter characters on letters-only mask', async () => {
  await userEvent.click(inputs[1])
  await userEvent.type(inputs[1], 'A1B2C3')
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(inputs[1].value).toContain('ABC')
      `
    },
    {
      id: 'MaskNumberTypes',
      name: {
        en: 'Numeric types',
        ru: 'Числовые типы'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Simple number</div>
            <DesignComponent type="number" :fraction="2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Formatted number with separators</div>
            <DesignComponent type="number-format" language="ru" :fraction="2" value="12345.6"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Currency (RUB)</div>
            <DesignComponent type="currency" currency="RUB" language="ru" value="1250.5"/>
          </div>
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.design-component__input')
await expect(inputs.length).toBe(3)
await expect(inputs[1].value).toContain('12')
await expect(inputs[2].value).toContain('1')
      `
    },
    {
      id: 'MaskDateTypes',
      name: {
        en: 'Date and time types',
        ru: 'Типы дат и времени'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Full date (DD.MM.YYYY)</div>
            <DesignComponent type="date" language="ru" value="2026-11-16"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Date and time</div>
            <DesignComponent type="datetime" language="ru"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Time only (HH:MM)</div>
            <DesignComponent type="hour-minute"/>
          </div>
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.design-component__input')
await expect(inputs.length).toBe(3)
await expect(inputs[0].value).toBe('16.11.2026')
      `
    },
    {
      id: 'MaskVisible',
      name: {
        en: 'Visibility control',
        ru: 'Управление видимостью'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">visible: true (default)</div>
            <DesignComponent mask="+7 (***) ***" :visible="true"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">visible: false</div>
            <DesignComponent mask="+7 (***) ***" :visible="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">visiblePartly: true</div>
            <DesignComponent mask="+7 (***) ***" :visible="false" :visiblePartly="true" value="900"/>
          </div>
        </div>
      `,
      play: `
const maskElements = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(maskElements.length).toBe(3)
await expect(maskElements[0]).toHaveClass('design-component--visible')
await expect(maskElements[1]).not.toHaveClass('design-component--visible')
await expect(maskElements[2]).toHaveClass('design-component--visiblePartly')
      `
    },
    {
      id: 'MaskEvents',
      name: {
        en: 'Events (input, inputLite, focus, blur)',
        ru: 'События (input, inputLite, focus, blur)'
      },
      setup: `
      const lastValue = ref('')
      const eventLog = ref('none')

      const onFocus = () => {
        eventLog.value = 'focus'
      }

      const onBlur = () => {
        eventLog.value = 'blur'
      }

      const onInputLite = (validation: FieldValidationItem) => {
        lastValue.value = String(validation.value ?? '')
        eventLog.value = 'inputLite'
      }

      const onChangeLite = (validation: FieldValidationItem) => {
        lastValue.value = String(validation.value ?? '')
        eventLog.value = 'changeLite'
      }

      return {
        lastValue,
        eventLog,
        onFocus,
        onBlur,
        onInputLite,
        onChangeLite
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <DesignComponent
              mask="****"
              @focus="onFocus"
              @blur="onBlur"
              @input-lite="onInputLite"
              @change-lite="onChangeLite"
            />
          </div>
          <div class="wiki-storybook-card">
            <div>Last Event: <span class="mask-event-log">{{ eventLog }}</span></div>
            <div>Last Value: <span class="mask-event-value">{{ lastValue }}</span></div>
          </div>
        </div>
      `,
      play: `
const inputElement = canvasElement.querySelector<HTMLInputElement>('.design-component__input')
const logOutput = canvasElement.querySelector<HTMLElement>('.mask-event-log')
const valueOutput = canvasElement.querySelector<HTMLElement>('.mask-event-value')

await expect(inputElement).toBeInTheDocument()
await step('Type characters and verify inputLite emission', async () => {
  await userEvent.click(inputElement!)
  await userEvent.type(inputElement!, '45')
  await new Promise((resolve) => setTimeout(resolve, 120))
})
await expect(valueOutput).toHaveTextContent('45')
await expect(logOutput).toHaveTextContent('inputLite')
      `
    },
    {
      id: 'MaskExpose',
      name: {
        en: 'Exposed methods (getValue, setValue, clear)',
        ru: 'Экспортируемые методы (getValue, setValue, clear)'
      },
      setup: `
      const maskReference = ref()
      const currentFormatted = ref('')
      const currentBasic = ref('')

      const syncValues = () => {
        if (maskReference.value) {
          currentFormatted.value = maskReference.value.getValue()
          currentBasic.value = maskReference.value.getValueBasic()
        }
      }

      const applyPreset = () => {
        maskReference.value?.setValue('987654')
        syncValues()
      }

      const clearMask = () => {
        maskReference.value?.clear()
        syncValues()
      }

      return {
        maskReference,
        currentFormatted,
        currentBasic,
        syncValues,
        applyPreset,
        clearMask
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <DesignComponent
              ref="maskReference"
              mask="***-***"
              value="123"
              valueDefault="000"
            />
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button expose-read" @click="syncValues">Read Values</button>
            <button class="wiki-storybook-button expose-set" @click="applyPreset">Set 987654</button>
            <button class="wiki-storybook-button expose-clear" @click="clearMask">Clear</button>
          </div>
          <div class="wiki-storybook-card">
            <div>getValue: <span class="expose-formatted">{{ currentFormatted }}</span></div>
            <div>getValueBasic: <span class="expose-basic">{{ currentBasic }}</span></div>
          </div>
        </div>
      `,
      play: `
const readButton = canvasElement.querySelector<HTMLButtonElement>('.expose-read')
const setButton = canvasElement.querySelector<HTMLButtonElement>('.expose-set')
const clearButton = canvasElement.querySelector<HTMLButtonElement>('.expose-clear')
const formattedOutput = canvasElement.querySelector<HTMLElement>('.expose-formatted')
const basicOutput = canvasElement.querySelector<HTMLElement>('.expose-basic')

await step('Read initial exposed values', async () => {
  await userEvent.click(readButton!)
})
await expect(formattedOutput).toHaveTextContent('123-')

await step('Set value via expose.setValue', async () => {
  await userEvent.click(setButton!)
})
await expect(formattedOutput).toHaveTextContent('987-654')
await expect(basicOutput).toHaveTextContent('987-654')

await step('Reset value via expose.clear to valueDefault', async () => {
  await userEvent.click(clearButton!)
})
await expect(formattedOutput).toHaveTextContent('000-')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with MaskTest... and "Test: " / "Тест: ")
    // =========================================================================
    {
      id: 'MaskTestAlignDirView',
      name: {
        en: 'Test: Align, dir, view, name, inputAttrs and numeric zero',
        ru: 'Тест: Выравнивание, направление, view, name, inputAttrs и числовой ноль'
      },
      propsName: ['align', 'dir', 'view', 'name', 'inputAttrs', 'value', 'valueDefault'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">align="left"</div>
            <DesignComponent mask="****" align="left" value="12"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">align="center"</div>
            <DesignComponent mask="****" align="center" value="12"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">align="right"</div>
            <DesignComponent mask="****" align="right" value="12"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">dir="rtl"</div>
            <DesignComponent mask="****" dir="rtl" value="12"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">view="0", name &amp; inputAttrs</div>
            <DesignComponent
              mask="**-**"
              view="0"
              name="pin-field"
              value="12"
              :input-attrs="{ inputMode: 'numeric', 'aria-label': 'Custom mask input' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">value=0, valueDefault=0</div>
            <DesignComponent type="number" :value="0" :value-default="0"/>
          </div>
        </div>
      `,
      play: `
const maskElements = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(maskElements.length).toBe(6)

await expect(maskElements[0]).toHaveClass('design-component--align--left')
await expect(maskElements[1]).toHaveClass('design-component--align--center')
await expect(maskElements[2]).toHaveClass('design-component--align--right')
await expect(maskElements[3]).toHaveClass('design-component--dir--rtl')

const hiddenInput = canvasElement.querySelector<HTMLInputElement>('input[type="hidden"][name="pin-field"]')
const customInput = canvasElement.querySelector<HTMLInputElement>('input[aria-label="Custom mask input"]')
await expect(hiddenInput).toBeInTheDocument()
await expect(hiddenInput?.value).toBe('12-')
await expect(customInput).toHaveAttribute('inputmode', 'numeric')

const zeroInput = maskElements[5].querySelector<HTMLInputElement>('.design-component__input')
await expect(zeroInput?.value).toBe('0')
await expect(maskElements[5]).toHaveClass('design-component--value')
      `
    },
    {
      id: 'MaskTestRubberAndFullOnly',
      name: {
        en: 'Test: Rubber groups, currencyHide, fraction and fullOnly',
        ru: 'Тест: Резиновые группы, currencyHide, fraction и fullOnly'
      },
      propsName: ['special', 'currency', 'currencyHide', 'fraction', 'fullOnly', 'type', 'language'],
      setup: `
      const fullOnlyValue = ref('')

      const onFullOnlyInput = (validation: FieldValidationItem) => {
        fullOnlyValue.value = String(validation.value ?? '')
      }

      return {
        fullOnlyValue,
        onFullOnlyInput
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">rubber special groups</div>
            <DesignComponent
              mask="*-#"
              :special="{
                '*': { rubber: true, maxLength: 3, transitionChar: '-' },
                '#': { rubber: true, maxLength: 3 }
              }"
              value="12-345"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">currencyHide &amp; fraction</div>
            <DesignComponent
              type="currency"
              currency="USD"
              :currency-hide="true"
              :fraction="true"
              language="en-US"
              value="1234.5"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">fullOnly mode</div>
            <DesignComponent
              mask="****"
              :full-only="true"
              :input-attrs="{ 'aria-label': 'Full only test' }"
              @input-lite="onFullOnlyInput"
            />
            <div class="full-only-output">{{ fullOnlyValue }}</div>
          </div>
        </div>
      `,
      play: `
const maskElements = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(maskElements.length).toBe(3)

const rubberInput = maskElements[0].querySelector<HTMLInputElement>('.design-component__input')
await expect(rubberInput?.value).toBe('12-345')

const currencyInput = maskElements[1].querySelector<HTMLInputElement>('.design-component__input')
await expect(currencyInput?.value).not.toContain('$')

const fullOnlyInput = canvasElement.querySelector<HTMLInputElement>('input[aria-label="Full only test"]')
const fullOnlyOutput = canvasElement.querySelector<HTMLElement>('.full-only-output')

await step('Partial input must not emit fullOnly value', async () => {
  await userEvent.click(fullOnlyInput!)
  await userEvent.type(fullOnlyInput!, '12')
  await new Promise((resolve) => setTimeout(resolve, 120))
})
await expect(fullOnlyOutput).toHaveTextContent('')

await step('Complete input emits fullOnly value', async () => {
  await userEvent.type(fullOnlyInput!, '34')
  await new Promise((resolve) => setTimeout(resolve, 120))
})
await expect(fullOnlyOutput).toHaveTextContent('1234')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Mask'} type={'basic'}/>

<StorybookDescriptions componentName={'Mask'} type={'mask'}/>
<Canvas of={Component.MaskBasic}/>

<StorybookDescriptions componentName={'Mask'} type={'special'}/>
<Canvas of={Component.MaskSpecial}/>

<StorybookDescriptions componentName={'Mask'} type={'groupSave'}/>
<Canvas of={Component.MaskGroupSave}/>

<StorybookDescriptions componentName={'Mask'} type={'match'}/>
<Canvas of={Component.MaskMatch}/>

<StorybookDescriptions componentName={'Mask'} type={'pattern'}/>
<Canvas of={Component.MaskValidation}/>

<StorybookDescriptions componentName={'Mask'} type={'type'}/>

<StorybookDescriptions componentName={'Mask'} type={'numberTypes'}/>
<Canvas of={Component.MaskNumberTypes}/>

<StorybookDescriptions componentName={'Mask'} type={'dateTypes'}/>
<Canvas of={Component.MaskDateTypes}/>

<StorybookDescriptions componentName={'Mask'} type={'visible'}/>
<Canvas of={Component.MaskVisible}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'beforeinput'}/>
<StorybookDescriptions componentName={'Event'} type={'reset'}/>
<StorybookDescriptions componentName={'Event'} type={'focus'}/>
<StorybookDescriptions componentName={'Event'} type={'keyboard'}/>
<StorybookDescriptions componentName={'Event'} type={'paste'}/>
<Canvas of={Component.MaskEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Mask'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
<Canvas of={Component.MaskExpose}/>
    `
  },
  ai: {
    description: `
Low-level input masking utility for controlling and formatting text, numeric, and date/time data entry. Intercepts input events to enforce strict patterns, automatically inserting literal characters and validating each keystroke against allowed rules.
Features support for single or multiple patterns (auto-selection), specialized input types (currency, number-format), and locale-aware date/time validation. Includes granular control over allowed characters (match), decimal fractions, and rubber groups.
Integrated primarily within the Input component; should generally not be used as a standalone element. Controlled via mask and type props, providing a foundation for phone numbers, credit card fields, and international financial inputs.
    `,
    hide: true
  }
}
