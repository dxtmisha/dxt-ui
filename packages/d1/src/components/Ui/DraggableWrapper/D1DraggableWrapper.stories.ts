import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1DraggableWrapper from './D1DraggableWrapper.vue'
import { DraggableWrapperWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { DraggableWrapperExpose } from '@dxtmisha/constructor/DraggableWrapper'
import { expect, within, userEvent, waitFor, fireEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/DraggableWrapper',
  component: D1DraggableWrapper,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: DraggableWrapperWikiStorybook.getDescription()
      }
    }
  },
  argTypes: DraggableWrapperWikiStorybook.getWiki(),
  args: DraggableWrapperWikiStorybook.getValues()
} satisfies Meta<typeof D1DraggableWrapper>

export default meta

type Story = StoryObj<typeof meta>

export const DraggableWrapper: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1DraggableWrapper },
    setup: () => ({ args }),
    template: `
      <D1DraggableWrapper v-bind="args">
      <template #default="{ className, classClick, classDrop, classPosition }">
        <div class="wiki-storybook-group">
          <div
            :class="['wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-item--center', className, classDrop]"
            data-value="drop-target-1"
          >
            Drop Zone 1
          </div>
          <div
            :class="['wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-item--center', className, classDrop]"
            data-value="drop-target-2"
          >
            Drop Zone 2
          </div>

          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-dummy--color--blue', className, classClick, classPosition]"
            :data-value="'item-' + item"
          >
            <span>Item {{ item }}</span>
          </div>
        </div>
      </template>
    </D1DraggableWrapper>
    `
  }),
  play: async ({ canvasElement }) => {
    const wrapper = canvasElement.querySelector('.d1-draggableWrapper')
    await expect(wrapper).toBeInTheDocument()
    await expect(wrapper?.querySelectorAll('[data-value^="item-"]').length).toBe(12)
    await expect(wrapper?.querySelectorAll('[data-value^="drop-target-"]').length).toBe(2)
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const DraggableWrapperHandle: Story = {
  name: 'Дочерняя ручка перетаскивания (classClick)',
  render: () => ({
    components: { D1DraggableWrapper },
    template: `
        
        <D1DraggableWrapper :delay="0">
          <template #default="{ className, classClick, classPosition }">
            <div class="wiki-storybook-group">
              <div
                v-for="item in 4"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center', className, classPosition]"
                :data-value="'handle-' + item"
              >
                <span :class="classClick">☰</span>
                <span>Task {{ item }}</span>
              </div>
            </div>
          </template>
        </D1DraggableWrapper>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const wrapper = canvasElement.querySelector('.d1-draggableWrapper')
    await expect(wrapper).toBeInTheDocument()
    await expect(wrapper?.querySelectorAll('[data-value^="handle-"]').length).toBe(4)
    await expect(wrapper?.querySelectorAll('.d1-draggableWrapper__click').length).toBe(4)
  }
}
export const DraggableWrapperDisabled: Story = {
  name: 'Отключённое состояние',
  render: () => ({
    components: { D1DraggableWrapper },
    template: `
        
        <D1DraggableWrapper disabled>
          <template #default="{ className, classClick, classPosition }">
            <div class="wiki-storybook-group">
              <div
                v-for="item in 3"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick, classPosition]"
                :data-value="'locked-' + item"
              >
                Locked {{ item }}
              </div>
            </div>
          </template>
        </D1DraggableWrapper>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const wrapper = canvasElement.querySelector('.d1-draggableWrapper')
    await expect(wrapper).toBeInTheDocument()
    await expect(wrapper).toHaveClass('d1-draggableWrapper--disabled')
  }
}
export const DraggableWrapperTestPropsAndExpose: Story = {
  name: 'Тест: Тег, delay, classesSquare, классы слота и expose toNewPosition',
  render: () => ({
    components: { D1DraggableWrapper },
    setup() {
      const wrapperRef = ref<DraggableWrapperExpose | null>(null)
      const reordered = ref<string>('')
      const runReorder = () => {
        if (!wrapperRef.value) return
        const result = wrapperRef.value.toNewPosition(
          [
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'c', label: 'C' }
          ],
          {
            active: document.createElement('div'),
            value: ['a', 'c'],
            valueActive: 'a',
            valueSelection: ['a'],
            valueTo: 'c',
            before: false
          }
        )
        reordered.value = result.map(entry => entry.label).join(',')
      }
      return { wrapperRef, reordered, runReorder }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="runReorder">Reorder</button>
            <span class="wiki-storybook-card" data-testid="reordered-output">{{ reordered }}</span>
          </div>
          <D1DraggableWrapper
            ref="wrapperRef"
            tag="section"
            :delay="0"
            :classes-square="['custom-square-class']"
          >
            <template #default="{ className, classClick, classDrop, classPosition, classSelection }">
              <div
                class="wiki-storybook-group"
                :data-classes="[className, classClick, classDrop, classPosition, classSelection].join('|')"
              >
                <div :class="[className, classClick, classPosition, classSelection]" data-value="a">A</div>
                <div :class="[className, classClick, classPosition]" data-value="b">B</div>
                <div :class="[className, classClick, classPosition]" data-value="c">C</div>
              </div>
            </template>
          </D1DraggableWrapper>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const wrapper = canvasElement.querySelector('section.d1-draggableWrapper')
    await expect(wrapper).toBeInTheDocument()
    const square = wrapper?.querySelector('.d1-draggableWrapper__square')
    await expect(square).toBeInTheDocument()
    const firstItem = wrapper?.querySelector('[data-value="a"]')
    await expect(firstItem).toBeInTheDocument()

    await step('Activate drag with delay=0 and verify classesSquare', async () => {
      await fireEvent.mouseDown(firstItem as HTMLElement, { button: 0, clientX: 20, clientY: 20 })
      await waitFor(() => {
        expect(square).toHaveClass('custom-square-class')
      })
      await fireEvent.mouseUp(window)
    })

    await step('Invoke exposed toNewPosition helper', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Reorder' }))
      await expect(canvas.getByTestId('reordered-output')).toHaveTextContent('B,C,A')
    })
  }
}
// :story-items [!] System label / Системная метка
