import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Page from './D1Page.vue'
import { PageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { defineComponent, h, ref } from 'vue'
import { getAreaValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Page',
  component: D1Page,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PageWikiStorybook.getWiki(),
  args: PageWikiStorybook.getValues()
} satisfies Meta<typeof D1Page>

export default meta

type Story = StoryObj<typeof meta>

export const Page: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Page },
    setup: () => ({ args }),
    template: `
      <D1Page v-bind="args">
        <p>
          The Page component is designed to wrap the unique content of a document.
          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.
        </p>
        <p>
          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the header label is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.
        </p>
        <p>
          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.
        </p>
      </D1Page>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-page')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('MAIN')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const PageBasic: Story = {
  name: 'Базовая структура',
  render: () => ({
    components: { D1Page },
    template: `
        
        <D1Page
          headline="User Dashboard"
          label="Overview"
          caption="Updated"
          icon="dashboard"
          description="View your account analytics and recent activity."
        >
          <p>Welcome to your dashboard. Here you can find a summary of your performance and manage your account settings.</p>
        </D1Page>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-page')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('MAIN')
    await expect(component?.querySelector('.d1-page__headline')).toHaveTextContent('User Dashboard')
    await expect(component?.querySelector('.d1-page__description')).toHaveTextContent('View your account analytics')
    const headingElement = component?.querySelector('h1')
    await expect(headingElement).toHaveTextContent('Overview')
    await expect(component).toHaveAttribute('aria-labelledby', headingElement?.id ?? '')
    await expect(component).toHaveAttribute('aria-describedby')
  }
}
export const PageSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Page },
    template: `
        
        <D1Page>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>
            <span data-testid="page-trailing-slot">Trailing slot</span>
          </template>
        </D1Page>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-page')
    await expect(component).toBeInTheDocument()
    await expect(component?.querySelector('.d1-page__headline')).toHaveTextContent('Headline slot')
    await expect(component?.querySelector('.d1-page__description')).toHaveTextContent('Description slot')
    await expect(component?.querySelector('[data-testid="page-trailing-slot"]')).toHaveTextContent('Trailing slot')
    await expect(component).toHaveTextContent('Label slot')
    await expect(component).toHaveTextContent('Caption slot')
    await expect(component).toHaveTextContent('Default slot')
  }
}
export const PageTestSemanticsAndHeaderProps: Story = {
  name: 'Тест: Семантические теги, свойства шапки/иконки, явные ARIA ID и числовой ноль',
  render: () => ({
    components: { D1Page },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">section + h2 + explicit ARIA IDs + headerAttrs</div>
            <D1Page
              data-testid="page-semantic"
              tag="section"
              tag-header="h2"
              headline="SECTION"
              label="Explicit IDs"
              label-id="wiki-page-label-id"
              caption="(decorative)"
              caption-decorative
              description="Explicit description ID"
              description-id="wiki-page-description-id"
              :icon="{ icon: 'folder', iconActive: 'star' }"
              selected
              icon-turn
              icon-hide
              icon-dir
              icon-palette
              :icon-attrs="{ 'data-page-icon': 'ok' }"
              :header-attrs="{ class: 'wiki-custom-page-header' }"
            >
              <span>Body text</span>
            </D1Page>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">body-only + numeric 0</div>
            <D1Page data-testid="page-minimal" class="wiki-custom-page">
              <span>Only default content</span>
            </D1Page>
            <D1Page
              data-testid="page-zero"
              :headline="0"
              :label="0"
              :caption="0"
              :description="0"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const semanticPage = canvasElement.querySelector('[data-testid="page-semantic"]')
      expect(semanticPage?.tagName).toBe('SECTION')
      expect(semanticPage).toHaveAttribute('aria-labelledby', 'wiki-page-label-id')
      expect(semanticPage).toHaveAttribute('aria-describedby', 'wiki-page-description-id')
      expect(semanticPage?.querySelector('#wiki-page-label-id')?.tagName).toBe('H2')
      expect(semanticPage?.querySelector('#wiki-page-description-id')).toHaveTextContent('Explicit description ID')
      expect(semanticPage?.querySelector('[data-event-type="caption"]')).toHaveAttribute('aria-hidden', 'true')
      expect(semanticPage?.querySelector('.d1-page__header')).toHaveClass('wiki-custom-page-header')
      expect(semanticPage?.querySelector('[data-page-icon="ok"]')).toBeInTheDocument()

      const minimalPage = canvasElement.querySelector('[data-testid="page-minimal"]')
      expect(minimalPage?.tagName).toBe('MAIN')
      expect(minimalPage).toHaveClass('wiki-custom-page')
      expect(minimalPage?.querySelector('.d1-page__body')).toBeNull()
      expect(minimalPage).not.toHaveAttribute('aria-labelledby')
      expect(minimalPage).not.toHaveAttribute('aria-describedby')

      const zeroPage = canvasElement.querySelector('[data-testid="page-zero"]')
      expect(zeroPage?.querySelector('.d1-page__headline')).toHaveTextContent('0')
      expect(zeroPage?.querySelector('h1')).toHaveTextContent('0')
      expect(zeroPage?.querySelector('[data-event-type="caption"]')).toHaveTextContent('0')
      expect(zeroPage?.querySelector('[data-event-type="caption"]')).toHaveAttribute('aria-live', 'polite')
      expect(zeroPage?.querySelector('.d1-page__description')).toHaveTextContent('0')
    })
  }
}
export const PageTestAreaContext: Story = {
  name: 'Тест: Каскадный контекст area между телом Page и встроенным Header',
  render: () => ({
    components: { D1Page },
    setup() {
      const areaMode = ref('page')
      const setCompact = (): void => {
        areaMode.value = 'compact'
      }
      const AreaProbe = defineComponent({
        props: {
          probeId: {
            type: String,
            required: true
          }
        },
        setup(probeProps: { probeId: string }) {
          return () => h('span', { 'data-testid': probeProps.probeId }, getAreaValue() ?? 'none')
        }
      })
      return { areaMode, setCompact, AreaProbe }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setCompact">Switch Area</button>
          </div>
          <D1Page label="Cascading Area" :area="areaMode">
            <template #trailing>
              <component :is="AreaProbe" probe-id="probe-trailing"/>
            </template>
            <component :is="AreaProbe" probe-id="probe-body"/>
          </D1Page>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
    await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('page')

    await step('Switch page area to compact', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Switch Area' }))
      await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
      await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('compact')
    })
  }
}
// :story-items [!] System label / Системная метка
