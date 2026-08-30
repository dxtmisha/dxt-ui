// md5:b016a41a0d993e0dd36149d7c4ad7e83 true
/** Manages cross-context messaging using the BroadcastChannel API. @keywords broadcast channel, messaging, cross-tab, communication */
export declare class BroadcastMessage<Message = any> {
    /** Initializes the broadcast channel with handlers. @keywords broadcast, channel, init */
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: ErrorCenterInstance);
    /** Gets the underlying BroadcastChannel instance if available. @keywords broadcast channel, instance */
    getChannel(): BroadcastChannel | undefined;
    /** Sends a message through the broadcast channel. @keywords post message, broadcast, send */
    post(message: Message): this;
    /** Sets the message reception callback handler. @keywords onmessage, listener, callback */
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    /** Sets the message error callback handler. @keywords onmessageerror, error handler */
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    /** Closes the broadcast channel and stops listening for messages. @keywords destroy, close, cleanup */
    destroy(): this;
}