import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SelectableArea from './D1SelectableArea.vue'
import { SelectableAreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { SelectableAreaEventParameters, SelectableAreaExpose } from '@dxtmisha/constructor/SelectableArea'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SelectableArea',
  component: D1SelectableArea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SelectableAreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SelectableAreaWikiStorybook.getWiki(),
  args: SelectableAreaWikiStorybook.getValues()
} satisfies Meta<typeof D1SelectableArea>

export default meta

type Story = StoryObj<typeof meta>

export const SelectableArea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1SelectableArea },
    setup: () => ({ args }),
    template: `
      <D1SelectableArea v-bind="args">
      <template #default="{ className, classClick, onClick }">
        <div
          class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
            :data-value="'item-' + item"
            style="overflow: visible;"
            @click="onClick"
          >
            Item {{ item }}
          </div>
        </div>
      </template>
    </D1SelectableArea>
    `
  }),
  play: async ({ canvasElement }) => {
    const area = canvasElement.querySelector('.d1-selectableArea')
    await expect(area).toBeInTheDocument()
    const items = canvasElement.querySelectorAll('[data-value]')
    await expect(items.length).toBe(12)
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SelectableAreaBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1SelectableArea },
    template: `
        
        <D1SelectableArea>
          <template #default="{ className, classClick, onClick }">
            <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
              <div
                v-for="item in 6"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('[data-value]')
    await expect(items.length).toBe(6)
    await userEvent.click(items[0])
    await expect(canvasElement.querySelector('.d1-selectableArea__square')).toHaveAttribute('aria-hidden', 'true')
  }
}
export const SelectableAreaVModel: Story = {
  name: 'v-model',
  render: () => ({
    components: { D1SelectableArea },
    setup() {
      return {
        selected: ref(['item-2', 'item-3'])
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="selectable-model">Selected items: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = []">Reset</button>
            <button class="wiki-storybook-button" @click="selected = ['item-1', 'item-2', 'item-3']">Select 1-3</button>
          </div>

          <D1SelectableArea
            v-model:selected="selected"
          >
            <template #default="{ className, classSelection, classClick, onClick }">
              <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
                <div
                  v-for="item in 6"
                  :key="item"
                  :class="[
                    'wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center',
                    className,
                    classClick,
                    selected.includes('item-' + item) && classSelection
                  ]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Item {{ item }}
                </div>
              </div>
            </template>
          </D1SelectableArea>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('selectable-model')).toHaveTextContent('item-2')
    await step('Reset selection via button', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
      await expect(canvas.getByTestId('selectable-model')).toHaveTextContent('[]')
    })
    await step('Select items 1-3 via button', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Select 1-3' }))
      await expect(canvas.getByTestId('selectable-model')).toHaveTextContent('item-1')
    })
  }
}
export const SelectableAreaTestModesAndExpose: Story = {
  name: 'Тест: Режимы active, disabled, tag, события и методы expose',
  render: () => ({
    components: { D1SelectableArea },
    setup() {
      const areaReference = ref<SelectableAreaExpose | null>(null)
      const activeSelected = ref<string[]>([])
      const disabledSelected = ref<string[]>(['item-1'])
      const emittedSelection = ref<string>('')
      const onSelected = (parameters: SelectableAreaEventParameters) => {
        emittedSelection.value = parameters.selected.join(',')
      }
      const applyExpose = () => {
        areaReference.value?.setSelected(['item-1', 'item-3'])
      }
      const resetExpose = () => {
        areaReference.value?.reset()
      }
      return { areaReference, activeSelected, disabledSelected, emittedSelection, onSelected, applyExpose, resetExpose }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="applyExpose">Expose Select</button>
            <button class="wiki-storybook-button" @click="resetExpose">Expose Reset</button>
            <span data-testid="selectable-emitted">{{ emittedSelection }}</span>
          </div>
          <D1SelectableArea
            ref="areaReference"
            v-model:selected="activeSelected"
            active
            tag="section"
            @selected="onSelected"
          >
            <template #default="{ className, classClick, onClick }">
              <div class="wiki-storybook-flex">
                <div
                  v-for="item in 4"
                  :key="item"
                  :class="['wiki-storybook-item wiki-storybook-item--auto', className, classClick]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Active {{ item }}
                </div>
              </div>
            </template>
          </D1SelectableArea>
          <D1SelectableArea
            v-model:selected="disabledSelected"
            disabled
          >
            <template #default="{ className, classClick, onClick }">
              <div class="wiki-storybook-flex">
                <div
                  v-for="item in 2"
                  :key="item"
                  :class="['wiki-storybook-item wiki-storybook-item--auto', className, classClick]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Disabled {{ item }}
                </div>
              </div>
            </template>
          </D1SelectableArea>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const areas = canvasElement.querySelectorAll('.d1-selectableArea')
    await expect(areas.length).toBe(2)
    await expect(areas[0].tagName).toBe('SECTION')

    await step('Programmatic setSelected and reset via expose', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Expose Select' }))
      await waitFor(() => {
        expect(canvas.getByTestId('selectable-emitted')).toHaveTextContent('item-1,item-3')
      })
      await userEvent.click(canvas.getByRole('button', { name: 'Expose Reset' }))
      await waitFor(() => {
        expect(canvas.getByTestId('selectable-emitted')).toHaveTextContent('')
      })
    })
  }
}
// :story-items [!] System label / Системная метка
