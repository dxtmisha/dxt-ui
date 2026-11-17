import type { ConstrBind } from '@dxtmisha/functional'

import type { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon'
import type { BadgePropsBasic, BadgePropsInclude } from '../Badge'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'
import type { CheckboxPropsBasic } from '../Checkbox'
import type { RadioPropsBasic } from '../Radio'
import type { AriaRolePropsInclude } from '../../types/ariaTypes'

import type { LabelHighlightProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { PrefixProps } from '../../types/prefixTypes'
import type { CaptionProps } from '../../types/captionTypes'
import type { SuffixProps } from '../../types/suffixTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

export type ListItemPropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selectedChild?: boolean
  readonly?: boolean
  disabled?: boolean
  iconTop?: boolean
  iconAlign?: 'center' | 'edge'
  controlPosition?: 'start' | 'end'
  fill?: string | 'custom'
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type ListItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic,
  Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic,
  Radio extends RadioPropsBasic = RadioPropsBasic
> = LabelHighlightProps
  & DescriptionProps
  & PrefixProps
  & CaptionProps
  & SuffixProps
  & IconTrailingPropsInclude<Icon>
  & BadgePropsInclude<Badge>
  & ProgressPropsInclude<Progress>
  & SkeletonPropsInclude
  & EnabledProps
  & EventClickProps
  & AriaRolePropsInclude
  & {
    /** Value/ Значения */
    /** URL address for links/ URL-адрес для ссылок */
    href?: string

    /** Style/ Стили */
    /** HTML tag for the list item/ HTML-тег для элемента списка */
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string
    /** Whether to enable filtering mode/ Включен ли режим фильтрации */
    filterMode?: boolean
    /** Whether to show a divider/ Показывать ли разделитель */
    divider?: boolean

    /** Selection style/ Стиль выбора */
    selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none'

    /** Tab index for keyboard navigation/ Индекс табуляции для навигации с клавиатуры */
    tabindex?: number | string

    /** Attributes for the checkbox / Атрибуты для флажка */
    checkboxAttrs?: ConstrBind<Checkbox>
    /** Attributes for the radio button / Атрибуты для радиокнопки */
    radioAttrs?: ConstrBind<Radio>

    /** Icon name for the checkbox / Название иконки для флажка */
    iconCheckbox?: IconValue<Icon>

    /** Technical/ Технические свойства */
    /** Item type/ Тип элемента */
    type?: string
    /** Parent identifier/ Идентификатор родителя */
    parent?: string
    /** List identifier/ Идентификатор списка */
    listId?: number
    /** Search string for highlighting/ Строка поиска для подсветки */
    search?: string
    /** Lazy rendering of item contents/ Ленивый рендеринг содержимого элемента */
    lazy?: boolean
    /** Root margin for lazy visibility observer/ Отступ области наблюдения ленивого рендеринга */
    lazyMargin?: string
    /** Whether to cache measured element height when hidden by lazy rendering / Сохранять ли измеренную высоту элемента при скрытии ленивым рендерингом */
    lazyCacheHeight?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ListItemProps = ListItemPropsBasic & ListItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsListItem = {
  tabindex: '-1',
  role: 'option',
  selectionStyle: 'none',
  lazy: true,
  lazyCacheHeight: true,
  ...{
    // :default [!] System label / Системная метка
    iconAlign: 'center',
    controlPosition: 'end'
    // :default [!] System label / Системная метка
  }
}
