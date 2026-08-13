// md5:bb6d23e01f8e2b1951995913f811575c true
/** BroadcastChannel message handler utility @keywords broadcast, channel, message, worker */
export declare class BroadcastMessage<Message = any> {
    /** @keywords constructor, init, channel */
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: ErrorCenterInstance);
    /** Gets the underlying BroadcastChannel instance @keywords get, channel, broadcast */
    getChannel(): BroadcastChannel | undefined;
    /** Posts a message to the channel @keywords post, send, message */
    post(message: Message): this;
    /** Sets the message reception callback @keywords set, callback, message */
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    /** Sets the message error callback @keywords set, callback, error */
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    /** Destroys the channel connection @keywords destroy, close, channel */
    destroy(): this;
}