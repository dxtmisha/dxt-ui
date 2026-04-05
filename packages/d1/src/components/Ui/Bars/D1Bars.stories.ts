import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Bars from './D1Bars.vue'
import { BarsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Bars',
  component: D1Bars,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BarsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BarsWikiStorybook.getWiki(),
  args: BarsWikiStorybook.getValues()
} satisfies Meta<typeof D1Bars>

export default meta

type Story = StoryObj<typeof meta>

export const Bars: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BarsBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Bars },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Bars
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />

          <D1Bars
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share' },
              { icon: 'edit' },
              { icon: 'delete' }
            ]"
          />
        </div>
    `
  })
}
export const BarsVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Bars },
    setup() {
      return {
        isAction: ref(false)
      }
    },
    template: `
        <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
        <D1Bars
          v-model:action="isAction"
          label="Page Title"
          description="A concise description for this example"
          :bars="[
            { icon: 'search' },
            { icon: 'refresh' },
            { icon: 'more_vert' }
          ]"
          action-label="2 selected"
          action-description="Choose an action to apply"
          :action-bars="[
            { icon: 'share' },
            { icon: 'edit' },
            { icon: 'delete' }
          ]"
          style="margin-top: 8px;"
        />
    `
  })
}
export const BarsSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1Bars, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1Bars
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
