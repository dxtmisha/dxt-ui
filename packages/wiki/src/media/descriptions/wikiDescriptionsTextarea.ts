import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsTextarea: StorybookComponentsDescriptionItem = {
  name: 'Textarea',
  description: {
    en: 'A multi-line text input component. Supports auto-sizing, validation, icons, labels, messages, and counters.',
    ru: 'Компонент многострочного ввода текста. Поддерживает авто-размер, валидацию, иконки, метки, сообщения и счетчики.'
  },
  possibilities: {
    en: [
      'multi-line text input',
      'auto-sizing based on content (`autosize`)',
      'validation support (`validationMessage`, `required`)',
      'label and helper message support',
      'character counter (`counter`, `maxlength`)',
      'icons support',
      'disabled and readonly states'
    ],
    ru: [
      'многострочный ввод текста',
      'авто-размер в зависимости от контента (`autosize`)',
      'поддержка валидации (`validationMessage`, `required`)',
      'поддержка метки и вспомогательного сообщения',
      'счетчик символов (`counter`, `maxlength`)',
      'поддержка иконок',
      'состояния отключения и только для чтения'
    ]
  },
  render: `
    <DesignComponent v-bind="args" />
  `,
  stories: [
    {
      id: 'TextareaBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent label="Label" placeholder="Placeholder" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Filled</div>
            <DesignComponent
              label="Label"
              value="Modern web development relies heavily on robust form components. The Textarea component offers a flexible solution for multi-line input, adapting to user content with auto-resizing capabilities. It integrates seamlessly with validation systems and provides visual feedback through states and helper text, ensuring a smooth user experience across different devices and screen sizes."
            />
          </div>
        </div>
      `
    },
    {
      id: 'TextareaAutosize',
      name: {
        en: 'Autosize',
        ru: 'Авто-размер'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Autosize (default)</div>
            <DesignComponent label="Autosize" autosize />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Fixed Rows</div>
            <DesignComponent label="5 Rows" :autosize="false" rows="5" />
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Textarea'} type={'textarea'}/>
<Canvas of={Component.TextareaBasic}/>

<StorybookDescriptions componentName={'Textarea'} type={'autosize'}/>
<Canvas of={Component.TextareaAutosize}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `
  },
  ai: {
    description: `
Versatile multi-line text input control with automated spatial management and comprehensive validation support. Designed for feedback forms, detailed descriptions, and any scenario requiring a flexible, high-volume data entry area.
Features an intelligent autosize engine that grows/shrinks dynamically based on content, along with character counter integration and Material symbol icons (leading/trailing). Inherits full Field component functionality including floating labels, helper messages, and reactive error states.
Controlled via the v-model for content and autosize prop for height behavior. Use for user biographies, multi-row comments, or complex data entry views where standard single-line inputs lack sufficient capacity.
    `
  }
}
