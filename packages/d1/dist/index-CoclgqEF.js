import { computed as o, h as y, watch as I, onUnmounted as O, ref as S, watchEffect as B, toRefs as R, defineComponent as E, openBlock as D, createBlock as L, unref as N, mergeDefaults as T } from "vue";
import { DesignConstructorAbstract as V, isString as b, isFilled as C, Icons as A, toNumber as x, getElementId as _, isArray as F, forEach as H, isNumber as G, useLazyItemByMarginRef as K, isDomRuntime as P, EventItem as U, resizeImageByMax as q, inArray as Y } from "@dxtmisha/functional";
import { l as k } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var J = Object.defineProperty, Q = (r, t, e) => t in r ? J(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, s = (r, t, e) => Q(r, typeof t != "symbol" ? t + "" : t, e);
const X = 1280;
class W {
  /**
   * Checks if the file is an image.
   *
   * Проверяет, является ли файл изображением.
   * @param file verified file/ проверяемый файл
   */
  static isImage(t) {
    return !!t.type.match(/^image\//);
  }
  /**
   * Creates an image based on a file or a link.
   *
   * Создает изображение на основе файла или ссылки.
   * @param src file or link/ файл или ссылка
   */
  static createImage(t) {
    return new Promise((e) => {
      if (t) {
        const i = new Image();
        i.onerror = () => e(void 0), i.onload = () => {
          e({
            image: i,
            src: this.getSRC(i, t),
            width: i.naturalWidth,
            height: i.naturalHeight
          });
        }, (async () => i.src = t instanceof File ? await this.getFileResult(t) : t)();
      } else
        e(void 0);
    });
  }
  /**
   * Returns a link to the image.
   *
   * Возвращает ссылку на изображение.
   * @param src file or link/ файл или ссылка
   */
  static async getPath(t) {
    return this.createImage(t).then((e) => {
      var i;
      return (i = e == null ? void 0 : e.src) != null ? i : "";
    });
  }
  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
   *
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
   */
  static getFileResult(t) {
    return new Promise((e) => {
      this.isImage(t) ? this.getFileReader(t).then((i) => e(i)) : e("");
    });
  }
  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
   *
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
   */
  static getFileReader(t) {
    return new Promise((e) => {
      const i = new FileReader();
      i.onload = () => e(typeof i.result == "string" ? i.result : ""), i.readAsDataURL(t);
    });
  }
  /**
   * Image size adaptation. Checks if the image size is larger than maxSize, reduces it to maxSize.
   *
   * Адаптация размера изображения. Проверяет, если размер изображения больше maxSize, уменьшает его до maxSize.
   * @param image image element/ элемент изображения
   * @param src link to image/ ссылка на изображение
   * @param maxSize maximum allowable image size/ максимальный допустимый размер изображения
   */
  static getSRC(t, e, i = X) {
    var a;
    return P() && (e instanceof File || e === void 0) && (t.naturalHeight > i || t.naturalWidth > i) ? (a = q(t, i)) != null ? a : "" : t.src;
  }
}
const $ = "#toolbar=0&scrollbar=1";
class M {
  /**
   * Checks if the file is an image.
   *
   * Проверяет, является ли файл PDF.
   * @param file verified file/ проверяемый файл
   */
  static isPdf(t) {
    return b(t) ? !!t.match(/\.pdf$/i) : P() && !!t.type.match(/\/pdf$/i);
  }
  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
   *
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
   */
  static async get(t) {
    return b(t) ? `${t}${$}` : this.isPdf(t) ? `${await W.getFileReader(t)}${$}` : "";
  }
}
var n = /* @__PURE__ */ ((r) => (r.pdf = "pdf", r.file = "file", r.image = "image", r.flag = "flag", r.flagCompressed = "flag-compressed", r.color = "color", r.public = "public", r.filled = "filled", r.outlined = "outlined", r.round = "round", r.sharp = "sharp", r.twoTone = "two-tone", r.material = "material", r.icon = "icon", r))(n || {});
class Z {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    s(this, "item", o(() => {
      const e = this.props.value;
      if (e instanceof File || C(e)) {
        if (M.isPdf(e))
          return n.pdf;
        if (e instanceof File)
          return n.file;
        if (e.match(/\//))
          return n.image;
        if (e.match(/^#/))
          return n.color;
        if (e.match(/^@/))
          return n.public;
        if (e.match(/^\$/))
          return n.material;
        if (e.match(/^flag-[a-z]{2}$/))
          return n.flag;
        if (e.match(/^f-[a-z]{2}$/))
          return n.flagCompressed;
        const i = e.match(/^(outlined|round|sharp|material)-/);
        return i ? i[1] : A.is(e) ? n.public : n.outlined;
      }
    })), this.props = t;
  }
}
const tt = {
  adaptiveGroup: "basic",
  preloadOffset: "1024px"
};
class et {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type image type/ тип изображения
   */
  constructor(t, e) {
    s(this, "image", S()), this.props = t, this.type = e, B(async () => {
      this.image.value = await this.init();
    });
  }
  /**
   * Checks if there are values.
   *
   * Проверяет, есть ли значения.
   */
  is() {
    return this.image.value !== void 0;
  }
  /**
   * Checks if the value is a link, that is, a type of string.
   *
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   */
  isLink() {
    return this.is() && typeof this.image.value == "string";
  }
  /**
   * Checks if the value is an image object.
   *
   * Проверяет, является ли значение объектом изображения.
   */
  isImage() {
    return this.is() && typeof this.image.value != "string";
  }
  /**
   * Calculates the image value and returns it.
   *
   * Вычисляет значение изображения и возвращает его.
   */
  async init() {
    const t = this.props.value;
    if (t)
      switch (this.type.item.value) {
        case n.pdf:
          return await M.get(t);
        case n.image:
        case n.file:
          try {
            return this.props.lazy ? this.props.value : await W.createImage(t);
          } catch (e) {
            console.error("ImageData.initImage: ", t);
          }
          break;
        case n.public:
        case n.icon:
        case n.flag:
          if (b(t))
            return await A.get(t, this.props.url);
          break;
      }
  }
}
class it {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    s(this, "coordinator", o(() => {
      var e, i, a, h, m, g, u, l, w, z, c, p;
      if (this.is()) {
        const d = this.props.coordinator;
        switch (d.length) {
          case 1:
            return [
              (e = d[0]) != null ? e : 0,
              (i = d[0]) != null ? i : 0,
              (a = d[0]) != null ? a : 0,
              (h = d[0]) != null ? h : 0
            ];
          case 2:
            return [
              (m = d[0]) != null ? m : 0,
              (g = d[1]) != null ? g : 0,
              (u = d[0]) != null ? u : 0,
              (l = d[1]) != null ? l : 0
            ];
          case 3:
            return [
              (w = d[0]) != null ? w : 0,
              (z = d[1]) != null ? z : 0,
              (c = d[2]) != null ? c : 0,
              (p = d[1]) != null ? p : 0
            ];
          case 4:
            return d;
        }
      }
      return [0, 0, 0, 0];
    })), s(this, "size", o(() => {
      const e = this.coordinator.value;
      return {
        width: 100 - e[1] - e[3],
        height: 100 - e[2] - e[0]
      };
    })), this.props = t;
  }
  /**
   * Checks if there are coordinates for calculation.
   *
   * Проверяет, есть ли координаты для вычисления.
   */
  is() {
    const t = this.props.coordinator;
    return F(t) && t.length > 0 && t.length < 5;
  }
  /**
   * Returns the values for the background property.
   *
   * Возвращает значения для свойства background.
   */
  getSize() {
    const t = this.size.value, e = t.width === 0 ? 100 : t.width, i = t.height === 0 ? 100 : t.height;
    return {
      width: `${100 / e * 100}%`,
      height: `${100 / i * 100}%`
    };
  }
}
class st {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param coordinator coordinates for margins/ координаты для отступов
   */
  constructor(t, e) {
    s(this, "x", o(() => {
      var i;
      return this.coordinator.is() ? `${this.coordinator.coordinator.value[3] + this.coordinator.size.value.width / 2}%` : ((i = this.props.x) == null ? void 0 : i.toString()) || "center";
    })), s(this, "y", o(() => {
      var i;
      return this.coordinator.is() ? `${this.coordinator.coordinator.value[0] + this.coordinator.size.value.height / 2}%` : ((i = this.props.y) == null ? void 0 : i.toString()) || "center";
    })), this.props = t, this.coordinator = e;
  }
}
class at {
  /**
   * Constructor
   * @param name group name/ название группы
   */
  constructor(t) {
    s(this, "factorMax", 1), s(this, "size", {
      width: 0,
      height: 0
    }), s(this, "offset", {
      width: 7680,
      height: 7680
    }), this.name = t;
  }
  /**
   * Checks whether the element belongs to the current group.
   *
   * Проверяет, принадлежит ли элемент к текущей группе.
   * @param name name of the checked group/ название проверяемой группы
   */
  is(t) {
    return this.name === t;
  }
  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.
   *
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   */
  isSize() {
    return !!(this.size.width || this.size.width);
  }
  /**
   * Returns the maximum physical width.
   *
   * Возвращает максимальную физическую ширину.
   */
  getWidth() {
    return this.size.width;
  }
  /**
   * Returns the maximum physical height.
   *
   * Возвращает максимальную физическую высоту.
   */
  getHeight() {
    return this.size.height;
  }
  /**
   * Returns the actual width.
   *
   * Возвращает фактическую ширину.
   */
  getOffsetWidth() {
    return this.offset.width;
  }
  /**
   * Returns the actual height.
   *
   * Возвращает фактическую высоту.
   */
  getOffsetHeight() {
    return this.offset.height;
  }
  /**
   * Returns the maximum multiplier for scaling.
   *
   * Возвращает максимальный множитель для масштабирования.
   */
  getFactorMax() {
    return this.factorMax;
  }
  /**
   * Updating size.width, if it is less than the selected value.
   *
   * Обновление size.width, если она меньше выбранного значения.
   * @param width value of the selected width/ значение выбранной ширины
   */
  makeWidth(t) {
    return t > this.size.width && (this.size.width = t), this;
  }
  /**
   * Updating size.height, if it is less than the selected value.
   *
   * Обновление size.height, если она меньше выбранного значения.
   * @param height value of the selected height/ значение выбранной высоты
   */
  makeHeight(t) {
    return t > this.size.height && (this.size.height = t), this;
  }
  /**
   * Updating offset.width, if it is larger than the selected value.
   *
   * Обновление offset.width, если она больше выбранного значения.
   * @param width value of the selected width/ значение выбранной ширины
   */
  makeOffsetWidth(t) {
    return t < this.offset.width && (this.offset.width = t), this;
  }
  /**
   * Updating offset.height, if it is larger than the selected value.
   *
   * Обновление offset.height, если она больше выбранного значения.
   * @param height value of the selected height/ значение выбранной высоты
   */
  makeOffsetHeight(t) {
    return t < this.offset.height && (this.offset.height = t), this;
  }
  /**
   * Changes the multiplier value if it is greater than the checked value.
   *
   * Изменяет значение множителя, если оно больше проверяемого значения.
   * @param value values for verification/ значения для проверки
   */
  makeFactorMax(t) {
    return t < this.factorMax && (this.factorMax = t), this;
  }
  /**
   * Restoring the value to its original state.
   *
   * Восстановление значения в изначальное состояние.
   */
  reset() {
    return this.factorMax = 1, this.size = {
      width: 0,
      height: 0
    }, this.offset = {
      width: 7680,
      height: 7680
    }, this;
  }
}
class v {
  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.
   *
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   */
  static isSize() {
    return this.items.find((t) => t.isSize()) !== void 0;
  }
  /**
   * Returns an object with data for calculation by the name of its group.
   *
   * Возвращает объект с данными для вычисления по названию его группы.
   * @param name group name/ название группы
   */
  static get(t) {
    return this.find(t) || this.init(t);
  }
  /**
   * Resets all parameters for all groups.
   *
   * Сбрасывает все параметры для всех групп.
   */
  static reset() {
    this.items.forEach((t) => t.reset());
  }
  /**
   * Search for the ImageCalculation object by the name of the group.
   *
   * Поиск объекта ImageCalculation по названию группы.
   * @param name group name/ название группы
   */
  static find(t) {
    return this.items.find((e) => e.is(t));
  }
  /**
   * Creating a new ImageCalculation object by the name of the group.
   *
   * Создание нового объекта ImageCalculation по названию группы.
   * @param name group name/ название группы
   */
  static init(t) {
    const e = new at(t);
    return this.items.push(e), e;
  }
}
s(v, "items", []);
class f {
  /**
   * Checks if an element is present in the list.
   *
   * Проверяет, присутствует ли элемент в списке.
   * @param item object for working with images/ объект для работы с изображениями
   */
  static is(t) {
    return this.objects.findIndex((e) => e === t) !== -1;
  }
  /**
   * Adding a new element for tracking.
   *
   * Добавление нового элемента для отслеживания.
   * @param item object for working with images/ объект для работы с изображениями
   */
  static add(t) {
    this.is(t) || (this.objects.push(t), this.make());
  }
  /**
   * Removal of the element.
   *
   * Удаления элемента.
   * @param item object for working with images/ объект для работы с изображениями
   */
  static remove(t) {
    const e = this.objects.findIndex((i) => i === t);
    e !== -1 && (this.objects.splice(e, 1), this.cache = []), this.make();
  }
  /**
   * Resets all cached data and rereads scaling for all elements.
   *
   * Обнуляет все кэшированные данные и перечитывает масштабирование для всех элементов.
   */
  static reset() {
    this.cache = [], this.start();
  }
  /**
   * Starts the calculation process or turns it off if there are no active elements in the list.
   *
   * Запускает процесс вычисления или отключает его, если в списке нет активных элементов.
   */
  static make() {
    this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event || (this.event = new U(window, ["scroll-sync"], () => this.start()).start()), this.time || (this.time = !0, requestAnimationFrame(() => {
      this.time = !1, this.start();
    })));
  }
  /**
   * Returns a list of elements that are visible or constantly being calculated.
   *
   * Возвращает список элементов, которые видны или постоянно вычисляются.
   */
  static getItemIdByVisible() {
    return H(this.objectsAdaptive, (t) => t.getId());
  }
  /**
   * Method for starting the calculation of scaling elements in the list.
   *
   * Метод для запуска вычисления масштабирования элементов в списке.
   */
  static start() {
    var t;
    if (this.isAdaptive()) {
      this.makeAdaptive();
      const e = this.getItemIdByVisible();
      this.isCache(e) && (this.cache = e, this.makeSize(), this.makePercent(), this.makeFactorMax());
    } else
      (t = this.event) == null || t.stop();
  }
  /**
   * Updates the list of elements available for calculation. These are the
   * elements that are close to the border of the visible area.
   *
   * Обновляет список доступных для вычисления элементов. Это те элементы,
   * которые близки к границе видимой области.
   */
  static makeAdaptive() {
    this.objectsAdaptive = [], this.objects.forEach((t) => {
      t.make(), t.isBeyond() && this.objectsAdaptive.push(t);
    });
  }
  /**
   * Calculates the dimensions of an element relative to the image size,
   * the size of the element, and its physical location on the image.
   *
   * Вычисляет размеры элемента относительно размера изображения,
   * размера элемента и его физического расположения на изображении.
   */
  static makeSize() {
    v.reset(), this.objectsAdaptive.forEach((t) => {
      const e = t.element.value;
      e && v.get(t.group.value).makeWidth(t.width.value).makeHeight(t.height.value).makeOffsetWidth(e.offsetWidth).makeOffsetHeight(e.offsetHeight);
    });
  }
  /**
   * Calculation of the basic scaling of an element without taking into account other elements.
   *
   * Вычисление базового масштабирования элемента без учета других элементов.
   */
  static makePercent() {
    v.isSize() && this.objectsAdaptive.forEach((t) => {
      const e = t.element.value, i = v.get(t.group.value);
      if (e) {
        const a = i.getWidth(), h = i.getHeight();
        t.setPercent(
          t.width.value * (a ? 1 / a : 0) * (i.getOffsetWidth() / e.offsetWidth),
          t.height.value * (h ? 1 / h : 0) * (i.getOffsetHeight() / e.offsetHeight)
        );
      }
    });
  }
  /**
   * Calculation of the largest element to determine the base size.
   * This parameter is used for scaling other elements,
   * reducing them to the necessary proportion.
   *
   * Вычисление самого большого элемента для определения базового размера.
   * Этот параметр используется для масштабирования других элементов,
   * уменьшая их до нужной пропорции.
   */
  static makeFactorMax() {
    v.isSize() && this.objectsAdaptive.forEach((t) => {
      v.get(t.group.value).makeFactorMax(t.factor.value);
    });
  }
  /**
   * Checks if there is an active element at the moment.
   *
   * Проверяет, есть ли в текущий момент активный элемент.
   */
  static isAdaptive() {
    return !!this.objects.find((t) => t.is());
  }
  /**
   * Checks whether the composition of visible elements has changed.
   *
   * Проверяет, изменился ли состав видимых элементов.
   * @param visible list of indices of visible elements/ список индексов видимых элементов
   */
  static isCache(t) {
    return this.cache.join("|") !== t.join("|");
  }
}
s(f, "objects", []), s(f, "objectsAdaptive", []), s(f, "cache", []), s(f, "event"), s(f, "time");
const rt = "main", j = 512;
class ht {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element image element for scaling/ элемент изображения для масштабирования
   * @param data image data/ данные изображения
   */
  constructor(t, e, i) {
    s(this, "percent", S({
      width: 0,
      height: 0
    })), s(this, "beyond", !1), s(this, "visible", !1), s(this, "active", o(
      () => !!(this.props.adaptive && (this.width.value || this.height.value)) && this.data.isImage()
    )), s(this, "group", o(() => {
      var a;
      return (a = this.props.adaptiveGroup) != null ? a : rt;
    })), s(this, "width", o(() => {
      var a;
      return x((a = this.props.objectWidth) != null ? a : 0);
    })), s(this, "height", o(() => {
      var a, h;
      return x((h = (a = this.props) == null ? void 0 : a.objectHeight) != null ? h : 0);
    })), s(this, "type", o(() => {
      if (this.width.value && this.percent.value.width > 0)
        return "x";
      if (this.height.value && this.percent.value.height > 0)
        return "y";
    })), s(this, "size", o(() => {
      if (this.element.value && this.data.isImage()) {
        const a = this.data.image.value;
        switch (this.type.value) {
          case "x":
            return a.height * (this.element.value.offsetWidth * this.percent.value.width / a.width);
          case "y":
            return a.width * (this.element.value.offsetHeight * this.percent.value.height / a.height);
        }
      }
      return 0;
    })), s(this, "factor", o(() => {
      const a = this.element.value;
      if (a) {
        const h = this.size.value;
        if (this.type.value === "x" && h > a.offsetHeight)
          return a.offsetHeight / h;
        if (this.type.value === "y" && h > a.offsetWidth)
          return a.offsetWidth / h;
      }
      return 1;
    })), this.props = t, this.data = e, this.element = i, B(() => {
      this.is() ? f.add(this) : f.remove(this);
    });
  }
  /**
   * Checks if the element’s conditions are suitable for scaling.
   *
   * Проверяет, подходить ли у элемента условия для масштабирования.
   */
  is() {
    var t;
    return this.active.value && !!((t = this.element.value) != null && t.closest("body"));
  }
  /**
   * Checks for compliance with the group.
   *
   * Проверяет на соответствие группе.
   * @param name name of the checked group/ название проверяемой группы
   */
  isGroup(t) {
    return this.group.value === t;
  }
  /**
   * Is it available for calculation.
   *
   * Доступен ли для вычисления.
   */
  isBeyond() {
    return this.beyond;
  }
  /**
   * Is the element visible.
   *
   * Виден ли элемент.
   */
  isVisible() {
    return this.visible;
  }
  /**
   * Returns the identifier of the element.
   *
   * Возвращает идентификатор элемента.
   */
  getId() {
    return _(this.element.value);
  }
  /**
   * Returns values for the background-size property.
   *
   * Возвращает значения для свойства background-size.
   */
  getBackgroundSize() {
    const t = v.get(this.group.value).getFactorMax();
    switch (this.type.value) {
      case "x":
        return `${100 * this.percent.value.width * t}% auto`;
      case "y":
        return `auto ${100 * this.percent.value.height * t}%`;
    }
    return null;
  }
  /**
   * Size change for calculation.
   *
   * Изменение размера для вычисления.
   * @param width width value/ значение ширины
   * @param height height value/ значение высоты
   */
  setPercent(t, e) {
    return (this.percent.value.width !== t || this.percent.value.height !== e) && (this.percent.value = {
      width: t,
      height: e
    }), this;
  }
  /**
   * Removal of an element from the scaling list.
   *
   * Удаление элемента из списка для масштабирования.
   */
  remove() {
    this.active.value && f.remove(this);
  }
  /**
   * Updating the visibility and activity status of the element.
   *
   * Обновление статуса видимости и активности элемента.
   */
  make() {
    if (this.beyond = !1, this.visible = !1, this.element.value && this.is())
      if (this.props.adaptiveAlways)
        this.beyond = !0, this.visible = !0;
      else {
        const t = this.element.value.getBoundingClientRect();
        this.beyond = !(t.bottom < 0 - j || t.top > window.innerHeight + j), this.visible = !(t.bottom < 0 || t.top > window.innerHeight);
      }
    return this;
  }
}
class ot {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param data image data/ данные изображения
   * @param coordinator object for working with coordinates/ объект для работы с координатами
   * @param adaptive an object for working with adapted scaling/ объект для работы с адаптированным масштабированием
   */
  constructor(t, e, i, a) {
    s(this, "image", o(() => {
      const h = this.imageSrc.value;
      return h ? `url("${h}")` : null;
    })), s(this, "imageSrc", o(() => {
      const h = this.data.image.value;
      switch (typeof h) {
        case "string":
          return h;
        case "object":
          return h.src;
        default:
          return null;
      }
    })), s(this, "size", o(() => {
      if (this.coordinator.is())
        return this.getSizeByCoordinator();
      if (this.adaptive.is()) {
        const h = this.adaptive.getBackgroundSize();
        if (h)
          return h;
      }
      return this.getSizeForItem();
    })), this.props = t, this.data = e, this.coordinator = i, this.adaptive = a;
  }
  /**
   * Checks if the object is an image.
   *
   * Проверяет, является ли объект изображением.
   */
  isImage() {
    return !!this.image.value;
  }
  /**
   * Returns the value for the background-size property.
   *
   * Возвращает значение для свойства background-size.
   * @param width width value/ значение ширины
   * @param height height value/ значение высоты
   */
  getSize(t, e) {
    const i = this.data.image.value;
    return typeof i == "object" ? i.height < i.width ? `auto ${e}` : `${t} auto` : null;
  }
  /**
   * Returns sizes according to the coordinator property.
   *
   * Возвращает размеры по свойству координатора.
   */
  getSizeByCoordinator() {
    const {
      width: t,
      height: e
    } = this.coordinator.getSize();
    return this.getSize(t, e);
  }
  /**
   * Returns the scaling sizes.
   *
   * Возвращает размеры масштабирования.
   */
  getSizeForItem() {
    const t = this.props.size;
    return C(t) ? t.toString().match(/%$/) ? this.getSize(t, t) : t.toString() : null;
  }
}
class nt {
  constructor(t, e, i, a, h) {
    s(this, "lazyInit", S(!1)), s(this, "lazyStatus"), s(this, "is", o(() => !!this.props.tagImg && this.isType())), s(this, "isLazy", o(() => !!this.props.lazy && !this.lazyInit.value)), s(this, "isPicture", o(() => this.is.value && !!this.props.picture)), s(this, "binds", o(
      () => {
        var u;
        const l = {
          key: "img"
        };
        return this.is.value && (l.src = this.background.imageSrc.value, l.alt = (u = this.props.alt) != null ? u : "", l.width = "100%", l.height = "100%", l.style = this.styles.value, this.props.lazy && (l.loading = this.isLazy.value ? "lazy" : "auto"), this.props.srcset && (l.srcset = this.getSrcset())), l;
      }
    )), s(this, "picture", o(() => {
      if (this.props.picture)
        return F(this.props.picture) ? this.props.picture : H(
          this.props.picture,
          (u, l) => ({
            key: l,
            srcset: u,
            media: `(width >= ${l})`
          })
        );
    })), s(this, "styles", o(() => {
      const u = {
        "object-position": `${this.position.x.value} ${this.position.y.value}`,
        "--sys-transform-originX": this.position.x.value,
        "--sys-transform-originY": this.position.y.value
      };
      return this.isSize() && (u["--sys-transform-scale"] = this.getSize()), u;
    })), this.props = t, this.element = e, this.type = i, this.position = a, this.background = h;
    const {
      lazy: m,
      preloadOffset: g
    } = R(t);
    I(
      [m, g, e],
      () => {
        var u;
        this.props.lazy && this.element.value ? this.makeLazy() : (this.lazyInit.value = !1, (u = this.lazyStatus) == null || u.stop(), this.lazyStatus = void 0);
      },
      { immediate: !0 }
    );
  }
  /**
   * Checks if the type is file or image.
   *
   * Проверяет, является ли тип файлом или изображением.
   */
  isType() {
    const t = this.type.item.value;
    return t === n.file || t === n.image;
  }
  /**
   * Checks if the size is contained or cover.
   *
   * Проверяет, является ли размер contain или cover.
   */
  isSize() {
    const t = this.background.size.value;
    return !!(t && t.match("[% ]"));
  }
  /**
   * Returns the value for the transform scale.
   *
   * Возвращает значение для свойства transform scale.
   */
  getSize() {
    var t, e;
    return (e = (t = this.background.size.value) == null ? void 0 : t.replace("auto", "")) == null ? void 0 : e.trim();
  }
  /**
   * Returns the srcset attribute value.
   *
   * Возвращает значение атрибута srcset.
   */
  getSrcset() {
    if (this.props.srcset)
      return typeof this.props.srcset == "string" ? this.props.srcset : Object.entries(this.props.srcset).map(([t, e]) => `${e} ${this.toSrcsetKey(t)}`).join(", ");
  }
  /**
   * Converts the srcset key to a string.
   *
   * Преобразует ключ srcset в строку.
   * @param key key/ ключ
   */
  toSrcsetKey(t) {
    return G(t) ? `${t}w` : String(t);
  }
  /**
   * Initializes lazy loading.
   *
   * Инициализирует ленивую загрузку.
   */
  makeLazy() {
    const t = K(this.element, `${this.props.preloadOffset} 0px`).lazyItemStatus;
    this.lazyStatus = I(t, () => {
      this.lazyInit.value = t.value;
    }, { immediate: !0 });
  }
}
let ut = class {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.ImageAdaptiveItemConstructor class for working with adaptive image item/ класс для работы с адаптивным элементом изображения
   * @param constructors.ImageBackgroundConstructor class for working with image background/ класс для работы с фоном изображения
   * @param constructors.ImageCoordinatorConstructor class for working with image coordinates/ класс для работы с координатами изображения
   * @param constructors.ImageDataConstructor class for working with image data/ класс для работы с данными изображения
   * @param constructors.ImageImgConstructor class for working with image tag/ класс для работы с тегом изображения
   * @param constructors.ImagePositionConstructor class for working with image position/ класс для работы с позицией изображения
   * @param constructors.ImageTypeConstructor class for working with image type/ класс для работы с типом изображения
   */
  constructor(r, t, e, i, a) {
    s(this, "type"), s(this, "data"), s(this, "coordinator"), s(this, "position"), s(this, "adaptiveItem"), s(this, "background"), s(this, "img"), s(this, "tag", o(() => this.img.is.value ? "img" : "span")), s(this, "text", o(() => {
      const c = this.type.item.value;
      if (c === n.pdf) {
        const d = this.data.image.value;
        if (b(d))
          return d;
      }
      const p = this.props.value;
      if (c === n.flagCompressed && p)
        return String(p).replace("f-", "").toUpperCase();
      if (c && b(p) && [
        "filled",
        "outlined",
        "round",
        "sharp",
        "two-tone",
        "material"
      ].indexOf(c) !== -1)
        return p.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
    })), s(this, "classes", o(() => {
      const c = this.type.item.value, p = {
        [`${this.className}--type--${c}`]: c !== void 0,
        [`${this.className}--background`]: this.background.isImage(),
        notranslate: !0
      };
      switch (this.img.is.value && (p[`${this.className}--img`] = !0), c) {
        case "outlined":
          p["material-symbols-outlined"] = !0;
          break;
        case "round":
          p["material-symbols-rounded"] = !0;
          break;
        case "sharp":
          p["material-symbols-sharp"] = !0;
          break;
        case "material":
          p["material-icons"] = !0;
          break;
      }
      return p;
    })), s(this, "styles", o(() => {
      const c = this.props.value;
      if (c)
        switch (this.type.item.value) {
          case n.file:
          case n.image:
            return {
              "background-image": this.background.image.value,
              "background-size": this.background.size.value,
              "background-position-x": this.position.x.value,
              "background-position-y": this.position.y.value
            };
          case n.icon:
            return {
              "background-image": this.background.image.value
            };
          case n.flag:
            return {
              "background-image": this.background.image.value,
              "background-size": "contain"
            };
          case n.public:
            return { "mask-image": this.background.image.value };
          case n.color:
            if (b(c))
              return { "background-color": c };
        }
      return {};
    })), s(this, "binds", o(() => ({
      translate: "no",
      ...k.role("img"),
      ...k.label(this.props.alt),
      ...k.hidden()
    }))), s(this, "valueBinds", o(() => ({
      key: "value",
      data: this.data.image.value
    }))), this.props = r, this.element = t, this.className = e, this.emits = i;
    const {
      ImageAdaptiveItemConstructor: h = ht,
      ImageBackgroundConstructor: m = ot,
      ImageCoordinatorConstructor: g = it,
      ImageDataConstructor: u = et,
      ImageImgConstructor: l = nt,
      ImagePositionConstructor: w = st,
      ImageTypeConstructor: z = Z
    } = a != null ? a : {};
    this.type = new z(r), this.data = new u(r, this.type), this.coordinator = new g(r), this.position = new w(r, this.coordinator), this.adaptiveItem = new h(
      r,
      this.data,
      t
    ), this.background = new m(
      r,
      this.data,
      this.coordinator,
      this.adaptiveItem
    ), this.img = new l(
      this.props,
      t,
      this.type,
      this.position,
      this.background
    ), i && I(this.data.image, (c) => {
      i("load", {
        type: this.type.item.value,
        image: c
      });
    }), O(() => this.adaptiveItem.remove());
  }
};
class lt extends V {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor image item class/ класс элемента изображения
   */
  constructor(t, e, i, a = ut) {
    super(
      t,
      e,
      i
    ), s(this, "item"), s(this, "propsImage", o(() => {
      var h;
      return {
        ...this.getAttrs(),
        ref: this.element,
        key: "image",
        class: (h = this.classes) == null ? void 0 : h.value.main
      };
    })), s(this, "propsMain", o(() => {
      var h;
      return {
        ...this.propsImage.value,
        ...this.item.binds.value,
        style: (h = this.styles) == null ? void 0 : h.value
      };
    })), s(this, "renderPicture", () => {
      const h = this.item.img.picture.value, m = [];
      return h && h.forEach(
        (g) => m.push(y("source", g))
      ), m.push(this.renderImgItem()), y("picture", this.propsImage.value, m);
    }), s(this, "renderImg", () => y("span", this.propsImage.value, this.renderImgItem())), s(this, "renderImgItem", () => y("img", this.item.img.binds.value)), s(this, "renderValue", () => this.item.type.item.value === n.pdf ? y(
      "object",
      this.item.valueBinds.value
    ) : this.item.type.item.value === n.flagCompressed ? y(
      "span",
      { class: `ui-sys-flags ui-sys-flags--${this.item.text.value}` }
    ) : this.item.text.value), this.item = new a(
      this.props,
      this.element,
      this.getName(),
      this.emits
    ), this.init();
  }
  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      type: this.item.type.item,
      data: this.item.data.image
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classes.value
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return this.item.styles.value;
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    return this.item.img.isPicture.value ? this.renderPicture() : this.item.img.is.value ? this.renderImg() : y(
      "span",
      this.propsMain.value,
      this.renderValue()
    );
  }
}
const ct = {
  // :values [!] System label / Системная метка
  size: ["auto", "contain", "cover"]
  // :values [!] System label / Системная метка
}, dt = {
  ...tt
}, pt = /* @__PURE__ */ E({
  name: "D1Image",
  __name: "D1Image",
  props: /* @__PURE__ */ T({
    value: {},
    url: {},
    adaptiveGroup: {},
    adaptiveAlways: { type: Boolean },
    objectWidth: {},
    objectHeight: {},
    coordinator: {},
    x: {},
    y: {},
    tagImg: { type: Boolean },
    srcset: {},
    picture: {},
    alt: {},
    lazy: { type: Boolean },
    preloadOffset: {},
    fetchPriority: {},
    turn: { type: Boolean },
    disabled: { type: Boolean },
    hide: { type: Boolean },
    adaptive: { type: Boolean },
    size: {}
  }, dt),
  emits: ["load"],
  setup(r, { expose: t, emit: e }) {
    const i = e, a = r, h = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-image": !0,
        "d1-image--turn": a.turn,
        "d1-image--disabled": a.disabled,
        "d1-image--hide": a.hide,
        "d1-image--adaptive": a.adaptive,
        [`d1-image--size--${a.size}`]: Y(ct.size, a.size)
        // :classes-values [!] System label / Системная метка
      }
    })), m = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), g = new lt(
      "d1.image",
      a,
      {
        emits: i,
        classes: h,
        styles: m
      }
    ), u = g.render();
    return t(g.expose()), (l, w) => (D(), L(N(u)));
  }
}), ft = pt;
export {
  ft as D,
  pt as _
};
