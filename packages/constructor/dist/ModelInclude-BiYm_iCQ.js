var u = Object.defineProperty;
var m = (i, t, e) => t in i ? u(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => m(i, typeof t != "symbol" ? t + "" : t, e);
import { watch as o, isRef as l, isReadonly as r } from "vue";
import { toCamelCaseFirst as n, toCamelCase as d, isFunction as c } from "@dxtmisha/functional";
class V {
  /**
   * Constructor
   * @param index The index key for the model property/ Ключ индекса для свойства модели
   * @param emits Function to emit events/ Функция для испускания событий
   * @param syncValue Reactive value to synchronize/ Реактивное значение для синхронизации
   */
  constructor(t, e, s) {
    /**
     * Updates the synchronized value.
     * Sets the value of the reactive reference if it's a mutable Ref.
     *
     * Обновляет синхронизированное значение.
     * Устанавливает значение реактивной ссылки, если это изменяемый Ref.
     * @param value The new value to set/ Новое значение для установки
     */
    a(this, "update", (t) => {
      this.isValue() && (this.syncValue.value = t);
    });
    this.index = t, this.emits = e, this.syncValue = s, s && o(s, (h) => {
      this.emit(h);
    }, { immediate: !0 });
  }
  /**
   * Type guard to check if syncValue is a mutable Ref.
   * Returns true if syncValue is a reference and not readonly.
   *
   * Проверка типа, является ли syncValue изменяемым Ref.
   * Возвращает true, если syncValue является ссылкой и не readonly.
   * @returns Type predicate indicating syncValue is a mutable Ref/ Предикат типа, указывающий что syncValue - изменяемый Ref
   */
  isValue() {
    return l(this.syncValue) && !r(this.syncValue);
  }
  /**
   * Generates binding object for v-model integration.
   * Creates properties for two-way data binding with model and update handlers.
   *
   * Генерирует объект привязок для интеграции v-model.
   * Создает свойства для двусторонней привязки данных с обработчиками модели и обновления.
   * @returns Object with model value and update handlers/ Объект со значением модели и обработчиками обновления
   */
  getBinds() {
    if (this.isValue()) {
      const t = n(this.index);
      return {
        [`model${t}`]: this.syncValue.value,
        [`onUpdate:${d(this.index)}`]: this.update,
        [`onUpdate:model${t}`]: this.update
      };
    }
    return {};
  }
  /**
   * Emits an event to update the model value.
   * Triggers the corresponding update event with the new value.
   *
   * Испускает событие для обновления значения модели.
   * Запускает соответствующее событие обновления с новым значением.
   * @param value The new value to set/ Новое значение для установки
   */
  emit(t) {
    c(this.emits) && (this.emits(`update:${d(this.index)}`, t), this.emits(`update:model${n(this.index)}`, t));
  }
}
export {
  V as M
};
