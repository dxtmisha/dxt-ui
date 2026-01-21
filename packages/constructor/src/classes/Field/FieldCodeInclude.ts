import type { FieldAllProps } from '../../types/fieldTypes'

/**
 * Class for processing standard error text
 *
 * Класс для обработки стандартного текста ошибки
 */
export class FieldCodeInclude {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: FieldAllProps
  ) {
  }

  /**
   * Returns error text
   *
   * Возвращает текст ошибки
   * @param state object with validity state/ объект с данными валидности
   */
  get(state?: ValidityState): string | undefined {
    const validationCode = this.props.validationCode

    if (
      state
      && validationCode
      && !state.valid
    ) {
      if (typeof validationCode === 'string') {
        return validationCode
      } else {
        const index = this.getIndex(state)

        if (
          index
          && index in validationCode
        ) {
          return validationCode[index]
        }
      }
    }

    return undefined
  }

  /**
   * Returns error key (first matched)
   *
   * Возвращает ключ ошибки (первый найденный)
   * @param state object with validity state/ объект с данными валидности
   */
  protected getIndex(state: ValidityState): keyof ValidityState | undefined {
    const data = Object.entries(state) as ([keyof ValidityState, boolean])[]

    for (const [code, value] of data) {
      if (
        code !== 'valid'
        && value
      ) {
        return code
      }
    }

    return undefined
  }
}
