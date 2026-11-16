import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ListGroup from './D1ListGroup.vue'
import { ListGroupWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { ListGroupExpose } from '@dxtmisha/constructor/ListGroup'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ListGroup',
  component: D1ListGroup,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ListGroupWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ListGroupWikiStorybook.getWiki(),
  args: ListGroupWikiStorybook.getValues()
} satisfies Meta<typeof D1ListGroup>

export default meta

type Story = StoryObj<typeof meta>

export const ListGroup: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ListGroup },
    setup: () => ({ args }),
    template: `
      <D1ListGroup v-bind="args">
      <template #head="{ open }">
        <div class="wiki-storybook-item--padding">
          Group header ({{ open ? 'open' : 'close' }})
        </div>
      </template>
      <template #list>
        <div class="wiki-storybook-item--padding">
          Main content area for grouped list items
        </div>
      </template>
    </D1ListGroup>
    `
  }),
  play: async ({ canvasElement }) => {
    const groupElement = canvasElement.querySelector<HTMLElement>('.d1-listGroup')
    const headElement = canvasElement.querySelector<HTMLElement>('.d1-listGroup__head')

    await expect(groupElement).toBeInTheDocument()
    await expect(groupElement).toHaveAttribute('role', 'group')
    await expect(headElement).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ListGroupBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1ListGroup },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ListGroup>
            <template #head="{ open }">
              <div class="wiki-storybook-item--padding">
                Collapsible Group ({{ open ? 'Open' : 'Closed' }})
              </div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">
                Grouped content item 1, Grouped content item 2
              </div>
            </template>
          </D1ListGroup>

          <D1ListGroup open>
            <template #head="{ open }">
              <div class="wiki-storybook-item--padding">
                Initially Open Group ({{ open ? 'Open' : 'Closed' }})
              </div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">
                Pre-expanded list items
              </div>
            </template>
          </D1ListGroup>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const groups = canvasElement.querySelectorAll<HTMLElement>('.d1-listGroup')
    await expect(groups.length).toBe(2)
    await expect(groups[0]).toHaveAttribute('data-open', 'close')
    await expect(groups[1]).toHaveAttribute('data-open', 'open')

    const firstHead = groups[0].querySelector<HTMLElement>('.d1-listGroup__head')
    const firstTrigger = groups[0].querySelector<HTMLElement>('[aria-expanded]')
    await userEvent.click(firstHead!)
    await waitFor(async () => {
      await expect(groups[0]).toHaveAttribute('data-open', 'open')
      await expect(firstTrigger).toHaveAttribute('aria-expanded', 'true')
    })

    await userEvent.click(firstHead!)
    await waitFor(async () => {
      await expect(groups[0]).toHaveAttribute('data-open', 'close')
      await expect(firstTrigger).toHaveAttribute('aria-expanded', 'false')
    })
  }
}
export const ListGroupDivider: Story = {
  name: 'Разделители',
  render: () => ({
    components: { D1ListGroup },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ListGroup>
            <template #head>
              <div class="wiki-storybook-item--padding">First group</div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">First group items</div>
            </template>
          </D1ListGroup>

          <D1ListGroup divider>
            <template #head>
              <div class="wiki-storybook-item--padding">Second group (divider=true)</div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Second group items</div>
            </template>
          </D1ListGroup>

          <D1ListGroup :divider="false">
            <template #head>
              <div class="wiki-storybook-item--padding">Third group (divider=false)</div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Third group items</div>
            </template>
          </D1ListGroup>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const groups = canvasElement.querySelectorAll<HTMLElement>('.d1-listGroup')
    await expect(groups.length).toBe(3)
    await expect(groups[0]).not.toHaveAttribute('data-divider', 'divider')
    await expect(groups[1]).toHaveAttribute('data-divider', 'divider')
    await expect(groups[2]).not.toHaveAttribute('data-divider', 'divider')
  }
}
export const ListGroupSlots: Story = {
  name: 'Слоты (head и list)',
  render: () => ({
    components: { D1ListGroup },
    template: `
        
        <D1ListGroup>
          <template #head="{ open, role, ariaExpanded }">
            <div class="wiki-storybook-item--padding" :role="role" :aria-expanded="ariaExpanded">
              Header slot state: {{ open ? 'expanded' : 'collapsed' }}
            </div>
          </template>
          <template #list>
            <div class="wiki-storybook-item--padding">
              List slot body content
            </div>
          </template>
        </D1ListGroup>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const groupElement = canvasElement.querySelector<HTMLElement>('.d1-listGroup')
    const headElement = canvasElement.querySelector<HTMLElement>('.d1-listGroup__head')
    await expect(headElement).toHaveTextContent('Header slot state: collapsed')

    await userEvent.click(headElement!)
    await waitFor(async () => {
      await expect(groupElement).toHaveAttribute('data-open', 'open')
      await expect(headElement).toHaveTextContent('Header slot state: expanded')
    })
  }
}
export const ListGroupExposed: Story = {
  name: 'Экспонируемые методы (getOpen)',
  render: () => ({
    components: { D1ListGroup },
    setup() {
      const groupReference = ref<ListGroupExpose | null>(null)
      const currentOpenState = ref<string>('not checked')
      const readOpenState = () => {
        currentOpenState.value = String(groupReference.value?.getOpen() ?? false)
      }
      return {
        groupReference,
        currentOpenState,
        readOpenState
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="readOpenState">Check getOpen()</button>
            <div class="wiki-storybook-card" data-testid="expose-status">getOpen: {{ currentOpenState }}</div>
          </div>
          <D1ListGroup ref="groupReference">
            <template #head="{ open }">
              <div class="wiki-storybook-item--padding">
                Inspectable Group ({{ open ? 'open' : 'close' }})
              </div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Expose body items</div>
            </template>
          </D1ListGroup>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const checkButton = canvasElement.querySelector<HTMLButtonElement>('button')
    const statusCard = canvasElement.querySelector<HTMLElement>('[data-testid="expose-status"]')
    const headElement = canvasElement.querySelector<HTMLElement>('.d1-listGroup__head')

    await userEvent.click(checkButton!)
    await expect(statusCard).toHaveTextContent('getOpen: false')

    await userEvent.click(headElement!)
    await waitFor(async () => {
      await userEvent.click(checkButton!)
      await expect(statusCard).toHaveTextContent('getOpen: true')
    })
  }
}
export const ListGroupTestPropsAndStates: Story = {
  name: 'Тест: Свойства, комбинации и вложенные группы',
  render: () => ({
    components: { D1ListGroup },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ListGroup :open="false" :divider="false">
            <template #head><div class="wiki-storybook-item--padding">Closed without divider</div></template>
            <template #list><div class="wiki-storybook-item--padding">Hidden content</div></template>
          </D1ListGroup>

          <D1ListGroup :open="true" :divider="true">
            <template #head><div class="wiki-storybook-item--padding">Open with divider</div></template>
            <template #list>
              <div class="wiki-storybook-item--padding">Parent content</div>
              <D1ListGroup divider>
                <template #head="{ open }">
                  <div class="wiki-storybook-item--padding">Nested child ({{ open ? 'open' : 'close' }})</div>
                </template>
                <template #list>
                  <div class="wiki-storybook-item--padding">Nested leaf item</div>
                </template>
              </D1ListGroup>
            </template>
          </D1ListGroup>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const groups = canvasElement.querySelectorAll<HTMLElement>('.d1-listGroup')
      await expect(groups.length).toBe(3)

      await expect(groups[0]).toHaveAttribute('role', 'group')
      await expect(groups[0]).toHaveAttribute('data-open', 'close')
      await expect(groups[0]).not.toHaveAttribute('data-divider', 'divider')

      await expect(groups[1]).toHaveAttribute('data-open', 'open')
      await expect(groups[1]).toHaveAttribute('data-divider', 'divider')

      await expect(groups[2]).toHaveAttribute('data-open', 'close')
      await expect(groups[2]).toHaveAttribute('data-divider', 'divider')
    })

    const groups = canvasElement.querySelectorAll<HTMLElement>('.d1-listGroup')
    const nestedHead = groups[2].querySelector<HTMLElement>('.d1-listGroup__head')
    await userEvent.click(nestedHead!)
    await waitFor(async () => {
      await expect(groups[2]).toHaveAttribute('data-open', 'open')
      await expect(groups[1]).toHaveAttribute('data-open', 'open')
    })
  }
}
// :story-items [!] System label / Системная метка
