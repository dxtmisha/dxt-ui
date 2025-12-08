var Bt = Object.defineProperty;
var xt = (i, t, e) => t in i ? Bt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => xt(i, typeof t != "symbol" ? t + "" : t, e);
import { i as y, D as ct, r as K, a as Ft, G as D, f as p, t as N, b as Q, c as Et, d as bt, e as Z, g as z, h as E, A as Y, j as w, k as St, S as wt, l as P, m as _, n as lt, E as Ht, C as Pt, H as T, L as mt, o as Rt } from "./ScrollbarWidth-De97V2Mh.js";
import { p as Yi, q as qi, U as Ji, s as Qi, u as Xi, v as Mi, w as Oi, x as Ti, y as Gi, z as ts, B as es, I as is, F as ss, J as rs, K as ns, M as os, N as as, O as us, P as cs, Q as ls, R as hs, T as ds } from "./ScrollbarWidth-De97V2Mh.js";
import { isRef as X, h as Wt, computed as l, toRefs as jt, useAttrs as Ut, useSlots as zt, ref as $, watch as m, triggerRef as _t, shallowRef as F, onUnmounted as nt, inject as Kt, provide as Zt, watchEffect as Dt } from "vue";
class Vt {
  /**
   * Constructor
   * @param name channel name/ название канала
   * @param callback callback on message received/ колбэк на получение сообщения
   */
  constructor(t, e) {
    c(this, "channel");
    /**
     * Update state on message received.
     *
     * Обновление состояния при получении сообщения.
     * @param event message event/ событие сообщения
     */
    c(this, "update", (t) => {
      var e;
      return (e = this.callback) == null || e.call(this, t), this;
    });
    if (this.callback = e, y())
      try {
        this.channel = new BroadcastChannel(`${Yt()}__${t}`), this.channel.onmessage = this.update;
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
const Yt = () => new ct("__broadcast-name").get(() => `name_${K(1e6, 9999999)}`);
function A(i) {
  var r, o, a, u, h, d, g, v;
  if (i instanceof Date)
    return i;
  if (Ft(i))
    return /* @__PURE__ */ new Date();
  if (typeof i == "number")
    return new Date(i);
  let t = i, e = D.getTimezoneFormat();
  i.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (x, M, I) => (t = M, e = I, x)), console.log("value", i, e);
  const s = (v = (g = (d = (h = (u = (a = (o = (r = /^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) != null ? r : /^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) != null ? o : /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) != null ? a : /^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) != null ? u : /^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) != null ? h : /^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) != null ? d : /^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) != null ? g : /^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) != null ? v : t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${e}`);
}
function ot(i, t) {
  return p(i, (e) => e == null ? void 0 : e[t]);
}
class W {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = D.getLocation()) {
    c(this, "geo");
    this.geo = D.find(t);
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
  static getInstance(t = D.getLocation()) {
    return new W(t);
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
    let s = { type: "language" }, r;
    e && (typeof e == "string" ? s.type = e : s = {
      ...s,
      ...e
    });
    try {
      y() && (t ? r = new Intl.DisplayNames(this.getLocation(), s).of(t) : s.type === "language" ? r = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (r = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country)));
    } catch (a) {
      console.error("display: ", a);
    }
    return (o = r != null ? r : t) != null ? o : "";
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
    return this.display(D.getByCode(t).language, s);
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
  fullName(t, e, s, r) {
    var u, h;
    const o = (h = (u = this.geo) == null ? void 0 : u.nameFormat) != null ? h : "fl";
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
    return r ? a.replace(/ (.)[^ ]+/ig, " $1.") : a;
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
    var s, r;
    return ((r = (s = this.numberObject(e)) == null ? void 0 : s.format) == null ? void 0 : r.call(s, N(t))) || t.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    var t, e, s, r, o;
    return ((o = (r = (s = (e = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : e.call(t, 1.2)) == null ? void 0 : s.find) == null ? void 0 : r.call(s, (a) => a.type === "decimal")) == null ? void 0 : o.value) || ".";
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
    const r = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof e == "string" ? { currency: e } : e || {}
    }, o = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...a) => (r.currency = String(a[2]).toUpperCase(), String(a[1])));
    if (s) {
      const a = this.numberObject(r);
      return a ? ot(
        a.formatToParts(N(t)).filter((u) => ["literal", "currency"].indexOf(u.type) === -1),
        "value"
      ).join("") : t.toString();
    } else return "currency" in r ? this.number(
      typeof t == "number" ? t : o,
      r
    ) : this.number(
      typeof t == "number" ? t : o,
      {
        ...r,
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
    var s, r, o, a, u;
    return ((u = (a = (o = (r = (s = this.numberObject({
      style: "currency",
      currencyDisplay: e,
      currency: t
    })) == null ? void 0 : s.formatToParts) == null ? void 0 : r.call(s, 100)) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (h) => h.type === "currency")) == null ? void 0 : u.value) || t;
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
    }, r = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...o) => (s.unit = String(o[2]).toLowerCase(), String(o[1])));
    return this.number(r, s);
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
  plural(t, e, s, r) {
    var u;
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
          return `${this.number(o, r)} ${g != null ? g : ""}`.trim();
        }
      } catch (h) {
        console.error("plural: ", h);
      }
    return `${this.number(o, r)} ${(u = a == null ? void 0 : a[0]) != null ? u : ""}`.trim();
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
  date(t, e, s, r) {
    const o = A(t), a = typeof s == "string", u = this.dateOptions(e, a ? s : "short");
    return r && (u.hour12 = !1), a || Object.assign(u, s), o.toLocaleString(this.getLocation(), u);
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
    const r = A(t), o = s || /* @__PURE__ */ new Date(), a = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let u = "second", h = (r.getTime() - o.getTime()) / 1e3;
    return Math.abs(h) >= 60 && (u = "minute", h /= 60, Math.abs(h) >= 60 && (u = "hour", h /= 60, Math.abs(h) >= 24 && (u = "day", h /= 24, Math.abs(h) >= 30 && (u = "month", h /= 30, Math.abs(h) >= 12 && (u = "year", h /= 12))))), this.relativeByValue(h, u, a);
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
  relativeLimit(t, e, s, r, o, a, u) {
    const h = A(t), d = s || /* @__PURE__ */ new Date(), g = new Date(d), v = new Date(d);
    return g.setDate(d.getDate() - e), v.setDate(d.getDate() + e), h >= g && h <= v ? this.relative(
      h,
      r,
      d
    ) : this.date(
      h,
      a,
      o,
      u
    );
  }
  /**
   * Возвращает отформатированное значение времени, прошедшего с момента события
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unit time unit/ единица времени
   * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
   */
  relativeByValue(t, e, s) {
    const r = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    try {
      if (y())
        return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(N(t)), e);
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
        const s = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
        for (let o = 0; o < 12; o++)
          s.setMonth(o), e.push({
            label: r.format(s).replace(/^./, (a) => a.toUpperCase()),
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
        const s = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), o = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        s.setDate(s.getDate() - o);
        for (let a = 0; a < 7; a++)
          e.push({
            label: r.format(s).replace(/^./, (u) => u.toUpperCase()),
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
  sort(t, e = (s, r) => [s, r]) {
    if (y()) {
      const s = new Intl.Collator(this.getLocation());
      return t.sort((r, o) => s.compare(...e(r, o)));
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
  constructor(t, e = "date", s = D.getLocation()) {
    c(this, "date");
    c(this, "hour24", !1);
    c(this, "watch");
    this.type = e, this.code = s, this.date = A(t);
  }
  /**
   * Returns an object for working with formatting.
   *
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new W(this.code);
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
    const r = this.getIntl().number(Math.trunc(s), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), o = s.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${r}${o}` : `${r}:${o}`;
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
    let r;
    return e.setHour24(!0), this.type === "hour-minute" ? r = e.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (s.push(e.localeYear()), s.push(e.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && s.push(e.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (r = e.locale("time"))), `${s.join("-")}${r ? `T${r}${t ? e.getTimeZone() : ""}` : ""}`;
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
const n = "@flag", R = class R {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = D.getLocation()) {
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
    const e = D.find(t);
    if (e) {
      const r = this.getCountry(e);
      return {
        language: this.getLanguage(e),
        country: r,
        standard: e.standard,
        icon: (s = R.flags) == null ? void 0 : s[e.country],
        label: r,
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
    return p(this.getCodes(t), (e) => this.get(e));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return p(this.getList(t), (e) => {
      const s = new R(e.standard).get(e.standard);
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
    return new W(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.
   *
   * Возвращает список стран для получения данных.
   * @param codes country code/ код страны
   */
  getCodes(t) {
    return t != null ? t : Object.keys(R.flags);
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
c(R, "flags", {
  AD: `${n}-ad`,
  AE: `${n}-ae`,
  AF: `${n}-af`,
  AG: `${n}-ag`,
  AI: `${n}-ai`,
  AL: `${n}-al`,
  AM: `${n}-am`,
  AN: `${n}-an`,
  AO: `${n}-ao`,
  AQ: `${n}-aq`,
  AR: `${n}-ar`,
  AS: `${n}-as`,
  AT: `${n}-at`,
  AU: `${n}-au`,
  AW: `${n}-aw`,
  AZ: `${n}-az`,
  BA: `${n}-ba`,
  BB: `${n}-bb`,
  BD: `${n}-bd`,
  BE: `${n}-be`,
  BF: `${n}-bf`,
  BG: `${n}-bg`,
  BH: `${n}-bh`,
  BI: `${n}-bi`,
  BJ: `${n}-bj`,
  BL: `${n}-bl`,
  BM: `${n}-bm`,
  BN: `${n}-bn`,
  BO: `${n}-bo`,
  BR: `${n}-br`,
  BS: `${n}-bs`,
  BT: `${n}-bt`,
  BW: `${n}-bw`,
  BY: `${n}-by`,
  BZ: `${n}-bz`,
  CA: `${n}-ca`,
  CC: `${n}-cc`,
  CD: `${n}-cd`,
  CF: `${n}-cf`,
  CG: `${n}-cg`,
  CH: `${n}-ch`,
  CI: `${n}-ci`,
  CK: `${n}-ck`,
  CL: `${n}-cl`,
  CM: `${n}-cm`,
  CN: `${n}-cn`,
  CO: `${n}-co`,
  CR: `${n}-cr`,
  CU: `${n}-cu`,
  CV: `${n}-cv`,
  CW: `${n}-cw`,
  CX: `${n}-cx`,
  CY: `${n}-cy`,
  CZ: `${n}-cz`,
  DE: `${n}-de`,
  DJ: `${n}-dj`,
  DK: `${n}-dk`,
  DM: `${n}-dm`,
  DZ: `${n}-dz`,
  EC: `${n}-ec`,
  EE: `${n}-ee`,
  EG: `${n}-eg`,
  EH: `${n}-eh`,
  ER: `${n}-er`,
  ES: `${n}-es`,
  ET: `${n}-et`,
  FI: `${n}-fi`,
  FJ: `${n}-fj`,
  FK: `${n}-fk`,
  FM: `${n}-fm`,
  FO: `${n}-fo`,
  FR: `${n}-fr`,
  GA: `${n}-ga`,
  GB: `${n}-gb`,
  GD: `${n}-gd`,
  GE: `${n}-ge`,
  GF: `${n}-gf`,
  GG: `${n}-gg`,
  GH: `${n}-gh`,
  GI: `${n}-gi`,
  GL: `${n}-gl`,
  GM: `${n}-gm`,
  GN: `${n}-gn`,
  GQ: `${n}-gq`,
  GR: `${n}-gr`,
  GT: `${n}-gt`,
  GU: `${n}-gu`,
  GW: `${n}-gw`,
  GY: `${n}-gy`,
  HK: `${n}-hk`,
  HN: `${n}-hn`,
  HR: `${n}-hr`,
  HT: `${n}-ht`,
  HU: `${n}-hu`,
  ID: `${n}-id`,
  IE: `${n}-ie`,
  IL: `${n}-il`,
  IM: `${n}-im`,
  IN: `${n}-in`,
  IO: `${n}-io`,
  IQ: `${n}-iq`,
  IR: `${n}-ir`,
  IS: `${n}-is`,
  IT: `${n}-it`,
  JE: `${n}-je`,
  JM: `${n}-jm`,
  JO: `${n}-jo`,
  JP: `${n}-jp`,
  KE: `${n}-ke`,
  KG: `${n}-kg`,
  KH: `${n}-kh`,
  KI: `${n}-ki`,
  KM: `${n}-km`,
  KN: `${n}-kn`,
  KP: `${n}-kp`,
  KR: `${n}-kr`,
  KW: `${n}-kw`,
  KY: `${n}-ky`,
  KZ: `${n}-kz`,
  LA: `${n}-la`,
  LB: `${n}-lb`,
  LC: `${n}-lc`,
  LI: `${n}-li`,
  LK: `${n}-lk`,
  LR: `${n}-lr`,
  LS: `${n}-ls`,
  LT: `${n}-lt`,
  LU: `${n}-lu`,
  LV: `${n}-lv`,
  LY: `${n}-ly`,
  MA: `${n}-ma`,
  MC: `${n}-mc`,
  MD: `${n}-md`,
  ME: `${n}-me`,
  MF: `${n}-mf`,
  MG: `${n}-mg`,
  MH: `${n}-mh`,
  MK: `${n}-mk`,
  ML: `${n}-ml`,
  MM: `${n}-mm`,
  MN: `${n}-mn`,
  MO: `${n}-mo`,
  MP: `${n}-mp`,
  MQ: `${n}-mq`,
  MR: `${n}-mr`,
  MS: `${n}-ms`,
  MT: `${n}-mt`,
  MU: `${n}-mu`,
  MV: `${n}-mv`,
  MW: `${n}-mw`,
  MX: `${n}-mx`,
  MY: `${n}-my`,
  MZ: `${n}-mz`,
  NA: `${n}-na`,
  NC: `${n}-nc`,
  NE: `${n}-ne`,
  NF: `${n}-nf`,
  NG: `${n}-ng`,
  NI: `${n}-ni`,
  NL: `${n}-nl`,
  NO: `${n}-no`,
  NP: `${n}-np`,
  NR: `${n}-nr`,
  NU: `${n}-nu`,
  NZ: `${n}-nz`,
  OM: `${n}-om`,
  PA: `${n}-pa`,
  PE: `${n}-pe`,
  PF: `${n}-pf`,
  PG: `${n}-pg`,
  PH: `${n}-ph`,
  PK: `${n}-pk`,
  PL: `${n}-pl`,
  PM: `${n}-pm`,
  PN: `${n}-pn`,
  PR: `${n}-pr`,
  PS: `${n}-ps`,
  PT: `${n}-pt`,
  PW: `${n}-pw`,
  PY: `${n}-py`,
  QA: `${n}-qa`,
  RE: `${n}-re`,
  RO: `${n}-ro`,
  RS: `${n}-rs`,
  RU: `${n}-ru`,
  RW: `${n}-rw`,
  SA: `${n}-sa`,
  SB: `${n}-sb`,
  SC: `${n}-sc`,
  SD: `${n}-sd`,
  SE: `${n}-se`,
  SG: `${n}-sg`,
  SH: `${n}-sh`,
  SI: `${n}-si`,
  SJ: `${n}-sj`,
  SK: `${n}-sk`,
  SL: `${n}-sl`,
  SM: `${n}-sm`,
  SN: `${n}-sn`,
  SO: `${n}-so`,
  SR: `${n}-sr`,
  SS: `${n}-ss`,
  ST: `${n}-st`,
  SV: `${n}-sv`,
  SX: `${n}-sx`,
  SY: `${n}-sy`,
  SZ: `${n}-sz`,
  TC: `${n}-tc`,
  TD: `${n}-td`,
  TG: `${n}-tg`,
  TH: `${n}-th`,
  TJ: `${n}-tj`,
  TK: `${n}-tk`,
  TL: `${n}-tl`,
  TM: `${n}-tm`,
  TN: `${n}-tn`,
  TO: `${n}-to`,
  TR: `${n}-tr`,
  TT: `${n}-tt`,
  TV: `${n}-tv`,
  TW: `${n}-tw`,
  TZ: `${n}-tz`,
  UA: `${n}-ua`,
  UG: `${n}-ug`,
  US: `${n}-us`,
  UY: `${n}-uy`,
  UZ: `${n}-uz`,
  VA: `${n}-va`,
  VC: `${n}-vc`,
  VE: `${n}-ve`,
  VG: `${n}-vg`,
  VI: `${n}-vi`,
  VN: `${n}-vn`,
  VU: `${n}-vu`,
  WF: `${n}-wf`,
  WS: `${n}-ws`,
  YE: `${n}-ye`,
  YT: `${n}-yt`,
  ZA: `${n}-za`,
  ZM: `${n}-zm`,
  ZW: `${n}-zw`
});
let at = R, H;
class Pe {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(t) {
    return H && (H == null ? void 0 : H[t]);
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(t) {
    H === void 0 && (H = Et(t));
  }
}
function qt(i) {
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
    c(this, "items", {});
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
    return p(
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
    return p(
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
    var r;
    const e = this.findMetaElement(t), s = (r = this.items[t]) != null ? r : "";
    if (e)
      e.content = s;
    else if (y()) {
      const o = { content: s };
      this.isProperty ? o.property = t : o.name = t, bt(document.head, "meta", o);
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
    const e = qt((s = this.items[t]) != null ? s : "");
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
var L = /* @__PURE__ */ ((i) => (i.description = "description", i.keywords = "keywords", i.canonical = "canonical", i.robots = "robots", i.author = "author", i))(L || {}), Jt = /* @__PURE__ */ ((i) => (i.indexFollow = "index, follow", i.noIndexFollow = "noindex, follow", i.indexNoFollow = "index, nofollow", i.noIndexNoFollow = "noindex, nofollow", i.noArchive = "noarchive", i.noSnippet = "nosnippet", i.noImageIndex = "noimageindex", i.images = "images", i.noTranslate = "notranslate", i.noPreview = "nopreview", i.textOnly = "textonly", i.noIndexSubpages = "noindex, noarchive", i.none = "none", i))(Jt || {}), b = /* @__PURE__ */ ((i) => (i.title = "og:title", i.type = "og:type", i.url = "og:url", i.image = "og:image", i.description = "og:description", i.locale = "og:locale", i.siteName = "og:site_name", i.localeAlternate = "og:locale:alternate", i.imageUrl = "og:image:url", i.imageSecureUrl = "og:image:secure_url", i.imageType = "og:image:type", i.imageWidth = "og:image:width", i.imageHeight = "og:image:height", i.imageAlt = "og:image:alt", i.video = "og:video", i.videoUrl = "og:video:url", i.videoSecureUrl = "og:video:secure_url", i.videoType = "og:video:type", i.videoWidth = "og:video:width", i.videoHeight = "og:video:height", i.audio = "og:audio", i.audioSecureUrl = "og:audio:secure_url", i.audioType = "og:audio:type", i.articlePublishedTime = "article:published_time", i.articleModifiedTime = "article:modified_time", i.articleExpirationTime = "article:expiration_time", i.articleAuthor = "article:author", i.articleSection = "article:section", i.articleTag = "article:tag", i.bookAuthor = "book:author", i.bookIsbn = "book:isbn", i.bookReleaseDate = "book:release_date", i.bookTag = "book:tag", i.musicDuration = "music:duration", i.musicAlbum = "music:album", i.musicAlbumDisc = "music:album:disc", i.musicAlbumTrack = "music:album:track", i.musicMusician = "music:musician", i.musicSong = "music:song", i.musicSongDisc = "music:song:disc", i.musicSongTrack = "music:song:track", i.musicReleaseDate = "music:release_date", i.musicCreator = "music:creator", i.videoActor = "video:actor", i.videoActorRole = "video:actor:role", i.videoDirector = "video:director", i.videoWriter = "video:writer", i.videoDuration = "video:duration", i.videoReleaseDate = "video:release_date", i.videoTag = "video:tag", i.videoSeries = "video:series", i.profileFirstName = "profile:first_name", i.profileLastName = "profile:last_name", i.profileUsername = "profile:username", i.profileGender = "profile:gender", i.productBrand = "product:brand", i.productAvailability = "product:availability", i.productCondition = "product:condition", i.productPriceAmount = "product:price:amount", i.productPriceCurrency = "product:price:currency", i.productRetailerItemId = "product:retailer_item_id", i.productCategory = "product:category", i.productEan = "product:ean", i.productIsbn = "product:isbn", i.productMfrPartNo = "product:mfr_part_no", i.productUpc = "product:upc", i.productWeightValue = "product:weight:value", i.productWeightUnits = "product:weight:units", i.productColor = "product:color", i.productMaterial = "product:material", i.productPattern = "product:pattern", i.productAgeGroup = "product:age_group", i.productGender = "product:gender", i))(b || {}), Qt = /* @__PURE__ */ ((i) => (i.website = "website", i.article = "article", i.video = "video.other", i.videoTvShow = "video.tv_show", i.videoEpisode = "video.episode", i.videoMovie = "video.movie", i.musicAlbum = "music.album", i.musicPlaylist = "music.playlist", i.musicSong = "music.song", i.musicRadioStation = "music.radio_station", i.app = "app", i.product = "product", i.business = "business.business", i.place = "place", i.event = "event", i.profile = "profile", i.book = "book", i))(Qt || {}), Xt = /* @__PURE__ */ ((i) => (i.inStock = "in stock", i.outOfStock = "out of stock", i.preorder = "preorder", i.backorder = "backorder", i.discontinued = "discontinued", i.pending = "pending", i))(Xt || {}), Mt = /* @__PURE__ */ ((i) => (i.new = "new", i.used = "used", i.refurbished = "refurbished", i))(Mt || {}), Ot = /* @__PURE__ */ ((i) => (i.newborn = "newborn", i.infant = "infant", i.toddler = "toddler", i.kids = "kids", i.adult = "adult", i))(Ot || {}), Tt = /* @__PURE__ */ ((i) => (i.female = "female", i.male = "male", i.unisex = "unisex", i))(Tt || {}), S = /* @__PURE__ */ ((i) => (i.card = "twitter:card", i.site = "twitter:site", i.creator = "twitter:creator", i.url = "twitter:url", i.title = "twitter:title", i.description = "twitter:description", i.image = "twitter:image", i.imageAlt = "twitter:image:alt", i.imageSrc = "twitter:image:src", i.imageWidth = "twitter:image:width", i.imageHeight = "twitter:image:height", i.label1 = "twitter:label1", i.data1 = "twitter:data1", i.label2 = "twitter:label2", i.data2 = "twitter:data2", i.appNameIphone = "twitter:app:name:iphone", i.appIdIphone = "twitter:app:id:iphone", i.appUrlIphone = "twitter:app:url:iphone", i.appNameIpad = "twitter:app:name:ipad", i.appIdIpad = "twitter:app:id:ipad", i.appUrlIpad = "twitter:app:url:ipad", i.appNameGooglePlay = "twitter:app:name:googleplay", i.appIdGooglePlay = "twitter:app:id:googleplay", i.appUrlGooglePlay = "twitter:app:url:googleplay", i.player = "twitter:player", i.playerWidth = "twitter:player:width", i.playerHeight = "twitter:player:height", i.playerStream = "twitter:player:stream", i.playerStreamContentType = "twitter:player:stream:content_type", i))(S || {}), Gt = /* @__PURE__ */ ((i) => (i.summary = "summary", i.summaryLargeImage = "summary_large_image", i.app = "app", i.player = "player", i.product = "product", i.gallery = "gallery", i.photo = "photo", i.leadGeneration = "lead_generation", i.audio = "audio", i.poll = "poll", i))(Gt || {});
class te extends dt {
  constructor() {
    super(Object.values(b), !0);
  }
  /**
   * Gets the Open Graph title.
   *
   * Получает заголовок Open Graph.
   */
  getTitle() {
    return this.get(b.title);
  }
  /**
   * Gets the Open Graph type.
   *
   * Получает тип Open Graph.
   */
  getType() {
    return this.get(b.type);
  }
  /**
   * Gets the Open Graph URL.
   *
   * Получает URL Open Graph.
   */
  getUrl() {
    return this.get(b.url);
  }
  /**
   * Gets the Open Graph image URL.
   *
   * Получает URL изображения Open Graph.
   */
  getImage() {
    return this.get(b.image);
  }
  /**
   * Gets the Open Graph description.
   *
   * Получает описание Open Graph.
   */
  getDescription() {
    return this.get(b.description);
  }
  /**
   * Gets the Open Graph locale.
   *
   * Получает локаль Open Graph.
   */
  getLocale() {
    return this.get(b.locale);
  }
  /**
   * Gets the Open Graph site name.
   *
   * Получает название сайта Open Graph.
   */
  getSiteName() {
    return this.get(b.siteName);
  }
  /**
   * Sets the Open Graph title.
   *
   * Устанавливает заголовок Open Graph.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set(b.title, t);
  }
  /**
   * Sets the Open Graph type.
   *
   * Устанавливает тип Open Graph.
   * @param type type / тип
   */
  setType(t) {
    return this.set(b.type, t);
  }
  /**
   * Sets the Open Graph URL.
   *
   * Устанавливает URL Open Graph.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set(b.url, t);
  }
  /**
   * Sets the Open Graph image URL.
   *
   * Устанавливает URL изображения Open Graph.
   * @param url image URL / URL изображения
   */
  setImage(t) {
    return this.set(b.image, t);
  }
  /**
   * Sets the Open Graph description.
   *
   * Устанавливает описание Open Graph.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set(b.description, t);
  }
  /**
   * Sets the Open Graph locale.
   *
   * Устанавливает локаль Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   */
  setLocale(t) {
    return this.set(b.locale, t);
  }
  /**
   * Sets the Open Graph site name.
   *
   * Устанавливает название сайта Open Graph.
   * @param siteName site name / название сайта
   */
  setSiteName(t) {
    return this.set(b.siteName, t);
  }
}
class ee extends dt {
  constructor() {
    super(Object.values(S));
  }
  /**
   * Gets the Twitter Card type.
   *
   * Получает тип Twitter Card.
   */
  getCard() {
    return this.get(S.card);
  }
  /**
   * Gets the website or brand @username.
   *
   * Получает аккаунт сайта или бренда (@username).
   */
  getSite() {
    return this.get(S.site);
  }
  /**
   * Gets the content creator @username.
   *
   * Получает автора контента (@username).
   */
  getCreator() {
    return this.get(S.creator);
  }
  /**
   * Gets the page URL.
   *
   * Получает URL страницы.
   */
  getUrl() {
    return this.get(S.url);
  }
  /**
   * Gets the card title.
   *
   * Получает заголовок карточки.
   */
  getTitle() {
    return this.get(S.title);
  }
  /**
   * Gets the card description.
   *
   * Получает описание карточки.
   */
  getDescription() {
    return this.get(S.description);
  }
  /**
   * Gets the card image URL.
   *
   * Получает URL изображения карточки.
   */
  getImage() {
    return this.get(S.image);
  }
  /**
   * Sets the Twitter Card type.
   *
   * Устанавливает тип Twitter Card.
   * @param card card type / тип карточки
   */
  setCard(t) {
    return this.set(S.card, t), this;
  }
  /**
   * Sets the website or brand @username.
   *
   * Устанавливает аккаунт сайта или бренда (@username).
   * @param site @username / аккаунт
   */
  setSite(t) {
    return this.set(S.site, t), this;
  }
  /**
   * Sets the content creator @username.
   *
   * Устанавливает автора контента (@username).
   * @param creator @username / аккаунт автора
   */
  setCreator(t) {
    return this.set(S.creator, t), this;
  }
  /**
   * Sets the page URL.
   *
   * Устанавливает URL страницы.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set(S.url, t), this;
  }
  /**
   * Sets the card title.
   *
   * Устанавливает заголовок карточки.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set(S.title, t), this;
  }
  /**
   * Sets the card description.
   *
   * Устанавливает описание карточки.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set(S.description, t), this;
  }
  /**
   * Sets the card image URL.
   *
   * Устанавливает URL изображения карточки.
   * @param image image URL / URL изображения
   */
  setImage(t) {
    return this.set(S.image, t), this;
  }
}
class ie extends dt {
  /**
   * Creates an instance of Meta with integrated Open Graph and Twitter Card support.
   *
   * Создает экземпляр Meta с интегрированной поддержкой Open Graph и Twitter Card.
   */
  constructor() {
    super(Object.values(L));
    c(this, "suffix");
    c(this, "og");
    c(this, "twitter");
    this.og = new te(), this.twitter = new ee();
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
      const s = Z(e) ? `${e}${this.getSuffix()}` : this.suffix ? this.suffix : "";
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
    return this.set(L.keywords, z(e).join(", ")), this;
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
    return Z(this.suffix) ? ` - ${this.suffix}` : "";
  }
}
const se = [
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
], re = (i, t = {}) => {
  let e = String(i);
  if (i.match(/%[a-z]/)) {
    let s = 0;
    p(t, (r) => {
      e = e.replace(new RegExp(`%${se[s++]}`, "g"), String(r));
    });
  }
  return E(t) && p(t, (s, r) => {
    e = e.replace(
      new RegExp(`\\[${r}\\](.*?)\\[/${r}\\]`, "g"),
      (o, a) => String(s).replace(/\[content]/g, a)
    ).replace(new RegExp(`\\[${r}\\]`, "g"), String(s));
  }), e;
}, C = class C {
  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(t, e) {
    var r, o;
    const s = this.getName(t);
    return s in this.data ? this.replacement(this.data[s], e) : (Y.isLocalhost() || await this.add(t), this.replacement((o = (r = this.data) == null ? void 0 : r[s]) != null ? o : t));
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
    const r = this.getName(t);
    return r in this.data ? this.replacement(String(this.data[r]), s) : e ? " " : t;
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
      let r = 0;
      for (const o of t) {
        const a = Array.isArray(o) ? o[0] : o, u = Array.isArray(o) ? o.slice(1) : void 0;
        this.get(a, u).then((h) => {
          s[a] = h, ++r >= t.length && e(s);
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
    for (const r of t) {
      const o = Array.isArray(r) ? r[0] : r, a = Array.isArray(r) ? r.slice(1) : void 0;
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
          this.resolveList.forEach((r) => r()), this.resolveList = [];
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
    p(t, (e, s) => {
      Q(e) && Z(e) && (this.data[this.getName(s)] = e);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (Z(t))
      if (Y.isLocalhost())
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
    return this.url = t, C;
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
    return `${D.getLocation()}-${t}`;
  }
  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getNamesNone(t) {
    const e = [];
    return z(t).forEach((s) => {
      s !== "__TRANSLATE_START__" && s !== "__TRANSLATE_END__" && !(this.getName(s) in this.data) && e.push(s);
    }), e;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = await Y.get({
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
    return e ? re(t, e) : t;
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
c(C, "url", "/api/translate"), c(C, "propsName", "list"), c(C, "data", {}), c(C, "cache", []), c(C, "resolveList", []), c(C, "timeout");
let q = C;
function gt(i) {
  return Array.isArray(i);
}
function Re(i) {
  var t;
  return Q(i) ? i.trim() : gt(i) && i.findIndex((e) => w(e)) === -1 ? i.join(",") : w(i) ? JSON.stringify(i) : i === !0 ? "1" : i === !1 ? "0" : (t = i == null ? void 0 : i.toString()) != null ? t : "";
}
function ne(i, t) {
  return Array(t).fill(i);
}
function We(i) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onloadend = () => t(s.result), s.onerror = e, s.readAsDataURL(i);
  });
}
function je(i) {
  var t;
  if (y())
    return (t = document.querySelector(i)) != null ? t : void 0;
}
function Ue(i) {
  if (y())
    return document.querySelectorAll(i);
}
function ze(i) {
  i.preventDefault(), i.stopPropagation();
}
function oe(i, t, e) {
  const s = () => {
    i(), t != null && t() ? oe(i, t, e) : e == null || e();
  };
  y() ? requestAnimationFrame(s) : s();
}
function _e(i) {
  var s;
  const t = {}, e = St(i);
  if (e)
    for (const r of e.attributes)
      t[r.name] = (s = (r == null ? void 0 : r.value) || (r == null ? void 0 : r.textContent)) != null ? s : void 0;
  return t;
}
async function Ke(i) {
  var t, e;
  return (e = (t = i == null ? void 0 : i.clipboardData) == null ? void 0 : t.getData("text")) != null ? e : await navigator.clipboard.readText() || "";
}
let yt = K(1e5, 9e5);
function j(i, t) {
  const e = St(i);
  return e ? (Z(e.id) || e.setAttribute("id", `id-${yt++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${yt++}`;
}
function ae(i) {
  return Q(i) ? bt(
    void 0,
    "img",
    { src: i }
  ) : i;
}
function Lt(i, t = "ig", e = ":value") {
  const s = i.replace(/([[\]\\^$.?*+()/])/g, "\\$1");
  return new RegExp(e.replace(/:value/g, s), t);
}
function ue(i, t) {
  var r;
  const e = t.split(".", 2), s = e[0];
  return s && (i != null && i[s]) && E(i[s]) && (e != null && e[1]) ? ue(i[s], e[1]) : (r = s && (i == null ? void 0 : i[s])) != null ? r : "";
}
function Ze(i) {
  var t, e, s;
  return (s = (t = i == null ? void 0 : i.key) != null ? t : i == null ? void 0 : i.code) != null ? s : (e = i == null ? void 0 : i.keyCode) == null ? void 0 : e.toString();
}
function It(i) {
  return p(i, (t) => t.length);
}
function Ve(i) {
  return Math.max(...It(i));
}
function Ye(i) {
  return Math.min(...It(i));
}
function ce(i) {
  var t, e, s, r;
  return (i == null ? void 0 : i.clientX) || ((e = (t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientX) || ((r = (s = i == null ? void 0 : i.touches) == null ? void 0 : s[0]) == null ? void 0 : r.clientX) || 0;
}
function le(i) {
  var t, e, s, r;
  return (i == null ? void 0 : i.clientY) || ((e = (t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientY) || ((r = (s = i == null ? void 0 : i.touches) == null ? void 0 : s[0]) == null ? void 0 : r.clientY) || 0;
}
function qe(i) {
  return {
    x: ce(i),
    y: le(i)
  };
}
function Je(i, t) {
  const e = {};
  return t.forEach((s) => {
    s in i && i[s] !== void 0 && (e[s] = i[s]);
  }), e;
}
function Qe(i, t = void 0) {
  const e = {};
  return p(i, (s, r) => {
    s !== t && (e[r] = s);
  }), e;
}
function Xe(i) {
  return E(i) ? i : {};
}
function he(i, t) {
  return ne(i, t).join("");
}
function Me(i, t, e = "#", s = 2, r = 12) {
  const o = K(i, t), a = [];
  for (let u = 0; u < o; u++)
    a.push(he(e, K(s, r)));
  return a.join(" ");
}
function Oe(i, t) {
  const e = i != null ? i : 0;
  return t > e ? 100 / (t - e) : 0;
}
function Te(i, t) {
  const e = i != null ? i : 0;
  return t > e ? (t - e) / 100 : 0;
}
const $t = 0;
function Ge(i, t, e) {
  const s = t == null ? void 0 : t.closest(i);
  if (t && s && s.scrollHeight !== s.offsetHeight)
    if (e) {
      const r = e.getBoundingClientRect(), o = s.getBoundingClientRect(), a = t.getBoundingClientRect();
      s.scrollTop = t.offsetTop - (r.top - o.top) - (r.height / 2 - a.height / 2), s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight);
    } else s.scrollTop > t.offsetTop ? s.scrollTop = t.offsetTop - $t : s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight + $t);
}
function ti(i, t) {
  return i.indexOf(t) !== -1;
}
async function ei() {
  if (y()) {
    const i = await wt.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${i}px`);
  }
}
function ii(i, t) {
  const e = {};
  return w(i) && w(t) && p(i, (s, r) => {
    r in t && (e[r] = s);
  }), e;
}
function si(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || p(i, (s, r) => {
    s !== (t == null ? void 0 : t[r]) && (e = !0);
  }), e;
}
function ri(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function ni(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function oi(i, t) {
  return Array.isArray(i) ? i.every((e) => P(e, t)) : P(i, t);
}
function de(i) {
  return [...new Set(i)];
}
function U(i, t, e = !0) {
  const s = _(i);
  return w(i) && w(t) && p(
    t,
    (r, o) => {
      const a = i == null ? void 0 : i[o];
      w(a) && w(r) ? e && Array.isArray(a) && Array.isArray(r) ? s[o] = _(de([...a, ...r])) : s[o] = U(
        Array.isArray(a) ? { ...a } : a,
        r,
        e
      ) : s[o] = w(r) ? _(r) : r;
    }
  ), s;
}
function ai(i, t) {
  let e = i;
  return p(t, (s, r) => {
    e = e.replace(Lt(`[${r}]`), lt(s));
  }), e;
}
function ge(i, t = "auto") {
  switch (t) {
    case "auto":
      return i.naturalWidth >= i.naturalHeight;
    case "width":
      return !0;
    case "height":
      return !1;
  }
}
function ui(i, t, e = "auto", s) {
  var o;
  const r = ae(i);
  if (r && (r.naturalWidth > t && (e === "auto" || e === "width") || r.naturalHeight > t && (e === "auto" || e === "height"))) {
    const a = ge(r, e), u = (o = document.createElement("canvas")) == null ? void 0 : o.getContext("2d");
    if (u)
      return u.canvas.width = a ? t : r.naturalWidth / r.naturalHeight * t, u.canvas.height = a ? r.naturalHeight / r.naturalWidth * t : t, u.drawImage(r, 0, 0, u.canvas.width, u.canvas.height), u.canvas.toDataURL(s);
  }
}
function ci(i) {
  const t = N(i);
  if (t > 0) {
    const e = String(Math.floor(t / 60)).padStart(2, "0"), s = String(t % 60).padStart(2, "0");
    return `${e}:${s}`;
  }
  return "00:00";
}
function li(i, t, {
  multiple: e = !1,
  maxlength: s = 0,
  alwaysChange: r = !0,
  notEmpty: o = !1
}) {
  if (e) {
    if (gt(i)) {
      const a = i.indexOf(t), u = [...i];
      return a !== -1 ? (!o || u.length > 1) && u.splice(a, 1) : (!s || i.length < s) && u.push(t), u;
    }
    return i === t ? [] : i ? [i, t] : [t];
  }
  return r || i !== t ? t : i;
}
function hi(i, t, e) {
  if (w(i) && w(t)) {
    if (e) {
      let s = {}, r = !1;
      return p(i, (o, a) => {
        !r && (e === a || e === o) ? (r = !0, s = U(s, t)) : r ? s = U(s, { [a]: o }) : s[a] = w(o) ? _(o) : o;
      }), r ? s : U(i, t);
    }
    if (w(t))
      return U(i, t);
  }
  return _(i);
}
function kt(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${String(t[1]).toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function di(i) {
  return kt(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function gi(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(/(?<=[\w ])[A-Z]/g, (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function fi(i, t, e, s) {
  const r = N(i), o = N(t);
  return t && o < r ? `${pt(o, e, s)}+` : pt(r, e, s);
}
const pt = (i, t, e) => t ? new W(e).number(i) : i;
function fe(i, t) {
  return 1 / i * t;
}
function mi(i, t) {
  return fe(i, t) * 100;
}
function yi(i) {
  let t = "";
  for (const e of i)
    t += String.fromCharCode(e);
  return y() ? window.btoa(t) : globalThis && globalThis.Buffer ? globalThis == null ? void 0 : globalThis.Buffer.from(i).toString("base64") : "";
}
async function $i(i) {
  if (y())
    try {
      await navigator.clipboard.writeText(i);
    } catch (t) {
      document == null || document.execCommand(i);
    }
}
class me {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param watch data for tracking/ данные для слежения
   */
  constructor(t, e = Object.keys(t)) {
    c(this, "cache", {});
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
class ye {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param callback callback function when the value changes/
   * функция обратного вызова при изменении значения
   * @param changed base data/ данный для слежения
   */
  constructor(t, e, s) {
    c(this, "event", {});
    c(this, "changed");
    this.props = t, this.callback = e, this.changed = new me(t, s);
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
class pi extends ye {
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
function f(i) {
  return X(i) ? i.value : i;
}
function $e(i) {
  return i && "class" in i && typeof i.class == "string" ? i.class : void 0;
}
function pe(i, t, e) {
  const s = $e(t);
  return e && s ? `${e}.${s}` : e || s || i;
}
function ve(i, t, e, s) {
  let r = t;
  return (!t || "key" in t) && (r = {
    key: pe(i, t, s),
    ...t
  }), Wt(i, r, e);
}
function ut(i, t) {
  const e = i == null ? void 0 : i.class, s = t == null ? void 0 : t.class, r = i == null ? void 0 : i.style, o = t == null ? void 0 : t.style, a = {
    ...i,
    ...t
  };
  return e && s && (a.class = [], e && a.class.push(e), s && a.class.push(s)), r && o && (a.style = [], r && a.style.push(r), o && a.style.push(o)), a;
}
function be(...i) {
  let t = {};
  return i.forEach((e) => {
    e && (t = ut(t, e));
  }), t;
}
class Ct {
  /**
   * Constructor
   * @param components list of connected components/ список подключенных компонентов
   * @param modification data for modification/ данные для модификации
   */
  constructor(t = {}, e) {
    /** Cache for computed properties/ Кэш для вычисляемых свойств */
    c(this, "caching", {});
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
        return e ? be(s.value, e) : s.value;
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
  render(t, e, s, r) {
    const o = this.renderOne(
      t,
      e,
      s,
      r
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
  renderOne(t, e, s, r) {
    if (this.is(t)) {
      const o = r != null ? r : t;
      return ve(
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
  renderAdd(t, e, s, r, o) {
    return t.push(...this.render(e, s, r, o)), this;
  }
  /**
   * Calculates modified input data for connected components.
   *
   * Вычисляет модифицированные входные данные для подключенных компонентов.
   * @param index the name of this/ название данного
   */
  computeModification(t) {
    var s;
    const e = f((s = this.modification) == null ? void 0 : s[t]);
    if (e && E(e)) {
      const r = {};
      return p(e, (o, a) => {
        r[a] = f(o);
      }), r;
    }
    return {};
  }
}
class vi extends Ct {
}
class bi {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, e, s) {
    c(this, "name");
    c(this, "element", $());
    c(this, "refs");
    c(this, "components");
    c(this, "emits");
    c(this, "classes");
    c(this, "classesSub");
    c(this, "styles");
    c(this, "stylesSub");
    c(this, "attrs");
    c(this, "slots");
    c(this, "dataExpose");
    this.props = e, this.options = s, this.name = this.initName(t), this.refs = this.props ? jt(this.props) : {}, this.components = new Ct(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = l(() => this.updateClasses()), this.styles = l(() => this.updateStyles()), this.attrs = Ut(), this.slots = zt();
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
    return `${this.getName()}__${z(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${z(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${z(t).join("-")}`;
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
    var r;
    if (this.slots && ((r = this.slots) != null && r[t]) && typeof this.slots[t] == "function") {
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
    return E(t) ? t : Array.isArray(t) ? { [t.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes/ список классов
   */
  toClassName(t) {
    if (w(t)) {
      const e = {};
      return p(t, (s, r) => {
        r.match(/\?\?/) ? e[r.replace(/\?\?/, this.getName())] = s : r.match(/\?/) ? e[r.replace(/\?/, this.getDesign())] = s : e[r] = s;
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
    return p(t.split(".", 2), (e) => kt(e));
  }
  /**
   * Updating data about the class.
   *
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, r, o, a;
    const t = (s = this.classesSub) == null ? void 0 : s.value, e = (o = (r = this.options) == null ? void 0 : r.classes) == null ? void 0 : o.value;
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
    var s, r, o;
    const t = (s = this.stylesSub) == null ? void 0 : s.value, e = (o = (r = this.options) == null ? void 0 : r.styles) == null ? void 0 : o.value;
    return t && e ? {
      ...t,
      ...e
    } : e != null ? e : {};
  }
}
function B(i) {
  return X(i) ? i : $(i);
}
class Si {
  /**
   * Constructor
   * @param date date for processing. дата для обработки
   * @param type type of date format for output. тип формата даты вывода
   * @param code country and language code. код страны и языка
   */
  constructor(t, e = "date", s = D.getLocation()) {
    c(this, "item");
    c(this, "type");
    c(this, "code");
    c(this, "date");
    c(this, "datetime");
    c(this, "year", l(() => this.date.value && this.datetime.getYear()));
    c(this, "month", l(() => this.date.value && this.datetime.getMonth()));
    c(this, "day", l(() => this.date.value && this.datetime.getDay()));
    c(this, "hour", l(() => this.date.value && this.datetime.getHour()));
    c(this, "minute", l(() => this.date.value && this.datetime.getMinute()));
    c(this, "second", l(() => this.date.value && this.datetime.getSecond()));
    this.item = B(t), this.type = B(e), this.code = B(s), this.date = $(A(this.item.value)), this.datetime = new ht(
      this.date.value,
      this.type.value,
      this.code.value
    ), m(this.item, (r) => {
      this.date.value = A(r);
    }), m(this.type, (r) => this.datetime.setType(r)), m(this.code, (r) => this.datetime.setCode(r)), m(this.date, (r) => this.datetime.setDate(r)), this.datetime.setWatch(() => _t(this.date));
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
class wi extends Ht {
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
  constructor(t, e, s = ["click"], r, o, a) {
    const u = B(t), h = B(e);
    super(
      u.value,
      s,
      r,
      o,
      a
    ), h.value && this.setElementControl(h.value), m(u, (d) => this.setElement(d)), m(h, (d) => this.setElementControl(d));
  }
}
class Di {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = D.getLocation()) {
    c(this, "code");
    c(this, "flag");
    this.code = B(t), this.flag = new at(this.code.value), m(this.code, (e) => this.flag.setCode(e));
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
const k = class k {
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
    D.set(t, !0), this.item.value = D.getItem();
  }
};
c(k, "item", F(D.get())), c(k, "country", l(() => k.item.value.country)), c(k, "language", l(() => k.item.value.language)), c(k, "standard", l(() => k.item.value.standard)), c(k, "firstDay", l(() => k.item.value.firstDay));
let V = k;
class Se {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    c(this, "location");
    c(this, "intl");
    this.location = B(t), this.intl = l(() => {
      var e;
      return new W((e = this.location.value) != null ? e : V.getLanguage().value);
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
    return l(() => this.intl.value.display(f(t), e));
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(t, e) {
    return l(() => this.intl.value.languageName(f(t), e));
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, e) {
    return l(() => this.intl.value.countryName(f(t), e));
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
    return l(() => this.intl.value.number(f(t), e));
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
        f(t),
        f(e),
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
    return l(() => this.intl.value.unit(f(t), e));
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return l(() => this.intl.value.percent(f(t), e));
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
    return l(() => this.intl.value.percentBy100(f(t), e));
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
  date(t, e, s, r) {
    return l(() => this.intl.value.date(f(t), e, s, r));
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
    return l(() => this.intl.value.relative(f(t), e, s));
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
  relativeLimit(t, e, s, r, o, a, u) {
    return l(() => this.intl.value.relativeLimit(
      f(t),
      e,
      s,
      r,
      o,
      a,
      u
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
    return l(() => this.intl.value.month(f(t), e));
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
    return l(() => this.intl.value.weekday(f(t), e));
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
    return l(() => this.intl.value.time(f(t)));
  }
}
class Nt {
  /**
   * Creates an instance of ListData for managing list data.
   *
   * Создает экземпляр ListData для управления данными списка.
   * @param list List data / данные списка
   * @param focus Focused item / элемент в фокусе
   * @param highlight Search text for highlighting / текст поиска для выделения
   * @param highlightLengthStart Minimum length to start highlighting / минимальная длина для начала выделения
   * @param filterMode Filter mode / режим фильтрации
   * @param selected Selected items / выбранные элементы
   * @param keyValue Key for getting item value / ключ для получения значения элемента
   * @param keyLabel Key for getting item label / ключ для получения метки элемента
   * @param lite Threshold for lite mode / порог для облегченного режима
   * @param min Minimum number of selections / минимальное количество выделений
   * @param max Maximum number of selections / максимальное количество выделений
   * @param parent Parent identifier / идентификатор родителя
   */
  constructor(t, e, s, r, o, a, u, h, d, g = 0, v = 9999999, x) {
    c(this, "subList", {});
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     */
    c(this, "data", l(
      () => p(
        f(this.list) || [],
        (t, e) => this.initItem(e, t)
      )
    ));
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     */
    c(this, "liteData", l(() => {
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
    c(this, "fullData", l(() => {
      const t = this.getFocus(), e = this.getHighlight(), s = this.getSelected();
      return p(
        this.data.value,
        (r) => {
          var a, u;
          const o = P(r.index, s);
          return {
            ...r,
            focus: t === r.index,
            highlight: e,
            filterMode: (a = this.filterMode) == null ? void 0 : a.value,
            selected: o,
            disabled: (u = r.disabled) != null ? u : !o && r.type === "item" && this.isSelectedMax.value
          };
        }
      );
    }));
    /**
     * Returns a map of all entries.
     *
     * Возвращает карту всех записей.
     */
    c(this, "map", l(() => {
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
    c(this, "mapItems", l(() => this.map.value.filter((t) => t.type === "item")));
    /**
     * Returns a list consisting only of values for selection.
     *
     * Возвращает список, состоящий только из значений для выбора.
     */
    c(this, "items", l(() => this.map.value.filter(
      (t) => t.type === "item" || t.type === "group" || t.type === "menu"
    )));
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     */
    c(this, "highlightFirstItem", l(() => {
      const t = this.getHighlight();
      if (t && t.length >= this.getHighlightLengthStart()) {
        const e = Lt(t, "i");
        if (e)
          return this.map.value.findIndex(
            (s) => {
              var r, o, a;
              return ((r = s.label) == null ? void 0 : r.toString().match(e)) || ((o = s.index) == null ? void 0 : o.toString().match(e)) || ((a = s.search) == null ? void 0 : a.toString().match(e));
            }
          );
      }
      return -1;
    }));
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     */
    c(this, "isSelected", l(() => {
      const t = this.getSelected();
      return !!t && this.mapItems.value.findIndex((e) => P(e.index, t)) !== -1;
    }));
    /** Is the minimum selection reached/ Достигнуто ли минимальное выделение */
    c(this, "isSelectedMin", l(() => {
      const t = Number(f(this.min) || 0);
      return t > 0 ? t >= this.selectedListInGroup.value.length : !1;
    }));
    /** Is the maximum selection reached/ Достигнуто ли максимальное выделение */
    c(this, "isSelectedMax", l(() => {
      const t = Number(f(this.max) || 9999999);
      return t > 0 ? t <= this.selectedListInGroup.value.length : !1;
    }));
    /**
     * Returns a list of selected items on the map/
     * Возвращает список выделенных элементов на карте
     */
    c(this, "selectedList", l(() => {
      const t = this.getSelected();
      return t && this.isSelected.value ? this.mapItems.value.filter((e) => P(e.index, t)) : [];
    }));
    /**
     * Returns a list of selected items in the current group/
     * Возвращает список выделенных элементов в текущей группе
     */
    c(this, "selectedListInGroup", l(() => {
      const t = this.getSelected();
      return t && this.isSelected.value ? this.data.value.filter((e) => P(e.index, t)) : [];
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    c(this, "selectedNames", l(() => ot(this.selectedList.value, "label")));
    /**
     * Returns a list of selected item values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     */
    c(this, "selectedValues", l(() => ot(this.selectedList.value, "value")));
    this.list = t, this.focus = e, this.highlight = s, this.highlightLengthStart = r, this.filterMode = o, this.selected = a, this.keyValue = u, this.keyLabel = h, this.lite = d, this.min = g, this.max = v, this.parent = x, X(t) && m(t, () => {
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
   * Checks if highlighting is active.
   *
   * Проверяет, активно ли выделение.
   */
  isHighlightActive() {
    var t, e;
    return ((e = (t = this.getHighlight()) == null ? void 0 : t.length) != null ? e : 0) < this.getHighlightLengthStart() || this.isHighlight();
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
   * Returns an item by moving a certain number of steps from the selected item.
   *
   * Возвращает элемент, перемещаясь на определенное количество шагов от выбранного элемента.
   * @param step number of steps/ количество шагов
   */
  getSelectedByStep(t) {
    var a, u, h, d, g;
    const e = (a = this.selectedList.value) == null ? void 0 : a[0], s = this.mapItems.value;
    if (!e)
      return (u = s[0]) == null ? void 0 : u.index;
    const o = s.findIndex((v) => v.index === e.index) + t;
    if (o in s)
      return (h = s[o]) == null ? void 0 : h.index;
    if (t > 0)
      return (d = s[0]) == null ? void 0 : d.index;
    if (t < 0)
      return (g = s[s.length - 1]) == null ? void 0 : g.index;
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
    return t.index in this.subList || (this.subList[t.index] = new Nt(
      t.value,
      this.focus,
      this.highlight,
      this.highlightLengthStart,
      this.filterMode,
      this.selected,
      this.keyValue,
      this.keyLabel,
      this.lite,
      this.min,
      this.max,
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
  getIndex(t, e, s, r) {
    return t && !w(t) ? t : e && !w(e) ? e : s && r;
  }
  /**
   * Creates an object of the record element.
   *
   * Создает объект элемента записи.
   * @param key the value of the key in the element/ значения ключа у элемента
   * @param item selected element/ выбранный элемент
   */
  initItem(t, e) {
    var s, r, o, a, u, h;
    if (E(e)) {
      const d = e == null ? void 0 : e[(r = (s = this.keyValue) == null ? void 0 : s.value) != null ? r : "value"], g = (u = e == null ? void 0 : e[(a = (o = this.keyLabel) == null ? void 0 : o.value) != null ? a : "label"]) != null ? u : d, v = this.getIndex(
        e == null ? void 0 : e.index,
        d,
        t,
        g
      );
      return {
        ...e,
        parent: this.parent,
        index: v,
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
class we {
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
c(we, "router");
class Li {
  /**
   * Constructor
   */
  constructor() {
    /**
     * Reactive item.
     *
     * Реактивный элемент.
     */
    c(this, "item", $());
    /**
     * Checks whether the scroll width is defined.
     *
     * Проверяет, определена ли ширина скролла.
     */
    c(this, "is", l(() => this.item.value !== void 0));
    wt.is().then((t) => {
      this.item.value = t;
    });
  }
}
const De = (i) => typeof i == "string" ? { method: i } : i || {};
let J;
function Ii(i, t, e = !0, s, r, o) {
  const a = $(), u = B(De(t)), h = $(!1), d = $(!1);
  let g = !0, v = 0;
  const x = async () => {
    if (g)
      return;
    const I = f(i);
    if ((!s || s.value) && I) {
      h.value = !0, d.value = !0;
      let O = {};
      const ft = await Y.request({
        path: I,
        ...u.value
      });
      ft && (O = ft), r ? a.value = r(O) : a.value = O, h.value = !1;
    } else a.value !== void 0 && (a.value = void 0);
  }, M = () => {
    const I = [];
    e && I.push(u), X(i) && I.push(i), s && I.push(s), J && I.push(J), I.length > 0 && m(I, async () => {
      h.value || await x();
    });
  };
  return {
    get data() {
      return g && (g = !1, x().then()), M(), o && (v++, nt(() => {
        v--, v < 1 && (console.warn("useApiRef: unmounted"), a.value = void 0, g = !0, v = 0);
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
    reset: x
  };
}
const ki = (i) => {
  J || (J = i);
};
function Le(i, t) {
  const e = `broadcast--${i}`;
  if (e in tt)
    return tt[e];
  const s = $(lt(t)), r = new Vt(
    e,
    (o) => {
      s.value !== o.data.message && (s.value = o.data.message);
    }
  );
  return m(s, (o) => r.post({ message: o })), tt[e] = s, s;
}
const tt = {};
function Ci(i, t, e) {
  if (i in et)
    return et[i];
  const s = new Pt(i), r = Le(
    `__cookie:${i}`,
    s.get(t, e)
  );
  return m(r, (o) => {
    s.set(o, e);
  }), et[i] = r, r;
}
const et = {};
function Ni() {
  return new Se();
}
function Ai(i, t) {
  if (i in it)
    return it[i];
  const e = F(T.get(i, t));
  return m(e, (s) => T.set(i, s)), T.addWatch(i, (s) => {
    e.value = s;
  }), it[i] = e, e;
}
const it = {}, Ie = (i = {
  rootMargin: "128px 0px"
}) => {
  const t = {}, e = y() && "IntersectionObserver" in window ? new IntersectionObserver(
    (r) => {
      r.forEach((o) => {
        const a = j(o.target);
        if (a in t) {
          const u = t[a];
          u.status.value = o.isIntersecting, u.ratio.value = o.intersectionRatio, u.entry.value = o;
        }
      });
    },
    i
  ) : void 0, s = (r) => {
    var o;
    if (r) {
      const a = j(r);
      a in t && (e == null || e.unobserve(r), (o = t[a]) == null || o.stopWatch(), delete t[a]);
    }
  };
  return {
    intersectionObserver: e,
    /**
     * Getting a tracked element.
     *
     * Получение отслеживаемого элемента.
     * @param element tracked element/ отслеживаемый элемент
     */
    getItem(r) {
      const o = j(r);
      return t[o];
    },
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(r) {
      const o = F(!e);
      if (e) {
        let a;
        a = m(r, (u, h) => {
          if (h && s(h), r.value) {
            const d = j(r.value);
            t[d] = {
              status: o,
              ratio: F(0),
              entry: F(void 0),
              stopWatch: () => a == null ? void 0 : a()
            }, e.observe(r.value);
          } else
            s(r.value);
        }, { immediate: !0 });
      }
      return o;
    },
    /**
     * Removing an element from tracking.
     *
     * Удаление элемента из отслеживания.
     */
    removeLazyItem: s,
    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: () => e == null ? void 0 : e.disconnect()
  };
}, vt = [], ke = (i) => {
  const t = vt.find((s) => s.rootMargin === i);
  if (t)
    return t.item;
  const e = Ie({ rootMargin: i });
  return vt.push({ rootMargin: i, item: e }), e;
}, Bi = (i, t) => {
  const e = ke(t);
  return {
    /** Lazy item status/ Статус ленивого элемента */
    lazyItemStatus: e.addLazyItem(i),
    /**
     * Getting a tracked lazy item.
     *
     * Получение отслеживаемого ленивого элемента.
     */
    get lazyItem() {
      return e.getItem(i.value);
    }
  };
};
function xi() {
  const i = F(mt.is());
  return mt.registrationEvent(({ detail: t }) => {
    i.value = t.loading;
  }), i;
}
const At = [], Ce = K(1e5, 999999);
function Ne(i, t = !0, e = !1, s = !0) {
  let r;
  const o = `__execute_use${Ce}::${j()}`, a = (h) => {
    const d = Object.freeze(i(...h));
    return Object.freeze({
      ...d,
      init() {
        return d;
      }
    });
  }, u = (...h) => {
    if (!e && s) {
      const d = Kt(o, void 0);
      if (d)
        return d;
      {
        let g = a(h);
        return Zt(o, g), t && nt(() => {
          g = void 0;
        }), g;
      }
    } else r || (r = a(h), t && nt(() => {
      r = void 0;
    }));
    return r;
  };
  return e && At.push(u), u;
}
function Fi() {
  At.forEach((i) => i());
}
const Ae = Ne(() => {
  const i = new ie(), t = $(i.getTitle()), e = $(i.getKeywords()), s = $(i.getDescription()), r = $(i.getImage()), o = $(i.getCanonical()), a = $(i.getRobots()), u = $(i.getAuthor()), h = $(i.getSiteName()), d = () => i.html();
  return m(t, () => {
    i.setTitle(t.value);
  }), m(e, () => {
    i.setKeywords(e.value);
  }), m(s, () => {
    i.setDescription(s.value);
  }), m(r, () => {
    i.setImage(r.value);
  }), m(o, () => {
    i.setCanonical(o.value);
  }), m(a, () => {
    i.setRobots(a.value);
  }), m(u, () => {
    i.setAuthor(u.value);
  }), m(h, () => {
    i.setSiteName(h.value);
  }), {
    meta: i,
    title: t,
    keyword: e,
    description: s,
    author: u,
    image: r,
    canonical: o,
    robots: a,
    siteName: h,
    getHtmlMeta: d
  };
}, !1, !0), Ei = () => Ae();
function Hi(i, t) {
  if (i in st)
    return st[i];
  const e = new ct(i, !0), s = $(e.get(t));
  return m(s, (r) => e.set(r)), st[i] = s, s;
}
const st = {};
function Pi(i, t, e) {
  if (i in rt)
    return rt[i];
  const s = new ct(i), r = $(s.get(t, e));
  return m(r, (o) => s.set(o)), y() && window.addEventListener("storage", () => {
    s.update(), r.value = s.get();
  }), rt[i] = r, r;
}
const rt = {};
function Be(i) {
  const t = F(q.getListSync(i, !0)), e = async () => {
    t.value = { ...await q.getList(i) };
  };
  m(V.getLanguage(), e);
  for (const s in t.value)
    if (t.value[s] === s || t.value[s] === " ") {
      e().then();
      break;
    }
  return t;
}
const Ri = (i) => Be(i);
function Wi(i, t) {
  const e = $();
  return Dt(async () => {
    e.value = await Rt(i);
  }), l(() => e.value, t);
}
function ji(i, t = () => {
}, e, s) {
  return l(
    () => {
      if (V.get().value && (e === void 0 || e())) {
        const r = i();
        if (r !== void 0)
          return r;
      }
      return lt(t);
    },
    s
  );
}
function xe(i, t = {}, e = "value", s = !1) {
  const r = typeof t == "string", o = r ? t : e, a = r ? {} : t;
  return i ? i && E(i) && (o in i || s) ? ut(a, i) : ut(a, { [o]: i }) : r ? {} : { ...a };
}
function Ui(i, t = {}, e = "value") {
  return l(() => xe(f(i), f(t), e));
}
const zi = (i, t) => {
  const e = $();
  let s = !0;
  const r = () => {
    s && (Dt(async () => {
      const o = f(await i());
      o !== t && (e.value = o);
    }), s = !1);
  };
  return l(() => (r(), e.value));
};
function _i(i, t) {
  i.value !== t && (i.value = t);
}
function Ki(i) {
  let t;
  return l(() => (t || (t = i()), t.value));
}
export {
  Y as Api,
  Yi as ApiDefault,
  qi as ApiHeaders,
  Ji as ApiMethodItem,
  Qi as ApiPreparation,
  Xi as ApiResponse,
  Mi as ApiStatus,
  Vt as BroadcastMessage,
  Oi as Cache,
  Ti as CacheItem,
  Gi as CacheStatic,
  Pt as Cookie,
  ts as CookieBlock,
  ct as DataStorage,
  ht as Datetime,
  Si as DatetimeRef,
  ye as DesignAbstract,
  pi as DesignAsyncAbstract,
  me as DesignChanged,
  vi as DesignComp,
  Ct as DesignComponents,
  bi as DesignConstructorAbstract,
  Ht as EventItem,
  wi as EventRef,
  n as GEO_FLAG_ICON_NAME,
  D as Geo,
  at as GeoFlag,
  Di as GeoFlagRef,
  W as GeoIntl,
  Se as GeoIntlRef,
  es as GeoPhone,
  V as GeoRef,
  Pe as Global,
  T as Hash,
  is as Icons,
  Nt as ListDataRef,
  mt as Loading,
  ie as Meta,
  dt as MetaManager,
  te as MetaOg,
  Ot as MetaOpenGraphAge,
  Xt as MetaOpenGraphAvailability,
  Mt as MetaOpenGraphCondition,
  Tt as MetaOpenGraphGender,
  b as MetaOpenGraphTag,
  Qt as MetaOpenGraphType,
  Jt as MetaRobots,
  L as MetaTag,
  ee as MetaTwitter,
  Gt as MetaTwitterCard,
  S as MetaTwitterTag,
  we as RouterItemRef,
  wt as ScrollbarWidth,
  Li as ScrollbarWidthRef,
  q as Translate,
  Re as anyToString,
  re as applyTemplate,
  ne as arrFill,
  We as blobToBase64,
  Wi as computedAsync,
  ji as computedByLanguage,
  _ as copyObject,
  Et as copyObjectLite,
  bt as createElement,
  je as domQuerySelector,
  Ue as domQuerySelectorAll,
  qt as encodeAttribute,
  ze as eventStopPropagation,
  lt as executeFunction,
  Rt as executePromise,
  Ne as executeUse,
  Fi as executeUseGlobalInit,
  p as forEach,
  oe as frame,
  _e as getAttributes,
  xe as getBind,
  Ui as getBindRef,
  $e as getClassName,
  Ke as getClipboardData,
  ot as getColumn,
  zi as getComputedAsync,
  St as getElement,
  j as getElementId,
  ae as getElementImage,
  ss as getElementItem,
  rs as getElementOrWindow,
  Lt as getExp,
  pe as getIndexForRender,
  ue as getItemByPath,
  Ze as getKey,
  It as getLengthOfAllArray,
  Ve as getMaxLengthAllArray,
  Ye as getMinLengthAllArray,
  qe as getMouseClient,
  ce as getMouseClientX,
  le as getMouseClientY,
  Je as getObjectByKeys,
  Qe as getObjectNoUndefined,
  Xe as getObjectOrNone,
  Me as getRandomText,
  f as getRef,
  ns as getRequestString,
  Oe as getStepPercent,
  Te as getStepValue,
  Ge as goScroll,
  ti as inArray,
  ei as initScrollbarOffset,
  ii as intersectKey,
  gt as isArray,
  si as isDifferent,
  os as isDomData,
  y as isDomRuntime,
  Z as isFilled,
  ri as isFloat,
  as as isFunction,
  us as isInDom,
  ni as isIntegerBetween,
  Ft as isNull,
  cs as isNumber,
  w as isObject,
  E as isObjectNotArray,
  P as isSelected,
  oi as isSelectedByList,
  Q as isString,
  ls as isWindow,
  K as random,
  ve as render,
  U as replaceRecursive,
  ai as replaceTemplate,
  ui as resizeImageByMax,
  ci as secondToTime,
  ki as setApiRefGlobalConditions,
  hs as setElementItem,
  _i as setRef,
  li as setValues,
  hi as splice,
  he as strFill,
  Ri as t,
  z as toArray,
  ut as toBind,
  be as toBinds,
  kt as toCamelCase,
  di as toCamelCaseFirst,
  Ki as toComputed,
  A as toDate,
  gi as toKebabCase,
  N as toNumber,
  fi as toNumberByMax,
  fe as toPercent,
  mi as toPercentBy100,
  B as toRefItem,
  ds as transformation,
  yi as uint8ArrayToBase64,
  de as uniqueArray,
  Ii as useApiRef,
  Le as useBroadcastValueRef,
  Ci as useCookieRef,
  Ni as useGeoIntlRef,
  Ai as useHashRef,
  Bi as useLazyItemByMarginRef,
  Ie as useLazyRef,
  xi as useLoadingRef,
  Ei as useMeta,
  Hi as useSessionRef,
  Pi as useStorageRef,
  Be as useTranslateRef,
  $i as writeClipboardData
};
