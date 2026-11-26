import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Placeholder from './D1Placeholder.vue'
import { PlaceholderWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent, waitFor } from 'storybook/test'
import { image1 } from '@dxtmisha/wiki/media'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Placeholder',
  component: D1Placeholder,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PlaceholderWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PlaceholderWikiStorybook.getWiki(),
  args: PlaceholderWikiStorybook.getValues()
} satisfies Meta<typeof D1Placeholder>

export default meta

type Story = StoryObj<typeof meta>

export const Placeholder: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const PlaceholderBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1Placeholder },
    setup() {
      return {
        image1
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry' }]"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-placeholder')
    await expect(component).toBeInTheDocument()
    await expect(component?.querySelector('.d1-placeholder__image')).toBeInTheDocument()
    await expect(component?.querySelector('.d1-placeholder__label')).toHaveTextContent('No Internet Connection')
    await expect(component?.querySelector('.d1-placeholder__description')).toHaveTextContent('Please check your network settings')
    await expect(within(canvasElement).getByRole('button', { name: 'Retry' })).toBeInTheDocument()
  }
}
export const PlaceholderSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Placeholder },
    setup() {
      return {
        image1
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Placeholder data-testid="placeholder-slots-default" :image="image1">
            <template #default>
              <span>Default Slot (Label)</span>
            </template>
            <template #description>
              <span>Description Slot</span>
            </template>
          </D1Placeholder>
          <D1Placeholder data-testid="placeholder-slots-context" label="Context Header">
            <template #context>
              <span data-testid="custom-context">Context Slot</span>
            </template>
          </D1Placeholder>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const defaultEl = canvasElement.querySelector('[data-testid="placeholder-slots-default"]')
    await expect(defaultEl?.querySelector('.d1-placeholder__label')).toHaveTextContent('Default Slot (Label)')
    await expect(defaultEl?.querySelector('.d1-placeholder__description')).toHaveTextContent('Description Slot')

    const contextEl = canvasElement.querySelector('[data-testid="placeholder-slots-context"]')
    await expect(contextEl?.querySelector('[data-testid="custom-context"]')).toBeInTheDocument()
    await expect(contextEl).toHaveTextContent('Context Slot')
  }
}
export const PlaceholderTestActionsAndAria: Story = {
  name: 'Тест: События действий, actionsHide, явные ARIA ID и числовой ноль',
  render: () => ({
    components: { D1Placeholder },
    setup() {
      const actionsHide = ref(false)
      const clickedValue = ref('none')
      const onActionsLite = (event: { value?: unknown }) => {
        clickedValue.value = String(event?.value ?? 'clicked')
      }
      const toggleHide = () => {
        actionsHide.value = !actionsHide.value
      }
      return { actionsHide, clickedValue, onActionsLite, toggleHide }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="toggleHide">Toggle Actions</button>
            <span data-testid="ph-clicked">{{ clickedValue }}</span>
          </div>
          <D1Placeholder
            data-testid="ph-aria"
            image="warning"
            label="Session Expired"
            label-id="wiki-ph-label-id"
            description="Sign in again"
            description-id="wiki-ph-desc-id"
            :actions-hide="actionsHide"
            :actions-list="[{ label: 'Sign In', value: 'sign-in' }]"
            @actions-lite="onActionsLite"
          />
          <D1Placeholder
            data-testid="ph-zero"
            :label="0"
            :description="0"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const ariaEl = canvasElement.querySelector('[data-testid="ph-aria"]')
    await expect(ariaEl).toHaveAttribute('aria-labelledby', 'wiki-ph-label-id')
    await expect(ariaEl).toHaveAttribute('aria-describedby', 'wiki-ph-desc-id')

    await userEvent.click(canvas.getByRole('button', { name: 'Sign In' }))
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="ph-clicked"]')).toHaveTextContent('sign-in')
    })

    await userEvent.click(canvas.getByRole('button', { name: 'Toggle Actions' }))
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="ph-aria"]')?.querySelectorAll('button').length).toBe(0)
    })

    const zeroEl = canvasElement.querySelector('[data-testid="ph-zero"]')
    await expect(zeroEl?.querySelector('.d1-placeholder__label')).toHaveTextContent('0')
    await expect(zeroEl?.querySelector('.d1-placeholder__description')).toHaveTextContent('0')
  }
}
// :story-items [!] System label / Системная метка
