import {
  type ShallowRef,
  shallowRef,
  watch
} from 'vue'
import { Translate, type TranslateInstance, type TranslateList } from '@dxtmisha/functional-basic'

import { GeoRef } from '../../classes/ref/GeoRef'

/**
 * Getting the translated text by an array of keys or a string with a key.
 *
 * It returns a `ShallowRef` that automatically updates when the global language changes.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * ---
 *
 * Получение переведенного текста по массиву ключей или пункту с ключом.
 *
 * Возвращает `ShallowRef`, который автоматически обновляется при смене глобального языка.
 * Используйте `as const` для массивов, чтобы обеспечить корректный вывод типов ключей в TypeScript.
 *
 * ### Examples / Примеры использования:
 * ```typescript
 * // 1. Using the main composable / Использование основного хука
 * const translations = useTranslateRef(['home.title', 'home.description'] as const);
 *
 * // 2. Using the shorthand 't' / Использование сокращения 't'
 * const labels = t(['button.save', 'button.cancel'] as const);
 * ```
 *
 * @param names a string or an array with keys / строка или массив с ключами
 * @param translateInstance a translate instance / экземпляр перевода
 */
export function useTranslateRef<
  T extends (string | string[])[]
>(
  names: T,
  translateInstance: TranslateInstance = Translate.getItem()
): ShallowRef<TranslateList<T>> {
  /**
   * Reactive reference to translations / Реактивная ссылка на переводы
   */
  const translate = shallowRef<TranslateList<T>>(translateInstance.getListSync(names, true))

  /**
   * Updating translations for the current list.
   *
   * Обновление переводов для текущего списка.
   */
  const update = async () => {
    translate.value = { ...await translateInstance.getList(names) }
  }

  watch(GeoRef.getLanguage(), update)

  for (const key in translate.value) {
    if (
      translate.value[key] === key
      || translate.value[key] === ' '
    ) {
      update().then()
      break
    }
  }

  return translate
}

/**
 * Shorthand for useTranslateRef.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * ---
 *
 * Сокращение для useTranslateRef.
 * Используйте `as const` для массивов, чтобы обеспечить корректный вывод типов ключей в TypeScript.
 *
 * @param names a string or an array with keys / строка или массив с ключами
 */
export const t = <T extends string[]>(names: T) => useTranslateRef(names)
