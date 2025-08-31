import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Skeleton from './D1Skeleton.vue'
import { SkeletonWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { image1 } from '@dxt-ui/wiki/media'
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
  })
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
  })
}
// :story-items [!] System label / Системная метка
