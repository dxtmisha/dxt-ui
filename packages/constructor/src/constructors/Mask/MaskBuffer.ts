// ai-none

/**
 * Class for temporary storage of entered symbols to keep input position during fast typing.
 *
 * Класс для временного хранения вводимых символов, чтобы не терять позицию ввода при быстром наборе.
 */
export class MaskBuffer {
  /** Stored characters/ Сохранённые символы */
  protected chars: string[] = []
  /** Flag: buffering started/ Флаг: буферизация запущена */
  protected start: boolean = false

  /**
   * Checks if buffer has records.
   *
   * Проверяет, есть ли записи в буфере.
   * @returns true if buffer has characters / true, если в буфере есть символы
   */
  is(): boolean {
    return this.chars.length > 0
  }

  /**
   * Returns list of all buffered chars.
   *
   * Возвращает список всех символов в буфере.
   * @returns list of buffered characters / список символов в буфере
   */
  get(): string[] {
    return this.chars
  }

  /**
   * Adds new symbol to buffer.
   *
   * Добавляет новый символ в буфер.
   * @param key symbol to add / символ для добавления
   * @returns current instance / текущий экземпляр
   */
  add(key: string): this {
    this.chars.push(key)
    return this
  }

  /**
   * Resets all data (chars + start flag).
   *
   * Сбрасывает все данные (символы и флаг запуска).
   * @returns current instance / текущий экземпляр
   */
  reset(): this {
    this.resetChars()
    this.start = false

    return this
  }

  /**
   * Clears stored characters only.
   *
   * Очищает только сохранённые символы.
   * @returns current instance / текущий экземпляр
   */
  resetChars(): this {
    this.chars = []
    return this
  }

  /**
   * Handles fast input: if buffering active — adds symbol, else starts buffering.
   *
   * Обрабатывает быстрый ввод: если буфер активен — добавляет символ, иначе запускает буферизацию.
   * @param key symbol to process / символ для обработки
   * @returns true if processing should continue outside buffer / true если ввод продолжается вне буфера
   */
  go(key: string): boolean {
    if (this.start) {
      this.add(key)
      return false
    }

    this.goStart()
    return true
  }

  /**
   * Starts buffering.
   *
   * Запускает буферизацию.
   * @returns current instance / текущий экземпляр
   */
  goStart(): this {
    this.start = true
    return this
  }
}
