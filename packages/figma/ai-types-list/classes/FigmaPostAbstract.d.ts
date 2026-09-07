// md5:c60ea43dfe4b704dfb5dfb5b07420d94 true
/** Base abstract class for bidirectional messaging between Figma plugin logic and UI iframe. @keywords figma, messaging, bridge, postMessage, comms */
export declare abstract class FigmaPostAbstract {
    /** Sends a typed message to the counterpart environment. @keywords postMessage, emit, send, dispatch */
    abstract post<Message>(type: string, message?: Message): void;
    /** Registers an event listener callback for a specific message type. @keywords addEventListener, on, listen, subscribe */
    add<Message>(type: string, callback: UiFigmaMessengerCallback<Message>, once?: boolean): this;
    /** Unregisters an event listener callback for a specific message type. @keywords removeEventListener, off, unlisten, unsubscribe */
    remove<Message>(type: string, callback: UiFigmaMessengerCallback<Message>): this;
    /** Initializes and binds the message listener. @keywords init, start, listen, setup */
    make(): this;
}