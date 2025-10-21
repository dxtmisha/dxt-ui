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
        >
          <div class="wiki-storybook-item--padding">Additional content can be placed here</div>
        </DesignComponent>
      `
    },
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
          <button class="wiki-storybook-button" @click="openSuccess = true">
            Success Dialog ({{ openSuccess }})
          </button>
          <button class="wiki-storybook-button" @click="openError = true">
            Error Dialog ({{ openError }})
          </button>
        </div>

        <DesignComponent
          v-model:open="openSuccess"
          :success="true"
          label="Operation Successful"
          description="Your changes have been saved successfully."
        >
          <div class="wiki-storybook-item--padding">
            <div class="wiki-storybook-info">
              <strong>Success State</strong>
              <p>When the <code>success</code> prop is set to <code>true</code>, the dialog automatically displays a success icon (typically a check circle). This visual feedback helps users understand that their action completed successfully.</p>
              <p>The success icon is controlled by the <code>iconSuccess</code> prop, which defaults to 'check_circle' but can be customized to any icon from your icon library.</p>
            </div>
          </div>
        </DesignComponent>

        <DesignComponent
          v-model:open="openError"
          :error="true"
          label="Operation Failed"
          description="An error occurred while processing your request. Please try again."
        >
          <div class="wiki-storybook-item--padding">
            <div class="wiki-storybook-info">
              <strong>Error State</strong>
              <p>When the <code>error</code> prop is set to <code>true</code>, the dialog automatically displays an error icon. This provides immediate visual feedback that something went wrong.</p>
              <p>The error icon is controlled by the <code>iconError</code> prop, which defaults to 'error' but can be customized. This helps maintain consistency in error communication across your application.</p>
            </div>
          </div>
        </DesignComponent>
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
            Dialog Title Slot
          </template>

          <template #label>
            <strong>Custom Label Slot</strong>
          </template>

          <template #description>
            <em>Custom description slot with formatted text</em>
          </template>

          <template #default>
            <div class="wiki-storybook-item--padding">
              <h4>Default Slot Content</h4>
              <p>This is the main content area of the dialog. It appears after the information block (icon, label, description).</p>

              <div class="wiki-storybook-info">
                <strong>Available slots:</strong>
                <ul>
                  <li><code>#control</code> - trigger button or element with binds</li>
                  <li><code>#title</code> - dialog header/title area (Bars component)</li>
                  <li><code>#label</code> - label within information block</li>
                  <li><code>#description</code> - description within information block</li>
                  <li><code>#default</code> - main content area after information block</li>
                  <li><code>#footer</code> - footer with action buttons (Actions component)</li>
                </ul>
              </div>

              <p>Each slot receives control props that allow you to interact with the dialog programmatically, such as closing it or accessing component classes and methods.</p>
            </div>
          </template>

          <template #footer="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Custom Cancel</button>
              <button class="wiki-storybook-button">Custom Confirm</button>
            </div>
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

<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.DialogVModel}/>

<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
    `,
    events: `
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
<StorybookDescriptions componentName={'Dialog'} type={'slots'}/>
    `
  }
}
