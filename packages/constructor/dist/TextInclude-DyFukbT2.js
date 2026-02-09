var g = Object.defineProperty;
var h = (r, t, e) => t in r ? g(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => h(r, typeof t != "symbol" ? t + "" : t, e);
import { shallowRef as l, computed as u } from "vue";
import { toCamelCase as x, executeFunction as a } from "@dxtmisha/functional";
const i = class i {
  /**
   * Constructor
   * @param props Component properties/ Свойства компонента
   */
  constructor(t) {
    s(this, "texts", {});
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
  /** Cancel text/ Текст отмены */
  get cancel() {
    return this.get("textCancel");
  }
  /** Character limit exceeded text/ Текст о превышении лимита символов */
  get characterLimit() {
    return this.get("textCharacterLimit");
  }
  /** Remaining characters text/ Текст об оставшихся символах */
  get characterRemaining() {
    return this.get("textCharacterRemaining");
  }
  /** Close text/ Текст закрытия */
  get close() {
    return this.get("textClose");
  }
  /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
  get copiedClipboard() {
    return this.get("textCopiedClipboard");
  }
  /** Text for decreasing value/ Текст для уменьшения значения */
  get decrement() {
    return this.get("textDecrement");
  }
  /** Entries match text/ Текст о несовпадении записей */
  get entriesMatch() {
    return this.get("textEntriesMatch");
  }
  /** Text for increasing value/ Текст для увеличения значения */
  get increment() {
    return this.get("textIncrement");
  }
  /** Loading text/ Текст загрузки */
  get loading() {
    return this.get("textLoading");
  }
  /** Next text/ Текст следующего */
  get next() {
    return this.get("textNext");
  }
  /** OK text/ Текст подтверждения */
  get ok() {
    return this.get("textOk");
  }
  /** Previous text/ Текст предыдущего */
  get previous() {
    return this.get("textPrevious");
  }
  /**
   * Get the text by its name.
   *
   * Получить текст по его названию.
   * @param name property name/ название свойства
   */
  get(t) {
    if (t in this.texts)
      return this.texts[t];
    const e = x(
      String(t).replace("text", "")
    ), o = u(
      () => {
        var n;
        return this.getText(e, (n = this.props) == null ? void 0 : n[t]);
      }
    );
    return this.texts[t] = o;
  }
  /**
   * Get text by index, with priority to local value.
   *
   * Получение текста по индексу с приоритетом локального значения.
   * @param index Text index/ Индекс текста
   * @param value Local text value/ Локальное значение текста
   */
  getText(t, e) {
    return e ? a(e) : this.getGlobalText(t);
  }
  /**
   * Get text from global list.
   *
   * Получение текста из глобального списка.
   * @param index Text index/ Индекс текста
   */
  getGlobalText(t) {
    var e;
    if ((e = i.list.value) != null && e[t])
      return a(i.list.value[t]);
  }
};
/**
 * Global list of texts for all components/ Глобальный список текстов для всех компонентов
 */
s(i, "list", l({
  cancel: "Cancel",
  characterLimit: "Character limit exceeded",
  characterRemaining: "Remaining [left] characters",
  close: "Close",
  copiedClipboard: "Copied to the clipboard",
  decrement: "Decrease",
  entriesMatch: "Entries do not match",
  increment: "Increase",
  loading: "Loading",
  next: "Next",
  ok: "OK",
  previous: "Previous"
}));
let c = i;
export {
  c as T
};
