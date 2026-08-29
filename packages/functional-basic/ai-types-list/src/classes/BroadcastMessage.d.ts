// md5:b016a41a0d993e0dd36149d7c4ad7e83 true
/** Manages cross-tab/window communication using the BroadcastChannel API. @keywords broadcast channel, inter-tab messaging, communication */
export declare class BroadcastMessage<Message = any> {
    /** Initializes the broadcast channel with event handlers and error reporting. @keywords constructor, init */
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: any);
    /** Gets the underlying BroadcastChannel instance if available in the current runtime. @keywords channel instance, dom */
    getChannel(): BroadcastChannel | undefined;
    /** Sends a message across the broadcast channel. @keywords send, post message, publish */
    post(message: Message): this;
    /** Sets the message reception listener callback. @keywords listener, onmessage, handler */
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    /** Sets the message error listener callback. @keywords error listener, onmessageerror */
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    /** Closes the broadcast channel and stops listening for messages. @keywords close, destroy, unsubscribe */
    destroy(): this;
}