import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Actions component properties
 *
 * Описания свойств компонента Actions
 */
export const wikiDescriptionsActions: StorybookComponentsDescriptionItem = {
  name: 'Actions',
  description: {
    en: 'A flexible layout container for action buttons with primary and secondary groupings, alignment modes, automatic spacing, and adaptive behavior.',
    ru: 'Гибкий компонент-контейнер для кнопок действий с разделением на основную и вторичную группы, выравниванием, автоматическим разделителем и адаптивным поведением.'
  },
  possibilities: {
    en: [
      'organizes action buttons into primary and secondary groups',
      'supports multiple alignment modes: left, right, center, block, auto',
      'flexible layout adapting to viewports and container queries',
      'automatic spacer between primary and secondary button groups',
      'customizable shared button attributes for each group',
      'dual rendering support via data arrays and template slots'
    ],
    ru: [
      'организует кнопки действий в основную и вторичную группы',
      'поддерживает режимы выравнивания: left, right, center, block, auto',
      'гибкая раскладка с адаптацией к экрану и container queries',
      'автоматический спейсер между основной и вторичной группами кнопок',
      'настраиваемые общие атрибуты кнопок для каждой группы',
      'двойной рендеринг: через массивы данных и слоты шаблона'
    ]
  },
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
    const component = canvasElement.querySelector('.design-component')
    await expect(component).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/slots)
    // =========================================================================
    {
      id: 'ActionsList',
      name: {
        en: 'Primary and secondary lists',
        ru: 'Основной и вторичный списки'
      },
      propsName: ['list', 'listSecondary'],
      setup: `
        const list = [
          { label: 'Cancel', text: true, value: 'cancel' },
          { label: 'Apply', primary: true, value: 'apply' }
        ]
        const listSecondary = [
          { label: 'Delete', palette: 'red', text: true, value: 'delete' }
        ]
        return { list, listSecondary }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Primary + Secondary List</div>
            <DesignComponent :list="list" :listSecondary="listSecondary"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Primary List Only</div>
            <DesignComponent :list="list"/>
          </div>
        </div>
      `,
      play: `
        const items = canvasElement.querySelectorAll('.design-component')
        await expect(items.length).toBe(2)

        const firstActions = items[0]
        const firstButtons = firstActions.querySelectorAll('.design-component__item')
        await expect(firstButtons.length).toBe(3)

        const spacer = firstActions.querySelector('.design-component__spacer')
        await expect(spacer).toBeInTheDocument()

        const secondActions = items[1]
        const secondButtons = secondActions.querySelectorAll('.design-component__item')
        await expect(secondButtons.length).toBe(2)
      `
    },
    {
      id: 'ActionsAlign',
      name: {
        en: 'Alignment options',
        ru: 'Варианты выравнивания'
      },
      propsName: ['align'],
      setup: `
        const list = [
          { label: 'Cancel', text: true, value: 'cancel' },
          { label: 'Apply', primary: true, value: 'apply' }
        ]
        const listSecondary = [
          { label: 'Delete', palette: 'red', text: true, value: 'delete' }
        ]
        return { list, listSecondary }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: right (default)</div>
            <DesignComponent :list="list" :listSecondary="listSecondary" align="right"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: left</div>
            <DesignComponent :list="list" :listSecondary="listSecondary" align="left"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: center</div>
            <DesignComponent :list="list" align="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: block</div>
            <DesignComponent :list="list" align="block"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: auto</div>
            <DesignComponent :list="list" align="auto"/>
          </div>
        </div>
      `,
      play: `
        const items = canvasElement.querySelectorAll('.design-component')
        await expect(items.length).toBe(5)

        await expect(items[0]).toHaveClass('design-component--align--right')
        await expect(items[1]).toHaveClass('design-component--align--left')
        await expect(items[2]).toHaveClass('design-component--align--center')
        await expect(items[3]).toHaveClass('design-component--align--block')
        await expect(items[4]).toHaveClass('design-component--align--auto')
      `
    },
    {
      id: 'ActionsFlexible',
      name: {
        en: 'Adaptive and flexible layout',
        ru: 'Адаптивная раскладка'
      },
      propsName: ['flexible'],
      setup: `
        const list = [
          { label: 'Cancel', text: true, value: 'cancel' },
          { label: 'Apply', primary: true, value: 'apply' }
        ]
        const listSecondary = [
          { label: 'Delete', palette: 'red', text: true, value: 'delete' }
        ]
        return { list, listSecondary }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">flexible: adaptiveMd</div>
            <DesignComponent :list="list" :listSecondary="listSecondary" flexible="adaptiveMd"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">flexible: containerMd</div>
            <DesignComponent :list="list" :listSecondary="listSecondary" flexible="containerMd"/>
          </div>
        </div>
      `,
      play: `
        const items = canvasElement.querySelectorAll('.design-component')
        await expect(items.length).toBe(2)

        await expect(items[0]).toHaveClass('design-component--flexible--adaptiveMd')
        await expect(items[1]).toHaveClass('design-component--flexible--containerMd')
      `
    },
    {
      id: 'ActionsButtonAttrs',
      name: {
        en: 'Shared button attributes',
        ru: 'Общие атрибуты кнопок'
      },
      propsName: ['buttonAttrs', 'buttonSecondaryAttrs'],
      setup: `
        const list = [
          { label: 'Draft', value: 'draft' },
          { label: 'Publish', value: 'publish' }
        ]
        const listSecondary = [
          { label: 'Discard', value: 'discard' }
        ]
        return { list, listSecondary }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Custom buttonAttrs & buttonSecondaryAttrs</div>
            <DesignComponent
              :list="list"
              :listSecondary="listSecondary"
              :buttonAttrs="{ size: 'sm', outline: true }"
              :buttonSecondaryAttrs="{ size: 'sm', palette: 'red', text: true }"
            />
          </div>
        </div>
      `,
      play: `
        const actionsElement = canvasElement.querySelector('.design-component')
        await expect(actionsElement).toBeInTheDocument()

        const buttons = actionsElement?.querySelectorAll('.design-component__item')
        await expect(buttons?.length).toBe(3)
      `
    },
    {
      id: 'ActionsSlots',
      name: {
        en: 'Custom content via slots',
        ru: 'Кастомный контент через слоты'
      },
      components: ['Button'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Slots: default & secondary</div>
            <DesignComponent>
              <template #secondary>
                <DesignButton label="Secondary Slot Action" text/>
              </template>
              <template #default>
                <DesignButton label="Cancel" outline/>
                <DesignButton label="Confirm" primary/>
              </template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
        const actionsElement = canvasElement.querySelector('.design-component')
        await expect(actionsElement).toBeInTheDocument()

        const spacer = actionsElement?.querySelector('.design-component__spacer')
        await expect(spacer).toBeInTheDocument()

        const buttons = actionsElement?.querySelectorAll('button')
        await expect(buttons?.length).toBe(3)
      `
    },
    {
      id: 'ActionsEventClick',
      name: {
        en: 'Click event handling',
        ru: 'Обработка события клика'
      },
      setup: `
        const lastEvent = ref('none')
        const list = [
          { label: 'Cancel', text: true, value: 'cancel' },
          { label: 'Apply', primary: true, value: 'apply' }
        ]
        const onClick = (_event: MouseEvent, value: EventClickValue) => {
          lastEvent.value = 'click:' + String(value?.value ?? '')
        }
        return { lastEvent, list, onClick }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">Last Event: {{ lastEvent }}</div>
          <DesignComponent :list="list" @click="onClick"/>
        </div>
      `,
      play: `
        const eventCard = canvasElement.querySelector('.wiki-storybook-card')
        await expect(eventCard).toBeInTheDocument()
        await expect(eventCard?.textContent).toContain('none')

        const canvas = within(canvasElement)
        await step('Click Apply button and track event payload', async () => {
          const applyButton = canvas.getByRole('button', { name: 'Apply' })
          await userEvent.click(applyButton)
          await expect(eventCard?.textContent).toContain('click:apply')
        })

        await step('Click Cancel button and track event payload', async () => {
          const cancelButton = canvas.getByRole('button', { name: 'Cancel' })
          await userEvent.click(cancelButton)
          await expect(eventCard?.textContent).toContain('click:cancel')
        })
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with ActionsTest... and "Test: " / "Тест: ")
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'ActionsTestAlignments',
      name: {
        en: 'Test: Exhaustive alignment variants',
        ru: 'Тест: Все варианты выравнивания'
      },
      propsName: ['align'],
      setup: `
        const list = [{ label: 'Item 1', value: '1' }, { label: 'Item 2', value: '2' }]
        const listSecondary = [{ label: 'Secondary', value: 'sec' }]
        return { list, listSecondary }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: none</div>
            <DesignComponent :list="list" :listSecondary="listSecondary" align="none"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: left</div>
            <DesignComponent :list="list" :listSecondary="listSecondary" align="left"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: right</div>
            <DesignComponent :list="list" :listSecondary="listSecondary" align="right"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: center</div>
            <DesignComponent :list="list" align="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: block</div>
            <DesignComponent :list="list" align="block"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: auto</div>
            <DesignComponent :list="list" align="auto"/>
          </div>
        </div>
      `,
      play: `
        const items = canvasElement.querySelectorAll('.design-component')
        await expect(items.length).toBe(6)

        await expect(items[0]).toHaveClass('design-component--align--none')
        await expect(items[1]).toHaveClass('design-component--align--left')
        await expect(items[2]).toHaveClass('design-component--align--right')
        await expect(items[3]).toHaveClass('design-component--align--center')
        await expect(items[4]).toHaveClass('design-component--align--block')
        await expect(items[5]).toHaveClass('design-component--align--auto')
      `
    },
    {
      id: 'ActionsTestWrapping',
      name: {
        en: 'Test: Wrap and nowrap layout',
        ru: 'Тест: Перенос строк (wrap и nowrap)'
      },
      propsName: ['wrap'],
      setup: `
        const manyItems = [
          { label: 'Action 1', value: '1' },
          { label: 'Action 2', value: '2' },
          { label: 'Action 3', value: '3' },
          { label: 'Action 4', value: '4' },
          { label: 'Action 5', value: '5' },
          { label: 'Action 6', value: '6' }
        ]
        return { manyItems }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">wrap: true</div>
            <DesignComponent :list="manyItems" wrap/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">wrap: false</div>
            <DesignComponent :list="manyItems" :wrap="false"/>
          </div>
        </div>
      `,
      play: `
        const items = canvasElement.querySelectorAll('.design-component')
        await expect(items.length).toBe(2)

        await expect(items[0]).toHaveClass('design-component--wrap')
        await expect(items[1]).not.toHaveClass('design-component--wrap')
      `
    },
    {
      id: 'ActionsTestButtonStates',
      name: {
        en: 'Test: Button states, icons and palettes',
        ru: 'Тест: Состояния кнопок, иконки и палитры'
      },
      propsName: ['list'],
      setup: `
        const stateItems = [
          { label: 'Disabled', disabled: true, value: 'disabled' },
          { label: 'Loading', loading: true, value: 'loading' },
          { label: 'With Icon', icon: 'download', outline: true, value: 'icon' },
          { label: 'Custom Palette', palette: 'red', value: 'palette' }
        ]
        return { stateItems }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Rich Button States</div>
            <DesignComponent :list="stateItems"/>
          </div>
        </div>
      `,
      play: `
        const actionsElement = canvasElement.querySelector('.design-component')
        await expect(actionsElement).toBeInTheDocument()

        const buttons = actionsElement?.querySelectorAll('.design-component__item')
        await expect(buttons?.length).toBe(4)

        if (buttons && buttons.length >= 4) {
          const disabledButton = buttons[0].querySelector('button')
          await expect(disabledButton).toBeDisabled()
        }
      `
    },
    {
      id: 'ActionsTestEmptyAndMixed',
      name: {
        en: 'Test: Empty, single list and mixed slots',
        ru: 'Тест: Пустые списки, одиночные списки и смешанные слоты'
      },
      propsName: ['list', 'listSecondary'],
      components: ['Button'],
      setup: `
        const list = [{ label: 'Data Action', value: 'data' }]
        const listSecondary = [{ label: 'Secondary Data', value: 'sec' }]
        return { list, listSecondary }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Empty Layout (Spacer Only)</div>
            <DesignComponent/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Secondary Only</div>
            <DesignComponent :listSecondary="listSecondary"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">List + Slot Mixed</div>
            <DesignComponent :list="list">
              <template #default>
                <DesignButton label="Slotted Action" outline/>
              </template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
        const items = canvasElement.querySelectorAll('.design-component')
        await expect(items.length).toBe(3)

        // 1. Empty layout renders spacer
        const emptySpacer = items[0].querySelector('.design-component__spacer')
        await expect(emptySpacer).toBeInTheDocument()
        expect(items[0].querySelectorAll('.design-component__item').length).toBe(0)

        // 2. Secondary only
        expect(items[1].querySelectorAll('.design-component__item').length).toBe(1)

        // 3. Mixed data list + slotted button
        const mixedButtons = items[2].querySelectorAll('button')
        await expect(mixedButtons.length).toBe(2)
      `
    },
    {
      id: 'ActionsTestPaddings',
      name: {
        en: 'Test: Padding variants and indent settings',
        ru: 'Тест: Варианты отступов и настройки индентов'
      },
      propsName: ['padding', 'paddingByIndent'],
      setup: `
        const list = [{ label: 'Action', value: '1' }]
        return { list }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">padding: sm</div>
            <DesignComponent :list="list" padding="sm"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">padding: md</div>
            <DesignComponent :list="list" padding="md"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">padding: lg</div>
            <DesignComponent :list="list" padding="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">padding: none</div>
            <DesignComponent :list="list" padding="none"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">paddingByIndent: false</div>
            <DesignComponent :list="list" :paddingByIndent="false"/>
          </div>
        </div>
      `,
      play: `
        const items = canvasElement.querySelectorAll('.design-component')
        await expect(items.length).toBe(5)

        await expect(items[0]).toHaveClass('design-component--padding--sm')
        await expect(items[1]).toHaveClass('design-component--padding--md')
        await expect(items[2]).toHaveClass('design-component--padding--lg')
        await expect(items[3]).toHaveClass('design-component--padding--none')
        await expect(items[4]).not.toHaveClass('design-component--paddingByIndent')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Actions'} type={'actions'}/>
<Canvas of={Component.ActionsList}/>

<StorybookDescriptions componentName={'Actions'} type={'list'}/>
<Canvas of={Component.ActionsAlign}/>
<Canvas of={Component.ActionsButtonAttrs}/>

<StorybookDescriptions componentName={'Actions'} type={'flexible'}/>
<Canvas of={Component.ActionsFlexible}/>
    `,
    events: `
<Canvas of={Component.ActionsEventClick}/>
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<Canvas of={Component.ActionsSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'secondary'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Actions
    v-bind="args"
    align="right"
    :list="[
      { label: 'Cancel', text: true },
      { label: 'Confirm', primary: true }
    ]"
  />
</div>
    `,
    description: `
Layout container for action button groups, typically used in dialog footers, cards, or forms. Manages spacing, alignment, and separation between primary (main) and secondary action sets.
Supports multiple alignments (left, center, right, block, auto) and takes arrays of button props (list, listSecondary) to automatically render Button components.
Features both array-based and slot-based rendering for maximum flexibility. Use for standardizing button layouts and ensuring consistent spacing.
    `
  }
}
