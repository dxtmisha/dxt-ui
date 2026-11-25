import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputSearch from './D1InputSearch.vue'
import { InputSearchWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputSearch',
  component: D1InputSearch,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputSearchWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputSearchWikiStorybook.getWiki(),
  args: InputSearchWikiStorybook.getValues()
} satisfies Meta<typeof D1InputSearch>

export default meta

type Story = StoryObj<typeof meta>

export const InputSearch: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1InputSearch },
    setup: () => ({ args }),
    template: `
      <D1InputSearch v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputSearchVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputSearch },
    setup() {
      return {
        query: ref('')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="input-search-vmodel-value">Current query: {{ query || '—' }}</span>
            <button type="button" class="wiki-storybook-button" @click="query = 'search text'">Set query</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button-warning" @click="query = ''">Clear</button>
          </div>
          <D1InputSearch
            v-model:value="query"
            placeholder="Search query..."
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Search query...') as HTMLInputElement
    await expect(canvas.getByTestId('input-search-vmodel-value')).toHaveTextContent('Current query: —')
    await userEvent.click(canvas.getByRole('button', { name: 'Set query' }))
    await expect(canvas.getByTestId('input-search-vmodel-value')).toHaveTextContent('Current query: search text')
    await expect(input.value).toBe('search text')
    await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
    await expect(canvas.getByTestId('input-search-vmodel-value')).toHaveTextContent('Current query: —')
    await expect(input.value).toBe('')
  }
}
export const InputSearchQuery: Story = {
  name: 'Управление запросом (minQuery и delay)',
  render: () => ({
    components: { D1InputSearch },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputSearch
            :min-query="3"
            :delay="500"
            placeholder="Min 3 chars, 500ms delay..."
            helper-message="Triggers only after 3 characters with 500ms debounce"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Min 3 chars, 500ms delay...') as HTMLInputElement
    await expect(input).toBeInTheDocument()
    await expect(canvas.getByText('Triggers only after 3 characters with 500ms debounce')).toBeInTheDocument()
  }
}
export const InputSearchTestBehaviorAndStates: Story = {
  name: 'Тест: Debounce, Enter, состояния, валидация и слоты',
  render: () => ({
    components: { D1InputSearch },
    setup() {
      return {
        model: ref(''),
        enterModel: ref('')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <span data-testid="is-test-model">{{ model || 'empty' }}</span>
          <D1InputSearch
            v-model:value="model"
            :min-query="3"
            :delay="80"
            placeholder="Type 3+ chars"
          />
          <span data-testid="is-test-enter">{{ enterModel || 'empty' }}</span>
          <D1InputSearch
            v-model:value="enterModel"
            :min-query="2"
            :delay="5000"
            text-search="Fallback search placeholder"
          />
          <D1InputSearch
            data-testid="is-test-validation"
            label="Search products"
            validation-message="Invalid query"
          >
            <template #leading><span>[L]</span></template>
            <template #trailing><span>[T]</span></template>
          </D1InputSearch>
          <D1InputSearch :disabled="true" placeholder="Disabled search" />
          <D1InputSearch :readonly="true" value="Readonly query" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const debounceInput = canvas.getByPlaceholderText('Type 3+ chars') as HTMLInputElement
    await userEvent.type(debounceInput, 'ab')
    await expect(canvas.getByTestId('is-test-model')).toHaveTextContent('empty')
    await userEvent.type(debounceInput, 'c')
    await waitFor(async () => {
      await expect(canvas.getByTestId('is-test-model')).toHaveTextContent('abc')
    })

    const enterInput = canvas.getByPlaceholderText('Fallback search placeholder') as HTMLInputElement
    await userEvent.type(enterInput, 'go{Enter}')
    await expect(canvas.getByTestId('is-test-enter')).toHaveTextContent('go')

    await expect(canvas.getByText('[L]')).toBeInTheDocument()
    await expect(canvas.getByText('[T]')).toBeInTheDocument()
    await expect(canvas.getByText('Invalid query')).toBeInTheDocument()
    await expect(canvas.getByPlaceholderText('Disabled search')).toBeDisabled()
  }
}
// :story-items [!] System label / Системная метка
