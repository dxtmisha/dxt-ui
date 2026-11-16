import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FieldCounter component properties
 *
 * Описания свойств компонента FieldCounter
 */
export const wikiDescriptionsFieldCounter: StorybookComponentsDescriptionItem = {
  name: 'FieldCounter',
  description: {
    en: 'Component for displaying entered character count and maximum limits with customizable templates and screen reader live announcements.',
    ru: 'Компонент для отображения счётчика введённых символов и максимального лимита с поддержкой шаблонов и доступных live-уведомлений для скринридеров.'
  },
  possibilities: {
    en: [
      'displaying character counter (`counter`) and optional limit (`maxlength`) as `counter / maxlength` or `counter`',
      'hiding completely from the DOM when both `counter` and `maxlength` are undefined, while rendering `0` accurately',
      'custom formatting templates (`template`) with `[c]` and `[m]` placeholders and inline HTML support',
      'dynamic `aria-live="polite"` announcements activated once remaining characters enter `maxlengthOnce` (default 10% of `maxlength`)',
      'customizable accessibility texts (`textCharacterRemaining` with `[left]` and `textCharacterLimit`) and explicit `id` for `aria-describedby` linking'
    ],
    ru: [
      'отображение счётчика символов (`counter`) и опционального лимита (`maxlength`) в формате `counter / maxlength` или `counter`',
      'полное исключение из DOM при отсутствии `counter` и `maxlength`, с корректным рендером нулевых значений (`0`)',
      'пользовательские шаблоны (`template`) с плейсхолдерами `[c]` и `[m]` и поддержкой HTML-разметки',
      'динамические объявления `aria-live="polite"` при входе остатка символов в порог `maxlengthOnce` (по умолчанию 10% от `maxlength`)',
      'настраиваемые тексты доступности (`textCharacterRemaining` с `[left]` и `textCharacterLimit`) и явный `id` для связи через `aria-describedby`'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
expect(component?.tagName).toBe('SPAN')
expect(component?.textContent?.trim().length).toBeGreaterThan(0)
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body)
    // =========================================================================
    {
      id: 'FieldCounterBasic',
      name: {
        en: 'Basic Display & Modes',
        ru: 'Базовое отображение и режимы'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter & Limit (number)</div>
            <DesignComponent :counter="42" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter & Limit (string)</div>
            <DesignComponent counter="75" maxlength="200"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter Only</div>
            <DesignComponent :counter="42"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Zero Counter</div>
            <DesignComponent :counter="0" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Maxlength Only</div>
            <DesignComponent :maxlength="50"/>
          </div>
        </div>
      `,
      play: `
const counters = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(counters.length).toBe(5)
expect(counters[0].textContent?.trim()).toBe('42 / 100')
expect(counters[1].textContent?.trim()).toBe('75 / 200')
expect(counters[2].textContent?.trim()).toBe('42')
expect(counters[3].textContent?.trim()).toBe('0 / 100')
expect(counters[4].textContent?.trim()).toBe('0 / 50')
      `
    },
    {
      id: 'FieldCounterTemplate',
      name: {
        en: 'Custom Templates',
        ru: 'Пользовательский шаблон'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default template</div>
            <DesignComponent :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Word separator: "[c] of [m]"</div>
            <DesignComponent :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Compact: "[c]/[m]"</div>
            <DesignComponent :counter="42" :maxlength="100" template="[c]/[m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HTML template</div>
            <DesignComponent :counter="75" :maxlength="150" template="<b>[c]</b> / <i>[m]</i> chars"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter only template</div>
            <DesignComponent :counter="42" template="Entered: [c] chars"/>
          </div>
        </div>
      `,
      play: `
const counters = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(counters.length).toBe(5)
expect(counters[0].textContent?.trim()).toBe('75 / 150')
expect(counters[1].textContent?.trim()).toBe('Characters: 75 of 150')
expect(counters[2].textContent?.trim()).toBe('42/100')
expect(counters[3].textContent?.trim()).toBe('75 / 150 chars')
await expect(counters[3].querySelector('b')).toBeInTheDocument()
await expect(counters[3].querySelector('i')).toBeInTheDocument()
expect(counters[4].textContent?.trim()).toBe('Entered: 42 chars')
      `
    },
    {
      id: 'FieldCounterAccessibility',
      name: {
        en: 'Thresholds & Accessibility',
        ru: 'Пороги и доступность (ARIA)'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default 10% Threshold (92 / 100)</div>
            <DesignComponent :counter="92" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom Remaining Text (maxlengthOnce="15")</div>
            <DesignComponent
              id="custom-counter-id"
              :counter="88"
              :maxlength="100"
              :maxlength-once="15"
              text-character-remaining="Only [left] chars left"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Limit Exceeded Text</div>
            <DesignComponent
              :counter="105"
              :maxlength="100"
              text-character-limit="Character limit reached!"
            />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.wiki-storybook-item')
await expect(items.length).toBe(3)

const customCounter = canvasElement.querySelector<HTMLElement>('#custom-counter-id')
await expect(customCounter).toBeInTheDocument()
expect(customCounter?.textContent?.trim()).toBe('88 / 100')

const ariaRegions = canvasElement.querySelectorAll<HTMLElement>('.design-component__aria')
await expect(ariaRegions.length).toBe(3)
await expect(ariaRegions[0]).toHaveAttribute('aria-live', 'polite')
expect(ariaRegions[0].querySelector('[aria-label]')?.getAttribute('aria-label')).toBe('Remaining 8 characters')
expect(ariaRegions[1].querySelector('[aria-label]')?.getAttribute('aria-label')).toBe('Only 12 chars left')
expect(ariaRegions[2].querySelector('[aria-label]')?.getAttribute('aria-label')).toBe('Character limit reached!')
      `
    },

    // =========================================================================
    // TIER 2: COMPREHENSIVE FEATURE & TEST STORIES
    // =========================================================================
    {
      id: 'FieldCounterTestReactivity',
      name: {
        en: 'Test: Reactive Thresholds & ARIA Live Transitions',
        ru: 'Тест: Реактивность счётчика и переходы ARIA'
      },
      setup: `
const count = ref(40)
const limit = ref(100)
const threshold = ref(15)
return { count, limit, threshold }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            id="reactive-counter"
            :counter="count"
            :maxlength="limit"
            :maxlength-once="threshold"
            template="Chars: [c] of [m]"
            text-character-remaining="[left] chars remaining"
            text-character-limit="Limit exceeded!"
          />
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="count += 10">+10</button>
            <button type="button" class="wiki-storybook-button" @click="count = 90">Near Limit</button>
            <button type="button" class="wiki-storybook-button" @click="count = 100">At Limit</button>
            <button type="button" class="wiki-storybook-button" @click="count = 105">Exceed</button>
            <button type="button" class="wiki-storybook-button" @click="count = 0">Reset</button>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const counter = canvasElement.querySelector<HTMLElement>('#reactive-counter')
await expect(counter).toBeInTheDocument()

await step('Initial state in safe range has no active ARIA region', async () => {
  expect(counter?.textContent?.trim()).toBe('Chars: 40 of 100')
  expect(canvasElement.querySelector('.design-component__aria')).toBeNull()
})

await step('Increment stays in safe range', async () => {
  await userEvent.click(canvas.getByRole('button', { name: '+10' }))
  expect(counter?.textContent?.trim()).toBe('Chars: 50 of 100')
  expect(canvasElement.querySelector('.design-component__aria')).toBeNull()
})

await step('Crossing maxlengthOnce mounts remaining ARIA live message', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Near Limit' }))
  expect(counter?.textContent?.trim()).toBe('Chars: 90 of 100')
  const ariaLabel = canvasElement.querySelector('.design-component__aria [aria-label]')?.getAttribute('aria-label')
  expect(ariaLabel).toBe('10 chars remaining')
})

await step('Reaching and exceeding limit announces limit text', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'At Limit' }))
  expect(counter?.textContent?.trim()).toBe('Chars: 100 of 100')
  expect(canvasElement.querySelector('.design-component__aria [aria-label]')?.getAttribute('aria-label')).toBe('Limit exceeded!')

  await userEvent.click(canvas.getByRole('button', { name: 'Exceed' }))
  expect(counter?.textContent?.trim()).toBe('Chars: 105 of 100')
  expect(canvasElement.querySelector('.design-component__aria [aria-label]')?.getAttribute('aria-label')).toBe('Limit exceeded!')
})

