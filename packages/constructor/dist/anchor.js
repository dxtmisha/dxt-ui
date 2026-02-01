var b = Object.defineProperty;
var y = (s, e, t) => e in s ? b(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => y(s, typeof e != "symbol" ? e + "" : e, t);
import { computed as n, ref as A, onMounted as I, h as l } from "vue";
import { goScrollSmooth as T, toNumber as k, writeClipboardData as w, DesignConstructorAbstract as x } from "@dxtmisha/functional";
import { L as D } from "./LabelInclude-BtZrrbCf.js";
import { T as H } from "./TextInclude-CodMN5BH.js";
import { T as S } from "./TooltipInclude--QRSE83v.js";
import { g as L } from "./getClassTagAStatic-BnVYlXHI.js";
import { A as $ } from "./AriaStaticInclude-CuMRRW17.js";
class B {
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
  constructor(e, t, r) {
    this.props = e, this.element = t, this.href = r;
  }
  /**
   * Scroll to element
   *
   * Прокрутить к элементу
   */
  go() {
    this.element.value && (T(
      this.element.value,
      {
        behavior: this.props.behavior,
        block: this.props.block,
        inline: this.props.inline
      },
      k(this.props.shift)
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
  constructor(e, t, r, o) {
    i(this, "copy", A());
    i(this, "timeout");
    /**
     * On click handler
     *
     * Обработчик нажатия
     */
    i(this, "onClick", (e) => {
      var t;
      e.preventDefault(), this.props.isCopy ? w(this.href.getLink()).then(() => this.toCopy()) : (t = this.to) == null || t.go();
    });
    this.props = e, this.tooltip = t, this.href = r, this.to = o;
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
      iconActive: this.props.iconContentCopy,
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
class E {
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
   * @param AnchorHrefConstructor class for working with href/ класс для работы с ссылкой
   * @param AnchorToConstructor class for working with scroll/ класс для работы с прокруткой
   * @param AnchorEventConstructor class for working with events/ класс для работы с событиями
   * @param AnchorIconConstructor class for working with icons/ класс для работы с иконками
   * @param LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
   * @param TooltipIncludeConstructor class for working with tooltip/ класс для работы с подсказкой
   */
  constructor(e, t, r, o, h, a, p, c, u = B, m = F, d = M, f = N, g = D, v = H, C = S) {
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
    this.props = e, this.refs = t, this.element = r, this.classDesign = o, this.className = h, this.components = a, this.slots = p, this.emits = c, this.label = new g(e, h, void 0, p), this.text = new v(this.props), this.tooltip = new C(
      this.props,
      this.className,
      this.components,
      n(() => ({
        description: this.text.copiedClipboard.value
      }))
    ), this.href = new u(this.props), this.to = new m(
      this.props,
      this.element,
      this.href
    ), this.event = new d(
      this.props,
      this.tooltip,
      this.href,
      this.to
    ), this.icon = new f(this.props, this.event), I(() => {
      requestAnimationFrame(this.goIsFocus);
    });
  }
}
const K = {
  shift: 64,
  delayHide: 3072
};
class Q extends x {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the anchor/ класс для работы с якорем
   */
  constructor(t, r, o, h = E) {
    super(
      t,
      r,
      o
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
      var o;
      const r = [
        (o = this.classes) == null ? void 0 : o.value.main,
        L(this.getDesign())
      ];
      return t && r.push(t.class), [
        l("a", {
          ...this.getMainProps(),
          class: r
        }, this.renderChildren())
      ];
    });
    /**
     * Rendering the hidden item.
     *
     * Рендеринг скрытого элемента.
     */
    i(this, "renderItemHide", () => [
      l("a", {
        ...this.getAttrs(),
        key: "main-hide",
        name: this.props.name
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
    return this.props.isCopy || Object.assign(t, {
      href: this.item.href.get(),
      ...$.current("page")
    }), t;
  }
}
export {
  E as Anchor,
  Q as AnchorDesign,
  K as defaultsAnchor
};
