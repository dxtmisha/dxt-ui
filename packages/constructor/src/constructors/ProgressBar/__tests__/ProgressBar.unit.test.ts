// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { SkeletonInclude } from '../../Skeleton'
import { ProgressBar, type ProgressBarConstructors } from '../ProgressBar'
import type { ProgressBarProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

function createProgressBar(
  props: ProgressBarProps = {},
  constructors?: Partial<ProgressBarConstructors>
): ProgressBar {
  let instance!: ProgressBar

  const Host = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>()
      const naming = new DesignName('d1.progressBar')
      instance = new ProgressBar(props, element, naming, undefined, undefined, undefined, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('ProgressBar (isolated class)', () => {
  describe('Value normalization, max calculation, and division-by-zero boundaries', () => {
    it('handles number, numeric string, single object, array, and undefined values', () => {
      const props = reactive<ProgressBarProps>({ value: 40, max: 100 })
      const instance = createProgressBar(props)

      expect(instance.value).toBe(40)
      expect(instance.max).toBe(100)
      expect(instance.item.value).toHaveLength(2)
      expect(instance.item.value[0]?.percent).toBe(40)
      expect(instance.item.value[1]?.percent).toBe(60)
      expect(instance.item.value[1]?.aria['aria-hidden']).toBe('true')

      props.value = '25'
      expect(instance.value).toBe(25)
      expect(instance.item.value[0]?.percent).toBe(25)

      props.value = { value: 30, label: 'Done' }
      expect(instance.value).toBe(30)
      expect(instance.item.value[0]?.aria['aria-label']).toBe('Done')

      props.max = undefined
      props.value = [{ value: 20 }, { value: 30 }]
      expect(instance.value).toBe(50)
      expect(instance.max).toBe(50)
      expect(instance.item.value).toHaveLength(2)
      expect(instance.item.value[0]?.percent).toBe(40)
      expect(instance.item.value[1]?.percent).toBe(60)

      props.value = undefined
      expect(instance.value).toBe(0)
      expect(instance.max).toBe(0)
      expect(instance.item.value).toHaveLength(1)
      expect(instance.item.value[0]?.percent).toBe(100)
    })

    it('prevents NaN or Infinity when max is 0 or negative and value is 0', () => {
      const props = reactive<ProgressBarProps>({ value: 0 })
      const instance = createProgressBar(props)

      expect(instance.max).toBe(0)
      expect(instance.item.value[0]?.percent).toBe(0)
      expect(instance.item.value[0]?.aria['aria-label']).toBe('0%')
      expect(instance.item.value[0]?.aria['aria-valuenow']).toBe(0)
      expect(instance.item.value[1]?.percent).toBe(100)

      props.value = 50
      props.max = 0
      expect(instance.item.value[0]?.percent).toBe(0)
    })
  })

  describe('Palette, color, focus, and lazy SkeletonInclude', () => {
    it('applies palette/color precedence, focus modifier, and keeps skeleton lazy until isSkeleton is true', () => {
      const props = reactive<ProgressBarProps>({
        palette: 'blue',
        color: '#111111',
        focus: 's2',
        value: [
          { index: 's1', value: 25, color: '#ff0000' },
          { index: 's2', value: 25, palette: 'green' },
          { index: 's3', value: 25 }
        ],
        max: 100
      })
      const instance = createProgressBar(props)

      expect(instance.hasInstance('skeleton')).toBe(false)
      expect(instance.getSkeletonTextClass()).toBe('')
      expect(instance.getSkeletonBackgroundClass()).toBe('')
      expect(instance.hasInstance('skeleton')).toBe(false)

      const [first, second, third] = instance.item.value
      expect(first?.classes['d1-progressBar__item--color']).toBe(true)
      expect(first?.classes['d1-progressBar__item--palette']).toBe(false)
      expect(second?.classes['d1-progressBar__item--focus']).toBe(true)
      expect(second?.classes['d1-palette--green']).toBe(true)
      expect(third?.classes['d1-palette--blue']).toBe(true)

      props.isSkeleton = true
      expect(instance.getSkeletonTextClass()).toBeTruthy()
      expect(instance.getSkeletonBackgroundClass()).toBeTruthy()
      expect(instance.hasInstance('skeleton')).toBe(true)
    })

    it('supports DI override for SkeletonInclude', () => {
      class CustomSkeleton extends SkeletonInclude {
        override readonly classesSkeleton = {
          classText: 'custom-sk-text',
          classTextVariant: 'custom-sk-text-var',
          classBackground: 'custom-sk-bg',
          classBackgroundAfter: 'custom-sk-bg-after',
          classBackgroundBefore: 'custom-sk-bg-before',
          classBackgroundVariant: 'custom-sk-bg-var',
          classBorder: 'custom-sk-border',
          classBorderVariant: 'custom-sk-border-var',
          classNone: 'custom-sk-none'
        }
      }

      const instance = createProgressBar({ isSkeleton: true, value: 50 }, { skeleton: CustomSkeleton })
      expect(instance.getSkeletonTextClass()).toBe('custom-sk-text')
      expect(instance.getSkeletonBackgroundClass()).toBe('custom-sk-bg')
    })
  })
})