await step('Reset clears ARIA region and displays zero counter', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
  expect(counter?.textContent?.trim()).toBe('Chars: 0 of 100')
  expect(canvasElement.querySelector('.design-component__aria')).toBeNull()
})
      `
    },
    {
      id: 'FieldCounterTestBoundaries',
      name: {
        en: 'Test: Conditional Mounting & Edge Props',
        ru: 'Тест: Условное монтирование и граничные пропы'
      },
      setup: `
const enabled = ref(false)
return { enabled }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="conditional-host">
            <DesignComponent
              :counter="enabled ? 5 : undefined"
              :maxlength="enabled ? 20 : undefined"
            />
          </div>
          <div class="edge-host">
            <DesignComponent counter="0"/>
            <DesignComponent :counter="75" maxlength="100" maxlength-once="25"/>
            <DesignComponent :counter="90" :maxlength="100" :maxlength-once="0"/>
          </div>
          <button type="button" class="wiki-storybook-button" @click="enabled = !enabled">Toggle Counter</button>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Initially unmounted when counter and maxlength are undefined', async () => {
  expect(canvasElement.querySelector('.conditional-host .design-component')).toBeNull()
})

await step('Toggling props mounts and unmounts the counter cleanly', async () => {
  const toggleBtn = canvas.getByRole('button', { name: 'Toggle Counter' })
  await userEvent.click(toggleBtn)
  const mounted = canvasElement.querySelector<HTMLElement>('.conditional-host .design-component')
  await expect(mounted).toBeInTheDocument()
  expect(mounted?.textContent?.trim()).toBe('5 / 20')

  await userEvent.click(toggleBtn)
  expect(canvasElement.querySelector('.conditional-host .design-component')).toBeNull()
})

