import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for AlertLink component properties
 *
 * Описания свойств компонента AlertLink
 */
export const wikiDescriptionsAlertLink: StorybookComponentsDescriptionItem = {
  name: 'AlertLink',
  description: {
    en: 'A specialized inline link component optimized for alerts with optional dividers, click events, and keyboard accessibility.',
    ru: 'Специализированный компонент встроенной ссылки для оповещений с опциональными разделителями, событиями клика и клавиатурной доступностью.'
  },
  possibilities: {
    en: [
      'styled inline link for alert messages and banners',
      'optional bullet separators between adjacent links via divider',
      'supports href, router to navigation, and custom click/clickLite events',
      'supports label prop, numeric 0 labels, and default slot content',
      'accessible keyboard focus and Enter activation for action links without href'
    ],
    ru: [
      'стилизованная встроенная ссылка для сообщений и баннеров оповещений',
      'опциональные разделители между соседними ссылками через divider',
      'поддержка href, маршрутизации to и событий click/clickLite',
      'поддержка свойства label, числовых меток 0 и слота default',
      'клавиатурный фокус и активация по Enter для ссылок-действий без href'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
    const component = canvasElement.querySelector('.design-component')
    await expect(component).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { AlertLinkExpose } from \'@dxtmisha/constructor/AlertLink\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/expose/slots)
    // =========================================================================
    {
      id: 'AlertLinkBasic',
      name: {
        en: 'Dividers and navigation links',
        ru: 'Разделители и навигационные ссылки'
      },
      propsName: ['divider', 'href', 'label'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">divider: true (default)</div>
            <div class="wiki-storybook-flex">
              <DesignComponent label="First link" href="#first"/>
              <DesignComponent label="Second link" href="#second"/>
              <DesignComponent label="Third link" href="#third"/>
            </div>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">divider: false</div>
            <div class="wiki-storybook-flex">
              <DesignComponent label="Link A" href="#a" :divider="false"/>
              <DesignComponent label="Link B" href="#b" :divider="false"/>
            </div>
          </div>
        </div>
      `,
      play: `
        const links = canvasElement.querySelectorAll('.design-component')
        await expect(links.length).toBe(5)

        await expect(links[0]).toHaveClass('design-component--divider')
        await expect(links[1]).toHaveClass('design-component--divider')
        await expect(links[2]).toHaveClass('design-component--divider')
        await expect(links[0]).toHaveAttribute('href', '#first')

        await expect(links[3]).not.toHaveClass('design-component--divider')
        await expect(links[4]).not.toHaveClass('design-component--divider')
      `
    },
    {
      id: 'AlertLinkEventClick',
      name: {
        en: 'Click and clickLite events',
        ru: 'События click и clickLite'
      },
      propsName: ['value', 'detail'],
      setup: `
      const lastEvent = ref('none')
      const onClick = (_event: MouseEvent, payload: EventClickValue) => {
        lastEvent.value = 'click:' + String(payload.value)
      }
      const onClickLite = (payload: EventClickValue) => {
        lastEvent.value = 'clickLite:' + String(payload.value) + ':' + JSON.stringify(payload.detail ?? {})
      }
      return { lastEvent, onClick, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              label="Trigger action"
              value="retry-sync"
              :detail="{ attempt: 1 }"
              @click="onClick"
              @click-lite="onClickLite"
            />
          </div>
          <div class="wiki-storybook-card" data-testid="event-output">{{ lastEvent }}</div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const triggerLink = canvas.getByText('Trigger action')

        await step('Click interactive AlertLink without href', async () => {
          await userEvent.click(triggerLink)
          await expect(canvas.getByTestId('event-output').textContent).toContain('clickLite:retry-sync:{"attempt":1}')
        })
      `
    },
    {
      id: 'AlertLinkExposeMethods',
      name: {
        en: 'Exposed methods (getValue, getDetail)',
        ru: 'Экспортируемые методы (getValue, getDetail)'
      },
      propsName: ['value', 'detail'],
      setup: `
      const linkReference = ref<AlertLinkExpose>()
      const inspectedResult = ref('not-checked')
      const onInspect = () => {
        const value = linkReference.value?.getValue?.()
        const detail = linkReference.value?.getDetail?.()
        inspectedResult.value = String(value) + '|' + JSON.stringify(detail)
      }
      return { linkReference, inspectedResult, onInspect }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <DesignComponent
              ref="linkReference"
              label="Inspected link"
              value="doc-guide"
              :detail="{ section: 'api' }"
            />
            <button type="button" class="wiki-storybook-button" @click="onInspect">Read Expose</button>
          </div>
          <div class="wiki-storybook-card" data-testid="expose-output">{{ inspectedResult }}</div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const inspectButton = canvas.getByRole('button', { name: 'Read Expose' })

        await step('Call exposed getValue and getDetail', async () => {
          await userEvent.click(inspectButton)
          await expect(canvas.getByTestId('expose-output').textContent).toBe('doc-guide|{"section":"api"}')
        })
      `
    },
    {
      id: 'AlertLinkSlotDefault',
      name: {
        en: 'Default slot customization',
        ru: 'Настройка слота default'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">#default slot</div>
            <DesignComponent>
              <strong data-testid="custom-slot">Custom slotted link</strong>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const slotElement = canvas.getByTestId('custom-slot')
        await expect(slotElement).toBeInTheDocument()
        await expect(slotElement.textContent).toBe('Custom slotted link')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with AlertLinkTest... and "Test: " / "Тест: ")
    // ONLY for constructor-level props/behavior!
    // =========================================================================
    {
      id: 'AlertLinkTestProps',
      name: {
        en: 'Test: Constructor props, numeric 0 label, ARIA and index fallback',
        ru: 'Тест: Свойства конструктора, числовая метка 0, ARIA и fallback index'
      },
      propsName: ['label', 'labelId', 'href', 'divider', 'index'],
      setup: `
      const lastIndexValue = ref('none')
      const onClickLite = (payload: EventClickValue) => {
        lastIndexValue.value = String(payload.value)
      }
      return { lastIndexValue, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Numeric 0 & custom labelId</div>
            <div class="wiki-storybook-flex">
              <DesignComponent :label="0" labelId="alert-link-zero-id" index="zero-index" @click-lite="onClickLite"/>
              <DesignComponent label="Native href link" href="#native" :divider="false"/>
              <DesignComponent/>
            </div>
            <div class="wiki-storybook-card" data-testid="index-output">{{ lastIndexValue }}</div>
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const links = canvasElement.querySelectorAll('.design-component')
        await expect(links.length).toBe(3)

        const zeroLink = links[0] as HTMLElement
        const zeroLabel = zeroLink.querySelector('.design-component__label')
        await expect(zeroLabel).toHaveAttribute('id', 'alert-link-zero-id')
        await expect(zeroLabel?.textContent).toBe('0')
        await expect(zeroLink).toHaveAttribute('tabindex', '0')
        await expect(zeroLink).toHaveAttribute('role', 'button')

        const hrefLink = links[1] as HTMLElement
        await expect(hrefLink).toHaveAttribute('href', '#native')
        await expect(hrefLink).not.toHaveAttribute('tabindex')
        await expect(hrefLink).not.toHaveAttribute('role')
        await expect(hrefLink).not.toHaveClass('design-component--divider')

        const emptyLink = links[2] as HTMLElement
        await expect(emptyLink.querySelector('.design-component__label')).toBeNull()

        await step('Trigger index fallback click on numeric 0 link', async () => {
          await userEvent.click(zeroLink)
          await expect(canvas.getByTestId('index-output').textContent).toBe('zero-index')
        })
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'AlertLink'} type={'alertLink'}/>
<Canvas of={Component.AlertLinkBasic}/>
    `,
    events: `
<Canvas of={Component.AlertLinkEventClick}/>
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    expose: `
<Canvas of={Component.AlertLinkExposeMethods}/>
    `,
    slots: `
<Canvas of={Component.AlertLinkSlotDefault}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
A specialized inline link component designed to be rendered within alert/notification boxes. It formats text links to blend with alert typography and layout.
Features include optional divider separators between adjacent links, click and clickLite events, keyboard accessibility (tabindex="0" and role="button" when used without href/to), and custom default slot rendering.
Used as a sub-component inside Alert or standalone for contextual links.
`,
    hide: true
  }
}
