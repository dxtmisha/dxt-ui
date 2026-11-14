// md5:3e4b09e517ffad420422a7a97c730c35 true
import { FigmaPostAbstract } from '@dxtmisha/figma';
/** Messenger for the Figma plugin main sandbox (backend). @keywords figma plugin messenger backend post */
export declare class FigmaPluginMessenger extends FigmaPostAbstract {
    /** Gets the singleton instance of the Figma plugin messenger. @keywords singleton instance get */
    static getInstance(): FigmaPluginMessenger;
    /** Resets the current singleton instance. @keywords reset singleton instance */
    static reset(): void;
    /** Sends a message to the Figma UI environment. @keywords post send message figma ui */
    post<Message>(type: string, message?: Message): void;
}