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
      '2D spatial keyboard navigation via control prop and FocusDirectionInclude',
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
      'пространственная 2D-навигация с клавиатуры через свойство control и FocusDirectionInclude',
      'передача общих атрибутов дочерним элементам через collageItemAttrs',
      'рендеринг на основе данных из массива images с настраиваемыми keyValue и keyLabel',
      'метод динамического пересчета макета (update), доступный через API',
      'слот по умолчанию для пользовательских элементов или смешанного контента',
      'передача событий клика с данными элемента'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import { image1, image2 } from \'@dxtmisha/wiki/media\''
  ],
  render: `
      <DesignComponent v-bind="args" />
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'CollageVariants',
      name: {
        en: 'Layout variants',
        ru: 'Варианты макета'
      },
      propsName: ['variant', 'columns', 'images', 'cellSize'],
      setup: `
      return { image1, image2 }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: standard</div>
            <DesignComponent
              variant="standard"
              columns="4"
              :images="[
                { image: image1, label: 'Item 1' },
                { image: image2, label: 'Item 2' },
                { image: image1, label: 'Item 3' },
                { image: image2, label: 'Item 4' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: quilted</div>
            <DesignComponent
              variant="quilted"
              columns="4"
              :images="[
                { image: image1, span: 'large', label: 'Large (2x2)' },
                { image: image2, span: 'standard', label: 'Standard 1' },
                { image: image1, span: 'tall', label: 'Tall (1x2)' },
                { image: image2, span: 'wide', label: 'Wide (2x1)' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: woven</div>
            <DesignComponent
              variant="woven"
              columns="3"
              :images="[
                { image: image1, label: 'Item 1' },
                { image: image2, label: 'Item 2' },
                { image: image1, label: 'Item 3' },
                { image: image2, label: 'Item 4' },
                { image: image1, label: 'Item 5' },
                { image: image2, label: 'Item 6' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryHorizontal</div>
            <DesignComponent
              variant="masonryHorizontal"
              cell-size="140px"
              :images="[
                { image: image1, label: 'Image 1' },
                { image: image2, label: 'Image 2' },
                { image: image1, label: 'Image 3' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryVertical</div>
            <DesignComponent
              variant="masonryVertical"
              columns="3"
              :images="[
                { image: image1, label: 'Pin 1' },
                { image: image2, label: 'Pin 2' },
                { image: image1, label: 'Pin 3' },
                { image: image2, label: 'Pin 4' }
              ]"
            />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)
await expect(items[0]).toHaveClass('design-component--variant--standard')
await expect(items[1]).toHaveClass('design-component--variant--quilted')
await expect(items[2]).toHaveClass('design-component--variant--woven')
await expect(items[3]).toHaveClass('design-component--variant--masonryHorizontal')
await expect(items[4]).toHaveClass('design-component--variant--masonryVertical')
      `
    },
    {
      id: 'CollageVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      propsName: ['control', 'selected', 'columns', 'variant', 'images'],
      setup: `
      const selected = ref<string[]>(['select-1', 'select-3'])
      const images = [
        { image: image1, label: 'Item 1', value: 'select-1' },
        { image: image2, label: 'Item 2', value: 'select-2' },
        { image: image1, label: 'Item 3', value: 'select-3' },
        { image: image2, label: 'Item 4', value: 'select-4' }
      ]
      return { selected, images }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="collage-vmodel-value">Selected: {{ selected.join(',') }}</span>
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
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('collage-vmodel-value')).toHaveTextContent('Selected: select-1,select-3')
await userEvent.click(canvas.getByText('Select 1, 2'))
await expect(canvas.getByTestId('collage-vmodel-value')).toHaveTextContent('Selected: select-1,select-2')
await userEvent.click(canvas.getByText('Clear'))
await expect(canvas.getByTestId('collage-vmodel-value')).toHaveTextContent('Selected:')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA — Constructor Props Only)
    // =========================================================================
    {
      id: 'CollageTestKeysSlotAndEvents',
      name: {
        en: 'Test: Custom keys, collageItemAttrs, slot, click event and expose update',
        ru: 'Тест: Ключи keyValue/keyLabel, collageItemAttrs, слот, клик и expose update'
      },
      propsName: ['keyValue', 'keyLabel', 'collageItemAttrs', 'cellSize', 'control'],
      setup: `
      const collageRef = ref<{ update: () => void }>()
      const lastClicked = ref('')
      const updated = ref(false)
      const customImages = [
        { image: image1, id: 0, title: 'Zero Item' },
        { image: image2, id: 'custom-2', title: 'Custom Key Item' }
      ]
      const onClickLite = (value: EventClickValue) => {
        lastClicked.value = String(value.value)
      }
      const triggerUpdate = () => {
        collageRef.value?.update()
        updated.value = true
      }
      return { collageRef, customImages, lastClicked, updated, onClickLite, triggerUpdate }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="collage-test-click">{{ lastClicked }}</span>
            <span data-testid="collage-test-update">{{ updated ? 'updated' : 'idle' }}</span>
            <button class="wiki-storybook-button" @click="triggerUpdate">Update</button>
          </div>
          <DesignComponent
            ref="collageRef"
            columns="2"
            variant="standard"
            cell-size="120px"
            key-value="id"
            key-label="title"
            :images="customImages"
            :collage-item-attrs="{ collageBarPosition: 'static' }"
            @click-lite="onClickLite"
          />
          <DesignComponent columns="2" variant="standard">
            <div data-testid="collage-test-slot-child">Slot Child</div>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const collages = canvasElement.querySelectorAll('.design-component')
await expect(collages.length).toBe(2)
await expect(collages[0]).toHaveTextContent('Zero Item')
await expect(collages[0]).toHaveTextContent('Custom Key Item')
await expect(canvas.getByTestId('collage-test-slot-child')).toBeInTheDocument()
await userEvent.click(canvas.getByText('Update'))
await expect(canvas.getByTestId('collage-test-update')).toHaveTextContent('updated')
const firstBody = collages[0].querySelector('a') as HTMLElement | null
if (firstBody) {
  await userEvent.click(firstBody)
}
await expect(canvas.getByTestId('collage-test-click')).toHaveTextContent('0')
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
  <DesignComponent v-bind="args"/>
</div>
    `,
    description: `
A responsive media gallery and layout container designed for photo collections, media walls, and Bento grids.
Arranges media items using CSS Grid with 5 layout variants: standard (uniform columns with span tiles), quilted (dense auto-flow filling gaps), woven (alternating compact rhythmic tiles), masonryHorizontal (row justification via dynamic grow calculation), and masonryVertical (dynamic column masonry).
Supports configurable column counts (1 to 12), customizable cell dimensions (cellSize), selection tracking (v-model:selected), 2D keyboard navigation (control), and batch attribute passing to child items (collageItemAttrs).
Exposes an update() method to trigger layout recalculation upon dynamic container or content changes.
    `
  }
}
