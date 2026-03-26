import { watch as n, isRef as h, isReadonly as l } from "vue";
import { toCamelCaseFirst as u, toCamelCase as r, isFunction as d } from "@dxtmisha/functional";
var m = Object.defineProperty, o = (t, e, i) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, c = (t, e, i) => o(t, e + "", i);
class y {
  /**
   * Constructor
   * @param index The index key for the model property/ Ключ индекса для свойства модели
   * @param emits Function to emit events/ Функция для испускания событий
   * @param syncValue Reactive value to synchronize/ Реактивное значение для синхронизации
   */
  constructor(e, i, s) {
    c(this, "update", (a) => {
      this.isValue() && (this.syncValue.value = a);
    }), this.index = e, this.emits = i, this.syncValue = s, s && n(s, (a) => {
      this.emit(a);
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
    return h(this.syncValue) && !l(this.syncValue);
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
      const e = u(this.index);
      return {
        [`model${e}`]: this.syncValue.value,
        [`onUpdate:${r(this.index)}`]: this.update,
        [`onUpdate:model${e}`]: this.update
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
  emit(e) {
    d(this.emits) && (this.emits(`update:${r(this.index)}`, e), this.emits(`update:model${u(this.index)}`, e));
  }
}
export {
  y as V
};
