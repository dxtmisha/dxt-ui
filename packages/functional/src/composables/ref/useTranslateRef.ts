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
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys/ строка или массив с ключами
 * @param translateInstance a translate instance/ экземпляр перевода
 */
export function useTranslateRef<
  T extends (string | string[])[]
>(
  names: T,
  translateInstance: TranslateInstance = Translate.getItem()
): ShallowRef<TranslateList<T>> {
  const translate = shallowRef<TranslateList<T>>(translateInstance.getListSync(names, true))

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
 * Getting the translated text by an array of keys or a string with a key.
 *
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys/ строка или массив с ключами
 */
export const t = <T extends string[]>(names: T) => useTranslateRef(names)
