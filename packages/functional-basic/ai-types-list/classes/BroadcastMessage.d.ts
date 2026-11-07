// md5:37e46a97c4f004206901b38d43ed1264 true
/** Manages BroadcastChannel cross-tab messaging with error handling. @keywords broadcast channel, messaging, cross-tab, communication */
export declare class BroadcastMessage<Message = unknown> {
    /** Initializes the broadcast channel with message and error listeners. @keywords broadcast, channel, init, listener */
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: ErrorCenterInstance);
    /** Returns the underlying BroadcastChannel instance if supported in the current environment. @keywords channel, instance, broadcast */
    getChannel(): BroadcastChannel | undefined;
    /** Sets or updates the message reception callback handler. @keywords message, listener, callback, event */
    setCallback(callback?: (event: MessageEvent<Message>) => void): this;
    /** Sets or updates the message error callback handler. @keywords error, handler, callback, messageerror */
    setCallbackError(callbackError?: (event: MessageEvent<Message>) => void): this;
    /** Closes the channel and terminates message listening. @keywords destroy, close, cleanup */
    destroy(): this;
    /** Broadcasts a message across listening contexts. @keywords post, send, broadcast, message */
    post(message: Message): this;
}