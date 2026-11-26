import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SegmentControlItem component properties
 *
 * Описания свойств компонента SegmentControlItem
 */
export const wikiDescriptionsSegmentControlItem: StorybookComponentsDescriptionItem = {
  name: 'SegmentControlItem',
  description: {
    en: 'A versatile component for creating segment controls, tab controls, or navigation links. Supports icons, badges, labels, and various interactive states.',
    ru: 'Универсальный компонент для создания сегментированного управления, вкладок, навигационных ссылок. Поддерживает иконки, бейджи, метки и различные интерактивные состояния.'
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
      id: 'SegmentControlItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Segment control item</DesignComponent>
        </DesignSkeleton>
      `,
      play: `
await waitFor(() => {
  const item = canvasElement.querySelector('.design-component')
  expect(item).toBeInTheDocument()
  expect(item).toHaveTextContent('Segment control item')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'SegmentControlItemTestStatesAndEvents',
      name: {
        en: 'Test: States, links, ARIA attributes and click events',
        ru: 'Тест: Состояния, ссылки, ARIA-атрибуты и события клика'
      },
      propsName: ['selected', 'disabled', 'readonly', 'focus', 'open', 'href', 'tag', 'role', 'label', 'value'],
      setup: `
      const clickedSegmentValue = ref('')
      const onSegmentClick = (_event: MouseEvent, payload: EventClickValue) => {
        clickedSegmentValue.value = String(payload.value ?? '')
      }
      return { clickedSegmentValue, onSegmentClick }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="segment-item-clicked">{{ clickedSegmentValue }}</div>
          <div class="wiki-storybook-flex">
            <DesignComponent label="Selected" value="seg-selected" selected @click="onSegmentClick"/>
            <DesignComponent label="Disabled" value="seg-disabled" disabled selected @click="onSegmentClick"/>
            <DesignComponent label="Readonly" value="seg-readonly" readonly focus open @click="onSegmentClick"/>
            <DesignComponent label="Link" href="#segment-link"/>
            <DesignComponent :label="0" tag="span" role="menuitem"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)

await expect(items[0]).toHaveClass('design-component--selected')
await expect(items[0]).toHaveAttribute('aria-selected', 'true')
await expect(items[1]).toHaveClass('design-component--disabled')
await expect(items[1]).toHaveAttribute('aria-disabled', 'true')
await expect(items[2]).toHaveClass('design-component--readonly')
await expect(items[3].tagName).toBe('A')
await expect(items[4].tagName).toBe('SPAN')
await expect(items[4]).toHaveTextContent('0')

await step('Click active segment item and verify blocked disabled item', async () => {
  await userEvent.click(items[0])
  await expect(canvas.getByTestId('segment-item-clicked')).toHaveTextContent('seg-selected')
  await userEvent.click(items[1])
  await expect(canvas.getByTestId('segment-item-clicked')).toHaveTextContent('seg-selected')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SegmentControlItem'} type={'segmentControlItem'}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SegmentControlItemSkeleton}/>
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
Foundational interactive building block for segment control structures. Encapsulates a label, optional icons, and status indicators (badges) into a single semantic unit with integrated state management.
Features built-in support for selected, disabled, and loading (skeleton) states, along with automated navigation logic for href and router-link. Includes flexible tag rendering to support various HTML roles (button, a, li).
Controlled via label, icon, and badge props, with v-model or selected prop integration. Use within SegmentControl components to create cohesive, accessible navigation interfaces with consistent visual affordance and spatial organization.
    `,
    hide: true
  }
}
