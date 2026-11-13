// @vitest-environment node
import './testWarnings'
import { describe, expectTypeOf, it } from 'vitest'
import type { VNode } from 'vue'
import type { ConstrBind, ConstrClass, ConstrClassObject } from '@dxtmisha/functional'

import type { Skeleton, SkeletonConstructors } from '../Skeleton'
import type { SkeletonDesign } from '../SkeletonDesign'
import type { SkeletonInclude } from '../SkeletonInclude'
import type { SkeletonClassesList, SkeletonPropsInclude } from '../basicTypes'
import type { defaultsSkeleton, SkeletonProps, SkeletonPropsBasic, SkeletonPropsToken } from '../props'
import type {
  SkeletonClasses,
  SkeletonComponents,
  SkeletonEmits,
  SkeletonExpose,
  SkeletonSlots
} from '../types'
import type { AriaList } from '../../../types/ariaTypes'

describe('Skeleton (contracts checked by TypeScript)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should strictly type SkeletonProps, SkeletonPropsBasic, SkeletonPropsToken, and defaultsSkeleton without any', () => {
      expectTypeOf<SkeletonPropsToken>().not.toBeAny()
      expectTypeOf<SkeletonPropsBasic['active']>().not.toBeAny()
      expectTypeOf<SkeletonPropsBasic['active']>().toEqualTypeOf<boolean | undefined>()

      expectTypeOf<SkeletonPropsBasic['delay']>().not.toBeAny()
      expectTypeOf<SkeletonPropsBasic['delay']>().toEqualTypeOf<number | string | undefined>()
      expectTypeOf<SkeletonPropsBasic['delayHide']>().not.toBeAny()
      expectTypeOf<SkeletonPropsBasic['delayHide']>().toEqualTypeOf<number | string | undefined>()
      expectTypeOf<SkeletonPropsBasic['invisible']>().not.toBeAny()
      expectTypeOf<SkeletonPropsBasic['invisible']>().toEqualTypeOf<boolean | undefined>()

      expectTypeOf<{ active: true, delay: 100, delayHide: '200', invisible: false }>().toExtend<SkeletonProps>()
      expectTypeOf<{ active: 'yes' }>().not.toExtend<SkeletonProps>()
      expectTypeOf<{ delay: boolean }>().not.toExtend<SkeletonProps>()
      expectTypeOf<{ delayHide: object }>().not.toExtend<SkeletonProps>()
      expectTypeOf<{ invisible: number }>().not.toExtend<SkeletonProps>()

      expectTypeOf<typeof defaultsSkeleton>().toExtend<{
        delay: number
        delayHide: number
        invisible: boolean
      }>()
    })

    it('should strictly type SkeletonClassesList with all 9 utility class keys', () => {
      expectTypeOf<SkeletonClassesList>().not.toBeAny()
      expectTypeOf<keyof SkeletonClassesList>().toEqualTypeOf<
        | 'classText'
        | 'classTextVariant'
        | 'classBackground'
        | 'classBackgroundAfter'
        | 'classBackgroundBefore'
        | 'classBackgroundVariant'
        | 'classBorder'
        | 'classBorderVariant'
        | 'classNone'
      >()
      expectTypeOf<SkeletonClassesList['classText']>().toEqualTypeOf<string>()
      expectTypeOf<SkeletonClassesList['classNone']>().toEqualTypeOf<string>()
    })

    it('should type SkeletonExpose, SkeletonClasses, SkeletonSlots, and SkeletonConstructors', () => {
      expectTypeOf<SkeletonExpose['isActive']>().toEqualTypeOf<() => boolean>()
      expectTypeOf<ReturnType<SkeletonExpose['isActive']>>().not.toBeAny()

      expectTypeOf<SkeletonClasses['main']>().not.toBeAny()
      expectTypeOf<SkeletonClasses['main']>().toEqualTypeOf<ConstrClass>()

      expectTypeOf<Parameters<NonNullable<SkeletonSlots['default']>>>().toEqualTypeOf<[props: SkeletonClassesList]>()
      expectTypeOf<ReturnType<NonNullable<SkeletonSlots['default']>>>().not.toBeAny()
      expectTypeOf<ReturnType<NonNullable<SkeletonSlots['default']>>>().toEqualTypeOf<VNode[]>()
      expectTypeOf<ConstructorParameters<typeof SkeletonInclude>[0]>().toEqualTypeOf<Readonly<SkeletonPropsInclude>>()
      expectTypeOf<SkeletonComponents>().toBeObject()
      expectTypeOf<SkeletonEmits>().toBeObject()
      expectTypeOf<SkeletonConstructors>().toBeObject()
    })

    it('should strictly type Skeleton, SkeletonDesign, and SkeletonInclude public members', () => {
      expectTypeOf<typeof Skeleton.getClassesList>().toEqualTypeOf<(className: string) => SkeletonClassesList>()
      expectTypeOf<typeof Skeleton.getClassesListByDesign>().toEqualTypeOf<(design: string) => SkeletonClassesList>()

      expectTypeOf<Skeleton['classesSkeleton']>().toEqualTypeOf<SkeletonClassesList>()
      expectTypeOf<Skeleton['aria']>().toEqualTypeOf<AriaList>()
      expectTypeOf<Skeleton['binds']>().toEqualTypeOf<ConstrBind>()
      expectTypeOf<Skeleton['classes']>().toEqualTypeOf<ConstrClassObject>()
      expectTypeOf<Skeleton['isActive']>().toEqualTypeOf<() => boolean>()
      expectTypeOf<Skeleton['isInvisible']>().toEqualTypeOf<() => boolean>()

      expectTypeOf<SkeletonPropsInclude['isSkeleton']>().toEqualTypeOf<boolean | undefined>()
      expectTypeOf<SkeletonInclude['classesSkeleton']>().toEqualTypeOf<SkeletonClassesList>()
      expectTypeOf<SkeletonInclude['binds']>().toEqualTypeOf<ConstrBind<SkeletonPropsInclude>>()
      expectTypeOf<SkeletonInclude['classes']>().toEqualTypeOf<ConstrClassObject>()
      expectTypeOf<SkeletonInclude['isSkeleton']>().toEqualTypeOf<() => boolean>()

      expectTypeOf<SkeletonDesign<SkeletonComponents, SkeletonExpose, SkeletonClasses, SkeletonProps>['render']>().toBeFunction()
      expectTypeOf<SkeletonDesign<SkeletonComponents, SkeletonExpose, SkeletonClasses, SkeletonProps>['expose']>().toBeFunction()
    })
  })
})
