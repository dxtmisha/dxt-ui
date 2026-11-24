import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ClientOnly from './D1ClientOnly.vue'
import { ClientOnlyWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ClientOnly',
  component: D1ClientOnly,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ClientOnlyWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ClientOnlyWikiStorybook.getWiki(),
  args: ClientOnlyWikiStorybook.getValues()
} satisfies Meta<typeof D1ClientOnly>

export default meta

type Story = StoryObj<typeof meta>

export const ClientOnly: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ClientOnly },
    setup: () => ({ args }),
    template: `
      <D1ClientOnly v-bind="args">
      <div data-testid="client-only-default">
        <h4>Client-Side Content</h4>
        <p>This block is only visible when the component is mounted in the browser.</p>
      </div>
    </D1ClientOnly>
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const content = canvasElement.querySelector('[data-testid="client-only-default"]')
      expect(content).toBeInTheDocument()
      expect(content).toHaveTextContent('Client-Side Content')
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ClientOnlyTestModes: Story = {
  name: 'Тест: переключение clientOnly true/false и пустой слот',
  render: () => ({
    components: { D1ClientOnly },
    setup() {
      const clientOnly = ref(true)
      const toggleMode = () => {
        clientOnly.value = !clientOnly.value
      }
      return { clientOnly, toggleMode }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <button data-testid="co-toggle" class="wiki-storybook-button" @click="toggleMode">Toggle mode</button>
          <D1ClientOnly :client-only="clientOnly">
            <div data-testid="co-content">Mode: {{ clientOnly }}</div>
          </D1ClientOnly>
          <D1ClientOnly :client-only="false">
            <div data-testid="co-ssr">SSR enabled</div>
          </D1ClientOnly>
          <D1ClientOnly />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="co-content"]')).toHaveTextContent('Mode: true')
      expect(canvasElement.querySelector('[data-testid="co-ssr"]')).toHaveTextContent('SSR enabled')
    })
    const toggleButton = canvasElement.querySelector('[data-testid="co-toggle"]')
    if (toggleButton) {
      await userEvent.click(toggleButton)
    }
    await expect(canvasElement.querySelector('[data-testid="co-content"]')).toHaveTextContent('Mode: false')
  }
}
// :story-items [!] System label / Системная метка
