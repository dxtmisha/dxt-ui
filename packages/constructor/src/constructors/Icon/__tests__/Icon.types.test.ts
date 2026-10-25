// @vitest-environment node
import './testWarnings'
import { describe, expectTypeOf, it } from 'vitest'
import type { ConstrBind } from '@dxtmisha/functional'

import type { Icon, IconConstructors } from '../Icon'
import type { IconDesign } from '../IconDesign'
import type { IconLiteInclude } from '../IconLiteInclude'
import type { IconInclude } from '../IconInclude'
import type { IconTrailingInclude } from '../IconTrailingInclude'
import type {
  IconComponentInclude,
  IconEventLoad,
  IconLitePropsInclude,
  IconPropsInclude,
  IconTrailingPropsInclude,
  IconValue
} from '../basicTypes'
import type { IconProps, IconPropsBasic, IconPropsToken } from '../props'
import type { IconClasses, IconComponents, IconEmits, IconExpose, IconSlots } from '../types'
import type { ImageEventData, ImagePropsBasic, ImageValue } from '../../Image'
import type { EventClickValue } from '../../../types/eventClickTypes'
import type { RoleType } from '../../../types/roleTypes'

describe('Icon (contracts checked by TypeScript)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should type icon and iconActive as ImageValue<ImagePropsBasic> without any', () => {
      expectTypeOf<IconProps['icon']>().not.toBeAny()
      expectTypeOf<IconProps['icon']>().toEqualTypeOf<ImageValue<ImagePropsBasic> | undefined>()
      expectTypeOf<IconProps['iconActive']>().not.toBeAny()
      expectTypeOf<IconProps['iconActive']>().toEqualTypeOf<ImageValue<ImagePropsBasic> | undefined>()

      expectTypeOf<{ icon: string }>().toExtend<IconProps>()
      expectTypeOf<{ icon: ConstrBind<ImagePropsBasic> }>().toExtend<IconProps>()
      expectTypeOf<{ icon: null }>().toExtend<IconProps>()
      expectTypeOf<{ icon: number }>().not.toExtend<IconProps>()
      expectTypeOf<{ icon: boolean }>().not.toExtend<IconProps>()
    })

    it('should constrain animationType to supported token literals and role to RoleType', () => {
      expectTypeOf<IconPropsToken['animationType']>().toEqualTypeOf<'type1' | 'type2' | undefined>()
      expectTypeOf<{ animationType: 'type1' }>().toExtend<IconProps>()
      expectTypeOf<{ animationType: 'type2' }>().toExtend<IconProps>()
      expectTypeOf<{ animationType: 'type3' }>().not.toExtend<IconProps>()
      expectTypeOf<{ animationType: number }>().not.toExtend<IconProps>()

      expectTypeOf<IconProps['role']>().toEqualTypeOf<RoleType | undefined>()
      expectTypeOf<Icon['role']>().toEqualTypeOf<RoleType | undefined>()
      expectTypeOf<IconProps['tabindex']>().toEqualTypeOf<number | string | undefined>()
    })

    it('should strictly type IconEventLoad and Icon bindings without any', () => {
      expectTypeOf<IconEventLoad['isActive']>().toEqualTypeOf<boolean>()
      expectTypeOf<IconEventLoad['iconBind']>().not.toBeAny()
      expectTypeOf<IconEventLoad['iconBind']>().toEqualTypeOf<ConstrBind<ImagePropsBasic> | undefined>()
      expectTypeOf<IconEventLoad['iconActiveBind']>().not.toBeAny()
      expectTypeOf<IconEventLoad['iconActiveBind']>().toEqualTypeOf<ConstrBind<ImagePropsBasic> | undefined>()

      expectTypeOf<Icon['iconBind']>().toEqualTypeOf<ConstrBind<ImagePropsBasic> | undefined>()
      expectTypeOf<Icon['iconActiveBind']>().toEqualTypeOf<ConstrBind<ImagePropsBasic> | undefined>()
      expectTypeOf<Icon['isActive']>().toEqualTypeOf<() => boolean>()
    })

    it('should expose typed emits, expose methods, slots, classes, and constructors', () => {
      expectTypeOf<IconEmits['load']>().toEqualTypeOf<[image: ImageEventData]>()
      expectTypeOf<IconEmits['click']>().toEqualTypeOf<[event: MouseEvent, value: EventClickValue]>()
      expectTypeOf<IconEmits['clickLite']>().toEqualTypeOf<[value: EventClickValue]>()

      expectTypeOf<IconExpose['isActive']>().toEqualTypeOf<() => boolean>()
      expectTypeOf<ReturnType<IconExpose['isActive']>>().not.toBeAny()
      expectTypeOf<IconExpose['getValue']>().toBeFunction()
      expectTypeOf<IconExpose['getDetail']>().toBeFunction()

      expectTypeOf<IconSlots>().toBeObject()
      expectTypeOf<IconClasses['main']>().not.toBeAny()
      expectTypeOf<IconComponents>().toBeObject()
      expectTypeOf<IconConstructors>().toHaveProperty('enabled')
      expectTypeOf<IconConstructors>().toHaveProperty('event')
      expectTypeOf<IconConstructors>().toHaveProperty('skeleton')
      expectTypeOf<IconDesign<IconComponents, IconExpose, IconClasses, IconProps>['renderIcon']>().toBeFunction()
      expectTypeOf<IconDesign<IconComponents, IconExpose, IconClasses, IconProps>['renderIconActive']>().toBeFunction()
    })

    it('should type IconLiteInclude, IconInclude, and IconTrailingInclude contracts', () => {
      expectTypeOf<IconValue>().toEqualTypeOf<string | ConstrBind<IconPropsBasic> | null>()
      expectTypeOf<IconComponentInclude['icon']>().toEqualTypeOf<object | undefined>()
      expectTypeOf<IconLitePropsInclude['icon']>().toEqualTypeOf<IconValue | undefined>()
      expectTypeOf<IconPropsInclude['iconAttrs']>().toEqualTypeOf<ConstrBind<IconPropsBasic> | undefined>()
      expectTypeOf<IconTrailingPropsInclude['iconTrailing']>().toEqualTypeOf<IconValue | undefined>()

      expectTypeOf<IconLiteInclude['iconBind']>().not.toBeAny()
      expectTypeOf<IconLiteInclude['iconBind']>().toEqualTypeOf<ConstrBind<IconPropsBasic>>()
      expectTypeOf<IconInclude['iconBind']>().toEqualTypeOf<ConstrBind<IconPropsBasic>>()
      expectTypeOf<IconTrailingInclude['trailingBind']>().toEqualTypeOf<ConstrBind<IconPropsBasic>>()
      expectTypeOf<IconTrailingInclude['isIcon']>().toEqualTypeOf<() => boolean>()
      expectTypeOf<IconTrailingInclude['isIconTrailing']>().toEqualTypeOf<() => boolean>()
      expectTypeOf<IconTrailingInclude['hasAtLeastOneIcon']>().toEqualTypeOf<() => boolean>()
    })
  })
})
