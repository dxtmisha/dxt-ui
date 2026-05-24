import type { ConstrBind } from "@dxtmisha/functional"

import type { IconPropsBasic, IconValue } from "../Icon"
import type { InputPropsBasic } from "../Input"

export type MenuButtonPropsTool<
    Icon extends IconPropsBasic = IconPropsBasic,
    Input extends InputPropsBasic = InputPropsBasic
> = {
    // Value
    /** Separator for the displayed labels of the selected values/ Разделитель отображаемых меток выбранных значений */
    labelSeparator?: string

    /** Icon displayed in the button when a value is selected/ Иконка, отображаемая в кнопке при выборе значения */
    icon?: IconValue<Icon>

    // Style
    /** Whether to hide the label when a value is selected/ Скрывать ли метку, если выбрано значение */
    hideLabelValue?: boolean
    /** Whether to hide the value if an icon is present / Скрывать ли значение, если присутствует иконка */
    hideValueIcon?: boolean
    /** Whether to hide the list/ Скрывать ли список */
    hideList?: boolean
    /** Whether to show the search input/ Показывать ли поле поиска */
    showSearch?: boolean
    /** Whether to enabled filtering mode/ Включен ли режим фильтрации */
    filterMode?: boolean

    /** Icon for the down arrow/ Иконка для стрелки вниз */
    iconArrowDown?: IconValue<Icon>
    /** Icon for the search/ Иконка для поиска */
    iconSearch?: IconValue<Icon>

    /** Additional attributes for the search input/ Дополнительные атрибуты для поля поиска */
    inputSearchAttrs?: ConstrBind<Input>
}