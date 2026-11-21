import type { GeoPhoneMapInfoFull } from '@dxtmisha/functional'

/** Output value format mode for InputPhone v-model and getValue() / Формат выходного значения для v-model и getValue() */
export type InputPhoneFormatOutput = 'mask' | 'e164' | 'digits'

/**
 * Resolved phone country and formatted value.
 *
 * Определённый код страны и отформатированный номер телефона.
 */
export interface InputPhoneResolved {
  /** Resolved country code / Определённый код страны */
  country: string
  /** Formatted full phone number / Отформатированный полный номер телефона */
  format: string
}

/**
 * Phone metadata context exposed in events, validation, and component API.
 * Preserves the original `GeoPhoneMapInfoFull` structure (`item`, `phone`, `full`, `format`) with mask completeness state.
 *
 * Контекст метаданных телефона, передаваемый в события, валидацию и API компонента.
 * Сохраняет оригинальную структуру `GeoPhoneMapInfoFull` (`item`, `phone`, `full`, `format`) с флагом полноты маски.
 */
export interface InputPhoneDetail extends GeoPhoneMapInfoFull {
  /** Whether the entered phone matches a complete mask / Заполнен ли номер полностью по маске */
  isFull: boolean
}

/**
 * Context passed to custom phone validation callbacks.
 *
 * Контекст, передаваемый в функции пользовательской валидации номера телефона.
 */
export interface InputPhoneValidationContext extends InputPhoneDetail {
  /** Checked phone value / Проверяемое значение телефона */
  value: string
}

/**
 * Single pattern or custom validator rule for phone validation.
 * Returning `true` or an empty string passes validation; returning `false` uses the default invalid phone message;
 * returning a non-empty string uses that string as the validation error message.
 *
 * Правило валидации номера телефона в виде шаблона или пользовательской функции.
 * Возврат `true` или пустой строки означает успешную проверку; `false` — ошибку со стандартным сообщением;
 * непустая строка используется как текст ошибки валидации.
 */
export type InputPhoneMatchRule
  = string
    | RegExp
    | ((context: InputPhoneValidationContext) => boolean | string)

/**
 * Country-specific map of phone validation rules or a global rule/validator.
 *
 * Карта правил валидации по ISO-кодам стран или глобальное правило/валидатор.
 */
export type InputPhoneMatch
  = InputPhoneMatchRule
    | Record<string, InputPhoneMatchRule>
