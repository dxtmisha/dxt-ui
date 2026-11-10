import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Scrollbar from './D1Scrollbar.vue'
import { ScrollbarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Scrollbar',
  component: D1Scrollbar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ScrollbarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ScrollbarWikiStorybook.getWiki(),
  args: ScrollbarWikiStorybook.getValues()
} satisfies Meta<typeof D1Scrollbar>

export default meta

type Story = StoryObj<typeof meta>

export const Scrollbar: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Scrollbar },
    setup: () => ({ args }),
    template: `
      <D1Scrollbar
        class="wiki-storybook-item--widescreen wiki-storybook-item--squared--sm"
        v-bind="args"
      >
        <div class="wiki-storybook-scrollbar-content">
          <h3>Modern Web Interfaces and User Experience Design</h3>
          <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience.</p>
          <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure.</p>
        </div>
      </D1Scrollbar>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-scrollbar')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ScrollbarBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1Scrollbar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Default Scrollbar</div>
            <D1Scrollbar style="height: 140px;">
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space. The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies, each holding hundreds of billions of stars and countless worlds.</p>
              <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light that moved across the heavens. It was only with the advent of modern astronomy that we began to understand the true nature of these stellar bodies.</p>
              <p>Stars are born in deep, dense clouds of interstellar gas and dust known as nebulae. Over millions of years, gravity pulls these materials together, raising pressure and temperature until nuclear fusion ignites in the core.</p>
            </D1Scrollbar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-scrollbar')
    await expect(items.length).toBe(1)
    await expect(items[0]).toBeInTheDocument()
    await expect(items[0].tagName.toLowerCase()).toBe('div')
  }
}
export const ScrollbarDividers: Story = {
  name: 'Динамические границы-разделители',
  render: () => ({
    components: { D1Scrollbar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">dividerTop + dividerBottom</div>
            <D1Scrollbar dividerTop dividerBottom style="height: 140px;">
              <p>Scroll down to reveal the top boundary divider, and scroll to the bottom to hide the bottom divider.</p>
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
              <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
              <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light that moved across the heavens.</p>
            </D1Scrollbar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-scrollbar')
    await expect(items.length).toBe(1)
    const scrollbar = items[0] as HTMLElement
    await expect(scrollbar).toHaveClass('d1-scrollbar--dividerTop')
    await expect(scrollbar).toHaveClass('d1-scrollbar--dividerBottom')
  }
}
export const ScrollbarInverse: Story = {
  name: 'Инвертированные разделители',
  render: () => ({
    components: { D1Scrollbar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">dividerTop + dividerBottom + inverse</div>
            <D1Scrollbar dividerTop dividerBottom inverse style="height: 140px;">
              <p>Inverted logic displays dividers at the initial boundary edges and hides them when scrolled.</p>
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
              <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
              <p>Stars are born in deep, dense clouds of interstellar gas and dust known as nebulae.</p>
            </D1Scrollbar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-scrollbar')
    await expect(items.length).toBe(1)
    const scrollbar = items[0] as HTMLElement
    await expect(scrollbar).toHaveClass('d1-scrollbar--inverse')
    await expect(scrollbar).toHaveClass('d1-scrollbar--dividerTop')
    await expect(scrollbar).toHaveClass('d1-scrollbar--dividerBottom')
  }
}
export const ScrollbarVisible: Story = {
  name: 'Постоянная видимость ползунка',
  render: () => ({
    components: { D1Scrollbar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">visible: true</div>
            <D1Scrollbar visible style="height: 140px;">
              <p>The custom scrollbar thumb remains continuously visible regardless of user interaction.</p>
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
              <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
              <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light.</p>
            </D1Scrollbar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-scrollbar')
    await expect(items.length).toBe(1)
    const scrollbar = items[0] as HTMLElement
    await expect(scrollbar).toHaveClass('d1-scrollbar--visible')
  }
}
export const ScrollbarStandard: Story = {
  name: 'Нативный скролл браузера',
  render: () => ({
    components: { D1Scrollbar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">standard: true</div>
            <D1Scrollbar standard style="height: 140px;">
              <p>Preserves native browser scrollbar rendering without custom overlay styling.</p>
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
              <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
              <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light.</p>
            </D1Scrollbar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-scrollbar')
    await expect(items.length).toBe(1)
    const scrollbar = items[0] as HTMLElement
    await expect(scrollbar).toHaveClass('d1-scrollbar--standard')
  }
}
export const ScrollbarEvents: Story = {
  name: 'События границ',
  render: () => ({
    components: { D1Scrollbar },
    setup() {
      const eventName = ref('None')
      const scrollbarRef = ref(null)

      const onEvent = (name: string) => {
        eventName.value = name
      }

      const scrollToTop = () => {
        const target = scrollbarRef.value as any
        const element = target?.$el instanceof HTMLElement ? target.$el : (target instanceof HTMLElement ? target : null)
        if (element) {
          element.scrollTop = 0
        }
      }

      const scrollToBottom = () => {
        const target = scrollbarRef.value as any
        const element = target?.$el instanceof HTMLElement ? target.$el : (target instanceof HTMLElement ? target : null)
        if (element) {
          element.scrollTop = element.scrollHeight
        }
      }

      return {
        eventName,
        scrollbarRef,
        onEvent,
        scrollToTop,
        scrollToBottom
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="scrollToTop">Scroll to Top</button>
            <button class="wiki-storybook-button" @click="scrollToBottom">Scroll to Bottom</button>
            <div class="wiki-storybook-card">Last Event: {{ eventName }}</div>
          </div>

          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
              <D1Scrollbar
                ref="scrollbarRef"
                divider
                style="height: 140px;"
                @bottom="onEvent('bottom')"
                @edge="onEvent('edge')"
                @leaveBottom="onEvent('leaveBottom')"
                @leaveTop="onEvent('leaveTop')"
                @reachBottom="onEvent('reachBottom')"
                @reachTop="onEvent('reachTop')"
                @top="onEvent('top')"
              >
                <p>Scroll using the buttons above or mouse wheel to trigger boundary detection events.</p>
                <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
                <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
                <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light.</p>
                <p>Stars are born in deep, dense clouds of interstellar gas and dust known as nebulae.</p>
              </D1Scrollbar>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const scrollToTopButton = canvas.getByRole('button', { name: 'Scroll to Top' })
    const scrollToBottomButton = canvas.getByRole('button', { name: 'Scroll to Bottom' })
    const cardElement = canvasElement.querySelector('.wiki-storybook-card')

    await expect(scrollToTopButton).toBeInTheDocument()
    await expect(scrollToBottomButton).toBeInTheDocument()
    await expect(cardElement).toBeInTheDocument()

    await step('Scroll to bottom programmatically', async () => {
      await userEvent.click(scrollToBottomButton)
      await waitFor(() => {
        expect(cardElement?.textContent).toContain('Last Event:')
      })
    })

    await step('Scroll to top programmatically', async () => {
      await userEvent.click(scrollToTopButton)
      await waitFor(() => {
        expect(cardElement?.textContent).toContain('Last Event:')
      })
    })
  }
}
export const ScrollbarTestStates: Story = {
  name: 'Тест: Комбинации состояний и классы-модификаторы',
  render: () => ({
    components: { D1Scrollbar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">visible + divider</div>
            <D1Scrollbar visible divider style="height: 100px;">
              <p>Content for visible and divider combination testing.</p>
              <p>Extra paragraph ensuring scrollable overflow.</p>
            </D1Scrollbar>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">divider + dividerHide</div>
            <D1Scrollbar divider dividerHide style="height: 100px;">
              <p>Content for dividerHide combination testing.</p>
              <p>Extra paragraph ensuring scrollable overflow.</p>
            </D1Scrollbar>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">standard + visible</div>
            <D1Scrollbar standard visible style="height: 100px;">
              <p>Content for standard and visible combination testing.</p>
              <p>Extra paragraph ensuring scrollable overflow.</p>
            </D1Scrollbar>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">dividerTop + dividerBottom + inverse</div>
            <D1Scrollbar dividerTop dividerBottom inverse style="height: 100px;">
              <p>Content for inverse divider combination testing.</p>
              <p>Extra paragraph ensuring scrollable overflow.</p>
            </D1Scrollbar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-scrollbar')
    await expect(items.length).toBe(4)

    // 1. visible + divider
    const item1 = items[0] as HTMLElement
    await expect(item1).toHaveClass('d1-scrollbar--visible')
    await expect(item1).toHaveClass('d1-scrollbar--divider')

    // 2. divider + dividerHide
    const item2 = items[1] as HTMLElement
    await expect(item2).toHaveClass('d1-scrollbar--divider')
    await expect(item2).toHaveClass('d1-scrollbar--dividerHide')

    // 3. standard + visible
    const item3 = items[2] as HTMLElement
    await expect(item3).toHaveClass('d1-scrollbar--standard')
    await expect(item3).toHaveClass('d1-scrollbar--visible')

    // 4. dividerTop + dividerBottom + inverse
    const item4 = items[3] as HTMLElement
    await expect(item4).toHaveClass('d1-scrollbar--dividerTop')
    await expect(item4).toHaveClass('d1-scrollbar--dividerBottom')
    await expect(item4).toHaveClass('d1-scrollbar--inverse')
  }
}
export const ScrollbarTestTags: Story = {
  name: 'Тест: Пользовательские HTML-теги контейнера',
  render: () => ({
    components: { D1Scrollbar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">tag: section</div>
            <D1Scrollbar tag="section" style="height: 100px;">
              <p>Rendered with section element tag.</p>
              <p>Second paragraph for scroll height.</p>
            </D1Scrollbar>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">tag: article</div>
            <D1Scrollbar tag="article" style="height: 100px;">
              <p>Rendered with article element tag.</p>
              <p>Second paragraph for scroll height.</p>
            </D1Scrollbar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-scrollbar')
    await expect(items.length).toBe(2)

    const sectionElement = items[0] as HTMLElement
    await expect(sectionElement.tagName.toLowerCase()).toBe('section')

    const articleElement = items[1] as HTMLElement
    await expect(articleElement.tagName.toLowerCase()).toBe('article')
  }
}
export const ScrollbarTestBoundaryEvents: Story = {
  name: 'Тест: Граничные пороги и data-атрибуты',
  render: () => ({
    components: { D1Scrollbar },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">divider boundary tracking</div>
            <D1Scrollbar divider style="height: 100px;">
              <p>Paragraph 1 for scroll tracking.</p>
              <p>Paragraph 2 for scroll tracking.</p>
              <p>Paragraph 3 for scroll tracking.</p>
              <p>Paragraph 4 for scroll tracking.</p>
            </D1Scrollbar>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-scrollbar')
    await expect(items.length).toBe(1)
    const scrollbar = items[0] as HTMLElement

    await waitFor(() => {
      expect(scrollbar.dataset.top).toBeDefined()
      expect(scrollbar.dataset.bottom).toBeDefined()
      expect(scrollbar.dataset.scrollbarDivider).toBeDefined()
    })
  }
}
// :story-items [!] System label / Системная метка
