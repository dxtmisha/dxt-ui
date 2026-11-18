import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Bars component properties
 *
 * Описания свойств компонента Bars
 */
export const wikiDescriptionsBars: StorybookComponentsDescriptionItem = {
  name: 'Bars',
  description: {
    en: 'A versatile bar component for headers, toolbars, or action bars, displaying titles, descriptions, and interactive buttons.',
    ru: 'Универсальный компонент-панель для заголовков, панелей инструментов или панелей действий, отображающий заголовки, описания и интерактивные кнопки.'
  },
  possibilities: {
    en: [
      'Displays a primary label and a secondary description with customizable IDs.',
      'Includes a configurable back/close button for navigation and exiting action mode.',
      'Supports primary bar buttons and unified buttonAttrs configuration.',
      'Features an action mode with separate actionLabel, actionDescription, and actionBars.',
      'Supports two-way state synchronization via v-model:action and v-model:model-action.',
      'Integrates with Skeleton loading mode and custom slots.'
    ],
    ru: [
      'Отображает основной заголовок и дополнительное описание с настраиваемыми ID.',
      'Включает настраиваемую кнопку «Назад»/«Закрыть» для навигации и выхода из режима действий.',
      'Поддерживает основной набор кнопок и общие атрибуты buttonAttrs.',
      'Имеет режим действий с отдельными actionLabel, actionDescription и actionBars.',
      'Поддерживает двустороннюю синхронизацию через v-model:action и v-model:model-action.',
      'Интегрируется с режимом загрузки скелетона и пользовательскими слотами.'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
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
      id: 'BarsBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search', value: 'search' },
              { icon: 'refresh', value: 'refresh' },
              { icon: 'more_vert', value: 'more' }
            ]"
          />

          <DesignComponent
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share', value: 'share' },
              { icon: 'edit', value: 'edit' },
              { icon: 'delete', value: 'delete' }
            ]"
          />
        </div>
      `,
      play: `
const barsList = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(barsList.length).toBe(2)

await expect(barsList[0]).not.toHaveClass('design-component--action')
await expect(barsList[0].querySelector('.design-component__label')).toHaveTextContent('Page Title')
await expect(barsList[0].querySelector('.design-component__description')).toHaveTextContent('A concise description for this page')
await expect(barsList[0].querySelector('button[data-value="search"]')).toBeInTheDocument()

await expect(barsList[1]).toHaveClass('design-component--action')
await expect(barsList[1].querySelector('.design-component__label')).toHaveTextContent('2 selected')
await expect(barsList[1].querySelector('.design-component__description')).toHaveTextContent('Choose an action to apply')
await expect(barsList[1].querySelector('button[data-value="delete"]')).toBeInTheDocument()
      `
    },
    {
      id: 'BarsVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        isAction: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" data-testid="toggle-action" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
          <DesignComponent
            v-model:action="isAction"
            label="Page Title"
            description="A concise description for this example"
            :bars="[
              { icon: 'search', value: 'search' },
              { icon: 'refresh', value: 'refresh' },
              { icon: 'more_vert', value: 'more' }
            ]"
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share', value: 'share' },
              { icon: 'edit', value: 'edit' },
              { icon: 'delete', value: 'delete' }
            ]"
            style="margin-top: 8px;"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const toggleButton = canvas.getByTestId('toggle-action')
const barsElement = canvasElement.querySelector<HTMLElement>('.design-component')

await expect(barsElement).not.toHaveClass('design-component--action')
await expect(barsElement).toHaveAttribute('aria-live', 'polite')

await step('Activate action mode via toggle button', async () => {
  await userEvent.click(toggleButton)
  await expect(barsElement).toHaveClass('design-component--action')
  await expect(barsElement?.querySelector('.design-component__label')).toHaveTextContent('2 selected')
})

await step('Exit action mode via back button', async () => {
  const backButton = barsElement?.querySelector<HTMLButtonElement>('button[data-value="back"]')
  await expect(backButton).toBeInTheDocument()
  if (backButton) {
    await userEvent.click(backButton)
  }
  await expect(barsElement).not.toHaveClass('design-component--action')
  await expect(barsElement?.querySelector('.design-component__label')).toHaveTextContent('Page Title')
})
      `
    },
    {
      id: 'BarsSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search', value: 'search' },
              { icon: 'refresh', value: 'refresh' },
              { icon: 'more_vert', value: 'more' }
            ]"
          />
        </DesignSkeleton>
      `,
      play: `
