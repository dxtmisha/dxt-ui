// md5:3ca4c3244d5fd6fe48f679250deeb67c true
import { FigmaPostAbstract } from '@dxtmisha/figma';
/** Messenger for the Figma plugin backend environment. @keywords figma, plugin, messenger, backend */
export declare class FigmaPluginMessenger extends FigmaPostAbstract {
    /** Gets the singleton instance of the Figma plugin messenger. @keywords singleton, instance, getInstance */
    static getInstance(): FigmaPluginMessenger;
    /** Sends a message to the Figma UI. @keywords post, message, send, ui, communication */
    post<Message>(type: string, message?: Message): void;
}