// md5:8ce577bdde33e46016500d41147968b2 true
import { FigmaPostAbstract } from './FigmaPostAbstract';
/** Frontend messenger for Figma UI. @keywords figma ui messenger frontend communication */
export declare class FigmaUiMessenger extends FigmaPostAbstract {
    /** Retrieves singleton instance of FigmaUiMessenger. @keywords figma ui messenger singleton get */
    static getInstance(): FigmaUiMessenger;
    /** Resets current singleton instance. @keywords figma ui messenger reset singleton */
    static reset(): void;
    /** Sends a message to the Figma plugin. @keywords figma ui post message plugin communication */
    post<Message>(type: string, message?: Message): void;
}