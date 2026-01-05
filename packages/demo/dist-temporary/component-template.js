class DataProcessor {
  data = [];
  isProcessing = false;
  constructor(initialData = []) {
    this.data = [...initialData];
  }
  async loadData(source) {
    this.isProcessing = true;
    try {
      const newData = await source();
      this.data = [...this.data, ...newData];
    } finally {
      this.isProcessing = false;
    }
  }
  processData(processor) {
    this.data = this.data.map(processor);
  }
  filterData(predicate) {
    this.data = this.data.filter(predicate);
  }
  sortData(comparator) {
    this.data.sort(comparator);
  }
  exportData() {
    return [...this.data];
  }
  clearData() {
    this.data = [];
  }
  getStats() {
    return {
      count: this.data.length,
      processing: this.isProcessing
    };
  }
}
export {
  DataProcessor
};
//# sourceMappingURL=component-template.js.map
