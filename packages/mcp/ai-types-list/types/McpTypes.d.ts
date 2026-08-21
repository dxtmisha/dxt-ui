// md5:974a4d08b2096a8dba8feb2db19adb1d true
import { CallToolResult, GetPromptResult, PromptMessage, ReadResourceResult, ToolAnnotations } from '@modelcontextprotocol/sdk/types.js';
import { ServerOptions } from '@modelcontextprotocol/sdk/server/index.js';
import { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import { McpServer as SdkMcpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
/** Server metadata and initialization options @keywords mcp server options config */
export type McpServerOptions = {
    name: string;
    version: string;
    description?: string;
    options?: ServerOptions;
};
/** Text content item for MCP messages @keywords mcp content text */
export type McpContentText = {
    type: 'text';
    text: string;
};
/** Image content item for MCP messages @keywords mcp content image */
export type McpContentImage = {
    type: 'image';
    data: string;
    mimeType: string;
};
/** Resource content item for MCP messages @keywords mcp content resource */
export type McpContentResource = {
    type: 'resource';
    resource: McpResourceContents;
};
/** Union of all MCP content item types @keywords mcp content union */
export type McpContentItem = McpContentText | McpContentImage | McpContentResource;
/** Standard MCP tool result structure @keywords mcp tool result */
export type McpToolResult = CallToolResult;
/** Tool handler execution function @keywords mcp tool handler */
export type McpToolHandler<TArgs = Record<string, unknown>, TResult = unknown> = (args: TArgs, extra?: Record<string, unknown>) => Promise<TResult> | TResult;
/** Tool definition item @keywords mcp tool item definition */
export type McpToolItem<TArgs = Record<string, unknown>, TResult = unknown> = {
    name: string;
    description?: string;
    inputSchema?: unknown;
    outputSchema?: unknown;
    annotations?: ToolAnnotations;
    handler: McpToolHandler<TArgs, TResult>;
};
/** Array of tool items @keywords mcp tool list */
export type McpToolList = McpToolItem[];
/** Resource contents item payload @keywords mcp resource contents */
export type McpResourceContents = {
    uri: string;
    mimeType?: string;
    text?: string;
    blob?: string;
};
/** Standard MCP resource read result @keywords mcp resource result */
export type McpResourceResult = ReadResourceResult;
/** Handler callback for dynamic resource reading @keywords mcp resource read handler */
export type McpResourceReadHandler = (uri: URL, extra?: Record<string, unknown>) => Promise<McpResourceResult | McpResourceContents | string | Record<string, unknown>> | McpResourceResult | McpResourceContents | string | Record<string, unknown>;
/** Resource item definition @keywords mcp resource item */
export type McpResourceItem = {
    uri: string;
    name: string;
    description?: string;
    mimeType?: string;
    text?: string;
    blob?: string;
    handler?: McpResourceReadHandler;
};
/** Array of resource items @keywords mcp resource list */
export type McpResourceList = McpResourceItem[];
/** Raw resource descriptor @keywords mcp resource raw item */
export type McpResourceRawItem = {
    uri: string;
    name?: string;
    mimeType?: string;
    description?: string;
    text?: string;
    blob?: string;
    handler?: McpResourceReadHandler;
    [key: string]: unknown;
};
/** Polymorphic input for resources initialization @keywords mcp resource input */
export type McpResourceInput = McpResourceItem | McpResourceItem[] | McpResourceRawItem | McpResourceRawItem[] | Record<string, unknown> | Record<string, unknown>[];
/** Prompt argument descriptor @keywords mcp prompt argument */
export type McpPromptArgument = {
    name: string;
    description?: string;
    required?: boolean;
};
/** Prompt message item @keywords mcp prompt message */
export type McpPromptMessage = PromptMessage;
/** Standard MCP prompt result structure @keywords mcp prompt result */
export type McpPromptResult = GetPromptResult;
/** Handler callback for generating prompt content @keywords mcp prompt handler */
export type McpPromptHandler = (args: Record<string, unknown>, extra?: Record<string, unknown>) => Promise<unknown> | unknown;
/** Prompt item definition @keywords mcp prompt item */
export type McpPromptItem = {
    name: string;
    description?: string;
    arguments?: McpPromptArgument[];
    argsSchema?: unknown;
    handler: McpPromptHandler;
};
/** Array of prompt items @keywords mcp prompt list */
export type McpPromptList = McpPromptItem[];
export type { Transport, SdkMcpServer, ServerOptions, PromptMessage };