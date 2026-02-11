import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsTabItem: StorybookComponentsDescriptionItem = {
  name: 'TabItem',
  description: {
    en: 'Component for creating a tab or navigation element. Supports icons, labels, badges, and various states.',
    ru: 'Компонент для создания вкладки или элемента навигации. Поддерживает иконки, метки, бейджи и различные состояния.'
  },
  possibilities: {
    en: [
      'support for icons (leading and trailing)',
      'displaying a label',
      'integration with Badge for displaying counters or statuses',
      'support for active and disabled states',
      'ripple effect on click',
      'customizable tag (button, a, div, etc.)',
      'support for router links via `to` property'
    ],
    ru: [
      'поддержка иконок (слева и справа)',
      'отображение метки (label)',
      'интеграция с Badge для отображения счетчиков или статусов',
      'поддержка активного и отключенного состояний',
      'эффект ряби (ripple) при клике',
      'настраиваемый тег (button, a, div и т.д.)',
      'поддержка ссылок роутера через свойство `to`'
    ]
  },
  render: `
      <div class="wiki-storybook-flex">
        <DesignComponent v-bind="args"/>
        <DesignComponent v-bind="args"/>
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [],
  stories: [
    {
      id: 'TabItemBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent label="Tab 1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignComponent label="Tab 2" active/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Disabled</div>
            <DesignComponent label="Tab 3" disabled/>
          </div>
        </div>
      `
    },
    {
      id: 'TabItemIcons',
      name: {
        en: 'With Icons',
        ru: 'С иконками'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Icon</div>
            <DesignComponent label="Home" icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Trailing Icon</div>
            <DesignComponent label="Settings" icon-trailing="settings"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Both Icons</div>
            <DesignComponent label="Profile" icon="person" icon-trailing="arrow_drop_down"/>
          </div>
        </div>
      `
    },
    {
      id: 'TabItemBadge',
      name: {
        en: 'With Badge',
        ru: 'С бейджем'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Badge</div>
            <DesignComponent label="Messages" badge="5"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Dot Badge</div>
            <DesignComponent label="Updates" badge dot/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TabItem'} type={'basic'}/>
<Canvas of={Component.TabItemBasic}/>

<StorybookDescriptions componentName={'TabItem'} type={'icon'}/>
<Canvas of={Component.TabItemIcons}/>

<StorybookDescriptions componentName={'TabItem'} type={'badge'}/>
<Canvas of={Component.TabItemBadge}/>
    `,
    events: `
<StorybookDescriptions componentName={'TabItem'} type={'event.click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'TabItem'} type={'expose'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <TabItem v-bind="args"/>
</div>
    `,
    description: `
TabItem is a versatile component used for navigation tabs, menu items, or selectable lists.
It combines a label, optional icons (leading and trailing), and a badge for notifications.

**Key Features:**
1. **Content:**
   - \`label\`: The main text of the tab.
   - \`icon\`: Leading icon (displayed before the label).
   - \`iconTrailing\`: Trailing icon (displayed after the label).
   - \`badge\`: A value (number or string) displayed in a badge component.

2. **States:**
   - \`active\`: Highlights the tab as currently selected.
   - \`disabled\`: Disables interactions and changes visual appearance.
   - \`loading\`: Shows a loading state (via Skeleton).

3. **Navigation & Interaction:**
   - \`href\`: Makes the tab a link (\`<a>\`).
   - \`to\`: Makes the tab a router link (if using Vue Router).
   - \`tag\`: Allows changing the root element (default is \`button\`).
   - \`value\`: A value associated with the tab, useful for selection logic.

4. **Styling:**
   - Supports standard styling props like \`palette\`, \`design\`, etc. (inherited from basic props).

**Usage Examples:**

- **Simple Tab:** \`<TabItem label="Home" />\`
- **Active Tab:** \`<TabItem label="Profile" active />\`
- **Tab with Icon:** \`<TabItem label="Settings" icon="settings" />\`
- **Tab with Badge:** \`<TabItem label="Inbox" badge="3" />\`
- **Navigation Link:** \`<TabItem label="Go to Google" href="https://google.com" tag="a" />\`
    `
  }
}
