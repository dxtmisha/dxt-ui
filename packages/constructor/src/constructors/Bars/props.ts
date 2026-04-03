import type { ConstrBind } from '@dxtmisha/functional'

import type { IconPropsBasic, IconValue } from '../Icon'
import type { ButtonPropsBasic } from '../Button'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { TextClosePropsInclude } from '../../types/textTypes'

export type BarsPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type BarsPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = LabelProps
  & DescriptionProps
  & SkeletonPropsInclude
  & TextClosePropsInclude
  & {
    /** Whether the action mode is active/ Активен ли режим действия */
    'action'?: boolean

    /** Properties for the back button/ Свойства для кнопки «Назад» */
    'backButton'?: ConstrBind<Button>
    /** Whether to hide the back button/ Скрывать ли кнопку «Назад» */
    'backHide'?: boolean
    /** Whether to hide the back button specifically in action mode/ Скрывать ли кнопку «Назад» именно в режиме действия */
    'backActionHide'?: boolean
    /** List of additional buttons/ Список дополнительных кнопок */
    'bars'?: ConstrBind<Button>[]

    /** Label override for action mode/ Переопределение заголовка для режима действия */
    'actionLabel'?: LabelProps['label']
    /** Description override for action mode/ Переопределение описания для режима действия */
    'actionDescription'?: DescriptionProps['description']
    /** List of buttons for action mode/ Список кнопок для режима действия */
    'actionBars'?: ConstrBind<Button>[]

    /** Attributes for the button component/ Атрибуты для компонента кнопки */
    'buttonAttrs'?: ConstrBind<Button>

    /** Icon for the back button/ Иконка для кнопки «Назад» */
    'iconBack'?: IconValue<Icon>
    /** Icon for the close button/ Иконка для кнопки закрытия */
    'iconClose'?: IconValue<Icon>

    /** Whether the action mode model is active/ Активна ли модель режима действия */
    'modelAction'?: boolean
    /** Event for updating the action mode status/ Событие обновления статуса режима действия */
    'onUpdate:action'?: (value: boolean) => void
    /** Event for updating the action mode model status/ Событие обновления статуса модели режима действия */
    'onUpdate:modelAction'?: (value: boolean) => void
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BarsProps = BarsPropsBasic & BarsPropsToken

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
