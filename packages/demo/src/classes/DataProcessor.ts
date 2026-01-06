/**
 * Класс для управления, фильтрации и преобразования массивов данных.
 * Поддерживает асинхронную загрузку и отслеживание состояния выполнения операций.
 *
 * @template T Тип элементов данных.
 */
export class DataProcessor<T = any> {
  /** Внутреннее хранилище данных */
  private data: T[] = []
  /** Флаг активного процесса загрузки */
  private isProcessing: boolean = false

  /**
   * Инициализирует экземпляр класса начальными данными.
   * @param initialData Начальный массив элементов.
   */
  constructor(initialData: T[] = []) {
    this.data = [...initialData]
  }

  /**
   * Асинхронно загружает данные из предоставленного источника и добавляет их к существующим.
   * Во время выполнения устанавливает флаг `isProcessing` в true.
   * @param source Функция-загрузчик, возвращающая Promise с массивом данных.
   */
  async loadData(source: () => Promise<T[]>): Promise<void> {
    this.isProcessing = true
    try {
      const newData = await source()
      this.data = [...this.data, ...newData]
    } finally {
      this.isProcessing = false
    }
  }

  /**
   * Преобразует каждый элемент в массиве с помощью функции-процессора.
   * @param processor Функция, принимающая элемент и возвращающая его измененную версию.
   */
  processData(processor: (item: T) => T): void {
    this.data = this.data.map(processor)
  }

  /**
   * Удаляет элементы из массива, которые не соответствуют заданному условию.
   * @param predicate Функция для проверки каждого элемента.
   */
  filterData(predicate: (item: T) => boolean): void {
    this.data = this.data.filter(predicate)
  }

  /**
   * Сортирует текущие данные на основе функции сравнения.
   * @param comparator Функция, определяющая порядок сортировки.
   */
  sortData(comparator: (a: T, b: T) => number): void {
    this.data.sort(comparator)
  }

  /**
   * Возвращает копию текущего набора данных.
   * @returns Новый массив с текущими данными.
   */
  exportData(): T[] {
    return [...this.data]
  }

  /**
   * Очищает внутреннее хранилище данных.
   */
  clearData(): void {
    this.data = []
  }

  /**
   * Возвращает объект со статистикой текущего состояния.
   * @returns Объект с количеством элементов и статусом обработки.
   */
  getStats(): { count: number, processing: boolean } {
    return {
      count: this.data.length,
      processing: this.isProcessing
    }
  }
}
