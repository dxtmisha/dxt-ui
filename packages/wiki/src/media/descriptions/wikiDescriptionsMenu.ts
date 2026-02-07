import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Menu component properties
 *
 * Описания свойств компонента Menu
 */
export const wikiDescriptionsMenu: StorybookComponentsDescriptionItem = {
  name: 'Menu',
  description: {
    en: 'Composite menu that combines Window, Bars, and List for nested interactive navigation',
    ru: 'Составной компонент, объединяющий Window, Bars и List для вложенной интерактивной навигации'
  },
  possibilities: {
    en: [
      'popup container from Window with control/title/footer slots',
      'toolbar actions via Bars and hierarchical items via List',
      'nested groups and menus with keyboard focus and selection',
      'lightweight rendering for large menus (lite + liteThreshold)',
      'custom fields mapping with keyLabel and keyValue',
      'custom item attributes and container attributes (itemAttrs, listAttrs)'
    ],
    ru: [
      'всплывающий контейнер из Window со слотами control/title/footer',
      'действия панели через Bars и иерархия пунктов через List',
      'вложенные группы и меню с фокусом с клавиатуры и выбором',
      'облегчённый рендер для больших меню (lite + liteThreshold)',
      'кастомное сопоставление полей через keyLabel и keyValue',
      'настройка атрибутов пунктов и списка (itemAttrs, listAttrs)'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </DesignComponent>
  `,
  stories: [
    {
      id: 'MenuNavigation',
      name: {
        en: 'Navigation with previous/next',
        ru: 'Навигация с previous/next'
      },
      setup: `
      return {
        selectedValue: ref('color2'),
        colors: ref([
          {label: '[1]Red', value: 'color1', icon: 'palette'},
          {label: '[2]Green', value: 'color2', icon: 'palette'},
          {label: '[3]Blue', value: 'color3', icon: 'palette'},
          {label: '[4]Yellow', value: 'color4', icon: 'palette'},
          {label: '[5]Purple', value: 'color5', icon: 'palette'},
          {label: '[6]Orange', value: 'color6', icon: 'palette'}
        ]),
        step: ref(1)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">Step size:</div>
            <div class="wiki-storybook-flex">
              <button class="wiki-storybook-button" @click="step = 1">1 item</button>
              <button class="wiki-storybook-button" @click="step = 2">2 items</button>
              <button class="wiki-storybook-button" @click="step = 3">3 items</button>
            </div>
          </div>

          <DesignComponent
            v-model:selected="selectedValue"
            :list="colors"
            :step="step"
            is-selected-by-value
          >
            <template #control="{previous, next, selectedNames, open}">
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <div class="wiki-storybook-flex">
                  <button
                    class="wiki-storybook-button"
                    @click="previous"
                    style="padding: 4px 12px;"
                  >
                    ◀ Previous
                  </button>
                  <div style="flex: 1; text-align: center; font-weight: 500;">
                    {{ selectedNames.value[0] || 'None' }}
                  </div>
                  <button
                    class="wiki-storybook-button"
                    @click="next"
                    style="padding: 4px 12px;"
                  >
                    Next ▶
                  </button>
                </div>
              </div>
            </template>
          </DesignComponent>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div>Selected: {{ selectedValue }}</div>
            <div>Step: {{ step }}</div>
          </div>
        </div>
      `
    },
    {
      id: 'MenuAjax',
      name: {
        en: 'AJAX Loading',
        ru: 'AJAX Загрузка'
      },
      setup: `
        const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([
          {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},
          {label: 'Users', value: 'users', icon: 'people'},
          {label: 'Settings', value: 'settings', icon: 'settings'},
          {label: 'Reports', value: 'reports', icon: 'assessment'}
        ]), 512))

        return { loadMenuData }
      `,
      template: `
        <DesignComponent :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </DesignComponent>
      `
    },
    {
      id: 'MenuVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        selectedValue: ref('settings'),
        menuItems: ref([
          {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},
          {label: 'Users', value: 'users', icon: 'people'},
          {label: 'Settings', value: 'settings', icon: 'settings'},
          {label: 'Reports', value: 'reports', icon: 'assessment'},
          {label: 'Help', value: 'help', icon: 'help'}
        ])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selectedValue = 'dashboard'">Select Dashboard</button>
            <button class="wiki-storybook-button" @click="selectedValue = 'reports'">Select Reports</button>
            <button class="wiki-storybook-button" @click="selectedValue = ''">Clear</button>
          </div>
          <div class="wiki-storybook-flex">
            <DesignComponent
              v-model:selected="selectedValue"
              :list="menuItems"
              is-selected-by-value
            >
              <template #control="{binds}">
                <button class="wiki-storybook-button" v-bind="binds">
                  Open Menu
                </button>
              </template>
            </DesignComponent>
          </div>
          <div>Selected value: {{ selectedValue }}</div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Menu'} type={'menu'}/>

<StorybookDescriptions componentName={'Menu'} type={'navigation'}/>
<Canvas of={Component.MenuNavigation}/>

<StorybookDescriptions componentName={'Menu'} type={'ajax'}/>
<Canvas of={Component.MenuAjax}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.MenuVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Menu'} type={'expose.navigation'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<StorybookDescriptions componentName={'Menu'} type={'slotsControl'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Menu embedded :window-attrs="{open: true}" v-bind="args">
    <template #control="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Open Menu
      </button>
    </template>
  </Menu>
</div>
    `,
    description: `
Menu is a comprehensive dropdown component used for navigation, actions, and selection.
It combines a trigger (Control), a popup container (Window), and a structured list (List).

**Key Features:**
1. **Structure:**
   - **Control Slot (\`#control\`):** The trigger element (e.g., Button, Avatar). Receives \`binds\` (click/keydown handlers) which **must** be applied.
   - **Popup:** Opens a floating window positioned relative to the trigger.
   - **Content:** Renders a list of items defined in the \`list\` prop.

2. **Data Model (\`list\` prop):**
   - Array of objects: \`{ label, value, icon, disabled, to, ... }\`.
   - Supports special types: \`line\` (separator), \`group\` (headers), \`menu\` (nested submenus).

3. **Interaction:**
   - **Selection:** Tracks selected values via \`v-model:selected\`.
   - **Navigation:** Supports keyboard navigation (Arrows, Enter, Esc).
   - **Async:** Can load data dynamically using the \`ajax\` prop.

**When to use:**
- **Dropdown Menus:** For user profile menus, settings, or navigation.
- **Context Menus:** For right-click actions.
- **Select-like UI:** When a standard select is not enough (needs icons, groups, custom rendering).

**Usage Examples:**

- **Basic Menu:**
  \`<Menu :list="[{ label: 'Item 1' }, { label: 'Item 2' }]">
     <template #control="{ binds }">
       <button v-bind="binds">Options</button>
     </template>
   </Menu>\`

- **With Selection:**
  \`<Menu
     v-model:selected="currentValue"
     :list="options"
   >
     <template #control="{ binds }">
       <button v-bind="binds">Select: {{ currentValue }}</button>
     </template>
   </Menu>\`
    `
  }
}
