import type { IconPropsBasic } from '../Icon'
import type { FieldPropsBasic, FieldPropsInclude } from '../Field'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic } from '../Progress'

import type {
  FieldBasicProps,
  FieldLengthProps,
  FieldUxProps
} from '../../types/fieldTypes'
import type { TextSearchPropsInclude } from '../../types/textTypes'

export type InputSearchPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type InputSearchPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>
  & TextSearchPropsInclude
  & Omit<FieldBasicProps<string>, 'type'>
  & FieldLengthProps
  & FieldUxProps
  & {
    /** HTML input type / HTML тип поля ввода */
    type?: 'search' | 'text'

    /**
     * Minimum number of characters to trigger search /
     * Минимальное количество символов для запуска поиска
     */
    minQuery?: number

    /**
     * Debounce delay in milliseconds before search is triggered /
     * Время задержки в миллисекундах перед запуском поиска
     */
    delay?: number
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputSearchProps = InputSearchPropsBasic & InputSearchPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputSearch = {
  type: 'search',
  autocomplete: 'off',
  autocapitalize: 'off',
  autocorrect: 'off',
  spellcheck: false,
  enterKeyHint: 'search',
  inputMode: 'search',
  cancel: true,
  icon: 'search',
  minQuery: 2,
  delay: 320,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
