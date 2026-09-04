// md5:572c4257a67a0d8694b6023b39d77824 true
import { McpServer as SdkMcpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

/** Main orchestrator class for running a Model Context Protocol (MCP) server. @keywords mcp, server, orchestrator */
export declare class Mcp {
    /** Initializes MCP server with optional tools, resources, prompts, and options. @keywords constructor, init */
    constructor(tools?: McpToolItem[] | McpTool, resources?: McpResourceInput | McpResource | (McpResourceItem | McpResource)[], prompts?: McpPromptItem | McpPromptItem[] | McpPrompt, options?: McpServerOptions);
    /** Checks whether the MCP server is currently running. @keywords status, running, isStart */
    isStart(): boolean;
    /** Returns current server configuration options. @keywords options, config, metadata */
    getOptions(): McpServerOptions;
    /** Returns the prompt manager instance. @keywords prompts, manager */
    getPromptManager(): McpPrompt;
    /** Returns all registered prompt items. @keywords prompts, list */
    getPrompts(): McpPromptList;
    /** Returns the resource manager instance. @keywords resources, manager */
    getResourceManager(): McpResource;
    /** Returns all registered resource items. @keywords resources, list */
    getResources(): McpResourceList;
    /** Returns the active underlying SDK McpServer instance if started. @keywords sdk, server, instance */
    getServer(): SdkMcpServer | undefined;
    /** Returns the tool manager instance. @keywords tools, manager */
    getToolManager(): McpTool;
    /** Returns all registered tool items. @keywords tools, list */
    getTools(): McpToolList;
    /** Adds prompt definitions or merges another prompt manager into this server. @keywords add, prompt, register */
    addPrompt(prompt: McpPromptItem | McpPromptItem[] | McpPrompt): this;
    /** Adds resource definitions or merges another resource manager into this server. @keywords add, resource, register */
    addResource(resource: McpResourceInput | McpResource | (McpResourceItem | McpResource)[]): this;
    /** Adds tool definitions or merges another tool manager into this server. @keywords add, tool, register */
    addTool(tool: McpToolItem | McpToolItem[] | McpTool): this;
    /** Starts the MCP server, registers all components, and binds transport. @keywords start, listen, transport */
    start(transport?: Transport): Promise<SdkMcpServer>;
    /** Stops the MCP server and closes active connections. @keywords stop, close, shutdown */
    stop(): Promise<void>;
}