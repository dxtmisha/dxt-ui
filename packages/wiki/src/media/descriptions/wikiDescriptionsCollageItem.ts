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
      'rich media presentation with image cropping, scaling, and positioning (coordinator, x, y)',
      'Bento grid span presets: wide (2:1), tall (1:2), large (1:1), banner (3:1), and huge (3:2)',
      'integrated checkmark icon with customizable selection state (selected, iconCheck)',
      'built-in CollageBar integration for titles (label), descriptions, and action buttons',
      'customizable body element HTML tag (defaults to a)',
      'click event handling with routing and detail forwarding',
      'slots for bar body and trailing components',
      'image load event forwarding'
    ],
    ru: [
      'отображение медиа с обрезкой, масштабированием и позиционированием изображения (coordinator, x, y)',
      'пресеты раскладки Bento-сетки: wide (2:1), tall (1:2), large (1:1), banner (3:1) и huge (3:2)',
      'встроенный индикатор выбора с настраиваемой иконкой и состоянием selected',
      'встроенная панель CollageBar для заголовков (label), описаний и кнопок действий',
      'настраиваемый HTML-тег элемента тела (по умолчанию a)',
      'обработка событий клика с поддержкой маршрутизации и передачи данных',
      'слоты для тела и замыкающих элементов панели',
      'передача события загрузки изображения'
    ]
  },
  import: [],
  render: `
    <div class="wiki-storybook-group wiki-storybook-group--col4">
      <DesignComponent v-bind="args"/>
    </div>
  `,
  stories: [
    {
      id: 'CollageItemSpans',
      name: {
        en: 'Bento Spans',
        ru: 'Варианты Bento-охвата'
      },
      template: `
        <div class="wiki-storybook-group wiki-storybook-group--col4">
          <DesignComponent
            image="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
            span="wide"
            label="Wide Item"
            description="2 columns x 1 row"
          />
          <DesignComponent
            image="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80"
            span="wide"
            selected
            label="Selected Item"
            description="2 columns x 1 row (selected)"
          />
          <DesignComponent
            image="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80"
            span="tall"
            label="Tall Item"
            description="1 column x 2 rows"
          />
          <DesignComponent
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            span="large"
            label="Large Item"
            description="2 columns x 2 rows"
          />
          <DesignComponent
            image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
            span="banner"
            label="Banner Item"
            description="3 columns x 1 row"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'CollageItem'} type={'collageItem'}/>
<Canvas of={Component.CollageItemSpans}/>
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
Features span presets for Bento grids (wide, tall, large, banner, huge) with responsive aspect ratios.
Supports semantic HTML tag customization (defaults to a), selection states, click events, and bar slots.
    `,
    hide: true
  }
}
