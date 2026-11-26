// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { setAreaValue } from '../../../functions/setAreaValue'
import { BlockDesign } from '../../Block/BlockDesign'
import { defaultsBlock, type BlockProps, type BlockPropsBasic } from '../../Block/props'
import type { BlockClasses, BlockComponents, BlockExpose } from '../../Block/types'
import { GroupDesign } from '../../Group/GroupDesign'
import { defaultsGroup, type GroupProps, type GroupPropsBasic } from '../../Group/props'
import type { GroupClasses, GroupComponents, GroupExpose } from '../../Group/types'
import { HeaderDesign } from '../../Header/HeaderDesign'
import { defaultsHeader, type HeaderProps, type HeaderPropsBasic } from '../../Header/props'
import type { HeaderClasses, HeaderComponents, HeaderExpose } from '../../Header/types'
import { PageDesign } from '../../Page/PageDesign'
import { defaultsPage, type PageProps, type PagePropsBasic } from '../../Page/props'
import type { PageClasses, PageComponents, PageExpose } from '../../Page/types'
import { SectionDesign } from '../../Section/SectionDesign'
import { defaultsSection, type SectionProps, type SectionPropsBasic } from '../../Section/props'
import type { SectionClasses, SectionComponents, SectionExpose } from '../../Section/types'
import { PageAreaDesign } from '../PageAreaDesign'
import { defaultsPageArea, type PageAreaProps, type PageAreaPropsBasic } from '../props'
import type { PageAreaClasses, PageAreaComponents, PageAreaExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
})

const RealHeader = defineComponent({
  name: 'RealHeader',
  props: {
    label: [String, Number],
    labelId: String,
    caption: [String, Number],
    tag: { type: String, default: defaultsHeader.tag },
    area: { type: String, default: defaultsHeader.area }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-header': true } }))
    const design = new HeaderDesign<HeaderComponents, HeaderExpose, HeaderClasses, HeaderPropsBasic>(
      'd1.header',
      props as Readonly<HeaderProps>,
      { classes }
    )
    return design.render()
  }
})

const RealGroup = defineComponent({
  name: 'RealGroup',
  props: {
    headline: [String, Number],
    label: [String, Number],
    description: [String, Number],
    tag: { type: String, default: defaultsGroup.tag },
    tagHeader: { type: String, default: defaultsGroup.tagHeader },
    area: { type: String, default: defaultsGroup.area }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-group': true } }))
    const design = new GroupDesign<GroupComponents, GroupExpose, GroupClasses, GroupPropsBasic>(
      'd1.group',
      props as Readonly<GroupProps>,
      { classes, components: { header: RealHeader } }
    )
    return design.render()
  }
})

const RealBlock = defineComponent({
  name: 'RealBlock',
  props: {
    headline: [String, Number],
    label: [String, Number],
    description: [String, Number],
    tag: { type: String, default: defaultsBlock.tag },
    tagHeader: { type: String, default: defaultsBlock.tagHeader },
    area: { type: String, default: defaultsBlock.area }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-block': true } }))
    const design = new BlockDesign<BlockComponents, BlockExpose, BlockClasses, BlockPropsBasic>(
      'd1.block',
      props as Readonly<BlockProps>,
      { classes, components: { header: RealHeader } }
    )
    return design.render()
  }
})

const RealSection = defineComponent({
  name: 'RealSection',
  props: {
    headline: [String, Number],
    label: [String, Number],
    description: [String, Number],
    tag: { type: String, default: defaultsSection.tag },
    tagHeader: { type: String, default: defaultsSection.tagHeader },
    area: { type: String, default: defaultsSection.area }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-section': true } }))
    const design = new SectionDesign<SectionComponents, SectionExpose, SectionClasses, SectionPropsBasic>(
      'd1.section',
      props as Readonly<SectionProps>,
      { classes, components: { header: RealHeader } }
    )
    return design.render()
  }
})

const RealPage = defineComponent({
  name: 'RealPage',
  props: {
    headline: [String, Number],
    label: [String, Number],
    description: [String, Number],
    tag: { type: String, default: defaultsPage.tag },
    tagHeader: { type: String, default: defaultsPage.tagHeader },
    area: { type: String, default: defaultsPage.area }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-page': true } }))
    const design = new PageDesign<PageComponents, PageExpose, PageClasses, PagePropsBasic>(
      'd1.page',
      props as Readonly<PageProps>,
      { classes, components: { header: RealHeader } }
    )
    return design.render()
  }
})

const RealPageArea = defineComponent({
  name: 'RealPageArea',
  props: {
    headline: [String, Number],
    label: [String, Number],
    description: [String, Number]
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-pageArea': true } }))
    const design = new PageAreaDesign<PageAreaComponents, PageAreaExpose, PageAreaClasses, PageAreaPropsBasic>(
      'd1.pageArea',
      { ...defaultsPageArea, ...props } as Readonly<PageAreaProps>,
      {
        classes,
        components: {
          page: RealPage,
          section: RealSection,
          block: RealBlock,
          group: RealGroup
        }
      }
    )
    return design.render()
  }
})

describe('PageArea (real multi-component hierarchy integration)', () => {
  it('should cascade PageArea recursively across container -> page -> section -> block -> group', () => {
    const Host = defineComponent({
      setup() {
        setAreaValue(ref('container'))
        return () => h(RealPageArea, { label: 'Root Page' }, {
          default: () => h(RealPageArea, { label: 'Nested Section' }, {
            default: () => h(RealPageArea, { label: 'Nested Block' }, {
              default: () => h(RealPageArea, { label: 'Nested Group' }, {
                default: () => h('p', 'Deep leaf text')
              })
            })
          })
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const pageEl = container.querySelector('.d1-page')
    const sectionEl = pageEl?.querySelector('.d1-section')
    const blockEl = sectionEl?.querySelector('.d1-block')
    const groupEl = blockEl?.querySelector('.d1-group')

    expect(pageEl?.tagName).toBe('MAIN')
    expect(sectionEl?.tagName).toBe('SECTION')
    expect(blockEl).not.toBeNull()
    expect(groupEl).not.toBeNull()
    expect(groupEl?.textContent).toContain('Deep leaf text')
  })
})
