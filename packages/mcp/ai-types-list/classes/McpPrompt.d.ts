// md5:8921dae6de3dfb5d5adbb38fb83bd748 true
import type { GetPromptResult } from '@modelcontextprotocol/sdk/types.js';

/** Manages and executes MCP prompt templates. @keywords mcp prompt, template management, prompt executor */
export declare class McpPrompt extends McpItemAbstract<McpPromptItem, McpPromptItem | McpPromptItem[] | McpPrompt> {
    /** Adds prompt items, arrays of items, or merges another McpPrompt instance. @keywords add prompt, register template */
    add(prompt: McpPromptItem | McpPromptItem[] | McpPrompt): this;
    /** Executes a registered prompt handler and converts the result to GetPromptResult. @keywords execute prompt, run template */
    execute(name: string, args?: Record<string, unknown>, extra?: Record<string, unknown>): Promise<GetPromptResult>;
    /** Registers all managed prompts into an SDK McpServer instance. @keywords register prompts, sdk server */
    register(sdkServer: SdkMcpServer): void;
}