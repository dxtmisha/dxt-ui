var pt = Object.defineProperty;
var St = (s, t, e) => t in s ? pt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var l = (s, t, e) => St(s, typeof t != "symbol" ? t + "" : t, e);
import { isArray as bt, isString as Q, isObjectNotArray as P, forEach as H, toArray as W, isObject as X, toCamelCase as It, toDate as rt, Datetime as Lt, Geo as E, EventItem as wt, GeoFlag as xt, GeoIntl as Ct, isSelected as V, getExp as kt, getColumn as at, ScrollbarWidth as Dt, ApiMethodItem as j, Api as ct, Formatters as At, SearchList as Bt, executeFunction as tt, isFunction as Mt, executePromise as et, isApiSuccess as Nt, BroadcastMessage as Ft, Cookie as Ht, Hash as U, isDomRuntime as ht, getElementId as $, Loading as ut, random as $t, Meta as Et, DataStorage as dt, Translate as lt } from "@dxtmisha/functional-basic";
export * from "@dxtmisha/functional-basic";
import { isRef as z, h as Rt, computed as u, toRefs as Pt, useAttrs as jt, useSlots as zt, ref as g, watch as m, triggerRef as Vt, effectScope as it, shallowRef as M, getCurrentInstance as Tt, onUnmounted as Ot, inject as Wt, provide as Ut, watchEffect as gt, customRef as _t } from "vue";
class Gt {
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
    return bt(t) ? !!t.find((e) => this.isDifferent(e)) : this.isDifferent(t);
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
class Kt {
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
    this.props = t, this.callback = e, this.changed = new Gt(t, i);
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
class Ie extends Kt {
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
function d(s) {
  return z(s) ? s.value : s;
}
function Yt(s) {
  return s && "class" in s && typeof s.class == "string" ? s.class : void 0;
}
function Jt(s, t, e) {
  const i = t == null ? void 0 : t.id, n = t == null ? void 0 : t.index, r = Yt(t);
  let a = "";
  if (Q(s) && (a += `.${s}`), e && (a += `.${e}`), n && Q(n) && (a += `.${n}`), r && (a += `.${r}`), i && (a += `.${i}`), a !== "")
    return a;
}
function Qt(s, t, e, i) {
  let n = t;
  const r = t && "key" in t;
  return (!t || !r) && (n = {
    ...t,
    key: Jt(s, t, i)
  }), Rt(s, n, e);
}
function Z(s, t) {
  const e = s == null ? void 0 : s.class, i = t == null ? void 0 : t.class, n = s == null ? void 0 : s.style, r = t == null ? void 0 : t.style, a = {
    ...s,
    ...t
  };
  return e && i && (a.class = [], e && a.class.push(e), i && a.class.push(i)), n && r && (a.style = [], n && a.style.push(n), r && a.style.push(r)), a;
}
function Xt(...s) {
  let t = {};
  return s.forEach((e) => {
    e && (t = Z(t, e));
  }), t;
}
class ft {
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
      t in this.caching || (this.caching[t] = u(() => this.computeModification(t)));
      const i = this.caching[t];
      if (i)
        return e ? Xt(i.value, e) : i.value;
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
      return Qt(
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
    const e = d((i = this.modification) == null ? void 0 : i[t]);
    if (e && P(e)) {
      const n = {};
      return H(e, (r, a) => {
        n[a] = d(r);
      }), n;
    }
    return {};
  }
}
class Le extends ft {
}
class we {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, e, i) {
    l(this, "name");
    l(this, "element", g());
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
    this.props = e, this.options = i, this.name = this.initName(t), this.refs = this.props ? Pt(this.props) : {}, this.components = new ft(i == null ? void 0 : i.components, i == null ? void 0 : i.compMod), this.emits = i == null ? void 0 : i.emits, this.classes = u(() => this.updateClasses()), this.styles = u(() => this.updateStyles()), this.attrs = jt(), this.slots = zt();
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
    return String(this.name[0]);
  }
  /**
   * Getting the class name.
   *
   * Получение названия класса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getSubClass(t) {
    return `${this.getName()}__${W(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${W(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${W(t).join("-")}`;
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
    return P(t) ? t : Array.isArray(t) ? { [t.filter((i) => typeof i == "string" && i.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes/ список классов
   */
  toClassName(t) {
    if (X(t)) {
      const e = {};
      return H(t, (i, n) => {
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
    return H(t.split(".", 2), (e) => It(e));
  }
  /**
   * Updating data about the class.
   *
   * Обновление данных об классе.
   */
  updateClasses() {
    var i, n, r, a;
    const t = (i = this.classesSub) == null ? void 0 : i.value, e = (r = (n = this.options) == null ? void 0 : n.classes) == null ? void 0 : r.value;
    return t && e ? {
      ...t,
      ...e,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(e == null ? void 0 : e.main)
        // ...this.toClass(this.attrs?.class)
      }
    } : (a = e != null ? e : t) != null ? a : {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var i, n, r, a;
    const t = (i = this.stylesSub) == null ? void 0 : i.value, e = (r = (n = this.options) == null ? void 0 : n.styles) == null ? void 0 : r.value;
    return t && e ? {
      ...t,
      ...e
    } : (a = e != null ? e : t) != null ? a : {};
  }
}
function A(s) {
  return z(s) ? s : g(s);
}
class xe {
  /**
   * Constructor
   * @param date date for processing. дата для обработки
   * @param type type of date format for output. тип формата даты вывода
   * @param code country and language code. код страны и языка
   */
  constructor(t, e = "date", i = E.getLocation()) {
    l(this, "item");
    l(this, "type");
    l(this, "code");
    l(this, "date");
    l(this, "datetime");
    l(this, "year", g(2e3));
    l(this, "month", g(1));
    l(this, "day", g(1));
    l(this, "hour", g(1));
    l(this, "minute", g(1));
    l(this, "second", g(1));
    this.item = A(t), this.type = A(e), this.code = A(i), this.date = g(rt(this.item.value)), this.datetime = new Lt(
      this.date.value,
      this.type.value,
      this.code.value
    ), m(this.item, (n) => {
      this.date.value = rt(n);
    }), m(this.type, (n) => this.datetime.setType(n)), m(this.code, (n) => this.datetime.setCode(n)), m(this.date, (n) => {
      this.datetime.setDate(n), this.updateDate();
    }), this.datetime.setWatch(() => Vt(this.date)), this.updateDate();
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
    return u(() => this.year.value);
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.
   *
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return u(() => this.month.value);
  }
  /**
   * The method returns the day of the month for the specified date according to local time.
   *
   * Метод возвращает день месяца указанной даты по местному времени.
   */
  getDay() {
    return u(() => this.day.value);
  }
  /**
   * The method returns the hour for the specified date, according to local time.
   *
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return u(() => this.hour.value);
  }
  /**
   * The method returns the minutes in the specified date according to local time.
   *
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return u(() => this.minute.value);
  }
  /**
   * The method returns the seconds in the specified date according to local time.
   *
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return u(() => this.second.value);
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
  /**
   * Updates all reactive date values.
   *
   * Обновляет все реактивные значения даты.
   */
  updateDate() {
    return this.year.value = this.datetime.getYear(), this.month.value = this.datetime.getMonth(), this.day.value = this.datetime.getDay(), this.hour.value = this.datetime.getHour(), this.minute.value = this.datetime.getMinute(), this.second.value = this.datetime.getSecond(), this;
  }
}
class N {
  /**
   * Runs a function within the global scope.
   *
   * Запускает функцию в глобальной области.
   * @param fn function/ функция
   * @returns the return value of the function/ возвращаемое значение функции
   */
  static run(t) {
    return this.getScope().run(t);
  }
  /**
   * Gets the global effect scope instance.
   *
   * Получает экземпляр глобальной области действия эффекта.
   * @returns the global effect scope instance/ экземпляр глобальной области действия эффекта
   */
  static getScope() {
    return this.scope || (this.scope = it(!0)), this.scope;
  }
}
/**
 * Effect scope instance.
 *
 * Экземпляр области действия эффекта.
 */
l(N, "scope");
class Ce extends wt {
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
  constructor(t, e, i = ["click"], n, r, a) {
    const h = A(t), c = A(e);
    super(
      h.value,
      i,
      n,
      r,
      a
    ), c.value && this.setElementControl(c.value), m(h, (o) => this.setElement(o)), m(c, (o) => this.setElementControl(o));
  }
}
class ke {
  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(t = E.getLocation()) {
    l(this, "code");
    l(this, "flag");
    this.code = A(t), this.flag = new xt(this.code.value), m(this.code, (e) => this.flag.setCode(e));
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
const x = class x {
  /**
   * Information about the current country.
   *
   * Информация об текущей стране.
   * @returns reactive object with full geographic information/ реактивный объект с полной географической информацией
   */
  static get() {
    return this.item;
  }
  /**
   * Current country.
   *
   * Текущая страна.
   * @returns reactive string with the current country code/ реактивная строка с кодом текущей страны
   */
  static getCountry() {
    return this.country;
  }
  /**
   * Current language.
   *
   * Текущий язык.
   * @returns reactive string with the current language code/ реактивная строка с кодом текущего языка
   */
  static getLanguage() {
    return this.language;
  }
  /**
   * Full format according to the standard.
   *
   * Полный формат согласно стандарту.
   * @returns reactive string with the full standard locale format/
   * реактивная строка с полным форматом стандарта локали
   */
  static getStandard() {
    return this.standard;
  }
  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   * @returns reactive string representing the first day of the week/
   * реактивная строка, представляющая первый день недели
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
    E.set(t, !0), this.item.value = E.getItem();
  }
};
l(x, "item", M(E.get())), l(x, "country", u(() => x.item.value.country)), l(x, "language", u(() => x.item.value.language)), l(x, "standard", u(() => x.item.value.standard)), l(x, "firstDay", u(() => x.item.value.firstDay));
let R = x;
class Zt {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    l(this, "location");
    l(this, "intl");
    this.location = A(t), this.intl = u(() => {
      var e;
      return new Ct((e = this.location.value) != null ? e : R.getLanguage().value);
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
  currency(t, e, i = !1) {
    return u(
      () => this.intl.value.currency(
        d(t),
        d(e),
        i
      )
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
    return u(() => this.intl.value.currencySymbol(d(t), e));
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
   * Возвращает отформатированный размер файла
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  sizeFile(t, e = "byte") {
    return u(() => this.intl.value.sizeFile(d(t), e));
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
   * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
   * список слов для форматирования (в формате `one|two|few|many|other|zero`)
   * @param options Property for PluralRules/ свойство для PluralRules
   * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
   */
  plural(t, e, i, n) {
    return u(() => this.intl.value.plural(d(t), e, i, n));
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
    return u(() => this.intl.value.date(d(t), e, i, n));
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
    return u(() => this.intl.value.relative(d(t), e, i));
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
  relativeLimit(t, e, i, n, r, a, h) {
    return u(() => this.intl.value.relativeLimit(
      d(t),
      e,
      i,
      n,
      r,
      a,
      h
    ));
  }
  /**
   * Возвращает отформатированное значение времени, прошедшего с момента события
   * @param value a number, bigint, or string, to format/ число для форматирования
   * @param unit time unit/ единица времени
   * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
   */
  relativeByValue(t, e, i) {
    return u(() => this.intl.value.relativeByValue(d(t), e, i));
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
  /**
   * Sorts strings taking into account the characteristics of countries.
   *
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data/ массив с данными
   * @param compareFn a function for sorting/ функция для сортировки
   */
  sort(t, e = (i, n) => [i, n]) {
    return u(() => this.intl.value.sort([...d(t)], e));
  }
}
class vt {
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
  constructor(t, e, i, n, r, a, h, c, o, v = 0, p = 9999999, f) {
    l(this, "subList", {});
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     * @returns reactive list of items/ реактивный список элементов
     */
    l(this, "data", u(
      () => H(
        d(this.list) || [],
        (t, e) => this.initItem(e, t)
      )
    ));
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     * @returns simplified reactive list/ упрощенный реактивный список
     */
    l(this, "liteData", u(() => {
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
     * Returns a list of records with all additional data (focus, selection, disabled status).
     *
     * Возвращает список записей со всеми дополнительными данными (фокус, выделение, статус активности).
     * @returns full reactive list/ полный реактивный список
     */
    l(this, "fullData", u(() => {
      const t = this.getFocus(), e = this.getHighlight(), i = this.getSelected();
      return H(
        this.data.value,
        (n) => {
          var a, h;
          const r = V(n.index, i);
          return {
            ...n,
            focus: t === n.index,
            highlight: e,
            filterMode: (a = this.filterMode) == null ? void 0 : a.value,
            selected: r,
            disabled: (h = n.disabled) != null ? h : !r && n.type === "item" && this.isSelectedMax.value
          };
        }
      );
    }));
    /**
     * Returns a flat map of all entries including sublists.
     *
     * Возвращает плоскую карту всех записей, включая подсписки.
     * @returns reactive flat list/ реактивный плоский список
     */
    l(this, "map", u(() => {
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
    l(this, "mapItems", u(() => this.map.value.filter((t) => t.type === "item")));
    /**
     * Returns a list consisting only of values for selection (item, group, menu).
     *
     * Возвращает список, состоящий только из значений для выбора (item, group, menu).
     * @returns reactive list/ реактивный список
     */
    l(this, "items", u(() => this.map.value.filter(
      (t) => t.type === "item" || t.type === "group" || t.type === "menu"
    )));
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     * @returns first found index/ первый найденный индекс
     */
    l(this, "highlightFirstItem", u(() => {
      const t = this.getHighlight();
      if (t && t.length >= this.getHighlightLengthStart()) {
        const e = kt(t, "i");
        if (e)
          return this.map.value.findIndex(
            (i) => {
              var n, r, a;
              return ((n = i.label) == null ? void 0 : n.toString().match(e)) || ((r = i.index) == null ? void 0 : r.toString().match(e)) || ((a = i.search) == null ? void 0 : a.toString().match(e));
            }
          );
      }
      return -1;
    }));
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     * @returns true if selection exists/ true, если есть выбор
     */
    l(this, "isSelected", u(() => {
      const t = this.getSelected();
      return !!t && this.mapItems.value.findIndex((e) => V(e.index, t)) !== -1;
    }));
    /**
     * Is the minimum selection reached.
     *
     * Достигнуто ли минимальное выделение.
     * @returns true if minimum reached/ true, если минимум достигнут
     */
    l(this, "isSelectedMin", u(() => {
      const t = Number(d(this.min) || 0);
      return t > 0 ? this.selectedListInGroup.value.length >= t : !1;
    }));
    /**
     * Is the maximum selection reached.
     *
     * Достигнуто ли максимальное выделение.
     * @returns true if maximum reached/ true, если максимум достигнут
     */
    l(this, "isSelectedMax", u(() => {
      const t = Number(d(this.max) || 9999999);
      return t > 0 ? this.selectedListInGroup.value.length >= t : !1;
    }));
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     * @returns reactive list of selected items/ реактивный список выделенных элементов
     */
    l(this, "selectedList", u(() => {
      const t = this.getSelected();
      return t && this.isSelected.value ? this.mapItems.value.filter((e) => V(e.index, t)) : [];
    }));
    /**
     * Returns a list of selected items in the current group.
     *
     * Возвращает список выделенных элементов в текущей группе.
     * @returns reactive list of selected items in group/ реактивный список выделенных элементов в группе
     */
    l(this, "selectedListInGroup", u(() => {
      const t = this.getSelected();
      return t && this.isSelected.value ? this.data.value.filter((e) => V(e.index, t)) : [];
    }));
    /**
     * Returns a list of selected labels on the map.
     *
     * Возвращает список названий выделенных элементов на карте.
     * @returns reactive list of labels/ реактивный список названий
     */
    l(this, "selectedNames", u(() => at(this.selectedList.value, "label")));
    /**
     * Returns a list of selected values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     * @returns reactive list of values/ реактивный список значений
     */
    l(this, "selectedValues", u(() => at(this.selectedList.value, "value")));
    this.list = t, this.focus = e, this.highlight = i, this.highlightLengthStart = n, this.filterMode = r, this.selected = a, this.keyValue = h, this.keyLabel = c, this.lite = o, this.min = v, this.max = p, this.parent = f, z(t) && m(t, () => {
      this.subList = {};
    });
  }
  /**
   * Checks whether it is necessary to first display a simplified version.
   *
   * Проверяет, надо ли сначала вывести упрощенную версию.
   * @returns true if lite mode is active/ true, если активен облегченный режим
   */
  isLite() {
    var t;
    return !!((t = this.lite) != null && t.value && this.data.value.length > this.lite.value);
  }
  /**
   * Checks if an element is in focus.
   *
   * Проверяет, есть ли элемент в фокусе.
   * @returns true if focus exists/ true, если есть фокус
   */
  isFocus() {
    const t = this.getFocus();
    return !!(t && this.map.value.findIndex((e) => e.index === t) !== -1);
  }
  /**
   * Checks if there is a highlighted item (search results).
   *
   * Проверяет, есть ли найденный элемент (результаты поиска).
   * @returns true if highlight exists/ true, если есть совпадения
   */
  isHighlight() {
    return this.highlightFirstItem.value !== -1;
  }
  /**
   * Checks if highlighting is active (minimum length reached).
   *
   * Проверяет, активно ли выделение (достигнута минимальная длина).
   * @returns true if active/ true, если активно
   */
  isHighlightActive() {
    var t, e;
    return ((e = (t = this.getHighlight()) == null ? void 0 : t.length) != null ? e : 0) < this.getHighlightLengthStart() || this.isHighlight();
  }
  /**
   * Returns the number of records in the current list.
   *
   * Возвращает количество записей в текущем списке.
   * @returns length/ количество
   */
  getLength() {
    return this.data.value.length;
  }
  /**
   * Returns the number of all available records in the map.
   *
   * Возвращает количество всех доступных записей в карте.
   * @returns length/ количество
   */
  getLengthByMap() {
    return this.map.value.length;
  }
  /**
   * Returns the number of all available records (items).
   *
   * Возвращает количество всех доступных записей (элементы).
   * @returns length/ количество
   */
  getLengthByItems() {
    return this.items.value.length;
  }
  /**
   * Returns the identifier in focus.
   *
   * Возвращает идентификатор в фокусе.
   * @returns focus identifier/ идентификатор в фокусе
   */
  getFocus() {
    var t;
    return (t = this.focus) == null ? void 0 : t.value;
  }
  /**
   * Returns the highlight text.
   *
   * Возвращает текст для выделения.
   * @returns text/ текст
   */
  getHighlight() {
    var t;
    return (t = this.highlight) == null ? void 0 : t.value;
  }
  /**
   * Returns the minimum length for highlight to start.
   *
   * Возвращает минимальную длину для начала выделения.
   * @returns length/ длина
   */
  getHighlightLengthStart() {
    var t, e;
    return (e = (t = this.highlightLengthStart) == null ? void 0 : t.value) != null ? e : 2;
  }
  /**
   * Returns the selected identifiers list.
   *
   * Возвращает список выбранных идентификаторов.
   * @returns list/ список
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
   * @returns target item index/ индекс целевого элемента
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
   * @returns next item index/ индекс следующего элемента
   */
  getSelectedNext() {
    return this.getSelectedByStep(1);
  }
  /**
   * Returns the previous item from the selected one.
   *
   * Возвращает предыдущий элемент от выбранного.
   * @returns previous item index/ индекс предыдущего элемента
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
   * @returns target item/ целевой элемент
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
   * @returns next item/ следующий элемент
   */
  getItemNext(t) {
    return this.getItemByStep(t, 1);
  }
  /**
   * Returns the previous item from the specified one.
   *
   * Возвращает предыдущий элемент от указанного.
   * @param item item/ элемент
   * @returns previous item/ предыдущий элемент
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
   * @returns target item/ целевой элемент
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
   * @returns next item/ следующий элемент
   */
  getIndexNext(t) {
    return this.getIndexByStep(t, 1);
  }
  /**
   * Returns the previous item from the specified index.
   *
   * Возвращает предыдущий элемент от указанного индекса.
   * @param index item index/ индекс элемента
   * @returns previous item/ предыдущий элемент
   */
  getIndexPrev(t) {
    return this.getIndexByStep(t, -1);
  }
  /**
   * Returns an item by its index.
   *
   * Возвращает элемент по его индексу.
   * @param index item index/ индекс элемента
   * @returns found item details/ информация о найденном элементе
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
   * @returns found item/ найденный элемент
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
   * @returns first item/ первый элемент
   */
  getFirstItemByParent(t) {
    return this.map.value.find((e) => this.isInParent(t, e));
  }
  /**
   * Returns the last item with the specified parent.
   *
   * Возвращает последний элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   * @returns last item/ последний элемент
   */
  getLastItemByParent(t) {
    return this.map.value.filter((e) => this.isInParent(t, e)).pop();
  }
  /**
   * Returns a sublist object for a group item.
   *
   * Возвращает объект подсписка для группового элемента.
   * @param item List item data/ данные элемента списка
   * @returns sublist instance/ экземпляр подсписка
   */
  getSubList(t) {
    return t.index in this.subList || (this.subList[t.index] = new vt(
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
    return t && !X(t) ? t : e && !X(e) ? e : i && n;
  }
  /**
   * Creates an object of the record element.
   *
   * Создает объект элемента записи.
   * @param key the value of the key in the element/ значения ключа у элемента
   * @param item selected element/ выбранный элемент
   */
  initItem(t, e) {
    var i, n, r, a, h, c;
    if (P(e)) {
      const o = e == null ? void 0 : e[(n = (i = this.keyValue) == null ? void 0 : i.value) != null ? n : "value"], v = (h = e == null ? void 0 : e[(a = (r = this.keyLabel) == null ? void 0 : r.value) != null ? a : "label"]) != null ? h : o, p = this.getIndex(
        e == null ? void 0 : e.index,
        o,
        t,
        v
      );
      return {
        ...e,
        parent: this.parent,
        index: p,
        type: (c = e == null ? void 0 : e.type) != null ? c : "item",
        label: v,
        value: o
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
class mt {
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
    return P(t) && "name" in t && Q(t == null ? void 0 : t.name) ? this.getHref(t.name) : {};
  }
}
l(mt, "router");
class De {
  /**
   * Constructor
   */
  constructor() {
    /**
     * Reactive item.
     *
     * Реактивный элемент.
     */
    l(this, "item", g());
    /**
     * Checks whether the scroll width is defined.
     *
     * Проверяет, определена ли ширина скролла.
     */
    l(this, "is", u(() => this.item.value !== void 0));
    Dt.is().then((t) => {
      this.item.value = t;
    });
  }
}
const yt = (s) => typeof s == "string" ? { method: s } : s || {};
function O(s, t = j.post, e, i, n = !0, r) {
  const a = g(!1), h = A(yt(r));
  return {
    loading: a,
    /**
     * Send request.
     *
     * Отправка запроса.
     * @param request Request data / Данные запроса
     * @returns Response data / Данные ответа
     */
    async send(c) {
      a.value = !0;
      let o;
      try {
        if (o = await ct.request({
          path: d(s),
          method: t,
          request: c,
          toData: n,
          ...h.value
        }), o && (i && (o = i(o)), e)) {
          const v = e(o);
          v instanceof Promise && await v;
        }
      } catch (v) {
        console.error("useApiRequest: error", d(s), v);
      }
      return a.value = !1, o;
    }
  };
}
function qt(s, t, e, i = !0, n) {
  return O(
    s,
    j.delete,
    t,
    e,
    i,
    n
  );
}
function Ae(s, t, e, i = !0, n) {
  return O(
    s,
    j.get,
    t,
    e,
    i,
    n
  );
}
let T;
function te(s, t, e = !0, i, n, r = !0) {
  const a = g(), h = A(yt(t)), c = g(!1), o = g(!1);
  let v, p = !0, f;
  const L = async () => {
    if (p)
      return;
    v && v.abort(), v = h.value.controller || new AbortController();
    const I = d(s);
    if ((!i || i.value) && I) {
      c.value = !0, o.value = !0;
      try {
        const b = await ct.request({
          path: I,
          controller: v,
          ...h.value
        });
        b && (n ? a.value = n(b) : a.value = b);
      } catch (b) {
        console.error("useApiRef: error", I, b), a.value = void 0;
      }
      c.value = !1;
    } else a.value !== void 0 && (a.value = void 0);
  }, w = () => {
    console.warn("useApiRef: stop", d(s)), f == null || f(), a.value = void 0, p = !0;
  }, y = () => {
    p && (p = !1, L().then(), r ? (C(), Tt() && Ot(() => w())) : N.run(() => C()));
  }, C = () => {
    const I = [];
    e && I.push(h), z(s) && I.push(s), i && I.push(i), T && I.push(T), I.length > 0 && (f = m(I, async () => {
      c.value || await L();
    }));
  }, k = u(() => (y(), a.value)), D = u(() => Array.isArray(a.value) ? a.value.length : a.value ? 1 : 0), S = u(() => a.value === void 0);
  return {
    /** Reactive data (Computed) / Реактивные данные (Computed) */
    data: k,
    /** Item (Ref) / Элемент (Ref) */
    get item() {
      return y(), a;
    },
    /**
     * Returns the count of records in the list (ComputedRef) /
     * Возвращает количество записей в списке (ComputedRef)
     */
    length: D,
    /** Start request flag (true if no data yet) / Флаг начала запроса (true если еще нет данных) */
    starting: S,
    /** Request load flag / Флаг загрузки запроса */
    loading: c,
    /** Active reading flag / Флаг активного чтения */
    reading: o,
    /**
     * Checks if the request is starting (true if no data yet)
     *
     * Проверяет, начинается ли запрос (true, если данных еще нет)
     */
    isStarting() {
      return a.value === void 0;
    },
    /**
     * Checks if the request is currently loading.
     *
     * Проверяет, загружается ли запрос в данный момент.
     */
    isLoading() {
      return c.value;
    },
    /**
     * Checks if the request is currently reading.
     *
     * Проверяет, читается ли запрос в данный момент.
     */
    isReading() {
      return o.value;
    },
    /**
     * Gets the current item data.
     *
     * Получает текущие данные элемента.
     */
    getItem() {
      return a.value;
    },
    /**
     * Manual initialization
     *
     * Ручная инициализация
     */
    init: y,
    /**
     * Default reset
     *
     * Сброс по умолчанию
     */
    reset: L,
    /**
     * Stop request
     *
     * Остановка запроса
     */
    stop: w,
    /**
     * Abort request
     *
     * Отмена запроса
     */
    abort: () => v == null ? void 0 : v.abort()
  };
}
const Be = (s) => {
  T || (T = s);
};
function ee(s, t, e, i = !0, n) {
  return O(
    s,
    j.post,
    t,
    e,
    i,
    n
  );
}
function ie(s, t, e, i = !0, n) {
  return O(
    s,
    j.put,
    t,
    e,
    i,
    n
  );
}
function se(s, t) {
  const e = new At(t), i = u(() => e.setList(s.value).to()), n = u(() => e.setList(s.value).length());
  return {
    /**
     * Formatted data list (ComputedRef) /
     * Отформатированный список данных (ComputedRef)
     */
    listFormat: i,
    /**
     * Returns the count of records in the list (ComputedRef) /
     * Возвращает количество записей в списке (ComputedRef)
     */
    length: n
  };
}
function ne(s, t) {
  const e = t != null ? t : g(""), i = g(e.value), n = g(!1);
  let r;
  return m(e, (a, h, c) => {
    const o = s.getOptions().getDelay();
    o ? (n.value = !0, r = setTimeout(() => {
      r = void 0, i.value = e.value, n.value = !1;
    }, o), c(() => {
      r && clearTimeout(r);
    })) : i.value = e.value;
  }), {
    /** Current search value / Текущее значение поиска */
    search: e,
    /** Search value with applied delay / Значение поиска с примененной задержкой */
    searchDelay: i,
    /** Loading status during delay / Статус загрузки во время задержки */
    loading: n
  };
}
function re(s, t, e, i) {
  const n = new Bt(
    void 0,
    t,
    void 0,
    i
  ), {
    search: r,
    searchDelay: a,
    loading: h
  } = ne(n, e), c = () => {
    const f = d(tt(s));
    return f || [];
  }, o = u(
    () => n.setValue(a.value).getItem().isSearch()
  ), v = u(() => n.setList(c()).setValue(a.value).to()), p = u(() => v.value.length);
  return {
    /**
     * Whether the search is currently active (minimum character limit reached)/
     * Активен ли поиск в данный момент (достигнут ли лимит символов)
     */
    isSearch: o,
    /** Search string ref/ Ссылка на строку поиска */
    search: r,
    /**
     * Search loading status (if delay is used) /
     * Статус загрузки поиска (если используется задержка)
     */
    loading: h,
    /**
     * Formatted list of search results with highlights /
     * Форматированный список результатов поиска с подсветкой совпадений
     */
    listSearch: v,
    /**
     * Length of the search results /
     * Длина списка результатов поиска
     */
    length: p
  };
}
function Me(s, t, e, i, n, r, a) {
  const {
    path: h,
    options: c,
    reactivity: o,
    conditions: v,
    transformation: p,
    unmounted: f,
    skeleton: L
  } = s;
  let w, y, C, k, D;
  const S = te(
    h,
    c,
    o,
    v,
    p,
    f
  ), I = u(() => S.isStarting() && L ? L() : S.data.value);
  if (t && (w = se(
    I,
    t
  )), e) {
    const b = u(() => {
      var B;
      const F = (B = w == null ? void 0 : w.listFormat.value) != null ? B : S.data.value;
      if (Array.isArray(F))
        return F;
    });
    y = re(
      b,
      e.columns,
      e.value,
      e.options
    );
  }
  if (i || n || r) {
    const b = (B) => {
      a == null || a(), Nt(B) && S.reset();
    }, F = (B) => async (nt) => {
      Mt(B) && await et(B(nt)), b(nt);
    };
    i && (C = ee(
      i.path,
      F(i.action),
      i.transformation,
      i.toData,
      i.options
    )), n && (k = ie(
      n.path,
      F(n.action),
      n.transformation,
      n.toData,
      n.options
    )), r && (D = qt(
      r.path,
      F(r.action),
      r.transformation,
      r.toData,
      r.options
    ));
  }
  return {
    /** List data (Computed) / Данные списка (Computed) */
    get list() {
      return y && Array.isArray(S.data.value) ? y.listSearch : w ? w.listFormat : I;
    },
    /** Raw request data (Computed) / Исходные данные запроса (Computed) */
    get data() {
      return S.data;
    },
    /** Length of the list (Computed) / Длина списка (Computed) */
    get length() {
      return y ? y.length : S.length;
    },
    /** Data length (number) / Длина исходных данных */
    lengthData: S.length,
    /** Active starting flag (true if no data yet) / Флаг начальной загрузки (true если еще нет данных) */
    starting: S.starting,
    /** Active reading flag / Флаг активного чтения */
    reading: S.reading,
    /** Request load flag / Флаг загрузки запроса */
    loading: S.loading,
    /** Loading search flag / Флаг загрузки поиска */
    loadingSearch: y == null ? void 0 : y.loading,
    /** POST request load flag / Флаг загрузки POST запроса */
    loadingPost: C == null ? void 0 : C.loading,
    /** PUT request load flag / Флаг загрузки PUT запроса */
    loadingPut: k == null ? void 0 : k.loading,
    /** DELETE request load flag / Флаг загрузки DELETE запроса */
    loadingDelete: D == null ? void 0 : D.loading,
    /** Is search active / Активен ли поиск */
    isSearch: y == null ? void 0 : y.isSearch,
    /** Search function / Функция поиска */
    search: y == null ? void 0 : y.search,
    /**
     * Default reset.
     *
     * Сброс по умолчанию.
     */
    reset: S.reset,
    /**
     * Abort request.
     *
     * Отмена запроса.
     */
    abort: S.abort,
    /**
     * Send POST request.
     *
     * Выполнить POST запрос.
     * @param request request data / данные запроса
     */
    sendPost: async (b) => await (C == null ? void 0 : C.send(b)),
    /**
     * Send PUT request.
     *
     * Выполнить PUT запрос.
     * @param request request data / данные запроса
     */
    sendPut: async (b) => await (k == null ? void 0 : k.send(b)),
    /**
     * Send DELETE request.
     *
     * Выполнить DELETE запрос.
     * @param request request data / данные запроса
     */
    sendDelete: async (b) => await (D == null ? void 0 : D.send(b))
  };
}
function ae(s, t) {
  const e = `broadcast--${s}`;
  if (e in _)
    return _[e];
  const i = g(tt(t)), n = new Ft(
    e,
    (r) => {
      i.value !== r.data.message && (i.value = r.data.message);
    }
  );
  return N.run(() => {
    m(i, (r) => n.post({ message: r }));
  }), _[e] = i, i;
}
const _ = {};
function Ne(s, t, e) {
  if (s in G)
    return G[s];
  const i = new Ht(s), n = ae(
    `__cookie:${s}`,
    i.get(t, e)
  );
  return N.run(() => {
    m(n, (r) => {
      i.set(r, e);
    });
  }), G[s] = n, n;
}
const G = {};
function Fe() {
  return new Zt();
}
function He(s, t) {
  if (s in K)
    return K[s];
  const e = M(U.get(s, t));
  return N.run(() => {
    m(e, (i) => U.set(s, i));
  }), U.addWatch(s, (i) => {
    e.value = i;
  }), K[s] = e, e;
}
const K = {}, ue = (s = {
  rootMargin: "128px 0px"
}) => {
  const t = {}, e = ht() && "IntersectionObserver" in window ? new IntersectionObserver(
    (n) => {
      n.forEach((r) => {
        const a = $(r.target);
        if (a in t) {
          const h = t[a];
          h.status.value = r.isIntersecting, h.ratio.value = r.intersectionRatio, h.entry.value = r;
        }
      });
    },
    s
  ) : void 0, i = (n) => {
    var r;
    if (n) {
      const a = $(n);
      a in t && (e == null || e.unobserve(n), (r = t[a]) == null || r.stopWatch(), delete t[a]);
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
      const r = $(n);
      return t[r];
    },
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(n) {
      const r = M(!e);
      if (e) {
        let a;
        a = m(n, (h, c) => {
          if (c && i(c), n.value) {
            const o = $(n.value);
            t[o] = {
              status: r,
              ratio: M(0),
              entry: M(void 0),
              stopWatch: () => a == null ? void 0 : a()
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
}, ot = [], le = (s) => {
  const t = ot.find((i) => i.rootMargin === s);
  if (t)
    return t.item;
  const e = ue({ rootMargin: s });
  return ot.push({ rootMargin: s, item: e }), e;
}, $e = (s, t) => {
  const e = le(t);
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
function Ee() {
  const s = M(ut.is());
  return ut.registrationEvent(({ detail: t }) => {
    s.value = t.loading;
  }), s;
}
var oe = /* @__PURE__ */ ((s) => (s.global = "global", s.provide = "provide", s.local = "local", s))(oe || {});
const ce = () => `__execute_use${he}::${$()}`, he = $t(1e5, 999999), q = [], de = it();
function st(s, t = "provide") {
  const e = ce();
  let i;
  const n = (c) => {
    const o = Object.freeze(s(...c));
    return {
      ...o,
      init() {
        return o;
      }
    };
  }, r = (c) => {
    const o = Object.freeze(n(c));
    return Ut(e, o), o;
  }, a = (c) => {
    const o = n(c);
    return Object.freeze({
      ...o,
      destroyExecute() {
        i = void 0;
      }
    });
  }, h = (...c) => {
    if (t === "provide") {
      const o = Wt(e, void 0);
      return o || r(c);
    } else i || (t === "local" ? de.run(() => {
      i = a(c);
    }) : i = a(c));
    return i;
  };
  return t === "global" && q.push(h), h;
}
function ge(s) {
  return st(
    s,
    "global"
    /* global */
  );
}
function Re(s) {
  return st(
    s,
    "provide"
    /* provide */
  );
}
function Pe(s) {
  return st(
    s,
    "local"
    /* local */
  );
}
function je() {
  q.forEach((s) => s()), q.length = 0;
}
const fe = ge(() => {
  const s = new Et(), t = g(s.getTitle()), e = g(s.getKeywords()), i = g(s.getDescription()), n = g(s.getImage()), r = g(s.getCanonical()), a = g(s.getRobots()), h = g(s.getAuthor()), c = g(s.getSiteName()), o = () => s.html();
  return m(t, () => {
    s.setTitle(t.value);
  }), m(e, () => {
    s.setKeywords(e.value);
  }), m(i, () => {
    s.setDescription(i.value);
  }), m(n, () => {
    s.setImage(n.value);
  }), m(r, () => {
    s.setCanonical(r.value);
  }), m(a, () => {
    s.setRobots(a.value);
  }), m(h, () => {
    s.setAuthor(h.value);
  }), m(c, () => {
    s.setSiteName(c.value);
  }), {
    meta: s,
    title: t,
    keyword: e,
    description: i,
    author: h,
    image: n,
    canonical: r,
    robots: a,
    siteName: c,
    getHtmlMeta: o
  };
}), ze = () => fe(), Ve = (s, t, e = !0) => {
  var v, p;
  const i = z(t) ? t : g(t || ((p = (v = s.value) == null ? void 0 : v[0]) == null ? void 0 : p.value) || ""), n = () => r(i.value), r = (f) => {
    var L;
    return (L = s.value) == null ? void 0 : L.find((w) => w.value === f);
  }, a = (f) => {
    f && f !== i.value && r(f) && (i.value = f, mt.push({ name: f }));
  }, h = u(() => n()), c = u(() => {
    var f;
    return ((f = n()) == null ? void 0 : f.label) || "";
  }), o = u(() => s.value ? H(
    s.value,
    (f) => e && !("to" in f) ? {
      ...f,
      to: { name: f.value }
    } : f
  ) : []);
  return {
    item: h,
    /** Selected element / Выбранный элемент */
    selected: i,
    label: c,
    /** List of elements / Список элементов */
    list: o,
    to: a,
    /**
     * Transition to the main element.
     *
     * Переход к главному элементу.
     */
    toMain() {
      var f, L;
      a((L = (f = s.value) == null ? void 0 : f[0]) == null ? void 0 : L.value);
    }
  };
};
function Te(s, t) {
  if (s in Y)
    return Y[s];
  const e = new dt(s, !0), i = g(e.get(t));
  return N.run(() => {
    m(i, (n) => e.set(n));
  }), Y[s] = i, i;
}
const Y = {};
function Oe(s, t, e) {
  if (s in J)
    return J[s];
  const i = new dt(s), n = g(i.get(t, e));
  return N.run(() => {
    m(n, (r) => i.set(r));
  }), ht() && window.addEventListener("storage", () => {
    i.update(), n.value = i.get();
  }), J[s] = n, n;
}
const J = {};
function ve(s) {
  const t = M(lt.getListSync(s, !0)), e = async () => {
    t.value = { ...await lt.getList(s) };
  };
  m(R.getLanguage(), e);
  for (const i in t.value)
    if (t.value[i] === i || t.value[i] === " ") {
      e().then();
      break;
    }
  return t;
}
const We = (s) => ve(s);
function Ue(s, t, e) {
  const i = g();
  let n = !0;
  const r = () => {
    n && (n = !1, gt(async () => {
      const a = await et(s);
      a !== t && (i.value = a);
    }));
  };
  return u(() => (r(), i.value), e);
}
function _e(s, t = () => {
}, e, i) {
  return u(
    () => {
      if (R.get().value && (e === void 0 || e())) {
        const n = s();
        if (n !== void 0)
          return n;
      }
      return tt(t);
    },
    i
  );
}
const me = it();
function Ge(s) {
  return _t((t, e) => {
    const i = g();
    let n = !1;
    const r = async () => {
      i.value = await et(s), e();
    }, a = () => {
      n || (n = !0, me.run(() => {
        gt(async () => await r());
      }));
    };
    return {
      /**
       * Gets the computed value.
       *
       * Получает вычисляемое значение.
       */
      get() {
        return a(), t(), i.value;
      },
      /**
       * Displays a warning that the value is read-only.
       *
       * Выводит предупреждение о том, что значение доступно только для чтения.
       */
      set(h) {
        console.warn("computedEternity: value is read-only.");
      }
    };
  });
}
function ye(s, t = {}, e = "value", i = !1) {
  const n = typeof t == "string", r = n ? t : e, a = n ? {} : t;
  return s ? s && P(s) && (r in s || i) ? Z(a, s) : Z(a, { [r]: s }) : n ? {} : { ...a };
}
function Ke(s, t = {}, e = "value") {
  return u(() => ye(d(s), d(t), e));
}
function Ye(s, t) {
  s.value !== t && (s.value = t);
}
export {
  xe as DatetimeRef,
  Kt as DesignAbstract,
  Ie as DesignAsyncAbstract,
  Gt as DesignChanged,
  Le as DesignComp,
  ft as DesignComponents,
  we as DesignConstructorAbstract,
  N as EffectScopeGlobal,
  Ce as EventRef,
  oe as ExecuteUseType,
  ke as GeoFlagRef,
  Zt as GeoIntlRef,
  R as GeoRef,
  vt as ListDataRef,
  mt as RouterItemRef,
  De as ScrollbarWidthRef,
  Ue as computedAsync,
  _e as computedByLanguage,
  Ge as computedEternity,
  st as executeUse,
  ge as executeUseGlobal,
  je as executeUseGlobalInit,
  Pe as executeUseLocal,
  Re as executeUseProvide,
  ye as getBind,
  Ke as getBindRef,
  Yt as getClassName,
  Jt as getIndexForRender,
  yt as getOptions,
  d as getRef,
  Qt as render,
  Be as setApiRefGlobalConditions,
  Ye as setRef,
  We as t,
  Z as toBind,
  Xt as toBinds,
  A as toRefItem,
  qt as useApiDelete,
  Ae as useApiGet,
  Me as useApiManagementRef,
  ee as useApiPost,
  ie as useApiPut,
  te as useApiRef,
  O as useApiRequest,
  ae as useBroadcastValueRef,
  Ne as useCookieRef,
  se as useFormattersRef,
  Fe as useGeoIntlRef,
  He as useHashRef,
  $e as useLazyItemByMarginRef,
  ue as useLazyRef,
  Ee as useLoadingRef,
  ze as useMeta,
  Ve as useRouterList,
  re as useSearchRef,
  ne as useSearchValueRef,
  Te as useSessionRef,
  Oe as useStorageRef,
  ve as useTranslateRef
};
