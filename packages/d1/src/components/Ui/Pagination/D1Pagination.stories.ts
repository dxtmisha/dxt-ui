import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Pagination from './D1Pagination.vue'
import { PaginationWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor, fireEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Pagination',
  component: D1Pagination,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PaginationWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PaginationWikiStorybook.getWiki(),
  args: PaginationWikiStorybook.getValues()
} satisfies Meta<typeof D1Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Pagination: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Pagination },
    setup: () => ({ args }),
    template: `
      <D1Pagination v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const component = canvasElement.querySelector('.d1-pagination')
      if (component) {
        expect(component).toHaveAttribute('role', 'navigation')
      }
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const PaginationBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1Pagination },
    setup() {
      return {}
    },
    template: `
        
        <D1Pagination
          :count="100"
          :rows="10"
        />
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const component = canvasElement.querySelector('.d1-pagination')
      expect(component).toBeInTheDocument()
      expect(component).toHaveAttribute('role', 'navigation')
      const currentButton = component?.querySelector('[aria-current="page"]')
      expect(currentButton?.textContent?.trim()).toBe('1')
    })
  }
}
export const PaginationShowMore: Story = {
  name: 'Показать еще / Показать предыдущие',
  render: () => ({
    components: { D1Pagination },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Pagination
            :count="100"
            :rows="10"
            :value="5"
            show-more-prev
          />

          <D1Pagination
            :count="100"
            :rows="10"
            :value="5"
            show-more
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const components = canvasElement.querySelectorAll('.d1-pagination')
      expect(components.length).toBe(2)
      expect(components[0].querySelector('.d1-pagination__morePrev')).toBeInTheDocument()
      expect(components[1].querySelector('.d1-pagination__more')).toBeInTheDocument()
    })
  }
}
export const PaginationVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Pagination },
    setup() {
      const page = ref(1)
      const rows = ref(10)
      const menuRows = [5, 10, 20, 50]

      return { page, rows, menuRows }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Page: <strong data-testid="story-page">{{ page }}</strong></span>
            <span>Rows per page: <strong data-testid="story-rows">{{ rows }}</strong></span>
            <button class="wiki-storybook-button" data-testid="story-go-page-5" @click="page = 5">Go to Page 5</button>
            <button class="wiki-storybook-button" data-testid="story-set-rows-20" @click="rows = 20">Set Rows to 20</button>
          </div>

          <D1Pagination
            v-model:value="page"
            v-model:rows="rows"
            :count="100"
            :menu-rows="menuRows"
            show-info
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Update page to 5 via external button', async () => {
      await userEvent.click(canvas.getByTestId('story-go-page-5'))
      await waitFor(() => {
        expect(canvas.getByTestId('story-page')).toHaveTextContent('5')
        const currentButton = canvasElement.querySelector('[aria-current="page"]')
        expect(currentButton?.textContent?.trim()).toBe('5')
      })
    })

    await step('Update rows to 20 via external button', async () => {
      await userEvent.click(canvas.getByTestId('story-set-rows-20'))
      await waitFor(() => {
        expect(canvas.getByTestId('story-rows')).toHaveTextContent('20')
      })
    })
  }
}
export const PaginationTestOptionsAndSlots: Story = {
  name: 'Тест: Опции навигации, слоты, тексты и адаптив lineAlways',
  render: () => ({
    components: { D1Pagination },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Pagination
            data-testid="test-ends"
            :value="5"
            :count="200"
            :rows="10"
            :visible="5"
            :ends="2"
            ellipsis="•••"
            show-ends
            show-info
            adaptive="lineAlways"
            adaptive-more="lineAlways"
            adaptive-more-prev="lineAlways"
            text-pagination="Custom navigation"
            text-page="Step"
            text-info="[item] / [count]"
          >
            <template #leading>
              <span data-testid="slot-leading">Start</span>
            </template>
            <template #trailing>
              <span data-testid="slot-trailing">End</span>
            </template>
          </D1Pagination>

          <D1Pagination
            data-testid="test-minimal"
            value="3"
            count="60"
            rows="10"
            :show-arrows="false"
            :show-first-last="false"
            :show-rows-per-page-label="false"
            :menu-rows="[10, 20]"
            show-info
          >
            <template #info>
              <span data-testid="slot-info">Custom info slot</span>
            </template>
          </D1Pagination>

          <D1Pagination
            data-testid="test-hidden-single"
            :value="1"
            :count="5"
            :rows="10"
            hide-if-one
          />

          <D1Pagination
            data-testid="test-visible-zero"
            :value="1"
            :count="0"
            :rows="10"
            :hide-if-one="false"
            show-info
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitFor(() => {
      const endsComponent = canvas.getByTestId('test-ends')
      expect(endsComponent).toHaveAttribute('aria-label', 'Custom navigation')
      expect(endsComponent).toHaveClass('d1-pagination--adaptive--lineAlways')
      expect(endsComponent.querySelector('.d1-pagination__ellipsis')).toHaveTextContent('•••')
      expect(endsComponent.querySelector('.d1-pagination__info')).toHaveTextContent('41-50 / 200')
      expect(canvas.getByTestId('slot-leading')).toHaveTextContent('Start')
      expect(canvas.getByTestId('slot-trailing')).toHaveTextContent('End')

      const minimalComponent = canvas.getByTestId('test-minimal')
      expect(canvas.getByTestId('slot-info')).toHaveTextContent('Custom info slot')
      expect(minimalComponent.querySelector('.d1-pagination__menuRowsLabel')).not.toBeInTheDocument()

      expect(canvas.queryByTestId('test-hidden-single')).not.toBeInTheDocument()

      const zeroComponent = canvas.getByTestId('test-visible-zero')
      expect(zeroComponent.querySelector('.d1-pagination__info')).toHaveTextContent('0-0')
    })
  }
}
export const PaginationTestEventsAndKeyboard: Story = {
  name: 'Тест: События click, more, morePrev и клавиатурная навигация',
  render: () => ({
    components: { D1Pagination },
    setup() {
      const lastEvent = ref('none')
      const onMoreLite = (options?: EventClickValue) => {
        lastEvent.value = 'moreLite:' + String(options?.value ?? '')
      }
      const onMorePrevLite = (options?: EventClickValue) => {
        lastEvent.value = 'morePrevLite:' + String(options?.value ?? '')
      }
      const onClickLite = (options?: EventClickValue) => {
        if (options?.type === 'page') {
          lastEvent.value = 'page:' + String(options?.value ?? '')
        }
      }

      return { lastEvent, onMoreLite, onMorePrevLite, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div data-testid="test-event-output">{{ lastEvent }}</div>
          <D1Pagination
            data-testid="test-events-pagination"
            :value="3"
            :count="100"
            :rows="10"
            show-more
            show-more-prev
            @more-lite="onMoreLite"
            @more-prev-lite="onMorePrevLite"
            @click-lite="onClickLite"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Click Show More button emits moreLite with next page', async () => {
      const moreButton = canvasElement.querySelector('.d1-pagination__more') as HTMLElement
      expect(moreButton).toBeInTheDocument()
      await userEvent.click(moreButton)
      await waitFor(() => {
        expect(canvas.getByTestId('test-event-output')).toHaveTextContent('moreLite:4')
      })
    })

    await step('Click Show Previous button emits morePrevLite with previous page', async () => {
      const morePrevButton = canvasElement.querySelector('.d1-pagination__morePrev') as HTMLElement
      expect(morePrevButton).toBeInTheDocument()
      await userEvent.click(morePrevButton)
      await waitFor(() => {
        expect(canvas.getByTestId('test-event-output')).toHaveTextContent('morePrevLite:2')
      })
    })

    await step('Keyboard focus + Enter activates focused page via FocusDirectionInclude', async () => {
      const container = canvas.getByTestId('test-events-pagination')
      expect(container).toHaveAttribute('tabindex', '0')
      container.focus()
      await fireEvent.keyDown(container, { key: 'Enter' })
      await waitFor(() => {
        expect(canvas.getByTestId('test-event-output')).toHaveTextContent('page:3')
      })
    })

    await step('Click page 4 button updates active page and emits clickLite', async () => {
      const pageFourButton = canvasElement.querySelector('[data-event-type="page"][data-value="4"]') as HTMLElement
      expect(pageFourButton).toBeInTheDocument()
      await userEvent.click(pageFourButton)
      await waitFor(() => {
        expect(canvas.getByTestId('test-event-output')).toHaveTextContent('page:4')
        expect(pageFourButton).toHaveAttribute('aria-current', 'page')
      })
    })
  }
}
// :story-items [!] System label / Системная метка
