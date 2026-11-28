// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp, defineComponent, h, reactive, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../DescriptionInclude'
import { SkeletonInclude } from '../../constructors/Skeleton'
import type { DescriptionProps, DescriptionSlots } from '../../types/descriptionTypes'

describe('DescriptionInclude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Static predicate and presence checks (is)', () => {
    it('should return correct static is value for props and slots', () => {
      expect(DescriptionInclude.is()).toBe(false)
      expect(DescriptionInclude.is({})).toBe(false)
      expect(DescriptionInclude.is({ description: undefined })).toBe(false)
      expect(DescriptionInclude.is({ description: '' })).toBe(false)
      expect(DescriptionInclude.is({ description: '   \t\n' })).toBe(false)

      expect(DescriptionInclude.is({ description: 'Hello Description' })).toBe(true)
      expect(DescriptionInclude.is({ description: 0 })).toBe(true)
      expect(DescriptionInclude.is({ description: '0' })).toBe(true)

      expect(DescriptionInclude.is({}, {})).toBe(false)
      expect(DescriptionInclude.is({}, { description: () => 'slot content' })).toBe(true)
      expect(DescriptionInclude.is({}, { description: undefined })).toBe(true)
    })

    it('should resolve instance is getter across plain objects, refs, getter functions, and slots', () => {
      const naming = new DesignName('my.class')

      const includeText = new DescriptionInclude({ description: 'Hello Description' }, naming)
      expect(includeText.is).toBe(true)

      const includeEmpty = new DescriptionInclude({ description: undefined }, naming)
      expect(includeEmpty.is).toBe(false)

      const includeSlot = new DescriptionInclude({}, naming, { description: () => 'slot content' })
      expect(includeSlot.is).toBe(true)

      const propsRef = ref<DescriptionProps>({ description: undefined })
      const includeRef = new DescriptionInclude(propsRef, naming)
      expect(includeRef.is).toBe(false)
      propsRef.value = { description: 'Reactive text' }
      expect(includeRef.is).toBe(true)

      const dynamicState = reactive({ active: false, text: 'Getter text' })
      const includeFn = new DescriptionInclude(
        () => ({ description: dynamicState.active ? dynamicState.text : undefined }),
        naming
      )
      expect(includeFn.is).toBe(false)
      dynamicState.active = true
      expect(includeFn.is).toBe(true)
    })
  })

  describe('Element identifier resolution (id)', () => {
    it('should return descriptionId when provided or fall back to unique generated id', () => {
      const naming = new DesignName('my.class')
      const props = reactive<DescriptionProps>({ description: 'Hello', descriptionId: 'custom-id' })
      const includeCustom = new DescriptionInclude(props, naming)

      expect(includeCustom.id).toBe('custom-id')

      props.descriptionId = ''
      expect(includeCustom.id).toBeTruthy()
      expect(includeCustom.id).not.toBe('custom-id')

      const defaultId = includeCustom.id
      props.descriptionId = 'updated-id'
      expect(includeCustom.id).toBe('updated-id')
      props.descriptionId = undefined
      expect(includeCustom.id).toBe(defaultId)

      const includeFirst = new DescriptionInclude({}, naming)
      const includeSecond = new DescriptionInclude({}, naming)
      expect(typeof includeFirst.id).toBe('string')
      expect(includeFirst.id.length).toBeGreaterThan(0)
      expect(includeFirst.id).not.toBe(includeSecond.id)
    })
  })

  describe('Rendering output, slots, extra children, and prop merging (render)', () => {
    it('should render correct VNode when description prop is present', () => {
      const include = new DescriptionInclude(
        { description: 'Hello Description', descriptionId: 'desc-id' },
        new DesignName('my.class'),
        undefined,
        undefined,
        'p'
      )
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.type).toBe('p')
      expect(nodes[0]?.props).toEqual({
        id: 'desc-id',
        class: 'my-class__description',
        key: 'p.description.desc-id'
      })
      expect(nodes[0]?.children).toEqual(['Hello Description'])
    })

    it('should render slot content, extra children, and merge additional HTML props', () => {
      const slotMock = vi.fn().mockReturnValue('slot content')
      const include = new DescriptionInclude(
        { description: 'Main text', descriptionId: 'desc-id' },
        new DesignName('my.class'),
        { description: slotMock }
      )
      const nodes = include.render(
        ['extra content'],
        {
          'class': 'custom-extra',
          'data-testid': 'desc-node',
          'aria-live': 'polite'
        }
      )

      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.type).toBe('div')
      expect(slotMock).toHaveBeenCalledTimes(1)
      expect(slotMock).toHaveBeenCalledWith({})
      expect(nodes[0]?.children).toEqual(['Main text', 'slot content', 'extra content'])
      expect(nodes[0]?.props).toMatchObject({
        'id': 'desc-id',
        'class': 'my-class__description custom-extra',
        'data-testid': 'desc-node',
        'aria-live': 'polite'
      })
    })

    it('should return empty array when description and slot are absent even if slotsChildren is passed', () => {
      const skeletonGetter = vi.fn()
      const include = new DescriptionInclude(
        {},
        new DesignName('my.class'),
        undefined,
        skeletonGetter
      )

      expect(include.render()).toEqual([])
      expect(include.render(['orphan child'])).toEqual([])
      expect(skeletonGetter).not.toHaveBeenCalled()
    })

    it('should return empty array when slots.description is explicitly undefined and no description prop is provided', () => {
      const slots: DescriptionSlots = { description: undefined }
      const include = new DescriptionInclude({}, new DesignName('my.class'), slots)

      expect(include.is).toBe(true)
      expect(include.render()).toEqual([])
    })

    it('should reactively resolve tag ref and fall back to div when tag is undefined', () => {
      const tag = ref<string | undefined>('section')
      const include = new DescriptionInclude(
        { description: 'Tagged description' },
        new DesignName('my.class'),
        undefined,
        undefined,
        tag
      )

      expect(include.render()[0]?.type).toBe('section')

      tag.value = 'span'
      expect(include.render()[0]?.type).toBe('span')

      tag.value = undefined
      expect(include.render()[0]?.type).toBe('div')
    })
  })

  describe('Boundary values, zero/falsy traps, and skeleton integration', () => {
    it('should handle numeric 0 and string "0" as valid descriptions and reject whitespace-only strings', () => {
      const naming = new DesignName('my.class')

      const includeZero = new DescriptionInclude({ description: 0 }, naming)
      expect(includeZero.is).toBe(true)
      const zeroNodes = includeZero.render()
      expect(zeroNodes).toHaveLength(1)
      expect(zeroNodes[0]?.children).toEqual([0])

      const includeStringZero = new DescriptionInclude({ description: '0' }, naming)
      expect(includeStringZero.is).toBe(true)
      const stringZeroNodes = includeStringZero.render()
      expect(stringZeroNodes).toHaveLength(1)
      expect(stringZeroNodes[0]?.children).toEqual(['0'])

      const includeWhitespace = new DescriptionInclude({ description: '   \n\t  ' }, naming)
      expect(includeWhitespace.is).toBe(false)
      expect(includeWhitespace.render()).toEqual([])
    })

    it('should apply skeleton classes only when isSkeleton is active and handle undefined skeleton getter result', () => {
      const skeleton = new SkeletonInclude({ isSkeleton: true }, new DesignName('d1.description'), ['classText'])
      const skeletonGetter = vi.fn(() => skeleton)

      const includeInactive = new DescriptionInclude(
        { description: 'Hello Description' },
        new DesignName('my.class'),
        undefined,
        skeletonGetter
      )
      const inactiveNodes = includeInactive.render()
      expect(inactiveNodes).toHaveLength(1)
      expect(inactiveNodes[0]?.props?.class).toBe('my-class__description')
      expect(skeletonGetter).not.toHaveBeenCalled()

      const includeActive = new DescriptionInclude(
        { description: 'Hello Description', isSkeleton: true },
        new DesignName('my.class'),
        undefined,
        skeletonGetter
      )
      const activeNodes = includeActive.render()
      expect(activeNodes).toHaveLength(1)
      expect(activeNodes[0]?.props?.class).toBe('my-class__description d1-skeleton__text')
      expect(skeletonGetter).toHaveBeenCalledTimes(1)

      const includeNoSkeletonInstance = new DescriptionInclude(
        { description: 'Hello Description', isSkeleton: true },
        new DesignName('my.class'),
        undefined,
        () => undefined
      )
      expect(includeNoSkeletonInstance.render()[0]?.props?.class).toBe('my-class__description')
    })
  })

  describe('Multilingual, Unicode, and SSR isomorphism', () => {
    it('should preserve Cyrillic, Vietnamese diacritics, CJK, and Emoji', () => {
      const text = 'Привет Мир — Học tiếng Việt 🇻🇳 — 你好 世界 🚀'
      const include = new DescriptionInclude({ description: text }, new DesignName('my.class'))
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.children).toEqual([text])
    })

    it('should render valid deterministic markup via SSR renderToString', async () => {
      const SsrDescriptionComponent = defineComponent({
        setup() {
          const include = new DescriptionInclude(
            { description: 'SSR Description', descriptionId: 'ssr-desc-id' },
            new DesignName('d1.block'),
            undefined,
            undefined,
            'p'
          )

          return () => h('div', { class: 'wrapper' }, include.render())
        }
      })

      const html = await renderToString(createSSRApp(SsrDescriptionComponent))
      expect(html).toBe('<div class="wrapper"><p id="ssr-desc-id" class="d1-block__description">SSR Description</p></div>')
    })
  })
})
