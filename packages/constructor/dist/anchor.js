var A = Object.defineProperty;
var I = (s, e, t) => e in s ? A(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => I(s, typeof e != "symbol" ? e + "" : e, t);
import { computed as n, ref as T, onMounted as k, h as c } from "vue";
import { goScrollSmooth as w, toNumber as x, writeClipboardData as H, DesignConstructorAbstract as D } from "@dxtmisha/functional";
import { L as S } from "./LabelInclude-D-mLvjK5.js";
import { T as L } from "./TextInclude--GERRCGj.js";
import { T as $ } from "./TooltipInclude--QRSE83v.js";
import { g as B } from "./getClassTagAStatic-BnVYlXHI.js";
import { A as a } from "./AriaStaticInclude-CAURwJMb.js";
class E {
  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(e) {
    /** Computed href attribute/ Вычисляемый атрибут href */
    i(this, "href", n(() => {
      if (this.props.name)
        return `#${this.props.name}`;
    }));
    this.props = e;
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
class F {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param href href handler / обработчик ссылки
   */
  constructor(e, t, o) {
    this.props = e, this.element = t, this.href = o;
  }
  /**
   * Scroll to element
   *
   * Прокрутить к элементу
   */
  go() {
    this.element.value && (w(
      this.element.value,
      {
        behavior: this.props.behavior,
        block: this.props.block,
        inline: this.props.inline
      },
      x(this.props.shift)
    ), history.replaceState({}, "", this.href.get()));
  }
}
class M {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param tooltip tooltip / подсказка
   * @param href href handler / обработчик ссылки
   * @param to scroll handler / обработчик прокрутки
   */
  constructor(e, t, o, r) {
    i(this, "copy", T());
    i(this, "timeout");
    /**
     * On click handler
     *
     * Обработчик нажатия
     */
    i(this, "onClick", (e) => {
      var t;
      e.preventDefault(), this.props.isCopy ? H(this.href.getLink()).then(() => this.toCopy()) : (t = this.to) == null || t.go();
    });
    this.props = e, this.tooltip = t, this.href = o, this.to = r;
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
    var e;
    clearTimeout(this.timeout), this.copy.value = !0, this.tooltip.open(), this.timeout = setTimeout(() => {
      this.copy.value = !1, this.tooltip.close();
    }, (e = this.props.delayHide) != null ? e : 1024);
  }
}
class N {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param event event handler / обработчик событий
   */
  constructor(e, t) {
    /** Icon to display/ Иконка для отображения */
    i(this, "icon", n(() => {
      if (!this.props.hide)
        return this.props.isCopy ? this.props.iconTag : this.props.iconLink;
    }));
    /** Binds for the icon/ Привязки для иконки */
    i(this, "binds", n(() => ({
      icon: this.icon.value,
      iconActive: this.props.isCopy ? this.props.iconContentCopy : void 0,
      active: this.event.isCopy()
    })));
    this.props = e, this.event = t;
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
   * @param constructors.AnchorEventConstructor class for working with events/ класс для работы с событиями
   * @param constructors.AnchorHrefConstructor class for working with href/ класс для работы с ссылкой
   * @param constructors.AnchorIconConstructor class for working with icons/ класс для работы с иконками
   * @param constructors.AnchorToConstructor class for working with scroll/ класс для работы с прокруткой
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   * @param constructors.TooltipIncludeConstructor class for working with tooltip/ класс для работы с подсказкой
   */
  constructor(e, t, o, r, h, u, l, m, p) {
    i(this, "label");
    i(this, "text");
    i(this, "tooltip");
    i(this, "href");
    i(this, "to");
    i(this, "event");
    i(this, "icon");
    /** Is hide anchor/ Скрыть якорь */
    i(this, "isHide", n(() => this.props.hide || !this.label.is.value && !this.props.isCopy));
    /**
     * Go if focus on anchor
     *
     * Перейти, если фокус на якоре
     */
    i(this, "goIsFocus", () => {
      location.hash === this.href.get() && this.to.go();
    });
    this.props = e, this.refs = t, this.element = o, this.classDesign = r, this.className = h, this.components = u, this.slots = l, this.emits = m;
    const {
      AnchorEventConstructor: d = M,
      AnchorHrefConstructor: f = E,
      AnchorIconConstructor: v = N,
      AnchorToConstructor: g = F,
      LabelIncludeConstructor: C = S,
      TextIncludeConstructor: y = L,
      TooltipIncludeConstructor: b = $
    } = p != null ? p : {};
    this.label = new C(e, h, void 0, l), this.text = new y(this.props), this.tooltip = new b(
      this.props,
      this.className,
      this.components,
      n(() => ({
        description: this.text.copiedClipboard.value,
        interactive: !1
      }))
    ), this.href = new f(this.props), this.to = new g(
      this.props,
      this.element,
      this.href
    ), this.event = new d(
      this.props,
      this.tooltip,
      this.href,
      this.to
    ), this.icon = new v(this.props, this.event), k(() => {
      requestAnimationFrame(this.goIsFocus);
    });
  }
}
const Q = {
  shift: 64,
  delayHide: 3072
};
class U extends D {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the anchor/ класс для работы с якорем
   */
  constructor(t, o, r, h = P) {
    super(
      t,
      o,
      r
    );
    i(this, "item");
    /**
     * Rendering the tooltip.
     *
     * Рендеринг подсказки.
     */
    i(this, "renderTooltip", () => this.item.tooltip.render(
      {
        control: (t) => this.renderItem(t)
      }
    ));
    /**
     * Rendering the main item.
     *
     * Рендеринг основного элемента.
     * @param props additional properties/ дополнительные свойства
     */
    i(this, "renderItem", (t) => {
      var r;
      const o = [
        (r = this.classes) == null ? void 0 : r.value.main,
        B(this.getDesign())
      ];
      return t && o.push(t.class), [
        c("a", {
          ...this.getMainProps(),
          class: o
        }, this.renderChildren())
      ];
    });
    /**
     * Rendering the hidden item.
     *
     * Рендеринг скрытого элемента.
     */
    i(this, "renderItemHide", () => [
      c("a", {
        ...this.getAttrs(),
        key: "main-hide",
        name: this.props.name,
        ...a.hidden()
      })
    ]);
    /**
     * Rendering an icon if it is set.
     *
     * Рендеринг иконки, если она задана.
     */
    i(this, "renderIcon", () => this.item.icon.is() ? this.components.render(
      "icon",
      this.item.icon.binds.value
    ) : []);
    /**
     * Rendering children elements.
     *
     * Рендеринг дочерних элементов.
     */
    i(this, "renderChildren", () => {
      const t = [];
      return this.props.hide || t.push(
        ...this.renderIcon(),
        ...this.item.label.render()
      ), t;
    });
    this.item = new h(
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
      ...a.current("page")
    };
  }
}
export {
  P as Anchor,
  U as AnchorDesign,
  Q as defaultsAnchor
};
