import type { FieldBasicExpose, FieldValidationItem } from '../../types/fieldTypes'

/** Form submission HTTP method / HTTP-метод для отправки формы */
export type FormMethod = 'get' | 'post' | 'dialog' | string

/** Form data encoding type / Тип кодирования данных формы */
export type FormEnctype = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | string

/** Target browsing context for form submission / Контекст перехода для отправки формы */
export type FormTarget = '_self' | '_blank' | '_parent' | '_top' | string

/** Form element registration provide name / Название provide для регистрации элемента формы */
export const FORM_NAME_ELEMENT = 'form-element'

/**
 * Interface describing a form child element record /
 * Интерфейс, описывающий запись дочернего элемента формы
 */
export type FormElementItem<T = any> = FieldBasicExpose<T> & {
  /** Element name / Имя элемента */
  name: string
  /** Additional element validation and input data / Дополнительные данные валидации и ввода элемента */
  data?: FieldValidationItem<T>
}

/**
 * Form element registration callback function /
 * Функция обратного вызова для регистрации элемента формы
 */
export type FormElementRegister<T = any> = (element: FormElementItem<T>) => void

/**
 * Record of form elements validation data keyed by element name /
 * Объект данных валидации элементов формы, где ключами являются имена элементов
 */
export type FormElementsData<T = any> = Record<string, FieldValidationItem<T>>

/**
 * Record of form elements values keyed by element name /
 * Объект значений элементов формы, где ключами являются имена элементов
 */
export type FormElementsValues = Record<string, any>
