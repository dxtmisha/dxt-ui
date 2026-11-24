import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for CollageBar component properties
 *
 * Описания свойств компонента CollageBar
 */
export const wikiDescriptionsCollageBar: StorybookComponentsDescriptionItem = {
  name: 'CollageBar',
  description: {
    en: 'A toolbar and caption component for media elements, collages, and gallery items',
    ru: 'Компонент панели и подписи для медиаэлементов, коллажей и элементов галереи'
  },
  possibilities: {
    en: [
      'flexible layout with title (label), descriptive text, and action button',
      'support for multiple positions: static, top overlay, and bottom overlay',
      'action button with customizable icon, text, href, and attributes',
      'customizable container HTML tag (defaults to figcaption)',
      'selected state modifier support',
      'custom default, description, body, and trailing slot support',
      'click event handling with payload and detail forwarding'
    ],
    ru: [
      'гибкая раскладка с заголовком (label), текстом описания и кнопкой действия',
      'поддержка нескольких позиций: static, наложение сверху (top) и снизу (bottom)',
      'кнопка действия с настраиваемой иконкой, текстом, ссылкой href и атрибутами',
      'настраиваемый HTML-тег контейнера (по умолчанию figcaption)',
      'поддержка модификатора состояния выбора (selected)',
      'поддержка пользовательских слотов default, description, body и trailing',
      'обработка событий клика с передачей данных и деталей'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\''
  ],
  render: `
      <DesignComponent v-bind="args" />
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'CollageBarPositions',
      name: {
        en: 'Positions',
        ru: 'Позиции'
      },
      propsName: ['position', 'label', 'description', 'button', 'icon'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <DesignComponent
              position="static"
              label="Static Bar"
              description="Standard caption layout"
              button="Action"
              icon="visibility"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <DesignComponent
              position="top"
              label="Top Overlay Bar"
              description="Anchored at the top"
              icon="more_vert"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <DesignComponent
              position="bottom"
              label="Bottom Overlay Bar"
              description="Anchored at the bottom"
              button="View"
              icon="visibility"
            />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).toHaveClass('design-component--position--static')
await expect(items[1]).toHaveClass('design-component--position--top')
await expect(items[2]).toHaveClass('design-component--position--bottom')
      `
    },
    {
      id: 'CollageBarSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <DesignComponent>
              <template #default>Default slot</template>
              <template #description>Description slot</template>
              <template #trailing>Trailing slot</template>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <DesignComponent>
              <template #body>Body slot</template>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
await expect(items[0]).toHaveTextContent('Default slot')
await expect(items[0]).toHaveTextContent('Description slot')
await expect(items[0]).toHaveTextContent('Trailing slot')
await expect(items[1]).toHaveTextContent('Body slot')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA — Constructor Props Only)
    // =========================================================================
    {
      id: 'CollageBarTestStatesAndFormats',
      name: {
        en: 'Test: Selected state, custom tag, href, numeric zero and events',
        ru: 'Тест: Выбранное состояние, тег, href, числовой 0 и события'
      },
      propsName: ['selected', 'tag', 'href', 'label', 'description', 'button', 'buttonAttrs', 'value'],
      setup: `
      const lastClicked = ref('')
      const onClickLite = (value: EventClickValue) => {
        lastClicked.value = String(value.value)
      }
      return { lastClicked, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <span data-testid="collage-bar-test-click">{{ lastClicked }}</span>
          <DesignComponent
            selected
            tag="div"
            label="Selected Bar"
            description="With object button and click event"
            :button="{ label: 'Trigger' }"
            value="bar-42"
            @click-lite="onClickLite"
          />
          <DesignComponent
            :label="0"
            :description="0"
            :button="0"
            href="#bar-zero"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
await expect(items[0].tagName).toBe('DIV')
await expect(items[0]).toHaveClass('design-component--selected')
await expect(items[1].querySelector('.design-component__label')).toHaveTextContent('0')
await expect(items[1].querySelector('.design-component__description')).toHaveTextContent('0')
await expect(items[1].querySelector('a')).toHaveAttribute('href', '#bar-zero')
const button = items[0].querySelector('button') as HTMLElement | null
if (button) {
  await userEvent.click(button)
}
await expect(canvas.getByTestId('collage-bar-test-click')).toHaveTextContent('bar-42')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'CollageBar'} type={'collageBar'}/>
<Canvas of={Component.CollageBarPositions}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
<Canvas of={Component.CollageBarSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args"/>
</div>
    `,
    description: `
A bar and caption component designed for media items, collages, and image/video cards.
Displays a title (label), auxiliary description, and an optional trailing action button or icon.
Supports static positioning or pinning to the top or bottom of media containers.
Includes semantic HTML tag customization (defaults to figcaption), selection states, and custom body/trailing slots.
Emits click events on interaction.
    `,
    hide: true
  }
}
