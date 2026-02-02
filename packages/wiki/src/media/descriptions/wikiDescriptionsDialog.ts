import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Dialog component properties
 *
 * Описания свойств компонента Dialog
 */
export const wikiDescriptionsDialog: StorybookComponentsDescriptionItem = {
  name: 'Dialog',
  description: {
    en: 'Modal dialog component for displaying alerts, confirmations, and informational messages with icon and action buttons',
    ru: 'Модальный диалоговый компонент для отображения предупреждений, подтверждений и информационных сообщений с иконкой и кнопками действий'
  },
  possibilities: {
    en: [
      'modal dialog with centered positioning and backdrop',
      'icon support with predefined success and error states',
      'customizable title, description, and content areas',
      'action buttons with OK and Close presets',
      'image positioning (top or left alignment)',
      'integration with Window, Bars, Actions, Icon components',
      'close on ESC key and backdrop click',
      'programmatic control via v-model:open',
      'automatic icon switching based on success/error states',
      'flexible content layout with information block',
      'customizable footer with action buttons',
      'keyboard accessibility and focus management',
      'responsive design with mobile optimization',
      'support for custom button configurations'
    ],
    ru: [
      'модальный диалог с центрированием и подложкой',
      'поддержка иконок с предустановленными состояниями успеха и ошибки',
      'настраиваемые области заголовка, описания и контента',
      'кнопки действий с пресетами OK и Закрыть',
      'позиционирование изображения (сверху или слева)',
      'интеграция с компонентами Window, Bars, Actions, Icon',
      'закрытие по ESC и клику на подложку',
      'программное управление через v-model:open',
      'автоматическое переключение иконки на основе состояний успеха/ошибки',
      'гибкая компоновка контента с информационным блоком',
      'настраиваемый футер с кнопками действий',
      'доступность с клавиатуры и управление фокусом',
      'адаптивный дизайн с оптимизацией для мобильных',
      'поддержка пользовательских конфигураций кнопок'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </DesignComponent>
    `,
  stories: [
    {
      id: 'DialogStates',
      name: {
        en: 'Success and error states',
        ru: 'Состояния успеха и ошибки'
      },
      setup: `
      return {
        openSuccess: ref(false),
        openError: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Success Dialog</button>
            </template>
          </DesignComponent>

          <DesignComponent
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Error Dialog</button>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'DialogVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        open: ref(false)
      }
      `,
      template: `
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        />
      `
    },
    {
      id: 'DialogAllSlots',
      name: {
        en: 'All slots demonstration',
        ru: 'Демонстрация всех слотов'
      },
      template: `
        <DesignComponent>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Dialog with All Slots</button>
          </template>

          <template #title>
            Title Slot
          </template>

          <template #label>
            <strong>Label Slot</strong>
          </template>

          <template #description>
            <em>Description Slot</em>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #footer="{classesWindow}">
            Footer Slot
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Dialog'} type={'dialog'}/>

<StorybookDescriptions componentName={'Dialog'} type={'states'}/>
<Canvas of={Component.DialogStates}/>

<StorybookDescriptions componentName={'Dialog'} type={'buttons'}/>

<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.DialogVModel}/>

<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Dialog'} type={'events'}/>
<StorybookDescriptions componentName={'Dialog'} type={'event.dialog'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,
    slots: `
<Canvas of={Component.DialogAllSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Dialog embedded open label="Dialog Title" description="This is a description text." v-bind="args"/>
</div>
    `,
    description: `
Dialog is a specialized modal component designed for standard user interactions such as alerts, confirmations, and status messages.
It extends the functionality of the Modal component by providing a pre-defined layout for icons, titles, descriptions, and action buttons.

**Key Features:**
1. **Standardized Layout:**
   - Automatically arranges elements: Icon -> Title (\`label\`) -> Description (\`description\`) -> Content (\`default\`) -> Actions (\`footer\`).
   - Supports positioning the image/icon via \`imagePosition\` (e.g., top or left).

2. **State Presets:**
   - **Success:** Setting the \`success\` prop automatically displays a success icon and applies relevant styling.
   - **Error:** Setting the \`error\` prop automatically displays an error icon and applies relevant styling.
   - **Custom:** You can provide a custom icon via the \`icon\` prop.

3. **Content Props:**
   - \`label\`: The main heading or title of the dialog.
   - \`description\`: Subtitle or explanatory text.
   - \`open\`: Controls visibility (v-model).

4. **Slots:**
   - \`#control\`: Trigger element.
   - \`#default\`: Custom content area.
   - \`#footer\`: Area for action buttons (Cancel, OK).

**Usage Examples:**

- **Simple Confirmation:**
  \`<Dialog v-model:open="isOpen" label="Confirm Action" description="Are you sure you want to proceed?" />\`

- **Success Alert:**
  \`<Dialog success label="Operation Successful" description="Your data has been saved." />\`

- **Error Alert:**
  \`<Dialog error label="Error" description="Failed to connect to the server." />\`
    `
  }
}
