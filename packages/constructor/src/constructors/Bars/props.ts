import type { ConstrBind } from '@dxtmisha/functional'

import type { IconPropsBasic, IconValue } from '../Icon'
import type { ButtonPropsBasic } from '../Button'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'

interface BarsPropsToken {
  // :type [!] System label / Системная метка
  action?: boolean
  // :type [!] System label / Системная метка
}

export interface BarsPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic
> extends LabelProps,
  DescriptionProps,
  SkeletonPropsInclude
{
  // Value
  'backButton'?: ConstrBind<Button>
  'backHide'?: boolean
  'backActionHide'?: boolean
  'bars'?: ConstrBind<Button>[]

  'actionLabel'?: LabelProps['label']
  'actionDescription'?: DescriptionProps['description']
  'actionBars'?: ConstrBind<Button>[]

  // Style
  'buttonAttrs'?: ConstrBind<Button>

  'iconBack'?: IconValue<Icon>
  'iconClose'?: IconValue<Icon>

  // Event
  'modelAction'?: boolean
  'onUpdate:action'?: (value: boolean) => void
  'onUpdate:modelAction'?: (value: boolean) => void
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface BarsProps extends BarsPropsBasic, BarsPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBars = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
