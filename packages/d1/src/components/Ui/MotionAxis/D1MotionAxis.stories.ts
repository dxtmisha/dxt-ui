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
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </template>
      <template #slide2>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </template>
      <template #slide3>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Short content.</p>
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                <p>Additional paragraph for extra height.</p>
              </div>
            </template>
          </D1MotionAxis>
        </div>
    `
  })
}
export const MotionAxisVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1MotionAxis },
    setup() {
      const selected = ref('slide1')
      return { selected }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">Select Slide 3</button>
          </div>
          <div class="wiki-storybook-item--padding">
            Current value: {{ selected }}
          </div>

          <D1MotionAxis v-model:selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 3
              </div>
            </template>
          </D1MotionAxis>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
