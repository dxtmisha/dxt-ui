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
      'automatic CSS custom property updates (--sys-crop-top/right/bottom/left)',
      'two-way reactive coordinate binding via v-model:value',
      'configurable minimum side dimensions via min prop',
      'selective direction disabling (disabledTop, disabledRight, disabledBottom, disabledLeft)',
      'automatic text selection locking on document during drag'
    ],
    ru: [
      '8 направлений маркеров для точного изменения размера краев и углов',
      'центральная зона перемещения для сдвига всей рамки кадрирования без изменения размера',
      'автоматическое обновление пользовательских CSS-переменных (--sys-crop-top/right/bottom/left)',
      'двусторонняя реактивная привязка координат через v-model:value',
      'настройка минимального размера сторон через свойство min',
      'выборочное отключение направлений (disabledTop, disabledRight, disabledBottom, disabledLeft)',
      'автоматическая блокировка выделения текста на документе во время перетаскивания'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <div
      class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-dummy--color--blue"
    >
      <DesignComponent v-bind="args"/>
    </div>
  `,
  stories: [
    {
      id: 'CropAreaVModel',
      name: {
        en: 'v-model',
        ru: 'v-model'
      },
      setup: `
      return {
        coordinator: ref([15, 20, 15, 20])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-dummy--color--blue"
          >
            <DesignComponent v-model="coordinator"/>
          </div>
        </div>
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
    `
  },
  ai: {
    description: `
Overlay component for cropping and framing graphic content or rectangular regions.
Calculates coordinate insets in percentages ([top, right, bottom, left]) and dynamically sets CSS custom properties on the root element.
Supports 8-direction resizing (top, right, bottom, left, and 4 corner handles) along with dragging the central crop area.
Features boundary clamping, minimum dimension constraints (min prop), individual edge disable flags (disabledTop/Right/Bottom/Left), and document selection locking during drag.
    `,
    hide: true
  }
}
