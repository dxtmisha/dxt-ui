var f = Object.defineProperty;
var x = (a, e, t) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var n = (a, e, t) => x(a, typeof e != "symbol" ? e + "" : e, t);
import { computed as h, h as l } from "vue";
import { getBind as b, isFilled as C, getRef as u, toBinds as S, DesignConstructorAbstract as B } from "@dxtmisha/functional";
import { L as H, D as I, C as E, A as D } from "./LabelInclude-BYoIaRWl.js";
class T {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(e, t, s, i) {
    /**
     * Checks whether an icon is specified for rendering the component/
     * Проверяет, указана ли иконка для отображения компонента
     */
    n(this, "isIcon", h(() => !!this.props.icon));
    /**
     * List of properties for the icon component/ Список свойств для компонента иконки
     */
    n(this, "iconBind", h(() => b(
      this.props.icon,
      {
        ...this.getExtra(),
        ...this.getClasses(),
        ...this.getEventType()
      },
      "icon"
    )));
    /**
     * Render of the Icon component
     *
     * Рендер компонента иконка
     */
    n(this, "renderIcon", () => this.components && C(this.props.icon) ? this.components.render(
      "icon",
      this.iconBind.value
    ) : []);
    this.props = e, this.className = t, this.components = s, this.extra = i;
  }
  /**
   * Returns an additional property
   *
   * Возвращает дополнительное свойство
   */
  getExtra() {
    return u(this.extra);
  }
  /**
   * Returns a list of classes
   *
   * Возвращает список классов
   * @param classesUser list of additional classes/ список дополнительных классов
   * @param name class name/ название класса
   */
  getClasses(e, t = "icon") {
    var r;
    const s = [`${this.className}__${t}`], i = (r = this.getExtra()) == null ? void 0 : r.class;
    return i && s.push(i), e && s.push(e), {
      class: s
    };
  }
  /**
   * Returns the type used to determine when an event is triggered
   *
   * Возвращает тип для определения при срабатывании события
   * @param type event type/ тип события
   */
  getEventType(e = "icon") {
    return {
      "data-event-type": e
    };
  }
}
class k extends T {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param turn should the icon be flipped/ надо ли перевернуть иконку
   * @param dir should the icon be mirrored/ надо ли зеркально отображать иконка
   * @param start add sorting at the beginning/ добавить сортировку в начале
   * @param end add sorting at the end/ добавить сортировку в конце
   */
  constructor(t, s, i, r, c, o, p = !1, d = !1) {
    super(t, s, i, r);
    /**
     * List of properties for the icon component/ Список свойств для компонента иконки
     */
    n(this, "iconBind", h(() => {
      var t, s, i;
      return b(
        this.props.icon,
        {
          active: this.props.selected,
          turn: (t = u(this.turn)) != null ? t : this.props.iconTurn,
          hide: this.props.iconHide,
          asPalette: this.props.iconPalette,
          animationType: "type2",
          dir: (s = u(this.dir)) != null ? s : this.props.iconDir,
          start: this.start,
          end: this.end,
          ...S(
            this.getExtra(),
            this.props.iconAttrs,
            this.getClasses((i = this.props.iconAttrs) == null ? void 0 : i.class)
          ),
          ...this.getEventType()
        },
        "icon"
      );
    }));
    this.props = t, this.className = s, this.components = i, this.extra = r, this.turn = c, this.dir = o, this.start = p, this.end = d;
  }
}
class y {
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
   * @param LabelIncludeConstructor class for working with the label/ класс для работы с меткой
   * @param DescriptionIncludeConstructor class for working with the description/ класс для работы с описанием
   * @param CaptionIncludeConstructor class for working with the caption/ класс для работы с подписью
   * @param IconIncludeConstructor class for working with the icon/ класс для работы с иконкой
   */
  constructor(e, t, s, i, r, c, o, p, d = H, g = I, m = E, v = k) {
    /**
     * Object for working with label/
     * Объект для работы с меткой
     */
    n(this, "label");
    /**
     * Object for working with description/
     * Объект для работы с описанием
     */
    n(this, "description");
    /**
     * Object for working with caption/
     * Объект для работы с подписью
     */
    n(this, "caption");
    /**
     * Object for working with icon/
     * Объект для работы с иконкой
     */
    n(this, "icon");
    /**
     * Checks if the headline exists/
     * Проверяет, существует ли заголовок
     */
    n(this, "isHeadline", h(() => !!(this.props.headline || this.slots && "headline" in this.slots)));
    /**
     * Checks if the header exists/
     * Проверяет, существует ли шапка
     */
    n(this, "isHeader", h(() => this.label.is.value || this.caption.is.value || this.description.is.value));
    /**
     * Tag name/
     * Название тега
     */
    n(this, "tag", h(() => this.props.tag || "div"));
    this.props = e, this.refs = t, this.element = s, this.classDesign = i, this.className = r, this.components = c, this.slots = o, this.emits = p, this.LabelIncludeConstructor = d, this.DescriptionIncludeConstructor = g, this.CaptionIncludeConstructor = m, this.IconIncludeConstructor = v, this.label = new d(
      e,
      r,
      void 0,
      o,
      void 0,
      void 0,
      !0,
      void 0,
      h(() => this.props.tagHeader || "h3")
    ), this.caption = new m(e, r, o), this.description = new g(e, r, o), this.icon = new v(e, r, c);
  }
}
class A extends B {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor block item class/ класс элемента блока
   */
  constructor(t, s, i, r = y) {
    super(
      t,
      s,
      i
    );
    n(this, "item");
    /**
     * Headline rendering.
     *
     * Рендеринг заголовка.
     */
    n(this, "renderHeadline", () => {
      var t;
      if (this.item.isHeadline.value) {
        const s = [];
        return this.props.headline && s.push(this.props.headline), this.initSlot("headline", s), [
          l("div", {
            key: "headline",
            class: (t = this.classes) == null ? void 0 : t.value.headline
          }, s)
        ];
      }
      return [];
    });
    /**
     * Header rendering.
     *
     * Рендеринг заголовка.
     */
    n(this, "renderHeader", () => {
      var t;
      if (this.item.isHeader.value) {
        const s = [
          ...this.item.icon.renderIcon(),
          ...this.item.label.render(),
          ...this.item.caption.render(),
          ...this.renderTrailing()
        ];
        return [
          l("div", {
            key: "header",
            class: (t = this.classes) == null ? void 0 : t.value.header,
            ...D.labelledby(this.item.label.idElement.value)
          }, s)
        ];
      }
      return [];
    });
    /**
     * Trailing rendering.
     *
     * Рендеринг правого контента.
     */
    n(this, "renderTrailing", () => {
      var s, i;
      const t = [];
      return (s = this.slots) != null && s.trailing && (t.push(l("div", {
        key: "spacer",
        class: (i = this.classes) == null ? void 0 : i.value.space
      })), this.initSlot("trailing", t)), t;
    });
    /**
     * Body rendering.
     *
     * Рендеринг тела.
     */
    n(this, "renderBody", () => {
      var s;
      const t = [
        ...this.renderHeadline(),
        ...this.renderHeader(),
        ...this.item.description.render()
      ];
      return [
        l("div", {
          key: "body",
          class: (s = this.classes) == null ? void 0 : s.value.body
        }, t)
      ];
    });
    this.item = new r(
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
    return {
      ...this.item.label.expose,
      ...this.item.description.expose
    };
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
      headline: this.getSubClass("headline"),
      header: this.getSubClass("header"),
      label: this.getSubClass("label"),
      description: this.getSubClass("description"),
      caption: this.getSubClass("caption"),
      icon: this.getSubClass("icon"),
      space: this.getSubClass("space"),
      body: this.getSubClass("body")
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
    const t = [
      ...this.renderBody()
    ];
    return this.initSlot("default", t), l(this.item.tag.value, {
      ...this.getAttrs(),
      class: (s = this.classes) == null ? void 0 : s.value.main
    }, t);
  }
}
class w extends y {
}
const $ = {
  tag: "main",
  tagHeader: "h1"
};
class F extends A {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor block item class/ класс элемента блока
   */
  constructor(e, t, s, i = w) {
    super(
      e,
      t,
      s,
      i
    );
  }
}
export {
  w as Page,
  F as PageDesign,
  $ as defaultsPage
};
