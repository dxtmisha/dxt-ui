import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TextareaAutosize component
 *
 * Описания свойств компонента TextareaAutosize
 */
export const wikiDescriptionsTextareaAutosize: StorybookComponentsDescriptionItem = {
  name: 'TextareaAutosize',
  description: {
    en: 'Textarea component that automatically adjusts its height based on content',
    ru: 'Компонент текстового поля, которое автоматически подстраивает свою высоту под содержимое'
  },
  possibilities: {
    en: [
      'automatic height adjustment based on content',
      'clone element for precise height calculation',
      'respects padding and styling from the original textarea',
      'smooth height transitions on content change',
      'supports all standard textarea attributes via inputAttrs',
      'optional autosize toggle for flexibility',
      'reactive value binding with input event emission'
    ],
    ru: [
      'автоматическая подстройка высоты под содержимое',
      'элемент-клон для точного расчёта высоты',
      'учитывает отступы и стили исходного textarea',
      'плавные переходы высоты при изменении содержимого',
      'поддержка всех стандартных атрибутов textarea через inputAttrs',
      'опциональное отключение autosize для гибкости',
      'реактивная привязка значения с генерацией события input'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args" :inputAttrs="{style: 'width: 240px; border: 1px solid #90A1B9FF'}" />
    `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TextareaAutosize'} type={'textarea-autosize'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input-standard'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
    `
  },
  ai: {
    description: `
Low-level functional engine for multi-line inputs that provides precise, real-time height adjustment based on content. Implements a reliable cloning mechanism to calculate scroll-free container heights while respecting parent padding and font styles.
Features automated height synchronization during content changes, supporting smooth CSS transitions and native textarea attributes via inputAttrs. Operates as a foundational tool for the Textarea component, ensuring character entry never triggers unwanted shift or overflow.
Primarily integrated as a subcomponent; should generally not be manually used for standalone input fields. Controlled via reactive value bindings, serving as the high-performance core for any dynamic data entry element requiring responsive layout scaling.
    `
  }
}
