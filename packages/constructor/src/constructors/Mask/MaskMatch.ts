import { MaskSpecial } from './MaskSpecial'
import { isString } from '@dxt-ui/functional'

import type { MaskMatchItem } from './basicTypes'
import type { MaskProps } from './props'

const MATCH_DEFAULT = /[0-9]/

/**
 * Class for checking an incoming character.
 *
 * Класс для проверки входящего символа.
 */
export class MaskMatch {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param special special symbols helper/ объект помощник специальных символов
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly special: MaskSpecial
  ) {
  }

  /**
   * Checks whether the character matches allowed pattern(s).
   *
   * Проверяет, соответствует ли символ разрешённому шаблону.
   * @param char character to check/ символ для проверки
   * @param groupName optional group name/ необязательное имя группы
   */
  is(
    char: string,
    groupName?: string
  ): boolean {
    const match = this.get(groupName)

    if (match instanceof RegExp) {
      return Boolean(char.match(match))
    }

    if (isString(match)) {
      return Boolean(char.match(new RegExp(match)))
    }

    return Boolean(char.match(MATCH_DEFAULT))
  }

  /**
   * Returns match definition (regexp or string) for group or global.
   *
   * Возвращает правило проверки (regexp или строка) для группы или глобально.
   * @param groupName group name/ имя группы
   */
  get(groupName?: string): MaskMatchItem {
    return (groupName && this.special.getMatch(groupName)) ?? this.props.match ?? MATCH_DEFAULT
  }

  /**
   * Filters text returning only allowed characters (any group).
   *
   * Фильтрует текст, возвращая только допустимые символы (любая группа).
   * @param text source text/ исходный текст
   */
  filter(text: string): string[] {
    const special = this.special.item.value

    return text
      .split('')
      .filter(char => special.find(groupName => this.is(char, groupName)))
  }
}
