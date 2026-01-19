var h = Object.defineProperty;
var a = (o, e, s) => e in o ? h(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s;
var n = (o, e, s) => a(o, typeof e != "symbol" ? e + "" : e, s);
import { ref as c, computed as r } from "vue";
import { toBind as m, getRef as f } from "@dxtmisha/functional";
class T {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается при срабатывании события
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(e, s, t, i, p, l) {
    /** Reference to MotionTransform element expose/ Ссылка на expose элемента MotionTransform */
    n(this, "element", c());
    /** Computed bindings for MotionTransform/ Вычисляемые привязки для MotionTransform */
    n(this, "binds", r(() => {
      var s, t;
      return {
        ...m(
          (s = f(this.extra)) != null ? s : {},
          (t = this.props.motionTransformAttrs) != null ? t : {}
        ),
        open: this.props.open,
        clickOpen: this.props.clickOpen,
        autoClose: this.props.autoClose
      };
    }));
    /**
     * Expose helpers for MotionTransform state and actions/
     * Вспомогательные методы expose для состояния и действий MotionTransform
     */
    n(this, "expose", {
      open: r(() => {
        var e;
        return !!((e = this.element.value) != null && e.open);
      }),
      isShow: r(() => {
        var e;
        return !!((e = this.element.value) != null && e.isShow);
      }),
      setOpen: async (e) => {
        var s;
        return (s = this.element.value) == null ? void 0 : s.setOpen(e);
      },
      toOpen: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toOpen();
      },
      toClose: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toClose();
      },
      toggle: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toggle();
      },
      motionTransformElement: this.element
    });
    /**
     * Emits 'transform' event upward/
     * Поднимает событие 'transform' наверх
     * @param event native event/ нативное событие
     * @param options payload/ параметры события
     */
    n(this, "onTransform", (e, s) => {
      var t, i;
      (t = this.emits) == null || t.call(this, "transform", e, s), (i = this.emits) == null || i.call(this, "transformLite", s);
    });
    /**
     * Render the MotionTransform component with slots/
     * Рендер компонента MotionTransform со слотами
     * @param slotsChildren slots passed to the component/ слоты, передаваемые компоненту
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    n(this, "render", (e, s) => this.components ? this.components.render(
      "motionTransform",
      {
        onTransform: this.onTransform,
        ...m(
          s != null ? s : {},
          this.binds.value
        ),
        ref: this.element
      },
      e,
      this.index
    ) : []);
    this.props = e, this.className = s, this.components = t, this.emits = i, this.extra = p, this.index = l;
  }
}
export {
  T as M
};
