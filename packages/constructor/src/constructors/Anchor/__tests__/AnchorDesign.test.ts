// @vitest-environment jsdom
import { describe, it, expect, afterEach } from 'vitest'
import { createApp, defineComponent, h, reactive, type Slots } from 'vue'

import { AnchorDesign } from '../AnchorDesign'
import type { AnchorProps } from '../props'

const cleanups: Array<() => void> = []

function mountAnchorDesign(
  initialProps: Partial<AnchorProps> = {},
  slots: Record<string, (...args: any[]) => any> = {},
  attrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<AnchorProps>({ ...initialProps })
  let exposed: { go?: () => void } = {}

  const TestComponent = defineComponent({
    inheritAttrs: false,
    setup(_, { expose }) {
      const design = new AnchorDesign('d1.anchor', props)
      exposed = design.expose()
      expose(exposed)
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(TestComponent, attrs, slots as Slots)
    }
  })

  const app = createApp(Root)
  app.mount(container)

  const unmount = () => {
    app.unmount()
    container.remove()
  }
  cleanups.push(unmount)

  return { container, props, exposed, unmount }
}

describe('AnchorDesign', () => {
  afterEach(() => {
    cleanups.splice(0).reverse().forEach(cleanup => cleanup())
    document.body.innerHTML = ''
  })

  it('should render nothing when name is missing', () => {
    const { container } = mountAnchorDesign({ label: 'No name' })
    expect(container.querySelector('a')).toBeNull()
  })

  it('should render visible anchor with merged external attrs and expose go()', () => {
    const { container, exposed } = mountAnchorDesign(
      { name: 'overview', label: 'Overview' },
      {},
      { 'data-testid': 'anchor-link', 'class': 'custom-anchor' }
    )

    const link = container.querySelector('a')
    expect(typeof exposed.go).toBe('function')
    expect(link).not.toBeNull()
    expect(link?.getAttribute('href')).toBe('#overview')
    expect(link?.getAttribute('data-testid')).toBe('anchor-link')
    expect(link?.classList.contains('custom-anchor')).toBe(true)
    expect(link?.textContent).toContain('Overview')
  })

  it('should render hidden anchor with aria-hidden and merged attrs when hide is true', () => {
    const { container } = mountAnchorDesign(
      { name: 'hidden-sec', label: 'Hidden', hide: true },
      {},
      { 'data-testid': 'hidden-anchor' }
    )

    const link = container.querySelector('a')
    expect(link).not.toBeNull()
    expect(link?.getAttribute('name')).toBe('hidden-sec')
    expect(link?.getAttribute('aria-hidden')).toBe('true')
    expect(link?.getAttribute('data-testid')).toBe('hidden-anchor')
    expect(link?.textContent).toBe('')
  })

  it('should fallback to renderItem when isCopy is true and tooltip component is not provided', () => {
    const { container } = mountAnchorDesign({
      name: 'copy-no-tooltip',
      label: 'Copy without tooltip',
      isCopy: true
    })

    const link = container.querySelector('a')
    expect(link).not.toBeNull()
    expect(link?.getAttribute('role')).toBe('button')
    expect(link?.textContent).toContain('Copy without tooltip')
  })
})
