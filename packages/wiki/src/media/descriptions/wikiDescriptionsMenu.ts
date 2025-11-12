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

<StorybookDescriptions componentName={'Menu'} type={'ajax'}/>
<Canvas of={Component.MenuAjax}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.MenuVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  }
}
