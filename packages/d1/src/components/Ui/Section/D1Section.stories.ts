import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Section from './D1Section.vue'
import { SectionWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { defineComponent, h, ref } from 'vue'
import { getAreaValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Section',
  component: D1Section,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SectionWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SectionWikiStorybook.getWiki(),
  args: SectionWikiStorybook.getValues()
} satisfies Meta<typeof D1Section>

export default meta

type Story = StoryObj<typeof meta>

export const Section: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Section },
    setup: () => ({ args }),
    template: `
      <D1Section v-bind="args">
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
      </D1Section>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-section')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('SECTION')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SectionBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Section },
    template: `
        
        <D1Section
          headline="User Profile Settings"
          label="Personalization"
          description="Customize your experience and notification preferences."
        >
          <p>This section allows you to manage your personal display settings, theme selection, and language preferences. Changes are saved automatically as you update them.</p>
        </D1Section>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-section')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('SECTION')
    await expect(component?.querySelector('.d1-section__headline')).toHaveTextContent('User Profile Settings')
    await expect(component?.querySelector('.d1-section__description')).toHaveTextContent('Customize your experience')
    await expect(component).toHaveAttribute('aria-labelledby')
    await expect(component).toHaveAttribute('aria-describedby')
  }
}
export const SectionSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Section },
    template: `
        
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>
            <span data-testid="section-trailing-slot">Trailing slot</span>
          </template>
        </D1Section>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-section')
    await expect(component?.querySelector('.d1-section__headline')).toHaveTextContent('Headline slot')
    await expect(component?.querySelector('.d1-section__description')).toHaveTextContent('Description slot')
    await expect(component?.querySelector('[data-testid="section-trailing-slot"]')).toHaveTextContent('Trailing slot')
    await expect(component).toHaveTextContent('Label slot')
    await expect(component).toHaveTextContent('Caption slot')
    await expect(component).toHaveTextContent('Default slot')
  }
}
export const SectionTestSemanticsAndTags: Story = {
  name: 'Тест: Семантика, кастомные теги, ARIA ID и числовой ноль',
  render: () => ({
    components: { D1Section },
    setup() {
      const tag = ref('section')
      const tagHeader = ref('h2')
      const switchToArticle = () => {
        tag.value = 'article'
        tagHeader.value = 'h3'
      }
      return { tag, tagHeader, switchToArticle }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="switchToArticle">Switch to article/h3</button>
          </div>
          <D1Section
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
          </D1Section>
          <D1Section
            data-testid="section-zero"
            :headline="0"
            :label="0"
            :description="0"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
    await expect(zeroSection?.querySelector('.d1-section__headline')).toHaveTextContent('0')
    await expect(zeroSection?.querySelector('.d1-section__description')).toHaveTextContent('0')
  }
}
export const SectionTestAreaContext: Story = {
  name: 'Тест: Каскадный контекст area в теле Section и заголовке',
  render: () => ({
    components: { D1Section },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setCompact">Switch Area</button>
          </div>
          <D1Section label="Section Area" :area="areaMode">
            <template #trailing>
              <component :is="AreaProbe" probe-id="section-probe-trailing"/>
            </template>
            <component :is="AreaProbe" probe-id="section-probe-body"/>
          </D1Section>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvasElement.querySelector('[data-testid="section-probe-trailing"]')).toHaveTextContent('header')
    await expect(canvasElement.querySelector('[data-testid="section-probe-body"]')).toHaveTextContent('section')

    await userEvent.click(canvas.getByRole('button', { name: 'Switch Area' }))
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="section-probe-trailing"]')).toHaveTextContent('header')
      expect(canvasElement.querySelector('[data-testid="section-probe-body"]')).toHaveTextContent('compact')
    })
  }
}
// :story-items [!] System label / Системная метка
