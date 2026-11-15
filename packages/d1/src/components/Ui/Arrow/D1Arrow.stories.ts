import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Arrow from './D1Arrow.vue'
import { ArrowWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { nextTick, ref } from 'vue'
import { expect, within, userEvent, waitFor } from 'storybook/test'
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
                background-color: #e9d5ff;
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
              background-color: #dbeafe;
              border: 2px solid #93c5fd;
              box-shadow: 0 0 8px rgba(30, 58, 138, 0.24);
            "
          >
            <D1Arrow v-bind="args"/>
          </div>
        </div>
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const arrow = canvasElement.querySelector('.d1-arrow')
      expect(arrow).toBeInTheDocument()
      expect(arrow).toHaveAttribute('aria-hidden', 'true')
      expect(arrow?.querySelector('.d1-arrow__arrowArea')).toBeInTheDocument()
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ArrowBasic: Story = {
  name: 'Интерактивное автопозиционирование и update()',
  render: () => ({
    components: { D1Arrow },
    setup() {
      const arenaElement = ref<HTMLElement>()
      const targetElement = ref<HTMLElement>()
      const arrowComponent = ref<{ update: () => void }>()

      const positionX = ref('16px')
      const positionY = ref('8px')
      const updateCount = ref(0)

      const onArenaClick = (event: PointerEvent) => {
        if (arenaElement.value) {
          const arenaRect = arenaElement.value.getBoundingClientRect()
          let offsetX = 0
          let offsetY = 0

          if (targetElement.value) {
            const targetRect = targetElement.value.getBoundingClientRect()
            offsetX = targetRect.width / 2
            offsetY = targetRect.height / 2
          }

          positionX.value = Math.round(event.clientX - arenaRect.left - offsetX) + 'px'
          positionY.value = Math.round(event.clientY - arenaRect.top - offsetY) + 'px'

          requestAnimationFrame(() => {
            arrowComponent.value?.update()
            updateCount.value += 1
          })
        }
      }

      const onForceUpdate = () => {
        arrowComponent.value?.update()
        updateCount.value += 1
      }

      return {
        arenaElement,
        targetElement,
        arrowComponent,
        positionX,
        positionY,
        updateCount,
        onArenaClick,
        onForceUpdate
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button
              class="wiki-storybook-button"
              type="button"
              @click="onForceUpdate"
            >
              Call update() ({{ updateCount }})
            </button>
          </div>
          <div
            ref="arenaElement"
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
            style="position: relative; cursor: crosshair; min-height: 240px;"
            @click="onArenaClick"
          >
            <div
              ref="targetElement"
              id="id-arrow-target-interactive"
              style="
                position: absolute;
                padding: 8px 12px;
                width: min-content;
                border-radius: 8px;
                background-color: #e9d5ff;
                text-wrap: nowrap;
                pointer-events: none;
              "
              :style="{ left: positionX, top: positionY }"
            >
              Target Element
            </div>
            <div
              style="
                position: relative;
                width: 240px;
                height: 96px;
                border-radius: 16px;
                background-color: #dbeafe;
                border: 2px solid #93c5fd;
                box-shadow: 0 0 8px rgba(30, 58, 138, 0.24);
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              Click arena to move target
              <D1Arrow
                ref="arrowComponent"
                position="auto"
                element-target="#id-arrow-target-interactive"
              />
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await waitFor(() => {
      const arrow = canvasElement.querySelector<HTMLElement>('.d1-arrow')
      expect(arrow).toBeInTheDocument()
      expect(arrow).toHaveClass('d1-arrow--position--auto')
      expect(arrow?.style.getPropertyValue('--d1-arrow-sys-shift')).not.toBe('')
    })

    await step('Trigger manual update() button', async () => {
      const updateButton = canvas.getByRole('button', { name: /Call update/i })
      await userEvent.click(updateButton)
      await expect(updateButton).toHaveTextContent('Call update() (1)')
    })
  }
}
export const ArrowPositions: Story = {
  name: 'Статические позиции',
  render: () => ({
    components: { D1Arrow },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">top</div>
            <div style="position: relative; width: 112px; height: 56px; border-radius: 10px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Top
              <D1Arrow position="top"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">bottom</div>
            <div style="position: relative; width: 112px; height: 56px; border-radius: 10px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Bottom
              <D1Arrow position="bottom"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">left</div>
            <div style="position: relative; width: 112px; height: 56px; border-radius: 10px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Left
              <D1Arrow position="left"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">right</div>
            <div style="position: relative; width: 112px; height: 56px; border-radius: 10px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Right
              <D1Arrow position="right"/>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const arrows = canvasElement.querySelectorAll('.d1-arrow')
      expect(arrows.length).toBe(4)

      expect(arrows[0]).toHaveClass('d1-arrow--position--top')
      expect(arrows[0]).toHaveClass('d1-arrow--direction--top')

      expect(arrows[1]).toHaveClass('d1-arrow--position--bottom')
      expect(arrows[1]).toHaveClass('d1-arrow--direction--bottom')

      expect(arrows[2]).toHaveClass('d1-arrow--position--left')
      expect(arrows[2]).toHaveClass('d1-arrow--direction--left')

      expect(arrows[3]).toHaveClass('d1-arrow--position--right')
      expect(arrows[3]).toHaveClass('d1-arrow--direction--right')
    })
  }
}
export const ArrowParentInheritance: Story = {
  name: 'Наследование фона и рамки родителя',
  render: () => ({
    components: { D1Arrow },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Solid surface</div>
            <div style="position: relative; width: 140px; height: 64px; border-radius: 12px; background-color: #ede9fe; display: flex; align-items: center; justify-content: center;">
              Solid
              <D1Arrow position="top"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Bordered + Rounded</div>
            <div style="position: relative; width: 140px; height: 64px; border-radius: 20px; background-color: #ffffff; border: 2px solid #2563eb; display: flex; align-items: center; justify-content: center;">
              Bordered
              <D1Arrow position="bottom"/>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const arrows = canvasElement.querySelectorAll<HTMLElement>('.d1-arrow')
      expect(arrows.length).toBe(2)

      const solidParent = arrows[0].parentElement
      expect(solidParent).toHaveClass('d1-arrow__parent')
      expect(solidParent).not.toHaveAttribute('data-arrow', 'border')
      expect(arrows[0].querySelector('.d1-arrow__border')).toBeNull()

      const borderedParent = arrows[1].parentElement
      expect(borderedParent).toHaveClass('d1-arrow__parent')
      expect(borderedParent).toHaveAttribute('data-arrow', 'border')
      expect(arrows[1].querySelector('.d1-arrow__border')).toBeInTheDocument()
      expect(arrows[1].style.getPropertyValue('--d1-arrow-sys-borderWidth')).toBe('2px')
      expect(arrows[1].style.getPropertyValue('--d1-arrow-sys-borderRadius')).toBe('20px')
    })
  }
}
export const ArrowTestElementTargetFormats: Story = {
  name: 'Тест: форматы elementTarget и граничные случаи',
  render: () => ({
    components: { D1Arrow },
    setup() {
      const horizontalTargetElement = ref<HTMLElement>()
      return { horizontalTargetElement }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">CSS selector</div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
              <div id="id-arrow-test-selector" style="padding: 6px 10px; border-radius: 6px; background-color: #e9d5ff;">
                Selector
              </div>
              <div style="position: relative; width: 120px; height: 48px; border-radius: 8px; background-color: #dbeafe; border: 2px solid #93c5fd; display: flex; align-items: center; justify-content: center;">
                Box
                <D1Arrow position="auto" element-target="#id-arrow-test-selector"/>
              </div>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">HTMLElement ref</div>
            <div style="display: flex; flex-direction: row; align-items: center; gap: 20px;">
              <div ref="horizontalTargetElement" style="padding: 6px 10px; border-radius: 6px; background-color: #e9d5ff;">
                Left Ref
              </div>
              <div style="position: relative; width: 96px; height: 48px; border-radius: 8px; background-color: #dbeafe; border: 2px solid #93c5fd; display: flex; align-items: center; justify-content: center;">
                Box
                <D1Arrow position="auto" :element-target="horizontalTargetElement"/>
              </div>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Missing selector</div>
            <div style="position: relative; width: 120px; height: 48px; border-radius: 8px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              None
              <D1Arrow position="auto" element-target="#id-arrow-does-not-exist"/>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">No elementTarget</div>
            <div style="position: relative; width: 120px; height: 48px; border-radius: 8px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Empty
              <D1Arrow position="auto"/>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const arrows = canvasElement.querySelectorAll('.d1-arrow')
      expect(arrows.length).toBe(4)

      const firstArrowRect = arrows[0].getBoundingClientRect()
      if (firstArrowRect.width > 0) {
        expect(arrows[0]).toHaveClass('d1-arrow--direction--top')
        expect(arrows[1]).toHaveClass('d1-arrow--direction--left')
      }

      expect((arrows[0] as HTMLElement).style.getPropertyValue('--d1-arrow-sys-shift')).not.toBe('')
      expect((arrows[1] as HTMLElement).style.getPropertyValue('--d1-arrow-sys-shift')).not.toBe('')

      expect(arrows[2]).toHaveClass('d1-arrow--direction--hide')
      expect((arrows[2] as HTMLElement).style.getPropertyValue('--d1-arrow-sys-shift')).toBe('')

      expect(arrows[3]).toHaveClass('d1-arrow--direction--hide')
      expect((arrows[3] as HTMLElement).style.getPropertyValue('--d1-arrow-sys-shift')).toBe('')
    })
  }
}
export const ArrowTestDynamicPositionSwitching: Story = {
  name: 'Тест: динамическая смена position и метод update()',
  render: () => ({
    components: { D1Arrow },
    setup() {
      const currentPosition = ref<'auto' | 'top' | 'bottom' | 'left' | 'right'>('top')
      const arrowDynamicComponent = ref<{ update: () => void }>()
      const manualUpdateCount = ref(0)

      const setPosition = async (nextPosition: 'auto' | 'top' | 'bottom' | 'left' | 'right') => {
        currentPosition.value = nextPosition
        await nextTick()
        arrowDynamicComponent.value?.update()
        manualUpdateCount.value += 1
      }

      return {
        currentPosition,
        arrowDynamicComponent,
        manualUpdateCount,
        setPosition
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="setPosition('top')">top</button>
            <button class="wiki-storybook-button" type="button" @click="setPosition('bottom')">bottom</button>
            <button class="wiki-storybook-button" type="button" @click="setPosition('left')">left</button>
            <button class="wiki-storybook-button" type="button" @click="setPosition('right')">right</button>
            <button class="wiki-storybook-button" type="button" @click="setPosition('auto')">auto</button>
          </div>
          <div class="wiki-storybook-card">Updates: {{ manualUpdateCount }} | Mode: {{ currentPosition }}</div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center" style="min-height: 180px;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
              <div id="id-arrow-test-dynamic" style="padding: 6px 12px; border-radius: 6px; background-color: #e9d5ff;">
                Dynamic Target
              </div>
              <div style="position: relative; width: 160px; height: 64px; border-radius: 12px; background-color: #dbeafe; border: 2px solid #93c5fd; display: flex; align-items: center; justify-content: center;">
                Mode: {{ currentPosition }}
                <D1Arrow
                  ref="arrowDynamicComponent"
                  :position="currentPosition"
                  element-target="#id-arrow-test-dynamic"
                />
              </div>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await waitFor(() => {
      const arrow = canvasElement.querySelector('.d1-arrow')
      expect(arrow).toHaveClass('d1-arrow--position--top')
      expect(arrow).toHaveClass('d1-arrow--direction--top')
    })

    for (const mode of ['bottom', 'left', 'right', 'auto'] as const) {
      await step('Switch position to ' + mode, async () => {
        await userEvent.click(canvas.getByRole('button', { name: mode }))
        await waitFor(() => {
          const arrow = canvasElement.querySelector('.d1-arrow')
          expect(arrow).toHaveClass('d1-arrow--position--' + mode)
        })
      })
    }
  }
}
// :story-items [!] System label / Системная метка
