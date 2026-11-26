import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Section component properties
 *
 * Описания свойств компонента Section
 */
export const wikiDescriptionsSection: StorybookComponentsDescriptionItem = {
  name: 'Section',
  description: {
    en: 'A semantic container component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <section> tag by default.',
    ru: 'Семантический компонент-контейнер, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <section>.'
  },
  possibilities: {
    en: [
      'semantic grouping of content using <section> tag',
      'support for titles (h2 by default), labels, descriptions, and captions',
      'customizable layout and spacing',
      'support for icons',
      'flexible content organization'
    ],
    ru: [
      'семантическая группировка контента с использованием тега <section>',
      'поддержка заголовков (h2 по умолчанию), меток, описаний и подписей',
      'настраиваемый макет и отступы',
      'поддержка иконок',
      'гибкая организация контента'
    ]
  },
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import { getAreaValue } from \'@dxtmisha/constructor\'',
    'import { expect, within, userEvent, waitFor } from \'storybook/test\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <p>
          The Section component is a fundamental building block for structuring web pages.
          It defaults to using the <code>&lt;section&gt;</code> HTML tag, making it semantically appropriate for grouping thematic content.
        </p>
        <p>
          It provides a rich set of features for content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h2&gt;</code>, which fits the typical document outline structure.
        </p>
        <p>
          Use Section to divide your page into distinct thematic areas, improving both the visual structure and the accessibility of your application.
        </p>
      </DesignComponent>
    `,
  play: `
      const component = canvasElement.querySelector('.design-component')
      await expect(component).toBeInTheDocument()
      await expect(component?.tagName).toBe('SECTION')
    `,
  stories: [
    {
      id: 'SectionBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <DesignComponent
          headline="User Profile Settings"
          label="Personalization"
          description="Customize your experience and notification preferences."
        >
          <p>This section allows you to manage your personal display settings, theme selection, and language preferences. Changes are saved automatically as you update them.</p>
        </DesignComponent>
      `,
      play: `
        const component = canvasElement.querySelector('.design-component')
        await expect(component).toBeInTheDocument()
        await expect(component?.tagName).toBe('SECTION')
        await expect(component?.querySelector('.design-component__headline')).toHaveTextContent('User Profile Settings')
        await expect(component?.querySelector('.design-component__description')).toHaveTextContent('Customize your experience')
        await expect(component).toHaveAttribute('aria-labelledby')
        await expect(component).toHaveAttribute('aria-describedby')
      `
    },
    {
      id: 'SectionSlots',
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
            <span data-testid="section-trailing-slot">Trailing slot</span>
          </template>
        </DesignComponent>
      `,
      play: `
        const component = canvasElement.querySelector('.design-component')
        await expect(component?.querySelector('.design-component__headline')).toHaveTextContent('Headline slot')
        await expect(component?.querySelector('.design-component__description')).toHaveTextContent('Description slot')
        await expect(component?.querySelector('[data-testid="section-trailing-slot"]')).toHaveTextContent('Trailing slot')
        await expect(component).toHaveTextContent('Label slot')
        await expect(component).toHaveTextContent('Caption slot')
        await expect(component).toHaveTextContent('Default slot')
      `
    },
    {
      id: 'SectionTestSemanticsAndTags',
      name: {
        en: 'Test: Semantics, custom tags, aria IDs and numeric zero',
        ru: 'Тест: Семантика, кастомные теги, ARIA ID и числовой ноль'
      },
      setup: `
        const tag = ref('section')
        const tagHeader = ref('h2')
        const switchToArticle = () => {
          tag.value = 'article'
          tagHeader.value = 'h3'
        }
        return { tag, tagHeader, switchToArticle }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="switchToArticle">Switch to article/h3</button>
          </div>
          <DesignComponent
            data-testid="section-semantic"
            :tag="tag"
            :tag-header="tagHeader"
            headline="Account"
            label="Security"
            label-id="wiki-section-lbl-id"
            description="Two-factor verification"
            description-id="wiki-section-desc-id"
            caption="Active"
          >
            <p>Body copy</p>
          </DesignComponent>
          <DesignComponent
            data-testid="section-zero"
            :headline="0"
            :label="0"
            :description="0"
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const semantic = canvasElement.querySelector('[data-testid="section-semantic"]')
        await expect(semantic?.tagName).toBe('SECTION')
        await expect(semantic?.querySelector('#wiki-section-lbl-id')?.tagName).toBe('H2')
        await expect(semantic).toHaveAttribute('aria-labelledby', 'wiki-section-lbl-id')
        await expect(semantic).toHaveAttribute('aria-describedby', 'wiki-section-desc-id')

        await userEvent.click(canvas.getByRole('button', { name: 'Switch to article/h3' }))
        await waitFor(() => {
          const updated = canvasElement.querySelector('[data-testid="section-semantic"]')
          expect(updated?.tagName).toBe('ARTICLE')
          expect(updated?.querySelector('#wiki-section-lbl-id')?.tagName).toBe('H3')
        })

        const zeroSection = canvasElement.querySelector('[data-testid="section-zero"]')
        await expect(zeroSection?.querySelector('.design-component__headline')).toHaveTextContent('0')
        await expect(zeroSection?.querySelector('.design-component__description')).toHaveTextContent('0')
      `
    },
    {
      id: 'SectionTestAreaContext',
      name: {
        en: 'Test: Cascading area context in Section body and header',
        ru: 'Тест: Каскадный контекст area в теле Section и заголовке'
      },
      setup: `
        const areaMode = ref('section')
        const setCompact = () => {
          areaMode.value = 'compact'
        }
        const AreaProbe = defineComponent({
          props: {
            probeId: {
              type: String,
              required: true
            }
          },
          setup(props: { probeId: string }) {
            return () => h('span', { 'data-testid': props.probeId }, getAreaValue() ?? 'none')
          }
        })
        return { areaMode, setCompact, AreaProbe }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setCompact">Switch Area</button>
          </div>
          <DesignComponent label="Section Area" :area="areaMode">
            <template #trailing>
              <component :is="AreaProbe" probe-id="section-probe-trailing"/>
            </template>
            <component :is="AreaProbe" probe-id="section-probe-body"/>
          </DesignComponent>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        await expect(canvasElement.querySelector('[data-testid="section-probe-trailing"]')).toHaveTextContent('header')
        await expect(canvasElement.querySelector('[data-testid="section-probe-body"]')).toHaveTextContent('section')

        await userEvent.click(canvas.getByRole('button', { name: 'Switch Area' }))
        await waitFor(() => {
          expect(canvasElement.querySelector('[data-testid="section-probe-trailing"]')).toHaveTextContent('header')
          expect(canvasElement.querySelector('[data-testid="section-probe-body"]')).toHaveTextContent('compact')
        })
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Section'} type={'block'}/>
<Canvas of={Component.SectionBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,
    slots: `
<Canvas of={Component.SectionSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
`,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
`
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Section v-bind="args">
      Content of the section.
  </Section>
</div>
    `,
    description: `
Structural component used to divide a page into distinct thematic areas, serving as a semantic alias for the Block component. Provides a standardized header structure for grouping related content within a coherent layout.
Features a flexible header with support for icons, labels (titles), captions, and trailing action areas. Inherits all layout and styling capabilities from the Block component, including support for custom semantic tags (defaulting to <section>) and high-level category headlines.
Controlled via headline, label, and icon props, with dedicated slots for primary content and secondary actions. Use to logically organize and category-label information within the flow of a Page or complex Dashboard.
    `
  }
}
