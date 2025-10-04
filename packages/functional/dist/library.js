var At = Object.defineProperty;
var It = (i, t, e) => t in i ? At(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var k = (i, t, e) => It(i, typeof t != "symbol" ? t + "" : t, e);
import { i as d, D as Y, e as I, a as O, b as Nt, G as y, f, t as b, c as nt, d as B, g as Tt, h as K, j as m, k as C, A as j, l as g, E as Bt, m as F, r as G, L as ht, n as x } from "./Icons-C2lZhD4l.js";
import { o as Ls, I as Ds, p as ks, q as Ms, s as As, u as Is, v as Ns, w as Ts } from "./Icons-C2lZhD4l.js";
import { h as Ft, computed as c, toRefs as xt, useAttrs as Et, useSlots as Rt, ref as $, isRef as at, watch as p, triggerRef as Ot, shallowRef as W, onUnmounted as st, inject as Wt, provide as Pt, watchEffect as jt } from "vue";
class Ht {
  /**
   * Constructor
   * @param callback function for the cache/ функция для кэша
   */
  constructor(t) {
    this.callback = t;
  }
  cache;
  cacheOld;
  comparisons = [];
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  getCache(t) {
    return this.isUpdate(t) && (this.cacheOld = this.cache, this.setCache()), this.cache;
  }
  /**
   * Getting the previous value of the cache.
   *
   * Получение предыдущего значения кэша.
   */
  getCacheOld() {
    return this.cacheOld;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  async getCacheAsync(t) {
    return this.isUpdate(t) && (this.cacheOld = this.cache, await this.setCacheAsync()), this.cache;
  }
  /**
   * Overwrites or adds new values for the cache.
   *
   * Перезаписывает или добавляет новые значения для кэша.
   */
  setCache() {
    this.cache = this.callback();
  }
  /**
   * Overwrites or adds new values for the cache (Async).
   *
   * Перезаписывает или добавляет новые значения для кэша (Async).
   */
  async setCacheAsync() {
    this.cache = await this.callback();
  }
  /**
   * Checking additional data.
   *
   * Проверка дополнительных данных.
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  isUpdate(t) {
    return this.cache === void 0 || this.comparisons.length !== t.length || this.comparisons.findIndex((e, s) => e !== t[s]) >= 0 ? (this.comparisons = [...t], !0) : !1;
  }
}
class Gt {
  cache = {};
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  get(t, e, s) {
    return this.getCacheItem(t, e).getCache(s ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  async getAsync(t, e, s) {
    return await this.getCacheItem(t, e).getCacheAsync(s ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.
   *
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   */
  getCacheItem(t, e) {
    return t in this.cache || (this.cache[t] = new Ht(e)), this.cache[t];
  }
}
const Z = class Z {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  static get(t, e, s) {
    return this.cache.get(t, e, s);
  }
};
k(Z, "cache"), Z.cache = new Gt();
let lt = Z;
function $t(i, t = !1) {
  if (typeof i == "string") {
    const e = i.trim();
    switch (e) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(e))
          try {
            return JSON.parse(e);
          } catch (s) {
            console.error("transformation: JSON error", s);
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(e))
            return parseFloat(e);
          if (/^[0-9]+$/.exec(e))
            return parseInt(e, 10);
          if (t && d() && typeof window?.[e] == "function")
            return window[e];
        }
    }
  }
  return i;
}
const zt = "cookie-block";
class Ut {
  static storage = new Y(zt);
  /**
   * Obtaining status.
   *
   * Получение статуса.
   */
  static get() {
    return this.storage.get() ?? !1;
  }
  /**
   * Changing status.
   *
   * Изменение статуса.
   * @param value value to be changed/ значение, на которое будет изменен
   */
  static set(t) {
    this.storage.set(t);
  }
}
const gt = {};
class Zt {
  constructor(t) {
    if (this.name = t, t in J)
      return J[t];
    this.value = gt?.[t], J[t] = this;
  }
  value;
  options = {};
  /**
   * Get data or update if none.
   *
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data/ значение или функция для изменения данных
   * @param options additional parameters/ дополнительные параметры
   */
  get(t, e) {
    return this.value === void 0 && t && this.set(t, e), this.value;
  }
  /**
   * Updates cookie data.
   *
   * Обновляет данные cookie.
   * @param value value or function to change data/ значение или функция для изменения данных
   * @param options additional parameters/ дополнительные параметры
   */
  set(t, e) {
    this.value = I(t), Object.assign(this.options, e), this.update();
  }
  /**
   * Delete cookie data.
   *
   * Удаление данных из cookie.
   */
  remove() {
    this.set("");
  }
  /**
   * Returns cache time.
   *
   * Возвращает время кэширования.
   */
  getAge() {
    return this.options?.age ?? 10080 * 60;
  }
  /**
   * Update cookie data.
   *
   * Обновление данных cookie.
   */
  update() {
    if (d() && !Ut.get()) {
      const t = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(t)}`,
        `max-age=${t === "" ? "-1" : this.getAge()}`,
        `SameSite=${this.options?.sameSite ?? "strict"}`,
        ...this.options?.arguments ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (d())
    for (const t of document.cookie.split(";")) {
      const [e, s] = t.trim().split("=");
      e && O(s) && (gt[e] = $t(s));
    }
})();
const J = {};
function S(i) {
  if (i instanceof Date)
    return i;
  if (Nt(i))
    return /* @__PURE__ */ new Date();
  if (typeof i == "number")
    return new Date(i);
  let t = i, e = y.getTimezoneFormat();
  i.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (n, a, o) => (t = a, e = o, n));
  const s = (/^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) ?? (/^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) ?? t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${e}`);
}
function it(i, t) {
  return f(i, (e) => e?.[t]);
}
class N {
  /**
   * Returns an instance of the class according to the specified country code.
   *
   * Возвращает экземпляр класса по указанному коду страны.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getInstance(t = y.getLocation()) {
    return new N(t);
  }
  geo;
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = y.getLocation()) {
    this.geo = y.find(t);
    const e = this.getLocation();
    if (e in _)
      return _[e];
    _[e] = this;
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
    let s = { type: "language" }, n;
    e && (typeof e == "string" ? s.type = e : s = {
      ...s,
      ...e
    });
    try {
      d() && (t ? n = new Intl.DisplayNames(this.getLocation(), s).of(t) : s.type === "language" ? n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country)));
    } catch (a) {
      console.error("display: ", a);
    }
    return n ?? t ?? "";
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
    return this.display(y.getByCode(t).language, s);
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
    const a = this.geo?.nameFormat ?? "fl";
    let o;
    switch (a) {
      case "fsl":
        o = `${e}${s ? ` ${s}` : ""} ${t}`;
        break;
      case "lf":
        o = `${t} ${e}`;
        break;
      case "lsf":
        o = `${t}${s ? ` ${s}` : ""} ${e}`;
        break;
      default:
        o = `${e} ${t}`;
        break;
    }
    return n ? o.replace(/ (.)[^ ]+/ig, " $1.") : o;
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
    return this.numberObject(e)?.format?.(b(t)) || t.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    return this.numberObject()?.formatToParts?.(1.2)?.find?.((t) => t.type === "decimal")?.value || ".";
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
    }, a = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...o) => (n.currency = String(o[2]).toUpperCase(), String(o[1])));
    if (s) {
      const o = this.numberObject(n);
      return o ? it(
        o.formatToParts(b(t)).filter((u) => ["literal", "currency"].indexOf(u.type) === -1),
        "value"
      ).join("") : t.toString();
    } else return "currency" in n ? this.number(
      typeof t == "number" ? t : a,
      n
    ) : this.number(
      typeof t == "number" ? t : a,
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
    return this.numberObject({
      style: "currency",
      currencyDisplay: e,
      currency: t
    })?.formatToParts?.(100)?.find?.((s) => s.type === "currency")?.value || t;
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
    }, n = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...a) => (s.unit = String(a[2]).toLowerCase(), String(a[1])));
    return this.number(n, s);
  }
  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(t, e = "byte") {
    const s = b(t);
    if (s > 1024 && nt(e))
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
    return this.percent(b(t) / 100, e);
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
    const a = b(t), o = e.split("|");
    if (o.length > 1)
      try {
        if (d()) {
          const h = new Intl.PluralRules(this.getLocation(), s).select(a);
          let l;
          switch (h) {
            case "zero":
              l = o[o.length - 1];
              break;
            case "one":
              l = o?.[0];
              break;
            case "two":
              l = o?.[1];
              break;
            case "few":
              l = o?.[3] ? o?.[2] : o?.[1];
              break;
            case "many":
              l = o?.[3] || o?.[2] || o?.[1];
              break;
            case "other":
              o.length === 6 ? l = o[o.length - 2] : l = o[o.length - 1];
              break;
          }
          return `${this.number(a, n)} ${l ?? ""}`.trim();
        }
      } catch (u) {
        console.error("plural: ", u);
      }
    return `${this.number(a, n)} ${o?.[0] ?? ""}`.trim();
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
    const a = S(t), o = typeof s == "string", u = this.dateOptions(e, o ? s : "short");
    return n && (u.hour12 = !1), o || Object.assign(u, s), a.toLocaleString(this.getLocation(), u);
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
    const n = S(t), a = s || /* @__PURE__ */ new Date(), o = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let u = "second", h = (n.getTime() - a.getTime()) / 1e3;
    return Math.abs(h) >= 60 && (u = "minute", h /= 60, Math.abs(h) >= 60 && (u = "hour", h /= 60, Math.abs(h) >= 24 && (u = "day", h /= 24, Math.abs(h) >= 30 && (u = "month", h /= 30, Math.abs(h) >= 12 && (u = "year", h /= 12))))), this.relativeByValue(h, u, o);
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
  relativeLimit(t, e, s, n, a, o, u) {
    const h = S(t), l = s || /* @__PURE__ */ new Date(), L = new Date(l), D = new Date(l);
    return L.setDate(l.getDate() - e), D.setDate(l.getDate() + e), h >= L && h <= D ? this.relative(
      h,
      n,
      l
    ) : this.date(
      h,
      o,
      a,
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
    const n = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    try {
      if (d())
        return new Intl.RelativeTimeFormat(this.getLocation(), n).format(Math.round(b(t)), e);
    } catch (a) {
      console.error("relative: ", a);
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
      if (d())
        return Intl.DateTimeFormat(this.getLocation(), { month: e || "long" }).format(S(t));
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
      if (d()) {
        const s = /* @__PURE__ */ new Date(), n = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
        for (let a = 0; a < 12; a++)
          s.setMonth(a), e.push({
            label: n.format(s).replace(/^./, (o) => o.toUpperCase()),
            value: a + 1
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
      if (d())
        return Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }).format(S(t));
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
      if (d()) {
        const s = /* @__PURE__ */ new Date(), n = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), a = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        s.setDate(s.getDate() - a);
        for (let o = 0; o < 7; o++)
          e.push({
            label: n.format(s).replace(/^./, (u) => u.toUpperCase()),
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
    if (d()) {
      const s = new Intl.Collator(this.getLocation());
      return t.sort((n, a) => s.compare(...e(n, a)));
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
      if (d())
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
const _ = {};
class ot {
  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(t, e = "date", s = y.getLocation()) {
    this.type = e, this.code = s, this.date = S(t);
  }
  date;
  hour24 = !1;
  watch;
  /**
   * Returns an object for working with formatting.
   *
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new N(this.code);
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
    }), a = s.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${n}${a}` : `${n}:${a}`;
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
    const e = new ot(this.date, this.type, "en-GB"), s = [];
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
    return this.date = S(t), this.update(), this;
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
    return this.watch?.(
      this.date,
      this.type,
      this.hour24
    ), this;
  }
}
const r = "@flag";
class E {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = y.getLocation()) {
    this.code = t;
  }
  static flags = {
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
  };
  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code/ код страны
   */
  get(t = this.code) {
    const e = y.find(t);
    if (e) {
      const s = this.getCountry(e);
      return {
        language: this.getLanguage(e),
        country: s,
        standard: e.standard,
        icon: E.flags?.[e.country],
        label: s,
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
    return this.get(t)?.icon;
  }
  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes country code/ код страны
   */
  getList(t) {
    return f(this.getCodes(t), (e) => this.get(e));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return f(this.getList(t), (e) => {
      const s = new E(e.standard).get(e.standard);
      return {
        ...e,
        description: s?.country,
        nationalLanguage: s?.language,
        nationalCountry: s?.country
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
    return new N(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.
   *
   * Возвращает список стран для получения данных.
   * @param codes country code/ код страны
   */
  getCodes(t) {
    return t ?? Object.keys(E.flags);
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
}
const A = class A {
  /**
   * Getting an object with information about the phone code and country.
   *
   * Получение объекта с информацией о телефонном коде и стране.
   * @param code country and language code/ код страны и языка
   */
  static get(t) {
    return this.list.find((e) => t === e.value);
  }
  /**
   * Getting information by phone.
   *
   * Получение информации по телефону.
   * @param phone phone number/ номер телефон
   */
  static getByPhone(t) {
    let e = this.map, s, n = "";
    return this.toNumber(t).forEach((a) => {
      n === "" && a in e ? (s = e[a], e = s?.next ?? {}) : n += a;
    }), {
      item: s,
      phone: n
    };
  }
  /**
   * Retrieves complete mask data by country code.
   *
   * Получает полные данные о маске по коду страны.
   * @param code country and language code/ код страны и языка
   */
  static getByCode(t) {
    const e = this.get(t);
    if (e)
      return this.getByPhone(e.phone.toString())?.item;
  }
  /**
   * We get an array from a list of all phone numbers.
   *
   * Получаем массив из списка всех телефонных кодов.
   */
  static getList() {
    return this.list;
  }
  /**
   * We get a map of a tree, sorted by its code.
   *
   * Получаем карту дерева, отсортированную по его коду.
   */
  static getMap() {
    return this.map;
  }
  /**
   * Convert to phone mask.
   *
   * Преобразовать в маску телефона.
   * @param phone phone number/ номер телефон
   * @param masks a mask to transform a phone number/ маска для преобразования номер телефон
   */
  static toMask(t, e) {
    if (O(t) && Array.isArray(e) && e.length > 0) {
      const s = this.removeZero(t), n = s.length;
      for (const a of e)
        if (this.getUnnecessaryLength(a) === n)
          return this.toStandard(s, a);
    }
  }
  /**
   * Deletes the country code from the input number.
   *
   * Удаляет код страны по входному номеру.
   * @param phone phone number/ номер телефон
   */
  static removeZero(t) {
    return t.match(/^0/) ? t.replace(/^0/, "") : t.match(/^89/) ? t.replace(/^8/, "") : t;
  }
  /**
   * Returns the symbol by the internal country code.
   *
   * Возвращает символ по коду внутри страны.
   * @param within internal country code/ код внутри страны
   */
  static getWithinSymbol(t) {
    switch (t) {
      case 4:
      case "4":
        return "$";
      case 8:
      case "8":
        return "~";
    }
    return "=";
  }
  /**
   * Deletes all characters that do not belong to the mask.
   *
   * Удаляет все символы, не относящиеся к маске.
   * @param mask A mask to transform a phone number/ маска для преобразования номер телефон
   */
  static getUnnecessaryLength(t) {
    return t.replace(/[^*]+/ig, "").length;
  }
  /**
   * Creating a list for the map.
   *
   * Формирование списка для карты.
   */
  static makeList() {
    const t = f(y.getList(), (e) => {
      if (e?.phoneMask)
        return {
          phone: e?.phoneCode && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: e?.phoneWithin || 0,
          mask: B(e.phoneMask),
          value: e.country
        };
    });
    this.list = t.sort((e, s) => e.phone - s.phone);
  }
  /**
   * Creating a map for search.
   *
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((t) => {
      t.mask.forEach((e) => {
        let s = this.map, n;
        if (this.toNumber(e).forEach((a) => {
          a in s || (s[a] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), n = s[a], s = n?.next ?? {};
        }), n) {
          n.value === void 0 && (n.info = t, n.value = t.value);
          const a = this.toWithin(e, t.within);
          n.mask.push(a), n.maskFull.push(a.replace(/\d/ig, "*")), n.items.push(t);
        }
      });
    });
  }
  /**
   * The method parses a string argument and returns a floating point number.
   *
   * Метод принимает строку в качестве аргумента и возвращает десятичное число.
   * @param value the value to parse/ текстовая строка
   */
  static toNumber(t) {
    return t.replace(/\D+/ig, "").split("");
  }
  /**
   * Converts the phone to a standard.
   *
   * Преобразовывает телефон в стандарт.
   * @param phone phone number/ номер телефон
   * @param mask a mask to transform a phone number/ маска для преобразования номер телефон
   */
  static toStandard(t, e) {
    let s = 0;
    return e.replace(/\*/ig, () => String(t[s++]));
  }
  /**
   * Replaces the first character with the internal country code
   *
   * Заменяет первый символ на код внутри страны.
   * @param mask a mask to transform a phone number/ маска для преобразования номер телефон
   * @param within internal country code/ код внутри страны
   */
  static toWithin(t, e) {
    return t.replace(/\*/, this.getWithinSymbol(e));
  }
};
k(A, "list", []), k(A, "map", {}), A.makeList(), A.makeMap();
let ft = A, P;
class $e {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(t) {
    return P && P?.[t];
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(t) {
    P === void 0 && (P = { ...t });
  }
}
const M = class M {
  /**
   * Get data from hash.
   *
   * Получение данных из хэша.
   * @param name variable names/ названия переменных
   * @param defaultValue value or function to change data/ значение или функция для изменения данных
   */
  static get(t, e) {
    return !(t in this.hash) && e && this.set(t, e), this.hash[t];
  }
  /**
   * Change data in hash.
   *
   * Изменение данных в хэше.
   * @param name variable names/ названия переменных
   * @param callback value or function to change data/ значение или функция для изменения данных
   */
  static set(t, e) {
    const s = I(e);
    s !== this.hash?.[t] && (this.hash[t] = s, this.update());
  }
  /**
   * Adding an event when data is changed.
   *
   * Добавление события при изменении данных.
   * @param name variable names/ названия переменных
   * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
   */
  static addWatch(t, e) {
    t in this.watch ? this.watch[t]?.push(e) : this.watch[t] = [e];
  }
  /**
   * Update hash variable from URL string.
   *
   * Обновление переменной хэша из строки URL.
   */
  static reload() {
    if (!this.block) {
      const t = this.getLocation();
      this.makeWatch(t), this.hash = t;
    }
  }
  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   */
  static getLocation() {
    const t = {};
    return location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...e) => (t[String(e[1])] = $t(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Tt(this.hash, "=", ";")}`), requestAnimationFrame(() => {
      this.block = !1;
    });
  }
  /**
   * Calling all functions whose data has changed.
   *
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data/ свежий данные
   */
  static makeWatch(t) {
    f(this.watch, (e, s) => {
      this.hash?.[s] !== t?.[s] && e.forEach((n) => n(t[s]));
    });
  }
};
k(M, "hash", {}), k(M, "watch", {}), k(M, "block", !1), d() && (M.reload(), addEventListener("hashchange", () => M.reload()));
let R = M;
function Yt(i, t, e) {
  return K(i)?.[t] ?? e;
}
function Kt(i, t, e) {
  const s = K(i);
  if (s) {
    const n = Yt(s, t);
    if (m(n) && m(e))
      f(e, (a, o) => {
        n[o] = I(a);
      });
    else {
      const a = I(e);
      !(t in s) && typeof a == "string" ? s.setAttribute(t.toString(), a) : s[t] = I(e);
    }
  }
  return s;
}
function dt(i, t = "div", e, s) {
  if (!d())
    return;
  const n = document.createElement(t);
  return typeof e == "function" ? e(n) : C(e) && f(e, (a, o) => {
    Kt(n, o, a);
  }), i?.insertBefore(n, s ?? null), n;
}
class vt {
  static storage = new Y("scrollbar", !0);
  static calculate = !1;
  /**
   * Checks whether to enable scroll hiding.
   *
   * Проверяет, надо ли включить скрытие скролла.
   */
  static async is() {
    const t = await this.get();
    return t !== -1 && t <= 8;
  }
  /**
   * Returns the width of the scroll.
   *
   * Возвращает ширину скролла.
   */
  static async get() {
    const t = this.storage.get() ?? -1;
    if (!this.calculate && t === -1) {
      const e = await this.init();
      return this.storage.set(e), e;
    }
    return t;
  }
  /**
   * Creates elements to check the width of the scroll.
   *
   * Создает элементы для проверки ширины скролла.
   */
  static createElement() {
    return dt(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", dt(t, "div", (e) => {
        e.style.height = "100px";
      });
    });
  }
  /**
   * Initialization of data to check the width of the scroll.
   *
   * Инициализация данных для проверки ширины скролла.
   */
  static init() {
    return new Promise((t) => {
      this.calculate = !0;
      const e = this.createElement();
      e ? requestAnimationFrame(() => {
        t(e.offsetWidth - e.clientWidth), e.remove(), this.calculate = !1;
      }) : t(0);
    });
  }
}
const Vt = [
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
], qt = (i, t = {}) => {
  let e = String(i);
  if (i.match(/%[a-z]/)) {
    let s = 0;
    f(t, (n) => {
      e = e.replace(new RegExp(`%${Vt[s++]}`, "g"), String(n));
    });
  }
  return C(t) && f(t, (s, n) => {
    e = e.replace(
      new RegExp(`\\[${n}\\](.*?)\\[/${n}\\]`, "g"),
      (a, o) => String(s).replace(/\[content]/g, o)
    ).replace(new RegExp(`\\[${n}\\]`, "g"), String(s));
  }), e;
};
class z {
  static url = "/api/translate";
  static propsName = "list";
  static data = {};
  static cache = [];
  static resolveList = [];
  static timeout;
  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(t, e) {
    const s = this.getName(t);
    return s in this.data ? this.replacement(this.data[s], e) : (j.isLocalhost() || await this.add(t), this.replacement(this.data?.[s] ?? t));
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
      for (const a of t) {
        const o = Array.isArray(a) ? a[0] : a, u = Array.isArray(a) ? a.slice(1) : void 0;
        this.get(o, u).then((h) => {
          s[o] = h, ++n >= t.length && e(s);
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
      const a = Array.isArray(n) ? n[0] : n, o = Array.isArray(n) ? n.slice(1) : void 0;
      s[a] = this.getSync(a, e, o);
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
    f(t, (e, s) => {
      nt(e) && O(e) && (this.data[this.getName(s)] = e);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (O(t))
      if (j.isLocalhost())
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
    return this.url = t, z;
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
    return `${y.getLocation()}-${t}`;
  }
  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getNamesNone(t) {
    const e = [];
    return B(t).forEach((s) => {
      s !== "__TRANSLATE_START__" && s !== "__TRANSLATE_END__" && !(this.getName(s) in this.data) && e.push(s);
    }), e;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    return await j.get({
      api: !1,
      path: this.url,
      request: {
        [this.propsName]: this.cache
      },
      toData: !0,
      global: !0
    }) ?? {};
  }
  /**
   * Replaces the text with the specified values.
   *
   * Заменяет текст на указанные значения.
   * @param text text to replace/ текст для замены
   * @param replacement values for replacement/ значения для замены
   */
  static replacement(t, e) {
    return e ? qt(t, e) : t;
  }
  /**
   * Adding translation data from the server.
   *
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const t = await this.getResponse();
    this.cache.forEach((e) => {
      this.data[this.getName(e)] = t?.[e] ?? "";
    }), this.cache = [];
  }
}
function ct(i) {
  return Array.isArray(i);
}
class Jt {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param watch data for tracking/ данные для слежения
   */
  constructor(t, e = Object.keys(t)) {
    this.props = t, this.watch = e;
  }
  cache = {};
  /**
   * Checks if the value has been updated.
   *
   * Проверяет, обновлено ли значение.
   * @param name property name/ название свойства
   */
  is(t) {
    return ct(t) ? !!t.find((e) => this.isDifferent(e)) : this.isDifferent(t);
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
    return this.cache?.[t] !== this.props?.[t];
  }
}
class _t {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param callback callback function when the value changes/
   * функция обратного вызова при изменении значения
   * @param changed base data/ данный для слежения
   */
  constructor(t, e, s) {
    this.props = t, this.callback = e, this.changed = new Jt(t, s);
  }
  event = {};
  changed;
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
class ve extends _t {
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
function Qt(i) {
  return i && "class" in i && typeof i.class == "string" ? i.class : void 0;
}
function Xt(i, t, e) {
  const s = Qt(t);
  return e && s ? `${e}.${s}` : e || s || i;
}
function te(i, t, e, s) {
  const n = Xt(i, t, s);
  return Ft(i, { key: n, ...t }, e);
}
function rt(i, t) {
  const e = i?.class, s = t?.class, n = i?.style, a = t?.style, o = {
    ...i,
    ...t
  };
  return e && s && (o.class = [], e && o.class.push(e), s && o.class.push(s)), n && a && (o.style = [], n && o.style.push(n), a && o.style.push(a)), o;
}
function ee(...i) {
  let t = {};
  return i.forEach((e) => {
    e && (t = rt(t, e));
  }), t;
}
class bt {
  /**
   * Constructor
   * @param components list of connected components/ список подключенных компонентов
   * @param modification data for modification/ данные для модификации
   */
  constructor(t = {}, e) {
    this.components = t, this.modification = e;
  }
  /** Cache for computed properties/ Кэш для вычисляемых свойств */
  caching = {};
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
    return this.components?.[t];
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
      t in this.caching || (this.caching[t] = c(() => this.computeModification(t)));
      const s = this.caching[t];
      if (s)
        return e ? ee(s.value, e) : s.value;
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
    const a = this.renderOne(
      t,
      e,
      s,
      n
    );
    return a ? [a] : [];
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
      const a = n ?? t;
      return te(
        this.get(t),
        this.getModification(a, e),
        s,
        a
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
  renderAdd(t, e, s, n, a) {
    return t.push(...this.render(e, s, n, a)), this;
  }
  /**
   * Calculates modified input data for connected components.
   *
   * Вычисляет модифицированные входные данные для подключенных компонентов.
   * @param index the name of this/ название данного
   */
  computeModification(t) {
    const e = g(this.modification?.[t]);
    if (e && C(e)) {
      const s = {};
      return f(e, (n, a) => {
        s[a] = g(n);
      }), s;
    }
    return {};
  }
}
class be extends bt {
}
function St(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${String(t[1]).toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
class Se {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, e, s) {
    this.props = e, this.options = s, this.name = this.initName(t), this.refs = this.props ? xt(this.props) : {}, this.components = new bt(s?.components, s?.compMod), this.emits = s?.emits, this.classes = c(() => this.updateClasses()), this.styles = c(() => this.updateStyles()), this.attrs = Et(), this.slots = Rt();
  }
  name;
  element = $();
  refs;
  components;
  emits;
  classes;
  classesSub;
  styles;
  stylesSub;
  attrs;
  slots;
  dataExpose;
  init() {
    return this.classesSub = c(() => this.initClasses()), this.stylesSub = c(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
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
    return `${this.getName()}__${B(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${B(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${B(t).join("-")}`;
  }
  /**
   * Getting additional parameters.
   *
   * Получение дополнительных параметров.
   */
  getAttrs() {
    const t = { ...this.attrs ?? {} };
    return "class" in t && delete t.class, "style" in t && delete t.style, t;
  }
  /**
   * List of available external variables.
   *
   * Список доступных переменных извне.
   */
  expose() {
    return this.dataExpose ?? {};
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
    if (this.slots && this.slots?.[t] && typeof this.slots[t] == "function") {
      const n = this.slots[t](s);
      return e && e.push(n), n;
    }
  }
  /**
   * Transformation of the class value into an object.
   *
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation/ список классов для преобразования
   */
  toClass(t) {
    return C(t) ? t : Array.isArray(t) ? { [t.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes/ список классов
   */
  toClassName(t) {
    if (m(t)) {
      const e = {};
      return f(t, (s, n) => {
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
    return f(t.split(".", 2), (e) => St(e));
  }
  /**
   * Updating data about the class.
   *
   * Обновление данных об классе.
   */
  updateClasses() {
    const t = this.classesSub?.value, e = this.options?.classes?.value;
    return t && e ? {
      ...t,
      ...e,
      main: {
        ...this.toClass(t?.main),
        ...this.toClass(e?.main),
        ...this.toClass(this.attrs?.class)
      }
    } : e ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    const t = this.stylesSub?.value, e = this.options?.styles?.value;
    return t && e ? {
      ...t,
      ...e
    } : e ?? {};
  }
}
function w(i) {
  return at(i) ? i : $(i);
}
class we {
  item;
  type;
  code;
  date;
  datetime;
  year = c(() => this.date.value && this.datetime.getYear());
  month = c(() => this.date.value && this.datetime.getMonth());
  day = c(() => this.date.value && this.datetime.getDay());
  hour = c(() => this.date.value && this.datetime.getHour());
  minute = c(() => this.date.value && this.datetime.getMinute());
  second = c(() => this.date.value && this.datetime.getSecond());
  /**
   * Constructor
   * @param date date for processing. дата для обработки
   * @param type type of date format for output. тип формата даты вывода
   * @param code country and language code. код страны и языка
   */
  constructor(t, e = "date", s = y.getLocation()) {
    this.item = w(t), this.type = w(e), this.code = w(s), this.date = $(S(this.item.value)), this.datetime = new ot(
      this.date.value,
      this.type.value,
      this.code.value
    ), p(this.item, (n) => {
      this.date.value = S(n);
    }), p(this.type, (n) => this.datetime.setType(n)), p(this.code, (n) => this.datetime.setCode(n)), p(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => Ot(this.date));
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
    return c(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return c(() => this.date.value && this.datetime.getFirstDayCode());
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
    return c(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output. тип формата даты вывода
   * @param styleOptions the representation of the month. представление месяца
   */
  locale(t = this.type.value, e) {
    return c(() => this.date.value && this.datetime.locale(t, e));
  }
  /**
   * Output of standard data.
   *
   * Вывод стандартных данных.
   * @param timeZone add time zone. добавить временную зону
   */
  standard(t = !0) {
    return c(() => this.date.value && this.datetime.standard(t));
  }
}
class Ce extends Bt {
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
  constructor(t, e, s = ["click"], n, a, o) {
    const u = w(t), h = w(e);
    super(
      u.value,
      s,
      n,
      a,
      o
    ), h.value && this.setElementControl(h.value), p(u, (l) => this.setElement(l)), p(h, (l) => this.setElementControl(l));
  }
}
class Le {
  code;
  flag;
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = y.getLocation()) {
    this.code = w(t), this.flag = new E(this.code.value), p(this.code, (e) => this.flag.setCode(e));
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
    return c(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code/ код страны
   */
  getFlag(t = this.code.value) {
    return c(() => this.flag.get(t)?.icon);
  }
  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes country code/ код страны
   */
  getList(t) {
    return c(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return c(() => this.flag.getNational(t));
  }
}
class wt {
  static item = W(y.get());
  static country = c(() => this.item.value.country);
  static language = c(() => this.item.value.language);
  static standard = c(() => this.item.value.standard);
  static firstDay = c(() => this.item.value.firstDay);
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
    y.set(t, !0), this.item.value = y.getItem();
  }
}
class se {
  location;
  intl;
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    this.location = w(t), this.intl = c(() => new N(this.location.value ?? wt.getLanguage().value));
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
    return c(() => this.intl.value.display(g(t), e));
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(t, e) {
    return c(() => this.intl.value.languageName(g(t), e));
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, e) {
    return c(() => this.intl.value.countryName(g(t), e));
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
    return c(() => this.intl.value.number(g(t), e));
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    return c(() => this.intl.value.decimal());
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
    return c(
      () => this.intl.value.currency(
        g(t),
        g(e),
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
    return c(() => this.intl.value.unit(g(t), e));
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return c(() => this.intl.value.percent(g(t), e));
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
    return c(() => this.intl.value.percentBy100(g(t), e));
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
    return c(() => this.intl.value.date(g(t), e, s, n));
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
    return c(() => this.intl.value.relative(g(t), e, s));
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
  relativeLimit(t, e, s, n, a, o, u) {
    return c(() => this.intl.value.relativeLimit(
      g(t),
      e,
      s,
      n,
      a,
      o,
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
    return c(() => this.intl.value.month(g(t), e));
  }
  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(t) {
    return c(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(t, e) {
    return c(() => this.intl.value.weekday(g(t), e));
  }
  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(t) {
    return c(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(t) {
    return c(() => this.intl.value.time(g(t)));
  }
}
function Ct(i, t = "ig", e = ":value") {
  const s = i.replace(/([[\]\\^$.?*+()/])/g, "\\$1");
  return new RegExp(e.replace(/:value/g, s), t);
}
class Lt {
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
  constructor(t, e, s, n, a, o, u, h, l) {
    this.list = t, this.focus = e, this.highlight = s, this.highlightLengthStart = n, this.selected = a, this.keyValue = o, this.keyLabel = u, this.lite = h, this.parent = l, at(t) && p(t, () => {
      this.subList = {};
    });
  }
  subList = {};
  /**
   * Returns a list for forming a list.
   *
   * Возвращает список для формирования списка.
   */
  data = c(
    () => f(
      g(this.list) || [],
      (t, e) => this.initItem(e, t)
    )
  );
  /**
   * Returns a simplified list for quick loading.
   *
   * Возвращает упрощенный список для быстрой загрузки.
   */
  liteData = c(() => {
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
  });
  /**
   * Returns a list of records with all additional data.
   *
   * Возвращает список записей со всеми дополнительными данными.
   */
  fullData = c(() => {
    const t = this.getFocus(), e = this.getHighlight(), s = this.getSelected();
    return f(
      this.data.value,
      (n) => ({
        ...n,
        focus: t === n.index,
        highlight: e,
        selected: F(n.index, s)
      })
    );
  });
  /**
   * Returns a map of all entries.
   *
   * Возвращает карту всех записей.
   */
  map = c(() => {
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
  });
  /**  Returns a list consisting only of items/ Возвращает список, состоящий только из элементов. */
  mapItems = c(() => this.map.value.filter((t) => t.type === "item"));
  /**
   * Returns a list consisting only of values for selection.
   *
   * Возвращает список, состоящий только из значений для выбора.
   */
  items = c(() => this.map.value.filter(
    (t) => t.type === "item" || t.type === "group" || t.type === "menu"
  ));
  /**
   * Finds the first element that meets the search conditions.
   *
   * Находит первый элемент, соответствующий условиям поиска.
   */
  highlightFirstItem = c(() => {
    const t = this.getHighlight(), e = t && t.length >= this.getHighlightLengthStart() && Ct(t, "i");
    return e ? this.map.value.findIndex(
      (s) => s.label?.toString().match(e) || s.index?.toString().match(e) || s.search?.toString().match(e)
    ) : -1;
  });
  /**
   * Is there a selected item.
   *
   * Есть ли выбранный элемент.
   */
  isSelected = c(() => {
    const t = this.getSelected();
    return !!t && this.mapItems.value.findIndex((e) => F(e.index, t)) !== -1;
  });
  /**
   * Returns a list of selected items on the map.
   *
   * Возвращает список выделенных элементов на карте.
   */
  selectedList = c(() => {
    const t = this.getSelected();
    return t && this.isSelected.value ? this.mapItems.value.filter((e) => F(e.index, t)) : [];
  });
  /**
   * Returns a list of selected items on the map.
   *
   * Возвращает список выделенных элементов на карте.
   */
  selectedNames = c(() => it(this.selectedList.value, "label"));
  /**
   * Returns a list of selected item values on the map.
   *
   * Возвращает список значений выделенных элементов на карте.
   */
  selectedValues = c(() => it(this.selectedList.value, "value"));
  /**
   * Checks whether it is necessary to first display a simplified version.
   *
   * Проверяет, надо ли сначала вывести упрощенную версию.
   */
  isLite() {
    return !!(this.lite?.value && this.data.value.length > this.lite.value);
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
    return this.focus?.value;
  }
  /**
   * Returns the selected value.
   *
   * Возвращает выделенного значение.
   */
  getHighlight() {
    return this.highlight?.value;
  }
  /**
   * Returns the minimum length for highlight to start.
   *
   * Возвращает минимальную длину для начала выделения.
   */
  getHighlightLengthStart() {
    return this.highlightLengthStart?.value ?? 2;
  }
  /**
   * Returns the selected value.
   *
   * Возвращает выбранное значение.
   */
  getSelected() {
    return this.selected?.value;
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
    return this.map.value?.[t];
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
    return t.index in this.subList || (this.subList[t.index] = new Lt(
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
    return t && !m(t) ? t : e && !m(e) ? e : s && n;
  }
  /**
   * Creates an object of the record element.
   *
   * Создает объект элемента записи.
   * @param key the value of the key in the element/ значения ключа у элемента
   * @param item selected element/ выбранный элемент
   */
  initItem(t, e) {
    if (C(e)) {
      const s = e?.[this.keyValue?.value ?? "value"], n = e?.[this.keyLabel?.value ?? "label"] ?? s, a = this.getIndex(
        e?.index,
        s,
        t,
        n
      );
      return {
        ...e,
        parent: this.parent,
        index: a,
        type: e?.type ?? "item",
        label: n,
        value: s
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
class De {
  static router;
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
class ke {
  /**
   * Reactive item.
   *
   * Реактивный элемент.
   */
  item = $();
  /**
   * Constructor
   */
  constructor() {
    vt.is().then((t) => {
      this.item.value = t;
    });
  }
  /**
   * Checks whether the scroll width is defined.
   *
   * Проверяет, определена ли ширина скролла.
   */
  is = c(() => this.item.value !== void 0);
}
const ie = (i) => typeof i == "string" ? { method: i } : i || {};
let U;
function Me(i, t, e = !0, s, n, a) {
  const o = $(), u = w(ie(t)), h = $(!1), l = $(!1);
  let L = !0, D = 0;
  const V = async () => {
    if (L)
      return;
    const v = g(i);
    if ((!s || s.value) && v) {
      h.value = !0, l.value = !0;
      let q = {};
      const ut = await j.request({
        path: v,
        ...u.value
      });
      ut && (q = ut), n ? o.value = n(q) : o.value = q, h.value = !1;
    } else o.value !== void 0 && (o.value = void 0);
  }, Mt = () => {
    const v = [];
    e && v.push(u), at(i) && v.push(i), s && v.push(s), U && v.push(U), v.length > 0 && p(v, async () => {
      h.value || await V();
    });
  };
  return {
    get data() {
      return L && (L = !1, V().then()), Mt(), a && (D++, st(() => {
        D--, D < 1 && (console.warn("useApiRef: unmounted"), o.value = void 0, L = !0, D = 0);
      })), o;
    },
    get isStarting() {
      return c(() => o.value === void 0);
    },
    loading: h,
    get reading() {
      return c(() => l.value);
    },
    reset: V
  };
}
const Ae = (i) => {
  U || (U = i);
};
function Ie(i, t, e) {
  if (i in Q)
    return Q[i];
  const s = new Zt(i), n = $(s.get(t, e));
  return p(n, (a) => {
    s.set(a, e);
  }), Q[i] = n, n;
}
const Q = {};
function Ne() {
  return new se();
}
function Te(i, t) {
  if (i in X)
    return X[i];
  const e = W(R.get(i, t));
  return p(e, (s) => R.set(i, s)), R.addWatch(i, (s) => {
    e.value = s;
  }), X[i] = e, e;
}
const X = {};
let mt = G(1e5, 9e5);
function H(i, t) {
  const e = K(i);
  return e ? (O(e.id) || e.setAttribute("id", `id-${mt++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${mt++}`;
}
const Be = () => {
  const i = {}, t = "IntersectionObserver" in window ? new IntersectionObserver(
    (s) => {
      s.forEach((n) => {
        const a = H(n.target);
        a in i && (i[a].status.value = n.isIntersecting);
      });
    },
    {
      rootMargin: "128px 0px"
    }
  ) : void 0, e = (s) => {
    if (s) {
      const n = H(s);
      n in i && (t?.unobserve(s), i[n]?.stopWatch(), delete i[n]);
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
      const n = W(!t);
      if (t) {
        const a = p(s, (o, u) => {
          if (u && t.unobserve(u), s.value) {
            const h = H(s.value);
            i[h] = {
              status: n,
              stopWatch: a
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
    disconnectLazy: () => t?.disconnect()
  };
};
function Fe() {
  const i = W(ht.is());
  return ht.registrationEvent(({ detail: t }) => {
    i.value = t.loading;
  }), i;
}
function xe(i, t) {
  if (i in tt)
    return tt[i];
  const e = new Y(i, !0), s = $(e.get(t));
  return p(s, (n) => e.set(n)), tt[i] = s, s;
}
const tt = {};
function Ee(i, t, e) {
  if (i in et)
    return et[i];
  const s = new Y(i), n = $(s.get(t, e));
  return p(n, (a) => s.set(a)), et[i] = n, n;
}
const et = {};
function re(i) {
  const t = W(z.getListSync(i, !0)), e = async () => {
    t.value = { ...await z.getList(i) };
  };
  p(wt.getLanguage(), e);
  for (const s in t.value)
    if (t.value[s] === s || t.value[s] === " ") {
      e().then();
      break;
    }
  return t;
}
const Re = (i) => re(i);
function Oe(i) {
  return nt(i) ? i.trim() : ct(i) && i.findIndex((t) => m(t)) === -1 ? i.join(",") : m(i) ? JSON.stringify(i) : i === !0 ? "1" : i === !1 ? "0" : i?.toString() ?? "";
}
function ne(i, t) {
  return Array(t).fill(i);
}
function We(i) {
  if (d())
    return document.querySelector(i) ?? void 0;
}
function Pe(i) {
  if (d())
    return document.querySelectorAll(i);
}
function je(i) {
  i.preventDefault(), i.stopPropagation();
}
const Dt = [], ae = G(1e5, 999999);
function He(i, t = !0, e = !1, s = !0) {
  let n;
  const a = `__execute_use${ae}::${H()}`, o = (...u) => {
    if (!e && s) {
      const h = Wt(a, void 0);
      if (h)
        return h;
      {
        let l = Object.freeze(i(...u));
        return Pt(a, l), t && st(() => {
          l = void 0;
        }), l;
      }
    } else n || (n = Object.freeze(i(...u)), t && st(() => {
      n = void 0;
    }));
    return n;
  };
  return e && Dt.push(o), o;
}
function Ge() {
  Dt.forEach((i) => i());
}
function oe(i, t, e) {
  const s = () => {
    i(), t?.() ? oe(i, t, e) : e?.();
  };
  d() ? requestAnimationFrame(s) : s();
}
function ze(i) {
  const t = {}, e = K(i);
  if (e)
    for (const s of e.attributes)
      t[s.name] = (s?.value || s?.textContent) ?? void 0;
  return t;
}
async function Ue(i) {
  return i?.clipboardData?.getData("text") ?? (await navigator.clipboard.readText() || "");
}
function ce(i, t) {
  const e = t.split(".", 2), s = e[0];
  return s && i?.[s] && C(i[s]) && e?.[1] ? ce(i[s], e[1]) : (s && i?.[s]) ?? "";
}
function Ze(i) {
  return i?.key ?? i?.code ?? i?.keyCode?.toString();
}
function kt(i) {
  return f(i, (t) => t.length);
}
function Ye(i) {
  return Math.max(...kt(i));
}
function Ke(i) {
  return Math.min(...kt(i));
}
function ue(i) {
  return i?.clientX || i?.targetTouches?.[0]?.clientX || i?.touches?.[0]?.clientX || 0;
}
function he(i) {
  return i?.clientY || i?.targetTouches?.[0]?.clientY || i?.touches?.[0]?.clientY || 0;
}
function Ve(i) {
  return {
    x: ue(i),
    y: he(i)
  };
}
function qe(i, t) {
  const e = {};
  return t.forEach((s) => {
    s in i && i[s] !== void 0 && (e[s] = i[s]);
  }), e;
}
function Je(i, t = void 0) {
  const e = {};
  return f(i, (s, n) => {
    s !== t && (e[n] = s);
  }), e;
}
function _e(i) {
  return C(i) ? i : {};
}
function le(i, t) {
  return ne(i, t).join("");
}
function Qe(i, t, e = "#", s = 2, n = 12) {
  const a = G(i, t), o = [];
  for (let u = 0; u < a; u++)
    o.push(le(e, G(s, n)));
  return o.join(" ");
}
function Xe(i, t) {
  const e = i ?? 0;
  return t > e ? 100 / (t - e) : 0;
}
function ts(i, t) {
  const e = i ?? 0;
  return t > e ? (t - e) / 100 : 0;
}
const yt = 0;
function es(i, t, e) {
  const s = t?.closest(i);
  if (t && s && s.scrollHeight !== s.offsetHeight)
    if (e) {
      const n = e.getBoundingClientRect(), a = s.getBoundingClientRect(), o = t.getBoundingClientRect();
      s.scrollTop = t.offsetTop - (n.top - a.top) - (n.height / 2 - o.height / 2), s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight);
    } else s.scrollTop > t.offsetTop ? s.scrollTop = t.offsetTop - yt : s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight + yt);
}
function ss(i, t) {
  return i.indexOf(t) !== -1;
}
async function is() {
  if (d()) {
    const i = await vt.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${i}px`);
  }
}
function rs(i, t) {
  const e = {};
  return m(i) && m(t) && f(i, (s, n) => {
    n in t && (e[n] = s);
  }), e;
}
function ns(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || f(i, (s, n) => {
    s !== t?.[n] && (e = !0);
  }), e;
}
function as(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function os(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function cs(i, t) {
  return Array.isArray(i) ? i.every((e) => F(e, t)) : F(i, t);
}
function ge(i, t = {}, e = "value", s = !1) {
  const n = typeof t == "string", a = n ? t : e, o = n ? {} : t;
  return i ? i && C(i) && (a in i || s) ? rt(o, i) : rt(o, { [a]: i }) : n ? {} : { ...o };
}
function us(i, t = {}, e = "value") {
  return c(() => ge(g(i), g(t), e));
}
const hs = (i, t) => {
  const e = $();
  let s = !0;
  const n = () => {
    s && (jt(async () => {
      const a = g(await i());
      a !== t && (e.value = a);
    }), s = !1);
  };
  return c(() => (n(), e.value));
};
function ls(i, t) {
  i.value !== t && (i.value = t);
}
function gs(i) {
  let t;
  return c(() => (t || (t = i()), t.value));
}
function fe(i) {
  return [...new Set(i)];
}
function T(i, t, e = !0) {
  const s = x(i);
  return m(i) && m(t) && f(
    t,
    (n, a) => {
      const o = i?.[a];
      m(o) && m(n) ? e && Array.isArray(o) && Array.isArray(n) ? s[a] = x(fe([...o, ...n])) : s[a] = T(
        Array.isArray(o) ? { ...o } : o,
        n,
        e
      ) : s[a] = m(n) ? x(n) : n;
    }
  ), s;
}
function fs(i, t) {
  let e = i;
  return f(t, (s, n) => {
    e = e.replace(Ct(`[${n}]`), I(s));
  }), e;
}
function ds(i) {
  const t = b(i);
  if (t > 0) {
    const e = String(Math.floor(t / 60)).padStart(2, "0"), s = String(t % 60).padStart(2, "0");
    return `${e}:${s}`;
  }
  return "00:00";
}
function ms(i, t, {
  multiple: e = !1,
  maxlength: s = 0,
  alwaysChange: n = !0,
  notEmpty: a = !1
}) {
  if (e) {
    if (ct(i)) {
      const o = i.indexOf(t), u = [...i];
      return o !== -1 ? (!a || u.length > 1) && u.splice(o, 1) : (!s || i.length < s) && u.push(t), u;
    }
    return i === t ? [] : i ? [i, t] : [t];
  }
  return n || i !== t ? t : i;
}
function ys(i, t, e) {
  if (m(i) && m(t)) {
    if (e) {
      let s = {}, n = !1;
      return f(i, (a, o) => {
        !n && (e === o || e === a) ? (n = !0, s = T(s, t)) : n ? s = T(s, { [o]: a }) : s[o] = m(a) ? x(a) : a;
      }), n ? s : T(i, t);
    }
    if (m(t))
      return T(i, t);
  }
  return x(i);
}
function ps(i) {
  return St(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function $s(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function vs(i, t, e, s) {
  const n = b(i), a = b(t);
  return t && a < n ? `${pt(a, e, s)}+` : pt(n, e, s);
}
const pt = (i, t, e) => t ? new N(e).number(i) : i;
function de(i, t) {
  return 1 / i * t;
}
function bs(i, t) {
  return de(i, t) * 100;
}
async function Ss(i) {
  if (d())
    try {
      await navigator.clipboard.writeText(i);
    } catch {
      document?.execCommand(i);
    }
}
export {
  j as Api,
  Ls as ApiMethodItem,
  Gt as Cache,
  Ht as CacheItem,
  lt as CacheStatic,
  Zt as Cookie,
  Ut as CookieBlock,
  Y as DataStorage,
  ot as Datetime,
  we as DatetimeRef,
  _t as DesignAbstract,
  ve as DesignAsyncAbstract,
  Jt as DesignChanged,
  be as DesignComp,
  bt as DesignComponents,
  Se as DesignConstructorAbstract,
  Bt as EventItem,
  Ce as EventRef,
  r as GEO_FLAG_ICON_NAME,
  y as Geo,
  E as GeoFlag,
  Le as GeoFlagRef,
  N as GeoIntl,
  se as GeoIntlRef,
  ft as GeoPhone,
  wt as GeoRef,
  $e as Global,
  R as Hash,
  Ds as Icons,
  Lt as ListDataRef,
  ht as Loading,
  De as RouterItemRef,
  vt as ScrollbarWidth,
  ke as ScrollbarWidthRef,
  z as Translate,
  Oe as anyToString,
  qt as applyTemplate,
  ne as arrFill,
  x as copyObject,
  dt as createElement,
  We as domQuerySelector,
  Pe as domQuerySelectorAll,
  je as eventStopPropagation,
  I as executeFunction,
  ks as executePromise,
  He as executeUse,
  Ge as executeUseGlobalInit,
  f as forEach,
  oe as frame,
  ze as getAttributes,
  ge as getBind,
  us as getBindRef,
  Qt as getClassName,
  Ue as getClipboardData,
  it as getColumn,
  hs as getComputedAsync,
  K as getElement,
  H as getElementId,
  Yt as getElementItem,
  Ms as getElementOrWindow,
  Ct as getExp,
  Xt as getIndexForRender,
  ce as getItemByPath,
  Ze as getKey,
  kt as getLengthOfAllArray,
  Ye as getMaxLengthAllArray,
  Ke as getMinLengthAllArray,
  Ve as getMouseClient,
  ue as getMouseClientX,
  he as getMouseClientY,
  qe as getObjectByKeys,
  Je as getObjectNoUndefined,
  _e as getObjectOrNone,
  Qe as getRandomText,
  g as getRef,
  Tt as getRequestString,
  Xe as getStepPercent,
  ts as getStepValue,
  es as goScroll,
  ss as inArray,
  is as initScrollbarOffset,
  rs as intersectKey,
  ct as isArray,
  ns as isDifferent,
  d as isDomRuntime,
  O as isFilled,
  as as isFloat,
  As as isFunction,
  Is as isInDom,
  os as isIntegerBetween,
  Nt as isNull,
  Ns as isNumber,
  m as isObject,
  C as isObjectNotArray,
  F as isSelected,
  cs as isSelectedByList,
  nt as isString,
  Ts as isWindow,
  G as random,
  te as render,
  T as replaceRecursive,
  fs as replaceTemplate,
  ds as secondToTime,
  Ae as setApiRefGlobalConditions,
  Kt as setElementItem,
  ls as setRef,
  ms as setValues,
  ys as splice,
  le as strFill,
  Re as t,
  B as toArray,
  rt as toBind,
  ee as toBinds,
  St as toCamelCase,
  ps as toCamelCaseFirst,
  gs as toComputed,
  S as toDate,
  $s as toKebabCase,
  b as toNumber,
  vs as toNumberByMax,
  de as toPercent,
  bs as toPercentBy100,
  w as toRefItem,
  $t as transformation,
  fe as uniqueArray,
  Me as useApiRef,
  Ie as useCookieRef,
  Ne as useGeoIntlRef,
  Te as useHashRef,
  Be as useLazyRef,
  Fe as useLoadingRef,
  xe as useSessionRef,
  Ee as useStorageRef,
  re as useTranslateRef,
  Ss as writeClipboardData
};
