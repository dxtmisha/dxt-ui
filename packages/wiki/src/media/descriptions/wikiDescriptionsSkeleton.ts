import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Skeleton component properties
 *
 * Описания свойств компонента Skeleton
 */
export const wikiDescriptionsSkeleton: StorybookComponentsDescriptionItem = {
  name: 'Skeleton',
  description: {
    en: 'Structural loading container that transforms interface markup and child components into animated skeleton placeholders during data fetching.',
    ru: 'Структурный контейнер загрузки, трансформирующий разметку интерфейса и дочерние компоненты в анимированные заглушки во время получения данных.'
  },
  possibilities: {
    en: [
      'zero-duplication animated loading placeholders for HTML markup and design system components',
      'visibility and content masking control via `active` and `invisible` properties',
      'configurable appearance and hiding delays (`delay`, `delayHide`) to prevent layout flicker',
      'automatic state propagation to nested `Skeleton` containers and child components (`isSkeleton`) via `provide` / `inject`',
      '9 utility CSS classes (`text`, `textVariant`, `background`, `backgroundBefore`, `backgroundAfter`, `backgroundVariant`, `border`, `borderVariant`, `none`) exposed via default scoped slot props (`SkeletonClassesList`)',
      'automatic accessibility attributes (`aria-busy`, `aria-live="polite"`) and programmatic state inspection via `isActive()`'
    ],
    ru: [
      'анимированные заглушки загрузки без дублирования шаблонов для HTML-разметки и компонентов дизайн-системы',
      'управление видимостью и маскировкой контента через свойства `active` и `invisible`',
      'настраиваемые задержки появления и скрытия (`delay`, `delayHide`) для предотвращения мерцания интерфейса',
      'автоматическая передача состояния вложенным контейнерам `Skeleton` и дочерним компонентам (`isSkeleton`) через `provide` / `inject`',
      '9 утилитарных CSS-классов (`text`, `textVariant`, `background`, `backgroundBefore`, `backgroundAfter`, `backgroundVariant`, `border`, `borderVariant`, `none`), доступных через свойства слота `default` (`SkeletonClassesList`)',
      'автоматические атрибуты доступности (`aria-busy`, `aria-live="polite"`) и программная проверка состояния через `isActive()`'
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
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(component).toHaveAttribute('aria-live', 'polite')
await expect(component).toHaveAttribute('aria-busy')
await expect(component?.querySelector('.design-component__background')).toBeInTheDocument()
await expect(component?.querySelector('.design-component__text')).toBeInTheDocument()
await expect(component?.querySelector('.design-component__textVariant')).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
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
      `,
      play: `
const skeletons = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(skeletons.length).toBe(6)

skeletons.forEach((skeleton) => {
  expect(skeleton).toHaveClass('design-component--active')
  expect(skeleton).toHaveClass('design-component--visible')
  expect(skeleton).toHaveClass('design-component--invisible')
  expect(skeleton).toHaveAttribute('aria-busy', 'true')
  expect(skeleton).toHaveAttribute('aria-live', 'polite')
})

await expect(skeletons[0].querySelectorAll('.design-component__text').length).toBe(3)
await expect(skeletons[1].querySelectorAll('.design-component__textVariant').length).toBe(3)
await expect(skeletons[2].querySelector('.design-component__background')).toBeInTheDocument()
await expect(skeletons[3].querySelector('.design-component__backgroundVariant')).toBeInTheDocument()
await expect(skeletons[4].querySelector('.design-component__border')).toBeInTheDocument()
await expect(skeletons[5].querySelector('.design-component__borderVariant')).toBeInTheDocument()
      `
    },
    {
      id: 'SkeletonDelays',
      name: {
        en: 'Delays',
        ru: 'Задержки'
      },
      setup: `
      const active = ref(false)
      return {
        active,
        onClick: () => {
          active.value = !active.value
        }
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onClick">Active: {{ active }}</button>
          </div>

          <div>
            <div class="wiki-storybook-group">
              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Standard delay (360/0)</div>
                <DesignComponent :active="active" delay="360" delayHide="0">
                  <div class="design-component__text">Text placeholder</div>
                  <div class="design-component__text">Text placeholder</div>
                  <div class="design-component__text">Text placeholder</div>
                </DesignComponent>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Slow appearance (1000/0)</div>
                <DesignComponent :active="active" delay="1000" delayHide="0">
                  <div class="design-component__text">Text placeholder</div>
                  <div class="design-component__text">Text placeholder</div>
                  <div class="design-component__text">Text placeholder</div>
                </DesignComponent>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Delay before hiding (0/1000)</div>
                <DesignComponent :active="active" delay="0" delayHide="1000">
                  <div class="design-component__text">Text placeholder</div>
                  <div class="design-component__text">Text placeholder</div>
                  <div class="design-component__text">Text placeholder</div>
                </DesignComponent>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">No delays (0/0)</div>
                <DesignComponent :active="active" delay="0" delayHide="0">
                  <div class="design-component__text">Text placeholder</div>
                  <div class="design-component__text">Text placeholder</div>
                  <div class="design-component__text">Text placeholder</div>
                </DesignComponent>
              </div>
            </div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const skeletons = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(skeletons.length).toBe(4)

// Initial inactive state
skeletons.forEach((skeleton) => {
  expect(skeleton).not.toHaveClass('design-component--active')
  expect(skeleton).not.toHaveClass('design-component--visible')
  expect(skeleton).not.toHaveClass('design-component--invisible')
  expect(skeleton).toHaveAttribute('aria-busy', 'false')
})

await step('Activate skeletons and verify immediate vs delayed visibility', async () => {
  const toggleButton = canvas.getByRole('button', { name: /Active:/i })
  await userEvent.click(toggleButton)

  // Immediate delay="0" skeletons (indices 2 and 3) become visible right away
  await expect(skeletons[2]).toHaveClass('design-component--active')
  await expect(skeletons[2]).toHaveClass('design-component--visible')
  await expect(skeletons[2]).toHaveClass('design-component--invisible')
  await expect(skeletons[2]).toHaveAttribute('aria-busy', 'true')

  await expect(skeletons[3]).toHaveClass('design-component--active')
  await expect(skeletons[3]).toHaveClass('design-component--visible')
  await expect(skeletons[3]).toHaveClass('design-component--invisible')

  // Standard delay="360" skeleton (index 0) becomes visible after timer elapses
  await waitFor(() => {
    expect(skeletons[0]).toHaveClass('design-component--visible')
  })
})

await step('Deactivate skeletons and verify immediate vs delayed hiding', async () => {
  const toggleButton = canvas.getByRole('button', { name: /Active:/i })
  await userEvent.click(toggleButton)

  // No-delay skeleton (index 3) hides immediately
  await expect(skeletons[3]).not.toHaveClass('design-component--active')
  await expect(skeletons[3]).not.toHaveClass('design-component--visible')
  await expect(skeletons[3]).not.toHaveClass('design-component--invisible')
  await expect(skeletons[3]).toHaveAttribute('aria-busy', 'false')

  // Delay-before-hiding skeleton (index 2, delayHide="1000") keeps invisible and visible during delayHide
  await expect(skeletons[2]).not.toHaveClass('design-component--active')
  await expect(skeletons[2]).toHaveClass('design-component--invisible')
  await expect(skeletons[2]).toHaveClass('design-component--visible')
})
      `
    },
    {
      id: 'SkeletonTestClassesAndSlot',
      name: {
        en: 'Test: All skeleton classes and scoped slot props',
        ru: 'Тест: Все классы скелетона и свойства слота'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">Scoped slot SkeletonClassesList (9 classes)</div>
            <DesignComponent :active="true">
              <template #default="{ classText, classTextVariant, classBackground, classBackgroundAfter, classBackgroundBefore, classBackgroundVariant, classBorder, classBorderVariant, classNone }">
                <div class="wiki-storybook-flex">
                  <span data-testid="slot-text" :class="classText">Text</span>
                  <span data-testid="slot-text-variant" :class="classTextVariant">Text Variant</span>
                  <div data-testid="slot-background" :class="classBackground" style="width: 48px; height: 32px;">BG</div>
                  <div data-testid="slot-background-after" :class="classBackgroundAfter" style="width: 48px; height: 32px;">After</div>
                  <div data-testid="slot-background-before" :class="classBackgroundBefore" style="width: 48px; height: 32px;">Before</div>
                  <div data-testid="slot-background-variant" :class="classBackgroundVariant" style="width: 48px; height: 32px;">BG Variant</div>
                  <div data-testid="slot-border" :class="classBorder" style="width: 48px; height: 32px; border: 2px solid #ccc;">Border</div>
                  <div data-testid="slot-border-variant" :class="classBorderVariant" style="width: 48px; height: 32px; border: 2px solid #ccc;">Border Variant</div>
                  <span data-testid="slot-none" :class="classNone">Hidden Content</span>
                </div>
              </template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const skeleton = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(skeleton).toBeInTheDocument()
await expect(skeleton).toHaveClass('design-component--active')
await expect(skeleton).toHaveClass('design-component--visible')
await expect(skeleton).toHaveClass('design-component--invisible')

await expect(canvas.getByTestId('slot-text')).toHaveClass('design-component__text')
await expect(canvas.getByTestId('slot-text-variant')).toHaveClass('design-component__textVariant')
await expect(canvas.getByTestId('slot-background')).toHaveClass('design-component__background')
await expect(canvas.getByTestId('slot-background-after')).toHaveClass('design-component__backgroundAfter')
await expect(canvas.getByTestId('slot-background-before')).toHaveClass('design-component__backgroundBefore')
await expect(canvas.getByTestId('slot-background-variant')).toHaveClass('design-component__backgroundVariant')
await expect(canvas.getByTestId('slot-border')).toHaveClass('design-component__border')
await expect(canvas.getByTestId('slot-border-variant')).toHaveClass('design-component__borderVariant')
await expect(canvas.getByTestId('slot-none')).toHaveClass('design-component__none')
      `
    },
    {
      id: 'SkeletonTestInvisibleAndStates',
      name: {
        en: 'Test: Invisible mode and state combinations',
        ru: 'Тест: Режим невидимости и комбинации состояний'
      },
      propsName: ['active', 'invisible', 'delay', 'delayHide'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active=false (default)</div>
            <DesignComponent :active="false">
              <div class="design-component__text">Inactive text</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active=false + invisible=false</div>
            <DesignComponent :active="false" :invisible="false">
              <div class="design-component__text">Inactive visible</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active=true + invisible=true</div>
            <DesignComponent :active="true" :invisible="true">
              <div class="design-component__text">Active invisible</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active=true + invisible=false</div>
            <DesignComponent :active="true" :invisible="false">
              <div class="design-component__text">Active not invisible</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active + invisible=true + delay=60000</div>
            <DesignComponent :active="true" :invisible="true" :delay="60000">
              <div class="design-component__text">Masked during delay</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active + invisible=false + delay=60000</div>
            <DesignComponent :active="true" :invisible="false" :delay="60000">
              <div class="design-component__text">Unmasked during delay</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active + negative delays (-50/-100)</div>
            <DesignComponent :active="true" :delay="-50" :delay-hide="-100">
              <div class="design-component__text">Negative delay fallback</div>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const skeletons = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(skeletons.length).toBe(7)

// 0. active=false, invisible=true (default)
await expect(skeletons[0]).not.toHaveClass('design-component--active')
await expect(skeletons[0]).not.toHaveClass('design-component--visible')
await expect(skeletons[0]).not.toHaveClass('design-component--invisible')
await expect(skeletons[0]).toHaveAttribute('aria-busy', 'false')
await expect(skeletons[0]).toHaveAttribute('aria-live', 'polite')

// 1. active=false, invisible=false
await expect(skeletons[1]).not.toHaveClass('design-component--active')
await expect(skeletons[1]).not.toHaveClass('design-component--visible')
await expect(skeletons[1]).not.toHaveClass('design-component--invisible')
await expect(skeletons[1]).toHaveAttribute('aria-busy', 'false')

// 2. active=true, invisible=true (default immediate)
await expect(skeletons[2]).toHaveClass('design-component--active')
await expect(skeletons[2]).toHaveClass('design-component--visible')
await expect(skeletons[2]).toHaveClass('design-component--invisible')
await expect(skeletons[2]).toHaveAttribute('aria-busy', 'true')

// 3. active=true, invisible=false (visible without invisible modifier)
await expect(skeletons[3]).toHaveClass('design-component--active')
await expect(skeletons[3]).toHaveClass('design-component--visible')
await expect(skeletons[3]).not.toHaveClass('design-component--invisible')
await expect(skeletons[3]).toHaveAttribute('aria-busy', 'true')

// 4. active=true, invisible=true, delay=60000 (immediately invisible while waiting for delay)
await expect(skeletons[4]).toHaveClass('design-component--active')
await expect(skeletons[4]).not.toHaveClass('design-component--visible')
await expect(skeletons[4]).toHaveClass('design-component--invisible')
await expect(skeletons[4]).toHaveAttribute('aria-busy', 'true')

// 5. active=true, invisible=false, delay=60000 (neither visible nor invisible while waiting for delay)
await expect(skeletons[5]).toHaveClass('design-component--active')
await expect(skeletons[5]).not.toHaveClass('design-component--visible')
await expect(skeletons[5]).not.toHaveClass('design-component--invisible')
await expect(skeletons[5]).toHaveAttribute('aria-busy', 'true')

// 6. active=true, delay=-50, delayHide=-100 (negative values treated as <= 0, immediately visible)
await expect(skeletons[6]).toHaveClass('design-component--active')
await expect(skeletons[6]).toHaveClass('design-component--visible')
await expect(skeletons[6]).toHaveClass('design-component--invisible')
await expect(skeletons[6]).toHaveAttribute('aria-busy', 'true')
      `
    },
    {
      id: 'SkeletonTestProviderAndChildren',
      name: {
        en: 'Test: Nested provider inheritance and child components',
        ru: 'Тест: Наследование провайдера и дочерние компоненты'
      },
      components: ['Icon', 'SkeletonItem'],
      setup: `
      const parentActive = ref(true)
      const childActive = ref(false)

      return {
        parentActive,
        childActive
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="parentActive = !parentActive">Parent Active: {{ parentActive }}</button>
            <button class="wiki-storybook-button" @click="childActive = !childActive">Child Active: {{ childActive }}</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--auto">
            <DesignComponent data-testid="parent-skeleton" :active="parentActive">
              <div class="wiki-storybook-flex-align-center">
                <DesignIcon data-testid="child-icon" icon="home" is-skeleton/>
                <DesignSkeletonItem data-testid="child-skeleton-item" label="Skeleton item text" text/>
                <DesignComponent data-testid="nested-skeleton" :active="childActive">
                  <span class="design-component__text">Nested inherited text</span>
                </DesignComponent>
              </div>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const parentSkeleton = canvas.getByTestId('parent-skeleton')
const nestedSkeleton = canvas.getByTestId('nested-skeleton')
const childIcon = canvas.getByTestId('child-icon')
const childSkeletonItem = canvas.getByTestId('child-skeleton-item')

// Initial state: parentActive=true, childActive=false -> nested Skeleton inherits active status from parent provider
await expect(parentSkeleton).toHaveClass('design-component--active')
await expect(parentSkeleton).toHaveClass('design-component--visible')
await expect(parentSkeleton).toHaveClass('design-component--invisible')
await expect(parentSkeleton).toHaveAttribute('aria-busy', 'true')

await expect(nestedSkeleton).toHaveClass('design-component--active')
await expect(nestedSkeleton).toHaveClass('design-component--visible')
await expect(nestedSkeleton).toHaveClass('design-component--invisible')
await expect(nestedSkeleton).toHaveAttribute('aria-busy', 'true')

await expect(childIcon).toHaveClass('design-component__backgroundVariant')
await expect(childSkeletonItem).toHaveClass('design-component__text')

await step('Deactivate parent Skeleton and verify nested Skeleton also deactivates', async () => {
  const parentButton = canvas.getByRole('button', { name: /Parent Active:/i })
  await userEvent.click(parentButton)

  await expect(parentSkeleton).not.toHaveClass('design-component--visible')
  await expect(parentSkeleton).not.toHaveClass('design-component--invisible')
  await expect(parentSkeleton).toHaveAttribute('aria-busy', 'false')

  await expect(nestedSkeleton).not.toHaveClass('design-component--visible')
  await expect(nestedSkeleton).not.toHaveClass('design-component--invisible')
  await expect(nestedSkeleton).toHaveAttribute('aria-busy', 'false')
})

await step('Activate nested Skeleton independently while parent is inactive', async () => {
  const childButton = canvas.getByRole('button', { name: /Child Active:/i })
  await userEvent.click(childButton)

  await expect(parentSkeleton).not.toHaveClass('design-component--visible')
  await expect(parentSkeleton).toHaveAttribute('aria-busy', 'false')

  await expect(nestedSkeleton).toHaveClass('design-component--active')
  await expect(nestedSkeleton).toHaveClass('design-component--visible')
  await expect(nestedSkeleton).toHaveClass('design-component--invisible')
  await expect(nestedSkeleton).toHaveAttribute('aria-busy', 'true')
})

await step('Restore initial state', async () => {
  const childButton = canvas.getByRole('button', { name: /Child Active:/i })
  const parentButton = canvas.getByRole('button', { name: /Parent Active:/i })
  await userEvent.click(childButton)
  await userEvent.click(parentButton)

  await expect(parentSkeleton).toHaveClass('design-component--visible')
  await expect(nestedSkeleton).toHaveClass('design-component--visible')
})
      `
    },
    {
      id: 'SkeletonTestExposeAndDelayTimers',
      name: {
        en: 'Test: Exposed isActive method and delay transitions',
        ru: 'Тест: Метод isActive и переходы с задержкой'
      },
      setup: `
      const skeletonRef = ref<{ isActive: () => boolean }>()
      const active = ref(false)
      const delayValue = ref<number | string>(0)
      const delayHideValue = ref<number | string>(120)
      const exposedActive = ref(false)

      const syncExposed = () => {
        exposedActive.value = Boolean(skeletonRef.value?.isActive?.())
      }

      const setActive = (nextState: boolean) => {
        active.value = nextState
        syncExposed()
      }

      return {
        skeletonRef,
        active,
        delayValue,
        delayHideValue,
        exposedActive,
        syncExposed,
        setActive
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="delayValue = 0; delayHideValue = 120; setActive(true)">Activate Immediate</button>
            <button class="wiki-storybook-button" @click="setActive(false)">Deactivate</button>
            <button class="wiki-storybook-button" @click="delayValue = 120; delayHideValue = 0; setActive(true)">Activate Delayed (120ms)</button>
            <button class="wiki-storybook-button" @click="syncExposed()">Read Expose</button>
            <span data-testid="exposed-status">isActive(): {{ exposedActive }}</span>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <DesignComponent
              ref="skeletonRef"
              data-testid="expose-skeleton"
              :active="active"
              :delay="delayValue"
              :delay-hide="delayHideValue"
            >
              <div class="design-component__text">Exposed skeleton state target</div>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const skeleton = canvas.getByTestId('expose-skeleton')
const exposedStatus = canvas.getByTestId('exposed-status')
const activateImmediateButton = canvas.getByRole('button', { name: 'Activate Immediate' })
const deactivateButton = canvas.getByRole('button', { name: 'Deactivate' })
const activateDelayedButton = canvas.getByRole('button', { name: 'Activate Delayed (120ms)' })
const readExposeButton = canvas.getByRole('button', { name: 'Read Expose' })

await expect(skeleton).toHaveAttribute('aria-busy', 'false')
await expect(exposedStatus).toHaveTextContent('isActive(): false')

await step('Activate immediately and verify exposed isActive() returns true', async () => {
  await userEvent.click(activateImmediateButton)
  await userEvent.click(readExposeButton)

  await expect(exposedStatus).toHaveTextContent('isActive(): true')
  await expect(skeleton).toHaveClass('design-component--visible')
  await expect(skeleton).toHaveClass('design-component--invisible')
  await expect(skeleton).toHaveAttribute('aria-busy', 'true')
})

await step('Deactivate and verify delayHide keeps visible briefly then hides', async () => {
  await userEvent.click(deactivateButton)
  await userEvent.click(readExposeButton)

  await expect(exposedStatus).toHaveTextContent('isActive(): false')
  await expect(skeleton).toHaveClass('design-component--invisible')

  await waitFor(() => {
    expect(skeleton).not.toHaveClass('design-component--visible')
    expect(skeleton).not.toHaveClass('design-component--invisible')
  })
})

await step('Activate with 120ms delay and wait for visible state', async () => {
  await userEvent.click(activateDelayedButton)
  await userEvent.click(readExposeButton)

  await expect(exposedStatus).toHaveTextContent('isActive(): true')
  await expect(skeleton).toHaveClass('design-component--invisible')

  await waitFor(() => {
    expect(skeleton).toHaveClass('design-component--visible')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Skeleton'} type={'active'}/>
<StorybookDescriptions componentName={'Skeleton'} type={'classes'}/>
<Canvas of={Component.SkeletonBasic}/>

<StorybookDescriptions componentName={'Progress'} type={'delays'}/>
<Canvas of={Component.SkeletonDelays}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Skeleton'} type={'expose.isActive'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Structural layout utility designed to display animated loading placeholders (ghost versions) for UI elements. Improves perceived performance and prevents Cumulative Layout Shift (CLS) by reserving space for incoming content.
Features a logic-sharing mechanism via provide/inject that allows child components (Field, Image, Chip, Icon, Button) and nested Skeleton containers to automatically switch to their skeleton states. Exposes 9 specialized CSS classes (SkeletonClassesList) through default scoped slot props for styling raw HTML elements as text lines, backgrounds, borders, or hidden elements.
Controlled via the active, delay, delayHide, and invisible props to manage loading transitions and accessibility Busy/Live attributes, and exposes isActive() method. Use as a wrapper for sections or entire pages during data fetching to maintain structural integrity without template duplication.
    `,
    hide: true
  }
}
