import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1GridItem from './D1GridItem.vue'
import { GridItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/GridItem',
  component: D1GridItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: GridItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: GridItemWikiStorybook.getWiki(),
  args: GridItemWikiStorybook.getValues()
} satisfies Meta<typeof D1GridItem>

export default meta

type Story = StoryObj<typeof meta>

export const GridItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1GridItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group">
      <D1GridItem v-bind="args">
        <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"/>
      </D1GridItem>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-gridItem')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('DIV')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const GridItemBasic: Story = {
  name: 'Ширина в колонках (base)',
  render: () => ({
    components: { D1GridItem },
    template: `
        
        <div class="wiki-storybook-group">
          <D1GridItem base="6">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm">base="6"</div>
          </D1GridItem>
          <D1GridItem base="6">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm">base="6"</div>
          </D1GridItem>
          <D1GridItem base="4">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm">base="4"</div>
          </D1GridItem>
          <D1GridItem base="8">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm">base="8"</div>
          </D1GridItem>
          <D1GridItem base="12">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--size--sm">base="12"</div>
          </D1GridItem>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-gridItem')
    await expect(items.length).toBe(5)
    await expect(items[0]).toHaveClass('d1-gridItem--base--6')
    await expect(items[1]).toHaveClass('d1-gridItem--base--6')
    await expect(items[2]).toHaveClass('d1-gridItem--base--4')
    await expect(items[3]).toHaveClass('d1-gridItem--base--8')
    await expect(items[4]).toHaveClass('d1-gridItem--base--12')
  }
}
export const GridItemAlign: Story = {
  name: 'Выравнивание в ячейке (align)',
  render: () => ({
    components: { D1GridItem },
    template: `
        
        <div class="wiki-storybook-group" style="grid-auto-rows: 96px;">
          <D1GridItem base="3" align="start">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">align="start"</div>
          </D1GridItem>
          <D1GridItem base="3" align="center">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red">align="center"</div>
          </D1GridItem>
          <D1GridItem base="3" align="end">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green">align="end"</div>
          </D1GridItem>
          <D1GridItem base="3" align="stretch">
            <div class="wiki-storybook-dummy" style="height: 100%;">align="stretch"</div>
          </D1GridItem>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-gridItem')
    await expect(items.length).toBe(4)
    await expect(items[0]).toHaveClass('d1-gridItem--base--3')
    await expect(items[0]).toHaveClass('d1-gridItem--align--start')
    await expect(items[1]).toHaveClass('d1-gridItem--base--3')
    await expect(items[1]).toHaveClass('d1-gridItem--align--center')
    await expect(items[2]).toHaveClass('d1-gridItem--base--3')
    await expect(items[2]).toHaveClass('d1-gridItem--align--end')
    await expect(items[3]).toHaveClass('d1-gridItem--base--3')
    await expect(items[3]).toHaveClass('d1-gridItem--align--stretch')
  }
}
export const GridItemTestBase: Story = {
  name: 'Тест: Значение по умолчанию и все варианты ширины колонок base (от 1 до 12)',
  render: () => ({
    components: { D1GridItem },
    template: `
        
        <div class="wiki-storybook-group">
          <D1GridItem data-testid="grid-item-default">
            <div class="wiki-storybook-dummy">default</div>
          </D1GridItem>
          <D1GridItem base="1">
            <div class="wiki-storybook-dummy">1</div>
          </D1GridItem>
          <D1GridItem base="2">
            <div class="wiki-storybook-dummy">2</div>
          </D1GridItem>
          <D1GridItem base="3">
            <div class="wiki-storybook-dummy">3</div>
          </D1GridItem>
          <D1GridItem base="4">
            <div class="wiki-storybook-dummy">4</div>
          </D1GridItem>
          <D1GridItem base="5">
            <div class="wiki-storybook-dummy">5</div>
          </D1GridItem>
          <D1GridItem base="6">
            <div class="wiki-storybook-dummy">6</div>
          </D1GridItem>
          <D1GridItem base="7">
            <div class="wiki-storybook-dummy">7</div>
          </D1GridItem>
          <D1GridItem base="8">
            <div class="wiki-storybook-dummy">8</div>
          </D1GridItem>
          <D1GridItem base="9">
            <div class="wiki-storybook-dummy">9</div>
          </D1GridItem>
          <D1GridItem base="10">
            <div class="wiki-storybook-dummy">10</div>
          </D1GridItem>
          <D1GridItem base="11">
            <div class="wiki-storybook-dummy">11</div>
          </D1GridItem>
          <D1GridItem base="12">
            <div class="wiki-storybook-dummy">12</div>
          </D1GridItem>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-gridItem')
    await expect(items.length).toBe(13)
    await expect(items[0].tagName).toBe('DIV')
    await expect(items[0]).toHaveClass('d1-gridItem--base--1')
    await expect(items[0]).toHaveTextContent('default')

    const baseList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    for (let index = 0; index < baseList.length; index++) {
      const baseValue = baseList[index]
      const itemElement = items[index + 1]
      await expect(itemElement.tagName).toBe('DIV')
      await expect(itemElement).toHaveClass('d1-gridItem--base--' + baseValue)
      await expect(itemElement).toHaveTextContent(baseValue)
    }
  }
}
export const GridItemTestAlign: Story = {
  name: 'Тест: Все варианты выравнивания align',
  render: () => ({
    components: { D1GridItem },
    template: `
        
        <div class="wiki-storybook-group" style="grid-auto-rows: 96px;">
          <D1GridItem base="4" align="center">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">center</div>
          </D1GridItem>
          <D1GridItem base="4" align="top">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">top</div>
          </D1GridItem>
          <D1GridItem base="4" align="bottom">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">bottom</div>
          </D1GridItem>
          <D1GridItem base="4" align="stretch">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--red" style="height: 100%;">stretch</div>
          </D1GridItem>
          <D1GridItem base="4" align="baseline">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green">baseline</div>
          </D1GridItem>
          <D1GridItem base="4" align="start">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green">start</div>
          </D1GridItem>
          <D1GridItem base="4" align="end">
            <div class="wiki-storybook-dummy wiki-storybook-dummy--color--green">end</div>
          </D1GridItem>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-gridItem')
    await expect(items.length).toBe(7)

    const alignList = ['center', 'top', 'bottom', 'stretch', 'baseline', 'start', 'end']
    for (let index = 0; index < alignList.length; index++) {
      const alignValue = alignList[index]
      const itemElement = items[index]
      await expect(itemElement).toHaveClass('d1-gridItem--base--4')
      await expect(itemElement).toHaveClass('d1-gridItem--align--' + alignValue)
      await expect(itemElement).toHaveTextContent(alignValue)
    }
  }
}
export const GridItemTestInteractiveAndAttrs: Story = {
  name: 'Тест: Интерактивное переключение base и align, пустой слот и слияние атрибутов',
  render: () => ({
    components: { D1GridItem },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="switchBase">Switch Base</button>
            <button type="button" class="wiki-storybook-button" @click="switchAlign">Switch Align</button>
            <button type="button" class="wiki-storybook-button" @click="clearAlign">Clear Align</button>
            <span data-testid="grid-item-clicks">{{ clickedCount }}</span>
          </div>
          <div class="wiki-storybook-group" style="grid-auto-rows: 96px;">
            <D1GridItem
              data-testid="grid-item-interactive"
              role="gridcell"
              aria-label="Interactive grid cell"
              class="custom-grid-item-class"
              :base="currentBase"
              :align="currentAlign"
              @click="onItemClick"
            >
              <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue">Interactive cell</div>
            </D1GridItem>
            <D1GridItem
              data-testid="grid-item-empty"
              base="6"
              align="baseline"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const interactiveItem = canvas.getByTestId('grid-item-interactive')
    const emptyItem = canvas.getByTestId('grid-item-empty')

    await expect(interactiveItem).toHaveClass('d1-gridItem')
    await expect(interactiveItem).toHaveClass('custom-grid-item-class')
    await expect(interactiveItem).toHaveClass('d1-gridItem--base--4')
    await expect(interactiveItem).toHaveClass('d1-gridItem--align--start')
    await expect(interactiveItem).toHaveAttribute('role', 'gridcell')
    await expect(interactiveItem).toHaveAttribute('aria-label', 'Interactive grid cell')

    await expect(emptyItem).toHaveClass('d1-gridItem--base--6')
    await expect(emptyItem).toHaveClass('d1-gridItem--align--baseline')
    await expect(emptyItem.innerHTML.trim()).toBe('')

    await step('Click interactive grid item to verify forwarded click listener', async () => {
      await userEvent.click(interactiveItem)
      await expect(canvas.getByTestId('grid-item-clicks')).toHaveTextContent('1')
    })

    await step('Switch base column span dynamically', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Switch Base' }))
      await expect(interactiveItem).toHaveClass('d1-gridItem--base--8')
      await expect(interactiveItem).not.toHaveClass('d1-gridItem--base--4')
    })

    await step('Switch align variant dynamically and then clear it', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Switch Align' }))
      await expect(interactiveItem).toHaveClass('d1-gridItem--align--center')
      await expect(interactiveItem).not.toHaveClass('d1-gridItem--align--start')

      await userEvent.click(canvas.getByRole('button', { name: 'Clear Align' }))
      await expect(interactiveItem).not.toHaveClass('d1-gridItem--align--center')
    })
  }
}
// :story-items [!] System label / Системная метка
