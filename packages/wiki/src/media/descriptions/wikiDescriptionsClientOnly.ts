import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ClientOnly component properties
 *
 * Описания свойств компонента ClientOnly
 */
export const wikiDescriptionsClientOnly: StorybookComponentsDescriptionItem = {
  name: 'ClientOnly',
  description: {
    en: 'Component for managing rendering exclusively on the client side, essential for SSR compatibility',
    ru: 'Компонент для управления рендерингом исключительно на стороне клиента, необходим для совместимости с SSR'
  },
  possibilities: {
    en: [
      'prevents hydration mismatch errors in SSR/SSG environments',
      'render client-side only components (e.g. charts, maps)',
      'toggleable via "clientOnly" property',
      'supports default slot for the content'
    ],
    ru: [
      'предотвращает ошибки рассогласования гидратации в средах SSR/SSG',
      'рендерит компоненты только для клиента (например, графики, карты)',
      'переключается через свойство "clientOnly"',
      'поддерживает слот default для контента'
    ]
  },
  import: [],
  render: `
    <DesignComponent>
      <h4>Client-Side Content</h4>
      <p>This block is only visible when the component is mounted in the browser.</p>
      <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
    </DesignComponent>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ClientOnly'} type={'clientOnly'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <ClientOnly v-bind="args">
    <h4>Client-Side Content</h4>
    <p>This block is only visible when the component is mounted in the browser.</p>
    <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
  </ClientOnly>
</div>
    `,
    description: `
The ClientOnly component is a utility designed to ensure that its children are only rendered on the client side.
This is particularly useful in Server-Side Rendering (SSR) or Static Site Generation (SSG) contexts where certain components
(like those relying on browser-only APIs like 'window' or 'document', or complex visualizations) should not be executed or rendered on the server.
It works by waiting until the component is mounted in the browser before rendering its content.
Controlled by the 'clientOnly' boolean property (default is true).
    `
  }
}
