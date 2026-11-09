import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Skeleton from './D1Skeleton.vue'
import { SkeletonWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Icon from '../Icon/D1Icon.vue'
import D1SkeletonItem from '../SkeletonItem/D1SkeletonItem.vue'
import { ref } from 'vue'
import { image1 } from '@dxtmisha/wiki/media'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Skeleton',
  component: D1Skeleton,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SkeletonWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SkeletonWikiStorybook.getWiki(),
  args: SkeletonWikiStorybook.getValues()
} satisfies Meta<typeof D1Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Skeleton: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Skeleton },
    setup: () => ({ args }),
    template: `
      <D1Skeleton v-bind="args">
      <div class="wiki-storybook-card d1-skeleton__background">
        <div class="wiki-storybook-card__image d1-skeleton__background" style="background-image: url('${image1}')"/>
        <div class="wiki-storybook-card__content">
          <div>
            <div class="wiki-storybook-card__label d1-skeleton__text">Product Name</div>
            <div class="wiki-storybook-card__information d1-skeleton__textVariant">Short description</div>
          </div>
          <div class="wiki-storybook-card__description d1-skeleton__text">
            Detailed product description that tells about its main features and advantages.
          </div>
          <div class="wiki-storybook-card__actions">
            <button class="wiki-storybook-button d1-skeleton__background">Buy Now</button>
          </div>
        </div>
      </div>
    </D1Skeleton>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-skeleton')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveAttribute('aria-live', 'polite')
    await expect(component).toHaveAttribute('aria-busy')
    await expect(component?.querySelector('.d1-skeleton__background')).toBeInTheDocument()
    await expect(component?.querySelector('.d1-skeleton__text')).toBeInTheDocument()
    await expect(component?.querySelector('.d1-skeleton__textVariant')).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SkeletonBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1Skeleton },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">text</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">textVariant</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">background</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__background"
                style="width: 128px; height: 128px;"
              >
                Text placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">backgroundVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__backgroundVariant"
                style="width: 128px; height: 128px;"
              >
                Background Variant
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">border</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__border"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">borderVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__borderVariant"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border Variant
              </div>
            </D1Skeleton>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const skeletons = canvasElement.querySelectorAll<HTMLElement>('.d1-skeleton')
    await expect(skeletons.length).toBe(6)

    skeletons.forEach((skeleton) => {
      expect(skeleton).toHaveClass('d1-skeleton--active')
      expect(skeleton).toHaveClass('d1-skeleton--visible')
      expect(skeleton).toHaveClass('d1-skeleton--invisible')
      expect(skeleton).toHaveAttribute('aria-busy', 'true')
      expect(skeleton).toHaveAttribute('aria-live', 'polite')
    })

    await expect(skeletons[0].querySelectorAll('.d1-skeleton__text').length).toBe(3)
    await expect(skeletons[1].querySelectorAll('.d1-skeleton__textVariant').length).toBe(3)
    await expect(skeletons[2].querySelector('.d1-skeleton__background')).toBeInTheDocument()
    await expect(skeletons[3].querySelector('.d1-skeleton__backgroundVariant')).toBeInTheDocument()
    await expect(skeletons[4].querySelector('.d1-skeleton__border')).toBeInTheDocument()
    await expect(skeletons[5].querySelector('.d1-skeleton__borderVariant')).toBeInTheDocument()
  }
}
export const SkeletonDelays: Story = {
  name: 'Задержки',
  render: () => ({
    components: { D1Skeleton },
    setup() {
      const active = ref(false)
      return {
        active,
        onClick: () => {
          active.value = !active.value
        }
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onClick">Active: {{ active }}</button>
          </div>

          <div>
            <div class="wiki-storybook-group">
              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Standard delay (360/0)</div>
                <D1Skeleton :active="active" delay="360" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Slow appearance (1000/0)</div>
                <D1Skeleton :active="active" delay="1000" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Delay before hiding (0/1000)</div>
                <D1Skeleton :active="active" delay="0" delayHide="1000">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">No delays (0/0)</div>
                <D1Skeleton :active="active" delay="0" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const skeletons = canvasElement.querySelectorAll<HTMLElement>('.d1-skeleton')
    await expect(skeletons.length).toBe(4)

    // Initial inactive state
    skeletons.forEach((skeleton) => {
      expect(skeleton).not.toHaveClass('d1-skeleton--active')
      expect(skeleton).not.toHaveClass('d1-skeleton--visible')
      expect(skeleton).not.toHaveClass('d1-skeleton--invisible')
      expect(skeleton).toHaveAttribute('aria-busy', 'false')
    })

    await step('Activate skeletons and verify immediate vs delayed visibility', async () => {
      const toggleButton = canvas.getByRole('button', { name: /Active:/i })
      await userEvent.click(toggleButton)

      // Immediate delay="0" skeletons (indices 2 and 3) become visible right away
      await expect(skeletons[2]).toHaveClass('d1-skeleton--active')
      await expect(skeletons[2]).toHaveClass('d1-skeleton--visible')
      await expect(skeletons[2]).toHaveClass('d1-skeleton--invisible')
      await expect(skeletons[2]).toHaveAttribute('aria-busy', 'true')

      await expect(skeletons[3]).toHaveClass('d1-skeleton--active')
      await expect(skeletons[3]).toHaveClass('d1-skeleton--visible')
      await expect(skeletons[3]).toHaveClass('d1-skeleton--invisible')

      // Standard delay="360" skeleton (index 0) becomes visible after timer elapses
      await waitFor(() => {
        expect(skeletons[0]).toHaveClass('d1-skeleton--visible')
      })
    })

    await step('Deactivate skeletons and verify immediate vs delayed hiding', async () => {
      const toggleButton = canvas.getByRole('button', { name: /Active:/i })
      await userEvent.click(toggleButton)

      // No-delay skeleton (index 3) hides immediately
      await expect(skeletons[3]).not.toHaveClass('d1-skeleton--active')
      await expect(skeletons[3]).not.toHaveClass('d1-skeleton--visible')
      await expect(skeletons[3]).not.toHaveClass('d1-skeleton--invisible')
      await expect(skeletons[3]).toHaveAttribute('aria-busy', 'false')

      // Delay-before-hiding skeleton (index 2, delayHide="1000") keeps invisible and visible during delayHide
      await expect(skeletons[2]).not.toHaveClass('d1-skeleton--active')
      await expect(skeletons[2]).toHaveClass('d1-skeleton--invisible')
      await expect(skeletons[2]).toHaveClass('d1-skeleton--visible')
    })
  }
}
export const SkeletonTestClassesAndSlot: Story = {
  name: 'Тест: Все классы скелетона и свойства слота',
  render: () => ({
    components: { D1Skeleton },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">Scoped slot SkeletonClassesList (9 classes)</div>
            <D1Skeleton :active="true">
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
            </D1Skeleton>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const skeleton = canvasElement.querySelector<HTMLElement>('.d1-skeleton')
    await expect(skeleton).toBeInTheDocument()
    await expect(skeleton).toHaveClass('d1-skeleton--active')
    await expect(skeleton).toHaveClass('d1-skeleton--visible')
    await expect(skeleton).toHaveClass('d1-skeleton--invisible')

    await expect(canvas.getByTestId('slot-text')).toHaveClass('d1-skeleton__text')
    await expect(canvas.getByTestId('slot-text-variant')).toHaveClass('d1-skeleton__textVariant')
    await expect(canvas.getByTestId('slot-background')).toHaveClass('d1-skeleton__background')
    await expect(canvas.getByTestId('slot-background-after')).toHaveClass('d1-skeleton__backgroundAfter')
    await expect(canvas.getByTestId('slot-background-before')).toHaveClass('d1-skeleton__backgroundBefore')
    await expect(canvas.getByTestId('slot-background-variant')).toHaveClass('d1-skeleton__backgroundVariant')
    await expect(canvas.getByTestId('slot-border')).toHaveClass('d1-skeleton__border')
    await expect(canvas.getByTestId('slot-border-variant')).toHaveClass('d1-skeleton__borderVariant')
    await expect(canvas.getByTestId('slot-none')).toHaveClass('d1-skeleton__none')
  }
}
export const SkeletonTestInvisibleAndStates: Story = {
  name: 'Тест: Режим невидимости и комбинации состояний',
  render: () => ({
    components: { D1Skeleton },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active=false (default)</div>
            <D1Skeleton :active="false">
              <div class="d1-skeleton__text">Inactive text</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active=false + invisible=false</div>
            <D1Skeleton :active="false" :invisible="false">
              <div class="d1-skeleton__text">Inactive visible</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active=true + invisible=true</div>
            <D1Skeleton :active="true" :invisible="true">
              <div class="d1-skeleton__text">Active invisible</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active=true + invisible=false</div>
            <D1Skeleton :active="true" :invisible="false">
              <div class="d1-skeleton__text">Active not invisible</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active + invisible=true + delay=60000</div>
            <D1Skeleton :active="true" :invisible="true" :delay="60000">
              <div class="d1-skeleton__text">Masked during delay</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active + invisible=false + delay=60000</div>
            <D1Skeleton :active="true" :invisible="false" :delay="60000">
              <div class="d1-skeleton__text">Unmasked during delay</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">active + negative delays (-50/-100)</div>
            <D1Skeleton :active="true" :delay="-50" :delay-hide="-100">
              <div class="d1-skeleton__text">Negative delay fallback</div>
            </D1Skeleton>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const skeletons = canvasElement.querySelectorAll<HTMLElement>('.d1-skeleton')
    await expect(skeletons.length).toBe(7)

    // 0. active=false, invisible=true (default)
    await expect(skeletons[0]).not.toHaveClass('d1-skeleton--active')
    await expect(skeletons[0]).not.toHaveClass('d1-skeleton--visible')
    await expect(skeletons[0]).not.toHaveClass('d1-skeleton--invisible')
    await expect(skeletons[0]).toHaveAttribute('aria-busy', 'false')
    await expect(skeletons[0]).toHaveAttribute('aria-live', 'polite')

    // 1. active=false, invisible=false
    await expect(skeletons[1]).not.toHaveClass('d1-skeleton--active')
    await expect(skeletons[1]).not.toHaveClass('d1-skeleton--visible')
    await expect(skeletons[1]).not.toHaveClass('d1-skeleton--invisible')
    await expect(skeletons[1]).toHaveAttribute('aria-busy', 'false')

    // 2. active=true, invisible=true (default immediate)
    await expect(skeletons[2]).toHaveClass('d1-skeleton--active')
    await expect(skeletons[2]).toHaveClass('d1-skeleton--visible')
    await expect(skeletons[2]).toHaveClass('d1-skeleton--invisible')
    await expect(skeletons[2]).toHaveAttribute('aria-busy', 'true')

    // 3. active=true, invisible=false (visible without invisible modifier)
    await expect(skeletons[3]).toHaveClass('d1-skeleton--active')
    await expect(skeletons[3]).toHaveClass('d1-skeleton--visible')
    await expect(skeletons[3]).not.toHaveClass('d1-skeleton--invisible')
    await expect(skeletons[3]).toHaveAttribute('aria-busy', 'true')

    // 4. active=true, invisible=true, delay=60000 (immediately invisible while waiting for delay)
    await expect(skeletons[4]).toHaveClass('d1-skeleton--active')
    await expect(skeletons[4]).not.toHaveClass('d1-skeleton--visible')
    await expect(skeletons[4]).toHaveClass('d1-skeleton--invisible')
    await expect(skeletons[4]).toHaveAttribute('aria-busy', 'true')

    // 5. active=true, invisible=false, delay=60000 (neither visible nor invisible while waiting for delay)
    await expect(skeletons[5]).toHaveClass('d1-skeleton--active')
    await expect(skeletons[5]).not.toHaveClass('d1-skeleton--visible')
    await expect(skeletons[5]).not.toHaveClass('d1-skeleton--invisible')
    await expect(skeletons[5]).toHaveAttribute('aria-busy', 'true')

    // 6. active=true, delay=-50, delayHide=-100 (negative values treated as <= 0, immediately visible)
    await expect(skeletons[6]).toHaveClass('d1-skeleton--active')
    await expect(skeletons[6]).toHaveClass('d1-skeleton--visible')
    await expect(skeletons[6]).toHaveClass('d1-skeleton--invisible')
    await expect(skeletons[6]).toHaveAttribute('aria-busy', 'true')
  }
}
export const SkeletonTestProviderAndChildren: Story = {
  name: 'Тест: Наследование провайдера и дочерние компоненты',
  render: () => ({
    components: { D1Skeleton, D1Icon, D1SkeletonItem },
    setup() {
      const parentActive = ref(true)
      const childActive = ref(false)

      return {
        parentActive,
        childActive
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="parentActive = !parentActive">Parent Active: {{ parentActive }}</button>
            <button class="wiki-storybook-button" @click="childActive = !childActive">Child Active: {{ childActive }}</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--auto">
            <D1Skeleton data-testid="parent-skeleton" :active="parentActive">
              <div class="wiki-storybook-flex-align-center">
                <D1Icon data-testid="child-icon" icon="home" is-skeleton/>
                <D1SkeletonItem data-testid="child-skeleton-item" label="Skeleton item text" text/>
                <D1Skeleton data-testid="nested-skeleton" :active="childActive">
                  <span class="d1-skeleton__text">Nested inherited text</span>
                </D1Skeleton>
              </div>
            </D1Skeleton>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const parentSkeleton = canvas.getByTestId('parent-skeleton')
    const nestedSkeleton = canvas.getByTestId('nested-skeleton')
    const childIcon = canvas.getByTestId('child-icon')
    const childSkeletonItem = canvas.getByTestId('child-skeleton-item')

    // Initial state: parentActive=true, childActive=false -> nested Skeleton inherits active status from parent provider
    await expect(parentSkeleton).toHaveClass('d1-skeleton--active')
    await expect(parentSkeleton).toHaveClass('d1-skeleton--visible')
    await expect(parentSkeleton).toHaveClass('d1-skeleton--invisible')
    await expect(parentSkeleton).toHaveAttribute('aria-busy', 'true')

    await expect(nestedSkeleton).toHaveClass('d1-skeleton--active')
    await expect(nestedSkeleton).toHaveClass('d1-skeleton--visible')
    await expect(nestedSkeleton).toHaveClass('d1-skeleton--invisible')
    await expect(nestedSkeleton).toHaveAttribute('aria-busy', 'true')

    await expect(childIcon).toHaveClass('d1-skeleton__backgroundVariant')
    await expect(childSkeletonItem).toHaveClass('d1-skeleton__text')

    await step('Deactivate parent Skeleton and verify nested Skeleton also deactivates', async () => {
      const parentButton = canvas.getByRole('button', { name: /Parent Active:/i })
      await userEvent.click(parentButton)

      await expect(parentSkeleton).not.toHaveClass('d1-skeleton--visible')
      await expect(parentSkeleton).not.toHaveClass('d1-skeleton--invisible')
      await expect(parentSkeleton).toHaveAttribute('aria-busy', 'false')

      await expect(nestedSkeleton).not.toHaveClass('d1-skeleton--visible')
      await expect(nestedSkeleton).not.toHaveClass('d1-skeleton--invisible')
      await expect(nestedSkeleton).toHaveAttribute('aria-busy', 'false')
    })

    await step('Activate nested Skeleton independently while parent is inactive', async () => {
      const childButton = canvas.getByRole('button', { name: /Child Active:/i })
      await userEvent.click(childButton)

      await expect(parentSkeleton).not.toHaveClass('d1-skeleton--visible')
      await expect(parentSkeleton).toHaveAttribute('aria-busy', 'false')

      await expect(nestedSkeleton).toHaveClass('d1-skeleton--active')
      await expect(nestedSkeleton).toHaveClass('d1-skeleton--visible')
      await expect(nestedSkeleton).toHaveClass('d1-skeleton--invisible')
      await expect(nestedSkeleton).toHaveAttribute('aria-busy', 'true')
    })

    await step('Restore initial state', async () => {
      const childButton = canvas.getByRole('button', { name: /Child Active:/i })
      const parentButton = canvas.getByRole('button', { name: /Parent Active:/i })
      await userEvent.click(childButton)
      await userEvent.click(parentButton)

      await expect(parentSkeleton).toHaveClass('d1-skeleton--visible')
      await expect(nestedSkeleton).toHaveClass('d1-skeleton--visible')
    })
  }
}
export const SkeletonTestExposeAndDelayTimers: Story = {
  name: 'Тест: Метод isActive и переходы с задержкой',
  render: () => ({
    components: { D1Skeleton },
    setup() {
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
    },
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
            <D1Skeleton
              ref="skeletonRef"
              data-testid="expose-skeleton"
              :active="active"
              :delay="delayValue"
              :delay-hide="delayHideValue"
            >
              <div class="d1-skeleton__text">Exposed skeleton state target</div>
            </D1Skeleton>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
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
      await expect(skeleton).toHaveClass('d1-skeleton--visible')
      await expect(skeleton).toHaveClass('d1-skeleton--invisible')
      await expect(skeleton).toHaveAttribute('aria-busy', 'true')
    })

    await step('Deactivate and verify delayHide keeps visible briefly then hides', async () => {
      await userEvent.click(deactivateButton)
      await userEvent.click(readExposeButton)

      await expect(exposedStatus).toHaveTextContent('isActive(): false')
      await expect(skeleton).toHaveClass('d1-skeleton--invisible')

      await waitFor(() => {
        expect(skeleton).not.toHaveClass('d1-skeleton--visible')
        expect(skeleton).not.toHaveClass('d1-skeleton--invisible')
      })
    })

    await step('Activate with 120ms delay and wait for visible state', async () => {
      await userEvent.click(activateDelayedButton)
      await userEvent.click(readExposeButton)

      await expect(exposedStatus).toHaveTextContent('isActive(): true')
      await expect(skeleton).toHaveClass('d1-skeleton--invisible')

      await waitFor(() => {
        expect(skeleton).toHaveClass('d1-skeleton--visible')
      })
    })
  }
}
// :story-items [!] System label / Системная метка
