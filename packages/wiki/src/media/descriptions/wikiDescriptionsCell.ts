import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Cell component properties
 *
 * Описания свойств компонента Cell
 */
export const wikiDescriptionsCell: StorybookComponentsDescriptionItem = {
  name: 'Cell',
  description: {
    en: 'Versatile container component for displaying structured content with labels, descriptions, and actions',
    ru: 'Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями'
  },
  possibilities: {
    en: [
      'flexible content structure with label, description, and caption',
      'interactive states including focus, selected, and disabled',
      'built-in icon and trailing icon support',
      'progress indicator integration',
      'divider customization options',
      'dynamic behavior with hover interactions',
      'skeleton loading state support',
      'click event handling with custom data'
    ],
    ru: [
      'гибкая структура контента с меткой, описанием и подписью',
      'интерактивные состояния включая focus, selected и disabled',
      'встроенная поддержка иконок и завершающих иконок',
      'интеграция индикатора прогресса',
      'возможности настройки разделителей',
      'динамическое поведение с взаимодействием при наведении',
      'поддержка состояния загрузки скелетона',
      'обработка событий клика с пользовательскими данными'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    `,
  import: [],
  stories: [
    {
      id: 'CellBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Simple cell</div>
            <DesignComponent label="Cell label">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With description</div>
            <DesignComponent label="Cell label" description="Cell description">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With caption</div>
            <DesignComponent label="Cell label" description="Cell description" caption="Caption">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With icon</div>
            <DesignComponent label="Cell label" description="Cell description" icon="home">Cell</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'CellStates',
      name: {
        en: 'States',
        ru: 'Состояния'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent label="Cell label" description="Default state">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent label="Cell label" description="Selected state" :selected="true">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Disabled</div>
            <DesignComponent label="Cell label" description="Disabled state" :disabled="true">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Read only</div>
            <DesignComponent label="Cell label" description="Read only state" :readonly="true">Cell</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'CellDivider',
      name: {
        en: 'Divider options',
        ru: 'Варианты разделителей'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With divider</div>
            <DesignComponent label="Cell label" description="With divider" :divider="true">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Divider always</div>
            <DesignComponent label="Cell label" description="Divider always visible" :divider="true" dividerLabel="always">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Divider none</div>
            <DesignComponent label="Cell label" description="No divider label" :divider="true" dividerLabel="none">Cell</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'CellDynamic',
      name: {
        en: 'Dynamic behavior',
        ru: 'Динамическое поведение'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Dynamic</div>
            <DesignComponent label="Cell label" description="Dynamic cell" :dynamic="true">Cell</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Dynamic hover</div>
            <DesignComponent label="Cell label" description="Dynamic with hover" :dynamic="true" :dynamicHover="true">Cell</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'CellSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">With skeleton</div>
            <DesignSkeleton :active="true">
              <DesignComponent label="Cell label" description="Cell description" :isSkeleton="true">Cell</DesignComponent>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Without skeleton</div>
            <DesignSkeleton :active="true">
              <DesignComponent label="Cell label" description="Cell description" :isSkeleton="false">Cell</DesignComponent>
            </DesignSkeleton>
          </div>
        </div>
      `
    }
  ]
}
