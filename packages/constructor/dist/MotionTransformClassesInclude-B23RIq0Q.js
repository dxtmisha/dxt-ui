var r = Object.defineProperty;
var a = (t, e, i) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var s = (t, e, i) => a(t, typeof e != "symbol" ? e + "" : e, i);
import { computed as c } from "vue";
import { getElementId as o } from "@dxtmisha/functional";
const d = "--sys-type-body";
class n {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element window element/ элемент окна
   * @param elementContext substrate element/ элемент подложка
   * @param className class name/ название класса
   */
  constructor(e, i, h, l) {
    s(this, "id", o());
    s(this, "idControl", `${this.id}-control`);
    s(this, "idBody", `${this.id}-body`);
    s(this, "classes");
    s(this, "style");
    /** Checks if the element exists/ Проверяет, есть ли элемент */
    s(this, "is", c(() => !!this.element.value));
    this.props = e, this.element = i, this.elementContext = h, this.className = l, this.classes = n.getClassesList(l), this.style = {
      top: `--${this.className}-sys-top`,
      left: `--${this.className}-sys-left`,
      height: `--${this.className}-sys-height`,
      scale: `--${this.className}-sys-scale`,
      contextWidth: `--${this.className}-sys-context-width`,
      contextHeight: `--${this.className}-sys-context-height`,
      headWidth: `--${this.className}-sys-head-width`,
      headHeight: `--${this.className}-sys-head-height`,
      headScale: `--${this.className}-sys-head-scale`,
      bodyHeight: `--${this.className}-sys-body-height`
    };
  }
  /**
   * Checks if the click event is prohibited.
   *
   * Проверяет, запрещено ли событие клика.
   * @param target selected element/ выбранный элемент
   */
  isClick(e) {
    return !!(e.closest(`.${this.classes.click}`) || !e.closest(`.${this.classes.none}`));
  }
  /**
   * Checks if the click event is prohibited in the global area.
   *
   * Проверяет, запрещено ли событие клика в глобальной области.
   * @param target selected element/ выбранный элемент
   */
  isClickGlobal(e) {
    return !e.closest(`.${this.classes.noneGlobal}`);
  }
  /**
   * Checks if the window needs to be closed on click.
   *
   * Проверяет, нужно ли закрыть окно при клике.
   * @param target selected element/ выбранный элемент
   */
  isClose(e) {
    return !!e.closest(`${this.getId()} .${this.classes.close}`);
  }
  /**
   * Checks if the element is outside the body.
   *
   * Проверяет, является ли элемент за предел тела.
   * @param target selected element/ выбранный элемент
   */
  isOutside(e) {
    return !e.closest(this.getId());
  }
  /**
   * Checks if the element needs to be ignored.
   *
   * Проверяет, нужно ли игнорировать элемент.
   * @param target selected element/ выбранный элемент
   */
  isIgnore(e) {
    return !(this.props.ignore && e.closest(o(this.props.ignore, ""))) && !(this.props.ignoreSelector && e.closest(this.props.ignoreSelector));
  }
  /**
   * Is the animation for slide changes enabled.
   *
   * Включено ли анимация на изменения слайда.
   */
  isAnimation() {
    return !!(this.elementContext.value && this.props.animationShow);
  }
  /**
   * Is window mode enabled.
   *
   * Включен ли режим окна.
   */
  isWindow() {
    return !!(this.element.value && getComputedStyle(this.element.value).getPropertyValue(d) === '"--WINDOW--"');
  }
  /**
   * Checks whether the title needs to be left.
   *
   * Проверяет, надо ли оставить заголовок.
   */
  isSection() {
    return !!this.props.section;
  }
  /**
   * Returns the main element.
   *
   * Возвращает главного элемента.
   */
  getElement() {
    return this.element.value;
  }
  /**
   * Returns the context element.
   *
   * Возвращает элемент контекста.
   */
  getElementContext() {
    return this.elementContext.value;
  }
  /**
   * Returns the title element.
   *
   * Возвращает элемент заголовка.
   */
  getElementHead() {
    var e;
    return ((e = this.getElement()) == null ? void 0 : e.querySelector(`.${this.className}__head`)) || void 0;
  }
  /**
   * Returns the body element.
   *
   * Возвращает элемент тела.
   */
  getElementBody() {
    var e;
    return ((e = this.getElement()) == null ? void 0 : e.querySelector(`.${this.className}__body`)) || void 0;
  }
  /**
   * Returns the identifier.
   *
   * Возвращает идентификатор.
   */
  getId() {
    return `#${o(this.element.value)}`;
  }
  /**
   * Returns the sizes of elements.
   *
   * Возвращает размеры элементов.
   */
  getRect() {
    var e;
    return (e = this.getElementContext()) == null ? void 0 : e.getBoundingClientRect();
  }
  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @param className class name/ название класса
   */
  static getClassesList(e) {
    return {
      show: `${e}--show`,
      open: `${e}--open`,
      window: `${e}--window`,
      click: `${e}--click`,
      close: `${e}--close`,
      none: `${e}--none`,
      noneGlobal: `${e}--noneGlobal`
    };
  }
  /**
   * Returns a list of available classes by design name.
   *
   * Возвращает список доступных классов по названию дизайна.
   * @param design design name/ названия дизайна
   */
  static getClassesListByDesign(e) {
    return this.getClassesList(`${e}-motionTransform`);
  }
}
class $ {
  /**
   * Constructor
   * @param design design name/ название дизайна
   */
  constructor(e) {
    this.design = e;
  }
  /**
   * Returns list of MotionTransform classes for the specified design.
   *
   * Возвращает список классов MotionTransform для указанного дизайна.
   */
  get() {
    return n.getClassesListByDesign(this.design);
  }
  /**
   * Returns an object with MotionTransform classes under classesMotionTransform key.
   *
   * Возвращает объект с классами MotionTransform под ключом classesMotionTransform.
   */
  getObject() {
    return {
      classesMotionTransform: this.get()
    };
  }
}
export {
  $ as M,
  d as _,
  n as a
};
