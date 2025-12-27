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
        <div
          style="
            position: relative;
            width: 256px;
            height: 128px;
            border-radius: 16px;
            background-color: oklch(93.2% 0.032 255.585);
            border: 2px solid oklch(80.9% 0.105 251.813);
            box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
          "
        >
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
          <div style="position: relative; width: 256px; height: 128px; border-radius: 16px; background-color: oklch(0.692 0.16 240.379 / 0.64); border: 4px solid #00a2ee; overflow: auto; padding: 8px;">
            <p style="margin: 0;">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
            </p>
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
