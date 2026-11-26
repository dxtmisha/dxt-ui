import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationList from './D1NavigationList.vue'
import { NavigationListWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { NavigationListExpose as NavigationListExposeType } from '@dxtmisha/constructor/NavigationList'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationList',
  component: D1NavigationList,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationListWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationListWikiStorybook.getWiki(),
  args: NavigationListWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationList>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationList: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1NavigationList },
    setup: () => ({ args }),
    template: `
      <D1NavigationList v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const navigationList = canvasElement.querySelector('.d1-navigationList')
    await expect(navigationList).toBeInTheDocument()
    await expect(navigationList).toHaveAttribute('role', 'listbox')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const NavigationListHighlight: Story = {
  name: 'Выделение',
  render: () => ({
    components: { D1NavigationList },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationList
              data-testid="nav-list-highlight"
              :list="[
                {label: 'User Management', value: 'users', icon: 'people'},
                {label: 'Role Permissions', value: 'roles', icon: 'security'},
                {label: 'System Logs', value: 'logs', icon: 'receipt_long'}
              ]"
              highlight="manag"
              :highlightLengthStart="4"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const highlightList = canvasElement.querySelector('[data-testid="nav-list-highlight"]')
    await expect(highlightList).toBeInTheDocument()
    await expect(highlightList?.textContent).toContain('User Management')
    await expect(highlightList?.textContent).toContain('System Logs')
  }
}
export const NavigationListLiteMode: Story = {
  name: 'Облегчённый режим',
  render: () => ({
    components: { D1NavigationList },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Without lite</div>
            <D1NavigationList
              data-testid="nav-list-full"
              :liteThreshold="3"
              :list="[
                {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},
                {label: 'Analytics', value: 'analytics', icon: 'analytics'},
                {label: 'Projects', value: 'projects', icon: 'folder'},
                {label: 'Team', value: 'team', icon: 'group'},
                {label: 'Settings', value: 'settings', icon: 'settings'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With lite</div>
            <D1NavigationList
              data-testid="nav-list-lite"
              :lite="true"
              :liteThreshold="3"
              :list="[
                {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},
                {label: 'Analytics', value: 'analytics', icon: 'analytics'},
                {label: 'Projects', value: 'projects', icon: 'folder'},
                {label: 'Team', value: 'team', icon: 'group'},
                {label: 'Settings', value: 'settings', icon: 'settings'}
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const fullList = canvasElement.querySelector('[data-testid="nav-list-full"]')
    const liteList = canvasElement.querySelector('[data-testid="nav-list-lite"]')
    await expect(fullList).toBeInTheDocument()
    await expect(liteList).toBeInTheDocument()
    await expect(fullList?.querySelectorAll('[data-item="true"]').length).toBe(5)
    await expect(liteList?.querySelectorAll('[data-item="true"]').length).toBe(5)
  }
}
export const NavigationListHierarchyAndSlots: Story = {
  name: 'Иерархия и пользовательский HTML-слот',
  render: () => ({
    components: { D1NavigationList },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen">
            <D1NavigationList
              data-testid="nav-list-hierarchy"
              :list="[
                {type: 'subtitle', value: 'sub1', label: 'Workspace'},
                {label: 'Home', value: 'home', icon: 'home'},
                {type: 'line', value: 'ln1'},
                {
                  type: 'group',
                  index: 'grp1',
                  label: 'Team',
                  value: [
                    {label: 'Members', value: 'members'},
                    {label: 'Roles', value: 'roles'}
                  ]
                },
                {
                  type: 'menu',
                  index: 'mnu1',
                  label: 'More Menu',
                  value: [
                    {label: 'Webhooks', value: 'webhooks'}
                  ]
                },
                {type: 'space', value: 'sp1'},
                {type: 'html', value: 'customHtmlSlot', label: 'Fallback'},
                {type: 'html', value: 'rawHtml', label: '<strong>Raw HTML</strong>'}
              ]"
            >
              <template #customHtmlSlot>
                <span data-testid="nav-custom-html-slot">Custom Navigation Slot</span>
              </template>
            </D1NavigationList>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const hierarchyList = canvasElement.querySelector('[data-testid="nav-list-hierarchy"]')
    await expect(hierarchyList).toBeInTheDocument()
    await expect(hierarchyList?.querySelector('.d1-navigationList__subtitle')?.textContent).toContain('Workspace')
    await expect(hierarchyList?.querySelector('.d1-navigationList__line')).toBeInTheDocument()
    await expect(hierarchyList?.querySelector('.d1-navigationList__space')).toBeInTheDocument()
    await expect(hierarchyList?.querySelector('[data-testid="nav-custom-html-slot"]')).toHaveTextContent('Custom Navigation Slot')
    await expect(hierarchyList?.querySelector('.d1-navigationList__html strong')).toHaveTextContent('Raw HTML')
  }
}
export const NavigationListEvents: Story = {
  name: 'События клика и закрытия',
  render: () => ({
    components: { D1NavigationList },
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
          <div class="wiki-storybook-card" data-testid="nav-list-event-output">
            Event: {{ lastEvent }}
          </div>
          <D1NavigationList
            data-testid="nav-list-events"
            :list="[
              {label: 'Dashboard', value: 'dashboard'},
              {label: 'Settings', value: 'settings'}
            ]"
            @click-lite="onClickLite"
            @close="onClose"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const output = canvasElement.querySelector('[data-testid="nav-list-event-output"]')
    const dashboardItem = canvasElement.querySelector('[data-testid="nav-list-events"] [data-value="dashboard"]')
    await expect(output).toHaveTextContent('Event: none')
    await userEvent.click(dashboardItem!)
    await expect(output).toHaveTextContent('Event: clickLite:dashboard')
  }
}
export const NavigationListExposeApi: Story = {
  name: 'Программный API (expose)',
  render: () => ({
    components: { D1NavigationList },
    setup() {
      const listRef = ref<NavigationListExposeType | null>(null)
      const exposeResult = ref('pending')
      const readExpose = () => {
        if (listRef.value) {
          exposeResult.value = String(listRef.value.isSelected()) + ':' + listRef.value.getSelectedValues().join(',')
        }
      }
      return { listRef, exposeResult, readExpose }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="nav-read-expose-button" @click="readExpose">
              Read Expose
            </button>
            <div class="wiki-storybook-card" data-testid="nav-expose-output">
              {{ exposeResult }}
            </div>
          </div>
          <D1NavigationList
            ref="listRef"
            selected="dashboard"
            :list="[
              {label: 'Dashboard', value: 'dashboard'},
              {label: 'Settings', value: 'settings'}
            ]"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const readButton = canvasElement.querySelector('[data-testid="nav-read-expose-button"]')
    const exposeOutput = canvasElement.querySelector('[data-testid="nav-expose-output"]')
    await expect(exposeOutput).toHaveTextContent('pending')
    await userEvent.click(readButton!)
    await expect(exposeOutput).toHaveTextContent('true:dashboard')
  }
}
export const NavigationListTestStatesAndSelection: Story = {
  name: 'Тест: Состояния, оси, разделители и параметры выбора',
  render: () => ({
    components: { D1NavigationList },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">axis=x + divider + tag=button</div>
            <D1NavigationList
              data-testid="nav-list-axis-x"
              axis="x"
              divider
              tag="button"
              selection-style="checkbox"
              :aria-multiselectable="true"
              :selected="['a', 'b']"
              :max="2"
              focus="b"
              :list="[
                {label: 'A', value: 'a'},
                {label: 'B', value: 'b'},
                {label: 'C', value: 'c'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">selectionStyle=radio + disabled</div>
            <D1NavigationList
              data-testid="nav-list-radio"
              disabled
              selection-style="radio"
              selected="x"
              :list="[
                {label: 'X', value: 'x'},
                {label: 'Y', value: 'y'}
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const axisList = canvasElement.querySelector('[data-testid="nav-list-axis-x"]')
    const radioList = canvasElement.querySelector('[data-testid="nav-list-radio"]')
    await expect(axisList).toHaveClass('d1-navigationList--axis--x')
    await expect(axisList).toHaveClass('d1-navigationList--divider')
    await expect(axisList).toHaveAttribute('aria-multiselectable', 'true')
    await expect(axisList?.querySelectorAll('[aria-selected="true"]').length).toBe(2)
    await expect(radioList).toHaveAttribute('aria-disabled', 'true')
    await expect(radioList?.querySelector('[data-value="y"]')).toHaveAttribute('aria-disabled', 'true')
  }
}
export const NavigationListTestRecordAndControl: Story = {
  name: 'Тест: Record-список, защита от клика и клавиатурное управление',
  render: () => ({
    components: { D1NavigationList },
    setup() {
      const blockedCount = ref(0)
      const keyboardLog = ref('none')
      const onBlockedClick = () => {
        blockedCount.value += 1
      }
      const onControlClick = (options: EventClickValue) => {
        keyboardLog.value = 'click:' + String(options?.value ?? '')
      }
      const onControlClose = () => {
        keyboardLog.value = 'close'
      }
      return { blockedCount, keyboardLog, onBlockedClick, onControlClick, onControlClose }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">Record dataset + disabled guard</div>
            <div class="wiki-storybook-card" data-testid="nav-list-disabled-count">{{ blockedCount }}</div>
            <D1NavigationList
              data-testid="nav-list-record-disabled"
              disabled
              :list="{
                feed: { label: 'Feed', value: 'feed' },
                docs: { label: 'Docs', value: 'docs' }
              }"
              selected="feed"
              @click-lite="onBlockedClick"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">control=true keyboard flow</div>
            <div class="wiki-storybook-card" data-testid="nav-list-control-log">{{ keyboardLog }}</div>
            <D1NavigationList
              data-testid="nav-list-control"
              control
              :list="[
                { label: 'Alpha', value: 'alpha' },
                { label: 'Beta', value: 'beta' }
              ]"
              @click-lite="onControlClick"
              @close="onControlClose"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const blockedCount = canvasElement.querySelector('[data-testid="nav-list-disabled-count"]')
    const disabledRecordList = canvasElement.querySelector('[data-testid="nav-list-record-disabled"]')
    const disabledDocsItem = disabledRecordList?.querySelector('[data-value="docs"]')
    await expect(disabledRecordList).toHaveAttribute('aria-disabled', 'true')
    await userEvent.click(disabledDocsItem!)
    await expect(blockedCount).toHaveTextContent('0')

    const controlLog = canvasElement.querySelector('[data-testid="nav-list-control-log"]')
    await userEvent.keyboard('{ArrowDown}{Enter}')
    await expect(controlLog).toHaveTextContent('click:alpha')
    await userEvent.keyboard('{Escape}')
    await expect(controlLog).toHaveTextContent('close')
  }
}
export const NavigationListTestSearchAndKeys: Story = {
  name: 'Тест: Поиск, filterMode, кастомные ключи и роли',
  render: () => ({
    components: { D1NavigationList },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">showSearch + filterMode</div>
            <D1NavigationList
              data-testid="nav-list-search-filter"
              show-search
              filter-mode
              icon-search="search"
              icon-arrow-down="keyboard_arrow_down"
              icon-arrow-right="keyboard_arrow_right"
              text-not-found="Empty navigation search"
              :input-search-attrs="{ inputAttrs: { 'data-testid': 'nav-list-search-input' } }"
              :list="[
                {label: 'Overview', value: 'overview'},
                {label: 'Settings', value: 'settings'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">custom keys + roles + itemAttrs</div>
            <D1NavigationList
              data-testid="nav-list-record-keys"
              role="menu"
              role-item="menuitem"
              :tabindex="-1"
              key-label="title"
              key-value="code"
              :item-attrs="{ 'data-custom': 'yes' }"
              :item-group-attrs="{ 'data-group-custom': '1' }"
              :item-menu-attrs="{ 'data-menu-custom': '1' }"
              :item-management-attrs="{ 'data-mgmt-custom': '1' }"
              :list="[
                {title: 'First Route', code: 'r1'},
                {title: 'Second Route', code: 'r2'}
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const searchList = canvasElement.querySelector('[data-testid="nav-list-search-filter"]')
    const searchInput = canvasElement.querySelector('[data-testid="nav-list-search-input"]')
    const recordList = canvasElement.querySelector('[data-testid="nav-list-record-keys"]')

    await expect(recordList).toHaveAttribute('role', 'menu')
    await expect(recordList).toHaveAttribute('tabindex', '-1')
    await expect(recordList?.querySelector('[data-value="r1"]')).toHaveAttribute('role', 'menuitem')

    await userEvent.type(searchInput!, 'zzz')
    await waitFor(() => {
      expect(searchList).toHaveClass('d1-navigationList--searchActive')
      expect(searchList?.querySelector('.d1-navigationList__none')).toHaveTextContent('Empty navigation search')
    })
  }
}
export const NavigationListTestLazy: Story = {
  name: 'Тест: Ленивый рендеринг с отступом и кэшированием высоты',
  render: () => ({
    components: { D1NavigationList },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">lazy + lazyMargin + lazyCacheHeight</div>
            <D1NavigationList
              data-testid="nav-list-lazy"
              lazy
              lazy-margin="128px 0px"
              :lazy-cache-height="false"
              :list="[
                {label: 'Lazy Home', value: 'home'},
                {label: 'Lazy Profile', value: 'profile'}
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const lazyList = canvasElement.querySelector('[data-testid="nav-list-lazy"]')
      await expect(lazyList).toBeInTheDocument()
      const items = lazyList?.querySelectorAll('[data-item="true"]')
      await expect(items?.length).toBe(2)
      await expect(items?.[0]).toHaveTextContent('Lazy Home')
    })
  }
}
// :story-items [!] System label / Системная метка
