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
          Action Sheet Menu
        </template>

        <template #default>
          <h4>Mobile Action Sheet Component</h4>
          <p>The Action Sheet component provides a mobile-optimized interface for presenting users with a set of actions or choices. It slides up from the bottom of the screen, following familiar patterns from iOS and Material Design guidelines.</p>

          <p>This component is particularly effective for contextual actions related to specific content, such as sharing options, editing tools, or destructive operations. The bottom-anchored design makes it easily accessible on mobile devices while maintaining a clear visual hierarchy.</p>

          <h4>Key Features</h4>
          <p>The Action Sheet includes support for primary and secondary action lists, allowing you to group related actions logically. It automatically handles touch interactions, backdrop dismissal, and keyboard accessibility, ensuring a consistent user experience across different input methods.</p>

          <p>Integration with List and Actions components provides flexibility in content presentation, while the customizable appearance adapts seamlessly to different design systems and brand requirements. The component automatically adjusts its height based on content, preventing overflow issues while maintaining optimal usability.</p>
        </template>
      </DesignComponent>
    `,
  stories: [
    {
      id: 'ActionSheetVModel',
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <DesignComponent v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'ActionSheetAllSlots',
      name: {
        en: 'All slots demonstration',
        ru: 'Демонстрация всех слотов'
      },
      template: `
        <DesignComponent>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet with All Slots</button>
          </template>

          <template #title>Title slot</template>
          <template #default>Default slot</template>
          <template #footer>Footer slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ActionSheet'} type={'actionSheet'}/>
<StorybookDescriptions componentName={'ActionSheet'} type={'touchClose'}/>

<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.ActionSheetVModel}/>

<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,
    slots: `
<Canvas of={Component.ActionSheetAllSlots}/>
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item" style="min-width: 800px;">
  <ActionSheet embedded open v-bind="args">
    <template #control="{ binds }">
      <button v-bind="binds">Open Menu</button>
    </template>
    <template #default>Content goes here...</template>
  </ActionSheet>
</div>
    `,
    description: `
Mobile-optimized modal component (Bottom Sheet) that slides up from the bottom for actions, choices, or secondary content. Follows standard mobile interface patterns (iOS/Material).
Features touch-gestures (swipe-down to close), backdrop dismissal, and keyboard accessibility. Includes primary/secondary action lists and automatic height adjustment based on content.
Highly flexible with slots (#control, #title, #default, #footer) and controlled primarily via v-model:open. Use for mobile-focused menus, sharing options, or contextual actions.
    `
  }
}
