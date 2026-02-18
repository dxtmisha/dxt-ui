import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MotionAxis from './D1MotionAxis.vue'
import { MotionAxisWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MotionAxis',
  component: D1MotionAxis,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MotionAxisWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MotionAxisWikiStorybook.getWiki(),
  args: MotionAxisWikiStorybook.getValues()
} satisfies Meta<typeof D1MotionAxis>

export default meta

type Story = StoryObj<typeof meta>

export const MotionAxis: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MotionAxis },
    setup: () => ({ args }),
    template: `
      <D1MotionAxis v-bind="args">
      <template #slide1>
        <div style="padding: 32px; background: #fafafa;">
          <p>Short content.</p>
        </div>
      </template>
      <template #slide2>
        <div style="padding: 32px; background: #f5f5f5;">
          <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
        </div>
      </template>
      <template #slide3>
        <div style="padding: 32px; background: #eeeeee;">
          <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
          <p>Additional paragraph for extra height.</p>
        </div>
      </template>
    </D1MotionAxis>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MotionAxisBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1MotionAxis },
    setup() {
      const selected = ref('slide1')
      return { selected }
    },
    template: `
        <div class="wiki-storybook-item--padding">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <div style="margin-top: 16px; border: 1px solid #eee; overflow: hidden;">
            <D1MotionAxis :selected="selected">
              <template #slide1>
                <div style="padding: 32px; background: #fafafa;">
                  <p>Short content.</p>
                </div>
              </template>
              <template #slide2>
                <div style="padding: 32px; background: #f5f5f5;">
                  <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
                </div>
              </template>
              <template #slide3>
                <div style="padding: 32px; background: #eeeeee;">
                  <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                  <p>Additional paragraph for extra height.</p>
                </div>
              </template>
            </D1MotionAxis>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
