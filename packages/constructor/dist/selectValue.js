var d = Object.defineProperty;
var u = (r, e, s) => e in r ? d(r, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[e] = s;
var t = (r, e, s) => u(r, typeof e != "symbol" ? e + "" : e, s);
import { computed as o, h as m } from "vue";
import { isFilled as v, DesignConstructorAbstract as b, toBinds as a, getRef as g, toBind as f } from "@dxtmisha/functional";
import { E as w } from "./EnabledInclude-BeX9VHb_.js";
import { E as C } from "./EventClickInclude-Bi9B51Mm.js";
import { W as S } from "./WindowClassesInclude-B56usxgx.js";
class x {
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
   */
  constructor(e, s, i, l, n, h, c, p) {
    t(this, "enabled");
    t(this, "event");
    t(this, "window");
    /** Is placeholder/ Является ли плейсхолдером */
    t(this, "isPlaceholder", o(
      () => !v(this.props.value) && !!this.props.placeholder
    ));
    /** Icon for canceling selection/ Иконка для отмены выбора */
    t(this, "iconTrailing", o(() => {
      if (this.enabled.isEnabled.value)
        return {
          icon: this.props.iconCancel,
          dynamic: !0,
          class: [
            `${this.className}__trailing`,
            this.window.get().controlStatic
          ]
        };
    }));
    /** Returns data for the main style class/ Возвращает данные для главного класса стиля */
    t(this, "classes", o(() => ({
      [`${this.className}--placeholder`]: this.isPlaceholder.value,
      [`${this.className}--multiple`]: !!this.props.multiple
    })));
    /**
     * Click event handler.
     *
     * Обработчик события клика.
     * @param event event object/ объект события
     * @param options additional event options/ дополнительные опции события
     */
    t(this, "onClick", (e, s) => {
      e.preventDefault(), e.stopPropagation(), this.event.onClick(e, s);
    });
    this.props = e, this.refs = s, this.element = i, this.classDesign = l, this.className = n, this.components = h, this.slots = c, this.emits = p, this.enabled = new w(this.props), this.event = new C(
      this.props,
      this.enabled,
      this.emits
    ), this.window = new S(l);
  }
}
const B = {};
class A extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(s, i, l) {
    super(
      s,
      i,
      l
    );
    t(this, "item");
    /**
     * Rendering data.
     *
     * Рендеринг данных.
     */
    t(this, "renderData", () => {
      var s, i, l;
      if (this.item.isPlaceholder.value)
        return [String(this.props.placeholder)];
      if (this.props.value) {
        if (this.props.multiple)
          return this.renderList();
        const n = (l = (s = this.props.value[0]) == null ? void 0 : s.label) != null ? l : (i = this.props.value[0]) == null ? void 0 : i.value;
        if (n)
          return [String(n)];
      }
      return [];
    });
    /**
     * List rendering.
     *
     * Рендеринг списка.
     */
    t(this, "renderList", () => {
      var i;
      const s = [];
      return (i = this.props.value) == null || i.forEach((l) => {
        const n = this.renderItem(l);
        n ? s.push(n) : s.push(l.label);
      }), s;
    });
    /**
     * Element rendering.
     *
     * Рендеринг элемента.
     * @param item selected element/ выбранный элемент
     */
    t(this, "renderItem", (s) => {
      var i;
      return this.components.renderOne(
        "chip",
        a(
          this.props.chipAttrs,
          {
            class: (i = this.classes) == null ? void 0 : i.value.item,
            icon: this.props.iconShow && s.icon ? s.icon : void 0,
            iconTrailing: this.item.iconTrailing.value,
            label: s.label,
            "data-value": s.index,
            readonly: !0,
            disabled: this.props.disabled,
            value: s.value,
            detail: s.detail,
            onClick: this.item.onClick
          }
        ),
        void 0,
        s.index
      );
    });
    this.item = new x(
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
    var s;
    return m(
      "div",
      {
        ...this.getAttrs(),
        class: (s = this.classes) == null ? void 0 : s.value.main
      },
      this.renderData()
    );
  }
}
class P {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(e, s, i, l, n) {
    /**
     * Checks whether selectValue should be displayed/
     * Проверяет, нужно ли отображать selectValue
     */
    t(this, "is", o(() => !!(!this.props.disabled && this.components)));
    /** Computed bindings for the selectValue/ Вычисляемые привязки для selectValue */
    t(this, "binds", o(() => ({
      ...a(
        g(this.extra),
        this.props.selectValueAttrs,
        {
          class: `${this.className}__select-value`
        }
      ),
      disabled: this.props.disabled
    })));
    /**
     * Render the SelectValue component
     *
     * Рендер компонента selectValue
     * @param attrs additional attributes/ дополнительные атрибуты
     * @returns VNode array/ массив VNode
     */
    t(this, "render", (e) => this.components && this.is.value ? this.components.render(
      "selectValue",
      f(
        e != null ? e : {},
        this.binds.value
      ),
      this.index
    ) : []);
    this.props = e, this.className = s, this.components = i, this.extra = l, this.index = n;
  }
}
export {
  x as SelectValue,
  A as SelectValueDesign,
  P as SelectValueInclude,
  B as defaultsSelectValue
};
