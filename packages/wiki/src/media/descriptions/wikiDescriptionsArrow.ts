import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Arrow component properties
 *
 * Описания свойств компонента Arrow
 */
export const wikiDescriptionsArrow: StorybookComponentsDescriptionItem = {
  name: 'Arrow',
  description: {
    en: 'Component for displaying an arrow or directional indicator',
    ru: 'Компонент для отображения стрелки или индикатора направления'
  },
  possibilities: {
    en: [
      'displaying directional arrows',
      'customizable size and color',
      'rotation support'
    ],
    ru: [
      'отображение направляющих стрелок',
      'настраиваемый размер и цвет',
      'поддержка вращения'
    ]
  },
  import: [],
  render: `
      <div
        class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
      >
        <div style="width: 256px; height: 128px; border-radius: 16px; background-color: oklch(0.692 0.16 240.379 / 0.64)">
          <DesignComponent v-bind="args"/>
        </div>
      </div>
    `,
  stories: [
    {
      id: 'ArrowBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div
          class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
        >
          <div style="position: relative; width: 256px; height: 128px; border-radius: 16px; background-color: oklch(0.692 0.16 240.379 / 0.64); border: 4px solid #00a2ee;">
            <DesignComponent v-bind="args"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Arrow'} type={'arrow'}/>
`
  }
}
