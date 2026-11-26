// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { createSSRApp, defineComponent } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { HorizontalScrollDesign } from '../../HorizontalScroll'
import { SegmentControlItemDesign } from '../../SegmentControlItem'
import { SegmentControlDesign } from '../SegmentControlDesign'
import { defaultsSegmentControl, type SegmentControlProps } from '../props'

const SsrHorizontalScroll = defineComponent({
  name: 'SsrHorizontalScroll',
  props: {
    bleed: { type: Boolean, default: undefined },
    align: { type: String, default: undefined },
    tag: { type: String, default: 'div' }
  },
  setup(props, { expose }) {
    const design = new HorizontalScrollDesign('d1.horizontalScroll', props)
    expose(design.expose())
    const render = design.render()
    return () => render()
  }
})

const SsrSegmentControlItem = defineComponent({
  name: 'SsrSegmentControlItem',
  props: {
    label: { type: [String, Number], default: undefined },
    value: { type: [String, Number], default: undefined },
    index: { type: [String, Number], default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    role: { type: String, default: 'tab' }
  },
  setup(props, { expose }) {
    const design = new SegmentControlItemDesign('d1.segmentControlItem', props)
    expose(design.expose())
    const render = design.render()
    return () => render()
  }
})

function renderSegmentControlSsr(props: SegmentControlProps): Promise<string> {
  const storage: Record<string, unknown> = {}
  ServerStorage.reset()
  ServerStorage.init(() => storage)

  const App = defineComponent({
    setup() {
      const design = new SegmentControlDesign(
        'd1.segmentControl',
        props,
        {
          components: {
            horizontalScroll: SsrHorizontalScroll,
            segmentControlItem: SsrSegmentControlItem
          }
        }
      )
      const render = design.render()
      return () => render()
    }
  })

  return renderToString(createSSRApp(App))
}

describe('SegmentControl (SSR)', () => {
  it('should render deterministically in Node without window or document', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const props: SegmentControlProps = {
      ...defaultsSegmentControl,
      list: [
        { label: 'Overview', value: 'overview' },
        { label: 'Кириллица', value: 'cyrillic' },
        { label: 'Tiếng Việt', value: 'vi', disabled: true }
      ],
      selected: 'overview',
      divider: true
    }

    const htmlFirst = await renderSegmentControlSsr(props)
    const htmlSecond = await renderSegmentControlSsr(props)

    expect(htmlFirst).toBe(htmlSecond)
    expect(htmlFirst).toContain('role="tablist"')
    expect(htmlFirst).toContain('aria-orientation="horizontal"')
    expect(htmlFirst).toContain('tabindex="0"')
    expect(htmlFirst).toContain('Overview')
    expect(htmlFirst).toContain('Кириллица')
    expect(htmlFirst).toContain('Tiếng Việt')
    expect(htmlFirst).toContain('aria-selected="true"')
    expect(htmlFirst).toContain('aria-disabled="true"')
  })
})
