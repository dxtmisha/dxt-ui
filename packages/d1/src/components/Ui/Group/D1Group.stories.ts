import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Group from './D1Group.vue'
import { GroupWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { defineComponent, h, ref } from 'vue'
import { getAreaValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Group',
  component: D1Group,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: GroupWikiStorybook.getDescription()
      }
    }
  },
  argTypes: GroupWikiStorybook.getWiki(),
  args: GroupWikiStorybook.getValues()
} satisfies Meta<typeof D1Group>

export default meta

type Story = StoryObj<typeof meta>

export const Group: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Group },
    setup: () => ({ args }),
    template: `
      <D1Group v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </D1Group>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-group')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('DIV')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const GroupBasic: Story = {
  name: 'Базовая структура',
  render: () => ({
    components: { D1Group },
    template: `
        
        <D1Group
          headline="Notifications"
          label="Settings"
          caption="Updated"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </D1Group>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-group')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('DIV')
    await expect(component?.querySelector('.d1-group__headline')).toHaveTextContent('Notifications')
    await expect(component?.querySelector('.d1-group__description')).toHaveTextContent('Configure how you receive notifications')
    const headingElement = component?.querySelector('h4')
    await expect(headingElement).toHaveTextContent('Settings')
    await expect(component).toHaveAttribute('aria-labelledby', headingElement?.id ?? '')
    await expect(component).toHaveAttribute('aria-describedby')
  }
}
export const GroupSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Group },
    template: `
        
        <D1Group>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>
            <span data-testid="group-trailing-slot">Trailing slot</span>
          </template>
        </D1Group>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-group')
    await expect(component).toBeInTheDocument()
    await expect(component?.querySelector('.d1-group__headline')).toHaveTextContent('Headline slot')
    await expect(component?.querySelector('.d1-group__description')).toHaveTextContent('Description slot')
    await expect(component?.querySelector('[data-testid="group-trailing-slot"]')).toHaveTextContent('Trailing slot')
    await expect(component).toHaveTextContent('Label slot')
    await expect(component).toHaveTextContent('Caption slot')
    await expect(component).toHaveTextContent('Default slot')
  }
}
export const GroupTestSemanticsAndHeaderProps: Story = {
  name: 'Тест: Семантические теги, свойства шапки/иконки, явные ARIA ID и числовой ноль',
  render: () => ({
    components: { D1Group },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">section + h2 + explicit ARIA IDs + headerAttrs</div>
            <D1Group
              data-testid="group-semantic"
              tag="section"
              tag-header="h2"
              headline="SECTION"
              label="Explicit IDs"
              label-id="wiki-group-label-id"
              caption="(decorative)"
              caption-decorative
              description="Explicit description ID"
              description-id="wiki-group-description-id"
              :icon="{ icon: 'folder', iconActive: 'star' }"
              selected
              icon-turn
              icon-hide
              icon-dir
              icon-palette
              :icon-attrs="{ 'data-group-icon': 'ok' }"
              :header-attrs="{ class: 'wiki-custom-group-header' }"
            >
              <span>Body text</span>
            </D1Group>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">body-only + numeric 0</div>
            <D1Group data-testid="group-minimal" class="wiki-custom-group">
              <span>Only default content</span>
            </D1Group>
            <D1Group
              data-testid="group-zero"
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
      const semantic = canvasElement.querySelector('[data-testid="group-semantic"]')
      expect(semantic?.tagName).toBe('SECTION')
      expect(semantic).toHaveAttribute('aria-labelledby', 'wiki-group-label-id')
      expect(semantic).toHaveAttribute('aria-describedby', 'wiki-group-description-id')
      expect(semantic?.querySelector('#wiki-group-label-id')?.tagName).toBe('H2')
      expect(semantic?.querySelector('#wiki-group-description-id')).toHaveTextContent('Explicit description ID')
      expect(semantic?.querySelector('.d1-group__header')).toHaveClass('wiki-custom-group-header')
      expect(semantic?.querySelector('[data-group-icon="ok"]')).toBeInTheDocument()

      const minimal = canvasElement.querySelector('[data-testid="group-minimal"]')
      expect(minimal?.tagName).toBe('DIV')
      expect(minimal).toHaveClass('wiki-custom-group')
      expect(minimal?.querySelector('.d1-group__body')).toBeNull()
      expect(minimal).not.toHaveAttribute('aria-labelledby')
      expect(minimal).not.toHaveAttribute('aria-describedby')

      const zeroGroup = canvasElement.querySelector('[data-testid="group-zero"]')
      expect(zeroGroup?.querySelector('.d1-group__headline')).toHaveTextContent('0')
      expect(zeroGroup?.querySelector('h4')).toHaveTextContent('0')
      expect(zeroGroup?.querySelector('.d1-group__description')).toHaveTextContent('0')
    })
  }
}
export const GroupTestAreaContext: Story = {
  name: 'Тест: Каскадный контекст area между телом Group и встроенным Header',
  render: () => ({
    components: { D1Group },
    setup() {
      const areaMode = ref('group')
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
          <D1Group label="Cascading Area" :area="areaMode">
            <template #trailing>
              <component :is="AreaProbe" probe-id="probe-trailing"/>
            </template>
            <component :is="AreaProbe" probe-id="probe-body"/>
          </D1Group>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
    await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('group')

    await step('Switch group area to compact', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Switch Area' }))
      await expect(canvasElement.querySelector('[data-testid="probe-trailing"]')).toHaveTextContent('header')
      await expect(canvasElement.querySelector('[data-testid="probe-body"]')).toHaveTextContent('compact')
    })
  }
}
// :story-items [!] System label / Системная метка
