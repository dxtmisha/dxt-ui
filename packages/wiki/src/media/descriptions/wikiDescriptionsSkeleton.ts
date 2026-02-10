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
Skeleton is a structural component used to display a loading state (placeholder) for content.
It creates an animated "ghost" version of the UI to improve perceived performance and prevent layout shifts (CLS).

**Key Features:**
1. **Activation (\`active\`):**
   - The \`active\` prop controls the visibility of the skeleton effect.
   - When \`true\`, the component applies loading styles and accessibility attributes.

2. **Context & Inheritance:**
   - Uses Vue's \`provide\`/\`inject\` mechanism.
   - Child components (like \`Image\`, \`Field\`, \`Chip\`) automatically detect if they are inside an active \`Skeleton\` and switch to their own skeleton view without needing individual props.

3. **Styling Classes (Slot Props):**
   - The component exposes CSS classes via the default slot to style raw HTML elements.
   - **Text:** \`classText\` (lines), \`classTextVariant\` (headings).
   - **Background:** \`classBackground\` (blocks, images), \`classBackgroundVariant\`.
   - **Border:** \`classBorder\` (outlines).

4. **Accessibility:**
   - Automatically applies \`aria-busy="true"\` and \`aria-live="polite"\` to the wrapper.

**Usage Examples:**

- **Wrapping Smart Components:**
  \`<Skeleton :active="isLoading">
     <div class="profile">
       <Image :value="user.avatar" /> <!-- Auto-skeleton -->
       <Field :value="user.name" readonly /> <!-- Auto-skeleton -->
     </div>
   </Skeleton>\`

- **Manual Structure (using slot classes):**
  \`<Skeleton :active="isLoading" v-slot="{ classes }">
     <div :class="classes.classBackground" style="height: 200px"></div>
     <h3 :class="classes.classTextVariant"></h3>
     <p :class="classes.classText"></p>
   </Skeleton>\`
    `
  }
}
