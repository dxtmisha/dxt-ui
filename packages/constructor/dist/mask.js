var z = Object.defineProperty;
var J = (h, t, e) => t in h ? z(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var a = (h, t, e) => J(h, typeof t != "symbol" ? t + "" : t, e);
import { computed as u, ref as S, watch as y, h as d } from "vue";
import { forEach as x, getExp as W, strFill as B, Datetime as L, GeoIntl as X, isArray as k, isObject as Z, isObjectNotArray as C, isString as D, isSelected as tt, replaceRecursive as et, getColumn as it, getMaxLengthAllArray as st, toArray as rt, isFilled as at, writeClipboardData as ht, eventStopPropagation as nt, getClipboardData as ut, GeoRef as lt, anyToString as T, isFloat as ct, DesignConstructorAbstract as ot, toBinds as pt } from "@dxtmisha/functional";
import { F as v } from "./FieldInputCheckInclude-CjNYyGTb.js";
import { A as mt } from "./AriaStaticInclude-ZrgMZ2ja.js";
class ft {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    /** Current mask type (default: text)/ Текущий тип маски (по умолчанию: text) */
    a(this, "item", u(() => {
      var t;
      return (t = this.props.type) != null ? t : "text";
    }));
    this.props = t;
  }
  /**
   * Is the mask simple number type.
   *
   * Является ли маска простым числовым типом (number).
   */
  isNumber() {
    return this.item.value === "number";
  }
  /**
   * Is the mask formatted number type (number-format).
   *
   * Является ли маска типом форматированного числа (number-format).
   */
  isNumberFormat() {
    return this.item.value === "number-format";
  }
  /**
   * Is the mask currency type.
   *
   * Является ли маска валютным типом (currency).
   */
  isCurrency() {
    return this.item.value === "currency";
  }
  /**
   * Is the mask one of numeric related types (number | number-format | currency).
   *
   * Является ли маска одним из числовых типов (number | number-format | currency).
   */
  isCurrencyOrNumber() {
    return this.isNumber() || this.isNumberFormat() || this.isCurrency();
  }
  /**
   * Is the mask one of the time input types.
   *
   * Является ли маска одним из типов для ввода времени.
   */
  isTime() {
    return [
      "full",
      "datetime",
      "time",
      "hour-minute",
      "hour",
      "minute",
      "second"
    ].indexOf(this.item.value) !== -1;
  }
  /**
   * Is the mask one of the date (or time) input types.
   *
   * Является ли маска одним из типов для ввода даты (или времени).
   */
  isDate() {
    return this.isTime() || [
      "date",
      "year",
      "year-month",
      "month",
      "day",
      "day-month"
    ].indexOf(this.item.value) !== -1;
  }
  /**
   * Returns GeoDate-compatible mask type (fallback: date).
   *
   * Возвращает тип маски совместимый с GeoDate (если нет — date).
   */
  getByDate() {
    return this.isDate() ? this.item.value : "date";
  }
}
class gt {
  constructor() {
    /** Stored characters/ Сохранённые символы */
    a(this, "chars", []);
    /** Flag: buffering started/ Флаг: буферизация запущена */
    a(this, "start", !1);
  }
  /**
   * Checks if buffer has records.
   *
   * Проверяет, есть ли записи в буфере.
   */
  is() {
    return this.chars.length > 0;
  }
  /**
   * Returns list of all buffered chars.
   *
   * Возвращает список всех символов в буфере.
   */
  get() {
    return this.chars;
  }
  /**
   * Adds new symbol to buffer.
   *
   * Добавляет новый символ в буфер.
   * @param key symbol to add / символ для добавления
   */
  add(t) {
    return this.chars.push(t), this;
  }
  /**
   * Handles fast input: if buffering active — adds symbol, else starts buffering.
   *
   * Обрабатывает быстрый ввод: если буфер активен — добавляет символ, иначе запускает буферизацию.
   * @param key symbol to process / символ для обработки
   * @returns true if processing should continue outside buffer / true если ввод продолжается вне буфера
   */
  go(t) {
    return this.start ? (this.add(t), !1) : (this.goStart(), !0);
  }
  /**
   * Starts buffering.
   *
   * Запускает буферизацию.
   */
  goStart() {
    return this.start = !0, this;
  }
  /**
   * Resets all data (chars + start flag).
   *
   * Сбрасывает все данные (символы и флаг запуска).
   */
  reset() {
    return this.resetChars(), this.start = !1, this;
  }
  /**
   * Clears stored characters only.
   *
   * Очищает только сохранённые символы.
   */
  resetChars() {
    return this.chars = [], this;
  }
}
class dt {
  /**
   * Constructor
   * @param buffer buffer helper object/ объект помощник буфера
   */
  constructor(t) {
    /** Focus state flag/ Флаг состояния фокуса */
    a(this, "value", !1);
    this.buffer = t;
  }
  /**
   * Returns current focus state.
   *
   * Возвращает текущее состояние фокуса.
   */
  is() {
    return this.value;
  }
  /**
   * Sets focus state to active and resets buffer.
   *
   * Устанавливает состояние фокуса активным и сбрасывает буфер.
   */
  in() {
    this.value = !0, this.buffer.reset();
  }
  /**
   * Removes focus state and resets buffer.
   *
   * Снимает состояние фокуса и сбрасывает буфер.
   */
  out() {
    this.value = !1, this.buffer.reset();
  }
}
class vt {
  constructor() {
    /** Current length value/ Текущее значение длины */
    a(this, "length", S(0));
  }
  /**
   * Checks if there is at least one entered character.
   *
   * Проверяет, есть ли хотя бы один введённый символ.
   */
  is() {
    return this.length.value > 0;
  }
  /**
   * Returns current length.
   *
   * Возвращает текущую длину.
   */
  get() {
    return this.length.value;
  }
  /**
   * Sets new length value.
   *
   * Устанавливает новое значение длины.
   * @param length new length value / новое значение длины
   */
  set(t) {
    return this.length.value = t, this;
  }
}
class bt {
  constructor() {
    /** Map: group name -> entered length/ Карта: имя группы -> введённая длина */
    a(this, "item", S({}));
  }
  /**
   * Checks whether group has a non‑zero stored length.
   *
   * Проверяет, есть ли у группы ненулевая длина.
   * @param groupName group name / название группы
   */
  is(t) {
    var e;
    return Number((e = this.item.value) == null ? void 0 : e[t]) > 0;
  }
  /**
   * Returns stored length for group (0 if none).
   *
   * Возвращает сохранённую длину группы (0 если нет).
   * @param groupName group name / название группы
   */
  getByIndex(t) {
    var e, i;
    return (i = (e = this.item.value) == null ? void 0 : e[t]) != null ? i : 0;
  }
  /**
   * Increments stored length for group by 1.
   *
   * Увеличивает сохранённую длину группы на 1.
   * @param groupName group name / название группы
   */
  add(t) {
    return this.item.value = {
      ...this.item.value,
      [t]: this.getByIndex(t) + 1
    }, this;
  }
  /**
   * Decreases stored length for group by 1 (if > 0).
   *
   * Уменьшает сохранённую длину группы на 1 (если > 0).
   * @param groupName group name / название группы
   * @returns true if decreased / true если уменьшено
   */
  pop(t) {
    return this.is(t) ? (this.item.value = {
      ...this.item.value,
      [t]: this.getByIndex(t) - 1
    }, !0) : !1;
  }
  /**
   * Resets all stored lengths.
   *
   * Сбрасывает все сохранённые длины.
   */
  reset() {
    return this.item.value = {}, this;
  }
  /**
   * Expands mask by duplicating matched group placeholders according to stored lengths.
   *
   * Расширяет маску, дублируя плейсхолдеры групп по сохранённым длинам.
   * @param mask original mask / исходная маска
   */
  expandMask(t) {
    let e = t;
    return x(this.item.value, (i, s) => {
      e = e.replace(
        W(s, "g", "([:value]+)"),
        (r) => `${r}${B(s, i)}`
      );
    }), e;
  }
}
class yt {
  constructor() {
    /** Transition symbol value/ Значение символа перехода */
    a(this, "item", S(""));
  }
  /**
   * Checks if a transition symbol is set.
   *
   * Проверяет, установлен ли символ перехода.
   */
  is() {
    return this.item.value !== "";
  }
  /**
   * Checks if provided char equals current transition symbol.
   *
   * Проверяет, совпадает ли символ с текущим символом перехода.
   * @param char candidate char / проверяемый символ
   */
  isChar(t) {
    return this.item.value === t;
  }
  /**
   * Sets new transition symbol.
   *
   * Устанавливает новый символ перехода.
   * @param char transition symbol / символ перехода
   */
  set(t) {
    return this.item.value = t, this;
  }
  /**
   * Resets transition symbol to empty.
   *
   * Сбрасывает символ перехода в пустой.
   */
  reset() {
    return this.set("");
  }
}
const kt = {
  Y: "[0-9]{4}",
  M: {
    type: "number",
    min: "1",
    max: "12"
  },
  D: (h) => {
    var e, i, s, r;
    return {
      type: "number",
      min: "1",
      max: new L(`${(i = (e = h == null ? void 0 : h.Y) == null ? void 0 : e.value) != null ? i : "2000"}-${(r = (s = h == null ? void 0 : h.M) == null ? void 0 : s.value) != null ? r : "01"}-01`).getMaxDay().toString()
    };
  },
  h: {
    type: "number",
    min: "0",
    max: "23"
  },
  m: {
    type: "number",
    min: "0",
    max: "59"
  },
  s: {
    type: "number",
    min: "0",
    max: "59"
  }
}, w = {
  Y: "y",
  M: "m",
  D: "d",
  h: "h",
  m: "m",
  s: "s"
};
class Ct {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   */
  constructor(t, e) {
    /** Mask template for current date type / Шаблон маски для текущего типа даты */
    a(this, "mask", u(() => this.getDatetime().setHour24(!0).locale(void 0, "2-digit").replace("1987", "YYYY").replace("12", "MM").replace("18", "DD").replace("10", "hh").replace("20", "mm").replace("30", "ss").split("")));
    this.props = t, this.type = e;
  }
  /**
   * Returns base Datetime helper for given value (or default stub).
   *
   * Возвращает базовый помощник Datetime для значения (или дефолтный шаблон).
   * @param date filled date string/ заполненная строка даты
   */
  getDatetime(t) {
    return new L(t != null ? t : "1987-12-18T10:20:30", this.type.getByDate(), this.props.language);
  }
  /**
   * Returns localized formatted date/time value.
   *
   * Возвращает локализованное форматированное значение даты/времени.
   * @param date filled date string/ заполненная строка даты
   */
  getValue(t) {
    return this.getDatetime(t).locale(void 0, "2-digit");
  }
  /**
   * Returns standardized (ISO-like) date/time value or empty if invalid.
   *
   * Возвращает стандартизированное (похоже на ISO) значение или пустую строку при невалидности.
   * @param date masks data grouped by parts/ данные масок, сгруппированные по частям
   */
  getValueStandard(t) {
    const e = this.getValueStandardFull(t);
    return e === "" ? "" : this.getDatetime(e).standard(!1);
  }
  /**
   * Returns full raw date/time string assembled from groups (or empty if invalid).
   *
   * Возвращает полную «сырую» строку даты/времени, собранную из групп (или пусто если невалидно).
   * @param date masks data grouped by parts/ данные масок, сгруппированные по частям
   */
  getValueStandardFull(t) {
    var i, s, r, n, l, c;
    const e = `${((i = t == null ? void 0 : t.Y) == null ? void 0 : i.value) || "2000"}-${((s = t == null ? void 0 : t.M) == null ? void 0 : s.value) || "01"}-${((r = t == null ? void 0 : t.D) == null ? void 0 : r.value) || "01"}T${((n = t == null ? void 0 : t.h) == null ? void 0 : n.value) || "00"}:${((l = t == null ? void 0 : t.m) == null ? void 0 : l.value) || "00"}:${((c = t == null ? void 0 : t.s) == null ? void 0 : c.value) || "00"}`;
    return isNaN(Date.parse(e)) ? "" : e;
  }
  /**
   * Returns validation patterns object for date/time parts.
   *
   * Возвращает объект паттернов валидации для частей даты/времени.
   */
  getPattern() {
    return kt;
  }
  /** Returns list of date-only group symbols/ Возвращает список символов для даты */
  getSpecialDate() {
    return ["Y", "M", "D"];
  }
  /** Returns list of full date-time group symbols/ Возвращает список символов для даты и времени */
  getSpecialFull() {
    return [...this.getSpecialDate(), "h", "m", "s"];
  }
  /**
   * Returns display symbol for group.
   *
   * Возвращает отображаемый символ для группы.
   * @param groupName group name/ название группы
   */
  getView(t) {
    return w == null ? void 0 : w[t];
  }
}
class St {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   * @param rubberItem rubber groups helper/ объект помощник резиновых групп
   */
  constructor(t, e, i) {
    /** Special symbols configuration (groups) for numeric input / Конфигурация специальных символов (группы) для числового ввода */
    a(this, "special", {
      n: {},
      f: {
        defaultValue: "0"
      }
    });
    /** Rubber mask instructions (dynamic length per group) / Инструкции резиновой маски (динамическая длина по группам) */
    a(this, "rubber", u(() => ({
      n: {
        rubber: !0,
        transitionChar: this.getDecimal(),
        maxLength: 10
      },
      f: {
        rubber: this.isFractionRubber(),
        maxLength: 4
      }
    })));
    /** Base view symbol per group / Базовый отображаемый символ для группы */
    a(this, "view", u(() => this.type.isNumber() ? "⁠" : "0"));
    /** Fraction digits count / Количество знаков после запятой */
    a(this, "fraction", u(() => {
      if (this.type.isCurrency())
        return 2;
      const t = this.props.fraction;
      return typeof t == "number" ? t : typeof t == "string" && t.match(/[0-9]+/) ? Number(t) : this.rubberItem.is("f") ? this.rubberItem.getByIndex("f") + 1 : t === !0 ? 1 : 0;
    }));
    /** Returns mask characters for current numeric type / Возвращает символы маски для текущего числового типа */
    a(this, "mask", u(() => this.type.isCurrency() ? this.toSpecial(this.getCurrency()) : this.type.isNumberFormat() ? this.toSpecial(this.getNumberFormat()) : this.toSpecial(this.getNumber())));
    this.props = t, this.type = e, this.rubberItem = i;
  }
  /**
   * Is fraction part rubber (dynamic)?
   *
   * Является ли дробная часть резиновой (динамичной)?
   */
  isFractionRubber() {
    return this.props.fraction === !0;
  }
  /**
   * Returns standardized raw numeric value (integer or integer.fraction).
   *
   * Возвращает стандартизированное «сырое» числовое значение (целое или целое.дробь).
   * @param value masks data object/ объект масок
   */
  getValueStandard(t) {
    var i, s, r;
    if (this.type.isNumber())
      return ((i = t == null ? void 0 : t.n) == null ? void 0 : i.value) || "";
    const e = `${((s = t == null ? void 0 : t.n) == null ? void 0 : s.value) || "0"}.${((r = t == null ? void 0 : t.f) == null ? void 0 : r.value) || "0"}`;
    return e === "0.0" ? "0" : e;
  }
  /** Returns base number mask string.
   *
   * Возвращает строку маски числа.
   */
  getNumber() {
    return this.getNumberForString();
  }
  /**
   * Returns formatted number mask string.
   *
   * Возвращает форматированную строку числа.
   */
  getNumberFormat() {
    return this.getIntl().number(this.getNumberForString(), { maximumFractionDigits: 9 });
  }
  /**
   * Returns currency mask string with appended currency symbol.
   *
   * Возвращает строку маски валюты с добавленным символом валюты.
   */
  getCurrency() {
    return this.getIntl().currency(
      this.getNumberForString(),
      void 0,
      this.props.currencyHide
    );
  }
  /**
   * Returns list of delimiter characters for switching to fraction part.
   *
   * Возвращает список символов-разделителей для перехода к дробной части.
   */
  getDecimal() {
    return [this.getIntl().decimal(), "."];
  }
  /**
   * Returns list of special group keys.
   *
   * Возвращает список ключей групп специальных символов.
   */
  getSpecial() {
    return Object.keys(this.special);
  }
  /**
   * Returns GeoIntl helper instance.
   *
   * Возвращает экземпляр помощника GeoIntl.
   */
  getIntl() {
    return new X(this.props.language);
  }
  /**
   * Builds base numeric pattern string (with optional fraction & currency).
   *
   * Формирует базовую строку числового паттерна (с необязательной дробью и валютой).
   */
  getNumberForString() {
    const t = this.fraction.value, e = B("9", this.rubberItem.getByIndex("n") + 1), i = t ? `.${B("3", t)}` : "", s = this.type.isCurrency() && this.props.currency ? ` ${this.props.currency}` : "";
    return `${e}${i}${s}`;
  }
  /**
   * Converts digit markers (9/3) to group symbols (n/f).
   *
   * Преобразует цифровые маркеры (9/3) в групповые символы (n/f).
   */
  toSpecial(t) {
    return t.replace(/9/ig, "n").replace(/3/ig, "f").split("");
  }
}
class Mt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   * @param date date mask helper/ объект помощник маски даты
   * @param format numeric/currency mask helper/ объект помощник числовых масок
   */
  constructor(t, e, i, s) {
    /**
     * Returns list of special symbols.
     *
     * Возвращает список специальных символов.
     */
    a(this, "item", u(() => {
      if (this.type.isCurrencyOrNumber())
        return this.format.getSpecial();
      if (this.type.isTime())
        return this.date.getSpecialFull();
      if (this.type.isDate())
        return this.date.getSpecialDate();
      const t = this.special.value;
      return k(t) ? t : Z(t) ? Object.keys(t) : [t];
    }));
    /**
     * Returns map of only rubber-enabled groups.
     *
     * Возвращает карту только резиновых групп.
     */
    a(this, "rubberList", u(() => {
      const t = {};
      return C(this.special.value) && x(this.special.value, (e, i) => {
        e != null && e.rubber && (t[i] = e);
      }), t;
    }));
    /**
     * Returns special property (original definition).
     *
     * Возвращает свойство special (оригинальное определение).
     */
    a(this, "special", u(() => {
      var t;
      return this.type.isCurrencyOrNumber() ? this.format.special : (t = this.props.special) != null ? t : "*";
    }));
    this.props = t, this.type = e, this.date = i, this.format = s;
  }
  /**
   * Checks if symbol is special.
   *
   * Проверяет, является ли символ специальным.
   * @param char symbol to check/ символ для проверки
   */
  isSpecial(t) {
    return this.item.value.indexOf(t) !== -1;
  }
  /**
   * Checks if group has default value.
   *
   * Проверяет, имеет ли группа значение по умолчанию.
   * @param groupName group name/ название группы
   */
  isDefault(t) {
    return !!this.getDefault(t);
  }
  /**
   * Returns default value for group.
   *
   * Возвращает значение по умолчанию для группы.
   * @param groupName group name/ название группы
   */
  getDefault(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.defaultValue;
  }
  /**
   * Returns matcher (regexp/string) for group.
   *
   * Возвращает выражение для проверки группы.
   * @param groupName group name/ название группы
   */
  getMatch(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.match;
  }
  /**
   * Returns pattern definition for group.
   *
   * Возвращает pattern для группы.
   * @param groupName group name/ название группы
   */
  getPattern(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.pattern;
  }
  /**
   * Returns view (display character) for group.
   *
   * Возвращает отображаемый символ для группы.
   * @param groupName group name/ название группы
   */
  getView(t) {
    var e;
    return (e = this.getSpecialItem(t)) == null ? void 0 : e.view;
  }
  /**
   * Returns special group item data by name.
   *
   * Возвращает данные группы special по имени.
   * @param groupName group name/ название группы
   */
  getSpecialItem(t) {
    const e = this.special.value;
    if (C(e) && t in e)
      return e[t];
  }
}
const F = /[0-9]/;
class It {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param special special symbols helper/ объект помощник специальных символов
   */
  constructor(t, e) {
    this.props = t, this.special = e;
  }
  /**
   * Checks whether the character matches allowed pattern(s).
   *
   * Проверяет, соответствует ли символ разрешённому шаблону.
   * @param char character to check/ символ для проверки
   * @param groupName optional group name/ необязательное имя группы
   */
  is(t, e) {
    const i = this.get(e);
    return i instanceof RegExp ? !!t.match(i) : D(i) ? !!t.match(new RegExp(i)) : !!t.match(F);
  }
  /**
   * Returns match definition (regexp or string) for group or global.
   *
   * Возвращает правило проверки (regexp или строка) для группы или глобально.
   * @param groupName group name/ имя группы
   */
  get(t) {
    var e, i;
    return (i = (e = t && this.special.getMatch(t)) != null ? e : this.props.match) != null ? i : F;
  }
  /**
   * Filters text returning only allowed characters (any group).
   *
   * Фильтрует текст, возвращая только допустимые символы (любая группа).
   * @param text source text/ исходный текст
   */
  filter(t) {
    const e = this.special.item.value;
    return t.split("").filter((i) => e.find((s) => this.is(i, s)));
  }
}
class wt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   * @param date date mask helper/ объект помощник маски даты
   * @param special special symbols helper/ объект помощник специальных символов
   */
  constructor(t, e, i, s) {
    /** Validation input objects by group / Объекты проверки по названию группы */
    a(this, "item", u(() => {
      const t = {};
      return x(this.list.value, (e, i) => {
        t[i] = new v(e, i);
      }), this.props.check && (t.check = new v(this.props.check)), t;
    }));
    /** Patterns list by group / Список паттернов по группам */
    a(this, "list", u(() => {
      const t = this.getByType();
      for (const e in t) {
        const i = this.getPattern(e);
        t[e] && (D(i) ? Object.assign(t[e], { pattern: i }) : C(i) && C(t[e]) && Object.assign(t[e], i));
      }
      return t;
    }));
    this.props = t, this.type = e, this.date = i, this.special = s;
  }
  /**
   * Checks if there is a global check pattern.
   *
   * Проверяет, есть ли глобальный паттерн проверки.
   */
  isCheck() {
    return !!this.props.check;
  }
  /**
   * Returns validation input object by group.
   *
   * Возвращает объект проверки по названию группы.
   * @param groupName group name (default: check)/ имя группы (по умолчанию: check)
   */
  getInput(t = v.getGroupDefault()) {
    var e;
    return (e = this.item.value) == null ? void 0 : e[t];
  }
  /**
   * Builds base patterns object depending on mask type.
   *
   * Формирует базовый объект паттернов в зависимости от типа маски.
   */
  getByType() {
    if (this.type.isDate())
      return this.date.getPattern();
    const t = {};
    return this.special.item.value.forEach((e) => {
      t[e] = {};
    }), t;
  }
  /**
   * Returns pattern definition for group or global pattern.
   *
   * Возвращает определение паттерна для группы или глобальный паттерн.
   * @param groupName group name/ имя группы
   */
  getPattern(t) {
    var e;
    return (e = t && this.special.getPattern(t)) != null ? e : this.props.pattern;
  }
}
const Gt = {
  special: "*",
  match: /[0-9]/,
  type: "text",
  groupSave: !0,
  view: "_",
  // :default [!] System label / Системная метка
  visible: !0
};
class Bt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   */
  constructor(t, e) {
    this.props = t, this.type = e;
  }
  /**
   * Returns whether the content should visually end-align (numeric, rtl, currency).
   *
   * Возвращает, нужно ли визуально выравнивать по концу (числа, rtl, валюта).
   */
  isEnd() {
    return this.props.align !== "left" && (this.props.dir === "rtl" || this.type.isCurrency() && !this.props.currencyHide || this.type.isNumberFormat());
  }
  /**
   * Checks if alignment is right (explicit right or end alignment).
   *
   * Проверяет, что выравнивание справа (явно right или конечное).
   */
  isRight() {
    return this.props.align === "right" || this.isEnd();
  }
}
class xt {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param type object for working with the mask type/ объект для работы с типом маски
   * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
   * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param match object for managing the input character/ объект для управления символом ввода
   * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
   */
  constructor(t, e, i, s, r, n, l) {
    /** List of rubber groups/ Список резиновых групп */
    a(this, "list", u(() => {
      const t = this.special.rubberList.value;
      return this.type.isCurrencyOrNumber() ? et(
        this.format.rubber.value,
        t
      ) : t;
    }));
    /** List of transition symbols/ Список символов перехода */
    a(this, "transition", u(() => it(
      Object.values(this.list.value).filter(
        (t) => "transitionChar" in t && (D(t.transitionChar) || k(t.transitionChar))
      ),
      "transitionChar"
    ).flat()));
    this.props = t, this.type = e, this.rubberItem = i, this.rubberTransition = s, this.special = r, this.match = n, this.format = l;
  }
  /**
   * Checks if the symbol is a transition.
   *
   * Проверяет, является ли символ перехода.
   * @param char checkable symbol/ проверяемый символ
   */
  isTransition(t) {
    return this.transition.value.indexOf(t) >= 0;
  }
  /**
   * Getting properties for the rubber group.
   *
   * Получение свойства для резиновой группы.
   * @param groupName group name/ название группы
   */
  get(t) {
    var e;
    return (e = this.list.value) == null ? void 0 : e[t];
  }
  /**
   * Updates the group of rubber symbols if all conditions are met and returns true.
   *
   * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
   * @param data values for verification/ значения для проверки
   * @param groupName group name/ название группы
   * @param char symbol for checking/ символ для проверки
   */
  update(t, e, i) {
    const s = this.get(e), r = t == null ? void 0 : t[e];
    return s && r ? tt(i, s == null ? void 0 : s.transitionChar) || s != null && s.maxLength && (s == null ? void 0 : s.maxLength) <= (r == null ? void 0 : r.chars.length) ? (this.rubberTransition.set(e), !1) : (r.end && this.match.is(i, e) && !this.rubberTransition.isChar(e) && (this.rubberItem.add(e), this.rubberTransition.reset()), !0) : !1;
  }
  /**
   * Reduces the length of the entered symbol by its group.
   *
   * Уменьшает длину вводимого символа по его группе.
   * @param groupName group name/ название группы
   */
  pop(t) {
    return this.rubberItem.pop(t);
  }
  /**
   * Resets all states of all groups to the initial one.
   *
   * Сбрасывает все состояния всех групп до начального.
   */
  reset() {
    return this.rubberItem.reset(), this.rubberTransition.reset(), this;
  }
}
class Dt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with the mask type/ объект для работы с типом маски
   * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
   * @param characterLength object for managing input length/ объект управления длиной ввода
   * @param date object for working with date types/ объект для работы с типом даты
   * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
   * @param special object for working with special characters/ объект для работы со специальными символами
   */
  constructor(t, e, i, s, r, n, l) {
    /**
     * Returns the current mask.
     *
     * Возвращает текущую маску.
     */
    a(this, "item", u(() => this.type.isCurrencyOrNumber() ? this.format.mask.value : this.type.isDate() ? this.date.mask.value : this.basic.value));
    /**
     * Returns an array with information about the location of all special characters.
     *
     * Возвращает массив с информацией о расположении всех специальных символов.
     */
    a(this, "info", u(() => {
      const t = [];
      let e = 0;
      return this.item.value.forEach((i, s) => {
        this.special.isSpecial(i) && (t.push({
          index: e,
          key: s,
          char: i
        }), e++);
      }), t;
    }));
    /**
     * Returns the length of the mask or the maximum length of masks if there are several.
     *
     * Возвращает длину маски или максимальную длину масок, если их несколько.
     */
    a(this, "maxLength", u(() => {
      const t = this.getMask();
      return k(t) ? st(t) : this.item.value.length;
    }));
    /**
     * Returns the active mask.
     *
     * Возвращает активную маску.
     */
    a(this, "maskActive", u(() => {
      const t = this.getMask();
      return k(t) ? t.find((e) => this.getSpecialLength(e) >= this.characterLength.get()) || (t == null ? void 0 : t[t.length - 1]) || "" : t;
    }));
    /**
     * Returns the number of special characters in the current mask.
     *
     * Возвращает количество специальных символов в текущей маске.
     */
    a(this, "basic", u(() => this.rubberItem.expandMask(this.maskActive.value).split("")));
    this.props = t, this.type = e, this.rubberItem = i, this.characterLength = s, this.date = r, this.format = n, this.special = l;
  }
  /**
   * Returns the mask symbol by its index.
   *
   * Возвращает символ маски по его индексу.
   * @param index index of the symbol's location/ индекс расположения символа
   */
  get(t) {
    var e, i;
    return (i = (e = this.item.value) == null ? void 0 : e[t]) != null ? i : "";
  }
  /**
   * Returns the location number for replacement by its input symbol.
   *
   * Возвращает номер нахождения для замены по его символу ввода.
   * @param char input symbol/ символ ввода
   * @param selection minimum index for search/ минимальный индекс для поиска
   */
  getByChar(t, e = -1) {
    let i = e;
    return this.item.value.forEach((s, r) => {
      s === t && r >= e && (i = r);
    }), i;
  }
  /**
   * Returns the length of the active mask.
   *
   * Возвращает длину активной маски.
   */
  getLength() {
    return this.item.value.length;
  }
  /**
   * Returns the length of only special characters.
   *
   * Возвращает длину только из специальных символов.
   */
  getLengthBySpecial() {
    return this.info.value.length;
  }
  /**
   * Returns how many special characters were highlighted.
   *
   * Возвращает, сколько специальных символов было выделено.
   * @param start start of selection/ начало выделения
   * @param end end of selection/ конец выделения
   */
  getQuantity(t, e) {
    if (t === e)
      return 1;
    let i = 0;
    for (let s = t; s < e; s++)
      this.special.isSpecial(this.get(s)) && i++;
    return i;
  }
  /**
   * Returns a list of masks.
   *
   * Возвращает список масок.
   */
  getMask() {
    var t;
    return (t = this.props.mask) != null ? t : "";
  }
  /**
   * Returns the number of special characters in the current mask.
   *
   * Возвращает количество специальных символов в текущей маске.
   * @param mask selected mask/ выбранная маска
   */
  getSpecialLength(t) {
    return t.split("").filter((e) => this.special.isSpecial(e)).length;
  }
}
class Tt {
  /**
   * Constructor
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param mask object for managing masks/ объект управления маской
   */
  constructor(t, e) {
    /** Selection value/ Значение выделения */
    a(this, "value", 0);
    /** Immediate selection value/ Значение непосредственного выделения */
    a(this, "immediate", 0);
    /** Shift flag/ Флаг сдвига */
    a(this, "shift", !1);
    this.special = t, this.mask = e;
  }
  /**
   * Getting the selection key number.
   *
   * Получение номера ключа выделения.
   */
  get() {
    return this.value;
  }
  /**
   * Returns the selection number for the first element that is a special symbol.
   *
   * Возвращает номер выделения для первого элемента, являющегося специальным символом.
   */
  getFirst() {
    var t, e, i;
    return (i = (e = (t = this.mask.info.value) == null ? void 0 : t[0]) == null ? void 0 : e.key) != null ? i : 0;
  }
  /**
   * Getting the current key of the selected character.
   *
   * Получение текущего ключа выделенного символа.
   */
  getFocus() {
    return this.getCharacter(this.value);
  }
  /**
   * Getting the next key of the selected character.
   *
   * Получение следующего ключа выделенного символа.
   */
  getNext() {
    return this.getCharacter(this.value + 1);
  }
  /**
   * Getting the previous key of the selected symbol.
   *
   * Получение предыдущего ключа выделенного символа.
   */
  getPrevious() {
    return this.getCharacter(this.value - 1);
  }
  /**
   * Getting the key number of the nearest special character.
   *
   * Получение номера ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.getCharacter(this.immediate);
  }
  /**
   * Getting the number of the key shifted to the left direction.
   *
   * Получение номера ключа, сдвинутого в левом направлении.
   */
  getShift() {
    return this.shift ? this.value > 0 ? this.getCharacter(this.value - 1) + 1 : 0 : this.getFocus();
  }
  /**
   * Changing the selection key number.
   *
   * Изменение номера ключа выделения.
   * @param selection selection number/ номер выделения
   */
  set(t) {
    return this.value = t, this;
  }
  /**
   * Changes the selection key number according to the mask structure.
   *
   * Изменяет номер ключа выделения по структуре маски.
   * @param selection selection number/ номер выделения
   * @param focus is the element in focus/ элемент в фокусе ли
   */
  setByMask(t, e = !0) {
    if (e) {
      let i, s;
      this.mask.info.value.forEach((r) => {
        i === void 0 && r.key >= t && (i = r.index), r.key <= t && (s = r.index);
      }), this.set(i !== void 0 ? i : this.mask.getLengthBySpecial()), this.setImmediate(s !== void 0 ? s : this.mask.getLengthBySpecial());
    }
    return this;
  }
  /**
   * Changing the selection key for the nearest special character.
   *
   * Изменение ключа выделения для ближайшего специального символа.
   * @param immediate selection key number/ номер ключа выделения
   */
  setImmediate(t) {
    return this.immediate = t, this;
  }
  /**
   * Turning shift on or off.
   *
   * Включение или отключение сдвига.
   * @param shift value for shift/ значение для сдвига
   */
  setShift(t) {
    return this.shift = t, this;
  }
  /**
   * Resets the selection key for the nearest special character to the selection location.
   *
   * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
   */
  resetImmediate() {
    return this.immediate = this.value <= 0 ? 0 : this.value - 1, this;
  }
  /**
   * Move the selection location back by 1 step.
   *
   * Передвигаем место выделения назад на 1 шаг.
   */
  goBack() {
    return this.value > 0 && this.value--, this;
  }
  /**
   * Move the selection location forward by 1 step.
   *
   * Передвигаем место выделения вперед на 1 шаг.
   */
  goNext() {
    return this.value <= this.mask.getLength() && this.value++, this;
  }
  /**
   * Getting the key number at the selection location.
   *
   * Получение номера ключа по месту выделения.
   * @param selection selection location/ место выделения
   */
  getCharacter(t) {
    for (const e of this.mask.info.value)
      if (e.index >= t)
        return e.key;
    return this.mask.getLength();
  }
}
const b = "~", Ft = "_";
class Lt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
   * @param characterLength object for managing input length/ объект управления длиной ввода
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param mask object for managing masks/ объект управления маской
   * @param selection object for managing cursor position/ объект для управления положением курсора
   */
  constructor(t, e, i, s, r, n) {
    /** Entered characters list/ Список введённых символов */
    a(this, "item", S([]));
    this.props = t, this.rubberItem = e, this.characterLength = i, this.special = s, this.mask = r, this.selection = n;
  }
  /**
   * Checks if the value is filled.
   *
   * Проверяет, заполнено ли значение.
   */
  is() {
    return this.item.value.length > 0;
  }
  /**
   * Checks if the selected character was previously deleted.
   *
   * Проверяет, является ли выделенный символ ранее удалённым.
   */
  isCharDelete() {
    const t = this.selection.get();
    return t in this.item.value && this.item.value[t] === b;
  }
  /**
   * Getting the selected mask character.
   *
   * Получение выбранного символа маски.
   */
  getFocus() {
    return this.mask.get(this.selection.getFocus());
  }
  /**
   * Getting the mask character by the key number of the nearest special character.
   *
   * Получение символа маски по номеру ключа ближайшего специального символа.
   */
  getImmediate() {
    return this.mask.get(this.selection.getImmediate());
  }
  /**
   * Getting the next mask character.
   *
   * Получение следующего символа маски.
   */
  getNext() {
    return this.mask.get(this.selection.getNext());
  }
  /**
   * Adding 1 entered character at its selection location.
   *
   * Добавление 1 введённого символа по месту его выделения.
   * @param char entered character/ введённый символ
   */
  add(t) {
    return this.item.value.splice(this.selection.get(), this.isCharDelete() ? 1 : 0, t), this.selection.goNext().resetImmediate(), this.updateLength(), this;
  }
  /**
   * Deleting 1 entered character at its selection location.
   *
   * Удаление 1 введённого символа по месту его выделения.
   */
  pop() {
    const t = this.selection.get() - 1;
    return this.isSpecialNextAnother() ? this.item.value[t] = b : (this.item.value.splice(t, 1), this.updateLength()), this.selection.goBack().resetImmediate(), this;
  }
  /**
   * Resets the values to the initial values.
   *
   * Сбрасывает значения до начальных.
   */
  reset() {
    return this.item.value = [], this.selection.set(0).resetImmediate(), this.updateLength(), this;
  }
  /**
   * Shifts by 1 value depending on the direction of selection change.
   *
   * Сдвигает на 1 значение в зависимости от направления изменения выделения.
   * @param status shift status/ статус сдвига
   */
  shift(t = 1) {
    return this.characterLength.set(this.item.value.length + t), this;
  }
  /**
   * Checks if there is another group of special characters ahead.
   *
   * Проверяет, есть ли впереди другая группа специальных символов.
   */
  isSpecialNextAnother() {
    var i, s;
    const t = this.selection.get() - 1, e = this.item.value.length;
    if (this.props.groupSave && t >= 0 && t <= e) {
      const r = this.mask.info.value, n = (i = r == null ? void 0 : r[t]) == null ? void 0 : i.char;
      if (n && !this.rubberItem.is(n)) {
        for (let l = t; l < e; l++)
          if (r != null && r[l]) {
            const c = (s = r[l]) == null ? void 0 : s.char;
            if (c && this.special.isSpecial(c) && n !== c)
              return !0;
          }
      }
    }
    return !1;
  }
  /**
   * Updates the length of entered characters.
   *
   * Обновляет длину введённых символов.
   */
  updateLength() {
    return this.characterLength.set(this.item.value.length), this;
  }
}
class Vt {
  /**
   * Constructor
   * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
   * @param mask object for managing masks/ объект управления маской
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param character object for managing entered character/ объект для управления введённым символом
   */
  constructor(t, e, i, s) {
    /**
     * Receiving basic standard values.
     *
     * Получение базовых стандартных значений.
     */
    a(this, "item", u(() => {
      const t = this.character.item.value, e = [];
      let i = 0;
      for (const s of this.mask.item.value)
        if (!this.special.isSpecial(s))
          e.push(s);
        else if (i in t) {
          if (e.push(String(t[i++])), i > t.length && this.rubberTransition.is() && !this.rubberTransition.isChar(s))
            break;
        } else
          break;
      return e.join("");
    }));
    this.rubberTransition = t, this.mask = e, this.special = i, this.character = s;
  }
  /**
   * Checks if the values are filled in.
   *
   * Проверяет, заполнены ли значения.
   */
  is() {
    return this.getLength() > 0;
  }
  /**
   * Getting the character from the basic standard values by its key number.
   *
   * Получение символа из базовых стандартных значений по его номеру ключа.
   * @param index key number/ номер ключа
   */
  getChar(t) {
    var e;
    return (e = this.item.value) == null ? void 0 : e[t];
  }
  /**
   * Getting the length of basic standard values.
   *
   * Получение длины базовых стандартных значений.
   */
  getLength() {
    return this.item.value.length;
  }
}
class Et {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with the mask type/ объект для работы с типом маски
   * @param date object for working with date types/ объект для работы с типом даты
   * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
   * @param mask object for managing masks/ объект управления маской
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
   */
  constructor(t, e, i, s, r, n, l) {
    a(this, "infoCache");
    /**
     * Receiving a list with information about standard values/
     * Получение списка с информацией о стандартных значениях
     */
    a(this, "info", u(() => {
      const t = this.valueBasic.item.value, e = {};
      return this.mask.item.value.forEach((i, s) => {
        if (this.special.isSpecial(i)) {
          const r = this.add(e, i);
          this.isStandard(s) && t[s] !== b && r.chars.push(String(t[s])), r.maxLength++, r.end = r.maxLength === r.chars.length, r.full = this.special.isDefault(i) || r.end, r.value = r.full ? r.chars.join("") : "";
        }
      }), e;
    }));
    /** Final value (shortcut)/ Финальное значение (ярлык) */
    a(this, "item", u(() => this.getValue(this.info.value)));
    /** Checks if the mask is fully filled/ Проверяет, полностью ли заполнена маска */
    a(this, "isFull", u(() => {
      for (const t of Object.values(this.info.value))
        if (!t.full)
          return !1;
      return !0;
    }));
    /** Checks if the mask is fully filled by length/ Проверяет, полностью ли заполнена маска по длине */
    a(this, "isEnd", u(() => {
      for (const t of Object.values(this.info.value))
        if (!t.end)
          return !1;
      return !0;
    }));
    /** Returns the final form of the value/ Возвращает финальный вид значения */
    a(this, "valueFinal", u(() => {
      const t = this.valueBasic.item.value.split(""), e = this.mask.item.value;
      let i = "";
      for (const s in e)
        if (s in t)
          i += t[s];
        else if (e[s]) {
          const r = this.special.getDefault(e[s]);
          r && (i += r);
        }
      return i;
    }));
    this.props = t, this.type = e, this.date = i, this.format = s, this.mask = r, this.special = n, this.valueBasic = l, y(this.info, (c, o) => {
      this.type.isDate() && (this.infoCache = o);
    });
  }
  /**
   * Returns old values.
   *
   * Возвращает старые значения.
   */
  getValueCache() {
    return this.infoCache ? this.getValue(this.infoCache) : this.item.value;
  }
  /**
   * Getting full information for global verification.
   *
   * Получение полной информации для глобальной проверки.
   */
  getForCheck() {
    const t = this.item.value;
    return {
      group: v.getGroupDefault(),
      value: t,
      maxLength: t.length,
      full: this.isFull.value,
      end: this.isEnd.value,
      chars: t.split("")
    };
  }
  /**
   * Getting information for a specific group.
   *
   * Получение информации для конкретной группы.
   * @param groupName group name/ название группы
   */
  getInfoItem(t) {
    var e;
    return (e = this.info.value) == null ? void 0 : e[t];
  }
  /**
   * Checks if there is a value by the key number in the basic values.
   *
   * Проверяет, есть ли значение по номеру ключа в базовых значениях.
   * @param index key number/ номер ключа
   */
  isStandard(t) {
    return !!this.valueBasic.getChar(t);
  }
  /**
   * Returns values based on the specified data information structure.
   *
   * Возвращает значения по указанной структуре информации о данных.
   * @param info data information/ информация о данных
   */
  getValue(t) {
    return this.type.isCurrencyOrNumber() ? this.format.getValueStandard(t) : this.type.isDate() ? this.isFull.value ? this.date.getValueStandard(t) : "" : this.props.fullOnly && !this.isFull.value ? "" : this.valueFinal.value;
  }
  /**
   * Adding a new character to the list divided by groups if it is not there and returning the property of the given group.
   *
   * Добавление нового символа в список, разделенный по группам, если его там нет, и возвращение свойства данной группы.
   * @param data data for verification/ данные для проверки
   * @param groupName group name/ название группы
   */
  add(t, e) {
    return e in t || (t[e] = {
      group: e,
      value: "",
      maxLength: 0,
      full: !1,
      end: !1,
      chars: []
    }), t[e];
  }
}
class Nt {
  /**
   * Constructor
   * @param pattern object for working with input data validation/ объект для работы с проверкой введённых данных
   * @param value object for working with entered data/ объект для работы с введёнными данными
   */
  constructor(t, e) {
    /** Validation error info or undefined/ Информация об ошибке или undefined */
    a(this, "item", u(() => {
      for (const t of Object.values(this.pattern.item.value)) {
        const e = this.value.getInfoItem(t.group);
        if (e && e.full) {
          const i = t.check(e.value);
          if (i && !i.status)
            return {
              ...i,
              value: this.value.item.value
            };
        }
      }
      return this.getValidationCheck();
    }));
    this.pattern = t, this.value = e;
  }
  /**
   * Checks if the current group has an error.
   *
   * Проверяет, есть ли ошибка у текущей группы.
   * @param groupName group name/ название группы
   */
  isError(t) {
    var i;
    const e = (i = this.item.value) == null ? void 0 : i.group;
    return !!(e && (e === t || e === v.getGroupDefault()));
  }
  /**
   * Checks the correctness of filling in the values.
   *
   * Проверяет корректность заполнения значений.
   */
  checkValidity() {
    return this.item.value === void 0;
  }
  /**
   * Getting global check data.
   *
   * Получение данных глобальной проверки.
   */
  getValidationCheck() {
    var t;
    if (this.value.isFull.value) {
      const e = this.value.getForCheck();
      if (this.pattern.isCheck()) {
        const i = (t = this.pattern.getInput(e.group)) == null ? void 0 : t.check(e.value);
        if (i && !i.status)
          return i;
      }
      return {
        status: !0,
        value: e.value,
        isFull: !0
      };
    }
    return {
      status: !0,
      value: this.value.item.value,
      isFull: !1
    };
  }
}
class At {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with the mask type/ объект для работы с типом маски
   * @param date object for working with date types/ объект для работы с типом даты
   * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param rubber object for working with rubber types/ объект для работы с резиновыми типами
   * @param mask object for managing masks/ объект управления маской
   * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
   * @param validation object for working with validation/ объект для работы с валидацией
   * @param className define class names for each symbol/ определить название класса для каждого символа
   */
  constructor(t, e, i, s, r, n, l, c, o, p) {
    /** Class name prefix for item/ Класс для элемента */
    a(this, "classNameItem");
    /** View items list/ Список данных для отображения */
    a(this, "item", u(() => {
      const t = [], e = this.valueBasic.item.value;
      return this.mask.item.value.forEach((i, s) => {
        const r = e == null ? void 0 : e[s];
        t.push({
          className: `${this.classNameItem} ${this.classNameItem}--${this.getStatus(i, r)}`,
          value: this.getValue(i, r)
        });
      }), t;
    }));
    /** Input value with special view characters/ Значение ввода со спецсимволами отображения */
    a(this, "input", u(() => {
      const t = [], e = this.mask.item.value;
      return this.valueBasic.item.value.split("").forEach((i, s) => {
        var r, n;
        i === b ? t.push(
          (n = this.getSpecialToView((r = e == null ? void 0 : e[s]) != null ? r : "")) != null ? n : i
        ) : t.push(i);
      }), t.join("");
    }));
    this.props = t, this.type = e, this.date = i, this.format = s, this.special = r, this.rubber = n, this.mask = l, this.valueBasic = c, this.validation = o, this.classNameItem = `${p}__character__item`;
  }
  /**
   * Checks if the value is filled in.
   *
   * Проверяет, заполнено ли значение.
   * @param value checked value/ проверяемое значение
   */
  isValue(t) {
    return !!(t && t !== b);
  }
  /**
   * Returns the status by mask symbol and its position.
   *
   * Возвращает статус по символу маски и месту его расположения.
   * @param char mask symbol/ символ маски
   * @param value entered value for this position/ введённое значение для позиции
   */
  getStatus(t, e) {
    return this.isValue(e) ? this.special.isSpecial(t) ? this.validation.isError(t) ? "error" : "special" : "standard" : this.rubber.isTransition(t) ? "transition" : "placeholder";
  }
  /**
   * Returns symbol for rendering: real value or placeholder.
   *
   * Возвращает символ для отображения: реальное значение или плейсхолдер.
   * @param char mask symbol/ символ маски
   * @param value entered value for position/ введённое значение позиции
   */
  getValue(t, e) {
    return this.isValue(e) ? e : this.getSpecialToView(t);
  }
  /**
   * Returns display version of special mask symbol (placeholder).
   *
   * Возвращает отображаемую версию специального символа маски (плейсхолдер).
   * @param char mask symbol/ символ маски
   */
  getSpecialToView(t) {
    var e, i, s;
    return this.special.isSpecial(t) ? (s = (i = (e = this.getViewChar(t)) != null ? e : this.special.getView(t)) != null ? i : this.props.view) != null ? s : Ft : t;
  }
  /**
   * Returns special character for view by its group name.
   *
   * Возвращает специальный символ для отображения по имени группы.
   * @param groupName group name/ имя группы
   */
  getViewChar(t) {
    if (this.type.isDate())
      return this.date.getView(t);
    if (this.type.isCurrencyOrNumber())
      return this.format.view.value;
  }
}
class Ot {
  /**
   * Constructor
   * @param validation object for working with validation/ объект для работы с валидацией
   * @param emits emit function (Design system bridge)/ функция вызова события
   */
  constructor(t, e) {
    /** Current event type key/ Текущий ключ типа события */
    a(this, "type");
    /** Native event object/ Объект нативного события */
    a(this, "event");
    this.validation = t, this.emits = e;
  }
  /**
   * Checks whether extra data (validation) should be generated for current event
   *
   * Проверяет, нужно ли генерировать дополнительные данные (валидацию) для текущего события
   */
  isValue() {
    return !!(this.type && ["input", "change"].indexOf(this.type) >= 0);
  }
  /**
   * Initializes event handling and emits event with optional validation payload
   *
   * Инициализирует обработку и вызывает событие с опциональной валидацией
   */
  go() {
    var t, e;
    if (this.type && this.event) {
      const i = this.isValue() ? this.validation.item.value : void 0;
      (t = this.emits) == null || t.call(
        this,
        this.type,
        this.event,
        i
      ), (this.type === "inputLite" || this.type === "changeLite") && ((e = this.emits) == null || e.call(
        this,
        this.type,
        i
      ));
    }
    return this;
  }
  /**
   * Sets both event type and native event object
   *
   * Устанавливает одновременно тип события и объект события
   * @param type event name/ название события
   * @param event event object/ объект события
   */
  set(t, e) {
    return this.setType(t), this.setEvent(e), this;
  }
  /**
   * Sets event type
   *
   * Устанавливает тип события
   * @param type event name/ название события
   */
  setType(t) {
    return this.type = t, this;
  }
  /**
   * Sets native event object
   *
   * Устанавливает объект события
   * @param event event object/ объект события
   */
  setEvent(t) {
    return this.event = t, this;
  }
  /**
   * Resets all internal state (type + event)
   *
   * Сбрасывает всё внутреннее состояние (тип и событие)
   */
  reset() {
    return this.resetType(), this.resetEvent(), this;
  }
  /**
   * Resets stored event type
   *
   * Сбрасывает сохранённый тип события
   */
  resetType() {
    return this.type = void 0, this;
  }
  /**
   * Resets stored native event
   *
   * Сбрасывает сохранённый объект события
   */
  resetEvent() {
    return this.event = void 0, this;
  }
}
class $t {
  /**
   * Constructor
   * @param type object for working with the mask type/ объект для работы с типом маски
   * @param buffer object for managing cached input data/ объект управления кешированными вводимыми данными
   * @param focus object for handling input field focus/ объект для работы с фокусом поля ввода
   * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
   * @param date object for working with date types/ объект для работы с типом даты
   * @param special object for working with special characters/ объект для работы со специальными символами
   * @param match object for managing the input character match logic/ объект для управления совпадением символов ввода
   * @param rubber object for working with rubber types/ объект для работы с резиновыми типами
   * @param mask object for managing masks/ объект управления маской
   * @param selection object for managing caret position/ объект для управления положением курсора
   * @param character object for managing entered characters/ объект для управления введёнными символами
   * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
   * @param value object for working with transformed value/ объект для работы с преобразованным значением
   * @param emit object for handling callback events/ объект для работы с событиями
   * @param element input element ref/ ссылка на элемент ввода
   */
  constructor(t, e, i, s, r, n, l, c, o, p, m, f, g, M, I) {
    this.type = t, this.buffer = e, this.focus = i, this.rubberTransition = s, this.date = r, this.special = n, this.match = l, this.rubber = c, this.mask = o, this.selection = p, this.character = m, this.valueBasic = f, this.value = g, this.emit = M, this.element = I;
  }
  /**
   * Adds new characters entered by user
   *
   * Добавляет новые символы, вводимые пользователем
   * @param selection selected key index/ индекс выделенного ключа
   * @param chars list of characters (string or array)/ список вводимых символов
   * @param focus is element focused/ элемент в фокусе ли
   * @returns was value updated/ было ли обновлено значение
   */
  add(t, e, i = !0) {
    let s = !1;
    return this.selection.setByMask(t, i), this.rubberTransition.reset(), rt(e).forEach((r) => {
      const n = this.character.getFocus(), l = this.character.getImmediate();
      this.selection.setShift(
        this.rubber.update(this.value.info.value, l, r)
      ), this.rubberTransition.is() && this.selection.setByMask(
        this.mask.getByChar(
          this.rubberTransition.item.value,
          this.selection.getImmediate()
        ) + 1,
        i
      ), this.match.is(r, n) && (this.character.shift(), this.character.getFocus() && (this.mask.maxLength.value > this.valueBasic.getLength() || this.character.isCharDelete()) && (this.character.add(r), s = !0));
    }), this.goSelection(), s;
  }
  /**
   * Removes (deletes) selected input characters
   *
   * Удаляет выделенные символы ввода
   * @param start start selection index/ индекс начала выделения
   * @param end end selection index/ индекс конца выделения
   * @param focus is element focused/ элемент в фокусе ли
   */
  pop(t, e = t, i = !0) {
    if (t >= 0 && e <= this.mask.maxLength.value) {
      let s = this.mask.getQuantity(t, e);
      for (i && this.selection.setByMask(e); s--; )
        this.rubberTransition.reset(), this.character.pop(), this.character.shift(0), this.selection.setShift(
          this.rubber.pop(this.character.getFocus())
        );
      this.goSelection();
    }
    return this;
  }
  /**
   * Resets all values or applies provided value
   *
   * Сбрасывает все значения или применяет переданное
   * @param value new raw value to apply/ новое значение для применения
   */
  reset(t = "") {
    if (this.character.reset(), this.rubber.reset(), at(t)) {
      const e = this.type.isDate() ? this.date.getValue(t) : t;
      this.add(0, this.extra(e.split("")));
    }
    return this;
  }
  /**
   * Removes redundant characters for paste operation
   *
   * Удаляет лишние символы при вставке
   * @param chars characters to insert/ вставляемые символы
   */
  extra(t) {
    var n, l, c;
    if (this.character.is())
      return t;
    const e = this.mask.item.value, i = [...t];
    let s = this.match.get((l = (n = this.mask.info.value) == null ? void 0 : n[0]) == null ? void 0 : l.char), r = 0;
    if (s)
      for (const o in e) {
        const p = e[o];
        if (p) {
          if (this.special.isSpecial(p)) {
            for (let m = r; m < i.length && (r++, !((c = i == null ? void 0 : i[m]) != null && c.match(s))); m++)
              ;
            s = this.match.get(p);
          } else if (p.match(s)) {
            let m = !1;
            for (let f = r; f < i.length; f++) {
              const g = i[f];
              if (r++, g != null && g.match(s)) {
                p === g ? (i.splice(f, 1), r--) : m = !0;
                break;
              }
            }
            if (m)
              break;
          }
        }
      }
    return i;
  }
  /**
   * Restores caret (selection) position
   *
   * Восстанавливает позицию курсора (выделения)
   * @param updateBuffer update from buffer first/ сначала обновить из буфера
   */
  goSelection(t = !0) {
    return this.focus.is() && requestAnimationFrame(() => {
      if (this.element.value && (!t || !this.goBuffer())) {
        const e = this.valueBasic.getLength(), i = this.selection.getShift(), s = e < i ? e : i;
        this.element.value.selectionEnd = s, this.element.value.selectionStart = s;
      }
    }), this;
  }
  /**
   * Processes buffered data if present and emits events
   *
   * Обрабатывает данные из буфера (если есть) и вызывает события
   * @returns was buffer consumed/ был ли использован буфер
   */
  goBuffer() {
    return this.buffer.is() ? (this.add(this.selection.getShift(), this.buffer.get()), this.buffer.resetChars(), !0) : (this.buffer.reset(), this.emit.go(), !1);
  }
}
class Rt {
  /**
   * Constructor
   * @param buffer object for managing cached input data/ объект управления кешированными вводимыми данными
   * @param focus object for handling input field focus/ объект для работы с фокусировкой поля ввода
   * @param characterLength object for managing input length/ объект управления длиной ввода
   * @param right object for right alignment/ объект для выравнивания направо
   * @param selection object for managing cursor position/ объект для управления положением курсора
   * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
   * @param emit object for handling callback events/ объект для работы с обратными событиями
   * @param data object for managing input/ объект для управления вводом
   */
  constructor(t, e, i, s, r, n, l, c) {
    /** Change flag/ Флаг изменения */
    a(this, "change", !1);
    /** Unidentified selection data/ Данные неопознанного выделения */
    a(this, "unidentified");
    /**
     * Capture of the event in focus.
     *
     * Перехват события при получении фокуса.
     * @param event event object/ объект события
     */
    a(this, "onFocus", (t) => {
      this.change = !1, this.focus.in(), this.emit.set("focus", t).go();
    });
    /**
     * Capture of the event when focus is lost.
     *
     * Перехват события при потере фокуса.
     * @param event event object/ объект события
     */
    a(this, "onBlur", (t) => {
      this.change && this.emit.setType("change").go(), this.focus.out(), this.emit.set("blur", t).go();
    });
    /**
     * Intercepting key press to get a character.
     *
     * Перехват нажатия клавиши для получения символа.
     * @param event invoked event/ вызываемое событие
     */
    a(this, "onKeydown", (t) => {
      const e = this.getSelectionInfo(t), { start: i, end: s } = e;
      this.emit.set("keydown", t).go(), this.isCut(t) && this.isSelection(e) && (this.data.pop(i, s), ht(
        t.target.value.slice(i, s)
      ).then()), !this.isMetaKey(t) && (this.isKey(t) ? t.key === "Backspace" ? (i > 0 || i !== s) && this.data.pop(i, s) : t.key.length <= 1 && (i === s ? this.buffer.go(t.key) && this.data.add(i, t.key) : (this.buffer.goStart(), this.data.pop(i, s).add(this.selection.getShift(), t.key))) : this.unidentified = e);
    });
    /**
     * Intercept key release to check arrow presses.
     *
     * Перехват отпускания клавиши для проверки нажатия стрелок.
     * @param event invoked event/ вызываемое событие
     */
    a(this, "onKeyup", (t) => {
      this.emit.set("keyup", t).go(), !this.isMetaKey(t) && this.isKey(t) && [
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
        "ArrowLeft"
      ].indexOf(t.key) >= 0 && (this.makeToEnd(t), this.makeToStart(t));
    });
    /**
     * Intercepting the event before data modification.
     *
     * Перехват события перед изменением данных.
     * @param event invoked event/ вызываемое событие
     */
    a(this, "onBeforeinput", (t) => {
      this.emit.set("beforeinput", t).go(), this.unidentified || (this.makeChange(t), nt(t));
    });
    /**
     * Intercepting the event during data modification.
     *
     * Перехват события при изменении данных.
     * @param event invoked event/ вызываемое событие
     */
    a(this, "onInput", (t) => {
      if (this.unidentified) {
        const e = t.target;
        (this.unidentified.length > e.value.length || this.unidentified.start !== this.unidentified.end) && this.data.pop(this.unidentified.start, this.unidentified.end), "data" in t ? t.data && this.buffer.go(t.data) && this.data.add(this.unidentified.start, t.data) : this.data.reset(e.value), this.makeChange(t), this.unidentified = void 0;
      }
    });
    /**
     * Intercept paste event for inserting data from clipboard.
     *
     * Перехват события вставки данных из буфера обмена.
     * @param event invoked event/ вызываемое событие
     */
    a(this, "onPaste", (t) => {
      const { start: e, end: i } = this.getSelectionInfo(t);
      ut(t).then((s) => {
        const r = s.split("");
        e === i ? this.data.add(e, this.data.extra(r)) : this.data.pop(e, i).add(this.selection.getShift(), this.data.extra(r)), this.change = !0, this.emit.set("paste", t).go();
      }).catch((s) => console.error("getClipboardData", s));
    });
    /**
     * Intercept change event (autocomplete support).
     *
     * Перехват события изменения (поддержка автозаполнения).
     * @param event invoked event/ вызываемое событие
     */
    a(this, "onChange", (t) => {
      const e = t.target;
      this.data.reset(e.value), this.emit.set("change", t).go();
    });
    /**
     * Intercept click to adjust selection if needed.
     *
     * Перехват клика для корректировки выделения при необходимости.
     * @param event invoked event/ вызываемое событие
     */
    a(this, "onClick", (t) => {
      this.makeToEnd(t), this.makeToStart(t);
    });
    this.buffer = t, this.focus = e, this.characterLength = i, this.right = s, this.selection = r, this.valueBasic = n, this.emit = l, this.data = c;
  }
  /**
   * Was a meta button pressed.
   *
   * Была ли нажата мета-кнопка.
   * @param event invoked event/ вызываемое событие
   */
  isMetaKey(t) {
    return t.metaKey || t.altKey || t.ctrlKey;
  }
  /**
   * Was a cut operation performed.
   *
   * Была ли выполнена операция вырезания.
   * @param event invoked event/ вызываемое событие
   */
  isCut(t) {
    return t.type === "cut" || !!(t.key.toLowerCase() === "x" && (t.metaKey || t.ctrlKey));
  }
  /**
   * Checks key value in the event.
   *
   * Проверяет значение key в событии.
   * @param event invoked event/ вызываемое событие
   */
  isKey(t) {
    return "key" in t && t.key !== "Unidentified";
  }
  /**
   * Was there a selection.
   *
   * Было ли выделение.
   * @param info selection data/ данные выделения
   */
  isSelection(t) {
    const { start: e, end: i } = t;
    return e > 0 || e !== i;
  }
  /**
   * Getting data about selection on the event element.
   *
   * Получение данных о выделении у элемента события.
   * @param event invoked event/ вызываемое событие
   */
  getSelectionInfo(t) {
    var i, s;
    const e = t.target;
    return {
      target: e,
      start: (i = e.selectionStart) != null ? i : 0,
      end: (s = e.selectionEnd) != null ? s : 0,
      length: e.value.length
    };
  }
  /**
   * Preparing to send an event.
   *
   * Подготовка для отправки события.
   * @param event invoked event/ вызываемое событие
   */
  makeChange(t) {
    this.change = !0, this.emit.set("input", t), !this.buffer.is() && (this.emit.go(), this.emit.resetType());
  }
  /**
   * Changes cursor position if alignment is right.
   *
   * Изменяет позицию курсора, если выравнивание справа.
   * @param event invoked event/ вызываемое событие
   */
  makeToEnd(t) {
    if (this.right.isRight()) {
      const e = this.valueBasic.getLength(), { target: i, start: s, end: r } = this.getSelectionInfo(t);
      s > e && (i.selectionStart = e), r > e && (i.selectionEnd = e);
    }
  }
  /**
   * Check selection from the start (before special chars).
   *
   * Проверка выделения спереди (перед спецсимволами).
   * @param event invoked event/ вызываемое событие
   */
  makeToStart(t) {
    const e = this.selection.getFirst(), { target: i, start: s } = this.getSelectionInfo(t);
    s < e && (i.selectionStart = e, i.selectionEnd = e);
  }
}
class Kt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.MaskBufferConstructor class for working with mask buffer/ класс для работы с буфером маски
   * @param constructors.MaskCharacterConstructor class for working with mask character/ класс для работы с символом маски
   * @param constructors.MaskCharacterLengthConstructor class for working with mask character length/ класс для работы с длиной символов маски
   * @param constructors.MaskDataConstructor class for working with mask data/ класс для работы с данными маски
   * @param constructors.MaskDateConstructor class for working with mask date/ класс для работы с датой маски
   * @param constructors.MaskEmitConstructor class for working with mask emit/ класс для работы с событиями маски
   * @param constructors.MaskEventConstructor class for working with mask event/ класс для работы с событием маски
   * @param constructors.MaskFocusConstructor class for working with mask focus/ класс для работы с фокусом маски
   * @param constructors.MaskFormatConstructor class for working with mask format/ класс для работы с форматом маски
   * @param constructors.MaskItemConstructor class for working with mask item/ класс для работы с элементом маски
   * @param constructors.MaskMatchConstructor class for working with mask match/ класс для работы с совпадением маски
   * @param constructors.MaskPatternConstructor class for working with mask pattern/ класс для работы с шаблоном маски
   * @param constructors.MaskRightConstructor class for working with mask right/ класс для работы с выравниванием справа маски
   * @param constructors.MaskRubberConstructor class for working with mask rubber/ класс для работы с резиной маски
   * @param constructors.MaskRubberItemConstructor class for working with mask rubber item/ класс для работы с резиновым элементом маски
   * @param constructors.MaskRubberTransitionConstructor class for working with mask rubber transition/ класс для работы с переходом резины маски
   * @param constructors.MaskSelectionConstructor class for working with mask selection/ класс для работы с выделением маски
   * @param constructors.MaskSpecialConstructor class for working with mask special/ класс для работы со специальными символами маски
   * @param constructors.MaskTypeConstructor class for working with mask type/ класс для работы с типом маски
   * @param constructors.MaskValidationConstructor class for working with mask validation/ класс для работы с валидацией маски
   * @param constructors.MaskValueBasicConstructor class for working with mask value basic/ класс для работы с базовым значением маски
   * @param constructors.MaskValueConstructor class for working with mask value/ класс для работы со значением маски
   * @param constructors.MaskViewConstructor class for working with mask view/ класс для работы с отображением маски
   */
  constructor(t, e, i, s, r, n, l, c, o) {
    /** Type helper/ Объект для работы с типом */
    a(this, "type");
    /** Buffer helper/ Объект для буферизации ввода */
    a(this, "buffer");
    /** Focus helper/ Объект для работы с фокусом */
    a(this, "focus");
    /** Entered characters length helper/ Объект длины введённых символов */
    a(this, "characterLength");
    /** Rubber groups length helper/ Объект длины резиновых групп */
    a(this, "rubberItem");
    /** Rubber transition symbol helper/ Объект символа перехода резины */
    a(this, "rubberTransition");
    /** Date/time mask helper/ Объект для работы с датой/временем */
    a(this, "date");
    /** Number/currency format mask helper/ Объект форматирования числа/валюты */
    a(this, "format");
    /** Special symbols/groups helper/ Объект для спецсимволов и групп */
    a(this, "special");
    /** Match helper/ Объект проверки символов */
    a(this, "match");
    /** Pattern helper/ Объект паттернов валидации */
    a(this, "pattern");
    /** Alignment helper/ Объект выравнивания */
    a(this, "right");
    /** Rubber groups helper/ Объект для работы с резиновыми группами */
    a(this, "rubber");
    /** Mask item helper/ Объект для работы с маской */
    a(this, "item");
    /** Selection helper/ Объект для работы с выделением */
    a(this, "selection");
    /** Characters helper/ Объект для работы с введёнными символами */
    a(this, "character");
    /** Basic value helper/ Объект для работы с базовыми значениями */
    a(this, "valueBasic");
    /** Value helper/ Объект для работы с итоговым значением */
    a(this, "value");
    /** Validation helper/ Объект для работы с валидацией */
    a(this, "validation");
    /** View helper/ Объект для работы с отображением */
    a(this, "view");
    /** Emit helper/ Объект для работы с событиями */
    a(this, "emit");
    /** Data helper/ Объект для работы с вводом */
    a(this, "data");
    /** Event helper/ Объект для работы с DOM-событиями */
    a(this, "event");
    /** Receiving basic standard values/ Получение базовых стандартных значений */
    a(this, "basic", u(() => {
      if (this.right.isRight()) {
        let t = "";
        return this.view.item.value.forEach((e) => {
          t += e.value;
        }), t;
      }
      return this.view.input.value;
    }));
    /** Values for CSS class/ Значения для CSS-класса */
    a(this, "classes", u(() => ({
      [`${this.className}--value`]: this.characterLength.is(),
      [`${this.className}--end`]: this.right.isEnd()
    })));
    /**
     * Sets new value and reinitializes mask.
     *
     * Устанавливает новое значение и переинициализирует маску.
     * @param value new value/ новое значение
     */
    a(this, "set", (t) => this.reset(t));
    /**
     * Clears value to default and focuses input.
     *
     * Очищает значение до значения по умолчанию и фокусирует поле ввода.
     */
    a(this, "clear", () => {
      var t, e;
      this.data.reset(((t = this.props.valueDefault) != null ? t : "").toString()), this.emit.set("reset", {}).go(), (e = this.element.value) == null || e.focus();
    });
    this.props = t, this.refs = e, this.element = i, this.classDesign = s, this.className = r, this.components = n, this.slots = l, this.emits = c;
    const {
      MaskBufferConstructor: p = gt,
      MaskCharacterConstructor: m = Lt,
      MaskCharacterLengthConstructor: f = vt,
      MaskDataConstructor: g = $t,
      MaskDateConstructor: M = Ct,
      MaskEmitConstructor: I = Ot,
      MaskEventConstructor: V = Rt,
      MaskFocusConstructor: E = dt,
      MaskFormatConstructor: N = St,
      MaskItemConstructor: A = Dt,
      MaskMatchConstructor: O = It,
      MaskPatternConstructor: $ = wt,
      MaskRightConstructor: R = Bt,
      MaskRubberConstructor: K = xt,
      MaskRubberItemConstructor: _ = bt,
      MaskRubberTransitionConstructor: P = yt,
      MaskSelectionConstructor: j = Tt,
      MaskSpecialConstructor: Y = Mt,
      MaskTypeConstructor: H = ft,
      MaskValidationConstructor: G = Nt,
      MaskValueBasicConstructor: U = Vt,
      MaskValueConstructor: q = Et,
      MaskViewConstructor: Q = At
    } = o != null ? o : {};
    this.type = new H(this.props), this.buffer = new p(), this.focus = new E(this.buffer), this.characterLength = new f(), this.rubberItem = new _(), this.rubberTransition = new P(), this.date = new M(this.props, this.type), this.format = new N(this.props, this.type, this.rubberItem), this.special = new Y(
      this.props,
      this.type,
      this.date,
      this.format
    ), this.match = new O(this.props, this.special), this.pattern = new $(
      this.props,
      this.type,
      this.date,
      this.special
    ), this.right = new R(this.props, this.type), this.rubber = new K(
      this.props,
      this.type,
      this.rubberItem,
      this.rubberTransition,
      this.special,
      this.match,
      this.format
    ), this.item = new A(
      this.props,
      this.type,
      this.rubberItem,
      this.characterLength,
      this.date,
      this.format,
      this.special
    ), this.selection = new j(
      this.special,
      this.item
    ), this.character = new m(
      this.props,
      this.rubberItem,
      this.characterLength,
      this.special,
      this.item,
      this.selection
    ), this.valueBasic = new U(
      this.rubberTransition,
      this.item,
      this.special,
      this.character
    ), this.value = new q(
      this.props,
      this.type,
      this.date,
      this.format,
      this.item,
      this.special,
      this.valueBasic
    ), this.validation = new G(
      this.pattern,
      this.value
    ), this.view = new Q(
      this.props,
      this.type,
      this.date,
      this.format,
      this.special,
      this.rubber,
      this.item,
      this.valueBasic,
      this.validation,
      this.className
    ), this.emit = new I(
      this.validation,
      this.emits
    ), this.data = new g(
      this.type,
      this.buffer,
      this.focus,
      this.rubberTransition,
      this.date,
      this.special,
      this.match,
      this.rubber,
      this.item,
      this.selection,
      this.character,
      this.valueBasic,
      this.value,
      this.emit,
      this.element
    ), this.event = new V(
      this.buffer,
      this.focus,
      this.characterLength,
      this.right,
      this.selection,
      this.valueBasic,
      this.emit,
      this.data
    ), y([e.value], () => this.reset(t.value)), y(this.basic, () => this.data.goSelection(!1)), y([lt.getStandard(), e.language], () => this.reset(this.value.getValueCache())), t.value && this.data.reset(T(t.value));
  }
  /**
   * Resets all values or updates to the new one.
   *
   * Сбрасывает все значения или обновляется до нового.
   * @param value new values/ новые значения
   */
  reset(t) {
    const e = T(t);
    return e !== this.props.valueDefault && (this.value.item.value !== e || this.valueBasic.item.value !== e && !ct(e)) ? (this.data.reset(e), this.emit.set("reset", {}).go(), !0) : !1;
  }
}
class Ut extends ot {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor mask item class/ класс элемента маски
   */
  constructor(e, i, s, r = Kt) {
    super(
      e,
      i,
      s
    );
    a(this, "item");
    /**
     * Element for storing the final data.
     *
     * Элемент для хранения конечных данных.
     */
    a(this, "renderData", () => this.props.name ? [
      d("input", {
        type: "hidden",
        name: this.props.name,
        value: this.item.value.item.value
      })
    ] : []);
    /**
     * Rendering method for input.
     *
     * Метод рендеринга для ввода.
     */
    a(this, "renderInput", () => {
      var e;
      return [
        d(
          "input",
          pt(
            this.props.inputAttrs,
            {
              ref: this.element,
              class: (e = this.classes) == null ? void 0 : e.value.input,
              type: "text",
              value: this.item.basic.value,
              placeholder: "",
              onFocus: this.item.event.onFocus,
              onBlur: this.item.event.onBlur,
              onKeydown: this.item.event.onKeydown,
              onKeyup: this.item.event.onKeyup,
              onBeforeinput: this.item.event.onBeforeinput,
              onInput: this.item.event.onInput,
              onChange: this.item.event.onChange,
              onPaste: this.item.event.onPaste,
              onClick: this.item.event.onClick
            }
          )
        )
      ];
    });
    /**
     * Rendering method for displaying the mask and the input data.
     *
     * Метод рендеринга для вывода маски и вводимых данных.
     */
    a(this, "renderView", () => {
      var r;
      const e = this.item.view.item.value, i = [];
      let s;
      return e.length > 0 ? e.forEach((n, l) => {
        i.push(
          d("span", {
            key: l,
            class: n.className,
            innerHTML: n.value === " " ? "&nbsp;" : n.value
          })
        );
      }) : s = "&nbsp;", [
        d(
          "span",
          {
            class: (r = this.classes) == null ? void 0 : r.value.character,
            "data-length": "1",
            ...mt.hidden(),
            innerHTML: s
          },
          i
        )
      ];
    });
    this.item = new r(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init();
  }
  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      valueBasic: this.item.basic,
      value: this.item.value.item,
      setValue: this.item.set,
      clear: this.item.clear
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classes.value,
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      character: this.getSubClass("character"),
      characterItem: this.getSubClass("character__item")
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var i;
    const e = [
      ...this.renderData(),
      ...this.renderInput(),
      ...this.renderView()
    ];
    return d("span", {
      ...this.getAttrs(),
      class: (i = this.classes) == null ? void 0 : i.value.main
    }, e);
  }
}
export {
  b as MASK_CHAR_DELETE,
  Ft as MASK_VIEW_DEFAULT,
  Kt as Mask,
  Ut as MaskDesign,
  Gt as defaultsMask
};
