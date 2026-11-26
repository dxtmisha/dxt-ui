import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationRail from './D1NavigationRail.vue'
import { NavigationRailWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { NavigationRailExpose as NavigationRailExposeType } from '@dxtmisha/constructor/NavigationRail'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationRail',
  component: D1NavigationRail,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationRailWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationRailWikiStorybook.getWiki(),
  args: NavigationRailWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationRail>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationRail: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1NavigationRail },
    setup: () => ({ args }),
    template: `
      <D1NavigationRail v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const railElement = canvasElement.querySelector('.d1-navigationRail')
    await expect(railElement).toBeInTheDocument()
    await expect(railElement).toHaveAttribute('role', 'listbox')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const NavigationRailBasic: Story = {
  name: 'Базовая панель навигации',
  render: () => ({
    components: { D1NavigationRail },
    template: `
        
        <D1NavigationRail
          data-testid="rail-basic"
          selected="home"
          :list="[
            { label: 'Home', value: 'home', icon: 'home' },
            { label: 'Search', value: 'search', icon: 'search', badge: '4' },
            { label: 'Settings', value: 'settings', icon: 'settings' }
          ]"
        />
      
    `
  }),
  play: async ({ canvasElement }) => {
    const basicRail = canvasElement.querySelector('[data-testid="rail-basic"]')
    await expect(basicRail).toBeInTheDocument()
    await expect(basicRail?.querySelectorAll('[data-item="true"]').length).toBe(3)
    await expect(basicRail?.querySelector('[data-value="home"]')).toHaveAttribute('aria-selected', 'true')
  }
}
export const NavigationRailHierarchyAndSlots: Story = {
  name: 'Вложенные меню, разделители и HTML-слоты',
  render: () => ({
    components: { D1NavigationRail },
    template: `
        
        <D1NavigationRail
          data-testid="rail-hierarchy"
          divider
          icon-arrow-right="keyboard_arrow_right"
          :list="[
            { label: 'Home', value: 'home', icon: 'home' },
            { type: 'line', value: 'line-1' },
            {
              type: 'menu',
              index: 'menu-tools',
              label: 'Tools',
              icon: 'build',
              value: [
                { label: 'Console', value: 'console', icon: 'terminal' }
              ]
            },
            { type: 'space', value: 'space-1' },
            { type: 'html', value: 'railSlot', label: 'Slot Fallback' },
            { type: 'html', value: 'railInline', label: '<strong>Rail Footer</strong>' }
          ]"
        >
          <template #railSlot>
            <span data-testid="rail-custom-slot">Custom Rail Slot</span>
          </template>
        </D1NavigationRail>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const hierarchyRail = canvasElement.querySelector('[data-testid="rail-hierarchy"]')
    await expect(hierarchyRail).toHaveClass('d1-navigationRail--divider')
    await expect(hierarchyRail?.querySelector('.d1-navigationRail__line')).toBeInTheDocument()
    await expect(hierarchyRail?.querySelector('.d1-navigationRail__space')).toBeInTheDocument()
    await expect(hierarchyRail?.querySelector('[data-testid="rail-custom-slot"]')).toHaveTextContent('Custom Rail Slot')
    await expect(hierarchyRail?.querySelector('.d1-navigationRail__html strong')).toHaveTextContent('Rail Footer')
  }
}
export const NavigationRailEvents: Story = {
  name: 'События клика и закрытия',
  render: () => ({
    components: { D1NavigationRail },
    setup() {
      const lastEvent = ref('none')
      const onClickLite = (options: EventClickValue) => {
        lastEvent.value = 'clickLite:' + String(options?.value ?? '')
      }
      const onClose = () => {
        lastEvent.value = 'close'
      }
      return { lastEvent, onClickLite, onClose }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="rail-event-output">
            Event: {{ lastEvent }}
          </div>
          <D1NavigationRail
            data-testid="rail-events"
            :list="[
              { label: 'Home', value: 'home', icon: 'home' },
              { label: 'Settings', value: 'settings', icon: 'settings' }
            ]"
            @click-lite="onClickLite"
            @close="onClose"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const output = canvasElement.querySelector('[data-testid="rail-event-output"]')
    const homeItem = canvasElement.querySelector('[data-testid="rail-events"] [data-value="home"]')
    await expect(output).toHaveTextContent('Event: none')
    await userEvent.click(homeItem!)
    await expect(output).toHaveTextContent('Event: clickLite:home')
  }
}
export const NavigationRailExposeApi: Story = {
  name: 'Программный API (expose)',
  render: () => ({
    components: { D1NavigationRail },
    setup() {
      const railRef = ref<NavigationRailExposeType | null>(null)
      const exposeResult = ref('pending')
      const readExpose = () => {
        if (railRef.value) {
          exposeResult.value = String(railRef.value.isSelected()) + ':' + railRef.value.getSelectedValues().join(',')
        }
      }
      return { railRef, exposeResult, readExpose }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="rail-read-expose-button" @click="readExpose">
              Read Expose
            </button>
            <div class="wiki-storybook-card" data-testid="rail-expose-output">
              {{ exposeResult }}
            </div>
          </div>
          <D1NavigationRail
            ref="railRef"
            selected="inbox"
            :list="[
              { label: 'Home', value: 'home', icon: 'home' },
              { label: 'Inbox', value: 'inbox', icon: 'inbox' }
            ]"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const readButton = canvasElement.querySelector('[data-testid="rail-read-expose-button"]')
    const exposeOutput = canvasElement.querySelector('[data-testid="rail-expose-output"]')
    await expect(exposeOutput).toHaveTextContent('pending')
    await userEvent.click(readButton!)
    await expect(exposeOutput).toHaveTextContent('true:inbox')
  }
}
export const NavigationRailTestStatesAndKeys: Story = {
  name: 'Тест: Выбор, фокус, кастомные ключи, роли и атрибуты',
  render: () => ({
    components: { D1NavigationRail },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">multiselect + focus + divider</div>
            <D1NavigationRail
              data-testid="rail-multi"
              divider
              tag="nav"
              :aria-multiselectable="true"
              :selected="['home', 'inbox']"
              focus="inbox"
              :list="[
                { label: 'Home', value: 'home', icon: 'home' },
                { label: 'Inbox', value: 'inbox', icon: 'inbox' },
                { label: 'Explore', value: 'explore', icon: 'explore' }
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">custom keys + roles + itemAttrs</div>
            <D1NavigationRail
              data-testid="rail-custom-keys"
              role="menu"
              role-item="menuitem"
              :tabindex="-1"
              key-label="title"
              key-value="code"
              :control="false"
              :item-attrs="{ 'data-rail-item': 'yes' }"
              :item-menu-attrs="{ 'data-rail-menu': '1' }"
              :item-management-attrs="{ 'data-rail-mgmt': '1' }"
              :list="[
                { title: 'Board', code: 'board' },
                { title: 'Files', code: 'files' }
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const multiRail = canvasElement.querySelector('[data-testid="rail-multi"]')
    const customRail = canvasElement.querySelector('[data-testid="rail-custom-keys"]')

    await expect(multiRail).toHaveAttribute('aria-multiselectable', 'true')
    await expect(multiRail?.querySelector('[data-value="home"]')?.tagName).toBe('NAV')
    await expect(multiRail).toHaveClass('d1-navigationRail--divider')
    await expect(multiRail?.querySelectorAll('[aria-selected="true"]').length).toBe(2)
    await expect(multiRail?.querySelector('[data-value="inbox"]')?.className).toContain('--focus')

    await expect(customRail).toHaveAttribute('role', 'menu')
    await expect(customRail).toHaveAttribute('tabindex', '-1')
    await expect(customRail?.querySelector('[data-value="board"]')).toHaveAttribute('role', 'menuitem')
    await expect(customRail?.querySelector('[data-value="board"]')).toHaveAttribute('data-rail-item', 'yes')
  }
}
export const NavigationRailTestDisabledRecordAndControl: Story = {
  name: 'Тест: Блокировка disabled, Record-данные и клавиатурное управление',
  render: () => ({
    components: { D1NavigationRail },
    setup() {
      const blockedClicks = ref(0)
      const controlResult = ref('none')
      const onBlocked = () => {
        blockedClicks.value += 1
      }
      const onControlSelect = (options: EventClickValue) => {
        controlResult.value = 'click:' + String(options?.value ?? '')
      }
      const onControlClose = () => {
        controlResult.value = 'close'
      }
      return { blockedClicks, controlResult, onBlocked, onControlSelect, onControlClose }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">disabled + Record</div>
            <div class="wiki-storybook-card" data-testid="rail-disabled-clicks">{{ blockedClicks }}</div>
            <D1NavigationRail
              data-testid="rail-disabled"
              disabled
              :list="{
                feed: { label: 'Feed', value: 'feed', icon: 'dynamic_feed' },
                saved: { label: 'Saved', value: 'saved', icon: 'bookmark' }
              }"
              selected="feed"
              @click-lite="onBlocked"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">control=true keyboard</div>
            <div class="wiki-storybook-card" data-testid="rail-control-result">{{ controlResult }}</div>
            <D1NavigationRail
              data-testid="rail-control"
              control
              :list="[
                { label: 'One', value: 'one', icon: 'looks_one' },
                { label: 'Two', value: 'two', icon: 'looks_two' }
              ]"
              @click-lite="onControlSelect"
              @close="onControlClose"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const blockedOutput = canvasElement.querySelector('[data-testid="rail-disabled-clicks"]')
    const disabledRail = canvasElement.querySelector('[data-testid="rail-disabled"]')
    const savedItem = disabledRail?.querySelector('[data-value="saved"]')

    await expect(disabledRail).toHaveAttribute('aria-disabled', 'true')
    await userEvent.click(savedItem!)
    await expect(blockedOutput).toHaveTextContent('0')

    const controlOutput = canvasElement.querySelector('[data-testid="rail-control-result"]')
    await userEvent.keyboard('{ArrowDown}{Enter}')
    await expect(controlOutput).toHaveTextContent('click:one')
    await userEvent.keyboard('{Escape}')
    await expect(controlOutput).toHaveTextContent('close')
  }
}
// :story-items [!] System label / Системная метка
