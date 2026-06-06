import type { ConstrBind } from '@dxtmisha/functional'

import type { ButtonPropsBasic } from '../Button'
import type { IconPropsBasic, IconValue } from '../Icon'
import type { MenuPropsBasic } from '../Menu'
import type {
  TextFirstPropsInclude,
  TextLastPropsInclude,
  TextMorePropsInclude,
  TextRowsPerPagePropsInclude,
  TextInfoPropsInclude,
  TextPreviousPropsInclude,
  TextNextPropsInclude
} from '../../types/textTypes'

type PaginationPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type PaginationPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  Menu extends MenuPropsBasic = MenuPropsBasic
> = TextFirstPropsInclude
  & TextLastPropsInclude
  & TextMorePropsInclude
  & TextRowsPerPagePropsInclude
  & TextInfoPropsInclude
  & TextPreviousPropsInclude
  & TextNextPropsInclude
  & {
    /** Current page / Текущая страница */
    value?: number | string
    /** Total item count / Общее количество элементов */
    count?: number | string
    /** Number of rows per page / Количество строк на странице */
    rows?: number | string
    /** Option list for rows count select / Список вариантов количества строк */
    menuRows?: number[]

    /** Number of visible page links / Количество отображаемых ссылок на страницы */
    visible?: number
    /** Whether to hide pagination if only one page exists / Скрывать ли пагинацию, если страница всего одна */
    hideIfOne?: boolean
    /** Whether to show the page navigation buttons / Показывать ли панель с кнопками страниц */
    showPagination?: boolean
    /** Whether to show the next and back buttons / Показывать ли кнопки «Назад» и «Вперед» */
    showArrows?: boolean
    /** Whether to show the first and last page buttons / Показывать ли кнопки перехода к первой и последней страницам */
    showFirstLast?: boolean
    /** Whether to show "Show more" button / Показывать ли кнопку "Показать еще" */
    showMore?: boolean
    /** Whether to show page range information / Показывать ли информацию о диапазоне страниц */
    showInfo?: boolean
    /** Whether to show the text rows per page / Показывать ли текст количества строк на странице */
    showRowsPerPageLabel?: boolean

    /** Icon for down arrow / Иконка для стрелки вниз */
    iconArrowDown?: IconValue<Icon>
    /** Icon for the first arrow / Иконка для первой страницы */
    iconArrowFirst?: IconValue<Icon>
    /** Icon for the last arrow / Иконка для последней страницы */
    iconArrowLast?: IconValue<Icon>
    /** Icon for the left arrow / Иконка для стрелки влево */
    iconArrowLeft?: IconValue<Icon>
    /** Icon for the right arrow / Иконка для стрелки вправо */
    iconArrowRight?: IconValue<Icon>

    /** Custom attributes for button components / Пользовательские атрибуты для кнопок */
    buttonAttrs?: ConstrBind<Button>
    /** Custom attributes for more button component / Пользовательские атрибуты для кнопки "Показать еще" */
    buttonMoreAttrs?: ConstrBind<Button>
    /** Custom attributes for menu button component / Пользовательские атрибуты для кнопки меню */
    buttonMenuAttrs?: ConstrBind<Button>
    /** Custom attributes for menu component / Пользовательские атрибуты для меню */
    menuAttrs?: ConstrBind<Menu>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type PaginationProps = PaginationPropsBasic & PaginationPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsPagination = {
  iconArrowDown: 'arrow_drop_down',
  iconArrowFirst: 'first_page',
  iconArrowLast: 'last_page',
  iconArrowLeft: 'chevron_left',
  iconArrowRight: 'chevron_right',
  showPagination: true,
  showArrows: true,
  showFirstLast: true,
  showRowsPerPageLabel: true,
  value: 1,
  visible: 3,
  hideIfOne: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
