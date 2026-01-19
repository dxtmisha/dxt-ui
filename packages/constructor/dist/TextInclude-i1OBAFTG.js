var a = Object.defineProperty;
var h = (o, t, e) => t in o ? a(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var i = (o, t, e) => h(o, typeof t != "symbol" ? t + "" : t, e);
import { shallowRef as c, computed as r } from "vue";
import { executeFunction as p } from "@dxtmisha/functional";
const s = class s {
  /**
   * Constructor
   * @param props Component properties/ Свойства компонента
   */
  constructor(t) {
    /** Close text/ Текст закрытия */
    i(this, "close", r(
      () => this.getText("close", this.props.textClose)
    ));
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    i(this, "copiedClipboard", r(
      () => this.getText("copiedClipboard", this.props.textCopiedClipboard)
    ));
    /** Entries match text/ Текст о несовпадении записей */
    i(this, "entriesMatch", r(
      () => this.getText("entriesMatch", this.props.textEntriesMatch)
    ));
    /** OK text/ Текст подтверждения */
    i(this, "ok", r(
      () => this.getText("ok", this.props.textOk)
    ));
    this.props = t;
  }
  /**
   * Initialize global texts.
   *
   * Инициализация глобальных текстов.
   * @param texts List of texts/ Список текстов
   */
  static initText(t) {
    this.list.value = {
      ...this.list.value,
      ...t
    };
  }
  /**
   * Get text by index, with priority to local value.
   *
   * Получение текста по индексу с приоритетом локального значения.
   * @param index Text index/ Индекс текста
   * @param value Local text value/ Локальное значение текста
   */
  getText(t, e) {
    return e ? p(e) : this.getGlobalText(t);
  }
  /**
   * Get text from global list.
   *
   * Получение текста из глобального списка.
   * @param index Text index/ Индекс текста
   */
  getGlobalText(t) {
    var e;
    if ((e = s.list.value) != null && e[t])
      return p(s.list.value[t]);
  }
};
/**
 * Global list of texts for all components/ Глобальный список текстов для всех компонентов
 */
i(s, "list", c({
  close: "Close",
  copiedClipboard: "Copied to the clipboard",
  entriesMatch: "Entries do not match",
  ok: "OK"
}));
let l = s;
export {
  l as T
};
