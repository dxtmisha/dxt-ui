import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MotionTransform utility
 *
 * Описания утилиты MotionTransform
 */
export const wikiDescriptionsMotionTransform: StorybookComponentsDescriptionItem = {
  name: 'MotionTransform',
  description: {
    en: 'Low-level motion system that manages element transforms, state transitions, and interaction events for contextual UI like windows and menus',
    ru: 'Низкоуровневая система анимаций, управляющая трансформациями элементов, переходами состояний и событиями взаимодействия для контекстных интерфейсов (окна, меню)'
  },
  possibilities: {
    en: [
      'centralized state for open/show/teleport with computed accessors',
      'size measurement and CSS variable updates for smooth animations',
      'teleport control for window-like behavior and off-DOM rendering',
      'click/close/auto-close handling with ignore areas',
      'programmatic API for open/close/toggle and state transitions',
      'designed to be embedded into higher-level components (Window, Dropdown, etc.)'
    ],
    ru: [
      'централизованное состояние open/show/teleport с вычисляемыми аксессорами',
      'измерение размеров и обновление CSS‑переменных для плавных анимаций',
      'управление телепортацией для «оконного» поведения и рендера вне DOM',
      'обработка кликов/закрытия/автозакрытия с зонами игнорирования',
      'программный API для open/close/toggle и переходов состояний',
      'предназначена для встраивания в компоненты верхнего уровня (Window, Dropdown и т. п.)'
    ]
  },
  render: `
      <DesignComponent class="wiki-storybook-decreased" v-bind="args">
        <template #head>
          <div class="wiki-storybook-item--padding">
            <h3>MotionTransform Demo</h3>
            <p>Interactive demonstration of the MotionTransform system - a foundational utility for window-like behaviors and contextual UI interactions.</p>
          </div>
        </template>

        <template #body="{classes}">
          <div class="wiki-storybook-item--padding">
            <h4>Motion Transform System</h4>
            <p>MotionTransform provides the foundational motion and state management system that powers interactive UI components like windows, dropdowns, and contextual menus. It handles element transforms, animation states, and user interaction events with smooth animations.</p>

            <h4>Core Components</h4>
            <p>The motion system consists of specialized managers: State handles open/show/teleport flags, Element provides DOM helpers, Size manages CSS variables for animations, Event coordinates click handling, and Go offers programmatic control methods.</p>

            <h4>Developer Integration</h4>
            <p>MotionTransform is designed as a low-level utility for component developers. It provides APIs for managing UI behaviors while handling DOM manipulation and animation orchestration behind the scenes.</p>
            <div class="wiki-storybook-flex">
              <button :class="classes.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </div>
        </template>
      </DesignComponent>
    `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'MotionTransformVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        open: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-item--padding">
          <button class="wiki-storybook-button" @click="open = !open">Toggle ({{ open }})</button>
        </div>
        <DesignComponent v-model:open="open">
          <template #head>
            <div class="wiki-storybook-item--padding">
              <h4>v-model controlled</h4>
              <p>This component's visibility is controlled by an external ref via v-model:open.</p>
            </div>
          </template>
          <template #body>
            <div class="wiki-storybook-item--padding">
              <p>Content is {{ open ? 'visible' : 'hidden' }}</p>
              <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the component's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>
              <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the MotionTransform component, such as in complex forms or coordinated UI interactions.</p>
            </div>
          </template>
        </DesignComponent>
      `
    },
    {
      id: 'MotionTransformIgnore',
      name: {
        en: 'Ignore zones',
        ru: 'Зоны игнорирования'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent ignoreSelector=".mt-ignore">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>Ignore zones behavior</h4>
                <p>This text acts as the trigger that opens the content area</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <p>Clicks on elements matching <code>.mt-ignore</code> are not treated as outside and won’t trigger auto close.</p>
                <p>This is useful for trigger buttons, helper controls, and nested interactive areas that must remain active without closing the window.</p>
                <p>Try it: click any button with <code>.mt-ignore</code> outside or inside — the window stays open; clicks on other outside areas will close it.</p>
                <p>Use <code>ignore</code> when you have a concrete DOM element, and <code>ignoreSelector</code> when zones are multiple or dynamic.</p>
                <p>Keep selectors specific to avoid accidental matches and unintended auto‑close blocking.</p>
                <ul>
                  <li>Pattern: a trigger with class <code>.mt-ignore</code> outside and inside the window</li>
                  <li>Expectation: clicks on the trigger are ignored by outside‑check logic, the window doesn’t close</li>
                </ul>
              </div>
            </template>
          </DesignComponent>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding mt-ignore">
            <h5>External ignore zone</h5>
            <p>This area has class <code>.mt-ignore</code> and demonstrates how clicks here won't close the window below.</p>
            <button class="wiki-storybook-button">Ignored button</button>
          </div>
        </div>
      `
    },
    {
      id: 'MotionTransformAnimationHeadPosition',
      name: {
        en: 'Head position animation',
        ru: 'Анимация позиции заголовка'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent animationHeadPosition="top">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>animationHeadPosition: top</h4>
                <p>Click to open — Head stays at the top during transition</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <h5>Top Position Animation</h5>
                <p>With <code>animationHeadPosition="top"</code>, the head element maintains its position at the top of the container throughout the entire show/hide animation sequence.</p>
                <p>This behavior is ideal for interfaces where the header serves as a stable reference point, such as dropdown menus, navigation panels, or content that expands downward from a fixed trigger.</p>
                <p>The animation creates a smooth vertical expansion effect while keeping the header visually anchored, providing users with a clear understanding of the content's origin point.</p>
                <ul>
                  <li>Header remains stationary during animation</li>
                  <li>Content expands/collapses below the header</li>
                  <li>Provides stable visual reference point</li>
                  <li>Best for downward-expanding interfaces</li>
                </ul>
              </div>
            </template>
          </DesignComponent>

          <DesignComponent animationHeadPosition="toBottom">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>animationHeadPosition: toBottom</h4>
                <p>Click to open — Head moves toward the bottom with content</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <h5>Bottom Movement Animation</h5>
                <p>When using <code>animationHeadPosition="toBottom"</code>, the head element travels together with the content during the animation, creating a unified motion experience.</p>
                <p>This approach is particularly effective for accordion-style interfaces, collapsible sections, or any scenario where the header and content should move as a cohesive unit.</p>
                <p>The animation provides a more dynamic feeling, as both header and content participate in the motion, creating a sense of the entire section expanding or contracting as one entity.</p>
                <ul>
                  <li>Header and content move together</li>
                  <li>Creates unified motion experience</li>
                  <li>Ideal for accordion-style interfaces</li>
                  <li>Provides cohesive visual feedback</li>
                </ul>
              </div>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MotionTransform'} type={'motionTransform'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'classes'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'animationHeadPosition'}/>
<Canvas of={Component.MotionTransformAnimationHeadPosition}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'ignore'}/>
<Canvas of={Component.MotionTransformIgnore}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>
<Canvas of={Component.MotionTransformVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.isShow'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.setOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toClose'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toggle'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'MotionTransform'} type={'slots'}/>
    `
  }
}
