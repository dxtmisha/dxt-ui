import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Arrow from './D1Arrow.vue'
import { ArrowWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Arrow',
  component: D1Arrow,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ArrowWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ArrowWikiStorybook.getWiki(),
  args: ArrowWikiStorybook.getValues()
} satisfies Meta<typeof D1Arrow>

export default meta

type Story = StoryObj<typeof meta>

export const Arrow: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Arrow },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center">
        <div>
          <div
            style="
              width: 256px;
              margin-bottom: 32px;
              margin-left: 32px;
            "
          >
            <div
              id="id-arrow-target"
              style="
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
              "
            >
              Target
            </div>
          </div>
          <div
            style="
              position: relative;
              width: 256px;
              height: 128px;
              border-radius: 16px;
              background-color: oklch(93.2% 0.032 255.585);
              border: 2px solid oklch(80.9% 0.105 251.813);
              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
            "
          >
            <D1Arrow v-bind="args"/>
          </div>
        </div>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ArrowBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Arrow },
    setup() {
      const elementBasic = ref()
      const elementTarget = ref()
      const x = ref('0px')
      const y = ref('0px')
      const onClick = (event: PointerEvent) => {
        if (elementBasic.value) {
          const rect = elementBasic.value.getBoundingClientRect()
          let offsetX = 0
          let offsetY = 0

          if (elementTarget.value) {
            const targetRect = elementTarget.value.getBoundingClientRect()
            offsetX = targetRect.width / 2
            offsetY = targetRect.height / 2
          }

          x.value = (event.clientX - rect.left - offsetX) + 'px'
          y.value = (event.clientY - rect.top - offsetY) + 'px'
        }
      }

      return {
        elementBasic,
        elementTarget,
        x,
        y,
        onClick
      }
    },
    template: `
        <div
          class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
          style="cursor: crosshair;"
          @click="onClick"
        >
        <div>
          <div
            style="
              opacity: 0.5;
              font-size: 14px;
              margin-bottom: 8px;
              text-align: center;
            "
          >
            Click to move target
          </div>
          <div
            ref="elementBasic"
            style="
              position: relative;
              margin-bottom: 96px;
              margin-left: 32px;
              z-index: 32;
            "
          >
            <div
              ref="elementTarget"
              id="id-arrow-target"
              style="
                position: absolute;
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
                text-wrap: nowrap;
              "
              :style="{left: x, top: y}"
            >
              Target Element Example
            </div>
          </div>
          <div
            style="
              position: relative;
              width: 256px;
              height: 128px;
              border-radius: 16px;
              background-color: oklch(93.2% 0.032 255.585);
              border: 2px solid oklch(80.9% 0.105 251.813);
              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
            "
          >
            <D1Arrow position="auto" element-target="#id-arrow-target"/>
          </div>
        </div>
      </div>
    `
  })
}
// :story-items [!] System label / Системная метка
