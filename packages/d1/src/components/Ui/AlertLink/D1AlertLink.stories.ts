import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1AlertLink from './D1AlertLink.vue'
import { AlertLinkWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { AlertLinkExpose } from '@dxtmisha/constructor/AlertLink'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/AlertLink',
  component: D1AlertLink,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AlertLinkWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AlertLinkWikiStorybook.getWiki(),
  args: AlertLinkWikiStorybook.getValues()
} satisfies Meta<typeof D1AlertLink>

export default meta

type Story = StoryObj<typeof meta>

export const AlertLink: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1AlertLink },
    setup: () => ({ args }),
    template: `
      <D1AlertLink v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-alertLink')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const AlertLinkBasic: Story = {
  name: 'Разделители и навигационные ссылки',
  render: () => ({
    components: { D1AlertLink },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">divider: true (default)</div>
            <div class="wiki-storybook-flex">
              <D1AlertLink label="First link" href="#first"/>
              <D1AlertLink label="Second link" href="#second"/>
              <D1AlertLink label="Third link" href="#third"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">divider: false</div>
            <div class="wiki-storybook-flex">
              <D1AlertLink label="Link A" href="#a" :divider="false"/>
              <D1AlertLink label="Link B" href="#b" :divider="false"/>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const links = canvasElement.querySelectorAll('.d1-alertLink')
    await expect(links.length).toBe(5)

    await expect(links[0]).toHaveClass('d1-alertLink--divider')
    await expect(links[1]).toHaveClass('d1-alertLink--divider')
    await expect(links[2]).toHaveClass('d1-alertLink--divider')
    await expect(links[0]).toHaveAttribute('href', '#first')

    await expect(links[3]).not.toHaveClass('d1-alertLink--divider')
    await expect(links[4]).not.toHaveClass('d1-alertLink--divider')
  }
}
export const AlertLinkEventClick: Story = {
  name: 'События click и clickLite',
  render: () => ({
    components: { D1AlertLink },
    setup() {
      const lastEvent = ref('none')
      const onClick = (_event: MouseEvent, payload: EventClickValue) => {
        lastEvent.value = 'click:' + String(payload.value)
      }
      const onClickLite = (payload: EventClickValue) => {
        lastEvent.value = 'clickLite:' + String(payload.value) + ':' + JSON.stringify(payload.detail ?? {})
      }
      return { lastEvent, onClick, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1AlertLink
              label="Trigger action"
              value="retry-sync"
              :detail="{ attempt: 1 }"
              @click="onClick"
              @click-lite="onClickLite"
            />
          </div>
          <div class="wiki-storybook-card" data-testid="event-output">{{ lastEvent }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const triggerLink = canvas.getByText('Trigger action')

    await step('Click interactive AlertLink without href', async () => {
      await userEvent.click(triggerLink)
      await expect(canvas.getByTestId('event-output').textContent).toContain('clickLite:retry-sync:{"attempt":1}')
    })
  }
}
export const AlertLinkExposeMethods: Story = {
  name: 'Экспортируемые методы (getValue, getDetail)',
  render: () => ({
    components: { D1AlertLink },
    setup() {
      const linkReference = ref<AlertLinkExpose>()
      const inspectedResult = ref('not-checked')
      const onInspect = () => {
        const value = linkReference.value?.getValue?.()
        const detail = linkReference.value?.getDetail?.()
        inspectedResult.value = String(value) + '|' + JSON.stringify(detail)
      }
      return { linkReference, inspectedResult, onInspect }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <D1AlertLink
              ref="linkReference"
              label="Inspected link"
              value="doc-guide"
              :detail="{ section: 'api' }"
            />
            <button type="button" class="wiki-storybook-button" @click="onInspect">Read Expose</button>
          </div>
          <div class="wiki-storybook-card" data-testid="expose-output">{{ inspectedResult }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inspectButton = canvas.getByRole('button', { name: 'Read Expose' })

    await step('Call exposed getValue and getDetail', async () => {
      await userEvent.click(inspectButton)
      await expect(canvas.getByTestId('expose-output').textContent).toBe('doc-guide|{"section":"api"}')
    })
  }
}
export const AlertLinkSlotDefault: Story = {
  name: 'Настройка слота default',
  render: () => ({
    components: { D1AlertLink },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">#default slot</div>
            <D1AlertLink>
              <strong data-testid="custom-slot">Custom slotted link</strong>
            </D1AlertLink>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const slotElement = canvas.getByTestId('custom-slot')
    await expect(slotElement).toBeInTheDocument()
    await expect(slotElement.textContent).toBe('Custom slotted link')
  }
}
export const AlertLinkTestProps: Story = {
  name: 'Тест: Свойства конструктора, числовая метка 0, ARIA и fallback index',
  render: () => ({
    components: { D1AlertLink },
    setup() {
      const lastIndexValue = ref('none')
      const onClickLite = (payload: EventClickValue) => {
        lastIndexValue.value = String(payload.value)
      }
      return { lastIndexValue, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Numeric 0 & custom labelId</div>
            <div class="wiki-storybook-flex">
              <D1AlertLink :label="0" labelId="alert-link-zero-id" index="zero-index" @click-lite="onClickLite"/>
              <D1AlertLink label="Native href link" href="#native" :divider="false"/>
              <D1AlertLink/>
            </div>
            <div class="wiki-storybook-card" data-testid="index-output">{{ lastIndexValue }}</div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const links = canvasElement.querySelectorAll('.d1-alertLink')
    await expect(links.length).toBe(3)

    const zeroLink = links[0] as HTMLElement
    const zeroLabel = zeroLink.querySelector('.d1-alertLink__label')
    await expect(zeroLabel).toHaveAttribute('id', 'alert-link-zero-id')
    await expect(zeroLabel?.textContent).toBe('0')
    await expect(zeroLink).toHaveAttribute('tabindex', '0')
    await expect(zeroLink).toHaveAttribute('role', 'button')

    const hrefLink = links[1] as HTMLElement
    await expect(hrefLink).toHaveAttribute('href', '#native')
    await expect(hrefLink).not.toHaveAttribute('tabindex')
    await expect(hrefLink).not.toHaveAttribute('role')
    await expect(hrefLink).not.toHaveClass('d1-alertLink--divider')

    const emptyLink = links[2] as HTMLElement
    await expect(emptyLink.querySelector('.d1-alertLink__label')).toBeNull()

    await step('Trigger index fallback click on numeric 0 link', async () => {
      await userEvent.click(zeroLink)
      await expect(canvas.getByTestId('index-output').textContent).toBe('zero-index')
    })
  }
}
// :story-items [!] System label / Системная метка
