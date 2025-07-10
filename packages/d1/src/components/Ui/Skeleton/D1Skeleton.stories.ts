import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Skeleton from './D1Skeleton.vue'
import { SkeletonWikiStorybook } from './wiki.ts'

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
    setup() {
      return {}
    },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Active skeleton</div>
            <D1Skeleton :active="true">
              <div>Loading content...</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Inactive skeleton</div>
            <D1Skeleton :active="false">
              <div>Loaded content</div>
            </D1Skeleton>
          </div>
        </div>
    `
  })
}
export const SkeletonWithChildElements: Story = {
  name: 'С дочерними элементами',
  render: () => ({
    components: { D1Skeleton },
    setup() {
      return {}
    },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Child elements with isSkeleton=true</div>
            <D1Skeleton :active="true">
              <div :isSkeleton="true">Visible in skeleton mode</div>
              <div :isSkeleton="false">Hidden in skeleton mode</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Normal state</div>
            <D1Skeleton :active="false">
              <div :isSkeleton="true">Normal content 1</div>
              <div :isSkeleton="false">Normal content 2</div>
            </D1Skeleton>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
