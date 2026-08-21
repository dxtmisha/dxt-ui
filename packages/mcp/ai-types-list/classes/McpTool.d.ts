// md5:4718e0071cea64f3c779412609cc8e0c true
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
/** Manages and executes MCP tools. @keywords McpTool, tool_management, execution */
export declare class McpTool extends McpItemAbstract<McpToolItem, McpToolItem | McpToolItem[] | McpTool> {
    /** Adds tool items or merges another McpTool instance. @keywords add, tool, merge */
    add(tool: McpToolItem | McpToolItem[] | McpTool): this;
    /** Executes a registered tool by name with arguments. @keywords execute, tool, call */
    execute(name: string, args?: Record<string, unknown>, extra?: Record<string, unknown>): Promise<CallToolResult>;
    /** Registers all managed tools into an SDK McpServer instance. @keywords register, server, mcp */
    register(sdkServer: SdkMcpServer): void;
}