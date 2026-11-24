import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for CarouselItem component properties
 *
 * Описания свойств компонента CarouselItem
 */
export const wikiDescriptionsCarouselItem: StorybookComponentsDescriptionItem = {
  name: 'CarouselItem',
  description: {
    en: 'An individual slide item component for carousels, sliders, and walkthrough viewports with image, snap alignment, and accessibility support.',
    ru: 'Отдельный элемент слайда для каруселей, слайдеров и пошаговых сценариев с поддержкой изображений, snap-выравнивания и доступности.'
  },
  possibilities: {
    en: [
      'scroll snap alignment options: start, center, end, and none (snap)',
      'built-in image presentation with sizing, positioning, and cropping (image, imageAttrs)',
      'active slide selection state management (selected)',
      'WAI-ARIA carousel pattern accessibility compliance with automated roles and labels (role, ariaLabel)',
      'slide index and total slides count for accessible screen reader output (slide, total)',
      'skeleton loading state integration (isSkeleton)',
      'interactive click handling and link navigation (value, detail, href, to)',
      'customizable container HTML tag (tag)',
      'scoped default slot with selected and slide parameters'
    ],
    ru: [
      'варианты выравнивания scroll-snap: start, center, end и none (snap)',
      'встроенное отображение изображения с масштабированием, позиционированием и кадрированием (image, imageAttrs)',
      'управление состоянием активности/выбора слайда (selected)',
      'соответствие шаблону доступности WAI-ARIA для слайдов карусели с автоматическими ролями и метками (role, ariaLabel)',
      'индексация номера и общего количества слайдов для скринридеров (slide, total)',
      'интеграция состояния загрузки через скелетон (isSkeleton)',
      'интерактивная обработка кликов и навигация по ссылкам (value, detail, href, to)',
      'настройка HTML-тега контейнера (tag)',
      'слот по умолчанию с передачей параметров selected и slide'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { image1 } from \'@dxtmisha/wiki/media\'',
    'import type { CarouselItemExpose } from \'@dxtmisha/constructor/CarouselItem\''
  ],
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <DesignComponent v-bind="args" />
    </div>
  `,
  play: `
const slideElement = canvasElement.querySelector('.design-component')
await expect(slideElement).toBeInTheDocument()
await expect(slideElement).toHaveAttribute('role', 'group')
await expect(slideElement).toHaveAttribute('aria-roledescription', 'slide')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'CarouselItemSlot',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--widescreen">
          <DesignComponent data-testid="ci-slot" :slide="1" :total="3" selected>
            <template #default="{ selected, slide }">
              <span>Slide {{ slide }} ({{ selected ? 'active' : 'inactive' }})</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const slideElement = canvasElement.querySelector('[data-testid="ci-slot"]')
await expect(slideElement).toBeInTheDocument()
await expect(slideElement).toHaveTextContent('Slide 1 (active)')
await expect(slideElement).toHaveAttribute('aria-label', '1 / 3')
      `
    },
    {
      id: 'CarouselItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Состояние скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <DesignComponent data-testid="ci-skeleton" isSkeleton />
          </div>
        </DesignSkeleton>
      `,
      play: `
const slideElement = canvasElement.querySelector('[data-testid="ci-skeleton"]')
await expect(slideElement).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'CarouselItemTestSnapAndImage',
      name: {
        en: 'Test: Snap alignments, image, custom tag and ARIA',
        ru: 'Тест: Выравнивание snap, изображение, кастомный тег и ARIA'
      },
      propsName: ['snap', 'selected', 'image', 'imageAttrs', 'tag', 'role', 'ariaLabel', 'slide', 'total'],
      setup: `
      return { image1 }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <DesignComponent data-testid="ci-snap-start" snap="start" selected :image="image1" :image-attrs="{ alt: 'Hero image' }" :slide="0" :total="4" :value="0" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <DesignComponent data-testid="ci-snap-center" snap="center" tag="article" role="listitem" aria-label="Custom slide" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <DesignComponent data-testid="ci-snap-end" snap="end" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <DesignComponent data-testid="ci-snap-none" snap="none" />
          </div>
        </div>
      `,
      play: `
const startElement = canvasElement.querySelector('[data-testid="ci-snap-start"]')
const centerElement = canvasElement.querySelector('[data-testid="ci-snap-center"]')
const endElement = canvasElement.querySelector('[data-testid="ci-snap-end"]')
const noneElement = canvasElement.querySelector('[data-testid="ci-snap-none"]')

await expect(startElement).toHaveClass('design-component--selected')
await expect(startElement).toHaveClass('design-component--snap--start')
await expect(startElement).toHaveAttribute('aria-label', '0 / 4')
await expect(startElement).toHaveAttribute('data-value', '0')
await expect(startElement?.querySelector('.design-component__image')).toBeInTheDocument()

await expect(centerElement?.tagName).toBe('ARTICLE')
await expect(centerElement).toHaveClass('design-component--snap--center')
await expect(centerElement).toHaveAttribute('role', 'listitem')
await expect(centerElement).toHaveAttribute('aria-label', 'Custom slide')

await expect(endElement).toHaveClass('design-component--snap--end')
await expect(noneElement).toHaveClass('design-component--snap--none')
      `
    },
    {
      id: 'CarouselItemTestEventsAndExpose',
      name: {
        en: 'Test: Click events and exposed API',
        ru: 'Тест: События клика и публичный API (expose)'
      },
      propsName: ['value', 'detail', 'slide', 'selected'],
      setup: `
      const itemRef = ref<CarouselItemExpose>()
      const clickedValue = ref<unknown>('none')
      const exposeResult = ref<string>('')
      const onClickLite = (payload: { value?: unknown }) => {
        clickedValue.value = payload?.value
      }
      const readExpose = () => {
        if (!itemRef.value) {
          return
        }
        exposeResult.value = String(itemRef.value.isSelected()) + ':' + String(itemRef.value.getSlide()) + ':' + String(itemRef.value.getValue?.())
      }
      return { itemRef, clickedValue, exposeResult, onClickLite, readExpose }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <DesignComponent
              ref="itemRef"
              data-testid="ci-events"
              :slide="3"
              :total="6"
              selected
              value="slide-three"
              :detail="{ source: 'test' }"
              @click-lite="onClickLite"
            >
              <span>Clickable slide</span>
            </DesignComponent>
          </div>
          <button data-testid="ci-read-expose" class="wiki-storybook-button" @click="readExpose">Read Expose</button>
          <output data-testid="ci-clicked-value">{{ String(clickedValue) }}</output>
          <output data-testid="ci-expose-result">{{ exposeResult }}</output>
        </div>
      `,
      play: `
const slideElement = canvasElement.querySelector('[data-testid="ci-events"]')
const exposeButton = canvasElement.querySelector('[data-testid="ci-read-expose"]')
if (slideElement) {
  await userEvent.click(slideElement)
}
if (exposeButton) {
  await userEvent.click(exposeButton)
}
await expect(canvasElement.querySelector('[data-testid="ci-clicked-value"]')).toHaveTextContent('slide-three')
await expect(canvasElement.querySelector('[data-testid="ci-expose-result"]')).toHaveTextContent('true:3:slide-three')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'CarouselItem'} type={'carouselItem'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CarouselItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'isSelected'}/>
<StorybookDescriptions componentName={'CarouselItem'} type={'expose.getSlide'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<Canvas of={Component.CarouselItemSlot}/>
<StorybookDescriptions componentName={'CarouselItem'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Individual slide item component for carousels, sliders, and walkthrough viewports.
Supports image rendering with sizing and positioning, scroll snap alignment (snap: 'start' | 'center' | 'end' | 'none'), active selection state (selected), WAI-ARIA carousel pattern accessibility (slide, total, aria-label, role), skeleton loading state (isSkeleton), click routing (href, to), and scoped default slot with selected and slide props.
Must be used inside a carousel container or scroll viewport.
    `,
    hide: true
  }
}