const labelElement = canvasElement.querySelector<HTMLElement>('.design-component__label')
const descriptionElement = canvasElement.querySelector<HTMLElement>('.design-component__description')

await expect(labelElement).toBeInTheDocument()
await expect(descriptionElement).toBeInTheDocument()
await expect(labelElement?.className).toContain('textVariant')
await expect(descriptionElement?.className).toContain('textVariant')
      `
    },
    {
      id: 'BarsSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      setup: `
      return {
        isAction: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" data-testid="toggle-slots-action" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
          <DesignComponent v-model:action="isAction">
            <template #default>Custom Label slot</template>
            <template #description>Custom Description slot</template>
            <template #bars>Custom Bars Slot</template>
            <template #actionBars>Custom ActionBars Slot</template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const toggleButton = canvas.getByTestId('toggle-slots-action')
const barsElement = canvasElement.querySelector<HTMLElement>('.design-component')

await expect(barsElement).toHaveTextContent('Custom Label slot')
await expect(barsElement).toHaveTextContent('Custom Description slot')
await expect(barsElement).toHaveTextContent('Custom Bars Slot')
await expect(barsElement).not.toHaveTextContent('Custom ActionBars Slot')

await userEvent.click(toggleButton)
await expect(barsElement).toHaveClass('design-component--action')
await expect(barsElement).toHaveTextContent('Custom ActionBars Slot')
await expect(barsElement).not.toHaveTextContent('Custom Bars Slot')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA Only — Constructor Props Only)
    // =========================================================================
    {
      id: 'BarsTestBackAndButtons',
      name: {
        en: 'Test: Back button options, custom icons, and buttonAttrs',
        ru: 'Тест: Настройки кнопки «Назад», кастомные иконки и buttonAttrs'
      },
      propsName: ['backHide', 'backActionHide', 'backButton', 'iconBack', 'iconClose', 'textClose', 'buttonAttrs', 'bars'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            data-testid="bars-back-hide"
            label="Hidden Back"
            back-hide
            :bars="[{ label: 'Save', value: 'save' }]"
          />
          <DesignComponent
            data-testid="bars-back-action-hide"
            action
            action-label="Hidden Action Back"
            back-action-hide
            :action-bars="[{ label: 'Confirm', value: 'confirm' }]"
          />
          <DesignComponent
            data-testid="bars-custom-back"
            label="Custom Back"
            icon-back="chevron_left"
            icon-close="cancel"
            text-close="Close navigation"
            :back-button="{ label: 'Return' }"
            :button-attrs="{ disabled: true }"
            :bars="[{ icon: 'settings', value: 'settings' }]"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const backHideBars = canvas.getByTestId('bars-back-hide')
const backActionHideBars = canvas.getByTestId('bars-back-action-hide')
const customBackBars = canvas.getByTestId('bars-custom-back')

await expect(backHideBars.querySelector('button[data-value="back"]')).not.toBeInTheDocument()
const saveButton = backHideBars.querySelector<HTMLButtonElement>('button[data-value="save"]')
await expect(saveButton).toHaveTextContent('Save')

await expect(backActionHideBars.querySelector('button[data-value="back"]')).not.toBeInTheDocument()
await expect(backActionHideBars.querySelector('button[data-value="confirm"]')).toHaveTextContent('Confirm')

const customBackButton = customBackBars.querySelector<HTMLButtonElement>('button[data-value="back"]')
await expect(customBackButton).toHaveTextContent('Return')
await expect(customBackButton).toHaveAttribute('aria-label', 'Close navigation')
await expect(customBackButton).toBeDisabled()
await expect(customBackBars.querySelector('button[data-value="settings"]')).toBeDisabled()
      `
    },
    {
      id: 'BarsTestModelActionAndEvents',
      name: {
        en: 'Test: modelAction, IDs, and click events',
        ru: 'Тест: modelAction, ID и события клика'
      },
      propsName: ['modelAction', 'labelId', 'descriptionId'],
      setup: `
      const isModelAction = ref(false)
      const lastEvent = ref('')
      const onBarClick = (_event: MouseEvent, value?: EventClickValue) => {
        lastEvent.value = 'click:' + String(value?.value ?? '')
      }
      const onBarClickLite = (value?: EventClickValue) => {
        lastEvent.value = 'clickLite:' + String(value?.value ?? '')
      }
      return {
        isModelAction,
        lastEvent,
        onBarClick,
        onBarClickLite
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" data-testid="toggle-model-action" @click="isModelAction = !isModelAction">Toggle modelAction</button>
            <div class="wiki-storybook-card" data-testid="bars-event-output">{{ lastEvent }}</div>
          </div>
          <DesignComponent
            data-testid="bars-model-action"
            v-model:model-action="isModelAction"
            label="Model Title"
            description="Model Description"
            label-id="custom-bars-label-id"
            description-id="custom-bars-desc-id"
            action-label="Model Action Active"
            :bars="[{ icon: 'thumb_up', value: 'like' }]"
            @click="onBarClick"
            @click-lite="onBarClickLite"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const toggleButton = canvas.getByTestId('toggle-model-action')
const barsElement = canvas.getByTestId('bars-model-action')
const eventOutput = canvas.getByTestId('bars-event-output')

await expect(barsElement.querySelector('#custom-bars-label-id')).toHaveTextContent('Model Title')
await expect(barsElement.querySelector('#custom-bars-desc-id')).toHaveTextContent('Model Description')

await step('Toggle modelAction prop', async () => {
  await userEvent.click(toggleButton)
  await expect(barsElement).toHaveClass('design-component--action')
  await expect(barsElement.querySelector('#custom-bars-label-id')).toHaveTextContent('Model Action Active')
})

await step('Click back button to reset modelAction and emit clickLite', async () => {
  const backButton = barsElement.querySelector<HTMLButtonElement>('button[data-value="back"]')
  if (backButton) {
    await userEvent.click(backButton)
  }
  await expect(barsElement).not.toHaveClass('design-component--action')
  await expect(eventOutput).toHaveTextContent('clickLite:back')
})

await step('Click regular bar button to emit click/clickLite', async () => {
  const likeButton = barsElement.querySelector<HTMLButtonElement>('button[data-value="like"]')
  if (likeButton) {
    await userEvent.click(likeButton)
  }
  await expect(eventOutput).toHaveTextContent('clickLite:like')
})
      `
    },
    {
      id: 'BarsTestNumericZero',
      name: {
        en: 'Test: Numeric zero label and description',
        ru: 'Тест: Числовое нулевое значение заголовка и описания'
      },
      propsName: ['label', 'description', 'action', 'actionLabel', 'actionDescription'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            data-testid="bars-zero-normal"
            :label="0"
            :description="0"
            back-hide
          />
          <DesignComponent
            data-testid="bars-zero-action"
            action
            :action-label="0"
            :action-description="0"
            back-action-hide
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const normalBars = canvas.getByTestId('bars-zero-normal')
const actionBars = canvas.getByTestId('bars-zero-action')

await expect(normalBars.querySelector('.design-component__label')).toHaveTextContent('0')
await expect(normalBars.querySelector('.design-component__description')).toHaveTextContent('0')

await expect(actionBars).toHaveClass('design-component--action')
await expect(actionBars).toHaveAttribute('aria-live', 'polite')
await expect(actionBars.querySelector('.design-component__label')).toHaveTextContent('0')
await expect(actionBars.querySelector('.design-component__description')).toHaveTextContent('0')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Bars'} type={'bars'}/>
<StorybookDescriptions componentName={'Bars'} type={'action'}/>
<Canvas of={Component.BarsBasic}/>
<StorybookDescriptions componentName={'Bars'} type={'v-model'}/>
<Canvas of={Component.BarsVModel}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BarsSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<Canvas of={Component.BarsSlots}/>
<StorybookDescriptions componentName={'Bars'} type={'slots'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Structural header or toolbar component for pages, cards, and windows. Provides a consistent layout for titles, descriptions, and interactive action buttons.
Features a built-in back navigation button, primary action button list (bars), and a specialized "action mode" for contextual states (e.g., selection). Supports skeleton loading and full button customization.
Controlled via label/description props and action/modelAction boolean props for state switching. Use for top-level page headers, modal toolbars, or dynamic action bars that appear after item selection.
    `
  }
}
