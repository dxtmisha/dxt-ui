var Nt = Object.defineProperty;
var At = (i, t, e) => t in i ? Nt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var u = (i, t, e) => At(i, typeof t != "symbol" ? t + "" : t, e);
import { i as y, D as ct, r as _, a as Bt, G as w, f as $, t as N, b as Q, c as Ft, d as vt, e as z, g as W, h as F, A as V, j as S, k as bt, S as St, l as j, m as U, n as lt, E as xt, C as Et, H as T, L as mt } from "./ScrollbarWidth-DCvIln5p.js";
import { o as ji, p as Ui, U as _i, q as zi, s as Ki, u as Zi, v as Vi, w as Yi, x as qi, y as Ji, z as Qi, I as Xi, B as Mi, F as Oi, J as Ti, K as Gi, M as ts, N as es, O as is, P as ss, Q as rs, R as ns, T as os } from "./ScrollbarWidth-DCvIln5p.js";
import { isRef as X, h as Ht, computed as l, toRefs as Pt, useAttrs as Rt, useSlots as Wt, ref as p, watch as f, triggerRef as jt, shallowRef as Z, onUnmounted as nt, inject as Ut, provide as _t, watchEffect as zt } from "vue";
class Kt {
  /**
   * Constructor
   * @param name channel name/ название канала
   * @param callback callback on message received/ колбэк на получение сообщения
   */
  constructor(t, e) {
    u(this, "channel");
    /**
     * Update state on message received.
     *
     * Обновление состояния при получении сообщения.
     * @param event message event/ событие сообщения
     */
    u(this, "update", (t) => {
      var e;
      return (e = this.callback) == null || e.call(this, t), this;
    });
    if (this.callback = e, y())
      try {
        this.channel = new BroadcastChannel(`${Zt()}__${t}`), this.channel.onmessage = this.update;
      } catch (s) {
        console.error(`BroadcastMessage ${t}:`, s);
      }
  }
  /**
   * Send a message to the channel.
   *
   * Отправить сообщение в канал.
   * @param message message to send/ сообщение для отправки
   */
  post(t) {
    var e;
    return (e = this.channel) == null || e.postMessage(t), this;
  }
  /**
   * Set the callback function to be called when a message is received.
   *
   * Установить функцию колбэка, которая будет вызвана при получении сообщения.
   * @param callback callback function/ функция колбэка
   */
  setCallback(t) {
    return this.callback = t, this;
  }
}
const Zt = () => new ct("__broadcast-name").get(() => `name_${_(1e6, 9999999)}`);
function A(i) {
  var n, o, a, c, h, d, g, D;
  if (i instanceof Date)
    return i;
  if (Bt(i))
    return /* @__PURE__ */ new Date();
  if (typeof i == "number")
    return new Date(i);
  let t = i, e = w.getTimezoneFormat();
  i.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (P, M, k) => (t = M, e = k, P));
  const s = (D = (g = (d = (h = (c = (a = (o = (n = /^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) != null ? n : /^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) != null ? o : /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) != null ? a : /^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) != null ? c : /^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) != null ? h : /^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) != null ? d : /^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) != null ? g : /^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) != null ? D : t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${e}`);
}
function ot(i, t) {
  return $(i, (e) => e == null ? void 0 : e[t]);
}
class H {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = w.getLocation()) {
    u(this, "geo");
    this.geo = w.find(t);
    const e = this.getLocation();
    if (e in G)
      return G[e];
    G[e] = this;
  }
  /**
   * Returns an instance of the class according to the specified country code.
   *
   * Возвращает экземпляр класса по указанному коду страны.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getInstance(t = w.getLocation()) {
    return new H(t);
  }
  /**
   * Returns country code and language.
   *
   * Возвращает код страны и языка.
   */
  getLocation() {
    return this.geo.standard;
  }
  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   */
  getFirstDay() {
    return this.geo.firstDay;
  }
  /**
   * The consistent translation of language, region and script display names.
   *
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties/
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, e) {
    var o;
    let s = { type: "language" }, n;
    e && (typeof e == "string" ? s.type = e : s = {
      ...s,
      ...e
    });
    try {
      y() && (t ? n = new Intl.DisplayNames(this.getLocation(), s).of(t) : s.type === "language" ? n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country)));
    } catch (a) {
      console.error("display: ", a);
    }
    return (o = n != null ? n : t) != null ? o : "";
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(t, e) {
    const s = {
      type: "language",
      style: e
    };
    return this.display(w.getByCode(t).language, s);
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, e) {
    const s = {
      type: "region",
      style: e
    };
    return this.display(t, s);
  }
  /**
   * The method returns a string containing the full name in a specific format.
   *
   * Метод возвращает строку, содержащую полное имя в определённом формате.
   * @param last last name/ фамилию
   * @param first first name/ имя
   * @param surname surname middle name (optional)/ отчество
   * @param short shorten the names/ сократить названия
   */
  fullName(t, e, s, n) {
    var c, h;
    const o = (h = (c = this.geo) == null ? void 0 : c.nameFormat) != null ? h : "fl";
    let a;
    switch (o) {
      case "fsl":
        a = `${e}${s ? ` ${s}` : ""} ${t}`;
        break;
      case "lf":
        a = `${t} ${e}`;
        break;
      case "lsf":
        a = `${t}${s ? ` ${s}` : ""} ${e}`;
        break;
      default:
        a = `${e} ${t}`;
        break;
    }
    return n ? a.replace(/ (.)[^ ]+/ig, " $1.") : a;
  }
  /**
   * In basic use without specifying a locale, a formatted string.
   *
   * При обычном использовании без указания локали форматированная строка.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми
   * или всеми свойствами
   */
  number(t, e) {
    var s, n;
    return ((n = (s = this.numberObject(e)) == null ? void 0 : s.format) == null ? void 0 : n.call(s, N(t))) || t.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    var t, e, s, n, o;
    return ((o = (n = (s = (e = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : e.call(t, 1.2)) == null ? void 0 : s.find) == null ? void 0 : n.call(s, (a) => a.type === "decimal")) == null ? void 0 : o.value) || ".";
  }
  /**
   * Currency formatting.
   *
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param currencyOptions the currency to use in currency formatting/
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol/ не выводить значок валюты
   */
  currency(t, e, s = !1) {
    const n = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof e == "string" ? { currency: e } : e || {}
    }, o = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...a) => (n.currency = String(a[2]).toUpperCase(), String(a[1])));
    if (s) {
      const a = this.numberObject(n);
      return a ? ot(
        a.formatToParts(N(t)).filter((c) => ["literal", "currency"].indexOf(c.type) === -1),
        "value"
      ).join("") : t.toString();
    } else return "currency" in n ? this.number(
      typeof t == "number" ? t : o,
      n
    ) : this.number(
      typeof t == "number" ? t : o,
      {
        ...n,
        style: "decimal"
      }
    );
  }
  /**
   * Returns the currency symbol if it exists, otherwise the currency code.
   *
   * Возвращает символ для валюты, если он есть, или сам код валюты.
   * @param currency the currency to use in currency formatting/
   * валюта для использования в форматировании валюты
   * @param currencyDisplay how to display the currency in currency formatting/
   * как отобразить валюту в формате валюты
   */
  currencySymbol(t, e = "symbol") {
    var s, n, o, a, c;
    return ((c = (a = (o = (n = (s = this.numberObject({
      style: "currency",
      currencyDisplay: e,
      currency: t
    })) == null ? void 0 : s.formatToParts) == null ? void 0 : n.call(s, 100)) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (h) => h.type === "currency")) == null ? void 0 : c.value) || t;
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.
   *
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unitOptions the unit to use in unit formatting/ блок для использования
   * в форматировании блока
   */
  unit(t, e) {
    const s = {
      style: "unit",
      ...typeof e == "string" ? { unit: e } : e || {}
    }, n = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...o) => (s.unit = String(o[2]).toLowerCase(), String(o[1])));
    return this.number(n, s);
  }
  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(t, e = "byte") {
    const s = N(t);
    if (s > 1024 && Q(e))
      switch (e) {
        case "byte":
          return this.sizeFile(s / 1024, "kilobyte");
        case "kilobyte":
          return this.sizeFile(s / 1024, "megabyte");
        case "megabyte":
          return this.sizeFile(s / 1024, "gigabyte");
        case "gigabyte":
          return this.sizeFile(s / 1024, "terabyte");
        case "terabyte":
          return this.sizeFile(s / 1024, "petabyte");
      }
    return this.unit(t, e);
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return this.number(t, {
      style: "percent",
      ...e || {}
    });
  }
  /**
   * Number as a percentage (unit).
   *
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, e) {
    return this.percent(N(t) / 100, e);
  }
  /**
   * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
   * список слов для форматирования (в формате `one|two|few|many|other|zero`)
   * @param options Property for PluralRules/ свойство для PluralRules
   * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  plural(t, e, s, n) {
    var c;
    const o = N(t), a = e.split("|");
    if (a.length > 1)
      try {
        if (y()) {
          const d = new Intl.PluralRules(this.getLocation(), s).select(o);
          let g;
          switch (d) {
            case "zero":
              g = a[a.length - 1];
              break;
            case "one":
              g = a == null ? void 0 : a[0];
              break;
            case "two":
              g = a == null ? void 0 : a[1];
              break;
            case "few":
              g = a != null && a[3] ? a == null ? void 0 : a[2] : a == null ? void 0 : a[1];
              break;
            case "many":
              g = (a == null ? void 0 : a[3]) || (a == null ? void 0 : a[2]) || (a == null ? void 0 : a[1]);
              break;
            case "other":
              a.length === 6 ? g = a[a.length - 2] : g = a[a.length - 1];
              break;
          }
          return `${this.number(o, n)} ${g != null ? g : ""}`.trim();
        }
      } catch (h) {
        console.error("plural: ", h);
      }
    return `${this.number(o, n)} ${(c = a == null ? void 0 : a[0]) != null ? c : ""}`.trim();
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format/ дата для форматирования
   * @param type type of data format/ тип формата data
   * @param styleOptions the representation of the month/ представление месяца
   * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
   */
  date(t, e, s, n) {
    const o = A(t), a = typeof s == "string", c = this.dateOptions(e, a ? s : "short");
    return n && (c.hour12 = !1), a || Object.assign(c, s), o.toLocaleString(this.getLocation(), c);
  }
  /**
   * Enables language-sensitive relative time formatting.
   *
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param styleOptions the length of the internationalized message/
   * длина интернационализированного сообщения
   * @param todayValue current day/ текущий день
   */
  relative(t, e, s) {
    const n = A(t), o = s || /* @__PURE__ */ new Date(), a = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let c = "second", h = (n.getTime() - o.getTime()) / 1e3;
    return Math.abs(h) >= 60 && (c = "minute", h /= 60, Math.abs(h) >= 60 && (c = "hour", h /= 60, Math.abs(h) >= 24 && (c = "day", h /= 24, Math.abs(h) >= 30 && (c = "month", h /= 30, Math.abs(h) >= 12 && (c = "year", h /= 12))))), this.relativeByValue(h, c, a);
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.
   *
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param limit values that determine the output limit (values per day)/
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day/ текущий день
   * @param relativeOptions the length of the internationalized message/
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month/ представление месяца
   * @param type type of data format/ тип формата data
   * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
   */
  relativeLimit(t, e, s, n, o, a, c) {
    const h = A(t), d = s || /* @__PURE__ */ new Date(), g = new Date(d), D = new Date(d);
    return g.setDate(d.getDate() - e), D.setDate(d.getDate() + e), h >= g && h <= D ? this.relative(
      h,
      n,
      d
    ) : this.date(
      h,
      a,
      o,
      c
    );
  }
  /**
   * Возвращает отформатированное значение времени, прошедшего с момента события
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unit time unit/ единица времени
   * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
   */
  relativeByValue(t, e, s) {
    const n = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    try {
      if (y())
        return new Intl.RelativeTimeFormat(this.getLocation(), n).format(Math.round(N(t)), e);
    } catch (o) {
      console.error("relative: ", o);
    }
    return "";
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the month/ представление месяца
   */
  month(t, e) {
    try {
      if (y())
        return Intl.DateTimeFormat(this.getLocation(), { month: e || "long" }).format(A(t));
    } catch (s) {
      console.error("month: ", s);
    }
    return "";
  }
  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(t) {
    const e = [{
      label: "",
      value: void 0
    }];
    try {
      if (y()) {
        const s = /* @__PURE__ */ new Date(), n = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
        for (let o = 0; o < 12; o++)
          s.setMonth(o), e.push({
            label: n.format(s).replace(/^./, (a) => a.toUpperCase()),
            value: o + 1
          });
      }
    } catch (s) {
      console.error("months: ", s);
    }
    return e;
  }
  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(t, e) {
    try {
      if (y())
        return Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }).format(A(t));
    } catch (s) {
      console.error("weekday: ", s);
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(t) {
    const e = [{
      label: "",
      value: void 0
    }];
    try {
      if (y()) {
        const s = /* @__PURE__ */ new Date(), n = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), o = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        s.setDate(s.getDate() - o);
        for (let a = 0; a < 7; a++)
          e.push({
            label: n.format(s).replace(/^./, (c) => c.toUpperCase()),
            value: s.getDay()
          }), s.setDate(s.getDate() + 1);
      }
    } catch (s) {
      console.error("weekdays: ", s);
    }
    return e;
  }
  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(t) {
    return this.date(t, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.
   *
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data/ массив с данными
   * @param compareFn a function for sorting/ функция для сортировки
   */
  sort(t, e = (s, n) => [s, n]) {
    if (y()) {
      const s = new Intl.Collator(this.getLocation());
      return t.sort((n, o) => s.compare(...e(n, o)));
    }
    return t;
  }
  /**
   * The object enables language-sensitive number formatting.
   *
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties/
   * объект с некоторыми или всеми свойствами
   */
  numberObject(t) {
    try {
      if (y())
        return new Intl.NumberFormat(this.getLocation(), t);
    } catch (e) {
      console.error("numberObject: ", e);
    }
  }
  /**
   * Returns options for data according to its type.
   *
   * Возвращает options для data по его типу.
   * @param type type of data format/ тип формата data
   * @param display the representation of the month/ представление месяца
   */
  dateOptions(t, e = "short") {
    const s = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(t) !== -1 && (s.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month", "day-month"].indexOf(t) !== -1 && (s.month = e), ["full", "datetime", "date", void 0, "day", "day-month"].indexOf(t) !== -1 && (s.day = "2-digit"), t !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(t) !== -1 && (s.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(t) !== -1 && (s.minute = "2-digit"), ["full", "time", "second"].indexOf(t) !== -1 && (s.second = "2-digit")), s;
  }
}
const G = {};
class ht {
  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(t, e = "date", s = w.getLocation()) {
    u(this, "date");
    u(this, "hour24", !1);
    u(this, "watch");
    this.type = e, this.code = s, this.date = A(t);
  }
  /**
   * Returns an object for working with formatting.
   *
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new H(this.code);
  }
  /**
   * Returns a Date object.
   *
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Returns the type of data output.
   *
   * Возвращает тип вывода данных.
   */
  getType() {
    return this.type;
  }
  /**
   * Returns the format of hours.
   *
   * Возвращает формат часов.
   */
  getHoursType() {
    const t = this.clone();
    return t.setHours(23), t.toLocaleTimeString(this.getIntl().getLocation(), { hour: "2-digit" }).match(/23/ig) ? "24" : "12";
  }
  /**
   * Whether to use 12-hour time.
   *
   * Использовать ли 12-часовой формат времени.
   */
  getHour24() {
    return this.hour24;
  }
  /**
   * The method returns the difference, in minutes, between
   * a date as evaluated in the UTC time zone, and the same date as evaluated
   * in the local time zone.
   *
   * Метод возвращает смещение часового пояса относительно часового пояса UTC
   * в минутах для текущей локали.
   */
  getTimeZoneOffset() {
    return this.date.getTimezoneOffset();
  }
  /**
   * Returns the time zone as a string.
   *
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data/ стиль возвращаемых данных
   */
  getTimeZone(t) {
    const e = this.getTimeZoneOffset();
    if (t === "minute")
      return e.toString();
    const s = e / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(s), { signDisplay: "always" });
    const n = this.getIntl().number(Math.trunc(s), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), o = s.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${n}${o}` : `${n}:${o}`;
  }
  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    const t = this.getIntl().getFirstDay();
    return t === "Sa" ? 6 : t === "Su" ? 0 : 1;
  }
  /**
   * The method returns the year of the specified date according to local time.
   *
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.date.getFullYear();
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.
   *
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.date.getMonth() + 1;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.
   *
   * Метод возвращает день месяца указанной даты по местному времени
   */
  getDay() {
    return this.date.getDate();
  }
  /**
   * The method returns the hour for the specified date, according to local time.
   *
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.date.getHours();
  }
  /**
   * The method returns the minutes in the specified date according to local time.
   *
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.date.getMinutes();
  }
  /**
   * The method returns the seconds in the specified date according to local time.
   *
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.date.getSeconds();
  }
  /**
   * Returns the last day of the week.
   *
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0;
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output/ тип формата даты вывода
   * @param styleOptions the representation of the month/ представление месяца
   */
  locale(t = this.type, e) {
    return this.getIntl().date(
      this.date,
      t,
      e,
      this.hour24
    );
  }
  /**
   * Returns the formatted year.
   *
   * Возвращает отформатированный год.
   * @param style the representation of the month/ представление месяца
   */
  localeYear(t = "numeric") {
    return this.locale("year", { year: t });
  }
  /**
   * Returns the formatted month.
   *
   * Возвращает отформатированный месяц.
   * @param style the representation of the month/ представление месяца
   */
  localeMonth(t = "long") {
    return this.locale("month", { month: t });
  }
  /**
   * Returns the formatted day.
   *
   * Возвращает отформатированный день.
   * @param style the representation of the month/ представление месяца
   */
  localeDay(t = "numeric") {
    return this.locale("day", { day: t });
  }
  /**
   * Returns the formatted hour.
   *
   * Возвращает отформатированный час.
   * @param style the representation of the month/ представление месяца
   */
  localeHour(t = "numeric") {
    return this.locale("hour", { hour: t });
  }
  /**
   * Returns the formatted minute.
   *
   * Возвращает отформатированную минуту.
   * @param style the representation of the month/ представление месяца
   */
  localeMinute(t = "numeric") {
    return this.locale("minute", { minute: t });
  }
  /**
   * Returns the formatted second.
   *
   * Возвращает отформатированную секунду.
   * @param style the representation of the month/ представление месяца
   */
  localeSecond(t = "numeric") {
    return this.locale("second", { second: t });
  }
  /**
   * Output of standard data.
   *
   * Вывод стандартных данных.
   * @param timeZone add time zone/ добавить временную зону
   */
  standard(t = !0) {
    const e = new ht(this.date, this.type, "en-GB"), s = [];
    let n;
    return e.setHour24(!0), this.type === "hour-minute" ? n = e.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (s.push(e.localeYear()), s.push(e.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && s.push(e.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (n = e.locale("time"))), `${s.join("-")}${n ? `T${n}${t ? e.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.
   *
   * Изменять полностью дату.
   * @param value an integer value representing the number/
   * целочисленное значение, представляющее число
   */
  setDate(t) {
    return this.date = A(t), this.update(), this;
  }
  /**
   * Change the type of data output.
   *
   * Изменить тип вывода данных.
   * @param value type of output/ тип вывод
   */
  setType(t) {
    return this.type = t, this.update(), this;
  }
  /**
   * Whether to use 12-hour time.
   *
   * Использовать ли 12-часовой формат времени.
   * @param value If true, output the 12-hour time format/
   * если true, выводить 12-часовой формат времени
   */
  setHour24(t) {
    return this.hour24 = t, this.update(), this;
  }
  /**
   * To change the location.
   *
   * Изменить местоположение.
   * @param code country and language code/ код страны и языка
   */
  setCode(t) {
    return this.code = t, this;
  }
  /**
   * The function is called when the data is updated.
   *
   * Функция вызывается при обновлении данных.
   * @param watch the function calls/ функция вызывает
   */
  setWatch(t) {
    return this.watch = t, this;
  }
  /**
   * The method sets the full year for a specified date according to local time.
   *
   * Метод устанавливает полный год указанной даты по местному времени.
   * @param value value/ значения
   */
  setYear(t) {
    return this.date.setFullYear(t), this.update(), this;
  }
  /**
   * The method sets the month for a specified date according to the currently set year.
   *
   * Метод устанавливает месяц указанной даты по местному времени.
   * @param value value/ значения
   */
  setMonth(t) {
    return this.date.setMonth(t - 1), this.update(), this;
  }
  /**
   * The method changes the day of the month of a given Date instance, based on local time.
   *
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value/ значения
   */
  setDay(t) {
    return this.date.setDate(t), this.update(), this;
  }
  /**
   * The method sets the hours for a specified date according to local time.
   *
   * Метод устанавливает часы указанной даты по местному времени.
   * @param value value/ значения
   */
  setHour(t) {
    return this.date.setHours(t), this.update(), this;
  }
  /**
   * The method sets the minutes for a specified date according to local time
   *
   * Метод устанавливает минуты указанной даты по местному времени
   * @param value value / значения
   */
  setMinute(t) {
    return this.date.setMinutes(t), this.update(), this;
  }
  /**
   * The method sets the seconds for a specified date according to local time.
   *
   * Метод устанавливает секунды указанной даты по местному времени.
   * @param value value/ значения
   */
  setSecond(t) {
    return this.date.setSeconds(t), this.update(), this;
  }
  /**
   * Shift the date by a given value in years.
   *
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving/ значения для перемещения
   */
  moveByYear(t) {
    return this.setYear(this.date.getFullYear() + t), this;
  }
  /**
   * Shift the date by a given value in months.
   *
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving/ значения для перемещения
   */
  moveByMonth(t) {
    return this.setMonth(this.date.getMonth() + 1 + t), this;
  }
  /**
   * Shift the date by a given value in days.
   *
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving/ значения для перемещения
   */
  moveByDay(t) {
    return this.setDay(this.date.getDate() + t), this;
  }
  /**
   * Shift the date by a given value in hours.
   *
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving/ значения для перемещения
   */
  moveByHour(t) {
    return this.setHour(this.date.getHours() + t), this;
  }
  /**
   * Shift the date by a given value in minutes.
   *
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving/ значения для перемещения
   */
  moveByMinute(t) {
    return this.setMinute(this.date.getMinutes() + t), this;
  }
  /**
   * Shift the date by a given value in seconds.
   *
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving/ значения для перемещения
   */
  moveBySecond(t) {
    return this.setSecond(this.date.getSeconds() + t), this;
  }
  /**
   * Translate to the first month.
   *
   * Переводить на первый месяц.
   */
  moveMonthFirst() {
    return this.setMonth(1), this;
  }
  /**
   * Translate to the first month.
   *
   * Переводить на первый месяц.
   */
  moveMonthLast() {
    return this.setMonth(12), this;
  }
  /**
   * Translate to the first day of the next month.
   *
   * Переводить на первый день следующего месяца.
   */
  moveMonthNext() {
    return this.setDay(1).moveByMonth(1), this;
  }
  /**
   * Translate to the first day of the previous month.
   *
   * Переводить на первый день предыдущего месяца.
   */
  moveMonthPrevious() {
    return this.setDay(1).moveByMonth(-1), this;
  }
  /**
   * Translate to the first day of the week.
   *
   * Переводить на первый день недели.
   */
  moveWeekdayFirst() {
    const t = this.date.getDay(), e = this.getFirstDayCode();
    return this.moveByDay(
      (e === 6 ? -1 : e) - t
    ), this;
  }
  /**
   * Translate to the last day of the week.
   *
   * Переводить на последний день недели.
   */
  moveWeekdayLast() {
    return this.moveWeekdayFirst().moveByDay(6), this;
  }
  /**
   * Translate to the first day of the first week of the month.
   *
   * Переводить на первый день первой недели месяца.
   */
  moveWeekdayFirstByMonth() {
    return this.moveDayFirst().moveWeekdayFirst(), this;
  }
  /**
   * Translate to the first day of the first full week of the following month.
   *
   * Переводить на первый день первой полной недели следующего месяца.
   */
  moveWeekdayLastByMonth() {
    return this.moveDayLast().moveWeekdayLast(), this;
  }
  /**
   * Translate to the next week.
   *
   * Переводить на следующую неделю.
   */
  moveWeekdayNext() {
    return this.moveWeekdayFirst().moveByDay(7), this;
  }
  /**
   * Translate to the previous week.
   *
   * Переводить на предыдущую неделю.
   */
  moveWeekdayPrevious() {
    return this.moveWeekdayFirst().moveByDay(-7), this;
  }
  /**
   * Translate to the first day of the month.
   *
   * Переводить на первый день месяца.
   */
  moveDayFirst() {
    return this.setDay(1), this;
  }
  /**
   * Translate to the last day of the month.
   *
   * Переводить на последний день месяца.
   */
  moveDayLast() {
    return this.setDay(1).moveByMonth(1).moveByDay(-1), this;
  }
  /**
   * Translate to the next day.
   *
   * Переводить на следующий день.
   */
  moveDayNext() {
    return this.moveByDay(1), this;
  }
  /**
   * Translate to the previous day.
   *
   * Переводить на предыдущий день.
   */
  moveDayPrevious() {
    return this.moveByDay(-1), this;
  }
  /**
   * Clone the Date object.
   *
   * Клонировать объект Date.
   */
  clone() {
    return new Date(this.date);
  }
  /**
   * Clone the GeoDate object.
   *
   * Клонировать объект GeoDate.
   */
  cloneClass() {
    return new this.constructor(
      this.clone(),
      this.type,
      this.code
    );
  }
  /**
   * Clone the GeoDate object and set the month to January.
   *
   * Клонировать объект GeoDate и установить месяц на январь.
   */
  cloneMonthFirst() {
    return this.cloneClass().moveMonthFirst();
  }
  /**
   * Clone the GeoDate object and move the month to the end of the year.
   *
   * Клонировать объект GeoDate и перевести месяц на конец года.
   */
  cloneMonthLast() {
    return this.cloneClass().moveMonthLast();
  }
  /**
   * Clone the GeoDate object and transfer it one month ahead.
   *
   * Клонировать объект GeoDate и перевести на 1 месяц вперед.
   */
  cloneMonthNext() {
    return this.cloneClass().moveMonthNext();
  }
  /**
   * Clone the GeoDate object and transfer it one month back.
   *
   * Клонировать объект GeoDate и перевести на 1 месяц назад.
   */
  cloneMonthPrevious() {
    return this.cloneClass().moveMonthPrevious();
  }
  /**
   * Returns the first day of the week according to the current date.
   *
   * Возвращает первый день недели по текущей дате.
   */
  cloneWeekdayFirst() {
    return this.cloneClass().moveWeekdayFirst();
  }
  /**
   * Returns the last day of the week according to the current date.
   *
   * Возвращает последний день недели по текущей дате.
   */
  cloneWeekdayLast() {
    return this.cloneClass().moveWeekdayLast();
  }
  /**
   * Returns the first day of the week according to the current month.
   *
   * Возвращает первый день недели по текущему месяцу.
   */
  cloneWeekdayFirstByMonth() {
    return this.cloneClass().moveWeekdayFirstByMonth();
  }
  /**
   * Returns the last day of the week according to the current month.
   *
   * Возвращает последний день недели по текущему месяцу.
   */
  cloneWeekdayLastByMonth() {
    return this.cloneClass().moveWeekdayLastByMonth();
  }
  /**
   * Returns the next week according to the current date.
   *
   * Возвращает следующую неделю по текущей дате.
   */
  cloneWeekdayNext() {
    return this.cloneClass().moveWeekdayNext();
  }
  /**
   * Returns the previous week according to the current date.
   *
   * Возвращает предыдущую неделю по текущей дате.
   */
  cloneWeekdayPrevious() {
    return this.cloneClass().moveWeekdayPrevious();
  }
  /**
   * Clone the GeoDate object and move the day to the beginning of the month.
   *
   * Клонировать объект GeoDate и перевести день на начало месяца.
   */
  cloneDayFirst() {
    return this.cloneClass().moveDayFirst();
  }
  /**
   * Clone the GeoDate object and move the day to the end of the month.
   *
   * Клонировать объект GeoDate и перевести день на конец месяца.
   */
  cloneDayLast() {
    return this.cloneClass().moveDayLast();
  }
  /**
   * Clone the GeoDate object and move by 1 day.
   *
   * Клонировать объект GeoDate и перевести на 1 день.
   */
  cloneDayNext() {
    return this.cloneClass().moveDayNext();
  }
  /**
   * Clone the GeoDate object and go back by 1 day.
   *
   * Клонировать объект GeoDate и вернуться на 1 день.
   */
  cloneDayPrevious() {
    return this.cloneClass().moveDayPrevious();
  }
  /**
   * Updating all values.
   *
   * Обновление всех значений.
   */
  update() {
    var t;
    return (t = this.watch) == null || t.call(
      this,
      this.date,
      this.type,
      this.hour24
    ), this;
  }
}
const r = "@flag", E = class E {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = w.getLocation()) {
    this.code = t;
  }
  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code/ код страны
   */
  get(t = this.code) {
    var s;
    const e = w.find(t);
    if (e) {
      const n = this.getCountry(e);
      return {
        language: this.getLanguage(e),
        country: n,
        standard: e.standard,
        icon: (s = E.flags) == null ? void 0 : s[e.country],
        label: n,
        value: e.country
      };
    }
  }
  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code/ код страны
   */
  getFlag(t = this.code) {
    var e;
    return (e = this.get(t)) == null ? void 0 : e.icon;
  }
  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes country code/ код страны
   */
  getList(t) {
    return $(this.getCodes(t), (e) => this.get(e));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return $(this.getList(t), (e) => {
      const s = new E(e.standard).get(e.standard);
      return {
        ...e,
        description: s == null ? void 0 : s.country,
        nationalLanguage: s == null ? void 0 : s.language,
        nationalCountry: s == null ? void 0 : s.country
      };
    });
  }
  /**
   * To change the location.
   *
   * Изменить местоположение.
   * @param code country and language code/ код страны и языка
   */
  setCode(t) {
    return this.code = t, this;
  }
  /**
   * Returns a special object for formatting.
   *
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new H(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.
   *
   * Возвращает список стран для получения данных.
   * @param codes country code/ код страны
   */
  getCodes(t) {
    return t != null ? t : Object.keys(E.flags);
  }
  /**
   * Getting the name of the language.
   *
   * Получение названия языка.
   * @param data object with information of data/ объект с информацией данных
   */
  getLanguage(t) {
    return this.getLocation().languageName(t.language);
  }
  /**
   * Getting the name of the country.
   *
   * Получение названия страны.
   * @param data object with information of data/ объект с информацией данных
   */
  getCountry(t) {
    return this.getLocation().countryName(t.country);
  }
};
u(E, "flags", {
  AD: `${r}-ad`,
  AE: `${r}-ae`,
  AF: `${r}-af`,
  AG: `${r}-ag`,
  AI: `${r}-ai`,
  AL: `${r}-al`,
  AM: `${r}-am`,
  AN: `${r}-an`,
  AO: `${r}-ao`,
  AQ: `${r}-aq`,
  AR: `${r}-ar`,
  AS: `${r}-as`,
  AT: `${r}-at`,
  AU: `${r}-au`,
  AW: `${r}-aw`,
  AZ: `${r}-az`,
  BA: `${r}-ba`,
  BB: `${r}-bb`,
  BD: `${r}-bd`,
  BE: `${r}-be`,
  BF: `${r}-bf`,
  BG: `${r}-bg`,
  BH: `${r}-bh`,
  BI: `${r}-bi`,
  BJ: `${r}-bj`,
  BL: `${r}-bl`,
  BM: `${r}-bm`,
  BN: `${r}-bn`,
  BO: `${r}-bo`,
  BR: `${r}-br`,
  BS: `${r}-bs`,
  BT: `${r}-bt`,
  BW: `${r}-bw`,
  BY: `${r}-by`,
  BZ: `${r}-bz`,
  CA: `${r}-ca`,
  CC: `${r}-cc`,
  CD: `${r}-cd`,
  CF: `${r}-cf`,
  CG: `${r}-cg`,
  CH: `${r}-ch`,
  CI: `${r}-ci`,
  CK: `${r}-ck`,
  CL: `${r}-cl`,
  CM: `${r}-cm`,
  CN: `${r}-cn`,
  CO: `${r}-co`,
  CR: `${r}-cr`,
  CU: `${r}-cu`,
  CV: `${r}-cv`,
  CW: `${r}-cw`,
  CX: `${r}-cx`,
  CY: `${r}-cy`,
  CZ: `${r}-cz`,
  DE: `${r}-de`,
  DJ: `${r}-dj`,
  DK: `${r}-dk`,
  DM: `${r}-dm`,
  DZ: `${r}-dz`,
  EC: `${r}-ec`,
  EE: `${r}-ee`,
  EG: `${r}-eg`,
  EH: `${r}-eh`,
  ER: `${r}-er`,
  ES: `${r}-es`,
  ET: `${r}-et`,
  FI: `${r}-fi`,
  FJ: `${r}-fj`,
  FK: `${r}-fk`,
  FM: `${r}-fm`,
  FO: `${r}-fo`,
  FR: `${r}-fr`,
  GA: `${r}-ga`,
  GB: `${r}-gb`,
  GD: `${r}-gd`,
  GE: `${r}-ge`,
  GF: `${r}-gf`,
  GG: `${r}-gg`,
  GH: `${r}-gh`,
  GI: `${r}-gi`,
  GL: `${r}-gl`,
  GM: `${r}-gm`,
  GN: `${r}-gn`,
  GQ: `${r}-gq`,
  GR: `${r}-gr`,
  GT: `${r}-gt`,
  GU: `${r}-gu`,
  GW: `${r}-gw`,
  GY: `${r}-gy`,
  HK: `${r}-hk`,
  HN: `${r}-hn`,
  HR: `${r}-hr`,
  HT: `${r}-ht`,
  HU: `${r}-hu`,
  ID: `${r}-id`,
  IE: `${r}-ie`,
  IL: `${r}-il`,
  IM: `${r}-im`,
  IN: `${r}-in`,
  IO: `${r}-io`,
  IQ: `${r}-iq`,
  IR: `${r}-ir`,
  IS: `${r}-is`,
  IT: `${r}-it`,
  JE: `${r}-je`,
  JM: `${r}-jm`,
  JO: `${r}-jo`,
  JP: `${r}-jp`,
  KE: `${r}-ke`,
  KG: `${r}-kg`,
  KH: `${r}-kh`,
  KI: `${r}-ki`,
  KM: `${r}-km`,
  KN: `${r}-kn`,
  KP: `${r}-kp`,
  KR: `${r}-kr`,
  KW: `${r}-kw`,
  KY: `${r}-ky`,
  KZ: `${r}-kz`,
  LA: `${r}-la`,
  LB: `${r}-lb`,
  LC: `${r}-lc`,
  LI: `${r}-li`,
  LK: `${r}-lk`,
  LR: `${r}-lr`,
  LS: `${r}-ls`,
  LT: `${r}-lt`,
  LU: `${r}-lu`,
  LV: `${r}-lv`,
  LY: `${r}-ly`,
  MA: `${r}-ma`,
  MC: `${r}-mc`,
  MD: `${r}-md`,
  ME: `${r}-me`,
  MF: `${r}-mf`,
  MG: `${r}-mg`,
  MH: `${r}-mh`,
  MK: `${r}-mk`,
  ML: `${r}-ml`,
  MM: `${r}-mm`,
  MN: `${r}-mn`,
  MO: `${r}-mo`,
  MP: `${r}-mp`,
  MQ: `${r}-mq`,
  MR: `${r}-mr`,
  MS: `${r}-ms`,
  MT: `${r}-mt`,
  MU: `${r}-mu`,
  MV: `${r}-mv`,
  MW: `${r}-mw`,
  MX: `${r}-mx`,
  MY: `${r}-my`,
  MZ: `${r}-mz`,
  NA: `${r}-na`,
  NC: `${r}-nc`,
  NE: `${r}-ne`,
  NF: `${r}-nf`,
  NG: `${r}-ng`,
  NI: `${r}-ni`,
  NL: `${r}-nl`,
  NO: `${r}-no`,
  NP: `${r}-np`,
  NR: `${r}-nr`,
  NU: `${r}-nu`,
  NZ: `${r}-nz`,
  OM: `${r}-om`,
  PA: `${r}-pa`,
  PE: `${r}-pe`,
  PF: `${r}-pf`,
  PG: `${r}-pg`,
  PH: `${r}-ph`,
  PK: `${r}-pk`,
  PL: `${r}-pl`,
  PM: `${r}-pm`,
  PN: `${r}-pn`,
  PR: `${r}-pr`,
  PS: `${r}-ps`,
  PT: `${r}-pt`,
  PW: `${r}-pw`,
  PY: `${r}-py`,
  QA: `${r}-qa`,
  RE: `${r}-re`,
  RO: `${r}-ro`,
  RS: `${r}-rs`,
  RU: `${r}-ru`,
  RW: `${r}-rw`,
  SA: `${r}-sa`,
  SB: `${r}-sb`,
  SC: `${r}-sc`,
  SD: `${r}-sd`,
  SE: `${r}-se`,
  SG: `${r}-sg`,
  SH: `${r}-sh`,
  SI: `${r}-si`,
  SJ: `${r}-sj`,
  SK: `${r}-sk`,
  SL: `${r}-sl`,
  SM: `${r}-sm`,
  SN: `${r}-sn`,
  SO: `${r}-so`,
  SR: `${r}-sr`,
  SS: `${r}-ss`,
  ST: `${r}-st`,
  SV: `${r}-sv`,
  SX: `${r}-sx`,
  SY: `${r}-sy`,
  SZ: `${r}-sz`,
  TC: `${r}-tc`,
  TD: `${r}-td`,
  TG: `${r}-tg`,
  TH: `${r}-th`,
  TJ: `${r}-tj`,
  TK: `${r}-tk`,
  TL: `${r}-tl`,
  TM: `${r}-tm`,
  TN: `${r}-tn`,
  TO: `${r}-to`,
  TR: `${r}-tr`,
  TT: `${r}-tt`,
  TV: `${r}-tv`,
  TW: `${r}-tw`,
  TZ: `${r}-tz`,
  UA: `${r}-ua`,
  UG: `${r}-ug`,
  US: `${r}-us`,
  UY: `${r}-uy`,
  UZ: `${r}-uz`,
  VA: `${r}-va`,
  VC: `${r}-vc`,
  VE: `${r}-ve`,
  VG: `${r}-vg`,
  VI: `${r}-vi`,
  VN: `${r}-vn`,
  VU: `${r}-vu`,
  WF: `${r}-wf`,
  WS: `${r}-ws`,
  YE: `${r}-ye`,
  YT: `${r}-yt`,
  ZA: `${r}-za`,
  ZM: `${r}-zm`,
  ZW: `${r}-zw`
});
let at = E, x;
class Fe {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(t) {
    return x && (x == null ? void 0 : x[t]);
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(t) {
    x === void 0 && (x = Ft(t));
  }
}
function Vt(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").trim();
}
class dt {
  /**
   * Creates an instance of MetaManager.
   *
   * Создает экземпляр MetaManager.
   * @param listMeta list of meta-tag names to manage / список имен мета-тегов для управления
   * @param isProperty use 'property' attribute instead of 'name' / использовать атрибут 'property' вместо 'name'
   */
  constructor(t, e = !1) {
    u(this, "items", {});
    this.listMeta = t, this.isProperty = e, this.update();
  }
  /**
   * Returns the list of meta tag names.
   *
   * Возвращает список имен мета-тегов.
   */
  getListMeta() {
    return this.listMeta;
  }
  /**
   * Get the content of a meta tag by name.
   *
   * Получает содержимое мета-тега по имени.
   * @param name meta tag name / имя мета-тега
   */
  get(t) {
    var e;
    return (e = this.items[t]) != null ? e : "";
  }
  /**
   * Returns all meta tags.
   *
   * Возвращает все мета-теги.
   */
  getItems() {
    return this.items;
  }
  /**
   * Returns all meta tags as HTML string.
   *
   * Возвращает все мета-теги в виде HTML-строки.
   */
  html() {
    return $(
      this.listMeta,
      (e) => this.toHtmlString(e)
    ).join("");
  }
  /**
   * Sets the content of a meta tag.
   *
   * Устанавливает содержимое мета-тега.
   * @param name meta tag name / имя мета-тега
   * @param content meta tag content / содержимое мета-тега
   */
  set(t, e) {
    return this.setItem(t, e).setMeta(t), this;
  }
  /**
   * Sets multiple meta tags from an object.
   *
   * Устанавливает несколько мета-тегов из объекта.
   * @param metaList object with meta tag names and content / объект с именами и содержимым мета-тегов
   */
  setByList(t) {
    return $(
      t,
      (e, s) => this.set(s, String(e))
    ), this;
  }
  /**
   * Returns the attribute name for meta tags.
   *
   * Возвращает имя атрибута для мета-тегов.
   */
  getAttributeName() {
    return this.isProperty ? "property" : "name";
  }
  /**
   * Finds a meta element in the DOM.
   *
   * Находит мета-элемент в DOM.
   * @param name meta tag name / имя мета-тега
   */
  findMetaElement(t) {
    if (!y())
      return;
    const e = `meta[${this.getAttributeName()}="${t}"]`;
    return document.querySelector(e) || void 0;
  }
  /**
   * Sets the content of a meta tag in internal storage.
   *
   * Устанавливает содержимое мета-тега во внутреннем хранилище.
   * @param name meta tag name / имя мета-тега
   * @param content meta tag content / содержимое мета-тега
   */
  setItem(t, e) {
    return this.items[t] = e, this;
  }
  /**
   * Sets or creates a meta tag in the DOM.
   *
   * Устанавливает или создает мета-тег в DOM.
   * @param name meta tag name / имя мета-тега
   */
  setMeta(t) {
    var n;
    const e = this.findMetaElement(t), s = (n = this.items[t]) != null ? n : "";
    if (e)
      e.content = s;
    else if (y()) {
      const o = { content: s };
      this.isProperty ? o.property = t : o.name = t, vt(document.head, "meta", o);
    }
    return this;
  }
  /**
   * Converts meta tag to HTML string.
   *
   * Преобразует мета-тег в HTML-строку.
   * @param name meta tag name / имя мета-тега
   */
  toHtmlString(t) {
    var s;
    const e = Vt((s = this.items[t]) != null ? s : "");
    return e ? `<meta ${this.getAttributeName()}="${t}" content="${e}">` : "";
  }
  /**
   * Updates meta tags data from the DOM.
   *
   * Обновляет данные мета-тегов из DOM.
   */
  update() {
    return this.listMeta.forEach((t) => {
      var e, s;
      this.items[t] = (s = (e = this.findMetaElement(t)) == null ? void 0 : e.content) != null ? s : "";
    }), this;
  }
}
var L = /* @__PURE__ */ ((i) => (i.description = "description", i.keywords = "keywords", i.canonical = "canonical", i.robots = "robots", i.author = "author", i))(L || {}), Yt = /* @__PURE__ */ ((i) => (i.indexFollow = "index, follow", i.noIndexFollow = "noindex, follow", i.indexNoFollow = "index, nofollow", i.noIndexNoFollow = "noindex, nofollow", i.noArchive = "noarchive", i.noSnippet = "nosnippet", i.noImageIndex = "noimageindex", i.images = "images", i.noTranslate = "notranslate", i.noPreview = "nopreview", i.textOnly = "textonly", i.noIndexSubpages = "noindex, noarchive", i.none = "none", i))(Yt || {}), v = /* @__PURE__ */ ((i) => (i.title = "og:title", i.type = "og:type", i.url = "og:url", i.image = "og:image", i.description = "og:description", i.locale = "og:locale", i.siteName = "og:site_name", i.localeAlternate = "og:locale:alternate", i.imageUrl = "og:image:url", i.imageSecureUrl = "og:image:secure_url", i.imageType = "og:image:type", i.imageWidth = "og:image:width", i.imageHeight = "og:image:height", i.imageAlt = "og:image:alt", i.video = "og:video", i.videoUrl = "og:video:url", i.videoSecureUrl = "og:video:secure_url", i.videoType = "og:video:type", i.videoWidth = "og:video:width", i.videoHeight = "og:video:height", i.audio = "og:audio", i.audioSecureUrl = "og:audio:secure_url", i.audioType = "og:audio:type", i.articlePublishedTime = "article:published_time", i.articleModifiedTime = "article:modified_time", i.articleExpirationTime = "article:expiration_time", i.articleAuthor = "article:author", i.articleSection = "article:section", i.articleTag = "article:tag", i.bookAuthor = "book:author", i.bookIsbn = "book:isbn", i.bookReleaseDate = "book:release_date", i.bookTag = "book:tag", i.musicDuration = "music:duration", i.musicAlbum = "music:album", i.musicAlbumDisc = "music:album:disc", i.musicAlbumTrack = "music:album:track", i.musicMusician = "music:musician", i.musicSong = "music:song", i.musicSongDisc = "music:song:disc", i.musicSongTrack = "music:song:track", i.musicReleaseDate = "music:release_date", i.musicCreator = "music:creator", i.videoActor = "video:actor", i.videoActorRole = "video:actor:role", i.videoDirector = "video:director", i.videoWriter = "video:writer", i.videoDuration = "video:duration", i.videoReleaseDate = "video:release_date", i.videoTag = "video:tag", i.videoSeries = "video:series", i.profileFirstName = "profile:first_name", i.profileLastName = "profile:last_name", i.profileUsername = "profile:username", i.profileGender = "profile:gender", i.productBrand = "product:brand", i.productAvailability = "product:availability", i.productCondition = "product:condition", i.productPriceAmount = "product:price:amount", i.productPriceCurrency = "product:price:currency", i.productRetailerItemId = "product:retailer_item_id", i.productCategory = "product:category", i.productEan = "product:ean", i.productIsbn = "product:isbn", i.productMfrPartNo = "product:mfr_part_no", i.productUpc = "product:upc", i.productWeightValue = "product:weight:value", i.productWeightUnits = "product:weight:units", i.productColor = "product:color", i.productMaterial = "product:material", i.productPattern = "product:pattern", i.productAgeGroup = "product:age_group", i.productGender = "product:gender", i))(v || {}), qt = /* @__PURE__ */ ((i) => (i.website = "website", i.article = "article", i.video = "video.other", i.videoTvShow = "video.tv_show", i.videoEpisode = "video.episode", i.videoMovie = "video.movie", i.musicAlbum = "music.album", i.musicPlaylist = "music.playlist", i.musicSong = "music.song", i.musicRadioStation = "music.radio_station", i.app = "app", i.product = "product", i.business = "business.business", i.place = "place", i.event = "event", i.profile = "profile", i.book = "book", i))(qt || {}), Jt = /* @__PURE__ */ ((i) => (i.inStock = "in stock", i.outOfStock = "out of stock", i.preorder = "preorder", i.backorder = "backorder", i.discontinued = "discontinued", i.pending = "pending", i))(Jt || {}), Qt = /* @__PURE__ */ ((i) => (i.new = "new", i.used = "used", i.refurbished = "refurbished", i))(Qt || {}), Xt = /* @__PURE__ */ ((i) => (i.newborn = "newborn", i.infant = "infant", i.toddler = "toddler", i.kids = "kids", i.adult = "adult", i))(Xt || {}), Mt = /* @__PURE__ */ ((i) => (i.female = "female", i.male = "male", i.unisex = "unisex", i))(Mt || {}), b = /* @__PURE__ */ ((i) => (i.card = "twitter:card", i.site = "twitter:site", i.creator = "twitter:creator", i.url = "twitter:url", i.title = "twitter:title", i.description = "twitter:description", i.image = "twitter:image", i.imageAlt = "twitter:image:alt", i.imageSrc = "twitter:image:src", i.imageWidth = "twitter:image:width", i.imageHeight = "twitter:image:height", i.label1 = "twitter:label1", i.data1 = "twitter:data1", i.label2 = "twitter:label2", i.data2 = "twitter:data2", i.appNameIphone = "twitter:app:name:iphone", i.appIdIphone = "twitter:app:id:iphone", i.appUrlIphone = "twitter:app:url:iphone", i.appNameIpad = "twitter:app:name:ipad", i.appIdIpad = "twitter:app:id:ipad", i.appUrlIpad = "twitter:app:url:ipad", i.appNameGooglePlay = "twitter:app:name:googleplay", i.appIdGooglePlay = "twitter:app:id:googleplay", i.appUrlGooglePlay = "twitter:app:url:googleplay", i.player = "twitter:player", i.playerWidth = "twitter:player:width", i.playerHeight = "twitter:player:height", i.playerStream = "twitter:player:stream", i.playerStreamContentType = "twitter:player:stream:content_type", i))(b || {}), Ot = /* @__PURE__ */ ((i) => (i.summary = "summary", i.summaryLargeImage = "summary_large_image", i.app = "app", i.player = "player", i.product = "product", i.gallery = "gallery", i.photo = "photo", i.leadGeneration = "lead_generation", i.audio = "audio", i.poll = "poll", i))(Ot || {});
class Tt extends dt {
  constructor() {
    super(Object.values(v), !0);
  }
  /**
   * Gets the Open Graph title.
   *
   * Получает заголовок Open Graph.
   */
  getTitle() {
    return this.get(v.title);
  }
  /**
   * Gets the Open Graph type.
   *
   * Получает тип Open Graph.
   */
  getType() {
    return this.get(v.type);
  }
  /**
   * Gets the Open Graph URL.
   *
   * Получает URL Open Graph.
   */
  getUrl() {
    return this.get(v.url);
  }
  /**
   * Gets the Open Graph image URL.
   *
   * Получает URL изображения Open Graph.
   */
  getImage() {
    return this.get(v.image);
  }
  /**
   * Gets the Open Graph description.
   *
   * Получает описание Open Graph.
   */
  getDescription() {
    return this.get(v.description);
  }
  /**
   * Gets the Open Graph locale.
   *
   * Получает локаль Open Graph.
   */
  getLocale() {
    return this.get(v.locale);
  }
  /**
   * Gets the Open Graph site name.
   *
   * Получает название сайта Open Graph.
   */
  getSiteName() {
    return this.get(v.siteName);
  }
  /**
   * Sets the Open Graph title.
   *
   * Устанавливает заголовок Open Graph.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set(v.title, t);
  }
  /**
   * Sets the Open Graph type.
   *
   * Устанавливает тип Open Graph.
   * @param type type / тип
   */
  setType(t) {
    return this.set(v.type, t);
  }
  /**
   * Sets the Open Graph URL.
   *
   * Устанавливает URL Open Graph.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set(v.url, t);
  }
  /**
   * Sets the Open Graph image URL.
   *
   * Устанавливает URL изображения Open Graph.
   * @param url image URL / URL изображения
   */
  setImage(t) {
    return this.set(v.image, t);
  }
  /**
   * Sets the Open Graph description.
   *
   * Устанавливает описание Open Graph.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set(v.description, t);
  }
  /**
   * Sets the Open Graph locale.
   *
   * Устанавливает локаль Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   */
  setLocale(t) {
    return this.set(v.locale, t);
  }
  /**
   * Sets the Open Graph site name.
   *
   * Устанавливает название сайта Open Graph.
   * @param siteName site name / название сайта
   */
  setSiteName(t) {
    return this.set(v.siteName, t);
  }
}
class Gt extends dt {
  constructor() {
    super(Object.values(b));
  }
  /**
   * Gets the Twitter Card type.
   *
   * Получает тип Twitter Card.
   */
  getCard() {
    return this.get(b.card);
  }
  /**
   * Gets the website or brand @username.
   *
   * Получает аккаунт сайта или бренда (@username).
   */
  getSite() {
    return this.get(b.site);
  }
  /**
   * Gets the content creator @username.
   *
   * Получает автора контента (@username).
   */
  getCreator() {
    return this.get(b.creator);
  }
  /**
   * Gets the page URL.
   *
   * Получает URL страницы.
   */
  getUrl() {
    return this.get(b.url);
  }
  /**
   * Gets the card title.
   *
   * Получает заголовок карточки.
   */
  getTitle() {
    return this.get(b.title);
  }
  /**
   * Gets the card description.
   *
   * Получает описание карточки.
   */
  getDescription() {
    return this.get(b.description);
  }
  /**
   * Gets the card image URL.
   *
   * Получает URL изображения карточки.
   */
  getImage() {
    return this.get(b.image);
  }
  /**
   * Sets the Twitter Card type.
   *
   * Устанавливает тип Twitter Card.
   * @param card card type / тип карточки
   */
  setCard(t) {
    return this.set(b.card, t), this;
  }
  /**
   * Sets the website or brand @username.
   *
   * Устанавливает аккаунт сайта или бренда (@username).
   * @param site @username / аккаунт
   */
  setSite(t) {
    return this.set(b.site, t), this;
  }
  /**
   * Sets the content creator @username.
   *
   * Устанавливает автора контента (@username).
   * @param creator @username / аккаунт автора
   */
  setCreator(t) {
    return this.set(b.creator, t), this;
  }
  /**
   * Sets the page URL.
   *
   * Устанавливает URL страницы.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set(b.url, t), this;
  }
  /**
   * Sets the card title.
   *
   * Устанавливает заголовок карточки.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set(b.title, t), this;
  }
  /**
   * Sets the card description.
   *
   * Устанавливает описание карточки.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set(b.description, t), this;
  }
  /**
   * Sets the card image URL.
   *
   * Устанавливает URL изображения карточки.
   * @param image image URL / URL изображения
   */
  setImage(t) {
    return this.set(b.image, t), this;
  }
}
class te extends dt {
  /**
   * Creates an instance of Meta with integrated Open Graph and Twitter Card support.
   *
   * Создает экземпляр Meta с интегрированной поддержкой Open Graph и Twitter Card.
   */
  constructor() {
    super(Object.values(L));
    u(this, "suffix");
    u(this, "og");
    u(this, "twitter");
    this.og = new Tt(), this.twitter = new Gt();
  }
  /**
   * Gets the MetaOg instance for advanced Open Graph operations.
   *
   * Получает экземпляр MetaOg для расширенных операций с Open Graph.
   */
  getOg() {
    return this.og;
  }
  /**
   * Gets the MetaTwitter instance for advanced Twitter Card operations.
   *
   * Получает экземпляр MetaTwitter для расширенных операций с Twitter Card.
   */
  getTwitter() {
    return this.twitter;
  }
  /**
   * Gets the page title without suffix.
   *
   * Получает заголовок страницы без суффикса.
   */
  getTitle() {
    return y() ? document.title.replace(this.getSuffix(), "").trim() : "";
  }
  /**
   * Gets the keywords meta tag.
   *
   * Получает мета-тег keywords.
   */
  getKeywords() {
    return this.get(L.keywords);
  }
  /**
   * Gets the description meta tag.
   *
   * Получает мета-тег description.
   */
  getDescription() {
    return this.get(L.description);
  }
  /**
   * Gets the Open Graph image URL.
   *
   * Получает URL изображения Open Graph.
   */
  getImage() {
    return this.og.getImage();
  }
  /**
   * Gets the canonical URL.
   *
   * Получает канонический URL.
   */
  getCanonical() {
    return this.get(L.canonical);
  }
  /**
   * Gets the robots meta tag value.
   *
   * Получает значение мета-тега robots.
   */
  getRobots() {
    return this.get(L.robots);
  }
  /**
   * Gets the author meta tag.
   *
   * Получает мета-тег author.
   */
  getAuthor() {
    return this.get(L.author);
  }
  /**
   * Gets the Open Graph site name.
   *
   * Получает название сайта Open Graph.
   */
  getSiteName() {
    return this.og.getSiteName();
  }
  /**
   * Gets the Open Graph locale.
   *
   * Получает локаль Open Graph.
   */
  getLocale() {
    return this.og.getLocale();
  }
  /**
   * Sets the page title (with suffix) and updates Open Graph and Twitter Card titles.
   *
   * Устанавливает заголовок страницы (с суффиксом) и обновляет заголовки Open Graph и Twitter Card.
   * @param title page title / заголовок страницы
   */
  setTitle(e) {
    if (y()) {
      const s = z(e) ? `${e}${this.getSuffix()}` : this.suffix ? this.suffix : "";
      document.title = s, this.og.setTitle(s), this.twitter.setTitle(s);
    }
    return this;
  }
  /**
   * Sets the keywords meta tag.
   *
   * Устанавливает мета-тег keywords.
   * @param keywords keywords as string or array / ключевые слова в виде строки или массива
   */
  setKeywords(e) {
    return this.set(L.keywords, W(e).join(", ")), this;
  }
  /**
   * Sets the description meta tag.
   *
   * Устанавливает мета-тег description.
   * @param description page description / описание страницы
   */
  setDescription(e) {
    return this.set(L.description, e), this;
  }
  /**
   * Sets the image for Open Graph and Twitter Card.
   *
   * Устанавливает изображение для Open Graph и Twitter Card.
   * @param image image URL / URL изображения
   */
  setImage(e) {
    return this.og.setImage(e), this.twitter.setImage(e), this;
  }
  /**
   * Sets the canonical URL and updates Open Graph and Twitter Card URLs.
   *
   * Устанавливает канонический URL и обновляет URL для Open Graph и Twitter Card.
   * @param canonical canonical URL / канонический URL
   */
  setCanonical(e) {
    return this.set(L.canonical, e), this.og.setUrl(e), this.twitter.setUrl(e), this;
  }
  /**
   * Sets the robots meta tag.
   *
   * Устанавливает мета-тег robots.
   * @param robots robots directive / директива robots
   */
  setRobots(e) {
    return this.set(L.robots, e), this;
  }
  /**
   * Sets the author meta tag.
   *
   * Устанавливает мета-тег author.
   * @param author author name / имя автора
   */
  setAuthor(e) {
    return this.set(L.author, e), this;
  }
  /**
   * Sets the site name for Open Graph and Twitter Card.
   *
   * Устанавливает название сайта для Open Graph и Twitter Card.
   * @param siteName site name / название сайта
   */
  setSiteName(e) {
    return this.og.setSiteName(e), this.twitter.setSite(e), this;
  }
  /**
   * Sets the locale for Open Graph.
   *
   * Устанавливает локаль для Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   */
  setLocale(e) {
    return this.og.setLocale(e), this;
  }
  /**
   * Sets the suffix to append to page title.
   *
   * Устанавливает суффикс для добавления к заголовку страницы.
   * @param suffix title suffix (e.g. 'My Site') / суффикс заголовка (например, 'Мой Сайт')
   */
  setSuffix(e) {
    this.suffix = e;
  }
  /**
   * Generates the complete HTML for all meta-tags including Open Graph and Twitter Card.
   *
   * Генерирует полный HTML для всех мета-тегов, включая Open Graph и Twitter Card.
   */
  html() {
    return `${super.html()}${this.og.html()}${this.twitter.html()}`;
  }
  /**
   * Gets the formatted suffix with separator.
   *
   * Получает отформатированный суффикс с разделителем.
   */
  getSuffix() {
    return z(this.suffix) ? ` - ${this.suffix}` : "";
  }
}
const ee = [
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v"
], ie = (i, t = {}) => {
  let e = String(i);
  if (i.match(/%[a-z]/)) {
    let s = 0;
    $(t, (n) => {
      e = e.replace(new RegExp(`%${ee[s++]}`, "g"), String(n));
    });
  }
  return F(t) && $(t, (s, n) => {
    e = e.replace(
      new RegExp(`\\[${n}\\](.*?)\\[/${n}\\]`, "g"),
      (o, a) => String(s).replace(/\[content]/g, a)
    ).replace(new RegExp(`\\[${n}\\]`, "g"), String(s));
  }), e;
}, I = class I {
  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(t, e) {
    var n, o;
    const s = this.getName(t);
    return s in this.data ? this.replacement(this.data[s], e) : (V.isLocalhost() || await this.add(t), this.replacement((o = (n = this.data) == null ? void 0 : n[s]) != null ? o : t));
  }
  /**
   * Getting the translation text by its code (Sync).
   *
   * Получение текста перевода по его коду (Sync).
   * @param name code name/ название кода
   * @param first If set to false, returns an empty string if there is no text/
   * если установлено false, возвращает пустую строку, если нет текста
   * @param replacement If set, replaces the text with the specified values/
   * если установлено, заменяет текст на указанные значения
   */
  static getSync(t, e = !1, s) {
    const n = this.getName(t);
    return n in this.data ? this.replacement(String(this.data[n]), s) : e ? " " : t;
  }
  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getList(t) {
    return new Promise((e) => {
      const s = {};
      let n = 0;
      for (const o of t) {
        const a = Array.isArray(o) ? o[0] : o, c = Array.isArray(o) ? o.slice(1) : void 0;
        this.get(a, c).then((h) => {
          s[a] = h, ++n >= t.length && e(s);
        });
      }
    });
  }
  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   * @param first If set to false, returns an empty string if there is no text/
   * если установлено false, возвращает пустую строку, если нет текста
   */
  static getListSync(t, e = !1) {
    const s = {};
    for (const n of t) {
      const o = Array.isArray(n) ? n[0] : n, a = Array.isArray(n) ? n.slice(1) : void 0;
      s[o] = this.getSync(o, e, a);
    }
    return s;
  }
  /**
   * Added a list of translated texts.
   *
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static add(t) {
    return new Promise((e) => {
      this.getNamesNone(t).length > 0 ? (this.cache.push(...this.getNamesNone(t)), this.resolveList.push(e), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.timeout = void 0, this.make().then(() => {
          this.resolveList.forEach((n) => n()), this.resolveList = [];
        });
      }, 160)) : e();
    });
  }
  /**
   * Adds texts in sync mode.
   *
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static addSync(t) {
    $(t, (e, s) => {
      Q(e) && z(e) && (this.data[this.getName(s)] = e);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (z(t))
      if (V.isLocalhost())
        this.addSync(t);
      else {
        const e = Object.keys(t);
        e.length > 0 && await this.add(e);
      }
  }
  /**
   * Change the path to the script for obtaining the translation.
   *
   * Изменить путь к скрипту для получения перевода.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(t) {
    return this.url = t, I;
  }
  static setPropsName(t) {
    return this.propsName = t, this;
  }
  /**
   * Getting the full title for translation.
   *
   * Получение полного названия для перевода.
   * @param name code name/ название кода
   */
  static getName(t) {
    return `${w.getLocation()}-${t}`;
  }
  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getNamesNone(t) {
    const e = [];
    return W(t).forEach((s) => {
      s !== "__TRANSLATE_START__" && s !== "__TRANSLATE_END__" && !(this.getName(s) in this.data) && e.push(s);
    }), e;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = await V.get({
      api: !1,
      path: this.url,
      request: {
        [this.propsName]: this.cache
      },
      toData: !0,
      global: !0
    });
    return t != null ? t : {};
  }
  /**
   * Replaces the text with the specified values.
   *
   * Заменяет текст на указанные значения.
   * @param text text to replace/ текст для замены
   * @param replacement values for replacement/ значения для замены
   */
  static replacement(t, e) {
    return e ? ie(t, e) : t;
  }
  /**
   * Adding translation data from the server.
   *
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const t = await this.getResponse();
    this.cache.forEach((e) => {
      var s;
      this.data[this.getName(e)] = (s = t == null ? void 0 : t[e]) != null ? s : "";
    }), this.cache = [];
  }
};
u(I, "url", "/api/translate"), u(I, "propsName", "list"), u(I, "data", {}), u(I, "cache", []), u(I, "resolveList", []), u(I, "timeout");
let q = I;
function gt(i) {
  return Array.isArray(i);
}
function xe(i) {
  var t;
  return Q(i) ? i.trim() : gt(i) && i.findIndex((e) => S(e)) === -1 ? i.join(",") : S(i) ? JSON.stringify(i) : i === !0 ? "1" : i === !1 ? "0" : (t = i == null ? void 0 : i.toString()) != null ? t : "";
}
function se(i, t) {
  return Array(t).fill(i);
}
function Ee(i) {
  var t;
  if (y())
    return (t = document.querySelector(i)) != null ? t : void 0;
}
function He(i) {
  if (y())
    return document.querySelectorAll(i);
}
function Pe(i) {
  i.preventDefault(), i.stopPropagation();
}
function re(i, t, e) {
  const s = () => {
    i(), t != null && t() ? re(i, t, e) : e == null || e();
  };
  y() ? requestAnimationFrame(s) : s();
}
function Re(i) {
  var s;
  const t = {}, e = bt(i);
  if (e)
    for (const n of e.attributes)
      t[n.name] = (s = (n == null ? void 0 : n.value) || (n == null ? void 0 : n.textContent)) != null ? s : void 0;
  return t;
}
async function We(i) {
  var t, e;
  return (e = (t = i == null ? void 0 : i.clipboardData) == null ? void 0 : t.getData("text")) != null ? e : await navigator.clipboard.readText() || "";
}
let yt = _(1e5, 9e5);
function Y(i, t) {
  const e = bt(i);
  return e ? (z(e.id) || e.setAttribute("id", `id-${yt++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${yt++}`;
}
function ne(i) {
  return Q(i) ? vt(
    void 0,
    "img",
    { src: i }
  ) : i;
}
function wt(i, t = "ig", e = ":value") {
  const s = i.replace(/([[\]\\^$.?*+()/])/g, "\\$1");
  return new RegExp(e.replace(/:value/g, s), t);
}
function oe(i, t) {
  var n;
  const e = t.split(".", 2), s = e[0];
  return s && (i != null && i[s]) && F(i[s]) && (e != null && e[1]) ? oe(i[s], e[1]) : (n = s && (i == null ? void 0 : i[s])) != null ? n : "";
}
function je(i) {
  var t, e, s;
  return (s = (t = i == null ? void 0 : i.key) != null ? t : i == null ? void 0 : i.code) != null ? s : (e = i == null ? void 0 : i.keyCode) == null ? void 0 : e.toString();
}
function Dt(i) {
  return $(i, (t) => t.length);
}
function Ue(i) {
  return Math.max(...Dt(i));
}
function _e(i) {
  return Math.min(...Dt(i));
}
function ae(i) {
  var t, e, s, n;
  return (i == null ? void 0 : i.clientX) || ((e = (t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientX) || ((n = (s = i == null ? void 0 : i.touches) == null ? void 0 : s[0]) == null ? void 0 : n.clientX) || 0;
}
function ue(i) {
  var t, e, s, n;
  return (i == null ? void 0 : i.clientY) || ((e = (t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientY) || ((n = (s = i == null ? void 0 : i.touches) == null ? void 0 : s[0]) == null ? void 0 : n.clientY) || 0;
}
function ze(i) {
  return {
    x: ae(i),
    y: ue(i)
  };
}
function Ke(i, t) {
  const e = {};
  return t.forEach((s) => {
    s in i && i[s] !== void 0 && (e[s] = i[s]);
  }), e;
}
function Ze(i, t = void 0) {
  const e = {};
  return $(i, (s, n) => {
    s !== t && (e[n] = s);
  }), e;
}
function Ve(i) {
  return F(i) ? i : {};
}
function ce(i, t) {
  return se(i, t).join("");
}
function Ye(i, t, e = "#", s = 2, n = 12) {
  const o = _(i, t), a = [];
  for (let c = 0; c < o; c++)
    a.push(ce(e, _(s, n)));
  return a.join(" ");
}
function qe(i, t) {
  const e = i != null ? i : 0;
  return t > e ? 100 / (t - e) : 0;
}
function Je(i, t) {
  const e = i != null ? i : 0;
  return t > e ? (t - e) / 100 : 0;
}
const $t = 0;
function Qe(i, t, e) {
  const s = t == null ? void 0 : t.closest(i);
  if (t && s && s.scrollHeight !== s.offsetHeight)
    if (e) {
      const n = e.getBoundingClientRect(), o = s.getBoundingClientRect(), a = t.getBoundingClientRect();
      s.scrollTop = t.offsetTop - (n.top - o.top) - (n.height / 2 - a.height / 2), s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight);
    } else s.scrollTop > t.offsetTop ? s.scrollTop = t.offsetTop - $t : s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight + $t);
}
function Xe(i, t) {
  return i.indexOf(t) !== -1;
}
async function Me() {
  if (y()) {
    const i = await St.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${i}px`);
  }
}
function Oe(i, t) {
  const e = {};
  return S(i) && S(t) && $(i, (s, n) => {
    n in t && (e[n] = s);
  }), e;
}
function Te(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || $(i, (s, n) => {
    s !== (t == null ? void 0 : t[n]) && (e = !0);
  }), e;
}
function Ge(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function ti(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function ei(i, t) {
  return Array.isArray(i) ? i.every((e) => j(e, t)) : j(i, t);
}
function le(i) {
  return [...new Set(i)];
}
function R(i, t, e = !0) {
  const s = U(i);
  return S(i) && S(t) && $(
    t,
    (n, o) => {
      const a = i == null ? void 0 : i[o];
      S(a) && S(n) ? e && Array.isArray(a) && Array.isArray(n) ? s[o] = U(le([...a, ...n])) : s[o] = R(
        Array.isArray(a) ? { ...a } : a,
        n,
        e
      ) : s[o] = S(n) ? U(n) : n;
    }
  ), s;
}
function ii(i, t) {
  let e = i;
  return $(t, (s, n) => {
    e = e.replace(wt(`[${n}]`), lt(s));
  }), e;
}
function he(i, t = "auto") {
  switch (t) {
    case "auto":
      return i.naturalWidth >= i.naturalHeight;
    case "width":
      return !0;
    case "height":
      return !1;
  }
}
function si(i, t, e = "auto") {
  var n;
  const s = ne(i);
  if (s && (s.naturalWidth > t && (e === "auto" || e === "width") || s.naturalHeight > t && (e === "auto" || e === "height"))) {
    const o = he(s, e), a = (n = document.createElement("canvas")) == null ? void 0 : n.getContext("2d");
    if (a)
      return a.canvas.width = o ? t : s.naturalWidth / s.naturalHeight * t, a.canvas.height = o ? s.naturalHeight / s.naturalWidth * t : t, a.drawImage(s, 0, 0, a.canvas.width, a.canvas.height), a.canvas.toDataURL();
  }
}
function ri(i) {
  const t = N(i);
  if (t > 0) {
    const e = String(Math.floor(t / 60)).padStart(2, "0"), s = String(t % 60).padStart(2, "0");
    return `${e}:${s}`;
  }
  return "00:00";
}
function ni(i, t, {
  multiple: e = !1,
  maxlength: s = 0,
  alwaysChange: n = !0,
  notEmpty: o = !1
}) {
  if (e) {
    if (gt(i)) {
      const a = i.indexOf(t), c = [...i];
      return a !== -1 ? (!o || c.length > 1) && c.splice(a, 1) : (!s || i.length < s) && c.push(t), c;
    }
    return i === t ? [] : i ? [i, t] : [t];
  }
  return n || i !== t ? t : i;
}
function oi(i, t, e) {
  if (S(i) && S(t)) {
    if (e) {
      let s = {}, n = !1;
      return $(i, (o, a) => {
        !n && (e === a || e === o) ? (n = !0, s = R(s, t)) : n ? s = R(s, { [a]: o }) : s[a] = S(o) ? U(o) : o;
      }), n ? s : R(i, t);
    }
    if (S(t))
      return R(i, t);
  }
  return U(i);
}
function Lt(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${String(t[1]).toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function ai(i) {
  return Lt(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function ui(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(/(?<=[\w ])[A-Z]/g, (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function ci(i, t, e, s) {
  const n = N(i), o = N(t);
  return t && o < n ? `${pt(o, e, s)}+` : pt(n, e, s);
}
const pt = (i, t, e) => t ? new H(e).number(i) : i;
function de(i, t) {
  return 1 / i * t;
}
function li(i, t) {
  return de(i, t) * 100;
}
async function hi(i) {
  if (y())
    try {
      await navigator.clipboard.writeText(i);
    } catch (t) {
      document == null || document.execCommand(i);
    }
}
class ge {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param watch data for tracking/ данные для слежения
   */
  constructor(t, e = Object.keys(t)) {
    u(this, "cache", {});
    this.props = t, this.watch = e;
  }
  /**
   * Checks if the value has been updated.
   *
   * Проверяет, обновлено ли значение.
   * @param name property name/ название свойства
   */
  is(t) {
    return gt(t) ? !!t.find((e) => this.isDifferent(e)) : this.isDifferent(t);
  }
  /**
   * Checks if there are changes in the data.
   *
   * Проверяет, есть ли изменения в данных.
   */
  isChanged() {
    const t = this.props;
    return !!this.watch.find((e) => e in t && this.isDifferent(e));
  }
  /**
   * Updates all values.
   *
   * Обновляет все значения.
   */
  update() {
    const t = this.props;
    this.watch.forEach((e) => {
      e in t && this.isDifferent(e) && (this.cache[e] = t[e]);
    });
  }
  /**
   * Checking additional data.
   *
   * Проверка дополнительных данных.
   * @param name property name/ название свойства
   */
  isDifferent(t) {
    var e, s;
    return ((e = this.cache) == null ? void 0 : e[t]) !== ((s = this.props) == null ? void 0 : s[t]);
  }
}
class fe {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param callback callback function when the value changes/
   * функция обратного вызова при изменении значения
   * @param changed base data/ данный для слежения
   */
  constructor(t, e, s) {
    u(this, "event", {});
    u(this, "changed");
    this.props = t, this.callback = e, this.changed = new ge(t, s);
  }
  /**
   * Calls the callback function.
   *
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update/ вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t), this;
  }
  /**
   * Checks if there are values in the property.
   *
   * Проверяет, есть ли значения в свойстве.
   * @param name property names/ названия свойств
   */
  is(t) {
    return t in this.props;
  }
  /**
   * Checks if the value has been changed by the property name.
   *
   * Проверяет, было ли изменено значение по названию свойства.
   * @param name property names/ названия свойств
   * @param nameProp names of properties of the input variable/ названия свойств входной переменной
   */
  isChanged(t, e) {
    return !(t in this.event) || this.changed.is(e || t);
  }
  /**
   * Calls the callback function.
   *
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update/ вынуждает обновлять данные
   */
  makeCallback(t = !1) {
    (t || this.changed.isChanged()) && (this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
  /**
   * The function calls an image call.
   *
   * Функция вызывает образный вызов.
   */
  makeCallbackItem() {
    this.callback && this.callback(this.event);
  }
}
class di extends fe {
  /**
   * Calls the callback function.
   *
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update/ вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t).then(), this;
  }
  /**
   * Calls the callback function.
   *
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update/ вынуждает обновлять данные
   */
  async makeCallback(t) {
    (t || this.changed.isChanged()) && (await this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
}
function m(i) {
  return X(i) ? i.value : i;
}
function me(i) {
  return i && "class" in i && typeof i.class == "string" ? i.class : void 0;
}
function ye(i, t, e) {
  const s = me(t);
  return e && s ? `${e}.${s}` : e || s || i;
}
function $e(i, t, e, s) {
  const n = ye(i, t, s);
  return Ht(i, { key: n, ...t }, e);
}
function ut(i, t) {
  const e = i == null ? void 0 : i.class, s = t == null ? void 0 : t.class, n = i == null ? void 0 : i.style, o = t == null ? void 0 : t.style, a = {
    ...i,
    ...t
  };
  return e && s && (a.class = [], e && a.class.push(e), s && a.class.push(s)), n && o && (a.style = [], n && a.style.push(n), o && a.style.push(o)), a;
}
function pe(...i) {
  let t = {};
  return i.forEach((e) => {
    e && (t = ut(t, e));
  }), t;
}
class kt {
  /**
   * Constructor
   * @param components list of connected components/ список подключенных компонентов
   * @param modification data for modification/ данные для модификации
   */
  constructor(t = {}, e) {
    /** Cache for computed properties/ Кэш для вычисляемых свойств */
    u(this, "caching", {});
    this.components = t, this.modification = e;
  }
  /**
   * Check the presence of the component.
   *
   * Проверить наличие компонента.
   * @param name name of the component/ названия компонента
   */
  is(t) {
    return t in this.components;
  }
  /**
   * Getting the object of the component.
   *
   * Получение объекта компонента.
   * @param name name of the component/ названия компонента
   */
  get(t) {
    var e;
    return (e = this.components) == null ? void 0 : e[t];
  }
  /**
   * Returns the modified input data of the connected components.
   *
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this/ название данного
   * @param props basic data/ базовые данные
   */
  getModification(t, e) {
    if (t) {
      t in this.caching || (this.caching[t] = l(() => this.computeModification(t)));
      const s = this.caching[t];
      if (s)
        return e ? pe(s.value, e) : s.value;
    }
    return e;
  }
  /**
   * Rendering a component by its name and returning an array with one component.
   *
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
   */
  render(t, e, s, n) {
    const o = this.renderOne(
      t,
      e,
      s,
      n
    );
    return o ? [o] : [];
  }
  /**
   * Rendering a component by its name.
   *
   * Рендеринг компонента по его имени.
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
   */
  renderOne(t, e, s, n) {
    if (this.is(t)) {
      const o = n != null ? n : t;
      return $e(
        this.get(t),
        this.getModification(o, e),
        s,
        o
      );
    }
  }
  /**
   * Rendering the component by its name.
   *
   * Рендеринг компонента по его имени.
   * @param item an array to which the rendered object will be added/
   * массив, по которому будет добавлять объект
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
   */
  renderAdd(t, e, s, n, o) {
    return t.push(...this.render(e, s, n, o)), this;
  }
  /**
   * Calculates modified input data for connected components.
   *
   * Вычисляет модифицированные входные данные для подключенных компонентов.
   * @param index the name of this/ название данного
   */
  computeModification(t) {
    var s;
    const e = m((s = this.modification) == null ? void 0 : s[t]);
    if (e && F(e)) {
      const n = {};
      return $(e, (o, a) => {
        n[a] = m(o);
      }), n;
    }
    return {};
  }
}
class gi extends kt {
}
class fi {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, e, s) {
    u(this, "name");
    u(this, "element", p());
    u(this, "refs");
    u(this, "components");
    u(this, "emits");
    u(this, "classes");
    u(this, "classesSub");
    u(this, "styles");
    u(this, "stylesSub");
    u(this, "attrs");
    u(this, "slots");
    u(this, "dataExpose");
    this.props = e, this.options = s, this.name = this.initName(t), this.refs = this.props ? Pt(this.props) : {}, this.components = new kt(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = l(() => this.updateClasses()), this.styles = l(() => this.updateStyles()), this.attrs = Rt(), this.slots = Wt();
  }
  init() {
    return this.classesSub = l(() => this.initClasses()), this.stylesSub = l(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
  }
  /**
   * Getting the class name.
   *
   * Получение названия класса.
   */
  getName() {
    return this.name.join("-");
  }
  /**
   * Getting the class name.
   *
   * Получение названия дизайна.
   */
  getDesign() {
    return String(this.name[0]);
  }
  /**
   * Getting the class name.
   *
   * Получение названия класса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getSubClass(t) {
    return `${this.getName()}__${W(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${W(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${W(t).join("-")}`;
  }
  /**
   * Getting additional parameters.
   *
   * Получение дополнительных параметров.
   */
  getAttrs() {
    var e;
    const t = { ...(e = this.attrs) != null ? e : {} };
    return "class" in t && delete t.class, "style" in t && delete t.style, t;
  }
  /**
   * List of available external variables.
   *
   * Список доступных переменных извне.
   */
  expose() {
    var t;
    return (t = this.dataExpose) != null ? t : {};
  }
  /**
   * The rendering method for the setup method.
   *
   * Метод рендеринга для метода настройки.
   */
  render() {
    return () => this.initRender();
  }
  /**
   * Initializes the slot.
   *
   * Инициализирует слот.
   * @param name slot name/ название слота
   * @param children if you pass this element, the slot will be added to it/
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot/ свойство для слота
   */
  initSlot(t, e, s = {}) {
    var n;
    if (this.slots && ((n = this.slots) != null && n[t]) && typeof this.slots[t] == "function") {
      const o = this.slots[t](s);
      return e && e.push(o), o;
    }
  }
  /**
   * Transformation of the class value into an object.
   *
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation/ список классов для преобразования
   */
  toClass(t) {
    return F(t) ? t : Array.isArray(t) ? { [t.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes/ список классов
   */
  toClassName(t) {
    if (S(t)) {
      const e = {};
      return $(t, (s, n) => {
        n.match(/\?\?/) ? e[n.replace(/\?\?/, this.getName())] = s : n.match(/\?/) ? e[n.replace(/\?/, this.getDesign())] = s : e[n] = s;
      }), e;
    }
    return {};
  }
  /**
   * Getting component names as an array.
   *
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation/ название компонента для преобразования
   */
  initName(t) {
    return $(t.split(".", 2), (e) => Lt(e));
  }
  /**
   * Updating data about the class.
   *
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, n, o, a;
    const t = (s = this.classesSub) == null ? void 0 : s.value, e = (o = (n = this.options) == null ? void 0 : n.classes) == null ? void 0 : o.value;
    return t && e ? {
      ...t,
      ...e,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(e == null ? void 0 : e.main),
        ...this.toClass((a = this.attrs) == null ? void 0 : a.class)
      }
    } : e != null ? e : {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var s, n, o;
    const t = (s = this.stylesSub) == null ? void 0 : s.value, e = (o = (n = this.options) == null ? void 0 : n.styles) == null ? void 0 : o.value;
    return t && e ? {
      ...t,
      ...e
    } : e != null ? e : {};
  }
}
function B(i) {
  return X(i) ? i : p(i);
}
class mi {
  /**
   * Constructor
   * @param date date for processing. дата для обработки
   * @param type type of date format for output. тип формата даты вывода
   * @param code country and language code. код страны и языка
   */
  constructor(t, e = "date", s = w.getLocation()) {
    u(this, "item");
    u(this, "type");
    u(this, "code");
    u(this, "date");
    u(this, "datetime");
    u(this, "year", l(() => this.date.value && this.datetime.getYear()));
    u(this, "month", l(() => this.date.value && this.datetime.getMonth()));
    u(this, "day", l(() => this.date.value && this.datetime.getDay()));
    u(this, "hour", l(() => this.date.value && this.datetime.getHour()));
    u(this, "minute", l(() => this.date.value && this.datetime.getMinute()));
    u(this, "second", l(() => this.date.value && this.datetime.getSecond()));
    this.item = B(t), this.type = B(e), this.code = B(s), this.date = p(A(this.item.value)), this.datetime = new ht(
      this.date.value,
      this.type.value,
      this.code.value
    ), f(this.item, (n) => {
      this.date.value = A(n);
    }), f(this.type, (n) => this.datetime.setType(n)), f(this.code, (n) => this.datetime.setCode(n)), f(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => jt(this.date));
  }
  /**
   * Returns the basic data for the date.
   *
   * Возвращает основные данные для даты.
   */
  getItem() {
    return this.item;
  }
  /**
   * Returns a Date object.
   *
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Obtaining an object of the basic Datetime class.
   *
   * Получение объекта основного класса Datetime.
   */
  getDatetime() {
    return this.datetime;
  }
  /**
   * Returns the format of hours.
   *
   * Возвращает формат часов.
   */
  getHoursType() {
    return l(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return l(() => this.date.value && this.datetime.getFirstDayCode());
  }
  /**
   * The method returns the year of the specified date according to local time.
   *
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.year;
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.
   *
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.month;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.
   *
   * Метод возвращает день месяца указанной даты по местному времени.
   */
  getDay() {
    return this.day;
  }
  /**
   * The method returns the hour for the specified date, according to local time.
   *
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.hour;
  }
  /**
   * The method returns the minutes in the specified date according to local time.
   *
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.minute;
  }
  /**
   * The method returns the seconds in the specified date according to local time.
   *
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.second;
  }
  /**
   * Returns the last day of the week.
   *
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return l(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output. тип формата даты вывода
   * @param styleOptions the representation of the month. представление месяца
   */
  locale(t = this.type.value, e) {
    return l(() => this.date.value && this.datetime.locale(t, e));
  }
  /**
   * Output of standard data.
   *
   * Вывод стандартных данных.
   * @param timeZone add time zone. добавить временную зону
   */
  standard(t = !0) {
    return l(() => this.date.value && this.datetime.standard(t));
  }
}
class yi extends xt {
  /**
   * Classes Constructor
   * @param elementSelector element/ элемент
   * @param elementSelectorControl control element/ элемент управления
   * @param type type/ тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics/ объект options
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  constructor(t, e, s = ["click"], n, o, a) {
    const c = B(t), h = B(e);
    super(
      c.value,
      s,
      n,
      o,
      a
    ), h.value && this.setElementControl(h.value), f(c, (d) => this.setElement(d)), f(h, (d) => this.setElementControl(d));
  }
}
class $i {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = w.getLocation()) {
    u(this, "code");
    u(this, "flag");
    this.code = B(t), this.flag = new at(this.code.value), f(this.code, (e) => this.flag.setCode(e));
  }
  /**
   * Obtaining a reactive object with the country code.
   *
   * Получение реактивного объекта с кодом страны.
   */
  getCode() {
    return this.code;
  }
  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code/ код страны
   */
  get(t = this.code.value) {
    return l(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code/ код страны
   */
  getFlag(t = this.code.value) {
    return l(() => {
      var e;
      return (e = this.flag.get(t)) == null ? void 0 : e.icon;
    });
  }
  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes country code/ код страны
   */
  getList(t) {
    return l(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return l(() => this.flag.getNational(t));
  }
}
const C = class C {
  /**
    * Information about the current country.
  *
    * Информация об текущей стране.
    */
  static get() {
    return this.item;
  }
  /**
    * Current country.
  *
    * Текущая страна.
    */
  static getCountry() {
    return this.country;
  }
  /**
    * Current language.
  *
    * Текущий язык.
    */
  static getLanguage() {
    return this.language;
  }
  /**
    * Full format according to the standard.
  *
    * Полный формат согласно стандарту.
    */
  static getStandard() {
    return this.standard;
  }
  /**
    * Returns the first day of the week.
  *
    * Возвращает первый день недели.
    */
  static getFirstDay() {
    return this.firstDay;
  }
  /**
    * Changes the data by the full code.
  *
    * Изменяет данные по полному коду.
    * @param code country code, full form language-country or one of them/
    * код страны, полный вид язык-страна или один из них
    */
  static set(t) {
    w.set(t, !0), this.item.value = w.getItem();
  }
};
u(C, "item", Z(w.get())), u(C, "country", l(() => C.item.value.country)), u(C, "language", l(() => C.item.value.language)), u(C, "standard", l(() => C.item.value.standard)), u(C, "firstDay", l(() => C.item.value.firstDay));
let K = C;
class ve {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    u(this, "location");
    u(this, "intl");
    this.location = B(t), this.intl = l(() => {
      var e;
      return new H((e = this.location.value) != null ? e : K.getLanguage().value);
    });
  }
  /**
   * The consistent translation of language, region and script display names.
   *
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties/
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, e) {
    return l(() => this.intl.value.display(m(t), e));
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(t, e) {
    return l(() => this.intl.value.languageName(m(t), e));
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, e) {
    return l(() => this.intl.value.countryName(m(t), e));
  }
  /**
   * In basic use without specifying a locale, a formatted string.
   *
   * При обычном использовании без указания локали форматированная строка
   *
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми
   * или всеми свойствами
   */
  number(t, e) {
    return l(() => this.intl.value.number(m(t), e));
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    return l(() => this.intl.value.decimal());
  }
  /**
   * Currency formatting.
   *
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param currencyOptions the currency to use in currency formatting/
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol/ не выводить значок валюты
   */
  currency(t, e, s = !1) {
    return l(
      () => this.intl.value.currency(
        m(t),
        m(e),
        s
      )
    );
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.
   *
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unitOptions the unit to use in unit formatting/ блок для использования
   * в форматировании блока
   */
  unit(t, e) {
    return l(() => this.intl.value.unit(m(t), e));
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return l(() => this.intl.value.percent(m(t), e));
  }
  /**
   * Number as a percentage (unit).
   *
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, e) {
    return l(() => this.intl.value.percentBy100(m(t), e));
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format/ дата для форматирования
   * @param type type of data format/ тип формата data
   * @param styleOptions the representation of the month/ представление месяца
   * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
   */
  date(t, e, s, n) {
    return l(() => this.intl.value.date(m(t), e, s, n));
  }
  /**
   * Enables language-sensitive relative time formatting.
   *
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param styleOptions the length of the internationalized message/
   * длина интернационализированного сообщения
   * @param todayValue current day/ текущий день
   */
  relative(t, e, s) {
    return l(() => this.intl.value.relative(m(t), e, s));
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.
   *
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param limit values that determine the output limit (values per day)/
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day/ текущий день
   * @param relativeOptions the length of the internationalized message/
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month/ представление месяца
   * @param type type of data format/ тип формата data
   * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
   */
  relativeLimit(t, e, s, n, o, a, c) {
    return l(() => this.intl.value.relativeLimit(
      m(t),
      e,
      s,
      n,
      o,
      a,
      c
    ));
  }
  /**
   * Names of months.
   *
   * Названия месяцев.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the month/ представление месяца
   */
  month(t, e) {
    return l(() => this.intl.value.month(m(t), e));
  }
  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(t) {
    return l(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(t, e) {
    return l(() => this.intl.value.weekday(m(t), e));
  }
  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(t) {
    return l(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(t) {
    return l(() => this.intl.value.time(m(t)));
  }
}
class Ct {
  /**
   * Creates an instance of ListData for managing list data.
   *
   * Создает экземпляр ListData для управления данными списка.
   * @param list List data / данные списка
   * @param focus Focused item / элемент в фокусе
   * @param highlight Search text for highlighting / текст поиска для выделения
   * @param highlightLengthStart Minimum length to start highlighting / минимальная длина для начала выделения
   * @param selected Selected items / выбранные элементы
   * @param keyValue Key for getting item value / ключ для получения значения элемента
   * @param keyLabel Key for getting item label / ключ для получения метки элемента
   * @param lite Threshold for lite mode / порог для облегченного режима
   * @param parent Parent identifier / идентификатор родителя
   */
  constructor(t, e, s, n, o, a, c, h, d) {
    u(this, "subList", {});
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     */
    u(this, "data", l(
      () => $(
        m(this.list) || [],
        (t, e) => this.initItem(e, t)
      )
    ));
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     */
    u(this, "liteData", l(() => {
      if (this.isLite()) {
        const t = [];
        for (const e of this.data.value) {
          const s = {
            parent: this.parent,
            index: e.index,
            type: e.type,
            label: e.label,
            description: e.description,
            value: e.value
          };
          "description" in e && (s.description = e.description), t.push(s);
        }
        return t;
      }
      return this.data.value;
    }));
    /**
     * Returns a list of records with all additional data.
     *
     * Возвращает список записей со всеми дополнительными данными.
     */
    u(this, "fullData", l(() => {
      const t = this.getFocus(), e = this.getHighlight(), s = this.getSelected();
      return $(
        this.data.value,
        (n) => ({
          ...n,
          focus: t === n.index,
          highlight: e,
          selected: j(n.index, s)
        })
      );
    }));
    /**
     * Returns a map of all entries.
     *
     * Возвращает карту всех записей.
     */
    u(this, "map", l(() => {
      const t = [];
      return this.data.value.forEach((e) => {
        switch (e.type) {
          case "item":
            t.push(e);
            break;
          case "group":
          case "menu":
            t.push(
              e,
              ...this.getSubList(e).map.value
            );
            break;
        }
      }), t;
    }));
    /**  Returns a list consisting only of items/ Возвращает список, состоящий только из элементов. */
    u(this, "mapItems", l(() => this.map.value.filter((t) => t.type === "item")));
    /**
     * Returns a list consisting only of values for selection.
     *
     * Возвращает список, состоящий только из значений для выбора.
     */
    u(this, "items", l(() => this.map.value.filter(
      (t) => t.type === "item" || t.type === "group" || t.type === "menu"
    )));
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     */
    u(this, "highlightFirstItem", l(() => {
      const t = this.getHighlight(), e = t && t.length >= this.getHighlightLengthStart() && wt(t, "i");
      return e ? this.map.value.findIndex(
        (s) => {
          var n, o, a;
          return ((n = s.label) == null ? void 0 : n.toString().match(e)) || ((o = s.index) == null ? void 0 : o.toString().match(e)) || ((a = s.search) == null ? void 0 : a.toString().match(e));
        }
      ) : -1;
    }));
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     */
    u(this, "isSelected", l(() => {
      const t = this.getSelected();
      return !!t && this.mapItems.value.findIndex((e) => j(e.index, t)) !== -1;
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    u(this, "selectedList", l(() => {
      const t = this.getSelected();
      return t && this.isSelected.value ? this.mapItems.value.filter((e) => j(e.index, t)) : [];
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    u(this, "selectedNames", l(() => ot(this.selectedList.value, "label")));
    /**
     * Returns a list of selected item values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     */
    u(this, "selectedValues", l(() => ot(this.selectedList.value, "value")));
    this.list = t, this.focus = e, this.highlight = s, this.highlightLengthStart = n, this.selected = o, this.keyValue = a, this.keyLabel = c, this.lite = h, this.parent = d, X(t) && f(t, () => {
      this.subList = {};
    });
  }
  /**
   * Checks whether it is necessary to first display a simplified version.
   *
   * Проверяет, надо ли сначала вывести упрощенную версию.
   */
  isLite() {
    var t;
    return !!((t = this.lite) != null && t.value && this.data.value.length > this.lite.value);
  }
  /**
   * Checks if an element is in focus.
   *
   * Проверяет, есть ли элемент в фокусе.
   */
  isFocus() {
    const t = this.getFocus();
    return !!(t && this.map.value.findIndex((e) => e.index === t) !== -1);
  }
  /**
   * Checks if there is a selected item.
   *
   * Проверяет, есть ли выделенный элемент.
   */
  isHighlight() {
    return this.highlightFirstItem.value !== -1;
  }
  /**
   * Returns the number of records.
   *
   * Возвращает количество записей.
   */
  getLength() {
    return this.data.value.length;
  }
  /**
   * Returns the number of all available records.
   *
   * Возвращает количество всех доступных записей.
   */
  getLengthByMap() {
    return this.map.value.length;
  }
  /**
   * Returns the number of all available records.
   *
   * Возвращает количество всех доступных записей.
   */
  getLengthByItems() {
    return this.items.value.length;
  }
  /**
   * Returns the values in focus.
   *
   * Возвращает значения в фокусе.
   */
  getFocus() {
    var t;
    return (t = this.focus) == null ? void 0 : t.value;
  }
  /**
   * Returns the selected value.
   *
   * Возвращает выделенного значение.
   */
  getHighlight() {
    var t;
    return (t = this.highlight) == null ? void 0 : t.value;
  }
  /**
   * Returns the minimum length for highlight to start.
   *
   * Возвращает минимальную длину для начала выделения.
   */
  getHighlightLengthStart() {
    var t, e;
    return (e = (t = this.highlightLengthStart) == null ? void 0 : t.value) != null ? e : 2;
  }
  /**
   * Returns the selected value.
   *
   * Возвращает выбранное значение.
   */
  getSelected() {
    var t;
    return (t = this.selected) == null ? void 0 : t.value;
  }
  /**
   * Returns an item by its index.
   *
   * Возвращает элемент по его индексу.
   * @param index item index/ индекс элемента
   */
  getItemByIndex(t) {
    const e = this.map.value.findIndex((s) => s.index === t);
    if (e !== -1)
      return {
        key: e,
        item: this.map.value[e]
      };
  }
  /**
   * Returns an item by its key.
   *
   * Возвращает элемент по его ключу.
   * @param key item key/ ключ элемента
   */
  getItemByKey(t) {
    var e;
    return (e = this.map.value) == null ? void 0 : e[t];
  }
  /**
   * Returns the first item with the specified parent.
   *
   * Возвращает первый элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   */
  getFirstItemByParent(t) {
    return this.map.value.find((e) => this.isInParent(t, e));
  }
  /**
   * Returns the last item with the specified parent.
   *
   * Возвращает последний элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   */
  getLastItemByParent(t) {
    return this.map.value.filter((e) => this.isInParent(t, e)).pop();
  }
  /**
   * Returns a sublist object for a group item.
   *
   * Возвращает объект подсписка для группового элемента.
   * @param item List item data/ данные элемента списка
   */
  getSubList(t) {
    return t.index in this.subList || (this.subList[t.index] = new Ct(
      t.value,
      this.focus,
      this.highlight,
      this.highlightLengthStart,
      this.selected,
      this.keyValue,
      this.keyLabel,
      this.lite,
      t.index
    )), this.subList[t.index];
  }
  /**
   * Checks if the item is an item, group, or menu.
   *
   * Проверяет, является ли элемент элементом, группой или меню.
   * @param item List item data/ данные элемента списка
   */
  isItem(t) {
    return t.type === "item" || t.type === "group" || t.type === "menu";
  }
  /**
   * Checks if the item is in the specified parent.
   *
   * Проверяет, находится ли элемент в указанном родителе.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   * @param item List item data/ данные элемента списка
   */
  isInParent(t, e) {
    return e.parent === t && this.isItem(e);
  }
  /**
   * Returns the index for the list item.
   *
   * Возвращает индекс для элемента списка.
   * @param index current index / текущий индекс
   * @param value item value / значение элемента
   * @param key item key / ключ элемента
   * @param label item label / метка элемента
   */
  getIndex(t, e, s, n) {
    return t && !S(t) ? t : e && !S(e) ? e : s && n;
  }
  /**
   * Creates an object of the record element.
   *
   * Создает объект элемента записи.
   * @param key the value of the key in the element/ значения ключа у элемента
   * @param item selected element/ выбранный элемент
   */
  initItem(t, e) {
    var s, n, o, a, c, h;
    if (F(e)) {
      const d = e == null ? void 0 : e[(n = (s = this.keyValue) == null ? void 0 : s.value) != null ? n : "value"], g = (c = e == null ? void 0 : e[(a = (o = this.keyLabel) == null ? void 0 : o.value) != null ? a : "label"]) != null ? c : d, D = this.getIndex(
        e == null ? void 0 : e.index,
        d,
        t,
        g
      );
      return {
        ...e,
        parent: this.parent,
        index: D,
        type: (h = e == null ? void 0 : e.type) != null ? h : "item",
        label: g,
        value: d
      };
    }
    return {
      parent: this.parent,
      index: t.toString(),
      type: "item",
      label: e,
      value: t
    };
  }
}
class be {
  /**
   * Get router instance.
   *
   * Получить экземпляр роутера.
   */
  static get() {
    return this.router;
  }
  /**
   * Site path change.
   *
   * Изменение пути сайта.
   * @param to new path/ новый путь
   */
  static push(t) {
    this.router && this.router.push(t).then();
  }
  /**
   * Set router instance.
   *
   * Установить экземпляр роутера.
   * @param router router instance/ экземпляр роутера
   */
  static set(t) {
    this.router = t;
  }
  /**
   * Set router instance only once.
   *
   * Установить экземпляр роутера только один раз.
   * @param router router instance/ экземпляр роутера
   */
  static setOneTime(t) {
    this.router || this.set(t);
  }
}
u(be, "router");
class pi {
  /**
   * Constructor
   */
  constructor() {
    /**
     * Reactive item.
     *
     * Реактивный элемент.
     */
    u(this, "item", p());
    /**
     * Checks whether the scroll width is defined.
     *
     * Проверяет, определена ли ширина скролла.
     */
    u(this, "is", l(() => this.item.value !== void 0));
    St.is().then((t) => {
      this.item.value = t;
    });
  }
}
const Se = (i) => typeof i == "string" ? { method: i } : i || {};
let J;
function vi(i, t, e = !0, s, n, o) {
  const a = p(), c = B(Se(t)), h = p(!1), d = p(!1);
  let g = !0, D = 0;
  const P = async () => {
    if (g)
      return;
    const k = m(i);
    if ((!s || s.value) && k) {
      h.value = !0, d.value = !0;
      let O = {};
      const ft = await V.request({
        path: k,
        ...c.value
      });
      ft && (O = ft), n ? a.value = n(O) : a.value = O, h.value = !1;
    } else a.value !== void 0 && (a.value = void 0);
  }, M = () => {
    const k = [];
    e && k.push(c), X(i) && k.push(i), s && k.push(s), J && k.push(J), k.length > 0 && f(k, async () => {
      h.value || await P();
    });
  };
  return {
    get data() {
      return g && (g = !1, P().then()), M(), o && (D++, nt(() => {
        D--, D < 1 && (console.warn("useApiRef: unmounted"), a.value = void 0, g = !0, D = 0);
      })), a;
    },
    get isStarting() {
      return l(() => a.value === void 0);
    },
    get loading() {
      return l(() => h.value);
    },
    get reading() {
      return l(() => d.value);
    },
    reset: P
  };
}
const bi = (i) => {
  J || (J = i);
};
function we(i, t) {
  const e = `broadcast--${i}`;
  if (e in tt)
    return tt[e];
  const s = p(lt(t)), n = new Kt(
    e,
    (o) => {
      s.value !== o.data.message && (s.value = o.data.message);
    }
  );
  return f(s, (o) => n.post({ message: o })), tt[e] = s, s;
}
const tt = {};
function Si(i, t, e) {
  if (i in et)
    return et[i];
  const s = new Et(i), n = we(
    `__cookie:${i}`,
    s.get(t, e)
  );
  return f(n, (o) => {
    s.set(o, e);
  }), et[i] = n, n;
}
const et = {};
function wi() {
  return new ve();
}
function Di(i, t) {
  if (i in it)
    return it[i];
  const e = Z(T.get(i, t));
  return f(e, (s) => T.set(i, s)), T.addWatch(i, (s) => {
    e.value = s;
  }), it[i] = e, e;
}
const it = {}, Li = () => {
  const i = {}, t = "IntersectionObserver" in window ? new IntersectionObserver(
    (s) => {
      s.forEach((n) => {
        const o = Y(n.target);
        o in i && (i[o].status.value = n.isIntersecting);
      });
    },
    {
      rootMargin: "128px 0px"
    }
  ) : void 0, e = (s) => {
    var n;
    if (s) {
      const o = Y(s);
      o in i && (t == null || t.unobserve(s), (n = i[o]) == null || n.stopWatch(), delete i[o]);
    }
  };
  return {
    intersectionObserver: t,
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(s) {
      const n = Z(!t);
      if (t) {
        const o = f(s, (a, c) => {
          if (c && t.unobserve(c), s.value) {
            const h = Y(s.value);
            i[h] = {
              status: n,
              stopWatch: o
            }, t.observe(s.value);
          } else
            e(s.value);
        }, { immediate: !0 });
      }
      return n;
    },
    /**
     * Removing an element from tracking.
     *
     * Удаление элемента из отслеживания.
     */
    removeLazyItem: e,
    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: () => t == null ? void 0 : t.disconnect()
  };
};
function ki() {
  const i = Z(mt.is());
  return mt.registrationEvent(({ detail: t }) => {
    i.value = t.loading;
  }), i;
}
const It = [], De = _(1e5, 999999);
function Le(i, t = !0, e = !1, s = !0) {
  let n;
  const o = `__execute_use${De}::${Y()}`, a = (...c) => {
    if (!e && s) {
      const h = Ut(o, void 0);
      if (h)
        return h;
      {
        let d = Object.freeze(i(...c));
        return _t(o, d), t && nt(() => {
          d = void 0;
        }), d;
      }
    } else n || (n = Object.freeze(i(...c)), t && nt(() => {
      n = void 0;
    }));
    return n;
  };
  return e && It.push(a), a;
}
function Ci() {
  It.forEach((i) => i());
}
const ke = Le(() => {
  const i = new te(), t = p(i.getTitle()), e = p(i.getKeywords()), s = p(i.getDescription()), n = p(i.getImage()), o = p(i.getCanonical()), a = p(i.getRobots()), c = p(i.getAuthor()), h = p(i.getSiteName()), d = () => i.html();
  return f(t, () => {
    i.setTitle(t.value);
  }), f(e, () => {
    i.setKeywords(e.value);
  }), f(s, () => {
    i.setDescription(s.value);
  }), f(n, () => {
    i.setImage(n.value);
  }), f(o, () => {
    i.setCanonical(o.value);
  }), f(a, () => {
    i.setRobots(a.value);
  }), f(c, () => {
    i.setAuthor(c.value);
  }), f(h, () => {
    i.setSiteName(h.value);
  }), {
    meta: i,
    title: t,
    keyword: e,
    description: s,
    author: c,
    image: n,
    canonical: o,
    robots: a,
    siteName: h,
    getHtmlMeta: d
  };
}, !1, !0), Ii = () => ke();
function Ni(i, t) {
  if (i in st)
    return st[i];
  const e = new ct(i, !0), s = p(e.get(t));
  return f(s, (n) => e.set(n)), st[i] = s, s;
}
const st = {};
function Ai(i, t, e) {
  if (i in rt)
    return rt[i];
  const s = new ct(i), n = p(s.get(t, e));
  return f(n, (o) => s.set(o)), y() && window.addEventListener("storage", () => {
    s.update(), n.value = s.get();
  }), rt[i] = n, n;
}
const rt = {};
function Ce(i) {
  const t = Z(q.getListSync(i, !0)), e = async () => {
    t.value = { ...await q.getList(i) };
  };
  f(K.getLanguage(), e);
  for (const s in t.value)
    if (t.value[s] === s || t.value[s] === " ") {
      e().then();
      break;
    }
  return t;
}
const Bi = (i) => Ce(i);
function Fi(i, t = () => {
}, e, s) {
  return l(
    () => {
      if (K.get().value && (e === void 0 || e())) {
        const n = i();
        if (n !== void 0)
          return n;
      }
      return lt(t);
    },
    s
  );
}
function Ie(i, t = {}, e = "value", s = !1) {
  const n = typeof t == "string", o = n ? t : e, a = n ? {} : t;
  return i ? i && F(i) && (o in i || s) ? ut(a, i) : ut(a, { [o]: i }) : n ? {} : { ...a };
}
function xi(i, t = {}, e = "value") {
  return l(() => Ie(m(i), m(t), e));
}
const Ei = (i, t) => {
  const e = p();
  let s = !0;
  const n = () => {
    s && (zt(async () => {
      const o = m(await i());
      o !== t && (e.value = o);
    }), s = !1);
  };
  return l(() => (n(), e.value));
};
function Hi(i, t) {
  i.value !== t && (i.value = t);
}
function Pi(i) {
  let t;
  return l(() => (t || (t = i()), t.value));
}
export {
  V as Api,
  ji as ApiDefault,
  Ui as ApiHeaders,
  _i as ApiMethodItem,
  zi as ApiPreparation,
  Ki as ApiResponse,
  Zi as ApiStatus,
  Kt as BroadcastMessage,
  Vi as Cache,
  Yi as CacheItem,
  qi as CacheStatic,
  Et as Cookie,
  Ji as CookieBlock,
  ct as DataStorage,
  ht as Datetime,
  mi as DatetimeRef,
  fe as DesignAbstract,
  di as DesignAsyncAbstract,
  ge as DesignChanged,
  gi as DesignComp,
  kt as DesignComponents,
  fi as DesignConstructorAbstract,
  xt as EventItem,
  yi as EventRef,
  r as GEO_FLAG_ICON_NAME,
  w as Geo,
  at as GeoFlag,
  $i as GeoFlagRef,
  H as GeoIntl,
  ve as GeoIntlRef,
  Qi as GeoPhone,
  K as GeoRef,
  Fe as Global,
  T as Hash,
  Xi as Icons,
  Ct as ListDataRef,
  mt as Loading,
  te as Meta,
  dt as MetaManager,
  Tt as MetaOg,
  Xt as MetaOpenGraphAge,
  Jt as MetaOpenGraphAvailability,
  Qt as MetaOpenGraphCondition,
  Mt as MetaOpenGraphGender,
  v as MetaOpenGraphTag,
  qt as MetaOpenGraphType,
  Yt as MetaRobots,
  L as MetaTag,
  Gt as MetaTwitter,
  Ot as MetaTwitterCard,
  b as MetaTwitterTag,
  be as RouterItemRef,
  St as ScrollbarWidth,
  pi as ScrollbarWidthRef,
  q as Translate,
  xe as anyToString,
  ie as applyTemplate,
  se as arrFill,
  Fi as computedByLanguage,
  U as copyObject,
  Ft as copyObjectLite,
  vt as createElement,
  Ee as domQuerySelector,
  He as domQuerySelectorAll,
  Vt as encodeAttribute,
  Pe as eventStopPropagation,
  lt as executeFunction,
  Mi as executePromise,
  Le as executeUse,
  Ci as executeUseGlobalInit,
  $ as forEach,
  re as frame,
  Re as getAttributes,
  Ie as getBind,
  xi as getBindRef,
  me as getClassName,
  We as getClipboardData,
  ot as getColumn,
  Ei as getComputedAsync,
  bt as getElement,
  Y as getElementId,
  ne as getElementImage,
  Oi as getElementItem,
  Ti as getElementOrWindow,
  wt as getExp,
  ye as getIndexForRender,
  oe as getItemByPath,
  je as getKey,
  Dt as getLengthOfAllArray,
  Ue as getMaxLengthAllArray,
  _e as getMinLengthAllArray,
  ze as getMouseClient,
  ae as getMouseClientX,
  ue as getMouseClientY,
  Ke as getObjectByKeys,
  Ze as getObjectNoUndefined,
  Ve as getObjectOrNone,
  Ye as getRandomText,
  m as getRef,
  Gi as getRequestString,
  qe as getStepPercent,
  Je as getStepValue,
  Qe as goScroll,
  Xe as inArray,
  Me as initScrollbarOffset,
  Oe as intersectKey,
  gt as isArray,
  Te as isDifferent,
  ts as isDomData,
  y as isDomRuntime,
  z as isFilled,
  Ge as isFloat,
  es as isFunction,
  is as isInDom,
  ti as isIntegerBetween,
  Bt as isNull,
  ss as isNumber,
  S as isObject,
  F as isObjectNotArray,
  j as isSelected,
  ei as isSelectedByList,
  Q as isString,
  rs as isWindow,
  _ as random,
  $e as render,
  R as replaceRecursive,
  ii as replaceTemplate,
  si as resizeImageByMax,
  ri as secondToTime,
  bi as setApiRefGlobalConditions,
  ns as setElementItem,
  Hi as setRef,
  ni as setValues,
  oi as splice,
  ce as strFill,
  Bi as t,
  W as toArray,
  ut as toBind,
  pe as toBinds,
  Lt as toCamelCase,
  ai as toCamelCaseFirst,
  Pi as toComputed,
  A as toDate,
  ui as toKebabCase,
  N as toNumber,
  ci as toNumberByMax,
  de as toPercent,
  li as toPercentBy100,
  B as toRefItem,
  os as transformation,
  le as uniqueArray,
  vi as useApiRef,
  we as useBroadcastValueRef,
  Si as useCookieRef,
  wi as useGeoIntlRef,
  Di as useHashRef,
  Li as useLazyRef,
  ki as useLoadingRef,
  Ii as useMeta,
  Ni as useSessionRef,
  Ai as useStorageRef,
  Ce as useTranslateRef,
  hi as writeClipboardData
};
