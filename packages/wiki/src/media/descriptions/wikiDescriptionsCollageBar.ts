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
      'automatic gradient scrim background for top and bottom overlay positions',
      'action button with customizable icon, text, and attributes',
      'customizable container HTML tag (defaults to figcaption)',
      'selected state with palette accent coloring',
      'custom body and trailing slot support',
      'click event handling with payload and detail forwarding'
    ],
    ru: [
      'гибкая раскладка с заголовком (label), текстом описания и кнопкой действия',
      'поддержка нескольких позиций: static, наложение сверху (top) и снизу (bottom)',
      'автоматическое градиентное затемнение для верхнего и нижнего наложения',
      'кнопка действия с настраиваемой иконкой, текстом и атрибутами',
      'настраиваемый HTML-тег контейнера (по умолчанию figcaption)',
      'состояние выбора (selected) с акцентной стилизацией палитры',
      'поддержка пользовательских слотов body и trailing',
      'обработка событий клика с передачей данных и деталей'
    ]
  },
  import: [],
  stories: [
    {
      id: 'CollageBarPositions',
      name: {
        en: 'Positions',
        ru: 'Позиции'
      },
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
              description="Gradient scrim at the top"
              icon="more_vert"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <DesignComponent
              position="bottom"
              label="Bottom Overlay Bar"
              description="Gradient scrim at the bottom"
              button="View"
              icon="visibility"
            />
          </div>
        </div>
      `
    },
    {
      id: 'CollageBarSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #body>Body slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
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
  <CollageBar v-bind="args"/>
</div>
    `,
    description: `
A bar and caption component designed for media items, collages, and image/video cards.
Displays a title (label), auxiliary description, and an optional trailing action button or icon.
Supports static positioning or pinning to the top or bottom of media containers with automatic gradient scrim backgrounds.
Includes semantic HTML tag customization (defaults to figcaption), selection states with palette accent colors, and custom body/trailing slots.
Emits click events on interaction.
    `,
    hide: true
  }
}
