import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ListMenu component properties
 *
 * Описания свойств компонента ListMenu
 */
export const wikiDescriptionsListMenu: StorybookComponentsDescriptionItem = {
  name: 'ListMenu',
  description: {
    en: 'Auxiliary component for the List component to create nested menus and organize navigation elements with expandable structure',
    ru: 'Вспомогательный компонент для компонента List для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой'
  },
  possibilities: {
    en: [
      'menu helper for List component navigation',
      'open and close submenu state management via Window',
      'customizable menu trigger via head slot with WindowControlItem binds',
      'horizontal and vertical positioning axes',
      'nested submenu support without trapping focus or locking parent menus',
      'programmatic control via exposed Window methods',
      'flexible menu content management through head and list slots'
    ],
    ru: [
      'помощник меню для навигации компонента List',
      'управление состоянием открытия и закрытия подменю через Window',
      'настраиваемый триггер меню через слот head с привязками WindowControlItem',
      'горизонтальная и вертикальная оси позиционирования',
      'поддержка вложенных подменю без захвата фокуса и блокировки родительских меню',
      'программное управление через экспонируемые методы Window',
      'гибкое управление содержимым меню через слоты head и list'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
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
    </DesignComponent>
  `,
  play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="list-menu-trigger"]')
await expect(trigger).toBeInTheDocument()
await expect(trigger).toHaveTextContent('Menu (closed)')
await expect(trigger).toHaveAttribute('aria-expanded', 'false')

await userEvent.click(trigger!)
await waitFor(async () => {
  const windowElement = document.querySelector<HTMLElement>('.design-component[data-status="open"]')
  await expect(windowElement).toBeInTheDocument()
  await expect(trigger).toHaveTextContent('Menu (open)')
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
})

await new Promise(resolve => setTimeout(resolve, 60))
await userEvent.click(trigger!)
await waitFor(async () => {
  const windowElement = document.querySelector<HTMLElement>('.design-component[data-status="open"]')
  await expect(windowElement).toBeNull()
})
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { ListMenuExpose } from \'@dxtmisha/constructor/ListMenu\'',
    'import type { WindowEmitOptions } from \'@dxtmisha/constructor/Window\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ListMenuBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent :window-attrs="{ flash: true }">
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
          </DesignComponent>

          <DesignComponent open :window-attrs="{ embedded: true, flash: true }">
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
          </DesignComponent>
        </div>
      `,
      play: `
const basicTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="basic-trigger"]')
await expect(basicTrigger).toHaveTextContent('Dropdown Menu (closed)')

await waitFor(async () => {
  const embeddedRoot = canvasElement.querySelector<HTMLElement>('.design-component')
  const embeddedList = canvasElement.querySelector<HTMLElement>('[data-testid="embedded-list"]')
  await expect(embeddedRoot).toBeInTheDocument()
  await expect(embeddedRoot).toHaveClass('design-component--open')
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
      `
    },
    {
      id: 'ListMenuAxis',
      name: {
        en: 'Positioning axis',
        ru: 'Ось позиционирования'
      },
      propsName: 'axis',
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent axis="y" open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">Vertical (axis="y")</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Vertical submenu items</div>
            </template>
          </DesignComponent>

          <DesignComponent axis="x" open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">Horizontal (axis="x")</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Horizontal submenu items</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
await waitFor(async () => {
  const menus = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(menus.length).toBe(2)
  await expect(menus[0]).toHaveClass('design-component--axis--y')
  await expect(menus[1]).toHaveClass('design-component--axis--x')
})
      `
    },
    {
      id: 'ListMenuDivider',
      name: {
        en: 'Divider',
        ru: 'Разделитель'
      },
      propsName: 'divider',
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent divider open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">With divider</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Menu items with divider</div>
            </template>
          </DesignComponent>

          <DesignComponent :divider="false" open :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">Without divider</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Menu items without divider</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
await waitFor(async () => {
  const menus = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(menus.length).toBe(2)
  await expect(menus[0]).toHaveClass('design-component--divider')
  await expect(menus[1]).not.toHaveClass('design-component--divider')
})
      `
    },
    {
      id: 'ListMenuSlots',
      name: {
        en: 'Slots (head & list)',
        ru: 'Слоты (head и list)'
      },
      template: `
        <DesignComponent open :window-attrs="{ embedded: true, flash: true }">
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
        </DesignComponent>
      `,
      play: `
await waitFor(async () => {
  const headElement = canvasElement.querySelector<HTMLElement>('[data-testid="slot-head"]')
  const listElement = canvasElement.querySelector<HTMLElement>('[data-testid="slot-list"]')
  await expect(headElement).toHaveTextContent('Head slot (open)')
  await expect(listElement).toHaveTextContent('List slot body content')
})
      `
    },
    {
      id: 'ListMenuExposed',
      name: {
        en: 'Expose methods',
        ru: 'Экспонируемые методы'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" data-testid="btn-open" @click="openMenu">toOpen()</button>
            <button class="wiki-storybook-button" type="button" data-testid="btn-close" @click="closeMenu">toClose()</button>
            <button class="wiki-storybook-button" type="button" data-testid="btn-toggle" @click="toggleMenu">toggle()</button>
            <button class="wiki-storybook-button" type="button" data-testid="btn-check" @click="readOpenState">Check getOpen()</button>
            <div class="wiki-storybook-card" data-testid="expose-status">getOpen: {{ currentOpenState }}</div>
          </div>
          <DesignComponent ref="listMenuReference" :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ open, binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="expose-trigger">
                Expose Menu ({{ open.value ? 'open' : 'closed' }})
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Exposed content</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
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
      `
    },
    {
      id: 'ListMenuEventWindow',
      name: {
        en: 'Window event',
        ru: 'Событие window'
      },
      setup: `
      const lastWindowEvent = ref<string>('none')
      const onWindowChange = (options: WindowEmitOptions) => {
        lastWindowEvent.value = 'open=' + options.open
      }
      return {
        lastWindowEvent,
        onWindowChange
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="window-event-log">event: {{ lastWindowEvent }}</div>
          <DesignComponent :window-attrs="{ embedded: true, flash: true }" @window="onWindowChange">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="event-trigger">
                Toggle Event Menu
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Event menu content</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
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
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & combinations)
    // =========================================================================
    {
      id: 'ListMenuTestStates',
      name: {
        en: 'Test: Disabled, autoClose and nested submenus',
        ru: 'Тест: Отключённое состояние, autoClose и вложенные подменю'
      },
      propsName: ['disabled', 'autoClose', 'open', 'axis', 'divider', 'windowAttrs'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent disabled>
            <template #head="{ open, binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button" data-testid="disabled-trigger">
                Disabled ({{ open.value ? 'open' : 'closed' }})
              </button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Disabled list</div>
            </template>
          </DesignComponent>

          <DesignComponent :auto-close="false" open :window-attrs="{ embedded: true, flash: true }">
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
          </DesignComponent>

          <DesignComponent open axis="y" divider :window-attrs="{ embedded: true, flash: true }">
            <template #head="{ binds }">
              <button v-bind="binds" class="wiki-storybook-button" type="button">Parent</button>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">
                <DesignComponent open axis="x" :window-attrs="{ embedded: true, flash: true }">
                  <template #head="{ binds: nestedBinds }">
                    <button v-bind="nestedBinds" class="wiki-storybook-button" type="button">Nested</button>
                  </template>
                  <template #list>
                    <div class="wiki-storybook-item--padding" data-testid="nested-leaf">Nested Leaf</div>
                  </template>
                </DesignComponent>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const disabledTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="disabled-trigger"]')
const autoCloseTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="autoclose-trigger"]')

await userEvent.click(disabledTrigger!)
await expect(disabledTrigger).toHaveTextContent('Disabled (closed)')

await waitFor(async () => {
  const autoCloseItem = canvasElement.querySelector<HTMLElement>('[data-testid="autoclose-item"]')
  const nestedLeaf = canvasElement.querySelector<HTMLElement>('[data-testid="nested-leaf"]')
  const menus = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(autoCloseItem).toBeInTheDocument()
  await expect(nestedLeaf).toBeInTheDocument()
  await expect(menus.length).toBe(3)
  await expect(menus[1]).toHaveClass('design-component--axis--y')
  await expect(menus[1]).toHaveClass('design-component--divider')
  await expect(menus[2]).toHaveClass('design-component--axis--x')
})

const autoCloseItem = canvasElement.querySelector<HTMLElement>('[data-testid="autoclose-item"]')
await userEvent.click(autoCloseItem!)
await expect(autoCloseTrigger).toHaveTextContent('AutoClose=false (open)')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListMenu'} type={'listMenu'}/>
<Canvas of={Component.ListMenuBasic}/>
<Canvas of={Component.ListMenuAxis}/>
<Canvas of={Component.ListMenuDivider}/>
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<Canvas of={Component.ListMenuEventWindow}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<Canvas of={Component.ListMenuExposed}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ListMenu'} type={'slots'}/>
<Canvas of={Component.ListMenuSlots}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <ListMenu :window-attrs="{embedded: true, open: true}" v-bind="args">
    <template #head="{ binds }">
      <span v-bind="binds as any">head</span>
    </template>
    <template #list>
      list
    </template>
  </ListMenu>
</div>
    `,
    description: `
Specialized wrapper component for creating dropdown menus or nested navigation trees. Utilizes dynamic window positioning to display a list of actions or sub-options relative to a trigger element.
Features an adaptive menu preset managing visibility, positioning (popover vs inline), and interaction modes. Exposes standard binds in the #head slot to automate trigger setup and ensures smooth animations during state transitions.
Controlled via the open, axis, divider, disabled, autoClose, and windowAttrs props, and utilizes #head and #list slots for trigger and content. Use for nested navigation submenus, action menus, or multi-level lists.
    `,
    hide: true
  }
}
