import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1List from './D1List.vue'
import { ListWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ListExpose } from '@dxtmisha/constructor/List'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/List',
  component: D1List,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ListWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ListWikiStorybook.getWiki(),
  args: ListWikiStorybook.getValues()
} satisfies Meta<typeof D1List>

export default meta

type Story = StoryObj<typeof meta>

export const List: Story = {
  args: {
    filterMode: true,
    showSearch: true,
    control: false
  }
}

// :story-items [!] System label / Системная метка
export const ListLiteMode: Story = {
  name: 'Облегчённый режим',
  render: () => ({
    components: { D1List },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Without lite</div>
            <D1List
              data-testid="list-full"
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With lite</div>
            <D1List
              data-testid="list-lite"
              :lite="true"
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const fullList = canvasElement.querySelector('[data-testid="list-full"]')
    const liteList = canvasElement.querySelector('[data-testid="list-lite"]')
    await expect(fullList).toBeInTheDocument()
    await expect(liteList).toBeInTheDocument()
    await expect(fullList?.querySelectorAll('[data-item="true"]').length).toBe(5)
    await expect(liteList?.querySelectorAll('[data-item="true"]').length).toBe(5)
  }
}
export const ListHighlight: Story = {
  name: 'Выделение',
  render: () => ({
    components: { D1List },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1List
              data-testid="list-highlight"
              :list="[
                {label: 'Project index example', value: 'projects', icon: 'folder'},
                {label: 'Advanced context options', value: 'experiments', icon: 'tune'},
                {label: 'Next examination notes', value: 'example', icon: 'description'},
                {label: 'User experience metrics', value: 'express', icon: 'insights'}
              ]"
              highlight="exam"
              :highlightLengthStart="4"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const highlightList = canvasElement.querySelector('[data-testid="list-highlight"]')
    await expect(highlightList).toBeInTheDocument()
    await expect(highlightList?.textContent).toContain('Project index example')
    await expect(highlightList?.textContent).toContain('Next examination notes')
  }
}
export const ListHierarchyAndSlots: Story = {
  name: 'Иерархия и пользовательский HTML-слот',
  render: () => ({
    components: { D1List },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen">
            <D1List
              data-testid="list-hierarchy"
              :list="[
                {type: 'subtitle', value: 'sub1', label: 'Section'},
                {label: 'Overview', value: 'overview', icon: 'dashboard'},
                {type: 'line', value: 'ln1'},
                {
                  type: 'group',
                  index: 'grp1',
                  label: 'Workspace Group',
                  value: [
                    {label: 'Projects', value: 'projects'},
                    {label: 'Archive', value: 'archive'}
                  ]
                },
                {
                  type: 'menu',
                  index: 'mnu1',
                  label: 'More Menu',
                  value: [
                    {label: 'Export', value: 'export'}
                  ]
                },
                {type: 'space', value: 'sp1'},
                {type: 'html', value: 'customHtmlSlot', label: 'Fallback'},
                {type: 'html', value: 'rawHtml', label: '<strong>Raw HTML</strong>'}
              ]"
            >
              <template #customHtmlSlot>
                <span data-testid="custom-html-slot">Custom Slot Content</span>
              </template>
            </D1List>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const hierarchyList = canvasElement.querySelector('[data-testid="list-hierarchy"]')
    await expect(hierarchyList).toBeInTheDocument()
    await expect(hierarchyList?.querySelector('.d1-list__subtitle')?.textContent).toContain('Section')
    await expect(hierarchyList?.querySelector('.d1-list__line')).toBeInTheDocument()
    await expect(hierarchyList?.querySelector('.d1-list__space')).toBeInTheDocument()
    await expect(hierarchyList?.querySelector('[data-testid="custom-html-slot"]')).toHaveTextContent('Custom Slot Content')
    await expect(hierarchyList?.querySelector('.d1-list__html strong')).toHaveTextContent('Raw HTML')
  }
}
export const ListEvents: Story = {
  name: 'События клика и закрытия',
  render: () => ({
    components: { D1List },
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
          <div class="wiki-storybook-card" data-testid="list-event-output">
            Event: {{ lastEvent }}
          </div>
          <D1List
            data-testid="list-events"
            :list="[
              {label: 'Alpha', value: 'alpha'},
              {label: 'Beta', value: 'beta'}
            ]"
            @click-lite="onClickLite"
            @close="onClose"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const output = canvasElement.querySelector('[data-testid="list-event-output"]')
    const alphaButton = canvasElement.querySelector('[data-testid="list-events"] [data-value="alpha"]')
    await expect(output).toHaveTextContent('Event: none')
    await userEvent.click(alphaButton!)
    await expect(output).toHaveTextContent('Event: clickLite:alpha')
  }
}
export const ListExpose: Story = {
  name: 'Программный API (expose)',
  render: () => ({
    components: { D1List },
    setup() {
      const listRef = ref<ListExpose | null>(null)
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
            <button type="button" class="wiki-storybook-button" data-testid="read-expose-button" @click="readExpose">
              Read Expose
            </button>
            <div class="wiki-storybook-card" data-testid="expose-output">
              {{ exposeResult }}
            </div>
          </div>
          <D1List
            ref="listRef"
            selected="alpha"
            :list="[
              {label: 'Alpha', value: 'alpha'},
              {label: 'Beta', value: 'beta'}
            ]"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const readButton = canvasElement.querySelector('[data-testid="read-expose-button"]')
    const exposeOutput = canvasElement.querySelector('[data-testid="expose-output"]')
    await expect(exposeOutput).toHaveTextContent('pending')
    await userEvent.click(readButton!)
    await expect(exposeOutput).toHaveTextContent('true:alpha')
  }
}
export const ListTestStatesAndSelection: Story = {
  name: 'Тест: Состояния, оси, разделители и параметры выбора',
  render: () => ({
    components: { D1List },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">axis=x + divider + tag=button</div>
            <D1List
              data-testid="list-axis-x"
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
            <div class="wiki-storybook-item__label">disabled + selectionStyle=radio</div>
            <D1List
              data-testid="list-disabled"
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
    const axisList = canvasElement.querySelector('[data-testid="list-axis-x"]')
    const disabledList = canvasElement.querySelector('[data-testid="list-disabled"]')
    await expect(axisList).toHaveClass('d1-list--axis--x')
    await expect(axisList).toHaveClass('d1-list--divider')
    await expect(axisList).toHaveAttribute('aria-multiselectable', 'true')
    await expect(axisList?.querySelectorAll('[aria-selected="true"]').length).toBe(2)
    await expect(disabledList).toBeInTheDocument()
  }
}
export const ListTestSearchAndKeys: Story = {
  name: 'Тест: Поиск, filterMode, кастомные ключи и Record-список',
  render: () => ({
    components: { D1List },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">showSearch + filterMode</div>
            <D1List
              data-testid="list-search-filter"
              show-search
              filter-mode
              icon-search="search"
              icon-arrow-down="keyboard_arrow_down"
              icon-arrow-right="keyboard_arrow_right"
              text-not-found="Empty search"
              :input-search-attrs="{ inputAttrs: { 'data-testid': 'list-search-input' } }"
              :list="[
                {label: 'Alpha', value: 'alpha'},
                {label: 'Beta', value: 'beta'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">Record + custom keys + roles</div>
            <D1List
              data-testid="list-record-keys"
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
                {title: 'First Title', code: 'c1'},
                {title: 'Second Title', code: 'c2'}
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const searchList = canvasElement.querySelector('[data-testid="list-search-filter"]')
    const searchInput = canvasElement.querySelector('[data-testid="list-search-input"]')
    const recordList = canvasElement.querySelector('[data-testid="list-record-keys"]')

    await expect(recordList).toHaveAttribute('role', 'menu')
    await expect(recordList).toHaveAttribute('tabindex', '-1')
    await expect(recordList?.querySelector('[data-value="c1"]')).toHaveAttribute('role', 'menuitem')

    await userEvent.type(searchInput!, 'zzz')
    await waitFor(() => {
      expect(searchList).toHaveClass('d1-list--searchActive')
      expect(searchList?.querySelector('.d1-list__none')).toHaveTextContent('Empty search')
    })
  }
}
// :story-items [!] System label / Системная метка
