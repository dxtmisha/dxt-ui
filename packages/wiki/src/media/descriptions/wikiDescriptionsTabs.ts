import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Tabs component
 *
 * Описания свойств компонента Tabs
 */
export const wikiDescriptionsTabs: StorybookComponentsDescriptionItem = {
  name: 'Tabs',
  description: {
    en: 'Tabs component for switching between different views with animation',
    ru: 'Компонент вкладок для переключения между различными представлениями с анимацией'
  },
  possibilities: {
    en: [
      'switching between content sections',
      'animated transitions via MotionAxis',
      'navigation via TabsNavigation',
      'customizable tabs list',
      'dynamic content slots'
    ],
    ru: [
      'переключение между разделами контента',
      'анимированные переходы через MotionAxis',
      'навигация через TabsNavigation',
      'настраиваемый список вкладок',
      'динамические слоты контента'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
<DesignComponent v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</DesignComponent>
  `,
  stories: [
    {
      id: 'TabsBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      template: `
        <DesignComponent
          :tabs="[
            { label: 'Home', value: 'home' },
            { label: 'Profile', value: 'profile' }
          ]"
          selected="home"
        >
          <template #home>Home</template>
          <template #profile>Profile</template>
        </DesignComponent>
      `
    },
    {
      id: 'TabsVModel',
      name: {
        en: 'v-model',
        ru: 'v-model'
      },
      setup: `
      return {
        selected: ref('tab1')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Tab 3</button>
          </div>
          <div>Current value: {{ selected }}</div>

          <DesignComponent
            :tabs="[
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' },
            { label: 'Tab 3', value: 'tab3' }
          ]"
            v-model:selected="selected"
          >
            <template #tab1>Content 1</template>
            <template #tab2>Content 2</template>
            <template #tab3>Content 3</template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Tabs'} type={'tabs'}/>
<Canvas of={Component.TabsBasic}/>

<StorybookDescriptions componentName={'Tabs'} type={'v-model'}/>
<Canvas of={Component.TabsVModel}/>
    `
  },
  ai: {
    description: `
Tabs is a high-level compound component that integrates \`TabsNavigation\` (for the tab bar) and \`MotionAxis\` (for the content area) to provide a complete tabbed interface with animated transitions.

**Key Features:**
1. **Structure:**
   - **Navigation:** Automatically renders a \`TabsNavigation\` component based on the \`tabs\` prop.
   - **Content:** Renders the active tab's content inside a \`MotionAxis\` component, enabling smooth transitions (sliding/fading) between views.

2. **Data Binding:**
   - **\`tabs\`:** An array of objects defining the tabs (e.g., \`[{ label: 'Home', value: 'home' }]\`).
   - **\`selected\`:** The value of the currently active tab. Supports two-way binding (\`v-model:selected\`).

3. **Content Slots:**
   - Content for each tab is provided via **named slots**.
   - The slot name must correspond to the \`value\` property of the tab item.
   - **Example:** If you have a tab with \`value: 'settings'\`, you should provide a \`<template #settings>...</template>\` slot.

4. **Customization:**
   - Inherits properties from \`TabsNavigation\` (e.g., styling of the tab bar) and \`MotionAxis\` (e.g., \`axis\`, \`animation\`).

**Usage Example:**
\`<Tabs
  v-model:selected="activeTab"
  :tabs="[
    { label: 'Account', value: 'account' },
    { label: 'Security', value: 'security' }
  ]"
>
  <template #account>
    <AccountSettings />
  </template>
  <template #security>
    <SecuritySettings />
  </template>
</Tabs>\`
    `
  }
}
