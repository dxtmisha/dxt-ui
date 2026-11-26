import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for NavigationRailItem component properties
 *
 * Описания свойств компонента NavigationRailItem
 */
export const wikiDescriptionsNavigationRailItem: StorybookComponentsDescriptionItem = {
  name: 'NavigationRailItem',
  description: {
    en: 'Compact navigation rail item component designed for vertical navigation rails and sidebars',
    ru: 'Компактный элемент вертикальной навигационной панели для сайдбаров и мини-меню'
  },
  possibilities: {
    en: [
      'compact navigation rail item layout for vertical navigation rails',
      'leading icon support with icon transformation and attribute forwarding',
      'integrated label and badge rendering with automatic context wrapping',
      'interactive states: focus, open, selected, selectedChild, disabled, readonly',
      'circular progress indicator and skeleton loading state support',
      'ripple click feedback for enabled items',
      'divider support for separating rail sections',
      'customizable HTML tags: button, link (href / to), span, li, div',
      'leading, default, and body slot support for custom content',
      'built-in accessibility ARIA attributes and keyboard Enter support'
    ],
    ru: [
      'компактный макет элемента для вертикальных панелей навигации (Navigation Rail)',
      'поддержка ведущей иконки с трансформациями и передачей атрибутов',
      'встроенный рендеринг метки (label) и значка (badge) с автоматической группировкой',
      'интерактивные состояния: focus, open, selected, selectedChild, disabled, readonly',
      'состояния загрузки с круговым индикатором прогресса и скелетоном',
      'эффект пульсации (ripple) при клике для активных элементов',
      'поддержка разделителя (divider) для группировки секций панели',
      'гибкие варианты HTML-тегов: button, ссылка (href / to), span, li, div',
      'слоты leading, default и body для пользовательского контента',
      'встроенная поддержка доступности, ARIA-атрибутов и активации клавишей Enter'
    ]
  },
  render: `
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
const itemElement = canvasElement.querySelector('.design-component')
await expect(itemElement).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { NavigationRailItemExpose as NavigationRailItemExposeType } from \'@dxtmisha/constructor/NavigationRailItem\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'NavigationRailItemBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent icon="home" label="Home"/>
            <DesignComponent icon="explore" label="Explore" selected/>
            <DesignComponent icon="notifications" label="Alerts" :badge="5"/>
            <DesignComponent label="Updates" badge="New"/>
            <DesignComponent icon="mail" label="Inbox" badge-dot/>
            <DesignComponent icon="sync" label="Sync" loading/>
            <DesignComponent icon="lock" label="Locked" disabled/>
            <DesignComponent icon="settings" label="Settings" divider/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(8)

await expect(items[0].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('Home')

await expect(items[1]).toHaveClass('design-component--selected')
await expect(items[1]).toHaveAttribute('aria-selected', 'true')

await expect(items[2].querySelector('.design-component__context')).toBeInTheDocument()
await expect(items[2].querySelector('.design-component__context .design-component__badge')).toHaveTextContent('5')

await expect(items[3].querySelector('.design-component__contextLine')).toBeInTheDocument()
await expect(items[3].querySelector('.design-component__contextLine .design-component__badge')).toHaveTextContent('New')

await expect(items[4].querySelector('.design-component__context .design-component__badge')).toBeInTheDocument()

await expect(items[5].querySelector('.design-component__loading')).toBeInTheDocument()
await expect(items[5]).toHaveAttribute('aria-disabled', 'true')

await expect(items[6]).toHaveAttribute('aria-disabled', 'true')

await expect(items[7]).toHaveAttribute('data-divider', 'active')
      `
    },
    {
      id: 'NavigationRailItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <DesignComponent
              :is-skeleton="true"
              icon="home"
              badge="5"
            >Home</DesignComponent>
            <DesignComponent
              :is-skeleton="true"
              icon="settings"
            >Navigation Rail Item Label Example</DesignComponent>
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(2)

await expect(items[0].querySelector('.design-component__label')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__label')?.className).toContain('skeleton__textVariant')
await expect(items[0].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[1].querySelector('.design-component__label')?.className).toContain('skeleton__textVariant')
      `
    },
    {
      id: 'NavigationRailItemEvents',
      name: {
        en: 'Events (click & clickLite)',
        ru: 'События (click и clickLite)'
      },
      setup: `
      const clickCount = ref<number>(0)
      const clickLiteCount = ref<number>(0)
      const lastEventSummary = ref<string>('none')

      const onClickItem = (_event: MouseEvent, payload: EventClickValue) => {
        clickCount.value++
        lastEventSummary.value = 'click:' + String(payload.value) + ':' + String(payload.type) + ':' + JSON.stringify(payload.detail)
      }

      const onClickLiteItem = (payload: EventClickValue) => {
        clickLiteCount.value++
        if (lastEventSummary.value === 'none') {
          lastEventSummary.value = 'clickLite:' + String(payload.value)
        }
      }

      return {
        clickCount,
        clickLiteCount,
        lastEventSummary,
        onClickItem,
        onClickLiteItem
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              data-testid="rail-event-item"
              icon="home"
              label="Dashboard"
              value="dashboard"
              :detail="{ section: 'overview' }"
              @click="onClickItem"
              @click-lite="onClickLiteItem"
            />
          </div>
          <div class="wiki-storybook-card">
            <div>Clicks: <span data-testid="event-click-count">{{ clickCount }}</span></div>
            <div>Lite clicks: <span data-testid="event-click-lite-count">{{ clickLiteCount }}</span></div>
            <div>Payload: <span data-testid="event-output">{{ lastEventSummary }}</span></div>
          </div>
        </div>
      `,
      play: `
const itemElement = canvasElement.querySelector<HTMLElement>('[data-testid="rail-event-item"]')
const clickCountElement = canvasElement.querySelector<HTMLElement>('[data-testid="event-click-count"]')
const clickLiteCountElement = canvasElement.querySelector<HTMLElement>('[data-testid="event-click-lite-count"]')
const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="event-output"]')

await expect(clickCountElement).toHaveTextContent('0')
await expect(clickLiteCountElement).toHaveTextContent('0')

await step('Click navigation rail item', async () => {
  await userEvent.click(itemElement!)
})

await expect(clickCountElement).toHaveTextContent('1')
await expect(clickLiteCountElement).toHaveTextContent('1')
await expect(outputElement).toHaveTextContent('click:dashboard:')
await expect(outputElement).toHaveTextContent('"section":"overview"')
      `
    },
    {
      id: 'NavigationRailItemExpose',
      name: {
        en: 'Expose (getValue & getDetail)',
        ru: 'Экспонируемые методы (getValue и getDetail)'
      },
      setup: `
      const itemReference = ref<NavigationRailItemExposeType | null>(null)
      const exposedResult = ref<string>('not checked')

      const readExposedData = () => {
        exposedResult.value = JSON.stringify({
          value: itemReference.value?.getValue?.(),
          detail: itemReference.value?.getDetail?.()
        })
      }

      return {
        itemReference,
        exposedResult,
        readExposedData
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              ref="itemReference"
              icon="folder"
              label="Projects"
              value="rail-projects"
              :detail="{ section: 'workspace', priority: 1 }"
            />
            <button
              class="wiki-storybook-button"
              type="button"
              data-testid="inspect-expose-button"
              @click="readExposedData"
            >
              Inspect expose
            </button>
          </div>
          <div class="wiki-storybook-card" data-testid="expose-output">{{ exposedResult }}</div>
        </div>
      `,
      play: `
const inspectButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="inspect-expose-button"]')
const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')

await step('Inspect exposed getValue and getDetail', async () => {
  await userEvent.click(inspectButton!)
})

await expect(outputElement).toHaveTextContent('"value":"rail-projects"')
await expect(outputElement).toHaveTextContent('"section":"workspace"')
await expect(outputElement).toHaveTextContent('"priority":1')
      `
    },
    {
      id: 'NavigationRailItemSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent data-testid="rail-slots-item">
          <template #leading>
            <span data-testid="slot-leading">Leading slot</span>
          </template>
          <template #default>
            <span data-testid="slot-default">Default slot</span>
          </template>
          <template #body>
            <span data-testid="slot-body">Body slot</span>
          </template>
        </DesignComponent>
      `,
      play: `
const rootElement = canvasElement.querySelector<HTMLElement>('[data-testid="rail-slots-item"]')
const leadingElement = canvasElement.querySelector<HTMLElement>('[data-testid="slot-leading"]')
const defaultElement = canvasElement.querySelector<HTMLElement>('.design-component__label [data-testid="slot-default"]')
const bodyElement = canvasElement.querySelector<HTMLElement>('[data-testid="slot-body"]')

await expect(rootElement).toBeInTheDocument()
await expect(leadingElement).toHaveTextContent('Leading slot')
await expect(defaultElement).toHaveTextContent('Default slot')
await expect(bodyElement).toHaveTextContent('Body slot')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & combinations ONLY)
    // =========================================================================
    {
      id: 'NavigationRailItemTestStatesAndCombinations',
      name: {
        en: 'Test: States, loading, divider and combined props',
        ru: 'Тест: Состояния, загрузка, разделитель и комбинации свойств'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent data-testid="state-focus" label="Focus" focus/>
            <DesignComponent data-testid="state-open" label="Open" open/>
            <DesignComponent data-testid="state-selected-child" label="Selected child" selected-child/>
            <DesignComponent data-testid="state-selected" label="Selected" selected/>
            <DesignComponent data-testid="state-disabled" label="Disabled" disabled/>
            <DesignComponent data-testid="state-readonly" label="Readonly" readonly/>
            <DesignComponent data-testid="state-divider" label="Divider" divider/>
            <DesignComponent data-testid="state-loading-boolean" label="Loading boolean" loading/>
            <DesignComponent data-testid="state-loading-object" label="Loading object" :loading="{ visible: true }"/>
            <DesignComponent data-testid="state-disabled-selected" label="Disabled selected" disabled selected/>
            <DesignComponent data-testid="state-readonly-selected" label="Readonly selected" readonly selected/>
            <DesignComponent data-testid="state-loading-disabled" label="Loading disabled" loading disabled/>
            <DesignComponent data-testid="state-focus-open-child" label="Focus open child" focus open selected-child/>
            <DesignComponent data-testid="state-divider-disabled-selected" label="Divider disabled selected" divider disabled selected/>
          </div>
        </div>
      `,
      play: `
const focusItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-focus"]')
const openItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-open"]')
const selectedChildItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-selected-child"]')
const selectedItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-selected"]')
const disabledItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-disabled"]')
const readonlyItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-readonly"]')
const dividerItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-divider"]')
const loadingBooleanItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-loading-boolean"]')
const loadingObjectItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-loading-object"]')
const disabledSelectedItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-disabled-selected"]')
const readonlySelectedItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-readonly-selected"]')
const loadingDisabledItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-loading-disabled"]')
const focusOpenChildItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-focus-open-child"]')
const dividerDisabledSelectedItem = canvasElement.querySelector<HTMLElement>('[data-testid="state-divider-disabled-selected"]')

await expect(focusItem).toHaveClass('design-component--focus')
await expect(openItem).toHaveClass('design-component--open')
await expect(selectedChildItem).toHaveClass('design-component--selectedChild')
await expect(selectedItem).toHaveClass('design-component--selected')
await expect(selectedItem).toHaveAttribute('aria-selected', 'true')

await expect(disabledItem).toHaveClass('design-component--disabled')
await expect(disabledItem).toHaveAttribute('aria-disabled', 'true')

await expect(readonlyItem).toHaveClass('design-component--readonly')
await expect(readonlyItem).not.toHaveAttribute('aria-disabled')

await expect(dividerItem).toHaveClass('design-component--divider')
await expect(dividerItem).toHaveAttribute('data-divider', 'active')

await expect(loadingBooleanItem?.querySelector('.design-component__loading')).toBeInTheDocument()
await expect(loadingBooleanItem).toHaveAttribute('aria-disabled', 'true')

await expect(loadingObjectItem?.querySelector('.design-component__loading')).toBeInTheDocument()
await expect(loadingObjectItem).toHaveAttribute('aria-disabled', 'true')

await expect(disabledSelectedItem).toHaveClass('design-component--disabled')
await expect(disabledSelectedItem).toHaveClass('design-component--selected')
await expect(disabledSelectedItem).toHaveAttribute('aria-selected', 'true')
await expect(disabledSelectedItem).toHaveAttribute('aria-disabled', 'true')

await expect(readonlySelectedItem).toHaveClass('design-component--readonly')
await expect(readonlySelectedItem).toHaveClass('design-component--selected')
await expect(readonlySelectedItem).toHaveAttribute('aria-selected', 'true')
await expect(readonlySelectedItem).not.toHaveAttribute('aria-disabled')

await expect(loadingDisabledItem?.querySelector('.design-component__loading')).toBeInTheDocument()
await expect(loadingDisabledItem).toHaveClass('design-component--disabled')
await expect(loadingDisabledItem).toHaveAttribute('aria-disabled', 'true')

await expect(focusOpenChildItem).toHaveClass('design-component--focus')
await expect(focusOpenChildItem).toHaveClass('design-component--open')
await expect(focusOpenChildItem).toHaveClass('design-component--selectedChild')

await expect(dividerDisabledSelectedItem).toHaveClass('design-component--divider')
await expect(dividerDisabledSelectedItem).toHaveClass('design-component--disabled')
await expect(dividerDisabledSelectedItem).toHaveClass('design-component--selected')
await expect(dividerDisabledSelectedItem).toHaveAttribute('data-divider', 'active')
await expect(dividerDisabledSelectedItem).toHaveAttribute('aria-disabled', 'true')
await expect(dividerDisabledSelectedItem).toHaveAttribute('aria-selected', 'true')
      `
    },
    {
      id: 'NavigationRailItemTestIconsAndBadges',
      name: {
        en: 'Test: Icons, badges, context wrappers, IDs and zero values',
        ru: 'Тест: Иконки, бейджи, обёртки контекста, ID и нулевые значения'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent data-testid="icon-only" icon="home" label="Home"/>
            <DesignComponent data-testid="icon-and-badge" icon="notifications" :badge="9" label="Notifications"/>
            <DesignComponent data-testid="badge-only" badge="NEW" label="Updates"/>
            <DesignComponent data-testid="icon-and-dot" icon="mail" badge-dot label="Inbox"/>
            <DesignComponent data-testid="dot-only" badge-dot label="News"/>
            <DesignComponent
              data-testid="icon-modifiers"
              icon="arrow_forward"
              icon-turn
              icon-hide
              icon-dir
              icon-palette
              :icon-attrs="{ 'data-custom-icon': 'icon-value' }"
              badge="1"
              :badge-attrs="{ 'data-custom-badge': 'badge-value' }"
              label="Icon modifiers"
              label-id="custom-rail-label"
            />
            <DesignComponent
              data-testid="zero-values"
              :label="0"
              :badge="0"
              :index="0"
              value="fallback-value"
              :list-id="0"
              :tabindex="0"
            />
          </div>
        </div>
      `,
      play: `
const iconOnlyItem = canvasElement.querySelector<HTMLElement>('[data-testid="icon-only"]')
const iconAndBadgeItem = canvasElement.querySelector<HTMLElement>('[data-testid="icon-and-badge"]')
const badgeOnlyItem = canvasElement.querySelector<HTMLElement>('[data-testid="badge-only"]')
const iconAndDotItem = canvasElement.querySelector<HTMLElement>('[data-testid="icon-and-dot"]')
const dotOnlyItem = canvasElement.querySelector<HTMLElement>('[data-testid="dot-only"]')
const iconModifiersItem = canvasElement.querySelector<HTMLElement>('[data-testid="icon-modifiers"]')
const zeroValuesItem = canvasElement.querySelector<HTMLElement>('[data-testid="zero-values"]')

await expect(iconOnlyItem?.querySelector('.design-component__context')).toBeNull()
await expect(iconOnlyItem?.querySelector('.design-component__contextLine')).toBeNull()
await expect(iconOnlyItem?.querySelector('.design-component__icon')).toBeInTheDocument()
await expect(iconOnlyItem?.querySelector('.design-component__label')).toHaveTextContent('Home')

await expect(iconAndBadgeItem?.querySelector('.design-component__context .design-component__icon')).toBeInTheDocument()
await expect(iconAndBadgeItem?.querySelector('.design-component__context .design-component__badge')).toHaveTextContent('9')
await expect(iconAndBadgeItem?.querySelector('.design-component__contextLine')).toBeNull()

await expect(badgeOnlyItem?.querySelector('.design-component__context')).toBeNull()
await expect(badgeOnlyItem?.querySelector('.design-component__contextLine .design-component__label')).toHaveTextContent('Updates')
await expect(badgeOnlyItem?.querySelector('.design-component__contextLine .design-component__badge')).toHaveTextContent('NEW')

await expect(iconAndDotItem?.querySelector('.design-component__context .design-component__badge')).toBeInTheDocument()
await expect(dotOnlyItem?.querySelector('.design-component__contextLine .design-component__badge')).toBeInTheDocument()

const modifiedIcon = iconModifiersItem?.querySelector<HTMLElement>('.design-component__icon')
const modifiedBadge = iconModifiersItem?.querySelector<HTMLElement>('.design-component__badge')
const customLabel = iconModifiersItem?.querySelector<HTMLElement>('#custom-rail-label')
await expect(modifiedIcon).toHaveAttribute('data-custom-icon', 'icon-value')
await expect(modifiedIcon?.className).toContain('--turn')
await expect(modifiedIcon?.className).toContain('--hide')
await expect(modifiedBadge).toHaveAttribute('data-custom-badge', 'badge-value')
await expect(customLabel).toHaveTextContent('Icon modifiers')

await expect(zeroValuesItem).toHaveAttribute('data-value', '0')
await expect(zeroValuesItem).toHaveAttribute('data-list-id', '0')
await expect(zeroValuesItem).toHaveAttribute('tabindex', '0')
await expect(zeroValuesItem?.querySelector('.design-component__label')).toHaveTextContent('0')
await expect(zeroValuesItem?.querySelector('.design-component__badge')).toHaveTextContent('0')
      `
    },
    {
      id: 'NavigationRailItemTestTagsLinksAndAria',
      name: {
        en: 'Test: Tags, links, ARIA roles and metadata attributes',
        ru: 'Тест: Теги, ссылки, ARIA-роли и метаданные'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent data-testid="tag-default" label="Default div"/>
            <DesignComponent data-testid="tag-button" tag="button" label="Button tag" value="btn-val" parent="rail-group" :list-id="7"/>
            <DesignComponent data-testid="tag-href" href="#rail-section" label="Href link"/>
            <DesignComponent data-testid="tag-to" to="/rail-route" label="Router link"/>
            <DesignComponent data-testid="tag-override" tag="li" href="#ignored-tag" label="Tag override"/>
            <DesignComponent data-testid="aria-custom" role="menuitem" tabindex="0" selected index="idx-1" value="val-1" label="Menuitem role"/>
          </div>
        </div>
      `,
      play: `
const defaultItem = canvasElement.querySelector<HTMLElement>('[data-testid="tag-default"]')
const buttonItem = canvasElement.querySelector<HTMLElement>('[data-testid="tag-button"]')
const hrefItem = canvasElement.querySelector<HTMLElement>('[data-testid="tag-href"]')
const toItem = canvasElement.querySelector<HTMLElement>('[data-testid="tag-to"]')
const overrideItem = canvasElement.querySelector<HTMLElement>('[data-testid="tag-override"]')
const ariaCustomItem = canvasElement.querySelector<HTMLElement>('[data-testid="aria-custom"]')

expect(defaultItem?.tagName.toLowerCase()).toBe('div')
await expect(defaultItem).toHaveAttribute('role', 'option')
await expect(defaultItem).toHaveAttribute('tabindex', '-1')
await expect(defaultItem).toHaveAttribute('aria-selected', 'false')

expect(buttonItem?.tagName.toLowerCase()).toBe('button')
await expect(buttonItem).toHaveAttribute('data-value', 'btn-val')
await expect(buttonItem).toHaveAttribute('data-parent', 'rail-group')
await expect(buttonItem).toHaveAttribute('data-list-id', '7')

expect(hrefItem?.tagName.toLowerCase()).toBe('a')
await expect(hrefItem).toHaveAttribute('href', '#rail-section')

expect(toItem?.tagName.toLowerCase()).toBe('a')

expect(overrideItem?.tagName.toLowerCase()).toBe('li')
await expect(overrideItem).toHaveAttribute('href', '#ignored-tag')

await expect(ariaCustomItem).toHaveAttribute('role', 'menuitem')
await expect(ariaCustomItem).toHaveAttribute('tabindex', '0')
await expect(ariaCustomItem).toHaveAttribute('aria-selected', 'true')
await expect(ariaCustomItem).toHaveAttribute('data-value', 'idx-1')
      `
    },
    {
      id: 'NavigationRailItemTestEventsAndGuards',
      name: {
        en: 'Test: Click events, keyboard Enter, value precedence and state guards',
        ru: 'Тест: События клика, Enter, приоритет value и защита состояний'
      },
      setup: `
      const eventLog = ref<string[]>([])

      const onClickItem = (_event: MouseEvent, payload: EventClickValue) => {
        eventLog.value.push('click:' + String(payload.type) + ':' + String(payload.value))
      }

      const onClickLiteItem = (payload: EventClickValue) => {
        eventLog.value.push('clickLite:' + String(payload.type) + ':' + String(payload.value))
      }

      return {
        eventLog,
        onClickItem,
        onClickLiteItem
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              data-testid="guard-active"
              icon="home"
              label="Active"
              :index="0"
              value="fallback"
              :detail="{ source: 'rail' }"
              tabindex="0"
              @click="onClickItem"
              @click-lite="onClickLiteItem"
            />
            <DesignComponent
              data-testid="guard-disabled"
              label="Disabled"
              value="blocked-disabled"
              disabled
              @click="onClickItem"
              @click-lite="onClickLiteItem"
            />
            <DesignComponent
              data-testid="guard-readonly"
              label="Readonly"
              value="blocked-readonly"
              readonly
              @click="onClickItem"
              @click-lite="onClickLiteItem"
            />
            <DesignComponent
              data-testid="guard-loading"
              label="Loading"
              value="blocked-loading"
              loading
              @click="onClickItem"
              @click-lite="onClickLiteItem"
            />
          </div>
          <div class="wiki-storybook-card" data-testid="guard-event-log">{{ eventLog.join('|') }}</div>
        </div>
      `,
      play: `
const activeItem = canvasElement.querySelector<HTMLElement>('[data-testid="guard-active"]')
const activeIcon = activeItem?.querySelector<HTMLElement>('.design-component__icon')
const disabledItem = canvasElement.querySelector<HTMLElement>('[data-testid="guard-disabled"]')
const readonlyItem = canvasElement.querySelector<HTMLElement>('[data-testid="guard-readonly"]')
const loadingItem = canvasElement.querySelector<HTMLElement>('[data-testid="guard-loading"]')
const logElement = canvasElement.querySelector<HTMLElement>('[data-testid="guard-event-log"]')

await step('Click disabled, readonly and loading items (suppressed)', async () => {
  await userEvent.click(disabledItem!)
  await userEvent.click(readonlyItem!)
  await userEvent.click(loadingItem!)
})
await expect(logElement).toHaveTextContent('')

await step('Click active item icon and verify value=fallback precedence', async () => {
  await userEvent.click(activeIcon ?? activeItem!)
})
await expect(logElement).toHaveTextContent('click:icon:fallback|clickLite:icon:fallback')

await step('Activate active item via Enter key', async () => {
  activeItem?.focus()
  await userEvent.keyboard('{Enter}')
})
await expect(logElement).toHaveTextContent('click:icon:fallback|clickLite:icon:fallback|click:click:fallback|clickLite:click:fallback')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'NavigationRailItem'} type={'navigationRailItem'}/>
<Canvas of={Component.NavigationRailItemBasic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.NavigationRailItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<Canvas of={Component.NavigationRailItemEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
<Canvas of={Component.NavigationRailItemExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'leading'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
<Canvas of={Component.NavigationRailItemSlots}/>
    `
  },
  ai: {
    description: `
Compact navigation item component designed specifically for vertical Navigation Rail panels and mini-sidebars.
Features leading icon, label, badge/badgeDot with automatic context or contextLine wrapping, ripple click feedback, circular progress/skeleton loading states, interactive states (focus, open, selected, selectedChild, disabled, readonly, divider), polymorphic tags/links (tag, href, to), and leading/default/body slots.
Emits click and clickLite events with EventClickValue payload and exposes getValue() and getDetail().
    `,
    hide: true
  }
}
