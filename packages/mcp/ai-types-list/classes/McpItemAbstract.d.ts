// md5:844668d4599ec485597602bb220c1133 true
/** Base abstract class for managing MCP item collections (Tools, Resources, Prompts). @keywords mcp collection registry manager */
export declare abstract class McpItemAbstract<Item, Input = Item | Item[]> {
    /** Initializes MCP item collection with optional initial items. @keywords constructor init */
    constructor(items?: Input);
    /** Checks if an item with the given key is registered. @keywords hasItem exists check */
    hasItem(key: string): boolean;
    /** Finds a registered item by its key identifier. @keywords getItem find lookup */
    getItem(key: string): Item | undefined;
    /** Returns a copy of all registered items. @keywords getItems list all */
    getItems(): Item[];
    /** Adds an item, array of items, or merges another manager instance. @keywords add merge batch */
    abstract add(input: Input): this;
    /** Adds a single item to the registry. @keywords addItem add single */
    addItem(item: Item): this;
    /** Adds multiple items to the registry. @keywords addItems add batch array */
    addItems(items: Item[]): this;
    /** Removes an item from the registry by its key. @keywords removeItem delete unregister */
    removeItem(key: string): this;
    /** Registers all managed items into an SDK McpServer instance. @keywords register sdk McpServer */
    abstract register(sdkServer: SdkMcpServer): void;
}