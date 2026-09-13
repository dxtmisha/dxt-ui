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
    <div class="wiki-storybook-container">
      <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
        <DesignComponent v-bind="args"/>
      </div>
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
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <DesignComponent
              image="https://picsum.photos/800/600?random=42"
              span="wide"
              collageBarPosition="static"
              label="Standard Position"
              description="Static bar placed below the image"
              :collageBarAttrs="{ button: 'Explore' }"
            />
            <DesignComponent
              image="https://picsum.photos/800/600?random=43"
              span="wide"
              selected
            />
            <DesignComponent
              image="https://picsum.photos/800/600?random=44"
              span="tall"
              collageBarPosition="top"
              label="Vertical Panorama"
              description="Top overlay bar"
              :collageBarAttrs="{ icon: 'bookmark' }"
            />
            <DesignComponent
              image="https://picsum.photos/800/600?random=45"
              span="huge"
              collageBarPosition="bottom"
              label="Huge Showcase (Enlarged 3x2)"
              description="3 columns x 2 rows enlarged element with action button"
              :collageBarAttrs="{ button: 'Explore Project' }"
            />
            <DesignComponent
              image="https://picsum.photos/800/600?random=47"
              span="large"
              collageBarPosition="static"
              label="Large Card"
              description="2 columns x 2 rows with static caption bar"
              :collageBarAttrs="{ button: 'Details' }"
            />
            <DesignComponent
              image="https://picsum.photos/800/600?random=48"
              span="standard"
              collageBarPosition="top"
              selected
              label="Top Label"
            />
            <DesignComponent
              image="https://picsum.photos/800/600?random=49"
              span="standard"
              selected
              collageBarPosition="bottom"
              label="Active"
              :collageBarAttrs="{ icon: 'favorite' }"
            />
            <DesignComponent
              image="https://picsum.photos/800/600?random=50"
              span="wide"
              collageBarPosition="bottom"
              label="Wide Banner"
              description="2 columns x 1 row bottom bar"
              :collageBarAttrs="{ button: 'Open' }"
            />
          </div>
        </div>
      `
    },
    {
      id: 'ImageSize',
      name: {
        en: 'Display control',
        ru: 'Отображение'
      },
      template: `
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <DesignComponent
              image="https://picsum.photos/800/400?random=55"
              size="cover"
              collageBarPosition="static"
              label="size: cover (default)"
              description="Fills container, cropping overflow"
            />
            <DesignComponent
              image="https://picsum.photos/800/400?random=55"
              size="contain"
              collageBarPosition="static"
              label="size: contain"
              description="Scales image to fit within bounds"
            />
            <DesignComponent
              image="https://picsum.photos/800/400?random=55"
              size="auto"
              collageBarPosition="static"
              label="size: auto"
              description="Displays image without scaling"
            />
            <DesignComponent
              image="https://picsum.photos/800/400?random=55"
              :coordinator="[60, 10, 10, 40]"
              collageBarPosition="static"
              label="coordinator"
              description="Crops to specified coordinate bounds"
            />
            <DesignComponent
              image="https://picsum.photos/800/400?random=55"
              x="20%"
              y="-10%"
              collageBarPosition="static"
              label="x, y offset"
              description="Custom coordinate shift along axes"
            />
          </div>
        </div>
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
Features span presets for Bento grids (wide, tall, large, banner, huge) with responsive aspect ratios.
Supports semantic HTML tag customization (defaults to a), selection states, click events, and bar slots.
    `,
    hide: true
  }
}
