import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationItem from './D1NavigationItem.vue'
import { NavigationItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { NavigationItemExpose as NavigationItemExposeType } from '@dxtmisha/constructor/NavigationItem'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationItem',
  component: D1NavigationItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationItemWikiStorybook.getWiki(),
  args: NavigationItemWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationItem>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1NavigationItem },
    setup: () => ({ args }),
    template: `
      <D1NavigationItem v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const navigationItem = canvasElement.querySelector('.d1-navigationItem')
    await expect(navigationItem).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const NavigationItemBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1NavigationItem },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationItem>Simple Item</D1NavigationItem>
            <D1NavigationItem icon="home">Home</D1NavigationItem>
            <D1NavigationItem description="Additional information">Item with Description</D1NavigationItem>
            <D1NavigationItem focus>Focus</D1NavigationItem>
            <D1NavigationItem open>Open</D1NavigationItem>
            <D1NavigationItem selected>Selected</D1NavigationItem>
            <D1NavigationItem selectedChild>Selected Child</D1NavigationItem>
            <D1NavigationItem disabled>Disabled</D1NavigationItem>
            <D1NavigationItem readonly>Readonly</D1NavigationItem>
            <D1NavigationItem prefix="01" suffix="Info">With Prefix & Suffix</D1NavigationItem>
            <D1NavigationItem caption="Caption" description="Description text here">Full Content</D1NavigationItem>
            <D1NavigationItem icon="star" badge="new">Icon with Badge</D1NavigationItem>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-navigationItem')
    await expect(items.length).toBe(12)
    await expect(items[0].tagName).toBe('A')
    await expect(items[0].querySelector('.d1-navigationItem__label')).toHaveTextContent('Simple Item')
    await expect(items[2]).toHaveClass('d1-navigationItem--description')
    await expect(items[3]).toHaveClass('d1-navigationItem--focus')
    await expect(items[4]).toHaveClass('d1-navigationItem--open')
    await expect(items[5]).toHaveClass('d1-navigationItem--selected')
    await expect(items[6]).toHaveClass('d1-navigationItem--selectedChild')
    await expect(items[7]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[8]).toHaveClass('d1-navigationItem--readonly')
    await expect(items[9].querySelector('.d1-navigationItem__prefix')).toHaveTextContent('01')
    await expect(items[9].querySelector('.d1-navigationItem__suffix')).toHaveTextContent('Info')
    await expect(items[10].querySelector('.d1-navigationItem__caption')).toHaveTextContent('Caption')
    await expect(items[11].querySelector('.d1-navigationItem__badge')).toHaveTextContent('new')
  }
}
export const NavigationItemHighlight: Story = {
  name: 'Выделение',
  render: () => ({
    components: { D1NavigationItem },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationItem highlight="nav" label="Navigation link item"/>
            <D1NavigationItem highlight="set" :highlightLengthStart="3" label="Settings panel"/>
            <D1NavigationItem highlight="se" :highlightLengthStart="3" label="Settings without highlighting (too short)"/>
            <D1NavigationItem highlight="example" :highlightLengthStart="2" label="Example navigation label"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-navigationItem')
    await expect(items.length).toBe(4)
    await expect(items[0].querySelector('.d1-navigationItem__highlight')).toHaveTextContent('Nav')
    await expect(items[1].querySelector('.d1-navigationItem__highlight')).toHaveTextContent('Set')
    await expect(items[2].querySelector('.d1-navigationItem__highlight')).toBeNull()
    await expect(items[3].querySelector('.d1-navigationItem__highlight')).toHaveTextContent('Example')
  }
}
export const NavigationItemFill: Story = {
  name: 'Заливка',
  render: () => ({
    components: { D1NavigationItem },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationItem label="Default fill"/>
            <D1NavigationItem fill="#ff0000" label="Red fill"/>
            <D1NavigationItem fill="rgb(0, 128, 255)" label="Blue fill"/>
            <D1NavigationItem fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-navigationItem')
    await expect(items.length).toBe(4)
    await expect(items[0]).not.toHaveClass('d1-navigationItem--fill--custom')
    await expect(items[1]).toHaveClass('d1-navigationItem--fill--custom')
    await expect(items[2]).toHaveClass('d1-navigationItem--fill--custom')
    await expect(items[3]).toHaveClass('d1-navigationItem--fill--custom')
  }
}
export const NavigationItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1NavigationItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1NavigationItem>
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the navigation item component."
          >Navigation Item Label Example</D1NavigationItem>
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the navigation item."
          >Very Long Navigation Item Label Example for Skeleton</D1NavigationItem>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-navigationItem')
    await expect(items.length).toBe(3)
    await expect(items[0].querySelector('.d1-navigationItem__label')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-navigationItem__description')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-navigationItem__caption')).toBeInTheDocument()
  }
}
export const NavigationItemSlots: Story = {
  name: 'Слоты',
  render: () => ({
    components: { D1NavigationItem },
    template: `
        
        <D1NavigationItem>
          <template #leading>
            <span data-testid="slot-leading">L</span>
          </template>
          <template #prefix>
            <span data-testid="slot-prefix">[PRE]</span>
          </template>
          <template #default>
            <span data-testid="slot-default">Default label slot</span>
          </template>
          <template #caption>
            <span data-testid="slot-caption">Caption</span>
          </template>
          <template #suffix>
            <span data-testid="slot-suffix">SUF</span>
          </template>
          <template #description>
            <span data-testid="slot-description">Description slot</span>
          </template>
          <template #body>
            <div data-testid="slot-body">Extra body slot</div>
          </template>
          <template #trailing>
            <span data-testid="slot-trailing">Trailing</span>
          </template>
        </D1NavigationItem>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[data-testid="slot-leading"]')).toHaveTextContent('L')
    await expect(canvasElement.querySelector('.d1-navigationItem__prefix [data-testid="slot-prefix"]')).toHaveTextContent('[PRE]')
    await expect(canvasElement.querySelector('.d1-navigationItem__label [data-testid="slot-default"]')).toHaveTextContent('Default label slot')
    await expect(canvasElement.querySelector('.d1-navigationItem__caption [data-testid="slot-caption"]')).toHaveTextContent('Caption')
    await expect(canvasElement.querySelector('.d1-navigationItem__suffix [data-testid="slot-suffix"]')).toHaveTextContent('SUF')
    await expect(canvasElement.querySelector('.d1-navigationItem__description [data-testid="slot-description"]')).toHaveTextContent('Description slot')
    await expect(canvasElement.querySelector('.d1-navigationItem__body [data-testid="slot-body"]')).toHaveTextContent('Extra body slot')
    await expect(canvasElement.querySelector('.d1-navigationItem__trailing [data-testid="slot-trailing"]')).toHaveTextContent('Trailing')
  }
}
export const NavigationItemEvents: Story = {
  name: 'События (click и clickLite)',
  render: () => ({
    components: { D1NavigationItem },
    setup() {
      const lastClickText = ref<string>('none')
      const lastClickLiteText = ref<string>('none')
      const onClickItem = (_event: MouseEvent, value: EventClickValue) => {
        lastClickText.value = 'click:' + String(value.value) + ':' + String(value.type)
      }
      const onClickLiteItem = (value: EventClickValue) => {
        lastClickLiteText.value = 'clickLite:' + String(value.value) + ':' + String(value.type)
      }
      return {
        lastClickText,
        lastClickLiteText,
        onClickItem,
        onClickLiteItem
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1NavigationItem
            label="Clickable Navigation Item"
            icon="home"
            iconTrailing="arrow_forward"
            value="nav-42"
            :detail="{ section: 'sidebar' }"
            @click="onClickItem"
            @click-lite="onClickLiteItem"
          />
          <div class="wiki-storybook-card" data-testid="event-click-output">{{ lastClickText }}</div>
          <div class="wiki-storybook-card" data-testid="event-click-lite-output">{{ lastClickLiteText }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const itemElement = canvasElement.querySelector<HTMLElement>('.d1-navigationItem')
    const clickOutput = canvasElement.querySelector<HTMLElement>('[data-testid="event-click-output"]')
    const clickLiteOutput = canvasElement.querySelector<HTMLElement>('[data-testid="event-click-lite-output"]')

    await userEvent.click(itemElement!)
    await expect(clickOutput).toHaveTextContent('click:nav-42:click')
    await expect(clickLiteOutput).toHaveTextContent('clickLite:nav-42:click')

    const trailingIcon = canvasElement.querySelector<HTMLElement>('[data-event-type="icon-trailing"]')
    await expect(trailingIcon).toBeInTheDocument()
    await userEvent.click(trailingIcon!)
    await expect(clickOutput).toHaveTextContent('click:nav-42:icon-trailing')
    await expect(clickLiteOutput).toHaveTextContent('clickLite:nav-42:icon-trailing')
  }
}
export const NavigationItemExpose: Story = {
  name: 'Экспонируемые методы (getValue и getDetail)',
  render: () => ({
    components: { D1NavigationItem },
    setup() {
      const itemReference = ref<NavigationItemExposeType | null>(null)
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
            <button class="wiki-storybook-button" type="button" @click="readExposedData">Inspect expose</button>
            <div class="wiki-storybook-card" data-testid="expose-output">{{ exposedResult }}</div>
          </div>
          <D1NavigationItem
            ref="itemReference"
            label="Exposed Navigation Item"
            value="nav-exposed"
            :detail="{ section: 'sidebar', role: 'editor' }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const inspectButton = canvasElement.querySelector<HTMLButtonElement>('button')
    const exposeOutput = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')
    await userEvent.click(inspectButton!)
    await expect(exposeOutput).toHaveTextContent('"value":"nav-exposed"')
    await expect(exposeOutput).toHaveTextContent('"section":"sidebar"')
    await expect(exposeOutput).toHaveTextContent('"role":"editor"')
  }
}
export const NavigationItemTestStatesAndSelection: Story = {
  name: 'Тест: Состояния, разделители, загрузка, блокировка кликов и стили выбора',
  render: () => ({
    components: { D1NavigationItem },
    setup() {
      const blockedClickCount = ref<number>(0)
      const onBlockedClick = (_event: MouseEvent, _value: EventClickValue) => {
        blockedClickCount.value += 1
      }
      const onBlockedClickLite = (_value: EventClickValue) => {
        blockedClickCount.value += 1
      }
      return {
        blockedClickCount,
        onBlockedClick,
        onBlockedClickLite
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1NavigationItem label="Open focus selectedChild" open focus selectedChild/>
          <D1NavigationItem
            data-testid="disabled-selected-item"
            label="Disabled selected"
            disabled
            selected
            @click="onBlockedClick"
            @click-lite="onBlockedClickLite"
          />
          <D1NavigationItem label="Readonly selected" readonly selected/>
          <D1NavigationItem
            data-testid="loading-selected-item"
            label="Loading selected"
            loading
            selected
            @click="onBlockedClick"
            @click-lite="onBlockedClickLite"
          />
          <D1NavigationItem label="Divider disabled" divider disabled/>
          <D1NavigationItem label="Checkbox start" selectionStyle="checkbox" controlPosition="start" selected :checkboxAttrs="{ name: 'navigation-checkbox-1' }"/>
          <D1NavigationItem label="Radio end" selectionStyle="radio" controlPosition="end" selected :radioAttrs="{ name: 'navigation-radio-1' }"/>
          <D1NavigationItem label="Checkmark selected" selectionStyle="checkmark" selected iconCheckbox="check"/>
          <D1NavigationItem label="Checkmark unselected" selectionStyle="checkmark" :selected="false" iconCheckbox="check"/>
          <div class="wiki-storybook-card" data-testid="blocked-click-count">{{ blockedClickCount }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-navigationItem')
    await expect(items.length).toBe(9)

    await expect(items[0]).toHaveClass('d1-navigationItem--open')
    await expect(items[0]).toHaveClass('d1-navigationItem--focus')
    await expect(items[0]).toHaveClass('d1-navigationItem--selectedChild')

    await expect(items[1]).toHaveClass('d1-navigationItem--disabled')
    await expect(items[1]).toHaveClass('d1-navigationItem--selected')
    await expect(items[1]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[1]).toHaveAttribute('aria-selected', 'true')

    await expect(items[2]).toHaveClass('d1-navigationItem--readonly')
    await expect(items[2]).toHaveClass('d1-navigationItem--selected')

    await expect(items[3].querySelector('.d1-navigationItem__loading')).toBeInTheDocument()
    await expect(items[3]).toHaveAttribute('aria-disabled', 'true')

    await expect(items[4]).toHaveAttribute('data-divider', 'active')
    await expect(items[4]).toHaveAttribute('aria-disabled', 'true')

    await expect(items[5]).toHaveClass('d1-navigationItem--selectionStyle')
    await expect(items[5]).toHaveClass('d1-navigationItem--selectionStyle--checkbox')
    await expect(items[5]).toHaveClass('d1-navigationItem--controlPosition--start')
    await expect(items[5]).not.toHaveClass('d1-navigationItem--selected')
    await expect(items[5].querySelector('.d1-navigationItem__control')).toBeInTheDocument()

    await expect(items[6]).toHaveClass('d1-navigationItem--selectionStyle--radio')
    await expect(items[6]).toHaveClass('d1-navigationItem--controlPosition--end')
    await expect(items[6].querySelector('.d1-navigationItem__control')).toBeInTheDocument()

    await expect(items[7]).toHaveClass('d1-navigationItem--selectionStyle--checkmark')
    await expect(items[7].querySelector('.d1-navigationItem__control')).toBeInTheDocument()

    await expect(items[8]).toHaveClass('d1-navigationItem--selectionStyle--checkmark')
    await expect(items[8].querySelector('.d1-navigationItem__control')).toBeNull()

    const blockedClickCounter = canvasElement.querySelector<HTMLElement>('[data-testid="blocked-click-count"]')
    await userEvent.click(items[1])
    await userEvent.click(items[3])
    await expect(blockedClickCounter).toHaveTextContent('0')
  }
}
export const NavigationItemTestIconsBadgesAndNumericZero: Story = {
  name: 'Тест: Иконки, выравнивание, флаги, бейджи и числовой ноль',
  render: () => ({
    components: { D1NavigationItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1NavigationItem
            label="Aligned edge with top icon"
            description="Multi-line context alignment"
            icon="folder"
            iconTrailing="arrow_forward"
            iconAlign="edge"
            iconTop
            iconTurn
            iconDir
            iconPalette
            iconTrailingDirOnly
            iconTrailingTurnOnly
            iconTrailingPalette
            :iconAttrs="{ active: true }"
          />
          <D1NavigationItem
            label="Hidden icon and dot badge"
            icon="star"
            iconHide
            badgeDot
            :badgeAttrs="{ selected: true }"
          />
          <D1NavigationItem
            label="Center aligned icon"
            icon="home"
            iconAlign="center"
            :badge="5"
          />
          <D1NavigationItem
            :label="0"
            :caption="0"
            :description="0"
            :badge="0"
            :value="0"
            :listId="0"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-navigationItem')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-navigationItem--iconAlign--edge')
    await expect(items[0]).toHaveClass('d1-navigationItem--iconTop')
    await expect(items[0].querySelector('.d1-navigationItem__icon')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-navigationItem__trailing')).toBeInTheDocument()

    await expect(items[1].querySelector('.d1-navigationItem__icon')).toBeInTheDocument()
    await expect(items[1].querySelector('.d1-navigationItem__icon')?.className).toContain('--hide')
    await expect(items[1].querySelector('.d1-navigationItem__badge')).toBeInTheDocument()

    await expect(items[2]).toHaveClass('d1-navigationItem--iconAlign--center')
    await expect(items[2].querySelector('.d1-navigationItem__badge')).toHaveTextContent('5')

    await expect(items[3]).toHaveAttribute('data-value', '0')
    await expect(items[3]).toHaveAttribute('data-list-id', '0')
    await expect(items[3].querySelector('.d1-navigationItem__label')).toHaveTextContent('0')
    await expect(items[3].querySelector('.d1-navigationItem__caption')).toHaveTextContent('0')
    await expect(items[3].querySelector('.d1-navigationItem__description')).toHaveTextContent('0')
    await expect(items[3].querySelector('.d1-navigationItem__badge')).toHaveTextContent('0')
  }
}
export const NavigationItemTestTagsAriaFilterAndKeyboard: Story = {
  name: 'Тест: Теги, ссылки, ARIA-роли, filterMode, клавиатура и пользовательские ID',
  render: () => ({
    components: { D1NavigationItem },
    setup() {
      const keyboardOutput = ref<string>('none')
      const onKeyboardClickLite = (value: EventClickValue) => {
        keyboardOutput.value = 'enter:' + String(value.value)
      }
      return {
        keyboardOutput,
        onKeyboardClickLite
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1NavigationItem data-testid="default-anchor" label="Default anchor tag"/>
          <D1NavigationItem
            tag="button"
            label="Button tag"
            :index="0"
            :value="99"
            parent="group-1"
            :listId="7"
            tabindex="0"
            @click-lite="onKeyboardClickLite"
          />
          <D1NavigationItem href="#anchor-target" label="Anchor link"/>
          <D1NavigationItem to="/target-route" label="Router target"/>
          <D1NavigationItem role="option" selected data-testid="option-role" label="Option role"/>
          <D1NavigationItem role="menuitem" :selected="false" data-testid="menuitem-role" label="Menuitem role"/>
          <D1NavigationItem role="menuitemradio" selected label="Menuitem radio"/>
          <D1NavigationItem role="menuitemcheckbox" :selected="false" label="Menuitem checkbox"/>
          <D1NavigationItem
            label="Custom IDs item"
            labelId="custom-label-id"
            prefix="P"
            prefixId="custom-prefix-id"
            suffix="S"
            suffixId="custom-suffix-id"
            description="D"
            descriptionId="custom-desc-id"
            caption="Deco"
            captionDecorative
          />
          <D1NavigationItem label="Visible filtered" highlight="vis" filterMode/>
          <D1NavigationItem label="Hidden filtered" highlight="vis" filterMode/>
          <D1NavigationItem label="Search metadata match" search="Vietnam +84" highlight="+84" :highlightLengthStart="1" filterMode/>
          <D1NavigationItem label="Below threshold" highlight="b" :highlightLengthStart="3" filterMode/>
          <div class="wiki-storybook-card" data-testid="keyboard-output">{{ keyboardOutput }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const defaultAnchor = canvasElement.querySelector<HTMLElement>('[data-testid="default-anchor"]')
    await expect(defaultAnchor?.tagName).toBe('A')
    await expect(defaultAnchor).toHaveAttribute('role', 'option')
    await expect(defaultAnchor).toHaveAttribute('tabindex', '-1')

    const buttonItem = canvasElement.querySelector<HTMLElement>('button.d1-navigationItem')
    await expect(buttonItem).toBeInTheDocument()
    await expect(buttonItem).toHaveAttribute('data-value', '0')
    await expect(buttonItem).toHaveAttribute('data-parent', 'group-1')
    await expect(buttonItem).toHaveAttribute('data-list-id', '7')
    await expect(buttonItem).toHaveAttribute('tabindex', '0')

    buttonItem!.focus()
    await userEvent.keyboard('{Enter}')
    await expect(canvasElement.querySelector('[data-testid="keyboard-output"]')).toHaveTextContent('enter:99')

    const anchorItem = canvasElement.querySelector<HTMLElement>('a[href="#anchor-target"].d1-navigationItem')
    await expect(anchorItem).toBeInTheDocument()

    const optionItem = canvasElement.querySelector<HTMLElement>('[data-testid="option-role"]')
    await expect(optionItem).toHaveAttribute('aria-selected', 'true')

    const menuitemItem = canvasElement.querySelector<HTMLElement>('[data-testid="menuitem-role"]')
    await expect(menuitemItem).toHaveAttribute('aria-selected', 'false')

    const radioItem = canvasElement.querySelector<HTMLElement>('[role="menuitemradio"]')
    await expect(radioItem).toHaveAttribute('aria-checked', 'true')

    const checkboxItem = canvasElement.querySelector<HTMLElement>('[role="menuitemcheckbox"]')
    await expect(checkboxItem).toHaveAttribute('aria-checked', 'false')

    await expect(canvasElement.querySelector('#custom-label-id')).toHaveTextContent('Custom IDs item')
    await expect(canvasElement.querySelector('#custom-prefix-id')).toHaveTextContent('P')
    await expect(canvasElement.querySelector('#custom-suffix-id')).toHaveTextContent('S')
    await expect(canvasElement.querySelector('#custom-desc-id')).toHaveTextContent('D')
    await expect(canvasElement.querySelector('.d1-navigationItem__caption')).toHaveAttribute('aria-hidden', 'true')

    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-navigationItem')
    await expect(items.length).toBe(12)
    await expect(items[9]).toHaveAttribute('data-highlight', 'vis')
    await expect(items[9].querySelector('.d1-navigationItem__highlight')).toHaveTextContent('Vis')
    await expect(items[10]).toHaveAttribute('data-highlight', '+84')
    await expect(items[10].querySelector('.d1-navigationItem__highlight')).toHaveTextContent('Search metadata match')
    await expect(items[11]).toHaveAttribute('data-highlight', 'b')
    await expect(items[11].querySelector('.d1-navigationItem__highlight')).toBeNull()
  }
}
export const NavigationItemTestLazy: Story = {
  name: 'Тест: Ленивый рендеринг с отступом и кэшированием высоты',
  render: () => ({
    components: { D1NavigationItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1NavigationItem
            data-testid="navigation-item-lazy"
            label="Lazy navigation item"
            lazy
            lazy-margin="128px 0px"
          />
          <D1NavigationItem
            data-testid="navigation-item-lazy-no-cache"
            label="Lazy navigation item without height cache"
            lazy
            lazy-margin="64px 0px"
            :lazy-cache-height="false"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const lazyItem = canvasElement.querySelector('[data-testid="navigation-item-lazy"]')
      const lazyNoCacheItem = canvasElement.querySelector('[data-testid="navigation-item-lazy-no-cache"]')

      await expect(lazyItem).toHaveClass('d1-navigationItem--lazy')
      await expect(lazyNoCacheItem).toHaveClass('d1-navigationItem--lazy')
      await expect(lazyItem).toHaveTextContent('Lazy navigation item')
      await expect(lazyNoCacheItem).toHaveTextContent('Lazy navigation item without height cache')
    })
  }
}
// :story-items [!] System label / Системная метка
