import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ImageCrop component properties
 *
 * Описания свойств компонента ImageCrop
 */
export const wikiDescriptionsImageCrop: StorybookComponentsDescriptionItem = {
  name: 'ImageCrop',
  description: {
    en: 'Interactive image cropping component combining an image display with an overlay crop area',
    ru: 'Интерактивный компонент кадрирования изображений, объединяющий отображение картинки и накладываемую область обрезки'
  },
  possibilities: {
    en: [
      'seamless integration of Image and CropArea components',
      'two-way reactive crop coordinate synchronization via v-model',
      '8-directional boundary handles for precise edge and corner resizing',
      'central panning zone for repositioning the crop frame without resizing',
      'support for multiple image source formats (URL, File, icon)',
      'support for disabled and readonly interaction states',
      'accessible ARIA attribute bindings'
    ],
    ru: [
      'бесшовная интеграция компонентов Image и CropArea',
      'двусторонняя реактивная синхронизация координат кадрирования через v-model',
      '8 направлений маркеров для точного изменения размера краев и углов',
      'центральная зона перемещения для сдвига рамки без изменения ее размера',
      'поддержка различных форматов источников изображений (URL, File, иконки)',
      'поддержка интерактивных состояний disabled и readonly',
      'доступные атрибуты доступности ARIA'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { image1 } from \'@dxtmisha/wiki/media\''
  ],
  render: `
    <DesignComponent
      class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
      v-bind="args"
    />
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.querySelector('.design-component__body')).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ImageCropVModel',
      name: {
        en: 'v-model',
        ru: 'v-model'
      },
      setup: `
      return {
        image1,
        coordinator: ref([15, 20, 15, 20])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="ic-vmodel-output">Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button type="button" class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button type="button" class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <DesignComponent
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
            :image="image1"
            v-model="coordinator"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const output = canvas.getByTestId('ic-vmodel-output')
await expect(output).toHaveTextContent('[ 15, 20, 15, 20 ]')

await step('Update coordinates via Center 50% and Reset buttons', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Center 50%' }))
  await expect(output).toHaveTextContent('[ 25, 25, 25, 25 ]')

  await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
  await expect(output).toHaveTextContent('[ 0, 0, 0, 0 ]')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only — NEVER in documentation)
    // =========================================================================
    {
      id: 'ImageCropTestStatesAndProps',
      name: {
        en: 'Test: Disabled, readonly, alt, attrs and default slot',
        ru: 'Тест: Disabled, readonly, alt, атрибуты и слот по умолчанию'
      },
      propsName: ['image', 'alt', 'value', 'disabled', 'readonly', 'imageAttrs', 'cropAreaAttrs'],
      setup: `
      return { image1 }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            data-testid="ic-test-disabled"
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible"
            :image="image1"
            alt="Disabled crop alt"
            :value="[10, 10, 10, 10]"
            disabled
            :image-attrs="{ 'data-img-attr': 'ok' }"
          >
            <span data-testid="ic-test-slot">Overlay slot</span>
          </DesignComponent>

          <DesignComponent
            data-testid="ic-test-readonly"
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible"
            :image="image1"
            alt="Readonly crop alt"
            :value="[20, 20, 20, 20]"
            readonly
            :crop-area-attrs="{ locked: 'top' }"
          />
        </div>
      `,
      play: `
const disabledComponent = canvasElement.querySelector('[data-testid="ic-test-disabled"]')
const readonlyComponent = canvasElement.querySelector('[data-testid="ic-test-readonly"]')

await expect(disabledComponent).toHaveAttribute('aria-disabled', 'true')
await expect(disabledComponent?.querySelector('[data-testid="ic-test-slot"]')).toHaveTextContent('Overlay slot')
await expect(disabledComponent?.querySelector('img')).toHaveAttribute('alt', 'Disabled crop alt')

await expect(readonlyComponent?.querySelector('.design-component__cropArea')).toBeNull()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ImageCrop'} type={'imageCrop'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.ImageCropVModel}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `
  },
  ai: {
    description: `
Composite interactive component that pairs an Image container with an overlay CropArea for graphic trimming, zooming, and focal region selection.
Coordinates are represented as percentage-based insets [top, right, bottom, left] and bound via v-model or value prop.
Supports 8-directional handle dragging, central panning, alt text accessibility, and disabled/readonly states.
    `,
    hide: true
  }
}
