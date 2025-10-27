var nt = Object.defineProperty;
var ot = (e, t, i) => t in e ? nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var l = (e, t, i) => ot(e, typeof t != "symbol" ? t + "" : t, i);
import { geo as ct } from "@dxtmisha/media";
function M(e) {
  return e instanceof Function || typeof e == "function";
}
function I(e) {
  return M(e) ? e() : e;
}
async function ut(e) {
  const t = I(e);
  return t instanceof Promise ? await t : t;
}
function h(e) {
  return !!(e && typeof e == "object");
}
function y(e, t) {
  if (h(e)) {
    const i = [];
    return e instanceof Map ? e.forEach((r, s) => i.push(t(r, s, e))) : Array.isArray(e) ? e.forEach((r, s) => i.push(t(r, s, e))) : Object.entries(e).forEach(
      ([r, s]) => i.push(t(s, r, e))
    ), i.filter((r) => r !== void 0);
  }
  return [];
}
function at(e, t = "=", i = "&") {
  return y(
    e,
    (r, s) => `${s}${t}${encodeURIComponent(String(r).trim())}`
  ).sort().join(i);
}
function f() {
  return typeof window != "undefined" && !!window.document;
}
function F(e) {
  return e == null;
}
function E(e, t) {
  if (e) {
    if (t && e === "0")
      return !0;
    switch (typeof e) {
      case "bigint":
      case "number":
        return e !== 0;
      case "boolean":
        return e;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(e) ? e.length > 0 : Object.values(e).some((i) => !F(i));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(e);
      case "undefined":
        return !1;
      default:
        return !!e;
    }
  }
  return !1;
}
function $(e) {
  return h(e) && !Array.isArray(e);
}
function x(e) {
  return typeof e == "string";
}
function B(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function j(e) {
  return Array.isArray(e) ? e : [e];
}
function tt(e) {
  return f() && e === window;
}
function S(e) {
  var t;
  if (f())
    return tt(e) ? document.body : x(e) ? (t = document.querySelector(e)) != null ? t : void 0 : e;
}
function V(e) {
  return tt(e) ? e : S(e);
}
function lt(e) {
  var t;
  return !!((t = S(e)) != null && t.closest("html"));
}
class q {
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
  constructor(t, i = ["click"], r, s, o) {
    /**
     * Element.
     *
     * Элемент.
     */
    l(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    l(this, "elementControl");
    l(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    l(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    l(this, "listenerRecent", (t) => {
      var i, r;
      lt(this.elementControl) ? ((i = this.listener) == null || i.call(this.element, t, this.detail), h(this.options) && ((r = this.options) != null && r.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    l(this, "activity", !1);
    l(this, "activityItems", []);
    this.listener = r, this.options = s, this.detail = o, this.element = V(t), this.elementControl = S(t), this.type = j(i);
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
    const i = V(t);
    return this.elementControlEdit || (this.elementControl = S(t)), this.element = i, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(t) {
    return this.elementControl = S(t), this.elementControlEdit = !F(this.elementControl), this.elementControlEdit || (this.elementControl = S(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(t) {
    return this.type = j(t), this.reset(), this;
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
      (i) => {
        var r;
        return (r = this.element) == null ? void 0 : r.dispatchEvent(new CustomEvent(i, { detail: t }));
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
      type: i,
      listener: r,
      observer: s
    }) => {
      s ? s.disconnect() : r ? t == null || t.removeEventListener(i, r) : t == null || t.removeEventListener(i, this.listenerRecent);
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
        (i) => this.listenerRecent(i == null ? void 0 : i[0])
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
      const i = (r) => {
        t || (t = !0, requestAnimationFrame(() => {
          this.listenerRecent(r), t = !1;
        }));
      };
      return this.element.addEventListener("scroll", i, this.options), this.element.addEventListener("resize", i, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: i
        },
        {
          element: this.element,
          type: "resize",
          listener: i
        }
      ), !0;
    }
    return !1;
  }
}
const W = "ui-loading", A = class A {
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
  static registrationEvent(t, i) {
    f() && new q(window, W, t).setElementControl(i).start();
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
l(A, "value", 0), l(A, "event"), f() && (A.event = new q(window, W));
let L = A;
function C(e) {
  return JSON.parse(JSON.stringify(e));
}
function J(e) {
  switch (typeof e) {
    case "number":
      return !0;
    case "string":
      return !!e.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function w(e) {
  if (typeof e == "number")
    return e;
  if (!e)
    return 0;
  let t = e.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
function U(e, t) {
  return F(e) ? !1 : Array.isArray(t) ? t.includes(e) : J(e) && J(t) ? w(e) === w(t) : e === t;
}
const P = {};
let Y = "ui-storage";
class et {
  /**
   * Constructor
   * @param name value name/ название значения
   * @param isSession should we use a session/ использовать ли сессию
   */
  constructor(t, i = !1) {
    l(this, "value");
    l(this, "age");
    this.name = t, this.isSession = i;
    const r = `${i ? "session" : "storage"}#${t}`;
    if (r in P)
      return P[r];
    this.make(), P[r] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(t) {
    Y = t;
  }
  /**
   * Getting data from local storage.
   *
   * Получение данных из локального хранилища.
   * @param defaultValue default value/ значение по умолчанию
   * @param cache cache time/ время кэширования
   */
  get(t, i) {
    if (this.value !== null && this.value !== void 0 && this.isCache(i))
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
    var i;
    return this.value = I(t), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? this.remove() : (i = this.getMethod()) == null || i.setItem(this.getIndex(), JSON.stringify({
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
    return F(t) || this.age && this.age + t * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.
   *
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (f())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the storage key name.
   *
   * Получение имени ключа в хранилище.
   */
  getIndex() {
    return `${Y}__${this.name}`;
  }
  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   */
  getValue() {
    var i;
    const t = (i = this.getMethod()) == null ? void 0 : i.getItem(this.getIndex());
    if (t)
      try {
        return JSON.parse(t);
      } catch (r) {
        console.error("DataStorage", r);
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
const ft = "geo-code", m = class m {
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
    return {
      ...this.item,
      language: this.language
    };
  }
  /**
   * Returns the full list of countries.
   *
   * Возвращает полный список стран.
   */
  static getList() {
    return ct;
  }
  /**
   * Returns the data about the country by its full code.
   *
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(t) {
    let i;
    return t && (t.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (i = this.getByCodeFull(t)), !i && t.match(/[A-Z]{2}/) && (i = this.getByCountry(this.toCountry(t))), !i && t.match(/[a-z]{2}/) && (i = this.getByLanguage(this.toLanguage(t)))), this.toFull(C(i != null ? i : this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(t) {
    return this.getList().find(
      (i) => U(t, [
        `${i.language}-${i.country}`,
        `${i.country}-${i.language}`
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
    return this.getList().find((i) => {
      var r;
      return i.country === t || ((r = i == null ? void 0 : i.countryAlternative) == null ? void 0 : r.find((s) => s === t));
    });
  }
  /**
   * Returns the full data by language.
   *
   * Возвращает полные данные по языку.
   * @param language language/ язык
   */
  static getByLanguage(t) {
    return this.getList().find((i) => {
      var r;
      return i.language === t || ((r = i == null ? void 0 : i.languageAlternative) == null ? void 0 : r.find((s) => s === t));
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
    const t = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, "0"), i = Math.abs(this.timezone % 60).toString().padStart(2, "0");
    return this.timezone >= 0 ? `-${t}:${i}` : `+${t}:${i}`;
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
  static set(t, i) {
    this.location = t, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), i && this.storage.set(this.location);
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
    return f() && (this.storage.get() || ((t = document.querySelector("html")) == null ? void 0 : t.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
    return {
      ...t,
      standard: this.toStandard(t),
      firstDay: (t == null ? void 0 : t.firstDay) || "Mo"
    };
  }
};
l(m, "storage", new et(ft)), l(m, "location"), l(m, "item"), l(m, "language"), l(m, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), m.location = m.findLocation(), m.language = m.findLanguage(m.location), m.item = m.getByCode(m.location);
let D = m;
var b = /* @__PURE__ */ ((e) => (e.get = "GET", e.post = "POST", e.put = "PUT", e.delete = "DELETE", e))(b || {});
const K = "d-response-loading", Q = [], d = class d {
  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  static isLocalhost() {
    return typeof location == "undefined" || location.hostname === "localhost";
  }
  /**
   * Returns the data of the last request.
   *
   * Возвращает данные последнего запроса.
   */
  static getLastResponse() {
    return this.lastResponse;
  }
  /**
   * Returns messages from the last request.
   *
   * Возвращает сообщения от последнего запроса.
   */
  static getLastMessage() {
    return this.lastMessage || "";
  }
  /**
   * Getting the header for the request.
   *
   * Получение заголовка для запроса.
   * @param value list of headers/ список заголовков
   * @param type type of request/ тип запроса
   */
  static getHeaders(t, i = "application/json;charset=UTF-8") {
    if (t !== null) {
      const r = {
        ...this.headers,
        ...t || {}
      };
      return E(i) && (r["Content-Type"] = i), r;
    }
  }
  /**
   * Getting the full path to the request script.
   *
   * Получение полного пути к скрипту запроса.
   * @param path path to the script/ путь к скрипту
   * @param api adding a path to the site’s API/ добавление пути к API сайта
   */
  static getUrl(t, i = !0) {
    return `${i ? this.url : ""}${t}`.replace("{locale}", D.getLocation()).replace("{country}", D.getCountry()).replace("{language}", D.getLanguage());
  }
  /**
   * Getting data for the body.
   *
   * Получение данных для тела.
   * @param request this request/ данный запрос
   * @param method method for request/ метод запрос
   */
  static getBody(t = {}, i = b.get) {
    if (t instanceof FormData)
      return t;
    if (i !== b.get && E(t))
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
  static getBodyForGet(t, i = "", r = b.get) {
    if (r === b.get) {
      const s = i.match(/\?/) ? "&" : "?", o = typeof t == "object" ? at(t) : t;
      if (E(o))
        return `${s}${o}`;
    }
    return "";
  }
  /**
   * Returns a list of data about the emulator.
   *
   * Возвращает список данных об эмуляторе.
   */
  static getResponseList() {
    return this.response.filter((t) => t.isForGlobal !== !0);
  }
  /**
   * Returns the execution status code.
   *
   * Возвращает код статуса выполнения.
   */
  static getStatus() {
    return this.status;
  }
  /**
   * Returns the execution status text.
   *
   * Возвращает текст статуса выполнения.
   */
  static getStatusText() {
    return this.statusText;
  }
  /**
   * Returns the script execution error.
   *
   * Возвращает ошибку выполнения скрипта.
   */
  static getError() {
    return this.error;
  }
  /**
   * Adds default data to the request.
   *
   * Добавляет данные по умолчанию к запросу.
   */
  static addRequestDefault(t) {
    if (this.requestDefault) {
      if (t instanceof FormData)
        y(this.requestDefault, (i, r) => {
          t.has(r) || t.set(r, i);
        });
      else if ($(t))
        return {
          ...this.requestDefault,
          ...t
        };
    }
    return t;
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(t) {
    return $(t) && (this.headers = t), d;
  }
  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(t) {
    this.requestDefault = t;
  }
  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(t) {
    return this.url = t, d;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(t) {
    return this.preparationItem = t, d;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(t) {
    return this.preparationEndItem = t, d;
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
    return this.request({
      ...t,
      method: b.get
    });
  }
  /**
   * Sends a post method request.
   *
   * Отправляет запрос метода post.
   * @param request list of parameters/ список параметров
   */
  static post(t) {
    return this.request({
      ...t,
      method: b.post
    });
  }
  /**
   * Sends a put method request.
   *
   * Отправляет запрос метода put.
   * @param request list of parameters/ список параметров
   */
  static put(t) {
    return this.request({
      ...t,
      method: b.put
    });
  }
  /**
   * Sends a delete method request.
   *
   * Отправляет запрос метода delete.
   * @param request list of parameters/ список параметров
   */
  static delete(t) {
    return this.request({
      ...t,
      method: b.delete
    });
  }
  /**
   * Adding cached requests.
   *
   * Добавление кешированных запросов.
   * @param response data for caching/ данные для кеширования
   */
  static addResponse(t) {
    return this.response.push(...j(t)), d;
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
  static getResponse(t = "", i, r, s) {
    return this.response.find((o) => {
      if (I(o == null ? void 0 : o.disable) !== !0 && (o.path instanceof RegExp && t.match(o.path) || t === o.path) && i === o.method && (Q.indexOf(o) === -1 || s)) {
        const n = this.addRequestDefault(o == null ? void 0 : o.request);
        let c = !1;
        if (r === n || n === "*any" ? c = !0 : E(r) && E(n) && $(r) && $(n) && !(r instanceof FormData) && !(n instanceof FormData) && Object.values(r).length === Object.values(n).length && (c = Object.entries(n).reduce(
          (u, [g, a]) => u && (a === (r == null ? void 0 : r[g]) || a === "*any"),
          !0
        )), c)
          return s && console.warn(`Response type: ${o.path}`), Q.push(o), !0;
      }
      return !1;
    });
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param apiFetch property of the request/ свойство запроса
   */
  static async fetch(t) {
    var g;
    const {
      toData: i = !0,
      hideError: r = !1,
      queryReturn: s = void 0,
      globalPreparation: o = !0,
      globalEnd: n = !0
    } = t, c = await this.makeEmulator(t);
    if (c)
      return c;
    let u = {};
    L.show();
    try {
      this.preparationItem && o && await this.makePreparation();
      const a = await this.makeQuery(t), p = n && this.preparationEndItem ? await this.makePreparationEnd(a) : {};
      if (this.status = a.status, this.statusText = a.statusText, p != null && p.reset)
        return L.hide(), await this.fetch(t);
      s ? u = await s(a) : "data" in p ? u = p.data : ((g = a.headers.get("Content-Type")) != null ? g : "").match("application/json") ? u = await a.json() : u = { data: await a.text() };
    } catch (a) {
      r && console.error("Api: ", a), this.error = a;
    }
    return L.hide(), this.makeData(u, i);
  }
  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  static fetchResponse(t, i) {
    return this.startResponseLoading(), new Promise((r) => {
      ut(
        M(t.response) ? t.response(i) : t.response
      ).then((s) => {
        t != null && t.lag ? (L.show(), setTimeout(() => {
          this.stopResponseLoading(), r(s), L.hide();
        }, B(0, 2e3))) : (this.stopResponseLoading(), r(s));
      });
    });
  }
  /**
   * Выполнение эмулятора, если доступно
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeEmulator(t) {
    const {
      path: i = "",
      method: r = b.get,
      global: s = r === b.get,
      devMode: o = !1
    } = t;
    if (s || o) {
      const n = this.addRequestDefault(t.request), c = this.getResponse(i, r, n, o);
      if (c) {
        const u = await this.fetchResponse(c, n);
        return o && console.warn("Response data:", i, n, u), u;
      }
    }
  }
  /**
   * Executing the request.
   *
   * Выполнение запроса.
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeQuery(t) {
    const i = this.addRequestDefault(t.request), {
      api: r = !0,
      path: s = "",
      pathFull: o = void 0,
      method: n = b.get,
      headers: c = {},
      type: u = "application/json;charset=UTF-8",
      init: g = {}
    } = t, a = o != null ? o : this.getUrl(s, r), p = `${a}${this.getBodyForGet(i, a, n)}`, N = this.getHeaders(c, u), R = {
      ...g,
      method: n,
      body: this.getBody(i, n)
    };
    return N && (R.headers = N), await fetch(p, R);
  }
  /**
   * Preparation before executing the request.
   *
   * Подготовка перед выполнением запроса.
   */
  static async makePreparation() {
    return new Promise((t) => {
      this.preparation ? setTimeout(() => this.makePreparation().then(t), 160) : this.preparationItem ? (this.preparation = !0, this.preparationItem().then(() => {
        this.preparation = !1, t();
      })) : t();
    });
  }
  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param query data received in the request/ данные, полученные в запросе
   */
  static async makePreparationEnd(t) {
    let i = {};
    return this.preparationEndItem && (i = await this.preparationEndItem(t)), i;
  }
  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  static makeData(t, i) {
    if (this.lastResponse = t, t && $(t) && ("message" in t && (this.lastMessage = String(t.message)), i && "data" in t)) {
      if ($(t.data)) {
        const r = { ...t.data };
        return "success" in t && (r.success = t.success), r;
      }
      return t.data;
    }
    return t;
  }
  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  static startResponseLoading() {
    this.responseLoading && clearTimeout(this.responseLoading), f() && document.body.classList.add(K);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, f() && document.body.classList.remove(K);
    }, 1200);
  }
};
l(d, "url", "/api/"), l(d, "response", []), l(d, "responseLoading"), l(d, "headers", {}), l(d, "requestDefault"), l(d, "preparation", !1), l(d, "preparationItem"), l(d, "preparationEndItem"), l(d, "status"), l(d, "statusText"), l(d, "error"), l(d, "lastResponse"), l(d, "lastMessage");
let X = d;
function dt(e, t) {
  return y(e, (i) => i == null ? void 0 : i[t]);
}
function v(e) {
  var s, o, n, c, u, g, a, p;
  if (e instanceof Date)
    return e;
  if (F(e))
    return /* @__PURE__ */ new Date();
  if (typeof e == "number")
    return new Date(e);
  let t = e, i = D.getTimezoneFormat();
  e.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (N, R, st) => (t = R, i = st, N));
  const r = (p = (a = (g = (u = (c = (n = (o = (s = /^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) != null ? s : /^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) != null ? o : /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) != null ? n : /^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) != null ? c : /^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) != null ? u : /^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) != null ? g : /^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) != null ? a : /^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) != null ? p : t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${r}${i}`);
}
class Z {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = D.getLocation()) {
    l(this, "geo");
    this.geo = D.find(t);
    const i = this.getLocation();
    if (i in z)
      return z[i];
    z[i] = this;
  }
  /**
   * Returns an instance of the class according to the specified country code.
   *
   * Возвращает экземпляр класса по указанному коду страны.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getInstance(t = D.getLocation()) {
    return new Z(t);
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
  display(t, i) {
    var o;
    let r = { type: "language" }, s;
    i && (typeof i == "string" ? r.type = i : r = {
      ...r,
      ...i
    });
    try {
      f() && (t ? s = new Intl.DisplayNames(this.getLocation(), r).of(t) : r.type === "language" ? s = new Intl.DisplayNames(this.getLocation(), r).of(this.geo.language) : r.type === "region" && (s = new Intl.DisplayNames(this.getLocation(), r).of(this.geo.country)));
    } catch (n) {
      console.error("display: ", n);
    }
    return (o = s != null ? s : t) != null ? o : "";
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(t, i) {
    const r = {
      type: "language",
      style: i
    };
    return this.display(D.getByCode(t).language, r);
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, i) {
    const r = {
      type: "region",
      style: i
    };
    return this.display(t, r);
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
  fullName(t, i, r, s) {
    var c, u;
    const o = (u = (c = this.geo) == null ? void 0 : c.nameFormat) != null ? u : "fl";
    let n;
    switch (o) {
      case "fsl":
        n = `${i}${r ? ` ${r}` : ""} ${t}`;
        break;
      case "lf":
        n = `${t} ${i}`;
        break;
      case "lsf":
        n = `${t}${r ? ` ${r}` : ""} ${i}`;
        break;
      default:
        n = `${i} ${t}`;
        break;
    }
    return s ? n.replace(/ (.)[^ ]+/ig, " $1.") : n;
  }
  /**
   * In basic use without specifying a locale, a formatted string.
   *
   * При обычном использовании без указания локали форматированная строка.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми
   * или всеми свойствами
   */
  number(t, i) {
    var r, s;
    return ((s = (r = this.numberObject(i)) == null ? void 0 : r.format) == null ? void 0 : s.call(r, w(t))) || t.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    var t, i, r, s, o;
    return ((o = (s = (r = (i = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : i.call(t, 1.2)) == null ? void 0 : r.find) == null ? void 0 : s.call(r, (n) => n.type === "decimal")) == null ? void 0 : o.value) || ".";
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
  currency(t, i, r = !1) {
    const s = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof i == "string" ? { currency: i } : i || {}
    }, o = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...n) => (s.currency = String(n[2]).toUpperCase(), String(n[1])));
    if (r) {
      const n = this.numberObject(s);
      return n ? dt(
        n.formatToParts(w(t)).filter((c) => ["literal", "currency"].indexOf(c.type) === -1),
        "value"
      ).join("") : t.toString();
    } else return "currency" in s ? this.number(
      typeof t == "number" ? t : o,
      s
    ) : this.number(
      typeof t == "number" ? t : o,
      {
        ...s,
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
  currencySymbol(t, i = "symbol") {
    var r, s, o, n, c;
    return ((c = (n = (o = (s = (r = this.numberObject({
      style: "currency",
      currencyDisplay: i,
      currency: t
    })) == null ? void 0 : r.formatToParts) == null ? void 0 : s.call(r, 100)) == null ? void 0 : o.find) == null ? void 0 : n.call(o, (u) => u.type === "currency")) == null ? void 0 : c.value) || t;
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
  unit(t, i) {
    const r = {
      style: "unit",
      ...typeof i == "string" ? { unit: i } : i || {}
    }, s = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...o) => (r.unit = String(o[2]).toLowerCase(), String(o[1])));
    return this.number(s, r);
  }
  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(t, i = "byte") {
    const r = w(t);
    if (r > 1024 && x(i))
      switch (i) {
        case "byte":
          return this.sizeFile(r / 1024, "kilobyte");
        case "kilobyte":
          return this.sizeFile(r / 1024, "megabyte");
        case "megabyte":
          return this.sizeFile(r / 1024, "gigabyte");
        case "gigabyte":
          return this.sizeFile(r / 1024, "terabyte");
        case "terabyte":
          return this.sizeFile(r / 1024, "petabyte");
      }
    return this.unit(t, i);
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(t, i) {
    return this.number(t, {
      style: "percent",
      ...i || {}
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
  percentBy100(t, i) {
    return this.percent(w(t) / 100, i);
  }
  /**
   * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
   * список слов для форматирования (в формате `one|two|few|many|other|zero`)
   * @param options Property for PluralRules/ свойство для PluralRules
   * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  plural(t, i, r, s) {
    var c;
    const o = w(t), n = i.split("|");
    if (n.length > 1)
      try {
        if (f()) {
          const g = new Intl.PluralRules(this.getLocation(), r).select(o);
          let a;
          switch (g) {
            case "zero":
              a = n[n.length - 1];
              break;
            case "one":
              a = n == null ? void 0 : n[0];
              break;
            case "two":
              a = n == null ? void 0 : n[1];
              break;
            case "few":
              a = n != null && n[3] ? n == null ? void 0 : n[2] : n == null ? void 0 : n[1];
              break;
            case "many":
              a = (n == null ? void 0 : n[3]) || (n == null ? void 0 : n[2]) || (n == null ? void 0 : n[1]);
              break;
            case "other":
              n.length === 6 ? a = n[n.length - 2] : a = n[n.length - 1];
              break;
          }
          return `${this.number(o, s)} ${a != null ? a : ""}`.trim();
        }
      } catch (u) {
        console.error("plural: ", u);
      }
    return `${this.number(o, s)} ${(c = n == null ? void 0 : n[0]) != null ? c : ""}`.trim();
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
  date(t, i, r, s) {
    const o = v(t), n = typeof r == "string", c = this.dateOptions(i, n ? r : "short");
    return s && (c.hour12 = !1), n || Object.assign(c, r), o.toLocaleString(this.getLocation(), c);
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
  relative(t, i, r) {
    const s = v(t), o = r || /* @__PURE__ */ new Date(), n = {
      numeric: "auto",
      ...typeof i == "string" ? { style: i } : i || {}
    };
    let c = "second", u = (s.getTime() - o.getTime()) / 1e3;
    return Math.abs(u) >= 60 && (c = "minute", u /= 60, Math.abs(u) >= 60 && (c = "hour", u /= 60, Math.abs(u) >= 24 && (c = "day", u /= 24, Math.abs(u) >= 30 && (c = "month", u /= 30, Math.abs(u) >= 12 && (c = "year", u /= 12))))), this.relativeByValue(u, c, n);
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
  relativeLimit(t, i, r, s, o, n, c) {
    const u = v(t), g = r || /* @__PURE__ */ new Date(), a = new Date(g), p = new Date(g);
    return a.setDate(g.getDate() - i), p.setDate(g.getDate() + i), u >= a && u <= p ? this.relative(
      u,
      s,
      g
    ) : this.date(
      u,
      n,
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
  relativeByValue(t, i, r) {
    const s = {
      numeric: "auto",
      ...typeof r == "string" ? { style: r } : r || {}
    };
    try {
      if (f())
        return new Intl.RelativeTimeFormat(this.getLocation(), s).format(Math.round(w(t)), i);
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
  month(t, i) {
    try {
      if (f())
        return Intl.DateTimeFormat(this.getLocation(), { month: i || "long" }).format(v(t));
    } catch (r) {
      console.error("month: ", r);
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
    const i = [{
      label: "",
      value: void 0
    }];
    try {
      if (f()) {
        const r = /* @__PURE__ */ new Date(), s = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
        for (let o = 0; o < 12; o++)
          r.setMonth(o), i.push({
            label: s.format(r).replace(/^./, (n) => n.toUpperCase()),
            value: o + 1
          });
      }
    } catch (r) {
      console.error("months: ", r);
    }
    return i;
  }
  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(t, i) {
    try {
      if (f())
        return Intl.DateTimeFormat(this.getLocation(), { weekday: i || "long" }).format(v(t));
    } catch (r) {
      console.error("weekday: ", r);
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
    const i = [{
      label: "",
      value: void 0
    }];
    try {
      if (f()) {
        const r = /* @__PURE__ */ new Date(), s = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), o = r.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        r.setDate(r.getDate() - o);
        for (let n = 0; n < 7; n++)
          i.push({
            label: s.format(r).replace(/^./, (c) => c.toUpperCase()),
            value: r.getDay()
          }), r.setDate(r.getDate() + 1);
      }
    } catch (r) {
      console.error("weekdays: ", r);
    }
    return i;
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
  sort(t, i = (r, s) => [r, s]) {
    if (f()) {
      const r = new Intl.Collator(this.getLocation());
      return t.sort((s, o) => r.compare(...i(s, o)));
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
      if (f())
        return new Intl.NumberFormat(this.getLocation(), t);
    } catch (i) {
      console.error("numberObject: ", i);
    }
  }
  /**
   * Returns options for data according to its type.
   *
   * Возвращает options для data по его типу.
   * @param type type of data format/ тип формата data
   * @param display the representation of the month/ представление месяца
   */
  dateOptions(t, i = "short") {
    const r = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(t) !== -1 && (r.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month", "day-month"].indexOf(t) !== -1 && (r.month = i), ["full", "datetime", "date", void 0, "day", "day-month"].indexOf(t) !== -1 && (r.day = "2-digit"), t !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(t) !== -1 && (r.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(t) !== -1 && (r.minute = "2-digit"), ["full", "time", "second"].indexOf(t) !== -1 && (r.second = "2-digit")), r;
  }
}
const z = {};
function ht(e, t, i) {
  var r, s;
  return (s = (r = S(e)) == null ? void 0 : r[t]) != null ? s : i;
}
function gt(e, t, i) {
  const r = S(e);
  if (r) {
    const s = ht(r, t);
    if (h(s) && h(i))
      y(i, (o, n) => {
        s[n] = I(o);
      });
    else {
      const o = I(i);
      !(t in r) && typeof o == "string" ? r.setAttribute(t.toString(), o) : r[t] = I(i);
    }
  }
  return r;
}
function _(e, t = "div", i, r) {
  if (!f())
    return;
  const s = document.createElement(t);
  return typeof i == "function" ? i(s) : $(i) && y(i, (o, n) => {
    gt(s, n, o);
  }), e == null || e.insertBefore(s, r != null ? r : null), s;
}
class H {
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
    var i;
    const t = (i = this.storage.get()) != null ? i : -1;
    if (!this.calculate && t === -1) {
      const r = await this.init();
      return this.storage.set(r), r;
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
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", _(t, "div", (i) => {
        i.style.height = "100px";
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
      const i = this.createElement();
      i ? requestAnimationFrame(() => {
        t(i.offsetWidth - i.clientWidth), i.remove(), this.calculate = !1;
      }) : t(0);
    });
  }
}
l(H, "storage", new et("scrollbar", !0)), l(H, "calculate", !1);
function it(e) {
  return Array.isArray(e);
}
function Ut(e) {
  var t;
  return x(e) ? e.trim() : it(e) && e.findIndex((i) => h(i)) === -1 ? e.join(",") : h(e) ? JSON.stringify(e) : e === !0 ? "1" : e === !1 ? "0" : (t = e == null ? void 0 : e.toString()) != null ? t : "";
}
const mt = [
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
], Ht = (e, t = {}) => {
  let i = String(e);
  if (e.match(/%[a-z]/)) {
    let r = 0;
    y(t, (s) => {
      i = i.replace(new RegExp(`%${mt[r++]}`, "g"), String(s));
    });
  }
  return $(t) && y(t, (r, s) => {
    i = i.replace(
      new RegExp(`\\[${s}\\](.*?)\\[/${s}\\]`, "g"),
      (o, n) => String(r).replace(/\[content]/g, n)
    ).replace(new RegExp(`\\[${s}\\]`, "g"), String(r));
  }), i;
};
function yt(e, t) {
  return Array(t).fill(e);
}
function Zt(e) {
  var t;
  if (f())
    return (t = document.querySelector(e)) != null ? t : void 0;
}
function Vt(e) {
  if (f())
    return document.querySelectorAll(e);
}
function qt(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").trim();
}
function Wt(e) {
  e.preventDefault(), e.stopPropagation();
}
function pt(e, t, i) {
  const r = () => {
    e(), t != null && t() ? pt(e, t, i) : i == null || i();
  };
  f() ? requestAnimationFrame(r) : r();
}
function Jt(e) {
  var r;
  const t = {}, i = S(e);
  if (i)
    for (const s of i.attributes)
      t[s.name] = (r = (s == null ? void 0 : s.value) || (s == null ? void 0 : s.textContent)) != null ? r : void 0;
  return t;
}
async function Yt(e) {
  var t, i;
  return (i = (t = e == null ? void 0 : e.clipboardData) == null ? void 0 : t.getData("text")) != null ? i : await navigator.clipboard.readText() || "";
}
let O = B(1e5, 9e5);
function Kt(e, t) {
  const i = S(e);
  return i ? (E(i.id) || i.setAttribute("id", `id-${O++}`), t ? `#${i.id}${t}`.trim() : i.id) : `id-${O++}`;
}
function bt(e, t = "ig", i = ":value") {
  const r = e.replace(/([[\]\\^$.?*+()/])/g, "\\$1");
  return new RegExp(i.replace(/:value/g, r), t);
}
function wt(e, t) {
  var s;
  const i = t.split(".", 2), r = i[0];
  return r && (e != null && e[r]) && $(e[r]) && (i != null && i[1]) ? wt(e[r], i[1]) : (s = r && (e == null ? void 0 : e[r])) != null ? s : "";
}
function Qt(e) {
  var t, i, r;
  return (r = (t = e == null ? void 0 : e.key) != null ? t : e == null ? void 0 : e.code) != null ? r : (i = e == null ? void 0 : e.keyCode) == null ? void 0 : i.toString();
}
function rt(e) {
  return y(e, (t) => t.length);
}
function Xt(e) {
  return Math.max(...rt(e));
}
function _t(e) {
  return Math.min(...rt(e));
}
function $t(e) {
  var t, i, r, s;
  return (e == null ? void 0 : e.clientX) || ((i = (t = e == null ? void 0 : e.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : i.clientX) || ((s = (r = e == null ? void 0 : e.touches) == null ? void 0 : r[0]) == null ? void 0 : s.clientX) || 0;
}
function St(e) {
  var t, i, r, s;
  return (e == null ? void 0 : e.clientY) || ((i = (t = e == null ? void 0 : e.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : i.clientY) || ((s = (r = e == null ? void 0 : e.touches) == null ? void 0 : r[0]) == null ? void 0 : s.clientY) || 0;
}
function Ot(e) {
  return {
    x: $t(e),
    y: St(e)
  };
}
function Tt(e, t) {
  const i = {};
  return t.forEach((r) => {
    r in e && e[r] !== void 0 && (i[r] = e[r]);
  }), i;
}
function Gt(e, t = void 0) {
  const i = {};
  return y(e, (r, s) => {
    r !== t && (i[s] = r);
  }), i;
}
function Mt(e) {
  return $(e) ? e : {};
}
function Dt(e, t) {
  return yt(e, t).join("");
}
function te(e, t, i = "#", r = 2, s = 12) {
  const o = B(e, t), n = [];
  for (let c = 0; c < o; c++)
    n.push(Dt(i, B(r, s)));
  return n.join(" ");
}
function ee(e, t) {
  const i = e != null ? e : 0;
  return t > i ? 100 / (t - i) : 0;
}
function ie(e, t) {
  const i = e != null ? e : 0;
  return t > i ? (t - i) / 100 : 0;
}
const T = 0;
function re(e, t, i) {
  const r = t == null ? void 0 : t.closest(e);
  if (t && r && r.scrollHeight !== r.offsetHeight)
    if (i) {
      const s = i.getBoundingClientRect(), o = r.getBoundingClientRect(), n = t.getBoundingClientRect();
      r.scrollTop = t.offsetTop - (s.top - o.top) - (s.height / 2 - n.height / 2), r.scrollTop + r.offsetHeight < t.offsetTop + t.offsetHeight && (r.scrollTop = t.offsetTop + t.offsetHeight - r.offsetHeight);
    } else r.scrollTop > t.offsetTop ? r.scrollTop = t.offsetTop - T : r.scrollTop + r.offsetHeight < t.offsetTop + t.offsetHeight && (r.scrollTop = t.offsetTop + t.offsetHeight - r.offsetHeight + T);
}
function se(e, t) {
  return e.indexOf(t) !== -1;
}
async function ne() {
  if (f()) {
    const e = await H.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${e}px`);
  }
}
function oe(e, t) {
  const i = {};
  return h(e) && h(t) && y(e, (r, s) => {
    s in t && (i[s] = r);
  }), i;
}
function ce(e, t) {
  let i = Object.keys(e).length !== Object.keys(t).length;
  return i || y(e, (r, s) => {
    r !== (t == null ? void 0 : t[s]) && (i = !0);
  }), i;
}
function ue(e) {
  switch (typeof e) {
    case "number":
      return !0;
    case "string":
      return !!e.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function ae(e, t) {
  const i = Math.floor(t);
  return e >= i && e < i + 1;
}
function le(e, t) {
  return Array.isArray(e) ? e.every((i) => U(i, t)) : U(e, t);
}
function Lt(e) {
  return [...new Set(e)];
}
function k(e, t, i = !0) {
  const r = C(e);
  return h(e) && h(t) && y(
    t,
    (s, o) => {
      const n = e == null ? void 0 : e[o];
      h(n) && h(s) ? i && Array.isArray(n) && Array.isArray(s) ? r[o] = C(Lt([...n, ...s])) : r[o] = k(
        Array.isArray(n) ? { ...n } : n,
        s,
        i
      ) : r[o] = h(s) ? C(s) : s;
    }
  ), r;
}
function fe(e, t) {
  let i = e;
  return y(t, (r, s) => {
    i = i.replace(bt(`[${s}]`), I(r));
  }), i;
}
function de(e) {
  const t = w(e);
  if (t > 0) {
    const i = String(Math.floor(t / 60)).padStart(2, "0"), r = String(t % 60).padStart(2, "0");
    return `${i}:${r}`;
  }
  return "00:00";
}
function he(e, t, {
  multiple: i = !1,
  maxlength: r = 0,
  alwaysChange: s = !0,
  notEmpty: o = !1
}) {
  if (i) {
    if (it(e)) {
      const n = e.indexOf(t), c = [...e];
      return n !== -1 ? (!o || c.length > 1) && c.splice(n, 1) : (!r || e.length < r) && c.push(t), c;
    }
    return e === t ? [] : e ? [e, t] : [t];
  }
  return s || e !== t ? t : e;
}
function ge(e, t, i) {
  if (h(e) && h(t)) {
    if (i) {
      let r = {}, s = !1;
      return y(e, (o, n) => {
        !s && (i === n || i === o) ? (s = !0, r = k(r, t)) : s ? r = k(r, { [n]: o }) : r[n] = h(o) ? C(o) : o;
      }), s ? r : k(e, t);
    }
    if (h(t))
      return k(e, t);
  }
  return C(e);
}
function It(e) {
  return e.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${String(t[1]).toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function me(e) {
  return It(e).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function ye(e) {
  return e.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(/(?<=[\w ])[A-Z]/g, (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function pe(e, t, i, r) {
  const s = w(e), o = w(t);
  return t && o < s ? `${G(o, i, r)}+` : G(s, i, r);
}
const G = (e, t, i) => t ? new Z(i).number(e) : e;
function Et(e, t) {
  return 1 / e * t;
}
function be(e, t) {
  return Et(e, t) * 100;
}
function we(e, t = !1) {
  if (typeof e == "string") {
    const i = e.trim();
    switch (i) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(i))
          try {
            return JSON.parse(i);
          } catch (r) {
            console.error("transformation: JSON error", r);
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(i))
            return parseFloat(i);
          if (/^[0-9]+$/.exec(i))
            return parseInt(i, 10);
          if (t && f() && typeof (window == null ? void 0 : window[i]) == "function")
            return window[i];
        }
    }
  }
  return e;
}
async function $e(e) {
  if (f())
    try {
      await navigator.clipboard.writeText(e);
    } catch (t) {
      document == null || document.execCommand(e);
    }
}
var Ct = /* @__PURE__ */ ((e) => (e.description = "description", e.keywords = "keywords", e.canonical = "canonical", e.robots = "robots", e.author = "author", e))(Ct || {}), vt = /* @__PURE__ */ ((e) => (e.indexFollow = "index, follow", e.noIndexFollow = "noindex, follow", e.indexNoFollow = "index, nofollow", e.noIndexNoFollow = "noindex, nofollow", e.noArchive = "noarchive", e.noSnippet = "nosnippet", e.noImageIndex = "noimageindex", e.images = "images", e.noTranslate = "notranslate", e.noPreview = "nopreview", e.textOnly = "textonly", e.noIndexSubpages = "noindex, noarchive", e.none = "none", e))(vt || {}), kt = /* @__PURE__ */ ((e) => (e.title = "og:title", e.type = "og:type", e.url = "og:url", e.image = "og:image", e.description = "og:description", e.locale = "og:locale", e.siteName = "og:site_name", e.localeAlternate = "og:locale:alternate", e.imageUrl = "og:image:url", e.imageSecureUrl = "og:image:secure_url", e.imageType = "og:image:type", e.imageWidth = "og:image:width", e.imageHeight = "og:image:height", e.imageAlt = "og:image:alt", e.video = "og:video", e.videoUrl = "og:video:url", e.videoSecureUrl = "og:video:secure_url", e.videoType = "og:video:type", e.videoWidth = "og:video:width", e.videoHeight = "og:video:height", e.audio = "og:audio", e.audioSecureUrl = "og:audio:secure_url", e.audioType = "og:audio:type", e.articlePublishedTime = "article:published_time", e.articleModifiedTime = "article:modified_time", e.articleExpirationTime = "article:expiration_time", e.articleAuthor = "article:author", e.articleSection = "article:section", e.articleTag = "article:tag", e.bookAuthor = "book:author", e.bookIsbn = "book:isbn", e.bookReleaseDate = "book:release_date", e.bookTag = "book:tag", e.musicDuration = "music:duration", e.musicAlbum = "music:album", e.musicAlbumDisc = "music:album:disc", e.musicAlbumTrack = "music:album:track", e.musicMusician = "music:musician", e.musicSong = "music:song", e.musicSongDisc = "music:song:disc", e.musicSongTrack = "music:song:track", e.musicReleaseDate = "music:release_date", e.musicCreator = "music:creator", e.videoActor = "video:actor", e.videoActorRole = "video:actor:role", e.videoDirector = "video:director", e.videoWriter = "video:writer", e.videoDuration = "video:duration", e.videoReleaseDate = "video:release_date", e.videoTag = "video:tag", e.videoSeries = "video:series", e.profileFirstName = "profile:first_name", e.profileLastName = "profile:last_name", e.profileUsername = "profile:username", e.profileGender = "profile:gender", e.productBrand = "product:brand", e.productAvailability = "product:availability", e.productCondition = "product:condition", e.productPriceAmount = "product:price:amount", e.productPriceCurrency = "product:price:currency", e.productRetailerItemId = "product:retailer_item_id", e.productCategory = "product:category", e.productEan = "product:ean", e.productIsbn = "product:isbn", e.productMfrPartNo = "product:mfr_part_no", e.productUpc = "product:upc", e.productWeightValue = "product:weight:value", e.productWeightUnits = "product:weight:units", e.productColor = "product:color", e.productMaterial = "product:material", e.productPattern = "product:pattern", e.productAgeGroup = "product:age_group", e.productGender = "product:gender", e))(kt || {}), At = /* @__PURE__ */ ((e) => (e.website = "website", e.article = "article", e.video = "video.other", e.videoTvShow = "video.tv_show", e.videoEpisode = "video.episode", e.videoMovie = "video.movie", e.musicAlbum = "music.album", e.musicPlaylist = "music.playlist", e.musicSong = "music.song", e.musicRadioStation = "music.radio_station", e.app = "app", e.product = "product", e.business = "business.business", e.place = "place", e.event = "event", e.profile = "profile", e.book = "book", e))(At || {}), xt = /* @__PURE__ */ ((e) => (e.inStock = "in stock", e.outOfStock = "out of stock", e.preorder = "preorder", e.backorder = "backorder", e.discontinued = "discontinued", e.pending = "pending", e))(xt || {}), Ft = /* @__PURE__ */ ((e) => (e.new = "new", e.used = "used", e.refurbished = "refurbished", e))(Ft || {}), Nt = /* @__PURE__ */ ((e) => (e.newborn = "newborn", e.infant = "infant", e.toddler = "toddler", e.kids = "kids", e.adult = "adult", e))(Nt || {}), Rt = /* @__PURE__ */ ((e) => (e.female = "female", e.male = "male", e.unisex = "unisex", e))(Rt || {}), Bt = /* @__PURE__ */ ((e) => (e.card = "twitter:card", e.site = "twitter:site", e.creator = "twitter:creator", e.url = "twitter:url", e.title = "twitter:title", e.description = "twitter:description", e.image = "twitter:image", e.imageAlt = "twitter:image:alt", e.imageSrc = "twitter:image:src", e.imageWidth = "twitter:image:width", e.imageHeight = "twitter:image:height", e.label1 = "twitter:label1", e.data1 = "twitter:data1", e.label2 = "twitter:label2", e.data2 = "twitter:data2", e.appNameIphone = "twitter:app:name:iphone", e.appIdIphone = "twitter:app:id:iphone", e.appUrlIphone = "twitter:app:url:iphone", e.appNameIpad = "twitter:app:name:ipad", e.appIdIpad = "twitter:app:id:ipad", e.appUrlIpad = "twitter:app:url:ipad", e.appNameGooglePlay = "twitter:app:name:googleplay", e.appIdGooglePlay = "twitter:app:id:googleplay", e.appUrlGooglePlay = "twitter:app:url:googleplay", e.player = "twitter:player", e.playerWidth = "twitter:player:width", e.playerHeight = "twitter:player:height", e.playerStream = "twitter:player:stream", e.playerStreamContentType = "twitter:player:stream:content_type", e))(Bt || {}), Pt = /* @__PURE__ */ ((e) => (e.summary = "summary", e.summaryLargeImage = "summary_large_image", e.app = "app", e.player = "player", e.product = "product", e.gallery = "gallery", e.photo = "photo", e.leadGeneration = "lead_generation", e.audio = "audio", e.poll = "poll", e))(Pt || {});
export {
  X as Api,
  b as ApiMethodItem,
  et as DataStorage,
  q as EventItem,
  D as Geo,
  Z as GeoIntl,
  L as Loading,
  Nt as MetaOpenGraphAge,
  xt as MetaOpenGraphAvailability,
  Ft as MetaOpenGraphCondition,
  Rt as MetaOpenGraphGender,
  kt as MetaOpenGraphTag,
  At as MetaOpenGraphType,
  vt as MetaRobots,
  Ct as MetaTag,
  Pt as MetaTwitterCard,
  Bt as MetaTwitterTag,
  H as ScrollbarWidth,
  Ut as anyToString,
  Ht as applyTemplate,
  yt as arrFill,
  C as copyObject,
  _ as createElement,
  Zt as domQuerySelector,
  Vt as domQuerySelectorAll,
  qt as encodeAttribute,
  Wt as eventStopPropagation,
  I as executeFunction,
  ut as executePromise,
  y as forEach,
  pt as frame,
  Jt as getAttributes,
  Yt as getClipboardData,
  dt as getColumn,
  S as getElement,
  Kt as getElementId,
  ht as getElementItem,
  V as getElementOrWindow,
  bt as getExp,
  wt as getItemByPath,
  Qt as getKey,
  rt as getLengthOfAllArray,
  Xt as getMaxLengthAllArray,
  _t as getMinLengthAllArray,
  Ot as getMouseClient,
  $t as getMouseClientX,
  St as getMouseClientY,
  Tt as getObjectByKeys,
  Gt as getObjectNoUndefined,
  Mt as getObjectOrNone,
  te as getRandomText,
  at as getRequestString,
  ee as getStepPercent,
  ie as getStepValue,
  re as goScroll,
  se as inArray,
  ne as initScrollbarOffset,
  oe as intersectKey,
  it as isArray,
  ce as isDifferent,
  f as isDomRuntime,
  E as isFilled,
  ue as isFloat,
  M as isFunction,
  lt as isInDom,
  ae as isIntegerBetween,
  F as isNull,
  J as isNumber,
  h as isObject,
  $ as isObjectNotArray,
  U as isSelected,
  le as isSelectedByList,
  x as isString,
  tt as isWindow,
  B as random,
  k as replaceRecursive,
  fe as replaceTemplate,
  de as secondToTime,
  gt as setElementItem,
  he as setValues,
  ge as splice,
  Dt as strFill,
  j as toArray,
  It as toCamelCase,
  me as toCamelCaseFirst,
  v as toDate,
  ye as toKebabCase,
  w as toNumber,
  pe as toNumberByMax,
  Et as toPercent,
  be as toPercentBy100,
  we as transformation,
  Lt as uniqueArray,
  $e as writeClipboardData
};
