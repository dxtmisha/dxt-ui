import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for NavigationRail component properties
 *
 * Описания свойств компонента NavigationRail
 */
export const wikiDescriptionsNavigationRail: StorybookComponentsDescriptionItem = {
  name: 'NavigationRail',
  description: {
    en: 'Vertical navigation rail component for sidebars and application navigation panels',
    ru: 'Компонент вертикальной панели навигации для сайдбаров и панелей навигации приложений'
  },
  possibilities: {
    en: [
      'compact vertical navigation rail layout',
      'hierarchical data structure support with nested sub-menus, dividers, and spaces',
      'keyboard navigation with arrow keys and shortcuts',
      'focus management and item selection tracking',
      'customizable item attributes for items, menus, and management elements',
      'divider support for section separation',
      'event-driven interaction system with click and close events',
      'built-in accessibility ARIA attributes',
      'external control mode support'
    ],
    ru: [
      'компактная вертикальная панель навигации (Navigation Rail)',
      'поддержка иерархической структуры данных со вложенными меню, разделителями и отступами',
      'навигация с клавиатуры со стрелками и горячими клавишами',
      'управление фокусом и отслеживание выбора элементов',
      'настраиваемые атрибуты для элементов списка, меню и элементов управления',
      'поддержка разделителей (divider) для секций',
      'событийно-ориентированная система с событиями клика и закрытия',
      'встроенная поддержка доступности и ARIA-атрибутов',
      'поддержка режима внешнего управления'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const railElement = canvasElement.querySelector('.design-component')
await expect(railElement).toBeInTheDocument()
await expect(railElement).toHaveAttribute('role', 'listbox')
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { NavigationRailExpose as NavigationRailExposeType } from \'@dxtmisha/constructor/NavigationRail\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'NavigationRailBasic',
      name: {
        en: 'Basic navigation rail',
        ru: 'Базовая панель навигации'
      },
      propsName: ['list', 'selected'],
      template: `
        <DesignComponent
          data-testid="rail-basic"
          selected="home"
          :list="[
            { label: 'Home', value: 'home', icon: 'home' },
            { label: 'Search', value: 'search', icon: 'search', badge: '4' },
            { label: 'Settings', value: 'settings', icon: 'settings' }
          ]"
        />
      `,
      play: `
const basicRail = canvasElement.querySelector('[data-testid="rail-basic"]')
await expect(basicRail).toBeInTheDocument()
await expect(basicRail?.querySelectorAll('[data-item="true"]').length).toBe(3)
await expect(basicRail?.querySelector('[data-value="home"]')).toHaveAttribute('aria-selected', 'true')
      `
    },
    {
      id: 'NavigationRailHierarchyAndSlots',
      name: {
        en: 'Nested menus, dividers, and HTML slots',
        ru: 'Вложенные меню, разделители и HTML-слоты'
      },
      propsName: ['list', 'divider', 'iconArrowRight'],
      template: `
        <DesignComponent
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
        </DesignComponent>
      `,
      play: `
const hierarchyRail = canvasElement.querySelector('[data-testid="rail-hierarchy"]')
await expect(hierarchyRail).toHaveClass('design-component--divider')
await expect(hierarchyRail?.querySelector('.design-component__line')).toBeInTheDocument()
await expect(hierarchyRail?.querySelector('.design-component__space')).toBeInTheDocument()
await expect(hierarchyRail?.querySelector('[data-testid="rail-custom-slot"]')).toHaveTextContent('Custom Rail Slot')
await expect(hierarchyRail?.querySelector('.design-component__html strong')).toHaveTextContent('Rail Footer')
      `
    },
    {
      id: 'NavigationRailEvents',
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
          <div class="wiki-storybook-card" data-testid="rail-event-output">
            Event: {{ lastEvent }}
          </div>
          <DesignComponent
            data-testid="rail-events"
            :list="[
              { label: 'Home', value: 'home', icon: 'home' },
              { label: 'Settings', value: 'settings', icon: 'settings' }
            ]"
            @click-lite="onClickLite"
            @close="onClose"
          />
        </div>
      `,
      play: `
const output = canvasElement.querySelector('[data-testid="rail-event-output"]')
const homeItem = canvasElement.querySelector('[data-testid="rail-events"] [data-value="home"]')
await expect(output).toHaveTextContent('Event: none')
await userEvent.click(homeItem!)
await expect(output).toHaveTextContent('Event: clickLite:home')
      `
    },
    {
      id: 'NavigationRailExposeApi',
      name: {
        en: 'Expose API',
        ru: 'Программный API (expose)'
      },
      setup: `
      const railRef = ref<NavigationRailExposeType | null>(null)
      const exposeResult = ref('pending')
      const readExpose = () => {
        if (railRef.value) {
          exposeResult.value = String(railRef.value.isSelected()) + ':' + railRef.value.getSelectedValues().join(',')
        }
      }
      return { railRef, exposeResult, readExpose }
      `,
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
          <DesignComponent
            ref="railRef"
            selected="inbox"
            :list="[
              { label: 'Home', value: 'home', icon: 'home' },
              { label: 'Inbox', value: 'inbox', icon: 'inbox' }
            ]"
          />
        </div>
      `,
      play: `
const readButton = canvasElement.querySelector('[data-testid="rail-read-expose-button"]')
const exposeOutput = canvasElement.querySelector('[data-testid="rail-expose-output"]')
await expect(exposeOutput).toHaveTextContent('pending')
await userEvent.click(readButton!)
await expect(exposeOutput).toHaveTextContent('true:inbox')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & edge cases)
    // =========================================================================
    {
      id: 'NavigationRailTestStatesAndKeys',
      name: {
        en: 'Test: Selection, focus, custom keys, roles, and attributes',
        ru: 'Тест: Выбор, фокус, кастомные ключи, роли и атрибуты'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">multiselect + focus + divider</div>
            <DesignComponent
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
            <DesignComponent
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
      `,
      play: `
const multiRail = canvasElement.querySelector('[data-testid="rail-multi"]')
const customRail = canvasElement.querySelector('[data-testid="rail-custom-keys"]')

await expect(multiRail).toHaveAttribute('aria-multiselectable', 'true')
await expect(multiRail?.querySelector('[data-value="home"]')?.tagName).toBe('NAV')
await expect(multiRail).toHaveClass('design-component--divider')
await expect(multiRail?.querySelectorAll('[aria-selected="true"]').length).toBe(2)
await expect(multiRail?.querySelector('[data-value="inbox"]')?.className).toContain('--focus')

await expect(customRail).toHaveAttribute('role', 'menu')
await expect(customRail).toHaveAttribute('tabindex', '-1')
await expect(customRail?.querySelector('[data-value="board"]')).toHaveAttribute('role', 'menuitem')
await expect(customRail?.querySelector('[data-value="board"]')).toHaveAttribute('data-rail-item', 'yes')
      `
    },
    {
      id: 'NavigationRailTestDisabledRecordAndControl',
      name: {
        en: 'Test: Disabled guard, Record dataset, and keyboard control',
        ru: 'Тест: Блокировка disabled, Record-данные и клавиатурное управление'
      },
      propsName: ['disabled', 'list', 'control'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">disabled + Record</div>
            <div class="wiki-storybook-card" data-testid="rail-disabled-clicks">{{ blockedClicks }}</div>
            <DesignComponent
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
            <DesignComponent
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
      `,
      play: `
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'NavigationRail'} type={'navigationRail'}/>

<Canvas of={Component.NavigationRailBasic}/>
<Canvas of={Component.NavigationRailHierarchyAndSlots}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'List'} type={'event.close'}/>
<Canvas of={Component.NavigationRailEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<Canvas of={Component.NavigationRailExposeApi}/>
    `,
    slots: `
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<Canvas of={Component.NavigationRailHierarchyAndSlots}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <NavigationRail v-bind="args"/>
</div>
    `,
    description: `
Vertical navigation rail component for application sidebars and mini navigation drawers.
Supports item selection, focus management, hierarchical menus, dividers, custom item attributes, and full keyboard accessibility.
    `
  }
}
