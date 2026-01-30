var a = Object.defineProperty;
var h = (o, t, e) => t in o ? a(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var i = (o, t, e) => h(o, typeof t != "symbol" ? t + "" : t, e);
import { shallowRef as c, computed as s } from "vue";
import { executeFunction as l } from "@dxtmisha/functional";
const r = class r {
  /**
   * Constructor
   * @param props Component properties/ Свойства компонента
   */
  constructor(t) {
    /** Close text/ Текст закрытия */
    i(this, "close", s(
      () => this.getText("close", this.props.textClose)
    ));
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    i(this, "copiedClipboard", s(
      () => this.getText("copiedClipboard", this.props.textCopiedClipboard)
    ));
    /** Entries match text/ Текст о несовпадении записей */
    i(this, "entriesMatch", s(
      () => this.getText("entriesMatch", this.props.textEntriesMatch)
    ));
    /** Loading text/ Текст загрузки */
    i(this, "loading", s(
      () => this.getText("loading", this.props.textLoading)
    ));
    /** OK text/ Текст подтверждения */
    i(this, "ok", s(
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
    return e ? l(e) : this.getGlobalText(t);
  }
  /**
   * Get text from global list.
   *
   * Получение текста из глобального списка.
   * @param index Text index/ Индекс текста
   */
  getGlobalText(t) {
    var e;
    if ((e = r.list.value) != null && e[t])
      return l(r.list.value[t]);
  }
};
/**
 * Global list of texts for all components/ Глобальный список текстов для всех компонентов
 */
i(r, "list", c({
  close: "Close",
  copiedClipboard: "Copied to the clipboard",
  entriesMatch: "Entries do not match",
  loading: "Loading",
  ok: "OK"
}));
let p = r;
export {
  p as T
};
