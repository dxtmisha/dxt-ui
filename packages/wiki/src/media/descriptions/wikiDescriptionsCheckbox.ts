import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Checkbox component
 *
 * Описания свойств компонента Checkbox
 */
export const wikiDescriptionsCheckbox: StorybookComponentsDescriptionItem = {
  name: 'Checkbox',
  description: {
    en: 'Interactive checkbox component for binary or indeterminate state selection',
    ru: 'Интерактивный компонент чекбокса для выбора бинарного или неопределённого состояния'
  },
  possibilities: {
    en: [
      'checked, unchecked, and indeterminate states',
      'two-way v-model and v-model:selected synchronization with valueVariant',
      'built-in validation support with custom messages and expose helpers',
      'label and description text support with default and description slots',
      'customizable icons for checked and indeterminate states',
      'disabled, readonly, focus, loading, and skeleton states',
      'ripple effect on interaction and adaptive layout options',
      'form integration with name and valueVariantHide attributes'
    ],
    ru: [
      'состояния: отмечен, не отмечен и неопределённое',
      'двусторонняя синхронизация v-model и v-model:selected с valueVariant',
      'встроенная поддержка валидации с пользовательскими сообщениями и методами expose',
      'поддержка текста метки, описания и слотов default / description',
      'настраиваемые иконки для состояний отмечен и неопределённое',
      'состояния disabled, readonly, focus, loading и skeleton',
      'эффект волны при взаимодействии и опции адаптивной разметки',
      'интеграция с формами через атрибуты name и valueVariantHide'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'CheckboxVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        checkboxValue: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = !checkboxValue">Check {{ checkboxValue }}</button>
          </div>
          <DesignComponent
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
      `,
      play: `
const button = canvasElement.querySelector('button.wiki-storybook-button')
const input = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')

await expect(button).toBeInTheDocument()
await expect(input).toBeInTheDocument()
await expect(input?.checked).toBe(false)

if (button) {
  await userEvent.click(button)
}
await waitFor(async () => {
  await expect(input?.checked).toBe(true)
  await expect(button).toHaveTextContent('Check true')
})

if (input) {
  await userEvent.click(input)
}
await waitFor(async () => {
  await expect(input?.checked).toBe(false)
  await expect(button).toHaveTextContent('Check false')
})
      `
    },
    {
      id: 'CheckboxSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading checkbox" />
            <DesignComponent isSkeleton label="Another loading checkbox" />
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('Loading checkbox')
await expect(items[1].querySelector('.design-component__label')).toHaveTextContent('Another loading checkbox')
      `
    },
    {
      id: 'CheckboxSlots',
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
const labelStrong = canvasElement.querySelector('.design-component__label strong')
const descriptionEm = canvasElement.querySelector('.design-component__description em')

await expect(labelStrong).toHaveTextContent('Custom label slot')
await expect(descriptionEm).toHaveTextContent('Custom description slot')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'CheckboxTestStates',
      name: {
        en: 'Test: Disabled, readonly, focus, loading and indeterminate states',
        ru: 'Тест: Состояния disabled, readonly, focus, loading и indeterminate'
      },
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

const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
await expect(readonlyInput?.checked).toBe(false)

if (readonlyInput) {
  await userEvent.click(readonlyInput)
}
await expect(readonlyInput?.checked).toBe(false)

await expect(items[3].querySelector('.design-component__loading')).toBeInTheDocument()
await expect(items[4].querySelector('.design-component__loading')).toBeInTheDocument()
await expect(items[6]).toHaveTextContent('Forced message')
      `
    },
    {
      id: 'CheckboxTestSelected',
      name: {
        en: 'Test: Selected synchronization and valueVariant',
        ru: 'Тест: Синхронизация selected и valueVariant'
      },
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
            name="group-test"
            valueVariant="alpha"
            valueVariantHide="none"
            label="Alpha"
          />
          <DesignComponent
            v-model:selected="selectedValue"
            name="group-test"
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

await expect(inputs[0].checked).toBe(true)
await expect(inputs[1].checked).toBe(false)
await expect(hiddenInputs[0].value).toBe('none')
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
      id: 'CheckboxTestLayoutAndBoundaries',
      name: {
        en: 'Test: Layout, numeric zero, custom icons and HTML messages',
        ru: 'Тест: Компоновка, числовой ноль, иконки и HTML-сообщения'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent :label="0" :description="0" :modelValue="false" />
          <DesignComponent label="Inline" :block="false" :itemCenter="false" description="Top aligned" />
          <DesignComponent label="Required" required validationMessage="Validation failed" />
          <DesignComponent label="HTML helper" hasHtmlCode helperMessage="Helper <strong>bold</strong> text" />
          <DesignComponent label="Object icon" :iconCheckbox="{ value: 'verified' }" :modelValue="true" />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)

await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('0')
await expect(items[0].querySelector('.design-component__description')).toHaveTextContent('0')
await expect(items[0].querySelector<HTMLInputElement>('input[type="checkbox"]')?.checked).toBe(false)

await expect(items[1]).not.toHaveClass('design-component--block')
await expect(items[1]).not.toHaveClass('design-component--itemCenter')

const requiredInput = items[2].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(items[2]).toHaveClass('design-component--required')
await expect(requiredInput).toHaveAttribute('aria-invalid', 'true')
await expect(items[2]).toHaveTextContent('Validation failed')

await expect(items[3].querySelector('strong')).toHaveTextContent('bold')
      `
    },
    {
      id: 'CheckboxTestCombinationsAndAttributes',
      name: {
        en: 'Test: Coupled states, ARIA attributes, adaptive and zero valueVariant',
        ru: 'Тест: Комбинированные состояния, ARIA-атрибуты, adaptive и числовой valueVariant'
      },
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
            labelId="story-cb-label"
            description="Accessible description"
            descriptionId="story-cb-desc"
            :tabindex="1"
            :inputAttrs="{ 'data-custom': 'checkbox-input' }"
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
await expect(disabledInput?.checked).toBe(true)
await expect(disabledInput?.disabled).toBe(true)

const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(items[1]).toHaveClass('design-component--focus')
await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
await expect(readonlyInput?.checked).toBe(true)

const adaptiveInput = items[2].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(items[2]).toHaveClass('design-component--adaptive--rightAlways')
await expect(items[2]).toHaveAttribute('aria-labelledby', 'story-cb-label')
await expect(items[2]).toHaveAttribute('aria-describedby', 'story-cb-desc')
await expect(adaptiveInput).toHaveAttribute('tabindex', '1')
await expect(adaptiveInput).toHaveAttribute('data-custom', 'checkbox-input')

const zeroInput = items[3].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(zeroInput?.checked).toBe(true)
await expect(zeroInput?.value).toBe('0')

const indeterminateInput = items[4].querySelector<HTMLInputElement>('input[type="checkbox"]')
await expect(indeterminateInput?.checked).toBe(true)
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Checkbox'} type={'checkbox'}/>

<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'selected'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'indeterminate'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.CheckboxVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CheckboxSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>
    `,
    slots: `
<Canvas of={Component.CheckboxSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Form control component for binary (yes/no) or indeterminate state selection. Allows users to toggle specific options or select multiple items from a list with visual feedback.
Features support for primary label, secondary description, and custom icons for checked/indeterminate states. Includes built-in validation, loading indicators, readonly click protection, and adaptive layout options.
Controlled via v-model or v-model:selected/valueVariant and emits @input/@change events. Use for terms agreement, feature toggles, or parent-child coordinated selections (via indeterminate state).
    `
  }
}
