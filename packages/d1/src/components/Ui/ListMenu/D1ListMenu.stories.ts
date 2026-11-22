import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ListMenu from './D1ListMenu.vue'
import { ListMenuWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { ListMenuExpose } from '@dxtmisha/constructor/ListMenu'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ListMenu',
  component: D1ListMenu,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ListMenuWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ListMenuWikiStorybook.getWiki(),
  args: ListMenuWikiStorybook.getValues()
} satisfies Meta<typeof D1ListMenu>

export default meta

type Story = StoryObj<typeof meta>

export const ListMenu: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ListMenu },
    setup: () => ({ args }),
    template: `
      <D1ListMenu v-bind="args">
      <template #head="{ open, binds }">
        <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="list-menu-trigger">
          Menu ({{ open.value ? 'open' : 'closed' }})
        </button>
      </template>
      <template #list>
        <div class="wiki-storybook-item--padding">
          <h4>Menu Content</h4>
          <ul>
            <li>Dashboard</li>
            <li>Content</li>
            <li>Analytics</li>
          </ul>
        </div>
      </template>
    </D1ListMenu>
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="list-menu-trigger"]')
    await expect(trigger).toBeInTheDocument()
    await expect(trigger).toHaveTextContent('Menu (closed)')
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(trigger!)
    await waitFor(async () => {
      const windowElement = document.querySelector<HTMLElement>('.d1-listMenu[data-status="open"]')
      await expect(windowElement).toBeInTheDocument()
      await expect(trigger).toHaveTextContent('Menu (open)')
      await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    })

    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(trigger!)
    await waitFor(async () => {
      const windowElement = document.querySelector<HTMLElement>('.d1-listMenu[data-status="open"]')
      await expect(windowElement).toBeNull()
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ListMenuBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1ListMenu },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1ListMenu :window-attrs="{ flash: true }">
            <template #head="{ open, binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="basic-trigger">
                Dropdown Menu ({{ open.value ? 'open' : 'closed' }})
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding" data-testid="basic-list">
                <div>Action 1</div>
                <div>Action 2</div>
              </div>
            </template>
          </D1ListMenu>

          <D1ListMenu open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ open, binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="embedded-trigger">
                Embedded Open ({{ open.value ? 'open' : 'closed' }})
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding" data-testid="embedded-list">
                <div>Visible Embedded Item 1</div>
                <div>Visible Embedded Item 2</div>
              </div>
            </template>
          </D1ListMenu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const basicTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="basic-trigger"]')
    await expect(basicTrigger).toHaveTextContent('Dropdown Menu (closed)')

    await waitFor(async () => {
      const embeddedRoot = canvasElement.querySelector<HTMLElement>('.d1-listMenu')
      const embeddedList = canvasElement.querySelector<HTMLElement>('[data-testid="embedded-list"]')
      await expect(embeddedRoot).toBeInTheDocument()
      await expect(embeddedRoot).toHaveClass('d1-listMenu--open')
      await expect(embeddedList).toBeInTheDocument()
    })

    await userEvent.click(basicTrigger!)
    await waitFor(async () => {
      await expect(basicTrigger).toHaveTextContent('Dropdown Menu (open)')
    })

    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(basicTrigger!)
    await waitFor(async () => {
      await expect(basicTrigger).toHaveTextContent('Dropdown Menu (closed)')
    })
  }
}
export const ListMenuAxis: Story = {
  name: 'Ось позиционирования',
  render: () => ({
    components: { D1ListMenu },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1ListMenu axis="y" open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">Vertical (axis="y")</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Vertical submenu items</div>
            </template>
          </D1ListMenu>

          <D1ListMenu axis="x" open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">Horizontal (axis="x")</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Horizontal submenu items</div>
            </template>
          </D1ListMenu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const menus = canvasElement.querySelectorAll<HTMLElement>('.d1-listMenu')
      await expect(menus.length).toBe(2)
      await expect(menus[0]).toHaveClass('d1-listMenu--axis--y')
      await expect(menus[1]).toHaveClass('d1-listMenu--axis--x')
    })
  }
}
export const ListMenuDivider: Story = {
  name: 'Разделитель',
  render: () => ({
    components: { D1ListMenu },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1ListMenu divider open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">With divider</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Menu items with divider</div>
            </template>
          </D1ListMenu>

          <D1ListMenu :divider="false" open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">Without divider</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Menu items without divider</div>
            </template>
          </D1ListMenu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const menus = canvasElement.querySelectorAll<HTMLElement>('.d1-listMenu')
      await expect(menus.length).toBe(2)
      await expect(menus[0]).toHaveClass('d1-listMenu--divider')
      await expect(menus[1]).not.toHaveClass('d1-listMenu--divider')
    })
  }
}
export const ListMenuSlots: Story = {
  name: 'Слоты (head и list)',
  render: () => ({
    components: { D1ListMenu },
    template: `
        
        <D1ListMenu open :window-attrs="{ embedded: true, flash: true }">
          <template #head="{ open, binds }">
            <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="slot-head">
              Head slot ({{ open.value ? 'open' : 'closed' }})
            </button>
          </template>
          <template #list>
            <div class="wiki-storybook-item--padding" data-testid="slot-list">
              List slot body content
            </div>
          </template>
        </D1ListMenu>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const headElement = canvasElement.querySelector<HTMLElement>('[data-testid="slot-head"]')
      const listElement = canvasElement.querySelector<HTMLElement>('[data-testid="slot-list"]')
      await expect(headElement).toHaveTextContent('Head slot (open)')
      await expect(listElement).toHaveTextContent('List slot body content')
    })
  }
}
export const ListMenuExposed: Story = {
  name: 'Экспонируемые методы',
  render: () => ({
    components: { D1ListMenu },
    setup() {
      const listMenuReference = ref<ListMenuExpose | null>(null)
      const currentOpenState = ref<string>('not checked')
      const readOpenState = () => {
        currentOpenState.value = String(listMenuReference.value?.getOpen() ?? false)
      }
      const openMenu = async () => {
        await listMenuReference.value?.toOpen()
      }
      const closeMenu = async () => {
        await listMenuReference.value?.toClose()
      }
      const toggleMenu = async () => {
        await listMenuReference.value?.toggle()
      }
      return {
        listMenuReference,
        currentOpenState,
        readOpenState,
        openMenu,
        closeMenu,
        toggleMenu
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" data-testid="btn-open" @click="openMenu">toOpen()</button>
            <button class="wiki-storybook-button" type="button" data-testid="btn-close" @click="closeMenu">toClose()</button>
            <button class="wiki-storybook-button" type="button" data-testid="btn-toggle" @click="toggleMenu">toggle()</button>
            <button class="wiki-storybook-button" type="button" data-testid="btn-check" @click="readOpenState">Check getOpen()</button>
            <div class="wiki-storybook-card" data-testid="expose-status">getOpen: {{ currentOpenState }}</div>
          </div>
          <D1ListMenu ref="listMenuReference" :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ open, binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="expose-trigger">
                Expose Menu ({{ open.value ? 'open' : 'closed' }})
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Exposed content</div>
            </template>
          </D1ListMenu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const openButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="btn-open"]')
    const closeButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="btn-close"]')
    const toggleButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="btn-toggle"]')
    const checkButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="btn-check"]')
    const exposeTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-trigger"]')
    const statusCard = canvasElement.querySelector<HTMLElement>('[data-testid="expose-status"]')

    await userEvent.click(openButton!)
    await waitFor(async () => {
      await expect(exposeTrigger).toHaveTextContent('Expose Menu (open)')
    })
    await userEvent.click(checkButton!)
    await expect(statusCard).toHaveTextContent('getOpen: true')

    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(closeButton!)
    await waitFor(async () => {
      await expect(exposeTrigger).toHaveTextContent('Expose Menu (closed)')
    })
    await userEvent.click(checkButton!)
    await expect(statusCard).toHaveTextContent('getOpen: false')

    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(toggleButton!)
    await waitFor(async () => {
      await expect(exposeTrigger).toHaveTextContent('Expose Menu (open)')
    })
    await userEvent.click(checkButton!)
    await expect(statusCard).toHaveTextContent('getOpen: true')

    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(closeButton!)
  }
}
export const ListMenuEventWindow: Story = {
  name: 'Событие window',
  render: () => ({
    components: { D1ListMenu },
    setup() {
      const lastWindowEvent = ref<string>('none')
      const onWindowChange = (options: WindowEmitOptions) => {
        lastWindowEvent.value = 'open=' + options.open
      }
      return {
        lastWindowEvent,
        onWindowChange
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="window-event-log">event: {{ lastWindowEvent }}</div>
          <D1ListMenu :window-attrs="{ embedded: true, flash: true }" @window="onWindowChange">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="event-trigger">
                Toggle Event Menu
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Event menu content</div>
            </template>
          </D1ListMenu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="event-trigger"]')
    const logCard = canvasElement.querySelector<HTMLElement>('[data-testid="window-event-log"]')

    await expect(logCard).toHaveTextContent('event: none')
    await userEvent.click(trigger!)
    await waitFor(async () => {
      await expect(logCard).toHaveTextContent('event: open=true')
    })

    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(trigger!)
    await waitFor(async () => {
      await expect(logCard).toHaveTextContent('event: open=false')
    })
  }
}
export const ListMenuTestStates: Story = {
  name: 'Тест: Отключённое состояние, autoClose, disableFocusReturn и вложенные подменю',
  render: () => ({
    components: { D1ListMenu },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1ListMenu disabled>
            <template #head="{ open, binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="disabled-trigger">
                Disabled ({{ open.value ? 'open' : 'closed' }})
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Disabled list</div>
            </template>
          </D1ListMenu>

          <D1ListMenu :auto-close="false" disable-focus-return open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ open, binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="autoclose-trigger">
                AutoClose=false ({{ open.value ? 'open' : 'closed' }})
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding" data-testid="autoclose-item">
                Click stays open
              </div>
            </template>
          </D1ListMenu>

          <D1ListMenu open axis="y" divider :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">Parent</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">
                <D1ListMenu open axis="x" :window-attrs="{ embedded: true, flash: true }">
                  <template #head="{ binds: nestedBinds }">
                    <button v-bind="nestedBinds" class="wiki-storybook-button" type="button">Nested</button>
                  </template>
                  <template #list>
                    <div class="wiki-storybook-item--padding" data-testid="nested-leaf">Nested Leaf</div>
                  </template>
                </D1ListMenu>
              </div>
            </template>
          </D1ListMenu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const disabledTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="disabled-trigger"]')
    const autoCloseTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="autoclose-trigger"]')

    await userEvent.click(disabledTrigger!)
    await expect(disabledTrigger).toHaveTextContent('Disabled (closed)')

    await waitFor(async () => {
      const autoCloseItem = canvasElement.querySelector<HTMLElement>('[data-testid="autoclose-item"]')
      const nestedLeaf = canvasElement.querySelector<HTMLElement>('[data-testid="nested-leaf"]')
      const menus = canvasElement.querySelectorAll<HTMLElement>('.d1-listMenu')
      await expect(autoCloseItem).toBeInTheDocument()
      await expect(nestedLeaf).toBeInTheDocument()
      await expect(menus.length).toBe(3)
      await expect(menus[1]).toHaveClass('d1-listMenu--axis--y')
      await expect(menus[1]).toHaveClass('d1-listMenu--divider')
      await expect(menus[2]).toHaveClass('d1-listMenu--axis--x')
    })

    const autoCloseItem = canvasElement.querySelector<HTMLElement>('[data-testid="autoclose-item"]')
    await userEvent.click(autoCloseItem!)
    await expect(autoCloseTrigger).toHaveTextContent('AutoClose=false (open)')
  }
}
// :story-items [!] System label / Системная метка
