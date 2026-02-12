import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsTabItem: StorybookComponentsDescriptionItem = {
  name: 'TabItem',
  description: {
    en: 'A versatile component for creating tabs, navigation links, or list items. Supports icons, badges, labels, and various interactive states.',
    ru: 'Универсальный компонент для создания вкладок, навигационных ссылок или элементов списка. Поддерживает иконки, бейджи, метки и различные интерактивные состояния.'
  },
  possibilities: {
    en: [
      'displaying a label (`label`)',
      'leading and trailing icons (`icon`, `iconTrailing`)',
      'integrated badge support (`badge`)',
      'selection state (`selected`)',
      'disabled state (`disabled`)',
      'navigation support (`href`, `to`)',
      'customizable root tag (`tag`)',
      'ripple effect on click',
      'skeleton loading state'
    ],
    ru: [
      'отображение метки (`label`)',
      'иконки слева и справа (`icon`, `iconTrailing`)',
      'встроенная поддержка бейджа (`badge`)',
      'состояние выбора (`selected`)',
      'отключенное состояние (`disabled`)',
      'поддержка навигации (`href`, `to`)',
      'настраиваемый корневой тег (`tag`)',
      'эффект ряби при клике',
      'состояние загрузки (скелетон)'
    ]
  },
  render: `
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
    </div>
  `,
  stories: [
    {
      id: 'TabItemBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-flex-column">
            <DesignComponent label="Tab Item" />
            <DesignComponent label="Tab Item" icon="home" />
            <DesignComponent label="Messages" badge="5" />
            <DesignComponent label="Updates" badge-dot />
            <DesignComponent label="Selected Tab" selected />
            <DesignComponent label="Disabled Tab" disabled />
        </div>
      `
    },
    {
      id: 'TabItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Tab item</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TabItem'} type={'tabItem'}/>
<Canvas of={Component.TabItemBasic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TabItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
TabItem is a fundamental UI component designed for navigation bars, tab lists, and menus.
It encapsulates a label, optional icons, and a badge into a clickable element with built-in state management.

**Key Features:**

1.  **Content Structure:**
    -   **Label (\`label\`):** The primary text content.
    -   **Icons:** Supports a leading icon (\`icon\`) and a trailing icon (\`iconTrailing\`).
    -   **Badge (\`badge\`):** Integrated badge support for displaying counts or status dots.

2.  **Interactive States:**
    -   **Selected (\`selected\`):** Indicates the active or current item.
    -   **Disabled (\`disabled\`):** Prevents interaction and applies disabled styling.
    -   **Ripple:** Provides visual feedback on click (enabled by default).

3.  **Navigation:**
    -   **Link (\`href\`):** Renders as an \`<a>\` tag if provided.
    -   **Router Link (\`to\`):** Renders as a router link if provided (requires Vue Router).
    -   **Custom Tag (\`tag\`):** Allows rendering as any HTML tag (e.g., \`button\`, \`div\`, \`li\`).

4.  **Accessibility:**
    -   Automatically sets \`role="tab"\` (default) or other roles.
    -   Manages \`aria-selected\` and \`aria-disabled\` attributes based on props.
    -   Supports keyboard navigation via \`tabindex\`.

**Usage Examples:**

-   **Navigation Tab:**
    \`<TabItem label="Dashboard" icon="dashboard" :selected="currentTab === 'dashboard'" @click="currentTab = 'dashboard'" />\`

-   **Menu Item with Badge:**
    \`<TabItem label="Notifications" icon="notifications" badge="12" />\`

-   **External Link:**
    \`<TabItem label="Documentation" icon="description" href="https://docs.example.com" tag="a" />\`
    `
  }
}
