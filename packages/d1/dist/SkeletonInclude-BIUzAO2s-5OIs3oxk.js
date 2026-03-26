import { computed as r, inject as u, provide as p } from "vue";
import "@dxtmisha/functional";
var _ = Object.defineProperty, g = (a, s, t) => s in a ? _(a, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[s] = t, e = (a, s, t) => g(a, typeof s != "symbol" ? s + "" : s, t);
const l = "skeleton-status";
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
  constructor(s, t, o, i, c, d, k) {
    e(this, "status"), e(this, "classes"), e(this, "isActive", r(() => {
      var h;
      return !!((h = this.status) != null && h.value || this.props.active);
    })), this.props = s, this.refs = t, this.element = o, this.className = i, this.components = c, this.slots = d, this.emits = k, this.status = u(l, void 0), this.classes = n.getClassesList(this.className), p(l, this.isActive);
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
class m {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classDesign design name/ название дизайна
   * @param classesList list of available classes/ список доступных классов
   */
  constructor(s, t, o) {
    e(this, "status", u(l, void 0)), e(this, "classesSkeleton"), e(this, "isSkeleton", r(() => !!(this.status && this.status.value))), e(this, "classes", r(() => {
      const i = {};
      return this.classesList && this.props.isSkeleton && this.classesList.forEach((c) => {
        i[this.classesSkeleton[c]] = !0;
      }), i;
    })), e(this, "binds", r(() => ({
      isSkeleton: this.props.isSkeleton
    }))), this.props = s, this.classesList = o, this.classesSkeleton = n.getClassesListByDesign(t);
  }
}
export {
  m as $,
  n
};
