import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ActionSheet component properties
 *
 * Описания свойств компонента ActionSheet
 */
export const wikiDescriptionsActionSheet: StorybookComponentsDescriptionItem = {
  name: 'ActionSheet',
  description: {
    en: 'Mobile-optimized modal component for displaying a list of actions or choices that slide up from the bottom',
    ru: 'Мобильно-оптимизированный модальный компонент для отображения списка действий или выборов, выдвигающийся снизу'
  },
  possibilities: {
    en: [
      'bottom-anchored modal panel with smooth slide-up animation',
      'displays primary and secondary action lists',
      'supports cancel button and custom actions',
      'mobile-first design with touch-friendly interface',
      'backdrop click to close functionality',
      'keyboard accessibility support',
      'integration with List and Actions components',
      'customizable appearance and positioning',
      'automatic height adjustment based on content',
      'support for grouped actions with separators'
    ],
    ru: [
      'модальная панель, закрепленная снизу, с плавной анимацией выдвижения',
      'отображает основной и второстепенный списки действий',
      'поддержка кнопки отмены и пользовательских действий',
      'мобильно-ориентированный дизайн с удобным сенсорным интерфейсом',
      'закрытие при клике на подложку',
      'поддержка доступности с клавиатуры',
      'интеграция с компонентами List и Actions',
      'настраиваемый внешний вид и позиционирование',
      'автоматическая подстройка высоты под контент',
      'поддержка группировки действий с разделителями'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet</button>
        </template>

        <template #title>
          <h3 class="wiki-storybook-item--padding">Action Sheet Menu</h3>
        </template>

        <template #default>
          <div class="wiki-storybook-item--padding">
            <h4>Mobile Action Sheet Component</h4>
            <p>The Action Sheet component provides a mobile-optimized interface for presenting users with a set of actions or choices. It slides up from the bottom of the screen, following familiar patterns from iOS and Material Design guidelines.</p>

            <p>This component is particularly effective for contextual actions related to specific content, such as sharing options, editing tools, or destructive operations. The bottom-anchored design makes it easily accessible on mobile devices while maintaining a clear visual hierarchy.</p>

            <h4>Key Features</h4>
            <p>The Action Sheet includes support for primary and secondary action lists, allowing you to group related actions logically. It automatically handles touch interactions, backdrop dismissal, and keyboard accessibility, ensuring a consistent user experience across different input methods.</p>

            <p>Integration with List and Actions components provides flexibility in content presentation, while the customizable appearance adapts seamlessly to different design systems and brand requirements. The component automatically adjusts its height based on content, preventing overflow issues while maintaining optimal usability.</p>
          </div>
        </template>

        <template #footer="{classesWindow}">
          <div class="wiki-storybook-flex wiki-storybook-item--padding">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
          </div>
        </template>
      </DesignComponent>
    `,
  stories: [
    {
      id: 'ActionSheetBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      setup: `
        return {
          actionItems: [
            { label: 'Share', value: 'share', icon: 'share' },
            { label: 'Copy Link', value: 'copy', icon: 'content_copy' },
            { label: 'Download', value: 'download', icon: 'download' },
            { label: 'Delete', value: 'delete', icon: 'delete', destructive: true }
          ]
        }
      `,
      template: `
        <DesignComponent :list="actionItems">
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Show Actions</button>
          </template>
        </DesignComponent>
      `
    },
    {
      id: 'ActionSheetGrouped',
      name: {
        en: 'Grouped Actions',
        ru: 'Сгруппированные действия'
      },
      setup: `
        return {
          primaryActions: [
            { label: 'Save to Gallery', value: 'save', icon: 'save' },
            { label: 'Add to Favorites', value: 'favorite', icon: 'favorite' }
          ],
          secondaryActions: [
            { label: 'Report', value: 'report', icon: 'flag' },
            { label: 'Block User', value: 'block', icon: 'block' }
          ]
        }
      `,
      template: `
        <DesignComponent :list="primaryActions" :listSecondary="secondaryActions">
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Show Grouped Actions</button>
          </template>
        </DesignComponent>
      `
    },
    {
      id: 'ActionSheetWithCancel',
      name: {
        en: 'With Cancel Button',
        ru: 'С кнопкой отмены'
      },
      setup: `
        return {
          actions: [
            { label: 'Edit Profile', value: 'edit', icon: 'edit' },
            { label: 'Settings', value: 'settings', icon: 'settings' },
            { label: 'Sign Out', value: 'signout', icon: 'logout' }
          ]
        }
      `,
      template: `
        <DesignComponent :list="actions" cancel>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ActionSheet'} type={'actionSheet'}/>
<StorybookDescriptions componentName={'ActionSheet'} type={'classes'}/>
<StorybookDescriptions componentName={'ActionSheet'} type={'basicUsage'}/>
<Canvas of={Component.ActionSheetBasic}/>
<StorybookDescriptions componentName={'ActionSheet'} type={'groupedActions'}/>
<Canvas of={Component.ActionSheetGrouped}/>
<StorybookDescriptions componentName={'ActionSheet'} type={'cancelButton'}/>
<Canvas of={Component.ActionSheetWithCancel}/>
<StorybookDescriptions componentName={'ActionSheet'} type={'hooks'}/>
    `,
    events: `
<StorybookDescriptions componentName={'ActionSheet'} type={'event.actionSheet'}/>
<StorybookDescriptions componentName={'Actions'} type={'emits-include'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'ActionSheet'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ActionSheet'} type={'slots'}/>
    `
  }
}
