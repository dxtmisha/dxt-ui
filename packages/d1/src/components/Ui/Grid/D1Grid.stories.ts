import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Grid from './D1Grid.vue'
import { GridWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { GridProps } from '@dxtmisha/constructor/Grid'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Grid',
  component: D1Grid,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: GridWikiStorybook.getDescription()
      }
    }
  },
  argTypes: GridWikiStorybook.getWiki(),
  args: GridWikiStorybook.getValues()
} satisfies Meta<typeof D1Grid>

export default meta

type Story = StoryObj<typeof meta>

export const Grid: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Grid },
    setup: () => ({ args }),
    template: `
      <D1Grid v-bind="args">
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
    </D1Grid>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-grid')
    await expect(component).toBeInTheDocument()
    await expect(component?.children.length).toBe(3)
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const GridBasic: Story = {
  name: 'Базовая сетка',
  render: () => ({
    components: { D1Grid },
    template: `
        
        <D1Grid data-testid="grid-basic">
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
        </D1Grid>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('[data-testid="grid-basic"]')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveClass('d1-grid')
    await expect(component?.children.length).toBe(5)
  }
}
export const GridAlign: Story = {
  name: 'Выравнивание элементов',
  render: () => ({
    components: { D1Grid },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="top"</div>
            <D1Grid data-testid="grid-align-top" align="top">
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
            </D1Grid>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="center"</div>
            <D1Grid data-testid="grid-align-center" align="center">
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
            </D1Grid>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="bottom"</div>
            <D1Grid data-testid="grid-align-bottom" align="bottom">
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
            </D1Grid>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">align="stretch"</div>
            <D1Grid data-testid="grid-align-stretch" align="stretch">
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
            </D1Grid>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[data-testid="grid-align-top"]')).toHaveClass('d1-grid--align--top')
    await expect(canvasElement.querySelector('[data-testid="grid-align-center"]')).toHaveClass('d1-grid--align--center')
    await expect(canvasElement.querySelector('[data-testid="grid-align-bottom"]')).toHaveClass('d1-grid--align--bottom')
    await expect(canvasElement.querySelector('[data-testid="grid-align-stretch"]')).toHaveClass('d1-grid--align--stretch')
  }
}
export const GridSlots: Story = {
  name: 'Слот по умолчанию',
  render: () => ({
    components: { D1Grid },
    template: `
        
        <D1Grid data-testid="grid-slots">
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
        </D1Grid>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('[data-testid="grid-slots"]')
    await expect(component).toBeInTheDocument()
    await expect(component?.children.length).toBe(3)
    await expect(component).toHaveTextContent('Column 1')
    await expect(component).toHaveTextContent('Column 2')
    await expect(component).toHaveTextContent('Column 3')
  }
}
export const GridTestAlignAll: Story = {
  name: 'Тест: Все варианты свойства align',
  render: () => ({
    components: { D1Grid },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">default (no align)</div>
            <D1Grid data-testid="grid-test-default">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">center</div>
            <D1Grid data-testid="grid-test-center" align="center">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">top</div>
            <D1Grid data-testid="grid-test-top" align="top">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">bottom</div>
            <D1Grid data-testid="grid-test-bottom" align="bottom">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">stretch</div>
            <D1Grid data-testid="grid-test-stretch" align="stretch">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6; height: auto;"/>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">baseline</div>
            <D1Grid data-testid="grid-test-baseline" align="baseline">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6; padding-top: 16px;">Baseline A</div>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;">Baseline B</div>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">start</div>
            <D1Grid data-testid="grid-test-start" align="start">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">end</div>
            <D1Grid data-testid="grid-test-end" align="end">
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 6;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="grid-column: span 6;"/>
            </D1Grid>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const defaultElement = canvasElement.querySelector('[data-testid="grid-test-default"]')
    await expect(defaultElement).toHaveClass('d1-grid')
    await expect(defaultElement?.className).not.toContain('d1-grid--align--')

    await expect(canvasElement.querySelector('[data-testid="grid-test-center"]')).toHaveClass('d1-grid--align--center')
    await expect(canvasElement.querySelector('[data-testid="grid-test-top"]')).toHaveClass('d1-grid--align--top')
    await expect(canvasElement.querySelector('[data-testid="grid-test-bottom"]')).toHaveClass('d1-grid--align--bottom')
    await expect(canvasElement.querySelector('[data-testid="grid-test-stretch"]')).toHaveClass('d1-grid--align--stretch')
    await expect(canvasElement.querySelector('[data-testid="grid-test-baseline"]')).toHaveClass('d1-grid--align--baseline')
    await expect(canvasElement.querySelector('[data-testid="grid-test-start"]')).toHaveClass('d1-grid--align--start')
    await expect(canvasElement.querySelector('[data-testid="grid-test-end"]')).toHaveClass('d1-grid--align--end')
  }
}
export const GridTestColumnsAndAttrs: Story = {
  name: 'Тест: Пользовательская CSS-переменная колонок, атрибуты и пустой слот',
  render: () => ({
    components: { D1Grid },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">--d1-grid-columns: 4</div>
            <D1Grid
              data-testid="grid-columns-custom"
              style="--d1-grid-columns: 4;"
            >
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 1;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm" style="grid-column: span 1;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm" style="grid-column: span 1;"/>
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm" style="grid-column: span 1;"/>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">attrs and class passthrough</div>
            <D1Grid
              data-testid="grid-attrs"
              class="wiki-custom-grid"
              data-custom-attr="grid-value"
              aria-label="Custom grid"
            >
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm" style="grid-column: span 12;"/>
            </D1Grid>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">empty default slot</div>
            <D1Grid data-testid="grid-empty"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const customColumnsGrid = canvasElement.querySelector('[data-testid="grid-columns-custom"]') as HTMLElement | null
    await expect(customColumnsGrid).toBeInTheDocument()
    await expect(customColumnsGrid?.style.getPropertyValue('--d1-grid-columns').trim()).toBe('4')
    await expect(customColumnsGrid?.children.length).toBe(4)

    const attrsGrid = canvasElement.querySelector('[data-testid="grid-attrs"]')
    await expect(attrsGrid).toHaveClass('d1-grid')
    await expect(attrsGrid).toHaveClass('wiki-custom-grid')
    await expect(attrsGrid).toHaveAttribute('data-custom-attr', 'grid-value')
    await expect(attrsGrid).toHaveAttribute('aria-label', 'Custom grid')

    const emptyGrid = canvasElement.querySelector('[data-testid="grid-empty"]')
    await expect(emptyGrid).toBeInTheDocument()
    await expect(emptyGrid).toHaveClass('d1-grid')
    await expect(emptyGrid?.children.length).toBe(0)
  }
}
export const GridTestInteractiveAlign: Story = {
  name: 'Тест: Реактивное переключение align',
  render: () => ({
    components: { D1Grid },
    setup() {
      const currentAlign = ref<GridProps['align']>('start')
      const setAlign = (alignValue: GridProps['align']) => {
        currentAlign.value = alignValue
      }
      return {
        currentAlign,
        setAlign
      }
    },
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
          <D1Grid data-testid="grid-interactive" :align="currentAlign">
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
          </D1Grid>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const gridElement = canvasElement.querySelector('[data-testid="grid-interactive"]')

    await expect(gridElement).toHaveClass('d1-grid--align--start')

    await step('Switch align to center', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Center' }))
      await expect(gridElement).toHaveClass('d1-grid--align--center')
      await expect(gridElement).not.toHaveClass('d1-grid--align--start')
    })

    await step('Switch align to bottom', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Bottom' }))
      await expect(gridElement).toHaveClass('d1-grid--align--bottom')
      await expect(gridElement).not.toHaveClass('d1-grid--align--center')
    })

    await step('Switch align to stretch', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Stretch' }))
      await expect(gridElement).toHaveClass('d1-grid--align--stretch')
    })

    await step('Switch align to baseline', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Baseline' }))
      await expect(gridElement).toHaveClass('d1-grid--align--baseline')
    })

    await step('Switch align to end', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'End' }))
      await expect(gridElement).toHaveClass('d1-grid--align--end')
    })

    await step('Switch align to top', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Top' }))
      await expect(gridElement).toHaveClass('d1-grid--align--top')
    })
  }
}
// :story-items [!] System label / Системная метка
