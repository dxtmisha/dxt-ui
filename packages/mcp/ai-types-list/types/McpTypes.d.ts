// md5:56b4e8c04533fb608ebd50159beefed2 true
import type { CallToolResult, GetPromptResult, PromptMessage, ReadResourceResult, ToolAnnotations } from '@modelcontextprotocol/sdk/types.js';
import type { ServerOptions } from '@modelcontextprotocol/sdk/server/index.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import type { McpServer as SdkMcpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export type McpServerOptions = {
    name: string;
    version: string;
    description?: string;
    options?: ServerOptions;
};

export type McpContentText = {
    type: 'text';
    text: string;
};

export type McpContentImage = {
    type: 'image';
    data: string;
    mimeType: string;
};

export type McpContentResource = {
    type: 'resource';
    resource: McpResourceContents;
};

export type McpContentItem = McpContentText | McpContentImage | McpContentResource;

export type McpToolResult = CallToolResult;

/** Execution handler callback for MCP tools @keywords tool, handler, execution */
export type McpToolHandler<TArgs = Record<string, unknown>, TResult = unknown> = (args: TArgs, extra?: Record<string, unknown>) => Promise<TResult> | TResult;

/** Tool definition item for MCP server registration @keywords tool, definition, schema */
export type McpToolItem<TArgs = Record<string, unknown>, TResult = unknown> = {
    name: string;
    description?: string;
    inputSchema?: unknown;
    outputSchema?: unknown;
    annotations?: ToolAnnotations;
    handler: McpToolHandler<TArgs, TResult>;
};

export type McpToolList = McpToolItem[];

export type McpResourceContents = {
    uri: string;
    mimeType?: string;
    text?: string;
    blob?: string;
};

export type McpResourceResult = ReadResourceResult;

/** Handler callback for reading dynamic MCP resources @keywords resource, reader, dynamic */
export type McpResourceReadHandler = (uri: URL, extra?: Record<string, unknown>) => Promise<McpResourceResult | McpResourceContents | string | Record<string, unknown>> | McpResourceResult | McpResourceContents | string | Record<string, unknown>;

/** MCP resource definition item with static content or dynamic reader handler @keywords resource, uri, handler */
export type McpResourceItem = {
    uri: string;
    name: string;
    description?: string;
    mimeType?: string;
    text?: string;
    blob?: string;
    handler?: McpResourceReadHandler;
};

export type McpResourceList = McpResourceItem[];

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

/** Polymorphic resource input format for batch registration @keywords resource, input, polymorphic */
export type McpResourceInput = McpResourceItem | McpResourceItem[] | McpResourceRawItem | McpResourceRawItem[] | Record<string, unknown> | Record<string, unknown>[];

export type McpPromptArgument = {
    name: string;
    description?: string;
    required?: boolean;
};

export type McpPromptMessage = PromptMessage;

export type McpPromptResult = GetPromptResult;

/** Handler callback for generating prompt content @keywords prompt, handler, generation */
export type McpPromptHandler = (args: Record<string, unknown>, extra?: Record<string, unknown>) => Promise<unknown> | unknown;

/** Prompt definition item for MCP server registration @keywords prompt, template, item */
export type McpPromptItem = {
    name: string;
    description?: string;
    arguments?: McpPromptArgument[];
    argsSchema?: unknown;
    handler: McpPromptHandler;
};

export type McpPromptList = McpPromptItem[];

export type { Transport, SdkMcpServer, ServerOptions, PromptMessage };