var Vt = Object.defineProperty;
var Kt = (s, t, e) => t in s ? Vt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var c = (s, t, e) => Kt(s, typeof t != "symbol" ? t + "" : t, e);
import { geo as Yt } from "@dxtmisha/media";
function D(s, t) {
  return t ? Object.assign({}, s, t) : Object.assign({}, s);
}
function m(s) {
  return !!(s && typeof s == "object");
}
function d(s, t, e) {
  if (m(s)) {
    const i = [];
    return s instanceof Map ? s.forEach((r, o) => i.push(t(r, o, s))) : Array.isArray(s) ? s.forEach((r, o) => i.push(t(r, o, s))) : Object.entries(s).forEach(
      ([r, o]) => i.push(t(o, r, s))
    ), e ? i : i.filter((r) => r !== void 0);
  }
  return [];
}
function Pt(s, t = "=", e = "&") {
  return d(
    s,
    (i, r) => `${r}${t}${encodeURIComponent(String(i).trim())}`
  ).sort().join(e);
}
function ht(s) {
  return Array.isArray(s);
}
function X(s) {
  return s == null;
}
function y(s, t) {
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
        return Array.isArray(s) ? s.length > 0 : Object.values(s).some((e) => !X(e));
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
function A(s) {
  return m(s) && !Array.isArray(s);
}
function j(s) {
  return typeof s == "string";
}
function V(s) {
  return JSON.parse(JSON.stringify(s));
}
function l() {
  return typeof window != "undefined" && !!window.document;
}
function yt(s) {
  switch (typeof s) {
    case "number":
      return !0;
    case "string":
      return !!s.match(/^-?[0-9]+(\.[0-9]+)?$/);
    default:
      return !1;
  }
}
function k(s) {
  if (typeof s == "number")
    return s;
  if (!s)
    return 0;
  let t = s.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
function at(s, t) {
  return X(s) ? !1 : Array.isArray(t) ? t.includes(s) : yt(s) && yt(t) ? k(s) === k(t) : s === t;
}
function lt(s) {
  return s instanceof Function || typeof s == "function";
}
function B(s) {
  return lt(s) ? s() : s;
}
function ct() {
  return location.href.startsWith("data:");
}
const it = {};
let $t = "ui-storage";
class et {
  /**
   * Constructor
   * @param name value name/ название значения
   * @param isSession should we use a session/ использовать ли сессию
   */
  constructor(t, e = !1) {
    c(this, "value");
    c(this, "age");
    this.name = t, this.isSession = e;
    const i = `${e ? "session" : "storage"}#${t}`;
    if (i in it)
      return it[i];
    this.make(), it[i] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(t) {
    $t = t;
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
    return this.value = B(t), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? this.remove() : (e = this.getMethod()) == null || e.setItem(this.getIndex(), JSON.stringify({
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
    return this.value = void 0, this.age = void 0, (t = this.getMethod()) == null || t.removeItem(this.getIndex()), this;
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
    return X(t) || this.age && this.age + t * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.
   *
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (l() && !ct()) {
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
    return `${$t}__${this.name}`;
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
      } catch (i) {
        console.error("DataStorage", i);
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
const qt = "geo-code", w = class w {
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
    return D(this.item, {
      language: this.language
    });
  }
  /**
   * Returns the full list of countries.
   *
   * Возвращает полный список стран.
   */
  static getList() {
    return Yt;
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
    return t && (t.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (e = this.getByCodeFull(t)), !e && t.match(/[A-Z]{2}/) && (e = this.getByCountry(this.toCountry(t))), !e && t.match(/[a-z]{2}/) && (e = this.getByLanguage(this.toLanguage(t)))), this.toFull(V(e != null ? e : this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(t) {
    return this.getList().find(
      (e) => at(t, [
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
      var i;
      return e.country === t || ((i = e == null ? void 0 : e.countryAlternative) == null ? void 0 : i.find((r) => r === t));
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
      var i;
      return e.language === t || ((i = e == null ? void 0 : e.languageAlternative) == null ? void 0 : i.find((r) => r === t));
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
    return D(t, {
      standard: this.toStandard(t),
      firstDay: (t == null ? void 0 : t.firstDay) || "Mo"
    });
  }
};
c(w, "storage", new et(qt)), c(w, "location"), c(w, "item"), c(w, "language"), c(w, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), w.location = w.findLocation(), w.language = w.findLanguage(w.location), w.item = w.getByCode(w.location);
let b = w;
function Wt(s) {
  return l() && s === window;
}
function E(s) {
  var t;
  if (l())
    return Wt(s) ? document.body : j(s) ? (t = document.querySelector(s)) != null ? t : void 0 : s;
}
function pt(s) {
  return Wt(s) ? s : E(s);
}
function Jt(s) {
  var t;
  return !!((t = E(s)) != null && t.closest("html"));
}
function Y(s) {
  return Array.isArray(s) ? s : [s];
}
class bt {
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
  constructor(t, e = ["click"], i, r, o) {
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
      var e, i;
      Jt(this.elementControl) ? ((e = this.listener) == null || e.call(this.element, t, this.detail), m(this.options) && ((i = this.options) != null && i.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    c(this, "activity", !1);
    c(this, "activityItems", []);
    this.listener = i, this.options = r, this.detail = o, this.element = pt(t), this.elementControl = E(t), this.type = Y(e);
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
    const e = pt(t);
    return this.elementControlEdit || (this.elementControl = E(t)), this.element = e, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(t) {
    return this.elementControl = E(t), this.elementControlEdit = !X(this.elementControl), this.elementControlEdit || (this.elementControl = E(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(t) {
    return this.type = Y(t), this.reset(), this;
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
        var i;
        return (i = this.element) == null ? void 0 : i.dispatchEvent(new CustomEvent(e, { detail: t }));
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
      listener: i,
      observer: r
    }) => {
      r ? r.disconnect() : i ? t == null || t.removeEventListener(e, i) : t == null || t.removeEventListener(e, this.listenerRecent);
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
const wt = "ui-loading", H = class H {
  /**
   * Check if the loader is active now.
   *
   * Проверить, активен ли сейчас загрузчик.
   */
  static is() {
    return this.value > 0;
  }
  /**
   * Get current loading value.
   *
   * Получить текущее значение загрузки.
   */
  static get() {
    return this.value;
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
    if (l()) {
      const i = new bt(window, wt, t).setElementControl(e).start();
      this.registrationList.push({
        item: i,
        listener: t,
        element: e
      });
    }
  }
  /**
   * Unregistration of an event.
   *
   * Отмена регистрации события.
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param element element/ элемент
   */
  static unregistrationEvent(t, e) {
    this.registrationList = this.registrationList.filter((i) => i.listener === t && i.element === e ? (i.item.stop(), !1) : !0);
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
c(H, "value", 0), c(H, "event"), c(H, "registrationList", []), l() && (H.event = new bt(window, wt));
let R = H;
class Mt {
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
      const i = D(
        this.headers,
        t
      );
      return y(e) && (i["Content-Type"] = e), i;
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
var C = /* @__PURE__ */ ((s) => (s.get = "GET", s.post = "POST", s.put = "PUT", s.delete = "DELETE", s))(C || {});
class Qt {
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
        return D(e, t);
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
    for (const i in e)
      t.has(i) || t.set(i, e[i]);
  }
}
class vt {
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
   * Returns the last status type.
   *
   * Возвращает последний тип статуса.
   */
  getStatusType() {
    var t;
    return (t = this.get()) == null ? void 0 : t.lastStatus;
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
    return t && A(t) && ("message" in t && this.setLastMessage(String(t.message)), "status" in t && this.setLastStatus(String(t.status))), this.set({ lastResponse: t }), this;
  }
  /**
   * Sets the last status.
   *
   * Устанавливает последний статус.
   * @param status status/ статус
   */
  setLastStatus(t) {
    return this.set({ lastStatus: t }), this;
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
async function Xt(s) {
  const t = B(s);
  return t instanceof Promise ? await t : t;
}
function Q(s, t) {
  return Math.floor(Math.random() * (t - s + 1) + s);
}
const St = "d-response-loading";
class _t {
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
  get(t = "", e, i, r) {
    return this.response.find((o) => !this.isDisable(o) && this.isPath(o, t) && e === o.method && this.isFirst(o, r) && this.isResponse(o, i) ? (this.isDevMode(r) && console.warn(`Response type: ${o.path}`), this.first.push(o), !0) : !1);
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
    return this.response.push(...Y(t)), this;
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
      method: i = C.get,
      global: r = i === C.get,
      devMode: o = !1
    } = t;
    if (r || this.isDevMode(o)) {
      const a = this.requestDefault.request(t.request), u = this.get(e, i, a, o);
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
    return !!B(t == null ? void 0 : t.disable);
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
    const i = this.requestDefault.request(t == null ? void 0 : t.request);
    return e === i || i === "*any" || y(e) && y(i) && A(e) && A(i) && !(e instanceof FormData) && !(i instanceof FormData) && Object.values(e).length === Object.values(i).length && Object.entries(i).reduce(
      (r, [o, a]) => r && (a === (e == null ? void 0 : e[o]) || a === "*any"),
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
    return this.startResponseLoading(), new Promise((i) => {
      Xt(
        lt(t.response) ? t.response(e) : t.response
      ).then((r) => {
        t != null && t.lag ? (R.show(), setTimeout(() => {
          this.stopResponseLoading(), i(r), R.hide();
        }, Q(0, 2e3))) : (this.stopResponseLoading(), i(r));
      });
    });
  }
  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  startResponseLoading() {
    this.loading && clearTimeout(this.loading), l() && document.body.classList.add(St);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  stopResponseLoading() {
    this.loading = setTimeout(() => {
      this.loading = void 0, l() && document.body.classList.remove(St);
    }, 1200);
  }
}
class Ot {
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
   * @param apiFetch request options/ опции запроса
   */
  async make(t, e) {
    if (t && this.callback)
      return this.go(e);
  }
  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param active is preparation active/ активна ли подготовка
   * @param query data received in the request/ данные, полученные в запросе
   * @param apiFetch request options/ опции запроса
   */
  async makeEnd(t, e, i) {
    let r = {};
    return t && this.callbackEnd && (r = await this.callbackEnd(e, i)), r;
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
   * @param apiFetch request options/ опции запроса
   */
  async go(t) {
    return new Promise((e) => {
      this.loading ? setTimeout(() => this.go(t).then(e), 160) : this.callback ? (this.loading = !0, this.callback(t).then(() => {
        this.loading = !1, e();
      })) : e();
    });
  }
  /**
   * Analysis of the request after execution.
   *
   * Анализ запроса после выполнения.
   * @param query data received in the request/ данные, полученные в запросе
   * @param apiFetch request options/ опции запроса
   */
  async end(t, e) {
    let i = {};
    return this.callbackEnd && (i = await this.callbackEnd(t, e)), i;
  }
}
const v = class v {
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
    return `${e ? this.url : ""}${t}`.replace("{locale}", b.getLocation()).replace("{country}", b.getCountry()).replace("{language}", b.getLanguage());
  }
  /**
   * Getting data for the body.
   *
   * Получение данных для тела.
   * @param request this request/ данный запрос
   * @param method method for request/ метод запрос
   */
  static getBody(t = {}, e = C.get) {
    if (t instanceof FormData)
      return t;
    if (e !== C.get && y(t))
      return j(t) ? t : JSON.stringify(t);
  }
  /**
   * Getting data for the body of the get method.
   *
   * Получение данных для тела метода get.
   * @param request this request/ данный запрос
   * @param path path to request/ путь к запрос
   * @param method method for request/ метод запрос
   */
  static getBodyForGet(t, e = "", i = C.get) {
    if (i === C.get) {
      const r = e.match(/\?/) ? "&" : "?", o = typeof t == "object" ? Pt(t) : t;
      if (y(o))
        return `${r}${o}`;
    }
    return "";
  }
  /**
   * Modifies the default header data.
   *
   * Изменяет данные заголовка по умолчанию.
   */
  static setHeaders(t) {
    return this.headers.set(t), v;
  }
  /**
   * Modifies the default request data.
   *
   * Изменяет данные запроса по умолчанию.
   */
  static setRequestDefault(t) {
    return this.requestDefault.set(t), v;
  }
  /**
   * Change the base path to the script.
   *
   * Изменить базовый путь к скрипту.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(t) {
    return this.url = t, v;
  }
  /**
   * The function is modified for a call before the request.
   *
   * Изменить функцию перед запросом.
   * @param callback function for call/ функция для вызова
   */
  static setPreparation(t) {
    return this.preparation.set(t), v;
  }
  /**
   * Modify the function after the request.
   *
   * Изменить функцию после запроса.
   * @param callback function for call/ функция для вызова
   */
  static setEnd(t) {
    return this.preparation.setEnd(t), v;
  }
  /**
   * To execute a request.
   *
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters/ строка запроса или список параметров
   */
  static async request(t) {
    return j(t) ? await this.fetch({
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
    return this.request(D(t, {
      method: C.get
    }));
  }
  /**
   * Sends a post method request.
   *
   * Отправляет запрос метода post.
   * @param request list of parameters/ список параметров
   */
  static post(t) {
    return this.request(D(t, {
      method: C.post
    }));
  }
  /**
   * Sends a put method request.
   *
   * Отправляет запрос метода put.
   * @param request list of parameters/ список параметров
   */
  static put(t) {
    return this.request(D(t, {
      method: C.put
    }));
  }
  /**
   * Sends a delete method request.
   *
   * Отправляет запрос метода delete.
   * @param request list of parameters/ список параметров
   */
  static delete(t) {
    return this.request(D(t, {
      method: C.delete
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
      hideError: i = !1,
      queryReturn: r = void 0,
      globalPreparation: o = !0,
      globalEnd: a = !0
    } = t, u = await this.response.emulator(t);
    if (u)
      return u;
    const h = new vt();
    let f;
    R.show();
    try {
      await this.preparation.make(o, t);
      const g = await this.makeQuery(t), S = await this.preparation.makeEnd(a, g, t);
      if (h.setStatus(g.status, g.statusText), this.status.setStatus(g.status, g.statusText), S != null && S.reset)
        return R.hide(), await this.fetch(t);
      f = await this.readData(
        g,
        r,
        S
      );
    } catch (g) {
      throw i || console.error("Api: ", g), h.setError(String(g)), this.status.setError(String(g)), R.hide(), g;
    }
    return R.hide(), h.setLastResponse(f), this.status.setLastResponse(f), this.makeStatus(
      this.makeData(f, e),
      h
    );
  }
  /**
   * Reading data from the response.
   *
   * Чтение данных из ответа.
   * @param query response from the server/ ответ от сервера
   * @param queryReturn custom function for reading data/ кастомная функция для чтения данных
   * @param end finalization data/ данные финализации
   */
  static async readData(t, e, i) {
    var r;
    return e ? await e(t) : "data" in i ? i.data : ((r = t.headers.get("Content-Type")) != null ? r : "").match("application/json") ? await t.json() : { data: await t.text() };
  }
  /**
   * Executing the request.
   *
   * Выполнение запроса.
   * @param apiFetch property of the request/ свойство запроса
   */
  static async makeQuery(t) {
    const e = this.requestDefault.request(t.request), {
      api: i = !0,
      path: r = "",
      pathFull: o = void 0,
      method: a = C.get,
      headers: u = {},
      type: h = "application/json;charset=UTF-8",
      init: f = {},
      controller: g = void 0
    } = t, S = o != null ? o : this.getUrl(r, i), st = `${S}${this.getBodyForGet(e, S, a)}`, _ = this.headers.get(u, h), q = D(f, {
      method: a,
      body: this.getBody(e, a)
    });
    return _ && (q.headers = _), g && (q.signal = g.signal), await fetch(st, q);
  }
  /**
   * Transforms data if needed.
   *
   * Преобразует данные, если нужно.
   * @param data data for transformation/ данные для преобразования
   * @param toData is it necessary to process the data/ нужно ли обрабатывать данные
   */
  static makeData(t, e) {
    if (!e || !t || !A(t) || !("data" in t))
      return t;
    if (t.data !== null && typeof t.data != "object" || ht(t.data))
      return t.data;
    const i = D(t.data);
    return "success" in t && !("success" in i) && (i.success = t.success), "status" in t && !("status" in i) && (i.status = t.status), "message" in t && !("message" in i) && (i.message = t.message), i;
  }
  /**
   * Appends the status object to the response data if possible.
   *
   * Добавляет объект статуса к данным ответа, если это возможно.
   * @param data response data/ данные ответа
   * @param status status object/ объект статуса
   */
  static makeStatus(t, e) {
    return t && A(t) ? {
      ...t,
      statusObject: e.get()
    } : t;
  }
};
c(v, "url", "/api/"), c(v, "headers", new Mt()), c(v, "requestDefault", new Qt()), c(v, "status", new vt()), c(v, "response", new _t(v.requestDefault)), c(v, "preparation", new Ot());
let K = v;
class He {
  /**
   * Constructor
   * @param name channel name/ название канала
   * @param callback callback on message received/ колбэк на получение сообщения
   * @param callbackError callback on message error/ колбэк на ошибку сообщения
   */
  constructor(t, e, i) {
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
    /**
     * Update error state on message error.
     *
     * Обновление состояния ошибки при получении ошибки сообщения.
     * @param event message error event/ событие ошибки сообщения
     */
    c(this, "updateError", (t) => {
      var e;
      return (e = this.callbackError) == null || e.call(this, t), this;
    });
    if (this.callback = e, this.callbackError = i, l())
      try {
        this.channel = new BroadcastChannel(`${Tt()}__${t}`), this.channel.onmessage = this.update, this.channel.onmessageerror = this.updateError;
      } catch (r) {
        console.error(`BroadcastMessage ${t}:`, r);
      }
  }
  /**
   * Get the channel.
   *
   * Получить канал.
   * @returns channel/ канал
   */
  getChannel() {
    return this.channel;
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
  /**
   * Set the callback function to be called when a message error occurs.
   *
   * Установить функцию колбэка, которая будет вызвана при возникновении ошибки сообщения.
   * @param callbackError callback function/ функция колбэка
   */
  setCallbackError(t) {
    return this.callbackError = t, this;
  }
}
const Tt = () => new et("__broadcast-name").get(() => `name_${Q(1e6, 9999999)}`);
class Gt {
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
    return this.cache === void 0 || this.comparisons.length !== t.length || this.comparisons.findIndex((e, i) => e !== t[i]) >= 0 ? (this.comparisons = [...t], !0) : !1;
  }
}
class te {
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
  get(t, e, i) {
    return this.getCacheItem(t, e).getCache(i != null ? i : []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  async getAsync(t, e, i) {
    return await this.getCacheItem(t, e).getCacheAsync(i != null ? i : []);
  }
  /**
   * Returns an instance of the object for working with the cache element.
   *
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   */
  getCacheItem(t, e) {
    return t in this.cache || (this.cache[t] = new Gt(e)), this.cache[t];
  }
}
const tt = class tt {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  static get(t, e, i) {
    return this.cache.get(t, e, i);
  }
};
c(tt, "cache"), tt.cache = new te();
let Lt = tt;
function jt(s, t = !1) {
  if (typeof s == "string") {
    const e = s.trim();
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
          } catch (i) {
            console.error("transformation: JSON error", i);
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
  return s;
}
const ee = "cookie-block";
class Ut {
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
c(Ut, "storage", new et(ee));
const O = {}, mt = class mt {
  constructor(t) {
    c(this, "value");
    c(this, "options", {});
    if (this.name = t, t in rt)
      return rt[t];
    this.value = O == null ? void 0 : O[t], rt[t] = this;
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
    var t, e;
    return (e = (t = this.options) == null ? void 0 : t.age) != null ? e : 10080 * 60;
  }
  /**
   * Update cookie data.
   *
   * Обновление данных cookie.
   */
  update() {
    var t, e, i, r, o;
    if (l() && !ct() && !Ut.get()) {
      const a = String((t = this.value) != null ? t : "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(a)}`,
        `max-age=${a === "" ? "-1" : this.getAge()}`,
        `SameSite=${(i = (e = this.options) == null ? void 0 : e.sameSite) != null ? i : "strict"}`,
        ...(o = (r = this.options) == null ? void 0 : r.arguments) != null ? o : []
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
      const [e, i] = t.trim().split("=");
      e && y(i) && (O[e] = jt(i));
    }
  }
};
l() && !ct() && mt.updateData();
let Ct = mt;
const rt = {};
function P(s) {
  var r, o, a, u, h, f, g, S;
  if (s instanceof Date)
    return s;
  if (X(s))
    return /* @__PURE__ */ new Date();
  if (typeof s == "number")
    return new Date(s);
  let t = s, e = b.getTimezoneFormat().trim();
  s.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (st, _, q) => (t = _, e = q.trim(), st));
  const i = (S = (g = (f = (h = (u = (a = (o = (r = /^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) != null ? r : /^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) != null ? o : /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) != null ? a : /^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) != null ? u : /^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) != null ? h : /^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) != null ? f : /^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) != null ? g : /^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) != null ? S : t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${i.trim()}${e}`);
}
function se(s, t) {
  return d(s, (e) => e == null ? void 0 : e[t], !0);
}
class N {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = b.getLocation()) {
    c(this, "geo");
    this.geo = b.find(t);
    const e = this.getLocation();
    if (e in nt)
      return nt[e];
    nt[e] = this;
  }
  /**
   * Returns an instance of the class according to the specified country code.
   *
   * Возвращает экземпляр класса по указанному коду страны.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getInstance(t = b.getLocation()) {
    return new N(t);
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
    let i = { type: "language" }, r;
    e && (typeof e == "string" ? i.type = e : i = {
      ...i,
      ...e
    });
    try {
      l() && (t ? r = new Intl.DisplayNames(this.getLocation(), i).of(t) : i.type === "language" ? r = new Intl.DisplayNames(this.getLocation(), i).of(this.geo.language) : i.type === "region" && (r = new Intl.DisplayNames(this.getLocation(), i).of(this.geo.country)));
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
    const i = {
      type: "language",
      style: e
    };
    return this.display(b.getByCode(t).language, i);
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, e) {
    const i = {
      type: "region",
      style: e
    };
    return this.display(t, i);
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
  fullName(t, e, i, r) {
    var u, h;
    const o = (h = (u = this.geo) == null ? void 0 : u.nameFormat) != null ? h : "fl";
    let a;
    switch (o) {
      case "fsl":
        a = `${e}${i ? ` ${i}` : ""} ${t}`;
        break;
      case "lf":
        a = `${t} ${e}`;
        break;
      case "lsf":
        a = `${t}${i ? ` ${i}` : ""} ${e}`;
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
    var i, r;
    return ((r = (i = this.numberObject(e)) == null ? void 0 : i.format) == null ? void 0 : r.call(i, k(t))) || t.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    var t, e, i, r, o;
    return ((o = (r = (i = (e = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : e.call(t, 1.2)) == null ? void 0 : i.find) == null ? void 0 : r.call(i, (a) => a.type === "decimal")) == null ? void 0 : o.value) || ".";
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
  currency(t, e, i = !1) {
    const r = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof e == "string" ? { currency: e } : e || {}
    }, o = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...a) => (r.currency = String(a[2]).toUpperCase(), String(a[1])));
    if (i) {
      const a = this.numberObject(r);
      return a ? se(
        a.formatToParts(k(t)).filter((u) => ["literal", "currency"].indexOf(u.type) === -1),
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
    var i, r, o, a, u;
    return ((u = (a = (o = (r = (i = this.numberObject({
      style: "currency",
      currencyDisplay: e,
      currency: t
    })) == null ? void 0 : i.formatToParts) == null ? void 0 : r.call(i, 100)) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (h) => h.type === "currency")) == null ? void 0 : u.value) || t;
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
    const i = {
      style: "unit",
      ...typeof e == "string" ? { unit: e } : e || {}
    }, r = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...o) => (i.unit = String(o[2]).toLowerCase(), String(o[1])));
    return this.number(r, i);
  }
  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(t, e = "byte") {
    const i = k(t);
    if (i > 1024 && j(e))
      switch (e) {
        case "byte":
          return this.sizeFile(i / 1024, "kilobyte");
        case "kilobyte":
          return this.sizeFile(i / 1024, "megabyte");
        case "megabyte":
          return this.sizeFile(i / 1024, "gigabyte");
        case "gigabyte":
          return this.sizeFile(i / 1024, "terabyte");
        case "terabyte":
          return this.sizeFile(i / 1024, "petabyte");
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
  plural(t, e, i, r) {
    var u;
    const o = k(t), a = e.split("|");
    if (a.length > 1)
      try {
        if (l()) {
          const f = new Intl.PluralRules(this.getLocation(), i).select(o);
          let g;
          switch (f) {
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
  date(t, e, i, r) {
    const o = P(t), a = typeof i == "string", u = this.dateOptions(e, a ? i : "short");
    return r && (u.hour12 = !1), a || Object.assign(u, i), o.toLocaleString(this.getLocation(), u);
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
  relative(t, e, i) {
    const r = P(t), o = i || /* @__PURE__ */ new Date(), a = {
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
  relativeLimit(t, e, i, r, o, a, u) {
    const h = P(t), f = i || /* @__PURE__ */ new Date(), g = new Date(f), S = new Date(f);
    return g.setDate(f.getDate() - e), S.setDate(f.getDate() + e), h >= g && h <= S ? this.relative(
      h,
      r,
      f
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
  relativeByValue(t, e, i) {
    const r = {
      numeric: "auto",
      ...typeof i == "string" ? { style: i } : i || {}
    };
    try {
      if (l())
        return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(k(t)), e);
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
        return Intl.DateTimeFormat(this.getLocation(), { month: e || "long" }).format(P(t));
    } catch (i) {
      console.error("month: ", i);
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
        const i = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
        for (let o = 0; o < 12; o++)
          i.setMonth(o), e.push({
            label: r.format(i).replace(/^./, (a) => a.toUpperCase()),
            value: o + 1
          });
      }
    } catch (i) {
      console.error("months: ", i);
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
        return Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }).format(P(t));
    } catch (i) {
      console.error("weekday: ", i);
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
        const i = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), o = i.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        i.setDate(i.getDate() - o);
        for (let a = 0; a < 7; a++)
          e.push({
            label: r.format(i).replace(/^./, (u) => u.toUpperCase()),
            value: i.getDay()
          }), i.setDate(i.getDate() + 1);
      }
    } catch (i) {
      console.error("weekdays: ", i);
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
  sort(t, e = (i, r) => [i, r]) {
    if (l()) {
      const i = new Intl.Collator(this.getLocation());
      return t.sort((r, o) => i.compare(...e(r, o)));
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
    const i = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(t) !== -1 && (i.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month", "day-month"].indexOf(t) !== -1 && (i.month = e), ["full", "datetime", "date", void 0, "day", "day-month"].indexOf(t) !== -1 && (i.day = "2-digit"), t !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(t) !== -1 && (i.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(t) !== -1 && (i.minute = "2-digit"), ["full", "time", "second"].indexOf(t) !== -1 && (i.second = "2-digit")), i;
  }
}
const nt = {};
class gt {
  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(t, e = "date", i = b.getLocation()) {
    c(this, "date");
    c(this, "hour24", !1);
    c(this, "watch");
    this.type = e, this.code = i, this.date = P(t);
  }
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
    const i = e / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(i), { signDisplay: "always" });
    const r = this.toTimeZoneHourFormat(i), o = i.toString().match(/.\d+/) ? "30" : "00";
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
    const e = new gt(this.date, this.type, "en-GB"), i = [];
    let r;
    return e.setHour24(!0), this.type === "hour-minute" ? r = e.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (i.push(e.localeYear()), i.push(e.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && i.push(e.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (r = e.locale("time"))), `${i.join("-")}${r ? `T${r}${t ? e.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.
   *
   * Изменять полностью дату.
   * @param value an integer value representing the number/
   * целочисленное значение, представляющее число
   */
  setDate(t) {
    return this.date = P(t), this.update(), this;
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
function T(s) {
  var t;
  return j(s) ? s.trim() : ht(s) && s.findIndex((e) => m(e)) === -1 ? s.join(",") : m(s) ? JSON.stringify(s) : s === !0 ? "1" : s === !1 ? "0" : (t = s == null ? void 0 : s.toString()) != null ? t : "";
}
function ie(s, t, e) {
  const i = T(s);
  if (!e || e <= 0)
    return i.split(t);
  const r = i.split(t, e), o = i.split(t);
  return r.length === o.length ? r : (r.pop(), [
    ...r,
    o.slice(e - 1).join(t)
  ]);
}
function x(s, t) {
  var r;
  if (!y(t))
    return;
  const e = ie(t, ".", 2), i = e[0];
  return i && (s != null && s[i]) && m(s[i]) && (e != null && e[1]) ? x(s[i], e[1]) : (r = y(i) && (s == null ? void 0 : s[i])) != null ? r : void 0;
}
function Ht(s) {
  return s.toString().trim().replace(/[^\w-. ]+/g, "").replace(/[ .]+/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${String(t[1]).toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
var F = /* @__PURE__ */ ((s) => (s.currency = "currency", s.date = "date", s.name = "name", s.number = "number", s.plural = "plural", s.unit = "unit", s))(F || {});
class ze {
  /**
   * Constructor
   *
   * Конструктор
   * @param options formatting options for each column/ property/
   * параметры форматирования для каждого столбца/свойства
   * @param list initial list of data to format/ начальный список данных для форматирования
   */
  constructor(t, e) {
    this.options = t, this.list = e;
  }
  /**
   * Returns the current list of data.
   *
   * Возвращает текущий список данных.
   * @returns the list of data or undefined if not set/ список данных или undefined, если не задан
   */
  getList() {
    return this.list;
  }
  /**
   * Returns the current formatting options.
   *
   * Возвращает текущие параметры форматирования.
   * @returns formatting options/ параметры форматирования
   */
  getOptions() {
    return this.options;
  }
  /**
   * Sets the list of data to be formatted.
   *
   * Устанавливает список данных для форматирования.
   * @param list list of data/ список данных
   * @returns the Formatters instance for chaining/ экземпляр Formatters для цепочки вызовов
   */
  setList(t) {
    return this.list = t, this;
  }
  /**
   * Formats the entire list based on the provided options.
   * Adds formatted values with the suffix 'Format' to each item.
   *
   * Форматирует весь список на основе предоставленных параметров.
   * Добавляет отформатированные значения с суффиксом 'Format' к каждому элементу.
   * @returns the list of items with additional formatted columns/
   * список элементов с дополнительными отформатированными столбцами
   */
  to() {
    return this.list ? d(this.list, (t) => ({
      ...t,
      ...this.getFormatData(t)
    })) : [];
  }
  /**
   * Generates formatted data for a single item based on options.
   *
   * Генерирует отформатированные данные для одного элемента на основе параметров.
   * @param item item to format/ элемент для форматирования
   * @protected
   */
  getFormatData(t) {
    const e = {};
    return d(
      this.options,
      (i, r) => {
        const o = `${Ht(r)}Format`, a = x(t, r);
        i != null && i.transformation ? y(a) ? e[o] = i.transformation(
          a,
          t,
          i.options
        ) : e[o] = "" : e[o] = this.transformation(
          a,
          t,
          i.type,
          i.options
        );
      }
    ), e;
  }
  /**
   * Router-like method to delegate formatting to specific type formatters.
   *
   * Метод-маршрутизатор для делегирования форматирования конкретным типам форматировщиков.
   * @param valueOriginal original value to format/ исходное значение для форматирования
   * @param item entire item context/ весь контекст элемента
   * @param type type of formatter to use/ тип используемого форматировщика
   * @param options additional options for the specific formatter/
   * дополнительные параметры для конкретного форматировщика
   * @protected
   * @returns Formatted string/ отформатированная строка
   */
  transformation(t, e, i, r) {
    if (y(t) || i === F.name)
      switch (i) {
        case F.currency:
          return this.formatCurrency(t, e, r);
        case F.date:
          return this.formatDate(t, r);
        case F.name:
          return this.formatName(e, r);
        case F.number:
          return this.formatNumber(t, r);
        case F.plural:
          return this.formatPlural(t, r);
        case F.unit:
          return this.formatUnit(t, r);
        default:
          return String(t);
      }
    return "";
  }
  /**
   * Formats a value as currency.
   *
   * Форматирует значение как валюту.
   * @param value value to format/ значение для форматирования
   * @param item item context/ контекст элемента
   * @param options currency formatting options/ параметры форматирования валюты
   * @protected
   * @returns Formatted currency string/ отформатированная строка валюты
   */
  formatCurrency(t, e, i) {
    var o;
    const r = i != null && i.currencyPropName ? x(e, i.currencyPropName) : e == null ? void 0 : e.currency;
    return N.getInstance().currency(
      t,
      (o = i == null ? void 0 : i.options) != null ? o : r,
      i == null ? void 0 : i.numberOnly
    );
  }
  /**
   * Formats a value as a date.
   *
   * Форматирует значение как дату.
   * @param value value to format/ значение для форматирования
   * @param options date formatting options/ параметры форматирования даты
   * @protected
   * @returns Formatted date string/ отформатированная строка даты
   */
  formatDate(t, e) {
    return N.getInstance().date(
      t,
      e == null ? void 0 : e.type,
      e == null ? void 0 : e.options,
      e == null ? void 0 : e.hour24
    );
  }
  /**
   * Formats full name from multiple property names.
   *
   * Форматирует полное имя из нескольких имен свойств.
   * @param item item context containing name components/ контекст элемента, содержащий компоненты имени
   * @param options name formatting options (prop names for first, last, surname)/
   * параметры форматирования имени (имена свойств для имени, фамилии, отчества)
   * @protected
   * @returns Formatted name string or empty string if components are missing/
   * отформатированная строка имени или пустая строка, если компоненты отсутствуют
   */
  formatName(t, e) {
    var a, u, h;
    const i = x(t, (a = e == null ? void 0 : e.lastPropName) != null ? a : "lastName"), r = x(t, (u = e == null ? void 0 : e.firstPropName) != null ? u : "firstName"), o = x(t, (h = e == null ? void 0 : e.surname) != null ? h : "surname");
    return i && r ? N.getInstance().fullName(
      i,
      r,
      o,
      e == null ? void 0 : e.short
    ) : "";
  }
  /**
   * Formats a value as a number.
   *
   * Форматирует значение как число.
   * @param value value to format/ значение для форматирования
   * @param options number formatting options/ параметры форматирования числа
   * @protected
   * @returns Formatted number string/ отформатированная строка числа
   */
  formatNumber(t, e) {
    return N.getInstance().number(t, e == null ? void 0 : e.options);
  }
  /**
   * Formats a value based on plural rules.
   *
   * Форматирует значение на основе правил множественного числа.
   * @param value numeric value for pluralization/ числовое значение для плюрализации
   * @param options plural formatting options (words and rules)/
   * параметры форматирования множественного числа (слова и правила)
   * @protected
   * @returns Formatted plural string/ отформатированная строка множественного числа
   */
  formatPlural(t, e) {
    return e && e.words ? N.getInstance().plural(
      t,
      e == null ? void 0 : e.words,
      e == null ? void 0 : e.options,
      e == null ? void 0 : e.optionsNumber
    ) : t;
  }
  /**
   * Formats a value with a specific unit.
   *
   * Форматирует значение с определенной единицей измерения.
   * @param value value to format/ значение для форматирования
   * @param options unit formatting options/ параметры форматирования единиц измерения
   * @protected
   * @returns Formatted unit string/ отформатированная строка единицы измерения
   */
  formatUnit(t, e) {
    return e && e.unit ? N.getInstance().unit(t, e.unit) : t;
  }
}
const n = "f", z = class z {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = b.getLocation()) {
    this.code = t;
  }
  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code/ код страны
   */
  get(t = this.code) {
    var i;
    const e = b.find(t);
    if (e) {
      const r = this.getCountry(e);
      return {
        language: this.getLanguage(e),
        country: r,
        standard: e.standard,
        icon: (i = z.flags) == null ? void 0 : i[e.country],
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
    return d(this.getCodes(t), (e) => this.get(e));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return d(this.getList(t), (e) => {
      const i = new z(e.standard).get(e.standard);
      return {
        ...e,
        description: i == null ? void 0 : i.country,
        nationalLanguage: i == null ? void 0 : i.language,
        nationalCountry: i == null ? void 0 : i.country
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
    return t != null ? t : Object.keys(z.flags);
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
c(z, "flags", {
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
let Dt = z;
const Z = class Z {
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
    var a, u, h;
    const e = this.toNumber(t), i = [""];
    let r = this.map, o;
    for (const f of e)
      if (i[i.length - 1] += f, f in r)
        (a = r[f]) != null && a.value && (o = r[f], i.push("")), r = (h = (u = r[f]) == null ? void 0 : u.next) != null ? h : {};
      else
        break;
    return o ? (i.pop(), {
      item: o,
      phone: e.join("").slice(i.join("").length)
    }) : {
      item: void 0,
      phone: e.join("")
    };
  }
  /**
   * Retrieves complete mask data by country code.
   *
   * Получает полные данные о маске по коду страны.
   * @param code country and language code/ код страны и языка
   */
  static getByCode(t) {
    var i;
    const e = this.get(t);
    if (e)
      return (i = this.getByPhone(e.phone.toString())) == null ? void 0 : i.item;
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
    if (y(t) && Array.isArray(e) && e.length > 0) {
      const i = this.removeZero(t), r = i.length;
      for (const o of e)
        if (this.getUnnecessaryLength(o) === r)
          return this.toStandard(i, o);
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
    var e, i;
    return (i = (e = t.match(/\*/g)) == null ? void 0 : e.length) != null ? i : 0;
  }
  /**
   * Creating a list for the map.
   *
   * Формирование списка для карты.
   */
  static makeList() {
    const t = d(b.getList(), (e) => {
      if (e != null && e.phoneMask)
        return {
          phone: (e == null ? void 0 : e.phoneCode) && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (e == null ? void 0 : e.phoneWithin) || 0,
          mask: Y(e.phoneMask),
          value: e.country
        };
    });
    this.list = t.sort((e, i) => e.phone - i.phone);
  }
  /**
   * Creating a map for search.
   *
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((t) => {
      t.mask.forEach((e) => {
        let i = this.map, r;
        if (this.toNumber(e).forEach((o) => {
          var a;
          o in i || (i[o] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), r = i[o], i = (a = r == null ? void 0 : r.next) != null ? a : {};
        }), r) {
          r.value === void 0 && (r.info = t, r.value = t.value);
          const o = this.toWithin(e, t.within);
          r.mask.push(o), r.maskFull.push(o.replace(/\d/ig, "*")), r.items.push(t);
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
    let i = 0;
    return e.replace(/\*/ig, () => String(t[i++]));
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
c(Z, "list", []), c(Z, "map", {}), Z.makeList(), Z.makeMap();
let kt = Z, U;
class Ze {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(t) {
    return U && (U == null ? void 0 : U[t]);
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(t) {
    U === void 0 && (U = D(t));
  }
}
const W = class W {
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
    var r;
    const i = B(e);
    i !== ((r = this.hash) == null ? void 0 : r[t]) && (this.hash[t] = i, this.update());
  }
  /**
   * Adding an event when data is changed.
   *
   * Добавление события при изменении данных.
   * @param name variable names/ названия переменных
   * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
   */
  static addWatch(t, e) {
    var i;
    t in this.watch ? (i = this.watch[t]) == null || i.push(e) : this.watch[t] = [e];
  }
  /**
   * Removing an event when data is changed.
   *
   * Удаление события при изменении данных.
   * @param name variable names/ названия переменных
   * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
   */
  static removeWatch(t, e) {
    var r;
    const i = (r = this.watch) == null ? void 0 : r[t];
    i && (this.watch[t] = i.filter((o) => o !== e));
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
      (...e) => (t[String(e[1])] = jt(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Pt(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
    d(this.watch, (e, i) => {
      var r;
      ((r = this.hash) == null ? void 0 : r[i]) !== (t == null ? void 0 : t[i]) && e.forEach((o) => o(t[i]));
    });
  }
};
c(W, "hash", {}), c(W, "watch", {}), c(W, "block", !1), l() && (W.reload(), addEventListener("hashchange", () => W.reload()));
let Nt = W;
const ot = "__UI_ICON", Et = 320, At = "--LOAD--", M = class M {
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
    var o, a, u, h;
    const r = (h = (u = (o = this.icons) == null ? void 0 : o[this.getName(t)]) != null ? u : (a = this.icons) == null ? void 0 : a[t]) != null ? h : `${t.replace(/^@/, e != null ? e : this.url)}.svg`;
    return typeof r == "string" ? r === At && i > 0 ? (await this.wait(), this.get(t, e, i - Et)) : r : lt(r) ? await r() : await r;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return d(this.icons, (t, e) => e.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${K.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(t)] = At;
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
    d(t, (e, i) => this.add(i, e));
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
    return new Promise((t) => setTimeout(() => t(), Et));
  }
};
c(M, "icons", {}), c(M, "url", "/icons/"), l() && (ot in window || (window[ot] = {}), M.icons = window[ot]);
let It = M;
function re(s, t, e) {
  var i, r;
  return (r = (i = E(s)) == null ? void 0 : i[t]) != null ? r : e;
}
function ne(s, t, e) {
  const i = E(s);
  if (i) {
    const r = re(i, t);
    if (m(r) && m(e))
      d(e, (o, a) => {
        r[a] = B(o);
      });
    else {
      const o = B(e);
      !(t in i) && typeof o == "string" ? i.setAttribute(t.toString(), o) : i[t] = B(e);
    }
  }
  return i;
}
function G(s, t = "div", e, i) {
  if (!l())
    return;
  const r = document.createElement(t);
  return typeof e == "function" ? e(r) : A(e) && d(e, (o, a) => {
    ne(r, a, o);
  }), s == null || s.insertBefore(r, i != null ? i : null), r;
}
function oe(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").trim();
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
    return d(
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
    return d(
      t,
      (e, i) => this.set(i, String(e))
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
    var r;
    const e = this.findMetaElement(t), i = (r = this.items[t]) != null ? r : "";
    if (e)
      e.content = i;
    else if (l()) {
      const o = { content: i };
      this.isProperty ? o.property = t : o.name = t, G(document.head, "meta", o);
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
    var i;
    const e = oe((i = this.items[t]) != null ? i : "");
    return e ? `<meta ${this.getAttributeName()}="${t}" content="${e}">` : "";
  }
  /**
   * Updates meta tags data from the DOM.
   *
   * Обновляет данные мета-тегов из DOM.
   */
  update() {
    return this.listMeta.forEach((t) => {
      var e, i;
      this.items[t] = (i = (e = this.findMetaElement(t)) == null ? void 0 : e.content) != null ? i : "";
    }), this;
  }
}
var L = /* @__PURE__ */ ((s) => (s.description = "description", s.keywords = "keywords", s.canonical = "canonical", s.robots = "robots", s.author = "author", s))(L || {}), ae = /* @__PURE__ */ ((s) => (s.indexFollow = "index, follow", s.noIndexFollow = "noindex, follow", s.indexNoFollow = "index, nofollow", s.noIndexNoFollow = "noindex, nofollow", s.noArchive = "noarchive", s.noSnippet = "nosnippet", s.noImageIndex = "noimageindex", s.images = "images", s.noTranslate = "notranslate", s.noPreview = "nopreview", s.textOnly = "textonly", s.noIndexSubpages = "noindex, noarchive", s.none = "none", s))(ae || {}), $ = /* @__PURE__ */ ((s) => (s.title = "og:title", s.type = "og:type", s.url = "og:url", s.image = "og:image", s.description = "og:description", s.locale = "og:locale", s.siteName = "og:site_name", s.localeAlternate = "og:locale:alternate", s.imageUrl = "og:image:url", s.imageSecureUrl = "og:image:secure_url", s.imageType = "og:image:type", s.imageWidth = "og:image:width", s.imageHeight = "og:image:height", s.imageAlt = "og:image:alt", s.video = "og:video", s.videoUrl = "og:video:url", s.videoSecureUrl = "og:video:secure_url", s.videoType = "og:video:type", s.videoWidth = "og:video:width", s.videoHeight = "og:video:height", s.audio = "og:audio", s.audioSecureUrl = "og:audio:secure_url", s.audioType = "og:audio:type", s.articlePublishedTime = "article:published_time", s.articleModifiedTime = "article:modified_time", s.articleExpirationTime = "article:expiration_time", s.articleAuthor = "article:author", s.articleSection = "article:section", s.articleTag = "article:tag", s.bookAuthor = "book:author", s.bookIsbn = "book:isbn", s.bookReleaseDate = "book:release_date", s.bookTag = "book:tag", s.musicDuration = "music:duration", s.musicAlbum = "music:album", s.musicAlbumDisc = "music:album:disc", s.musicAlbumTrack = "music:album:track", s.musicMusician = "music:musician", s.musicSong = "music:song", s.musicSongDisc = "music:song:disc", s.musicSongTrack = "music:song:track", s.musicReleaseDate = "music:release_date", s.musicCreator = "music:creator", s.videoActor = "video:actor", s.videoActorRole = "video:actor:role", s.videoDirector = "video:director", s.videoWriter = "video:writer", s.videoDuration = "video:duration", s.videoReleaseDate = "video:release_date", s.videoTag = "video:tag", s.videoSeries = "video:series", s.profileFirstName = "profile:first_name", s.profileLastName = "profile:last_name", s.profileUsername = "profile:username", s.profileGender = "profile:gender", s.productBrand = "product:brand", s.productAvailability = "product:availability", s.productCondition = "product:condition", s.productPriceAmount = "product:price:amount", s.productPriceCurrency = "product:price:currency", s.productRetailerItemId = "product:retailer_item_id", s.productCategory = "product:category", s.productEan = "product:ean", s.productIsbn = "product:isbn", s.productMfrPartNo = "product:mfr_part_no", s.productUpc = "product:upc", s.productWeightValue = "product:weight:value", s.productWeightUnits = "product:weight:units", s.productColor = "product:color", s.productMaterial = "product:material", s.productPattern = "product:pattern", s.productAgeGroup = "product:age_group", s.productGender = "product:gender", s))($ || {}), ce = /* @__PURE__ */ ((s) => (s.website = "website", s.article = "article", s.video = "video.other", s.videoTvShow = "video.tv_show", s.videoEpisode = "video.episode", s.videoMovie = "video.movie", s.musicAlbum = "music.album", s.musicPlaylist = "music.playlist", s.musicSong = "music.song", s.musicRadioStation = "music.radio_station", s.app = "app", s.product = "product", s.business = "business.business", s.place = "place", s.event = "event", s.profile = "profile", s.book = "book", s))(ce || {}), ue = /* @__PURE__ */ ((s) => (s.inStock = "in stock", s.outOfStock = "out of stock", s.preorder = "preorder", s.backorder = "backorder", s.discontinued = "discontinued", s.pending = "pending", s))(ue || {}), he = /* @__PURE__ */ ((s) => (s.new = "new", s.used = "used", s.refurbished = "refurbished", s))(he || {}), le = /* @__PURE__ */ ((s) => (s.newborn = "newborn", s.infant = "infant", s.toddler = "toddler", s.kids = "kids", s.adult = "adult", s))(le || {}), ge = /* @__PURE__ */ ((s) => (s.female = "female", s.male = "male", s.unisex = "unisex", s))(ge || {}), p = /* @__PURE__ */ ((s) => (s.card = "twitter:card", s.site = "twitter:site", s.creator = "twitter:creator", s.url = "twitter:url", s.title = "twitter:title", s.description = "twitter:description", s.image = "twitter:image", s.imageAlt = "twitter:image:alt", s.imageSrc = "twitter:image:src", s.imageWidth = "twitter:image:width", s.imageHeight = "twitter:image:height", s.label1 = "twitter:label1", s.data1 = "twitter:data1", s.label2 = "twitter:label2", s.data2 = "twitter:data2", s.appNameIphone = "twitter:app:name:iphone", s.appIdIphone = "twitter:app:id:iphone", s.appUrlIphone = "twitter:app:url:iphone", s.appNameIpad = "twitter:app:name:ipad", s.appIdIpad = "twitter:app:id:ipad", s.appUrlIpad = "twitter:app:url:ipad", s.appNameGooglePlay = "twitter:app:name:googleplay", s.appIdGooglePlay = "twitter:app:id:googleplay", s.appUrlGooglePlay = "twitter:app:url:googleplay", s.player = "twitter:player", s.playerWidth = "twitter:player:width", s.playerHeight = "twitter:player:height", s.playerStream = "twitter:player:stream", s.playerStreamContentType = "twitter:player:stream:content_type", s))(p || {}), de = /* @__PURE__ */ ((s) => (s.summary = "summary", s.summaryLargeImage = "summary_large_image", s.app = "app", s.player = "player", s.product = "product", s.gallery = "gallery", s.photo = "photo", s.leadGeneration = "lead_generation", s.audio = "audio", s.poll = "poll", s))(de || {});
class fe extends dt {
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
class me extends dt {
  constructor() {
    super(Object.values(p));
  }
  /**
   * Gets the Twitter Card type.
   *
   * Получает тип Twitter Card.
   */
  getCard() {
    return this.get(p.card);
  }
  /**
   * Gets the website or brand @username.
   *
   * Получает аккаунт сайта или бренда (@username).
   */
  getSite() {
    return this.get(p.site);
  }
  /**
   * Gets the content creator @username.
   *
   * Получает автора контента (@username).
   */
  getCreator() {
    return this.get(p.creator);
  }
  /**
   * Gets the page URL.
   *
   * Получает URL страницы.
   */
  getUrl() {
    return this.get(p.url);
  }
  /**
   * Gets the card title.
   *
   * Получает заголовок карточки.
   */
  getTitle() {
    return this.get(p.title);
  }
  /**
   * Gets the card description.
   *
   * Получает описание карточки.
   */
  getDescription() {
    return this.get(p.description);
  }
  /**
   * Gets the card image URL.
   *
   * Получает URL изображения карточки.
   */
  getImage() {
    return this.get(p.image);
  }
  /**
   * Sets the Twitter Card type.
   *
   * Устанавливает тип Twitter Card.
   * @param card card type / тип карточки
   */
  setCard(t) {
    return this.set(p.card, t), this;
  }
  /**
   * Sets the website or brand @username.
   *
   * Устанавливает аккаунт сайта или бренда (@username).
   * @param site @username / аккаунт
   */
  setSite(t) {
    return this.set(p.site, t), this;
  }
  /**
   * Sets the content creator @username.
   *
   * Устанавливает автора контента (@username).
   * @param creator @username / аккаунт автора
   */
  setCreator(t) {
    return this.set(p.creator, t), this;
  }
  /**
   * Sets the page URL.
   *
   * Устанавливает URL страницы.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set(p.url, t), this;
  }
  /**
   * Sets the card title.
   *
   * Устанавливает заголовок карточки.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set(p.title, t), this;
  }
  /**
   * Sets the card description.
   *
   * Устанавливает описание карточки.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set(p.description, t), this;
  }
  /**
   * Sets the card image URL.
   *
   * Устанавливает URL изображения карточки.
   * @param image image URL / URL изображения
   */
  setImage(t) {
    return this.set(p.image, t), this;
  }
}
class Ve extends dt {
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
    this.og = new fe(), this.twitter = new me();
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
    if (l()) {
      const i = y(e) ? `${e}${this.getSuffix()}` : this.suffix ? this.suffix : "";
      document.title = i, this.og.setTitle(i), this.twitter.setTitle(i);
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
    return this.set(L.keywords, Y(e).join(", ")), this;
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
    return y(this.suffix) ? ` - ${this.suffix}` : "";
  }
}
class ut {
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
      const i = await this.init();
      return this.storage.set(i), i;
    }
    return t;
  }
  /**
   * Returns the storage.
   *
   * Возвращает хранилище.
   */
  static getStorage() {
    return this.storage;
  }
  /**
   * Returns the calculate flag.
   *
   * Возвращает флаг вычисления.
   */
  static getCalculate() {
    return this.calculate;
  }
  /**
   * Creates elements to check the width of the scroll.
   *
   * Создает элементы для проверки ширины скролла.
   */
  static createElement() {
    return G(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", G(t, "div", (e) => {
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
c(ut, "storage", new et("scrollbar", !0)), c(ut, "calculate", !1);
function ft(s) {
  return s.replace(/([[\]\\^$.?*+(){}/|])/g, "\\$1");
}
function ye(s) {
  const t = d(
    s.split(" "),
    (e) => ft(e)
  ).join("|");
  return new RegExp(`(${t})`, "ig");
}
function $e(s, t, e = "sys-highlight-match") {
  return t ? String(s).replace(
    ye(t),
    `<span class="${e}">$1</span>`
  ) : s;
}
class pe {
  /**
   * Constructor for SearchListData.
   *
   * Конструктор для SearchListData.
   * @param list original list of items/ исходный список элементов
   * @param columns columns to search in/ столбцы для поиска
   * @param item current search item state/ текущее состояние элемента поиска
   * @param options search options/ опции поиска
   */
  constructor(t, e, i, r) {
    c(this, "listCache");
    this.list = t, this.columns = e, this.item = i, this.options = r;
  }
  /**
   * Checks if both list and columns are provided.
   *
   * Проверяет, предоставлены ли и список, и столбцы.
   * @returns boolean indicating if ready for column-based search/ логическое значение, указывающее на готовность к поиску по столбцам
   */
  is() {
    return !!(this.list && this.columns);
  }
  /**
   * Checks if the list is provided.
   *
   * Проверяет, предоставлен ли список.
   * @returns boolean/ логическое значение
   */
  isList() {
    return !!this.list;
  }
  /**
   * Returns the original list.
   *
   * Возвращает исходный список.
   * @returns list value/ значение списка
   */
  getList() {
    return this.list;
  }
  /**
   * Returns the search columns.
   *
   * Возвращает столбцы поиска.
   * @returns columns or undefined/ столбцы или undefined
   */
  getColumns() {
    return this.columns;
  }
  /**
   * Gets the search cache, initializing it if necessary.
   *
   * Получает кэш поиска, инициализируя его при необходимости.
   * @returns search cache/ кэш поиска
   */
  getCache() {
    var t;
    return this.listCache || this.initCache(), (t = this.listCache) != null ? t : [];
  }
  /**
   * Sets a new list and regenerates the cache.
   *
   * Устанавливает новый список и регенерирует кэш.
   * @param list new list/ новый список
   * @returns this instance/ данный экземпляр
   */
  setList(t) {
    return this.list = t, this.resetCache(), this;
  }
  /**
   * Sets new search columns and regenerates the cache.
   *
   * Устанавливает новые столбцы поиска и регенерирует кэш.
   * @param columns new columns/ новые столбцы
   * @returns this instance/ данный экземпляр
   */
  setColumns(t) {
    return this.columns = t, this.resetCache(), this;
  }
  /**
   * Finds a cached item corresponding to the given original item.
   *
   * Находит кэшированный элемент, соответствующий данному исходному элементу.
   * @param item original item/ исходный элемент
   * @returns cache item or undefined/ кэшированный элемент или undefined
   */
  findCacheItem(t) {
    return this.getCache().find((e) => e.item === t);
  }
  /**
   * Iterates over the cached list and executes a callback for each item.
   *
   * Перебирает кэшированный список и выполняет обратный вызов для каждого элемента.
   * @param callback function to execute for each item/ функция для выполнения для каждого элемента
   * @returns formatted list/ отформатированный список
   */
  forEach(t) {
    const e = [];
    return this.isList() && this.getCache().forEach((i) => {
      const r = t(
        i.item,
        i.value
      );
      r && e.push(r);
    }), e;
  }
  /**
   * Converts a single item to a formatted item with highlighted matches if selected.
   *
   * Преобразует один элемент в отформатированный элемент с выделенными совпадениями, если он выбран.
   * @param item original item/ исходный элемент
   * @param selection whether the item matches the search and should be highlighted/ совпадает ли элемент с поиском и должен ли он быть выделен
   * @returns formatted item/ отформатированный элемент
   */
  toFormatItem(t, e) {
    const i = {};
    return this.columns && this.columns.forEach((r) => {
      const o = this.getColumnName(r), a = x(t, r);
      i[o] = y(a) && e ? this.addTag(a) : T(a);
    }), {
      ...t,
      ...i,
      searchActive: e
    };
  }
  /**
   * Formats a column path to a camelCase property name with a 'Search' suffix.
   *
   * Форматирует путь к столбцу в имя свойства camelCase с суффиксом 'Search'.
   * @param column column path/ путь к столбцу
   * @returns property name/ имя свойства
   */
  getColumnName(t) {
    return t.replace(
      /\.([a-z0-9])/ig,
      (e, i) => i.toUpperCase()
    ) + "Search";
  }
  /**
   * Adds highlight tags to the given value based on the current search value.
   *
   * Добавляет теги выделения к данному значению на основе текущего значения поиска.
   * @param value value to highlight/ значение для выделения
   * @returns highlighted string/ выделенная строка
   */
  addTag(t) {
    return $e(
      T(t),
      this.item.get(),
      this.options.getClassName()
    );
  }
  /**
   * Generates a search cache for the current list and columns.
   *
   * Генерирует кэш поиска для текущего списка и столбцов.
   * @returns search cache/ кэш поиска
   */
  generateCache() {
    if (!this.isList())
      return [];
    const t = [];
    for (const e of this.list) {
      let i = "";
      if (this.columns)
        for (const r of this.columns) {
          const o = x(e, r);
          y(o) && (i += ` ${T(o)}`);
        }
      t.push({
        item: e,
        value: i
      });
    }
    return t;
  }
  /**
   * Initializes the search cache.
   *
   * Инициализирует кэш поиска.
   */
  initCache() {
    this.listCache = this.generateCache();
  }
  /**
   * Resets the search cache.
   *
   * Сбрасывает кэш поиска.
   */
  resetCache() {
    this.listCache = void 0;
  }
}
class be {
  /**
   * Constructor for SearchListItem.
   *
   * Конструктор для SearchListItem.
   * @param value current search value/ текущее значение поиска
   * @param options search options/ опции поиска
   */
  constructor(t, e) {
    this.value = t, this.options = e;
  }
  /**
   * Checks if the value is filled.
   *
   * Проверяет, заполнено ли значение.
   * @returns boolean indicating if value exists/ логическое значение, указывающее на наличие значения
   */
  is() {
    return !!this.value;
  }
  /**
   * Checks if a search should be performed based on the current value and options.
   *
   * Проверяет, следует ли выполнять поиск на основе текущего значения и опций.
   * @returns boolean/ логическое значение
   */
  isSearch() {
    return this.is() && this.value.length >= this.options.getLimit();
  }
  /**
   * Returns the current search value as a string.
   *
   * Возвращает текущее значение поиска в виде строки.
   * @returns search value/ значение поиска
   */
  get() {
    var t;
    return (t = this.value) != null ? t : "";
  }
  /**
   * Sets a new search value.
   *
   * Устанавливает новое значение поиска.
   * @param value new search value/ новое значение поиска
   * @returns this instance/ данный экземпляр
   */
  set(t) {
    return this.value = t, this;
  }
}
function zt(s, t = "ig", e = ":value") {
  const i = ft(s);
  return new RegExp(e.replace(/:value/g, i), t);
}
function we(s) {
  return zt(s, "i", "(:value)");
}
function ve(s) {
  let t = "";
  return s.split(" ").forEach((e) => {
    const i = ft(e).trim();
    y(i) && (t += `(?=.*?${i})`);
  }), new RegExp(`^${t}`, "ig");
}
class Se {
  /**
   * Constructor for SearchListMatcher.
   *
   * Конструктор для SearchListMatcher.
   * @param item search item containing the current value/ элемент поиска, содержащий текущее значение
   * @param options search options/ опции поиска
   */
  constructor(t, e) {
    c(this, "matcher");
    this.item = t, this.options = e, this.initMatcher();
  }
  /**
   * Checks if the matcher is initialized.
   *
   * Проверяет, инициализирован ли сопоставитель.
   * @returns boolean/ логическое значение
   */
  is() {
    return !!this.matcher;
  }
  /**
   * Checks if the given value matches the current search expression.
   *
   * Проверяет, соответствует ли данное значение текущему поисковому выражению.
   * @param value value to check/ проверяемое значение
   * @returns boolean indicating a match/ логическое значение, указывающее на совпадение
   */
  isSelection(t) {
    return this.matcher ? this.matcher.test(t) : !1;
  }
  /**
   * Returns the current regular expression matcher.
   *
   * Возвращает текущий сопоставитель регулярных выражений.
   * @returns RegExp or undefined/ RegExp или undefined
   */
  get() {
    return this.matcher;
  }
  /**
   * Updates the matcher based on the current item value and options.
   *
   * Обновляет сопоставитель на основе текущего значения элемента и опций.
   */
  update() {
    this.initMatcher();
  }
  /**
   * Initializes or resets the regular expression matcher.
   *
   * Инициализирует или сбрасывает сопоставитель регулярных выражений.
   */
  initMatcher() {
    this.item.is() ? this.matcher = this.options.getFindExactMatch() ? we(this.item.get()) : ve(this.item.get()) : this.matcher = void 0;
  }
}
class Le {
  /**
   * Constructor for SearchListOptions.
   *
   * Конструктор для SearchListOptions.
   * @param options search options/ опции поиска
   */
  constructor(t) {
    this.options = t;
  }
  /**
   * Returns the current search options.
   *
   * Возвращает текущие опции поиска.
   * @returns search options/ опции поиска
   */
  getOptions() {
    return this.options || {};
  }
  /**
   * Returns the minimum number of characters required to trigger a search.
   *
   * Возвращает минимальное количество символов, необходимых для запуска поиска.
   * @returns limit value/ значение лимита
   */
  getLimit() {
    var t;
    return (t = this.getOptions().limit) != null ? t : 2;
  }
  /**
   * Returns whether to return all items even if they don't match the search query.
   *
   * Возвращает, следует ли возвращать все элементы, даже если они не соответствуют поисковому запросу.
   * @returns boolean value/ логическое значение
   */
  getReturnEverything() {
    var t;
    return (t = this.getOptions().returnEverything) != null ? t : !1;
  }
  /**
   * Returns the search delay in milliseconds.
   *
   * Возвращает задержку поиска в миллисекундах.
   * @returns delay value/ значение задержки
   */
  getDelay() {
    var t;
    return (t = this.getOptions().delay) != null ? t : 0;
  }
  /**
   * Returns whether to perform an exact match search.
   *
   * Возвращает, следует ли выполнять поиск с точным совпадением.
   * @returns boolean value/ логическое значение
   */
  getFindExactMatch() {
    var t;
    return (t = this.getOptions().findExactMatch) != null ? t : !1;
  }
  /**
   * Returns the CSS class name used for highlighting matches.
   *
   * Возвращает имя класса CSS, используемое для выделения совпадений.
   * @returns class name/ имя класса
   */
  getClassName() {
    var t;
    return (t = this.getOptions().classSearchName) != null ? t : "sys-search-selection";
  }
  /**
   * Sets new search options.
   *
   * Устанавливает новые опции поиска.
   * @param options search options/ опции поиска
   * @returns this instance/ данный экземпляр
   */
  setOptions(t) {
    return this.options = t, this;
  }
}
class Ke {
  /**
   * Constructor for SearchList.
   *
   * Конструктор для SearchList.
   * @param list initial list of items/ исходный список элементов
   * @param columns columns to perform search on/ столбцы для выполнения поиска
   * @param value initial search value/ начальное значение поиска
   * @param options search options/ опции поиска
   */
  constructor(t, e, i, r) {
    c(this, "options");
    c(this, "item");
    c(this, "matcher");
    c(this, "data");
    /**
     * Callback for processing items when a search is active.
     * Checks for selection and handles "return everything" option.
     *
     * Обратный вызов для обработки элементов при активном поиске.
     * Проверяет выбор и обрабатывает опцию "возвращать всё".
     */
    c(this, "callbackToSelection", (t, e) => {
      if (this.matcher.isSelection(e))
        return this.data.toFormatItem(t, !0);
      if (this.options.getReturnEverything())
        return this.data.toFormatItem(t, !1);
    });
    /**
     * Callback for processing items when no search is active.
     *
     * Обратный вызов для обработки элементов, когда поиск не активен.
     */
    c(this, "callbackToNone", (t) => this.data.toFormatItem(t, !1));
    this.options = new Le(r), this.item = new be(i, this.options), this.matcher = new Se(this.item, this.options), this.data = new pe(t, e, this.item, this.options);
  }
  /**
   * Returns the search data management instance.
   *
   * Возвращает экземпляр управления данными поиска.
   * @returns SearchListData instance/ экземпляр SearchListData
   */
  getData() {
    return this.data;
  }
  /**
   * Returns the current list of items.
   *
   * Возвращает текущий список элементов.
   * @returns list of items/ список элементов
   */
  getList() {
    return this.data.getList();
  }
  /**
   * Returns the current search columns.
   *
   * Возвращает текущие столбцы поиска.
   * @returns columns or undefined/ столбцы или undefined
   */
  getColumns() {
    return this.data.getColumns();
  }
  /**
   * Returns the search item instance.
   *
   * Возвращает экземпляр элемента поиска.
   * @returns SearchListItem instance/ экземпляр SearchListItem
   */
  getItem() {
    return this.item;
  }
  /**
   * Returns the current search value.
   *
   * Возвращает текущее значение поиска.
   * @returns search value string or undefined/ строка значения поиска или undefined
   */
  getValue() {
    return this.item.get();
  }
  /**
   * Returns the search options instance.
   *
   * Возвращает экземпляр опций поиска.
   * @returns SearchListOptions instance/ экземпляр SearchListOptions
   */
  getOptions() {
    return this.options;
  }
  /**
   * Sets a new list of items.
   *
   * Устанавливает новый список элементов.
   * @param list new list/ новый список
   * @returns this instance/ данный экземпляр
   */
  setList(t) {
    return this.data.setList(t), this;
  }
  /**
   * Sets new search columns.
   *
   * Устанавливает новые столбцы поиска.
   * @param columns new columns/ новые столбцы
   * @returns this instance/ данный экземпляр
   */
  setColumns(t) {
    return this.data.setColumns(t), this;
  }
  /**
   * Sets a new search value and updates the matcher.
   *
   * Устанавливает новое значение поиска и обновляет сопоставитель.
   * @param value new search value/ новое значение поиска
   * @returns this instance/ данный экземпляр
   */
  setValue(t) {
    return this.item.get() === t ? this : (this.item.set(t), this.matcher.update(), this);
  }
  /**
   * Sets new search options and updates the matcher.
   *
   * Устанавливает новые опции поиска и обновляет сопоставитель.
   * @param options new options/ новые опции
   * @returns this instance/ данный экземпляр
   */
  setOptions(t) {
    return this.options.setOptions(t), this.matcher.update(), this;
  }
  /**
   * Processes the list and returns a formatted list of items based on the current search state.
   *
   * Обрабатывает список и возвращает отформатированный список элементов на основе текущего состояния поиска.
   * @returns formatted list of items/ отформатированный список элементов
   */
  to() {
    if (this.item.isSearch())
      return this.data.forEach(this.callbackToSelection);
    const t = this.data.getList();
    return t ? d(t, this.callbackToNone) : [];
  }
}
const Ce = [
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
], De = (s, t = {}) => {
  let e = String(s);
  if (s.match(/%[a-z]/)) {
    let i = 0;
    d(t, (r) => {
      e = e.replace(new RegExp(`%${Ce[i++]}`, "g"), String(r));
    });
  }
  return A(t) && d(t, (i, r) => {
    e = e.replace(
      new RegExp(`(?:\\[|\\{)${r}(?:\\]|\\})(.*?)(?:\\[|\\{)\\/${r}(?:\\]|\\})`, "g"),
      (o, a) => String(i).replace(/(?:\[|\{)content(?:\]|\})/g, a)
    ).replace(new RegExp(`(?:\\[|\\{)${r}(?:\\]|\\})`, "g"), String(i));
  }), e;
}, ke = "global", I = class I {
  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(t, e) {
    var r;
    const i = this.getText(t);
    return i ? this.replacement(i, e) : (K.isLocalhost() || await this.add(t), this.replacement((r = this.getText(t)) != null ? r : t));
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
  static getSync(t, e = !1, i) {
    const r = this.getText(t);
    return r ? this.replacement(r, i) : e ? " " : t;
  }
  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getList(t) {
    return new Promise((e) => {
      const i = {};
      let r = 0;
      for (const o of t) {
        const a = Array.isArray(o) ? o[0] : o, u = Array.isArray(o) ? o.slice(1) : void 0;
        this.get(a, u).then((h) => {
          i[a] = h, ++r >= t.length && e(i);
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
    const i = {};
    for (const r of t) {
      const o = Array.isArray(r) ? r[0] : r, a = Array.isArray(r) ? r.slice(1) : void 0;
      i[o] = this.getSync(o, e, a);
    }
    return i;
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
    d(t, (e, i) => {
      j(e) && y(e) && (this.data[this.getName(i)] = e);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (y(t))
      if (K.isLocalhost())
        this.addSync(t);
      else {
        const e = Object.keys(t);
        e.length > 0 && await this.add(e);
      }
  }
  /**
   * Adds texts synchronously by location.
   *
   * Добавляет тексты синхронно по местоположению.
   * @param data list of texts by location/ список текстов по местоположению
   */
  static addSyncByLocation(t) {
    d(
      t,
      (e, i) => d(e, (r, o) => {
        const a = `${i}-${o}`;
        a in this.data || (this.data[a] = r);
      })
    );
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
   * Checks for translation by code, taking into account fallback options.
   *
   * Проверяет наличие перевода по коду с учетом запасных вариантов.
   * @param name code name/ название кода
   */
  static hasName(t) {
    return this.getName(t) in this.data || this.getNameByLanguage(t) in this.data || this.getNameByGlobal(t) in this.data;
  }
  /**
   * Retrieves translation text by code, returning the first matching fallback.
   *
   * Получает текст перевода по коду, возвращая первое совпадение из запасных вариантов.
   * @param name code name/ название кода
   */
  static getText(t) {
    const e = this.getName(t);
    if (e in this.data)
      return this.data[e];
    const i = this.getNameByLanguage(t);
    if (i in this.data)
      return this.data[i];
    const r = this.getNameByGlobal(t);
    if (r in this.data)
      return this.data[r];
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
   * Getting the title for translation by language.
   *
   * Получение названия для перевода по языку.
   * @param name code name/ название кода
   */
  static getNameByLanguage(t) {
    return `${b.getLanguage()}-${t}`;
  }
  /**
   * Getting the title for translation globally.
   *
   * Получение названия для перевода глобально.
   * @param name code name/ название кода
   */
  static getNameByGlobal(t) {
    return `${ke}-${t}`;
  }
  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getNamesNone(t) {
    const e = [];
    return Y(t).forEach((i) => {
      i !== "__TRANSLATE_START__" && i !== "__TRANSLATE_END__" && !(this.getName(i) in this.data) && e.push(i);
    }), e;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = await K.get({
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
    return e ? De(t, e) : t;
  }
  /**
   * Adding translation data from the server.
   *
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const t = await this.getResponse();
    this.cache.forEach((e) => {
      var i;
      this.data[this.getName(e)] = (i = t == null ? void 0 : t[e]) != null ? i : "";
    }), this.cache = [];
  }
};
c(I, "url", "/api/translate"), c(I, "propsName", "list"), c(I, "data", {}), c(I, "cache", []), c(I, "resolveList", []), c(I, "timeout");
let Bt = I;
function Ne(s, t) {
  return Array(t).fill(s);
}
function Ye(s) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onloadend = () => t(i.result), i.onerror = e, i.readAsDataURL(s);
  });
}
function qe(s) {
  var t;
  if (l())
    return (t = document.querySelector(s)) != null ? t : void 0;
}
function Je(s) {
  if (l())
    return document.querySelectorAll(s);
}
function Me(s) {
  s.preventDefault(), s.stopPropagation();
}
function Ee(s, t, e) {
  const i = () => {
    s(), t != null && t() ? Ee(s, t, e) : e == null || e();
  };
  l() ? requestAnimationFrame(i) : i();
}
function Qe(s) {
  var i;
  const t = {}, e = E(s);
  if (e)
    for (const r of e.attributes)
      t[r.name] = (i = (r == null ? void 0 : r.value) || (r == null ? void 0 : r.textContent)) != null ? i : void 0;
  return t;
}
async function Xe(s) {
  var t, e;
  return (e = (t = s == null ? void 0 : s.clipboardData) == null ? void 0 : t.getData("text")) != null ? e : await navigator.clipboard.readText() || "";
}
function _e(s = "datetime") {
  return new gt(void 0, s).standard();
}
let Ft = Q(1e5, 9e5);
function Oe(s, t) {
  const e = E(s);
  return e ? (y(e.id) || e.setAttribute("id", `id-${Ft++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${Ft++}`;
}
function Ae(s) {
  return j(s) ? G(
    void 0,
    "img",
    { src: s }
  ) : s;
}
function Te(s) {
  var t, e, i;
  return (i = (t = s == null ? void 0 : s.key) != null ? t : s == null ? void 0 : s.code) != null ? i : (e = s == null ? void 0 : s.keyCode) == null ? void 0 : e.toString();
}
function Zt(s) {
  return d(s, (t) => t.length);
}
function Ge(s) {
  return Math.max(...Zt(s));
}
function ts(s) {
  return Math.min(...Zt(s));
}
function Ie(s) {
  var t, e, i, r;
  return (s == null ? void 0 : s.clientX) || ((e = (t = s == null ? void 0 : s.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientX) || ((r = (i = s == null ? void 0 : s.touches) == null ? void 0 : i[0]) == null ? void 0 : r.clientX) || 0;
}
function Be(s) {
  var t, e, i, r;
  return (s == null ? void 0 : s.clientY) || ((e = (t = s == null ? void 0 : s.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientY) || ((r = (i = s == null ? void 0 : s.touches) == null ? void 0 : i[0]) == null ? void 0 : r.clientY) || 0;
}
function es(s) {
  return {
    x: Ie(s),
    y: Be(s)
  };
}
function ss(s, t) {
  const e = {};
  return t.forEach((i) => {
    i in s && s[i] !== void 0 && (e[i] = s[i]);
  }), e;
}
function is(s, t = void 0) {
  const e = {};
  return d(s, (i, r) => {
    i !== t && (e[r] = i);
  }), e;
}
function rs(s) {
  return A(s) ? s : {};
}
function Fe(s, t) {
  return Ne(s, t).join("");
}
function ns(s, t, e = "#", i = 2, r = 12) {
  const o = Q(s, t), a = [];
  for (let u = 0; u < o; u++)
    a.push(Fe(e, Q(i, r)));
  return a.join(" ");
}
function os(s, t) {
  const e = s != null ? s : 0;
  return t > e ? 100 / (t - e) : 0;
}
function as(s, t) {
  const e = s != null ? s : 0;
  return t > e ? (t - e) / 100 : 0;
}
const xt = 0;
function cs(s, t, e) {
  const i = t == null ? void 0 : t.closest(s);
  if (t && i && i.scrollHeight !== i.offsetHeight) {
    const r = i.getBoundingClientRect(), o = t.getBoundingClientRect();
    if (e) {
      const a = e.getBoundingClientRect();
      i.scrollTop = t.offsetTop - (a.top - r.top) - (a.height / 2 - o.height / 2), i.scrollTop + i.offsetHeight < t.offsetTop + t.offsetHeight && (i.scrollTop = t.offsetTop + t.offsetHeight - i.offsetHeight);
    } else i.scrollTop > t.offsetTop ? i.scrollTop = o.top - r.top - xt : i.scrollTop + i.offsetHeight < t.offsetTop + t.offsetHeight && (i.scrollTop = o.top - r.top + o.height - r.height + xt);
  }
}
function us(s, t, e = 0) {
  if (!l())
    return;
  const i = (t == null ? void 0 : t.behavior) || "smooth";
  if ("scrollIntoView" in s && !e) {
    s.scrollIntoView({
      behavior: i,
      block: (t == null ? void 0 : t.block) || "start",
      inline: (t == null ? void 0 : t.inline) || "start"
    });
    return;
  }
  if ("getBoundingClientRect" in s && "scrollTo" in window) {
    const r = ((window == null ? void 0 : window.scrollY) || window.pageYOffset) + s.getBoundingClientRect().top - e;
    window.scrollTo({
      top: r,
      behavior: i
    });
  }
}
function hs(s, t, e = "smooth") {
  if (!l() || !s || !t)
    return;
  const i = s.getBoundingClientRect(), r = t.getBoundingClientRect();
  s.scrollBy({
    top: r.top - i.top,
    left: r.left - i.left,
    behavior: e
  });
}
function ls(s, t) {
  return s.indexOf(t) !== -1;
}
async function gs() {
  if (l()) {
    const s = await ut.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${s}px`);
  }
}
function ds(s, t) {
  const e = {};
  return m(s) && m(t) && d(s, (i, r) => {
    r in t && (e[r] = i);
  }), e;
}
function fs(s, t) {
  let e = Object.keys(s).length !== Object.keys(t).length;
  return e || d(s, (i, r) => {
    i !== (t == null ? void 0 : t[r]) && (e = !0);
  }), e;
}
const xe = (s) => {
  if (s instanceof HTMLElement) {
    const t = s.tagName.toLowerCase();
    return !!(t === "input" || t === "textarea" || t === "select" || s.isContentEditable || s.getAttribute("contenteditable") === "true");
  }
  return !1;
}, ms = (s, t) => s.code === "Space" || s.code === "Enter" || s.key === " " || s.key === "Spacebar" || s.key === "Enter" || s.keyCode === 13 || s.keyCode === 32 ? t !== void 0 ? !t : !xe(s.target) : !1;
function ys(s) {
  switch (typeof s) {
    case "number":
      return !0;
    case "string":
      return !!s.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function $s(s, t) {
  const e = Math.floor(t);
  return s >= e && s < e + 1;
}
function ps(s, t) {
  return Array.isArray(s) ? s.every((e) => at(e, t)) : at(s, t);
}
function bs(s, t) {
  if (s.startsWith(t))
    return s.slice(t.length).trim();
  let e = 0;
  for (; s[e] === t[e] && e < s.length && e < t.length; )
    e++;
  return s.slice(e).trim();
}
const ws = (s, t, e) => {
  var i, r;
  return (r = (i = s == null ? void 0 : s.replace(new RegExp(`<${t}`, "ig"), `<${e}`)) == null ? void 0 : i.replace(new RegExp(`</${t}`, "ig"), `</${e}`)) == null ? void 0 : r.trim();
};
function Re(s) {
  return [...new Set(s)];
}
function J(s, t, e = !0) {
  const i = V(s);
  return m(s) && m(t) && d(
    t,
    (r, o) => {
      const a = s == null ? void 0 : s[o];
      m(a) && m(r) ? e && Array.isArray(a) && Array.isArray(r) ? i[o] = V(Re([...a, ...r])) : i[o] = J(
        Array.isArray(a) ? { ...a } : a,
        r,
        e
      ) : i[o] = m(r) ? V(r) : r;
    }
  ), i;
}
function vs(s, t) {
  let e = s;
  return d(t, (i, r) => {
    e = e.replace(zt(`[${r}]`), B(i));
  }), e;
}
function Pe(s, t = "auto") {
  switch (t) {
    case "auto":
      return s.naturalWidth >= s.naturalHeight;
    case "width":
      return !0;
    case "height":
      return !1;
  }
}
function Ss(s, t, e = "auto", i) {
  var o;
  const r = Ae(s);
  if (r && (r.naturalWidth > t && (e === "auto" || e === "width") || r.naturalHeight > t && (e === "auto" || e === "height"))) {
    const a = Pe(r, e), u = (o = document.createElement("canvas")) == null ? void 0 : o.getContext("2d");
    if (u)
      return u.canvas.width = a ? t : r.naturalWidth / r.naturalHeight * t, u.canvas.height = a ? r.naturalHeight / r.naturalWidth * t : t, u.drawImage(r, 0, 0, u.canvas.width, u.canvas.height), u.canvas.toDataURL(i);
  }
}
function Ls(s) {
  const t = k(s);
  if (t > 0) {
    const e = String(Math.floor(t / 60)).padStart(2, "0"), i = String(t % 60).padStart(2, "0");
    return `${e}:${i}`;
  }
  return "00:00";
}
function Cs(s, t, {
  multiple: e = !1,
  maxlength: i = 0,
  alwaysChange: r = !0,
  notEmpty: o = !1
}) {
  if (e) {
    if (ht(s)) {
      const a = s.indexOf(t), u = [...s];
      return a !== -1 ? (!o || u.length > 1) && u.splice(a, 1) : (!i || s.length < i) && u.push(t), u;
    }
    return s === t ? [] : s ? [s, t] : [t];
  }
  return r || s !== t ? t : s;
}
function Ds(s, t, e) {
  if (m(s) && m(t)) {
    if (e) {
      let i = {}, r = !1;
      return d(s, (o, a) => {
        !r && (e === a || e === o) ? (r = !0, i = J(i, t)) : r ? i = J(i, { [a]: o }) : i[a] = m(o) ? V(o) : o;
      }), r ? i : J(s, t);
    }
    if (m(t))
      return J(s, t);
  }
  return V(s);
}
function ks(s) {
  return Ht(s).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function Ns(s) {
  return s.toString().trim().replace(/[^\w-. ]+/g, "").replace(/[ .]+/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(/(?<=[\w ])[A-Z]/g, (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function Es(s, t, e, i) {
  const r = k(s), o = k(t);
  return t && o < r ? `${Rt(o, e, i)}+` : Rt(r, e, i);
}
const Rt = (s, t, e) => t ? new N(e).number(s) : s;
function We(s, t) {
  return 1 / s * t;
}
function As(s, t) {
  return We(s, t) * 100;
}
function Is(s) {
  let t = "";
  for (const e of s)
    t += String.fromCharCode(e);
  return l() ? window.btoa(t) : globalThis && globalThis.Buffer ? globalThis == null ? void 0 : globalThis.Buffer.from(s).toString("base64") : "";
}
async function Bs(s) {
  if (l())
    try {
      await navigator.clipboard.writeText(s);
    } catch (t) {
      document == null || document.execCommand(s);
    }
}
export {
  K as Api,
  Qt as ApiDefault,
  Mt as ApiHeaders,
  C as ApiMethodItem,
  Ot as ApiPreparation,
  _t as ApiResponse,
  vt as ApiStatus,
  He as BroadcastMessage,
  te as Cache,
  Gt as CacheItem,
  Lt as CacheStatic,
  Ct as Cookie,
  Ut as CookieBlock,
  et as DataStorage,
  gt as Datetime,
  bt as EventItem,
  ze as Formatters,
  F as FormattersType,
  n as GEO_FLAG_ICON_NAME,
  b as Geo,
  Dt as GeoFlag,
  N as GeoIntl,
  kt as GeoPhone,
  Ze as Global,
  Nt as Hash,
  It as Icons,
  R as Loading,
  Ve as Meta,
  dt as MetaManager,
  fe as MetaOg,
  le as MetaOpenGraphAge,
  ue as MetaOpenGraphAvailability,
  he as MetaOpenGraphCondition,
  ge as MetaOpenGraphGender,
  $ as MetaOpenGraphTag,
  ce as MetaOpenGraphType,
  ae as MetaRobots,
  L as MetaTag,
  me as MetaTwitter,
  de as MetaTwitterCard,
  p as MetaTwitterTag,
  ut as ScrollbarWidth,
  Ke as SearchList,
  pe as SearchListData,
  be as SearchListItem,
  Se as SearchListMatcher,
  Le as SearchListOptions,
  ke as TRANSLATE_GLOBAL_PREFIX,
  Bt as Translate,
  $e as addTagHighlightMatch,
  T as anyToString,
  De as applyTemplate,
  Ne as arrFill,
  Ye as blobToBase64,
  V as copyObject,
  D as copyObjectLite,
  G as createElement,
  qe as domQuerySelector,
  Je as domQuerySelectorAll,
  oe as encodeAttribute,
  ft as escapeExp,
  Me as eventStopPropagation,
  B as executeFunction,
  Xt as executePromise,
  d as forEach,
  Ee as frame,
  Qe as getAttributes,
  Xe as getClipboardData,
  se as getColumn,
  _e as getCurrentDate,
  E as getElement,
  Oe as getElementId,
  Ae as getElementImage,
  re as getElementItem,
  pt as getElementOrWindow,
  we as getExactSearchExp,
  zt as getExp,
  x as getItemByPath,
  Te as getKey,
  Zt as getLengthOfAllArray,
  Ge as getMaxLengthAllArray,
  ts as getMinLengthAllArray,
  es as getMouseClient,
  Ie as getMouseClientX,
  Be as getMouseClientY,
  ss as getObjectByKeys,
  is as getObjectNoUndefined,
  rs as getObjectOrNone,
  ns as getRandomText,
  Pt as getRequestString,
  ve as getSearchExp,
  ye as getSeparatingSearchExp,
  os as getStepPercent,
  as as getStepValue,
  cs as goScroll,
  us as goScrollSmooth,
  hs as goScrollTo,
  ls as inArray,
  gs as initScrollbarOffset,
  ds as intersectKey,
  ht as isArray,
  fs as isDifferent,
  ct as isDomData,
  l as isDomRuntime,
  ms as isEnter,
  y as isFilled,
  ys as isFloat,
  lt as isFunction,
  Jt as isInDom,
  xe as isInput,
  $s as isIntegerBetween,
  X as isNull,
  yt as isNumber,
  m as isObject,
  A as isObjectNotArray,
  at as isSelected,
  ps as isSelectedByList,
  j as isString,
  Wt as isWindow,
  Q as random,
  bs as removeCommonPrefix,
  ws as replaceComponentName,
  J as replaceRecursive,
  vs as replaceTemplate,
  Ss as resizeImageByMax,
  Ls as secondToTime,
  ne as setElementItem,
  Cs as setValues,
  Ds as splice,
  Fe as strFill,
  ie as strSplit,
  Y as toArray,
  Ht as toCamelCase,
  ks as toCamelCaseFirst,
  P as toDate,
  Ns as toKebabCase,
  k as toNumber,
  Es as toNumberByMax,
  We as toPercent,
  As as toPercentBy100,
  jt as transformation,
  Is as uint8ArrayToBase64,
  Re as uniqueArray,
  Bs as writeClipboardData
};