await step('String zero and string/zero maxlengthOnce edge cases', async () => {
  const edges = canvasElement.querySelectorAll<HTMLElement>('.edge-host .design-component')
  await expect(edges.length).toBe(3)
  expect(edges[0].textContent?.trim()).toBe('0')
  expect(edges[1].textContent?.trim()).toBe('75 / 100')
  expect(edges[2].textContent?.trim()).toBe('90 / 100')

  const ariaRegions = canvasElement.querySelectorAll<HTMLElement>('.edge-host .design-component__aria')
  await expect(ariaRegions.length).toBe(1)
  expect(ariaRegions[0].querySelector('[aria-label]')?.getAttribute('aria-label')).toBe('Remaining 25 characters')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldCounter'} type={'fieldCounter'}/>
<Canvas of={Component.FieldCounterBasic}/>

<StorybookDescriptions componentName={'FieldCounter'} type={'templates'}/>
<Canvas of={Component.FieldCounterTemplate}/>

<StorybookDescriptions componentName={'FieldCounter'} type={'accessibility'}/>
<Canvas of={Component.FieldCounterAccessibility}/>
    `,
    events: '',
    expose: '',
    slots: ''
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <FieldCounter :counter="42" :maxlength="100" v-bind="args"/>
</div>
    `,
    description: `
Character count indicator component displaying current length (counter) and optional limit (maxlength) with customizable templates (template using [c] and [m] placeholders, supporting HTML) and automatic screen reader announcements.
Hides completely when both counter and maxlength are omitted, renders 0 cleanly, and dynamically mounts a polite aria-live announcement once remaining characters reach maxlengthOnce (10% of maxlength by default) using textCharacterRemaining ([left]) or textCharacterLimit.
Used inside form fields and text inputs or standalone alongside editable controls.
    `
  }
}
