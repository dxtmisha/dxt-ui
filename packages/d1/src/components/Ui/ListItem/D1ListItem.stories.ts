import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ListItem from './D1ListItem.vue'
import { ListItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ListItemExpose as ListItemExposeType } from '@dxtmisha/constructor/ListItem'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ListItem',
  component: D1ListItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ListItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ListItemWikiStorybook.getWiki(),
  args: ListItemWikiStorybook.getValues()
} satisfies Meta<typeof D1ListItem>

export default meta

type Story = StoryObj<typeof meta>

export const ListItem: Story = {
  args: {
    controlPosition: 'start'
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ListItem },
    setup: () => ({ args }),
    template: `
      <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-listItem')
    await expect(items.length).toBe(3)
    await expect(items[0]).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ListItemBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1ListItem },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem>Simple Item</D1ListItem>
            <D1ListItem icon="person">Item with Icon</D1ListItem>
            <D1ListItem description="Additional information">Item with Description</D1ListItem>
            <D1ListItem focus>Focus</D1ListItem>
            <D1ListItem selected>Selected</D1ListItem>
            <D1ListItem disabled>Disabled</D1ListItem>
            <D1ListItem readonly>Readonly</D1ListItem>
            <D1ListItem prefix="01" suffix="Info">With Prefix & Suffix</D1ListItem>
            <D1ListItem caption="Caption" description="Description text here">Full Content</D1ListItem>
            <D1ListItem icon="star" badge="new">Icon with Badge</D1ListItem>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-listItem')
    await expect(items.length).toBe(10)
    await expect(items[0].querySelector('.d1-listItem__label')).toHaveTextContent('Simple Item')
    await expect(items[2]).toHaveClass('d1-listItem--description')
    await expect(items[4]).toHaveClass('d1-listItem--selected')
    await expect(items[5]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[7].querySelector('.d1-listItem__prefix')).toHaveTextContent('01')
    await expect(items[7].querySelector('.d1-listItem__suffix')).toHaveTextContent('Info')
    await expect(items[8].querySelector('.d1-listItem__caption')).toHaveTextContent('Caption')
  }
}
export const ListItemHighlight: Story = {
  name: 'Выделение',
  render: () => ({
    components: { D1ListItem },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem highlight="search" label="Search result item"/>
            <D1ListItem highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
            <D1ListItem highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
            <D1ListItem highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-listItem')
    await expect(items.length).toBe(4)
    await expect(items[0].querySelector('.d1-listItem__highlight')).toHaveTextContent('Search')
    await expect(items[1].querySelector('.d1-listItem__highlight')).toHaveTextContent('Tex')
    await expect(items[2].querySelector('.d1-listItem__highlight')).toBeNull()
    await expect(items[3].querySelector('.d1-listItem__highlight')).toHaveTextContent('Example')
  }
}
export const ListItemFill: Story = {
  name: 'Заливка',
  render: () => ({
    components: { D1ListItem },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1ListItem label="Default fill"/>
            <D1ListItem fill="#ff0000" label="Red fill"/>
            <D1ListItem fill="rgb(0, 128, 255)" label="Blue fill"/>
            <D1ListItem fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-listItem')
    await expect(items.length).toBe(4)
    await expect(items[0]).not.toHaveClass('d1-listItem--fill--custom')
    await expect(items[1]).toHaveClass('d1-listItem--fill--custom')
    await expect(items[2]).toHaveClass('d1-listItem--fill--custom')
    await expect(items[3]).toHaveClass('d1-listItem--fill--custom')
  }
}
export const ListItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1ListItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</D1ListItem>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-listItem')
    await expect(items.length).toBe(3)
    await expect(items[0].querySelector('.d1-listItem__label')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-listItem__description')).toBeInTheDocument()
  }
}
export const ListItemSlots: Story = {
  name: 'Слоты',
  render: () => ({
    components: { D1ListItem },
    template: `
        
        <D1ListItem>
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
        </D1ListItem>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[data-testid="slot-leading"]')).toHaveTextContent('L')
    await expect(canvasElement.querySelector('.d1-listItem__prefix [data-testid="slot-prefix"]')).toHaveTextContent('[PRE]')
    await expect(canvasElement.querySelector('.d1-listItem__label [data-testid="slot-default"]')).toHaveTextContent('Default label slot')
    await expect(canvasElement.querySelector('.d1-listItem__caption [data-testid="slot-caption"]')).toHaveTextContent('Caption')
    await expect(canvasElement.querySelector('.d1-listItem__suffix [data-testid="slot-suffix"]')).toHaveTextContent('SUF')
    await expect(canvasElement.querySelector('.d1-listItem__description [data-testid="slot-description"]')).toHaveTextContent('Description slot')
    await expect(canvasElement.querySelector('.d1-listItem__body [data-testid="slot-body"]')).toHaveTextContent('Extra body slot')
    await expect(canvasElement.querySelector('.d1-listItem__trailing [data-testid="slot-trailing"]')).toHaveTextContent('Trailing')
  }
}
export const ListItemEvents: Story = {
  name: 'События (click и clickLite)',
  render: () => ({
    components: { D1ListItem },
    setup() {
      const lastEventText = ref<string>('none')
      const onClickItem = (_event: MouseEvent, value: EventClickValue) => {
        lastEventText.value = 'click:' + String(value.value) + ':' + String(value.type)
      }
      const onClickLiteItem = (value: EventClickValue) => {
        if (lastEventText.value === 'none') {
          lastEventText.value = 'clickLite:' + String(value.value)
        }
      }
      return {
        lastEventText,
        onClickItem,
        onClickLiteItem
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ListItem
            label="Clickable List Item"
            value="item-42"
            :detail="{ section: 'actions' }"
            @click="onClickItem"
            @click-lite="onClickLiteItem"
          />
          <div class="wiki-storybook-card" data-testid="event-output">{{ lastEventText }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const itemElement = canvasElement.querySelector<HTMLElement>('.d1-listItem')
    const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="event-output"]')
    await userEvent.click(itemElement!)
    await expect(outputElement).toHaveTextContent('click:item-42:click')
  }
}
export const ListItemExpose: Story = {
  name: 'Экспонируемые методы (getValue и getDetail)',
  render: () => ({
    components: { D1ListItem },
    setup() {
      const itemReference = ref<ListItemExposeType | null>(null)
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
          <D1ListItem
            ref="itemReference"
            label="Exposed List Item"
            value="exposed-value"
            :detail="{ role: 'editor' }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const inspectButton = canvasElement.querySelector<HTMLButtonElement>('button')
    const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')
    await userEvent.click(inspectButton!)
    await expect(outputElement).toHaveTextContent('"value":"exposed-value"')
    await expect(outputElement).toHaveTextContent('"role":"editor"')
  }
}
export const ListItemTestStatesAndSelection: Story = {
  name: 'Тест: Состояния, разделители, загрузка и стили выбора',
  render: () => ({
    components: { D1ListItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ListItem label="Open item" open/>
          <D1ListItem label="Selected child" selectedChild/>
          <D1ListItem label="Disabled selected" disabled selected/>
          <D1ListItem label="Loading item" loading/>
          <D1ListItem label="Divider item" divider/>
          <D1ListItem label="Checkbox start" selectionStyle="checkbox" controlPosition="start" selected :checkboxAttrs="{ name: 'cb-1' }"/>
          <D1ListItem label="Radio end" selectionStyle="radio" controlPosition="end" selected :radioAttrs="{ name: 'rb-1' }"/>
          <D1ListItem label="Checkmark selected" selectionStyle="checkmark" selected iconCheckbox="check"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-listItem')
    await expect(items.length).toBe(8)
    await expect(items[0]).toHaveClass('d1-listItem--open')
    await expect(items[1]).toHaveClass('d1-listItem--selectedChild')
    await expect(items[2]).toHaveClass('d1-listItem--disabled')
    await expect(items[2]).toHaveClass('d1-listItem--selected')
    await expect(items[2]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[3].querySelector('.d1-listItem__loading')).toBeInTheDocument()
    await expect(items[3]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[4]).toHaveAttribute('data-divider', 'active')
    await expect(items[5]).toHaveClass('d1-listItem--selectionStyle')
    await expect(items[5]).toHaveClass('d1-listItem--controlPosition--start')
    await expect(items[5].querySelector('.d1-listItem__control')).toBeInTheDocument()
    await expect(items[6]).toHaveClass('d1-listItem--controlPosition--end')
    await expect(items[7].querySelector('.d1-listItem__control')).toBeInTheDocument()
  }
}
export const ListItemTestIconsAndBadges: Story = {
  name: 'Тест: Иконки, выравнивание, флаги и бейджи',
  render: () => ({
    components: { D1ListItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ListItem
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
          <D1ListItem
            label="Hidden icon and dot badge"
            icon="star"
            iconHide
            badgeDot
            :badgeAttrs="{ selected: true }"
          />
          <D1ListItem
            label="Center aligned icon"
            icon="home"
            iconAlign="center"
            :badge="5"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-listItem')
    await expect(items.length).toBe(3)
    await expect(items[0]).toHaveClass('d1-listItem--iconAlign--edge')
    await expect(items[0]).toHaveClass('d1-listItem--iconTop')
    await expect(items[0].querySelector('.d1-listItem__icon')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-listItem__trailing')).toBeInTheDocument()
    await expect(items[1].querySelector('.d1-listItem__icon')).toBeInTheDocument()
    await expect(items[1].querySelector('.d1-listItem__icon')?.className).toContain('--hide')
    await expect(items[1].querySelector('.d1-listItem__badge')).toBeInTheDocument()
    await expect(items[2]).toHaveClass('d1-listItem--iconAlign--center')
    await expect(items[2].querySelector('.d1-listItem__badge')).toHaveTextContent('5')
  }
}
export const ListItemTestTagsAriaFilterAndIds: Story = {
  name: 'Тест: Теги, ссылки, ARIA-роли, filterMode и пользовательские ID',
  render: () => ({
    components: { D1ListItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ListItem tag="button" label="Button tag" type="button" :index="0" :value="99" parent="grp-1" :listId="7" tabindex="0"/>
          <D1ListItem href="#anchor-target" label="Anchor link"/>
          <D1ListItem to="/target-route" label="Router target"/>
          <D1ListItem role="option" selected data-testid="option-role" label="Option role"/>
          <D1ListItem role="menuitemradio" selected label="Menuitem radio"/>
          <D1ListItem role="menuitemcheckbox" :selected="false" label="Menuitem checkbox"/>
          <D1ListItem
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
          <D1ListItem label="Visible filtered" highlight="vis" filterMode/>
          <D1ListItem label="Hidden filtered" highlight="vis" filterMode/>
          <D1ListItem label="Search metadata match" search="Vietnam +84" highlight="+84" :highlightLengthStart="1" filterMode/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const buttonItem = canvasElement.querySelector<HTMLElement>('button.d1-listItem')
    await expect(buttonItem).toBeInTheDocument()
    await expect(buttonItem).toHaveAttribute('data-value', '0')
    await expect(buttonItem).toHaveAttribute('data-parent', 'grp-1')
    await expect(buttonItem).toHaveAttribute('data-list-id', '7')
    await expect(buttonItem).toHaveAttribute('tabindex', '0')

    const anchorItem = canvasElement.querySelector<HTMLElement>('a.d1-listItem')
    await expect(anchorItem).toHaveAttribute('href', '#anchor-target')

    const optionItem = canvasElement.querySelector<HTMLElement>('[data-testid="option-role"]')
    await expect(optionItem).toHaveAttribute('aria-selected', 'true')

    const radioItem = canvasElement.querySelector<HTMLElement>('[role="menuitemradio"]')
    await expect(radioItem).toHaveAttribute('aria-checked', 'true')

    const checkboxItem = canvasElement.querySelector<HTMLElement>('[role="menuitemcheckbox"]')
    await expect(checkboxItem).toHaveAttribute('aria-checked', 'false')

    await expect(canvasElement.querySelector('#custom-label-id')).toHaveTextContent('Custom IDs item')
    await expect(canvasElement.querySelector('#custom-prefix-id')).toHaveTextContent('P')
    await expect(canvasElement.querySelector('#custom-suffix-id')).toHaveTextContent('S')
    await expect(canvasElement.querySelector('#custom-desc-id')).toHaveTextContent('D')
    await expect(canvasElement.querySelector('.d1-listItem__caption')).toHaveAttribute('aria-hidden', 'true')

    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-listItem')
    await expect(items.length).toBe(9)
    await expect(items[7]).toHaveAttribute('data-highlight', 'vis')
    await expect(items[8]).toHaveAttribute('data-highlight', '+84')
    await expect(items[8].querySelector('.d1-listItem__highlight')).toHaveTextContent('Search metadata match')
  }
}
export const ListItemTestLazy: Story = {
  name: 'Тест: Ленивый рендеринг с отступом и кэшированием высоты',
  render: () => ({
    components: { D1ListItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ListItem
            data-testid="list-item-lazy"
            label="Lazy item"
            lazy
            lazy-margin="128px 0px"
          />
          <D1ListItem
            data-testid="list-item-lazy-no-cache"
            label="Lazy item without height cache"
            lazy
            lazy-margin="64px 0px"
            :lazy-cache-height="false"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const lazyItem = canvasElement.querySelector('[data-testid="list-item-lazy"]')
      const lazyNoCacheItem = canvasElement.querySelector('[data-testid="list-item-lazy-no-cache"]')

      await expect(lazyItem).toHaveClass('d1-listItem--lazy')
      await expect(lazyNoCacheItem).toHaveClass('d1-listItem--lazy')
      await expect(lazyItem).toHaveTextContent('Lazy item')
      await expect(lazyNoCacheItem).toHaveTextContent('Lazy item without height cache')
    })
  }
}
// :story-items [!] System label / Системная метка
