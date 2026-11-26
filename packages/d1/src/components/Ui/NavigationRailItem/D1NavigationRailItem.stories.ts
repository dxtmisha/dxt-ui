import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationRailItem from './D1NavigationRailItem.vue'
import { NavigationRailItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { NavigationRailItemExpose as NavigationRailItemExposeType } from '@dxtmisha/constructor/NavigationRailItem'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationRailItem',
  component: D1NavigationRailItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationRailItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationRailItemWikiStorybook.getWiki(),
  args: NavigationRailItemWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationRailItem>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationRailItem: Story = {
  args: {
    badge: '',
    icon: '',
    badgeDot: true
  }
}

// :story-items [!] System label / Системная метка
export const NavigationRailItemBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1NavigationRailItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1NavigationRailItem icon="home" label="Home"/>
            <D1NavigationRailItem icon="explore" label="Explore" selected/>
            <D1NavigationRailItem icon="notifications" label="Alerts" :badge="5"/>
            <D1NavigationRailItem label="Updates" badge="New"/>
            <D1NavigationRailItem icon="mail" label="Inbox" badge-dot/>
            <D1NavigationRailItem icon="sync" label="Sync" loading/>
            <D1NavigationRailItem icon="lock" label="Locked" disabled/>
            <D1NavigationRailItem icon="settings" label="Settings" divider/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-navigationRailItem')
    await expect(items.length).toBe(8)

    await expect(items[0].querySelector('.d1-navigationRailItem__icon')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-navigationRailItem__label')).toHaveTextContent('Home')

    await expect(items[1]).toHaveClass('d1-navigationRailItem--selected')
    await expect(items[1]).toHaveAttribute('aria-selected', 'true')

    await expect(items[2].querySelector('.d1-navigationRailItem__context')).toBeInTheDocument()
    await expect(items[2].querySelector('.d1-navigationRailItem__context .d1-navigationRailItem__badge')).toHaveTextContent('5')

    await expect(items[3].querySelector('.d1-navigationRailItem__contextLine')).toBeInTheDocument()
    await expect(items[3].querySelector('.d1-navigationRailItem__contextLine .d1-navigationRailItem__badge')).toHaveTextContent('New')

    await expect(items[4].querySelector('.d1-navigationRailItem__context .d1-navigationRailItem__badge')).toBeInTheDocument()

    await expect(items[5].querySelector('.d1-navigationRailItem__loading')).toBeInTheDocument()
    await expect(items[5]).toHaveAttribute('aria-disabled', 'true')

    await expect(items[6]).toHaveAttribute('aria-disabled', 'true')

    await expect(items[7]).toHaveAttribute('data-divider', 'active')
  }
}
export const NavigationRailItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1NavigationRailItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1NavigationRailItem
              :is-skeleton="true"
              icon="home"
              badge="5"
            >Home</D1NavigationRailItem>
            <D1NavigationRailItem
              :is-skeleton="true"
              icon="settings"
            >Navigation Rail Item Label Example</D1NavigationRailItem>
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-navigationRailItem')
    await expect(items.length).toBe(2)

    await expect(items[0].querySelector('.d1-navigationRailItem__label')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-navigationRailItem__label')?.className).toContain('skeleton__textVariant')
    await expect(items[0].querySelector('.d1-navigationRailItem__icon')).toBeInTheDocument()
    await expect(items[1].querySelector('.d1-navigationRailItem__label')?.className).toContain('skeleton__textVariant')
  }
}
export const NavigationRailItemEvents: Story = {
  name: 'События (click и clickLite)',
  render: () => ({
    components: { D1NavigationRailItem },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1NavigationRailItem
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
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
  }
}
export const NavigationRailItemExpose: Story = {
  name: 'Экспонируемые методы (getValue и getDetail)',
  render: () => ({
    components: { D1NavigationRailItem },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1NavigationRailItem
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const inspectButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="inspect-expose-button"]')
    const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')

    await step('Inspect exposed getValue and getDetail', async () => {
      await userEvent.click(inspectButton!)
    })

    await expect(outputElement).toHaveTextContent('"value":"rail-projects"')
    await expect(outputElement).toHaveTextContent('"section":"workspace"')
    await expect(outputElement).toHaveTextContent('"priority":1')
  }
}
export const NavigationRailItemSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1NavigationRailItem },
    template: `
        
        <D1NavigationRailItem data-testid="rail-slots-item">
          <template #leading>
            <span data-testid="slot-leading">Leading slot</span>
          </template>
          <template #default>
            <span data-testid="slot-default">Default slot</span>
          </template>
          <template #body>
            <span data-testid="slot-body">Body slot</span>
          </template>
        </D1NavigationRailItem>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const rootElement = canvasElement.querySelector<HTMLElement>('[data-testid="rail-slots-item"]')
    const leadingElement = canvasElement.querySelector<HTMLElement>('[data-testid="slot-leading"]')
    const defaultElement = canvasElement.querySelector<HTMLElement>('.d1-navigationRailItem__label [data-testid="slot-default"]')
    const bodyElement = canvasElement.querySelector<HTMLElement>('[data-testid="slot-body"]')

    await expect(rootElement).toBeInTheDocument()
    await expect(leadingElement).toHaveTextContent('Leading slot')
    await expect(defaultElement).toHaveTextContent('Default slot')
    await expect(bodyElement).toHaveTextContent('Body slot')
  }
}
export const NavigationRailItemTestStatesAndCombinations: Story = {
  name: 'Тест: Состояния, загрузка, разделитель и комбинации свойств',
  render: () => ({
    components: { D1NavigationRailItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1NavigationRailItem data-testid="state-focus" label="Focus" focus/>
            <D1NavigationRailItem data-testid="state-open" label="Open" open/>
            <D1NavigationRailItem data-testid="state-selected-child" label="Selected child" selected-child/>
            <D1NavigationRailItem data-testid="state-selected" label="Selected" selected/>
            <D1NavigationRailItem data-testid="state-disabled" label="Disabled" disabled/>
            <D1NavigationRailItem data-testid="state-readonly" label="Readonly" readonly/>
            <D1NavigationRailItem data-testid="state-divider" label="Divider" divider/>
            <D1NavigationRailItem data-testid="state-loading-boolean" label="Loading boolean" loading/>
            <D1NavigationRailItem data-testid="state-loading-object" label="Loading object" :loading="{ visible: true }"/>
            <D1NavigationRailItem data-testid="state-disabled-selected" label="Disabled selected" disabled selected/>
            <D1NavigationRailItem data-testid="state-readonly-selected" label="Readonly selected" readonly selected/>
            <D1NavigationRailItem data-testid="state-loading-disabled" label="Loading disabled" loading disabled/>
            <D1NavigationRailItem data-testid="state-focus-open-child" label="Focus open child" focus open selected-child/>
            <D1NavigationRailItem data-testid="state-divider-disabled-selected" label="Divider disabled selected" divider disabled selected/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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

    await expect(focusItem).toHaveClass('d1-navigationRailItem--focus')
    await expect(openItem).toHaveClass('d1-navigationRailItem--open')
    await expect(selectedChildItem).toHaveClass('d1-navigationRailItem--selectedChild')
    await expect(selectedItem).toHaveClass('d1-navigationRailItem--selected')
    await expect(selectedItem).toHaveAttribute('aria-selected', 'true')

    await expect(disabledItem).toHaveClass('d1-navigationRailItem--disabled')
    await expect(disabledItem).toHaveAttribute('aria-disabled', 'true')

    await expect(readonlyItem).toHaveClass('d1-navigationRailItem--readonly')
    await expect(readonlyItem).not.toHaveAttribute('aria-disabled')

    await expect(dividerItem).toHaveClass('d1-navigationRailItem--divider')
    await expect(dividerItem).toHaveAttribute('data-divider', 'active')

    await expect(loadingBooleanItem?.querySelector('.d1-navigationRailItem__loading')).toBeInTheDocument()
    await expect(loadingBooleanItem).toHaveAttribute('aria-disabled', 'true')

    await expect(loadingObjectItem?.querySelector('.d1-navigationRailItem__loading')).toBeInTheDocument()
    await expect(loadingObjectItem).toHaveAttribute('aria-disabled', 'true')

    await expect(disabledSelectedItem).toHaveClass('d1-navigationRailItem--disabled')
    await expect(disabledSelectedItem).toHaveClass('d1-navigationRailItem--selected')
    await expect(disabledSelectedItem).toHaveAttribute('aria-selected', 'true')
    await expect(disabledSelectedItem).toHaveAttribute('aria-disabled', 'true')

    await expect(readonlySelectedItem).toHaveClass('d1-navigationRailItem--readonly')
    await expect(readonlySelectedItem).toHaveClass('d1-navigationRailItem--selected')
    await expect(readonlySelectedItem).toHaveAttribute('aria-selected', 'true')
    await expect(readonlySelectedItem).not.toHaveAttribute('aria-disabled')

    await expect(loadingDisabledItem?.querySelector('.d1-navigationRailItem__loading')).toBeInTheDocument()
    await expect(loadingDisabledItem).toHaveClass('d1-navigationRailItem--disabled')
    await expect(loadingDisabledItem).toHaveAttribute('aria-disabled', 'true')

    await expect(focusOpenChildItem).toHaveClass('d1-navigationRailItem--focus')
    await expect(focusOpenChildItem).toHaveClass('d1-navigationRailItem--open')
    await expect(focusOpenChildItem).toHaveClass('d1-navigationRailItem--selectedChild')

    await expect(dividerDisabledSelectedItem).toHaveClass('d1-navigationRailItem--divider')
    await expect(dividerDisabledSelectedItem).toHaveClass('d1-navigationRailItem--disabled')
    await expect(dividerDisabledSelectedItem).toHaveClass('d1-navigationRailItem--selected')
    await expect(dividerDisabledSelectedItem).toHaveAttribute('data-divider', 'active')
    await expect(dividerDisabledSelectedItem).toHaveAttribute('aria-disabled', 'true')
    await expect(dividerDisabledSelectedItem).toHaveAttribute('aria-selected', 'true')
  }
}
export const NavigationRailItemTestIconsAndBadges: Story = {
  name: 'Тест: Иконки, бейджи, обёртки контекста, ID и нулевые значения',
  render: () => ({
    components: { D1NavigationRailItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1NavigationRailItem data-testid="icon-only" icon="home" label="Home"/>
            <D1NavigationRailItem data-testid="icon-and-badge" icon="notifications" :badge="9" label="Notifications"/>
            <D1NavigationRailItem data-testid="badge-only" badge="NEW" label="Updates"/>
            <D1NavigationRailItem data-testid="icon-and-dot" icon="mail" badge-dot label="Inbox"/>
            <D1NavigationRailItem data-testid="dot-only" badge-dot label="News"/>
            <D1NavigationRailItem
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
            <D1NavigationRailItem
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
      
    `
  }),
  play: async ({ canvasElement }) => {
    const iconOnlyItem = canvasElement.querySelector<HTMLElement>('[data-testid="icon-only"]')
    const iconAndBadgeItem = canvasElement.querySelector<HTMLElement>('[data-testid="icon-and-badge"]')
    const badgeOnlyItem = canvasElement.querySelector<HTMLElement>('[data-testid="badge-only"]')
    const iconAndDotItem = canvasElement.querySelector<HTMLElement>('[data-testid="icon-and-dot"]')
    const dotOnlyItem = canvasElement.querySelector<HTMLElement>('[data-testid="dot-only"]')
    const iconModifiersItem = canvasElement.querySelector<HTMLElement>('[data-testid="icon-modifiers"]')
    const zeroValuesItem = canvasElement.querySelector<HTMLElement>('[data-testid="zero-values"]')

    await expect(iconOnlyItem?.querySelector('.d1-navigationRailItem__context')).toBeNull()
    await expect(iconOnlyItem?.querySelector('.d1-navigationRailItem__contextLine')).toBeNull()
    await expect(iconOnlyItem?.querySelector('.d1-navigationRailItem__icon')).toBeInTheDocument()
    await expect(iconOnlyItem?.querySelector('.d1-navigationRailItem__label')).toHaveTextContent('Home')

    await expect(iconAndBadgeItem?.querySelector('.d1-navigationRailItem__context .d1-navigationRailItem__icon')).toBeInTheDocument()
    await expect(iconAndBadgeItem?.querySelector('.d1-navigationRailItem__context .d1-navigationRailItem__badge')).toHaveTextContent('9')
    await expect(iconAndBadgeItem?.querySelector('.d1-navigationRailItem__contextLine')).toBeNull()

    await expect(badgeOnlyItem?.querySelector('.d1-navigationRailItem__context')).toBeNull()
    await expect(badgeOnlyItem?.querySelector('.d1-navigationRailItem__contextLine .d1-navigationRailItem__label')).toHaveTextContent('Updates')
    await expect(badgeOnlyItem?.querySelector('.d1-navigationRailItem__contextLine .d1-navigationRailItem__badge')).toHaveTextContent('NEW')

    await expect(iconAndDotItem?.querySelector('.d1-navigationRailItem__context .d1-navigationRailItem__badge')).toBeInTheDocument()
    await expect(dotOnlyItem?.querySelector('.d1-navigationRailItem__contextLine .d1-navigationRailItem__badge')).toBeInTheDocument()

    const modifiedIcon = iconModifiersItem?.querySelector<HTMLElement>('.d1-navigationRailItem__icon')
    const modifiedBadge = iconModifiersItem?.querySelector<HTMLElement>('.d1-navigationRailItem__badge')
    const customLabel = iconModifiersItem?.querySelector<HTMLElement>('#custom-rail-label')
    await expect(modifiedIcon).toHaveAttribute('data-custom-icon', 'icon-value')
    await expect(modifiedIcon?.className).toContain('--turn')
    await expect(modifiedIcon?.className).toContain('--hide')
    await expect(modifiedBadge).toHaveAttribute('data-custom-badge', 'badge-value')
    await expect(customLabel).toHaveTextContent('Icon modifiers')

    await expect(zeroValuesItem).toHaveAttribute('data-value', '0')
    await expect(zeroValuesItem).toHaveAttribute('data-list-id', '0')
    await expect(zeroValuesItem).toHaveAttribute('tabindex', '0')
    await expect(zeroValuesItem?.querySelector('.d1-navigationRailItem__label')).toHaveTextContent('0')
    await expect(zeroValuesItem?.querySelector('.d1-navigationRailItem__badge')).toHaveTextContent('0')
  }
}
export const NavigationRailItemTestTagsLinksAndAria: Story = {
  name: 'Тест: Теги, ссылки, ARIA-роли и метаданные',
  render: () => ({
    components: { D1NavigationRailItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1NavigationRailItem data-testid="tag-default" label="Default div"/>
            <D1NavigationRailItem data-testid="tag-button" tag="button" label="Button tag" value="btn-val" parent="rail-group" :list-id="7"/>
            <D1NavigationRailItem data-testid="tag-href" href="#rail-section" label="Href link"/>
            <D1NavigationRailItem data-testid="tag-to" to="/rail-route" label="Router link"/>
            <D1NavigationRailItem data-testid="tag-override" tag="li" href="#ignored-tag" label="Tag override"/>
            <D1NavigationRailItem data-testid="aria-custom" role="menuitem" tabindex="0" selected index="idx-1" value="val-1" label="Menuitem role"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const NavigationRailItemTestEventsAndGuards: Story = {
  name: 'Тест: События клика, Enter, приоритет value и защита состояний',
  render: () => ({
    components: { D1NavigationRailItem },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1NavigationRailItem
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
            <D1NavigationRailItem
              data-testid="guard-disabled"
              label="Disabled"
              value="blocked-disabled"
              disabled
              @click="onClickItem"
              @click-lite="onClickLiteItem"
            />
            <D1NavigationRailItem
              data-testid="guard-readonly"
              label="Readonly"
              value="blocked-readonly"
              readonly
              @click="onClickItem"
              @click-lite="onClickLiteItem"
            />
            <D1NavigationRailItem
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const activeItem = canvasElement.querySelector<HTMLElement>('[data-testid="guard-active"]')
    const activeIcon = activeItem?.querySelector<HTMLElement>('.d1-navigationRailItem__icon')
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
  }
}
// :story-items [!] System label / Системная метка
