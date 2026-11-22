import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Radio component
 *
 * Описания свойств компонента Radio
 */
export const wikiDescriptionsRadio: StorybookComponentsDescriptionItem = {
  name: 'Radio',
  description: {
    en: 'Interactive radio button component for single choice selection from a group',
    ru: 'Интерактивный компонент радиокнопки для выбора одного варианта из группы'
  },
  possibilities: {
    en: [
      'single selection within a group via v-model:selected and valueVariant',
      'standalone two-way v-model boolean binding',
      'built-in validation support with custom messages and expose helpers',
      'label and description text support with default and description slots',
      'customizable icons for selected and indeterminate states',
      'disabled, readonly, focus, loading, and skeleton states',
      'ripple effect on interaction and adaptive layout options',
      'form integration with name and valueVariantHide attributes'
    ],
    ru: [
      'выбор одного значения из группы через v-model:selected и valueVariant',
      'автономная двусторонняя привязка v-model',
      'встроенная поддержка валидации с пользовательскими сообщениями и методами expose',
      'поддержка текста метки, описания и слотов default / description',
      'настраиваемые иконки для отмеченного и неопределённого состояний',
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
      id: 'RadioVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        radioValue: ref('space')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected path: <strong>{{ radioValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="radioValue = 'space'">To the Stars</button>
            <button class="wiki-storybook-button" @click="radioValue = 'ocean'">Into the Deep</button>
            <button class="wiki-storybook-button" @click="radioValue = ''">Reset choice</button>
          </div>
          <DesignComponent
            v-model:selected="radioValue"
            value-variant="space"
            label="Space Exploration"
            description="Journey to the edge of the galaxy"
          />
          <DesignComponent
            v-model:selected="radioValue"
            value-variant="ocean"
            label="Ocean Exploration"
            description="Discover the secrets of the abyss"
          />
        </div>
      `,
      play: `
const buttons = canvasElement.querySelectorAll('button.wiki-storybook-button')
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="radio"]')

await expect(buttons.length).toBe(3)
await expect(inputs.length).toBe(2)
await expect(inputs[0].checked).toBe(true)
await expect(inputs[1].checked).toBe(false)

await userEvent.click(inputs[1])
await waitFor(async () => {
  await expect(inputs[0].checked).toBe(false)
  await expect(inputs[1].checked).toBe(true)
  await expect(canvasElement).toHaveTextContent('Selected path: ocean')
})

await userEvent.click(buttons[0])
await waitFor(async () => {
  await expect(inputs[0].checked).toBe(true)
  await expect(inputs[1].checked).toBe(false)
  await expect(canvasElement).toHaveTextContent('Selected path: space')
})

await userEvent.click(buttons[2])
await waitFor(async () => {
  await expect(inputs[0].checked).toBe(false)
  await expect(inputs[1].checked).toBe(false)
})
      `
    },
    {
      id: 'RadioSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading radio" />
            <DesignComponent isSkeleton label="Another loading radio" />
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('Loading radio')
await expect(items[1].querySelector('.design-component__label')).toHaveTextContent('Another loading radio')
      `
    },
    {
      id: 'RadioSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>
            <strong>Custom label slot for Radio</strong>
          </template>
          <template #description>
            <em>Custom description slot for Radio</em>
          </template>
        </DesignComponent>
      `,
      play: `
const labelStrong = canvasElement.querySelector('.design-component__label strong')
const descriptionEm = canvasElement.querySelector('.design-component__description em')

await expect(labelStrong).toHaveTextContent('Custom label slot for Radio')
await expect(descriptionEm).toHaveTextContent('Custom description slot for Radio')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'RadioTestStates',
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

const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="radio"]')
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
      id: 'RadioTestSelected',
      name: {
        en: 'Test: Selected synchronization, valueVariant and standalone v-model',
        ru: 'Тест: Синхронизация selected, valueVariant и автономный v-model'
      },
      setup: `
      return {
        selectedValue: ref('alpha'),
        standaloneValue: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">Selected: {{ selectedValue }} | Standalone: {{ standaloneValue }}</div>
          <DesignComponent
            v-model:selected="selectedValue"
            name="radio-group-test"
            valueVariant="alpha"
            valueVariantHide="none"
            label="Alpha"
          />
          <DesignComponent
            v-model:selected="selectedValue"
            name="radio-group-test"
            valueVariant="beta"
            valueVariantHide="none"
            label="Beta"
          />
          <DesignComponent
            v-model="standaloneValue"
            label="Standalone"
          />
        </div>
      `,
      play: `
const card = canvasElement.querySelector('.wiki-storybook-card')
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="radio"]')
const hiddenInputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="hidden"]')

await expect(inputs[0].checked).toBe(true)
await expect(inputs[1].checked).toBe(false)
await expect(inputs[2].checked).toBe(false)
await expect(hiddenInputs[0].value).toBe('none')
await expect(card).toHaveTextContent('Selected: alpha | Standalone: false')

await userEvent.click(inputs[1])
await waitFor(async () => {
  await expect(inputs[0].checked).toBe(false)
  await expect(inputs[1].checked).toBe(true)
  await expect(card).toHaveTextContent('Selected: beta')
})

await userEvent.click(inputs[2])
await waitFor(async () => {
  await expect(inputs[2].checked).toBe(true)
  await expect(card).toHaveTextContent('Standalone: true')
})
      `
    },
    {
      id: 'RadioTestLayoutAndBoundaries',
      name: {
        en: 'Test: Layout, numeric zero, custom icons and HTML messages',
        ru: 'Тест: Компоновка, числовой ноль, иконки и HTML-сообщения'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent :label="0" :description="0" :modelValue="false" />
          <DesignComponent label="Inline" :block="false" :itemCenter="false" description="Top aligned" />
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
await expect(items[0].querySelector<HTMLInputElement>('input[type="radio"]')?.checked).toBe(false)

await expect(items[1]).not.toHaveClass('design-component--block')
await expect(items[1]).not.toHaveClass('design-component--itemCenter')

const requiredInput = items[2].querySelector<HTMLInputElement>('input[type="radio"]')
await expect(items[2]).toHaveClass('design-component--required')
await expect(requiredInput).toHaveAttribute('aria-invalid', 'true')
await expect(items[2]).toHaveTextContent('Validation failed')

await expect(items[3]).toHaveTextContent('Check this setting')

await expect(items[4].querySelector('strong')).toHaveTextContent('bold')
      `
    },
    {
      id: 'RadioTestCombinationsAndAttributes',
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
            labelId="story-radio-label"
            description="Accessible description"
            descriptionId="story-radio-desc"
            :tabindex="1"
            :inputAttrs="{ 'data-custom': 'radio-input' }"
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

const disabledInput = items[0].querySelector<HTMLInputElement>('input[type="radio"]')
await expect(items[0]).toHaveClass('design-component--disabled')
await expect(disabledInput?.checked).toBe(true)
await expect(disabledInput?.disabled).toBe(true)

const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="radio"]')
await expect(items[1]).toHaveClass('design-component--focus')
await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
await expect(readonlyInput?.checked).toBe(true)

const adaptiveInput = items[2].querySelector<HTMLInputElement>('input[type="radio"]')
await expect(items[2]).toHaveClass('design-component--adaptive--rightAlways')
await expect(items[2]).toHaveAttribute('aria-labelledby', 'story-radio-label')
await expect(items[2]).toHaveAttribute('aria-describedby', 'story-radio-desc')
await expect(adaptiveInput).toHaveAttribute('tabindex', '1')
await expect(adaptiveInput).toHaveAttribute('data-custom', 'radio-input')

const zeroInput = items[3].querySelector<HTMLInputElement>('input[type="radio"]')
await expect(zeroInput?.checked).toBe(true)
await expect(zeroInput?.value).toBe('0')

const indeterminateInput = items[4].querySelector<HTMLInputElement>('input[type="radio"]')
await expect(indeterminateInput?.checked).toBe(true)
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Radio'} type={'radio'}/>

<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'selected'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.RadioVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.RadioSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
<StorybookDescriptions componentName={'Event'} type={'focus'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>
    `,
    slots: `
<Canvas of={Component.RadioSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Form control component for single choice selection. Allows users to select one option from a mutually exclusive set.
Inherits all features from Checkbox but optimized for radio selection behavior. Includes support for labels, descriptions, validation, and loading states.
Controlled via v-model or v-model:selected/valueVariant and emits @input/@change events.
    `
  }
}
