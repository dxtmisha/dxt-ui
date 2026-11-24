// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { BulletItem } from '../BulletItem'
import type { BulletItemProps } from '../props'
import type { BulletItemSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

function createBulletItem(
  props: BulletItemProps = {},
  slots?: BulletItemSlots,
  constructors?: ConstructorParameters<typeof BulletItem>[6]
): BulletItem {
  let instance!: BulletItem
  const Host = defineComponent({
    setup() {
      const element = ref<HTMLLIElement | undefined>(undefined)
      const naming = new DesignName('d1.bulletItem')
      instance = new BulletItem(props, element, naming, undefined, slots, undefined, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('BulletItem (isolated class)', () => {
  it('should keep description and skeleton unallocated until configured, support numeric 0, and render span description', () => {
    const props = reactive<BulletItemProps>({
      description: '   '
    })
    const instance = createBulletItem(props)

    expect(instance.hasInstance('description')).toBe(false)
    expect(instance.hasInstance('skeleton')).toBe(false)
    expect(instance.callInstance('description', item => item.render(), [])).toEqual([])
    expect(instance.hasInstance('description')).toBe(false)

    props.description = 0
    const zeroNodes = instance.callInstance('description', item => item.render(), [])
    expect(zeroNodes).toHaveLength(1)
    expect(zeroNodes[0]?.type).toBe('span')
    expect(zeroNodes[0]?.children).toContain(0)
    expect(instance.hasInstance('description')).toBe(true)

    props.isSkeleton = true
    const skeletonNodes = instance.callInstance('description', item => item.render(), [])
    expect(JSON.stringify(skeletonNodes[0]?.props?.class)).toContain('d1-skeleton__textVariant')
    expect(instance.hasInstance('skeleton')).toBe(true)
  })

  it('should support DI constructor overrides', () => {
    const descSpy = vi.fn()
    class CustomDescriptionInclude extends DescriptionInclude {
      constructor(...parameters: ConstructorParameters<typeof DescriptionInclude>) {
        super(...parameters)
        descSpy(parameters[4])
      }
    }

    const instance = createBulletItem(
      { description: 'Custom' },
      undefined,
      { description: CustomDescriptionInclude }
    )

    expect(instance.i('description')).toBeInstanceOf(CustomDescriptionInclude)
    expect(descSpy).toHaveBeenCalledWith('span')
  })
})
