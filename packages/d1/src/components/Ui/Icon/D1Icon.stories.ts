import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Icon from './D1Icon.vue'
import { IconWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Icon',
  component: D1Icon,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: IconWikiStorybook.getDescription()
      }
    }
  },
  argTypes: IconWikiStorybook.getWiki(),
  args: IconWikiStorybook.getValues()
} satisfies Meta<typeof D1Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const IconState: Story = {
  name: 'Состояние иконки',
  render: () => ({
    components: { D1Icon },
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Default</div>
          <D1Icon icon="home"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Active</div>
          <D1Icon icon="heart_minus" iconActive="favorite" :active="true"/>
        </div>
      </div>
    `
  })
}
export const IconDirection: Story = {
  name: 'Направление компонента',
  render: () => ({
    components: { D1Icon },
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">LTR</div>
          <D1Icon dir icon="arrow_forward"/>
        </div>
        <div
          class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl">
          <div class="wiki-storybook-item__label">RTL</div>
          <D1Icon dir icon="arrow_forward"/>
        </div>
      </div>
    `
  })
}
export const IconPalette: Story = {
  name: 'Палитра',
  render: () => ({
    components: { D1Icon },
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Basic</div>
          <D1Icon icon="home" size="lg"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Palette</div>
          <D1Icon icon="home" size="lg" asPalette/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Inverse</div>
          <D1Icon icon="home" size="lg" asPalette inverse/>
        </div>
      </div>
    `
  })
}
export const IconSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Icon, D1Skeleton },
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Basic</div>
          <D1Skeleton>
            <D1Icon icon="home"/>
          </D1Skeleton>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Active</div>
          <D1Skeleton :active="true">
            <D1Icon isSkeleton icon="home" rounded="md"/>
          </D1Skeleton>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">Hidden</div>
          <D1Skeleton :active="true">
            <D1Icon icon="home"/>
          </D1Skeleton>
        </div>
      </div>
    `
  })
}
// :story-items [!] System label / Системная метка
