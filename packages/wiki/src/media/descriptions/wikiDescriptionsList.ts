import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for List component properties
 *
 * Описания свойств компонента List
 */
export const wikiDescriptionsList: StorybookComponentsDescriptionItem = {
  name: 'List',
  description: {
    en: 'Advanced list component with keyboard navigation, search functionality, and hierarchical data support',
    ru: 'Продвинутый компонент списка с навигацией с клавиатуры, функциональностью поиска и поддержкой иерархических данных'
  },
  possibilities: {
    en: [
      'keyboard navigation with arrow keys and shortcuts',
      'real-time search and highlight functionality',
      'hierarchical data structure with groups and menus',
      'focus management and item selection',
      'lightweight rendering mode for large datasets',
      'customizable item types and rendering',
      'event-driven interaction system',
      'accessibility support with ARIA attributes',
      'automatic scroll management and viewport optimization',
      'integration with icons, badges, and other components'
    ],
    ru: [
      'навигация с клавиатуры со стрелками и горячими клавишами',
      'поиск в реальном времени и функциональность выделения',
      'иерархическая структура данных с группами и меню',
      'управление фокусом и выбором элементов',
      'облегченный режим рендеринга для больших наборов данных',
      'настраиваемые типы элементов и рендеринг',
      'событийно-ориентированная система взаимодействия',
      'поддержка доступности с ARIA атрибутами',
      'автоматическое управление прокруткой и оптимизация области просмотра',
      'интеграция с иконками, бейджами и другими компонентами'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const listElement = canvasElement.querySelector('.design-component')
await expect(listElement).toBeInTheDocument()
await expect(listElement).toHaveAttribute('role', 'listbox')
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { ListExpose } from \'@dxtmisha/constructor/List\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ListLiteMode',
      name: {
        en: 'Lite mode',
        ru: 'Облегчённый режим'
      },
      propsName: ['lite', 'liteThreshold', 'list'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Without lite</div>
            <DesignComponent
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
            <DesignComponent
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
      `,
      play: `
const fullList = canvasElement.querySelector('[data-testid="list-full"]')
const liteList = canvasElement.querySelector('[data-testid="list-lite"]')
await expect(fullList).toBeInTheDocument()
await expect(liteList).toBeInTheDocument()
await expect(fullList?.querySelectorAll('[data-item="true"]').length).toBe(5)
await expect(liteList?.querySelectorAll('[data-item="true"]').length).toBe(5)
      `
    },
    {
      id: 'ListHighlight',
      name: {
        en: 'Highlighting',
        ru: 'Выделение'
      },
      propsName: ['highlight', 'highlightLengthStart'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent
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
      `,
      play: `
const highlightList = canvasElement.querySelector('[data-testid="list-highlight"]')
await expect(highlightList).toBeInTheDocument()
await expect(highlightList?.textContent).toContain('Project index example')
await expect(highlightList?.textContent).toContain('Next examination notes')
      `
    },
    {
      id: 'ListHierarchyAndSlots',
      name: {
        en: 'Hierarchy and custom HTML slot',
        ru: 'Иерархия и пользовательский HTML-слот'
      },
      propsName: ['list'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen">
            <DesignComponent
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
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const hierarchyList = canvasElement.querySelector('[data-testid="list-hierarchy"]')
await expect(hierarchyList).toBeInTheDocument()
await expect(hierarchyList?.querySelector('.design-component__subtitle')?.textContent).toContain('Section')
await expect(hierarchyList?.querySelector('.design-component__line')).toBeInTheDocument()
await expect(hierarchyList?.querySelector('.design-component__space')).toBeInTheDocument()
await expect(hierarchyList?.querySelector('[data-testid="custom-html-slot"]')).toHaveTextContent('Custom Slot Content')
await expect(hierarchyList?.querySelector('.design-component__html strong')).toHaveTextContent('Raw HTML')
      `
    },
    {
      id: 'ListEvents',
      name: {
        en: 'Click and close events',
        ru: 'События клика и закрытия'
      },
      setup: `
      const lastEvent = ref('none')
      const onClickLite = (options: EventClickValue) => {
        lastEvent.value = 'clickLite:' + String(options?.value ?? '')
      }
      const onClose = () => {
        lastEvent.value = 'close'
      }
      return { lastEvent, onClickLite, onClose }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="list-event-output">
            Event: {{ lastEvent }}
          </div>
          <DesignComponent
            data-testid="list-events"
            :list="[
              {label: 'Alpha', value: 'alpha'},
              {label: 'Beta', value: 'beta'}
            ]"
            @click-lite="onClickLite"
            @close="onClose"
          />
        </div>
      `,
      play: `
const output = canvasElement.querySelector('[data-testid="list-event-output"]')
const alphaButton = canvasElement.querySelector('[data-testid="list-events"] [data-value="alpha"]')
await expect(output).toHaveTextContent('Event: none')
await userEvent.click(alphaButton!)
await expect(output).toHaveTextContent('Event: clickLite:alpha')
      `
    },
    {
      id: 'ListExposeApi',
      name: {
        en: 'Expose API',
        ru: 'Программный API (expose)'
      },
      setup: `
      const listRef = ref<ListExpose | null>(null)
      const exposeResult = ref('pending')
      const readExpose = () => {
        if (listRef.value) {
          exposeResult.value = String(listRef.value.isSelected()) + ':' + listRef.value.getSelectedValues().join(',')
        }
      }
      return { listRef, exposeResult, readExpose }
      `,
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
          <DesignComponent
            ref="listRef"
            selected="alpha"
            :list="[
              {label: 'Alpha', value: 'alpha'},
              {label: 'Beta', value: 'beta'}
            ]"
          />
        </div>
      `,
      play: `
const readButton = canvasElement.querySelector('[data-testid="read-expose-button"]')
const exposeOutput = canvasElement.querySelector('[data-testid="expose-output"]')
await expect(exposeOutput).toHaveTextContent('pending')
await userEvent.click(readButton!)
await expect(exposeOutput).toHaveTextContent('true:alpha')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & edge cases)
    // =========================================================================
    {
      id: 'ListTestStatesAndSelection',
      name: {
        en: 'Test: States, axis, divider, and selection options',
        ru: 'Тест: Состояния, оси, разделители и параметры выбора'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">axis=x + divider + tag=button</div>
            <DesignComponent
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
            <DesignComponent
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
      `,
      play: `
const axisList = canvasElement.querySelector('[data-testid="list-axis-x"]')
const disabledList = canvasElement.querySelector('[data-testid="list-disabled"]')
await expect(axisList).toHaveClass('design-component--axis--x')
await expect(axisList).toHaveClass('design-component--divider')
await expect(axisList).toHaveAttribute('aria-multiselectable', 'true')
await expect(axisList?.querySelectorAll('[aria-selected="true"]').length).toBe(2)
await expect(disabledList).toBeInTheDocument()
      `
    },
    {
      id: 'ListTestSearchAndKeys',
      name: {
        en: 'Test: Search, filterMode, custom keys, and Record list',
        ru: 'Тест: Поиск, filterMode, кастомные ключи и Record-список'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">showSearch + filterMode</div>
            <DesignComponent
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
            <DesignComponent
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
      `,
      play: `
const searchList = canvasElement.querySelector('[data-testid="list-search-filter"]')
const searchInput = canvasElement.querySelector('[data-testid="list-search-input"]')
const recordList = canvasElement.querySelector('[data-testid="list-record-keys"]')

await expect(recordList).toHaveAttribute('role', 'menu')
await expect(recordList).toHaveAttribute('tabindex', '-1')
await expect(recordList?.querySelector('[data-value="c1"]')).toHaveAttribute('role', 'menuitem')

await userEvent.type(searchInput!, 'zzz')
await waitFor(() => {
  expect(searchList).toHaveClass('design-component--searchActive')
  expect(searchList?.querySelector('.design-component__none')).toHaveTextContent('Empty search')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'List'} type={'list'}/>

<StorybookDescriptions componentName={'List'} type={'lite'}/>
<Canvas of={Component.ListLiteMode}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.ListHighlight}/>

<Canvas of={Component.ListHierarchyAndSlots}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'List'} type={'event.close'}/>
<Canvas of={Component.ListEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<Canvas of={Component.ListExposeApi}/>
    `,
    slots: `
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `
  },
  ai: {
    description: `
Core engine for rendering interactive, searchable, and hierarchical lists. Serves as the foundation for complex components like Selects, Dropdowns, and multi-level Navigation Menus.
Features support for multiple item types (group, menu, line, space, subtitle, html), real-time search highlighting, and full keyboard navigation. Includes automatic focus management, ARIA accessibility roles, and a "lite" rendering mode for performance optimization with large datasets.
Controlled via the list prop for data and selected/focus props with @click/@click-lite events for state tracking. Use as the primary building block for any interface requiring item selection, structured data display, or interactive command menus.
    `
  }
}
