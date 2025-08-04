import type { IconPropsBasic, IconValue } from '../Icon'
import type { ButtonPropsBasic } from '../Button'
import type { ConstrBind } from '@dxt-ui/functional'
import type { LabelProps } from '../../types/labelTypes.ts'
import type { DescriptionProps } from '../../types/descriptionTypes.ts'

interface BarsPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface BarsPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic
> {
  // Value
  backButton?: ConstrBind<Button>
  backHide?: boolean
  bars?: ConstrBind<Button>[]

  actionLabel?: LabelProps['label']
  actionDescription?: DescriptionProps['description']
  actionBars?: ConstrBind<Button>[]

  iconBack?: IconValue<Icon>
  iconClose?: IconValue<Icon>

  // Style
  buttonAttrs?: ConstrBind<Button>
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
