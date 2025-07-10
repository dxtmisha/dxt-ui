import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsSkeleton: StorybookComponentsDescriptionItem = {
  name: 'Skeleton',
  description: {
    en: 'Skeleton component for displaying loading placeholders',
    ru: 'Компонент для отображения заглушки загрузки. Создает анимированные плейсхолдеры для контента во время загрузки данных'
  },
  possibilities: {
    en: [
      'animated loading placeholders for content',
      'control visibility with `active` property',
      'child elements react to skeleton state via `isSkeleton` property or special classes',
      'customizable appearance and animation'
    ],
    ru: [
      'анимированные заглушки загрузки для контента',
      'управление видимостью через свойство `active`',
      'дочерние элементы реагируют на состояние скелетона через свойство `isSkeleton` или специальные классы',
      'настраиваемый внешний вид и анимация'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <div class="wiki-storybook-card design-component__background">
        <div class="wiki-storybook-card__image design-component__background" style="background-image: url('\${image1}')"/>
        <div class="wiki-storybook-card__content">
          <div>
            <div class="wiki-storybook-card__label design-component__text">Product Name</div>
            <div class="wiki-storybook-card__information design-component__textVariant">Short description</div>
          </div>
          <div class="wiki-storybook-card__description design-component__text">
            Detailed product description that tells about its main features and advantages.
          </div>
          <div class="wiki-storybook-card__actions">
            <button class="wiki-storybook-button design-component__background">Buy Now</button>
          </div>
        </div>
      </div>
    </DesignComponent>
  `,
  import: [
    'import { image1 } from \'@dxt-ui/wiki/media\''
  ],
  stories: [
    {
      id: 'SkeletonBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      setup: `
      return {}
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Active skeleton</div>
            <DesignComponent :active="true">
              <div>Loading content...</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Inactive skeleton</div>
            <DesignComponent :active="false">
              <div>Loaded content</div>
            </DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'SkeletonWithChildElements',
      name: {
        en: 'With child elements',
        ru: 'С дочерними элементами'
      },
      setup: `
      return {}
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Child elements with isSkeleton=true</div>
            <DesignComponent :active="true">
              <div :isSkeleton="true">Visible in skeleton mode</div>
              <div :isSkeleton="false">Hidden in skeleton mode</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Normal state</div>
            <DesignComponent :active="false">
              <div :isSkeleton="true">Normal content 1</div>
              <div :isSkeleton="false">Normal content 2</div>
            </DesignComponent>
          </div>
        </div>
      `
    }
  ]
}
