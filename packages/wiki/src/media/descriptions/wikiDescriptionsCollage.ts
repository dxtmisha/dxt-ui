import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Collage component properties
 *
 * Описания свойств компонента Collage
 */
export const wikiDescriptionsCollage: StorybookComponentsDescriptionItem = {
  name: 'Collage',
  description: {
    en: 'A responsive media container and layout engine for collages, galleries, and Bento grids with dynamic layout variants',
    ru: 'Адаптивный медиаконтейнер и макетный движок для коллажей, галерей и Bento-сеток с динамическими вариантами раскладки'
  },
  possibilities: {
    en: [
      'multiple layout variants: standard, quilted, woven, horizontal masonry, and vertical masonry',
      'configurable column count from 1 to 12 columns with responsive sizing',
      'customizable cell size token (cellSize)',
      'batch and single selection management with two-way binding (selected, v-model:selected)',
      'shared attribute propagation to child collage items via collageItemAttrs',
      'data-driven rendering via images array with customizable keyValue and keyLabel',
      'dynamic layout recalculation method (update) exposed via component API',
      'default slot for custom items or mixed content',
      'click event forwarding with item payload'
    ],
    ru: [
      'различные варианты макета: standard, quilted, woven, горизонтальная и вертикальная кладка',
      'настройка количества колонок от 1 до 12 с адаптивным масштабированием',
      'настраиваемый размер базовой ячейки (cellSize)',
      'управление одиночным и множественным выбором с двусторонним связыванием (selected, v-model:selected)',
      'передача общих атрибутов дочерним элементам через collageItemAttrs',
      'рендеринг на основе данных из массива images с настраиваемыми keyValue и keyLabel',
      'метод динамического пересчета макета (update), доступный через API',
      'слот по умолчанию для пользовательских элементов или смешанного контента',
      'передача событий клика с данными элемента'
    ]
  },
  import: [],
  stories: [
    {
      id: 'CollageVariants',
      name: {
        en: 'Layout variants',
        ru: 'Варианты макета'
      },
      template: `
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: standard</div>
            <DesignComponent
              variant="standard"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/600?random=1', span: 'wide', label: 'Wide' },
                { image: 'https://picsum.photos/800/600?random=2', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=3', span: 'tall', label: 'Tall' },
                { image: 'https://picsum.photos/800/600?random=4', span: 'large', label: 'Large' },
                { image: 'https://picsum.photos/800/600?random=5', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=6', span: 'wide', label: 'Wide' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: quilted</div>
            <DesignComponent
              variant="quilted"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/600?random=7', span: 'large', label: 'Large' },
                { image: 'https://picsum.photos/800/600?random=8', span: 'standard', label: 'Standard 1' },
                { image: 'https://picsum.photos/800/600?random=9', span: 'standard', label: 'Standard 2' },
                { image: 'https://picsum.photos/800/600?random=10', span: 'wide', label: 'Wide' },
                { image: 'https://picsum.photos/800/600?random=11', span: 'tall', label: 'Tall' },
                { image: 'https://picsum.photos/800/600?random=12', span: 'standard', label: 'Standard 3' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: woven</div>
            <DesignComponent
              variant="woven"
              columns="3"
              :images="[
                { image: 'https://picsum.photos/800/600?random=13', label: 'Item 1' },
                { image: 'https://picsum.photos/800/600?random=14', label: 'Item 2' },
                { image: 'https://picsum.photos/800/600?random=15', label: 'Item 3' },
                { image: 'https://picsum.photos/800/600?random=16', label: 'Item 4' },
                { image: 'https://picsum.photos/800/600?random=17', label: 'Item 5' },
                { image: 'https://picsum.photos/800/600?random=18', label: 'Item 6' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: masonryHorizontal</div>
            <DesignComponent
              variant="masonryHorizontal"
              :images="[
                { image: 'https://picsum.photos/800/600?random=31', span: 'wide', label: 'Wide' },
                { image: 'https://picsum.photos/800/600?random=32', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=33', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=34', span: 'wide', label: 'Wide' },
                { image: 'https://picsum.photos/800/600?random=35', span: 'banner', label: 'Banner' },
                { image: 'https://picsum.photos/800/600?random=36', span: 'standard', label: 'Standard' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: masonryVertical</div>
            <DesignComponent
              variant="masonryVertical"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/600?random=41', span: 'tall', label: 'Tall' },
                { image: 'https://picsum.photos/800/600?random=42', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=43', span: 'huge', label: 'Huge' },
                { image: 'https://picsum.photos/800/600?random=44', span: 'tall', label: 'Tall' },
                { image: 'https://picsum.photos/800/600?random=45', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=46', span: 'standard', label: 'Standard' }
              ]"
            />
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Collage'} type={'collage'}/>

<StorybookDescriptions componentName={'Collage'} type={'variant'}/>
<Canvas of={Component.CollageVariants}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model:selected'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Collage'} type={'expose.update'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Collage v-bind="args"/>
</div>
    `,
    description: `
A responsive media gallery and layout container designed for photo collections, media walls, and Bento grids.
Arranges media items using CSS Grid with 5 layout variants: standard (uniform columns with span tiles), quilted (dense auto-flow filling gaps), woven (alternating compact rhythmic tiles), masonryHorizontal (row justification via dynamic grow calculation), and masonryVertical (dynamic column masonry).
Supports configurable column counts (1 to 12), customizable cell dimensions (cellSize), selection tracking (v-model:selected), and batch attribute passing to child items (collageItemAttrs).
Exposes an update() method to trigger layout recalculation upon dynamic container or content changes.
    `,
    hide: true
  }
}
