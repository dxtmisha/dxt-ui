import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FieldMessage component properties
 *
 * Описания свойств компонента FieldMessage
 */
export const wikiDescriptionsFieldMessage: StorybookComponentsDescriptionItem = {
  name: 'FieldMessage',
  description: {
    en: 'Component for displaying helper and validation messages for form fields',
    ru: 'Компонент для отображения вспомогательных и валидационных сообщений для полей форм'
  },
  possibilities: {
    en: [
      'shows helper text under the field',
      'displays validation message when error occurs',
      'visibility control via a dedicated force flag',
      'works together with input fields and counters',
      'supports HTML-safe rendering by design system'
    ],
    ru: [
      'показывает вспомогательный текст под полем',
      'отображает сообщение валидации при ошибке',
      'управление видимостью через специальный флаг',
      'работает совместно с полями ввода и счетчиками',
      'поддерживает безопасный рендеринг HTML силами дизайн-системы'
    ]
  },
  import: [],
  stories: [
    {
      id: 'FieldMessageSlots',
      name: {
        en: 'Slots',
        ru: 'Слоты'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <template #helper>
              <span><b>Helper:</b> You can use Latin letters</span>
            </template>
          </DesignComponent>
          <DesignComponent>
            <template #validation>
              <span><b>Validation:</b> Please fill out this field</span>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldMessage'} type={'fieldMessage'}/>
    `,
    slots: `
<Canvas of={Component.FieldMessageSlots}/>
<StorybookDescriptions componentName={'FieldMessage'} type={'slots'}/>
    `
  }
}
