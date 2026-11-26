import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for NavigationItem component properties
 *
 * Описания свойств компонента NavigationItem
 */
export const wikiDescriptionsNavigationItem: StorybookComponentsDescriptionItem = {
  name: 'NavigationItem',
  description: {
    en: 'Specialized navigation list item component for navigation bars and menus',
    ru: 'Специализированный элемент навигационного списка для навигационных панелей и меню'
  },
  possibilities: {
    en: [
      'inherited functionality from ListItem',
      'navigation item semantics defaulting to an anchor tag with href and router to support',
      'multiple content areas: label, description, prefix, suffix, caption',
      'icon support with flexible positioning and alignment (icon, iconTrailing, iconAlign, iconTop)',
      'badge integration for status indicators and notification counters',
      'interactive states: focus, open, selected, selectedChild, disabled, readonly',
      'selection styles: checkbox, radio, checkmark, and none with start/end control positioning',
      'search highlighting and filterMode visibility filtering',
      'progress and skeleton loading states',
      'lazy content rendering with viewport margin and height caching (lazy, lazyMargin, lazyCacheHeight)',
      'ripple effect for visual click feedback',
      'customizable tags (a, button, div, span, li) and built-in ARIA support',
      'click and clickLite events plus getValue and getDetail exposed methods'
    ],
    ru: [
      'наследуемая функциональность от ListItem',
      'семантика элемента навигации с тегом ссылки по умолчанию и поддержкой href и роутера to',
      'множественные области контента: метка, описание, префикс, суффикс, подпись',
      'поддержка иконок с гибким позиционированием и выравниванием (icon, iconTrailing, iconAlign, iconTop)',
      'интеграция бейджей для индикаторов статуса и счётчиков уведомлений',
      'интерактивные состояния: фокус, открытый, выбранный, выбранный дочерний, отключённый, только для чтения',
      'стили выбора: checkbox, radio, checkmark и none с позиционированием start/end',
      'подсветка совпадений поиска и фильтрация видимости filterMode',
      'состояния загрузки с прогрессом и скелетоном',
      'ленивый рендеринг содержимого с настройкой отступа и кэшированием высоты (lazy, lazyMargin, lazyCacheHeight)',
      'эффект пульсации для визуальной обратной связи при клике',
      'настраиваемые теги (a, button, div, span, li) и встроенная поддержка ARIA',
      'события click и clickLite, а также экспонируемые методы getValue и getDetail'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const navigationItem = canvasElement.querySelector('.design-component')
await expect(navigationItem).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { NavigationItemExpose as NavigationItemExposeType } from \'@dxtmisha/constructor/NavigationItem\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'NavigationItemBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent>Simple Item</DesignComponent>
            <DesignComponent icon="home">Home</DesignComponent>
            <DesignComponent description="Additional information">Item with Description</DesignComponent>
            <DesignComponent focus>Focus</DesignComponent>
            <DesignComponent open>Open</DesignComponent>
            <DesignComponent selected>Selected</DesignComponent>
            <DesignComponent selectedChild>Selected Child</DesignComponent>
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
await expect(items.length).toBe(12)
await expect(items[0].tagName).toBe('A')
await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('Simple Item')
await expect(items[2]).toHaveClass('design-component--description')
await expect(items[3]).toHaveClass('design-component--focus')
await expect(items[4]).toHaveClass('design-component--open')
await expect(items[5]).toHaveClass('design-component--selected')
await expect(items[6]).toHaveClass('design-component--selectedChild')
await expect(items[7]).toHaveAttribute('aria-disabled', 'true')
await expect(items[8]).toHaveClass('design-component--readonly')
await expect(items[9].querySelector('.design-component__prefix')).toHaveTextContent('01')
await expect(items[9].querySelector('.design-component__suffix')).toHaveTextContent('Info')
await expect(items[10].querySelector('.design-component__caption')).toHaveTextContent('Caption')
await expect(items[11].querySelector('.design-component__badge')).toHaveTextContent('new')
      `
    },
    {
      id: 'NavigationItemHighlight',
      name: {
        en: 'Highlighting',
        ru: 'Выделение'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent highlight="nav" label="Navigation link item"/>
            <DesignComponent highlight="set" :highlightLengthStart="3" label="Settings panel"/>
            <DesignComponent highlight="se" :highlightLengthStart="3" label="Settings without highlighting (too short)"/>
            <DesignComponent highlight="example" :highlightLengthStart="2" label="Example navigation label"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)
await expect(items[0].querySelector('.design-component__highlight')).toHaveTextContent('Nav')
await expect(items[1].querySelector('.design-component__highlight')).toHaveTextContent('Set')
await expect(items[2].querySelector('.design-component__highlight')).toBeNull()
await expect(items[3].querySelector('.design-component__highlight')).toHaveTextContent('Example')
      `
    },
    {
      id: 'NavigationItemFill',
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
      id: 'NavigationItemSkeleton',
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
            description="A bit longer description for the navigation item component."
          >Navigation Item Label Example</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the navigation item."
          >Very Long Navigation Item Label Example for Skeleton</DesignComponent>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0].querySelector('.design-component__label')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__description')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__caption')).toBeInTheDocument()
      `
    },
    {
      id: 'NavigationItemSlots',
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
      id: 'NavigationItemEvents',
      name: {
        en: 'Events (click & clickLite)',
        ru: 'События (click и clickLite)'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
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
      `,
      play: `
const itemElement = canvasElement.querySelector<HTMLElement>('.design-component')
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
      `
    },
    {
      id: 'NavigationItemExpose',
      name: {
        en: 'Expose (getValue & getDetail)',
        ru: 'Экспонируемые методы (getValue и getDetail)'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="readExposedData">Inspect expose</button>
            <div class="wiki-storybook-card" data-testid="expose-output">{{ exposedResult }}</div>
          </div>
          <DesignComponent
            ref="itemReference"
            label="Exposed Navigation Item"
            value="nav-exposed"
            :detail="{ section: 'sidebar', role: 'editor' }"
          />
        </div>
      `,
      play: `
const inspectButton = canvasElement.querySelector<HTMLButtonElement>('button')
const exposeOutput = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')
await userEvent.click(inspectButton!)
await expect(exposeOutput).toHaveTextContent('"value":"nav-exposed"')
await expect(exposeOutput).toHaveTextContent('"section":"sidebar"')
await expect(exposeOutput).toHaveTextContent('"role":"editor"')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & combinations ONLY)
    // =========================================================================
    {
      id: 'NavigationItemTestStatesAndSelection',
      name: {
        en: 'Test: States, dividers, loading, blocked clicks and selection styles',
        ru: 'Тест: Состояния, разделители, загрузка, блокировка кликов и стили выбора'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Open focus selectedChild" open focus selectedChild/>
          <DesignComponent
            data-testid="disabled-selected-item"
            label="Disabled selected"
            disabled
            selected
            @click="onBlockedClick"
            @click-lite="onBlockedClickLite"
          />
          <DesignComponent label="Readonly selected" readonly selected/>
          <DesignComponent
            data-testid="loading-selected-item"
            label="Loading selected"
            loading
            selected
            @click="onBlockedClick"
            @click-lite="onBlockedClickLite"
          />
          <DesignComponent label="Divider disabled" divider disabled/>
          <DesignComponent label="Checkbox start" selectionStyle="checkbox" controlPosition="start" selected :checkboxAttrs="{ name: 'navigation-checkbox-1' }"/>
          <DesignComponent label="Radio end" selectionStyle="radio" controlPosition="end" selected :radioAttrs="{ name: 'navigation-radio-1' }"/>
          <DesignComponent label="Checkmark selected" selectionStyle="checkmark" selected iconCheckbox="check"/>
          <DesignComponent label="Checkmark unselected" selectionStyle="checkmark" :selected="false" iconCheckbox="check"/>
          <div class="wiki-storybook-card" data-testid="blocked-click-count">{{ blockedClickCount }}</div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(9)

await expect(items[0]).toHaveClass('design-component--open')
await expect(items[0]).toHaveClass('design-component--focus')
await expect(items[0]).toHaveClass('design-component--selectedChild')

await expect(items[1]).toHaveClass('design-component--disabled')
await expect(items[1]).toHaveClass('design-component--selected')
await expect(items[1]).toHaveAttribute('aria-disabled', 'true')
await expect(items[1]).toHaveAttribute('aria-selected', 'true')

await expect(items[2]).toHaveClass('design-component--readonly')
await expect(items[2]).toHaveClass('design-component--selected')

await expect(items[3].querySelector('.design-component__loading')).toBeInTheDocument()
await expect(items[3]).toHaveAttribute('aria-disabled', 'true')

await expect(items[4]).toHaveAttribute('data-divider', 'active')
await expect(items[4]).toHaveAttribute('aria-disabled', 'true')

await expect(items[5]).toHaveClass('design-component--selectionStyle')
await expect(items[5]).toHaveClass('design-component--selectionStyle--checkbox')
await expect(items[5]).toHaveClass('design-component--controlPosition--start')
await expect(items[5]).not.toHaveClass('design-component--selected')
await expect(items[5].querySelector('.design-component__control')).toBeInTheDocument()

await expect(items[6]).toHaveClass('design-component--selectionStyle--radio')
await expect(items[6]).toHaveClass('design-component--controlPosition--end')
await expect(items[6].querySelector('.design-component__control')).toBeInTheDocument()

await expect(items[7]).toHaveClass('design-component--selectionStyle--checkmark')
await expect(items[7].querySelector('.design-component__control')).toBeInTheDocument()

await expect(items[8]).toHaveClass('design-component--selectionStyle--checkmark')
await expect(items[8].querySelector('.design-component__control')).toBeNull()

const blockedClickCounter = canvasElement.querySelector<HTMLElement>('[data-testid="blocked-click-count"]')
await userEvent.click(items[1])
await userEvent.click(items[3])
await expect(blockedClickCounter).toHaveTextContent('0')
      `
    },
    {
      id: 'NavigationItemTestIconsBadgesAndNumericZero',
      name: {
        en: 'Test: Icons, alignment, trailing flags, badges and numeric zero',
        ru: 'Тест: Иконки, выравнивание, флаги, бейджи и числовой ноль'
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
          <DesignComponent
            :label="0"
            :caption="0"
            :description="0"
            :badge="0"
            :value="0"
            :listId="0"
          />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--iconAlign--edge')
await expect(items[0]).toHaveClass('design-component--iconTop')
await expect(items[0].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__trailing')).toBeInTheDocument()

await expect(items[1].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[1].querySelector('.design-component__icon')?.className).toContain('--hide')
await expect(items[1].querySelector('.design-component__badge')).toBeInTheDocument()

await expect(items[2]).toHaveClass('design-component--iconAlign--center')
await expect(items[2].querySelector('.design-component__badge')).toHaveTextContent('5')

await expect(items[3]).toHaveAttribute('data-value', '0')
await expect(items[3]).toHaveAttribute('data-list-id', '0')
await expect(items[3].querySelector('.design-component__label')).toHaveTextContent('0')
await expect(items[3].querySelector('.design-component__caption')).toHaveTextContent('0')
await expect(items[3].querySelector('.design-component__description')).toHaveTextContent('0')
await expect(items[3].querySelector('.design-component__badge')).toHaveTextContent('0')
      `
    },
    {
      id: 'NavigationItemTestTagsAriaFilterAndKeyboard',
      name: {
        en: 'Test: Tags, links, ARIA roles, filterMode, keyboard and custom IDs',
        ru: 'Тест: Теги, ссылки, ARIA-роли, filterMode, клавиатура и пользовательские ID'
      },
      setup: `
      const keyboardOutput = ref<string>('none')
      const onKeyboardClickLite = (value: EventClickValue) => {
        keyboardOutput.value = 'enter:' + String(value.value)
      }
      return {
        keyboardOutput,
        onKeyboardClickLite
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent data-testid="default-anchor" label="Default anchor tag"/>
          <DesignComponent
            tag="button"
            label="Button tag"
            :index="0"
            :value="99"
            parent="group-1"
            :listId="7"
            tabindex="0"
            @click-lite="onKeyboardClickLite"
          />
          <DesignComponent href="#anchor-target" label="Anchor link"/>
          <DesignComponent to="/target-route" label="Router target"/>
          <DesignComponent role="option" selected data-testid="option-role" label="Option role"/>
          <DesignComponent role="menuitem" :selected="false" data-testid="menuitem-role" label="Menuitem role"/>
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
          <DesignComponent label="Search metadata match" search="Vietnam +84" highlight="+84" :highlightLengthStart="1" filterMode/>
          <DesignComponent label="Below threshold" highlight="b" :highlightLengthStart="3" filterMode/>
          <div class="wiki-storybook-card" data-testid="keyboard-output">{{ keyboardOutput }}</div>
        </div>
      `,
      play: `
const defaultAnchor = canvasElement.querySelector<HTMLElement>('[data-testid="default-anchor"]')
await expect(defaultAnchor?.tagName).toBe('A')
await expect(defaultAnchor).toHaveAttribute('role', 'option')
await expect(defaultAnchor).toHaveAttribute('tabindex', '-1')

const buttonItem = canvasElement.querySelector<HTMLElement>('button.design-component')
await expect(buttonItem).toBeInTheDocument()
await expect(buttonItem).toHaveAttribute('data-value', '0')
await expect(buttonItem).toHaveAttribute('data-parent', 'group-1')
await expect(buttonItem).toHaveAttribute('data-list-id', '7')
await expect(buttonItem).toHaveAttribute('tabindex', '0')

buttonItem!.focus()
await userEvent.keyboard('{Enter}')
await expect(canvasElement.querySelector('[data-testid="keyboard-output"]')).toHaveTextContent('enter:99')

const anchorItem = canvasElement.querySelector<HTMLElement>('a[href="#anchor-target"].design-component')
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
await expect(canvasElement.querySelector('.design-component__caption')).toHaveAttribute('aria-hidden', 'true')

const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(12)
await expect(items[9]).toHaveAttribute('data-highlight', 'vis')
await expect(items[9].querySelector('.design-component__highlight')).toHaveTextContent('Vis')
await expect(items[10]).toHaveAttribute('data-highlight', '+84')
await expect(items[10].querySelector('.design-component__highlight')).toHaveTextContent('Search metadata match')
await expect(items[11]).toHaveAttribute('data-highlight', 'b')
await expect(items[11].querySelector('.design-component__highlight')).toBeNull()
      `
    },
    {
      id: 'NavigationItemTestLazy',
      name: {
        en: 'Test: Lazy rendering with margin and height caching',
        ru: 'Тест: Ленивый рендеринг с отступом и кэшированием высоты'
      },
      propsName: ['lazy', 'lazyMargin', 'lazyCacheHeight'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            data-testid="navigation-item-lazy"
            label="Lazy navigation item"
            lazy
            lazy-margin="128px 0px"
          />
          <DesignComponent
            data-testid="navigation-item-lazy-no-cache"
            label="Lazy navigation item without height cache"
            lazy
            lazy-margin="64px 0px"
            :lazy-cache-height="false"
          />
        </div>
      `,
      play: `
await waitFor(async () => {
  const lazyItem = canvasElement.querySelector('[data-testid="navigation-item-lazy"]')
  const lazyNoCacheItem = canvasElement.querySelector('[data-testid="navigation-item-lazy-no-cache"]')

  await expect(lazyItem).toHaveClass('design-component--lazy')
  await expect(lazyNoCacheItem).toHaveClass('design-component--lazy')
  await expect(lazyItem).toHaveTextContent('Lazy navigation item')
  await expect(lazyNoCacheItem).toHaveTextContent('Lazy navigation item without height cache')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'NavigationItem'} type={'navigationItem'}/>
<Canvas of={Component.NavigationItemBasic}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.NavigationItemHighlight}/>

<StorybookDescriptions componentName={'ListItem'} type={'fill'}/>
<Canvas of={Component.NavigationItemFill}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.NavigationItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<Canvas of={Component.NavigationItemEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
<Canvas of={Component.NavigationItemExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slots'}/>
<Canvas of={Component.NavigationItemSlots}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args" icon="home" label="Home" description="Dashboard overview"/>
</div>
    `,
    description: `
Specialized navigation item component inheriting from ListItem, designed specifically for application sidebars, navigation drawers, and header menus.
Defaults to an <a> tag with role="option" and inherits all ListItem layout features including leading, prefix, default, caption, suffix, description, body, and trailing slots, icons, badges, selection controls (checkbox, radio, checkmark), search highlighting/filtering, lazy rendering (lazy, lazyMargin, lazyCacheHeight), loading progress, skeleton states, click/clickLite events, getValue/getDetail expose methods, and ripple click effects.
Used standalone or in combination with NavigationList to construct structured navigation trees.
    `,
    hide: true
  }
}
