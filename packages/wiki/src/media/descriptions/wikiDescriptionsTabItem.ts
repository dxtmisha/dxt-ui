import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TabItem component properties
 *
 * Описания свойств компонента TabItem
 */
export const wikiDescriptionsTabItem: StorybookComponentsDescriptionItem = {
  name: 'TabItem',
  description: {
    en: 'A versatile component for creating tabs, navigation links, or list items. Supports icons, badges, labels, and various interactive states.',
    ru: 'Универсальный компонент для создания вкладок, навигационных ссылок или элементов списка. Поддерживает иконки, бейджи, метки и различные интерактивные состояния.'
  },
  possibilities: {
    en: [
      'displaying a label (`label`)',
      'leading and trailing icons (`icon`, `iconTrailing`)',
      'integrated badge support (`badge`)',
      'selection state (`selected`)',
      'disabled and readonly states (`disabled`, `readonly`)',
      'navigation support (`href`, `to`)',
      'customizable root tag (`tag`) and ARIA role (`role`)',
      'ripple effect on click',
      'skeleton loading state'
    ],
    ru: [
      'отображение метки (`label`)',
      'иконки слева и справа (`icon`, `iconTrailing`)',
      'встроенная поддержка бейджа (`badge`)',
      'состояние выбора (`selected`)',
      'отключенное и readonly состояния (`disabled`, `readonly`)',
      'поддержка навигации (`href`, `to`)',
      'настраиваемый корневой тег (`tag`) и ARIA-роль (`role`)',
      'эффект ряби при клике',
      'состояние загрузки (скелетон)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\''
  ],
  render: `
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).toHaveAttribute('role', 'tab')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TabItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Tab item</DesignComponent>
        </DesignSkeleton>
      `,
      play: `
await waitFor(() => {
  const item = canvasElement.querySelector('.design-component')
  expect(item).toBeInTheDocument()
  expect(item).toHaveTextContent('Tab item')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'TabItemTestStates',
      name: {
        en: 'Test: States, ARIA attributes and combined modifiers',
        ru: 'Тест: Состояния, ARIA-атрибуты и комбинированные модификаторы'
      },
      propsName: ['selected', 'disabled', 'readonly', 'focus', 'open', 'adaptive', 'container'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">selected</div>
            <DesignComponent label="Selected Tab" selected/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">disabled + selected</div>
            <DesignComponent label="Disabled Selected" disabled selected/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">readonly + focus + open</div>
            <DesignComponent label="Readonly Focus Open" readonly focus open/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">adaptive iconAlways + icons + badge</div>
            <DesignComponent label="Adaptive" icon="home" iconTrailing="chevron_right" badge="3" adaptive="iconAlways"/>
          </div>
        </div>
      `,
      play: `
await waitFor(() => {
  const items = canvasElement.querySelectorAll('.design-component')
  expect(items.length).toBe(4)

  expect(items[0]).toHaveClass('design-component--selected')
  expect(items[0]).toHaveAttribute('aria-selected', 'true')
  expect(items[0]).toHaveAttribute('type', 'button')

  expect(items[1]).toHaveClass('design-component--disabled')
  expect(items[1]).toHaveClass('design-component--selected')
  expect(items[1]).toHaveAttribute('aria-disabled', 'true')

  expect(items[2]).toHaveClass('design-component--readonly')
  expect(items[2]).toHaveClass('design-component--focus')
  expect(items[2]).toHaveClass('design-component--open')

  expect(items[3]).toHaveClass('design-component--adaptive--iconAlways')
})
      `
    },
    {
      id: 'TabItemTestLinksAndEvents',
      name: {
        en: 'Test: Tags, links, click events and zero label',
        ru: 'Тест: Теги, ссылки, события клика и нулевая метка'
      },
      propsName: ['tag', 'href', 'role', 'label', 'value', 'detail'],
      setup: `
      const lastClickedValue = ref('')
      const onTabClick = (_event: MouseEvent, payload: EventClickValue) => {
        lastClickedValue.value = String(payload.value ?? '')
      }
      return { lastClickedValue, onTabClick }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="tab-item-event-value">{{ lastClickedValue }}</div>
          <div class="wiki-storybook-flex">
            <DesignComponent label="Action Tab" value="tab-action" @click="onTabClick"/>
            <DesignComponent label="Blocked Tab" value="tab-blocked" disabled @click="onTabClick"/>
            <DesignComponent label="Link Tab" href="#tab-section"/>
            <DesignComponent :label="0" tag="span" role="menuitem"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)

await expect(items[2].tagName).toBe('A')
await expect(items[2]).toHaveAttribute('href', '#tab-section')
await expect(items[3].tagName).toBe('SPAN')
await expect(items[3]).toHaveAttribute('role', 'menuitem')
await expect(items[3]).toHaveTextContent('0')

await step('Click enabled tab item emits click payload', async () => {
  await userEvent.click(items[0])
  await expect(canvas.getByTestId('tab-item-event-value')).toHaveTextContent('tab-action')
})

await step('Click disabled tab item does not emit click', async () => {
  await userEvent.click(items[1])
  await expect(canvas.getByTestId('tab-item-event-value')).toHaveTextContent('tab-action')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TabItem'} type={'tabItem'}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TabItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Foundational interactive building block for multi-item navigation structures like tabs, list menus, and sidebars. Encapsulates a label, optional icons, and status indicators (badges) into a single semantic unit with integrated state management.
Features built-in support for selected, disabled, and loading (skeleton) states, along with automated navigation logic for href and router-link. Includes a Material-style ripple effect for high-polish click feedback and flexible tag rendering to support various HTML roles (button, a, li).
Controlled via label, icon, and badge props, with v-model or selected prop integration. Use within Tabs or List components to create cohesive, accessible navigation interfaces with consistent visual affordance and spatial organization.
    `,
    hide: true
  }
}
