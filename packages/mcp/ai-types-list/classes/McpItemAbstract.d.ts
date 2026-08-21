// md5:90c2c1027e628d136926a6184a17c32c true
/** Base abstract class for managing MCP item collections. @keywords mcp collection item manager abstract */
export declare abstract class McpItemAbstract<Item, Input = Item | Item[]> {
    /** Creates an item manager instance. @keywords constructor create */
    constructor(items?: Input);
    /** Checks if an item exists by key. @keywords has item check exist */
    hasItem(key: string): boolean;
    /** Finds a registered item by key. @keywords get item find lookup */
    getItem(key: string): Item | undefined;
    /** Returns all registered items. @keywords get items list all */
    getItems(): Item[];
    /** Adds items or manager. @keywords add abstract input */
    abstract add(input: Input): this;
    /** Adds a single item. @keywords add item single */
    addItem(item: Item): this;
    /** Adds multiple items. @keywords add items batch multiple */
    addItems(items: Item[]): this;
    /** Removes an item by key. @keywords remove delete item key */
    removeItem(key: string): this;
    /** Registers items to SDK server. @keywords register sdk server */
    abstract register(sdkServer: SdkMcpServer): void;
}