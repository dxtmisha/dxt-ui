import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ButtonGroup component properties
 *
 * Описания свойств компонента ButtonGroup
 */
export const wikiDescriptionsButtonGroup: StorybookComponentsDescriptionItem = {
  name: 'ButtonGroup',
  description: {
    en: 'Accessible container component for grouping multiple buttons with shared attributes, orientation, wrapping, and click events',
    ru: 'Доступный компонент-контейнер для группировки кнопок с общими атрибутами, ориентацией, переносом и событиями клика'
  },
  possibilities: {
    en: [
      'horizontal and vertical orientations with optional multi-line wrapping (orientation, wrap)',
      'accessible role="group" container semantics with customizable role and ariaLabel',
      'forwarding shared properties to all nested buttons (buttonAttrs) and skeleton loading (isSkeleton)',
      'rendering buttons from a data array (list) or custom #default slot with unified click events'
    ],
    ru: [
      'горизонтальная и вертикальная ориентация с опциональным переносом строк (orientation, wrap)',
      'доступная семантика контейнера role="group" с настраиваемыми role и ariaLabel',
      'передача общих свойств всем кнопкам (buttonAttrs) и состояние загрузки скелетона (isSkeleton)',
      'рендеринг кнопок из массива данных (list) или слота #default с едиными событиями клика'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const group = canvasElement.querySelector('.design-component')
await expect(group).toBeInTheDocument()
await expect(group).toHaveAttribute('role', 'group')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ButtonGroupSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      components: ['Button'],
      template: `
        <DesignComponent data-testid="bg-slots" aria-label="Custom slot actions">
          <template #default>
            <DesignButton label="Save" />
            <DesignButton label="Cancel" />
          </template>
        </DesignComponent>
      `,
      play: `
const group = canvasElement.querySelector('[data-testid="bg-slots"]')
await expect(group).toHaveAttribute('role', 'group')
await expect(group).toHaveAttribute('aria-label', 'Custom slot actions')
await expect(group?.querySelectorAll('button').length).toBe(2)
      `
    },
    {
      id: 'ButtonGroupSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      propsName: ['isSkeleton', 'list'],
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            data-testid="bg-skeleton"
            isSkeleton
            :list="[
              { label: 'First action' },
              { label: 'Second action' }
            ]"
          />
        </DesignSkeleton>
      `,
      play: `
const group = canvasElement.querySelector('[data-testid="bg-skeleton"]')
await expect(group?.querySelectorAll('button').length).toBe(2)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'ButtonGroupTestEventsAndDisabled',
      name: {
        en: 'Test: Click events (numeric zero) & disabled button guard',
        ru: 'Тест: События клика (числовой ноль) и блокировка disabled'
      },
      propsName: ['list', 'buttonAttrs', 'orientation', 'wrap'],
      setup: `
      const lastValue = ref<unknown>('none')
      return {
        lastValue,
        onGroupClickLite: (payload: { value?: unknown }) => {
          lastValue.value = payload?.value
        }
      }
      `,
      template: `
        <div>
          <DesignComponent
            data-testid="bg-events"
            orientation="vertical"
            wrap
            :button-attrs="{ inverse: true }"
            :list="[
              { label: 'Zero Action', value: 0 },
              { label: 'Disabled Action', value: 'blocked', disabled: true }
            ]"
            @click-lite="onGroupClickLite"
          />
          <output data-testid="bg-last-value">{{ String(lastValue) }}</output>
        </div>
      `,
      play: `
const buttons = canvasElement.querySelectorAll('[data-testid="bg-events"] button')
await expect(buttons.length).toBe(2)
if (buttons[0]) {
  await userEvent.click(buttons[0])
}
await expect(canvasElement.querySelector('[data-testid="bg-last-value"]')).toHaveTextContent('0')

if (buttons[1]) {
  await expect(buttons[1]).toBeDisabled()
}
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ButtonGroup'} type={'buttonGroup'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ButtonGroupSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<Canvas of={Component.ButtonGroupSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent
    v-bind="args"
    aria-label="Action group"
    :list="[
      { label: 'Back', value: 'back' },
      { label: 'Confirm', value: 'confirm' }
    ]"
  />
</div>
    `,
    description: `
Accessible group container (role="group" by default) for organizing multiple Button components horizontally or vertically with optional multi-line wrapping (wrap). Buttons can be configured declaratively via the list array with shared buttonAttrs (such as inverse, disabled, icon, etc.), or placed inside the default slot. Supports skeleton loading state (isSkeleton), layout area context (area), customizable role/ariaLabel, and unified click / clickLite events.
    `
  }
}
