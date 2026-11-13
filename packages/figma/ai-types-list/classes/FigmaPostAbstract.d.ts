// md5:483b055e2f04e5d5a314949eb40629bb true
import type { UiFigmaMessengerCallback, UiFigmaMessengerData, UiFigmaMessengerList } from '../types/figmaMessengerTypes';
/** Base abstract class for managing messaging between the Figma plugin and UI. @keywords figma, messenger, post-message, bridge */
export declare abstract class FigmaPostAbstract {
    /** Adds a callback listener for a specific message type. @keywords add, listener, subscribe, on */
    add<Message>(type: string, callback: UiFigmaMessengerCallback<Message>, once?: boolean): this;
    /** Removes a callback listener for a specific message type. @keywords remove, listener, unsubscribe, off */
    remove<Message>(type: string, callback: UiFigmaMessengerCallback<Message>): this;
    /** Initializes the message listener. @keywords init, listener, setup */
    make(): this;
    /** Sends a message to the target endpoint. @keywords post, send, message, emit */
    abstract post<Message>(type: string, message?: Message): void;
}