var Wt = Object.defineProperty;
var Pt = (i, t, e) => t in i ? Wt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var A = (i, t, e) => Pt(i, typeof t != "symbol" ? t + "" : t, e);
import { D as X, i as d, r as z, e as B, a as F, b as jt, G as b, f, t as k, c as ht, d as R, g as Ht, h as M, j as p, k as C, A as V, l as m, E as Ut, m as j, L as $t, n as H } from "./Icons-BNmTjp32.js";
import { o as qi, I as Ji, p as Qi, q as Xi, s as Mi, u as Oi, v as Ti, w as Gi } from "./Icons-BNmTjp32.js";
import { ref as y, watch as g, h as _t, computed as c, toRefs as zt, useAttrs as Zt, useSlots as Kt, isRef as dt, triggerRef as Vt, shallowRef as Z, onUnmounted as ot, inject as Yt, provide as qt, watchEffect as Jt } from "vue";
function Qt(i, t, e) {
  if (i in G)
    return G[i];
  const s = new X(i), n = y(s.get(t, e));
  return g(n, (o) => s.set(o)), d() && window.addEventListener("storage", () => {
    s.update(), n.value = s.get();
  }), G[i] = n, n;
}
const G = {};
class Xt {
  /**
   * Constructor
   * @param name channel name/ название канала
   * @param callback callback on message received/ колбэк на получение сообщения
   */
  constructor(t, e) {
    if (this.callback = e, d())
      try {
        this.channel = new BroadcastChannel(`${Mt()}__${t}`), this.channel.onmessage = this.update;
      } catch (s) {
        console.error(`BroadcastMessage ${t}:`, s);
      }
  }
  channel;
  /**
   * Send a message to the channel.
   *
   * Отправить сообщение в канал.
   * @param message message to send/ сообщение для отправки
   */
  post(t) {
    return this.channel?.postMessage(t), this;
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
  /**
   * Update state on message received.
   *
   * Обновление состояния при получении сообщения.
   * @param event message event/ событие сообщения
   */
  update = (t) => (this.callback?.(t), this);
}
const Mt = () => Qt(
  "__broadcast-name",
  () => `name_${z(1e6, 9999999)}`
);
class Ot {
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
class Tt {
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
    return t in this.cache || (this.cache[t] = new Ot(e)), this.cache[t];
  }
}
const Q = class Q {
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
A(Q, "cache"), Q.cache = new Tt();
let vt = Q;
function Lt(i, t = !1) {
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
const Gt = "cookie-block";
class te {
  static storage = new X(Gt);
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
const bt = {}, yt = class yt {
  constructor(t) {
    if (this.name = t, t in tt)
      return tt[t];
    this.value = bt?.[t], tt[t] = this;
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
    this.value = B(t), Object.assign(this.options, e), this.update();
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
    if (d() && !te.get()) {
      const t = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(t)}`,
        `max-age=${t === "" ? "-1" : this.getAge()}`,
        `SameSite=${this.options?.sameSite ?? "strict"}`,
        ...this.options?.arguments ?? []
      ].join("; ");
    }
  }
  /**
   * Update data from cookies.
   *
   * Обновляет данные из cookies.
   */
  static updateData() {
    for (const t of document.cookie.split(";")) {
      const [e, s] = t.trim().split("=");
      e && F(s) && (bt[e] = Lt(s));
    }
  }
};
d() && yt.updateData();
let at = yt;
const tt = {};
function D(i) {
  if (i instanceof Date)
    return i;
  if (jt(i))
    return /* @__PURE__ */ new Date();
  if (typeof i == "number")
    return new Date(i);
  let t = i, e = b.getTimezoneFormat();
  i.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (n, o, a) => (t = o, e = a, n));
  const s = (/^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) ?? (/^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) ?? t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${e}`);
}
function ct(i, t) {
  return f(i, (e) => e?.[t]);
}
class W {
  /**
   * Returns an instance of the class according to the specified country code.
   *
   * Возвращает экземпляр класса по указанному коду страны.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getInstance(t = b.getLocation()) {
    return new W(t);
  }
  geo;
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = b.getLocation()) {
    this.geo = b.find(t);
    const e = this.getLocation();
    if (e in et)
      return et[e];
    et[e] = this;
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
    } catch (o) {
      console.error("display: ", o);
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
    return this.display(b.getByCode(t).language, s);
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
    const o = this.geo?.nameFormat ?? "fl";
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
    return this.numberObject(e)?.format?.(k(t)) || t.toString();
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
    }, o = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...a) => (n.currency = String(a[2]).toUpperCase(), String(a[1])));
    if (s) {
      const a = this.numberObject(n);
      return a ? ct(
        a.formatToParts(k(t)).filter((u) => ["literal", "currency"].indexOf(u.type) === -1),
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
    const s = k(t);
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
    return this.percent(k(t) / 100, e);
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
    const o = k(t), a = e.split("|");
    if (a.length > 1)
      try {
        if (d()) {
          const l = new Intl.PluralRules(this.getLocation(), s).select(o);
          let h;
          switch (l) {
            case "zero":
              h = a[a.length - 1];
              break;
            case "one":
              h = a?.[0];
              break;
            case "two":
              h = a?.[1];
              break;
            case "few":
              h = a?.[3] ? a?.[2] : a?.[1];
              break;
            case "many":
              h = a?.[3] || a?.[2] || a?.[1];
              break;
            case "other":
              a.length === 6 ? h = a[a.length - 2] : h = a[a.length - 1];
              break;
          }
          return `${this.number(o, n)} ${h ?? ""}`.trim();
        }
      } catch (u) {
        console.error("plural: ", u);
      }
    return `${this.number(o, n)} ${a?.[0] ?? ""}`.trim();
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
    const o = D(t), a = typeof s == "string", u = this.dateOptions(e, a ? s : "short");
    return n && (u.hour12 = !1), a || Object.assign(u, s), o.toLocaleString(this.getLocation(), u);
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
    const n = D(t), o = s || /* @__PURE__ */ new Date(), a = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let u = "second", l = (n.getTime() - o.getTime()) / 1e3;
    return Math.abs(l) >= 60 && (u = "minute", l /= 60, Math.abs(l) >= 60 && (u = "hour", l /= 60, Math.abs(l) >= 24 && (u = "day", l /= 24, Math.abs(l) >= 30 && (u = "month", l /= 30, Math.abs(l) >= 12 && (u = "year", l /= 12))))), this.relativeByValue(l, u, a);
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
  relativeLimit(t, e, s, n, o, a, u) {
    const l = D(t), h = s || /* @__PURE__ */ new Date(), I = new Date(h), N = new Date(h);
    return I.setDate(h.getDate() - e), N.setDate(h.getDate() + e), l >= I && l <= N ? this.relative(
      l,
      n,
      h
    ) : this.date(
      l,
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
    const n = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    try {
      if (d())
        return new Intl.RelativeTimeFormat(this.getLocation(), n).format(Math.round(k(t)), e);
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
      if (d())
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
      if (d()) {
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
      if (d())
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
      if (d()) {
        const s = /* @__PURE__ */ new Date(), n = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), o = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        s.setDate(s.getDate() - o);
        for (let a = 0; a < 7; a++)
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
const et = {};
class gt {
  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(t, e = "date", s = b.getLocation()) {
    this.type = e, this.code = s, this.date = D(t);
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
    const e = new gt(this.date, this.type, "en-GB"), s = [];
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
    return this.watch?.(
      this.date,
      this.type,
      this.hour24
    ), this;
  }
}
const r = "@flag";
class U {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = b.getLocation()) {
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
    const e = b.find(t);
    if (e) {
      const s = this.getCountry(e);
      return {
        language: this.getLanguage(e),
        country: s,
        standard: e.standard,
        icon: U.flags?.[e.country],
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
      const s = new U(e.standard).get(e.standard);
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
    return new W(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.
   *
   * Возвращает список стран для получения данных.
   * @param codes country code/ код страны
   */
  getCodes(t) {
    return t ?? Object.keys(U.flags);
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
const E = class E {
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
    return this.toNumber(t).forEach((o) => {
      n === "" && o in e ? (s = e[o], e = s?.next ?? {}) : n += o;
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
    if (F(t) && Array.isArray(e) && e.length > 0) {
      const s = this.removeZero(t), n = s.length;
      for (const o of e)
        if (this.getUnnecessaryLength(o) === n)
          return this.toStandard(s, o);
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
    const t = f(b.getList(), (e) => {
      if (e?.phoneMask)
        return {
          phone: e?.phoneCode && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: e?.phoneWithin || 0,
          mask: R(e.phoneMask),
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
        if (this.toNumber(e).forEach((o) => {
          o in s || (s[o] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), n = s[o], s = n?.next ?? {};
        }), n) {
          n.value === void 0 && (n.info = t, n.value = t.value);
          const o = this.toWithin(e, t.within);
          n.mask.push(o), n.maskFull.push(o.replace(/\d/ig, "*")), n.items.push(t);
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
A(E, "list", []), A(E, "map", {}), E.makeList(), E.makeMap();
let wt = E, K;
class ze {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(t) {
    return K && K?.[t];
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(t) {
    K === void 0 && (K = { ...t });
  }
}
const x = class x {
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
    const s = B(e);
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
      (...e) => (t[String(e[1])] = Lt(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Ht(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
A(x, "hash", {}), A(x, "watch", {}), A(x, "block", !1), d() && (x.reload(), addEventListener("hashchange", () => x.reload()));
let _ = x;
function ee(i, t, e) {
  return M(i)?.[t] ?? e;
}
function ie(i, t, e) {
  const s = M(i);
  if (s) {
    const n = ee(s, t);
    if (p(n) && p(e))
      f(e, (o, a) => {
        n[a] = B(o);
      });
    else {
      const o = B(e);
      !(t in s) && typeof o == "string" ? s.setAttribute(t.toString(), o) : s[t] = B(e);
    }
  }
  return s;
}
function ut(i, t = "div", e, s) {
  if (!d())
    return;
  const n = document.createElement(t);
  return typeof e == "function" ? e(n) : C(e) && f(e, (o, a) => {
    ie(n, a, o);
  }), i?.insertBefore(n, s ?? null), n;
}
function se(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").trim();
}
class ft {
  /**
   * Creates an instance of MetaManager.
   *
   * Создает экземпляр MetaManager.
   * @param listMeta list of meta-tag names to manage / список имен мета-тегов для управления
   * @param isProperty use 'property' attribute instead of 'name' / использовать атрибут 'property' вместо 'name'
   */
  constructor(t, e = !1) {
    this.listMeta = t, this.isProperty = e, this.update();
  }
  items = {};
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
    return this.items[t] ?? "";
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
    return f(
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
    return f(
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
    if (!d())
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
    const e = this.findMetaElement(t), s = this.items[t] ?? "";
    if (e)
      e.content = s;
    else if (d()) {
      const n = { content: s };
      this.isProperty ? n.property = t : n.name = t, ut(document.head, "meta", n);
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
    const e = se(this.items[t] ?? "");
    return e ? `<meta ${this.getAttributeName()}="${t}" content="${e}">` : "";
  }
  /**
   * Updates meta tags data from the DOM.
   *
   * Обновляет данные мета-тегов из DOM.
   */
  update() {
    return this.listMeta.forEach((t) => {
      this.items[t] = this.findMetaElement(t)?.content ?? "";
    }), this;
  }
}
var w = /* @__PURE__ */ ((i) => (i.description = "description", i.keywords = "keywords", i.canonical = "canonical", i.robots = "robots", i.author = "author", i))(w || {}), re = /* @__PURE__ */ ((i) => (i.indexFollow = "index, follow", i.noIndexFollow = "noindex, follow", i.indexNoFollow = "index, nofollow", i.noIndexNoFollow = "noindex, nofollow", i.noArchive = "noarchive", i.noSnippet = "nosnippet", i.noImageIndex = "noimageindex", i.images = "images", i.noTranslate = "notranslate", i.noPreview = "nopreview", i.textOnly = "textonly", i.noIndexSubpages = "noindex, noarchive", i.none = "none", i))(re || {}), $ = /* @__PURE__ */ ((i) => (i.title = "og:title", i.type = "og:type", i.url = "og:url", i.image = "og:image", i.description = "og:description", i.locale = "og:locale", i.siteName = "og:site_name", i.localeAlternate = "og:locale:alternate", i.imageUrl = "og:image:url", i.imageSecureUrl = "og:image:secure_url", i.imageType = "og:image:type", i.imageWidth = "og:image:width", i.imageHeight = "og:image:height", i.imageAlt = "og:image:alt", i.video = "og:video", i.videoUrl = "og:video:url", i.videoSecureUrl = "og:video:secure_url", i.videoType = "og:video:type", i.videoWidth = "og:video:width", i.videoHeight = "og:video:height", i.audio = "og:audio", i.audioSecureUrl = "og:audio:secure_url", i.audioType = "og:audio:type", i.articlePublishedTime = "article:published_time", i.articleModifiedTime = "article:modified_time", i.articleExpirationTime = "article:expiration_time", i.articleAuthor = "article:author", i.articleSection = "article:section", i.articleTag = "article:tag", i.bookAuthor = "book:author", i.bookIsbn = "book:isbn", i.bookReleaseDate = "book:release_date", i.bookTag = "book:tag", i.musicDuration = "music:duration", i.musicAlbum = "music:album", i.musicAlbumDisc = "music:album:disc", i.musicAlbumTrack = "music:album:track", i.musicMusician = "music:musician", i.musicSong = "music:song", i.musicSongDisc = "music:song:disc", i.musicSongTrack = "music:song:track", i.musicReleaseDate = "music:release_date", i.musicCreator = "music:creator", i.videoActor = "video:actor", i.videoActorRole = "video:actor:role", i.videoDirector = "video:director", i.videoWriter = "video:writer", i.videoDuration = "video:duration", i.videoReleaseDate = "video:release_date", i.videoTag = "video:tag", i.videoSeries = "video:series", i.profileFirstName = "profile:first_name", i.profileLastName = "profile:last_name", i.profileUsername = "profile:username", i.profileGender = "profile:gender", i.productBrand = "product:brand", i.productAvailability = "product:availability", i.productCondition = "product:condition", i.productPriceAmount = "product:price:amount", i.productPriceCurrency = "product:price:currency", i.productRetailerItemId = "product:retailer_item_id", i.productCategory = "product:category", i.productEan = "product:ean", i.productIsbn = "product:isbn", i.productMfrPartNo = "product:mfr_part_no", i.productUpc = "product:upc", i.productWeightValue = "product:weight:value", i.productWeightUnits = "product:weight:units", i.productColor = "product:color", i.productMaterial = "product:material", i.productPattern = "product:pattern", i.productAgeGroup = "product:age_group", i.productGender = "product:gender", i))($ || {}), ne = /* @__PURE__ */ ((i) => (i.website = "website", i.article = "article", i.video = "video.other", i.videoTvShow = "video.tv_show", i.videoEpisode = "video.episode", i.videoMovie = "video.movie", i.musicAlbum = "music.album", i.musicPlaylist = "music.playlist", i.musicSong = "music.song", i.musicRadioStation = "music.radio_station", i.app = "app", i.product = "product", i.business = "business.business", i.place = "place", i.event = "event", i.profile = "profile", i.book = "book", i))(ne || {}), oe = /* @__PURE__ */ ((i) => (i.inStock = "in stock", i.outOfStock = "out of stock", i.preorder = "preorder", i.backorder = "backorder", i.discontinued = "discontinued", i.pending = "pending", i))(oe || {}), ae = /* @__PURE__ */ ((i) => (i.new = "new", i.used = "used", i.refurbished = "refurbished", i))(ae || {}), ce = /* @__PURE__ */ ((i) => (i.newborn = "newborn", i.infant = "infant", i.toddler = "toddler", i.kids = "kids", i.adult = "adult", i))(ce || {}), ue = /* @__PURE__ */ ((i) => (i.female = "female", i.male = "male", i.unisex = "unisex", i))(ue || {}), v = /* @__PURE__ */ ((i) => (i.card = "twitter:card", i.site = "twitter:site", i.creator = "twitter:creator", i.url = "twitter:url", i.title = "twitter:title", i.description = "twitter:description", i.image = "twitter:image", i.imageAlt = "twitter:image:alt", i.imageSrc = "twitter:image:src", i.imageWidth = "twitter:image:width", i.imageHeight = "twitter:image:height", i.label1 = "twitter:label1", i.data1 = "twitter:data1", i.label2 = "twitter:label2", i.data2 = "twitter:data2", i.appNameIphone = "twitter:app:name:iphone", i.appIdIphone = "twitter:app:id:iphone", i.appUrlIphone = "twitter:app:url:iphone", i.appNameIpad = "twitter:app:name:ipad", i.appIdIpad = "twitter:app:id:ipad", i.appUrlIpad = "twitter:app:url:ipad", i.appNameGooglePlay = "twitter:app:name:googleplay", i.appIdGooglePlay = "twitter:app:id:googleplay", i.appUrlGooglePlay = "twitter:app:url:googleplay", i.player = "twitter:player", i.playerWidth = "twitter:player:width", i.playerHeight = "twitter:player:height", i.playerStream = "twitter:player:stream", i.playerStreamContentType = "twitter:player:stream:content_type", i))(v || {}), le = /* @__PURE__ */ ((i) => (i.summary = "summary", i.summaryLargeImage = "summary_large_image", i.app = "app", i.player = "player", i.product = "product", i.gallery = "gallery", i.photo = "photo", i.leadGeneration = "lead_generation", i.audio = "audio", i.poll = "poll", i))(le || {});
class he extends ft {
  constructor() {
    super(Object.values($), !0);
  }
  /**
   * Gets the Open Graph title.
   *
   * Получает заголовок Open Graph.
   */
  getTitle() {
    return this.get($.title);
  }
  /**
   * Gets the Open Graph type.
   *
   * Получает тип Open Graph.
   */
  getType() {
    return this.get($.type);
  }
  /**
   * Gets the Open Graph URL.
   *
   * Получает URL Open Graph.
   */
  getUrl() {
    return this.get($.url);
  }
  /**
   * Gets the Open Graph image URL.
   *
   * Получает URL изображения Open Graph.
   */
  getImage() {
    return this.get($.image);
  }
  /**
   * Gets the Open Graph description.
   *
   * Получает описание Open Graph.
   */
  getDescription() {
    return this.get($.description);
  }
  /**
   * Gets the Open Graph locale.
   *
   * Получает локаль Open Graph.
   */
  getLocale() {
    return this.get($.locale);
  }
  /**
   * Gets the Open Graph site name.
   *
   * Получает название сайта Open Graph.
   */
  getSiteName() {
    return this.get($.siteName);
  }
  /**
   * Sets the Open Graph title.
   *
   * Устанавливает заголовок Open Graph.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set($.title, t);
  }
  /**
   * Sets the Open Graph type.
   *
   * Устанавливает тип Open Graph.
   * @param type type / тип
   */
  setType(t) {
    return this.set($.type, t);
  }
  /**
   * Sets the Open Graph URL.
   *
   * Устанавливает URL Open Graph.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set($.url, t);
  }
  /**
   * Sets the Open Graph image URL.
   *
   * Устанавливает URL изображения Open Graph.
   * @param url image URL / URL изображения
   */
  setImage(t) {
    return this.set($.image, t);
  }
  /**
   * Sets the Open Graph description.
   *
   * Устанавливает описание Open Graph.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set($.description, t);
  }
  /**
   * Sets the Open Graph locale.
   *
   * Устанавливает локаль Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   */
  setLocale(t) {
    return this.set($.locale, t);
  }
  /**
   * Sets the Open Graph site name.
   *
   * Устанавливает название сайта Open Graph.
   * @param siteName site name / название сайта
   */
  setSiteName(t) {
    return this.set($.siteName, t);
  }
}
class de extends ft {
  constructor() {
    super(Object.values(v));
  }
  /**
   * Gets the Twitter Card type.
   *
   * Получает тип Twitter Card.
   */
  getCard() {
    return this.get(v.card);
  }
  /**
   * Gets the website or brand @username.
   *
   * Получает аккаунт сайта или бренда (@username).
   */
  getSite() {
    return this.get(v.site);
  }
  /**
   * Gets the content creator @username.
   *
   * Получает автора контента (@username).
   */
  getCreator() {
    return this.get(v.creator);
  }
  /**
   * Gets the page URL.
   *
   * Получает URL страницы.
   */
  getUrl() {
    return this.get(v.url);
  }
  /**
   * Gets the card title.
   *
   * Получает заголовок карточки.
   */
  getTitle() {
    return this.get(v.title);
  }
  /**
   * Gets the card description.
   *
   * Получает описание карточки.
   */
  getDescription() {
    return this.get(v.description);
  }
  /**
   * Gets the card image URL.
   *
   * Получает URL изображения карточки.
   */
  getImage() {
    return this.get(v.image);
  }
  /**
   * Sets the Twitter Card type.
   *
   * Устанавливает тип Twitter Card.
   * @param card card type / тип карточки
   */
  setCard(t) {
    return this.set(v.card, t), this;
  }
  /**
   * Sets the website or brand @username.
   *
   * Устанавливает аккаунт сайта или бренда (@username).
   * @param site @username / аккаунт
   */
  setSite(t) {
    return this.set(v.site, t), this;
  }
  /**
   * Sets the content creator @username.
   *
   * Устанавливает автора контента (@username).
   * @param creator @username / аккаунт автора
   */
  setCreator(t) {
    return this.set(v.creator, t), this;
  }
  /**
   * Sets the page URL.
   *
   * Устанавливает URL страницы.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set(v.url, t), this;
  }
  /**
   * Sets the card title.
   *
   * Устанавливает заголовок карточки.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set(v.title, t), this;
  }
  /**
   * Sets the card description.
   *
   * Устанавливает описание карточки.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set(v.description, t), this;
  }
  /**
   * Sets the card image URL.
   *
   * Устанавливает URL изображения карточки.
   * @param image image URL / URL изображения
   */
  setImage(t) {
    return this.set(v.image, t), this;
  }
}
class ge extends ft {
  suffix;
  og;
  twitter;
  /**
   * Creates an instance of Meta with integrated Open Graph and Twitter Card support.
   *
   * Создает экземпляр Meta с интегрированной поддержкой Open Graph и Twitter Card.
   */
  constructor() {
    super(Object.values(w)), this.og = new he(), this.twitter = new de();
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
    return d() ? document.title.replace(this.getSuffix(), "").trim() : "";
  }
  /**
   * Gets the keywords meta tag.
   *
   * Получает мета-тег keywords.
   */
  getKeywords() {
    return this.get(w.keywords);
  }
  /**
   * Gets the description meta tag.
   *
   * Получает мета-тег description.
   */
  getDescription() {
    return this.get(w.description);
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
    return this.get(w.canonical);
  }
  /**
   * Gets the robots meta tag value.
   *
   * Получает значение мета-тега robots.
   */
  getRobots() {
    return this.get(w.robots);
  }
  /**
   * Gets the author meta tag.
   *
   * Получает мета-тег author.
   */
  getAuthor() {
    return this.get(w.author);
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
  setTitle(t) {
    if (d()) {
      const e = F(t) ? `${t}${this.getSuffix()}` : this.suffix ? this.suffix : "";
      document.title = e, this.og.setTitle(e), this.twitter.setTitle(e);
    }
    return this;
  }
  /**
   * Sets the keywords meta tag.
   *
   * Устанавливает мета-тег keywords.
   * @param keywords keywords as string or array / ключевые слова в виде строки или массива
   */
  setKeywords(t) {
    return this.set(w.keywords, R(t).join(", ")), this;
  }
  /**
   * Sets the description meta tag.
   *
   * Устанавливает мета-тег description.
   * @param description page description / описание страницы
   */
  setDescription(t) {
    return this.set(w.description, t), this;
  }
  /**
   * Sets the image for Open Graph and Twitter Card.
   *
   * Устанавливает изображение для Open Graph и Twitter Card.
   * @param image image URL / URL изображения
   */
  setImage(t) {
    return this.og.setImage(t), this.twitter.setImage(t), this;
  }
  /**
   * Sets the canonical URL and updates Open Graph and Twitter Card URLs.
   *
   * Устанавливает канонический URL и обновляет URL для Open Graph и Twitter Card.
   * @param canonical canonical URL / канонический URL
   */
  setCanonical(t) {
    return this.set(w.canonical, t), this.og.setUrl(t), this.twitter.setUrl(t), this;
  }
  /**
   * Sets the robots meta tag.
   *
   * Устанавливает мета-тег robots.
   * @param robots robots directive / директива robots
   */
  setRobots(t) {
    return this.set(w.robots, t), this;
  }
  /**
   * Sets the author meta tag.
   *
   * Устанавливает мета-тег author.
   * @param author author name / имя автора
   */
  setAuthor(t) {
    return this.set(w.author, t), this;
  }
  /**
   * Sets the site name for Open Graph and Twitter Card.
   *
   * Устанавливает название сайта для Open Graph и Twitter Card.
   * @param siteName site name / название сайта
   */
  setSiteName(t) {
    return this.og.setSiteName(t), this.twitter.setSite(t), this;
  }
  /**
   * Sets the locale for Open Graph.
   *
   * Устанавливает локаль для Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   */
  setLocale(t) {
    return this.og.setLocale(t), this;
  }
  /**
   * Sets the suffix to append to page title.
   *
   * Устанавливает суффикс для добавления к заголовку страницы.
   * @param suffix title suffix (e.g. 'My Site') / суффикс заголовка (например, 'Мой Сайт')
   */
  setSuffix(t) {
    this.suffix = t;
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
    return F(this.suffix) ? ` - ${this.suffix}` : "";
  }
}
class Ct {
  static storage = new X("scrollbar", !0);
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
    return ut(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", ut(t, "div", (e) => {
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
const fe = [
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
], me = (i, t = {}) => {
  let e = String(i);
  if (i.match(/%[a-z]/)) {
    let s = 0;
    f(t, (n) => {
      e = e.replace(new RegExp(`%${fe[s++]}`, "g"), String(n));
    });
  }
  return C(t) && f(t, (s, n) => {
    e = e.replace(
      new RegExp(`\\[${n}\\](.*?)\\[/${n}\\]`, "g"),
      (o, a) => String(s).replace(/\[content]/g, a)
    ).replace(new RegExp(`\\[${n}\\]`, "g"), String(s));
  }), e;
};
class q {
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
    return s in this.data ? this.replacement(this.data[s], e) : (V.isLocalhost() || await this.add(t), this.replacement(this.data?.[s] ?? t));
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
        const a = Array.isArray(o) ? o[0] : o, u = Array.isArray(o) ? o.slice(1) : void 0;
        this.get(a, u).then((l) => {
          s[a] = l, ++n >= t.length && e(s);
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
    f(t, (e, s) => {
      ht(e) && F(e) && (this.data[this.getName(s)] = e);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (F(t))
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
    return this.url = t, q;
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
    return `${b.getLocation()}-${t}`;
  }
  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getNamesNone(t) {
    const e = [];
    return R(t).forEach((s) => {
      s !== "__TRANSLATE_START__" && s !== "__TRANSLATE_END__" && !(this.getName(s) in this.data) && e.push(s);
    }), e;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    return await V.get({
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
    return e ? me(t, e) : t;
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
function mt(i) {
  return Array.isArray(i);
}
class ye {
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
    return mt(t) ? !!t.find((e) => this.isDifferent(e)) : this.isDifferent(t);
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
class pe {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param callback callback function when the value changes/
   * функция обратного вызова при изменении значения
   * @param changed base data/ данный для слежения
   */
  constructor(t, e, s) {
    this.props = t, this.callback = e, this.changed = new ye(t, s);
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
class Ze extends pe {
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
function $e(i) {
  return i && "class" in i && typeof i.class == "string" ? i.class : void 0;
}
function ve(i, t, e) {
  const s = $e(t);
  return e && s ? `${e}.${s}` : e || s || i;
}
function be(i, t, e, s) {
  const n = ve(i, t, s);
  return _t(i, { key: n, ...t }, e);
}
function lt(i, t) {
  const e = i?.class, s = t?.class, n = i?.style, o = t?.style, a = {
    ...i,
    ...t
  };
  return e && s && (a.class = [], e && a.class.push(e), s && a.class.push(s)), n && o && (a.style = [], n && a.style.push(n), o && a.style.push(o)), a;
}
function we(...i) {
  let t = {};
  return i.forEach((e) => {
    e && (t = lt(t, e));
  }), t;
}
class It {
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
        return e ? we(s.value, e) : s.value;
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
      const o = n ?? t;
      return be(
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
    const e = m(this.modification?.[t]);
    if (e && C(e)) {
      const s = {};
      return f(e, (n, o) => {
        s[o] = m(n);
      }), s;
    }
    return {};
  }
}
class Ke extends It {
}
function Nt(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${String(t[1]).toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
class Ve {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, e, s) {
    this.props = e, this.options = s, this.name = this.initName(t), this.refs = this.props ? zt(this.props) : {}, this.components = new It(s?.components, s?.compMod), this.emits = s?.emits, this.classes = c(() => this.updateClasses()), this.styles = c(() => this.updateStyles()), this.attrs = Zt(), this.slots = Kt();
  }
  name;
  element = y();
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
    return `${this.getName()}__${R(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${R(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${R(t).join("-")}`;
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
    if (p(t)) {
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
    return f(t.split(".", 2), (e) => Nt(e));
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
function L(i) {
  return dt(i) ? i : y(i);
}
class Ye {
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
  constructor(t, e = "date", s = b.getLocation()) {
    this.item = L(t), this.type = L(e), this.code = L(s), this.date = y(D(this.item.value)), this.datetime = new gt(
      this.date.value,
      this.type.value,
      this.code.value
    ), g(this.item, (n) => {
      this.date.value = D(n);
    }), g(this.type, (n) => this.datetime.setType(n)), g(this.code, (n) => this.datetime.setCode(n)), g(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => Vt(this.date));
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
class qe extends Ut {
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
    const u = L(t), l = L(e);
    super(
      u.value,
      s,
      n,
      o,
      a
    ), l.value && this.setElementControl(l.value), g(u, (h) => this.setElement(h)), g(l, (h) => this.setElementControl(h));
  }
}
class Je {
  code;
  flag;
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = b.getLocation()) {
    this.code = L(t), this.flag = new U(this.code.value), g(this.code, (e) => this.flag.setCode(e));
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
class At {
  static item = Z(b.get());
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
    b.set(t, !0), this.item.value = b.getItem();
  }
}
class Se {
  location;
  intl;
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    this.location = L(t), this.intl = c(() => new W(this.location.value ?? At.getLanguage().value));
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
    return c(() => this.intl.value.display(m(t), e));
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(t, e) {
    return c(() => this.intl.value.languageName(m(t), e));
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, e) {
    return c(() => this.intl.value.countryName(m(t), e));
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
    return c(() => this.intl.value.number(m(t), e));
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
    return c(() => this.intl.value.unit(m(t), e));
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return c(() => this.intl.value.percent(m(t), e));
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
    return c(() => this.intl.value.percentBy100(m(t), e));
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
    return c(() => this.intl.value.date(m(t), e, s, n));
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
    return c(() => this.intl.value.relative(m(t), e, s));
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
  relativeLimit(t, e, s, n, o, a, u) {
    return c(() => this.intl.value.relativeLimit(
      m(t),
      e,
      s,
      n,
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
    return c(() => this.intl.value.month(m(t), e));
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
    return c(() => this.intl.value.weekday(m(t), e));
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
    return c(() => this.intl.value.time(m(t)));
  }
}
function xt(i, t = "ig", e = ":value") {
  const s = i.replace(/([[\]\\^$.?*+()/])/g, "\\$1");
  return new RegExp(e.replace(/:value/g, s), t);
}
class Bt {
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
  constructor(t, e, s, n, o, a, u, l, h) {
    this.list = t, this.focus = e, this.highlight = s, this.highlightLengthStart = n, this.selected = o, this.keyValue = a, this.keyLabel = u, this.lite = l, this.parent = h, dt(t) && g(t, () => {
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
      m(this.list) || [],
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
        selected: j(n.index, s)
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
    const t = this.getHighlight(), e = t && t.length >= this.getHighlightLengthStart() && xt(t, "i");
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
    return !!t && this.mapItems.value.findIndex((e) => j(e.index, t)) !== -1;
  });
  /**
   * Returns a list of selected items on the map.
   *
   * Возвращает список выделенных элементов на карте.
   */
  selectedList = c(() => {
    const t = this.getSelected();
    return t && this.isSelected.value ? this.mapItems.value.filter((e) => j(e.index, t)) : [];
  });
  /**
   * Returns a list of selected items on the map.
   *
   * Возвращает список выделенных элементов на карте.
   */
  selectedNames = c(() => ct(this.selectedList.value, "label"));
  /**
   * Returns a list of selected item values on the map.
   *
   * Возвращает список значений выделенных элементов на карте.
   */
  selectedValues = c(() => ct(this.selectedList.value, "value"));
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
    return t.index in this.subList || (this.subList[t.index] = new Bt(
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
    return t && !p(t) ? t : e && !p(e) ? e : s && n;
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
      const s = e?.[this.keyValue?.value ?? "value"], n = e?.[this.keyLabel?.value ?? "label"] ?? s, o = this.getIndex(
        e?.index,
        s,
        t,
        n
      );
      return {
        ...e,
        parent: this.parent,
        index: o,
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
class Qe {
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
class Xe {
  /**
   * Reactive item.
   *
   * Реактивный элемент.
   */
  item = y();
  /**
   * Constructor
   */
  constructor() {
    Ct.is().then((t) => {
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
const ke = (i) => typeof i == "string" ? { method: i } : i || {};
let J;
function Me(i, t, e = !0, s, n, o) {
  const a = y(), u = L(ke(t)), l = y(!1), h = y(!1);
  let I = !0, N = 0;
  const O = async () => {
    if (I)
      return;
    const S = m(i);
    if ((!s || s.value) && S) {
      l.value = !0, h.value = !0;
      let T = {};
      const pt = await V.request({
        path: S,
        ...u.value
      });
      pt && (T = pt), n ? a.value = n(T) : a.value = T, l.value = !1;
    } else a.value !== void 0 && (a.value = void 0);
  }, Rt = () => {
    const S = [];
    e && S.push(u), dt(i) && S.push(i), s && S.push(s), J && S.push(J), S.length > 0 && g(S, async () => {
      l.value || await O();
    });
  };
  return {
    get data() {
      return I && (I = !1, O().then()), Rt(), o && (N++, ot(() => {
        N--, N < 1 && (console.warn("useApiRef: unmounted"), a.value = void 0, I = !0, N = 0);
      })), a;
    },
    get isStarting() {
      return c(() => a.value === void 0);
    },
    get loading() {
      return c(() => l.value);
    },
    get reading() {
      return c(() => h.value);
    },
    reset: O
  };
}
const Oe = (i) => {
  J || (J = i);
};
function De(i, t) {
  const e = `broadcast--${i}`;
  if (e in it)
    return it[e];
  const s = y(B(t)), n = new Xt(
    e,
    (o) => {
      s.value !== o.data.message && (s.value = o.data.message);
    }
  );
  return g(s, (o) => n.post({ message: o })), it[e] = s, s;
}
const it = {};
function Te(i, t, e) {
  if (i in st)
    return st[i];
  const s = new at(i), n = De(
    `__cookie:${i}`,
    s.get(t, e)
  );
  return g(n, (o) => {
    s.set(o, e);
  }), st[i] = n, n;
}
const st = {};
function Ge() {
  return new Se();
}
function ti(i, t) {
  if (i in rt)
    return rt[i];
  const e = Z(_.get(i, t));
  return g(e, (s) => _.set(i, s)), _.addWatch(i, (s) => {
    e.value = s;
  }), rt[i] = e, e;
}
const rt = {};
let St = z(1e5, 9e5);
function Y(i, t) {
  const e = M(i);
  return e ? (F(e.id) || e.setAttribute("id", `id-${St++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${St++}`;
}
const ei = () => {
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
    if (s) {
      const n = Y(s);
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
      const n = Z(!t);
      if (t) {
        const o = g(s, (a, u) => {
          if (u && t.unobserve(u), s.value) {
            const l = Y(s.value);
            i[l] = {
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
    disconnectLazy: () => t?.disconnect()
  };
};
function ii() {
  const i = Z($t.is());
  return $t.registrationEvent(({ detail: t }) => {
    i.value = t.loading;
  }), i;
}
const Ft = [], Le = z(1e5, 999999);
function Ce(i, t = !0, e = !1, s = !0) {
  let n;
  const o = `__execute_use${Le}::${Y()}`, a = (...u) => {
    if (!e && s) {
      const l = Yt(o, void 0);
      if (l)
        return l;
      {
        let h = Object.freeze(i(...u));
        return qt(o, h), t && ot(() => {
          h = void 0;
        }), h;
      }
    } else n || (n = Object.freeze(i(...u)), t && ot(() => {
      n = void 0;
    }));
    return n;
  };
  return e && Ft.push(a), a;
}
function si() {
  Ft.forEach((i) => i());
}
const Ie = Ce(() => {
  const i = new ge(), t = y(i.getTitle()), e = y(i.getKeywords()), s = y(i.getDescription()), n = y(i.getImage()), o = y(i.getCanonical()), a = y(i.getRobots()), u = y(i.getAuthor()), l = y(i.getSiteName()), h = () => i.html();
  return g(t, () => {
    i.setTitle(t.value);
  }), g(e, () => {
    i.setKeywords(e.value);
  }), g(s, () => {
    i.setDescription(s.value);
  }), g(n, () => {
    i.setImage(n.value);
  }), g(o, () => {
    i.setCanonical(o.value);
  }), g(a, () => {
    i.setRobots(a.value);
  }), g(u, () => {
    i.setAuthor(u.value);
  }), g(l, () => {
    i.setSiteName(l.value);
  }), {
    meta: i,
    title: t,
    keyword: e,
    description: s,
    author: u,
    image: n,
    canonical: o,
    robots: a,
    siteName: l,
    getHtmlMeta: h
  };
}, !1, !0), ri = () => Ie();
function ni(i, t) {
  if (i in nt)
    return nt[i];
  const e = new X(i, !0), s = y(e.get(t));
  return g(s, (n) => e.set(n)), nt[i] = s, s;
}
const nt = {};
function Ne(i) {
  const t = Z(q.getListSync(i, !0)), e = async () => {
    t.value = { ...await q.getList(i) };
  };
  g(At.getLanguage(), e);
  for (const s in t.value)
    if (t.value[s] === s || t.value[s] === " ") {
      e().then();
      break;
    }
  return t;
}
const oi = (i) => Ne(i);
function ai(i) {
  return ht(i) ? i.trim() : mt(i) && i.findIndex((t) => p(t)) === -1 ? i.join(",") : p(i) ? JSON.stringify(i) : i === !0 ? "1" : i === !1 ? "0" : i?.toString() ?? "";
}
function Ae(i, t) {
  return Array(t).fill(i);
}
function ci(i) {
  if (d())
    return document.querySelector(i) ?? void 0;
}
function ui(i) {
  if (d())
    return document.querySelectorAll(i);
}
function li(i) {
  i.preventDefault(), i.stopPropagation();
}
function xe(i, t, e) {
  const s = () => {
    i(), t?.() ? xe(i, t, e) : e?.();
  };
  d() ? requestAnimationFrame(s) : s();
}
function hi(i) {
  const t = {}, e = M(i);
  if (e)
    for (const s of e.attributes)
      t[s.name] = (s?.value || s?.textContent) ?? void 0;
  return t;
}
async function di(i) {
  return i?.clipboardData?.getData("text") ?? (await navigator.clipboard.readText() || "");
}
function Be(i, t) {
  const e = t.split(".", 2), s = e[0];
  return s && i?.[s] && C(i[s]) && e?.[1] ? Be(i[s], e[1]) : (s && i?.[s]) ?? "";
}
function gi(i) {
  return i?.key ?? i?.code ?? i?.keyCode?.toString();
}
function Et(i) {
  return f(i, (t) => t.length);
}
function fi(i) {
  return Math.max(...Et(i));
}
function mi(i) {
  return Math.min(...Et(i));
}
function Fe(i) {
  return i?.clientX || i?.targetTouches?.[0]?.clientX || i?.touches?.[0]?.clientX || 0;
}
function Ee(i) {
  return i?.clientY || i?.targetTouches?.[0]?.clientY || i?.touches?.[0]?.clientY || 0;
}
function yi(i) {
  return {
    x: Fe(i),
    y: Ee(i)
  };
}
function pi(i, t) {
  const e = {};
  return t.forEach((s) => {
    s in i && i[s] !== void 0 && (e[s] = i[s]);
  }), e;
}
function $i(i, t = void 0) {
  const e = {};
  return f(i, (s, n) => {
    s !== t && (e[n] = s);
  }), e;
}
function vi(i) {
  return C(i) ? i : {};
}
function Re(i, t) {
  return Ae(i, t).join("");
}
function bi(i, t, e = "#", s = 2, n = 12) {
  const o = z(i, t), a = [];
  for (let u = 0; u < o; u++)
    a.push(Re(e, z(s, n)));
  return a.join(" ");
}
function wi(i, t) {
  const e = i ?? 0;
  return t > e ? 100 / (t - e) : 0;
}
function Si(i, t) {
  const e = i ?? 0;
  return t > e ? (t - e) / 100 : 0;
}
const kt = 0;
function ki(i, t, e) {
  const s = t?.closest(i);
  if (t && s && s.scrollHeight !== s.offsetHeight)
    if (e) {
      const n = e.getBoundingClientRect(), o = s.getBoundingClientRect(), a = t.getBoundingClientRect();
      s.scrollTop = t.offsetTop - (n.top - o.top) - (n.height / 2 - a.height / 2), s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight);
    } else s.scrollTop > t.offsetTop ? s.scrollTop = t.offsetTop - kt : s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight + kt);
}
function Di(i, t) {
  return i.indexOf(t) !== -1;
}
async function Li() {
  if (d()) {
    const i = await Ct.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${i}px`);
  }
}
function Ci(i, t) {
  const e = {};
  return p(i) && p(t) && f(i, (s, n) => {
    n in t && (e[n] = s);
  }), e;
}
function Ii(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || f(i, (s, n) => {
    s !== t?.[n] && (e = !0);
  }), e;
}
function Ni(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function Ai(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function xi(i, t) {
  return Array.isArray(i) ? i.every((e) => j(e, t)) : j(i, t);
}
function We(i, t = {}, e = "value", s = !1) {
  const n = typeof t == "string", o = n ? t : e, a = n ? {} : t;
  return i ? i && C(i) && (o in i || s) ? lt(a, i) : lt(a, { [o]: i }) : n ? {} : { ...a };
}
function Bi(i, t = {}, e = "value") {
  return c(() => We(m(i), m(t), e));
}
const Fi = (i, t) => {
  const e = y();
  let s = !0;
  const n = () => {
    s && (Jt(async () => {
      const o = m(await i());
      o !== t && (e.value = o);
    }), s = !1);
  };
  return c(() => (n(), e.value));
};
function Ei(i, t) {
  i.value !== t && (i.value = t);
}
function Ri(i) {
  let t;
  return c(() => (t || (t = i()), t.value));
}
function Pe(i) {
  return [...new Set(i)];
}
function P(i, t, e = !0) {
  const s = H(i);
  return p(i) && p(t) && f(
    t,
    (n, o) => {
      const a = i?.[o];
      p(a) && p(n) ? e && Array.isArray(a) && Array.isArray(n) ? s[o] = H(Pe([...a, ...n])) : s[o] = P(
        Array.isArray(a) ? { ...a } : a,
        n,
        e
      ) : s[o] = p(n) ? H(n) : n;
    }
  ), s;
}
function Wi(i, t) {
  let e = i;
  return f(t, (s, n) => {
    e = e.replace(xt(`[${n}]`), B(s));
  }), e;
}
function Pi(i) {
  const t = k(i);
  if (t > 0) {
    const e = String(Math.floor(t / 60)).padStart(2, "0"), s = String(t % 60).padStart(2, "0");
    return `${e}:${s}`;
  }
  return "00:00";
}
function ji(i, t, {
  multiple: e = !1,
  maxlength: s = 0,
  alwaysChange: n = !0,
  notEmpty: o = !1
}) {
  if (e) {
    if (mt(i)) {
      const a = i.indexOf(t), u = [...i];
      return a !== -1 ? (!o || u.length > 1) && u.splice(a, 1) : (!s || i.length < s) && u.push(t), u;
    }
    return i === t ? [] : i ? [i, t] : [t];
  }
  return n || i !== t ? t : i;
}
function Hi(i, t, e) {
  if (p(i) && p(t)) {
    if (e) {
      let s = {}, n = !1;
      return f(i, (o, a) => {
        !n && (e === a || e === o) ? (n = !0, s = P(s, t)) : n ? s = P(s, { [a]: o }) : s[a] = p(o) ? H(o) : o;
      }), n ? s : P(i, t);
    }
    if (p(t))
      return P(i, t);
  }
  return H(i);
}
function Ui(i) {
  return Nt(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function _i(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function zi(i, t, e, s) {
  const n = k(i), o = k(t);
  return t && o < n ? `${Dt(o, e, s)}+` : Dt(n, e, s);
}
const Dt = (i, t, e) => t ? new W(e).number(i) : i;
function je(i, t) {
  return 1 / i * t;
}
function Zi(i, t) {
  return je(i, t) * 100;
}
async function Ki(i) {
  if (d())
    try {
      await navigator.clipboard.writeText(i);
    } catch {
      document?.execCommand(i);
    }
}
export {
  V as Api,
  qi as ApiMethodItem,
  Xt as BroadcastMessage,
  Tt as Cache,
  Ot as CacheItem,
  vt as CacheStatic,
  at as Cookie,
  te as CookieBlock,
  X as DataStorage,
  gt as Datetime,
  Ye as DatetimeRef,
  pe as DesignAbstract,
  Ze as DesignAsyncAbstract,
  ye as DesignChanged,
  Ke as DesignComp,
  It as DesignComponents,
  Ve as DesignConstructorAbstract,
  Ut as EventItem,
  qe as EventRef,
  r as GEO_FLAG_ICON_NAME,
  b as Geo,
  U as GeoFlag,
  Je as GeoFlagRef,
  W as GeoIntl,
  Se as GeoIntlRef,
  wt as GeoPhone,
  At as GeoRef,
  ze as Global,
  _ as Hash,
  Ji as Icons,
  Bt as ListDataRef,
  $t as Loading,
  ge as Meta,
  ft as MetaManager,
  he as MetaOg,
  ce as MetaOpenGraphAge,
  oe as MetaOpenGraphAvailability,
  ae as MetaOpenGraphCondition,
  ue as MetaOpenGraphGender,
  $ as MetaOpenGraphTag,
  ne as MetaOpenGraphType,
  re as MetaRobots,
  w as MetaTag,
  de as MetaTwitter,
  le as MetaTwitterCard,
  v as MetaTwitterTag,
  Qe as RouterItemRef,
  Ct as ScrollbarWidth,
  Xe as ScrollbarWidthRef,
  q as Translate,
  ai as anyToString,
  me as applyTemplate,
  Ae as arrFill,
  H as copyObject,
  ut as createElement,
  ci as domQuerySelector,
  ui as domQuerySelectorAll,
  se as encodeAttribute,
  li as eventStopPropagation,
  B as executeFunction,
  Qi as executePromise,
  Ce as executeUse,
  si as executeUseGlobalInit,
  f as forEach,
  xe as frame,
  hi as getAttributes,
  We as getBind,
  Bi as getBindRef,
  $e as getClassName,
  di as getClipboardData,
  ct as getColumn,
  Fi as getComputedAsync,
  M as getElement,
  Y as getElementId,
  ee as getElementItem,
  Xi as getElementOrWindow,
  xt as getExp,
  ve as getIndexForRender,
  Be as getItemByPath,
  gi as getKey,
  Et as getLengthOfAllArray,
  fi as getMaxLengthAllArray,
  mi as getMinLengthAllArray,
  yi as getMouseClient,
  Fe as getMouseClientX,
  Ee as getMouseClientY,
  pi as getObjectByKeys,
  $i as getObjectNoUndefined,
  vi as getObjectOrNone,
  bi as getRandomText,
  m as getRef,
  Ht as getRequestString,
  wi as getStepPercent,
  Si as getStepValue,
  ki as goScroll,
  Di as inArray,
  Li as initScrollbarOffset,
  Ci as intersectKey,
  mt as isArray,
  Ii as isDifferent,
  d as isDomRuntime,
  F as isFilled,
  Ni as isFloat,
  Mi as isFunction,
  Oi as isInDom,
  Ai as isIntegerBetween,
  jt as isNull,
  Ti as isNumber,
  p as isObject,
  C as isObjectNotArray,
  j as isSelected,
  xi as isSelectedByList,
  ht as isString,
  Gi as isWindow,
  z as random,
  be as render,
  P as replaceRecursive,
  Wi as replaceTemplate,
  Pi as secondToTime,
  Oe as setApiRefGlobalConditions,
  ie as setElementItem,
  Ei as setRef,
  ji as setValues,
  Hi as splice,
  Re as strFill,
  oi as t,
  R as toArray,
  lt as toBind,
  we as toBinds,
  Nt as toCamelCase,
  Ui as toCamelCaseFirst,
  Ri as toComputed,
  D as toDate,
  _i as toKebabCase,
  k as toNumber,
  zi as toNumberByMax,
  je as toPercent,
  Zi as toPercentBy100,
  L as toRefItem,
  Lt as transformation,
  Pe as uniqueArray,
  Me as useApiRef,
  De as useBroadcastValueRef,
  Te as useCookieRef,
  Ge as useGeoIntlRef,
  ti as useHashRef,
  ei as useLazyRef,
  ii as useLoadingRef,
  ri as useMeta,
  ni as useSessionRef,
  Qt as useStorageRef,
  Ne as useTranslateRef,
  Ki as writeClipboardData
};
