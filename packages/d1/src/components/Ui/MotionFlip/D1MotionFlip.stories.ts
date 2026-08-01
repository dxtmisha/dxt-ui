import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MotionFlip from './D1MotionFlip.vue'
import { MotionFlipWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MotionFlip',
  component: D1MotionFlip,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MotionFlipWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MotionFlipWikiStorybook.getWiki(),
  args: MotionFlipWikiStorybook.getValues()
} satisfies Meta<typeof D1MotionFlip>

export default meta

type Story = StoryObj<typeof meta>

export const MotionFlip: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MotionFlip },
    setup: () => ({ args }),
    template: `
      <D1MotionFlip v-bind="args" class="wiki-storybook-group">
      <div
        v-for="item in 5"
        :key="item"
        class="wiki-storybook-item--squared--xs"
        style="cursor: pointer;"
        @click="$event.target.parentNode.appendChild($event.target)"
      >
        <div class="wiki-storybook-item wiki-storybook-item--padding" style="pointer-events: none;">
          <span class="wiki-storybook-item__label">Item {{ item }}</span>
        </div>
      </div>
    </D1MotionFlip>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MotionFlipBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1MotionFlip },
    setup() {
      const flipRef = ref()
      const items = ref([1, 2, 3, 4, 5])
      let nextId = 6

      const add = async () => {
        if (flipRef.value) {
          await flipRef.value.update(() => {
            const index = Math.floor(Math.random() * (items.value.length + 1))
            items.value.splice(index, 0, nextId++)
          })
        }
      }

      const remove = async () => {
        if (flipRef.value && items.value.length > 0) {
          await flipRef.value.update(() => {
            const index = Math.floor(Math.random() * items.value.length)
            items.value.splice(index, 1)
          })
        }
      }

      const shuffle = async () => {
        if (flipRef.value) {
          await flipRef.value.update(() => {
            items.value = [...items.value].sort(() => Math.random() - 0.5)
          })
        }
      }

      return { flipRef, items, add, remove, shuffle }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="add">Add</button>
            <button class="wiki-storybook-button" @click="remove">Remove</button>
            <button class="wiki-storybook-button" @click="shuffle">Shuffle</button>
          </div>

          <D1MotionFlip ref="flipRef" class="wiki-storybook-group">
            <div v-for="item in items" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">Item {{ item }}</span>
              </div>
            </div>
          </D1MotionFlip>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
