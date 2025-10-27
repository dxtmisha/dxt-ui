var ct = Object.defineProperty;
var ut = (i, t, e) => t in i ? ct(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var n = (i, t, e) => ut(i, typeof t != "symbol" ? t + "" : t, e);
import { geo as lt } from "@dxtmisha/media";
function O(i) {
  return !!(i && typeof i == "object");
}
function b(i, t) {
  if (O(i)) {
    const e = [];
    return i instanceof Map ? i.forEach((s, a) => e.push(t(s, a, i))) : Array.isArray(i) ? i.forEach((s, a) => e.push(t(s, a, i))) : Object.entries(i).forEach(
      ([s, a]) => e.push(t(a, s, i))
    ), e.filter((s) => s !== void 0);
  }
  return [];
}
function it(i, t = "=", e = "&") {
  return b(
    i,
    (s, a) => `${a}${t}${encodeURIComponent(String(s).trim())}`
  ).sort().join(e);
}
function M(i) {
  return i == null;
}
function L(i, t) {
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
function m(i) {
  return O(i) && !Array.isArray(i);
}
function T(i) {
  return typeof i == "string";
}
function gt(i) {
  return JSON.parse(JSON.stringify(i));
}
function u() {
  return typeof window != "undefined" && !!window.document;
}
function W(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^[0-9]+$/);
    default:
      return !1;
  }
}
function P(i) {
  if (typeof i == "number")
    return i;
  if (!i)
    return 0;
  let t = i.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
function ft(i, t) {
  return M(i) ? !1 : Array.isArray(t) ? t.includes(i) : W(i) && W(t) ? P(i) === P(t) : i === t;
}
function at(i) {
  return i instanceof Function || typeof i == "function";
}
function y(i) {
  return at(i) ? i() : i;
}
const N = {};
let J = "ui-storage";
class z {
  /**
   * Constructor
   * @param name value name/ название значения
   * @param isSession should we use a session/ использовать ли сессию
   */
  constructor(t, e = !1) {
    n(this, "value");
    n(this, "age");
    this.name = t, this.isSession = e;
    const s = `${e ? "session" : "storage"}#${t}`;
    if (s in N)
      return N[s];
    this.make(), N[s] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(t) {
    J = t;
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
    return this.value = y(t), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? this.remove() : (e = this.getMethod()) == null || e.setItem(this.getIndex(), JSON.stringify({
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
    if (u())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the storage key name.
   *
   * Получение имени ключа в хранилище.
   */
  getIndex() {
    return `${J}__${this.name}`;
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
const dt = "geo-code", o = class o {
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
    return lt;
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
    return t && (t.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (e = this.getByCodeFull(t)), !e && t.match(/[A-Z]{2}/) && (e = this.getByCountry(this.toCountry(t))), !e && t.match(/[a-z]{2}/) && (e = this.getByLanguage(this.toLanguage(t)))), this.toFull(gt(e != null ? e : this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(t) {
    return this.getList().find(
      (e) => ft(t, [
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
      return e.country === t || ((s = e == null ? void 0 : e.countryAlternative) == null ? void 0 : s.find((a) => a === t));
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
      return e.language === t || ((s = e == null ? void 0 : e.languageAlternative) == null ? void 0 : s.find((a) => a === t));
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
    return u() && (this.storage.get() || ((t = document.querySelector("html")) == null ? void 0 : t.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
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
n(o, "storage", new z(dt)), n(o, "location"), n(o, "item"), n(o, "language"), n(o, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), o.location = o.findLocation(), o.language = o.findLanguage(o.location), o.item = o.getByCode(o.location);
let S = o;
function rt(i) {
  return u() && i === window;
}
function p(i) {
  var t;
  if (u())
    return rt(i) ? document.body : T(i) ? (t = document.querySelector(i)) != null ? t : void 0 : i;
}
function V(i) {
  return rt(i) ? i : p(i);
}
function pt(i) {
  var t;
  return !!((t = p(i)) != null && t.closest("html"));
}
function A(i) {
  return Array.isArray(i) ? i : [i];
}
class Z {
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
  constructor(t, e = ["click"], s, a, r) {
    /**
     * Element.
     *
     * Элемент.
     */
    n(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    n(this, "elementControl");
    n(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    n(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    n(this, "listenerRecent", (t) => {
      var e, s;
      pt(this.elementControl) ? ((e = this.listener) == null || e.call(this.element, t, this.detail), O(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    n(this, "activity", !1);
    n(this, "activityItems", []);
    this.listener = s, this.options = a, this.detail = r, this.element = V(t), this.elementControl = p(t), this.type = A(e);
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
    const e = V(t);
    return this.elementControlEdit || (this.elementControl = p(t)), this.element = e, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(t) {
    return this.elementControl = p(t), this.elementControlEdit = !M(this.elementControl), this.elementControlEdit || (this.elementControl = p(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(t) {
    return this.type = A(t), this.reset(), this;
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
      observer: a
    }) => {
      a ? a.disconnect() : s ? t == null || t.removeEventListener(e, s) : t == null || t.removeEventListener(e, this.listenerRecent);
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
const q = "ui-loading", D = class D {
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
    u() && new Z(window, q, t).setElementControl(e).start();
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
n(D, "value", 0), n(D, "event"), u() && (D.event = new Z(window, q));
let E = D;
class yt {
  constructor() {
    /** Default headers/ Заголовки по умолчанию */
    n(this, "headers", {});
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
      const s = {
        ...this.headers,
        ...t || {}
      };
      return L(e) && (s["Content-Type"] = e), s;
    }
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  set(t) {
    return m(t) && (this.headers = t), this;
  }
}
var l = /* @__PURE__ */ ((i) => (i.get = "GET", i.post = "POST", i.put = "PUT", i.delete = "DELETE", i))(l || {});
class mt {
  constructor() {
    /** Default request data/ Данные запроса по умолчанию */
    n(this, "value");
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
      else if (m(t))
        return {
          ...e,
          ...t
        };
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
class vt {
  constructor() {
    n(this, "value");
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
    return t && m(t) && "message" in t && this.setLastMessage(String(t.message)), this.set({ lastResponse: t }), this;
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
async function wt(i) {
  const t = y(i);
  return t instanceof Promise ? await t : t;
}
function Et(i, t) {
  return Math.floor(Math.random() * (t - i + 1) + i);
}
const K = "d-response-loading";
class bt {
  /**
   * Constructor
   * @param requestDefault default request processor/ процессор запросов по умолчанию
   */
  constructor(t) {
    /** List of first-time API requests/ Список первичных API запросов */
    n(this, "first", []);
    /** Cached responses/ Кешированные ответы */
    n(this, "response", []);
    /** Loading instance/ Экземпляр загрузки */
    n(this, "loading");
    /** Developer mode flag/ Флаг режима разработчика */
    n(this, "devMode", !1);
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
  get(t = "", e, s, a) {
    return this.response.find((r) => !this.isDisable(r) && this.isPath(r, t) && e === r.method && this.isFirst(r, a) && this.isResponse(r, s) ? (this.isDevMode(a) && console.warn(`Response type: ${r.path}`), this.first.push(r), !0) : !1);
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
    return this.response.push(...A(t)), this;
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
      method: s = l.get,
      global: a = s === l.get,
      devMode: r = !1
    } = t;
    if (a || this.isDevMode(r)) {
      const h = this.requestDefault.request(t.request), g = this.get(e, s, h, r);
      if (g) {
        const f = await this.fetch(g, h);
        return this.isDevMode(r) && console.warn("Response data:", e, h, f), f;
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
    return !!y(t == null ? void 0 : t.disable);
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
    return e === s || s === "*any" || L(e) && L(s) && m(e) && m(s) && !(e instanceof FormData) && !(s instanceof FormData) && Object.values(e).length === Object.values(s).length && Object.entries(s).reduce(
      (a, [r, h]) => a && (h === (e == null ? void 0 : e[r]) || h === "*any"),
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
      wt(
        at(t.response) ? t.response(e) : t.response
      ).then((a) => {
        t != null && t.lag ? (E.show(), setTimeout(() => {
          this.stopResponseLoading(), s(a), E.hide();
        }, Et(0, 2e3))) : (this.stopResponseLoading(), s(a));
      });
    });
  }
  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  startResponseLoading() {
    this.loading && clearTimeout(this.loading), u() && document.body.classList.add(K);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  stopResponseLoading() {
    this.loading = setTimeout(() => {
      this.loading = void 0, u() && document.body.classList.remove(K);
    }, 1200);
  }
}
class Lt {
  constructor() {
    /** Function for call before the request/ Функция для вызова перед запросом */
    n(this, "callback");
    /** Function for call after the request/ Функция для вызова после запроса */
    n(this, "callbackEnd");
    /** Is the preparation in progress/ Идет ли подготовка */
    n(this, "loading", !1);
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
const c = class c {
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
    return `${e ? this.url : ""}${t}`.replace("{locale}", S.getLocation()).replace("{country}", S.getCountry()).replace("{language}", S.getLanguage());
  }
  /**
   * Getting data for the body.
   *
   * Получение данных для тела.
   * @param request this request/ данный запрос
   * @param method method for request/ метод запрос
   */
  static getBody(t = {}, e = l.get) {
    if (t instanceof FormData)
      return t;
    if (e !== l.get && L(t))
      return T(t) ? t : JSON.stringify(t);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(t, e = "", s = l.get) {
    if (s === l.get) {
      const a = e.match(/\?/) ? "&" : "?", r = typeof t == "object" ? it(t) : t;
      if (L(r))
        return `${a}${r}`;
    }
    return "";
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(t) {
    return this.headers.set(t), c;
  }
  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(t) {
    return this.requestDefault.set(t), c;
  }
  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(t) {
    return this.url = t, c;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(t) {
    return this.preparation.set(t), c;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(t) {
    return this.preparation.setEnd(t), c;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(t) {
    return T(t) ? await this.fetch({
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
      method: l.get
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
      method: l.post
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
      method: l.put
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
      method: l.delete
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
      hideError: s = !1,
      queryReturn: a = void 0,
      globalPreparation: r = !0,
      globalEnd: h = !0
    } = t, g = await this.response.emulator(t);
    if (g)
      return g;
    let f = {};
    E.show();
    try {
      await this.preparation.make(r);
      const d = await this.makeQuery(t), v = await this.preparation.makeEnd(h, d);
      if (this.status.setStatus(
        d.status,
        d.statusText
      ), v != null && v.reset)
        return E.hide(), await this.fetch(t);
      f = await this.readData(
        d,
        a,
        v
      );
    } catch (d) {
      s || console.error("Api: ", d), this.status.setError(String(d));
    }
    return E.hide(), this.makeData(f, e);
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
    var a;
    return e ? await e(t) : "data" in s ? s.data : ((a = t.headers.get("Content-Type")) != null ? a : "").match("application/json") ? await t.json() : { data: await t.text() };
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
      path: a = "",
      pathFull: r = void 0,
      method: h = l.get,
      headers: g = {},
      type: f = "application/json;charset=UTF-8",
      init: d = {}
    } = t, v = r != null ? r : this.getUrl(a, s), ot = `${v}${this.getBodyForGet(e, v, h)}`, j = this.headers.get(g, f), U = {
      ...d,
      method: h,
      body: this.getBody(e, h)
    };
    return j && (U.headers = j), await fetch(ot, U);
  }
  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  static makeData(t, e) {
    if (this.status.setLastResponse(t), t && e && m(t) && "data" in t) {
      if (m(t.data)) {
        const s = { ...t.data };
        return "success" in t && (s.success = t.success), s;
      }
      return t.data;
    }
    return t;
  }
};
n(c, "url", "/api/"), n(c, "headers", new yt()), n(c, "requestDefault", new mt()), n(c, "status", new vt()), n(c, "response", new bt(c.requestDefault)), n(c, "preparation", new Lt());
let F = c;
class Ct {
  /**
   * Constructor
   * @param callback function for the cache/ функция для кэша
   */
  constructor(t) {
    n(this, "cache");
    n(this, "cacheOld");
    n(this, "comparisons", []);
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
class St {
  constructor() {
    n(this, "cache", {});
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
    return t in this.cache || (this.cache[t] = new Ct(e)), this.cache[t];
  }
}
const R = class R {
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
n(R, "cache"), R.cache = new St();
let Q = R;
function nt(i, t = !1) {
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
          if (t && u() && typeof (window == null ? void 0 : window[e]) == "function")
            return window[e];
        }
    }
  }
  return i;
}
const Dt = "cookie-block";
class ht {
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
n(ht, "storage", new z(Dt));
const $ = {}, x = class x {
  constructor(t) {
    n(this, "value");
    n(this, "options", {});
    if (this.name = t, t in B)
      return B[t];
    this.value = $ == null ? void 0 : $[t], B[t] = this;
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
    this.value = y(t), Object.assign(this.options, e), this.update();
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
    var t, e, s, a, r;
    if (u() && !ht.get()) {
      const h = String((t = this.value) != null ? t : "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(h)}`,
        `max-age=${h === "" ? "-1" : this.getAge()}`,
        `SameSite=${(s = (e = this.options) == null ? void 0 : e.sameSite) != null ? s : "strict"}`,
        ...(r = (a = this.options) == null ? void 0 : a.arguments) != null ? r : []
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
      e && L(s) && ($[e] = nt(s));
    }
  }
};
u() && x.updateData();
let Y = x;
const B = {}, C = class C {
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
    let e = this.map, s, a = "";
    return this.toNumber(t).forEach((r) => {
      var h;
      a === "" && r in e ? (s = e[r], e = (h = s == null ? void 0 : s.next) != null ? h : {}) : a += r;
    }), {
      item: s,
      phone: a
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
    if (L(t) && Array.isArray(e) && e.length > 0) {
      const s = this.removeZero(t), a = s.length;
      for (const r of e)
        if (this.getUnnecessaryLength(r) === a)
          return this.toStandard(s, r);
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
    const t = b(S.getList(), (e) => {
      if (e != null && e.phoneMask)
        return {
          phone: (e == null ? void 0 : e.phoneCode) && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (e == null ? void 0 : e.phoneWithin) || 0,
          mask: A(e.phoneMask),
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
        let s = this.map, a;
        if (this.toNumber(e).forEach((r) => {
          var h;
          r in s || (s[r] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), a = s[r], s = (h = a == null ? void 0 : a.next) != null ? h : {};
        }), a) {
          a.value === void 0 && (a.info = t, a.value = t.value);
          const r = this.toWithin(e, t.within);
          a.mask.push(r), a.maskFull.push(r.replace(/\d/ig, "*")), a.items.push(t);
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
n(C, "list", []), n(C, "map", {}), C.makeList(), C.makeMap();
let X = C;
const w = class w {
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
    var a;
    const s = y(e);
    s !== ((a = this.hash) == null ? void 0 : a[t]) && (this.hash[t] = s, this.update());
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
      (...e) => (t[String(e[1])] = nt(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${it(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
    b(this.watch, (e, s) => {
      var a;
      ((a = this.hash) == null ? void 0 : a[s]) !== (t == null ? void 0 : t[s]) && e.forEach((r) => r(t[s]));
    });
  }
};
n(w, "hash", {}), n(w, "watch", {}), n(w, "block", !1), u() && (w.reload(), addEventListener("hashchange", () => w.reload()));
let H = w;
const I = "__UI_ICON", G = 320, _ = "--LOAD--", k = class k {
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
    var r, h, g, f;
    const a = (f = (g = (r = this.icons) == null ? void 0 : r[this.getName(t)]) != null ? g : (h = this.icons) == null ? void 0 : h[t]) != null ? f : `${t.replace(/^@/, e != null ? e : this.url)}.svg`;
    return typeof a == "string" ? a === _ && s > 0 ? (await this.wait(), this.get(t, e, s - G)) : a : await a;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return b(this.icons, (t, e) => e.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${F.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(t)] = _;
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
    b(t, (e, s) => this.add(s, e));
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
    return new Promise((t) => setTimeout(() => t(), G));
  }
};
n(k, "icons", {}), n(k, "url", "/icons/"), u() && (I in window || (window[I] = {}), k.icons = window[I]);
let tt = k;
function kt(i, t, e) {
  var s, a;
  return (a = (s = p(i)) == null ? void 0 : s[t]) != null ? a : e;
}
function Ot(i, t, e) {
  const s = p(i);
  if (s) {
    const a = kt(s, t);
    if (O(a) && O(e))
      b(e, (r, h) => {
        a[h] = y(r);
      });
    else {
      const r = y(e);
      !(t in s) && typeof r == "string" ? s.setAttribute(t.toString(), r) : s[t] = y(e);
    }
  }
  return s;
}
function et(i, t = "div", e, s) {
  if (!u())
    return;
  const a = document.createElement(t);
  return typeof e == "function" ? e(a) : m(e) && b(e, (r, h) => {
    Ot(a, h, r);
  }), i == null || i.insertBefore(a, s != null ? s : null), a;
}
class st {
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
    return et(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", et(t, "div", (e) => {
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
n(st, "storage", new z("scrollbar", !0)), n(st, "calculate", !1);
export {
  F as A,
  kt as B,
  Y as C,
  z as D,
  Z as E,
  V as F,
  S as G,
  H,
  tt as I,
  it as J,
  at as K,
  E as L,
  pt as M,
  W as N,
  rt as O,
  Ot as P,
  nt as Q,
  l as R,
  st as S,
  M as a,
  T as b,
  et as c,
  L as d,
  A as e,
  b as f,
  m as g,
  O as h,
  u as i,
  p as j,
  ft as k,
  gt as l,
  y as m,
  mt as n,
  yt as o,
  Lt as p,
  bt as q,
  Et as r,
  vt as s,
  P as t,
  St as u,
  Ct as v,
  Q as w,
  ht as x,
  X as y,
  wt as z
};
