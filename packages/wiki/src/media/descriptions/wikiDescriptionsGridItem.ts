import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for GridItem component properties
 *
 * Описания свойств компонента GridItem
 */
export const wikiDescriptionsGridItem: StorybookComponentsDescriptionItem = {
  name: 'GridItem',
  description: {
    en: 'Individual item within a Grid component',
    ru: 'Отдельный элемент внутри компонента Grid'
  },
  possibilities: {
    en: [
      'configurable span across columns (`base`: `1`–`12`)',
      'vertical and cross-axis alignment (`align`)'
    ],
    ru: [
      'настраиваемый охват колонок (`base`: `1`–`12`)',
      'выравнивание элемента внутри ячейки сетки (`align`)'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <div class="wiki-storybook-group">
      <DesignComponent v-bind="args">
        <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"/>
      </DesignComponent>
    </div>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('DIV')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body)
    // =========================================================================
    {
      id: 'GridItemBasic',
      name: {
        en: 'Column span (base)',
        ru: 'Ширина в колонках (base)'
      },
      propsName: ['base'],
      template: `
        <div class="wiki-storybook-group">
          <DesignComponent base="6">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm">base="6"</div>
          </DesignComponent>
          <DesignComponent base="6">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm">base="6"</div>
          </DesignComponent>
          <DesignComponent base="4">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm">base="4"</div>
          </DesignComponent>
          <DesignComponent base="8">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm">base="8"</div>
          </DesignComponent>
          <DesignComponent base="12">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--size--sm">base="12"</div>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)
await expect(items[0]).toHaveClass('design-component--base--6')
await expect(items[1]).toHaveClass('design-component--base--6')
await expect(items[2]).toHaveClass('design-component--base--4')
await expect(items[3]).toHaveClass('design-component--base--8')
await expect(items[4]).toHaveClass('design-component--base--12')
      `
    },
    {
      id: 'GridItemAlign',
      name: {
        en: 'Cell alignment (align)',
        ru: 'Выравнивание в ячейке (align)'
      },
      propsName: ['base', 'align'],
      template: `
        <div class="wiki-storybook-group" style="grid-auto-rows: 96px;">
          <DesignComponent base="3" align="start">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">align="start"</div>
          </DesignComponent>
          <DesignComponent base="3" align="center">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red">align="center"</div>
          </DesignComponent>
          <DesignComponent base="3" align="end">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green">align="end"</div>
          </DesignComponent>
          <DesignComponent base="3" align="stretch">
            <div class="wiki-storybook-dummy" style="height: 100%;">align="stretch"</div>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)
await expect(items[0]).toHaveClass('design-component--base--3')
await expect(items[0]).toHaveClass('design-component--align--start')
await expect(items[1]).toHaveClass('design-component--base--3')
await expect(items[1]).toHaveClass('design-component--align--center')
await expect(items[2]).toHaveClass('design-component--base--3')
await expect(items[2]).toHaveClass('design-component--align--end')
await expect(items[3]).toHaveClass('design-component--base--3')
await expect(items[3]).toHaveClass('design-component--align--stretch')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (NOT in documentation — constructor props only)
    // =========================================================================
    {
      id: 'GridItemTestBase',
      name: {
        en: 'Test: Default and all base column spans (1 to 12)',
        ru: 'Тест: Значение по умолчанию и все варианты ширины колонок base (от 1 до 12)'
      },
      propsName: ['base'],
      template: `
        <div class="wiki-storybook-group">
          <DesignComponent data-testid="grid-item-default">
            <div class="wiki-storybook-dummy">default</div>
          </DesignComponent>
          <DesignComponent base="1">
            <div class="wiki-storybook-dummy">1</div>
          </DesignComponent>
          <DesignComponent base="2">
            <div class="wiki-storybook-dummy">2</div>
          </DesignComponent>
          <DesignComponent base="3">
            <div class="wiki-storybook-dummy">3</div>
          </DesignComponent>
          <DesignComponent base="4">
            <div class="wiki-storybook-dummy">4</div>
          </DesignComponent>
          <DesignComponent base="5">
            <div class="wiki-storybook-dummy">5</div>
          </DesignComponent>
          <DesignComponent base="6">
            <div class="wiki-storybook-dummy">6</div>
          </DesignComponent>
          <DesignComponent base="7">
            <div class="wiki-storybook-dummy">7</div>
          </DesignComponent>
          <DesignComponent base="8">
            <div class="wiki-storybook-dummy">8</div>
          </DesignComponent>
          <DesignComponent base="9">
            <div class="wiki-storybook-dummy">9</div>
          </DesignComponent>
          <DesignComponent base="10">
            <div class="wiki-storybook-dummy">10</div>
          </DesignComponent>
          <DesignComponent base="11">
            <div class="wiki-storybook-dummy">11</div>
          </DesignComponent>
          <DesignComponent base="12">
            <div class="wiki-storybook-dummy">12</div>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(13)
await expect(items[0].tagName).toBe('DIV')
await expect(items[0]).toHaveClass('design-component--base--1')
await expect(items[0]).toHaveTextContent('default')

const baseList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
for (let index = 0; index < baseList.length; index++) {
  const baseValue = baseList[index]
  const itemElement = items[index + 1]
  await expect(itemElement.tagName).toBe('DIV')
  await expect(itemElement).toHaveClass('design-component--base--' + baseValue)
  await expect(itemElement).toHaveTextContent(baseValue)
}
      `
    },
    {
      id: 'GridItemTestAlign',
      name: {
        en: 'Test: All align variants',
        ru: 'Тест: Все варианты выравнивания align'
      },
      propsName: ['base', 'align'],
      template: `
        <div class="wiki-storybook-group" style="grid-auto-rows: 96px;">
          <DesignComponent base="4" align="center">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">center</div>
          </DesignComponent>
          <DesignComponent base="4" align="top">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">top</div>
          </DesignComponent>
          <DesignComponent base="4" align="bottom">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">bottom</div>
          </DesignComponent>
          <DesignComponent base="4" align="stretch">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="height: 100%;">stretch</div>
          </DesignComponent>
          <DesignComponent base="4" align="baseline">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green">baseline</div>
          </DesignComponent>
          <DesignComponent base="4" align="start">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green">start</div>
          </DesignComponent>
          <DesignComponent base="4" align="end">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green">end</div>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(7)

const alignList = ['center', 'top', 'bottom', 'stretch', 'baseline', 'start', 'end']
for (let index = 0; index < alignList.length; index++) {
  const alignValue = alignList[index]
  const itemElement = items[index]
  await expect(itemElement).toHaveClass('design-component--base--4')
  await expect(itemElement).toHaveClass('design-component--align--' + alignValue)
  await expect(itemElement).toHaveTextContent(alignValue)
}
      `
    },
    {
      id: 'GridItemTestInteractiveAndAttrs',
      name: {
        en: 'Test: Interactive base and align toggling, empty slot and attribute merging',
        ru: 'Тест: Интерактивное переключение base и align, пустой слот и слияние атрибутов'
      },
      propsName: ['base', 'align'],
      setup: `
      const currentBase = ref<'4' | '8' | '12'>('4')
      const currentAlign = ref<'start' | 'center' | 'end' | undefined>('start')
      const clickedCount = ref(0)

      const switchBase = () => {
        currentBase.value = currentBase.value === '4' ? '8' : '12'
      }
      const switchAlign = () => {
        currentAlign.value = currentAlign.value === 'start' ? 'center' : 'end'
      }
      const clearAlign = () => {
        currentAlign.value = undefined
      }
      const onItemClick = () => {
        clickedCount.value += 1
      }

      return {
        currentBase,
        currentAlign,
        clickedCount,
        switchBase,
        switchAlign,
        clearAlign,
        onItemClick
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="switchBase">Switch Base</button>
            <button type="button" class="wiki-storybook-button" @click="switchAlign">Switch Align</button>
            <button type="button" class="wiki-storybook-button" @click="clearAlign">Clear Align</button>
            <span data-testid="grid-item-clicks">{{ clickedCount }}</span>
          </div>
          <div class="wiki-storybook-group" style="grid-auto-rows: 96px;">
            <DesignComponent
              data-testid="grid-item-interactive"
              role="gridcell"
              aria-label="Interactive grid cell"
              class="custom-grid-item-class"
              :base="currentBase"
              :align="currentAlign"
              @click="onItemClick"
            >
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">Interactive cell</div>
            </DesignComponent>
            <DesignComponent
              data-testid="grid-item-empty"
              base="6"
              align="baseline"
            />
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const interactiveItem = canvas.getByTestId('grid-item-interactive')
const emptyItem = canvas.getByTestId('grid-item-empty')

await expect(interactiveItem).toHaveClass('design-component')
await expect(interactiveItem).toHaveClass('custom-grid-item-class')
await expect(interactiveItem).toHaveClass('design-component--base--4')
await expect(interactiveItem).toHaveClass('design-component--align--start')
await expect(interactiveItem).toHaveAttribute('role', 'gridcell')
await expect(interactiveItem).toHaveAttribute('aria-label', 'Interactive grid cell')

await expect(emptyItem).toHaveClass('design-component--base--6')
await expect(emptyItem).toHaveClass('design-component--align--baseline')
await expect(emptyItem.innerHTML.trim()).toBe('')

await step('Click interactive grid item to verify forwarded click listener', async () => {
  await userEvent.click(interactiveItem)
  await expect(canvas.getByTestId('grid-item-clicks')).toHaveTextContent('1')
})

await step('Switch base column span dynamically', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Switch Base' }))
  await expect(interactiveItem).toHaveClass('design-component--base--8')
  await expect(interactiveItem).not.toHaveClass('design-component--base--4')
})

await step('Switch align variant dynamically and then clear it', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Switch Align' }))
  await expect(interactiveItem).toHaveClass('design-component--align--center')
  await expect(interactiveItem).not.toHaveClass('design-component--align--start')

  await userEvent.click(canvas.getByRole('button', { name: 'Clear Align' }))
  await expect(interactiveItem).not.toHaveClass('design-component--align--center')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'GridItem'} type={'gridItem'}/>
<Canvas of={Component.GridItemBasic}/>
<Canvas of={Component.GridItemAlign}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item" style="min-height: 48px;">
  <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px;">
    <DesignComponent v-bind="args">Item</DesignComponent>
  </div>
</div>
    `,
    description: `
Individual cell unit within a Grid layout, providing control over column spanning and alignment.
Features configurable column span settings (base from '1' to '12') and item alignment inside grid tracks (align).
Controlled via the base and align props. Use inside a Grid container to define widths and alignment for UI elements, widgets, or form fields.
    `
  }
}
