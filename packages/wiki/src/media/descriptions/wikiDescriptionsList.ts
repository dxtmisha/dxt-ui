import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for List component properties
 *
 * Описания свойств компонента List
 */
export const wikiDescriptionsList: StorybookComponentsDescriptionItem = {
  name: 'List',
  description: {
    en: 'Advanced list component with keyboard navigation, search functionality, and hierarchical data support',
    ru: 'Продвинутый компонент списка с навигацией с клавиатуры, функциональностью поиска и поддержкой иерархических данных'
  },
  possibilities: {
    en: [
      'keyboard navigation with arrow keys and shortcuts',
      'real-time search and highlight functionality',
      'hierarchical data structure with groups and menus',
      'focus management and item selection',
      'lightweight rendering mode for large datasets',
      'customizable item types and rendering',
      'event-driven interaction system',
      'accessibility support with ARIA attributes',
      'automatic scroll management and viewport optimization',
      'integration with icons, badges, and other components'
    ],
    ru: [
      'навигация с клавиатуры со стрелками и горячими клавишами',
      'поиск в реальном времени и функциональность выделения',
      'иерархическая структура данных с группами и меню',
      'управление фокусом и выбором элементов',
      'облегченный режим рендеринга для больших наборов данных',
      'настраиваемые типы элементов и рендеринг',
      'событийно-ориентированная система взаимодействия',
      'поддержка доступности с ARIA атрибутами',
      'автоматическое управление прокруткой и оптимизация области просмотра',
      'интеграция с иконками, бейджами и другими компонентами'
    ]
  },
  stories: [
    {
      id: 'ListHighlight',
      name: {
        en: 'Highlighting',
        ru: 'Выделение'
      },
      template: `
        <DesignComponent
          :list="[
            {label: 'Project index example', value: 'projects', icon: 'folder'},
            {label: 'Advanced context options', value: 'experiments', icon: 'tune'},
            {label: 'Next examination notes', value: 'example', icon: 'description'},
            {label: 'User experience metrics', value: 'express', icon: 'insights'}
          ]"
          highlight="exam"
          :highlightLengthStart="4"
        />
      `
    },
    {
      id: 'ListLiteMode',
      name: {
        en: 'Lite mode',
        ru: 'Облегчённый режим'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Without lite</div>
            <DesignComponent
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">With lite</div>
            <DesignComponent
              :lite="true"
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'List'} type={'list'}/>

<StorybookDescriptions componentName={'List'} type={'lite'}/>
<Canvas of={Component.ListLiteMode}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.ListHighlight}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
<StorybookDescriptions componentName={'List'} type={'event.close'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'isSelected'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedList'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedNames'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedValues'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `
  }
}
