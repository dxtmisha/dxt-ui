var W = Object.defineProperty;
var Q = (s, t, e) => t in s ? W(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var l = (s, t, e) => Q(s, typeof t != "symbol" ? t + "" : t, e);
import { isRef as V } from "vue";
import { geo as K } from "@dxtmisha/media";
function H(s) {
  return s instanceof Function || typeof s == "function";
}
function I(s) {
  return H(s) ? s() : s;
}
async function Y(s) {
  const t = I(s);
  return t instanceof Promise ? await t : t;
}
function $(s) {
  return !!(s && typeof s == "object");
}
function T(s, t) {
  if ($(s)) {
    const e = [];
    return s instanceof Map ? s.forEach((i, n) => e.push(t(i, n, s))) : Array.isArray(s) ? s.forEach((i, n) => e.push(t(i, n, s))) : Object.entries(s).forEach(
      ([i, n]) => e.push(t(n, i, s))
    ), e.filter((i) => i !== void 0);
  }
  return [];
}
function D(s) {
  return V(s) ? s.value : s;
}
function X(s, t = "=", e = "&") {
  return T(
    s,
    (i, n) => `${n}${t}${encodeURIComponent(String(i).trim())}`
  ).sort().join(e);
}
function g() {
  return typeof window < "u";
}
function C(s) {
  return s == null;
}
function E(s, t) {
  if (s) {
    if (t && s === "0")
      return !0;
    switch (typeof s) {
      case "bigint":
      case "number":
        return s !== 0;
      case "boolean":
        return s;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(s) ? s.length > 0 : Object.values(s).some((e) => !C(e));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(s);
      case "undefined":
        return !1;
      default:
        return !!s;
    }
  }
  return !1;
}
function p(s) {
  return $(s) && !Array.isArray(s);
}
function S(s) {
  return typeof s == "string";
}
function _(s, t) {
  return Math.floor(Math.random() * (t - s + 1) + s);
}
function O(s) {
  return Array.isArray(s) ? s : [s];
}
function J(s) {
  return g() && s === window;
}
function y(s) {
  if (g())
    return J(s) ? document.body : S(s) ? document.querySelector(s) ?? void 0 : s;
}
function z(s) {
  return J(s) ? s : y(s);
}
function tt(s) {
  return !!y(s)?.closest("html");
}
class B {
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
  constructor(t, e = ["click"], i, n, r) {
    this.listener = i, this.options = n, this.detail = r, this.element = z(t), this.elementControl = y(t), this.type = O(e);
  }
  /**
   * Element.
   *
   * Элемент.
   */
  element;
  /**
   * Element for checking. If the element is missing in the DOM, the event is turned off.
   *
   * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
   */
  elementControl;
  elementControlEdit;
  /**
   * A case-sensitive string representing the event type to listen for.
   *
   * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
   */
  type;
  /**
   * The object that receives a notification (an object that implements the Event interface)
   * when an event of the specified type occurs. This must be null, an object with a
   * handleEvent() method, or a JavaScript function.
   *
   * Объект, который принимает уведомление, когда событие указанного типа произошло.
   * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
   */
  listenerRecent = (t) => {
    tt(this.elementControl) ? (this.listener?.call(this.element, t, this.detail), $(this.options) && this.options?.once && this.stop()) : this.stop();
  };
  /**
   * Event states.
   *
   * Состояния события.
   */
  activity = !1;
  activityItems = [];
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
    const e = z(t);
    return this.elementControlEdit || (this.elementControl = y(t)), this.element = e, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(t) {
    return this.elementControl = y(t), this.elementControlEdit = !C(this.elementControl), this.elementControlEdit || (this.elementControl = y(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(t) {
    return this.type = O(t), this.reset(), this;
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
      (e) => this.element?.dispatchEvent(new CustomEvent(e, { detail: t }))
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
      listener: i,
      observer: n
    }) => {
      n ? n.disconnect() : i ? t?.removeEventListener(e, i) : t?.removeEventListener(e, this.listenerRecent);
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
        (e) => this.listenerRecent(e?.[0])
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
      const e = (i) => {
        t || (t = !0, requestAnimationFrame(() => {
          this.listenerRecent(i), t = !1;
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
const F = "ui-loading", v = class v {
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
    new B(window, F, t).setElementControl(e).start();
  }
  /**
   * Calls the event listener.
   *
   * Вызывает слушателя событий.
   */
  static dispatch() {
    this.event?.dispatch({ loading: this.is() });
  }
};
l(v, "value", 0), l(v, "event"), g() && (v.event = new B(window, F));
let d = v;
function et(s) {
  return JSON.parse(JSON.stringify(s));
}
function P(s) {
  switch (typeof s) {
    case "number":
      return !0;
    case "string":
      return !!s.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function j(s) {
  if (typeof s == "number")
    return s;
  if (!s)
    return 0;
  let t = s.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
function st(s, t) {
  return C(s) ? !1 : Array.isArray(t) ? t.includes(s) : P(s) && P(t) ? j(s) === j(t) : s === t;
}
let M = "ui-storage";
class it {
  /**
   * Constructor
   * @param name value name/ название значения
   * @param isSession should we use a session/ использовать ли сессию
   */
  constructor(t, e = !1) {
    this.name = t, this.isSession = e;
    const i = `${e ? "session" : "storage"}#${t}`;
    if (i in R)
      return R[i];
    const n = this.getValue();
    n && (this.value = n.value, this.age = n.age), R[i] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(t) {
    M = t;
  }
  value;
  age;
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
    return this.value = I(t), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? this.remove() : this.getMethod()?.setItem(this.getIndex(), JSON.stringify({
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
    return this.getMethod()?.removeItem(this.getIndex()), this;
  }
  /**
   * Checks for storage time limit.
   *
   * Проверяет на лимит времени хранения.
   * @param cache cache time/ время кэширования
   */
  isCache(t) {
    return C(t) || this.age && this.age + t * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.
   *
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (g())
      return this.isSession ? window?.sessionStorage : window?.localStorage;
  }
  /**
   * Getting the storage key name.
   *
   * Получение имени ключа в хранилище.
   */
  getIndex() {
    return `${M}${this.name}`;
  }
  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   */
  getValue() {
    const t = this.getMethod()?.getItem(this.getIndex());
    if (t)
      try {
        return JSON.parse(t);
      } catch (e) {
        console.error("DataStorage", e);
      }
  }
}
const R = {}, nt = "geo-code", o = class o {
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
    return K;
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
    return t && (t.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (e = this.getByCodeFull(t)), !e && t.match(/[A-Z]{2}/) && (e = this.getByCountry(this.toCountry(t))), !e && t.match(/[a-z]{2}/) && (e = this.getByLanguage(this.toLanguage(t)))), this.toFull(et(e ?? this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(t) {
    return this.getList().find(
      (e) => st(t, [
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
    return this.getList().find((e) => e.country === t || e?.countryAlternative?.find((i) => i === t));
  }
  /**
   * Returns the full data by language.
   *
   * Возвращает полные данные по языку.
   * @param language language/ язык
   */
  static getByLanguage(t) {
    return this.getList().find((e) => e.language === t || e?.languageAlternative?.find((i) => i === t));
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
    return g() && (this.storage.get() || document.querySelector("html")?.lang || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
      firstDay: t?.firstDay || "Mo"
    };
  }
};
l(o, "storage", new it(nt)), l(o, "location"), l(o, "item"), l(o, "language"), l(o, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), o.location = o.findLocation(), o.language = o.findLanguage(o.location), o.item = o.getByCode(o.location);
let w = o;
var rt = /* @__PURE__ */ ((s) => (s.get = "GET", s.post = "POST", s.put = "PUT", s.delete = "DELETE", s))(rt || {});
const x = "d-response-loading", k = [];
class m {
  static url = "/api/";
  static response = [];
  static responseLoading;
  static headers = {};
  static requestDefault;
  static preparation = !1;
  static preparationItem;
  static preparationEndItem;
  static status;
  static statusText;
  static error;
  static lastResponse;
  static lastMessage;
  /**
   * Is the server local.
   *
   * Является ли сервер локальный.
   */
  static isLocalhost() {
    return typeof location > "u" || location.hostname === "localhost";
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
  static getHeaders(t, e = "application/json;charset=UTF-8") {
    if (t !== null) {
      const i = {
        ...this.headers,
        ...t || {}
      };
      return E(e) && (i["Content-Type"] = e), i;
    }
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
  static getBody(t = {}, e = "GET") {
    if (t instanceof FormData)
      return t;
    if (e !== "GET" && E(t))
      return S(t) ? t : JSON.stringify(t);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(t, e = "", i = "GET") {
    if (i === "GET") {
      const n = e.match(/\?/) ? "&" : "?", r = typeof t == "object" ? X(t) : t;
      if (E(r))
        return `${n}${r}`;
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
      const e = D(this.requestDefault);
      if (t instanceof FormData)
        T(e, (i, n) => {
          t.has(n) || t.set(n, i);
        });
      else if (p(t))
        return {
          ...e,
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
    return p(t) && (this.headers = t), m;
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
    return this.url = t, m;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(t) {
    return this.preparationItem = t, m;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(t) {
    return this.preparationEndItem = t, m;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(t) {
    return S(t) ? await this.fetch({
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
      method: "GET"
      /* get */
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
      method: "POST"
      /* post */
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
      method: "PUT"
      /* put */
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
      method: "DELETE"
      /* delete */
    });
  }
  /**
   * Adding cached requests.
   *
   * Добавление кешированных запросов.
   * @param response data for caching/ данные для кеширования
   */
  static addResponse(t) {
    return this.response.push(...O(t)), m;
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
  static getResponse(t = "", e, i, n) {
    return this.response.find((r) => {
      if (I(D(r?.disable)) !== !0 && (r.path instanceof RegExp && t.match(r.path) || t === r.path) && e === r.method && (k.indexOf(r) === -1 || n)) {
        const a = this.addRequestDefault(r?.request);
        let h = !1;
        if (i === a || a === "*any" ? h = !0 : E(i) && E(a) && p(i) && p(a) && !(i instanceof FormData) && !(a instanceof FormData) && Object.values(i).length === Object.values(a).length && (h = Object.entries(a).reduce(
          (u, [c, f]) => u && (f === i?.[c] || f === "*any"),
          !0
        )), h)
          return n && console.warn(`Response type: ${r.path}`), k.push(r), !0;
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
    const {
      toData: e = !0,
      hideError: i = !1,
      queryReturn: n = void 0,
      globalPreparation: r = !0,
      globalEnd: a = !0
    } = t, h = await this.makeEmulator(t);
    if (h)
      return h;
    let u = {};
    d.show();
    try {
      this.preparationItem && r && await this.makePreparation();
      const c = await this.makeQuery(t), f = a && this.preparationEndItem ? await this.makePreparationEnd(c) : {};
      if (this.status = c.status, this.statusText = c.statusText, f?.reset)
        return d.hide(), await this.fetch(t);
      n ? u = await n(c) : "data" in f ? u = f.data : (c.headers.get("Content-Type") ?? "").match("application/json") ? u = await c.json() : u = { data: await c.text() };
    } catch (c) {
      i && console.error("Api: ", c), this.error = c;
    }
    return d.hide(), this.makeData(u, e);
  }
  /**
   * Emulates an execution request.
   *
   * Эмулирует запрос выполнения.
   * @param response Data for pre-request/ Данные для пред-запроса
   * @param request data for the request/ данные для запроса
   */
  static fetchResponse(t, e) {
    return this.startResponseLoading(), new Promise((i) => {
      Y(
        H(t.response) ? t.response(e) : t.response
      ).then((n) => {
        D(t?.lag) ? (d.show(), setTimeout(() => {
          this.stopResponseLoading(), i(n), d.hide();
        }, _(0, 2e3))) : (this.stopResponseLoading(), i(n));
      });
    });
  }
  /**
   * Выполнение эмулятора, если доступно
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeEmulator(t) {
    const {
      path: e = "",
      method: i = "GET",
      global: n = i === "GET",
      devMode: r = !1
    } = t;
    if (n || r) {
      const a = this.addRequestDefault(t.request), h = this.getResponse(e, i, a, r);
      if (h) {
        const u = await this.fetchResponse(h, a);
        return r && console.warn("Response data:", e, a, u), u;
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
    const e = this.addRequestDefault(t.request), {
      api: i = !0,
      path: n = "",
      pathFull: r = void 0,
      method: a = "GET",
      headers: h = {},
      type: u = "application/json;charset=UTF-8",
      init: c = {}
    } = t, f = r ?? this.getUrl(n, i), Z = `${f}${this.getBodyForGet(e, f, a)}`, N = this.getHeaders(h, u), A = {
      ...c,
      method: a,
      body: this.getBody(e, a)
    };
    return N && (A.headers = N), await fetch(Z, A);
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
    let e = {};
    return this.preparationEndItem && (e = await this.preparationEndItem(t)), e;
  }
  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  static makeData(t, e) {
    if (this.lastResponse = t, t && p(t) && ("message" in t && (this.lastMessage = String(t.message)), e && "data" in t)) {
      if (p(t.data)) {
        const i = { ...t.data };
        return "success" in t && (i.success = t.success), i;
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
    this.responseLoading && clearTimeout(this.responseLoading), g() && document.body.classList.add(x);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  static stopResponseLoading() {
    this.responseLoading = setTimeout(() => {
      this.responseLoading = void 0, g() && document.body.classList.remove(x);
    }, 1200);
  }
}
const b = "__UI_ICON", U = 320, q = "--LOAD--", L = class L {
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
  static async get(t, e = "", i = 1e3 * 60 * 3) {
    const n = this.icons?.[this.getName(t)] ?? this.icons?.[t] ?? `${t.replace(/^@/, e ?? this.url)}.svg`;
    return typeof n == "string" ? n === q && i > 0 ? (await this.wait(), this.get(t, e, i - U)) : n : await n;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return T(this.icons, (t, e) => e.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${m.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(t)] = q;
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
    T(t, (e, i) => this.add(i, e));
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
    return new Promise((t) => setTimeout(() => t(), U));
  }
};
l(L, "icons", {}), l(L, "url", "/icons/"), g() && (b in window || (window[b] = {}), L.icons = window[b]);
let G = L;
export {
  m as A,
  it as D,
  B as E,
  w as G,
  G as I,
  d as L,
  E as a,
  C as b,
  S as c,
  O as d,
  I as e,
  T as f,
  X as g,
  y as h,
  g as i,
  $ as j,
  p as k,
  D as l,
  st as m,
  et as n,
  rt as o,
  Y as p,
  z as q,
  _ as r,
  H as s,
  j as t,
  tt as u,
  P as v,
  J as w
};
