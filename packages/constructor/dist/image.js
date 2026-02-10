var O = Object.defineProperty;
var W = (a, t, e) => t in a ? O(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var i = (a, t, e) => W(a, typeof t != "symbol" ? t + "" : t, e);
import { computed as o, watchEffect as B, ref as k, toRefs as R, watch as I, onUnmounted as E, h as g } from "vue";
import { isDomRuntime as j, resizeImageByMax as D, isString as f, isFilled as C, Icons as F, isArray as A, EventItem as L, forEach as P, toNumber as S, getElementId as N, isNumber as _, useLazyItemByMarginRef as U, DesignConstructorAbstract as X } from "@dxtmisha/functional";
import { A as z } from "./AriaStaticInclude-CAURwJMb.js";
const K = 1280;
class M {
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
        const s = new Image();
        s.onerror = () => e(void 0), s.onload = () => {
          e({
            image: s,
            src: this.getSRC(s, t),
            width: s.naturalWidth,
            height: s.naturalHeight
          });
        }, (async () => s.src = t instanceof File ? await this.getFileResult(t) : t)();
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
      var s;
      return (s = e == null ? void 0 : e.src) != null ? s : "";
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
      this.isImage(t) ? this.getFileReader(t).then((s) => e(s)) : e("");
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
      const s = new FileReader();
      s.onload = () => e(typeof s.result == "string" ? s.result : ""), s.readAsDataURL(t);
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
  static getSRC(t, e, s = K) {
    var n;
    return j() && (e instanceof File || e === void 0) && (t.naturalHeight > s || t.naturalWidth > s) ? (n = D(t, s)) != null ? n : "" : t.src;
  }
}
const x = "#toolbar=0&scrollbar=1";
class H {
  /**
   * Checks if the file is an image.
   *
   * Проверяет, является ли файл PDF.
   * @param file verified file/ проверяемый файл
   */
  static isPdf(t) {
    return f(t) ? !!t.match(/\.pdf$/i) : j() && !!t.type.match(/\/pdf$/i);
  }
  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
   *
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
   */
  static async get(t) {
    return f(t) ? `${t}${x}` : this.isPdf(t) ? `${await M.getFileReader(t)}${x}` : "";
  }
}
var r = /* @__PURE__ */ ((a) => (a.pdf = "pdf", a.file = "file", a.image = "image", a.flag = "flag", a.flagCompressed = "flag-compressed", a.color = "color", a.public = "public", a.filled = "filled", a.outlined = "outlined", a.round = "round", a.sharp = "sharp", a.twoTone = "two-tone", a.material = "material", a.icon = "icon", a))(r || {});
class Y {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    /**
     * Get the image type.
     *
     * Получения тип изображения.
     */
    i(this, "item", o(() => {
      const t = this.props.value;
      if (t instanceof File || C(t)) {
        if (H.isPdf(t))
          return r.pdf;
        if (t instanceof File)
          return r.file;
        if (t.match(/\//))
          return r.image;
        if (t.match(/^#/))
          return r.color;
        if (t.match(/^@/))
          return r.public;
        if (t.match(/^\$/))
          return r.material;
        if (t.match(/^flag-[a-z]{2}$/))
          return r.flag;
        if (t.match(/^f-[a-z]{2}$/))
          return r.flagCompressed;
        const e = t.match(/^(outlined|round|sharp|material)-/);
        return e ? e[1] : F.is(t) ? r.public : r.outlined;
      }
    }));
    this.props = t;
  }
}
const ot = {
  adaptiveGroup: "basic",
  preloadOffset: "1024px"
};
class q {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type image type/ тип изображения
   */
  constructor(t, e) {
    /**
     * Returns images.
     *
     * Возвращает изображения.
     */
    i(this, "image", k());
    this.props = t, this.type = e, B(async () => {
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
        case r.pdf:
          return await H.get(t);
        case r.image:
        case r.file:
          try {
            return this.props.lazy ? this.props.value : await M.createImage(t);
          } catch (e) {
            console.error("ImageData.initImage: ", t);
          }
          break;
        case r.public:
        case r.icon:
        case r.flag:
          if (f(t))
            return await F.get(t, this.props.url);
          break;
      }
  }
}
class G {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    /**
     * Returns coordinates.
     *
     * Возвращает координаты.
     */
    i(this, "coordinator", o(() => {
      var t, e, s, n, u, m, p, d, v, y, b, w;
      if (this.is()) {
        const h = this.props.coordinator;
        switch (h.length) {
          case 1:
            return [
              (t = h[0]) != null ? t : 0,
              (e = h[0]) != null ? e : 0,
              (s = h[0]) != null ? s : 0,
              (n = h[0]) != null ? n : 0
            ];
          case 2:
            return [
              (u = h[0]) != null ? u : 0,
              (m = h[1]) != null ? m : 0,
              (p = h[0]) != null ? p : 0,
              (d = h[1]) != null ? d : 0
            ];
          case 3:
            return [
              (v = h[0]) != null ? v : 0,
              (y = h[1]) != null ? y : 0,
              (b = h[2]) != null ? b : 0,
              (w = h[1]) != null ? w : 0
            ];
          case 4:
            return h;
        }
      }
      return [0, 0, 0, 0];
    }));
    /**
     * Returns the sizes for the background-position property by coordinates.
     *
     * Возвращает размеры для свойства background-position по координатам.
     */
    i(this, "size", o(() => {
      const t = this.coordinator.value;
      return {
        width: 100 - t[1] - t[3],
        height: 100 - t[2] - t[0]
      };
    }));
    this.props = t;
  }
  /**
   * Checks if there are coordinates for calculation.
   *
   * Проверяет, есть ли координаты для вычисления.
   */
  is() {
    const t = this.props.coordinator;
    return A(t) && t.length > 0 && t.length < 5;
  }
  /**
   * Returns the values for the background property.
   *
   * Возвращает значения для свойства background.
   */
  getSize() {
    const t = this.size.value, e = t.width === 0 ? 100 : t.width, s = t.height === 0 ? 100 : t.height;
    return {
      width: `${100 / e * 100}%`,
      height: `${100 / s * 100}%`
    };
  }
}
class Z {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param coordinator coordinates for margins/ координаты для отступов
   */
  constructor(t, e) {
    /**
     * Returns the position on the left.
     *
     * Возвращает позицию слева.
     */
    i(this, "x", o(() => {
      var t;
      return this.coordinator.is() ? `${this.coordinator.coordinator.value[3] + this.coordinator.size.value.width / 2}%` : ((t = this.props.x) == null ? void 0 : t.toString()) || "center";
    }));
    /**
     * Returns the position on the top.
     *
     * Возвращает позицию сверху.
     */
    i(this, "y", o(() => {
      var t;
      return this.coordinator.is() ? `${this.coordinator.coordinator.value[0] + this.coordinator.size.value.height / 2}%` : ((t = this.props.y) == null ? void 0 : t.toString()) || "center";
    }));
    this.props = t, this.coordinator = e;
  }
}
class J {
  /**
   * Constructor
   * @param name group name/ название группы
   */
  constructor(t) {
    i(this, "factorMax", 1);
    i(this, "size", {
      width: 0,
      height: 0
    });
    i(this, "offset", {
      width: 7680,
      height: 7680
    });
    this.name = t;
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
class c {
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
    const e = new J(t);
    return this.items.push(e), e;
  }
}
i(c, "items", []);
class l {
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
    const e = this.objects.findIndex((s) => s === t);
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
    this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event || (this.event = new L(window, ["scroll-sync"], () => this.start()).start()), this.time || (this.time = !0, requestAnimationFrame(() => {
      this.time = !1, this.start();
    })));
  }
  /**
   * Returns a list of elements that are visible or constantly being calculated.
   *
   * Возвращает список элементов, которые видны или постоянно вычисляются.
   */
  static getItemIdByVisible() {
    return P(this.objectsAdaptive, (t) => t.getId());
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
    c.reset(), this.objectsAdaptive.forEach((t) => {
      const e = t.element.value;
      e && c.get(t.group.value).makeWidth(t.width.value).makeHeight(t.height.value).makeOffsetWidth(e.offsetWidth).makeOffsetHeight(e.offsetHeight);
    });
  }
  /**
   * Calculation of the basic scaling of an element without taking into account other elements.
   *
   * Вычисление базового масштабирования элемента без учета других элементов.
   */
  static makePercent() {
    c.isSize() && this.objectsAdaptive.forEach((t) => {
      const e = t.element.value, s = c.get(t.group.value);
      if (e) {
        const n = s.getWidth(), u = s.getHeight();
        t.setPercent(
          t.width.value * (n ? 1 / n : 0) * (s.getOffsetWidth() / e.offsetWidth),
          t.height.value * (u ? 1 / u : 0) * (s.getOffsetHeight() / e.offsetHeight)
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
    c.isSize() && this.objectsAdaptive.forEach((t) => {
      c.get(t.group.value).makeFactorMax(t.factor.value);
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
i(l, "objects", []), i(l, "objectsAdaptive", []), i(l, "cache", []), i(l, "event"), i(l, "time");
const Q = "main", $ = 512;
class T {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element image element for scaling/ элемент изображения для масштабирования
   * @param data image data/ данные изображения
   */
  constructor(t, e, s) {
    i(this, "percent", k({
      width: 0,
      height: 0
    }));
    i(this, "beyond", !1);
    i(this, "visible", !1);
    /**
     * Is the element active for size alignment.
     *
     * Активен ли элемент для выравнивания размера.
     */
    i(this, "active", o(
      () => !!(this.props.adaptive && (this.width.value || this.height.value)) && this.data.isImage()
    ));
    /**
     * Returns the name of the group.
     *
     * Возвращает название группы.
     */
    i(this, "group", o(() => {
      var t;
      return (t = this.props.adaptiveGroup) != null ? t : Q;
    }));
    /**
     * Returns the physical width of the object.
     *
     * Возвращает физическую ширину объекта.
     */
    i(this, "width", o(() => {
      var t;
      return S((t = this.props.objectWidth) != null ? t : 0);
    }));
    /**
     * Returns the physical height of the object.
     *
     * Возвращает физическую высоту объекта.
     */
    i(this, "height", o(() => {
      var t, e;
      return S((e = (t = this.props) == null ? void 0 : t.objectHeight) != null ? e : 0);
    }));
    /**
     * Returns the axis for scaling.
     *
     * Возвращает ось для масштабирования.
     */
    i(this, "type", o(() => {
      if (this.width.value && this.percent.value.width > 0)
        return "x";
      if (this.height.value && this.percent.value.height > 0)
        return "y";
    }));
    /**
     * Calculation of the base size of the image to determine how to scale the image.
     *
     * Вычисление базового размера изображения, чтобы определить, как надо масштабировать изображение.
     */
    i(this, "size", o(() => {
      if (this.element.value && this.data.isImage()) {
        const t = this.data.image.value;
        switch (this.type.value) {
          case "x":
            return t.height * (this.element.value.offsetWidth * this.percent.value.width / t.width);
          case "y":
            return t.width * (this.element.value.offsetHeight * this.percent.value.height / t.height);
        }
      }
      return 0;
    }));
    /**
     * Multiplier for determining the level of image scaling relative to other elements.
     *
     * Множитель для определения уровня масштабирования изображения относительно других элементов.
     */
    i(this, "factor", o(() => {
      const t = this.element.value;
      if (t) {
        const e = this.size.value;
        if (this.type.value === "x" && e > t.offsetHeight)
          return t.offsetHeight / e;
        if (this.type.value === "y" && e > t.offsetWidth)
          return t.offsetWidth / e;
      }
      return 1;
    }));
    this.props = t, this.data = e, this.element = s, B(() => {
      this.is() ? l.add(this) : l.remove(this);
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
    return N(this.element.value);
  }
  /**
   * Returns values for the background-size property.
   *
   * Возвращает значения для свойства background-size.
   */
  getBackgroundSize() {
    const t = c.get(this.group.value).getFactorMax();
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
    this.active.value && l.remove(this);
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
        this.beyond = !(t.bottom < 0 - $ || t.top > window.innerHeight + $), this.visible = !(t.bottom < 0 || t.top > window.innerHeight);
      }
    return this;
  }
}
class V {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param data image data/ данные изображения
   * @param coordinator object for working with coordinates/ объект для работы с координатами
   * @param adaptive an object for working with adapted scaling/ объект для работы с адаптированным масштабированием
   */
  constructor(t, e, s, n) {
    /**
     * Returns values for the background-image property.
     *
     * Возвращает значения для свойства background-image.
     */
    i(this, "image", o(() => {
      const t = this.imageSrc.value;
      return t ? `url("${t}")` : null;
    }));
    /**
     * Returns the image source/ Возвращает источник изображения
     */
    i(this, "imageSrc", o(() => {
      const t = this.data.image.value;
      switch (typeof t) {
        case "string":
          return t;
        case "object":
          return t.src;
        default:
          return null;
      }
    }));
    /**
     * Returns values for the background property.
     *
     * Возвращает значения для свойства background.
     */
    i(this, "size", o(() => {
      if (this.coordinator.is())
        return this.getSizeByCoordinator();
      if (this.adaptive.is()) {
        const t = this.adaptive.getBackgroundSize();
        if (t)
          return t;
      }
      return this.getSizeForItem();
    }));
    this.props = t, this.data = e, this.coordinator = s, this.adaptive = n;
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
    const s = this.data.image.value;
    return typeof s == "object" ? s.height < s.width ? `auto ${e}` : `${t} auto` : null;
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
class tt {
  constructor(t, e, s, n, u) {
    i(this, "lazyInit", k(!1));
    i(this, "lazyStatus");
    /**
     * Determines whether to use the img tag/ Определяет, использовать ли тег img
     */
    i(this, "is", o(() => !!this.props.tagImg && this.isType()));
    /**
     * Determines whether lazy loading is enabled/ Определяет, включена ли ленивя загрузка
     */
    i(this, "isLazy", o(() => !!this.props.lazy && !this.lazyInit.value));
    /**
     * Determines whether to use the picture tag/ Определяет, использовать ли тег picture
     */
    i(this, "isPicture", o(() => this.is.value && !!this.props.picture));
    /**
     * Calculates all properties for binding to the element/
     * Вычисляет все свойства для привязки к элементу
     */
    i(this, "binds", o(
      () => {
        var e;
        const t = {
          key: "img"
        };
        return this.is.value && (t.src = this.background.imageSrc.value, t.alt = (e = this.props.alt) != null ? e : "", t.width = "100%", t.height = "100%", t.style = this.styles.value, this.props.lazy && (t.loading = this.isLazy.value ? "lazy" : "auto"), this.props.srcset && (t.srcset = this.getSrcset())), t;
      }
    ));
    /**
     * Calculates the picture sources for different resolutions/
     * Вычисляет источники picture для разных разрешений
     */
    i(this, "picture", o(() => {
      if (this.props.picture)
        return A(this.props.picture) ? this.props.picture : P(
          this.props.picture,
          (t, e) => ({
            key: e,
            srcset: t,
            media: `(width >= ${e})`
          })
        );
    }));
    /**
     * Calculates styles for binding to the element.
     *
     * Вычисляет стили для привязки к элементу.
     */
    i(this, "styles", o(() => {
      const t = {
        "object-position": `${this.position.x.value} ${this.position.y.value}`,
        "--sys-transform-originX": this.position.x.value,
        "--sys-transform-originY": this.position.y.value
      };
      return this.isSize() && (t["--sys-transform-scale"] = this.getSize()), t;
    }));
    this.props = t, this.element = e, this.type = s, this.position = n, this.background = u;
    const {
      lazy: m,
      preloadOffset: p
    } = R(t);
    I(
      [m, p, e],
      () => {
        var d;
        this.props.lazy && this.element.value ? this.makeLazy() : (this.lazyInit.value = !1, (d = this.lazyStatus) == null || d.stop(), this.lazyStatus = void 0);
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
    return t === r.file || t === r.image;
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
    return _(t) ? `${t}w` : String(t);
  }
  /**
   * Initializes lazy loading.
   *
   * Инициализирует ленивую загрузку.
   */
  makeLazy() {
    const t = U(this.element, `${this.props.preloadOffset} 0px`).lazyItemStatus;
    this.lazyStatus = I(t, () => {
      this.lazyInit.value = t.value;
    }, { immediate: !0 });
  }
}
let et = class {
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
  constructor(t, e, s, n, u) {
    i(this, "type");
    i(this, "data");
    i(this, "coordinator");
    i(this, "position");
    i(this, "adaptiveItem");
    i(this, "background");
    i(this, "img");
    /**
     * Determines the tag to use/ Определяет используемый тег
     */
    i(this, "tag", o(() => this.img.is.value ? "img" : "span"));
    /**
     * Values for the text. Text is used for the type of icon that works as a background.
     *
     * Значения для текста. Текст используется для типа иконки, который работает как фон.
     */
    i(this, "text", o(() => {
      const t = this.type.item.value;
      if (t === r.pdf) {
        const s = this.data.image.value;
        if (f(s))
          return s;
      }
      const e = this.props.value;
      if (t === r.flagCompressed && e)
        return String(e).replace("f-", "").toUpperCase();
      if (t && f(e) && [
        "filled",
        "outlined",
        "round",
        "sharp",
        "two-tone",
        "material"
      ].indexOf(t) !== -1)
        return e.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
    }));
    /**
     * Values for the class.
     *
     * Значения для класса.
     */
    i(this, "classes", o(() => {
      const t = this.type.item.value, e = {
        [`${this.className}--type--${t}`]: t !== void 0,
        [`${this.className}--background`]: this.background.isImage(),
        notranslate: !0
      };
      switch (this.img.is.value && (e[`${this.className}--img`] = !0), t) {
        case "outlined":
          e["material-symbols-outlined"] = !0;
          break;
        case "round":
          e["material-symbols-rounded"] = !0;
          break;
        case "sharp":
          e["material-symbols-sharp"] = !0;
          break;
        case "material":
          e["material-icons"] = !0;
          break;
      }
      return e;
    }));
    /**
     * Calculates all properties for the style of the element/
     * Вычисляет все свойства для стиля элемента
     */
    i(this, "styles", o(() => {
      const t = this.props.value;
      if (t)
        switch (this.type.item.value) {
          case r.file:
          case r.image:
            return {
              "background-image": this.background.image.value,
              "background-size": this.background.size.value,
              "background-position-x": this.position.x.value,
              "background-position-y": this.position.y.value
            };
          case r.icon:
            return {
              "background-image": this.background.image.value
            };
          case r.flag:
            return {
              "background-image": this.background.image.value,
              "background-size": "contain"
            };
          case r.public:
            return { "mask-image": this.background.image.value };
          case r.color:
            if (f(t))
              return { "background-color": t };
        }
      return {};
    }));
    /**
     * Computed bindings for the image element.
     *
     * Вычисляемые привязки для элемента изображения.
     */
    i(this, "binds", o(() => ({
      translate: "no",
      ...z.role("img"),
      ...z.label(this.props.alt),
      ...z.hidden()
    })));
    /**
     * Bindings for the image value.
     *
     * Привязки для значения изображения.
     */
    i(this, "valueBinds", o(() => ({
      key: "value",
      data: this.data.image.value
    })));
    this.props = t, this.element = e, this.className = s, this.emits = n;
    const {
      ImageAdaptiveItemConstructor: m = T,
      ImageBackgroundConstructor: p = V,
      ImageCoordinatorConstructor: d = G,
      ImageDataConstructor: v = q,
      ImageImgConstructor: y = tt,
      ImagePositionConstructor: b = Z,
      ImageTypeConstructor: w = Y
    } = u != null ? u : {};
    this.type = new w(t), this.data = new v(t, this.type), this.coordinator = new d(t), this.position = new b(t, this.coordinator), this.adaptiveItem = new m(
      t,
      this.data,
      e
    ), this.background = new p(
      t,
      this.data,
      this.coordinator,
      this.adaptiveItem
    ), this.img = new y(
      this.props,
      e,
      this.type,
      this.position,
      this.background
    ), n && I(this.data.image, (h) => {
      n("load", {
        type: this.type.item.value,
        image: h
      });
    }), E(() => this.adaptiveItem.remove());
  }
};
class ht extends X {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor image item class/ класс элемента изображения
   */
  constructor(e, s, n, u = et) {
    super(
      e,
      s,
      n
    );
    i(this, "item");
    /**
     * Properties for the image tag.
     *
     * Свойства для тега image.
     */
    i(this, "propsImage", o(() => {
      var e;
      return {
        ...this.getAttrs(),
        ref: this.element,
        key: "image",
        class: (e = this.classes) == null ? void 0 : e.value.main
      };
    }));
    /**
     * Main properties.
     *
     * Основные свойства.
     */
    i(this, "propsMain", o(() => {
      var e;
      return {
        ...this.propsImage.value,
        ...this.item.binds.value,
        style: (e = this.styles) == null ? void 0 : e.value
      };
    }));
    /**
     * Rendering the picture tag.
     *
     * Рендеринг тега picture.
     */
    i(this, "renderPicture", () => {
      const e = this.item.img.picture.value, s = [];
      return e && e.forEach(
        (n) => s.push(g("source", n))
      ), s.push(this.renderImgItem()), g("picture", this.propsImage.value, s);
    });
    /**
     * Rendering the img tag.
     *
     * Рендеринг тега img.
     */
    i(this, "renderImg", () => g("span", this.propsImage.value, this.renderImgItem()));
    /**
     * Rendering the img item.
     *
     * Рендеринг элемента img.
     */
    i(this, "renderImgItem", () => g("img", this.item.img.binds.value));
    /**
     * Rendering the value for the component.
     *
     * Рендеринг значения для компонента.
     */
    i(this, "renderValue", () => this.item.type.item.value === r.pdf ? g(
      "object",
      this.item.valueBinds.value
    ) : this.item.type.item.value === r.flagCompressed ? g(
      "span",
      { class: `ui-sys-flags ui-sys-flags--${this.item.text.value}` }
    ) : this.item.text.value);
    this.item = new u(
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
    return this.item.img.isPicture.value ? this.renderPicture() : this.item.img.is.value ? this.renderImg() : g(
      "span",
      this.propsMain.value,
      this.renderValue()
    );
  }
}
export {
  et as Image,
  ht as ImageDesign,
  r as ImageTypeValue,
  ot as defaultsImage
};
