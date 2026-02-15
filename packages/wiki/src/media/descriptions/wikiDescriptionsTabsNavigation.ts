import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsTabsNavigation: StorybookComponentsDescriptionItem = {
  name: 'TabsNavigation',
  description: {
    en: 'Component for managing navigation between tabs. Supports horizontal scrolling, selection management, and focus.',
    ru: 'Компонент для управления навигацией между вкладками. Поддерживает горизонтальную прокрутку, управление выделением и фокусом.'
  },
  possibilities: {
    en: [
      'horizontal scrolling of tabs',
      'management of the selected tab via `selected` and `list`',
      'keyboard support (arrows, Enter, Space)',
      'customization of tab appearance via `tag` and `itemAttrs`',
      'event support: `update:selected`, `update:modelSelected`'
    ],
    ru: [
      'горизонтальная прокрутка вкладок',
      'управление выбранной вкладкой через `selected` и `list`',
      'поддержка клавиатуры (стрелки, Enter, Пробел)',
      'настройка внешнего вида вкладок через `tag` и `itemAttrs`',
      'поддержка событий: `update:selected`, `update:modelSelected`'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'TabsNavigationBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      setup: `
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('2')
      return { list, selected }
      `,
      template: `
        <DesignComponent :list="list" v-model:selected="selected"/>
      `
    },
    {
      id: 'TabsNavigationVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('1')
      return { list, selected }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
              <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
              <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
              <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
            </div>
            <div class="wiki-storybook-item--padding">
              Current value: {{ selected }}
            </div>
            <DesignComponent :list="list" v-model:selected="selected"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TabsNavigation'} type={'tabsNavigation'}/>
<Canvas of={Component.TabsNavigationBasic}/>
<StorybookDescriptions componentName={'TabsNavigation'} type={'v-model'}/>
<Canvas of={Component.TabsNavigationVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `
  },
  ai: {
    description: `
TabsNavigation is a component for creating a horizontal navigation menu with tabs.
It manages the list of tabs, the selected item, and scrolling.

**Key Features:**
1. **Data List (\`list\`):**
   - Accepts an array of objects or an object describing the tabs.
   - Each item should contain a label (\`label\`) and a value (\`value\`).
   - You can customize the keys for label and value using \`keyLabel\` and \`keyValue\`.

2. **Selection Management (\`selected\`):**
   - Supports two-way binding (\`v-model:selected\`).
   - Determines which tab is currently active.
   - Can work with single or multiple selections (depending on implementation, usually single for tabs).

3. **Horizontal Scrolling:**
   - Automatically adds scrolling if tabs do not fit in the container.
   - Supports \`horizontalScrollFlush\` and \`horizontalScrollAlign\` to control scroll behavior.

4. **Keyboard Navigation:**
   - **Left/Right Arrows:** Move focus between tabs.
   - **Enter/Space:** Select the focused tab.

5. **Customization:**
   - \`tag\`: Allows changing the tag of the tab item (e.g., 'button', 'a').
   - \`itemAttrs\`: Allows passing additional attributes to each tab.
   - \`divider\`: Adds a separator (if supported by the design).

**Usage Examples:**

- **Basic:**
  \`<TabsNavigation :list="[{label: 'A', value: 'a'}, {label: 'B', value: 'b'}]" v-model:selected="currentTab" />\`

- **With Custom Keys:**
  \`<TabsNavigation :list="items" keyLabel="name" keyValue="id" v-model:selected="currentTab" />\`
    `
  }
}
