import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1HorizontalScroll from './D1HorizontalScroll.vue'
import { HorizontalScrollWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { HorizontalScrollExpose } from '@dxtmisha/constructor/HorizontalScroll'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/HorizontalScroll',
  component: D1HorizontalScroll,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: HorizontalScrollWikiStorybook.getDescription()
      }
    }
  },
  argTypes: HorizontalScrollWikiStorybook.getWiki(),
  args: HorizontalScrollWikiStorybook.getValues()
} satisfies Meta<typeof D1HorizontalScroll>

export default meta

type Story = StoryObj<typeof meta>

export const HorizontalScroll: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1HorizontalScroll },
    setup: () => ({ args }),
    template: `
      <D1HorizontalScroll v-bind="args">
      <template #default="{ classItem }">
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 160);">Item 7</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 175);">Item 8</div>
      </template>
    </D1HorizontalScroll>
    `
  }),
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector('.d1-horizontalScroll')
    await expect(container).toBeInTheDocument()
    const items = canvasElement.querySelectorAll('.d1-horizontalScroll__item')
    await expect(items.length).toBe(8)
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const HorizontalScrollBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1HorizontalScroll },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1HorizontalScroll>
            <template #default="{ classItem }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 305);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 325);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 345);">Item 3</div>
            </template>
          </D1HorizontalScroll>

          <D1HorizontalScroll>
            <template #default="{ classItem, classItemSelected }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
              <div class="wiki-storybook-flex-center" :class="[classItem, classItemSelected]" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
            </template>
          </D1HorizontalScroll>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const containers = canvasElement.querySelectorAll('.d1-horizontalScroll')
    await expect(containers.length).toBe(2)
    const selectedItem = canvasElement.querySelector('.d1-horizontalScroll__item--selected')
    await expect(selectedItem).toBeInTheDocument()
    await expect(selectedItem).toHaveTextContent('Item 4')
  }
}
export const HorizontalScrollTestTagsAndExpose: Story = {
  name: 'Тест: Теги, привязки слота и expose API',
  render: () => ({
    components: { D1HorizontalScroll },
    setup() {
      const scrollReference = ref<HorizontalScrollExpose | null>(null)
      const elementTag = ref<string>('')

      const inspectScroll = (): void => {
        scrollReference.value?.toSelected()
        elementTag.value = scrollReference.value?.getElement()?.tagName ?? ''
      }

      return {
        scrollReference,
        elementTag,
        inspectScroll
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="inspectScroll">
              Inspect and Scroll
            </button>
            <span data-testid="hs-expose-tag">{{ elementTag }}</span>
          </div>

          <D1HorizontalScroll
            ref="scrollReference"
            tag="nav"
            aria-label="Test scroll navigation"
            data-testid="hs-test-nav"
          >
            <template #default="{ binds, classItemSelected }">
              <div v-bind="binds" style="min-width: 240px;">First</div>
              <div v-bind="binds" :class="classItemSelected" style="min-width: 240px;">Selected</div>
            </template>
          </D1HorizontalScroll>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const navElement = canvasElement.querySelector('[data-testid="hs-test-nav"]')
    await expect(navElement?.tagName).toBe('NAV')
    await expect(navElement).toHaveAttribute('aria-label', 'Test scroll navigation')
    await expect(navElement?.querySelectorAll('.d1-horizontalScroll__item').length).toBe(2)

    await step('Call expose toSelected and getElement via button', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Inspect and Scroll' }))
      await waitFor(() => {
        expect(canvas.getByTestId('hs-expose-tag')).toHaveTextContent('NAV')
      })
    })
  }
}
// :story-items [!] System label / Системная метка
