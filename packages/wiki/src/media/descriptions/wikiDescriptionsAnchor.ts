import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Anchor component properties
 *
 * Описания свойств компонента Anchor
 */
export const wikiDescriptionsAnchor: StorybookComponentsDescriptionItem = {
  name: 'Anchor',
  description: {
    en: 'Component for creating hyperlinks or anchor points for navigation',
    ru: 'Компонент для создания гиперссылок или якорных точек для навигации'
  },
  possibilities: {
    en: [
      'creating links to other pages or resources',
      'creating anchor points for internal page navigation',
      'support for icons and text',
      'customizable appearance'
    ],
    ru: [
      'создание ссылок на другие страницы или ресурсы',
      'создание якорных точек для внутренней навигации по странице',
      'поддержка иконок и текста',
      'настраиваемый внешний вид'
    ]
  },
  documentation: {
    body: `
<StorybookDescriptions componentName={'Anchor'} type={'anchor'}/>
<StorybookDescriptions componentName={'Anchor'} type={'isCopy'}/>
<StorybookDescriptions componentName={'Anchor'} type={'hide'}/>
<StorybookDescriptions componentName={'Anchor'} type={'scroll'}/>
`,
    expose: `
<StorybookDescriptions componentName={'Anchor'} type={'expose.go'}/>
`,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
`
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Anchor href="#" v-bind="args"/>
</div>
    `,
    description: `
Anchor is a fundamental navigation component used to create hyperlinks and anchor points.
It wraps the standard HTML \`<a>\` tag functionality with additional utilities for smooth scrolling and clipboard interactions.

**Key Features:**
1. **Navigation:**
   - Handles standard navigation via \`href\`.
   - Can be used for both internal (router) and external links.

2. **Smooth Scrolling:**
   - The \`scroll\` prop enables smooth scrolling animation when navigating to an element ID (e.g., \`href="#section"\`).

3. **Clipboard Interaction:**
   - The \`isCopy\` prop turns the component into a trigger that copies the link or value to the clipboard.

4. **Slots:**
   - \`#default\`: The content of the link (text, icons, or other elements).

**Usage Examples:**

- **Basic Link:**
  \`<Anchor href="/about">About Us</Anchor>\`

- **Scroll to Anchor:**
  \`<Anchor href="#contact" scroll>Contact</Anchor>\`

- **Copy Link:**
  \`<Anchor href="https://example.com" is-copy>Copy URL</Anchor>\`
    `
  }
}
