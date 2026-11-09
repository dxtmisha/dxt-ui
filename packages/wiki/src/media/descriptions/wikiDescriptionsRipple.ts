import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Ripple component properties and stories
 *
 * Описания свойств и историй компонента Ripple
 */
export const wikiDescriptionsRipple: StorybookComponentsDescriptionItem = {
  name: 'Ripple',
  description: {
    en: 'Component for creating an animated ripple wave effect on user touch and click interactions.',
    ru: 'Компонент для создания анимированного эффекта волны при взаимодействии пользователя с элементом.'
  },
  possibilities: {
    en: [
      'creates fluid expanding circular ripple waves on user clicks',
      'automatic coordinate calculation and CSS variable mapping (`--design-component-sys-x`, `--design-component-sys-y`)',
      'programmatic wave generation via exposed `add()` and `addCenter()` methods',
      'safe state control via `disabled` prop ignoring clicks when inactive',
      'automated lifecycle management removing wave elements from DOM upon transition end',
      'decorative accessibility compliance with automatic `aria-hidden="true"`'
    ],
    ru: [
      'создает плавные расширяющиеся круговые волны при кликах пользователя',
      'автоматический расчет координат и привязка CSS-переменных (`--design-component-sys-x`, `--design-component-sys-y`)',
      'программный запуск волны через открытые методы `add()` и `addCenter()`',
      'надежный контроль состояния через свойство `disabled` с игнорированием кликов в неактивном состоянии',
      'автоматическое управление жизненным циклом с удалением элементов волны из DOM по окончании перехода',
      'соответствие стандартам доступности с автоматическим атрибутом `aria-hidden="true"`'
    ]
  },
  render: `
    <div
      class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
      style="position: relative; overflow: hidden; min-height: 120px; cursor: pointer; user-select: none;"
    >
      <div class="wiki-storybook-item__label">Interactive Ripple</div>
      <span>Click anywhere inside this card</span>
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
const ripple = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(ripple).toBeInTheDocument()
await expect(ripple).toHaveAttribute('aria-hidden', 'true')

if (ripple) {
  const event = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
  Object.defineProperty(event, 'isPrimary', { value: true })
  Object.defineProperty(event, 'offsetX', { value: 60 })
  Object.defineProperty(event, 'offsetY', { value: 60 })
  ripple.dispatchEvent(event)

  await waitFor(() => {
    const wave = ripple.querySelector<HTMLElement>('.design-component__item')
    expect(wave).toBeInTheDocument()
    expect(wave?.style.getPropertyValue('--design-component-sys-x')).toBe('60px')
    expect(wave?.style.getPropertyValue('--design-component-sys-y')).toBe('60px')
  })
}
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body / expose)
    // =========================================================================
    {
      id: 'RippleBasic',
      name: {
        en: 'Interactive ripple wave',
        ru: 'Интерактивный эффект волны'
      },
      template: `
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; cursor: pointer; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Default</div>
            <span>Click anywhere to produce an animated wave</span>
            <DesignComponent/>
          </div>
        </div>
      `,
      play: `
const ripple = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(ripple).toBeInTheDocument()
await expect(ripple).toHaveAttribute('aria-hidden', 'true')

if (ripple) {
  const event = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
  Object.defineProperty(event, 'isPrimary', { value: true })
  Object.defineProperty(event, 'offsetX', { value: 80 })
  Object.defineProperty(event, 'offsetY', { value: 50 })
  ripple.dispatchEvent(event)

  await waitFor(() => {
    const wave = ripple.querySelector<HTMLElement>('.design-component__item')
    expect(wave).toBeInTheDocument()
    expect(wave?.style.getPropertyValue('--design-component-sys-x')).toBe('80px')
    expect(wave?.style.getPropertyValue('--design-component-sys-y')).toBe('50px')
  })
}
      `
    },
    {
      id: 'RippleDisabled',
      name: {
        en: 'Disabled state',
        ru: 'Отключенное состояние'
      },
      propsName: ['disabled'],
      template: `
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; cursor: pointer; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Enabled</div>
            <span>Active wave effect</span>
            <DesignComponent :disabled="false"/>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; cursor: not-allowed; user-select: none; opacity: 0.6;"
          >
            <div class="wiki-storybook-item__label">Disabled</div>
            <span>Clicks produce no waves</span>
            <DesignComponent :disabled="true"/>
          </div>
        </div>
      `,
      play: `
const ripples = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(ripples.length).toBe(2)

const enabledRipple = ripples[0]
const disabledRipple = ripples[1]

const eventEnabled = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
Object.defineProperty(eventEnabled, 'isPrimary', { value: true })
Object.defineProperty(eventEnabled, 'offsetX', { value: 40 })
Object.defineProperty(eventEnabled, 'offsetY', { value: 40 })
enabledRipple.dispatchEvent(eventEnabled)

await waitFor(() => {
  expect(enabledRipple.querySelector('.design-component__item')).toBeInTheDocument()
})

const eventDisabled = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
Object.defineProperty(eventDisabled, 'isPrimary', { value: true })
Object.defineProperty(eventDisabled, 'offsetX', { value: 40 })
Object.defineProperty(eventDisabled, 'offsetY', { value: 40 })
disabledRipple.dispatchEvent(eventDisabled)

expect(disabledRipple.querySelector('.design-component__item')).not.toBeInTheDocument()
      `
    },
    {
      id: 'RippleExpose',
      name: {
        en: 'Programmatic control (Expose API)',
        ru: 'Программное управление (Expose API)'
      },
      setup: `
      const rippleRef = ref<{ add: (coordinator?: { x: number, y: number }) => void, addCenter: () => void } | null>(null)
      const lastAction = ref('None')

      const triggerCenter = () => {
        rippleRef.value?.addCenter()
        lastAction.value = 'addCenter()'
      }

      const triggerCoordinates = () => {
        rippleRef.value?.add({ x: 30, y: 30 })
        lastAction.value = 'add({ x: 30, y: 30 })'
      }

      return {
        rippleRef,
        lastAction,
        triggerCenter,
        triggerCoordinates
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="triggerCenter">Add at Center</button>
            <button class="wiki-storybook-button" @click="triggerCoordinates">Add at (30, 30)</button>
            <span data-testid="expose-status">Action: {{ lastAction }}</span>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Exposed Target</div>
            <span>Target container for programmatic waves</span>
            <DesignComponent ref="rippleRef"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const addCenterButton = canvas.getByRole('button', { name: 'Add at Center' })
const addCoordinatesButton = canvas.getByRole('button', { name: 'Add at (30, 30)' })
const ripple = canvasElement.querySelector<HTMLElement>('.design-component')

await expect(ripple).toBeInTheDocument()

await step('Trigger center wave programmatically', async () => {
  await userEvent.click(addCenterButton)
  await waitFor(() => {
    const waves = ripple?.querySelectorAll('.design-component__item')
    expect(waves?.length).toBeGreaterThanOrEqual(1)
  })
})

await step('Trigger coordinate wave programmatically', async () => {
  await userEvent.click(addCoordinatesButton)
  await waitFor(() => {
    const waves = ripple?.querySelectorAll<HTMLElement>('.design-component__item')
    const lastWave = waves?.[waves.length - 1]
    expect(lastWave?.style.getPropertyValue('--design-component-sys-x')).toBe('30px')
    expect(lastWave?.style.getPropertyValue('--design-component-sys-y')).toBe('30px')
  })
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with RippleTest... and "Test: " / "Тест: ")
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'RippleTestEventFiltering',
      name: {
        en: 'Test: Pointer button and primary filtering',
        ru: 'Тест: Фильтрация кнопок указателя и основного указателя'
      },
      template: `
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Pointer Filter Test</div>
            <span>Testing button and isPrimary filters</span>
            <DesignComponent data-testid="filter-ripple"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const ripple = canvas.getByTestId('filter-ripple')

const middleClick = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 1 })
Object.defineProperty(middleClick, 'isPrimary', { value: true })
ripple.dispatchEvent(middleClick)
expect(ripple.querySelectorAll('.design-component__item').length).toBe(0)

const rightClick = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 2 })
Object.defineProperty(rightClick, 'isPrimary', { value: true })
ripple.dispatchEvent(rightClick)
expect(ripple.querySelectorAll('.design-component__item').length).toBe(0)

const nonPrimaryClick = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
Object.defineProperty(nonPrimaryClick, 'isPrimary', { value: false })
ripple.dispatchEvent(nonPrimaryClick)
expect(ripple.querySelectorAll('.design-component__item').length).toBe(0)

const validClick = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
Object.defineProperty(validClick, 'isPrimary', { value: true })
ripple.dispatchEvent(validClick)
expect(ripple.querySelectorAll('.design-component__item').length).toBe(1)
      `
    },
    {
      id: 'RippleTestAnimationLifecycle',
      name: {
        en: 'Test: Animation and transition lifecycle removal',
        ru: 'Тест: Жизненный цикл анимации и удаление из DOM'
      },
      template: `
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Lifecycle Test</div>
            <span>Testing animationend and transitionend</span>
            <DesignComponent data-testid="lifecycle-ripple"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const ripple = canvas.getByTestId('lifecycle-ripple')

const clickEvent = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
Object.defineProperty(clickEvent, 'isPrimary', { value: true })
Object.defineProperty(clickEvent, 'offsetX', { value: 50 })
Object.defineProperty(clickEvent, 'offsetY', { value: 50 })
ripple.dispatchEvent(clickEvent)

const wave = ripple.querySelector<HTMLElement>('.design-component__item')
await expect(wave).toBeInTheDocument()

wave?.onanimationend?.(new Event('animationend') as unknown as AnimationEvent)
await expect(wave).toHaveClass('design-component--end')

wave?.ontransitionend?.(new Event('transitionend') as unknown as TransitionEvent)
await expect(ripple.querySelector('.design-component__item')).not.toBeInTheDocument()
      `
    },
    {
      id: 'RippleTestDynamicDisabled',
      name: {
        en: 'Test: Dynamic disabled toggling',
        ru: 'Тест: Динамическое переключение disabled'
      },
      setup: `
      const isDisabled = ref(false)
      const toggleDisabled = () => {
        isDisabled.value = !isDisabled.value
      }

      return {
        isDisabled,
        toggleDisabled
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="toggleDisabled">
              {{ isDisabled ? 'Enable' : 'Disable' }}
            </button>
            <span data-testid="disabled-status">Disabled: {{ isDisabled }}</span>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Dynamic Disabled Test</div>
            <DesignComponent data-testid="dynamic-ripple" :disabled="isDisabled"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const toggleButton = canvas.getByRole('button')
const ripple = canvas.getByTestId('dynamic-ripple')

await step('Enabled by default - adds wave on click', async () => {
  const event1 = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
  Object.defineProperty(event1, 'isPrimary', { value: true })
  ripple.dispatchEvent(event1)
  expect(ripple.querySelectorAll('.design-component__item').length).toBe(1)
})

await step('Disable component - clicks are ignored', async () => {
  await userEvent.click(toggleButton)
  const event2 = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
  Object.defineProperty(event2, 'isPrimary', { value: true })
  ripple.dispatchEvent(event2)
  expect(ripple.querySelectorAll('.design-component__item').length).toBe(1)
})

await step('Re-enable component - clicks work again', async () => {
  await userEvent.click(toggleButton)
  const event3 = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
  Object.defineProperty(event3, 'isPrimary', { value: true })
  ripple.dispatchEvent(event3)
  expect(ripple.querySelectorAll('.design-component__item').length).toBe(2)
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Ripple'} type={'ripple'}/>
<Canvas of={Component.RippleBasic}/>

<StorybookDescriptions componentName={'Status'} type={'disabled'}/>
<Canvas of={Component.RippleDisabled}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Ripple'} type={'expose.add'}/>
<StorybookDescriptions componentName={'Ripple'} type={'expose.addCenter'}/>
<Canvas of={Component.RippleExpose}/>
    `
  },
  ai: {
    render: `
<div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 48px;"
>
  <Ripple v-bind="args"/>
</div>
    `,
    description: `
Low-level decorative utility that provides Material Design-style visual feedback on user interactions. Automatically generates a dynamic wave effect at the exact coordinates of a pointerdown event within its parent container.
Features automated animation lifecycle management, including expansion, fade-out, and DOM cleanup. Inherits visual styling directly from the host element via currentColor and requires the parent to have relative positioning and hidden overflow to function correctly.
Primarily integrated within interactive components like Buttons, ListItems, and Cards; should generally not be manually implemented. Controlled via the disabled prop, serving as a subtle but high-polish affordance for touch and click actions.
    `,
    hide: true
  }
}
