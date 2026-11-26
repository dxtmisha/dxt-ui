import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Placeholder component properties
 *
 * Описания свойств компонента Placeholder
 */
export const wikiDescriptionsPlaceholder: StorybookComponentsDescriptionItem = {
  name: 'Placeholder',
  description: {
    en: 'Component for displaying warnings, empty states, or informative placeholders',
    ru: 'Компонент для отображения предупреждений, пустых состояний или информационных заглушек'
  },
  possibilities: {
    en: [
      'displays warning layouts and empty states',
      'supports illustrative image or icon displays',
      'title and description text configurations',
      'action buttons container alignment',
      'flexible slot options for custom body layouts'
    ],
    ru: [
      'отображение макетов предупреждений и пустых состояний',
      'поддержка отображения иллюстративных изображений или иконок',
      'настройка текста заголовка и описания',
      'выравнивание контейнера кнопок действий',
      'гибкие варианты слотов для пользовательских макетов'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { expect, within, userEvent, waitFor } from \'storybook/test\'',
    'import { image1 } from \'@dxtmisha/wiki/media\''
  ],
  play: `
    const component = canvasElement.querySelector('.design-component')
    await expect(component).toBeInTheDocument()
  `,
  stories: [
    {
      id: 'PlaceholderBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry' }]"
          />
        </div>
      `,
      play: `
        const component = canvasElement.querySelector('.design-component')
        await expect(component).toBeInTheDocument()
        await expect(component?.querySelector('.design-component__image')).toBeInTheDocument()
        await expect(component?.querySelector('.design-component__label')).toHaveTextContent('No Internet Connection')
        await expect(component?.querySelector('.design-component__description')).toHaveTextContent('Please check your network settings')
        await expect(within(canvasElement).getByRole('button', { name: 'Retry' })).toBeInTheDocument()
      `
    },
    {
      id: 'PlaceholderSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent data-testid="placeholder-slots-default" :image="image1">
            <template #default>
              <span>Default Slot (Label)</span>
            </template>
            <template #description>
              <span>Description Slot</span>
            </template>
          </DesignComponent>
          <DesignComponent data-testid="placeholder-slots-context" label="Context Header">
            <template #context>
              <span data-testid="custom-context">Context Slot</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const defaultEl = canvasElement.querySelector('[data-testid="placeholder-slots-default"]')
        await expect(defaultEl?.querySelector('.design-component__label')).toHaveTextContent('Default Slot (Label)')
        await expect(defaultEl?.querySelector('.design-component__description')).toHaveTextContent('Description Slot')

        const contextEl = canvasElement.querySelector('[data-testid="placeholder-slots-context"]')
        await expect(contextEl?.querySelector('[data-testid="custom-context"]')).toBeInTheDocument()
        await expect(contextEl).toHaveTextContent('Context Slot')
      `
    },
    {
      id: 'PlaceholderTestActionsAndAria',
      name: {
        en: 'Test: Actions event, actionsHide, explicit ARIA IDs and numeric zero',
        ru: 'Тест: События действий, actionsHide, явные ARIA ID и числовой ноль'
      },
      setup: `
        const actionsHide = ref(false)
        const clickedValue = ref('none')
        const onActionsLite = (event: { value?: unknown }) => {
          clickedValue.value = String(event?.value ?? 'clicked')
        }
        const toggleHide = () => {
          actionsHide.value = !actionsHide.value
        }
        return { actionsHide, clickedValue, onActionsLite, toggleHide }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="toggleHide">Toggle Actions</button>
            <span data-testid="ph-clicked">{{ clickedValue }}</span>
          </div>
          <DesignComponent
            data-testid="ph-aria"
            image="warning"
            label="Session Expired"
            label-id="wiki-ph-label-id"
            description="Sign in again"
            description-id="wiki-ph-desc-id"
            :actions-hide="actionsHide"
            :actions-list="[{ label: 'Sign In', value: 'sign-in' }]"
            @actions-lite="onActionsLite"
          />
          <DesignComponent
            data-testid="ph-zero"
            :label="0"
            :description="0"
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const ariaEl = canvasElement.querySelector('[data-testid="ph-aria"]')
        await expect(ariaEl).toHaveAttribute('aria-labelledby', 'wiki-ph-label-id')
        await expect(ariaEl).toHaveAttribute('aria-describedby', 'wiki-ph-desc-id')

        await userEvent.click(canvas.getByRole('button', { name: 'Sign In' }))
        await waitFor(() => {
          expect(canvasElement.querySelector('[data-testid="ph-clicked"]')).toHaveTextContent('sign-in')
        })

        await userEvent.click(canvas.getByRole('button', { name: 'Toggle Actions' }))
        await waitFor(() => {
          expect(canvasElement.querySelector('[data-testid="ph-aria"]')?.querySelectorAll('button').length).toBe(0)
        })

        const zeroEl = canvasElement.querySelector('[data-testid="ph-zero"]')
        await expect(zeroEl?.querySelector('.design-component__label')).toHaveTextContent('0')
        await expect(zeroEl?.querySelector('.design-component__description')).toHaveTextContent('0')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Placeholder'} type={'placeholder'}/>
<Canvas of={Component.PlaceholderBasic}/>
    `,
    slots: `
<Canvas of={Component.PlaceholderSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'context'}/>
    `
  },
  ai: {
    description: `
Placeholder component designed for warning screens, error boundaries, or empty state illustrations. Integrates sub-components for rendering an illustrative image/icon (image), title (label), detailed message (description), and quick action buttons (actionsList).
Controlled via the image, imageAttrs, label, labelId, description, and actionsList props. Use to guide users when no content is available or network/system errors occur.
    `
  }
}
