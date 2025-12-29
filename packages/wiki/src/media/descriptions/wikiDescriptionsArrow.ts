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

          elementArray.value?.update()
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
              <DesignComponent
                ref="elementArray"
                position="auto"
                element-target="#id-arrow-target"
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
`
  }
}
