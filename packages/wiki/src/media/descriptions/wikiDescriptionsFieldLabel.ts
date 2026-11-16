import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FieldLabel component properties
 *
 * Описания свойств компонента FieldLabel
 */
export const wikiDescriptionsFieldLabel: StorybookComponentsDescriptionItem = {
  name: 'FieldLabel',
  description: {
    en: 'Component for displaying a semantic form field label with required indicator, character counter, loading progress, and skeleton state.',
    ru: 'Компонент для отображения семантической метки поля формы с индикатором обязательности, счётчиком символов, прогрессом загрузки и состоянием скелетона.'
  },
  possibilities: {
    en: [
      'rendering a semantic <label> element linked via `for` and optional `labelId`',
      'displaying an accessible `required` asterisk marker (`aria-hidden="true"`)',
      'integrating a right-aligned character counter (`counterShow`, `counter`, `maxlength`, `maxlengthOnce`, `counterTemplate`, `counterId`, `fieldCounterAttrs`)',
      'showing a circular static progress spinner (`loading`) that stays mounted once shown for smooth hiding',
      'applying skeleton styling classes (`isSkeleton`) and custom content through the `#label` slot'
    ],
    ru: [
      'рендер семантического элемента <label> со связкой `for` и опциональным `labelId`',
      'отображение маркера обязательности `required` со звёздочкой `aria-hidden="true"`',
      'интеграция счётчика символов справа (`counterShow`, `counter`, `maxlength`, `maxlengthOnce`, `counterTemplate`, `counterId`, `fieldCounterAttrs`)',
      'круговой статичный индикатор загрузки (`loading`), сохраняющийся в DOM после первого показа',
      'применение классов скелетона (`isSkeleton`) и кастомизация через слот `#label`'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
if (component) {
  expect(component.tagName).toBe('LABEL')
}
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body)
    // =========================================================================
    {
      id: 'FieldLabelBasic',
      name: {
        en: 'Basic Usage & For Binding',
        ru: 'Базовое отображение и связка for'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Text Label</div>
            <DesignComponent label="Username"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Numeric Label</div>
            <DesignComponent :label="42"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Required Label</div>
            <DesignComponent label="Email Address" required/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Linked Input (for + labelId)</div>
            <DesignComponent
              label="Focus Target Label"
              for="wiki-field-label-target"
              label-id="wiki-field-label-heading"
              required
            />
            <input
              id="wiki-field-label-target"
              type="text"
              placeholder="Click label above"
              aria-labelledby="wiki-field-label-heading"
            />
          </div>
        </div>
      `,
      play: `
const labels = canvasElement.querySelectorAll<HTMLLabelElement>('.design-component')
await expect(labels.length).toBe(4)
expect(labels[0].textContent?.trim()).toBe('Username')
expect(labels[1].textContent?.trim()).toBe('42')
expect(labels[2].textContent?.trim()).toBe('Email Address*')

const requiredMark = labels[2].querySelector<HTMLElement>('.design-component__required')
await expect(requiredMark).toBeInTheDocument()
await expect(requiredMark).toHaveAttribute('aria-hidden', 'true')

const linkedLabel = labels[3]
await expect(linkedLabel).toHaveAttribute('for', 'wiki-field-label-target')
const headingSpan = linkedLabel.querySelector<HTMLElement>('#wiki-field-label-heading')
await expect(headingSpan).toBeInTheDocument()

const targetInput = canvasElement.querySelector<HTMLInputElement>('#wiki-field-label-target')
await expect(targetInput).toBeInTheDocument()
expect(targetInput?.labels?.[0]).toBe(linkedLabel)
linkedLabel.click()
targetInput?.focus()
expect(document.activeElement).toBe(targetInput)
      `
    },
    {
      id: 'FieldLabelCounter',
      name: {
        en: 'Character Counter & Templates',
        ru: 'Счётчик символов и шаблоны'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Label + Counter</div>
            <DesignComponent label="Bio" counter-show :counter="42" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Zero Counter</div>
            <DesignComponent label="Notes" counter-show :counter="0" :maxlength="50"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom Template, Once & ID</div>
            <DesignComponent
              label="Custom"
              counter-show
              :counter="92"
              :maxlength="100"
              :maxlength-once="10"
              counter-template="[c] of [m] chars"
              counter-id="wiki-field-label-counter-custom"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom fieldCounterAttrs</div>
            <DesignComponent
              label="Counter Attrs"
              counter-show
              :counter="12"
              :maxlength="30"
              :field-counter-attrs="{ class: 'wiki-custom-counter-attr', textCharacterRemaining: '[left] left' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter Only</div>
            <DesignComponent counter-show :counter="15" :maxlength="80"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Hidden When counterShow=false</div>
            <DesignComponent label="No Counter Shown" :counter="42" :maxlength="100"/>
          </div>
        </div>
      `,
      play: `
const labels = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(labels.length).toBe(6)

const customCounter = labels[2].querySelector<HTMLElement>('#wiki-field-label-counter-custom')
await expect(customCounter).toBeInTheDocument()
expect(customCounter?.textContent?.trim()).toBe('92 of 100 chars')

const customAttrCounter = labels[3].querySelector<HTMLElement>('.wiki-custom-counter-attr')
await expect(customAttrCounter).toBeInTheDocument()
expect(customAttrCounter?.textContent?.trim()).toBe('12 / 30')

expect(labels[4].querySelector('.design-component__label')).toBeNull()
expect(labels[4].textContent?.trim()).toBe('15 / 80')

expect(labels[5].textContent?.trim()).toBe('No Counter Shown')
      `
    },
    {
      id: 'FieldLabelLoadingSkeleton',
      name: {
        en: 'Loading & Skeleton States',
        ru: 'Состояния загрузки и скелетона'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Loading Boolean</div>
            <DesignComponent label="Syncing Data" loading/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Loading + Required + Counter</div>
            <DesignComponent
              label="Uploading"
              required
              loading
              counter-show
              :counter="24"
              :maxlength="60"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Loading Object Props</div>
            <DesignComponent
              label="Custom Progress"
              :loading="{ visible: true, circular: true, dense: true, inverse: false }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Skeleton State</div>
            <DesignComponent label="Skeleton Field" required is-skeleton/>
          </div>
        </div>
      `,
      play: `
const labels = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(labels.length).toBe(4)
await expect(labels[0].querySelector('[role="progressbar"], svg, .design-component__loading')).toBeTruthy()
await expect(labels[1].querySelector('.design-component__required')).toBeInTheDocument()
await expect(labels[2].textContent?.trim()).toContain('Custom Progress')
expect(labels[3].className).toContain('skeleton')
      `
    },
    {
      id: 'FieldLabelSlots',
      name: {
        en: 'Custom Label Slot',
        ru: 'Пользовательский слот #label'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Slot Only</div>
            <DesignComponent required counter-show :counter="10" :maxlength="50">
              <template #label>
                <span>Custom <strong>Label Slot</strong> Content</span>
              </template>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Label Prop + Slot</div>
            <DesignComponent label="Prefix: " required>
              <template #label>
                <span>Appended Slot</span>
              </template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const labels = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(labels.length).toBe(2)
await expect(labels[0].querySelector('strong')).toBeInTheDocument()
expect(labels[0].textContent?.trim()).toContain('Custom Label Slot Content')
expect(labels[1].textContent?.trim()).toContain('Prefix: Appended Slot')
      `
    },

    // =========================================================================
    // TIER 2: COMPREHENSIVE FEATURE & TEST STORIES
    // =========================================================================
    {
      id: 'FieldLabelTestReactivity',
      name: {
        en: 'Test: Reactive Toggling & Conditional Unmounting',
        ru: 'Тест: Реактивность и условное размонтирование'
      },
      setup: `
const labelText = ref('Profile Name')
const required = ref(true)
const loading = ref(false)
const isSkeleton = ref(false)
const counterShow = ref(true)
const counter = ref(18)

return {
  labelText,
  required,
  loading,
  isSkeleton,
  counterShow,
  counter
}
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="labelText = labelText ? '' : 'Profile Name'">Toggle Label</button>
            <button type="button" class="wiki-storybook-button" @click="required = !required">Toggle Required</button>
            <button type="button" class="wiki-storybook-button" @click="loading = !loading">Toggle Loading</button>
            <button type="button" class="wiki-storybook-button" @click="isSkeleton = !isSkeleton">Toggle Skeleton</button>
            <button type="button" class="wiki-storybook-button" @click="counterShow = !counterShow">Toggle Counter</button>
            <button type="button" class="wiki-storybook-button" @click="counter = counter + 10">Increment Counter</button>
          </div>
          <div class="reactive-host">
            <DesignComponent
              :label="labelText"
              :required="required"
              :loading="loading"
              :is-skeleton="isSkeleton"
              :counter-show="counterShow"
              :counter="counter"
              :maxlength="50"
            />
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const host = canvasElement.querySelector<HTMLElement>('.reactive-host')!

await step('Initial state renders label, required marker, and counter', async () => {
  const rootLabel = host.querySelector<HTMLElement>('.design-component')
  await expect(rootLabel).toBeInTheDocument()
  await expect(rootLabel?.querySelector('.design-component__required')).toBeInTheDocument()
  expect(rootLabel?.textContent?.trim()).toContain('18 / 50')
})

await step('Incrementing counter updates rendered counter text', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Increment Counter' }))
  expect(host.textContent?.trim()).toContain('28 / 50')
})

await step('Toggling required removes and restores the asterisk', async () => {
  const toggleRequiredButton = canvas.getByRole('button', { name: 'Toggle Required' })
  await userEvent.click(toggleRequiredButton)
  expect(host.querySelector('.design-component__required')).toBeNull()
  await userEvent.click(toggleRequiredButton)
  await expect(host.querySelector('.design-component__required')).toBeInTheDocument()
})

await step('Turning off label and counterShow before loading unmounts root completely', async () => {
  const toggleLabelButton = canvas.getByRole('button', { name: 'Toggle Label' })
  const toggleCounterButton = canvas.getByRole('button', { name: 'Toggle Counter' })
  await userEvent.click(toggleLabelButton)
  await userEvent.click(toggleCounterButton)
  expect(host.querySelector('.design-component')).toBeNull()
  await userEvent.click(toggleLabelButton)
  await userEvent.click(toggleCounterButton)
  await expect(host.querySelector('.design-component')).toBeInTheDocument()
})

await step('Toggling loading and skeleton applies and cleans up states', async () => {
  const toggleSkeletonButton = canvas.getByRole('button', { name: 'Toggle Skeleton' })
  await userEvent.click(toggleSkeletonButton)
  expect(host.querySelector('.design-component')?.className).toContain('skeleton')
  await userEvent.click(toggleSkeletonButton)
  expect(host.querySelector('.design-component')?.className).not.toContain('skeleton')

  const toggleLoadingButton = canvas.getByRole('button', { name: 'Toggle Loading' })
  await userEvent.click(toggleLoadingButton)
  await expect(host.querySelector('.design-component')).toBeInTheDocument()
  await userEvent.click(toggleLoadingButton)
  await expect(host.querySelector('.design-component')).toBeInTheDocument()
})
      `
    },
    {
      id: 'FieldLabelTestBoundaries',
      name: {
        en: 'Test: Boundaries, Multilingual, RTL & XSS Safety',
        ru: 'Тест: Граничные значения, RTL и безопасность XSS'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="empty-host">
            <DesignComponent label=""/>
          </div>
          <div class="multilingual-host">
            <DesignComponent
              label="Học tiếng Việt — Метка поля 🚀✨"
              required
              counter-show
              :counter="31"
              :maxlength="100"
            />
          </div>
          <div class="rtl-host" dir="rtl">
            <DesignComponent
              label="اسم المستخدم المطلوب"
              required
              counter-show
              :counter="12"
              :maxlength="50"
            />
          </div>
          <div class="xss-host">
            <DesignComponent label="<img src=x onerror=alert(1)>"/>
          </div>
        </div>
      `,
      play: `
await step('Empty label without counter or loading renders nothing in DOM', async () => {
  expect(canvasElement.querySelector('.empty-host .design-component')).toBeNull()
})

await step('Multilingual diacritics, Cyrillic, Emoji, and RTL render cleanly', async () => {
  const multi = canvasElement.querySelector<HTMLElement>('.multilingual-host .design-component')
  await expect(multi).toBeInTheDocument()
  expect(multi?.textContent?.trim()).toContain('Học tiếng Việt — Метка поля 🚀✨')

  const rtl = canvasElement.querySelector<HTMLElement>('.rtl-host .design-component')
  await expect(rtl).toBeInTheDocument()
  expect(window.getComputedStyle(rtl!).direction).toBe('rtl')
})

await step('HTML/XSS string renders strictly as escaped text', async () => {
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
<StorybookDescriptions componentName={'FieldLabel'} type={'fieldLabel'}/>
<Canvas of={Component.FieldLabelBasic}/>

<Canvas of={Component.FieldLabelCounter}/>

<Canvas of={Component.FieldLabelLoadingSkeleton}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>

<Canvas of={Component.FieldLabelSlots}/>
    `,
    events: '',
    expose: '',
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <FieldLabel label="Username" required v-bind="args"/>
</div>
    `,
    description: `
Subcomponent of the Field wrapper responsible for rendering semantic form field labels, required markers, character counters, loading progress indicators, and skeleton states.
Unmounts completely from DOM when label text, #label slot, loading indicator, and active counterShow counter are all absent.
Controlled via label, labelId, for, required, counterShow, counter, maxlength, maxlengthOnce, counterTemplate, counterId, fieldCounterAttrs, loading, isSkeleton, and #label slot. Primarily used within Input, Textarea, Select, and Field-based components.
    `,
    hide: true
  }
}
