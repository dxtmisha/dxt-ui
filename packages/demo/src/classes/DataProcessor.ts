export class DataProcessor<T = any> {
  private data: T[] = []
  private isProcessing: boolean = false

  constructor(initialData: T[] = []) {
    this.data = [...initialData]
  }

  async loadData(source: () => Promise<T[]>): Promise<void> {
    this.isProcessing = true
    try {
      const newData = await source()
      this.data = [...this.data, ...newData]
    } finally {
      this.isProcessing = false
    }
  }

  processData(processor: (item: T) => T): void {
    this.data = this.data.map(processor)
  }

  filterData(predicate: (item: T) => boolean): void {
    this.data = this.data.filter(predicate)
  }

  sortData(comparator: (a: T, b: T) => number): void {
    this.data.sort(comparator)
  }

  exportData(): T[] {
    return [...this.data]
  }

  clearData(): void {
    this.data = []
  }

  getStats(): { count: number, processing: boolean } {
    return {
      count: this.data.length,
      processing: this.isProcessing
    }
  }
}
