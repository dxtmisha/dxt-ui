// md5:c64e6dd12c29b5ca9d3dc75f021c1058 true
import { ReadResourceResult } from '@modelcontextprotocol/sdk/types.js';

/** Manages and reads MCP resources. @keywords mcp resource read manager */
export declare class McpResource extends McpItemAbstract<McpResourceItem, McpResourceInput | McpResource | (McpResourceItem | McpResource)[]> {
    /** Adds resource items, arrays, or merges another McpResource. @keywords add resource merge */
    add(resource: McpResourceInput | McpResource | (McpResourceItem | McpResource)[]): this;
    /** Adds a single resource item or raw configuration. @keywords add item resource */
    addItem(item: McpResourceItem | Record<string, unknown>): this;
    /** Reads a resource by URI and returns ReadResourceResult. @keywords read resource uri */
    read(uri: string | URL, extra?: Record<string, unknown>): Promise<ReadResourceResult>;
    /** Registers all managed resources into an SDK McpServer. @keywords register sdk server */
    register(sdkServer: SdkMcpServer): void;
}