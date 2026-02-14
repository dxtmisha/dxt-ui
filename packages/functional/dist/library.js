var et = Object.defineProperty;
var it = (s, t, e) => t in s ? et(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var l = (s, t, e) => it(s, typeof t != "symbol" ? t + "" : t, e);
import { isArray as st, isObjectNotArray as x, forEach as k, toArray as R, isObject as z, toCamelCase as nt, toDate as P, Datetime as rt, Geo as C, EventItem as at, GeoFlag as ut, GeoIntl as lt, isSelected as D, getExp as ht, getColumn as W, isString as ct, ScrollbarWidth as ot, Api as gt, executeFunction as Y, BroadcastMessage as dt, Cookie as ft, Hash as A, isDomRuntime as G, getElementId as L, Loading as K, random as mt, Meta as vt, DataStorage as J, Translate as U, executePromise as pt } from "@dxtmisha/functional-basic";
export * from "@dxtmisha/functional-basic";
import { isRef as N, h as yt, computed as a, toRefs as It, useAttrs as St, useSlots as bt, ref as f, watch as g, triggerRef as Lt, shallowRef as S, onUnmounted as T, inject as Ct, provide as kt, watchEffect as Q } from "vue";
class wt {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param watch data for tracking/ данные для слежения
   */
  constructor(t, e = Object.keys(t)) {
    l(this, "cache", {});
    this.props = t, this.watch = e;
  }
  /**
   * Checks if the value has been updated.
   *
   * Проверяет, обновлено ли значение.
   * @param name property name/ название свойства
   */
  is(t) {
    return st(t) ? !!t.find((e) => this.isDifferent(e)) : this.isDifferent(t);
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
    var e, i;
    return ((e = this.cache) == null ? void 0 : e[t]) !== ((i = this.props) == null ? void 0 : i[t]);
  }
}
class xt {
  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param callback callback function when the value changes/
   * функция обратного вызова при изменении значения
   * @param changed base data/ данный для слежения
   */
  constructor(t, e, i) {
    l(this, "event", {});
    l(this, "changed");
    this.props = t, this.callback = e, this.changed = new wt(t, i);
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
class Ut extends xt {
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
function o(s) {
  return N(s) ? s.value : s;
}
function Dt(s) {
  return s && "class" in s && typeof s.class == "string" ? s.class : void 0;
}
function Bt(s, t, e) {
  const i = Dt(t);
  return e && i ? `${e}.${i}` : e || i || s;
}
function Nt(s, t, e, i) {
  let n = t;
  return (!t || "key" in t) && (n = {
    key: Bt(s, t, i),
    ...t
  }), yt(s, n, e);
}
function O(s, t) {
  const e = s == null ? void 0 : s.class, i = t == null ? void 0 : t.class, n = s == null ? void 0 : s.style, r = t == null ? void 0 : t.style, u = {
    ...s,
    ...t
  };
  return e && i && (u.class = [], e && u.class.push(e), i && u.class.push(i)), n && r && (u.style = [], n && u.style.push(n), r && u.style.push(r)), u;
}
function Mt(...s) {
  let t = {};
  return s.forEach((e) => {
    e && (t = O(t, e));
  }), t;
}
class X {
  /**
   * Constructor
   * @param components list of connected components/ список подключенных компонентов
   * @param modification data for modification/ данные для модификации
   */
  constructor(t = {}, e) {
    /** Cache for computed properties/ Кэш для вычисляемых свойств */
    l(this, "caching", {});
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
      t in this.caching || (this.caching[t] = a(() => this.computeModification(t)));
      const i = this.caching[t];
      if (i)
        return e ? Mt(i.value, e) : i.value;
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
  render(t, e, i, n) {
    const r = this.renderOne(
      t,
      e,
      i,
      n
    );
    return r ? [r] : [];
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
  renderOne(t, e, i, n) {
    if (this.is(t)) {
      const r = n != null ? n : t;
      return Nt(
        this.get(t),
        this.getModification(r, e),
        i,
        r
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
  renderAdd(t, e, i, n, r) {
    return t.push(...this.render(e, i, n, r)), this;
  }
  /**
   * Calculates modified input data for connected components.
   *
   * Вычисляет модифицированные входные данные для подключенных компонентов.
   * @param index the name of this/ название данного
   */
  computeModification(t) {
    var i;
    const e = o((i = this.modification) == null ? void 0 : i[t]);
    if (e && x(e)) {
      const n = {};
      return k(e, (r, u) => {
        n[u] = o(r);
      }), n;
    }
    return {};
  }
}
class qt extends X {
}
class Yt {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, e, i) {
    l(this, "name");
    l(this, "element", f());
    l(this, "refs");
    l(this, "components");
    l(this, "emits");
    l(this, "classes");
    l(this, "classesSub");
    l(this, "styles");
    l(this, "stylesSub");
    l(this, "attrs");
    l(this, "slots");
    l(this, "dataExpose");
    this.props = e, this.options = i, this.name = this.initName(t), this.refs = this.props ? It(this.props) : {}, this.components = new X(i == null ? void 0 : i.components, i == null ? void 0 : i.compMod), this.emits = i == null ? void 0 : i.emits, this.classes = a(() => this.updateClasses()), this.styles = a(() => this.updateStyles()), this.attrs = St(), this.slots = bt();
  }
  init() {
    return this.classesSub = a(() => this.initClasses()), this.stylesSub = a(() => this.initStyles()), this.dataExpose = this.initExpose(), this;
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
    return {
      ...(t = this.dataExpose) != null ? t : {},
      elementHtml: this.element
    };
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
  initSlot(t, e, i = {}) {
    var n;
    if (this.slots && ((n = this.slots) != null && n[t]) && typeof this.slots[t] == "function") {
      const r = this.slots[t](i);
      return e && e.push(r), r;
    }
  }
  /**
   * Transformation of the class value into an object.
   *
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation/ список классов для преобразования
   */
  toClass(t) {
    return x(t) ? t : Array.isArray(t) ? { [t.filter((i) => typeof i == "string" && i.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes/ список классов
   */
  toClassName(t) {
    if (z(t)) {
      const e = {};
      return k(t, (i, n) => {
        n.match(/\?\?/) ? e[n.replace(/\?\?/, this.getName())] = i : n.match(/\?/) ? e[n.replace(/\?/, this.getDesign())] = i : e[n] = i;
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
    return k(t.split(".", 2), (e) => nt(e));
  }
  /**
   * Updating data about the class.
   *
   * Обновление данных об классе.
   */
  updateClasses() {
    var i, n, r;
    const t = (i = this.classesSub) == null ? void 0 : i.value, e = (r = (n = this.options) == null ? void 0 : n.classes) == null ? void 0 : r.value;
    return t && e ? {
      ...t,
      ...e,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(e == null ? void 0 : e.main)
        // ...this.toClass(this.attrs?.class)
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
    var i, n, r;
    const t = (i = this.stylesSub) == null ? void 0 : i.value, e = (r = (n = this.options) == null ? void 0 : n.styles) == null ? void 0 : r.value;
    return t && e ? {
      ...t,
      ...e
    } : e != null ? e : {};
  }
}
function I(s) {
  return N(s) ? s : f(s);
}
class Gt {
  /**
   * Constructor
   * @param date date for processing. дата для обработки
   * @param type type of date format for output. тип формата даты вывода
   * @param code country and language code. код страны и языка
   */
  constructor(t, e = "date", i = C.getLocation()) {
    l(this, "item");
    l(this, "type");
    l(this, "code");
    l(this, "date");
    l(this, "datetime");
    l(this, "year", a(() => this.date.value && this.datetime.getYear()));
    l(this, "month", a(() => this.date.value && this.datetime.getMonth()));
    l(this, "day", a(() => this.date.value && this.datetime.getDay()));
    l(this, "hour", a(() => this.date.value && this.datetime.getHour()));
    l(this, "minute", a(() => this.date.value && this.datetime.getMinute()));
    l(this, "second", a(() => this.date.value && this.datetime.getSecond()));
    this.item = I(t), this.type = I(e), this.code = I(i), this.date = f(P(this.item.value)), this.datetime = new rt(
      this.date.value,
      this.type.value,
      this.code.value
    ), g(this.item, (n) => {
      this.date.value = P(n);
    }), g(this.type, (n) => this.datetime.setType(n)), g(this.code, (n) => this.datetime.setCode(n)), g(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => Lt(this.date));
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
    return a(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.
   *
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return a(() => this.date.value && this.datetime.getFirstDayCode());
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
    return a(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.
   *
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output. тип формата даты вывода
   * @param styleOptions the representation of the month. представление месяца
   */
  locale(t = this.type.value, e) {
    return a(() => this.date.value && this.datetime.locale(t, e));
  }
  /**
   * Output of standard data.
   *
   * Вывод стандартных данных.
   * @param timeZone add time zone. добавить временную зону
   */
  standard(t = !0) {
    return a(() => this.date.value && this.datetime.standard(t));
  }
}
class Jt extends at {
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
  constructor(t, e, i = ["click"], n, r, u) {
    const h = I(t), c = I(e);
    super(
      h.value,
      i,
      n,
      r,
      u
    ), c.value && this.setElementControl(c.value), g(h, (d) => this.setElement(d)), g(c, (d) => this.setElementControl(d));
  }
}
class Qt {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = C.getLocation()) {
    l(this, "code");
    l(this, "flag");
    this.code = I(t), this.flag = new ut(this.code.value), g(this.code, (e) => this.flag.setCode(e));
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
    return a(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code/ код страны
   */
  getFlag(t = this.code.value) {
    return a(() => {
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
    return a(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(t) {
    return a(() => this.flag.getNational(t));
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
    C.set(t, !0), this.item.value = C.getItem();
  }
};
l(v, "item", S(C.get())), l(v, "country", a(() => v.item.value.country)), l(v, "language", a(() => v.item.value.language)), l(v, "standard", a(() => v.item.value.standard)), l(v, "firstDay", a(() => v.item.value.firstDay));
let w = v;
class Rt {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    l(this, "location");
    l(this, "intl");
    this.location = I(t), this.intl = a(() => {
      var e;
      return new lt((e = this.location.value) != null ? e : w.getLanguage().value);
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
    return a(() => this.intl.value.display(o(t), e));
  }
  /**
   * Get display names of language.
   *
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  languageName(t, e) {
    return a(() => this.intl.value.languageName(o(t), e));
  }
  /**
   * Get display names of region.
   *
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
   * @param style the formatting style to use/ используемый стиль форматирования
   */
  countryName(t, e) {
    return a(() => this.intl.value.countryName(o(t), e));
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
    return a(() => this.intl.value.number(o(t), e));
  }
  /**
   * Decimal point symbol.
   *
   * Символ десятичной точки.
   */
  decimal() {
    return a(() => this.intl.value.decimal());
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
    return a(
      () => this.intl.value.currency(
        o(t),
        o(e),
        i
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
    return a(() => this.intl.value.unit(o(t), e));
  }
  /**
   * Number as a percentage.
   *
   * Число в виде процента.
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return a(() => this.intl.value.percent(o(t), e));
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
    return a(() => this.intl.value.percentBy100(o(t), e));
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
  date(t, e, i, n) {
    return a(() => this.intl.value.date(o(t), e, i, n));
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
    return a(() => this.intl.value.relative(o(t), e, i));
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
  relativeLimit(t, e, i, n, r, u, h) {
    return a(() => this.intl.value.relativeLimit(
      o(t),
      e,
      i,
      n,
      r,
      u,
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
    return a(() => this.intl.value.month(o(t), e));
  }
  /**
   * Array to list of months.
   *
   * Массив в список месяцев.
   * @param style the representation of the month/ представление месяца
   */
  months(t) {
    return a(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.
   *
   * Возвращает названия дней недели.
   * @param value the date to format/ дата для форматирования
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekday(t, e) {
    return a(() => this.intl.value.weekday(o(t), e));
  }
  /**
   * An array of the list of names of the days of the week.
   *
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday/ представление о дне недели
   */
  weekdays(t) {
    return a(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.
   *
   * Время.
   * @param value the date to format/ дата для форматирования
   */
  time(t) {
    return a(() => this.intl.value.time(o(t)));
  }
}
class Z {
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
  constructor(t, e, i, n, r, u, h, c, d, m = 0, y = 9999999, b) {
    l(this, "subList", {});
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     */
    l(this, "data", a(
      () => k(
        o(this.list) || [],
        (t, e) => this.initItem(e, t)
      )
    ));
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     */
    l(this, "liteData", a(() => {
      if (this.isLite()) {
        const t = [];
        for (const e of this.data.value) {
          const i = {
            parent: this.parent,
            index: e.index,
            type: e.type,
            label: e.label,
            description: e.description,
            value: e.value
          };
          "description" in e && (i.description = e.description), t.push(i);
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
    l(this, "fullData", a(() => {
      const t = this.getFocus(), e = this.getHighlight(), i = this.getSelected();
      return k(
        this.data.value,
        (n) => {
          var u, h;
          const r = D(n.index, i);
          return {
            ...n,
            focus: t === n.index,
            highlight: e,
            filterMode: (u = this.filterMode) == null ? void 0 : u.value,
            selected: r,
            disabled: (h = n.disabled) != null ? h : !r && n.type === "item" && this.isSelectedMax.value
          };
        }
      );
    }));
    /**
     * Returns a map of all entries.
     *
     * Возвращает карту всех записей.
     */
    l(this, "map", a(() => {
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
    l(this, "mapItems", a(() => this.map.value.filter((t) => t.type === "item")));
    /**
     * Returns a list consisting only of values for selection.
     *
     * Возвращает список, состоящий только из значений для выбора.
     */
    l(this, "items", a(() => this.map.value.filter(
      (t) => t.type === "item" || t.type === "group" || t.type === "menu"
    )));
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     */
    l(this, "highlightFirstItem", a(() => {
      const t = this.getHighlight();
      if (t && t.length >= this.getHighlightLengthStart()) {
        const e = ht(t, "i");
        if (e)
          return this.map.value.findIndex(
            (i) => {
              var n, r, u;
              return ((n = i.label) == null ? void 0 : n.toString().match(e)) || ((r = i.index) == null ? void 0 : r.toString().match(e)) || ((u = i.search) == null ? void 0 : u.toString().match(e));
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
    l(this, "isSelected", a(() => {
      const t = this.getSelected();
      return !!t && this.mapItems.value.findIndex((e) => D(e.index, t)) !== -1;
    }));
    /** Is the minimum selection reached/ Достигнуто ли минимальное выделение */
    l(this, "isSelectedMin", a(() => {
      const t = Number(o(this.min) || 0);
      return t > 0 ? t >= this.selectedListInGroup.value.length : !1;
    }));
    /** Is the maximum selection reached/ Достигнуто ли максимальное выделение */
    l(this, "isSelectedMax", a(() => {
      const t = Number(o(this.max) || 9999999);
      return t > 0 ? t <= this.selectedListInGroup.value.length : !1;
    }));
    /**
     * Returns a list of selected items on the map/
     * Возвращает список выделенных элементов на карте
     */
    l(this, "selectedList", a(() => {
      const t = this.getSelected();
      return t && this.isSelected.value ? this.mapItems.value.filter((e) => D(e.index, t)) : [];
    }));
    /**
     * Returns a list of selected items in the current group/
     * Возвращает список выделенных элементов в текущей группе
     */
    l(this, "selectedListInGroup", a(() => {
      const t = this.getSelected();
      return t && this.isSelected.value ? this.data.value.filter((e) => D(e.index, t)) : [];
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    l(this, "selectedNames", a(() => W(this.selectedList.value, "label")));
    /**
     * Returns a list of selected item values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     */
    l(this, "selectedValues", a(() => W(this.selectedList.value, "value")));
    this.list = t, this.focus = e, this.highlight = i, this.highlightLengthStart = n, this.filterMode = r, this.selected = u, this.keyValue = h, this.keyLabel = c, this.lite = d, this.min = m, this.max = y, this.parent = b, N(t) && g(t, () => {
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
    var i, n, r;
    const e = (i = this.selectedList.value) == null ? void 0 : i[0];
    return e ? (n = this.getItemByStep(e, t)) == null ? void 0 : n.index : (r = this.mapItems.value[0]) == null ? void 0 : r.index;
  }
  /**
   * Returns the next item from the selected one.
   *
   * Возвращает следующий элемент от выбранного.
   */
  getSelectedNext() {
    return this.getSelectedByStep(1);
  }
  /**
   * Returns the previous item from the selected one.
   *
   * Возвращает предыдущий элемент от выбранного.
   */
  getSelectedPrev() {
    return this.getSelectedByStep(-1);
  }
  /**
   * Returns an item by moving a certain number of steps from the specified item.
   *
   * Возвращает элемент, перемещаясь на определенное количество шагов от указанного элемента.
   * @param item item/ элемент
   * @param step number of steps/ количество шагов
   */
  getItemByStep(t, e) {
    const i = this.mapItems.value, n = i.findIndex((r) => r.index === t.index);
    if (n !== -1) {
      const r = n + e;
      if (r in i)
        return i[r];
    }
    if (e > 0)
      return i[0];
    if (e < 0)
      return i[i.length - 1];
  }
  /**
   * Returns the next item from the specified one.
   *
   * Возвращает следующий элемент от указанного.
   * @param item item/ элемент
   */
  getItemNext(t) {
    return this.getItemByStep(t, 1);
  }
  /**
   * Returns the previous item from the specified one.
   *
   * Возвращает предыдущий элемент от указанного.
   * @param item item/ элемент
   */
  getItemPrev(t) {
    return this.getItemByStep(t, -1);
  }
  /**
   * Returns an item by moving a certain number of steps from the specified index.
   *
   * Возвращает элемент, перемещаясь на определенное количество шагов от указанного индекса.
   * @param index item index/ индекс элемента
   * @param step number of steps/ количество шагов
   */
  getIndexByStep(t, e) {
    const i = this.getItemByIndex(t);
    if (i)
      return this.getItemByStep(i.item, e);
  }
  /**
   * Returns the next item from the specified index.
   *
   * Возвращает следующий элемент от указанного индекса.
   * @param index item index/ индекс элемента
   */
  getIndexNext(t) {
    return this.getIndexByStep(t, 1);
  }
  /**
   * Returns the previous item from the specified index.
   *
   * Возвращает предыдущий элемент от указанного индекса.
   * @param index item index/ индекс элемента
   */
  getIndexPrev(t) {
    return this.getIndexByStep(t, -1);
  }
  /**
   * Returns an item by its index.
   *
   * Возвращает элемент по его индексу.
   * @param index item index/ индекс элемента
   */
  getItemByIndex(t) {
    const e = this.map.value.findIndex((i) => i.index === t);
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
    return t.index in this.subList || (this.subList[t.index] = new Z(
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
  getIndex(t, e, i, n) {
    return t && !z(t) ? t : e && !z(e) ? e : i && n;
  }
  /**
   * Creates an object of the record element.
   *
   * Создает объект элемента записи.
   * @param key the value of the key in the element/ значения ключа у элемента
   * @param item selected element/ выбранный элемент
   */
  initItem(t, e) {
    var i, n, r, u, h, c;
    if (x(e)) {
      const d = e == null ? void 0 : e[(n = (i = this.keyValue) == null ? void 0 : i.value) != null ? n : "value"], m = (h = e == null ? void 0 : e[(u = (r = this.keyLabel) == null ? void 0 : r.value) != null ? u : "label"]) != null ? h : d, y = this.getIndex(
        e == null ? void 0 : e.index,
        d,
        t,
        m
      );
      return {
        ...e,
        parent: this.parent,
        index: y,
        type: (c = e == null ? void 0 : e.type) != null ? c : "item",
        label: m,
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
class At {
  /**
   * Get router instance.
   *
   * Получить экземпляр роутера.
   */
  static get() {
    return this.router;
  }
  /**
   * Returns the link by name.
   *
   * Возвращает ссылку по имени.
   * @param name route name/ имя маршрута
   * @param params route parameters/ параметры маршрута
   * @param query route query/ запрос маршрута
   */
  static getLink(t, e, i) {
    var n;
    return (n = this.router) == null ? void 0 : n.resolve({ name: t, params: e, query: i }).href;
  }
  /**
   * Returns the link property by name.
   *
   * Возвращает свойство ссылки по имени.
   * @param name route name/ имя маршрута
   * @param params route parameters/ параметры маршрута
   * @param query route query/ запрос маршрута
   */
  static getHref(t, e, i) {
    if (t) {
      const n = this.getLink(t, e, i);
      if (n)
        return { href: n };
    }
    return {};
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
  /**
   * Converts the raw route location to href properties.
   *
   * Преобразует необработанное местоположение маршрута в свойства href.
   * @param to raw route location/ необработанное местоположение маршрута
   */
  static rawToHref(t) {
    return x(t) && "name" in t && ct(t == null ? void 0 : t.name) ? this.getHref(t.name) : {};
  }
}
l(At, "router");
class Xt {
  /**
   * Constructor
   */
  constructor() {
    /**
     * Reactive item.
     *
     * Реактивный элемент.
     */
    l(this, "item", f());
    /**
     * Checks whether the scroll width is defined.
     *
     * Проверяет, определена ли ширина скролла.
     */
    l(this, "is", a(() => this.item.value !== void 0));
    ot.is().then((t) => {
      this.item.value = t;
    });
  }
}
const Ht = (s) => typeof s == "string" ? { method: s } : s || {};
let B;
function Zt(s, t, e = !0, i, n, r) {
  const u = f(), h = I(Ht(t)), c = f(!1), d = f(!1);
  let m = !0, y = 0;
  const b = async () => {
    if (m)
      return;
    const p = o(s);
    if ((!i || i.value) && p) {
      c.value = !0, d.value = !0;
      let M = {};
      const V = await gt.request({
        path: p,
        ...h.value
      });
      V && (M = V), n ? u.value = n(M) : u.value = M, c.value = !1;
    } else u.value !== void 0 && (u.value = void 0);
  }, tt = () => {
    const p = [];
    e && p.push(h), N(s) && p.push(s), i && p.push(i), B && p.push(B), p.length > 0 && g(p, async () => {
      c.value || await b();
    });
  };
  return {
    get data() {
      return m && (m = !1, b().then()), tt(), r && (y++, T(() => {
        y--, y < 1 && (console.warn("useApiRef: unmounted"), u.value = void 0, m = !0, y = 0);
      })), u;
    },
    get isStarting() {
      return a(() => u.value === void 0);
    },
    get loading() {
      return a(() => c.value);
    },
    get reading() {
      return a(() => d.value);
    },
    reset: b
  };
}
const _t = (s) => {
  B || (B = s);
};
function Et(s, t) {
  const e = `broadcast--${s}`;
  if (e in H)
    return H[e];
  const i = f(Y(t)), n = new dt(
    e,
    (r) => {
      i.value !== r.data.message && (i.value = r.data.message);
    }
  );
  return g(i, (r) => n.post({ message: r })), H[e] = i, i;
}
const H = {};
function te(s, t, e) {
  if (s in E)
    return E[s];
  const i = new ft(s), n = Et(
    `__cookie:${s}`,
    i.get(t, e)
  );
  return g(n, (r) => {
    i.set(r, e);
  }), E[s] = n, n;
}
const E = {};
function ee() {
  return new Rt();
}
function ie(s, t) {
  if (s in $)
    return $[s];
  const e = S(A.get(s, t));
  return g(e, (i) => A.set(s, i)), A.addWatch(s, (i) => {
    e.value = i;
  }), $[s] = e, e;
}
const $ = {}, $t = (s = {
  rootMargin: "128px 0px"
}) => {
  const t = {}, e = G() && "IntersectionObserver" in window ? new IntersectionObserver(
    (n) => {
      n.forEach((r) => {
        const u = L(r.target);
        if (u in t) {
          const h = t[u];
          h.status.value = r.isIntersecting, h.ratio.value = r.intersectionRatio, h.entry.value = r;
        }
      });
    },
    s
  ) : void 0, i = (n) => {
    var r;
    if (n) {
      const u = L(n);
      u in t && (e == null || e.unobserve(n), (r = t[u]) == null || r.stopWatch(), delete t[u]);
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
    getItem(n) {
      const r = L(n);
      return t[r];
    },
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(n) {
      const r = S(!e);
      if (e) {
        let u;
        u = g(n, (h, c) => {
          if (c && i(c), n.value) {
            const d = L(n.value);
            t[d] = {
              status: r,
              ratio: S(0),
              entry: S(void 0),
              stopWatch: () => u == null ? void 0 : u()
            }, e.observe(n.value);
          } else
            i(n.value);
        }, { immediate: !0 });
      }
      return r;
    },
    /**
     * Removing an element from tracking.
     *
     * Удаление элемента из отслеживания.
     */
    removeLazyItem: i,
    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: () => e == null ? void 0 : e.disconnect()
  };
}, q = [], Ft = (s) => {
  const t = q.find((i) => i.rootMargin === s);
  if (t)
    return t.item;
  const e = $t({ rootMargin: s });
  return q.push({ rootMargin: s, item: e }), e;
}, se = (s, t) => {
  const e = Ft(t);
  return {
    /** Lazy item status/ Статус ленивого элемента */
    lazyItemStatus: e.addLazyItem(s),
    /**
     * Getting a tracked lazy item.
     *
     * Получение отслеживаемого ленивого элемента.
     */
    get lazyItem() {
      return e.getItem(s.value);
    }
  };
};
function ne() {
  const s = S(K.is());
  return K.registrationEvent(({ detail: t }) => {
    s.value = t.loading;
  }), s;
}
const _ = [], jt = mt(1e5, 999999);
function zt(s, t = !0, e = !1, i = !0) {
  let n;
  const r = `__execute_use${jt}::${L()}`, u = (c) => {
    const d = Object.freeze(s(...c));
    return Object.freeze({
      ...d,
      init() {
        return d;
      }
    });
  }, h = (...c) => {
    if (!e && i) {
      const d = Ct(r, void 0);
      if (d)
        return d;
      {
        let m = u(c);
        return kt(r, m), t && T(() => {
          m = void 0;
        }), m;
      }
    } else n || (n = u(c), t && T(() => {
      n = void 0;
    }));
    return n;
  };
  return e && _.push(h), h;
}
function re() {
  _.forEach((s) => s());
}
const Tt = zt(() => {
  const s = new vt(), t = f(s.getTitle()), e = f(s.getKeywords()), i = f(s.getDescription()), n = f(s.getImage()), r = f(s.getCanonical()), u = f(s.getRobots()), h = f(s.getAuthor()), c = f(s.getSiteName()), d = () => s.html();
  return g(t, () => {
    s.setTitle(t.value);
  }), g(e, () => {
    s.setKeywords(e.value);
  }), g(i, () => {
    s.setDescription(i.value);
  }), g(n, () => {
    s.setImage(n.value);
  }), g(r, () => {
    s.setCanonical(r.value);
  }), g(u, () => {
    s.setRobots(u.value);
  }), g(h, () => {
    s.setAuthor(h.value);
  }), g(c, () => {
    s.setSiteName(c.value);
  }), {
    meta: s,
    title: t,
    keyword: e,
    description: i,
    author: h,
    image: n,
    canonical: r,
    robots: u,
    siteName: c,
    getHtmlMeta: d
  };
}, !1, !0), ae = () => Tt();
function ue(s, t) {
  if (s in F)
    return F[s];
  const e = new J(s, !0), i = f(e.get(t));
  return g(i, (n) => e.set(n)), F[s] = i, i;
}
const F = {};
function le(s, t, e) {
  if (s in j)
    return j[s];
  const i = new J(s), n = f(i.get(t, e));
  return g(n, (r) => i.set(r)), G() && window.addEventListener("storage", () => {
    i.update(), n.value = i.get();
  }), j[s] = n, n;
}
const j = {};
function Ot(s) {
  const t = S(U.getListSync(s, !0)), e = async () => {
    t.value = { ...await U.getList(s) };
  };
  g(w.getLanguage(), e);
  for (const i in t.value)
    if (t.value[i] === i || t.value[i] === " ") {
      e().then();
      break;
    }
  return t;
}
const he = (s) => Ot(s);
function ce(s, t) {
  const e = f();
  return Q(async () => {
    e.value = await pt(s);
  }), a(() => e.value, t);
}
function oe(s, t = () => {
}, e, i) {
  return a(
    () => {
      if (w.get().value && (e === void 0 || e())) {
        const n = s();
        if (n !== void 0)
          return n;
      }
      return Y(t);
    },
    i
  );
}
function Vt(s, t = {}, e = "value", i = !1) {
  const n = typeof t == "string", r = n ? t : e, u = n ? {} : t;
  return s ? s && x(s) && (r in s || i) ? O(u, s) : O(u, { [r]: s }) : n ? {} : { ...u };
}
function ge(s, t = {}, e = "value") {
  return a(() => Vt(o(s), o(t), e));
}
const de = (s, t) => {
  const e = f();
  let i = !0;
  const n = () => {
    i && (Q(async () => {
      const r = o(await s());
      r !== t && (e.value = r);
    }), i = !1);
  };
  return a(() => (n(), e.value));
};
function fe(s, t) {
  s.value !== t && (s.value = t);
}
function me(s) {
  let t;
  return a(() => (t || (t = s()), t.value));
}
export {
  Gt as DatetimeRef,
  xt as DesignAbstract,
  Ut as DesignAsyncAbstract,
  wt as DesignChanged,
  qt as DesignComp,
  X as DesignComponents,
  Yt as DesignConstructorAbstract,
  Jt as EventRef,
  Qt as GeoFlagRef,
  Rt as GeoIntlRef,
  w as GeoRef,
  Z as ListDataRef,
  At as RouterItemRef,
  Xt as ScrollbarWidthRef,
  ce as computedAsync,
  oe as computedByLanguage,
  zt as executeUse,
  re as executeUseGlobalInit,
  Vt as getBind,
  ge as getBindRef,
  Dt as getClassName,
  de as getComputedAsync,
  Bt as getIndexForRender,
  o as getRef,
  Nt as render,
  _t as setApiRefGlobalConditions,
  fe as setRef,
  he as t,
  O as toBind,
  Mt as toBinds,
  me as toComputed,
  I as toRefItem,
  Zt as useApiRef,
  Et as useBroadcastValueRef,
  te as useCookieRef,
  ee as useGeoIntlRef,
  ie as useHashRef,
  se as useLazyItemByMarginRef,
  $t as useLazyRef,
  ne as useLoadingRef,
  ae as useMeta,
  ue as useSessionRef,
  le as useStorageRef,
  Ot as useTranslateRef
};
