import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsRipple: StorybookComponentsDescriptionItem = {
  name: 'Ripple',
  description: {
    en: 'Component for creating a ripple wave effect on click interactions',
    ru: 'Компонент для создания эффекта волны при взаимодействии с элементом'
  },
  possibilities: {
    en: [
      'it creates a ripple wave effect on click',
      'automatic positioning based on click coordinates',
      'disabling effect with `disabled` property',
      'Material Design inspired animation',
      'it works with any interactive elements'
    ],
    ru: [
      'создает эффект волны при клике',
      'автоматическое позиционирование по координатам клика',
      'отключение эффекта свойством `disabled`',
      'анимация в стиле Material Design',
      'работает с любыми интерактивными элементами'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Ripple'} type={'ripple'}/>
    `
  },
  ai: {
    render: `
<div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 48px;"
>
  <Ripple v-bind="args"/>
</div>
    `,
    description: `
**Note:** This is a low-level decorative component. You should not use it directly.
          It is automatically integrated into interactive components like \`Button\`, \`ListItem\`,
          and \`Card\` to provide feedback. This documentation is for informational purposes.

Ripple is a decorative component that adds a Material Design-style wave effect to provide
visual feedback on user interaction (clicks, taps). It should be placed inside an interactive container.

**Key Features:**
1.  **Placement:** It is designed to be placed as the last child inside a host element
                   (like a button, card, or list item). The host element MUST have \`position:
                   relative\` and \`overflow: hidden\` for the effect to work correctly.

2.  **Automatic Effect:** The ripple animation starts automatically from the point of a \`pointerdown\`
                          event (click or tap) on its parent container.

3.  **Self-Managing:** The component handles the creation, animation (expansion and fade-out),
                       and removal of ripple elements from the DOM automatically.

4.  **Styling:** The ripple's color is determined by the CSS \`color\` property of its host element
                 (\`currentColor\`). It can be styled by changing the text color of the parent.

5.  **Control:** The effect can be completely disabled by passing the \`disabled: true\` prop.

**When to Use:**
- Use inside buttons, cards, list items, or any other clickable surface to provide clear,
  tangible feedback that the user's action was registered.
- It is purely a visual enhancement and adds no functionality on its own.
`
  }
}
