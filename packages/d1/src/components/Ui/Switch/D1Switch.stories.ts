import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Switch from './D1Switch.vue'
import { SwitchWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Switch',
  component: D1Switch,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SwitchWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SwitchWikiStorybook.getWiki(),
  args: SwitchWikiStorybook.getValues()
} satisfies Meta<typeof D1Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Switch: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SwitchVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Switch },
    setup() {
      return {
        switchValue: ref(false)
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="switchValue = !switchValue">Toggle {{ switchValue }}</button>
          </div>
          <D1Switch
            v-model="switchValue"
            label="Switch with v-model"
          />
        </div>
    `
  })
}
export const SwitchSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Switch, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Switch isSkeleton label="Loading switch" />
            <D1Switch isSkeleton label="Another loading switch" />
          </div>
        </D1Skeleton>
    `
  })
}
export const SwitchSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Switch },
    template: `
        <D1Switch>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </D1Switch>
    `
  })
}
// :story-items [!] System label / Системная метка
