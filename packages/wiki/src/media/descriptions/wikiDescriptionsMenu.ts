import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Menu component properties
 *
 * Описания свойств компонента Menu
 */
export const wikiDescriptionsMenu: StorybookComponentsDescriptionItem = {
  name: 'Menu',
  description: {
    en: 'Composite menu that combines Window, Bars, and List for nested interactive navigation',
    ru: 'Составной компонент, объединяющий Window, Bars и List для вложенной интерактивной навигации'
  },
  possibilities: {
    en: [
      'popup container from Window with control, title, contextTop, contextBottom, and footer slots',
      'toolbar actions and header via Bars (barsHide, barsAdaptive, barsLabel, barsDescription, barsList)',
      'nested groups and menus with keyboard navigation and programmatic previous/next stepping',
      'asynchronous loading and caching via ajax, request, and cache',
      'lightweight rendering for large menus via liteThreshold',
      'lazy item rendering with viewport margin and height caching (lazy, lazyMargin, lazyCacheHeight)',
      'built-in search, filtering, and text highlighting (showSearch, filterMode, highlight, highlightLengthStart)',
      'custom field mapping (keyLabel, keyValue) and attribute forwarding (listAttrs, itemAttrs, barsAttrs, windowAttrs)'
    ],
    ru: [
      'всплывающий контейнер из Window со слотами control, title, contextTop, contextBottom и footer',
      'панель заголовка и действий через Bars (barsHide, barsAdaptive, barsLabel, barsDescription, barsList)',
      'вложенные группы и подменю с клавиатурной навигацией и программным переключением previous/next',
      'асинхронная загрузка и кэширование через ajax, request и cache',
      'облегчённый рендер для больших списков через liteThreshold',
      'ленивый рендеринг элементов с настройкой отступа и кэшированием высоты (lazy, lazyMargin, lazyCacheHeight)',
      'встроенный поиск, фильтрация и подсветка текста (showSearch, filterMode, highlight, highlightLengthStart)',
      'пользовательское сопоставление полей (keyLabel, keyValue) и проброс атрибутов (listAttrs, itemAttrs, barsAttrs, windowAttrs)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { NumberOrStringOrBoolean } from \'@dxtmisha/functional\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { MenuExpose as MenuExposeType } from \'@dxtmisha/constructor/Menu\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #control="{ binds }">
        <button class="wiki-storybook-button" type="button" data-testid="menu-main-trigger" v-bind="binds">
          Open Menu
        </button>
      </template>
    </DesignComponent>
  `,
  play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-main-trigger"]')
await expect(triggerButton).toBeInTheDocument()
await expect(triggerButton).toHaveAttribute('aria-haspopup', 'listbox')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.*)
    // =========================================================================
    {
      id: 'MenuNavigation',
      name: {
        en: 'Navigation with previous/next',
        ru: 'Навигация с previous/next'
      },
      propsName: ['step', 'isSelectedByValue', 'selected'],
      setup: `
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
      `,
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

          <DesignComponent
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
          </DesignComponent>

          <div class="wiki-storybook-card" data-testid="nav-summary">
            Selected: {{ selectedValue }} | Step: {{ stepSize }}
          </div>
        </div>
      `,
      play: `
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
      `
    },
    {
      id: 'MenuAjax',
      name: {
        en: 'AJAX Loading',
        ru: 'AJAX Загрузка'
      },
      propsName: ['ajax', 'cache'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="ajax-count">Fetches: {{ fetchCount }}</div>
          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
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
      `
    },
    {
      id: 'MenuVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      propsName: ['selected', 'isSelectedByValue'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" data-testid="vmodel-dashboard" @click="selectedValue = 'dashboard'">Select Dashboard</button>
            <button class="wiki-storybook-button" type="button" data-testid="vmodel-reports" @click="selectedValue = 'reports'">Select Reports</button>
            <button class="wiki-storybook-button" type="button" data-testid="vmodel-clear" @click="selectedValue = ''">Clear</button>
          </div>
          <div class="wiki-storybook-flex">
            <DesignComponent
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
            </DesignComponent>
          </div>
          <div class="wiki-storybook-card" data-testid="vmodel-output">Selected value: {{ selectedValue }}</div>
        </div>
      `,
      play: `
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
      `
    },
    {
      id: 'MenuBarsAndSlots',
      name: {
        en: 'Bars header and slots',
        ru: 'Панель заголовка Bars и слоты'
      },
      propsName: ['barsHide', 'barsAdaptive', 'barsLabel', 'barsDescription', 'barsBackHide', 'barsList'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="slots-event-log">Last event: {{ lastEvent }}</div>
          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
await waitFor(async () => {
  await expect(canvasElement.querySelector('[data-testid="menu-slot-title"]')).toHaveTextContent('Custom Title')
  await expect(canvasElement.querySelector('[data-testid="menu-slot-top"]')).toHaveTextContent('Context Top')
  await expect(canvasElement.querySelector('[data-testid="menu-slot-bottom"]')).toBeInTheDocument()
  await expect(canvasElement.querySelector('[data-testid="menu-slot-footer"]')).toHaveTextContent('Custom Footer')
  await expect(canvasElement.querySelector('.design-component__bars')).toBeInTheDocument()
})

const slotButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="slot-action-btn"]')
const eventLog = canvasElement.querySelector<HTMLElement>('[data-testid="slots-event-log"]')
await userEvent.click(slotButton!)
await expect(eventLog).toHaveTextContent('Last event: clickSlot:slot-item')
      `
    },
    {
      id: 'MenuExposeApi',
      name: {
        en: 'Expose API',
        ru: 'Программный API (expose)'
      },
      setup: `
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
      `,
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
          <DesignComponent
            ref="menuReference"
            v-model:selected="selectedValue"
            :list="items"
            :window-attrs="{ embedded: true, flash: true }"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" type="button" v-bind="binds">Expose Trigger</button>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
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
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & combinations — NOT in documentation)
    // =========================================================================
    {
      id: 'MenuTestSelectionAndKeys',
      name: {
        en: 'Test: Selection styles, Record list, custom keys, max and roles',
        ru: 'Тест: Стили выбора, Record-список, пользовательские ключи, max и роли'
      },
      propsName: [
        'list',
        'selected',
        'selectionStyle',
        'keyLabel',
        'keyValue',
        'max',
        'tag',
        'roleList',
        'roleItem',
        'itemAttrs',
        'listAttrs',
        'embedded'
      ],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex">
          <div data-testid="menu-record-wrap">
            <DesignComponent
              :list="recordList"
              :window-attrs="{ embedded: true, open: true, flash: true }"
              embedded
              selected="beta"
              tag="button"
              selection-style="radio"
            />
          </div>
          <div data-testid="menu-custom-wrap">
            <DesignComponent
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
            <DesignComponent
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
      `,
      play: `
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
      `
    },
    {
      id: 'MenuTestSearchHighlightAndStates',
      name: {
        en: 'Test: Search, highlight, hideList, disabled, autoClose and updateValue',
        ru: 'Тест: Поиск, подсветка, hideList, disabled, autoClose и updateValue'
      },
      propsName: [
        'showSearch',
        'filterMode',
        'highlight',
        'highlightLengthStart',
        'liteThreshold',
        'hideList',
        'disabled',
        'autoClose'
      ],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="states-output">{{ updatedValue }}</div>
          <div class="wiki-storybook-flex">
            <DesignComponent
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
            <DesignComponent
              :list="items"
              :window-attrs="{ embedded: true, open: true, flash: true }"
              embedded
              hide-list
            />
            <DesignComponent
              :list="items"
              disabled
            >
              <template #control="{ binds }">
                <button class="wiki-storybook-button" type="button" data-testid="disabled-menu-btn" v-bind="binds">
                  Disabled
                </button>
              </template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const menus = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(menus.length).toBeGreaterThanOrEqual(2)
  await expect(canvasElement.querySelector('.design-component--hideList')).toBeInTheDocument()
  await expect(canvasElement.querySelector('.design-component--hideList .design-component__list')).toBeNull()
})

const disabledButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="disabled-menu-btn"]')
await userEvent.click(disabledButton!)
await expect(disabledButton).toHaveAttribute('aria-expanded', 'false')

const secondItem = canvasElement.querySelector<HTMLElement>('[data-value="two"]')
await userEvent.click(secondItem!)
await expect(canvasElement.querySelector('[data-testid="states-output"]')).toHaveTextContent('click:two')
      `
    },
    {
      id: 'MenuTestLazy',
      name: {
        en: 'Test: Lazy rendering with margin and height caching',
        ru: 'Тест: Ленивый рендеринг с отступом и кэшированием высоты'
      },
      propsName: ['lazy', 'lazyMargin', 'lazyCacheHeight'],
      setup: `
      const lazyMenuItems = ref([
        { label: 'Lazy Option One', value: 'lazy-one' },
        { label: 'Lazy Option Two', value: 'lazy-two' }
      ])

      return { lazyMenuItems }
      `,
      template: `
        <div data-testid="menu-lazy-wrap">
          <DesignComponent
            :list="lazyMenuItems"
            :window-attrs="{ embedded: true, open: true, flash: true }"
            embedded
            lazy
            lazy-margin="128px 0px"
            :lazy-cache-height="false"
          />
        </div>
      `,
      play: `
await waitFor(async () => {
  const lazyWrap = canvasElement.querySelector('[data-testid="menu-lazy-wrap"]')
  const lazyItems = lazyWrap?.querySelectorAll('[data-item="true"]') ?? []

  await expect(lazyItems.length).toBe(2)
  await expect(lazyItems[0]?.className).toContain('--lazy')
  await expect(lazyItems[0]).toHaveTextContent('Lazy Option One')
  await expect(lazyItems[1]).toHaveTextContent('Lazy Option Two')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Menu'} type={'menu'}/>

<StorybookDescriptions componentName={'Menu'} type={'navigation'}/>
<Canvas of={Component.MenuNavigation}/>

<StorybookDescriptions componentName={'Menu'} type={'ajax'}/>
<Canvas of={Component.MenuAjax}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.MenuVModel}/>

<Canvas of={Component.MenuBarsAndSlots}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'clickSlot'}/>
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'loading'}/>
<StorybookDescriptions componentName={'Menu'} type={'expose.navigation'}/>
<Canvas of={Component.MenuExposeApi}/>
    `,
    slots: `
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<StorybookDescriptions componentName={'Menu'} type={'slotsControl'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Menu embedded :window-attrs="{open: true}" v-bind="args">
    <template #control="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Open Menu
      </button>
    </template>
  </Menu>
</div>
    `,
    description: `
Comprehensive navigational component that integrates a trigger (Control), a floating container (Window), a header action bar (Bars), and a structured dataset (List). Designed for multi-level menus, context-sensitive actions, and complex selection interfaces requiring icons or grouping.
Features support for hierarchical data structures (nested submenus), real-time AJAX loading with caching, search/highlighting, lazy item rendering (lazy, lazyMargin, lazyCacheHeight), and full keyboard accessibility. Includes sophisticated focus management, automatic positioning relative to the trigger, and a lite rendering mode for optimized performance with large lists.
Controlled via the list prop for items and v-model:selected with isSelectedByValue for state tracking. Use for user profile menus, sidebar navigation, or advanced select-like UI patterns where standard dropdowns lack sufficient structural flexibility.
    `
  }
}
