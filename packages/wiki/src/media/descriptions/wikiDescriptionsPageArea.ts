import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for PageArea component properties
 *
 * Описания свойств компонента PageArea
 */
export const wikiDescriptionsPageArea: StorybookComponentsDescriptionItem = {
  name: 'PageArea',
  description: {
    en: 'A structural component that automatically selects and renders appropriate UI blocks (Page, Section, Block, or Group) based on the current nesting level or area context.',
    ru: 'Структурный компонент, который автоматически выбирает и отрисовывает подходящие блоки интерфейса (Page, Section, Block или Group) в зависимости от текущего уровня вложенности или контекста области.'
  },
  possibilities: {
    en: [
      'automatic component switching based on area context',
      'semantic content organization with consistent structure',
      'integration with layout zones and hierarchical state',
      'shorthand for complex page layouts with nested elements'
    ],
    ru: [
      'автоматическое переключение компонентов на основе контекста области',
      'семантическая организация контента с согласованной структурой',
      'интеграция с зонами макета и иерархическим состоянием',
      'сокращенная запись для сложных макетов страниц с вложенными элементами'
    ]
  },
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import { setAreaValue } from \'@dxtmisha/constructor\'',
    'import { expect, within, userEvent, waitFor } from \'storybook/test\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <p>
          The PageArea component is a specialized container designed to structure the content within a specific page or layout region.
          It provides consistent margins, alignment, and semantic grouping for nested components.
        </p>
        <p>
          It acts as an orchestrator for various UI blocks, allowing developers to define a clear information hierarchy.
          Whether it's a dashboard overview or a detailed data view, PageArea ensures the layout remains cohesive.
        </p>
      </DesignComponent>
  `,
  play: `
      await expect(canvasElement).toHaveTextContent('PageArea component')
    `,
  stories: [
    {
      id: 'PageAreaBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <DesignComponent label="Basic Area">
          <p>This is a basic example of PageArea content. It can contain any combination of blocks, sections, or individual UI elements.</p>
        </DesignComponent>
      `,
      play: `
        await expect(canvasElement).toHaveTextContent('Basic Area')
        await expect(canvasElement).toHaveTextContent('basic example of PageArea content')
      `
    },
    {
      id: 'PageAreaSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>
            <span data-testid="pa-trailing-slot">Trailing slot</span>
          </template>
        </DesignComponent>
      `,
      play: `
        await expect(canvasElement).toHaveTextContent('Headline slot')
        await expect(canvasElement).toHaveTextContent('Label slot')
        await expect(canvasElement).toHaveTextContent('Description slot')
        await expect(canvasElement).toHaveTextContent('Caption slot')
        await expect(canvasElement.querySelector('[data-testid="pa-trailing-slot"]')).toHaveTextContent('Trailing slot')
        await expect(canvasElement).toHaveTextContent('Default slot')
      `
    },
    {
      id: 'PageAreaTestCascadeAndBoundary',
      name: {
        en: 'Test: Hierarchical area delegation and boundary values',
        ru: 'Тест: Иерархическое делегирование областей и граничные значения'
      },
      setup: `
        const rootArea = ref<string | undefined>('container')
        const toggleArea = () => {
          rootArea.value = rootArea.value === 'container' ? 'section' : 'container'
        }
        const AreaHost = defineComponent({
          props: {
            area: {
              type: String,
              default: undefined
            }
          },
          setup(props: { area?: string }, { slots }) {
            setAreaValue(props.area ? rootArea : undefined)
            return () => h('div', { 'data-testid': 'pa-host' }, slots.default ? slots.default() : [])
          }
        })
        return { rootArea, toggleArea, AreaHost }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="toggleArea">Toggle Root Area</button>
            <span data-testid="pa-mode">{{ rootArea }}</span>
          </div>
          <component :is="AreaHost" :area="rootArea">
            <DesignComponent data-testid="pa-level-1" tag-header="h1" label="Level One">
              <DesignComponent data-testid="pa-level-2" label="Level Two">
                <DesignComponent data-testid="pa-level-3" label="Level Three">
                  <span>Deep child</span>
                </DesignComponent>
              </DesignComponent>
            </DesignComponent>
          </component>
          <DesignComponent
            data-testid="pa-zero"
            :headline="0"
            :label="0"
            :description="0"
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const level1 = canvasElement.querySelector('[data-testid="pa-level-1"]')
        const level2 = canvasElement.querySelector('[data-testid="pa-level-2"]')
        await expect(level1?.tagName).toBe('MAIN')
        await expect(level2?.tagName).toBe('SECTION')
        await expect(canvasElement.querySelector('[data-testid="pa-level-3"]')).toHaveTextContent('Level Three')

        await userEvent.click(canvas.getByRole('button', { name: 'Toggle Root Area' }))
        await waitFor(() => {
          expect(canvasElement.querySelector('[data-testid="pa-mode"]')).toHaveTextContent('section')
          expect(canvasElement.querySelector('[data-testid="pa-level-1"]')?.tagName).toBe('DIV')
        })

        const zeroEl = canvasElement.querySelector('[data-testid="pa-zero"]')
        await expect(zeroEl).toHaveTextContent('0')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'PageArea'} type={'pageArea'}/>
<Canvas of={Component.PageAreaBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
    `,
    slots: `
<Canvas of={Component.PageAreaSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    description: `
The PageArea component serves as a foundational structural unit for application pages.
It helps define the main content zones and ensures consistent layout management across different views.
Typically used as a root-level container within a specific page or sub-section to organize content blocks and handle area-specific logic.
    `,
    hide: true
  }
}
