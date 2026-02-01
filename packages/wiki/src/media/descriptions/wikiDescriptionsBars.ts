import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Bars component properties
 *
 * Описания свойств компонента Bars
 */
export const wikiDescriptionsBars: StorybookComponentsDescriptionItem = {
  name: 'Bars',
  description: {
    en: 'A versatile bar component for headers, toolbars, or action bars, displaying titles, descriptions, and interactive buttons.',
    ru: 'Универсальный компонент-панель для заголовков, панелей инструментов или панелей действий, отображающий заголовки, описания и интерактивные кнопки.'
  },
  possibilities: {
    en: [
      'Displays a primary label and a secondary description.',
      'Includes an optional back button for navigation.',
      'Supports a primary set of interactive buttons.',
      'Features an "action mode" with a separate set of buttons, label, and description.',
      'Allows full customization of button appearance and behavior.'
    ],
    ru: [
      'Отображает основной заголовок и дополнительное описание.',
      'Включает опциональную кнопку "назад" для навигации.',
      'Поддерживает основной набор интерактивных кнопок.',
      'Имеет "режим действия" с отдельным набором кнопок, заголовком и описанием.',
      'Позволяет полностью настраивать внешний вид и поведение кнопок.'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'BarsBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />

          <DesignComponent
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share' },
              { icon: 'edit' },
              { icon: 'delete' }
            ]"
          />
        </div>
      `
    },
    {
      id: 'BarsVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        isAction: ref(false)
      }
      `,
      template: `
        <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
        <DesignComponent
          v-model:action="isAction"
          label="Page Title"
          description="A concise description for this example"
          :bars="[
            { icon: 'search' },
            { icon: 'refresh' },
            { icon: 'more_vert' }
          ]"
          action-label="2 selected"
          action-description="Choose an action to apply"
          :action-bars="[
            { icon: 'share' },
            { icon: 'edit' },
            { icon: 'delete' }
          ]"
          style="margin-top: 8px;"
        />
      `
    },
    {
      id: 'BarsSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Bars'} type={'bars'}/>
<StorybookDescriptions componentName={'Bars'} type={'action'}/>
<Canvas of={Component.BarsBasic}/>
<StorybookDescriptions componentName={'Bars'} type={'v-model'}/>
<Canvas of={Component.BarsVModel}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BarsSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Bars'} type={'slots'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Bars is a structural component used as a header, toolbar, or action bar.
It typically sits at the top of a page, card, or window to provide context (title) and actions.

**Key Features:**
1. **Content Structure:**
   - \`label\`: The main title (e.g., page name).
   - \`description\`: Subtitle or additional context.
   - \`backButton\`: Configuration for the navigation button on the left (e.g., arrow back, menu).

2. **Action Buttons (\`bars\`):**
   - Accepts an array of button configurations (props for \`Button\` component).
   - Rendered on the right side.
   - Useful for primary page actions (Search, Filter, Settings).

3. **Action Mode (Contextual State):**
   - Activated via \`action\` prop (boolean).
   - Switches the UI to a specific state (e.g., when items are selected in a list).
   - **Overrides:**
     - \`label\` -> \`actionLabel\`
     - \`description\` -> \`actionDescription\`
     - \`bars\` -> \`actionBars\`
   - The back button usually transforms into a "Close" or "Cancel" action in this mode.

**Usage Examples:**

- **Standard Header:** \`<Bars label="Dashboard" :bars="[{ icon: 'notifications' }]" />\`
- **With Back Button:** \`<Bars label="Settings" :back-button="{ icon: 'arrow_back' }" />\`
- **Contextual Action Bar:**
  \`<Bars :action="selectedCount > 0" :action-label="\`\${selectedCount} selected\`" :action-bars="[{ icon: 'delete' }]" />\`
      `
  }
}
