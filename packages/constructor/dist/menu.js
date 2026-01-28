var c = Object.defineProperty;
var d = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var s = (r, e, t) => d(r, typeof e != "symbol" ? e + "" : e, t);
import { ref as a, computed as l, watch as m, h as v } from "vue";
import { isFunction as g, executePromise as f, Api as w, isFilled as b, isObject as x, ListDataRef as S, DesignConstructorAbstract as C, toBinds as y } from "@dxtmisha/functional";
import { E as B } from "./EventClickInclude-CtY-88za.js";
import { M as k } from "./ModelInclude-BiYm_iCQ.js";
import { B as V } from "./BarsInclude-IM3Gdslg.js";
import { W as M } from "./WindowInclude-Is5RhGxt.js";
import { M as $ } from "./MenuInclude-DfGCfr_I.js";
class q {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(e) {
    s(this, "progress", a(!1));
    s(this, "buffer", a());
    /**
     * Returns current list data.
     *
     * Возвращает текущие данные списка.
     */
    s(this, "item", l(() => {
      var e, t;
      return (t = (e = this.buffer.value) != null ? e : this.props.list) != null ? t : [];
    }));
    this.props = e;
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
    await this.read((e) => this.buffer.value = e);
  }
  /**
   * Returns data from AJAX or request function.
   *
   * Возвращает данные из AJAX или функции запроса.
   */
  async getAjax() {
    return g(this.props.ajax) ? f(this.props.ajax) : await w.request({
      path: this.props.ajax,
      ...this.props.request
    });
  }
  /**
   * Executes a request to retrieve data.
   *
   * Выполняет запрос для получения данных.
   */
  async read(e) {
    this.is() && (this.props.cache && this.buffer.value !== void 0 && e(this.buffer.value), this.progress.value = !0, e(await this.getAjax()), this.progress.value = !1);
  }
}
class L {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(e) {
    s(this, "item", a());
    /** Returns the search string/ Возвращает строку поиска */
    s(this, "value", l(() => this.props.highlight ? this.props.highlight : this.item.value));
    this.props = e;
  }
  /**
   * Sets the search string.
   *
   * Устанавливает строку поиска.
   * @param value new value/ новое значение
   */
  set(e) {
    const t = this.getValue(e);
    this.item.value !== t && (this.item.value = t);
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
  getValue(e) {
    if (b(e))
      return e.trim();
  }
}
class N {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param request menu request handler/ обработчик запросов меню
   */
  constructor(e, t) {
    s(this, "lite", a());
    s(this, "control", a());
    /**
     * Preparing data before opening the menu
     *
     * Подготовка данных перед открытием меню
     * @returns Promise that resolves to true when preparation is complete/
     * Promise, который разрешается в true после завершения подготовки
     */
    s(this, "preparation", async () => {
      await this.request.preparation(), this.props.list && this.props.liteThreshold && Number(this.props.liteThreshold) <= Object.keys(this.props.list).length && (this.lite.value = !0);
    });
    /**
     * Actions performed after opening the window
     *
     * Действия, выполняемые после открытия окна
     * @returns Promise that resolves to true when opening actions are complete/
     * Promise, который разрешается в true после завершения действий открытия
     */
    s(this, "opening", async () => (this.lite.value = !1, this.control.value = !0, !0));
    /**
     * Actions performed when closing the window
     *
     * Действия, выполняемые при закрытии окна
     * @returns Promise that resolves to true when closing actions are complete/
     * Promise, который разрешается в true после завершения действий закрытия
     */
    s(this, "closing", async () => (this.lite.value = !1, this.control.value = !1, !0));
    this.props = e, this.request = t;
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
      role: "menu"
    };
  }
}
class j {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, t, i) {
    s(this, "value", a());
    /**
     * Computed selected value
     *
     * Вычисляемое выбранное значение
     */
    s(this, "selected", l(() => this.props.isSelectedByValue ? this.value.value : this.props.selected));
    this.props = e, this.refs = t, this.emits = i, this.props.isSelectedByValue && (new k("selected", this.emits, this.value), t.selected && m(
      t.selected,
      (o) => {
        this.value.value = o;
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
  setValue(e, t = !1) {
    var i;
    return this.props.isSelectedByValue && !x(e) && this.value.value !== e && (this.value.value = e, t && ((i = this.emits) == null || i.call(this, "updateValue", e))), this;
  }
}
class A {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param value value manager/ менеджер значений
   * @param data data manager for list/ менеджер данных списка
   */
  constructor(e, t, i) {
    /**
     * Navigates to the previous item in the menu
     *
     * Переходит к предыдущему элементу меню
     * @returns value of the previous item or undefined/ значение предыдущего элемента или undefined
     */
    s(this, "previous", () => this.go(-1));
    /**
     * Navigates to the next item in the menu
     *
     * Переходит к следующему элементу меню
     * @returns value of the next item or undefined/ значение следующего элемента или undefined
     */
    s(this, "next", () => this.go(1));
    this.props = e, this.value = t, this.data = i;
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
  go(e) {
    const t = this.data.getSelectedByStep(this.getStep() * e);
    return t && this.value.setValue(t, !0), t;
  }
}
class D {
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
  constructor(e, t, i, o, h, n, u, p) {
    /** Request handler for list data/ Обработчик запросов данных списка */
    s(this, "request");
    /** Search helper for menu filtering/ Вспомогательный класс поиска для фильтрации меню */
    s(this, "search");
    /** Value manager for selected handling/ Менеджер выбранного значения */
    s(this, "value");
    /** Data manager for list selection and mapping/ Менеджер данных списка для выбора и сопоставления */
    s(this, "data");
    s(this, "go");
    /** Include for working with the Bars component/ Подключение для работы с компонентом Bars */
    s(this, "bars");
    /** Include for working with the Window component/ Подключение для работы с компонентом Window */
    s(this, "window");
    /** Window manager for Menu/ Класс управления окном Menu */
    s(this, "menuWindow");
    /** Click event helper to unify click emissions/ Вспомогательный класс кликов для унифицированной отправки событий */
    s(this, "event");
    /** Data for binding to controls/ Данные для привязки к контролам */
    s(this, "slotData");
    /**
     * Getting data for binding to the List component.
     *
     * Получение данных для привязки к компоненту List.
     */
    s(this, "binds", l(() => ({
      filterMode: this.props.filterMode,
      liteThreshold: this.props.liteThreshold,
      keyLabel: this.props.keyLabel,
      keyValue: this.props.keyValue,
      max: this.props.max,
      tag: this.props.tag,
      onClick: this.onClick,
      onClose: this.window.expose.toClose,
      itemAttrs: this.props.itemAttrs,
      control: !0
    })));
    /**
     * Click handler.
     *
     * Обработчик клика.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    s(this, "onClick", (e, t) => {
      t && "value" in t && this.value.setValue(t.value), this.event.onClick(e, t);
    });
    /**
     * Click on the slot handler.
     *
     * Обработчик клика по слоту.
     * @param event event object/ объект события
     */
    s(this, "onClickSlot", (e) => {
      var o;
      const t = e.target, i = t.closest("*[data-value]");
      i && !t.closest(`.${this.className}__list`) && ((o = this.emits) == null || o.call(this, "clickSlot", i.dataset.value));
    });
    this.props = e, this.refs = t, this.element = i, this.classDesign = o, this.className = h, this.components = n, this.slots = u, this.emits = p, this.request = new q(this.props), this.search = new L(this.props), this.value = new j(this.props, this.refs, this.emits), this.data = new S(
      this.request.item,
      void 0,
      void 0,
      void 0,
      void 0,
      this.value.selected,
      this.refs.keyValue,
      this.refs.keyLabel
    ), this.go = new A(this.props, this.value, this.data), this.bars = new V(
      this.props,
      this.className,
      this.components,
      this.emits
    ), this.menuWindow = new N(this.props, this.request), this.window = new M(
      this.props,
      this.className,
      this.components,
      this.emits,
      this.menuWindow.getExtra()
    ), this.event = new B(void 0, void 0, this.emits), this.slotData = {
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
const O = {
  liteThreshold: 40,
  barsHide: !0,
  barsBackHide: !0,
  tag: "a",
  step: 1,
  autoClose: !0,
  roleItem: "menuitem"
};
class _ extends C {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, i, o) {
    super(
      t,
      i,
      o
    );
    s(this, "item");
    /**
     * Generates data for control.
     *
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderControl", (t) => this.initSlot("control", void 0, this.getBinds(t)));
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderTitle", (t) => {
      const i = [];
      return this.item.bars.is.value && i.push(...this.item.bars.render()), this.initSlot("title", i, this.getBinds(t)), i;
    });
    /**
     * Render list element.
     *
     * Рендер элемента списка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderList", (t) => {
      var o;
      const i = this.item.request.item.value;
      if (i) {
        const h = [];
        return this.initSlot("contextTop", h, this.getBinds(t)), this.props.hideList || h.push(
          this.components.render(
            "list",
            y(
              {
                ...this.item.binds.value,
                class: (o = this.classes) == null ? void 0 : o.value.list,
                selected: this.item.value.selected.value,
                highlight: this.item.search.value.value,
                list: i,
                lite: this.item.menuWindow.lite.value,
                roleItem: this.props.roleItem
              },
              this.props.listAttrs
            ),
            this.slots
          )
        ), this.initSlot("contextBottom", h, this.getBinds(t)), v(
          "div",
          {
            ...this.getAttrs(),
            ref: this.element,
            onClick: this.item.onClickSlot
          },
          h
        );
      }
    });
    /**
     * Render footer element.
     *
     * Рендер элемента футера.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderFooter", (t) => this.initSlot("footer", void 0, this.getBinds(t)));
    this.item = new D(
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
        class: (t = this.classes) == null ? void 0 : t.value.main
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
export {
  D as Menu,
  _ as MenuDesign,
  $ as MenuInclude,
  O as defaultsMenu
};
