// md5:b83ac3bf8a4bef842f3d839b5ae3df91 true
/** Manages inter-context communication via BroadcastChannel API. @keywords broadcast channel, messaging, cross-tab, ipc */
export declare class BroadcastMessage<Message = unknown> {
    /** Initializes the broadcast channel with optional message/error handlers. @keywords broadcast, channel, init, listener */
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: ErrorCenterInstance);
    /** Returns the active BroadcastChannel instance if available in the environment. @keywords channel instance, dom, get */
    getChannel(): BroadcastChannel | undefined;
    /** Sets the callback executed when a message is received. @keywords onmessage, listener, handler, callback */
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    /** Sets the callback executed on message errors. @keywords messageerror, error handler, callback */
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    /** Sends a message to all listening contexts on the channel. @keywords send, postMessage, emit, publish */
    post(message: Message): this;
    /** Closes the channel and stops listening for messages. @keywords close, cleanup, unbind, destroy */
    destroy(): this;
}