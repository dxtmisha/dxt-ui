// @vitest-environment node
import './testWarnings'
import { describe, expectTypeOf, it } from 'vitest'
import type { VNode } from 'vue'
import type {
  ComponentStorageReturn,
  ConstrBind,
  ConstrClass,
  ConstrItem
} from '@dxtmisha/functional'

import type { ComponentOutlet, ComponentOutletConstructors } from '../ComponentOutlet'
import type { ComponentOutletDesign } from '../ComponentOutletDesign'
import type {
  ComponentOutletProps,
  ComponentOutletPropsBasic,
  ComponentOutletPropsToken
} from '../props'
import type {
  ComponentOutletClasses,
  ComponentOutletComponents,
  ComponentOutletEmits,
  ComponentOutletExpose,
  ComponentOutletSlots
} from '../types'

describe('ComponentOutlet (contracts checked by TypeScript)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should strictly type ComponentOutletProps without any', () => {
      expectTypeOf<ComponentOutletProps['name']>().not.toBeAny()
      expectTypeOf<ComponentOutletProps['name']>().toEqualTypeOf<string | undefined>()
      expectTypeOf<ComponentOutletProps['props']>().not.toBeAny()
      expectTypeOf<ComponentOutletProps['props']>().toEqualTypeOf<ConstrItem | undefined>()

      expectTypeOf<{ name: string }>().toExtend<ComponentOutletProps>()
      expectTypeOf<{ name: string, props: { label: string } }>().toExtend<ComponentOutletProps>()
      expectTypeOf<{ name: number }>().not.toExtend<ComponentOutletProps>()
      expectTypeOf<{ name: boolean }>().not.toExtend<ComponentOutletProps>()
      expectTypeOf<{ props: string }>().not.toExtend<ComponentOutletProps>()
      expectTypeOf<ComponentOutletPropsBasic>().toExtend<ComponentOutletProps>()
      expectTypeOf<ComponentOutletPropsToken>().toBeObject()
    })

    it('should strictly type ComponentOutlet getters and methods', () => {
      expectTypeOf<ComponentOutlet['binds']>().not.toBeAny()
      expectTypeOf<ComponentOutlet['binds']>().toEqualTypeOf<ConstrBind>()
      expectTypeOf<ComponentOutlet['component']>().not.toBeAny()
      expectTypeOf<ComponentOutlet['component']>().toEqualTypeOf<ComponentStorageReturn | undefined>()
      expectTypeOf<ComponentOutlet['getElement']>().toBeFunction()

      expectTypeOf((outlet: ComponentOutlet): void => {
        expectTypeOf(outlet.getElement()).not.toBeAny()
        expectTypeOf(outlet.getElement()).toEqualTypeOf<Element | undefined>()
        expectTypeOf(outlet.getElement<HTMLButtonElement>()).toEqualTypeOf<HTMLButtonElement | undefined>()
      }).toBeFunction()
    })

    it('should strictly type ComponentOutletExpose, ComponentOutletSlots, ComponentOutletClasses, and ComponentOutletDesign', () => {
      expectTypeOf<ComponentOutletExpose['getElement']>().toBeFunction()

      expectTypeOf((expose: ComponentOutletExpose<HTMLButtonElement>): void => {
        expectTypeOf(expose.getElement()).not.toBeAny()
        expectTypeOf(expose.getElement()).toEqualTypeOf<HTMLButtonElement | undefined>()
        expectTypeOf(expose.getElement<HTMLAnchorElement>()).toEqualTypeOf<HTMLAnchorElement | undefined>()
      }).toBeFunction()

      expectTypeOf<ComponentOutletSlots['default']>().toEqualTypeOf<((props: ConstrItem) => VNode[]) | undefined>()
      expectTypeOf<ComponentOutletSlots['header']>().toEqualTypeOf<((props: ConstrItem) => VNode[]) | undefined>()

      expectTypeOf<ComponentOutletClasses['main']>().toEqualTypeOf<ConstrClass>()
      expectTypeOf<ComponentOutletComponents>().toBeObject()
      expectTypeOf<ComponentOutletEmits>().toBeObject()
      expectTypeOf<ComponentOutletConstructors>().toBeObject()

      type DesignInstance = ComponentOutletDesign<
        ComponentOutletComponents,
        ComponentOutletExpose,
        ComponentOutletClasses,
        ComponentOutletProps
      >
      expectTypeOf<ReturnType<DesignInstance['expose']>['getElement']>().toBeFunction()
    })
  })
})
