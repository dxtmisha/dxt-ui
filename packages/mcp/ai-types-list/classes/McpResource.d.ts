// md5:9a731059196bd4c23fd240406453b144 true
import type { ReadResourceResult } from '@modelcontextprotocol/sdk/types.js';
/** Manages and reads Model Context Protocol (MCP) resources. @keywords mcp, resource, manager, registry */
export declare class McpResource extends McpItemAbstract<McpResourceItem, McpResourceInput | McpResource | (McpResourceItem | McpResource)[]> {
    /** Adds resource items or merges another McpResource instance. @keywords add, merge, resource */
    add(resource: McpResourceInput | McpResource | (McpResourceItem | McpResource)[]): this;
    /** Adds a single resource item or configuration to the registry. @keywords add, register, item */
    addItem(item: McpResourceItem | Record<string, unknown>): this;
    /** Reads a resource by URI and returns ReadResourceResult. @keywords read, uri, content */
    read(uri: string | URL, extra?: Record<string, unknown>): Promise<ReadResourceResult>;
    /** Registers all managed resources into an SDK McpServer instance. @keywords register, server, sdk */
    register(sdkServer: SdkMcpServer): void;
}