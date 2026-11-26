import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1PageArea from './D1PageArea.vue'
import { PageAreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { defineComponent, h, ref } from 'vue'
import { setAreaValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/PageArea',
  component: D1PageArea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PageAreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PageAreaWikiStorybook.getWiki(),
  args: PageAreaWikiStorybook.getValues()
} satisfies Meta<typeof D1PageArea>

export default meta

type Story = StoryObj<typeof meta>

export const PageArea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1PageArea },
    setup: () => ({ args }),
    template: `
      <D1PageArea v-bind="args">
        <p>
          The PageArea component is a specialized container designed to structure the content within a specific page or layout region.
          It provides consistent margins, alignment, and semantic grouping for nested components.
        </p>
        <p>
          It acts as an orchestrator for various UI blocks, allowing developers to define a clear information hierarchy.
          Whether it's a dashboard overview or a detailed data view, PageArea ensures the layout remains cohesive.
        </p>
      </D1PageArea>
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toHaveTextContent('PageArea component')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const PageAreaBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1PageArea },
    template: `
        
        <D1PageArea label="Basic Area">
          <p>This is a basic example of PageArea content. It can contain any combination of blocks, sections, or individual UI elements.</p>
        </D1PageArea>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toHaveTextContent('Basic Area')
    await expect(canvasElement).toHaveTextContent('basic example of PageArea content')
  }
}
export const PageAreaSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1PageArea },
    template: `
        
        <D1PageArea>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>
            <span data-testid="pa-trailing-slot">Trailing slot</span>
          </template>
        </D1PageArea>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toHaveTextContent('Headline slot')
    await expect(canvasElement).toHaveTextContent('Label slot')
    await expect(canvasElement).toHaveTextContent('Description slot')
    await expect(canvasElement).toHaveTextContent('Caption slot')
    await expect(canvasElement.querySelector('[data-testid="pa-trailing-slot"]')).toHaveTextContent('Trailing slot')
    await expect(canvasElement).toHaveTextContent('Default slot')
  }
}
export const PageAreaTestCascadeAndBoundary: Story = {
  name: 'Тест: Иерархическое делегирование областей и граничные значения',
  render: () => ({
    components: { D1PageArea },
    setup() {
      const rootArea = ref<string | undefined>('container')
      const toggleArea = () => {
        rootArea.value = rootArea.value === 'container' ? 'section' : 'container'
      }
      const AreaHost = defineComponent({
        props: {
          area: {
            type: String,
            default: undefined
          }
        },
        setup(props: { area?: string }, { slots }) {
          setAreaValue(props.area ? rootArea : undefined)
          return () => h('div', { 'data-testid': 'pa-host' }, slots.default ? slots.default() : [])
        }
      })
      return { rootArea, toggleArea, AreaHost }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="toggleArea">Toggle Root Area</button>
            <span data-testid="pa-mode">{{ rootArea }}</span>
          </div>
          <component :is="AreaHost" :area="rootArea">
            <D1PageArea data-testid="pa-level-1" tag-header="h1" label="Level One">
              <D1PageArea data-testid="pa-level-2" label="Level Two">
                <D1PageArea data-testid="pa-level-3" label="Level Three">
                  <span>Deep child</span>
                </D1PageArea>
              </D1PageArea>
            </D1PageArea>
          </component>
          <D1PageArea
            data-testid="pa-zero"
            :headline="0"
            :label="0"
            :description="0"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const level1 = canvasElement.querySelector('[data-testid="pa-level-1"]')
    const level2 = canvasElement.querySelector('[data-testid="pa-level-2"]')
    await expect(level1?.tagName).toBe('MAIN')
    await expect(level2?.tagName).toBe('SECTION')
    await expect(canvasElement.querySelector('[data-testid="pa-level-3"]')).toHaveTextContent('Level Three')

    await userEvent.click(canvas.getByRole('button', { name: 'Toggle Root Area' }))
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="pa-mode"]')).toHaveTextContent('section')
      expect(canvasElement.querySelector('[data-testid="pa-level-1"]')?.tagName).toBe('DIV')
    })

    const zeroEl = canvasElement.querySelector('[data-testid="pa-zero"]')
    await expect(zeroEl).toHaveTextContent('0')
  }
}
// :story-items [!] System label / Системная метка
