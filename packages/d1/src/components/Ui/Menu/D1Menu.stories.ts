import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Menu from './D1Menu.vue'
import { MenuWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { MenuExpose as MenuExposeType } from '@dxtmisha/constructor/Menu'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Menu',
  component: D1Menu,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuWikiStorybook.getWiki(),
  args: MenuWikiStorybook.getValues()
} satisfies Meta<typeof D1Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Menu: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Menu },
    setup: () => ({ args }),
    template: `
      <D1Menu v-bind="args">
      <template #control="{ binds }">
        <button class="wiki-storybook-button" type="button" data-testid="menu-main-trigger" v-bind="binds">
          Open Menu
        </button>
      </template>
    </D1Menu>
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-main-trigger"]')
    await expect(triggerButton).toBeInTheDocument()
    await expect(triggerButton).toHaveAttribute('aria-haspopup', 'listbox')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuNavigation: Story = {
  name: 'Навигация с previous/next',
  render: () => ({
    components: { D1Menu },
    setup() {
      const selectedValue = ref<string>('color2')
      const colors = ref([
        { label: '[1]Red', value: 'color1', icon: 'palette' },
        { label: '[2]Green', value: 'color2', icon: 'palette' },
        { label: '[3]Blue', value: 'color3', icon: 'palette' },
        { label: '[4]Yellow', value: 'color4', icon: 'palette' },
        { label: '[5]Purple', value: 'color5', icon: 'palette' },
        { label: '[6]Orange', value: 'color6', icon: 'palette' }
      ])
      const stepSize = ref<number>(1)

      return {
        selectedValue,
        colors,
        stepSize
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">Step size:</div>
            <div class="wiki-storybook-flex">
              <button class="wiki-storybook-button" type="button" data-testid="step-1" @click="stepSize = 1">1 item</button>
              <button class="wiki-storybook-button" type="button" data-testid="step-2" @click="stepSize = 2">2 items</button>
              <button class="wiki-storybook-button" type="button" data-testid="step-3" @click="stepSize = 3">3 items</button>
            </div>
          </div>

          <D1Menu
            v-model:selected="selectedValue"
            :list="colors"
            :step="stepSize"
            is-selected-by-value
          >
            <template #control="{ previous, next, selectedNames }">
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <div class="wiki-storybook-flex">
                  <button
                    class="wiki-storybook-button"
                    type="button"
                    data-testid="nav-previous"
                    @click="previous"
                  >
                    Previous
                  </button>
                  <div class="wiki-storybook-card" data-testid="nav-current">
                    {{ selectedNames.value[0] || 'None' }}
                  </div>
                  <button
                    class="wiki-storybook-button"
                    type="button"
                    data-testid="nav-next"
                    @click="next"
                  >
                    Next
                  </button>
                </div>
              </div>
            </template>
          </D1Menu>

          <div class="wiki-storybook-card" data-testid="nav-summary">
            Selected: {{ selectedValue }} | Step: {{ stepSize }}
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const previousButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="nav-previous"]')
    const nextButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="nav-next"]')
    const stepTwoButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="step-2"]')
    const currentCard = canvasElement.querySelector<HTMLElement>('[data-testid="nav-current"]')
    const summaryCard = canvasElement.querySelector<HTMLElement>('[data-testid="nav-summary"]')

    await step('Verify initial selection and step=1 navigation', async () => {
      await expect(currentCard).toHaveTextContent('[2]Green')
      await userEvent.click(nextButton!)
      await expect(summaryCard).toHaveTextContent('Selected: color3 | Step: 1')
    })

    await step('Switch to step=2 and navigate next/previous', async () => {
      await userEvent.click(stepTwoButton!)
      await userEvent.click(nextButton!)
      await expect(summaryCard).toHaveTextContent('Selected: color5 | Step: 2')

      await userEvent.click(previousButton!)
      await expect(summaryCard).toHaveTextContent('Selected: color3 | Step: 2')
    })
  }
}
export const MenuAjax: Story = {
  name: 'AJAX Загрузка',
  render: () => ({
    components: { D1Menu },
    setup() {
      const fetchCount = ref<number>(0)
      const loadMenuData = () => {
        fetchCount.value += 1
        return new Promise<Array<{ label: string, value: string, icon: string }>>(resolve => setTimeout(() => resolve([
          { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
          { label: 'Users', value: 'users', icon: 'people' },
          { label: 'Settings', value: 'settings', icon: 'settings' },
          { label: 'Reports', value: 'reports', icon: 'assessment' }
        ]), 100))
      }

      return { fetchCount, loadMenuData }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="ajax-count">Fetches: {{ fetchCount }}</div>
          <D1Menu
            :ajax="loadMenuData"
            :window-attrs="{ embedded: true, flash: true }"
            cache
            selected="settings"
          >
            <template #control="{ binds, loading }">
              <button class="wiki-storybook-button" type="button" data-testid="ajax-trigger" v-bind="binds">
                Open AJAX Menu (loading: {{ loading.value }})
              </button>
            </template>
          </D1Menu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="ajax-trigger"]')
    const countCard = canvasElement.querySelector<HTMLElement>('[data-testid="ajax-count"]')

    await expect(countCard).toHaveTextContent('Fetches: 0')
    await userEvent.click(triggerButton!)

    await waitFor(async () => {
      await expect(countCard).toHaveTextContent('Fetches: 1')
      await expect(canvasElement).toHaveTextContent('Dashboard')
      await expect(canvasElement).toHaveTextContent('Reports')
    })

    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(triggerButton!)
    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(triggerButton!)
    await waitFor(async () => {
      await expect(countCard).toHaveTextContent('Fetches: 1')
    })
  }
}
export const MenuVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Menu },
    setup() {
      const selectedValue = ref<string>('settings')
      const menuItems = ref([
        { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
        { label: 'Users', value: 'users', icon: 'people' },
        { label: 'Settings', value: 'settings', icon: 'settings' },
        { label: 'Reports', value: 'reports', icon: 'assessment' },
        { label: 'Help', value: 'help', icon: 'help' }
      ])

      return {
        selectedValue,
        menuItems
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" data-testid="vmodel-dashboard" @click="selectedValue = 'dashboard'">Select Dashboard</button>
            <button class="wiki-storybook-button" type="button" data-testid="vmodel-reports" @click="selectedValue = 'reports'">Select Reports</button>
            <button class="wiki-storybook-button" type="button" data-testid="vmodel-clear" @click="selectedValue = ''">Clear</button>
          </div>
          <div class="wiki-storybook-flex">
            <D1Menu
              v-model:selected="selectedValue"
              :list="menuItems"
              :window-attrs="{ embedded: true, open: true, flash: true }"
              embedded
              is-selected-by-value
            >
              <template #control="{ binds }">
                <button class="wiki-storybook-button" type="button" v-bind="binds">
                  Open Menu
                </button>
              </template>
            </D1Menu>
          </div>
          <div class="wiki-storybook-card" data-testid="vmodel-output">Selected value: {{ selectedValue }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const outputCard = canvasElement.querySelector<HTMLElement>('[data-testid="vmodel-output"]')
    const reportsButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="vmodel-reports"]')
    const clearButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="vmodel-clear"]')

    await expect(outputCard).toHaveTextContent('Selected value: settings')
    await userEvent.click(reportsButton!)
    await expect(outputCard).toHaveTextContent('Selected value: reports')

    await waitFor(async () => {
      const usersItem = canvasElement.querySelector<HTMLElement>('[data-value="users"]')
      await expect(usersItem).toBeInTheDocument()
      await userEvent.click(usersItem!)
    })
    await expect(outputCard).toHaveTextContent('Selected value: users')

    await userEvent.click(clearButton!)
    await expect(outputCard).toHaveTextContent('Selected value:')
  }
}
export const MenuBarsAndSlots: Story = {
  name: 'Панель заголовка Bars и слоты',
  render: () => ({
    components: { D1Menu },
    setup() {
      const lastEvent = ref<string>('none')
      const items = ref([
        { label: 'Option One', value: 'one' },
        { label: 'Option Two', value: 'two' }
      ])
      const onSlotClick = (value?: string) => {
        lastEvent.value = 'clickSlot:' + String(value ?? '')
      }
      const onBarsBack = () => {
        lastEvent.value = 'barsBack'
      }

      return {
        lastEvent,
        items,
        onSlotClick,
        onBarsBack
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="slots-event-log">Last event: {{ lastEvent }}</div>
          <D1Menu
            :list="items"
            :bars-hide="false"
            :bars-back-hide="false"
            bars-adaptive="showAlways"
            bars-label="Actions Header"
            bars-description="Manage available menu options"
            :bars-list="[{ icon: 'refresh', label: 'Reload' }]"
            :window-attrs="{ embedded: true, open: true, flash: true }"
            embedded
            @click-slot="onSlotClick"
            @bars-back="onBarsBack"
          >
            <template #title>
              <div data-testid="menu-slot-title">Custom Title</div>
            </template>
            <template #contextTop>
              <div data-testid="menu-slot-top">Context Top</div>
            </template>
            <template #contextBottom>
              <div data-testid="menu-slot-bottom">
                <button class="wiki-storybook-button" type="button" data-testid="slot-action-btn" data-value="slot-item">
                  Slot Action
                </button>
              </div>
            </template>
            <template #footer>
              <div data-testid="menu-slot-footer">Custom Footer</div>
            </template>
          </D1Menu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      await expect(canvasElement.querySelector('[data-testid="menu-slot-title"]')).toHaveTextContent('Custom Title')
      await expect(canvasElement.querySelector('[data-testid="menu-slot-top"]')).toHaveTextContent('Context Top')
      await expect(canvasElement.querySelector('[data-testid="menu-slot-bottom"]')).toBeInTheDocument()
      await expect(canvasElement.querySelector('[data-testid="menu-slot-footer"]')).toHaveTextContent('Custom Footer')
      await expect(canvasElement.querySelector('.d1-menu__bars')).toBeInTheDocument()
    })

    const slotButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="slot-action-btn"]')
    const eventLog = canvasElement.querySelector<HTMLElement>('[data-testid="slots-event-log"]')
    await userEvent.click(slotButton!)
    await expect(eventLog).toHaveTextContent('Last event: clickSlot:slot-item')
  }
}
export const MenuExposeApi: Story = {
  name: 'Программный API (expose)',
  render: () => ({
    components: { D1Menu },
    setup() {
      const menuReference = ref<MenuExposeType | null>(null)
      const selectedValue = ref<string>('first')
      const exposeStatus = ref<string>('idle')
      const items = ref([
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' },
        { label: 'Third', value: 'third' }
      ])
      const readState = () => {
        if (menuReference.value) {
          exposeStatus.value = String(menuReference.value.getOpen())
            + '|'
            + String(menuReference.value.isSelected())
            + '|'
            + menuReference.value.getSelectedValues().join(',')
            + '|'
            + String(menuReference.value.loading())
        }
      }

      return {
        menuReference,
        selectedValue,
        exposeStatus,
        items,
        readState
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" data-testid="expose-open" @click="menuReference?.toOpen()">toOpen</button>
            <button class="wiki-storybook-button" type="button" data-testid="expose-next" @click="menuReference?.next()">next</button>
            <button class="wiki-storybook-button" type="button" data-testid="expose-prev" @click="menuReference?.previous()">previous</button>
            <button class="wiki-storybook-button" type="button" data-testid="expose-close" @click="menuReference?.toClose()">toClose</button>
            <button class="wiki-storybook-button" type="button" data-testid="expose-read" @click="readState">Read Expose</button>
          </div>
          <div class="wiki-storybook-card" data-testid="expose-status">{{ exposeStatus }}</div>
          <D1Menu
            ref="menuReference"
            v-model:selected="selectedValue"
            :list="items"
            :window-attrs="{ embedded: true, flash: true }"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" type="button" v-bind="binds">Expose Trigger</button>
            </template>
          </D1Menu>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const openButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-open"]')
    const nextButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-next"]')
    const prevButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-prev"]')
    const closeButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-close"]')
    const readButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-read"]')
    const statusCard = canvasElement.querySelector<HTMLElement>('[data-testid="expose-status"]')

    await userEvent.click(openButton!)
    await waitFor(async () => {
      await userEvent.click(readButton!)
      await expect(statusCard).toHaveTextContent('true|true|first|false')
    })

    await userEvent.click(nextButton!)
    await userEvent.click(readButton!)
    await expect(statusCard).toHaveTextContent('true|true|second|false')

    await userEvent.click(prevButton!)
    await userEvent.click(readButton!)
    await expect(statusCard).toHaveTextContent('true|true|first|false')

    await new Promise(resolve => setTimeout(resolve, 60))
    await userEvent.click(closeButton!)
    await waitFor(async () => {
      await userEvent.click(readButton!)
      await expect(statusCard).toHaveTextContent('false|true|first|false')
    })
  }
}
export const MenuTestSelectionAndKeys: Story = {
  name: 'Тест: Стили выбора, Record-список, пользовательские ключи, max и роли',
  render: () => ({
    components: { D1Menu },
    setup() {
      const recordList = ref({
        alpha: { label: 'Alpha Record', value: 'alpha' },
        beta: { label: 'Beta Record', value: 'beta' }
      })
      const customKeyItems = ref([
        { title: 'Key One', code: 'k1' },
        { title: 'Key Two', code: 'k2' }
      ])
      const selectedCustom = ref<string>('k1')
      const selectedMulti = ref<string[]>(['m1', 'm2'])
      const multiItems = ref([
        { label: 'M1', value: 'm1' },
        { label: 'M2', value: 'm2' },
        { label: 'M3', value: 'm3' }
      ])

      return {
        recordList,
        customKeyItems,
        selectedCustom,
        selectedMulti,
        multiItems
      }
    },
    template: `
        
        <div class="wiki-storybook-flex">
          <div data-testid="menu-record-wrap">
            <D1Menu
              :list="recordList"
              :window-attrs="{ embedded: true, open: true, flash: true }"
              embedded
              selected="beta"
              tag="button"
              selection-style="radio"
            />
          </div>
          <div data-testid="menu-custom-wrap">
            <D1Menu
              v-model:selected="selectedCustom"
              :list="customKeyItems"
              :window-attrs="{ embedded: true, open: true, flash: true }"
              embedded
              key-label="title"
              key-value="code"
              is-selected-by-value
              selection-style="checkmark"
            />
            <div data-testid="custom-key-val">{{ selectedCustom }}</div>
          </div>
          <div data-testid="menu-multi-wrap">
            <D1Menu
              :list="multiItems"
              :selected="selectedMulti"
              :max="2"
              :window-attrs="{ embedded: true, open: true, flash: true }"
              embedded
              selection-style="checkbox"
              role-list="listbox"
              role-item="option"
              :list-attrs="{ 'data-list-attr': 'ok' }"
              :item-attrs="{ 'data-item-attr': 'yes' }"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const recordWrap = canvasElement.querySelector('[data-testid="menu-record-wrap"]')
      const customWrap = canvasElement.querySelector('[data-testid="menu-custom-wrap"]')
      const multiWrap = canvasElement.querySelector('[data-testid="menu-multi-wrap"]')

      await expect(recordWrap?.querySelector('button[data-value="beta"]')).toBeInTheDocument()
      await expect(customWrap?.querySelector('[data-value="k2"]')).toHaveTextContent('Key Two')
      await expect(multiWrap?.querySelector('[data-list-attr="ok"]')).toHaveAttribute('role', 'listbox')
      await expect(multiWrap?.querySelector('[data-value="m1"]')).toHaveAttribute('role', 'option')
      await expect(multiWrap?.querySelector('[data-value="m1"]')).toHaveAttribute('data-item-attr', 'yes')
    })

    const customKeyTwo = canvasElement.querySelector<HTMLElement>('[data-testid="menu-custom-wrap"] [data-value="k2"]')
    await userEvent.click(customKeyTwo!)
    await expect(canvasElement.querySelector('[data-testid="custom-key-val"]')).toHaveTextContent('k2')
  }
}
export const MenuTestSearchHighlightAndStates: Story = {
  name: 'Тест: Поиск, подсветка, hideList, disabled, autoClose и updateValue',
  render: () => ({
    components: { D1Menu },
    setup() {
      const items = ref([
        { label: 'Example One', value: 'one' },
        { label: 'Examination Two', value: 'two' },
        { label: 'Other Three', value: 'three' }
      ])
      const updatedValue = ref<string>('none')
      const onUpdateValue = (value?: NumberOrStringOrBoolean) => {
        updatedValue.value = String(value ?? '')
      }
      const onItemClick = (_event: MouseEvent, payload: EventClickValue) => {
        updatedValue.value = 'click:' + String(payload.value ?? '')
      }

      return {
        items,
        updatedValue,
        onUpdateValue,
        onItemClick
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="states-output">{{ updatedValue }}</div>
          <div class="wiki-storybook-flex">
            <D1Menu
              :list="items"
              :window-attrs="{ embedded: true, open: true, flash: true }"
              embedded
              show-search
              filter-mode
              highlight="exam"
              :highlight-length-start="4"
              :lite-threshold="2"
              :auto-close="false"
              is-selected-by-value
              selected="one"
              @click="onItemClick"
              @update-value="onUpdateValue"
            />
            <D1Menu
              :list="items"
              :window-attrs="{ embedded: true, open: true, flash: true }"
              embedded
              hide-list
            />
            <D1Menu
              :list="items"
              disabled
            >
              <template #control="{ binds }">
                <button class="wiki-storybook-button" type="button" data-testid="disabled-menu-btn" v-bind="binds">
                  Disabled
                </button>
              </template>
            </D1Menu>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const menus = canvasElement.querySelectorAll<HTMLElement>('.d1-menu')
      await expect(menus.length).toBeGreaterThanOrEqual(2)
      await expect(canvasElement.querySelector('.d1-menu--hideList')).toBeInTheDocument()
      await expect(canvasElement.querySelector('.d1-menu--hideList .d1-menu__list')).toBeNull()
    })

    const disabledButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="disabled-menu-btn"]')
    await userEvent.click(disabledButton!)
    await expect(disabledButton).toHaveAttribute('aria-expanded', 'false')

    const secondItem = canvasElement.querySelector<HTMLElement>('[data-value="two"]')
    await userEvent.click(secondItem!)
    await expect(canvasElement.querySelector('[data-testid="states-output"]')).toHaveTextContent('click:two')
  }
}
// :story-items [!] System label / Системная метка
