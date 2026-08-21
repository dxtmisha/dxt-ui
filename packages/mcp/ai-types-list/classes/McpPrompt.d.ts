// md5:7310fa038cbd750c022f4ca5796b9e09 true
import { GetPromptResult } from '@modelcontextprotocol/sdk/types.js';
/** Manages and executes MCP prompt templates. @keywords McpPrompt prompt template mcp */
export declare class McpPrompt extends McpItemAbstract<McpPromptItem, McpPromptItem | McpPromptItem[] | McpPrompt> {
    /** Adds prompt items or merges another instance. @keywords add prompt merge */
    add(prompt: McpPromptItem | McpPromptItem[] | McpPrompt): this;
    /** Executes a registered prompt handler. @keywords execute prompt handler */
    execute(name: string, args?: Record<string, unknown>, extra?: Record<string, unknown>): Promise<GetPromptResult>;
    /** Registers prompts into an SDK McpServer. @keywords register server mcp */
    register(sdkServer: SdkMcpServer): void;
}