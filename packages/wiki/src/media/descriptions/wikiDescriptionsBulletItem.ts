import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for BulletItem component properties
 *
 * Описания свойств компонента BulletItem
 */
export const wikiDescriptionsBulletItem: StorybookComponentsDescriptionItem = {
  name: 'BulletItem',
  description: {
    en: 'Individual semantic <li> item within a bulleted list with logical marker alignment and skeleton support',
    ru: 'Отдельный семантический пункт <li> внутри маркированного списка с логическим выравниванием маркера и поддержкой скелетона'
  },
  possibilities: {
    en: [
      'renders list item as semantic <li> with logical LTR/RTL marker alignment',
      'supports text or numeric description, #description slot, and #default slot',
      'supports explicit descriptionId and skeleton loading state (isSkeleton)'
    ],
    ru: [
      'рендерит элемент списка как семантический <li> с логическим LTR/RTL выравниванием маркера',
      'поддерживает текстовое или числовое описание, слот #description и слот #default',
      'поддерживает явный descriptionId и состояние загрузки скелетона (isSkeleton)'
    ]
  },
  import: [],
  render: `
    <ul style="margin: 0; padding: 0; list-style: none">
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
    </ul>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('LI')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'BulletItemBasic',
      name: {
        en: 'Basic usage & slots',
        ru: 'Базовое использование и слоты'
      },
      propsName: ['description'],
      template: `
        <ul style="margin: 0; padding: 0; list-style: none">
          <DesignComponent data-testid="bi-prop" description="Bullet item from description prop" />
          <DesignComponent data-testid="bi-desc-slot">
            <template #description>Bullet item from description slot</template>
          </DesignComponent>
          <DesignComponent data-testid="bi-default-slot">
            <span>Bullet item from default slot</span>
          </DesignComponent>
        </ul>
      `,
      play: `
await expect(canvasElement.querySelector('[data-testid="bi-prop"]')).toHaveTextContent('Bullet item from description prop')
await expect(canvasElement.querySelector('[data-testid="bi-desc-slot"]')).toHaveTextContent('Bullet item from description slot')
await expect(canvasElement.querySelector('[data-testid="bi-default-slot"]')).toHaveTextContent('Bullet item from default slot')
      `
    },
    {
      id: 'BulletItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      propsName: ['isSkeleton', 'description'],
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <ul style="margin: 0; padding: 0; list-style: none">
            <DesignComponent data-testid="bi-skeleton" isSkeleton description="Loading bullet item" />
          </ul>
        </DesignSkeleton>
      `,
      play: `
const item = canvasElement.querySelector('[data-testid="bi-skeleton"]')
await expect(item).toBeInTheDocument()
await expect(item?.querySelector('.design-component__description')).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'BulletItemTestBoundaries',
      name: {
        en: 'Test: Explicit descriptionId, numeric zero & empty item',
        ru: 'Тест: Явный descriptionId, числовой ноль и пустой элемент'
      },
      propsName: ['description', 'descriptionId'],
      template: `
        <ul style="margin: 0; padding: 0; list-style: none">
          <DesignComponent
            data-testid="bi-id"
            description="Identified bullet"
            description-id="wiki-bullet-desc-id"
          />
          <DesignComponent
            data-testid="bi-zero"
            :description="0"
          />
          <DesignComponent data-testid="bi-empty" />
        </ul>
      `,
      play: `
await expect(canvasElement.querySelector('#wiki-bullet-desc-id')).toHaveTextContent('Identified bullet')
await expect(canvasElement.querySelector('[data-testid="bi-zero"]')).toHaveTextContent('0')
await expect(canvasElement.querySelector('[data-testid="bi-empty"] .design-component__description')).toBeNull()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'BulletItem'} type={'bulletItem'}/>
<Canvas of={Component.BulletItemBasic}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BulletItemSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Individual semantic <li> bullet item component. Supports text or numeric content via description prop, custom markup via #description or #default slots, explicit descriptionId, and skeleton loading via isSkeleton. Must be placed inside a Bullet component or <ul> container.
`,
    hide: true
  }
}
