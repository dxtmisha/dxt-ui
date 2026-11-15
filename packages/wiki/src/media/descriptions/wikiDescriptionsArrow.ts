import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Arrow component properties
 *
 * Описания свойств компонента Arrow
 */
export const wikiDescriptionsArrow: StorybookComponentsDescriptionItem = {
  name: 'Arrow',
  description: {
    en: 'Component for displaying a directional pointer connecting a floating container to its target element.',
    ru: 'Компонент для отображения графического указателя, связывающего всплывающий контейнер с целевым элементом.'
  },
  possibilities: {
    en: [
      'automatic (`auto`) and static (`top`, `bottom`, `left`, `right`) directional placement',
      'target binding via CSS selector string or `HTMLElement` reference (`elementTarget`)',
      'automatic inheritance of parent background color, border, and corner radius',
      'dynamic recalculation on scroll/resize in `auto` mode and via exposed `update()`'
    ],
    ru: [
      'автоматическое (`auto`) и статическое (`top`, `bottom`, `left`, `right`) позиционирование',
      'привязка к цели по CSS-селектору или ссылке на `HTMLElement` (`elementTarget`)',
      'автоматическое наследование фона, рамки и скругления углов родителя',
      'динамический пересчёт при прокрутке/ресайзе в режиме `auto` и через метод `update()`'
    ]
  },
  import: [
    'import { nextTick, ref } from \'vue\''
  ],
  render: `
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
            <DesignComponent v-bind="args"/>
          </div>
        </div>
      </div>
    `,
  play: `
    await waitFor(() => {
      const arrow = canvasElement.querySelector('.design-component')
      expect(arrow).toBeInTheDocument()
      expect(arrow).toHaveAttribute('aria-hidden', 'true')
      expect(arrow?.querySelector('.design-component__arrowArea')).toBeInTheDocument()
    })
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ArrowBasic',
      name: {
        en: 'Interactive auto-positioning & update()',
        ru: 'Интерактивное автопозиционирование и update()'
      },
      setup: `
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
      `,
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
              <DesignComponent
                ref="arrowComponent"
                position="auto"
                element-target="#id-arrow-target-interactive"
              />
            </div>
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)

        await waitFor(() => {
          const arrow = canvasElement.querySelector<HTMLElement>('.design-component')
          expect(arrow).toBeInTheDocument()
          expect(arrow).toHaveClass('design-component--position--auto')
          expect(arrow?.style.getPropertyValue('--design-component-sys-shift')).not.toBe('')
        })

        await step('Trigger manual update() button', async () => {
          const updateButton = canvas.getByRole('button', { name: /Call update/i })
          await userEvent.click(updateButton)
          await expect(updateButton).toHaveTextContent('Call update() (1)')
        })
      `
    },
    {
      id: 'ArrowPositions',
      name: {
        en: 'Static positions',
        ru: 'Статические позиции'
      },
      propsName: 'position',
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">top</div>
            <div style="position: relative; width: 112px; height: 56px; border-radius: 10px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Top
              <DesignComponent position="top"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">bottom</div>
            <div style="position: relative; width: 112px; height: 56px; border-radius: 10px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Bottom
              <DesignComponent position="bottom"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">left</div>
            <div style="position: relative; width: 112px; height: 56px; border-radius: 10px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Left
              <DesignComponent position="left"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">right</div>
            <div style="position: relative; width: 112px; height: 56px; border-radius: 10px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Right
              <DesignComponent position="right"/>
            </div>
          </div>
        </div>
      `,
      play: `
        await waitFor(() => {
          const arrows = canvasElement.querySelectorAll('.design-component')
          expect(arrows.length).toBe(4)

          expect(arrows[0]).toHaveClass('design-component--position--top')
          expect(arrows[0]).toHaveClass('design-component--direction--top')

          expect(arrows[1]).toHaveClass('design-component--position--bottom')
          expect(arrows[1]).toHaveClass('design-component--direction--bottom')

          expect(arrows[2]).toHaveClass('design-component--position--left')
          expect(arrows[2]).toHaveClass('design-component--direction--left')

          expect(arrows[3]).toHaveClass('design-component--position--right')
          expect(arrows[3]).toHaveClass('design-component--direction--right')
        })
      `
    },
    {
      id: 'ArrowParentInheritance',
      name: {
        en: 'Parent surface & border inheritance',
        ru: 'Наследование фона и рамки родителя'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Solid surface</div>
            <div style="position: relative; width: 140px; height: 64px; border-radius: 12px; background-color: #ede9fe; display: flex; align-items: center; justify-content: center;">
              Solid
              <DesignComponent position="top"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Bordered + Rounded</div>
            <div style="position: relative; width: 140px; height: 64px; border-radius: 20px; background-color: #ffffff; border: 2px solid #2563eb; display: flex; align-items: center; justify-content: center;">
              Bordered
              <DesignComponent position="bottom"/>
            </div>
          </div>
        </div>
      `,
      play: `
        await waitFor(() => {
          const arrows = canvasElement.querySelectorAll<HTMLElement>('.design-component')
          expect(arrows.length).toBe(2)

          const solidParent = arrows[0].parentElement
          expect(solidParent).toHaveClass('design-component__parent')
          expect(solidParent).not.toHaveAttribute('data-arrow', 'border')
          expect(arrows[0].querySelector('.design-component__border')).toBeNull()

          const borderedParent = arrows[1].parentElement
          expect(borderedParent).toHaveClass('design-component__parent')
          expect(borderedParent).toHaveAttribute('data-arrow', 'border')
          expect(arrows[1].querySelector('.design-component__border')).toBeInTheDocument()
          expect(arrows[1].style.getPropertyValue('--design-component-sys-borderWidth')).toBe('2px')
          expect(arrows[1].style.getPropertyValue('--design-component-sys-borderRadius')).toBe('20px')
        })
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (CONSTRUCTOR PROPS ONLY)
    // =========================================================================
    {
      id: 'ArrowTestElementTargetFormats',
      name: {
        en: 'Test: elementTarget formats and edge fallbacks',
        ru: 'Тест: форматы elementTarget и граничные случаи'
      },
      propsName: ['elementTarget', 'position'],
      setup: `
      const horizontalTargetElement = ref<HTMLElement>()
      return { horizontalTargetElement }
      `,
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
                <DesignComponent position="auto" element-target="#id-arrow-test-selector"/>
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
                <DesignComponent position="auto" :element-target="horizontalTargetElement"/>
              </div>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Missing selector</div>
            <div style="position: relative; width: 120px; height: 48px; border-radius: 8px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              None
              <DesignComponent position="auto" element-target="#id-arrow-does-not-exist"/>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">No elementTarget</div>
            <div style="position: relative; width: 120px; height: 48px; border-radius: 8px; background-color: #dbeafe; display: flex; align-items: center; justify-content: center;">
              Empty
              <DesignComponent position="auto"/>
            </div>
          </div>
        </div>
      `,
      play: `
        await waitFor(() => {
          const arrows = canvasElement.querySelectorAll('.design-component')
          expect(arrows.length).toBe(4)

          const firstArrowRect = arrows[0].getBoundingClientRect()
          if (firstArrowRect.width > 0) {
            expect(arrows[0]).toHaveClass('design-component--direction--top')
            expect(arrows[1]).toHaveClass('design-component--direction--left')
          }

          expect((arrows[0] as HTMLElement).style.getPropertyValue('--design-component-sys-shift')).not.toBe('')
          expect((arrows[1] as HTMLElement).style.getPropertyValue('--design-component-sys-shift')).not.toBe('')

          expect(arrows[2]).toHaveClass('design-component--direction--hide')
          expect((arrows[2] as HTMLElement).style.getPropertyValue('--design-component-sys-shift')).toBe('')

          expect(arrows[3]).toHaveClass('design-component--direction--hide')
          expect((arrows[3] as HTMLElement).style.getPropertyValue('--design-component-sys-shift')).toBe('')
        })
      `
    },
    {
      id: 'ArrowTestDynamicPositionSwitching',
      name: {
        en: 'Test: Dynamic position switching & expose update()',
        ru: 'Тест: динамическая смена position и метод update()'
      },
      propsName: ['position', 'elementTarget'],
      setup: `
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
      `,
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
                <DesignComponent
                  ref="arrowDynamicComponent"
                  :position="currentPosition"
                  element-target="#id-arrow-test-dynamic"
                />
              </div>
            </div>
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)

        await waitFor(() => {
          const arrow = canvasElement.querySelector('.design-component')
          expect(arrow).toHaveClass('design-component--position--top')
          expect(arrow).toHaveClass('design-component--direction--top')
        })

        for (const mode of ['bottom', 'left', 'right', 'auto'] as const) {
          await step('Switch position to ' + mode, async () => {
            await userEvent.click(canvas.getByRole('button', { name: mode }))
            await waitFor(() => {
              const arrow = canvasElement.querySelector('.design-component')
              expect(arrow).toHaveClass('design-component--position--' + mode)
            })
          })
        }
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Arrow'} type={'arrow'}/>
<Canvas of={Component.ArrowPositions}/>
<Canvas of={Component.ArrowParentInheritance}/>
<Canvas of={Component.ArrowBasic}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Arrow'} type={'expose.update'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item" style="position: relative; width: 48px; height: 48px; background-color: #dbeafe;">
  <Arrow position="top" v-bind="args"/>
</div>
    `,
    description: 'Directional callout pointer connecting a floating container to its target element. Supports static positions (`top`, `bottom`, `left`, `right`), automatic placement (`position="auto"` with `elementTarget` CSS selector or `HTMLElement`), seamless parent background/border/radius inheritance, and an exposed `update()` method.',
    hide: true
  }
}
