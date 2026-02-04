import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Arrow component properties
 *
 * Описания свойств компонента Arrow
 */
export const wikiDescriptionsArrow: StorybookComponentsDescriptionItem = {
  name: 'Arrow',
  description: {
    en: 'Component for displaying an arrow or directional indicator',
    ru: 'Компонент для отображения стрелки или индикатора направления'
  },
  possibilities: {
    en: [
      'displaying directional arrows',
      'customizable size and color',
      'rotation support'
    ],
    ru: [
      'отображение направляющих стрелок',
      'настраиваемый размер и цвет',
      'поддержка вращения'
    ]
  },
  import: [
    'import { ref } from \'vue\''
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
            <DesignComponent v-bind="args"/>
          </div>
        </div>
      </div>
    `,
  stories: [
    {
      id: 'ArrowBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      setup: `
      const elementBasic = ref()
      const elementTarget = ref()
      const elementArray = ref()

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

          requestAnimationFrame(() => elementArray.value?.update())
        }
      }

      return {
        elementBasic,
        elementTarget,
        elementArray,
        x,
        y,
        onClick
      }
      `,
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
                id="id-arrow-target-2"
                style="
                position: absolute;
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
                text-wrap: nowrap;
                pointer-events: none;
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
              <DesignComponent
                ref="elementArray"
                position="auto"
                element-target="#id-arrow-target-2"
              />
            </div>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Arrow'} type={'arrow'}/>
<Canvas of={Component.ArrowBasic}/>
`
  },
  ai: {
    render: `
<div :class="classDemo.item" style="position: relative; width: 48px; height: 48px; background-color: oklch(93.2% 0.032 255.585);">
    <Arrow position="top" v-bind="args"/>
</div>
    `,
    description: `
Arrow is a functional component that renders a triangular pointer connecting a container (like a tooltip, popover, or dropdown) to a target element.
It is designed to automatically blend with the parent container's styles (background, border) to create a seamless speech-bubble effect.

**Key Features:**
1. **Target Linking:** Points to a specific DOM element defined by \`elementTarget\` (selector or HTMLElement).
2. **Auto-Positioning:** Automatically calculates the correct placement (top, bottom, left, right) relative to the container and the target.
3. **Style Inheritance:** Inherits \`background-color\`, \`border-color\`, and \`border-width\` from the parent element to match the container's visual style perfectly.
4. **Reactive Updates:** Updates its position when the target or container moves (often used within \`Window\` or floating UI components).

**When to use:**
- Inside **Tooltips** to point to the hovered element.
- Inside **Popovers** or **Dropdowns** to indicate the trigger source.
- For any floating UI that needs a directional indicator.

**Usage Examples:**

- **Basic Tooltip Arrow:**
  \`<div class="tooltip">
     Message
     <Arrow element-target="#button-id" />
   </div>\`

- **With Auto Positioning:**
  \`<Arrow position="auto" element-target=".target-element" />\`
    `
  }
}
