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
    'import { image1 } from \'@dxtmisha/wiki/media\''
  ],
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
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
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
          <DesignComponent>
            <template #default>
              <span>Default Slot (Label)</span>
            </template>
            <template #description>
              <span>Description Slot</span>
            </template>
            <template #context>
              <span>Context Slot (overrides default/label and description)</span>
            </template>
          </DesignComponent>
        </div>
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
