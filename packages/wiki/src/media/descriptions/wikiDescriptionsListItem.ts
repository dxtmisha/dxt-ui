import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ListItem component properties
 *
 * Описания свойств компонента ListItem
 */
export const wikiDescriptionsListItem: StorybookComponentsDescriptionItem = {
  name: 'ListItem',
  description: {
    en: 'Versatile list item component for displaying structured content',
    ru: 'Универсальный компонент элемента списка для отображения структурированного контента'
  },
  possibilities: {
    en: [
      'multiple content areas: label, description, prefix, suffix, caption',
      'icon support with flexible positioning and alignment',
      'badge integration for status indicators',
      'interactive states: focus, open, selected, selectedChild, disabled, readonly',
      'selection styles: checkbox, radio, checkmark, and none with start/end control positioning',
      'search highlighting and filterMode visibility filtering',
      'progress and skeleton loading states',
      'ripple effect for enhanced user feedback',
      'flexible tag options: button, link, div, span, li',
      'built-in accessibility support',
      'customizable through design tokens'
    ],
    ru: [
      'множественные области контента: метка, описание, префикс, суффикс, подпись',
      'поддержка иконок с гибким позиционированием и выравниванием',
      'интеграция бейджей для индикаторов статуса',
      'интерактивные состояния: фокус, открытый, выбранный, выбранный дочерний, отключённый, только для чтения',
      'стили выбора: checkbox, radio, checkmark и none с позиционированием start/end',
      'подсветка совпадений поиска и фильтрация видимости filterMode',
      'состояния загрузки с прогрессом и скелетоном',
      'эффект пульсации для визуальной обратной связи',
      'гибкие варианты тегов: button, a, div, span, li',
      'встроенная поддержка доступности',
      'настраиваемый через токены дизайна'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
  `,
  play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { ListItemExpose as ListItemExposeType } from \'@dxtmisha/constructor/ListItem\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'ListItemBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent>Simple Item</DesignComponent>
            <DesignComponent icon="person">Item with Icon</DesignComponent>
            <DesignComponent description="Additional information">Item with Description</DesignComponent>
            <DesignComponent focus>Focus</DesignComponent>
            <DesignComponent selected>Selected</DesignComponent>
            <DesignComponent disabled>Disabled</DesignComponent>
            <DesignComponent readonly>Readonly</DesignComponent>
            <DesignComponent prefix="01" suffix="Info">With Prefix & Suffix</DesignComponent>
            <DesignComponent caption="Caption" description="Description text here">Full Content</DesignComponent>
            <DesignComponent icon="star" badge="new">Icon with Badge</DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(10)
await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('Simple Item')
await expect(items[2]).toHaveClass('design-component--description')
await expect(items[4]).toHaveClass('design-component--selected')
await expect(items[5]).toHaveAttribute('aria-disabled', 'true')
await expect(items[7].querySelector('.design-component__prefix')).toHaveTextContent('01')
await expect(items[7].querySelector('.design-component__suffix')).toHaveTextContent('Info')
await expect(items[8].querySelector('.design-component__caption')).toHaveTextContent('Caption')
      `
    },
    {
      id: 'ListItemHighlight',
      name: {
        en: 'Highlighting',
        ru: 'Выделение'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent highlight="search" label="Search result item"/>
            <DesignComponent highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
            <DesignComponent highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
            <DesignComponent highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)
await expect(items[0].querySelector('.design-component__highlight')).toHaveTextContent('Search')
await expect(items[1].querySelector('.design-component__highlight')).toHaveTextContent('Tex')
await expect(items[2].querySelector('.design-component__highlight')).toBeNull()
await expect(items[3].querySelector('.design-component__highlight')).toHaveTextContent('Example')
      `
    },
    {
      id: 'ListItemFill',
      name: {
        en: 'Fill',
        ru: 'Заливка'
      },
      propsName: ['fill'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent label="Default fill"/>
            <DesignComponent fill="#ff0000" label="Red fill"/>
            <DesignComponent fill="rgb(0, 128, 255)" label="Blue fill"/>
            <DesignComponent fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)
await expect(items[0]).not.toHaveClass('design-component--fill--custom')
await expect(items[1]).toHaveClass('design-component--fill--custom')
await expect(items[2]).toHaveClass('design-component--fill--custom')
await expect(items[3]).toHaveClass('design-component--fill--custom')
      `
    },
    {
      id: 'ListItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</DesignComponent>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0].querySelector('.design-component__label')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__description')).toBeInTheDocument()
      `
    },
    {
      id: 'ListItemSlots',
      name: {
        en: 'Slots',
        ru: 'Слоты'
      },
      template: `
        <DesignComponent>
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
        </DesignComponent>
      `,
      play: `
await expect(canvasElement.querySelector('[data-testid="slot-leading"]')).toHaveTextContent('L')
await expect(canvasElement.querySelector('.design-component__prefix [data-testid="slot-prefix"]')).toHaveTextContent('[PRE]')
await expect(canvasElement.querySelector('.design-component__label [data-testid="slot-default"]')).toHaveTextContent('Default label slot')
await expect(canvasElement.querySelector('.design-component__caption [data-testid="slot-caption"]')).toHaveTextContent('Caption')
await expect(canvasElement.querySelector('.design-component__suffix [data-testid="slot-suffix"]')).toHaveTextContent('SUF')
await expect(canvasElement.querySelector('.design-component__description [data-testid="slot-description"]')).toHaveTextContent('Description slot')
await expect(canvasElement.querySelector('.design-component__body [data-testid="slot-body"]')).toHaveTextContent('Extra body slot')
await expect(canvasElement.querySelector('.design-component__trailing [data-testid="slot-trailing"]')).toHaveTextContent('Trailing')
      `
    },
    {
      id: 'ListItemEvents',
      name: {
        en: 'Events (click & clickLite)',
        ru: 'События (click и clickLite)'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Clickable List Item"
            value="item-42"
            :detail="{ section: 'actions' }"
            @click="onClickItem"
            @click-lite="onClickLiteItem"
          />
          <div class="wiki-storybook-card" data-testid="event-output">{{ lastEventText }}</div>
        </div>
      `,
      play: `
const itemElement = canvasElement.querySelector<HTMLElement>('.design-component')
const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="event-output"]')
await userEvent.click(itemElement!)
await expect(outputElement).toHaveTextContent('click:item-42:click')
      `
    },
    {
      id: 'ListItemExpose',
      name: {
        en: 'Expose (getValue & getDetail)',
        ru: 'Экспонируемые методы (getValue и getDetail)'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="readExposedData">Inspect expose</button>
            <div class="wiki-storybook-card" data-testid="expose-output">{{ exposedResult }}</div>
          </div>
          <DesignComponent
            ref="itemReference"
            label="Exposed List Item"
            value="exposed-value"
            :detail="{ role: 'editor' }"
          />
        </div>
      `,
      play: `
const inspectButton = canvasElement.querySelector<HTMLButtonElement>('button')
const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')
await userEvent.click(inspectButton!)
await expect(outputElement).toHaveTextContent('"value":"exposed-value"')
await expect(outputElement).toHaveTextContent('"role":"editor"')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & combinations ONLY)
    // =========================================================================
    {
      id: 'ListItemTestStatesAndSelection',
      name: {
        en: 'Test: States, dividers, loading and selection styles',
        ru: 'Тест: Состояния, разделители, загрузка и стили выбора'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Open item" open/>
          <DesignComponent label="Selected child" selectedChild/>
          <DesignComponent label="Disabled selected" disabled selected/>
          <DesignComponent label="Loading item" loading/>
          <DesignComponent label="Divider item" divider/>
          <DesignComponent label="Checkbox start" selectionStyle="checkbox" controlPosition="start" selected :checkboxAttrs="{ name: 'cb-1' }"/>
          <DesignComponent label="Radio end" selectionStyle="radio" controlPosition="end" selected :radioAttrs="{ name: 'rb-1' }"/>
          <DesignComponent label="Checkmark selected" selectionStyle="checkmark" selected iconCheckbox="check"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(8)
await expect(items[0]).toHaveClass('design-component--open')
await expect(items[1]).toHaveClass('design-component--selectedChild')
await expect(items[2]).toHaveClass('design-component--disabled')
await expect(items[2]).toHaveClass('design-component--selected')
await expect(items[2]).toHaveAttribute('aria-disabled', 'true')
await expect(items[3].querySelector('.design-component__loading')).toBeInTheDocument()
await expect(items[3]).toHaveAttribute('aria-disabled', 'true')
await expect(items[4]).toHaveAttribute('data-divider', 'active')
await expect(items[5]).toHaveClass('design-component--selectionStyle')
await expect(items[5]).toHaveClass('design-component--controlPosition--start')
await expect(items[5].querySelector('.design-component__control')).toBeInTheDocument()
await expect(items[6]).toHaveClass('design-component--controlPosition--end')
await expect(items[7].querySelector('.design-component__control')).toBeInTheDocument()
      `
    },
    {
      id: 'ListItemTestIconsAndBadges',
      name: {
        en: 'Test: Icons, alignment, trailing flags and badges',
        ru: 'Тест: Иконки, выравнивание, флаги и бейджи'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
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
          <DesignComponent
            label="Hidden icon and dot badge"
            icon="star"
            iconHide
            badgeDot
            :badgeAttrs="{ selected: true }"
          />
          <DesignComponent
            label="Center aligned icon"
            icon="home"
            iconAlign="center"
            :badge="5"
          />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).toHaveClass('design-component--iconAlign--edge')
await expect(items[0]).toHaveClass('design-component--iconTop')
await expect(items[0].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__trailing')).toBeInTheDocument()
await expect(items[1].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[1].querySelector('.design-component__icon')?.className).toContain('--hide')
await expect(items[1].querySelector('.design-component__badge')).toBeInTheDocument()
await expect(items[2]).toHaveClass('design-component--iconAlign--center')
await expect(items[2].querySelector('.design-component__badge')).toHaveTextContent('5')
      `
    },
    {
      id: 'ListItemTestTagsAriaFilterAndIds',
      name: {
        en: 'Test: Tags, links, ARIA roles, filterMode and custom IDs',
        ru: 'Тест: Теги, ссылки, ARIA-роли, filterMode и пользовательские ID'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent tag="button" label="Button tag" type="button" :index="0" :value="99" parent="grp-1" :listId="7" tabindex="0"/>
          <DesignComponent href="#anchor-target" label="Anchor link"/>
          <DesignComponent to="/target-route" label="Router target"/>
          <DesignComponent role="option" selected data-testid="option-role" label="Option role"/>
          <DesignComponent role="menuitemradio" selected label="Menuitem radio"/>
          <DesignComponent role="menuitemcheckbox" :selected="false" label="Menuitem checkbox"/>
          <DesignComponent
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
          <DesignComponent label="Visible filtered" highlight="vis" filterMode/>
          <DesignComponent label="Hidden filtered" highlight="vis" filterMode/>
        </div>
      `,
      play: `
const buttonItem = canvasElement.querySelector<HTMLElement>('button.design-component')
await expect(buttonItem).toBeInTheDocument()
await expect(buttonItem).toHaveAttribute('data-value', '0')
await expect(buttonItem).toHaveAttribute('data-parent', 'grp-1')
await expect(buttonItem).toHaveAttribute('data-list-id', '7')
await expect(buttonItem).toHaveAttribute('tabindex', '0')

const anchorItem = canvasElement.querySelector<HTMLElement>('a.design-component')
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
await expect(canvasElement.querySelector('.design-component__caption')).toHaveAttribute('aria-hidden', 'true')

const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(8)
await expect(items[7]).toHaveAttribute('data-highlight', 'vis')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListItem'} type={'basic'}/>
<Canvas of={Component.ListItemBasic}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.ListItemHighlight}/>

<StorybookDescriptions componentName={'ListItem'} type={'fill'}/>
<Canvas of={Component.ListItemFill}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ListItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<Canvas of={Component.ListItemEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
<Canvas of={Component.ListItemExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slots'}/>
<Canvas of={Component.ListItemSlots}/>
    `
  },
  ai: {
    description: `
Versatile structural component for rendering items within lists, menus, or navigation bars. Provides a standardized layout with high-density content support for labels, descriptions, and metadata.
Features dedicated slots for leading, prefix, default (label), caption, suffix, description, body, and trailing. Includes built-in support for icons, badges, selection controls (checkbox, radio, checkmark), search highlighting/filtering, loading progress, skeleton states, and ripple effects.
Controlled via label, description, selectionStyle, selected, and href/to props; renders as an <a> tag when href is provided. Use for building navigation menus, data-rich list rows, or selectable list items.
    `
  }
}
