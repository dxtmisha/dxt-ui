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
      'child elements react to the skeleton state via `isSkeleton` property or special classes',
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
    'import { image1 } from \'@dxtmisha/wiki/media\''
  ],
  stories: [
    {
      id: 'SkeletonBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">text</div>
            <DesignComponent :active="true">
              <div class="design-component__text">Text placeholder</div>
              <div class="design-component__text">Text placeholder</div>
              <div class="design-component__text">Text placeholder</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">textVariant</div>
            <DesignComponent :active="true">
              <div class="design-component__textVariant">Text placeholder</div>
              <div class="design-component__textVariant">Text placeholder</div>
              <div class="design-component__textVariant">Text placeholder</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">background</div>
            <DesignComponent :active="true">
              <div
                class="design-component__background"
                style="width: 128px; height: 128px;"
              >
                Text placeholder
              </div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">backgroundVariant</div>
            <DesignComponent :active="true">
              <div
                class="design-component__backgroundVariant"
                style="width: 128px; height: 128px;"
              >
                Background Variant
              </div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">border</div>
            <DesignComponent :active="true">
              <div
                class="design-component__border"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border placeholder
              </div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">borderVariant</div>
            <DesignComponent :active="true">
              <div
                class="design-component__borderVariant"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border Variant
              </div>
            </DesignComponent>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Skeleton'} type={'active'}/>
<StorybookDescriptions componentName={'Skeleton'} type={'classes'}/>
<Canvas of={Component.SkeletonBasic}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Skeleton'} type={'expose.isActive'}/>
    `
  },
  ai: {
    description: `
Structural layout utility designed to display animated loading placeholders (ghost versions) for UI elements. Improves perceived performance and prevents Cumulative Layout Shift (CLS) by reserving space for incoming content.
Features a logic-sharing mechanism via provide/inject that allows child components (Field, Image, Chip) to automatically switch to their skeleton states without individual props. Exposes specialized CSS classes through slot props for styling raw HTML elements as text lines, backgrounds, or borders.
Controlled via the active prop to toggle the global loading state and accessibility Busy/Live attributes. Use as a wrapper for sections or entire pages during data fetching to maintain structural integrity and a high-quality user experience.
    `
  }
}
