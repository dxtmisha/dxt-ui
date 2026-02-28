import { computed as p, ref as c, watch as L, h as A, defineComponent as V, openBlock as D, createBlock as q, unref as _, mergeDefaults as T } from "vue";
import { DesignConstructorAbstract as M, ListDataRef as j, isFunction as N, executePromise as F, Api as I, isFilled as W, isObject as H, toBinds as O, inArray as E } from "@dxtmisha/functional";
import { g as R } from "./D1Icon.vue_vue_type_script_setup_true_lang-B26p6g1f.js";
import { V as $ } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { v as G, D as P } from "./index-CpH3mZ_W.js";
import { u as U, D as X } from "./index-BSr-Tto5.js";
import { _ as Y } from "./D1List.vue_vue_type_script_setup_true_lang-BqI6L3-n.js";
var z = Object.defineProperty, J = (r, t, s) => t in r ? z(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s, e = (r, t, s) => J(r, typeof t != "symbol" ? t + "" : t, s);
class K {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    e(this, "progress", c(!1)), e(this, "buffer", c()), e(this, "item", p(() => {
      var s, i;
      return (i = (s = this.buffer.value) != null ? s : this.props.list) != null ? i : [];
    })), this.props = t;
  }
  /**
   * Checks whether a request is needed.
   *
   * Проверяет, нужно ли делать запрос.
   */
  is() {
    return !!(this.props.ajax || this.props.request);
  }
  /**
   * Prepares data.
   *
   * Подготавливает данные.
   */
  async preparation() {
    return await this.update(), !0;
  }
  /**
   * Updates data.
   *
   * Обновляет данные.
   */
  async update() {
    await this.read((t) => this.buffer.value = t);
  }
  /**
   * Returns data from AJAX or request function.
   *
   * Возвращает данные из AJAX или функции запроса.
   */
  async getAjax() {
    return N(this.props.ajax) ? F(this.props.ajax) : await I.request({
      path: this.props.ajax,
      ...this.props.request
    });
  }
  /**
   * Executes a request to retrieve data.
   *
   * Выполняет запрос для получения данных.
   */
  async read(t) {
    this.is() && (this.props.cache && this.buffer.value !== void 0 && t(this.buffer.value), this.progress.value = !0, t(await this.getAjax()), this.progress.value = !1);
  }
}
class Q {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    e(this, "item", c()), e(this, "value", p(() => this.props.highlight ? this.props.highlight : this.item.value)), this.props = t;
  }
  /**
   * Sets the search string.
   *
   * Устанавливает строку поиска.
   * @param value new value/ новое значение
   */
  set(t) {
    const s = this.getValue(t);
    this.item.value !== s && (this.item.value = s);
  }
  /**
   * Resets the search string.
   *
   * Сбрасывает строку поиска.
   */
  reset() {
    return this.set(), this;
  }
  /**
   * Returns a processed value.
   *
   * Возвращает обработанное значение.
   * @param value source value/ исходное значение
   */
  getValue(t) {
    if (W(t))
      return t.trim();
  }
}
class Z {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param request menu request handler/ обработчик запросов меню
   */
  constructor(t, s) {
    e(this, "lite", c()), e(this, "control", c()), e(this, "preparation", async () => {
      await this.request.preparation(), this.props.list && this.props.liteThreshold && Number(this.props.liteThreshold) <= Object.keys(this.props.list).length && (this.lite.value = !0);
    }), e(this, "opening", async () => (this.lite.value = !1, this.control.value = !0, !0)), e(this, "closing", async () => (this.lite.value = !1, this.control.value = !1, !0)), this.props = t, this.request = s;
  }
  /**
   * Returns extra methods for window management
   *
   * Возвращает дополнительные методы для управления окном
   * @returns object with window management methods/ объект с методами управления окном
   */
  getExtra() {
    return {
      adaptive: "menu",
      preparation: this.preparation,
      opening: this.opening,
      closing: this.closing,
      role: "menu",
      autoTabIndex: !1,
      openOnArrowDown: !0
    };
  }
}
class tt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, s, i) {
    e(this, "value", c()), e(this, "selected", p(() => this.props.isSelectedByValue ? this.value.value : this.props.selected)), this.props = t, this.refs = s, this.emits = i, this.props.isSelectedByValue && (new $("selected", this.emits, this.value), s.selected && L(
      s.selected,
      (a) => {
        this.value.value = a;
      },
      { immediate: !0 }
    ));
  }
  /**
   * Sets a new selected value if it has changed and returns the instance for chaining.
   *
   * Устанавливает новое выбранное значение, если оно изменилось, и возвращает экземпляр для чейнинга.
   * @param value selected list value/ выбранное значение списка
   * @param isEmit whether to emit the update event/ нужно ли вызвать событие обновления
   */
  setValue(t, s = !1) {
    var i;
    return this.props.isSelectedByValue && !H(t) && this.value.value !== t && (this.value.value = t, s && ((i = this.emits) == null || i.call(this, "updateValue", t))), this;
  }
}
class et {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param value value manager/ менеджер значений
   * @param data data manager for list/ менеджер данных списка
   */
  constructor(t, s, i) {
    e(this, "previous", () => this.go(-1)), e(this, "next", () => this.go(1)), this.props = t, this.value = s, this.data = i;
  }
  /**
   * Returns the step value for navigation
   *
   * Возвращает значение шага для навигации
   * @returns step value/ значение шага
   */
  getStep() {
    return Number(this.props.step) || 1;
  }
  /**
   * Navigates through the menu items by the specified direction
   *
   * Перемещается по элементам меню в указанном направлении
   * @param directions direction multiplier (-1 for previous, 1 for next)/ множитель направления (-1 для предыдущего, 1 для следующего)
   * @returns value of the selected item or undefined/ значение выбранного элемента или undefined
   */
  go(t) {
    const s = this.data.getSelectedByStep(this.getStep() * t);
    return s && this.value.setValue(s, !0), s;
  }
}
class st {
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
   * @param constructors.BarsIncludeConstructor class for working with bars/ класс для работы с барами
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.ListDataRefConstructor class for working with list data/ класс для работы с данными списка
   * @param constructors.MenuGoConstructor class for working with navigation/ класс для работы с навигацией
   * @param constructors.MenuRequestConstructor class for working with request/ класс для работы с запросом
   * @param constructors.MenuSearchConstructor class for working with search/ класс для работы с поиском
   * @param constructors.MenuValueConstructor class for working with value/ класс для работы со значением
   * @param constructors.MenuWindowConstructor class for working with menu window/ класс для работы с окном меню
   * @param constructors.WindowIncludeConstructor class for working with window/ класс для работы с окном
   */
  constructor(t, s, i, a, o, l, h, n, d) {
    e(this, "request"), e(this, "search"), e(this, "value"), e(this, "data"), e(this, "go"), e(this, "bars"), e(this, "window"), e(this, "menuWindow"), e(this, "event"), e(this, "slotData"), e(this, "binds", p(() => ({
      filterMode: this.props.filterMode,
      liteThreshold: this.props.liteThreshold,
      keyLabel: this.props.keyLabel,
      keyValue: this.props.keyValue,
      max: this.props.max,
      tag: this.props.tag,
      onClick: this.onClick,
      onClose: this.window.expose.toClose,
      itemAttrs: this.props.itemAttrs,
      control: !this.props.embedded
    }))), e(this, "onClick", (m, u) => {
      u && "value" in u && this.value.setValue(u.value), this.event.onClick(m, u);
    }), e(this, "onClickSlot", (m) => {
      var u;
      const g = m.target, b = g.closest("*[data-value]");
      b && !g.closest(`.${this.className}__list`) && ((u = this.emits) == null || u.call(this, "clickSlot", b.dataset.value));
    }), this.props = t, this.refs = s, this.element = i, this.classDesign = a, this.className = o, this.components = l, this.slots = h, this.emits = n;
    const {
      BarsIncludeConstructor: v = U,
      EventClickIncludeConstructor: f = R,
      ListDataRefConstructor: w = j,
      MenuGoConstructor: y = et,
      MenuRequestConstructor: B = K,
      MenuSearchConstructor: C = Q,
      MenuValueConstructor: S = tt,
      MenuWindowConstructor: x = Z,
      WindowIncludeConstructor: k = G
    } = d != null ? d : {};
    this.request = new B(this.props), this.search = new C(this.props), this.value = new S(this.props, this.refs, this.emits), this.data = new w(
      this.request.item,
      void 0,
      void 0,
      void 0,
      void 0,
      this.value.selected,
      this.refs.keyValue,
      this.refs.keyLabel
    ), this.go = new y(this.props, this.value, this.data), this.bars = new v(
      this.props,
      this.className,
      this.components,
      this.emits
    ), this.menuWindow = new x(this.props, this.request), this.window = new k(
      this.props,
      this.className,
      this.components,
      this.emits,
      this.menuWindow.getExtra()
    ), this.event = new f(void 0, void 0, this.emits), this.slotData = {
      loading: this.request.progress,
      isSelected: this.data.isSelected,
      selectedList: this.data.selectedList,
      selectedNames: this.data.selectedNames,
      selectedValues: this.data.selectedValues,
      previous: this.go.previous,
      next: this.go.next
    };
  }
  /**
   * Getting data for binding to controls.
   *
   * Получение данных для привязки к контролам.
   * @returns data for binding to controls/ данные для привязки к контролам
   */
  getControlBinds() {
    return this.slotData;
  }
}
const it = {
  liteThreshold: 40,
  barsHide: !0,
  barsBackHide: !0,
  tag: "a",
  step: 1,
  autoClose: !0
};
class rt extends M {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, s, i, a = st) {
    super(
      t,
      s,
      i
    ), e(this, "item"), e(this, "renderControl", (o) => this.initSlot("control", void 0, this.getBinds(o))), e(this, "renderTitle", (o) => {
      const l = [];
      return this.item.bars.is.value && l.push(...this.item.bars.render()), this.initSlot("title", l, this.getBinds(o)), l;
    }), e(this, "renderList", (o) => {
      var l;
      const h = this.item.request.item.value;
      if (h) {
        const n = [];
        return this.initSlot("contextTop", n, this.getBinds(o)), this.props.hideList || n.push(
          this.components.render(
            "list",
            O(
              {
                ...this.item.binds.value,
                class: (l = this.classes) == null ? void 0 : l.value.list,
                selected: this.item.value.selected.value,
                highlight: this.item.search.value.value,
                list: h,
                lite: this.item.menuWindow.lite.value,
                role: this.props.roleList,
                roleItem: this.props.roleItem
              },
              this.props.listAttrs
            ),
            this.slots
          )
        ), this.initSlot("contextBottom", n, this.getBinds(o)), A(
          "div",
          {
            ...this.getAttrs(),
            ref: this.element,
            onClick: this.item.onClickSlot
          },
          n
        );
      }
    }), e(this, "renderFooter", (o) => this.initSlot("footer", void 0, this.getBinds(o))), this.item = new a(
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
      ...this.item.window.expose,
      ...this.item.getControlBinds()
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
      bars: this.getSubClass("bars"),
      list: this.getSubClass("list")
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
    return this.item.window.render(
      {
        control: this.renderControl,
        title: this.renderTitle,
        default: this.renderList,
        footer: this.renderFooter
      },
      {
        class: (t = this.classes) == null ? void 0 : t.value.main,
        closeOnEsc: !1,
        ariaHaspopup: "listbox",
        embedded: this.props.embedded
      }
    );
  }
  /**
   * Generates data for control.
   *
   * Генерирует данные для контроля.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  getBinds(t) {
    return {
      ...t,
      ...this.item.getControlBinds()
    };
  }
}
const ot = Y, at = {
  // :values [!] System label / Системная метка
  barsAdaptive: ["showAlways", "showSm", "showMd", "showLg", "showXl", "show2xl"]
  // :values [!] System label / Системная метка
}, lt = {
  ...it
}, vt = /* @__PURE__ */ V({
  name: "D1Menu",
  __name: "D1Menu",
  props: /* @__PURE__ */ T({
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function },
    selected: { type: [Number, String, Boolean, Array] },
    hideList: { type: Boolean },
    list: {},
    liteThreshold: {},
    highlight: {},
    highlightLengthStart: {},
    filterMode: { type: Boolean },
    ajax: { type: [String, Function] },
    request: {},
    cache: { type: Boolean },
    keyLabel: {},
    keyValue: {},
    max: {},
    tag: {},
    step: {},
    listAttrs: {},
    itemAttrs: {},
    roleList: {},
    roleItem: {},
    isSelectedByValue: { type: Boolean },
    embedded: { type: Boolean },
    barsAdaptive: {}
  }, lt),
  emits: ["bars", "barsLite", "barsBack", "click", "clickLite", "window", "update:selected", "update:modelSelected", "updateValue", "clickSlot"],
  setup(r, { expose: t, emit: s }) {
    const i = s, a = r, o = p(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-menu": !0,
        "d1-menu--hideList": a.hideList,
        [`d1-menu--barsAdaptive--${a.barsAdaptive}`]: E(at.barsAdaptive, a.barsAdaptive)
        // :classes-values [!] System label / Системная метка
      }
    })), l = p(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new rt(
      "d1.menu",
      a,
      {
        emits: i,
        classes: o,
        styles: l,
        components: {
          list: ot,
          bars: X,
          window: P
        }
      }
    ), n = h.render();
    return t(h.expose()), (d, v) => (D(), q(_(n)));
  }
});
export {
  vt as _
};
