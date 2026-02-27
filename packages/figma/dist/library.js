var d = Object.defineProperty;
var p = (s, t, e) => t in s ? d(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var h = (s, t, e) => p(s, typeof t != "symbol" ? t + "" : t, e);
import "@dxtmisha/scripts/ai";
import { uint8ArrayToBase64 as f, forEach as l, getElementImage as x, resizeImageByMax as I, blobToBase64 as T } from "@dxtmisha/functional-basic";
const m = "image/jpeg", y = "+)w496um509nu9ue06eu94=vl0efef", w = "texts", g = `
Нужно из список текст преобразовать в префикс + ключи текст
пример:
{
  "global-calendar": "Календарь",
  "events-table-title": "Детализация по месяцам"
}

0) изучи скриншоты. И нужно вот что сделать

1) придумать префик для ключи текст. Префик отображает содержимый страница. Префик глобальный, то есть он 1 для всего страница (что на скрине)
2) определить какие тексты являеться моковым данный, токие переместит в группа моговый данный
3) если текст можно использовать на нескольких страницах (простые фразы, слова, названия компания, пример "страна", "купить", "жен."), то вынести его в глобальный префикс (global-*)/ в названия ключ дольжен отражать содердимый. Не какой отображения место использования. То есть не какой footer, link для приер
4) составить список ключи текст с префиксом и текстом. Названия ключа дольжен отображать место использования текста
5) если видишь, в текст подставлено какой значения, надо его знаменить на [xxx] - где xxx это название значения
пример: "Мастерские каникулы 2025" => "Мастерские каникулы [year]"
5.1) так же добавить доп ключ, на основе орининал и разделить текст на несколько частей. место разделения это место подстановки значения
пример:"получателю Васильева Л. (ID 2154643)" => "получателю [name] (ID [id])" дольжен добавииться ключи:
{
...
"order-recipient": "получателю [name] (ID [id])",
"order-recipient-part1": "получателю ",
"order-recipient-part2": " (ID ",
"order-recipient-part3": ")",
...
}
7) что дольжень получить в итоге (json с даными):
{
    "global":{
    "глобальный-префикс-клчю-текст": "текст",
    "глобальный-префикс-клчю-текст": "текст",
    "глобальный-префикс-клчю-текст": "текст",
    "глобальный-префикс-клчю-текст": "текст"
    },
    "page": {
    "префикс-клчю-текст": "текст",
    "префикс-клчю-текст": "текст",
    "префикс-клчю-текст": "текст",
    "префикс-клчю-текст": "текст"
    },
    "mock":{
    "префикс-клчю-текст": "текст",
    "префикс-клчю-текст": "текст",
    "префикс-клчю-текст": "текст",
    "префикс-клчю-текст": "текст",
    }
}
8) не придумывать тексты, использовать только те что в список ниже

Список текст:
[texts]
`;
class M {
  constructor(t, e) {
    this.ai = t, this.data = e;
  }
  async make() {
    return this.ai.resetImages(), this.makeImage(), console.warn("texts", g.replace("[texts]", this.initTexts())), console.log(
      "getImages",
      this.ai.getImages(),
      await this.ai.generate(g.replace("[texts]", this.initTexts()))
    ), this;
  }
  makeImage() {
    return this.data.screenshot.forEach(
      (t) => {
        this.ai.addImage({
          mime: m,
          base64: f(t)
        });
      }
    ), this;
  }
  initTexts() {
    return l(
      this.data.texts,
      (t) => t.text
    ).join(`\r
`);
  }
}
class c {
  /**
   * Constructor
   * @param item Figma node/ узел Figma
   */
  constructor(t) {
    this.item = t;
  }
  /**
   * Checks if the node is a document.
   *
   * Проверяет, является ли узел документом.
   */
  isDocument() {
    return this.getType() === "DOCUMENT";
  }
  /**
   * Checks if the node is a frame.
   *
   * Проверяет, является ли узел фреймом.
   */
  isFrame() {
    return this.getType() === "FRAME";
  }
  /**
   * Checks if the node is a section.
   *
   * Проверяет, является ли узел секцией.
   */
  isSection() {
    return this.getType() === "SECTION";
  }
  /**
   * Checks if the node is a text node.
   *
   * Проверяет, является ли узел текстовым узлом.
   */
  isText() {
    return this.getType() === "TEXT";
  }
  /**
   * Checks if the node is a text node with a meaningful value.
   *
   * Проверяет, является ли узел текстовым узлом с осмысленным значением.
   */
  isTextNoValue() {
    if (this.isText()) {
      const t = this.getText();
      return !(t === "" || t.match(/^[\d., ]+(|[^ ]{1,3})$/));
    }
    return !1;
  }
  /**
   * Returns the Figma node.
   *
   * Возвращает узел Figma.
   */
  get() {
    return this.item;
  }
  /**
   * Returns the type of the node.
   *
   * Возвращает тип узла.
   */
  getType() {
    if ("type" in this.item)
      return this.item.type;
  }
  /**
   * Returns the parent node.
   *
   * Возвращает родительский узел.
   */
  getParent() {
    var t;
    if ("parent" in this.item)
      return (t = this.item.parent) != null ? t : void 0;
  }
  /**
   * Returns the parent node wrapped in FigmaItem.
   *
   * Возвращает родительский узел, обернутый в FigmaItem.
   */
  getParentItem() {
    const t = this.getParent();
    if (t)
      return new c(t);
  }
  /**
   * Returns the child nodes.
   *
   * Возвращает дочерние узлы.
   */
  getChildren() {
    return "children" in this.item ? this.item.children : [];
  }
  /**
   * Returns the child nodes wrapped in FigmaItem.
   *
   * Возвращает дочерние узлы, обернутые в FigmaItem.
   */
  getChildrenItems() {
    const t = [];
    for (const e of this.getChildren())
      t.push(new c(e));
    return t;
  }
  /**
   * Returns the node ID.
   *
   * Возвращает идентификатор узла.
   */
  getId() {
    return "id" in this.item ? this.item.id : "";
  }
  /**
   * Returns the node name.
   *
   * Возвращает имя узла.
   */
  getName() {
    return "name" in this.item ? this.item.name : this.getId();
  }
  /**
   * Exports the node as JPG.
   *
   * Экспортирует узел в формате JPG.
   */
  async exportJpg() {
    return await this.exportItem("JPG");
  }
  /**
   * Exports the node as JSON.
   *
   * Экспортирует узел в формате JSON.
   */
  async exportJson() {
    return await this.exportItem("JSON_REST_V1");
  }
  /**
   * Returns the text content of the node.
   *
   * Возвращает текстовое содержимое узла.
   */
  getText() {
    return this.isText() ? this.item.characters.trim() : "";
  }
  /**
   * Converts format settings to ExportSettings.
   *
   * Преобразует настройки формата в ExportSettings.
   * @param formatSettings format settings/ настройки формата
   */
  getExportSettings(t) {
    switch (t) {
      case "JSON_REST_V1":
      case "JPG":
      case "PNG":
      case "SVG":
      case "PDF":
        return {
          format: t
        };
      default:
        return t;
    }
  }
  /**
   * Exports the node in the specified format.
   *
   * Экспортирует узел в указанном формате.
   * @param formatSettings format settings/ настройки формата
   */
  async exportItem(t) {
    return "exportAsync" in this.item ? await this.item.exportAsync(this.getExportSettings(t)) : "";
  }
}
class E {
  /**
   * Constructor
   * @param page Figma page or node/ страница или узел Figma
   * @param selection whether to use the current selection or the entire page/ использовать текущее выделение или всю страницу
   */
  constructor(t, e = !1) {
    /** List of main Figma items/ Список основных элементов Figma */
    h(this, "mainItem", []);
    /**
     * List of all Figma items.
     *
     * Список всех элементов Figma.
     */
    h(this, "items", []);
    this.page = t, this.selection = e, this.mainItem = this.initMain(), this.items = this.initBySelection();
  }
  /**
   * Checks if the current context is a selection.
   *
   * Проверяет, является ли текущий контекст выделением.
   */
  isSelection() {
    return this.selection && "selection" in this.page;
  }
  /**
   * Returns all frame items.
   *
   * Возвращает все элементы-фреймы.
   */
  getItemsFrame() {
    return this.filter((t) => t.isFrame());
  }
  /**
   * Returns all section items.
   *
   * Возвращает все элементы-секции.
   */
  getItemsSection() {
    return this.filter((t) => t.isSection());
  }
  /**
   * Returns all text items.
   *
   * Возвращает все текстовые элементы.
   */
  getItemsText() {
    return this.filter((t) => t.isText());
  }
  /**
   * Returns main frames from the root node.
   *
   * Возвращает основные фреймы из корневого узла.
   */
  getMainFrames() {
    const t = this.toMain();
    return t ? t.getChildrenItems().filter((e) => e.isFrame() || e.isSection()) : [];
  }
  /**
   * Returns all text nodes with their IDs grouped by text content.
   *
   * Возвращает все текстовые узлы с их идентификаторами, сгруппированные по текстовому содержимому.
   */
  getTexts() {
    const t = [];
    return this.filter(
      (i) => i.isTextNoValue()
    ).forEach((i) => {
      const n = i.getText(), o = t.find((r) => r.text === n);
      o ? o.id.push(i.getId()) : t.push({
        id: [i.getId()],
        text: n
      });
    }), t;
  }
  /**
   * Takes screenshots of the main items.
   *
   * Делает скриншоты основных элементов.
   */
  async screenshot() {
    const t = [];
    for (const e of this.mainItem)
      t.push(await e.exportJpg());
    return t;
  }
  /**
   * Initializes main items based on selection or entire page.
   *
   * Инициализирует основные элементы на основе выделения или всей страницы.
   */
  initMain() {
    return this.isSelection() ? l(
      [...this.page.selection],
      (t) => new c(t)
    ) : [new c(this.page)];
  }
  /**
   * Recursively initializes all items from the page.
   *
   * Рекурсивно инициализирует все элементы со страницы.
   * @param page Figma page or node/ страница или узел Figma
   */
  initItems(t) {
    const e = [];
    if ("children" in t)
      for (const i of t.children)
        e.push(
          new c(i),
          ...this.initItems(i)
        );
    return e;
  }
  /**
   * Initializes items based on the current selection or entire page.
   *
   * Инициализирует элементы на основе текущего выделения или всей страницы.
   */
  initBySelection() {
    if (this.isSelection()) {
      const t = [];
      for (const e of this.page.selection)
        t.push(...this.initItems(e));
      return t;
    }
    return this.initItems(this.page);
  }
  /**
   * Filters items by the specified condition.
   *
   * Фильтрует элементы по указанному условию.
   * @param callback filter function/ функция фильтрации
   */
  filter(t) {
    return this.items.filter(t);
  }
  /**
   * Returns the main (root) item in the hierarchy.
   *
   * Возвращает главный (корневой) элемент в иерархии.
   * @param item starting item/ начальный элемент
   */
  toMain(t = new c(this.page)) {
    const e = t.getParentItem();
    return e && !e.isDocument() && this.toMain(e), t;
  }
}
const a = class a {
  /**
   * Sends a message from plugin code to UI.
   *
   * Отправляет сообщение из кода плагина в UI.
   * @param type message type/ тип сообщения
   * @param message message data/ данные сообщения
   */
  static post(t, e) {
    figma.ui.postMessage({
      code: this.code,
      type: t,
      message: e
    });
  }
  /**
   * Registers a callback handler for a specific message type.
   *
   * Регистрирует обработчик callback для определённого типа сообщения.
   * @param type message type/ тип сообщения
   * @param callback callback function/ функция обратного вызова
   */
  static add(t, e) {
    const i = this.messages.find((n) => n.type === t);
    i ? i.callbackList.push(e) : this.messages.push({
      type: t,
      callbackList: [e]
    });
  }
  /**
   * Checks if the message code matches the expected code.
   *
   * Проверяет, соответствует ли код сообщения ожидаемому коду.
   * @param code message code/ код сообщения
   */
  static isCode(t) {
    return this.code === t;
  }
  /**
   * Executes all registered callbacks for a specific message type.
   *
   * Выполняет все зарегистрированные обработчики для определённого типа сообщения.
   * @param type message type/ тип сообщения
   * @param message message data/ данные сообщения
   */
  static go(t, e) {
    const i = a.messages.find((n) => n.type === t);
    i && i.callbackList.forEach((n) => n(e));
  }
};
/**
 * List of registered message handlers/
 * Список зарегистрированных обработчиков сообщений
 */
h(a, "messages", []), /**
 * Unique code for message identification/
 * Уникальный код для идентификации сообщений
 */
h(a, "code", y), /**
 * Message event handler from the plugin.
 *
 * Обработчик события сообщения от плагина.
 * @param event message event/ событие сообщения
 */
h(a, "on", (t) => {
  var i;
  const e = (i = t.data) == null ? void 0 : i.pluginMessage;
  e && a.isCode(e.code) && a.go(
    e.type,
    e.message
  );
}), window !== void 0 && window.addEventListener("message", a.on);
let u = a;
async function P(s, t = 0.56) {
  return new Promise((e) => {
    const i = new Blob([s], { type: m }), n = URL.createObjectURL(i), o = x(n);
    o ? o.onload = () => {
      const r = I(
        o,
        t * o.naturalWidth,
        "width",
        m
      );
      e(r != null ? r : "");
    } : T(i).then((r) => e(String(r != null ? r : "")));
  });
}
const G = () => {
  figma.on("selectionchange", async () => {
    const s = new E(figma.currentPage, !0);
    u.post(w, {
      frame: s,
      texts: s.getTexts(),
      screenshot: await s.screenshot()
    });
  });
};
export {
  M as FigmaAiText,
  E as FigmaFrame,
  c as FigmaItem,
  u as FigmaMessage,
  P as ensureMaxSize,
  G as makeFigmaTexts
};
