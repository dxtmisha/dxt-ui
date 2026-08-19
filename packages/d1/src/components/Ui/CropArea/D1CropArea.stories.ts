import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CropArea from './D1CropArea.vue'
import { CropAreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CropArea',
  component: D1CropArea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CropAreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CropAreaWikiStorybook.getWiki(),
  args: CropAreaWikiStorybook.getValues()
} satisfies Meta<typeof D1CropArea>

export default meta

type Story = StoryObj<typeof meta>

export const CropArea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1CropArea },
    setup: () => ({ args }),
    template: `
      <div
      class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
    >
      <D1CropArea v-bind="args"/>
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CropAreaVModel: Story = {
  name: 'v-model',
  render: () => ({
    components: { D1CropArea },
    setup() {
      return {
        coordinator: ref([15, 20, 15, 20])
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
          >
            <D1CropArea v-model="coordinator"/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
