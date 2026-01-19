var d = Object.defineProperty;
var k = (i, s, t) => s in i ? d(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var e = (i, s, t) => k(i, typeof s != "symbol" ? s + "" : s, t);
import { inject as c, provide as p, computed as o } from "vue";
import "@dxtmisha/functional";
const r = "skeleton-status";
class n {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(s, t, a, l, h, u, _) {
    e(this, "status");
    /**
     * Returns the list of available classes.
     *
     * Возвращает список доступных классов для текуший элемента.
     */
    e(this, "classes");
    /**
     * Checks if the loading mode is enabled.
     *
     * Проверяет, включен ли режим загрузки.
     */
    e(this, "isActive", o(() => {
      var s;
      return !!((s = this.status) != null && s.value || this.props.active);
    }));
    this.props = s, this.refs = t, this.element = a, this.className = l, this.components = h, this.slots = u, this.emits = _, this.status = c(r, void 0), this.classes = n.getClassesList(this.className), p(r, this.isActive);
  }
  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @param className class name/ название класса
   */
  static getClassesList(s) {
    return {
      classText: `${s}__text`,
      classTextVariant: `${s}__textVariant`,
      classBackground: `${s}__background`,
      classBackgroundAfter: `${s}__backgroundAfter`,
      classBackgroundBefore: `${s}__backgroundBefore`,
      classBackgroundVariant: `${s}__backgroundVariant`,
      classBorder: `${s}__border`,
      classBorderVariant: `${s}__borderVariant`,
      classNone: `${s}__none`
    };
  }
  /**
   * Returns a list of available classes by design name.
   *
   * Возвращает список доступных классов по названию дизайна.
   * @param design design name/ названия дизайна
   */
  static getClassesListByDesign(s) {
    return this.getClassesList(`${s}-skeleton`);
  }
}
class $ {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classDesign design name/ название дизайна
   * @param classesList list of available classes/ список доступных классов
   */
  constructor(s, t, a) {
    /**
     * Skeleton display states/ Состояния отображения Skeleton
     */
    e(this, "status", c(r, void 0));
    /**
     * A list of available classes for the Skeleton/ Список доступных классов для Skeleton
     */
    e(this, "classesSkeleton");
    /**
     * Indicates whether the Skeleton status is enabled/ Указывает, включён ли статус Skeleton
     */
    e(this, "isSkeleton", o(() => !!(this.status && this.status.value)));
    /**
     * Returns the available list for the skeleton/ Возвращает доступный список для скелетона
     */
    e(this, "classes", o(() => {
      const s = {};
      return this.classesList && this.props.isSkeleton && this.classesList.forEach((t) => {
        s[this.classesSkeleton[t]] = !0;
      }), s;
    }));
    /** Values for the skeleton/ Значения для скелетона */
    e(this, "binds", o(() => ({
      isSkeleton: this.props.isSkeleton
    })));
    this.props = s, this.classesList = a, this.classesSkeleton = n.getClassesListByDesign(t);
  }
}
export {
  $ as S,
  n as a
};
