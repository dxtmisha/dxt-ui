import { computed as h, shallowRef as g } from "vue";
import { toCamelCase as l, executeFunction as s } from "@dxtmisha/functional";
var u = Object.defineProperty, x = (r, e, t) => e in r ? u(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e, t) => x(r, typeof e != "symbol" ? e + "" : e, t);
const o = class i {
  /**
   * Constructor
   * @param props Component properties/ Свойства компонента
   */
  constructor(e) {
    a(this, "texts", {}), this.props = e;
  }
  /**
   * Initialize global texts.
   *
   * Инициализация глобальных текстов.
   * @param texts List of texts/ Список текстов
   */
  static initText(e) {
    this.list.value = {
      ...this.list.value,
      ...e
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
  /** Hide text/ Текст скрытия */
  get hide() {
    return this.get("textHide");
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
  /** Show text/ Текст показа */
  get show() {
    return this.get("textShow");
  }
  /**
   * Get the text by its name.
   *
   * Получить текст по его названию.
   * @param name property name/ название свойства
   */
  get(e) {
    if (e in this.texts)
      return this.texts[e];
    const t = l(
      String(e).replace("text", "")
    ), c = h(
      () => {
        var n;
        return this.getText(t, (n = this.props) == null ? void 0 : n[e]);
      }
    );
    return this.texts[e] = c;
  }
  /**
   * Get text by index, with priority to local value.
   *
   * Получение текста по индексу с приоритетом локального значения.
   * @param index Text index/ Индекс текста
   * @param value Local text value/ Локальное значение текста
   */
  getText(e, t) {
    return t ? s(t) : this.getGlobalText(e);
  }
  /**
   * Get text from global list.
   *
   * Получение текста из глобального списка.
   * @param index Text index/ Индекс текста
   */
  getGlobalText(e) {
    var t;
    if ((t = i.list.value) != null && t[e])
      return s(i.list.value[e]);
  }
};
a(o, "list", g({
  cancel: "Cancel",
  characterLimit: "Character limit exceeded",
  characterRemaining: "Remaining [left] characters",
  close: "Close",
  copiedClipboard: "Copied to the clipboard",
  decrement: "Decrease",
  entriesMatch: "Entries do not match",
  hide: "Hide",
  increment: "Increase",
  loading: "Loading",
  next: "Next",
  ok: "OK",
  previous: "Previous",
  show: "Show"
}));
let p = o;
export {
  p as a
};
