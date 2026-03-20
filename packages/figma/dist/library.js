var f = Object.defineProperty;
var x = (i, t, e) => t in i ? f(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => x(i, typeof t != "symbol" ? t + "" : t, e);
import "@dxtmisha/scripts/ai";
import { uint8ArrayToBase64 as I, forEach as p, random as T, getElementImage as M, resizeImageByMax as y, blobToBase64 as w } from "@dxtmisha/functional-basic";
const u = "image/jpeg", E = "texts", l = `
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
class G {
  constructor(t, e) {
    this.ai = t, this.data = e;
  }
  async make() {
    return this.ai.resetImages(), this.makeImage(), console.warn("texts", l.replace("[texts]", this.initTexts())), console.log(
      "getImages",
      this.ai.getImages(),
      await this.ai.generate(l.replace("[texts]", this.initTexts()))
    ), this;
  }
  makeImage() {
    return this.data.screenshot.forEach(
      (t) => {
        this.ai.addImage({
          mime: u,
          base64: I(t)
        });
      }
    ), this;
  }
  initTexts() {
    return p(
      this.data.texts,
      (t) => t.text
    ).join(`\r
`);
  }
}
class o {
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
      return new o(t);
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
      t.push(new o(e));
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
class S {
  /**
   * Constructor
   * @param page Figma page or node/ страница или узел Figma
   * @param selection whether to use the current selection or the entire page/ использовать текущее выделение или всю страницу
   */
  constructor(t, e = !1) {
    /** List of main Figma items/ Список основных элементов Figma */
    r(this, "mainItem", []);
    /**
     * List of all Figma items.
     *
     * Список всех элементов Figma.
     */
    r(this, "items", []);
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
      (s) => s.isTextNoValue()
    ).forEach((s) => {
      const c = s.getText(), a = t.find((n) => n.text === c);
      a ? a.id.push(s.getId()) : t.push({
        id: [s.getId()],
        text: c
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
    return this.isSelection() ? p(
      [...this.page.selection],
      (t) => new o(t)
    ) : [new o(this.page)];
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
      for (const s of t.children)
        e.push(
          new o(s),
          ...this.initItems(s)
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
  toMain(t = new o(this.page)) {
    const e = t.getParentItem();
    return e && !e.isDocument() && this.toMain(e), t;
  }
}
class h {
  /**
   * Checks if the provided code matches the current post code.
   *
   * Проверяет, совпадает ли предоставленный код с текущим кодом сообщения.
   * @param code The code to check / Проверяемый код
   */
  static is(t) {
    return this.code === t;
  }
  /**
   * Returns the current post code.
   *
   * Возвращает текущий код сообщения.
   */
  static get() {
    return this.code;
  }
  /**
   * Sets a new post code. Can only be called once.
   *
   * Устанавливает новый код сообщения. Можно вызвать только один раз.
   * @param code The new code to set / Новый код для установки
   */
  static set(t) {
    this.isEditable && (this.code = t, this.isEditable = !1);
  }
}
r(h, "code", `figma-${T(1e5, 999999)}`), r(h, "isEditable", !0);
class d {
  constructor() {
    r(this, "isMake", !1);
    r(this, "posts", /* @__PURE__ */ new Map());
    /**
     * Internal message handler that filters by post code and notifies listeners.
     *
     * Внутренний обработчик сообщений, который фильтрует по коду сообщения и уведомляет слушателей.
     * @param data The received message data / Данные полученного сообщения
     */
    r(this, "onMessage", (t) => {
      t && h.is(t.code) && this.notify(
        t.type,
        t.message
      );
    });
  }
  /**
   * Adds a callback listener for a specific message type.
   *
   * Добавляет колбэк-слушатель для определенного типа сообщения.
   * @param type The type of the message / Тип сообщения
   * @param callback The function to call when the message is received / Функция, вызываемая при получении сообщения
   */
  add(t, e) {
    const s = this.posts.get(t);
    s ? s.push(e) : this.posts.set(t, [e]);
  }
  /**
   * Initializes the message listener.
   *
   * Инициализирует слушатель сообщений.
   */
  make() {
    this.isMake || (this.isMake = !0, this.prepare());
  }
  /**
   * Notifies all registered listeners for a specific message type.
   *
   * Уведомляет всех зарегистрированных слушателей для определенного типа сообщения.
   * @param type The type of the message / Тип сообщения
   * @param message The message data / Данные сообщения
   */
  notify(t, e) {
    var s;
    (s = this.posts.get(t)) == null || s.forEach((c) => c(e));
  }
}
class F extends d {
  /**
   * Sends a message to the Figma UI.
   *
   * Отправляет сообщение в UI Figma.
   * @param type The type of the message / Тип сообщения
   * @param message The message data / Данные сообщения
   */
  post(t, e) {
    figma.ui.postMessage({
      code: h.get(),
      type: t,
      message: e
    });
  }
  /**
   * Initializes the listener using the figma.ui.onmessage API.
   *
   * Инициализирует слушатель, используя API figma.ui.onmessage.
   */
  prepare() {
    figma.ui.onmessage = (t) => this.onMessage(t);
  }
}
class b extends d {
  /**
   * Sends a message to the Figma plugin.
   *
   * Отправляет сообщение в плагин Figma.
   * @param type The type of the message / Тип сообщения
   * @param message The message data / Данные сообщения
   */
  post(t, e) {
    parent.postMessage({
      pluginMessage: {
        code: h.get(),
        type: t,
        message: e
      }
    }, "*");
  }
  /**
   * Initializes the listener using the window message event.
   *
   * Инициализирует слушатель, используя событие message объекта window.
   */
  prepare() {
    window.addEventListener(
      "message",
      (t) => {
        var e;
        return this.onMessage((e = t.data) == null ? void 0 : e.pluginMessage);
      }
    );
  }
}
let g;
function P() {
  return g || (g = new F(), g.make()), g;
}
let m;
function N() {
  return m || (m = new b(), m.make()), m;
}
async function J(i, t = 0.56) {
  return new Promise((e) => {
    const s = new Blob([i], { type: u }), c = URL.createObjectURL(s), a = M(c);
    a ? a.onload = () => {
      const n = y(
        a,
        t * a.naturalWidth,
        "width",
        u
      );
      e(n != null ? n : "");
    } : w(s).then((n) => e(String(n != null ? n : "")));
  });
}
const B = () => {
  figma.on("selectionchange", async () => {
    const i = new S(figma.currentPage, !0);
    P().post(E, {
      frame: i,
      texts: i.getTexts(),
      screenshot: await i.screenshot()
    });
  });
};
export {
  G as FigmaAiText,
  S as FigmaFrame,
  o as FigmaItem,
  F as FigmaPluginMessenger,
  d as FigmaPostAbstract,
  h as FigmaPostCode,
  b as FigmaUiMessenger,
  J as ensureMaxSize,
  B as makeFigmaTexts,
  P as useFigmaPluginMessenger,
  N as useFigmaUiMessenger
};
