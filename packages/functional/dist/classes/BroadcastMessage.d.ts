/**
 * A class to handle BroadcastChannel messaging.
 *
 * Класс для работы с сообщениями BroadcastChannel.
 */
export declare class BroadcastMessage<Message = any> {
    protected callback?: ((event: MessageEvent<Message>) => void) | undefined;
    protected channel?: BroadcastChannel;
    /**
     * Constructor
     * @param name channel name/ название канала
     * @param callback callback on message received/ колбэк на получение сообщения
     */
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined);
    /**
     * Send a message to the channel.
     *
     * Отправить сообщение в канал.
     * @param message message to send/ сообщение для отправки
     */
    post(message: Message): this;
    /**
     * Set the callback function to be called when a message is received.
     *
     * Установить функцию колбэка, которая будет вызвана при получении сообщения.
     * @param callback callback function/ функция колбэка
     */
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    /**
     * Update state on message received.
     *
     * Обновление состояния при получении сообщения.
     * @param event message event/ событие сообщения
     */
    protected readonly update: (event: MessageEvent<Message>) => this;
}
