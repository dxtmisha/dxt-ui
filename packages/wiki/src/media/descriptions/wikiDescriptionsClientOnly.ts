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
      'renders client-side only components (e.g. charts, maps) after mount',
      'toggleable via "clientOnly" property',
      'renders default slot transparently without extra wrapper DOM elements'
    ],
    ru: [
      'предотвращает ошибки рассогласования гидратации в средах SSR/SSG',
      'рендерит клиентские компоненты (например, графики, карты) только после монтирования',
      'переключается через свойство "clientOnly"',
      'прозрачно рендерит слот default без лишних DOM-обёрток'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <div data-testid="client-only-default">
        <h4>Client-Side Content</h4>
        <p>This block is only visible when the component is mounted in the browser.</p>
      </div>
    </DesignComponent>
  `,
  play: `
await waitFor(() => {
  const content = canvasElement.querySelector('[data-testid="client-only-default"]')
  expect(content).toBeInTheDocument()
  expect(content).toHaveTextContent('Client-Side Content')
})
  `,
  stories: [
    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'ClientOnlyTestModes',
      name: {
        en: 'Test: clientOnly true/false toggle and empty slot',
        ru: 'Тест: переключение clientOnly true/false и пустой слот'
      },
      propsName: ['clientOnly'],
      setup: `
      const clientOnly = ref(true)
      const toggleMode = () => {
        clientOnly.value = !clientOnly.value
      }
      return { clientOnly, toggleMode }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <button data-testid="co-toggle" class="wiki-storybook-button" @click="toggleMode">Toggle mode</button>
          <DesignComponent :client-only="clientOnly">
            <div data-testid="co-content">Mode: {{ clientOnly }}</div>
          </DesignComponent>
          <DesignComponent :client-only="false">
            <div data-testid="co-ssr">SSR enabled</div>
          </DesignComponent>
          <DesignComponent />
        </div>
      `,
      play: `
await waitFor(() => {
  expect(canvasElement.querySelector('[data-testid="co-content"]')).toHaveTextContent('Mode: true')
  expect(canvasElement.querySelector('[data-testid="co-ssr"]')).toHaveTextContent('SSR enabled')
})
const toggleButton = canvasElement.querySelector('[data-testid="co-toggle"]')
if (toggleButton) {
  await userEvent.click(toggleButton)
}
await expect(canvasElement.querySelector('[data-testid="co-content"]')).toHaveTextContent('Mode: false')
      `
    }
  ],
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
  <DesignComponent v-bind="args">
    <h4>Client-Side Content</h4>
    <p>This block is only visible when the component is mounted in the browser.</p>
    <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
  </DesignComponent>
</div>
    `,
    description: `
The ClientOnly component is a utility designed to ensure that its children are only rendered on the client side.
This is particularly useful in Server-Side Rendering (SSR) or Static Site Generation (SSG) contexts where certain components
(like those relying on browser-only APIs like 'window' or 'document', or complex visualizations) should not be executed or rendered on the server.
It works by waiting until the component is mounted in the browser before rendering its content.
Controlled by the 'clientOnly' boolean property (default is true).
    `,
    hide: true
  }
}
