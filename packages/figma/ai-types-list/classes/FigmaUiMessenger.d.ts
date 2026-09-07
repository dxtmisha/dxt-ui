// md5:309fa73a932ed735c3742cdf475afd56 true
/** Messenger for the Figma UI side frontend. @keywords figma ui messenger frontend communication */
export declare class FigmaUiMessenger extends FigmaPostAbstract {
    /** Gets the singleton instance of FigmaUiMessenger. @keywords instance singleton figma ui messenger */
    static getInstance(): FigmaUiMessenger;
    /** Sends a message to the Figma plugin backend. @keywords post send message figma plugin ui */
    post<Message>(type: string, message?: Message): void;
}