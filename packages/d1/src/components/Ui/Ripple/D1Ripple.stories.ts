import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Ripple from './D1Ripple.vue'
import { RippleWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Ripple',
  component: D1Ripple,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: RippleWikiStorybook.getDescription()
      }
    }
  },
  argTypes: RippleWikiStorybook.getWiki(),
  args: RippleWikiStorybook.getValues()
} satisfies Meta<typeof D1Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Ripple },
    setup: () => ({ args }),
    template: `
      <div
      class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
      style="position: relative; overflow: hidden; min-height: 120px; cursor: pointer; user-select: none;"
    >
      <div class="wiki-storybook-item__label">Interactive Ripple</div>
      <span>Click anywhere inside this card</span>
      <D1Ripple v-bind="args"/>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const ripple = canvasElement.querySelector<HTMLElement>('.d1-ripple')
    await expect(ripple).toBeInTheDocument()
    await expect(ripple).toHaveAttribute('aria-hidden', 'true')

    if (ripple) {
      const event = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
      Object.defineProperty(event, 'isPrimary', { value: true })
      Object.defineProperty(event, 'offsetX', { value: 60 })
      Object.defineProperty(event, 'offsetY', { value: 60 })
      ripple.dispatchEvent(event)

      await waitFor(() => {
        const wave = ripple.querySelector<HTMLElement>('.d1-ripple__item')
        expect(wave).toBeInTheDocument()
        expect(wave?.style.getPropertyValue('--d1-ripple-sys-x')).toBe('60px')
        expect(wave?.style.getPropertyValue('--d1-ripple-sys-y')).toBe('60px')
      })
    }
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const RippleBasic: Story = {
  name: 'Интерактивный эффект волны',
  render: () => ({
    components: { D1Ripple },
    template: `
        
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; cursor: pointer; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Default</div>
            <span>Click anywhere to produce an animated wave</span>
            <D1Ripple/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const ripple = canvasElement.querySelector<HTMLElement>('.d1-ripple')
    await expect(ripple).toBeInTheDocument()
    await expect(ripple).toHaveAttribute('aria-hidden', 'true')

    if (ripple) {
      const event = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
      Object.defineProperty(event, 'isPrimary', { value: true })
      Object.defineProperty(event, 'offsetX', { value: 80 })
      Object.defineProperty(event, 'offsetY', { value: 50 })
      ripple.dispatchEvent(event)

      await waitFor(() => {
        const wave = ripple.querySelector<HTMLElement>('.d1-ripple__item')
        expect(wave).toBeInTheDocument()
        expect(wave?.style.getPropertyValue('--d1-ripple-sys-x')).toBe('80px')
        expect(wave?.style.getPropertyValue('--d1-ripple-sys-y')).toBe('50px')
      })
    }
  }
}
export const RippleDisabled: Story = {
  name: 'Отключенное состояние',
  render: () => ({
    components: { D1Ripple },
    template: `
        
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; cursor: pointer; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Enabled</div>
            <span>Active wave effect</span>
            <D1Ripple :disabled="false"/>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; cursor: not-allowed; user-select: none; opacity: 0.6;"
          >
            <div class="wiki-storybook-item__label">Disabled</div>
            <span>Clicks produce no waves</span>
            <D1Ripple :disabled="true"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const ripples = canvasElement.querySelectorAll<HTMLElement>('.d1-ripple')
    await expect(ripples.length).toBe(2)

    const enabledRipple = ripples[0]
    const disabledRipple = ripples[1]

    const eventEnabled = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
    Object.defineProperty(eventEnabled, 'isPrimary', { value: true })
    Object.defineProperty(eventEnabled, 'offsetX', { value: 40 })
    Object.defineProperty(eventEnabled, 'offsetY', { value: 40 })
    enabledRipple.dispatchEvent(eventEnabled)

    await waitFor(() => {
      expect(enabledRipple.querySelector('.d1-ripple__item')).toBeInTheDocument()
    })

    const eventDisabled = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
    Object.defineProperty(eventDisabled, 'isPrimary', { value: true })
    Object.defineProperty(eventDisabled, 'offsetX', { value: 40 })
    Object.defineProperty(eventDisabled, 'offsetY', { value: 40 })
    disabledRipple.dispatchEvent(eventDisabled)

    expect(disabledRipple.querySelector('.d1-ripple__item')).not.toBeInTheDocument()
  }
}
export const RippleExpose: Story = {
  name: 'Программное управление (Expose API)',
  render: () => ({
    components: { D1Ripple },
    setup() {
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
    },
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
            <D1Ripple ref="rippleRef"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const addCenterButton = canvas.getByRole('button', { name: 'Add at Center' })
    const addCoordinatesButton = canvas.getByRole('button', { name: 'Add at (30, 30)' })
    const ripple = canvasElement.querySelector<HTMLElement>('.d1-ripple')

    await expect(ripple).toBeInTheDocument()

    await step('Trigger center wave programmatically', async () => {
      await userEvent.click(addCenterButton)
      await waitFor(() => {
        const waves = ripple?.querySelectorAll('.d1-ripple__item')
        expect(waves?.length).toBeGreaterThanOrEqual(1)
      })
    })

    await step('Trigger coordinate wave programmatically', async () => {
      await userEvent.click(addCoordinatesButton)
      await waitFor(() => {
        const waves = ripple?.querySelectorAll<HTMLElement>('.d1-ripple__item')
        const lastWave = waves?.[waves.length - 1]
        expect(lastWave?.style.getPropertyValue('--d1-ripple-sys-x')).toBe('30px')
        expect(lastWave?.style.getPropertyValue('--d1-ripple-sys-y')).toBe('30px')
      })
    })
  }
}
export const RippleTestEventFiltering: Story = {
  name: 'Тест: Фильтрация кнопок указателя и основного указателя',
  render: () => ({
    components: { D1Ripple },
    template: `
        
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Pointer Filter Test</div>
            <span>Testing button and isPrimary filters</span>
            <D1Ripple data-testid="filter-ripple"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ripple = canvas.getByTestId('filter-ripple')

    const middleClick = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 1 })
    Object.defineProperty(middleClick, 'isPrimary', { value: true })
    ripple.dispatchEvent(middleClick)
    expect(ripple.querySelectorAll('.d1-ripple__item').length).toBe(0)

    const rightClick = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 2 })
    Object.defineProperty(rightClick, 'isPrimary', { value: true })
    ripple.dispatchEvent(rightClick)
    expect(ripple.querySelectorAll('.d1-ripple__item').length).toBe(0)

    const nonPrimaryClick = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
    Object.defineProperty(nonPrimaryClick, 'isPrimary', { value: false })
    ripple.dispatchEvent(nonPrimaryClick)
    expect(ripple.querySelectorAll('.d1-ripple__item').length).toBe(0)

    const validClick = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
    Object.defineProperty(validClick, 'isPrimary', { value: true })
    ripple.dispatchEvent(validClick)
    expect(ripple.querySelectorAll('.d1-ripple__item').length).toBe(1)
  }
}
export const RippleTestAnimationLifecycle: Story = {
  name: 'Тест: Жизненный цикл анимации и удаление из DOM',
  render: () => ({
    components: { D1Ripple },
    template: `
        
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center"
            style="position: relative; overflow: hidden; min-height: 120px; user-select: none;"
          >
            <div class="wiki-storybook-item__label">Lifecycle Test</div>
            <span>Testing animationend and transitionend</span>
            <D1Ripple data-testid="lifecycle-ripple"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ripple = canvas.getByTestId('lifecycle-ripple')

    const clickEvent = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
    Object.defineProperty(clickEvent, 'isPrimary', { value: true })
    Object.defineProperty(clickEvent, 'offsetX', { value: 50 })
    Object.defineProperty(clickEvent, 'offsetY', { value: 50 })
    ripple.dispatchEvent(clickEvent)

    const wave = ripple.querySelector<HTMLElement>('.d1-ripple__item')
    await expect(wave).toBeInTheDocument()

    wave?.onanimationend?.(new Event('animationend') as unknown as AnimationEvent)
    await expect(wave).toHaveClass('d1-ripple--end')

    wave?.ontransitionend?.(new Event('transitionend') as unknown as TransitionEvent)
    await expect(ripple.querySelector('.d1-ripple__item')).not.toBeInTheDocument()
  }
}
export const RippleTestDynamicDisabled: Story = {
  name: 'Тест: Динамическое переключение disabled',
  render: () => ({
    components: { D1Ripple },
    setup() {
      const isDisabled = ref(false)
      const toggleDisabled = () => {
        isDisabled.value = !isDisabled.value
      }

      return {
        isDisabled,
        toggleDisabled
      }
    },
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
            <D1Ripple data-testid="dynamic-ripple" :disabled="isDisabled"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const toggleButton = canvas.getByRole('button')
    const ripple = canvas.getByTestId('dynamic-ripple')

    await step('Enabled by default - adds wave on click', async () => {
      const event1 = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
      Object.defineProperty(event1, 'isPrimary', { value: true })
      ripple.dispatchEvent(event1)
      expect(ripple.querySelectorAll('.d1-ripple__item').length).toBe(1)
    })

    await step('Disable component - clicks are ignored', async () => {
      await userEvent.click(toggleButton)
      const event2 = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
      Object.defineProperty(event2, 'isPrimary', { value: true })
      ripple.dispatchEvent(event2)
      expect(ripple.querySelectorAll('.d1-ripple__item').length).toBe(1)
    })

    await step('Re-enable component - clicks work again', async () => {
      await userEvent.click(toggleButton)
      const event3 = new MouseEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 })
      Object.defineProperty(event3, 'isPrimary', { value: true })
      ripple.dispatchEvent(event3)
      expect(ripple.querySelectorAll('.d1-ripple__item').length).toBe(2)
    })
  }
}
// :story-items [!] System label / Системная метка
