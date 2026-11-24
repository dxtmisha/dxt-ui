import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for CropArea component properties
 *
 * Описания свойств компонента CropArea
 */
export const wikiDescriptionsCropArea: StorybookComponentsDescriptionItem = {
  name: 'CropArea',
  description: {
    en: 'An interactive component for defining rectangular crop and clipping boundaries over images and media',
    ru: 'Интерактивный компонент для определения границ кадрирования и обрезки поверх изображений и медиа'
  },
  possibilities: {
    en: [
      '8-directional boundary handles for precise edge and corner resizing',
      'central panning zone for moving the entire crop frame without resizing',
      'automatic CSS custom property updates (--design-component-sys-top/right/bottom/left)',
      'two-way reactive coordinate binding via v-model and v-model:value',
      'configurable minimum side dimensions via min prop',
      'selective direction disabling (disabledTop, disabledRight, disabledBottom, disabledLeft)',
      'readonly mode to hide the crop overlay completely',
      'programmatic control via expose methods (get, set, reset)'
    ],
    ru: [
      '8 направлений маркеров для точного изменения размера краев и углов',
      'центральная зона перемещения для сдвига всей рамки кадрирования без изменения размера',
      'автоматическое обновление пользовательских CSS-переменных (--design-component-sys-top/right/bottom/left)',
      'двусторонняя реактивная привязка координат через v-model и v-model:value',
      'настройка минимального размера сторон через свойство min',
      'выборочное отключение направлений (disabledTop, disabledRight, disabledBottom, disabledLeft)',
      'режим readonly для полного скрытия оверлея кадрирования',
      'программное управление через методы expose (get, set, reset)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { CropAreaCoordinator, CropAreaExpose } from \'@dxtmisha/constructor/CropArea\''
  ],
  render: `
    <div
      class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
    >
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
const cropAreaElement = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(cropAreaElement).toBeInTheDocument()
await expect(cropAreaElement).not.toHaveAttribute('aria-disabled')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'CropAreaVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      propsName: ['value', 'modelValue'],
      setup: `
      const coordinator = ref<CropAreaCoordinator>([15, 20, 15, 20])
      const setCenter = () => {
        coordinator.value = [25, 25, 25, 25]
      }
      const resetFull = () => {
        coordinator.value = [0, 0, 0, 0]
      }
      return {
        coordinator,
        setCenter,
        resetFull
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="crop-coords">Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button type="button" class="wiki-storybook-button" @click="setCenter">Center 50%</button>
            <button type="button" class="wiki-storybook-button" @click="resetFull">Reset</button>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
          >
            <DesignComponent v-model="coordinator"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const cropElement = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(cropElement).toBeInTheDocument()
await expect(canvasElement.querySelector('[data-testid="crop-coords"]')).toHaveTextContent('15')

await step('Update coordinates to Center 50%', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Center 50%' }))
  await expect(canvasElement.querySelector('[data-testid="crop-coords"]')).toHaveTextContent('25')
})

await step('Reset coordinates to full area', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
  await expect(canvasElement.querySelector('[data-testid="crop-coords"]')).toHaveTextContent('0')
})
      `
    },
    {
      id: 'CropAreaProgrammaticControl',
      name: {
        en: 'Programmatic control (get, set, reset)',
        ru: 'Программное управление (get, set, reset)'
      },
      setup: `
      const cropReference = ref<CropAreaExpose | null>(null)
      const reportedValue = ref<string>('initial')

      const applyPreset = () => {
        cropReference.value?.set([20, 15, 25, 10])
        reportedValue.value = JSON.stringify(cropReference.value?.get())
      }

      const resetPreset = () => {
        cropReference.value?.reset()
        reportedValue.value = JSON.stringify(cropReference.value?.get())
      }

      return {
        cropReference,
        reportedValue,
        applyPreset,
        resetPreset
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="applyPreset">Set [20, 15, 25, 10]</button>
            <button type="button" class="wiki-storybook-button" @click="resetPreset">Reset Expose</button>
            <span data-testid="crop-expose-output">{{ reportedValue }}</span>
          </div>
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
          >
            <DesignComponent ref="cropReference" :value="[10, 10, 10, 10]"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Call expose().set() and get()', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set [20, 15, 25, 10]' }))
  await expect(canvasElement.querySelector('[data-testid="crop-expose-output"]')).toHaveTextContent('[20,15,25,10]')
})

await step('Call expose().reset()', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Reset Expose' }))
  await expect(canvasElement.querySelector('[data-testid="crop-expose-output"]')).toHaveTextContent('[10,10,10,10]')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor-level QA only — NEVER in documentation)
    // =========================================================================
    {
      id: 'CropAreaTestStatesAndOptions',
      name: {
        en: 'Test: Disabled, readonly, edge locks, custom tag and min',
        ru: 'Тест: Отключение, readonly, блокировки сторон, кастомный tag и min'
      },
      propsName: ['disabled', 'readonly', 'disabledTop', 'disabledRight', 'disabledBottom', 'disabledLeft', 'tag', 'min'],
      template: `
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-dummy--color--blue"
            data-testid="crop-host-disabled"
          >
            <DesignComponent :value="[15, 15, 15, 15]" disabled/>
          </div>
          <div
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-dummy--color--blue"
            data-testid="crop-host-readonly"
          >
            <DesignComponent :value="[15, 15, 15, 15]" readonly/>
          </div>
          <div
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-dummy--color--blue"
            data-testid="crop-host-locks"
          >
            <DesignComponent
              :value="[10, 10, 10, 10]"
              :min="20"
              tag="section"
              disabled-top
              disabled-right
              disabled-bottom
              disabled-left
            />
          </div>
        </div>
      `,
      play: `
const disabledCrop = canvasElement.querySelector<HTMLElement>('[data-testid="crop-host-disabled"] .design-component')
const readonlyCrop = canvasElement.querySelector<HTMLElement>('[data-testid="crop-host-readonly"] .design-component')
const lockedCrop = canvasElement.querySelector<HTMLElement>('[data-testid="crop-host-locks"] .design-component')

await expect(disabledCrop).toBeInTheDocument()
await expect(disabledCrop).toHaveClass('design-component--disabled')
await expect(disabledCrop).toHaveAttribute('aria-disabled', 'true')

expect(readonlyCrop).toBeNull()

await expect(lockedCrop).toBeInTheDocument()
expect(lockedCrop?.tagName).toBe('SECTION')
await expect(lockedCrop).toHaveClass('design-component--disabledTop')
await expect(lockedCrop).toHaveClass('design-component--disabledRight')
await expect(lockedCrop).toHaveClass('design-component--disabledBottom')
await expect(lockedCrop).toHaveClass('design-component--disabledLeft')
await expect(lockedCrop).not.toHaveAttribute('aria-disabled')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'CropArea'} type={'cropArea'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.CropAreaVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'CropArea'} type={'event.resize'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'CropArea'} type={'expose'}/>
<Canvas of={Component.CropAreaProgrammaticControl}/>
    `
  },
  ai: {
    description: `
Overlay component for cropping and framing graphic content or rectangular regions.
Calculates coordinate insets in percentages ([top, right, bottom, left]) and dynamically sets CSS custom properties on the root element.
Supports 8-direction resizing (top, right, bottom, left, and 4 corner handles) along with dragging the central crop area.
Features boundary clamping, minimum dimension constraints (min prop), individual edge disable flags (disabledTop/Right/Bottom/Left), readonly hiding, and document selection locking during drag.
    `,
    hide: true
  }
}
