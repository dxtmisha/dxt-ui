var Yt = Object.defineProperty;
var Mt = (i, t, e) => t in i ? Yt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => Mt(i, typeof t != "symbol" ? t + "" : t, e);
import { geo as qt } from "@dxtmisha/media";
function C(i, t) {
  return t ? Object.assign({}, i, t) : Object.assign({}, i);
}
function y(i) {
  return !!(i && typeof i == "object");
}
function g(i, t, e) {
  if (y(i)) {
    const s = [];
    return i instanceof Map ? i.forEach((r, a) => s.push(t(r, a, i))) : Array.isArray(i) ? i.forEach((r, a) => s.push(t(r, a, i))) : Object.entries(i).forEach(
      ([r, a]) => s.push(t(a, r, i))
    ), e ? s : s.filter((r) => r !== void 0);
  }
  return [];
}
function Wt(i, t = "=", e = "&") {
  return g(
    i,
    (s, r) => `${r}${t}${encodeURIComponent(String(s).trim())}`
  ).sort().join(e);
}
function it(i) {
  return Array.isArray(i);
}
function _(i) {
  return i == null;
}
function $(i, t) {
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
        return Array.isArray(i) ? i.length > 0 : Object.values(i).some((e) => !_(e));
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
  return y(i) && !Array.isArray(i);
}
function U(i) {
  return typeof i == "string";
}
function Y(i) {
  return JSON.parse(JSON.stringify(i));
}
function f() {
  return typeof window != "undefined" && !!window.document;
}
function pt(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^-?[0-9]+(\.[0-9]+)?$/);
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
function ht(i, t) {
  return _(i) ? !1 : Array.isArray(t) ? t.includes(i) : pt(i) && pt(t) ? k(i) === k(t) : i === t;
}
function st(i) {
  return i instanceof Function || typeof i == "function";
}
function B(i) {
  return st(i) ? i() : i;
}
function lt() {
  return location.href.startsWith("data:");
}
const at = {};
let bt = "ui-storage";
class rt {
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
    if (s in at)
      return at[s];
    this.make(), at[s] = this;
  }
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(t) {
    bt = t;
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
    return _(t) || this.age && this.age + t * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.
   *
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (f() && !lt()) {
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
    return `${bt}__${this.name}`;
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
const Jt = "geo-code", w = class w {
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
    return C(this.item, {
      language: this.language
    });
  }
  /**
   * Returns the full list of countries.
   *
   * Возвращает полный список стран.
   */
  static getList() {
    return qt;
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
    return t && (t.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/) && (e = this.getByCodeFull(t)), !e && t.match(/[A-Z]{2}/) && (e = this.getByCountry(this.toCountry(t))), !e && t.match(/[a-z]{2}/) && (e = this.getByLanguage(this.toLanguage(t)))), this.toFull(Y(e != null ? e : this.getList()[0]));
  }
  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(t) {
    return this.getList().find(
      (e) => ht(t, [
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
      return e.country === t || ((s = e == null ? void 0 : e.countryAlternative) == null ? void 0 : s.find((r) => r === t));
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
      return e.language === t || ((s = e == null ? void 0 : e.languageAlternative) == null ? void 0 : s.find((r) => r === t));
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
    return C(t, {
      standard: this.toStandard(t),
      firstDay: (t == null ? void 0 : t.firstDay) || "Mo"
    });
  }
};
c(w, "storage", new rt(Jt)), c(w, "location"), c(w, "item"), c(w, "language"), c(w, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), w.location = w.findLocation(), w.language = w.findLanguage(w.location), w.item = w.getByCode(w.location);
let m = w;
function Ut(i) {
  return f() && i === window;
}
function I(i) {
  var t;
  if (f())
    return Ut(i) ? document.body : U(i) ? (t = document.querySelector(i)) != null ? t : void 0 : i;
}
function wt(i) {
  return Ut(i) ? i : I(i);
}
function Qt(i) {
  var t;
  return !!((t = I(i)) != null && t.closest("html"));
}
function H(i) {
  return Array.isArray(i) ? i : [i];
}
class vt {
  /**
   * Constructor for EventItem.
   *
   * Конструктор для EventItem.
   * @param elementSelector target element or selector where the listener should be attached / целевой элемент или селектор, к которому должен быть прикреплен слушатель
   * @param type event type (e.g., 'click'), array of types, or special optimization types ('resize', 'scroll-sync') / тип события (например, 'click'), массив типов или специальные типы оптимизации ('resize', 'scroll-sync')
   * @param listener the handler function to be executed when the event occurs / функция-обработчик, которая будет выполнена при возникновении события
   * @param options standard EventListenerOptions or boolean for useCapture / стандартные EventListenerOptions или логическое значение для useCapture
   * @param detail additional data provided to the listener via the custom Event interaction / дополнительные данные, предоставляемые слушателю через кастомное взаимодействие с событием
   */
  constructor(t, e = ["click"], s, r, a) {
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
      Qt(this.elementControl) ? ((e = this.listener) == null || e.call(this.element, t, this.detail), y(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.
     *
     * Состояния события.
     */
    c(this, "activity", !1);
    c(this, "activityItems", []);
    this.listener = s, this.options = r, this.detail = a, this.element = wt(t), this.elementControl = I(t), this.type = H(e);
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
    const e = wt(t);
    return this.elementControlEdit || (this.elementControl = I(t)), this.element = e, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl(t) {
    return this.elementControl = I(t), this.elementControlEdit = !_(this.elementControl), this.elementControlEdit || (this.elementControl = I(this.element)), this;
  }
  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(t) {
    return this.type = H(t), this.reset(), this;
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
   * Triggers the events on the target element, optionally with a new detail value.
   * This method manually initiates a `CustomEvent` dispatch for all specified types.
   *
   * Инициирует события на целевом элементе, опционально с новым значением detail.
   * Этот метод вручную запускает диспетчеризацию `CustomEvent` для всех указанных типов.
   * @param detail the value to be passed as the event detail / значение, которое будет передано как detail события
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
      observer: r
    }) => {
      r ? r.disconnect() : s ? t == null || t.removeEventListener(e, s) : t == null || t.removeEventListener(e, this.listenerRecent);
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
const St = "ui-loading", Z = class Z {
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
    if (f()) {
      const s = new vt(window, St, t).setElementControl(e).start();
      this.registrationList.push({
        item: s,
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
    this.registrationList = this.registrationList.filter((s) => s.listener === t && s.element === e ? (s.item.stop(), !1) : !0);
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
c(Z, "value", 0), c(Z, "event"), c(Z, "registrationList", []), f() && (Z.event = new vt(window, St));
let R = Z;
class Xt {
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
      const s = C(
        this.headers,
        t
      );
      return $(e) && (s["Content-Type"] = e), s;
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
class _t {
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
        return C(e, t);
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
class Lt {
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
async function Ot(i) {
  const t = B(i);
  return t instanceof Promise ? await t : t;
}
function X(i, t) {
  return Math.floor(Math.random() * (t - i + 1) + i);
}
const Dt = "d-response-loading";
class Tt {
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
  get(t = "", e, s, r) {
    return this.response.find((a) => !this.isDisable(a) && this.isPath(a, t) && e === a.method && this.isFirst(a, r) && this.isResponse(a, s) ? (this.isDevMode(r) && console.warn(`Response type: ${a.path}`), this.first.push(a), !0) : !1);
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
    return this.response.push(...H(t)), this;
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
      global: r = s === D.get,
      devMode: a = !1
    } = t;
    if (r || this.isDevMode(a)) {
      const o = this.requestDefault.request(t.request), u = this.get(e, s, o, a);
      if (u) {
        const h = await this.fetch(u, o);
        return this.isDevMode(a) && console.warn("Response data:", e, o, h), h;
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
    const s = this.requestDefault.request(t == null ? void 0 : t.request);
    return e === s || s === "*any" || $(e) && $(s) && A(e) && A(s) && !(e instanceof FormData) && !(s instanceof FormData) && Object.values(e).length === Object.values(s).length && Object.entries(s).reduce(
      (r, [a, o]) => r && (o === (e == null ? void 0 : e[a]) || o === "*any"),
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
      Ot(
        st(t.response) ? t.response(e) : t.response
      ).then((r) => {
        t != null && t.lag ? (R.show(), setTimeout(() => {
          this.stopResponseLoading(), s(r), R.hide();
        }, X(0, 2e3))) : (this.stopResponseLoading(), s(r));
      });
    });
  }
  /**
   * Enable loading for request emulation.
   *
   * Включить загрузку для эмуляции запроса.
   */
  startResponseLoading() {
    this.loading && clearTimeout(this.loading), f() && document.body.classList.add(Dt);
  }
  /**
   * Disable loading for request emulation.
   *
   * Отключить загрузку для эмуляции запроса.
   */
  stopResponseLoading() {
    this.loading = setTimeout(() => {
      this.loading = void 0, f() && document.body.classList.remove(Dt);
    }, 1200);
  }
}
class Gt {
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
  async makeEnd(t, e, s) {
    let r = {};
    return t && this.callbackEnd && (r = await this.callbackEnd(e, s)), r;
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
    let s = {};
    return this.callbackEnd && (s = await this.callbackEnd(t, e)), s;
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
    return `${e ? this.url : ""}${t}`.replace("{locale}", m.getLocation()).replace("{country}", m.getCountry()).replace("{language}", m.getLanguage());
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
    if (e !== D.get && $(t))
      return U(t) ? t : JSON.stringify(t);
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
      const r = e.match(/\?/) ? "&" : "?", a = typeof t == "object" ? Wt(t) : t;
      if ($(a))
        return `${r}${a}`;
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
    return U(t) ? await this.fetch({
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
    return this.request(C(t, {
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
    return this.request(C(t, {
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
    return this.request(C(t, {
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
    return this.request(C(t, {
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
      queryReturn: r = void 0,
      globalPreparation: a = !0,
      globalEnd: o = !0
    } = t, u = await this.response.emulator(t);
    if (u)
      return u;
    const h = new Lt();
    let d;
    R.show();
    try {
      await this.preparation.make(a, t);
      const l = await this.makeQuery(t), S = await this.preparation.makeEnd(o, l, t);
      if (h.setStatus(l.status, l.statusText), this.status.setStatus(l.status, l.statusText), S != null && S.reset)
        return R.hide(), await this.fetch(t);
      d = await this.readData(
        l,
        r,
        S
      );
    } catch (l) {
      throw s || console.error("Api: ", l), h.setError(String(l)), this.status.setError(String(l)), R.hide(), l;
    }
    return R.hide(), h.setLastResponse(d), this.status.setLastResponse(d), this.makeStatus(
      this.makeData(d, e),
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
  static async readData(t, e, s) {
    var r;
    return e ? await e(t) : "data" in s ? s.data : ((r = t.headers.get("Content-Type")) != null ? r : "").match("application/json") ? await t.json() : { data: await t.text() };
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
      path: r = "",
      pathFull: a = void 0,
      method: o = D.get,
      headers: u = {},
      type: h = "application/json;charset=UTF-8",
      init: d = {},
      controller: l = void 0
    } = t, S = a != null ? a : this.getUrl(r, s), nt = `${S}${this.getBodyForGet(e, S, o)}`, O = this.headers.get(u, h), M = C(d, {
      method: o,
      body: this.getBody(e, o)
    });
    return O && (M.headers = O), l && (M.signal = l.signal), await fetch(nt, M);
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
    if (t.data !== null && typeof t.data != "object" || it(t.data))
      return t.data;
    const s = C(t.data);
    return "success" in t && !("success" in s) && (s.success = t.success), "status" in t && !("status" in s) && (s.status = t.status), "message" in t && !("message" in s) && (s.message = t.message), s;
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
c(v, "url", "/api/"), c(v, "headers", new Xt()), c(v, "requestDefault", new _t()), c(v, "status", new Lt()), c(v, "response", new Tt(v.requestDefault)), c(v, "preparation", new Gt());
let W = v;
class Ze {
  /**
   * Constructor
   * @param name channel name/ название канала
   * @param callback callback on message received/ колбэк на получение сообщения
   * @param callbackError callback on message error/ колбэк на ошибку сообщения
   */
  constructor(t, e, s) {
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
    if (this.callback = e, this.callbackError = s, f())
      try {
        this.channel = new BroadcastChannel(`${te()}__${t}`), this.channel.onmessage = this.update, this.channel.onmessageerror = this.updateError;
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
const te = () => new rt("__broadcast-name").get(() => `name_${X(1e6, 9999999)}`);
class ee {
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
class ie {
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
    return t in this.cache || (this.cache[t] = new ee(e)), this.cache[t];
  }
}
const et = class et {
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
c(et, "cache"), et.cache = new ie();
let Ct = et;
function Ht(i, t = !1) {
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
          if (t && f() && typeof (window == null ? void 0 : window[e]) == "function")
            return window[e];
        }
    }
  }
  return i;
}
const se = "cookie-block";
class zt {
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
c(zt, "storage", new rt(se));
const T = {}, $t = class $t {
  constructor(t) {
    c(this, "value");
    c(this, "options", {});
    if (this.name = t, t in ot)
      return ot[t];
    this.value = T == null ? void 0 : T[t], ot[t] = this;
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
    var t, e, s, r, a;
    if (f() && !lt() && !zt.get()) {
      const o = String((t = this.value) != null ? t : "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(o)}`,
        `max-age=${o === "" ? "-1" : this.getAge()}`,
        `SameSite=${(s = (e = this.options) == null ? void 0 : e.sameSite) != null ? s : "strict"}`,
        ...(a = (r = this.options) == null ? void 0 : r.arguments) != null ? a : []
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
      e && $(s) && (T[e] = Ht(s));
    }
  }
};
f() && !lt() && $t.updateData();
let kt = $t;
const ot = {};
function P(i) {
  var r, a, o, u, h, d, l, S;
  if (i instanceof Date)
    return i;
  if (_(i))
    return /* @__PURE__ */ new Date();
  if (typeof i == "number")
    return new Date(i);
  let t = i, e = m.getTimezoneFormat().trim();
  i.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (nt, O, M) => (t = O, e = M.trim(), nt));
  const s = (S = (l = (d = (h = (u = (o = (a = (r = /^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) != null ? r : /^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) != null ? a : /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(t) && t.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6")) != null ? o : /^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) != null ? u : /^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) != null ? h : /^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) != null ? d : /^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) != null ? l : /^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) != null ? S : t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s.trim()}${e}`);
}
function re(i, t) {
  return g(i, (e) => e == null ? void 0 : e[t], !0);
}
class N {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = m.getLocation()) {
    c(this, "geo");
    this.geo = m.find(t);
    const e = this.getLocation();
    if (e in ct)
      return ct[e];
    ct[e] = this;
  }
  /**
   * Returns an instance of the class according to the specified country code.
   *
   * Возвращает экземпляр класса по указанному коду страны.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getInstance(t = m.getLocation()) {
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
    var a;
    let s = { type: "language" }, r;
    e && (typeof e == "string" ? s.type = e : s = {
      ...s,
      ...e
    });
    try {
      typeof Intl != "undefined" && (t ? r = new Intl.DisplayNames(this.getLocation(), s).of(t) : s.type === "language" ? r = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (r = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country)));
    } catch (o) {
      console.error("display: ", o);
    }
    return (a = r != null ? r : t) != null ? a : "";
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
    return this.display(m.getByCode(t).language, s);
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
    const a = (h = (u = this.geo) == null ? void 0 : u.nameFormat) != null ? h : "fl";
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
    return r ? o.replace(/ (.)[^ ]+/ig, " $1.") : o;
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
    return ((r = (s = this.numberObject(e)) == null ? void 0 : s.format) == null ? void 0 : r.call(s, k(t))) || t.toString();
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    var t, e, s, r, a;
    return ((a = (r = (s = (e = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : e.call(t, 1.2)) == null ? void 0 : s.find) == null ? void 0 : r.call(s, (o) => o.type === "decimal")) == null ? void 0 : a.value) || ".";
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
    }, a = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...o) => (r.currency = String(o[2]).toUpperCase(), String(o[1])));
    if (s) {
      const o = this.numberObject(r);
      return o ? re(
        o.formatToParts(k(t)).filter((u) => ["literal", "currency"].indexOf(u.type) === -1),
        "value"
      ).join("") : t.toString();
    } else return "currency" in r ? this.number(
      typeof t == "number" ? t : a,
      r
    ) : this.number(
      typeof t == "number" ? t : a,
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
    var s, r, a, o, u;
    return ((u = (o = (a = (r = (s = this.numberObject({
      style: "currency",
      currencyDisplay: e,
      currency: t
    })) == null ? void 0 : s.formatToParts) == null ? void 0 : r.call(s, 100)) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (h) => h.type === "currency")) == null ? void 0 : u.value) || t;
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
    }, r = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...a) => (s.unit = String(a[2]).toLowerCase(), String(a[1])));
    return this.number(r, s);
  }
  /**
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(t, e = "byte") {
    const s = k(t);
    if (s > 1024 && U(e))
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
  plural(t, e, s, r) {
    var u;
    const a = k(t), o = e.split("|");
    if (o.length > 1)
      try {
        if (typeof Intl != "undefined") {
          const d = new Intl.PluralRules(this.getLocation(), s).select(a);
          let l;
          switch (d) {
            case "zero":
              l = o[o.length - 1];
              break;
            case "one":
              l = o == null ? void 0 : o[0];
              break;
            case "two":
              l = o == null ? void 0 : o[1];
              break;
            case "few":
              l = o != null && o[3] ? o == null ? void 0 : o[2] : o == null ? void 0 : o[1];
              break;
            case "many":
              l = (o == null ? void 0 : o[3]) || (o == null ? void 0 : o[2]) || (o == null ? void 0 : o[1]);
              break;
            case "other":
              o.length === 6 ? l = o[o.length - 2] : l = o[o.length - 1];
              break;
          }
          return `${this.number(a, r)} ${l != null ? l : ""}`.trim();
        }
      } catch (h) {
        console.error("plural: ", h);
      }
    return `${this.number(a, r)} ${(u = o == null ? void 0 : o[0]) != null ? u : ""}`.trim();
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
    const a = P(t), o = typeof s == "string", u = this.dateOptions(e, o ? s : "short");
    return r && (u.hour12 = !1), o || Object.assign(u, s), a.toLocaleString(this.getLocation(), u);
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
    const r = P(t), a = s || /* @__PURE__ */ new Date(), o = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let u = "second", h = (r.getTime() - a.getTime()) / 1e3;
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
  relativeLimit(t, e, s, r, a, o, u) {
    const h = P(t), d = s || /* @__PURE__ */ new Date(), l = new Date(d), S = new Date(d);
    return l.setDate(d.getDate() - e), S.setDate(d.getDate() + e), h >= l && h <= S ? this.relative(
      h,
      r,
      d
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
    const r = {
      numeric: "auto",
      ...typeof s == "string" ? { style: s } : s || {}
    };
    try {
      if (this.hasIntl() && typeof Intl.RelativeTimeFormat != "undefined")
        return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(k(t)), e);
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
      if (this.hasIntlDateTimeFormat())
        return Intl.DateTimeFormat(this.getLocation(), { month: e || "long" }).format(P(t));
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
      if (this.hasIntlDateTimeFormat()) {
        const s = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
        for (let a = 0; a < 12; a++)
          s.setMonth(a), e.push({
            label: r.format(s).replace(/^./, (o) => o.toUpperCase()),
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
      if (this.hasIntlDateTimeFormat())
        return Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }).format(P(t));
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
      if (this.hasIntlDateTimeFormat()) {
        const s = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), a = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
        s.setDate(s.getDate() - a);
        for (let o = 0; o < 7; o++)
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
    if (this.hasIntl() && typeof Intl.Collator != "undefined") {
      const s = new Intl.Collator(this.getLocation());
      return t.sort((r, a) => s.compare(...e(r, a)));
    }
    return t;
  }
  /**
   * Checks if the Intl object is available.
   *
   * Проверяет доступность объекта Intl.
   */
  hasIntl() {
    return typeof Intl != "undefined";
  }
  /**
   * Checks if the Intl.DateTimeFormat object is available.
   *
   * Проверяет доступность объекта Intl.DateTimeFormat.
   */
  hasIntlDateTimeFormat() {
    return this.hasIntl() && typeof Intl.DateTimeFormat != "undefined";
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
      if (this.hasIntl() && typeof Intl.NumberFormat != "undefined")
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
const ct = {};
class dt {
  /**
   * Constructor
   * @param date date for processing/ дата для обработки
   * @param type type of date format for output/ тип формата даты вывода
   * @param code country and language code/ код страны и языка
   */
  constructor(t, e = "date", s = m.getLocation()) {
    c(this, "date");
    c(this, "hour24", !1);
    c(this, "watch");
    this.type = e, this.code = s, this.date = P(t);
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
    const s = e / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(s), { signDisplay: "always" });
    const r = this.toTimeZoneHourFormat(s), a = s.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${r}${a}` : `${r}:${a}`;
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
    const e = new dt(this.date, this.type, "en-GB"), s = [];
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
    f() && this.getIntl().number(Math.trunc(t), {
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
function G(i) {
  var t;
  return U(i) ? i.trim() : it(i) && i.findIndex((e) => y(e)) === -1 ? i.join(",") : y(i) ? JSON.stringify(i) : i === !0 ? "1" : i === !1 ? "0" : (t = i == null ? void 0 : i.toString()) != null ? t : "";
}
function ne(i, t, e) {
  const s = G(i);
  if (!e || e <= 0)
    return s.split(t);
  const r = s.split(t, e), a = s.split(t);
  return r.length === a.length ? r : (r.pop(), [
    ...r,
    a.slice(e - 1).join(t)
  ]);
}
function x(i, t) {
  var r;
  if (!$(t))
    return;
  const e = ne(t, ".", 2), s = e[0];
  return s && (i != null && i[s]) && y(i[s]) && (e != null && e[1]) ? x(i[s], e[1]) : (r = $(s) && (i == null ? void 0 : i[s])) != null ? r : void 0;
}
function Zt(i) {
  return i.toString().trim().replace(/[^\w-. ]+/g, "").replace(/[ .]+/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${String(t[1]).toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
var F = /* @__PURE__ */ ((i) => (i.currency = "currency", i.date = "date", i.name = "name", i.number = "number", i.plural = "plural", i.unit = "unit", i))(F || {});
class Ve {
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
   * Checks if the list is set.
   *
   * Проверяет, установлен ли список.
   * @returns true if the list is set, false otherwise/ true, если список установлен, иначе false
   */
  is() {
    return !!this.list;
  }
  /**
   * Checks if the list is an array.
   *
   * Проверяет, является ли список массивом.
   * @returns true if the list is an array, false otherwise/ true, если список является массивом, иначе false
   */
  isArray() {
    return Array.isArray(this.list);
  }
  /**
   * Returns the count of records in the list.
   *
   * Возвращает количество записей в списке.
   * @returns count of records/ количество записей
   */
  length() {
    return this.list ? this.isArray() ? this.list.length : 1 : 0;
  }
  /**
   * Returns the current list of data.
   *
   * Возвращает текущий список данных.
   * @returns the list of data or undefined if not set/ список данных или undefined, если не задан
   */
  getList() {
    return this.list ? H(this.list) : [];
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
   * Formats the entire list or a single item based on the provided options.
   * Adds formatted values with the suffix 'Format' to each item.
   *
   * Форматирует весь список или один элемент на основе предоставленных параметров.
   * Добавляет отформатированные значения с суффиксом 'Format' к каждому элементу.
   * @returns formatted data (list or single item) with additional formatted columns /
   * отформатированные данные (список или один элемент) с дополнительными отформатированными столбцами
   */
  to() {
    const t = g(this.getList(), (e) => ({
      ...e,
      ...this.getFormatData(e)
    }));
    return this.isArray() ? t : t[0];
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
    return g(
      this.options,
      (s, r) => {
        const a = `${Zt(r)}Format`, o = x(t, r);
        s != null && s.transformation ? $(o) ? e[a] = s.transformation(
          o,
          t,
          s.options
        ) : e[a] = "" : e[a] = this.transformation(
          o,
          t,
          s.type,
          s.options
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
  transformation(t, e, s, r) {
    if ($(t) || s === F.name)
      switch (s) {
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
  formatCurrency(t, e, s) {
    var a;
    const r = s != null && s.currencyPropName ? x(e, s.currencyPropName) : e == null ? void 0 : e.currency;
    return N.getInstance().currency(
      t,
      (a = s == null ? void 0 : s.options) != null ? a : r,
      s == null ? void 0 : s.numberOnly
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
    var o, u, h;
    const s = x(t, (o = e == null ? void 0 : e.lastPropName) != null ? o : "lastName"), r = x(t, (u = e == null ? void 0 : e.firstPropName) != null ? u : "firstName"), a = x(t, (h = e == null ? void 0 : e.surname) != null ? h : "surname");
    return s && r ? N.getInstance().fullName(
      s,
      r,
      a,
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
const n = "f", V = class V {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = m.getLocation()) {
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
    const e = m.find(t);
    if (e) {
      const r = this.getCountry(e);
      return {
        language: this.getLanguage(e),
        country: r,
        standard: e.standard,
        icon: (s = V.flags) == null ? void 0 : s[e.country],
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
    return g(this.getCodes(t), (e) => this.get(e));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return g(this.getList(t), (e) => {
      const s = new V(e.standard).get(e.standard);
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
    return new N(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.
   *
   * Возвращает список стран для получения данных.
   * @param codes country code/ код страны
   */
  getCodes(t) {
    return t != null ? t : Object.keys(V.flags);
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
c(V, "flags", {
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
let Nt = V;
const K = class K {
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
    var o, u, h;
    const e = this.toNumber(t), s = [""];
    let r = this.map, a;
    for (const d of e)
      if (s[s.length - 1] += d, d in r)
        (o = r[d]) != null && o.value && (a = r[d], s.push("")), r = (h = (u = r[d]) == null ? void 0 : u.next) != null ? h : {};
      else
        break;
    return a ? (s.pop(), {
      item: a,
      phone: e.join("").slice(s.join("").length)
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
    if ($(t) && Array.isArray(e) && e.length > 0) {
      const s = this.removeZero(t), r = s.length;
      for (const a of e)
        if (this.getUnnecessaryLength(a) === r)
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
    var e, s;
    return (s = (e = t.match(/\*/g)) == null ? void 0 : e.length) != null ? s : 0;
  }
  /**
   * Creating a list for the map.
   *
   * Формирование списка для карты.
   */
  static makeList() {
    const t = g(m.getList(), (e) => {
      if (e != null && e.phoneMask)
        return {
          phone: (e == null ? void 0 : e.phoneCode) && Number(e.phoneCode.replace(/[^0-9]+/, "")) || void 0,
          within: (e == null ? void 0 : e.phoneWithin) || 0,
          mask: H(e.phoneMask),
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
        let s = this.map, r;
        if (this.toNumber(e).forEach((a) => {
          var o;
          a in s || (s[a] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), r = s[a], s = (o = r == null ? void 0 : r.next) != null ? o : {};
        }), r) {
          r.value === void 0 && (r.info = t, r.value = t.value);
          const a = this.toWithin(e, t.within);
          r.mask.push(a), r.maskFull.push(a.replace(/\d/ig, "*")), r.items.push(t);
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
c(K, "list", []), c(K, "map", {}), K.makeList(), K.makeMap();
let At = K, z;
class Ke {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get(t) {
    return z && (z == null ? void 0 : z[t]);
  }
  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(t) {
    z === void 0 && (z = C(t));
  }
}
const j = class j {
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
    const s = B(e);
    s !== ((r = this.hash) == null ? void 0 : r[t]) && (this.hash[t] = s, this.update());
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
   * Removing an event when data is changed.
   *
   * Удаление события при изменении данных.
   * @param name variable names/ названия переменных
   * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
   */
  static removeWatch(t, e) {
    var r;
    const s = (r = this.watch) == null ? void 0 : r[t];
    s && (this.watch[t] = s.filter((a) => a !== e));
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
      (...e) => (t[String(e[1])] = Ht(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Wt(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
    g(this.watch, (e, s) => {
      var r;
      ((r = this.hash) == null ? void 0 : r[s]) !== (t == null ? void 0 : t[s]) && e.forEach((a) => a(t[s]));
    });
  }
};
c(j, "hash", {}), c(j, "watch", {}), c(j, "block", !1), f() && (j.reload(), addEventListener("hashchange", () => j.reload()));
let Et = j;
const ut = "__UI_ICON", It = 320, Bt = "--LOAD--", Q = class Q {
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
    var a, o, u, h;
    const r = (h = (u = (a = this.icons) == null ? void 0 : a[this.getName(t)]) != null ? u : (o = this.icons) == null ? void 0 : o[t]) != null ? h : `${t.replace(/^@/, e != null ? e : this.url)}.svg`;
    return typeof r == "string" ? r === Bt && s > 0 ? (await this.wait(), this.get(t, e, s - It)) : r : st(r) ? await r() : await r;
  }
  /**
   * Returns a list of names of all registered icons.
   *
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return g(this.icons, (t, e) => e.replace(/^@/, ""));
  }
  /**
   * Returns a global link.
   *
   * Возвращает глобальную ссылку.
   */
  static getUrlGlobal() {
    return `${W.isLocalhost(), ""}${this.url}`;
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
    this.icons[this.getName(t)] = Bt;
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
    g(t, (e, s) => this.add(s, e));
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
    return new Promise((t) => setTimeout(() => t(), It));
  }
};
c(Q, "icons", {}), c(Q, "url", "/icons/"), f() && (ut in window || (window[ut] = {}), Q.icons = window[ut]);
let Ft = Q;
function ae(i, t, e) {
  var s, r;
  return (r = (s = I(i)) == null ? void 0 : s[t]) != null ? r : e;
}
function oe(i, t, e) {
  const s = I(i);
  if (s) {
    const r = ae(s, t);
    if (y(r) && y(e))
      g(e, (a, o) => {
        r[o] = B(a);
      });
    else {
      const a = B(e);
      !(t in s) && typeof a == "string" ? s.setAttribute(t.toString(), a) : s[t] = B(e);
    }
  }
  return s;
}
function tt(i, t = "div", e, s) {
  if (!f())
    return;
  const r = document.createElement(t);
  return typeof e == "function" ? e(r) : A(e) && g(e, (a, o) => {
    oe(r, o, a);
  }), i == null || i.insertBefore(r, s != null ? s : null), r;
}
function ce(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").trim();
}
class mt {
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
    return g(
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
    return g(
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
    if (!f())
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
    else if (f()) {
      const a = { content: s };
      this.isProperty ? a.property = t : a.name = t, tt(document.head, "meta", a);
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
    const e = ce((s = this.items[t]) != null ? s : "");
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
var L = /* @__PURE__ */ ((i) => (i.description = "description", i.keywords = "keywords", i.canonical = "canonical", i.robots = "robots", i.author = "author", i))(L || {}), ue = /* @__PURE__ */ ((i) => (i.indexFollow = "index, follow", i.noIndexFollow = "noindex, follow", i.indexNoFollow = "index, nofollow", i.noIndexNoFollow = "noindex, nofollow", i.noArchive = "noarchive", i.noSnippet = "nosnippet", i.noImageIndex = "noimageindex", i.images = "images", i.noTranslate = "notranslate", i.noPreview = "nopreview", i.textOnly = "textonly", i.noIndexSubpages = "noindex, noarchive", i.none = "none", i))(ue || {}), p = /* @__PURE__ */ ((i) => (i.title = "og:title", i.type = "og:type", i.url = "og:url", i.image = "og:image", i.description = "og:description", i.locale = "og:locale", i.siteName = "og:site_name", i.localeAlternate = "og:locale:alternate", i.imageUrl = "og:image:url", i.imageSecureUrl = "og:image:secure_url", i.imageType = "og:image:type", i.imageWidth = "og:image:width", i.imageHeight = "og:image:height", i.imageAlt = "og:image:alt", i.video = "og:video", i.videoUrl = "og:video:url", i.videoSecureUrl = "og:video:secure_url", i.videoType = "og:video:type", i.videoWidth = "og:video:width", i.videoHeight = "og:video:height", i.audio = "og:audio", i.audioSecureUrl = "og:audio:secure_url", i.audioType = "og:audio:type", i.articlePublishedTime = "article:published_time", i.articleModifiedTime = "article:modified_time", i.articleExpirationTime = "article:expiration_time", i.articleAuthor = "article:author", i.articleSection = "article:section", i.articleTag = "article:tag", i.bookAuthor = "book:author", i.bookIsbn = "book:isbn", i.bookReleaseDate = "book:release_date", i.bookTag = "book:tag", i.musicDuration = "music:duration", i.musicAlbum = "music:album", i.musicAlbumDisc = "music:album:disc", i.musicAlbumTrack = "music:album:track", i.musicMusician = "music:musician", i.musicSong = "music:song", i.musicSongDisc = "music:song:disc", i.musicSongTrack = "music:song:track", i.musicReleaseDate = "music:release_date", i.musicCreator = "music:creator", i.videoActor = "video:actor", i.videoActorRole = "video:actor:role", i.videoDirector = "video:director", i.videoWriter = "video:writer", i.videoDuration = "video:duration", i.videoReleaseDate = "video:release_date", i.videoTag = "video:tag", i.videoSeries = "video:series", i.profileFirstName = "profile:first_name", i.profileLastName = "profile:last_name", i.profileUsername = "profile:username", i.profileGender = "profile:gender", i.productBrand = "product:brand", i.productAvailability = "product:availability", i.productCondition = "product:condition", i.productPriceAmount = "product:price:amount", i.productPriceCurrency = "product:price:currency", i.productRetailerItemId = "product:retailer_item_id", i.productCategory = "product:category", i.productEan = "product:ean", i.productIsbn = "product:isbn", i.productMfrPartNo = "product:mfr_part_no", i.productUpc = "product:upc", i.productWeightValue = "product:weight:value", i.productWeightUnits = "product:weight:units", i.productColor = "product:color", i.productMaterial = "product:material", i.productPattern = "product:pattern", i.productAgeGroup = "product:age_group", i.productGender = "product:gender", i))(p || {}), he = /* @__PURE__ */ ((i) => (i.website = "website", i.article = "article", i.video = "video.other", i.videoTvShow = "video.tv_show", i.videoEpisode = "video.episode", i.videoMovie = "video.movie", i.musicAlbum = "music.album", i.musicPlaylist = "music.playlist", i.musicSong = "music.song", i.musicRadioStation = "music.radio_station", i.app = "app", i.product = "product", i.business = "business.business", i.place = "place", i.event = "event", i.profile = "profile", i.book = "book", i))(he || {}), le = /* @__PURE__ */ ((i) => (i.inStock = "in stock", i.outOfStock = "out of stock", i.preorder = "preorder", i.backorder = "backorder", i.discontinued = "discontinued", i.pending = "pending", i))(le || {}), ge = /* @__PURE__ */ ((i) => (i.new = "new", i.used = "used", i.refurbished = "refurbished", i))(ge || {}), fe = /* @__PURE__ */ ((i) => (i.newborn = "newborn", i.infant = "infant", i.toddler = "toddler", i.kids = "kids", i.adult = "adult", i))(fe || {}), de = /* @__PURE__ */ ((i) => (i.female = "female", i.male = "male", i.unisex = "unisex", i))(de || {}), b = /* @__PURE__ */ ((i) => (i.card = "twitter:card", i.site = "twitter:site", i.creator = "twitter:creator", i.url = "twitter:url", i.title = "twitter:title", i.description = "twitter:description", i.image = "twitter:image", i.imageAlt = "twitter:image:alt", i.imageSrc = "twitter:image:src", i.imageWidth = "twitter:image:width", i.imageHeight = "twitter:image:height", i.label1 = "twitter:label1", i.data1 = "twitter:data1", i.label2 = "twitter:label2", i.data2 = "twitter:data2", i.appNameIphone = "twitter:app:name:iphone", i.appIdIphone = "twitter:app:id:iphone", i.appUrlIphone = "twitter:app:url:iphone", i.appNameIpad = "twitter:app:name:ipad", i.appIdIpad = "twitter:app:id:ipad", i.appUrlIpad = "twitter:app:url:ipad", i.appNameGooglePlay = "twitter:app:name:googleplay", i.appIdGooglePlay = "twitter:app:id:googleplay", i.appUrlGooglePlay = "twitter:app:url:googleplay", i.player = "twitter:player", i.playerWidth = "twitter:player:width", i.playerHeight = "twitter:player:height", i.playerStream = "twitter:player:stream", i.playerStreamContentType = "twitter:player:stream:content_type", i))(b || {}), me = /* @__PURE__ */ ((i) => (i.summary = "summary", i.summaryLargeImage = "summary_large_image", i.app = "app", i.player = "player", i.product = "product", i.gallery = "gallery", i.photo = "photo", i.leadGeneration = "lead_generation", i.audio = "audio", i.poll = "poll", i))(me || {});
class ye extends mt {
  constructor() {
    super(Object.values(p), !0);
  }
  /**
   * Gets the Open Graph title.
   *
   * Получает заголовок Open Graph.
   */
  getTitle() {
    return this.get(p.title);
  }
  /**
   * Gets the Open Graph type.
   *
   * Получает тип Open Graph.
   */
  getType() {
    return this.get(p.type);
  }
  /**
   * Gets the Open Graph URL.
   *
   * Получает URL Open Graph.
   */
  getUrl() {
    return this.get(p.url);
  }
  /**
   * Gets the Open Graph image URL.
   *
   * Получает URL изображения Open Graph.
   */
  getImage() {
    return this.get(p.image);
  }
  /**
   * Gets the Open Graph description.
   *
   * Получает описание Open Graph.
   */
  getDescription() {
    return this.get(p.description);
  }
  /**
   * Gets the Open Graph locale.
   *
   * Получает локаль Open Graph.
   */
  getLocale() {
    return this.get(p.locale);
  }
  /**
   * Gets the Open Graph site name.
   *
   * Получает название сайта Open Graph.
   */
  getSiteName() {
    return this.get(p.siteName);
  }
  /**
   * Sets the Open Graph title.
   *
   * Устанавливает заголовок Open Graph.
   * @param title title / заголовок
   */
  setTitle(t) {
    return this.set(p.title, t);
  }
  /**
   * Sets the Open Graph type.
   *
   * Устанавливает тип Open Graph.
   * @param type type / тип
   */
  setType(t) {
    return this.set(p.type, t);
  }
  /**
   * Sets the Open Graph URL.
   *
   * Устанавливает URL Open Graph.
   * @param url URL / URL
   */
  setUrl(t) {
    return this.set(p.url, t);
  }
  /**
   * Sets the Open Graph image URL.
   *
   * Устанавливает URL изображения Open Graph.
   * @param url image URL / URL изображения
   */
  setImage(t) {
    return this.set(p.image, t);
  }
  /**
   * Sets the Open Graph description.
   *
   * Устанавливает описание Open Graph.
   * @param description description / описание
   */
  setDescription(t) {
    return this.set(p.description, t);
  }
  /**
   * Sets the Open Graph locale.
   *
   * Устанавливает локаль Open Graph.
   * @param locale locale (e.g. 'en_US', 'ru_RU') / локаль (например, 'en_US', 'ru_RU')
   */
  setLocale(t) {
    return this.set(p.locale, t);
  }
  /**
   * Sets the Open Graph site name.
   *
   * Устанавливает название сайта Open Graph.
   * @param siteName site name / название сайта
   */
  setSiteName(t) {
    return this.set(p.siteName, t);
  }
}
class $e extends mt {
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
class Ye extends mt {
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
    this.og = new ye(), this.twitter = new $e();
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
    return f() ? document.title.replace(this.getSuffix(), "").trim() : "";
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
    if (f()) {
      const s = $(e) ? `${e}${this.getSuffix()}` : this.suffix ? this.suffix : "";
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
    return this.set(L.keywords, H(e).join(", ")), this;
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
    return $(this.suffix) ? ` - ${this.suffix}` : "";
  }
}
class gt {
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
    return tt(document.body, "div", (t) => {
      t.style.height = "24px", t.style.overflowY = "scroll", t.style.position = "fixed", t.style.width = "100%", tt(t, "div", (e) => {
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
c(gt, "storage", new rt("scrollbar", !0)), c(gt, "calculate", !1);
function yt(i) {
  return i.replace(/([[\]\\^$.?*+(){}/|])/g, "\\$1");
}
function pe(i) {
  const t = g(
    i.split(" "),
    (e) => yt(e)
  ).join("|");
  return new RegExp(`(${t})`, "ig");
}
function be(i, t, e = "sys-highlight-match") {
  return t ? String(i).replace(
    pe(t),
    `<span class="${e}">$1</span>`
  ) : i;
}
class we {
  /**
   * Constructor for SearchListData.
   *
   * Конструктор для SearchListData.
   * @param list original list of items/ исходный список элементов
   * @param columns columns to search in/ столбцы для поиска
   * @param item current search item state/ текущее состояние элемента поиска
   * @param options search options/ опции поиска
   */
  constructor(t, e, s, r) {
    c(this, "listCache");
    this.list = t, this.columns = e, this.item = s, this.options = r;
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
    return this.isList() && this.getCache().forEach((s) => {
      const r = t(
        s.item,
        s.value
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
    const s = {};
    return this.columns && this.columns.forEach((r) => {
      const a = this.getColumnName(r), o = x(t, r);
      s[a] = $(o) && e ? this.addTag(o) : G(o);
    }), {
      ...t,
      ...s,
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
      (e, s) => s.toUpperCase()
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
    return be(
      G(t),
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
      let s = "";
      if (this.columns)
        for (const r of this.columns) {
          const a = x(e, r);
          $(a) && (s += ` ${G(a)}`);
        }
      t.push({
        item: e,
        value: s
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
class ve {
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
function Vt(i, t = "ig", e = ":value") {
  const s = yt(i);
  return new RegExp(e.replace(/:value/g, s), t);
}
function Se(i) {
  return Vt(i, "i", "(:value)");
}
function Le(i) {
  let t = "";
  return i.split(" ").forEach((e) => {
    const s = yt(e).trim();
    $(s) && (t += `(?=.*?${s})`);
  }), new RegExp(`^${t}`, "ig");
}
class De {
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
    this.item.is() ? this.matcher = this.options.getFindExactMatch() ? Se(this.item.get()) : Le(this.item.get()) : this.matcher = void 0;
  }
}
class Ce {
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
class Me {
  /**
   * Constructor for SearchList.
   *
   * Конструктор для SearchList.
   * @param list initial list of items/ исходный список элементов
   * @param columns columns to perform search on/ столбцы для выполнения поиска
   * @param value initial search value/ начальное значение поиска
   * @param options search options/ опции поиска
   */
  constructor(t, e, s, r) {
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
    this.options = new Ce(r), this.item = new ve(s, this.options), this.matcher = new De(this.item, this.options), this.data = new we(t, e, this.item, this.options);
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
    return t ? g(t, this.callbackToNone) : [];
  }
}
const ke = [
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
], Ne = (i, t = {}) => {
  let e = String(i);
  if (i.match(/%[a-z]/)) {
    let s = 0;
    g(t, (r) => {
      e = e.replace(new RegExp(`%${ke[s++]}`, "g"), String(r));
    });
  }
  return A(t) && g(t, (s, r) => {
    e = e.replace(
      new RegExp(`(?:\\[|\\{)${r}(?:\\]|\\})(.*?)(?:\\[|\\{)\\/${r}(?:\\]|\\})`, "g"),
      (a, o) => String(s).replace(/(?:\[|\{)content(?:\]|\})/g, o)
    ).replace(new RegExp(`(?:\\[|\\{)${r}(?:\\]|\\})`, "g"), String(s));
  }), e;
}, ft = "global", Ae = 160;
class J {
  /**
   * Checks if there are files for the current location.
   *
   * Проверяет, есть ли файлы для текущего местоположения.
   */
  static isFile() {
    return Object.keys(this.files).length > 0 && this.getIndex() !== void 0;
  }
  /**
   * Returns a list of translations from the file for the current location.
   *
   * Возвращает список переводов из файла для текущего местоположения.
   */
  static async getList() {
    var e;
    const t = this.getIndex();
    if (t)
      return (e = this.getByData(t)) != null ? e : await this.getByFile(t);
  }
  /**
   * Adds a list of files with translations.
   *
   * Добавляет список файлов с переводами.
   * @param data list of files/ список файлов
   */
  static add(t) {
    g(t, (e, s) => {
      st(e) && (this.files[s] = e);
    });
  }
  /**
   * Returns the key for the current location from the list of files.
   *
   * Возвращает ключ для текущего местоположения из списка файлов.
   */
  static getIndex() {
    if (m.getLocation() in this.files)
      return m.getLocation();
    if (m.getLanguage() in this.files)
      return m.getLanguage();
    if (ft in this.files)
      return ft;
  }
  /**
   * Returns a list of translations from the cache.
   *
   * Возвращает список переводов из кэша.
   * @param index file key/ ключ файла
   */
  static getByData(t) {
    if (t in this.data)
      return this.data[t];
  }
  /**
   * Returns a list of translations from the file and caches the result.
   *
   * Возвращает список переводов из файла и кэширует результат.
   * @param index file key/ ключ файла
   */
  static async getByFile(t) {
    if (t in this.files) {
      const e = await B(this.files[t]);
      return e && (this.data[t] = e), e;
    }
  }
}
/** List of files with translations/ Список файлов с переводами */
c(J, "files", {}), /** Data from files/ Данные из файлов */
c(J, "data", {});
const E = class E {
  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(t, e) {
    var r;
    const s = this.getText(t);
    return s ? this.replacement(s, e) : (W.isLocalhost() || await this.add(t), this.replacement((r = this.getText(t)) != null ? r : t));
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
    const r = this.getText(t);
    return r ? this.replacement(r, s) : e ? " " : t;
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
      for (const a of t) {
        const o = Array.isArray(a) ? a[0] : a, u = Array.isArray(a) ? a.slice(1) : void 0;
        this.get(o, u).then((h) => {
          s[o] = h, ++r >= t.length && e(s);
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
      const a = Array.isArray(r) ? r[0] : r, o = Array.isArray(r) ? r.slice(1) : void 0;
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
          this.resolveList.forEach((r) => r()), this.resolveList = [];
        });
      }, Ae)) : e();
    });
  }
  /**
   * Adds texts in sync mode.
   *
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static addSync(t) {
    g(t, (e, s) => {
      U(e) && $(e) && (this.data[this.getName(s)] = e);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if ($(t))
      if (W.isLocalhost())
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
    g(
      t,
      (e, s) => g(e, (r, a) => {
        const o = `${s}-${a}`;
        o in this.data || (this.data[o] = r);
      })
    );
  }
  /**
   * Adds texts synchronously from the file.
   *
   * Добавляет тексты синхронно из файла.
   * @param data file with translations/ файл с переводами
   */
  static addSyncByFile(t) {
    J.add(t);
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
  /**
   * Change the name of the property to get the translation.
   *
   * Изменить имя свойства для получения перевода.
   * @param name property name/ имя свойства
   */
  static setPropsName(t) {
    return this.propsName = t, this;
  }
  /**
   * Change the read mode from the API.
   *
   * Изменить режим чтения из API.
   * @param value read mode/ режим чтения
   */
  static setReadApi(t) {
    return this.isReadApi = t, this;
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
    const s = this.getNameByLanguage(t);
    if (s in this.data)
      return this.data[s];
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
    return `${m.getLocation()}-${t}`;
  }
  /**
   * Getting the title for translation by language.
   *
   * Получение названия для перевода по языку.
   * @param name code name/ название кода
   */
  static getNameByLanguage(t) {
    return `${m.getLanguage()}-${t}`;
  }
  /**
   * Getting the title for translation globally.
   *
   * Получение названия для перевода глобально.
   * @param name code name/ название кода
   */
  static getNameByGlobal(t) {
    return `${ft}-${t}`;
  }
  /**
   * Returns a list of names that are not yet in the list.
   *
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getNamesNone(t) {
    const e = [];
    return H(t).forEach((s) => {
      s !== "__TRANSLATE_START__" && s !== "__TRANSLATE_END__" && !(this.getName(s) in this.data) && e.push(s);
    }), e;
  }
  /**
   * Getting the list of translations from the server.
   *
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = await W.get({
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
    return e ? Ne(t, e) : t;
  }
  /**
   * Adding translation data from the server.
   *
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    let t;
    J.isFile() ? t = await J.getList() : this.isReadApi && (t = await this.getResponse()), t && this.makeList(t);
  }
  /**
   * Adding translation data from the list.
   *
   * Добавление данных по переводу из списка.
   * @param list list of translations/ список переводов
   */
  static makeList(t) {
    this.cache.forEach((e) => {
      var s;
      this.data[this.getName(e)] = (s = t == null ? void 0 : t[e]) != null ? s : "";
    }), this.cache = [];
  }
};
c(E, "url", "/api/translate"), c(E, "propsName", "list"), c(E, "data", {}), c(E, "cache", []), c(E, "resolveList", []), c(E, "timeout"), c(E, "isReadApi", !0);
let xt = E;
function Ee(i, t) {
  return Array(t).fill(i);
}
function qe(i) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onloadend = () => t(s.result), s.onerror = e, s.readAsDataURL(i);
  });
}
function Je(i) {
  var t;
  if (f())
    return (t = document.querySelector(i)) != null ? t : void 0;
}
function Qe(i) {
  if (f())
    return document.querySelectorAll(i);
}
function Xe(i) {
  i.preventDefault(), i.stopPropagation();
}
function Ie(i, t, e) {
  const s = () => {
    i(), t != null && t() ? Ie(i, t, e) : e == null || e();
  };
  f() ? requestAnimationFrame(s) : s();
}
function _e(i) {
  var s;
  const t = {}, e = I(i);
  if (e)
    for (const r of e.attributes)
      t[r.name] = (s = (r == null ? void 0 : r.value) || (r == null ? void 0 : r.textContent)) != null ? s : void 0;
  return t;
}
async function Oe(i) {
  var t, e;
  return (e = (t = i == null ? void 0 : i.clipboardData) == null ? void 0 : t.getData("text")) != null ? e : await navigator.clipboard.readText() || "";
}
function Te(i = "datetime") {
  return new dt(void 0, i).standard();
}
let Rt = X(1e5, 9e5);
function Ge(i, t) {
  const e = I(i);
  return e ? ($(e.id) || e.setAttribute("id", `id-${Rt++}`), t ? `#${e.id}${t}`.trim() : e.id) : `id-${Rt++}`;
}
function Be(i) {
  return U(i) ? tt(
    void 0,
    "img",
    { src: i }
  ) : i;
}
function ti(i) {
  var t, e, s;
  return (s = (t = i == null ? void 0 : i.key) != null ? t : i == null ? void 0 : i.code) != null ? s : (e = i == null ? void 0 : i.keyCode) == null ? void 0 : e.toString();
}
function Kt(i) {
  return g(i, (t) => t.length);
}
function ei(i) {
  return Math.max(...Kt(i));
}
function ii(i) {
  return Math.min(...Kt(i));
}
function Fe(i) {
  var t, e, s, r;
  return (i == null ? void 0 : i.clientX) || ((e = (t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientX) || ((r = (s = i == null ? void 0 : i.touches) == null ? void 0 : s[0]) == null ? void 0 : r.clientX) || 0;
}
function xe(i) {
  var t, e, s, r;
  return (i == null ? void 0 : i.clientY) || ((e = (t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0]) == null ? void 0 : e.clientY) || ((r = (s = i == null ? void 0 : i.touches) == null ? void 0 : s[0]) == null ? void 0 : r.clientY) || 0;
}
function si(i) {
  return {
    x: Fe(i),
    y: xe(i)
  };
}
function ri(i, t) {
  const e = {};
  return t.forEach((s) => {
    s in i && i[s] !== void 0 && (e[s] = i[s]);
  }), e;
}
function ni(i, t = void 0) {
  const e = {};
  return g(i, (s, r) => {
    s !== t && (e[r] = s);
  }), e;
}
function ai(i) {
  return A(i) ? i : {};
}
function Re(i, t) {
  return Ee(i, t).join("");
}
function oi(i, t, e = "#", s = 2, r = 12) {
  const a = X(i, t), o = [];
  for (let u = 0; u < a; u++)
    o.push(Re(e, X(s, r)));
  return o.join(" ");
}
function ci(i, t) {
  const e = i != null ? i : 0;
  return t > e ? 100 / (t - e) : 0;
}
function ui(i, t) {
  const e = i != null ? i : 0;
  return t > e ? (t - e) / 100 : 0;
}
const Pt = 0;
function hi(i, t, e) {
  const s = t == null ? void 0 : t.closest(i);
  if (t && s && s.scrollHeight !== s.offsetHeight) {
    const r = s.getBoundingClientRect(), a = t.getBoundingClientRect();
    if (e) {
      const o = e.getBoundingClientRect();
      s.scrollTop = t.offsetTop - (o.top - r.top) - (o.height / 2 - a.height / 2), s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = t.offsetTop + t.offsetHeight - s.offsetHeight);
    } else s.scrollTop > t.offsetTop ? s.scrollTop = a.top - r.top - Pt : s.scrollTop + s.offsetHeight < t.offsetTop + t.offsetHeight && (s.scrollTop = a.top - r.top + a.height - r.height + Pt);
  }
}
function li(i, t, e = 0) {
  if (!f())
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
    const r = ((window == null ? void 0 : window.scrollY) || window.pageYOffset) + i.getBoundingClientRect().top - e;
    window.scrollTo({
      top: r,
      behavior: s
    });
  }
}
function gi(i, t, e = "smooth") {
  if (!f() || !i || !t)
    return;
  const s = i.getBoundingClientRect(), r = t.getBoundingClientRect();
  i.scrollBy({
    top: r.top - s.top,
    left: r.left - s.left,
    behavior: e
  });
}
function fi(i, t) {
  return i.indexOf(t) !== -1;
}
async function di() {
  if (f()) {
    const i = await gt.get();
    document.body.style.setProperty("--sys-scrollbar-offset", `${i}px`);
  }
}
function mi(i, t) {
  const e = {};
  return y(i) && y(t) && g(i, (s, r) => {
    r in t && (e[r] = s);
  }), e;
}
const yi = (i) => {
  var t;
  return it(i) ? !0 : !!(i && A(i) && ((i == null ? void 0 : i.status) === "success" || i != null && i.success || (t = i == null ? void 0 : i.statusObject) != null && t.status && String(i.statusObject.status).match(/^2/) || !("status" in i) && !("success" in i) && !("statusObject" in i) && String(W.getStatus().getStatus()).match(/^2/)));
};
function $i(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || g(i, (s, r) => {
    s !== (t == null ? void 0 : t[r]) && (e = !0);
  }), e;
}
const Pe = (i) => {
  if (i instanceof HTMLElement) {
    const t = i.tagName.toLowerCase();
    return !!(t === "input" || t === "textarea" || t === "select" || i.isContentEditable || i.getAttribute("contenteditable") === "true");
  }
  return !1;
}, pi = (i, t) => i.code === "Space" || i.code === "Enter" || i.key === " " || i.key === "Spacebar" || i.key === "Enter" || i.keyCode === 13 || i.keyCode === 32 ? t !== void 0 ? !t : !Pe(i.target) : !1;
function bi(i) {
  switch (typeof i) {
    case "number":
      return !0;
    case "string":
      return !!i.match(/^([0-9]+|[0-9]+\.[0-9]+)$/);
    default:
      return !1;
  }
}
function wi(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function vi(i, t) {
  return Array.isArray(i) ? i.every((e) => ht(e, t)) : ht(i, t);
}
function Si(i, t) {
  if (i.startsWith(t))
    return i.slice(t.length).trim();
  let e = 0;
  for (; i[e] === t[e] && e < i.length && e < t.length; )
    e++;
  return i.slice(e).trim();
}
const Li = (i, t, e) => {
  var s, r;
  return (r = (s = i == null ? void 0 : i.replace(new RegExp(`<${t}`, "ig"), `<${e}`)) == null ? void 0 : s.replace(new RegExp(`</${t}`, "ig"), `</${e}`)) == null ? void 0 : r.trim();
};
function je(i) {
  return [...new Set(i)];
}
function q(i, t, e = !0) {
  const s = Y(i);
  return y(i) && y(t) && g(
    t,
    (r, a) => {
      const o = i == null ? void 0 : i[a];
      y(o) && y(r) ? e && Array.isArray(o) && Array.isArray(r) ? s[a] = Y(je([...o, ...r])) : s[a] = q(
        Array.isArray(o) ? { ...o } : o,
        r,
        e
      ) : s[a] = y(r) ? Y(r) : r;
    }
  ), s;
}
function Di(i, t) {
  let e = i;
  return g(t, (s, r) => {
    e = e.replace(Vt(`[${r}]`), B(s));
  }), e;
}
function We(i, t = "auto") {
  switch (t) {
    case "auto":
      return i.naturalWidth >= i.naturalHeight;
    case "width":
      return !0;
    case "height":
      return !1;
  }
}
function Ci(i, t, e = "auto", s) {
  var a;
  const r = Be(i);
  if (r && (r.naturalWidth > t && (e === "auto" || e === "width") || r.naturalHeight > t && (e === "auto" || e === "height"))) {
    const o = We(r, e), u = (a = document.createElement("canvas")) == null ? void 0 : a.getContext("2d");
    if (u)
      return u.canvas.width = o ? t : r.naturalWidth / r.naturalHeight * t, u.canvas.height = o ? r.naturalHeight / r.naturalWidth * t : t, u.drawImage(r, 0, 0, u.canvas.width, u.canvas.height), u.canvas.toDataURL(s);
  }
}
function ki(i) {
  const t = k(i);
  if (t > 0) {
    const e = String(Math.floor(t / 60)).padStart(2, "0"), s = String(t % 60).padStart(2, "0");
    return `${e}:${s}`;
  }
  return "00:00";
}
function Ni(i, t, {
  multiple: e = !1,
  maxlength: s = 0,
  alwaysChange: r = !0,
  notEmpty: a = !1
}) {
  if (e) {
    if (it(i)) {
      const o = i.indexOf(t), u = [...i];
      return o !== -1 ? (!a || u.length > 1) && u.splice(o, 1) : (!s || i.length < s) && u.push(t), u;
    }
    return i === t ? [] : i ? [i, t] : [t];
  }
  return r || i !== t ? t : i;
}
function Ai(i, t, e) {
  if (y(i) && y(t)) {
    if (e) {
      let s = {}, r = !1;
      return g(i, (a, o) => {
        !r && (e === o || e === a) ? (r = !0, s = q(s, t)) : r ? s = q(s, { [o]: a }) : s[o] = y(a) ? Y(a) : a;
      }), r ? s : q(i, t);
    }
    if (y(t))
      return q(i, t);
  }
  return Y(i);
}
function Ei(i) {
  return Zt(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function Ii(i) {
  return i.toString().trim().replace(/[^\w-. ]+/g, "").replace(/[ .]+/g, "-").replace(/(?<=[A-Z])([A-Z])/g, (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(/(?<=[\w ])[A-Z]/g, (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
function Bi(i, t, e, s) {
  const r = k(i), a = k(t);
  return t && a < r ? `${jt(a, e, s)}+` : jt(r, e, s);
}
const jt = (i, t, e) => t ? new N(e).number(i) : i;
function Ue(i, t) {
  return 1 / i * t;
}
function Fi(i, t) {
  return Ue(i, t) * 100;
}
function xi(i) {
  let t = "";
  for (const e of i)
    t += String.fromCharCode(e);
  return f() ? window.btoa(t) : globalThis && globalThis.Buffer ? globalThis == null ? void 0 : globalThis.Buffer.from(i).toString("base64") : "";
}
async function Ri(i) {
  if (f())
    try {
      await navigator.clipboard.writeText(i);
    } catch (t) {
      document == null || document.execCommand(i);
    }
}
export {
  W as Api,
  _t as ApiDefault,
  Xt as ApiHeaders,
  D as ApiMethodItem,
  Gt as ApiPreparation,
  Tt as ApiResponse,
  Lt as ApiStatus,
  Ze as BroadcastMessage,
  ie as Cache,
  ee as CacheItem,
  Ct as CacheStatic,
  kt as Cookie,
  zt as CookieBlock,
  rt as DataStorage,
  dt as Datetime,
  vt as EventItem,
  Ve as Formatters,
  F as FormattersType,
  n as GEO_FLAG_ICON_NAME,
  m as Geo,
  Nt as GeoFlag,
  N as GeoIntl,
  At as GeoPhone,
  Ke as Global,
  Et as Hash,
  Ft as Icons,
  R as Loading,
  Ye as Meta,
  mt as MetaManager,
  ye as MetaOg,
  fe as MetaOpenGraphAge,
  le as MetaOpenGraphAvailability,
  ge as MetaOpenGraphCondition,
  de as MetaOpenGraphGender,
  p as MetaOpenGraphTag,
  he as MetaOpenGraphType,
  ue as MetaRobots,
  L as MetaTag,
  $e as MetaTwitter,
  me as MetaTwitterCard,
  b as MetaTwitterTag,
  gt as ScrollbarWidth,
  Me as SearchList,
  we as SearchListData,
  ve as SearchListItem,
  De as SearchListMatcher,
  Ce as SearchListOptions,
  ft as TRANSLATE_GLOBAL_PREFIX,
  Ae as TRANSLATE_TIME_OUT,
  xt as Translate,
  J as TranslateFile,
  be as addTagHighlightMatch,
  G as anyToString,
  Ne as applyTemplate,
  Ee as arrFill,
  qe as blobToBase64,
  Y as copyObject,
  C as copyObjectLite,
  tt as createElement,
  Je as domQuerySelector,
  Qe as domQuerySelectorAll,
  ce as encodeAttribute,
  yt as escapeExp,
  Xe as eventStopPropagation,
  B as executeFunction,
  Ot as executePromise,
  g as forEach,
  Ie as frame,
  _e as getAttributes,
  Oe as getClipboardData,
  re as getColumn,
  Te as getCurrentDate,
  I as getElement,
  Ge as getElementId,
  Be as getElementImage,
  ae as getElementItem,
  wt as getElementOrWindow,
  Se as getExactSearchExp,
  Vt as getExp,
  x as getItemByPath,
  ti as getKey,
  Kt as getLengthOfAllArray,
  ei as getMaxLengthAllArray,
  ii as getMinLengthAllArray,
  si as getMouseClient,
  Fe as getMouseClientX,
  xe as getMouseClientY,
  ri as getObjectByKeys,
  ni as getObjectNoUndefined,
  ai as getObjectOrNone,
  oi as getRandomText,
  Wt as getRequestString,
  Le as getSearchExp,
  pe as getSeparatingSearchExp,
  ci as getStepPercent,
  ui as getStepValue,
  hi as goScroll,
  li as goScrollSmooth,
  gi as goScrollTo,
  fi as inArray,
  di as initScrollbarOffset,
  mi as intersectKey,
  yi as isApiSuccess,
  it as isArray,
  $i as isDifferent,
  lt as isDomData,
  f as isDomRuntime,
  pi as isEnter,
  $ as isFilled,
  bi as isFloat,
  st as isFunction,
  Qt as isInDom,
  Pe as isInput,
  wi as isIntegerBetween,
  _ as isNull,
  pt as isNumber,
  y as isObject,
  A as isObjectNotArray,
  ht as isSelected,
  vi as isSelectedByList,
  U as isString,
  Ut as isWindow,
  X as random,
  Si as removeCommonPrefix,
  Li as replaceComponentName,
  q as replaceRecursive,
  Di as replaceTemplate,
  Ci as resizeImageByMax,
  ki as secondToTime,
  oe as setElementItem,
  Ni as setValues,
  Ai as splice,
  Re as strFill,
  ne as strSplit,
  H as toArray,
  Zt as toCamelCase,
  Ei as toCamelCaseFirst,
  P as toDate,
  Ii as toKebabCase,
  k as toNumber,
  Bi as toNumberByMax,
  Ue as toPercent,
  Fi as toPercentBy100,
  Ht as transformation,
  xi as uint8ArrayToBase64,
  je as uniqueArray,
  Ri as writeClipboardData
};
