// md5:7173bc3cee7f7ef0372fd64861ff9c07 true
import { McpServer as SdkMcpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

/** Main orchestrator class for running Model Context Protocol (MCP) server. @keywords mcp server orchestrator */
export declare class Mcp {
    /** Creates an Mcp server instance. @keywords mcp constructor initialize */
    constructor(tools?: McpToolItem[] | McpTool, resources?: McpResourceInput | McpResource | (McpResourceItem | McpResource)[], prompts?: McpPromptItem | McpPromptItem[] | McpPrompt, options?: McpServerOptions);
    /** Checks whether the MCP server is currently running. @keywords mcp status is_running */
    isStart(): boolean;
    /** Returns current server metadata options. @keywords mcp options config */
    getOptions(): McpServerOptions;
    /** Returns the prompt manager instance. @keywords mcp prompt manager */
    getPromptManager(): McpPrompt;
    /** Returns all registered prompt items. @keywords mcp prompts list */
    getPrompts(): McpPromptList;
    /** Returns the resource manager instance. @keywords mcp resource manager */
    getResourceManager(): McpResource;
    /** Returns all registered resource items. @keywords mcp resources list */
    getResources(): McpResourceList;
    /** Returns the active underlying SDK McpServer instance if started. @keywords mcp sdk server instance */
    getServer(): SdkMcpServer | undefined;
    /** Returns the tool manager instance. @keywords mcp tool manager */
    getToolManager(): McpTool;
    /** Returns all registered tool items. @keywords mcp tools list */
    getTools(): McpToolList;
    /** Adds prompt definitions or merges another prompt manager. @keywords mcp add prompt */
    addPrompt(prompt: McpPromptItem | McpPromptItem[] | McpPrompt): this;
    /** Adds resource definitions or merges another resource manager. @keywords mcp add resource */
    addResource(resource: McpResourceInput | McpResource | (McpResourceItem | McpResource)[]): this;
    /** Adds tool definitions or merges another tool manager. @keywords mcp add tool */
    addTool(tool: McpToolItem | McpToolItem[] | McpTool): this;
    /** Starts the MCP server, registers all components and binds transport. @keywords mcp start server */
    start(transport?: Transport): Promise<SdkMcpServer>;
    /** Stops the server and closes active connections. @keywords mcp stop server */
    stop(): Promise<void>;
    protected createDefaultTransport(): Transport;
    protected createSdkServer(): SdkMcpServer;
}