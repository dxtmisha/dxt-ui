import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CollageBar from './D1CollageBar.vue'
import { CollageBarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CollageBar',
  component: D1CollageBar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CollageBarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CollageBarWikiStorybook.getWiki(),
  args: CollageBarWikiStorybook.getValues()
} satisfies Meta<typeof D1CollageBar>

export default meta

type Story = StoryObj<typeof meta>

export const CollageBar: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1CollageBar },
    setup: () => ({ args }),
    template: `
      <D1CollageBar v-bind="args" />
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-collageBar')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CollageBarPositions: Story = {
  name: 'Позиции',
  render: () => ({
    components: { D1CollageBar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="static"
              label="Static Bar"
              description="Standard caption layout"
              button="Action"
              icon="visibility"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="top"
              label="Top Overlay Bar"
              description="Anchored at the top"
              icon="more_vert"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="bottom"
              label="Bottom Overlay Bar"
              description="Anchored at the bottom"
              button="View"
              icon="visibility"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-collageBar')
    await expect(items.length).toBe(3)
    await expect(items[0]).toHaveClass('d1-collageBar--position--static')
    await expect(items[1]).toHaveClass('d1-collageBar--position--top')
    await expect(items[2]).toHaveClass('d1-collageBar--position--bottom')
  }
}
export const CollageBarSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1CollageBar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar>
              <template #default>Default slot</template>
              <template #description>Description slot</template>
              <template #trailing>Trailing slot</template>
            </D1CollageBar>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar>
              <template #body>Body slot</template>
            </D1CollageBar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-collageBar')
    await expect(items.length).toBe(2)
    await expect(items[0]).toHaveTextContent('Default slot')
    await expect(items[0]).toHaveTextContent('Description slot')
    await expect(items[0]).toHaveTextContent('Trailing slot')
    await expect(items[1]).toHaveTextContent('Body slot')
  }
}
export const CollageBarTestStatesAndFormats: Story = {
  name: 'Тест: Выбранное состояние, тег, href, числовой 0 и события',
  render: () => ({
    components: { D1CollageBar },
    setup() {
      const lastClicked = ref('')
      const onClickLite = (value: EventClickValue) => {
        lastClicked.value = String(value.value)
      }
      return { lastClicked, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <span data-testid="collage-bar-test-click">{{ lastClicked }}</span>
          <D1CollageBar
            selected
            tag="div"
            label="Selected Bar"
            description="With object button and click event"
            :button="{ label: 'Trigger' }"
            value="bar-42"
            @click-lite="onClickLite"
          />
          <D1CollageBar
            :label="0"
            :description="0"
            :button="0"
            href="#bar-zero"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const items = canvasElement.querySelectorAll('.d1-collageBar')
    await expect(items.length).toBe(2)
    await expect(items[0].tagName).toBe('DIV')
    await expect(items[0]).toHaveClass('d1-collageBar--selected')
    await expect(items[1].querySelector('.d1-collageBar__label')).toHaveTextContent('0')
    await expect(items[1].querySelector('.d1-collageBar__description')).toHaveTextContent('0')
    await expect(items[1].querySelector('a')).toHaveAttribute('href', '#bar-zero')
    const button = items[0].querySelector('button') as HTMLElement | null
    if (button) {
      await userEvent.click(button)
    }
    await expect(canvas.getByTestId('collage-bar-test-click')).toHaveTextContent('bar-42')
  }
}
// :story-items [!] System label / Системная метка
