import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for CollageItem component properties
 *
 * Описания свойств компонента CollageItem
 */
export const wikiDescriptionsCollageItem: StorybookComponentsDescriptionItem = {
  name: 'CollageItem',
  description: {
    en: 'A composite media item component for collages, galleries, and Bento grids with image cropping, checkmark indicator, and caption bar',
    ru: 'Компонент элемента коллажа для галерей и Bento-сеток с поддержкой обрезки изображения, индикатора выбора и панели подписи'
  },
  possibilities: {
    en: [
      'rich media presentation with image cropping, scaling, and positioning (size, coordinator, x, y)',
      'Bento grid span presets: standard, wide (2:1), tall (1:2), large (2:2), banner (3:1), and huge (3:2)',
      'integrated checkmark icon with customizable selection state (selected, iconCheck)',
      'built-in CollageBar integration for titles (label), descriptions, and action buttons',
      'customizable body element HTML tag (defaults to a)',
      'click event handling with routing and detail forwarding',
      'slots for bar body and trailing components (barBody, barTrailing)',
      'image load event forwarding and dimension expose helpers (getWidth, getHeight)'
    ],
    ru: [
      'отображение медиа с обрезкой, масштабированием и позиционированием изображения (size, coordinator, x, y)',
      'пресеты раскладки Bento-сетки: standard, wide (2:1), tall (1:2), large (2:2), banner (3:1) и huge (3:2)',
      'встроенный индикатор выбора с настраиваемой иконкой и состоянием selected (selected, iconCheck)',
      'встроенная панель CollageBar для заголовков (label), описаний и кнопок действий',
      'настраиваемый HTML-тег элемента тела (по умолчанию a)',
      'обработка событий клика с поддержкой маршрутизации и передачи данных',
      'слоты для тела и замыкающих элементов панели (barBody, barTrailing)',
      'передача события загрузки изображения и методы экспорта размеров (getWidth, getHeight)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import { image1, image2 } from \'@dxtmisha/wiki/media\''
  ],
  render: `
    <div class="wiki-storybook-container">
      <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
        <DesignComponent v-bind="args"/>
      </div>
    </div>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('FIGURE')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'CollageItemSpans',
      name: {
        en: 'Bento Spans',
        ru: 'Варианты Bento-охвата'
      },
      propsName: ['span', 'collageBarPosition', 'selected', 'label', 'description', 'collageBarAttrs'],
      setup: `
      return { image1, image2 }
      `,
      template: `
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <DesignComponent
              :image="image1"
              span="wide"
              collage-bar-position="static"
              label="Standard Position"
              description="Static bar placed below the image"
              :collage-bar-attrs="{ button: 'Explore' }"
            />
            <DesignComponent
              :image="image2"
              span="wide"
              selected
            />
            <DesignComponent
              :image="image1"
              span="tall"
              collage-bar-position="top"
              label="Vertical Panorama"
              description="Top overlay bar"
              :collage-bar-attrs="{ icon: 'bookmark' }"
            />
            <DesignComponent
              :image="image2"
              span="huge"
              collage-bar-position="bottom"
              label="Huge Showcase (Enlarged 3x2)"
              description="3 columns x 2 rows enlarged element with action button"
              :collage-bar-attrs="{ button: 'Explore Project' }"
            />
            <DesignComponent
              :image="image1"
              span="large"
              collage-bar-position="static"
              label="Large Card"
              description="2 columns x 2 rows with static caption bar"
              :collage-bar-attrs="{ button: 'Details' }"
            />
            <DesignComponent
              :image="image2"
              span="standard"
              collage-bar-position="top"
              selected
              label="Top Label"
            />
            <DesignComponent
              :image="image1"
              span="banner"
              collage-bar-position="bottom"
              label="Banner Span"
              description="3 columns x 1 row banner"
            />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(7)
await expect(items[0]).toHaveClass('design-component--span--wide')
await expect(items[1]).toHaveClass('design-component--selected')
await expect(items[2]).toHaveClass('design-component--span--tall')
await expect(items[2]).toHaveClass('design-component--collageBarPosition--top')
await expect(items[3]).toHaveClass('design-component--span--huge')
await expect(items[4]).toHaveClass('design-component--span--large')
await expect(items[5]).toHaveClass('design-component--span--standard')
await expect(items[6]).toHaveClass('design-component--span--banner')
      `
    },
    {
      id: 'ImageSize',
      name: {
        en: 'Display control',
        ru: 'Отображение'
      },
      propsName: ['size', 'coordinator', 'x', 'y'],
      setup: `
      return { image1 }
      `,
      template: `
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <DesignComponent
              :image="image1"
              size="cover"
              collage-bar-position="static"
              label="size: cover (default)"
              description="Fills container, cropping overflow"
            />
            <DesignComponent
              :image="image1"
              size="contain"
              collage-bar-position="static"
              label="size: contain"
              description="Scales image to fit within bounds"
            />
            <DesignComponent
              :image="image1"
              size="auto"
              collage-bar-position="static"
              label="size: auto"
              description="Displays image without scaling"
            />
            <DesignComponent
              :image="image1"
              :coordinator="[60, 10, 10, 40]"
              collage-bar-position="static"
              label="coordinator"
              description="Crops to specified coordinate bounds"
            />
            <DesignComponent
              :image="image1"
              x="20%"
              y="-10%"
              collage-bar-position="static"
              label="x, y offset"
              description="Custom coordinate shift along axes"
            />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)
for (const item of items) {
  await expect(item.querySelector('.design-component__image')).toBeInTheDocument()
}
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA — Constructor Props Only)
    // =========================================================================
    {
      id: 'CollageItemTestStatesSlotsAndEvents',
      name: {
        en: 'Test: States, custom tag, slots, numeric zero and click event',
        ru: 'Тест: Состояния, тег, слоты, числовой 0 и событие клика'
      },
      propsName: ['focus', 'compact', 'selected', 'iconCheck', 'tag', 'value'],
      setup: `
      const lastClicked = ref('')
      const onClickLite = (value: EventClickValue) => {
        lastClicked.value = String(value.value)
      }
      return { image1, image2, lastClicked, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <span data-testid="collage-item-test-click">{{ lastClicked }}</span>
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <DesignComponent
              :image="image1"
              focus
              compact
              selected
              icon-check="star"
              tag="div"
              value="item-99"
              collage-bar-position="bottom"
              label="Interactive Card"
              @click-lite="onClickLite"
            >
              <template #barTrailing>TRAIL</template>
            </DesignComponent>
            <DesignComponent
              :image="image2"
              collage-bar-position="static"
            >
              <template #barBody>CUSTOM BODY</template>
            </DesignComponent>
            <DesignComponent
              :image="image1"
              collage-bar-position="static"
              :label="0"
              :description="0"
            />
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).toHaveClass('design-component--focus')
await expect(items[0]).toHaveClass('design-component--compact')
await expect(items[0]).toHaveClass('design-component--selected')
await expect(items[0].querySelector('.design-component__body')?.tagName).toBe('DIV')
await expect(items[0]).toHaveTextContent('TRAIL')
await expect(items[1]).toHaveTextContent('CUSTOM BODY')
await expect(items[2]).toHaveTextContent('0')
const body = items[0].querySelector('.design-component__body') as HTMLElement | null
if (body) {
  await userEvent.click(body)
}
await expect(canvas.getByTestId('collage-item-test-click')).toHaveTextContent('item-99')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'CollageItem'} type={'collageItem'}/>
<Canvas of={Component.CollageItemSpans}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'CollageItem'} type={'load'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'bar'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
<StorybookDescriptions componentName={'Expose'} type={'getHeight'}/>
<StorybookDescriptions componentName={'Expose'} type={'getWidth'}/>
    `
  },
  ai: {
    description: `
A composite media card component designed for photo galleries, collages, and Bento grid layouts.
Displays an image with cropping and coordinate positioning, optional title/description bar (CollageBar), and an interactive checkmark indicator when selected.
Features span presets for Bento grids (standard, wide, tall, large, banner, huge) with responsive aspect ratios.
Supports semantic HTML tag customization (defaults to a), selection states, click events, and bar slots.
    `,
    hide: true
  }
}
