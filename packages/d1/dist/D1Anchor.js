import { ref as g, computed as l, onMounted as I, h as d, defineComponent as A, openBlock as D, createBlock as T, unref as w, mergeDefaults as _ } from "vue";
import { toBinds as $, getRef as H, DesignConstructorAbstract as N, goScrollSmooth as L, toNumber as S, writeClipboardData as B } from "@dxtmisha/functional";
import { x as E } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { a as F } from "./TextInclude--GERRCGj-qSMWmRIC.js";
import { a as P } from "./getClassTagAStatic-BnVYlXHI-DhbmeMA0.js";
import { l as f } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { D as M } from "./index-DyLnu_cH.js";
import { D as j } from "./index-DJt9bo-h.js";
var O = Object.defineProperty, R = (i, t, e) => t in i ? O(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, u = (i, t, e) => R(i, typeof t != "symbol" ? t + "" : t, e);
class q {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, r, h, o) {
    u(this, "element", g()), u(this, "binds", l(() => $(
      H(this.extra),
      this.props.tooltipAttrs,
      {
        ref: this.element,
        class: `${this.className}__tooltip`
      }
    ))), u(this, "render", (n) => this.components ? this.components.render(
      "tooltip",
      this.binds.value,
      n,
      this.index
    ) : []), this.props = t, this.className = e, this.components = r, this.extra = h, this.index = o;
  }
  /**
   * Get the tooltip element.
   *
   * Получить элемент подсказки.
   */
  getElement() {
    return this.element.value;
  }
  /**
   * Open the tooltip.
   *
   * Открыть подсказку.
   */
  open() {
    this.toggle(!0);
  }
  /**
   * Close the tooltip.
   *
   * Закрыть подсказку.
   */
  close() {
    this.toggle(!1);
  }
  /**
   * Toggle the tooltip.
   *
   * Переключить подсказку.
   * @param open open status/ статус открытия
   */
  toggle(t) {
    var e;
    (e = this.getElement()) == null || e.toggle(t);
  }
}
var Q = Object.defineProperty, U = (i, t, e) => t in i ? Q(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, s = (i, t, e) => U(i, typeof t != "symbol" ? t + "" : t, e);
class z {
  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(t) {
    s(this, "href", l(() => {
      if (this.props.name)
        return `#${this.props.name}`;
    })), this.props = t;
  }
  /**
   * Check if href exists
   *
   * Проверить, существует ли href
   */
  is() {
    return !!this.href.value;
  }
  /**
   * Get href value
   *
   * Получить значение href
   */
  get() {
    return this.href.value;
  }
  /**
   * Get full link
   *
   * Получить полную ссылку
   */
  getLink() {
    return `${location.origin}${location.pathname}${this.href.value}`;
  }
}
class G {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param href href handler / обработчик ссылки
   */
  constructor(t, e, r) {
    this.props = t, this.element = e, this.href = r;
  }
  /**
   * Scroll to element
   *
   * Прокрутить к элементу
   */
  go() {
    this.element.value && (L(
      this.element.value,
      {
        behavior: this.props.behavior,
        block: this.props.block,
        inline: this.props.inline
      },
      S(this.props.shift)
    ), history.replaceState({}, "", this.href.get()));
  }
}
class J {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param tooltip tooltip / подсказка
   * @param href href handler / обработчик ссылки
   * @param to scroll handler / обработчик прокрутки
   */
  constructor(t, e, r, h) {
    s(this, "copy", g()), s(this, "timeout"), s(this, "onClick", (o) => {
      var n;
      o.preventDefault(), this.props.isCopy ? B(this.href.getLink()).then(() => this.toCopy()) : (n = this.to) == null || n.go();
    }), this.props = t, this.tooltip = e, this.href = r, this.to = h;
  }
  /**
   * Is copy state
   *
   * Является ли состоянием копирования
   */
  isCopy() {
    return !!this.copy.value;
  }
  /**
   * Trigger copy state
   *
   * Запустить состояние копирования
   */
  toCopy() {
    var t;
    clearTimeout(this.timeout), this.copy.value = !0, this.tooltip.open(), this.timeout = setTimeout(() => {
      this.copy.value = !1, this.tooltip.close();
    }, (t = this.props.delayHide) != null ? t : 1024);
  }
}
class K {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param event event handler / обработчик событий
   */
  constructor(t, e) {
    s(this, "icon", l(() => {
      if (!this.props.hide)
        return this.props.isCopy ? this.props.iconTag : this.props.iconLink;
    })), s(this, "binds", l(() => ({
      icon: this.icon.value,
      iconActive: this.props.isCopy ? this.props.iconContentCopy : void 0,
      active: this.event.isCopy()
    }))), this.props = t, this.event = e;
  }
  /**
   * Check if the icon is set
   *
   * Проверяет, установлена ли иконка
   */
  is() {
    return !!this.icon.value;
  }
}
class V {
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
   * @param constructors.AnchorEventConstructor class for working with events/ класс для работы с событиями
   * @param constructors.AnchorHrefConstructor class for working with href/ класс для работы с ссылкой
   * @param constructors.AnchorIconConstructor class for working with icons/ класс для работы с иконками
   * @param constructors.AnchorToConstructor class for working with scroll/ класс для работы с прокруткой
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   * @param constructors.TooltipIncludeConstructor class for working with tooltip/ класс для работы с подсказкой
   */
  constructor(t, e, r, h, o, n, p, a, c) {
    s(this, "label"), s(this, "text"), s(this, "tooltip"), s(this, "href"), s(this, "to"), s(this, "event"), s(this, "icon"), s(this, "isHide", l(() => this.props.hide || !this.label.is.value && !this.props.isCopy)), s(this, "goIsFocus", () => {
      location.hash === this.href.get() && this.to.go();
    }), this.props = t, this.refs = e, this.element = r, this.classDesign = h, this.className = o, this.components = n, this.slots = p, this.emits = a;
    const {
      AnchorEventConstructor: m = J,
      AnchorHrefConstructor: v = z,
      AnchorIconConstructor: y = K,
      AnchorToConstructor: C = G,
      LabelIncludeConstructor: b = E,
      TextIncludeConstructor: k = F,
      TooltipIncludeConstructor: x = q
    } = c != null ? c : {};
    this.label = new b(t, o, void 0, p), this.text = new k(this.props), this.tooltip = new x(
      this.props,
      this.className,
      this.components,
      l(() => ({
        description: this.text.copiedClipboard.value,
        interactive: !1
      }))
    ), this.href = new v(this.props), this.to = new C(
      this.props,
      this.element,
      this.href
    ), this.event = new m(
      this.props,
      this.tooltip,
      this.href,
      this.to
    ), this.icon = new y(this.props, this.event), I(() => {
      requestAnimationFrame(this.goIsFocus);
    });
  }
}
const W = {
  shift: 64,
  delayHide: 3072
};
class X extends N {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the anchor/ класс для работы с якорем
   */
  constructor(t, e, r, h = V) {
    super(
      t,
      e,
      r
    ), s(this, "item"), s(this, "renderTooltip", () => this.item.tooltip.render(
      {
        control: (o) => this.renderItem(o)
      }
    )), s(this, "renderItem", (o) => {
      var n;
      const p = [
        (n = this.classes) == null ? void 0 : n.value.main,
        P(this.getDesign())
      ];
      return o && p.push(o.class), [
        d("a", {
          ...this.getMainProps(),
          class: p
        }, this.renderChildren())
      ];
    }), s(this, "renderItemHide", () => [
      d("a", {
        ...this.getAttrs(),
        key: "main-hide",
        name: this.props.name,
        ...f.hidden()
      })
    ]), s(this, "renderIcon", () => this.item.icon.is() ? this.components.render(
      "icon",
      this.item.icon.binds.value
    ) : []), s(this, "renderChildren", () => {
      const o = [];
      return this.props.hide || o.push(
        ...this.renderIcon(),
        ...this.item.label.render()
      ), o;
    }), this.item = new h(
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
      main: {},
      // :classes [!] System label / Системная метка
      label: this.getSubClass("label")
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
    if (this.item.href.is())
      return this.item.isHide.value ? this.renderItemHide() : this.props.isCopy ? this.renderTooltip() : this.renderItem();
  }
  /**
   * Get main element properties.
   *
   * Получить свойства основного элемента.
   */
  getMainProps() {
    const t = {
      ...this.getAttrs(),
      ref: this.element,
      key: "main",
      name: this.props.name,
      onClick: this.item.event.onClick,
      tabindex: 0
    };
    return this.props.isCopy ? t : {
      ...t,
      href: this.item.href.get(),
      ...f.current("page")
    };
  }
}
const Y = {
  ...W,
  iconLink: "link",
  iconTag: "tag",
  iconContentCopy: "content_copy"
}, Z = /* @__PURE__ */ A({
  name: "D1Anchor",
  __name: "D1Anchor",
  props: /* @__PURE__ */ _({
    label: {},
    labelId: {},
    tooltipAttrs: {},
    textCopiedClipboard: { type: [String, Function] },
    shift: {},
    behavior: {},
    block: {},
    inline: {},
    hide: { type: Boolean },
    name: {},
    isCopy: { type: Boolean },
    iconLink: {},
    iconTag: {},
    iconContentCopy: {},
    delayHide: {}
  }, Y),
  setup(i, { expose: t, emit: e }) {
    const r = e, h = i, o = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-anchor": !0
        // :classes-values [!] System label / Системная метка
      }
    })), n = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), p = new X(
      "d1.anchor",
      h,
      {
        emits: r,
        classes: o,
        styles: n,
        components: {
          icon: M,
          tooltip: j
        }
      }
    ), a = p.render();
    return t(p.expose()), (c, m) => (D(), T(w(a)));
  }
}), pt = Z;
export {
  pt as D1Anchor
};
