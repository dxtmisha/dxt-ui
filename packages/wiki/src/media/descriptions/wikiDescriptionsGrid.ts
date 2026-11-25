import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Grid component properties
 *
 * Описания свойств компонента Grid
 */
export const wikiDescriptionsGrid: StorybookComponentsDescriptionItem = {
  name: 'Grid',
  description: {
    en: 'Layout component for creating CSS Grid structures with configurable columns and item alignment',
    ru: 'Компонент макета для создания CSS Grid структур с настраиваемыми колонками и выравниванием элементов'
  },
  possibilities: {
    en: [
      '12-column CSS Grid layout by default',
      'customizable column count via CSS custom property',
      'cross-axis alignment of grid items (align)',
      'flexible default slot for grid children'
    ],
    ru: [
      '12-колоночный CSS Grid макет по умолчанию',
      'настраиваемое количество колонок через CSS-переменную',
      'выравнивание элементов сетки по поперечной оси (align)',
      'гибкий слот по умолчанию для дочерних элементов сетки'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { GridProps } from \'@dxtmisha/constructor/Grid\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <div
        class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
        style="grid-column: span 2;"
      />
      <div
        class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
        style="grid-column: span 4;"
      />
      <div
        class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
        style="grid-column: span 6;"
      />
    </DesignComponent>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.children.length).toBe(3)
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'GridBasic',
      name: {
        en: 'Basic layout',
        ru: 'Базовая сетка'
      },
      template: `
        <DesignComponent data-testid="grid-basic">
          <div
            class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
            style="grid-column: span 6;"
          />
          <div
            class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
            style="grid-column: span 6;"
          />
          <div
            class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
            style="grid-column: span 4;"
          />
          <div
            class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
            style="grid-column: span 4;"
          />
          <div
            class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
            style="grid-column: span 4;"
          />
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('[data-testid="grid-basic"]')
await expect(component).toBeInTheDocument()
await expect(component).toHaveClass('design-component')
await expect(component?.children.length).toBe(5)
      `
    },
    {
      id: 'GridAlign',
      name: {
        en: 'Item alignment',
        ru: 'Выравнивание элементов'
      },
      propsName: ['align'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="top"</div>
            <DesignComponent data-testid="grid-align-top" align="top">
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--md"
                style="grid-column: span 4;"
              />
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--red"
                style="grid-column: span 4;"
              />
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
                style="grid-column: span 4;"
              />
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="center"</div>
            <DesignComponent data-testid="grid-align-center" align="center">
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--md"
                style="grid-column: span 4;"
              />
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--red"
                style="grid-column: span 4;"
              />
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
                style="grid-column: span 4;"
              />
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="bottom"</div>
            <DesignComponent data-testid="grid-align-bottom" align="bottom">
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--md"
                style="grid-column: span 4;"
              />
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--red"
                style="grid-column: span 4;"
              />
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
                style="grid-column: span 4;"
              />
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="stretch"</div>
            <DesignComponent data-testid="grid-align-stretch" align="stretch">
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--md"
                style="grid-column: span 4;"
              />
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--red"
                style="grid-column: span 4; height: auto;"
              />
              <div
                class="wiki-storybook-dummy wiki-storybook-dummy--color--green"
                style="grid-column: span 4; height: auto;"
              />
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
await expect(canvasElement.querySelector('[data-testid="grid-align-top"]')).toHaveClass('design-component--align--top')
await expect(canvasElement.querySelector('[data-testid="grid-align-center"]')).toHaveClass('design-component--align--center')
await expect(canvasElement.querySelector('[data-testid="grid-align-bottom"]')).toHaveClass('design-component--align--bottom')
await expect(canvasElement.querySelector('[data-testid="grid-align-stretch"]')).toHaveClass('design-component--align--stretch')
      `
    },
    {
      id: 'GridSlots',
      name: {
        en: 'Default slot',
        ru: 'Слот по умолчанию'
      },
      template: `
        <DesignComponent data-testid="grid-slots">
          <template #default>
            <div
              class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
              style="grid-column: span 4;"
            >
              Column 1
            </div>
            <div
              class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
              style="grid-column: span 4;"
            >
              Column 2
            </div>
            <div
              class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
              style="grid-column: span 4;"
            >
              Column 3
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('[data-testid="grid-slots"]')
await expect(component).toBeInTheDocument()
await expect(component?.children.length).toBe(3)
await expect(component).toHaveTextContent('Column 1')
await expect(component).toHaveTextContent('Column 2')
await expect(component).toHaveTextContent('Column 3')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'GridTestAlignAll',
      name: {
        en: 'Test: All align prop variants',
        ru: 'Тест: Все варианты свойства align'
      },
      propsName: ['align'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">default (no align)</div>
            <DesignComponent data-testid="grid-test-default">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">center</div>
            <DesignComponent data-testid="grid-test-center" align="center">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">top</div>
            <DesignComponent data-testid="grid-test-top" align="top">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">bottom</div>
            <DesignComponent data-testid="grid-test-bottom" align="bottom">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">stretch</div>
            <DesignComponent data-testid="grid-test-stretch" align="stretch">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6; height: auto;"/>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">baseline</div>
            <DesignComponent data-testid="grid-test-baseline" align="baseline">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6; padding-top: 16px;">Baseline A</div>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;">Baseline B</div>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">start</div>
            <DesignComponent data-testid="grid-test-start" align="start">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">end</div>
            <DesignComponent data-testid="grid-test-end" align="end">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const defaultElement = canvasElement.querySelector('[data-testid="grid-test-default"]')
await expect(defaultElement).toHaveClass('design-component')
await expect(defaultElement?.className).not.toContain('design-component--align--')

await expect(canvasElement.querySelector('[data-testid="grid-test-center"]')).toHaveClass('design-component--align--center')
await expect(canvasElement.querySelector('[data-testid="grid-test-top"]')).toHaveClass('design-component--align--top')
await expect(canvasElement.querySelector('[data-testid="grid-test-bottom"]')).toHaveClass('design-component--align--bottom')
await expect(canvasElement.querySelector('[data-testid="grid-test-stretch"]')).toHaveClass('design-component--align--stretch')
await expect(canvasElement.querySelector('[data-testid="grid-test-baseline"]')).toHaveClass('design-component--align--baseline')
await expect(canvasElement.querySelector('[data-testid="grid-test-start"]')).toHaveClass('design-component--align--start')
await expect(canvasElement.querySelector('[data-testid="grid-test-end"]')).toHaveClass('design-component--align--end')
      `
    },
    {
      id: 'GridTestColumnsAndAttrs',
      name: {
        en: 'Test: Custom columns CSS variable, attrs and empty slot',
        ru: 'Тест: Пользовательская CSS-переменная колонок, атрибуты и пустой слот'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">--design-component-columns: 4</div>
            <DesignComponent
              data-testid="grid-columns-custom"
              style="--design-component-columns: 4;"
            >
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 1;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm" style="grid-column: span 1;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm" style="grid-column: span 1;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 1;"/>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">attrs and class passthrough</div>
            <DesignComponent
              data-testid="grid-attrs"
              class="wiki-custom-grid"
              data-custom-attr="grid-value"
              aria-label="Custom grid"
            >
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm" style="grid-column: span 12;"/>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">empty default slot</div>
            <DesignComponent data-testid="grid-empty"/>
          </div>
        </div>
      `,
      play: `
const customColumnsGrid = canvasElement.querySelector('[data-testid="grid-columns-custom"]') as HTMLElement | null
await expect(customColumnsGrid).toBeInTheDocument()
await expect(customColumnsGrid?.style.getPropertyValue('--design-component-columns').trim()).toBe('4')
await expect(customColumnsGrid?.children.length).toBe(4)

const attrsGrid = canvasElement.querySelector('[data-testid="grid-attrs"]')
await expect(attrsGrid).toHaveClass('design-component')
await expect(attrsGrid).toHaveClass('wiki-custom-grid')
await expect(attrsGrid).toHaveAttribute('data-custom-attr', 'grid-value')
await expect(attrsGrid).toHaveAttribute('aria-label', 'Custom grid')

const emptyGrid = canvasElement.querySelector('[data-testid="grid-empty"]')
await expect(emptyGrid).toBeInTheDocument()
await expect(emptyGrid).toHaveClass('design-component')
await expect(emptyGrid?.children.length).toBe(0)
      `
    },
    {
      id: 'GridTestInteractiveAlign',
      name: {
        en: 'Test: Reactive align switching',
        ru: 'Тест: Реактивное переключение align'
      },
      propsName: ['align'],
      setup: `
      const currentAlign = ref<GridProps['align']>('start')
      const setAlign = (alignValue: GridProps['align']) => {
        currentAlign.value = alignValue
      }
      return {
        currentAlign,
        setAlign
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setAlign('center')">Center</button>
            <button type="button" class="wiki-storybook-button" @click="setAlign('top')">Top</button>
            <button type="button" class="wiki-storybook-button" @click="setAlign('bottom')">Bottom</button>
            <button type="button" class="wiki-storybook-button" @click="setAlign('stretch')">Stretch</button>
            <button type="button" class="wiki-storybook-button" @click="setAlign('baseline')">Baseline</button>
            <button type="button" class="wiki-storybook-button" @click="setAlign('start')">Start</button>
            <button type="button" class="wiki-storybook-button" @click="setAlign('end')">End</button>
          </div>
          <DesignComponent data-testid="grid-interactive" :align="currentAlign">
            <div
              class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--md"
              style="grid-column: span 6;"
            >
              Item 1
            </div>
            <div
              class="wiki-storybook-dummy wiki-storybook-dummy--color--red"
              style="grid-column: span 6;"
            >
              Item 2
            </div>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const gridElement = canvasElement.querySelector('[data-testid="grid-interactive"]')

await expect(gridElement).toHaveClass('design-component--align--start')

await step('Switch align to center', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Center' }))
  await expect(gridElement).toHaveClass('design-component--align--center')
  await expect(gridElement).not.toHaveClass('design-component--align--start')
})

await step('Switch align to bottom', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Bottom' }))
  await expect(gridElement).toHaveClass('design-component--align--bottom')
  await expect(gridElement).not.toHaveClass('design-component--align--center')
})

await step('Switch align to stretch', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Stretch' }))
  await expect(gridElement).toHaveClass('design-component--align--stretch')
})

await step('Switch align to baseline', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Baseline' }))
  await expect(gridElement).toHaveClass('design-component--align--baseline')
})

await step('Switch align to end', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'End' }))
  await expect(gridElement).toHaveClass('design-component--align--end')
})

await step('Switch align to top', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Top' }))
  await expect(gridElement).toHaveClass('design-component--align--top')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Grid'} type={'grid'}/>
<Canvas of={Component.GridBasic}/>
<Canvas of={Component.GridAlign}/>
    `,
    slots: `
<Canvas of={Component.GridSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
      <div :class="classDemo.item">
        <DesignComponent v-bind="args">
          <div style="grid-column: span 4;">1</div>
          <div style="grid-column: span 4;">2</div>
          <div style="grid-column: span 4;">3</div>
        </DesignComponent>
      </div>
    `,
    description: `
Layout container component built on CSS Grid for organizing items into a multi-column structure.
Features a default 12-column grid (configurable via the component columns CSS custom property), cross-axis item alignment via the align prop (center, top, bottom, stretch, baseline, start, end), and a default slot for grid items.
Use as a structural container for dashboard widgets, form layouts, or any multi-column interface arrangement.
    `
  }
}
