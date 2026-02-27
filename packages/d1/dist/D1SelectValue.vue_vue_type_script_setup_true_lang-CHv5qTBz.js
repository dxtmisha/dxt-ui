import { h as b, computed as h, defineComponent as g, openBlock as C, createBlock as y, unref as w, mergeDefaults as D } from "vue";
import { DesignConstructorAbstract as k, isFilled as S, toBinds as _ } from "@dxtmisha/functional";
import { h as x } from "./EnabledInclude-B9oXYBtR-CUbxFX6i.js";
import { m as B } from "./D1Icon.vue_vue_type_script_setup_true_lang-BINcl8rE.js";
import { y as $ } from "./WindowClassesInclude-B56usxgx-Y5bmzXSo.js";
import { D as A } from "./index-Axh1wfp9.js";
var E = Object.defineProperty, N = (r, t, n) => t in r ? E(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n, i = (r, t, n) => N(r, typeof t != "symbol" ? t + "" : t, n);
class P {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.WindowClassesConstructor class for working with window classes/ класс для работы с классами окна
   */
  constructor(t, n, c, a, e, s, l, o, p) {
    i(this, "enabled"), i(this, "event"), i(this, "window"), i(this, "isPlaceholder", h(
      () => !S(this.props.value) && !!this.props.placeholder
    )), i(this, "iconTrailing", h(() => {
      if (this.enabled.isEnabled.value)
        return {
          icon: this.props.iconCancel,
          dynamic: !0,
          class: [
            `${this.className}__trailing`,
            this.window.get().controlStatic
          ]
        };
    })), i(this, "classes", h(() => ({
      [`${this.className}--placeholder`]: this.isPlaceholder.value,
      [`${this.className}--multiple`]: !!this.props.multiple
    }))), i(this, "onClick", (u, f) => {
      u.preventDefault(), u.stopPropagation(), this.event.onClick(u, f);
    }), this.props = t, this.refs = n, this.element = c, this.classDesign = a, this.className = e, this.components = s, this.slots = l, this.emits = o;
    const {
      EnabledConstructor: m = x,
      EventConstructor: d = B,
      WindowClassesConstructor: v = $
    } = p != null ? p : {};
    this.enabled = new m(this.props), this.event = new d(
      this.props,
      this.enabled,
      this.emits
    ), this.window = new v(a);
  }
}
const T = {};
class V extends k {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor select value item class/ класс элемента значения выбора
   */
  constructor(t, n, c, a = P) {
    super(
      t,
      n,
      c
    ), i(this, "item"), i(this, "renderData", () => {
      var e, s, l;
      if (this.item.isPlaceholder.value)
        return [String(this.props.placeholder)];
      if (this.props.value) {
        if (this.props.multiple)
          return this.renderList();
        const o = (l = (e = this.props.value[0]) == null ? void 0 : e.label) != null ? l : (s = this.props.value[0]) == null ? void 0 : s.value;
        if (o)
          return [String(o)];
      }
      return [];
    }), i(this, "renderList", () => {
      var e;
      const s = [];
      return (e = this.props.value) == null || e.forEach((l) => {
        const o = this.renderItem(l);
        o ? s.push(o) : s.push(l.label);
      }), s;
    }), i(this, "renderItem", (e) => {
      var s;
      return this.components.renderOne(
        "chip",
        _(
          this.props.chipAttrs,
          {
            class: (s = this.classes) == null ? void 0 : s.value.item,
            icon: this.props.iconShow && e.icon ? e.icon : void 0,
            iconTrailing: this.item.iconTrailing.value,
            label: e.label,
            "data-value": e.index,
            readonly: !0,
            disabled: this.props.disabled,
            value: e.value,
            detail: e.detail,
            onClick: this.item.onClick
          }
        ),
        void 0,
        e.index
      );
    }), this.item = new a(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init();
  }
  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classes.value,
      // :classes [!] System label / Системная метка
      item: this.getSubClass("item"),
      trailing: this.getSubClass("trailing")
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var t;
    return b(
      "div",
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main
      },
      this.renderData()
    );
  }
}
const I = {
  ...T,
  chipAttrs: {
    size: "sm"
  },
  iconCancel: "close_small"
}, W = /* @__PURE__ */ g({
  name: "D1SelectValue",
  __name: "D1SelectValue",
  props: /* @__PURE__ */ D({
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    chipAttrs: {},
    placeholder: {},
    value: {},
    multiple: { type: Boolean },
    iconShow: { type: Boolean },
    iconAttrs: {},
    iconCancel: {}
  }, I),
  emits: ["click", "clickLite"],
  setup(r, { expose: t, emit: n }) {
    const c = n, a = r, e = h(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-selectValue": !0
        // :classes-values [!] System label / Системная метка
      }
    })), s = h(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new V(
      "d1.selectValue",
      a,
      {
        emits: c,
        classes: e,
        styles: s,
        components: {
          chip: A
        }
      }
    ), o = l.render();
    return t(l.expose()), (p, m) => (C(), y(w(o)));
  }
});
export {
  W as _
};
