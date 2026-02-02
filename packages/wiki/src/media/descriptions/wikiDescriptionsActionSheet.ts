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
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </DesignComponent>
      `
    },
    {
      id: 'ActionSheetTouchClose',
      name: {
        en: 'Touch gesture to close',
        ru: 'Закрытие жестом'
      },
      setup: `
      return {
        openWithTouch: ref(false),
        openWithoutTouch: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="openWithTouch = true">
            With Touch Close ({{ openWithTouch }})
          </button>
          <button class="wiki-storybook-button" @click="openWithoutTouch = true">
            Without Touch Close ({{ openWithoutTouch }})
          </button>
        </div>

        <DesignComponent v-model:open="openWithTouch" :touchClose="true">
          <template #title>
            Swipe Down to Close
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Enabled</strong>
                <p>This action sheet can be closed by swiping down on the title area. Notice the tab indicator at the top that signals the drag interaction.</p>
                <p>Try swiping down on the header to close this panel. This follows iOS and Material Design patterns for mobile interfaces.</p>
              </div>
            </div>
          </template>
        </DesignComponent>

        <DesignComponent v-model:open="openWithoutTouch" :touchClose="false">
          <template #title>
            No Swipe Gesture
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Disabled</strong>
                <p>This action sheet cannot be closed by swiping down. The tab indicator is not displayed, and touch gestures are disabled.</p>
                <p>You must use the backdrop click or close button to dismiss this panel. This is useful when you want to prevent accidental dismissal.</p>
              </div>
            </div>
          </template>
          <template #footer="{classesWindow}">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Close</button>
          </template>
        </DesignComponent>
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

          <template #title>
            Action Sheet Title Slot
          </template>

          <template #default>
            <div class="wiki-storybook-item--padding">
              <h4>Default Slot Content</h4>
              <p>This is the main content area of the action sheet. You can place any content here including action lists, forms, or other components.</p>

              <div class="wiki-storybook-info">
                <strong>Available slots:</strong>
                <ul>
                  <li><code>#control</code> - trigger button or element</li>
                  <li><code>#title</code> - action sheet header/title area</li>
                  <li><code>#default</code> - main content area</li>
                  <li><code>#footer</code> - footer with actions or cancel button</li>
                </ul>
              </div>

              <p>Each slot receives control props that allow you to interact with the action sheet programmatically, such as closing it or accessing window classes. The component slides up from the bottom with touch gesture support.</p>
            </div>
          </template>

          <template #footer="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ActionSheet'} type={'actionSheet'}/>

<StorybookDescriptions componentName={'ActionSheet'} type={'touchClose'}/>
<Canvas of={Component.ActionSheetTouchClose}/>

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
ActionSheet is a mobile-optimized modal component that slides up from the bottom of the screen (Bottom Sheet).
It is designed to present a set of actions, choices, or secondary content, following standard mobile interface patterns (iOS/Material).

**Note:** The \`embedded\` prop is used only for documentation examples to render the component inline. Do not use it in production code.

**Key Features:**
1. **Positioning & Animation:**
   - Anchored to the bottom of the viewport.
   - Slides up with an animation when opened.
   - Renders a backdrop (overlay) to block background interactions.

2. **Mobile Interactions:**
   - **Touch Close:** Supports swiping down on the header to close the sheet (controlled by the \`touchClose\` prop).
   - **Backdrop:** Clicking the overlay closes the sheet.
   - **Scroll:** Automatically handles internal scrolling if content exceeds height.

3. **Slots Structure:**
   - \`#control\` - The trigger element (e.g., a button). Receives \`binds\` to toggle visibility.
   - \`#title\` - The header area. Often contains the title and the drag handle (indicator).
   - \`#default\` - The main content area.
   - \`#footer\` - The bottom area, typically used for a "Cancel" button or primary actions.

**Usage Examples:**

- **With Trigger:**
  \`<ActionSheet>
     <template #control="{ binds }">
       <button v-bind="binds">Open Menu</button>
     </template>
     <template #title>Select Option</template>
     <template #default>
       <p>List of options...</p>
     </template>
   </ActionSheet>\`

- **Programmatic Control:**
  \`<ActionSheet v-model:open="isOpen" touch-close>
     <template #default>Content</template>
   </ActionSheet>\`
    `
  }
}
