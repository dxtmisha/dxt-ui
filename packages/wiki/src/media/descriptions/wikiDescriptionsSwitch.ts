import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Switch component
 *
 * Описания свойств компонента Switch
 */
export const wikiDescriptionsSwitch: StorybookComponentsDescriptionItem = {
  name: 'Switch',
  description: {
    en: 'Interactive toggle switch component for binary on/off state selection with WAI-ARIA switch semantics.',
    ru: 'Интерактивный переключатель (тогл) для выбора бинарного состояния «включено»/«выключено» с семантикой WAI-ARIA switch.'
  },
  possibilities: {
    en: [
      'binary toggling states with WAI-ARIA `role="switch"` and sliding track indicator',
      'two-way `v-model` and `v-model:selected` synchronization with `valueVariant` and `valueVariantHide`',
      'built-in validation support (`required`, `validationMessage`, `validationCode`, `checkValidity`, `getValidationMessage`)',
      'label, description, helper/warning messages, HTML support, and `#default` / `#description` slots',
      'disabled, readonly click protection (`aria-readonly`), focus, indeterminate, loading, and skeleton states',
      'adaptive layout (`adaptive`, `block`, `itemCenter`, `container`) and form integration (`name`, `form`, `id`)'
    ],
    ru: [
      'бинарные переключаемые состояния с WAI-ARIA `role="switch"` и треком ползунка',
      'двусторонняя синхронизация `v-model` и `v-model:selected` с `valueVariant` и `valueVariantHide`',
      'встроенная валидация (`required`, `validationMessage`, `validationCode`, `checkValidity`, `getValidationMessage`)',
      'поддержка метки, описания, подсказок/предупреждений, HTML и слотов `#default` / `#description`',
      'состояния `disabled`, защита от переключения `readonly` (`aria-readonly`), `focus`, `indeterminate`, `loading` и `isSkeleton`',
      'адаптивная раскладка (`adaptive`, `block`, `itemCenter`, `container`) и интеграция с формами (`name`, `form`, `id`)'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
const switchInput = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')
const track = canvasElement.querySelector('.design-component__track')

await expect(component).toBeInTheDocument()
await expect(switchInput).toBeInTheDocument()
await expect(switchInput).toHaveAttribute('role', 'switch')
await expect(track).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { FieldValidationItem } from \'@dxtmisha/constructor\'',
    'import type { SwitchExpose } from \'@dxtmisha/constructor/Switch\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/expose/slots)
    // =========================================================================
    {
      id: 'SwitchVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        switchValue: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="switchValue = !switchValue">Toggle {{ switchValue }}</button>
          </div>
          <DesignComponent
            v-model="switchValue"
            label="Switch with v-model"
          />
        </div>
      `,
      play: `
const button = canvasElement.querySelector<HTMLButtonElement>('button.wiki-storybook-button')
const switchInput = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')

await expect(button).toBeInTheDocument()
await expect(switchInput).toBeInTheDocument()
await expect(switchInput).toHaveAttribute('role', 'switch')
await expect(switchInput?.checked).toBe(false)

await step('Toggle switch programmatically via button', async () => {
  if (button) {
    await userEvent.click(button)
  }
  await waitFor(async () => {
    await expect(switchInput?.checked).toBe(true)
    await expect(button).toHaveTextContent('Toggle true')
  })
})

await step('Toggle switch directly via user interaction', async () => {
  if (switchInput) {
    await userEvent.click(switchInput)
  }
  await waitFor(async () => {
    await expect(switchInput?.checked).toBe(false)
    await expect(button).toHaveTextContent('Toggle false')
  })
})
      `
    },
    {
      id: 'SwitchSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading switch" />
            <DesignComponent isSkeleton label="Another loading switch" />
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)

await expect(items[0].querySelector('input[type="checkbox"]')).toHaveAttribute('role', 'switch')
await expect(items[0].querySelector('.design-component__track')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('Loading switch')
await expect(items[1].querySelector('.design-component__label')).toHaveTextContent('Another loading switch')
      `
    },
    {
      id: 'SwitchSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </DesignComponent>
      `,
      play: `
const switchInput = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')
const labelStrong = canvasElement.querySelector('.design-component__label strong')
const descriptionEm = canvasElement.querySelector('.design-component__description em')

await expect(switchInput).toHaveAttribute('role', 'switch')
await expect(labelStrong).toHaveTextContent('Custom label slot')
await expect(descriptionEm).toHaveTextContent('Custom description slot')
      `
    },
    {
      id: 'SwitchEventsAndExpose',
      name: {
        en: 'Events and expose API',
        ru: 'События и expose API'
      },
      setup: `
      const switchReference = ref<SwitchExpose | null>(null)
      const switchValue = ref(false)
      const lastEvent = ref('none')
      const focusState = ref('idle')
      const exposeSummary = ref('ready')

      const onInputLite = (validationItem: FieldValidationItem<boolean>) => {
        lastEvent.value = 'inputLite:' + String(validationItem.value)
      }
      const onChangeLite = (validationItem: FieldValidationItem<boolean>) => {
        lastEvent.value = 'changeLite:' + String(validationItem.value)
      }
      const onFocus = (event: FocusEvent) => {
        if (event.type === 'focus') {
          focusState.value = 'focused'
        }
      }
      const onBlur = (event: FocusEvent) => {
        if (event.type === 'blur') {
          focusState.value = 'blurred'
        }
      }
      const readExpose = () => {
        const currentValue = switchReference.value?.getValue()
        const isValid = switchReference.value?.checkValidity()
        const validationText = switchReference.value?.getValidationMessage()
        const changed = switchReference.value?.isChanged()
        exposeSummary.value = 'value:' + String(currentValue)
          + '|valid:' + String(isValid)
          + '|changed:' + String(changed)
          + '|message:' + String(validationText)
      }
      const applyTrue = () => {
        switchReference.value?.setValue(true)
        readExpose()
      }
      const clearValue = () => {
        switchReference.value?.clear()
        readExpose()
      }

      return {
        switchReference,
        switchValue,
        lastEvent,
        focusState,
        exposeSummary,
        onInputLite,
        onChangeLite,
        onFocus,
        onBlur,
        readExpose,
        applyTrue,
        clearValue
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="readExpose">Check expose</button>
            <button type="button" class="wiki-storybook-button" @click="applyTrue">Set true</button>
            <button type="button" class="wiki-storybook-button" @click="clearValue">Clear</button>
          </div>
          <DesignComponent
            ref="switchReference"
            v-model="switchValue"
            label="Accept required policy"
            required
            :validation-code="{ valueMissing: 'Acceptance required' }"
            @input-lite="onInputLite"
            @change-lite="onChangeLite"
            @focus="onFocus"
            @blur="onBlur"
          />
          <div class="wiki-storybook-card">
            <span data-testid="switch-event-output">{{ lastEvent }}</span>
            |
            <span data-testid="switch-focus-output">{{ focusState }}</span>
            |
            <span data-testid="switch-expose-output">{{ exposeSummary }}</span>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const switchInput = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')

await expect(switchInput).toBeInTheDocument()
await expect(switchInput).toHaveAttribute('role', 'switch')

await step('Validate required unchecked switch via expose', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Check expose' }))
  await expect(canvas.getByTestId('switch-expose-output')).toHaveTextContent('value:false|valid:false|changed:false|message:')
})

await step('Focus, click, and blur switch to trigger events', async () => {
  if (switchInput) {
    await fireEvent.focus(switchInput)
    await expect(canvas.getByTestId('switch-focus-output')).toHaveTextContent('focused')
    await userEvent.click(switchInput)
    await fireEvent.blur(switchInput)
  }
  await waitFor(async () => {
    await expect(switchInput?.checked).toBe(true)
    await expect(canvas.getByTestId('switch-focus-output')).toHaveTextContent('blurred')
    await expect(canvas.getByTestId('switch-event-output')).toHaveTextContent('true')
  })
})

await step('Verify valid state, clear(), and setValue(true)', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Check expose' }))
  await expect(canvas.getByTestId('switch-expose-output')).toHaveTextContent('value:true|valid:true|changed:true|message:')

  await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
  await expect(canvas.getByTestId('switch-expose-output')).toHaveTextContent('value:undefined|valid:false|changed:true|message:Acceptance required')

  await userEvent.click(canvas.getByRole('button', { name: 'Set true' }))
  await expect(canvas.getByTestId('switch-expose-output')).toHaveTextContent('value:true|valid:true')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'SwitchTestStates',
      name: {
        en: 'Test: Disabled, readonly, focus, loading and indeterminate states',
        ru: 'Тест: Состояния disabled, readonly, focus, loading и indeterminate'
      },
      propsName: ['disabled', 'readonly', 'focus', 'loading', 'indeterminate', 'forceShowMessage', 'helperMessage'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Disabled" disabled />
          <DesignComponent label="Readonly" readonly />
          <DesignComponent label="Focus" focus />
          <DesignComponent label="Loading boolean" loading :modelValue="true" />
          <DesignComponent label="Loading object" :loading="{ visible: true, circular: true }" :modelValue="true" />
          <DesignComponent label="Indeterminate" indeterminate :modelValue="true" />
          <DesignComponent label="Disabled with forceShowMessage" disabled forceShowMessage helperMessage="Forced message" />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(7)

items.forEach((item) => {
  const input = item.querySelector<HTMLInputElement>('input[type="checkbox"]')
  expect(input).toHaveAttribute('role', 'switch')
  expect(item.querySelector('.design-component__track')).toBeInTheDocument()
})

const disabledInput = items[0].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(items[0]).toHaveClass('design-component--disabled')
await expect(disabledInput?.disabled).toBe(true)

const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
await expect(readonlyInput?.checked).toBe(false)

if (readonlyInput) {
  await userEvent.click(readonlyInput)
}
await expect(readonlyInput?.checked).toBe(false)

await expect(items[2]).toHaveClass('design-component--focus')
await expect(items[3].querySelector('.design-component__loading')).toBeInTheDocument()
await expect(items[4].querySelector('.design-component__loading')).toBeInTheDocument()
await expect(items[6]).toHaveTextContent('Forced message')
      `
    },
    {
      id: 'SwitchTestSelected',
      name: {
        en: 'Test: Selected synchronization and valueVariant',
        ru: 'Тест: Синхронизация selected и valueVariant'
      },
      propsName: ['selected', 'valueVariant', 'valueVariantHide', 'name'],
      setup: `
      return {
        selectedValue: ref('alpha')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">Selected: {{ selectedValue }}</div>
          <DesignComponent
            v-model:selected="selectedValue"
            name="switch-group-test"
            valueVariant="alpha"
            valueVariantHide="none"
            label="Alpha"
          />
          <DesignComponent
            v-model:selected="selectedValue"
            name="switch-group-test"
            valueVariant="beta"
            valueVariantHide="none"
            label="Beta"
          />
        </div>
      `,
      play: `
const card = canvasElement.querySelector('.wiki-storybook-card')
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
const hiddenInputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="hidden"]')

await expect(inputs[0]).toHaveAttribute('role', 'switch')
await expect(inputs[1]).toHaveAttribute('role', 'switch')
await expect(inputs[0].checked).toBe(true)
await expect(inputs[1].checked).toBe(false)
await expect(hiddenInputs[0].value).toBe('none')
await expect(hiddenInputs[0].name).toBe('switch-group-test')
await expect(card).toHaveTextContent('Selected: alpha')

await userEvent.click(inputs[1])
await waitFor(async () => {
  await expect(inputs[0].checked).toBe(false)
  await expect(inputs[1].checked).toBe(true)
  await expect(card).toHaveTextContent('Selected: beta')
})
      `
    },
    {
      id: 'SwitchTestLayoutAndMessages',
      name: {
        en: 'Test: Layout, container, numeric zero, custom icons and HTML messages',
        ru: 'Тест: Компоновка, container, числовой ноль, иконки и HTML-сообщения'
      },
      propsName: ['block', 'itemCenter', 'container', 'required', 'validationMessage', 'warningMessage', 'hasHtmlCode', 'helperMessage', 'iconCheckbox'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent :label="0" :description="0" :modelValue="false" />
          <DesignComponent label="Inline" :block="false" :itemCenter="false" container="rightMd" description="Top aligned" />
          <DesignComponent label="Required" required validationMessage="Validation failed" />
          <DesignComponent label="Warning" warningMessage="Check this setting" />
          <DesignComponent label="HTML helper" hasHtmlCode helperMessage="Helper <strong>bold</strong> text" />
          <DesignComponent label="Object icon" :iconCheckbox="{ value: 'verified' }" :modelValue="true" />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(6)

await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('0')
await expect(items[0].querySelector('.design-component__description')).toHaveTextContent('0')
await expect(items[0].querySelector<HTMLInputElement>('input[type="checkbox"]')?.checked).toBe(false)

await expect(items[1]).not.toHaveClass('design-component--block')
await expect(items[1]).not.toHaveClass('design-component--itemCenter')
await expect(items[1]).toHaveClass('design-component--container--rightMd')

const requiredInput = items[2].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(items[2]).toHaveClass('design-component--required')
await expect(requiredInput).toHaveAttribute('role', 'switch')
await expect(requiredInput).toHaveAttribute('aria-invalid', 'true')
await expect(items[2]).toHaveTextContent('Validation failed')

await expect(items[3]).toHaveTextContent('Check this setting')
await expect(items[4].querySelector('strong')).toHaveTextContent('bold')
await expect(items[5].querySelector<HTMLInputElement>('input[type="checkbox"]')?.checked).toBe(true)
      `
    },
    {
      id: 'SwitchTestCombinationsAndAttributes',
      name: {
        en: 'Test: Coupled states, ARIA attributes, adaptive and zero valueVariant',
        ru: 'Тест: Комбинированные состояния, ARIA-атрибуты, adaptive и числовой valueVariant'
      },
      propsName: ['disabled', 'selected', 'readonly', 'focus', 'adaptive', 'labelId', 'descriptionId', 'tabindex', 'id', 'form', 'inputAttrs', 'valueVariant', 'iconCheckbox', 'iconIndeterminate'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Disabled + Selected"
            disabled
            selected="yes"
            valueVariant="yes"
          />
          <DesignComponent
            label="Readonly + Focus"
            readonly
            focus
            :modelValue="true"
          />
          <DesignComponent
            label="Adaptive Right Always"
            adaptive="rightAlways"
            form="settings-form"
            labelId="story-switch-label"
            description="Accessible description"
            descriptionId="story-switch-description"
            :tabindex="1"
            :inputAttrs="{ id: 'story-switch-input', 'data-custom': 'switch-input' }"
          />
          <DesignComponent
            label="Zero Variant"
            :valueVariant="0"
            :modelValue="true"
            :iconCheckbox="null"
          />
          <DesignComponent
            label="Custom Indeterminate"
            indeterminate
            iconIndeterminate="close"
            :modelValue="true"
          />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)

const disabledInput = items[0].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(items[0]).toHaveClass('design-component--disabled')
await expect(disabledInput).toHaveAttribute('role', 'switch')
await expect(disabledInput?.checked).toBe(true)
await expect(disabledInput?.disabled).toBe(true)

const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(items[1]).toHaveClass('design-component--focus')
await expect(readonlyInput).toHaveAttribute('role', 'switch')
await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
await expect(readonlyInput?.checked).toBe(true)

const adaptiveInput = items[2].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(items[2]).toHaveClass('design-component--adaptive--rightAlways')
await expect(items[2]).toHaveAttribute('aria-labelledby', 'story-switch-label')
await expect(items[2]).toHaveAttribute('aria-describedby', 'story-switch-description')
await expect(adaptiveInput).toHaveAttribute('role', 'switch')
await expect(adaptiveInput).toHaveAttribute('id', 'story-switch-input')
await expect(adaptiveInput).toHaveAttribute('form', 'settings-form')
await expect(adaptiveInput).toHaveAttribute('tabindex', '1')
await expect(adaptiveInput).toHaveAttribute('data-custom', 'switch-input')

const zeroInput = items[3].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(zeroInput).toHaveAttribute('role', 'switch')
await expect(zeroInput?.checked).toBe(true)
await expect(zeroInput?.value).toBe('0')

const indeterminateInput = items[4].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(indeterminateInput).toHaveAttribute('role', 'switch')
await expect(indeterminateInput?.checked).toBe(true)
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Switch'} type={'switch'}/>

<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'selected'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.SwitchVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SwitchSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'focus'}/>
    `,
    expose: `
<Canvas of={Component.SwitchEventsAndExpose}/>
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>
    `,
    slots: `
<Canvas of={Component.SwitchSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Form control component representing a physical toggle switch for binary on/off choices with WAI-ARIA role="switch" semantics.
Inherits input handling, model synchronization, and validation from Checkbox while rendering a sliding track wrapper around the toggle indicator.
Supports primary labels, descriptions, custom icons, built-in validation, readonly click protection, loading and skeleton states, and adaptive layout options.
Controlled via v-model or v-model:selected/valueVariant and emits @input/@inputLite/@change/@changeLite/@focus/@blur events. Use for instant toggles of features or settings.
    `
  }
}
