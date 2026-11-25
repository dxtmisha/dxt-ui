// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, type ConstrStyles, DesignName } from '@dxtmisha/functional'

import { GridItem } from '../GridItem'
import { GridItemDesign } from '../GridItemDesign'
import { defaultsGridItem, type GridItemProps } from '../props'
import type { GridItemClasses, GridItemComponents, GridItemExpose } from '../types'

const TestGridItemSsr = defineComponent({
  name: 'TestGridItemSsr',
  props: {
    base: {
      type: String as () => GridItemProps['base'],
      default: defaultsGridItem.base
    },
    align: {
      type: String as () => GridItemProps['align'],
      default: undefined
    }
  },
  setup(props) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-gridItem': true,
        [`d1-gridItem--base--${props.base}`]: Boolean(props.base),
        [`d1-gridItem--align--${props.align}`]: Boolean(props.align)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-gridItem-span': props.base ?? '1'
    }))

    const design = new GridItemDesign<
      GridItemComponents,
      GridItemExpose,
      GridItemClasses,
      GridItemProps
    >(
      'd1.gridItem',
      props,
      {
        classes: classesToken,
        styles: stylesToken
      }
    )

    return design.render()
  }
})

describe('GridItem (SSR)', () => {
  it('should render valid HTML with classes, styles, attrs, and slot content in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestGridItemSsr,
          {
            id: 'ssr-grid-item',
            base: '6',
            align: 'center',
            class: 'extra-ssr'
          },
          {
            default: () => h('p', 'SSR Grid Cell')
          }
        )
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('id="ssr-grid-item"')
    expect(html).toContain('d1-gridItem')
    expect(html).toContain('d1-gridItem--base--6')
    expect(html).toContain('d1-gridItem--align--center')
    expect(html).toContain('extra-ssr')
    expect(html).toContain('--d1-gridItem-span:6')
    expect(html).toContain('<p>SSR Grid Cell</p>')
  })

  it('should instantiate GridItem safely during SSR with isMounted=false and isolate concurrent renders', async () => {
    let ssrMountedState: boolean | undefined

    const createAppForItem = (base: NonNullable<GridItemProps['base']>, align: NonNullable<GridItemProps['align']>, label: string) => createSSRApp(defineComponent({
      setup() {
        const element = ref<HTMLDivElement | undefined>(undefined)
        const item = new GridItem(
          { base, align },
          element,
          new DesignName('d1.gridItem')
        )
        ssrMountedState = item.isMounted.value

        return () => h(
          TestGridItemSsr,
          { base, align },
          {
            default: () => h('span', label)
          }
        )
      }
    }))

    const [htmlAlpha, htmlBeta] = await Promise.all([
      renderToString(createAppForItem('4', 'start', 'alpha-cell')),
      renderToString(createAppForItem('8', 'end', 'beta-cell'))
    ])

    expect(ssrMountedState).toBe(false)
    expect(htmlAlpha).toContain('d1-gridItem--base--4')
    expect(htmlAlpha).toContain('d1-gridItem--align--start')
    expect(htmlAlpha).toContain('<span>alpha-cell</span>')
    expect(htmlAlpha).not.toContain('beta-cell')

    expect(htmlBeta).toContain('d1-gridItem--base--8')
    expect(htmlBeta).toContain('d1-gridItem--align--end')
    expect(htmlBeta).toContain('<span>beta-cell</span>')
    expect(htmlBeta).not.toContain('alpha-cell')
  })
})
