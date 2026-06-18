1) All these methods are in the @dxtmisha/figma-code library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  },
  "./style.css": "./dist/style.css",
  "./types/*": "./dist/*",
  "./types/**/*.d.ts": "./dist/**/*.d.ts"
}

// File: classes/FigmaAiText.d.ts
export declare class FigmaAiText {
    constructor(ai: AiAbstract, data: UiFigmaMessageTexts);
    make(): Promise<this>;
}

// File: classes/FigmaClientStorage.d.ts
/** Figma client storage wrapper. */
export declare class FigmaClientStorage<T> {
    /**
     * Get class instance.
     * @param name value name
     * @returns current instance
     */
    static getInstance<T>(name: string): FigmaClientStorage<T>;
    constructor(name: string, cache?: number | undefined);
    /**
     * Get data from storage.
     * @param defaultValue default value
     */
    get(defaultValue?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /**
     * Set data in storage.
     * @param value new values
     * @returns current value
     */
    set(value?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /** Remove data from storage. */
    remove(): Promise<this>;
}

// File: classes/FigmaFrame.d.ts
/** Figma frames and elements manager. */
export declare class FigmaFrame {
    /**
     * @param page Figma page or node
     * @param selection use selection or entire page
     */
    constructor(page: UiFigmaNode, selection?: boolean);
    /** Check if context is a selection. */
    isSelection(): this is {
        page: PageNode;
    };
    /** Get all frame items. */
    getItemsFrame(): FigmaItem<FrameNode>[];
    /** Get all section items. */
    getItemsSection(): FigmaItem<SectionNode>[];
    /** Get all text items. */
    getItemsText(): FigmaItem<TextNode>[];
    /** Get frames info (names, IDs, screenshots). */
    getItemsInfo(): Promise<UiFigmaFramesList>;
    /** Get CSS styles for all items. */
    getItemsCss(): Promise<UiFigmaFrameStylesCssList>;
    /** Get frames with styles. */
    getItemsStyles(): Promise<UiFigmaFrameStylesList>;
    /** Get main frames from root. */
    getMainFrames(): FigmaItem[];
    /** Get main items info. */
    getMainItemsInfo(): Promise<UiFigmaFramesList>;
    /** Get main frames with styles. */
    getMainItemsStyles(): Promise<UiFigmaFrameStylesList>;
    /** Get text nodes grouped by content. */
    getTexts(): UiFigmaItemText[];
    /** Screenshot main items. */
    screenshot(): Promise<Uint8Array<ArrayBufferLike>[]>;
}

// File: classes/FigmaFramesSelected.d.ts
/** Manages selected frames in plugin. */
export declare class FigmaFramesSelected {
    /**
     * Check if frame ID is selected.
     * @param id Frame ID
     */
    static has(id: string): boolean;
    /** Get current selected frame IDs. */
    static get(): string[];
    /** Add frame ID to selection. */
    static add(id: string): void;
    /** Remove frame ID from selection. */
    static remove(id: string): void;
    /**
     * Toggle frame selection state.
     * @param id Frame ID
     * @param selected selection state
     */
    static toggle(id: string, selected: boolean): void;
    /** Sync selection state via messenger. */
    static send(): void;
}

// File: classes/FigmaItem.d.ts
/** Figma node wrapper. */
export declare class FigmaItem<T extends UiFigmaNode = UiFigmaNode> {
    constructor(item: T);
    isDocument(): this is {
        item: DocumentNode;
    };
    isFrame(): this is {
        item: FrameNode;
    };
    isSection(): this is {
        item: SectionNode;
    };
    isText(): this is {
        item: TextNode;
    };
    isTextNoValue(): this is {
        item: TextNode;
    };
    inCurrentPage(): boolean;
    /** Get Figma node. */
    get(): T;
    getType(): "SLICE" | "FRAME" | "GROUP" | "COMPONENT_SET" | "COMPONENT" | "INSTANCE" | "BOOLEAN_OPERATION" | "VECTOR" | "STAR" | "LINE" | "ELLIPSE" | "POLYGON" | "RECTANGLE" | "TEXT" | "TEXT_PATH" | "TRANSFORM_GROUP" | "STICKY" | "CONNECTOR" | "SHAPE_WITH_TEXT" | "CODE_BLOCK" | "STAMP" | "WIDGET" | "EMBED" | "LINK_UNFURL" | "MEDIA" | "SECTION" | "HIGHLIGHT" | "WASHI_TAPE" | "TABLE" | "SLIDE" | "SLIDE_ROW" | "SLIDE_GRID" | "SLOT" | "INTERACTIVE_SLIDE_ELEMENT" | "DOCUMENT" | "PAGE" | undefined;
    getParent(): (BaseNode & ChildrenMixin) | undefined;
    getParentItem(): FigmaItem | undefined;
    getParentPage(): PageNode | undefined;
    getParentPageItem(): FigmaItem | undefined;
    getChildren(): UiFigmaNode[];
    getChildrenItems(): FigmaItem[];
    getId(): string;
    getName(): string;
    getText(): string;
    getCss(): Promise<Record<string, string>>;
    getInfo(): Promise<UiFigmaFramesItem>;
    getStyles(): Promise<UiFigmaFrameStylesItem>;
    exportJpg(): Promise<Uint8Array<ArrayBufferLike> | "">;
    exportJson(): Promise<Uint8Array<ArrayBufferLike> | "">;
    exportJsonCompact(): Promise<UiFigmaFrameStylesData | undefined>;
    /** Select node. */
    toSelection(): void;
    /** Move to page and select node. */
    toPageAndSelection(): Promise<void>;
}

// File: classes/FigmaPluginMessenger.d.ts
/** Figma plugin backend messenger. */
export declare class FigmaPluginMessenger extends FigmaPostAbstract {
    static getInstance(): FigmaPluginMessenger;
    /** Send message to UI. */
    post<Message>(type: string, message?: Message): void;
}

// File: classes/FigmaStorage.d.ts
/** Figma PluginData storage wrapper. */
export declare class FigmaStorage<T> {
    /**
     * Get instance.
     * @param name value name
     * @param item data container
     */
    static getInstance<T>(name: string, item?: UiFigmaNode): FigmaStorage<T>;
    /**
     * Get instance by ID.
     * @param id object id
     */
    static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>;
    constructor(name: string, item?: PluginDataMixin, cache?: number | undefined);
    get(defaultValue?: T | (() => T)): T | undefined;
    set(value?: T | (() => T)): T | undefined;
    remove(): this;
}

// File: classes/FigmaStorageData.d.ts
export type FigmaStorageDataValue<T> = {
    value: T;
    age: number;
};
/** Figma storage data manager. */
export declare class FigmaStorageData<T> {
    constructor(name: string, cache?: number | undefined);
    isNull(): boolean;
    isCache(): boolean;
    isValue(): boolean;
    get(): T | undefined;
    getAge(): number | undefined;
    getName(): string;
    getCache(): number | undefined;
    set(value?: T, age?: number): this;
    setByObject(value?: FigmaStorageDataValue<T>): this;
    setValue(value?: T): this;
    setAge(age?: number): this;
    update(value?: T): this;
    remove(): this;
    toValue(): FigmaStorageDataValue<T>;
}

// File: classes/FigmaTopLevelFrames.d.ts
/** Manages top-level frames list. */
export declare class FigmaTopLevelFrames {
    /** Get cached list of top-level frames. */
    static get(): Promise<UiFigmaFramesList>;
    /** Listen for frame requests and send data. */
    static send(): void;
}

// File: config.d.ts
export declare const FIGMA_IMAGE_TYPE = "image/jpeg";
export declare const FIGMA_MESSAGE_TEXTS = "texts";

// File: functions/getFigmaFrameById.d.ts
/** Get FigmaFrame by ID. */
export declare function getFigmaFrameById(id: string): Promise<FigmaFrame | undefined>;

// File: functions/getFigmaItemById.d.ts
/** Get Figma item wrapper by ID. */
export declare function getFigmaItemById<T extends UiFigmaNode = UiFigmaNode>(id: string): Promise<FigmaItem<T> | undefined>;

// File: functions/getFigmaItemByIdOrRoot.d.ts
/** Get Figma node by ID or figma.root. */
export declare function getFigmaItemByIdOrRoot<T extends UiFigmaNode = UiFigmaNode>(id?: string): Promise<T>;

// File: functions/makeFigmaFrameSelection.d.ts
/** Sync Figma selection changes to UI. */
export declare const makeFigmaFrameSelection: () => void;

// File: functions/makeFigmaTexts.d.ts
/** Sync Figma text selection to UI. */
export declare const makeFigmaTexts: () => void;

// File: functions/setupClientStorage.d.ts
/** Init client storage listeners. */
export declare function setupClientStorage(): void;

// File: functions/setupFrameSelection.d.ts
/** Init bidirectional frame selection management. */
export declare function setupFrameSelection(): void;

// File: functions/setupFrameStyles.d.ts
/** Listen for style update messages. */
export declare function setupFrameStyles(): void;

// File: functions/setupStorage.d.ts
/** Init storage listeners. */
export declare function setupStorage(): void;

// File: functions/toFrameSelection.d.ts
/** Focus and select item by ID. */
export declare function toFrameSelection(id?: string): Promise<void>;

// File: library.d.ts
export * from './classes/FigmaClientStorage';
export * from './classes/FigmaFrame';
export * from './classes/FigmaFramesSelected';
export * from './classes/FigmaItem';
export * from './classes/FigmaPluginMessenger';
export * from './classes/FigmaStorage';
export * from './classes/FigmaStorageData';
export * from './classes/FigmaTopLevelFrames';
export * from './functions/getFigmaFrameById';
export * from './functions/getFigmaItemById';
export * from './functions/getFigmaItemByIdOrRoot';
export * from './functions/makeFigmaFrameSelection';
export * from './functions/makeFigmaTexts';
export * from './functions/setupClientStorage';
export * from './functions/setupFrameSelection';
export * from './functions/setupFrameStyles';
export * from './functions/setupStorage';
export * from './functions/toFrameSelection';
export * from './types/figmaTypes';

// File: types/figmaTypes.d.ts
export type UiFigmaNode = ChildrenMixin | SceneNode | DefaultShapeMixin | DocumentNode | PageNode | FrameNode | SectionNode | TextNode | BaseNode;
export type UiFigmaItemText = {
    id: string[];
    text: string;
};
export type UiFigmaExportFormat = 'PNG' | 'JPG' | 'SVG' | 'PDF' | 'JSON_REST_V1';
export type UiFigmaMessageTexts = {
    frame: FigmaFrame;
    texts: UiFigmaItemText[];
    screenshot: Uint8Array[];
};