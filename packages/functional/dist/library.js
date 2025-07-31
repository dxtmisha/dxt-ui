var Tt = Object.defineProperty;
var Et = (i, t, e) => t in i ? Tt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => Et(i, typeof t != "symbol" ? t + "" : t, e);
import { i as m, D as J, e as T, a as H, b as Ot, G as p, f, t as L, c as ht, d as O, g as Rt, h as u, j as R, k as y, l as N, m as X, r as b, A as U, n as Wt, o as d, p as xt, u as jt, q as Ht, s as Ct, w as $, v as Pt, E as zt, x as P, y as ot, z as Y, L as dt, B as Ut, C as Zt, F as Yt, H as W } from "./Icons-j54ibm4Y.js";
import { I as Ds, J as Ls, K as Ss, M as ks, N as Ms, O as As, P as Ns, Q as Is } from "./Icons-j54ibm4Y.js";
class Kt {
  /**
   * Constructor
   * @param callback function for the cache/ функция для кэша
   */
  constructor(t) {
    c(this, "cache");
    c(this, "cacheOld");
    c(this, "comparisons", []);
    this.callback = t;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  getCache(t) {
    return this.isUpdate(t) && (this.cacheOld = this.cache, this.setCache()), this.cache;
  }
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
  constructor() {
    c(this, "cache", {});
  }
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
    return t in this.cache || (this.cache[t] = new Kt(e)), this.cache[t];
  }
}
const q = class q {
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
c(q, "cache"), q.cache = new Gt();
let yt = q;
function Dt(i, t = !1) {
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
          if (t && m() && typeof (window == null ? void 0 : window[e]) == "function")
            return window[e];
        }
    }
  }
  return i;
}
const Vt = "cookie-block";
class Lt {
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
c(Lt, "storage", new J(Vt));
const z = {};
class qt {
  constructor(t) {
    c(this, "value");
    c(this, "options", {});
    if (this.name = t, t in et)
      return et[t];
    this.value = z == null ? void 0 : z[t], et[t] = this;
  }
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
    this.value = T(t), Object.assign(this.options, e), this.update();
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
    var t;
    return ((t = this.options) == null ? void 0 : t.age) ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.
   *
   * Обновление данных cookie.
   */
  update() {
    var t, e;
    if (m() && !Lt.get()) {
      const s = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(s)}`,
        `max-age=${s === "" ? "-1" : this.getAge()}`,
        `SameSite=${((t = this.options) == null ? void 0 : t.sameSite) ?? "strict"}`,
        ...((e = this.options) == null ? void 0 : e.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (m())
    for (const t of document.cookie.split(";")) {
      const [e, s] = t.trim().split("=");
      e && H(s) && (z[e] = Dt(s));
    }
})();
const et = {};
function D(i) {
  if (i instanceof Date)
    return i;
  if (Ot(i))
    return /* @__PURE__ */ new Date();
  if (typeof i == "number")
    return new Date(i);
  let t = i, e = p.getTimezoneFormat();
  i.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (n, a, o) => (t = a, e = o, n));
  const s = (/^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) ?? (/^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) ?? t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${e}`);
}
function St(i, t) {
  return f(i, (e) => e == null ? void 0 : e[t]);
}
class Q {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = p.getLocation()) {
    c(this, "geo");
    this.geo = p.find(t);
    const e = this.getLocation();
    if (e in st)
      return st[e];
    st[e] = this;
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
      m() && (t ? n = new Intl.DisplayNames(this.getLocation(), s).of(t) : s.type === "language" ? n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country)));
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
    return this.display(p.getByCode(t).language, s);
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
    var h;
    const a = ((h = this.geo) == null ? void 0 : h.nameFormat) ?? "fl";
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
    var s, n;
    return ((n = (s = this.numberObject(e)) == null ? void 0 : s.format) == null ? void 0 : n.call(s, L(t))) || t.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    var t, e, s, n, a;
    return ((a = (n = (s = (e = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : e.call(t, 1.2)) == null ? void 0 : s.find) == null ? void 0 : n.call(s, (o) => o.type === "decimal")) == null ? void 0 : a.value) || ".";
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
    }, a = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...o) => (n.currency = o[2].toUpperCase(), o[1]));
    if (s) {
      const o = this.numberObject(n);
      return o ? St(
        o.formatToParts(L(t)).filter((h) => ["literal", "currency"].indexOf(h.type) === -1),
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
    var s, n, a, o, h;
    return ((h = (o = (a = (n = (s = this.numberObject({
      style: "currency",
      currencyDisplay: e,
      currency: t
    })) == null ? void 0 : s.formatToParts) == null ? void 0 : n.call(s, 100)) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (l) => l.type === "currency")) == null ? void 0 : h.value) || t;
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
    }, n = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...a) => (s.unit = a[2].toLowerCase(), a[1]));
    return this.number(n, s);
  }
  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(t, e = "byte") {
    const s = L(t);
    if (s > 1024 && ht(e))
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
    return this.percent(L(t) / 100, e);
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
    const a = L(t), o = e.split("|");
    if (o.length > 1)
      try {
        if (m()) {
          const l = new Intl.PluralRules(this.getLocation(), s).select(a);
          let g;
          switch (l) {
            case "zero":
              g = o[o.length - 1];
              break;
            case "one":
              g = o == null ? void 0 : o[0];
              break;
            case "two":
              g = o == null ? void 0 : o[1];
              break;
            case "few":
              g = o != null && o[3] ? o == null ? void 0 : o[2] : o == null ? void 0 : o[1];
              break;
            case "many":
              g = (o == null ? void 0 : o[3]) || (o == null ? void 0 : o[2]) || (o == null ? void 0 : o[1]);
              break;
            case "other":
              o.length === 6 ? g = o[o.length - 2] : g = o[o.length - 1];
              break;
          }
          return `${this.number(a, n)} ${g ?? ""}`.trim();
        }
      } catch (h) {
        console.error("plural: ", h);
      }
    return `${this.number(a, n)} ${(o == null ? void 0 : o[0]) ?? ""}`.trim();
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
    const a = D(t), o = typeof s == "string", h = this.dateOptions(e, o ? s : "short");
    return n && (h.hour12 = !1), o || Object.assign(h, s), a.toLocaleString(this.getLocation(), h);
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
    const n = D(t), a = s || /* @__PURE__ */ new Date(), o = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let h = "second", l = (n.getTime() - a.getTime()) / 1e3;
    return Math.abs(l) >= 60 && (h = "minute", l /= 60, Math.abs(l) >= 60 && (h = "hour", l /= 60, Math.abs(l) >= 24 && (h = "day", l /= 24, Math.abs(l) >= 30 && (h = "month", l /= 30, Math.abs(l) >= 12 && (h = "year", l /= 12))))), this.relativeByValue(l, h, o);
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
  relativeLimit(t, e, s, n, a, o, h) {
    const l = D(t), g = s || /* @__PURE__ */ new Date(), k = new Date(g), M = new Date(g);
    return k.setDate(g.getDate() - e), M.setDate(g.getDate() + e), l >= k && l <= M ? this.relative(
      l,
      n,
      g
    ) : this.date(
      l,
      o,
      a,
      h
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
      if (m())
        return new Intl.RelativeTimeFormat(this.getLocation(), n).format(Math.round(L(t)), e);
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
      if (m())
        return Intl.DateTimeFormat(this.getLocation(), { month: e || "long" }).format(D(t));
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
      if (m()) {
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
      if (m())
        return Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }).format(D(t));
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
      if (m()) {
        const s = /* @__PURE__ */ new Date(), n = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), a = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        s.setDate(s.getDate() - a);
        for (let o = 0; o < 7; o++)
          e.push({
            label: n.format(s).replace(/^./, (h) => h.toUpperCase()),
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
    if (m()) {
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
      if (m())
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
const st = {};
class lt {
  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(t, e = "date", s = p.getLocation()) {
    c(this, "date");
    c(this, "hour24", !1);
    c(this, "watch");
    this.type = e, this.code = s, this.date = D(t);
  }
  /**
   * Returns an object for working with formatting.
   *
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new Q(this.code);
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
    const e = new lt(this.date, this.type, "en-GB"), s = [];
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
    return this.date = D(t), this.update(), this;
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
const r = "@flag", F = class F {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = p.getLocation()) {
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
    const e = p.find(t);
    if (e) {
      const n = this.getCountry(e);
      return {
        language: this.getLanguage(e),
        country: n,
        standard: e.standard,
        icon: (s = F.flags) == null ? void 0 : s[e.country],
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
      const s = new F(e.standard).get(e.standard);
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
    return new Q(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.
   *
   * Возвращает список стран для получения данных.
   * @param codes country code/ код страны
   */
  getCodes(t) {
    return t ?? Object.keys(F.flags);
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
c(F, "flags", {
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
let ct = F;
const B = class B {
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
      n === "" && a in e ? (s = e[a], e = e[a].next) : n += a;
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
    var s;
    const e = this.get(t);
    if (e)
      return (s = this.getByPhone(e.phone.toString())) == null ? void 0 : s.item;
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
    if (H(t) && Array.isArray(e) && e.length > 0) {
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
    const t = f(p.getList(), (e) => {
      if (e != null && e.phoneMask)
        return {
          phone: (e == null ? void 0 : e.phoneCode) && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (e == null ? void 0 : e.phoneWithin) || 0,
          mask: O(e.phoneMask),
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
          }), n = s[a], s = s[a].next;
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
    return e.replace(/\*/ig, () => t[s++]);
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
c(B, "list", []), c(B, "map", {}), B.makeList(), B.makeMap();
let mt = B, I;
class we {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(t) {
    return I && (I == null ? void 0 : I[t]);
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(t) {
    I === void 0 && (I = { ...t });
  }
}
const A = class A {
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
    var n;
    const s = T(e);
    s !== ((n = this.hash) == null ? void 0 : n[t]) && (this.hash[t] = s, this.update());
  }
  /**
   * Adding an event when data is changed.
   *
   * Добавление события при изменении данных.
   * @param name variable names/ названия переменных
   * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
   */
  static addWatch(t, e) {
    t in this.watch ? this.watch[t].push(e) : this.watch = { [t]: [e] };
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
      (...e) => (t[e[1]] = Dt(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Rt(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
      var n;
      ((n = this.hash) == null ? void 0 : n[s]) !== (t == null ? void 0 : t[s]) && e.forEach((a) => a(t[s]));
    });
  }
};
c(A, "hash", {}), c(A, "watch", {}), c(A, "block", !1), m() && (A.reload(), addEventListener("hashchange", () => A.reload()));
let x = A;
function kt(i, t = "ig", e = ":value") {
  const s = i.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(e.replace(/:value/g, s), t);
}
class Mt {
  constructor(t, e, s, n, a, o, h, l) {
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     */
    c(this, "data", u(
      () => f(
        this.list.value || [],
        (t, e) => this.initItem(e, t)
      )
    ));
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     */
    c(this, "liteData", u(() => {
      if (this.isLite()) {
        const t = [];
        for (const e of this.data.value)
          t.push({
            index: e.index,
            type: e.type,
            label: e.label,
            value: e.value
          });
        return t;
      }
      return this.data.value;
    }));
    /**
     * Returns a list of records with all additional data.
     *
     * Возвращает список записей со всеми дополнительными данными.
     */
    c(this, "fullData", u(() => {
      const t = this.getFocus(), e = this.getHighlight(), s = this.getSelected();
      return f(
        this.data.value,
        (n) => ({
          ...n,
          focus: t === n.value,
          highlight: e,
          selected: R(n.value, s)
        })
      );
    }));
    /**
     * Returns a map of all entries.
     *
     * Возвращает карту всех записей.
     */
    c(this, "map", u(() => {
      const t = [];
      return this.data.value.forEach((e) => {
        switch (e.type) {
          case "item":
            t.push(e);
            break;
          case "group":
          case "menu":
          case "menu-group":
            t.push(
              e,
              ...new Mt(
                e.value,
                this.focus,
                this.highlight,
                this.highlightLengthStart,
                this.selected,
                this.keyValue,
                this.keyLabel,
                this.lite
              ).map.value
            );
            break;
        }
      }), t;
    }));
    /**
     * Returns a list consisting only of values for selection.
     *
     * Возвращает список, состоящий только из значений для выбора.
     */
    c(this, "items", u(() => this.map.value.filter(
      (t) => t.type === "item" || t.type === "group" || t.type === "menu" || t.type === "menu-group"
    )));
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     */
    c(this, "highlightFirstItem", u(() => {
      const t = this.getHighlight(), e = t && t.length >= this.getHighlightLengthStart() && kt(t, "i");
      return e ? this.map.value.findIndex(
        (s) => {
          var n, a, o;
          return ((n = s.label) == null ? void 0 : n.toString().match(e)) || ((a = s.value) == null ? void 0 : a.toString().match(e)) || ((o = s.search) == null ? void 0 : o.toString().match(e));
        }
      ) : -1;
    }));
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     */
    c(this, "isSelected", u(() => {
      const t = this.getSelected();
      return !!t && this.map.value.findIndex((e) => R(e.value, t)) !== -1;
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    c(this, "selectedList", u(() => {
      const t = this.getSelected();
      return t && this.isSelected.value ? this.map.value.filter((e) => R(e.value, t)) : [];
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    c(this, "selectedNames", u(() => St(this.selectedList.value, "label")));
    this.list = t, this.focus = e, this.highlight = s, this.highlightLengthStart = n, this.selected = a, this.keyValue = o, this.keyLabel = h, this.lite = l;
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
    return !!(t && this.map.value.findIndex((e) => e.value === t) !== -1);
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
    var t;
    return ((t = this.highlightLengthStart) == null ? void 0 : t.value) ?? 2;
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
   * Returns the index for the list item.
   *
   * Возвращает индекс для элемента списка.
   * @param index current index / текущий индекс
   * @param value item value / значение элемента
   * @param key item key / ключ элемента
   * @param label item label / метка элемента
   */
  getIndex(t, e, s, n) {
    return t && !y(t) ? t : e && !y(e) ? e : s && n;
  }
  /**
   * Creates an object of the record element.
   *
   * Создает объект элемента записи.
   * @param key the value of the key in the element/ значения ключа у элемента
   * @param item selected element/ выбранный элемент
   */
  initItem(t, e) {
    var s, n;
    if (N(e)) {
      const a = e == null ? void 0 : e[((s = this.keyValue) == null ? void 0 : s.value) ?? "value"], o = (e == null ? void 0 : e[((n = this.keyLabel) == null ? void 0 : n.value) ?? "label"]) ?? a, h = this.getIndex(
        e == null ? void 0 : e.index,
        a,
        t,
        o
      );
      return {
        ...e,
        index: h,
        type: (e == null ? void 0 : e.type) ?? "item",
        label: o,
        value: a
      };
    }
    return {
      index: t.toString(),
      type: "item",
      label: e,
      value: t
    };
  }
}
class Jt {
  static get() {
    return this.router;
  }
  /**
   * Site path change.<br>
   * Изменение пути сайта.
   * @param to new path/ новый путь
   */
  static push(t) {
    this.router && this.router.push(t).then();
  }
  static set(t) {
    this.router = t;
  }
  static setOneTime(t) {
    this.router || this.set(t);
  }
}
c(Jt, "router");
function Xt(i, t, e) {
  var s;
  return ((s = X(i)) == null ? void 0 : s[t]) ?? e;
}
function Qt(i, t, e) {
  const s = X(i);
  if (s) {
    const n = Xt(s, t);
    if (y(n) && y(e))
      f(e, (a, o) => {
        n[o] = T(a);
      });
    else {
      const a = T(e);
      !(t in s) && typeof a == "string" ? s.setAttribute(t.toString(), a) : s[t] = T(e);
    }
  }
  return s;
}
function $t(i, t = "div", e, s) {
  if (!m())
    return;
  const n = document.createElement(t);
  return typeof e == "function" ? e(n) : N(e) && f(e, (a, o) => {
    Qt(n, o, a);
  }), i == null || i.insertBefore(n, s ?? null), n;
}
const j = class j {
  /**
   * Constructor
   */
  constructor() {
    c(this, "item", b());
    c(this, "is", u(() => this.item.value !== void 0));
    j.is().then((t) => {
      this.item.value = t;
    });
  }
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
    return $t(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", $t(t, "div", (e) => {
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
};
c(j, "storage", new J("scrollbar", !0)), c(j, "calculate", !1);
let ut = j;
const _t = [
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
], te = (i, t = {}) => {
  let e = String(i);
  if (i.match(/%[a-z]/)) {
    let s = 0;
    f(t, (n) => {
      e = e.replace(new RegExp(`%${_t[s++]}`, "g"), String(n));
    });
  } else
    f(t, (s, n) => {
      e = e.replace(new RegExp(`\\[${n}\\]`, "g"), String(s));
    });
  return e;
}, C = class C {
  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(t, e) {
    var n;
    const s = this.getName(t);
    return s in this.data ? this.replacement(this.data[s], e) : (U.isLocalhost() || await this.add(t), this.replacement(((n = this.data) == null ? void 0 : n[s]) ?? t));
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
    return n in this.data ? this.replacement(this.data[n], s) : e ? " " : t;
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
        const o = Array.isArray(a) ? a[0] : a, h = Array.isArray(a) ? a.slice(1) : void 0;
        this.get(o, h).then((l) => {
          s[o] = l, ++n >= t.length && e(s);
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
      ht(e) && H(e) && (this.data[this.getName(s)] = e);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (H(t))
      if (U.isLocalhost())
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
    return `${p.getLocation()}-${t}`;
  }
  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getNamesNone(t) {
    const e = [];
    return O(t).forEach((s) => {
      s !== "__TRANSLATE_START__" && s !== "__TRANSLATE_END__" && !(this.getName(s) in this.data) && e.push(s);
    }), e;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    return await U.get({
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
    return e ? te(t, e) : t;
  }
  /**
   * Adding translation data from the server.
   *
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const t = await this.getResponse();
    this.cache.forEach((e) => {
      this.data[this.getName(e)] = (t == null ? void 0 : t[e]) ?? "";
    }), this.cache = [];
  }
};
c(C, "url", "/api/translate"), c(C, "propsName", "list"), c(C, "data", {}), c(C, "cache", []), c(C, "resolveList", []), c(C, "timeout");
let K = C;
function gt(i) {
  return Array.isArray(i);
}
class ee {
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
class se {
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
    this.props = t, this.callback = e, this.changed = new ee(t, s);
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
class Ce extends se {
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
function ie(i) {
  return i && "class" in i && typeof i.class == "string" ? i.class : void 0;
}
function re(i, t, e) {
  const s = ie(t);
  return e && s ? `${e}.${s}` : e || s || i;
}
function ne(i, t, e, s) {
  const n = re(i, t, s);
  return Wt(i, { key: n, ...t }, e);
}
class At {
  /**
   * Constructor
   * @param components list of connected components/ список подключенных компонентов
   * @param modification data for modification/ данные для модификации
   */
  constructor(t = {}, e) {
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
    var s;
    if (t) {
      const n = d((s = this.modification) == null ? void 0 : s[t]);
      if (n && N(n)) {
        const a = {};
        return f(n, (o, h) => {
          a[h] = d(o);
        }), e && Object.assign(a, e), a;
      }
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
      return ne(
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
}
class De extends At {
}
function Nt(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${t[1].toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
class Le {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, e, s) {
    c(this, "name");
    c(this, "element", b());
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
    this.props = e, this.options = s, this.name = this.initName(t), this.refs = this.props ? xt(this.props) : {}, this.components = new At(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = u(() => this.updateClasses()), this.styles = u(() => this.updateStyles()), this.attrs = jt(), this.slots = Ht();
  }
  init() {
    return this.classesSub = u(() => this.initClasses()), this.stylesSub = u(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
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
    return this.name[0];
  }
  /**
   * Getting the class name.
   *
   * Получение названия класса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getSubClass(t) {
    return `${this.getName()}__${O(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${O(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${O(t).join("-")}`;
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
    var n;
    if (this.slots && ((n = this.slots) != null && n[t]) && typeof this.slots[t] == "function") {
      const a = this.slots[t](s);
      return e && e.push(a), a;
    }
  }
  /**
   * Transformation of the class value into an object.
   *
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation/ список классов для преобразования
   */
  toClass(t) {
    return N(t) ? t : Array.isArray(t) ? { [t.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes/ список классов
   */
  toClassName(t) {
    if (y(t)) {
      const e = {};
      return f(t, (s, n) => {
        n.match(/\?\?/) ? e[n.replace(/\?\?/, this.getName())] = s : n.match(/\?/) ? e[n.replace(/\?/, this.name[0])] = s : e[n] = s;
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
    return f(t.split(".", 2), (e) => Nt(e));
  }
  /**
   * Updating data about the class.
   *
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, n, a, o;
    const t = (s = this.classesSub) == null ? void 0 : s.value, e = (a = (n = this.options) == null ? void 0 : n.classes) == null ? void 0 : a.value;
    return t && e ? {
      ...t,
      ...e,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(e == null ? void 0 : e.main),
        ...this.toClass((o = this.attrs) == null ? void 0 : o.class)
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
    var s, n, a;
    const t = (s = this.stylesSub) == null ? void 0 : s.value, e = (a = (n = this.options) == null ? void 0 : n.styles) == null ? void 0 : a.value;
    return t && e ? {
      ...t,
      ...e
    } : e ?? {};
  }
}
function S(i) {
  return Ct(i) ? i : b(i);
}
class Se {
  /**
   * Constructor
   * @param date date for processing. дата для обработки
   * @param type type of date format for output. тип формата даты вывода
   * @param code country and language code. код страны и языка
   */
  constructor(t, e = "date", s = p.getLocation()) {
    c(this, "item");
    c(this, "type");
    c(this, "code");
    c(this, "date");
    c(this, "datetime");
    c(this, "year", u(() => this.date.value && this.datetime.getYear()));
    c(this, "month", u(() => this.date.value && this.datetime.getMonth()));
    c(this, "day", u(() => this.date.value && this.datetime.getDay()));
    c(this, "hour", u(() => this.date.value && this.datetime.getHour()));
    c(this, "minute", u(() => this.date.value && this.datetime.getMinute()));
    c(this, "second", u(() => this.date.value && this.datetime.getSecond()));
    this.item = S(t), this.type = S(e), this.code = S(s), this.date = b(D(this.item.value)), this.datetime = new lt(
      this.date.value,
      this.type.value,
      this.code.value
    ), $(this.item, (n) => {
      this.date.value = D(n);
    }), $(this.type, (n) => this.datetime.setType(n)), $(this.code, (n) => this.datetime.setCode(n)), $(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => Pt(this.date));
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
    return u(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return u(() => this.date.value && this.datetime.getFirstDayCode());
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
    return u(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output. тип формата даты вывода
   * @param styleOptions the representation of the month. представление месяца
   */
  locale(t = this.type.value, e) {
    return u(() => this.date.value && this.datetime.locale(t, e));
  }
  /**
   * Output of standard data.
   *
   * Вывод стандартных данных.
   * @param timeZone add time zone. добавить временную зону
   */
  standard(t = !0) {
    return u(() => this.date.value && this.datetime.standard(t));
  }
}
class ke extends zt {
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
    const h = S(t), l = S(e);
    super(
      h.value,
      s,
      n,
      a,
      o
    ), l.value && this.setElementControl(l.value), $(h, (g) => this.setElement(g)), $(l, (g) => this.setElementControl(g));
  }
}
class Me {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = p.getLocation()) {
    c(this, "code");
    c(this, "flag");
    this.code = S(t), this.flag = new ct(this.code.value), $(this.code, (e) => this.flag.setCode(e));
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
    return u(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code/ код страны
   */
  getFlag(t = this.code.value) {
    return u(() => {
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
    return u(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return u(() => this.flag.getNational(t));
  }
}
const v = class v {
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
    p.set(t, !0), this.item.value = p.getItem();
  }
};
c(v, "item", P(p.get())), c(v, "country", u(() => v.item.value.country)), c(v, "language", u(() => v.item.value.language)), c(v, "standard", u(() => v.item.value.standard)), c(v, "firstDay", u(() => v.item.value.firstDay));
let G = v;
class ae {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    c(this, "location");
    c(this, "intl");
    this.location = S(t), this.intl = u(() => new Q(this.location.value ?? G.getLanguage().value));
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
    return u(() => this.intl.value.display(d(t), e));
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(t, e) {
    return u(() => this.intl.value.languageName(d(t), e));
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, e) {
    return u(() => this.intl.value.countryName(d(t), e));
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
    return u(() => this.intl.value.number(d(t), e));
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    return u(() => this.intl.value.decimal());
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
    return u(
      () => this.intl.value.currency(
        d(t),
        d(e),
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
    return u(() => this.intl.value.unit(d(t), e));
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return u(() => this.intl.value.percent(d(t), e));
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
    return u(() => this.intl.value.percentBy100(d(t), e));
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
    return u(() => this.intl.value.date(d(t), e, s, n));
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
    return u(() => this.intl.value.relative(d(t), e, s));
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
  relativeLimit(t, e, s, n, a, o, h) {
    return u(() => this.intl.value.relativeLimit(
      d(t),
      e,
      s,
      n,
      a,
      o,
      h
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
    return u(() => this.intl.value.month(d(t), e));
  }
  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(t) {
    return u(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(t, e) {
    return u(() => this.intl.value.weekday(d(t), e));
  }
  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(t) {
    return u(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(t) {
    return u(() => this.intl.value.time(d(t)));
  }
}
const oe = (i) => typeof i == "string" ? { method: i } : i || {};
let V;
function Ae(i, t, e = !0, s, n, a) {
  const o = b(), h = S(oe(t)), l = b(!1), g = b(!1);
  let k = !0, M = 0;
  const _ = async () => {
    if (k)
      return;
    const w = d(i);
    if ((!s || s.value) && w) {
      l.value = !0, g.value = !0;
      let tt = {};
      const ft = await U.request({
        path: w,
        ...h.value
      });
      ft && (tt = ft), n ? o.value = n(tt) : o.value = tt, l.value = !1;
    } else o.value !== void 0 && (o.value = void 0);
  }, Bt = () => {
    const w = [];
    e && w.push(h), Ct(i) && w.push(i), s && w.push(s), V && w.push(V), w.length > 0 && $(w, async () => {
      l.value || await _();
    });
  };
  return {
    get data() {
      return k && (k = !1, _().then()), Bt(), a && (M++, ot(() => {
        M--, M < 1 && (console.warn("useApiRef: unmounted"), o.value = void 0, k = !0, M = 0);
      })), o;
    },
    get isStarting() {
      return u(() => o.value === void 0);
    },
    loading: l,
    get reading() {
      return u(() => g.value);
    },
    reset: _
  };
}
const Ne = (i) => {
  V || (V = i);
};
function Ie(i, t, e) {
  if (i in it)
    return it[i];
  const s = new qt(i), n = b(s.get(t, e));
  return $(n, (a) => {
    s.set(a, e);
  }), it[i] = n, n;
}
const it = {};
function Fe() {
  return new ae();
}
function Be(i, t) {
  if (i in rt)
    return rt[i];
  const e = P(x.get(i, t));
  return $(e, (s) => x.set(i, s)), x.addWatch(i, (s) => {
    e.value = s;
  }), rt[i] = e, e;
}
const rt = {};
let pt = Y(1e5, 9e5);
function Z(i, t) {
  const e = X(i);
  return e ? (H(e.id) || e.setAttribute("id", `id-${pt++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${pt++}`;
}
const Te = () => {
  const i = {}, t = "IntersectionObserver" in window ? new IntersectionObserver(
    (s) => {
      s.forEach((n) => {
        const a = Z(n.target);
        a in i && (i[a].status.value = n.isIntersecting);
      });
    },
    {
      rootMargin: "128px 0px"
    }
  ) : void 0, e = (s) => {
    if (s) {
      const n = Z(s);
      n in i && (t == null || t.unobserve(s), i[n].stopWatch(), delete i[n]);
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
      const n = P(!t);
      if (t) {
        const a = $(s, (o, h) => {
          if (h && t.unobserve(h), s.value) {
            const l = Z(s.value);
            i[l] = {
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
    disconnectLazy: () => t == null ? void 0 : t.disconnect()
  };
};
function Ee() {
  const i = P(dt.is());
  return dt.registrationEvent(({ detail: t }) => {
    i.value = t.loading;
  }), i;
}
function Oe(i, t) {
  if (i in nt)
    return nt[i];
  const e = new J(i, !0), s = b(e.get(t));
  return $(s, (n) => e.set(n)), nt[i] = s, s;
}
const nt = {};
function Re(i, t, e) {
  if (i in at)
    return at[i];
  const s = new J(i), n = b(s.get(t, e));
  return $(n, (a) => s.set(a)), at[i] = n, n;
}
const at = {};
function ce(i) {
  const t = P(K.getListSync(i, !0)), e = async () => {
    t.value = { ...await K.getList(i) };
  };
  $(G.getLanguage(), e);
  for (const s in t.value)
    if (t.value[s] === s || t.value[s] === " ") {
      e().then();
      break;
    }
  return t;
}
const We = (i) => ce(i);
function xe(i) {
  return ht(i) ? i.trim() : gt(i) && i.findIndex((t) => y(t)) === -1 ? i.join(", ") : y(i) ? JSON.stringify(i) : i === !0 ? "1" : (i == null ? void 0 : i.toString()) ?? "";
}
function ue(i, t) {
  return Array(t).fill(i);
}
function je(i) {
  i.preventDefault(), i.stopPropagation();
}
const It = [], he = Y(1e5, 999999);
function He(i, t = !0, e = !1, s = !0) {
  let n;
  const a = `__execute_use${he}::${Z()}`, o = (...h) => {
    if (!e && s) {
      const l = Ut(a, void 0);
      if (l)
        return l;
      {
        let g = i(...h);
        return Zt(a, g), t && ot(() => {
          g = void 0;
        }), g;
      }
    } else n || (n = i(...h), t && ot(() => {
      n = void 0;
    }));
    return n;
  };
  return e && It.push(o), o;
}
function Pe() {
  It.forEach((i) => i());
}
function le(i, t, e) {
  const s = () => {
    i(), t != null && t() ? le(i, t, e) : e == null || e();
  };
  m() ? requestAnimationFrame(s) : s();
}
function ze(i) {
  const t = {}, e = X(i);
  if (e)
    for (const s of e.attributes)
      t[s.name] = ((s == null ? void 0 : s.value) || (s == null ? void 0 : s.textContent)) ?? void 0;
  return t;
}
async function Ue(i) {
  var t;
  return ((t = i == null ? void 0 : i.clipboardData) == null ? void 0 : t.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function ge(i, t) {
  const e = t.split(".", 2), s = e[0];
  return i != null && i[s] && N(i[s]) && (e != null && e[1]) ? ge(i[s], e[1]) : (i == null ? void 0 : i[s]) ?? "";
}
function Ze(i) {
  var t;
  return (i == null ? void 0 : i.key) ?? (i == null ? void 0 : i.code) ?? ((t = i == null ? void 0 : i.keyCode) == null ? void 0 : t.toString());
}
function Ft(i) {
  return f(i, (t) => t.length);
}
function Ye(i) {
  return Math.max(...Ft(i));
}
function Ke(i) {
  return Math.min(...Ft(i));
}
function fe(i) {
  var t, e;
  return (i == null ? void 0 : i.clientX) || ((t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0].clientX) || ((e = i == null ? void 0 : i.touches) == null ? void 0 : e[0].clientX) || 0;
}
function de(i) {
  var t, e;
  return (i == null ? void 0 : i.clientY) || ((t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0].clientY) || ((e = i == null ? void 0 : i.touches) == null ? void 0 : e[0].clientY) || 0;
}
function Ge(i) {
  return {
    x: fe(i),
    y: de(i)
  };
}
function Ve(i, t) {
  const e = {};
  return t.forEach((s) => {
    s in i && i[s] !== void 0 && (e[s] = i[s]);
  }), e;
}
function qe(i, t = void 0) {
  const e = {};
  return f(i, (s, n) => {
    s !== t && (e[n] = s);
  }), e;
}
function Je(i) {
  return N(i) ? i : {};
}
function ye(i, t) {
  return ue(i, t).join("");
}
function Xe(i, t, e = "#", s = 2, n = 12) {
  const a = Y(i, t), o = [];
  for (let h = 0; h < a; h++)
    o.push(ye(e, Y(s, n)));
  return o.join(" ");
}
function Qe(i, t) {
  const e = i ?? 0;
  return t > e ? 100 / (t - e) : 0;
}
function _e(i, t) {
  const e = i ?? 0;
  return t > e ? (t - e) / 100 : 0;
}
const vt = 0;
function ts(i, t, e) {
  const s = t == null ? void 0 : t.closest(i);
  if (t && s && s.scrollHeight !== s.offsetHeight)
    if (e) {
      const n = e.getBoundingClientRect(), a = s.getBoundingClientRect(), o = t.getBoundingClientRect();
      s.scrollTop = t.offsetTop - (n.top - a.top) - (n.height / 2 - o.height / 2), s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight);
    } else s.scrollTop > t.offsetTop ? s.scrollTop = t.offsetTop - vt : s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight + vt);
}
function es(i, t) {
  return i.indexOf(t) !== -1;
}
async function ss() {
  if (m()) {
    const i = await ut.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${i}px`);
  }
}
function is(i, t) {
  const e = {};
  return y(i) && y(t) && f(i, (s, n) => {
    n in t && (e[n] = s);
  }), e;
}
function rs(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || f(i, (s, n) => {
    s !== (t == null ? void 0 : t[n]) && (e = !0);
  }), e;
}
function ns(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function as(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function os(i, t) {
  return Array.isArray(i) ? i.every((e) => R(e, t)) : R(i, t);
}
function bt(i, t) {
  const e = i == null ? void 0 : i.class, s = t == null ? void 0 : t.class, n = i == null ? void 0 : i.style, a = t == null ? void 0 : t.style, o = {
    ...i,
    ...t
  };
  return (e || s) && (o.class = [], e && o.class.push(e), s && o.class.push(s)), (n || a) && (o.style = [], n && o.style.push(n), a && o.style.push(a)), o;
}
function me(i, t = {}, e = "value", s = !1) {
  const n = typeof t == "string", a = n ? t : e, o = n ? {} : t;
  return i ? i && N(i) && (a in i || s) ? bt(o, i) : bt(o, { [a]: i }) : n ? {} : { ...o };
}
function cs(i, t = {}, e = "value") {
  return u(() => me(d(i), d(t), e));
}
const us = (i, t) => {
  const e = b();
  let s = !0;
  const n = () => {
    s && (Yt(async () => {
      const a = d(await i());
      a !== t && (e.value = a);
    }), s = !1);
  };
  return u(() => (n(), e.value));
};
function hs(i, t) {
  i.value !== t && (i.value = t);
}
function ls(i) {
  let t;
  return u(() => (t || (t = i()), t.value));
}
function $e(i) {
  return [...new Set(i)];
}
function E(i, t, e = !0) {
  const s = W(i);
  return y(i) && y(t) && f(
    t,
    (n, a) => {
      const o = i == null ? void 0 : i[a];
      y(o) && y(n) ? e && Array.isArray(o) && Array.isArray(n) ? s[a] = W($e([...o, ...n])) : s[a] = E(
        Array.isArray(o) ? { ...o } : o,
        n,
        e
      ) : s[a] = y(n) ? W(n) : n;
    }
  ), s;
}
function gs(i, t) {
  let e = i;
  return f(t, (s, n) => {
    e = e.replace(kt(`[${n}]`), T(s));
  }), e;
}
function fs(i) {
  const t = L(i);
  if (t > 0) {
    const e = String(Math.floor(t / 60)).padStart(2, "0"), s = String(t % 60).padStart(2, "0");
    return `${e}:${s}`;
  }
  return "00:00";
}
function ds(i, t, {
  multiple: e = !1,
  maxlength: s = 0,
  alwaysChange: n = !0,
  notEmpty: a = !1
}) {
  if (e) {
    if (gt(i)) {
      const o = i.indexOf(t), h = [...i];
      return o !== -1 ? (!a || h.length > 1) && h.splice(o, 1) : (!s || i.length < s) && h.push(t), h;
    }
    return i === t ? [] : i ? [i, t] : [t];
  }
  return n || i !== t ? t : i;
}
function ys(i, t, e) {
  if (y(i) && y(t)) {
    if (e) {
      let s = {}, n = !1;
      return f(i, (a, o) => {
        !n && (e === o || e === a) ? (n = !0, s = E(s, t)) : n ? s = E(s, { [o]: a }) : s[o] = y(a) ? W(a) : a;
      }), n ? s : E(i, t);
    }
    if (y(t))
      return E(i, t);
  }
  return W(i);
}
function ms(i) {
  return Nt(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function $s(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function ps(i, t, e, s) {
  const n = L(i);
  return t && t < n ? `${wt(t, e, s)}+` : wt(n, e, s);
}
const wt = (i, t, e) => t ? new Q(e).number(i) : i;
function pe(i, t) {
  return 1 / i * t;
}
function vs(i, t) {
  return pe(i, t) * 100;
}
async function bs(i) {
  if (m())
    try {
      await navigator.clipboard.writeText(i);
    } catch {
      document == null || document.execCommand(i);
    }
}
export {
  U as Api,
  Ds as ApiMethodItem,
  Gt as Cache,
  Kt as CacheItem,
  yt as CacheStatic,
  qt as Cookie,
  Lt as CookieBlock,
  J as DataStorage,
  lt as Datetime,
  Se as DatetimeRef,
  se as DesignAbstract,
  Ce as DesignAsyncAbstract,
  ee as DesignChanged,
  De as DesignComp,
  At as DesignComponents,
  Le as DesignConstructorAbstract,
  zt as EventItem,
  ke as EventRef,
  r as GEO_FLAG_ICON_NAME,
  p as Geo,
  ct as GeoFlag,
  Me as GeoFlagRef,
  Q as GeoIntl,
  ae as GeoIntlRef,
  mt as GeoPhone,
  G as GeoRef,
  we as Global,
  x as Hash,
  Ls as Icons,
  Mt as ListData,
  dt as Loading,
  Jt as RouterItem,
  ut as ScrollbarWidth,
  K as Translate,
  xe as anyToString,
  te as applyTemplate,
  ue as arrFill,
  W as copyObject,
  $t as createElement,
  je as eventStopPropagation,
  T as executeFunction,
  Ss as executePromise,
  He as executeUse,
  Pe as executeUseGlobalInit,
  f as forEach,
  le as frame,
  ze as getAttributes,
  me as getBind,
  cs as getBindRef,
  ie as getClassName,
  Ue as getClipboardData,
  St as getColumn,
  us as getComputedAsync,
  X as getElement,
  Z as getElementId,
  Xt as getElementItem,
  ks as getElementOrWindow,
  kt as getExp,
  re as getIndexForRender,
  ge as getItemByPath,
  Ze as getKey,
  Ft as getLengthOfAllArray,
  Ye as getMaxLengthAllArray,
  Ke as getMinLengthAllArray,
  Ge as getMouseClient,
  fe as getMouseClientX,
  de as getMouseClientY,
  Ve as getObjectByKeys,
  qe as getObjectNoUndefined,
  Je as getObjectOrNone,
  Xe as getRandomText,
  d as getRef,
  Rt as getRequestString,
  Qe as getStepPercent,
  _e as getStepValue,
  ts as goScroll,
  es as inArray,
  ss as initScrollbarOffset,
  is as intersectKey,
  gt as isArray,
  rs as isDifferent,
  m as isDomRuntime,
  H as isFilled,
  ns as isFloat,
  Ms as isFunction,
  As as isInDom,
  as as isIntegerBetween,
  Ot as isNull,
  Ns as isNumber,
  y as isObject,
  N as isObjectNotArray,
  R as isSelected,
  os as isSelectedByList,
  ht as isString,
  Is as isWindow,
  Y as random,
  ne as render,
  E as replaceRecursive,
  gs as replaceTemplate,
  fs as secondToTime,
  Ne as setApiRefGlobalConditions,
  Qt as setElementItem,
  hs as setRef,
  ds as setValues,
  ys as splice,
  ye as strFill,
  We as t,
  O as toArray,
  bt as toBind,
  Nt as toCamelCase,
  ms as toCamelCaseFirst,
  ls as toComputed,
  D as toDate,
  $s as toKebabCase,
  L as toNumber,
  ps as toNumberByMax,
  pe as toPercent,
  vs as toPercentBy100,
  S as toRefItem,
  Dt as transformation,
  $e as uniqueArray,
  Ae as useApiRef,
  Ie as useCookieRef,
  Fe as useGeoIntlRef,
  Be as useHashRef,
  Te as useLazyRef,
  Ee as useLoadingRef,
  Oe as useSessionRef,
  Re as useStorageRef,
  ce as useTranslateRef,
  bs as writeClipboardData
};
