var Pt = Object.defineProperty;
var Wt = (i, t, e) => t in i ? Pt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => Wt(i, typeof t != "symbol" ? t + "" : t, e);
import { geo as Ut } from "@dxtmisha/media";
function L(i, t) {
  return t ? Object.assign({}, i, t) : Object.assign({}, i);
}
function m(i) {
  return !!(i && typeof i == "object");
}
function f(i, t) {
  if (m(i)) {
    const e = [];
    return i instanceof Map ? i.forEach((s, n) => e.push(t(s, n, i))) : Array.isArray(i) ? i.forEach((s, n) => e.push(t(s, n, i))) : Object.entries(i).forEach(
      ([s, n]) => e.push(t(n, s, i))
    ), e.filter((s) => s !== void 0);
  }
  return [];
}
function Et(i, t = "=", e = "&") {
  return f(
    i,
    (s, n) => `${n}${t}${encodeURIComponent(String(s).trim())}`
  ).sort().join(e);
}
function M(i) {
  return i == null;
}
function C(i, t) {
  if (i) {
    if (t && i === "0")
      return !0;
    switch (typeof i) {
      case "bigint":
      case "number":
        return i !== 0;
      case "boolean":
        return i;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(i) ? i.length > 0 : Object.values(i).some((e) => !M(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(i);
      case "undefined":
        return !1;
      default:
        return !!i;
    }
  }
  return !1;
}
function A(i) {
  return m(i) && !Array.isArray(i);
}
function x(i) {
  return typeof i == "string";
}
function H(i) {
  return JSON.parse(JSON.stringify(i));
}
function l() {
  return typeof window != "undefined" && !!window.document;
}
function lt(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function k(i) {
  if (typeof i == "number")
    return i;
  if (!i)
    return 0;
  let t = i.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
function rt(i, t) {
  return M(i) ? !1 : Array.isArray(t) ? t.includes(i) : lt(i) && lt(t) ? k(i) === k(t) : i === t;
}
function at(i) {
  return i instanceof Function || typeof i == "function";
}
function I(i) {
  return at(i) ? i() : i;
}
function nt() {
  return location.href.startsWith("data:");
}
const tt = {};
let dt = "ui-storage";
class T {
  /**
   * Constructor
   * @param name value name/ название значения
   * @param isSession should we use a session/ использовать ли сессию
   */
  constructor(t, e = !1) {
    c(this, "value");
    c(this, "age");
    this.name = t, this.isSession = e;
    const s = `${e ? "session" : "storage"}#${t}`;
    if (s in tt)
      return tt[s];
    this.make(), tt[s] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(t) {
    dt = t;
  }
  /**
   * Getting data from local storage.
   *
   * Получение данных из локального хранилища.
   * @param defaultValue default value/ значение по умолчанию
   * @param cache cache time/ время кэширования
   */
  get(t, e) {
    if (this.value !== null && this.value !== void 0 && this.isCache(e))
      return this.value;
    if (t !== void 0)
      return this.set(t);
  }
  /**
   * Changing data in storage.
   *
   * Изменение данных в хранилище.
   * @param value new values/ новые значения
   */
  set(t) {
    var e;
    return this.value = I(t), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? this.remove() : (e = this.getMethod()) == null || e.setItem(this.getIndex(), JSON.stringify({
      value: this.value,
      age: this.age
    })), this.value;
  }
  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   */
  remove() {
    var t;
    return (t = this.getMethod()) == null || t.removeItem(this.getIndex()), this;
  }
  /**
   * Clearing all data from storage.
   *
   * Очистка всех данных из хранилища.
   */
  update() {
    return this.make(), this;
  }
  /**
   * Checks for storage time limit.
   *
   * Проверяет на лимит времени хранения.
   * @param cache cache time/ время кэширования
   */
  isCache(t) {
    return M(t) || this.age && this.age + t * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.
   *
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (l() && !nt()) {
      const t = this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
      if (t)
        return t;
    }
  }
  /**
   * Getting the storage key name.
   *
   * Получение имени ключа в хранилище.
   */
  getIndex() {
    return `${dt}__${this.name}`;
  }
  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   */
  getValue() {
    var e;
    const t = (e = this.getMethod()) == null ? void 0 : e.getItem(this.getIndex());
    if (t)
      try {
        return JSON.parse(t);
      } catch (s) {
        console.error("DataStorage", s);
      }
  }
  /**
   * Filling in the data from storage.
   *
   * Заполнение данными из хранилища.
   */
  make() {
    const t = this.getValue();
    return t ? (this.value = t.value, this.age = t.age) : (this.value = void 0, this.age = void 0), this;
  }
}
const jt = "geo-code", p = class p {
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
    return this.item.country;
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
    return this.item.standard;
  }
  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   */
  static getFirstDay() {
    return this.item.firstDay;
  }
  /**
   * Full format.
   *
   * Полный формат.
   */
  static getLocation() {
    return this.location;
  }
  /**
   * Obtaining processed data.
   *
   * Получение обработанных данных.
   */
  static getItem() {
    return L(this.item, {
      language: this.language
    });
  }
  /**
   * Returns the full list of countries.
   *
   * Возвращает полный список стран.
   */
  static getList() {
    return Ut;
  }
  /**
   * Returns the data about the country by its full code.
   *
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(t) {
    let e;
    return t && (t.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (e = this.getByCodeFull(t)), !e && t.match(/[A-Z]{2}/) && (e = this.getByCountry(this.toCountry(t))), !e && t.match(/[a-z]{2}/) && (e = this.getByLanguage(this.toLanguage(t)))), this.toFull(H(e != null ? e : this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(t) {
    return this.getList().find(
      (e) => rt(t, [
        `${e.language}-${e.country}`,
        `${e.country}-${e.language}`
      ])
    );
  }
  /**
   * Returns the full data by country.
   *
   * Возвращает полные данные по стране.
   * @param country country/ страна
   */
  static getByCountry(t) {
    return this.getList().find((e) => {
      var s;
      return e.country === t || ((s = e == null ? void 0 : e.countryAlternative) == null ? void 0 : s.find((n) => n === t));
    });
  }
  /**
   * Returns the full data by language.
   *
   * Возвращает полные данные по языку.
   * @param language language/ язык
   */
  static getByLanguage(t) {
    return this.getList().find((e) => {
      var s;
      return e.language === t || ((s = e == null ? void 0 : e.languageAlternative) == null ? void 0 : s.find((n) => n === t));
    });
  }
  /**
   * Retrieving the default timezone.
   *
   * Получение временной зоны по умолчанию
   */
  static getTimezone() {
    return this.timezone;
  }
  /**
   * Retrieving the default timezone (formatted view).
   *
   * Получение временной зоны по умолчанию (отформатированный вид).
   */
  static getTimezoneFormat() {
    const t = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, "0"), e = Math.abs(this.timezone % 60).toString().padStart(2, "0");
    return this.timezone >= 0 ? `-${t}:${e}` : `+${t}:${e}`;
  }
  /**
   * Determines the current country by its full name.
   *
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static find(t) {
    return this.getByCode(t);
  }
  /**
   * Returns a complete string with the country code and language.
   *
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toStandard(t) {
    return `${t.language}-${t.country}`;
  }
  /**
   * Changes the data by the full code.
   *
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   * @param save save the result/ сохранить результат
   */
  static set(t, e) {
    this.location = t, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), e && this.storage.set(this.location);
  }
  /**
   * Changing the default timezone for transmitted dates.
   *
   * Изменение временной зоны по умолчанию для отправляемых дат
   * @param timezone new time zone/ новая временная зона
   */
  static setTimezone(t) {
    this.timezone = t;
  }
  /**
   * Determines the current location.
   *
   * Определяет текущую локацию.
   */
  static findLocation() {
    var t;
    return l() && (this.storage.get() || ((t = document.querySelector("html")) == null ? void 0 : t.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
  }
  /**
   * Determines the current language.
   *
   * Определяет текущий язык.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static findLanguage(t) {
    return t && t.match(/[a-z]{2}/) ? this.toLanguage(t) : this.item.language;
  }
  /**
   * Returns the country code by its full language-country.
   *
   * Возвращает код страны по ее полному язык-страна.
   * @param code country code/ код страна
   */
  static toCountry(t) {
    return t.replace(/[^A-Z]+/g, "");
  }
  /**
   * Returns the language code by its full language-country.<br>
   * Возвращает код языка по его полному язык-страна.
   * @param code country code/ код страна
   */
  static toLanguage(t) {
    return t.replace(/[^a-z]+/g, "");
  }
  /**
   * Adding missing data.<br>
   * Добавление недостающих данных.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toFull(t) {
    return L(t, {
      standard: this.toStandard(t),
      firstDay: (t == null ? void 0 : t.firstDay) || "Mo"
    });
  }
};
c(p, "storage", new T(jt)), c(p, "location"), c(p, "item"), c(p, "language"), c(p, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), p.location = p.findLocation(), p.language = p.findLanguage(p.location), p.item = p.getByCode(p.location);
let w = p;
function It(i) {
  return l() && i === window;
}
function N(i) {
  var t;
  if (l())
    return It(i) ? document.body : x(i) ? (t = document.querySelector(i)) != null ? t : void 0 : i;
}
function gt(i) {
  return It(i) ? i : N(i);
}
function Ht(i) {
  var t;
  return !!((t = N(i)) != null && t.closest("html"));
}
function Z(i) {
  return Array.isArray(i) ? i : [i];
}
class ft {
  /**
   * Classes Constructor
   * @param elementSelector element/ элемент
   * @param type type/ тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics/ объект options
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  constructor(t, e = ["click"], s, n, o) {
    /**
     * Element.
     *
     * Элемент.
     */
    c(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    c(this, "elementControl");
    c(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    c(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    c(this, "listenerRecent", (t) => {
      var e, s;
      Ht(this.elementControl) ? ((e = this.listener) == null || e.call(this.element, t, this.detail), m(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    c(this, "activity", !1);
    c(this, "activityItems", []);
    this.listener = s, this.options = n, this.detail = o, this.element = gt(t), this.elementControl = N(t), this.type = Z(e);
  }
  /**
   * Checks whether event listening is currently enabled.
   *
   * Проверяет, включено ли сейчас прослушивание события.
   */
  isActive() {
    return this.activity;
  }
  getElement() {
    return this.element;
  }
  /**
   * Change of an element for tracking.
   *
   * Изменение элемента для прослеживания.
   * @param elementSelector element/ элемент
   */
  setElement(t) {
    const e = gt(t);
    return this.elementControlEdit || (this.elementControl = N(t)), this.element = e, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(t) {
    return this.elementControl = N(t), this.elementControlEdit = !M(this.elementControl), this.elementControlEdit || (this.elementControl = N(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(t) {
    return this.type = Z(t), this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(t) {
    return this.listener = t, this;
  }
  /**
   * Modifying the options object that defines the characteristics of an object.
   *
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(t) {
    return this.options = t, this.reset(), this;
  }
  /**
   * Modifying a dependent value for the dispatch method.
   *
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(t) {
    return this.detail = t, this;
  }
  /**
   * The method of the EventTarget sends an Event to the object, (synchronously) invoking
   * the affected EventListeners in the appropriate order.
   *
   * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
   * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  dispatch(t = this.detail) {
    return this.type.forEach(
      (e) => {
        var s;
        return (s = this.element) == null ? void 0 : s.dispatchEvent(new CustomEvent(e, { detail: t }));
      }
    ), this;
  }
  /**
   * Starting event listening.
   *
   * Запуск прослушивания события.
   */
  start() {
    return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((t) => {
      this.element && !(t === "resize" && this.makeResize()) && !(t === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(t, this.listenerRecent, this.options), this.activityItems.push({
        element: this.element,
        type: t
      }));
    })), this;
  }
  /**
   * Stopping event listening.
   *
   * Остановка прослушивания события.
   */
  stop() {
    return this.activity && (this.activity = !1, this.activityItems.forEach(({
      element: t,
      type: e,
      listener: s,
      observer: n
    }) => {
      n ? n.disconnect() : s ? t == null || t.removeEventListener(e, s) : t == null || t.removeEventListener(e, this.listenerRecent);
    })), this;
  }
  /**
   * Toggling event handler state.
   *
   * Переключение состояния работы события.
   * @param activity event activation/ активация события
   */
  toggle(t) {
    return t ? this.start() : this.stop();
  }
  /**
   * Overloads the listening events.
   *
   * Перегружает события прослушивания.
   */
  reset() {
    return this.activity && (this.stop(), this.start()), this;
  }
  /**
   * Checks if the ResizeObserver object exists.
   *
   * Проверяет, существует ли объект ResizeObserver.
   */
  isObserver() {
    return "ResizeObserver" in window;
  }
  /**
   * The implementation of the resize event for an element.
   *
   * Реализация события изменения размера для элемента.
   */
  makeResize() {
    if (this.element && this.element instanceof HTMLElement && this.element !== document.body && this.isObserver()) {
      const t = new ResizeObserver(
        (e) => this.listenerRecent(e == null ? void 0 : e[0])
      );
      return t.observe(this.element), this.activityItems.push({
        element: this.element,
        type: "resize",
        observer: t
      }), !0;
    }
    return !1;
  }
  /**
   * Implementation of the scroll event for an element.
   *
   * Реализация события изменения положения скролла для элемента.
   */
  makeScroll() {
    if (this.element) {
      let t = !1;
      const e = (s) => {
        t || (t = !0, requestAnimationFrame(() => {
          this.listenerRecent(s), t = !1;
        }));
      };
      return this.element.addEventListener("scroll", e, this.options), this.element.addEventListener("resize", e, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: e
        },
        {
          element: this.element,
          type: "resize",
          listener: e
        }
      ), !0;
    }
    return !1;
  }
}
const mt = "ui-loading", Y = class Y {
  /**
   * Check if the loader is active now.
   *
   * Проверить, активен ли сейчас загрузчик.
   */
  static is() {
    return this.value > 0;
  }
  /**
   * Shows the loader.
   *
   * Показывает загрузчик.
   */
  static show() {
    this.value++, this.dispatch();
  }
  /**
   * Hides the loader.
   *
   * Скрывает загрузчик.
   */
  static hide() {
    this.is() && (this.value--, this.dispatch());
  }
  /**
   * Event registration to listen for data changes.
   *
   * Регистрация события для прослушивания изменений данных.
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param element element/ элемент
   */
  static registrationEvent(t, e) {
    l() && new ft(window, mt, t).setElementControl(e).start();
  }
  /**
   * Calls the event listener.
   *
   * Вызывает слушателя событий.
   */
  static dispatch() {
    var t;
    (t = this.event) == null || t.dispatch({ loading: this.is() });
  }
};
c(Y, "value", 0), c(Y, "event"), l() && (Y.event = new ft(window, mt));
let R = Y;
class zt {
  constructor() {
    /** Default headers/ Заголовки по умолчанию */
    c(this, "headers", {});
  }
  /**
   * Getting the header for the request.
   *
   * Получение заголовка для запроса.
   * @param value list of headers/ список заголовков
   * @param type type of request/ тип запроса
   */
  get(t, e = "application/json;charset=UTF-8") {
    if (t !== null) {
      const s = L(
        this.headers,
        t
      );
      return C(e) && (s["Content-Type"] = e), s;
    }
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  set(t) {
    return A(t) && (this.headers = t), this;
  }
}
var D = /* @__PURE__ */ ((i) => (i.get = "GET", i.post = "POST", i.put = "PUT", i.delete = "DELETE", i))(D || {});
class Zt {
  constructor() {
    /** Default request data/ Данные запроса по умолчанию */
    c(this, "value");
  }
  /**
   * Checks if default request data exists.
   *
   * Проверяет, существуют ли данные запроса по умолчанию.
   */
  is() {
    return !!this.value;
  }
  /**
   * Gets the default request data.
   *
   * Получает данные запроса по умолчанию.
   */
  get() {
    return this.value;
  }
  /**
   * Adds default data to the request.
   *
   * Добавляет данные по умолчанию к запросу.
   * @param request request data/ данные запроса
   */
  request(t) {
    const e = this.get();
    if (e) {
      if (t instanceof FormData)
        this.addByFormData(t, e);
      else if (A(t))
        return L(e, t);
    }
    return t;
  }
  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  set(t) {
    this.value = t;
  }
  /**
   * Adds default data to FormData request.
   *
   * Добавляет данные по умолчанию к запросу FormData.
   * @param request FormData request/ запрос FormData
   * @param value default values/ значения по умолчанию
   */
  addByFormData(t, e) {
    for (const s in e)
      t.has(s) || t.set(s, e[s]);
  }
}
class Vt {
  constructor() {
    c(this, "value");
  }
  /**
   * Last response data
   *
   * Данные последнего ответа
   */
  get() {
    return this.value;
  }
  /**
   * Returns the execution status code.
   *
   * Возвращает код статуса выполнения.
   */
  getStatus() {
    var t;
    return (t = this.get()) == null ? void 0 : t.status;
  }
  /**
   * Returns the execution status text.
   *
   * Возвращает текст статуса выполнения.
   */
  getStatusText() {
    var t;
    return (t = this.get()) == null ? void 0 : t.statusText;
  }
  /**
   * Returns the script execution error.
   *
   * Возвращает ошибку выполнения скрипта.
   */
  getError() {
    var t;
    return (t = this.get()) == null ? void 0 : t.error;
  }
  /**
   * Returns the data of the last request.
   *
   * Возвращает данные последнего запроса.
   */
  getResponse() {
    var t;
    return (t = this.get()) == null ? void 0 : t.lastResponse;
  }
  /**
   * Returns messages from the last request.
   *
   * Возвращает сообщения от последнего запроса.
   */
  getMessage() {
    var t;
    return ((t = this.get()) == null ? void 0 : t.lastMessage) || "";
  }
  /**
   * Sets the status item data.
   *
   * Устанавливает данные элемента статуса.
   * @param data status item data/ данные элемента статуса
   */
  set(t) {
    return "status" in t && this.setValue("status", t.status), "statusText" in t && this.setValue("statusText", t.statusText), "error" in t && this.setValue("error", t.error), "lastResponse" in t && this.setValue("lastResponse", t.lastResponse), "lastMessage" in t && this.setValue("lastMessage", t.lastMessage), this;
  }
  /**
   * Sets the status code and optional status text.
   *
   * Устанавливает код статуса и необязательный текст статуса.
   * @param status status code/ код статуса
   * @param statusText optional status text/ необязательный текст статуса
   */
  setStatus(t, e) {
    return this.set({
      status: t,
      statusText: e
    }), this;
  }
  /**
   * Sets the error message.
   *
   * Устанавливает сообщение об ошибке.
   * @param error error message/ сообщение об ошибке
   */
  setError(t) {
    return this.set({ error: t }), this;
  }
  /**
   * Sets the data of the last response.
   *
   * Устанавливает данные последнего ответа.
   * @param response response data/ данные ответа
   */
  setLastResponse(t) {
    return t && A(t) && "message" in t && this.setLastMessage(String(t.message)), this.set({ lastResponse: t }), this;
  }
  /**
   * Sets messages from the last request.
   *
   * Устанавливает сообщения от последнего запроса.
   * @param message message text/ текст сообщения
   */
  setLastMessage(t) {
    return this.set({ lastMessage: t }), this;
  }
  /**
   * Sets a specific field in the status item.
   *
   * Устанавливает конкретное поле в элементе статуса.
   * @param name field name/ название поля
   * @param value field value/ значение поля
   */
  setValue(t, e) {
    this.value || (this.value = {}), this.value[t] = e;
  }
}
async function Kt(i) {
  const t = I(i);
  return t instanceof Promise ? await t : t;
}
function J(i, t) {
  return Math.floor(Math.random() * (t - i + 1) + i);
}
const yt = "d-response-loading";
class Yt {
  /**
   * Constructor
   * @param requestDefault default request processor/ процессор запросов по умолчанию
   */
  constructor(t) {
    /** List of first-time API requests/ Список первичных API запросов */
    c(this, "first", []);
    /** Cached responses/ Кешированные ответы */
    c(this, "response", []);
    /** Loading instance/ Экземпляр загрузки */
    c(this, "loading");
    /** Developer mode flag/ Флаг режима разработчика */
    c(this, "devMode", !1);
    this.requestDefault = t;
  }
  /**
   * Checks if there is a global cached request, if there is, returns it.
   *
   * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
   * @param path link to the request/ ссылка на запрос
   * @param method request method/ метод запроса
   * @param request data for the request/ данные для запроса
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  get(t = "", e, s, n) {
    return this.response.find((o) => !this.isDisable(o) && this.isPath(o, t) && e === o.method && this.isFirst(o, n) && this.isResponse(o, s) ? (this.isDevMode(n) && console.warn(`Response type: ${o.path}`), this.first.push(o), !0) : !1);
  }
  /**
   * Returns a list of data about the emulator.
   *
   * Возвращает список данных об эмуляторе.
   */
  getList() {
    return this.response.filter((t) => t.isForGlobal !== !0);
  }
  /**
   * Adding cached requests.
   *
   * Добавление кешированных запросов.
   * @param response data for caching/ данные для кеширования
   */
  add(t) {
    return this.response.push(...Z(t)), this;
  }
  /**
   * Sets developer mode.
   *
   * Устанавливает режим разработчика.
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  setDevMode(t) {
    return this.devMode = t, this;
  }
  /**
   * Выполнение эмулятора, если доступно
   * @param apiFetch property of the request/ свойство запроса
   */
  async emulator(t) {
    const {
      path: e = "",
      method: s = D.get,
      global: n = s === D.get,
      devMode: o = !1
    } = t;
    if (n || this.isDevMode(o)) {
      const a = this.requestDefault.request(t.request), u = this.get(e, s, a, o);
      if (u) {
        const h = await this.fetch(u, a);
        return this.isDevMode(o) && console.warn("Response data:", e, a, h), h;
      }
    }
  }
  /**
   * Checks if the cached item is disabled.
   *
   * Проверяет, отключен ли кешированный элемент.
   * @param item cached item/ кешированный элемент
   */
  isDisable(t) {
    return !!I(t == null ? void 0 : t.disable);
  }
  /**
   * Checks if the path matches the cached one.
   *
   * Проверяет, совпадает ли путь с кешированным.
   * @param item cached item/ кешированный элемент
   * @param path request path/ путь запроса
   */
  isPath(t, e) {
    return e === t.path || !!(t.path instanceof RegExp && e.match(t.path));
  }
  /**
   * Checks if it is developer mode.
   *
   * Проверяет, является ли режимом разработчика.
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  isDevMode(t) {
    return t || this.devMode;
  }
  /**
   * Checks if this is the first request.
   *
   * Проверяет, является ли это первым запросом.
   * @param item cached item/ кешированный элемент
   * @param devMode is it developer mode/ является ли режим разработчика
   */
  isFirst(t, e) {
    return this.first.indexOf(t) === -1 || this.isDevMode(e);
  }
  /**
   * Checks if the request matches the cached one.
   *
   * Проверяет, совпадает ли запрос с кешированным.
   * @param item cached item/ кешированный элемент
   * @param request request data/ данные запроса
   */
  isResponse(t, e) {
    const s = this.requestDefault.request(t == null ? void 0 : t.request);
    return e === s || s === "*any" || C(e) && C(s) && A(e) && A(s) && !(e instanceof FormData) && !(s instanceof FormData) && Object.values(e).length === Object.values(s).length && Object.entries(s).reduce(
      (n, [o, a]) => n && (a === (e == null ? void 0 : e[o]) || a === "*any"),
      !0
    );
  }
  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  fetch(t, e) {
    return this.startResponseLoading(), new Promise((s) => {
      Kt(
        at(t.response) ? t.response(e) : t.response
      ).then((n) => {
        t != null && t.lag ? (R.show(), setTimeout(() => {
          this.stopResponseLoading(), s(n), R.hide();
        }, J(0, 2e3))) : (this.stopResponseLoading(), s(n));
      });
    });
  }
  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  startResponseLoading() {
    this.loading && clearTimeout(this.loading), l() && document.body.classList.add(yt);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  stopResponseLoading() {
    this.loading = setTimeout(() => {
      this.loading = void 0, l() && document.body.classList.remove(yt);
    }, 1200);
  }
}
class qt {
  constructor() {
    /** Function for call before the request/ Функция для вызова перед запросом */
    c(this, "callback");
    /** Function for call after the request/ Функция для вызова после запроса */
    c(this, "callbackEnd");
    /** Is the preparation in progress/ Идет ли подготовка */
    c(this, "loading", !1);
  }
  /**
   * Preparation before executing the request.
   *
   * Подготовка перед выполнением запроса.
   * @param active is preparation active/ активна ли подготовка
   */
  async make(t) {
    if (t && this.callback)
      return this.go();
  }
  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param active is preparation active/ активна ли подготовка
   * @param query data received in the request/ данные, полученные в запросе
   */
  async makeEnd(t, e) {
    let s = {};
    return t && this.callbackEnd && (s = await this.callbackEnd(e)), s;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  set(t) {
    return this.callback = t, this;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  setEnd(t) {
    return this.callbackEnd = t, this;
  }
  /**
   * To execute preparation.
   *
   * Выполнить подготовку.
   */
  async go() {
    return new Promise((t) => {
      this.loading ? setTimeout(() => this.go().then(t), 160) : this.callback ? (this.loading = !0, this.callback().then(() => {
        this.loading = !1, t();
      })) : t();
    });
  }
  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param query data received in the request/ данные, полученные в запросе
   */
  async end(t) {
    let e = {};
    return this.callbackEnd && (e = await this.callbackEnd(t)), e;
  }
}
const b = class b {
  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  static isLocalhost() {
    return typeof location == "undefined" || location.hostname === "localhost";
  }
  /**
   * Returns the status of the last request.
   *
   * Возвращает статус последнего запроса.
   */
  static getStatus() {
    return this.status;
  }
  /**
   * Getting the response handler.
   *
   * Получение обработчика ответа.
   */
  static getResponse() {
    return this.response;
  }
  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  static getUrl(t, e = !0) {
    return `${e ? this.url : ""}${t}`.replace("{locale}", w.getLocation()).replace("{country}", w.getCountry()).replace("{language}", w.getLanguage());
  }
  /**
   * Getting data for the body.
   *
   * Получение данных для тела.
   * @param request this request/ данный запрос
   * @param method method for request/ метод запрос
   */
  static getBody(t = {}, e = D.get) {
    if (t instanceof FormData)
      return t;
    if (e !== D.get && C(t))
      return x(t) ? t : JSON.stringify(t);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(t, e = "", s = D.get) {
    if (s === D.get) {
      const n = e.match(/\?/) ? "&" : "?", o = typeof t == "object" ? Et(t) : t;
      if (C(o))
        return `${n}${o}`;
    }
    return "";
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(t) {
    return this.headers.set(t), b;
  }
  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(t) {
    return this.requestDefault.set(t), b;
  }
  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(t) {
    return this.url = t, b;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(t) {
    return this.preparation.set(t), b;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(t) {
    return this.preparation.setEnd(t), b;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(t) {
    return x(t) ? await this.fetch({
      path: t
    }) : await this.fetch(t);
  }
  /**
   * Sends a get method request.
   *
   * Отправляет запрос метода get.
   * @param request list of parameters/ список параметров
   */
  static get(t) {
    return this.request(L(t, {
      method: D.get
    }));
  }
  /**
   * Sends a post method request.
   *
   * Отправляет запрос метода post.
   * @param request list of parameters/ список параметров
   */
  static post(t) {
    return this.request(L(t, {
      method: D.post
    }));
  }
  /**
   * Sends a put method request.
   *
   * Отправляет запрос метода put.
   * @param request list of parameters/ список параметров
   */
  static put(t) {
    return this.request(L(t, {
      method: D.put
    }));
  }
  /**
   * Sends a delete method request.
   *
   * Отправляет запрос метода delete.
   * @param request list of parameters/ список параметров
   */
  static delete(t) {
    return this.request(L(t, {
      method: D.delete
    }));
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param apiFetch property of the request/ свойство запроса
   */
  static async fetch(t) {
    const {
      toData: e = !0,
      hideError: s = !1,
      queryReturn: n = void 0,
      globalPreparation: o = !0,
      globalEnd: a = !0
    } = t, u = await this.response.emulator(t);
    if (u)
      return u;
    let h = {};
    R.show();
    try {
      await this.preparation.make(o);
      const g = await this.makeQuery(t), d = await this.preparation.makeEnd(a, g);
      if (this.status.setStatus(
        g.status,
        g.statusText
      ), d != null && d.reset)
        return R.hide(), await this.fetch(t);
      h = await this.readData(
        g,
        n,
        d
      );
    } catch (g) {
      s || console.error("Api: ", g), this.status.setError(String(g));
    }
    return R.hide(), this.makeData(h, e);
  }
  /**
   * Reading data from the response.
   *
   * Чтение данных из ответа.
   * @param query response from the server/ ответ от сервера
   * @param queryReturn custom function for reading data/ кастомная функция для чтения данных
   * @param end finalization data/ данные финализации
   */
  static async readData(t, e, s) {
    var n;
    return e ? await e(t) : "data" in s ? s.data : ((n = t.headers.get("Content-Type")) != null ? n : "").match("application/json") ? await t.json() : { data: await t.text() };
  }
  /**
   * Executing the request.
   *
   * Выполнение запроса.
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeQuery(t) {
    const e = this.requestDefault.request(t.request), {
      api: s = !0,
      path: n = "",
      pathFull: o = void 0,
      method: a = D.get,
      headers: u = {},
      type: h = "application/json;charset=UTF-8",
      init: g = {}
    } = t, d = o != null ? o : this.getUrl(n, s), v = `${d}${this.getBodyForGet(e, d, a)}`, V = this.headers.get(u, h), P = L(g, {
      method: a,
      body: this.getBody(e, a)
    });
    return V && (P.headers = V), await fetch(v, P);
  }
  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  static makeData(t, e) {
    if (this.status.setLastResponse(t), t && e && A(t) && "data" in t) {
      if (A(t.data)) {
        const s = L(t.data);
        return "success" in t && (s.success = t.success), s;
      }
      return t.data;
    }
    return t;
  }
};
c(b, "url", "/api/"), c(b, "headers", new zt()), c(b, "requestDefault", new Zt()), c(b, "status", new Vt()), c(b, "response", new Yt(b.requestDefault)), c(b, "preparation", new qt());
let z = b;
class ke {
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
    if (this.callback = e, l())
      try {
        this.channel = new BroadcastChannel(`${Jt()}__${t}`), this.channel.onmessage = this.update;
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
const Jt = () => new T("__broadcast-name").get(() => `name_${J(1e6, 9999999)}`);
class Mt {
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
class Qt {
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
    return this.getCacheItem(t, e).getCache(s != null ? s : []);
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
    return await this.getCacheItem(t, e).getCacheAsync(s != null ? s : []);
  }
  /**
   * Returns an instance of the object for working with the cache element.
   *
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   */
  getCacheItem(t, e) {
    return t in this.cache || (this.cache[t] = new Mt(e)), this.cache[t];
  }
}
const O = class O {
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
c(O, "cache"), O.cache = new Qt();
let $t = O;
function Bt(i, t = !1) {
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
          if (t && l() && typeof (window == null ? void 0 : window[e]) == "function")
            return window[e];
        }
    }
  }
  return i;
}
const Xt = "cookie-block";
class Ft {
  /**
   * Obtaining status.
   *
   * Получение статуса.
   */
  static get() {
    var t;
    return (t = this.storage.get()) != null ? t : !1;
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
c(Ft, "storage", new T(Xt));
const X = {}, ht = class ht {
  constructor(t) {
    c(this, "value");
    c(this, "options", {});
    if (this.name = t, t in et)
      return et[t];
    this.value = X == null ? void 0 : X[t], et[t] = this;
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
    var t, e;
    return (e = (t = this.options) == null ? void 0 : t.age) != null ? e : 10080 * 60;
  }
  /**
   * Update cookie data.
   *
   * Обновление данных cookie.
   */
  update() {
    var t, e, s, n, o;
    if (l() && !nt() && !Ft.get()) {
      const a = String((t = this.value) != null ? t : "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(a)}`,
        `max-age=${a === "" ? "-1" : this.getAge()}`,
        `SameSite=${(s = (e = this.options) == null ? void 0 : e.sameSite) != null ? s : "strict"}`,
        ...(o = (n = this.options) == null ? void 0 : n.arguments) != null ? o : []
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
      e && C(s) && (X[e] = Bt(s));
    }
  }
};
l() && !nt() && ht.updateData();
let pt = ht;
const et = {};
function B(i) {
  var n, o, a, u, h, g, d, v;
  if (i instanceof Date)
    return i;
  if (M(i))
    return /* @__PURE__ */ new Date();
  if (typeof i == "number")
    return new Date(i);
  let t = i, e = w.getTimezoneFormat().trim();
  i.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (V, P, G) => (t = P, e = G.trim(), V));
  const s = (v = (d = (g = (h = (u = (a = (o = (n = /^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) != null ? n : /^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) != null ? o : /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) != null ? a : /^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) != null ? u : /^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) != null ? h : /^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) != null ? g : /^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) != null ? d : /^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) != null ? v : t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s.trim()}${e}`);
}
function _t(i, t) {
  return f(i, (e) => e == null ? void 0 : e[t]);
}
class Q {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = w.getLocation()) {
    c(this, "geo");
    this.geo = w.find(t);
    const e = this.getLocation();
    if (e in it)
      return it[e];
    it[e] = this;
  }
  /**
   * Returns an instance of the class according to the specified country code.
   *
   * Возвращает экземпляр класса по указанному коду страны.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getInstance(t = w.getLocation()) {
    return new Q(t);
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
      l() && (t ? n = new Intl.DisplayNames(this.getLocation(), s).of(t) : s.type === "language" ? n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country)));
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
    return ((n = (s = this.numberObject(e)) == null ? void 0 : s.format) == null ? void 0 : n.call(s, k(t))) || t.toString();
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
      return a ? _t(
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
    var s, n, o, a, u;
    return ((u = (a = (o = (n = (s = this.numberObject({
      style: "currency",
      currencyDisplay: e,
      currency: t
    })) == null ? void 0 : s.formatToParts) == null ? void 0 : n.call(s, 100)) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (h) => h.type === "currency")) == null ? void 0 : u.value) || t;
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
    if (s > 1024 && x(e))
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
    var u;
    const o = k(t), a = e.split("|");
    if (a.length > 1)
      try {
        if (l()) {
          const g = new Intl.PluralRules(this.getLocation(), s).select(o);
          let d;
          switch (g) {
            case "zero":
              d = a[a.length - 1];
              break;
            case "one":
              d = a == null ? void 0 : a[0];
              break;
            case "two":
              d = a == null ? void 0 : a[1];
              break;
            case "few":
              d = a != null && a[3] ? a == null ? void 0 : a[2] : a == null ? void 0 : a[1];
              break;
            case "many":
              d = (a == null ? void 0 : a[3]) || (a == null ? void 0 : a[2]) || (a == null ? void 0 : a[1]);
              break;
            case "other":
              a.length === 6 ? d = a[a.length - 2] : d = a[a.length - 1];
              break;
          }
          return `${this.number(o, n)} ${d != null ? d : ""}`.trim();
        }
      } catch (h) {
        console.error("plural: ", h);
      }
    return `${this.number(o, n)} ${(u = a == null ? void 0 : a[0]) != null ? u : ""}`.trim();
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
    const o = B(t), a = typeof s == "string", u = this.dateOptions(e, a ? s : "short");
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
    const n = B(t), o = s || /* @__PURE__ */ new Date(), a = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let u = "second", h = (n.getTime() - o.getTime()) / 1e3;
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
  relativeLimit(t, e, s, n, o, a, u) {
    const h = B(t), g = s || /* @__PURE__ */ new Date(), d = new Date(g), v = new Date(g);
    return d.setDate(g.getDate() - e), v.setDate(g.getDate() + e), h >= d && h <= v ? this.relative(
      h,
      n,
      g
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
    const n = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    try {
      if (l())
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
      if (l())
        return Intl.DateTimeFormat(this.getLocation(), { month: e || "long" }).format(B(t));
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
      if (l()) {
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
      if (l())
        return Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }).format(B(t));
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
      if (l()) {
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
    if (l()) {
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
      if (l())
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
const it = {};
class ct {
  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(t, e = "date", s = w.getLocation()) {
    c(this, "date");
    c(this, "hour24", !1);
    c(this, "watch");
    this.type = e, this.code = s, this.date = B(t);
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
    const n = this.toTimeZoneHourFormat(s), o = s.toString().match(/.\d+/) ? "30" : "00";
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
    const e = new ct(this.date, this.type, "en-GB"), s = [];
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
    return this.date = B(t), this.update(), this;
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
   * Returns the time zone hour format.
   *
   * Возвращает часовой формат временной зоны.
   * @param hour hour/ час
   */
  toTimeZoneHourFormat(t) {
    l() && this.getIntl().number(Math.trunc(t), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    });
    let e = Math.trunc(t).toString();
    return e.length < 2 && (e = `0${e}`), `${t >= 0 ? "+" : "-"}${e}`;
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
class Ae {
  /**
   * Constructor
   * @param element HTML element to capture/ HTML элемент для захвата
   */
  constructor(t) {
    this.element = t;
  }
  /**
   * Takes a screenshot of the element.
   *
   * Делает скриншот элемента.
   */
  take() {
    return new Promise((t, e) => {
      const {
        width: s,
        height: n
      } = this.element.getBoundingClientRect();
      if (s === 0 || n === 0)
        return e(new Error("Element has no dimensions"));
      const o = document.createElement("canvas"), a = o.getContext("2d");
      if (!a)
        return e(new Error("Could not get canvas context"));
      const u = window.devicePixelRatio || 1;
      o.width = s * u, o.height = n * u, o.style.width = `${s}px`, o.style.height = `${n}px`, a.scale(u, u);
      const h = this.getStyles(), g = this.element.outerHTML, d = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${n}">
          <foreignObject x="0" y="0" width="100%" height="100%">
            <style>${h}</style>
            <div xmlns="http://www.w3.org/1999/xhtml">${g}</div>
          </foreignObject>
        </svg>
      `, v = new Image(), P = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(d)));
      v.onload = () => {
        a.drawImage(v, 0, 0, s, n), t(o.toDataURL("image/png"));
      }, v.onerror = (G) => {
        console.error("Screenshot failed", {
          error: G,
          svg: d
        }), e(new Error("Failed to load SVG image for screenshot. See console for details."));
      }, v.src = P;
    });
  }
  /**
   * Takes a screenshot and downloads it.
   *
   * Делает скриншот и скачивает его.
   * @param filename name of the file to download/ имя файла для скачивания
   */
  async download(t = "screenshot.png") {
    const e = await this.take(), s = document.createElement("a");
    s.href = e, s.download = t, document.body.appendChild(s), s.click(), document.body.removeChild(s);
  }
  /**
   * Gathers all CSS styles from the document's stylesheets.
   *
   * Собирает все стили CSS из таблиц стилей документа.
   */
  getStyles() {
    let t = "";
    try {
      for (const e of Array.from(document.styleSheets))
        try {
          for (const s of Array.from(e.cssRules))
            t += s.cssText;
        } catch (s) {
          console.warn("Could not read CSS rules from a stylesheet due to CORS.", s);
        }
    } catch (e) {
      console.error("Could not access stylesheets.", e);
    }
    return t;
  }
}
const r = "f", U = class U {
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
        icon: (s = U.flags) == null ? void 0 : s[e.country],
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
      const s = new U(e.standard).get(e.standard);
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
    return t != null ? t : Object.keys(U.flags);
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
c(U, "flags", {
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
let wt = U;
const j = class j {
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
      var a;
      n === "" && o in e ? (s = e[o], e = (a = s == null ? void 0 : s.next) != null ? a : {}) : n += o;
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
    if (C(t) && Array.isArray(e) && e.length > 0) {
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
    const t = f(w.getList(), (e) => {
      if (e != null && e.phoneMask)
        return {
          phone: (e == null ? void 0 : e.phoneCode) && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (e == null ? void 0 : e.phoneWithin) || 0,
          mask: Z(e.phoneMask),
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
          var a;
          o in s || (s[o] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), n = s[o], s = (a = n == null ? void 0 : n.next) != null ? a : {};
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
c(j, "list", []), c(j, "map", {}), j.makeList(), j.makeMap();
let bt = j, W;
class Ne {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(t) {
    return W && (W == null ? void 0 : W[t]);
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(t) {
    W === void 0 && (W = L(t));
  }
}
const F = class F {
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
    const s = I(e);
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
    var s;
    t in this.watch ? (s = this.watch[t]) == null || s.push(e) : this.watch[t] = [e];
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
      (...e) => (t[String(e[1])] = Bt(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Et(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
      ((n = this.hash) == null ? void 0 : n[s]) !== (t == null ? void 0 : t[s]) && e.forEach((o) => o(t[s]));
    });
  }
};
c(F, "hash", {}), c(F, "watch", {}), c(F, "block", !1), l() && (F.reload(), addEventListener("hashchange", () => F.reload()));
let vt = F;
const st = "__UI_ICON", St = 320, Dt = "--LOAD--", q = class q {
  /**
   * Checks if the given icon is in the list of connected icons.
   *
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name/ название иконки
   */
  static is(t) {
    return t in this.icons || this.getName(t) in this.icons;
  }
  /**
   * Returns the icon by the name.
   *
   * Возвращает иконку по названию.
   * @param index icon name/ название иконки
   * @param url path to the storage location of the icon, if the icon does not exist/
   * путь к месту хранения иконки, если иконка не существует
   * @param wait waiting time for picture loading/
   * время ожидания загрузки картинки
   */
  static async get(t, e = "", s = 1e3 * 60 * 3) {
    var o, a, u, h;
    const n = (h = (u = (o = this.icons) == null ? void 0 : o[this.getName(t)]) != null ? u : (a = this.icons) == null ? void 0 : a[t]) != null ? h : `${t.replace(/^@/, e != null ? e : this.url)}.svg`;
    return typeof n == "string" ? n === Dt && s > 0 ? (await this.wait(), this.get(t, e, s - St)) : n : at(n) ? await n() : await n;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return f(this.icons, (t, e) => e.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${z.isLocalhost(), ""}${this.url}`;
  }
  /**
   * Adding custom icons.
   *
   * Добавление пользовательских иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static add(t, e) {
    this.icons[this.getName(t)] = e;
  }
  /**
   * Adding custom icons in loading mode.
   *
   * Добавление пользовательских иконок в режиме загрузки.
   * @param index icon name/ название иконки
   */
  static addLoad(t) {
    this.icons[this.getName(t)] = Dt;
  }
  /**
   * Adding custom global icons.
   *
   * Добавление пользовательских глобальных иконок.
   * @param index icon name/ название иконки
   * @param file path to the file/ путь к файлу
   */
  static addGlobal(t, e) {
    this.icons[this.getName(t)] = `${this.getUrlGlobal()}${e}`;
  }
  /**
   * Adding an icon by the list.
   *
   * Добавление иконки по списку.
   * @param list list of icons/ список иконки
   */
  static addByList(t) {
    f(t, (e, s) => this.add(s, e));
  }
  /**
   * Changes the file path.
   *
   * Изменяет путь к файлу.
   * @param url new file path/ новый путь к файлу
   */
  static setUrl(t) {
    this.url = t;
  }
  /**
   * Returns the icon name.
   *
   * Возвращает название иконки.
   * @param index icon name/ название иконки
   */
  static getName(t) {
    return `@${t}`;
  }
  /**
   * Script execution delay.
   *
   * Задержка выполнения скрипта.
   */
  static wait() {
    return new Promise((t) => setTimeout(() => t(), St));
  }
};
c(q, "icons", {}), c(q, "url", "/icons/"), l() && (st in window || (window[st] = {}), q.icons = window[st]);
let Ct = q;
function Ot(i, t, e) {
  var s, n;
  return (n = (s = N(i)) == null ? void 0 : s[t]) != null ? n : e;
}
function Tt(i, t, e) {
  const s = N(i);
  if (s) {
    const n = Ot(s, t);
    if (m(n) && m(e))
      f(e, (o, a) => {
        n[a] = I(o);
      });
    else {
      const o = I(e);
      !(t in s) && typeof o == "string" ? s.setAttribute(t.toString(), o) : s[t] = I(e);
    }
  }
  return s;
}
function _(i, t = "div", e, s) {
  if (!l())
    return;
  const n = document.createElement(t);
  return typeof e == "function" ? e(n) : A(e) && f(e, (o, a) => {
    Tt(n, a, o);
  }), i == null || i.insertBefore(n, s != null ? s : null), n;
}
function Gt(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").trim();
}
class ut {
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
    if (!l())
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
    else if (l()) {
      const o = { content: s };
      this.isProperty ? o.property = t : o.name = t, _(document.head, "meta", o);
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
    const e = Gt((s = this.items[t]) != null ? s : "");
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
var S = /* @__PURE__ */ ((i) => (i.description = "description", i.keywords = "keywords", i.canonical = "canonical", i.robots = "robots", i.author = "author", i))(S || {}), te = /* @__PURE__ */ ((i) => (i.indexFollow = "index, follow", i.noIndexFollow = "noindex, follow", i.indexNoFollow = "index, nofollow", i.noIndexNoFollow = "noindex, nofollow", i.noArchive = "noarchive", i.noSnippet = "nosnippet", i.noImageIndex = "noimageindex", i.images = "images", i.noTranslate = "notranslate", i.noPreview = "nopreview", i.textOnly = "textonly", i.noIndexSubpages = "noindex, noarchive", i.none = "none", i))(te || {}), y = /* @__PURE__ */ ((i) => (i.title = "og:title", i.type = "og:type", i.url = "og:url", i.image = "og:image", i.description = "og:description", i.locale = "og:locale", i.siteName = "og:site_name", i.localeAlternate = "og:locale:alternate", i.imageUrl = "og:image:url", i.imageSecureUrl = "og:image:secure_url", i.imageType = "og:image:type", i.imageWidth = "og:image:width", i.imageHeight = "og:image:height", i.imageAlt = "og:image:alt", i.video = "og:video", i.videoUrl = "og:video:url", i.videoSecureUrl = "og:video:secure_url", i.videoType = "og:video:type", i.videoWidth = "og:video:width", i.videoHeight = "og:video:height", i.audio = "og:audio", i.audioSecureUrl = "og:audio:secure_url", i.audioType = "og:audio:type", i.articlePublishedTime = "article:published_time", i.articleModifiedTime = "article:modified_time", i.articleExpirationTime = "article:expiration_time", i.articleAuthor = "article:author", i.articleSection = "article:section", i.articleTag = "article:tag", i.bookAuthor = "book:author", i.bookIsbn = "book:isbn", i.bookReleaseDate = "book:release_date", i.bookTag = "book:tag", i.musicDuration = "music:duration", i.musicAlbum = "music:album", i.musicAlbumDisc = "music:album:disc", i.musicAlbumTrack = "music:album:track", i.musicMusician = "music:musician", i.musicSong = "music:song", i.musicSongDisc = "music:song:disc", i.musicSongTrack = "music:song:track", i.musicReleaseDate = "music:release_date", i.musicCreator = "music:creator", i.videoActor = "video:actor", i.videoActorRole = "video:actor:role", i.videoDirector = "video:director", i.videoWriter = "video:writer", i.videoDuration = "video:duration", i.videoReleaseDate = "video:release_date", i.videoTag = "video:tag", i.videoSeries = "video:series", i.profileFirstName = "profile:first_name", i.profileLastName = "profile:last_name", i.profileUsername = "profile:username", i.profileGender = "profile:gender", i.productBrand = "product:brand", i.productAvailability = "product:availability", i.productCondition = "product:condition", i.productPriceAmount = "product:price:amount", i.productPriceCurrency = "product:price:currency", i.productRetailerItemId = "product:retailer_item_id", i.productCategory = "product:category", i.productEan = "product:ean", i.productIsbn = "product:isbn", i.productMfrPartNo = "product:mfr_part_no", i.productUpc = "product:upc", i.productWeightValue = "product:weight:value", i.productWeightUnits = "product:weight:units", i.productColor = "product:color", i.productMaterial = "product:material", i.productPattern = "product:pattern", i.productAgeGroup = "product:age_group", i.productGender = "product:gender", i))(y || {}), ee = /* @__PURE__ */ ((i) => (i.website = "website", i.article = "article", i.video = "video.other", i.videoTvShow = "video.tv_show", i.videoEpisode = "video.episode", i.videoMovie = "video.movie", i.musicAlbum = "music.album", i.musicPlaylist = "music.playlist", i.musicSong = "music.song", i.musicRadioStation = "music.radio_station", i.app = "app", i.product = "product", i.business = "business.business", i.place = "place", i.event = "event", i.profile = "profile", i.book = "book", i))(ee || {}), ie = /* @__PURE__ */ ((i) => (i.inStock = "in stock", i.outOfStock = "out of stock", i.preorder = "preorder", i.backorder = "backorder", i.discontinued = "discontinued", i.pending = "pending", i))(ie || {}), se = /* @__PURE__ */ ((i) => (i.new = "new", i.used = "used", i.refurbished = "refurbished", i))(se || {}), re = /* @__PURE__ */ ((i) => (i.newborn = "newborn", i.infant = "infant", i.toddler = "toddler", i.kids = "kids", i.adult = "adult", i))(re || {}), ne = /* @__PURE__ */ ((i) => (i.female = "female", i.male = "male", i.unisex = "unisex", i))(ne || {}), $ = /* @__PURE__ */ ((i) => (i.card = "twitter:card", i.site = "twitter:site", i.creator = "twitter:creator", i.url = "twitter:url", i.title = "twitter:title", i.description = "twitter:description", i.image = "twitter:image", i.imageAlt = "twitter:image:alt", i.imageSrc = "twitter:image:src", i.imageWidth = "twitter:image:width", i.imageHeight = "twitter:image:height", i.label1 = "twitter:label1", i.data1 = "twitter:data1", i.label2 = "twitter:label2", i.data2 = "twitter:data2", i.appNameIphone = "twitter:app:name:iphone", i.appIdIphone = "twitter:app:id:iphone", i.appUrlIphone = "twitter:app:url:iphone", i.appNameIpad = "twitter:app:name:ipad", i.appIdIpad = "twitter:app:id:ipad", i.appUrlIpad = "twitter:app:url:ipad", i.appNameGooglePlay = "twitter:app:name:googleplay", i.appIdGooglePlay = "twitter:app:id:googleplay", i.appUrlGooglePlay = "twitter:app:url:googleplay", i.player = "twitter:player", i.playerWidth = "twitter:player:width", i.playerHeight = "twitter:player:height", i.playerStream = "twitter:player:stream", i.playerStreamContentType = "twitter:player:stream:content_type", i))($ || {}), oe = /* @__PURE__ */ ((i) => (i.summary = "summary", i.summaryLargeImage = "summary_large_image", i.app = "app", i.player = "player", i.product = "product", i.gallery = "gallery", i.photo = "photo", i.leadGeneration = "lead_generation", i.audio = "audio", i.poll = "poll", i))(oe || {});
class ae extends ut {
  constructor() {
    super(Object.values(y), !0);
  }
  /**
   * Gets the Open Graph title.
   *
   * Получает заголовок Open Graph.
   */
  getTitle() {
    return this.get(y.title);
  }
  /**
   * Gets the Open Graph type.
   *
   * Получает тип Open Graph.
   */
  getType() {
    return this.get(y.type);
  }
  /**
   * Gets the Open Graph URL.
   *
   * Получает URL Open Graph.
   */
  getUrl() {
    return this.get(y.url);
  }
  /**
   * Gets the Open Graph image URL.
   *
   * Получает URL изображения Open Graph.
   */
  getImage() {
    return this.get(y.image);
  }
  /**
   * Gets the Open Graph description.
   *
   * Получает описание Open Graph.
   */
  getDescription() {
    return this.get(y.description);
  }
  /**
   * Gets the Open Graph locale.
   *
   * Получает локаль Open Graph.
   */
  getLocale() {
    return this.get(y.locale);
  }
  /**
   * Gets the Open Graph site name.
   *
   * Получает название сайта Open Graph.
   */
  getSiteName() {
    return this.get(y.siteName);
  }
  /**
   * Sets the Open Graph title.
   *
   * Устанавливает заголовок Open Graph.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set(y.title, t);
  }
  /**
   * Sets the Open Graph type.
   *
   * Устанавливает тип Open Graph.
   * @param type type / тип
   */
  setType(t) {
    return this.set(y.type, t);
  }
  /**
   * Sets the Open Graph URL.
   *
   * Устанавливает URL Open Graph.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set(y.url, t);
  }
  /**
   * Sets the Open Graph image URL.
   *
   * Устанавливает URL изображения Open Graph.
   * @param url image URL / URL изображения
   */
  setImage(t) {
    return this.set(y.image, t);
  }
  /**
   * Sets the Open Graph description.
   *
   * Устанавливает описание Open Graph.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set(y.description, t);
  }
  /**
   * Sets the Open Graph locale.
   *
   * Устанавливает локаль Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   */
  setLocale(t) {
    return this.set(y.locale, t);
  }
  /**
   * Sets the Open Graph site name.
   *
   * Устанавливает название сайта Open Graph.
   * @param siteName site name / название сайта
   */
  setSiteName(t) {
    return this.set(y.siteName, t);
  }
}
class ce extends ut {
  constructor() {
    super(Object.values($));
  }
  /**
   * Gets the Twitter Card type.
   *
   * Получает тип Twitter Card.
   */
  getCard() {
    return this.get($.card);
  }
  /**
   * Gets the website or brand @username.
   *
   * Получает аккаунт сайта или бренда (@username).
   */
  getSite() {
    return this.get($.site);
  }
  /**
   * Gets the content creator @username.
   *
   * Получает автора контента (@username).
   */
  getCreator() {
    return this.get($.creator);
  }
  /**
   * Gets the page URL.
   *
   * Получает URL страницы.
   */
  getUrl() {
    return this.get($.url);
  }
  /**
   * Gets the card title.
   *
   * Получает заголовок карточки.
   */
  getTitle() {
    return this.get($.title);
  }
  /**
   * Gets the card description.
   *
   * Получает описание карточки.
   */
  getDescription() {
    return this.get($.description);
  }
  /**
   * Gets the card image URL.
   *
   * Получает URL изображения карточки.
   */
  getImage() {
    return this.get($.image);
  }
  /**
   * Sets the Twitter Card type.
   *
   * Устанавливает тип Twitter Card.
   * @param card card type / тип карточки
   */
  setCard(t) {
    return this.set($.card, t), this;
  }
  /**
   * Sets the website or brand @username.
   *
   * Устанавливает аккаунт сайта или бренда (@username).
   * @param site @username / аккаунт
   */
  setSite(t) {
    return this.set($.site, t), this;
  }
  /**
   * Sets the content creator @username.
   *
   * Устанавливает автора контента (@username).
   * @param creator @username / аккаунт автора
   */
  setCreator(t) {
    return this.set($.creator, t), this;
  }
  /**
   * Sets the page URL.
   *
   * Устанавливает URL страницы.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set($.url, t), this;
  }
  /**
   * Sets the card title.
   *
   * Устанавливает заголовок карточки.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set($.title, t), this;
  }
  /**
   * Sets the card description.
   *
   * Устанавливает описание карточки.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set($.description, t), this;
  }
  /**
   * Sets the card image URL.
   *
   * Устанавливает URL изображения карточки.
   * @param image image URL / URL изображения
   */
  setImage(t) {
    return this.set($.image, t), this;
  }
}
class Ee extends ut {
  /**
   * Creates an instance of Meta with integrated Open Graph and Twitter Card support.
   *
   * Создает экземпляр Meta с интегрированной поддержкой Open Graph и Twitter Card.
   */
  constructor() {
    super(Object.values(S));
    c(this, "suffix");
    c(this, "og");
    c(this, "twitter");
    this.og = new ae(), this.twitter = new ce();
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
    return l() ? document.title.replace(this.getSuffix(), "").trim() : "";
  }
  /**
   * Gets the keywords meta tag.
   *
   * Получает мета-тег keywords.
   */
  getKeywords() {
    return this.get(S.keywords);
  }
  /**
   * Gets the description meta tag.
   *
   * Получает мета-тег description.
   */
  getDescription() {
    return this.get(S.description);
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
    return this.get(S.canonical);
  }
  /**
   * Gets the robots meta tag value.
   *
   * Получает значение мета-тега robots.
   */
  getRobots() {
    return this.get(S.robots);
  }
  /**
   * Gets the author meta tag.
   *
   * Получает мета-тег author.
   */
  getAuthor() {
    return this.get(S.author);
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
    if (l()) {
      const s = C(e) ? `${e}${this.getSuffix()}` : this.suffix ? this.suffix : "";
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
    return this.set(S.keywords, Z(e).join(", ")), this;
  }
  /**
   * Sets the description meta tag.
   *
   * Устанавливает мета-тег description.
   * @param description page description / описание страницы
   */
  setDescription(e) {
    return this.set(S.description, e), this;
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
    return this.set(S.canonical, e), this.og.setUrl(e), this.twitter.setUrl(e), this;
  }
  /**
   * Sets the robots meta tag.
   *
   * Устанавливает мета-тег robots.
   * @param robots robots directive / директива robots
   */
  setRobots(e) {
    return this.set(S.robots, e), this;
  }
  /**
   * Sets the author meta tag.
   *
   * Устанавливает мета-тег author.
   * @param author author name / имя автора
   */
  setAuthor(e) {
    return this.set(S.author, e), this;
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
    return C(this.suffix) ? ` - ${this.suffix}` : "";
  }
}
class ot {
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
    var e;
    const t = (e = this.storage.get()) != null ? e : -1;
    if (!this.calculate && t === -1) {
      const s = await this.init();
      return this.storage.set(s), s;
    }
    return t;
  }
  /**
   * Creates elements to check the width of the scroll.
   *
   * Создает элементы для проверки ширины скролла.
   */
  static createElement() {
    return _(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", _(t, "div", (e) => {
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
c(ot, "storage", new T("scrollbar", !0)), c(ot, "calculate", !1);
const ue = [
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
], he = (i, t = {}) => {
  let e = String(i);
  if (i.match(/%[a-z]/)) {
    let s = 0;
    f(t, (n) => {
      e = e.replace(new RegExp(`%${ue[s++]}`, "g"), String(n));
    });
  }
  return A(t) && f(t, (s, n) => {
    e = e.replace(
      new RegExp(`\\[${n}\\](.*?)\\[/${n}\\]`, "g"),
      (o, a) => String(s).replace(/\[content]/g, a)
    ).replace(new RegExp(`\\[${n}\\]`, "g"), String(s));
  }), e;
}, E = class E {
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
    return s in this.data ? this.replacement(this.data[s], e) : (z.isLocalhost() || await this.add(t), this.replacement((o = (n = this.data) == null ? void 0 : n[s]) != null ? o : t));
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
        this.get(a, u).then((h) => {
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
    f(t, (e, s) => {
      x(e) && C(e) && (this.data[this.getName(s)] = e);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (C(t))
      if (z.isLocalhost())
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
    return this.url = t, E;
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
    return Z(t).forEach((s) => {
      s !== "__TRANSLATE_START__" && s !== "__TRANSLATE_END__" && !(this.getName(s) in this.data) && e.push(s);
    }), e;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = await z.get({
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
    return e ? he(t, e) : t;
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
c(E, "url", "/api/translate"), c(E, "propsName", "list"), c(E, "data", {}), c(E, "cache", []), c(E, "resolveList", []), c(E, "timeout");
let Lt = E;
function Rt(i) {
  return Array.isArray(i);
}
function Ie(i) {
  var t;
  return x(i) ? i.trim() : Rt(i) && i.findIndex((e) => m(e)) === -1 ? i.join(",") : m(i) ? JSON.stringify(i) : i === !0 ? "1" : i === !1 ? "0" : (t = i == null ? void 0 : i.toString()) != null ? t : "";
}
function le(i, t) {
  return Array(t).fill(i);
}
function Be(i) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onloadend = () => t(s.result), s.onerror = e, s.readAsDataURL(i);
  });
}
function Fe(i) {
  var t;
  if (l())
    return (t = document.querySelector(i)) != null ? t : void 0;
}
function Re(i) {
  if (l())
    return document.querySelectorAll(i);
}
function xe(i) {
  i.preventDefault(), i.stopPropagation();
}
function de(i, t, e) {
  const s = () => {
    i(), t != null && t() ? de(i, t, e) : e == null || e();
  };
  l() ? requestAnimationFrame(s) : s();
}
function Pe(i) {
  var s;
  const t = {}, e = N(i);
  if (e)
    for (const n of e.attributes)
      t[n.name] = (s = (n == null ? void 0 : n.value) || (n == null ? void 0 : n.textContent)) != null ? s : void 0;
  return t;
}
async function We(i) {
  var t, e;
  return (e = (t = i == null ? void 0 : i.clipboardData) == null ? void 0 : t.getData("text")) != null ? e : await navigator.clipboard.readText() || "";
}
function Ue(i = "datetime") {
  return new ct(void 0, i).standard();
}
let kt = J(1e5, 9e5);
function je(i, t) {
  const e = N(i);
  return e ? (C(e.id) || e.setAttribute("id", `id-${kt++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${kt++}`;
}
function ge(i) {
  return x(i) ? _(
    void 0,
    "img",
    { src: i }
  ) : i;
}
function fe(i, t = "ig", e = ":value") {
  const s = i.replace(/([[\]\\^$.?*+()/])/g, "\\$1");
  return new RegExp(e.replace(/:value/g, s), t);
}
function me(i, t) {
  var n;
  const e = t.split(".", 2), s = e[0];
  return s && (i != null && i[s]) && A(i[s]) && (e != null && e[1]) ? me(i[s], e[1]) : (n = s && (i == null ? void 0 : i[s])) != null ? n : "";
}
function He(i) {
  var t, e, s;
  return (s = (t = i == null ? void 0 : i.key) != null ? t : i == null ? void 0 : i.code) != null ? s : (e = i == null ? void 0 : i.keyCode) == null ? void 0 : e.toString();
}
function xt(i) {
  return f(i, (t) => t.length);
}
function ze(i) {
  return Math.max(...xt(i));
}
function Ze(i) {
  return Math.min(...xt(i));
}
function ye(i) {
  var t, e, s, n;
  return (i == null ? void 0 : i.clientX) || ((e = (t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientX) || ((n = (s = i == null ? void 0 : i.touches) == null ? void 0 : s[0]) == null ? void 0 : n.clientX) || 0;
}
function $e(i) {
  var t, e, s, n;
  return (i == null ? void 0 : i.clientY) || ((e = (t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientY) || ((n = (s = i == null ? void 0 : i.touches) == null ? void 0 : s[0]) == null ? void 0 : n.clientY) || 0;
}
function Ve(i) {
  return {
    x: ye(i),
    y: $e(i)
  };
}
function Ke(i, t) {
  const e = {};
  return t.forEach((s) => {
    s in i && i[s] !== void 0 && (e[s] = i[s]);
  }), e;
}
function Ye(i, t = void 0) {
  const e = {};
  return f(i, (s, n) => {
    s !== t && (e[n] = s);
  }), e;
}
function qe(i) {
  return A(i) ? i : {};
}
function pe(i, t) {
  return le(i, t).join("");
}
function Je(i, t, e = "#", s = 2, n = 12) {
  const o = J(i, t), a = [];
  for (let u = 0; u < o; u++)
    a.push(pe(e, J(s, n)));
  return a.join(" ");
}
function Me(i, t) {
  const e = i != null ? i : 0;
  return t > e ? 100 / (t - e) : 0;
}
function Qe(i, t) {
  const e = i != null ? i : 0;
  return t > e ? (t - e) / 100 : 0;
}
const At = 0;
function Xe(i, t, e) {
  const s = t == null ? void 0 : t.closest(i);
  if (t && s && s.scrollHeight !== s.offsetHeight) {
    const n = s.getBoundingClientRect(), o = t.getBoundingClientRect();
    if (e) {
      const a = e.getBoundingClientRect();
      s.scrollTop = t.offsetTop - (a.top - n.top) - (a.height / 2 - o.height / 2), s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight);
    } else s.scrollTop > t.offsetTop ? s.scrollTop = o.top - n.top - At : s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = o.top - n.top + o.height - n.height + At);
  }
}
function _e(i, t, e = 0) {
  if (!l())
    return;
  const s = (t == null ? void 0 : t.behavior) || "smooth";
  if ("scrollIntoView" in i && !e) {
    i.scrollIntoView({
      behavior: s,
      block: (t == null ? void 0 : t.block) || "start",
      inline: (t == null ? void 0 : t.inline) || "start"
    });
    return;
  }
  if ("getBoundingClientRect" in i && "scrollTo" in window) {
    const n = ((window == null ? void 0 : window.scrollY) || window.pageYOffset) + i.getBoundingClientRect().top - e;
    window.scrollTo({
      top: n,
      behavior: s
    });
  }
}
function Oe(i, t, e = "smooth") {
  if (!l() || !i || !t)
    return;
  const s = i.getBoundingClientRect(), n = t.getBoundingClientRect();
  i.scrollBy({
    top: n.top - s.top,
    left: n.left - s.left,
    behavior: e
  });
}
function Te(i, t) {
  return i.indexOf(t) !== -1;
}
async function Ge() {
  if (l()) {
    const i = await ot.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${i}px`);
  }
}
function ti(i, t) {
  const e = {};
  return m(i) && m(t) && f(i, (s, n) => {
    n in t && (e[n] = s);
  }), e;
}
function ei(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || f(i, (s, n) => {
    s !== (t == null ? void 0 : t[n]) && (e = !0);
  }), e;
}
const we = (i) => {
  if (i instanceof HTMLElement) {
    const t = i.tagName.toLowerCase();
    return !!(t === "input" || t === "textarea" || t === "select" || i.isContentEditable || i.getAttribute("contenteditable") === "true");
  }
  return !1;
}, ii = (i, t) => i.code === "Space" || i.code === "Enter" || i.key === " " || i.key === "Spacebar" || i.key === "Enter" || i.keyCode === 13 || i.keyCode === 32 ? t !== void 0 ? !t : !we(i.target) : !1;
function si(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function ri(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function ni(i, t) {
  return Array.isArray(i) ? i.every((e) => rt(e, t)) : rt(i, t);
}
function oi(i, t) {
  if (i.startsWith(t))
    return i.slice(t.length).trim();
  let e = 0;
  for (; i[e] === t[e] && e < i.length && e < t.length; )
    e++;
  return i.slice(e).trim();
}
const ai = (i, t, e) => {
  var s, n;
  return (n = (s = i == null ? void 0 : i.replace(new RegExp(`<${t}`, "ig"), `<${e}`)) == null ? void 0 : s.replace(new RegExp(`</${t}`, "ig"), `</${e}`)) == null ? void 0 : n.trim();
};
function be(i) {
  return [...new Set(i)];
}
function K(i, t, e = !0) {
  const s = H(i);
  return m(i) && m(t) && f(
    t,
    (n, o) => {
      const a = i == null ? void 0 : i[o];
      m(a) && m(n) ? e && Array.isArray(a) && Array.isArray(n) ? s[o] = H(be([...a, ...n])) : s[o] = K(
        Array.isArray(a) ? { ...a } : a,
        n,
        e
      ) : s[o] = m(n) ? H(n) : n;
    }
  ), s;
}
function ci(i, t) {
  let e = i;
  return f(t, (s, n) => {
    e = e.replace(fe(`[${n}]`), I(s));
  }), e;
}
function ve(i, t = "auto") {
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
  const n = ge(i);
  if (n && (n.naturalWidth > t && (e === "auto" || e === "width") || n.naturalHeight > t && (e === "auto" || e === "height"))) {
    const a = ve(n, e), u = (o = document.createElement("canvas")) == null ? void 0 : o.getContext("2d");
    if (u)
      return u.canvas.width = a ? t : n.naturalWidth / n.naturalHeight * t, u.canvas.height = a ? n.naturalHeight / n.naturalWidth * t : t, u.drawImage(n, 0, 0, u.canvas.width, u.canvas.height), u.canvas.toDataURL(s);
  }
}
function hi(i) {
  const t = k(i);
  if (t > 0) {
    const e = String(Math.floor(t / 60)).padStart(2, "0"), s = String(t % 60).padStart(2, "0");
    return `${e}:${s}`;
  }
  return "00:00";
}
function li(i, t, {
  multiple: e = !1,
  maxlength: s = 0,
  alwaysChange: n = !0,
  notEmpty: o = !1
}) {
  if (e) {
    if (Rt(i)) {
      const a = i.indexOf(t), u = [...i];
      return a !== -1 ? (!o || u.length > 1) && u.splice(a, 1) : (!s || i.length < s) && u.push(t), u;
    }
    return i === t ? [] : i ? [i, t] : [t];
  }
  return n || i !== t ? t : i;
}
function di(i, t, e) {
  if (m(i) && m(t)) {
    if (e) {
      let s = {}, n = !1;
      return f(i, (o, a) => {
        !n && (e === a || e === o) ? (n = !0, s = K(s, t)) : n ? s = K(s, { [a]: o }) : s[a] = m(o) ? H(o) : o;
      }), n ? s : K(i, t);
    }
    if (m(t))
      return K(i, t);
  }
  return H(i);
}
function Se(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${String(t[1]).toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function gi(i) {
  return Se(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function fi(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(/(?<=[\w ])[A-Z]/g, (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function mi(i, t, e, s) {
  const n = k(i), o = k(t);
  return t && o < n ? `${Nt(o, e, s)}+` : Nt(n, e, s);
}
const Nt = (i, t, e) => t ? new Q(e).number(i) : i;
function De(i, t) {
  return 1 / i * t;
}
function yi(i, t) {
  return De(i, t) * 100;
}
function $i(i) {
  let t = "";
  for (const e of i)
    t += String.fromCharCode(e);
  return l() ? window.btoa(t) : globalThis && globalThis.Buffer ? globalThis == null ? void 0 : globalThis.Buffer.from(i).toString("base64") : "";
}
async function pi(i) {
  if (l())
    try {
      await navigator.clipboard.writeText(i);
    } catch (t) {
      document == null || document.execCommand(i);
    }
}
export {
  z as Api,
  Zt as ApiDefault,
  zt as ApiHeaders,
  D as ApiMethodItem,
  qt as ApiPreparation,
  Yt as ApiResponse,
  Vt as ApiStatus,
  ke as BroadcastMessage,
  Qt as Cache,
  Mt as CacheItem,
  $t as CacheStatic,
  pt as Cookie,
  Ft as CookieBlock,
  T as DataStorage,
  ct as Datetime,
  Ae as ElementScreenshot,
  ft as EventItem,
  r as GEO_FLAG_ICON_NAME,
  w as Geo,
  wt as GeoFlag,
  Q as GeoIntl,
  bt as GeoPhone,
  Ne as Global,
  vt as Hash,
  Ct as Icons,
  R as Loading,
  Ee as Meta,
  ut as MetaManager,
  ae as MetaOg,
  re as MetaOpenGraphAge,
  ie as MetaOpenGraphAvailability,
  se as MetaOpenGraphCondition,
  ne as MetaOpenGraphGender,
  y as MetaOpenGraphTag,
  ee as MetaOpenGraphType,
  te as MetaRobots,
  S as MetaTag,
  ce as MetaTwitter,
  oe as MetaTwitterCard,
  $ as MetaTwitterTag,
  ot as ScrollbarWidth,
  Lt as Translate,
  Ie as anyToString,
  he as applyTemplate,
  le as arrFill,
  Be as blobToBase64,
  H as copyObject,
  L as copyObjectLite,
  _ as createElement,
  Fe as domQuerySelector,
  Re as domQuerySelectorAll,
  Gt as encodeAttribute,
  xe as eventStopPropagation,
  I as executeFunction,
  Kt as executePromise,
  f as forEach,
  de as frame,
  Pe as getAttributes,
  We as getClipboardData,
  _t as getColumn,
  Ue as getCurrentDate,
  N as getElement,
  je as getElementId,
  ge as getElementImage,
  Ot as getElementItem,
  gt as getElementOrWindow,
  fe as getExp,
  me as getItemByPath,
  He as getKey,
  xt as getLengthOfAllArray,
  ze as getMaxLengthAllArray,
  Ze as getMinLengthAllArray,
  Ve as getMouseClient,
  ye as getMouseClientX,
  $e as getMouseClientY,
  Ke as getObjectByKeys,
  Ye as getObjectNoUndefined,
  qe as getObjectOrNone,
  Je as getRandomText,
  Et as getRequestString,
  Me as getStepPercent,
  Qe as getStepValue,
  Xe as goScroll,
  _e as goScrollSmooth,
  Oe as goScrollTo,
  Te as inArray,
  Ge as initScrollbarOffset,
  ti as intersectKey,
  Rt as isArray,
  ei as isDifferent,
  nt as isDomData,
  l as isDomRuntime,
  ii as isEnter,
  C as isFilled,
  si as isFloat,
  at as isFunction,
  Ht as isInDom,
  we as isInput,
  ri as isIntegerBetween,
  M as isNull,
  lt as isNumber,
  m as isObject,
  A as isObjectNotArray,
  rt as isSelected,
  ni as isSelectedByList,
  x as isString,
  It as isWindow,
  J as random,
  oi as removeCommonPrefix,
  ai as replaceComponentName,
  K as replaceRecursive,
  ci as replaceTemplate,
  ui as resizeImageByMax,
  hi as secondToTime,
  Tt as setElementItem,
  li as setValues,
  di as splice,
  pe as strFill,
  Z as toArray,
  Se as toCamelCase,
  gi as toCamelCaseFirst,
  B as toDate,
  fi as toKebabCase,
  k as toNumber,
  mi as toNumberByMax,
  De as toPercent,
  yi as toPercentBy100,
  Bt as transformation,
  $i as uint8ArrayToBase64,
  be as uniqueArray,
  pi as writeClipboardData
};
