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
      'built-in image presentation with sizing, positioning, and cropping',
      'active slide selection state management (selected)',
      'WAI-ARIA carousel pattern accessibility compliance with automated roles and labels',
      'slide index and total slides count for accessible screen reader output (slide, total)',
      'skeleton loading state integration (isSkeleton)',
      'interactive click handling and link navigation (href, to)',
      'customizable container HTML tag (tag)',
      'scoped default slot with selected and slide parameters'
    ],
    ru: [
      'варианты выравнивания scroll-snap: start, center, end и none (snap)',
      'встроенное отображение изображения с масштабированием, позиционированием и кадрированием',
      'управление состоянием активности/выбора слайда (selected)',
      'соответствие шаблону доступности WAI-ARIA для слайдов карусели с автоматическими ролями и метками',
      'индексация номера и общего количества слайдов для скринридеров (slide, total)',
      'интеграция состояния загрузки через скелетон (isSkeleton)',
      'интерактивная обработка кликов и навигация по ссылкам (href, to)',
      'настройка HTML-тега контейнера (tag)',
      'слот по умолчанию с передачей параметров selected и slide'
    ]
  },
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <DesignComponent v-bind="args" />
    </div>
  `,
  stories: [
    {
      id: 'CarouselItemSlot',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--widescreen">
          <DesignComponent>
            <template #default>Default slot</template>
          </DesignComponent>
        </div>
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
            <DesignComponent isSkeleton />
          </div>
        </DesignSkeleton>
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
