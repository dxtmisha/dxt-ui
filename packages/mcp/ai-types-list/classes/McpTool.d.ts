// md5:2196be705f755afb10b0bcff763f891b true
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
/** Manages and executes MCP tools. @keywords mcp tool manager registry */
export declare class McpTool extends McpItemAbstract<McpToolItem, McpToolItem | McpToolItem[] | McpTool> {
    /** Adds tool items or merges another McpTool instance. @keywords add register tool merge */
    add(tool: McpToolItem | McpToolItem[] | McpTool): this;
    /** Executes a registered tool by name with arguments and converts result to CallToolResult. @keywords execute run call tool */
    execute(name: string, args?: Record<string, unknown>, extra?: Record<string, unknown>): Promise<CallToolResult>;
    /** Registers all managed tools into an SDK McpServer instance. @keywords register sdk server mcp */
    register(sdkServer: SdkMcpServer): void;
}