import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ListGroup component properties
 *
 * Описания свойств компонента ListGroup
 */
export const wikiDescriptionsListGroup: StorybookComponentsDescriptionItem = {
  name: 'ListGroup',
  description: {
    en: 'Auxiliary component for the List component to group and organize list items with a collapsible structure',
    ru: 'Вспомогательный компонент для компонента List для группировки и организации элементов списка со сворачиваемой структурой'
  },
  possibilities: {
    en: [
      'grouping helper for List component items',
      'collapsible/expandable group functionality via MotionTransform',
      'controlled open state via open prop or header click',
      'optional top divider between consecutive groups',
      'nested group support for hierarchical lists',
      'exposed getOpen() state inspection method',
      'flexible content management through head and list slots'
    ],
    ru: [
      'помощник группировки для элементов компонента List',
      'функциональность сворачиваемой/разворачиваемой группы через MotionTransform',
      'управление состоянием через проп open или клик по заголовку',
      'опциональный разделитель между последовательными группами',
      'поддержка вложенных групп для иерархических списков',
      'экспонируемый метод getOpen() для чтения состояния открытия',
      'гибкое управление контентом через слоты head и list'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template #head="{ open }">
        <div class="wiki-storybook-item--padding">
          Group header ({{ open ? 'open' : 'close' }})
        </div>
      </template>
      <template #list>
        <div class="wiki-storybook-item--padding">
          Main content area for grouped list items
        </div>
      </template>
    </DesignComponent>
  `,
  play: `
const groupElement = canvasElement.querySelector<HTMLElement>('.design-component')
const headElement = canvasElement.querySelector<HTMLElement>('.design-component__head')

await expect(groupElement).toBeInTheDocument()
await expect(groupElement).toHaveAttribute('role', 'group')
await expect(headElement).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { ListGroupExpose } from \'@dxtmisha/constructor/ListGroup\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ListGroupBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <template #head="{ open }">
              <div class="wiki-storybook-item--padding">
                Collapsible Group ({{ open ? 'Open' : 'Closed' }})
              </div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">
                Grouped content item 1, Grouped content item 2
              </div>
            </template>
          </DesignComponent>

          <DesignComponent open>
            <template #head="{ open }">
              <div class="wiki-storybook-item--padding">
                Initially Open Group ({{ open ? 'Open' : 'Closed' }})
              </div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">
                Pre-expanded list items
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const groups = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(groups.length).toBe(2)
await expect(groups[0]).toHaveAttribute('data-open', 'close')
await expect(groups[1]).toHaveAttribute('data-open', 'open')

const firstHead = groups[0].querySelector<HTMLElement>('.design-component__head')
const firstTrigger = groups[0].querySelector<HTMLElement>('[aria-expanded]')
await userEvent.click(firstHead!)
await waitFor(async () => {
  await expect(groups[0]).toHaveAttribute('data-open', 'open')
  await expect(firstTrigger).toHaveAttribute('aria-expanded', 'true')
})

await userEvent.click(firstHead!)
await waitFor(async () => {
  await expect(groups[0]).toHaveAttribute('data-open', 'close')
  await expect(firstTrigger).toHaveAttribute('aria-expanded', 'false')
})
      `
    },
    {
      id: 'ListGroupDivider',
      name: {
        en: 'Dividers',
        ru: 'Разделители'
      },
      propsName: 'divider',
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <template #head>
              <div class="wiki-storybook-item--padding">First group</div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">First group items</div>
            </template>
          </DesignComponent>

          <DesignComponent divider>
            <template #head>
              <div class="wiki-storybook-item--padding">Second group (divider=true)</div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Second group items</div>
            </template>
          </DesignComponent>

          <DesignComponent :divider="false">
            <template #head>
              <div class="wiki-storybook-item--padding">Third group (divider=false)</div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Third group items</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const groups = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(groups.length).toBe(3)
await expect(groups[0]).not.toHaveAttribute('data-divider', 'divider')
await expect(groups[1]).toHaveAttribute('data-divider', 'divider')
await expect(groups[2]).not.toHaveAttribute('data-divider', 'divider')
      `
    },
    {
      id: 'ListGroupSlots',
      name: {
        en: 'Slots (head & list)',
        ru: 'Слоты (head и list)'
      },
      template: `
        <DesignComponent>
          <template #head="{ open, ...binds }">
            <div class="wiki-storybook-item--padding" v-bind="binds">
              Header slot state: {{ open ? 'expanded' : 'collapsed' }}
            </div>
          </template>
          <template #list>
            <div class="wiki-storybook-item--padding">
              List slot body content
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const groupElement = canvasElement.querySelector<HTMLElement>('.design-component')
const headElement = canvasElement.querySelector<HTMLElement>('.design-component__head')
const headContent = headElement?.querySelector<HTMLElement>('.wiki-storybook-item--padding')
await expect(headElement).toHaveTextContent('Header slot state: collapsed')
await expect(headContent).toHaveAttribute('aria-expanded', 'false')

await userEvent.click(headElement!)
await waitFor(async () => {
  await expect(groupElement).toHaveAttribute('data-open', 'open')
  await expect(headElement).toHaveTextContent('Header slot state: expanded')
  await expect(headContent).toHaveAttribute('aria-expanded', 'true')
})
      `
    },
    {
      id: 'ListGroupExposed',
      name: {
        en: 'Expose (getOpen)',
        ru: 'Экспонируемые методы (getOpen)'
      },
      setup: `
      const groupReference = ref<ListGroupExpose | null>(null)
      const currentOpenState = ref<string>('not checked')
      const readOpenState = () => {
        currentOpenState.value = String(groupReference.value?.getOpen() ?? false)
      }
      return {
        groupReference,
        currentOpenState,
        readOpenState
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="readOpenState">Check getOpen()</button>
            <div class="wiki-storybook-card" data-testid="expose-status">getOpen: {{ currentOpenState }}</div>
          </div>
          <DesignComponent ref="groupReference">
            <template #head="{ open }">
              <div class="wiki-storybook-item--padding">
                Inspectable Group ({{ open ? 'open' : 'close' }})
              </div>
            </template>
            <template #list>
              <div class="wiki-storybook-item--padding">Expose body items</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const checkButton = canvasElement.querySelector<HTMLButtonElement>('button')
const statusCard = canvasElement.querySelector<HTMLElement>('[data-testid="expose-status"]')
const headElement = canvasElement.querySelector<HTMLElement>('.design-component__head')

await userEvent.click(checkButton!)
await expect(statusCard).toHaveTextContent('getOpen: false')

await userEvent.click(headElement!)
await waitFor(async () => {
  await userEvent.click(checkButton!)
  await expect(statusCard).toHaveTextContent('getOpen: true')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & combinations)
    // =========================================================================
    {
      id: 'ListGroupTestPropsAndStates',
      name: {
        en: 'Test: Props, combinations and nested groups',
        ru: 'Тест: Свойства, комбинации и вложенные группы'
      },
      propsName: ['open', 'divider'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent :open="false" :divider="false">
            <template #head><div class="wiki-storybook-item--padding">Closed without divider</div></template>
            <template #list><div class="wiki-storybook-item--padding">Hidden content</div></template>
          </DesignComponent>

          <DesignComponent :open="true" :divider="true">
            <template #head><div class="wiki-storybook-item--padding">Open with divider</div></template>
            <template #list>
              <div class="wiki-storybook-item--padding">Parent content</div>
              <DesignComponent divider>
                <template #head="{ open }">
                  <div class="wiki-storybook-item--padding">Nested child ({{ open ? 'open' : 'close' }})</div>
                </template>
                <template #list>
                  <div class="wiki-storybook-item--padding">Nested leaf item</div>
                </template>
              </DesignComponent>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
await waitFor(async () => {
  const groups = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(groups.length).toBe(3)

  await expect(groups[0]).toHaveAttribute('role', 'group')
  await expect(groups[0]).toHaveAttribute('data-open', 'close')
  await expect(groups[0]).not.toHaveAttribute('data-divider', 'divider')

  await expect(groups[1]).toHaveAttribute('data-open', 'open')
  await expect(groups[1]).toHaveAttribute('data-divider', 'divider')

  await expect(groups[2]).toHaveAttribute('data-open', 'close')
  await expect(groups[2]).toHaveAttribute('data-divider', 'divider')
})

const groups = canvasElement.querySelectorAll<HTMLElement>('.design-component')
const nestedHead = groups[2].querySelector<HTMLElement>('.design-component__head')
await userEvent.click(nestedHead!)
await waitFor(async () => {
  await expect(groups[2]).toHaveAttribute('data-open', 'open')
  await expect(groups[1]).toHaveAttribute('data-open', 'open')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListGroup'} type={'listGroup'}/>
<Canvas of={Component.ListGroupBasic}/>
<Canvas of={Component.ListGroupDivider}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getOpen'}/>
<Canvas of={Component.ListGroupExposed}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ListGroup'} type={'slots'}/>
<Canvas of={Component.ListGroupSlots}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <ListGroup v-bind="args">
    <template #head="{ open, ...binds }">
      <span v-bind="binds">head ({{ open ? 'open' : 'close' }})</span>
    </template>
    <template #list>
      list
    </template>
  </ListGroup>
</div>
    `,
    description: `
Structural component for grouping related list items into collapsible/expandable hierarchies. Manages the visual nesting and visibility of child elements, providing organized categorization within dense lists.
Features smooth height animations via MotionTransform and exposes open state and ARIA bindings in the #head slot alongside the getOpen() exposed method.
Controlled via the open and divider props and utilizes #head and #list slots for content distribution. Use for navigation submenus, categorized data lists, or accordion-style expanding rows.
    `,
    hide: true
  }
}
