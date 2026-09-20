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
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'CollageVariants',
      name: {
        en: 'Layout variants',
        ru: 'Варианты макета'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: standard</div>
            <DesignComponent
              variant="standard"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/600/600?random=1', label: 'Item 1' },
                { image: 'https://picsum.photos/600/600?random=2', label: 'Item 2' },
                { image: 'https://picsum.photos/600/600?random=3', label: 'Item 3' },
                { image: 'https://picsum.photos/600/600?random=4', label: 'Item 4' },
                { image: 'https://picsum.photos/600/600?random=5', label: 'Item 5' },
                { image: 'https://picsum.photos/600/600?random=6', label: 'Item 6' },
                { image: 'https://picsum.photos/600/600?random=7', label: 'Item 7' },
                { image: 'https://picsum.photos/600/600?random=8', label: 'Item 8' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: quilted</div>
            <DesignComponent
              variant="quilted"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/800?random=11', span: 'large', label: 'Large (2x2)' },
                { image: 'https://picsum.photos/600/600?random=12', span: 'standard', label: 'Standard 1' },
                { image: 'https://picsum.photos/600/1200?random=13', span: 'tall', label: 'Tall (1x2)' },
                { image: 'https://picsum.photos/600/600?random=14', span: 'standard', label: 'Standard 2' },
                { image: 'https://picsum.photos/1200/600?random=15', span: 'wide', label: 'Wide (2x1)' },
                { image: 'https://picsum.photos/600/600?random=16', span: 'standard', label: 'Standard 3' },
                { image: 'https://picsum.photos/600/600?random=17', span: 'standard', label: 'Standard 4' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: woven</div>
            <DesignComponent
              variant="woven"
              columns="3"
              :images="[
                { image: 'https://picsum.photos/600/800?random=21', label: 'Item 1' },
                { image: 'https://picsum.photos/600/800?random=22', label: 'Item 2' },
                { image: 'https://picsum.photos/600/800?random=23', label: 'Item 3' },
                { image: 'https://picsum.photos/600/800?random=24', label: 'Item 4' },
                { image: 'https://picsum.photos/600/800?random=25', label: 'Item 5' },
                { image: 'https://picsum.photos/600/800?random=26', label: 'Item 6' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryHorizontal</div>
            <DesignComponent
              variant="masonryHorizontal"
              :images="[
                { image: 'https://picsum.photos/960/540?random=31', label: 'Landscape 16:9' },
                { image: 'https://picsum.photos/600/600?random=32', label: 'Square 1:1' },
                { image: 'https://picsum.photos/1000/500?random=33', label: 'Panoramic 2:1' },
                { image: 'https://picsum.photos/600/800?random=34', label: 'Portrait 3:4' },
                { image: 'https://picsum.photos/800/500?random=35', label: 'Wide 16:10' },
                { image: 'https://picsum.photos/800/600?random=36', label: 'Standard 4:3' },
                { image: 'https://picsum.photos/600/600?random=37', label: 'Square 1:1' },
                { image: 'https://picsum.photos/1050/450?random=38', label: 'Panoramic 21:9' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryVertical</div>
            <DesignComponent
              variant="masonryVertical"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/540/960?random=41', label: 'Tall Pin' },
                { image: 'https://picsum.photos/600/600?random=42', label: 'Square' },
                { image: 'https://picsum.photos/600/800?random=43', label: 'Portrait' },
                { image: 'https://picsum.photos/800/500?random=44', label: 'Landscape' },
                { image: 'https://picsum.photos/800/600?random=45', label: 'Standard' },
                { image: 'https://picsum.photos/600/900?random=46', label: 'Tall Portrait' },
                { image: 'https://picsum.photos/600/600?random=47', label: 'Square' },
                { image: 'https://picsum.photos/600/800?random=48', label: 'Portrait' }
              ]"
            />
          </div>
        </div>
      `
    },
    {
      id: 'CollageVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const selected = ref(['select-1', 'select-3'])
      const images = [
        { image: 'https://picsum.photos/600/600?random=51', label: 'Item 1', value: 'select-1' },
        { image: 'https://picsum.photos/600/600?random=52', label: 'Item 2', value: 'select-2' },
        { image: 'https://picsum.photos/600/600?random=53', label: 'Item 3', value: 'select-3' },
        { image: 'https://picsum.photos/600/600?random=54', label: 'Item 4', value: 'select-4' }
      ]
      return { selected, images }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Selected: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = ['select-1', 'select-2']">Select 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="selected = []">Clear</button>
          </div>

          <DesignComponent
            control
            columns="4"
            variant="standard"
            :images="images"
            v-model:selected="selected"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Collage'} type={'collage'}/>

<StorybookDescriptions componentName={'Collage'} type={'variant'}/>
<Canvas of={Component.CollageVariants}/>

<StorybookDescriptions componentName={'Value'} type={'v-model:selected'}/>
<Canvas of={Component.CollageVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
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
