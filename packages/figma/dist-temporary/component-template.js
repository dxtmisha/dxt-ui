var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const FIGMA_MESSAGE_CODE = "+)w496um509nu9ue06eu94=vl0efef";
const _FigmaMessage = class _FigmaMessage {
  /**
   * Sends a message from plugin code to UI.
   *
   * Отправляет сообщение из кода плагина в UI.
   * @param type message type/ тип сообщения
   * @param message message data/ данные сообщения
   */
  static post(type, message) {
    figma.ui.postMessage({
      code: this.code,
      type,
      message
    });
  }
  /**
   * Registers a callback handler for a specific message type.
   *
   * Регистрирует обработчик callback для определённого типа сообщения.
   * @param type message type/ тип сообщения
   * @param callback callback function/ функция обратного вызова
   */
  static add(type, callback) {
    const item = this.messages.find((item2) => item2.type === type);
    if (item) {
      item.callbackList.push(callback);
    } else {
      this.messages.push({
        type,
        callbackList: [callback]
      });
    }
  }
  /**
   * Checks if the message code matches the expected code.
   *
   * Проверяет, соответствует ли код сообщения ожидаемому коду.
   * @param code message code/ код сообщения
   */
  static isCode(code) {
    return this.code === code;
  }
  /**
   * Executes all registered callbacks for a specific message type.
   *
   * Выполняет все зарегистрированные обработчики для определённого типа сообщения.
   * @param type message type/ тип сообщения
   * @param message message data/ данные сообщения
   */
  static go(type, message) {
    const item = _FigmaMessage.messages.find((item2) => item2.type === type);
    if (item) {
      item.callbackList.forEach((callback) => callback(message));
    }
  }
};
/**
 * List of registered message handlers/
 * Список зарегистрированных обработчиков сообщений
 */
__publicField(_FigmaMessage, "messages", []);
/**
 * Unique code for message identification/
 * Уникальный код для идентификации сообщений
 */
__publicField(_FigmaMessage, "code", FIGMA_MESSAGE_CODE);
/**
 * Message event handler from the plugin.
 *
 * Обработчик события сообщения от плагина.
 * @param event message event/ событие сообщения
 */
__publicField(_FigmaMessage, "on", (event) => {
  const data = event.data?.pluginMessage;
  if (data && _FigmaMessage.isCode(data.code)) {
    _FigmaMessage.go(
      data.type,
      data.message
    );
  }
});
(() => {
  if (window !== void 0) {
    window.addEventListener("message", _FigmaMessage.on);
  }
})();
let FigmaMessage = _FigmaMessage;
export {
  FigmaMessage
};
//# sourceMappingURL=component-template.js.map
