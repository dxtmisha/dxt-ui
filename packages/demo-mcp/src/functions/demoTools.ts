import { z } from 'zod'
import { isDomRuntime, isFilled } from '@dxtmisha/functional-basic'

import type { McpToolItem } from '@dxtmisha/mcp'
import type {
  McpDemoCalculateArgs,
  McpDemoCalculateResult,
  McpDemoDxtComponentItem,
  McpDemoDxtComponentsArgs,
  McpDemoDxtComponentsResult,
  McpDemoEchoArgs,
  McpDemoEchoResult,
  McpDemoSystemInfoResult
} from '../types/McpDemoTypes'

/**
 * Known dxt-ui packages list.
 *
 * Список известных пакетов dxt-ui.
 */
export const DXT_PACKAGES: McpDemoDxtComponentItem[] = [
  {
    name: '@dxtmisha/mcp',
    description: 'Core MCP (Model Context Protocol) server and tool abstraction layer.',
    resourceUri: '@dxtmisha/mcp/ai-types.md'
  },
  {
    name: '@dxtmisha/demo-mcp',
    description: 'Showcase and ready-to-run demo MCP tools and server.',
    resourceUri: '@dxtmisha/demo-mcp/ai-types.md'
  },
  {
    name: '@dxtmisha/constructor',
    description: 'Base UI constructor primitives and component engine.',
    resourceUri: '@dxtmisha/constructor/ai-types.md'
  },
  {
    name: '@dxtmisha/d1',
    description: 'Design system Vue 3 UI component collection.',
    resourceUri: '@dxtmisha/d1/ai-types.md'
  },
  {
    name: '@dxtmisha/functional',
    description: 'Vue 3 reactive composables, storage, routing, and API integration.',
    resourceUri: '@dxtmisha/functional/ai-types.md'
  },
  {
    name: '@dxtmisha/functional-basic',
    description: 'Framework-agnostic utility library for HTTP, storage, errors, and validation.',
    resourceUri: '@dxtmisha/functional-basic/ai-types.md'
  },
  {
    name: '@dxtmisha/styles',
    description: 'Dynamic SCSS token engine, mixins, and design palettes.',
    resourceUri: '@dxtmisha/styles/ai-resources/colors-layout.md'
  },
  {
    name: '@dxtmisha/figma',
    description: 'Figma plugin UI communication bridge and messenger.',
    resourceUri: '@dxtmisha/figma/ai-types.md'
  },
  {
    name: '@dxtmisha/figma-code',
    description: 'Figma main-thread engine, node manipulation, and style extraction.',
    resourceUri: '@dxtmisha/figma-code/ai-types.md'
  },
  {
    name: '@dxtmisha/figma-ref',
    description: 'Vue 3 reactive state and frame selection composables for Figma.',
    resourceUri: '@dxtmisha/figma-ref/ai-types.md'
  },
  {
    name: '@dxtmisha/zip',
    description: 'Lightweight browser ZIP archive generation and download utility.',
    resourceUri: '@dxtmisha/zip/ai-types.md'
  }
]

/**
 * Tool for performing arithmetic calculations.
 *
 * Инструмент для выполнения арифметических вычислений.
 */
export const calculateTool: McpToolItem = {
  name: 'calculate',
  description: 'Performs basic arithmetic calculations (add, subtract, multiply, divide) / Выполняет базовые арифметические вычисления',
  inputSchema: {
    firstNumber: z.number().describe('First operand / Первый операнд'),
    secondNumber: z.number().describe('Second operand / Второй операнд'),
    operation: z.enum(['add', 'subtract', 'multiply', 'divide']).describe('Operation to perform / Выполняемая операция')
  },
  handler: (args: Record<string, unknown>): McpDemoCalculateResult => {
    const calculationArguments = (args || {}) as unknown as McpDemoCalculateArgs
    const firstNumber = Number(calculationArguments?.firstNumber ?? 0)
    const secondNumber = Number(calculationArguments?.secondNumber ?? 0)
    const operation = calculationArguments?.operation || 'add'

    let result: number

    switch (operation) {
      case 'add':
        result = firstNumber + secondNumber
        break
      case 'subtract':
        result = firstNumber - secondNumber
        break
      case 'multiply':
        result = firstNumber * secondNumber
        break
      case 'divide':
        if (secondNumber === 0) {
          throw new Error('Division by zero is not allowed / Деление на ноль запрещено')
        }
        result = firstNumber / secondNumber
        break
      default:
        throw new Error(`Unsupported operation: ${String(operation)} / Неподдерживаемая операция: ${String(operation)}`)
    }

    return {
      firstNumber,
      secondNumber,
      operation,
      result
    }
  }
}

/**
 * Tool for echoing a message back with timestamp.
 *
 * Инструмент для эхо-возврата сообщения с временной меткой.
 */
export const echoTool: McpToolItem = {
  name: 'echo',
  description: 'Echoes back the received message with a server timestamp / Возвращает полученное сообщение с временной меткой сервера',
  inputSchema: {
    message: z.string().describe('Message string to echo / Строка сообщения для эхо-ответа')
  },
  handler: (args: Record<string, unknown>): McpDemoEchoResult => {
    const echoArguments = (args || {}) as unknown as McpDemoEchoArgs
    const message = String(echoArguments?.message || 'Echo: No message provided')

    return {
      message,
      timestamp: new Date().toISOString()
    }
  }
}

/**
 * Tool for getting system and runtime information.
 *
 * Инструмент для получения информации о системе и среде выполнения.
 */
export const systemInfoTool: McpToolItem = {
  name: 'system_info',
  description: 'Returns server runtime environment and system information / Возвращает информацию о среде выполнения и системе',
  handler: (): McpDemoSystemInfoResult => {
    const nodeGlobal = typeof globalThis !== 'undefined'
      ? (globalThis as Record<string, any>).process
      : undefined

    return {
      packageName: '@dxtmisha/demo-mcp',
      version: '0.0.0',
      environment: isDomRuntime() ? 'browser' : String(nodeGlobal?.env?.NODE_ENV || 'development'),
      platform: isDomRuntime() ? 'browser' : String(nodeGlobal?.platform || 'unknown'),
      nodeVersion: isDomRuntime() ? 'browser' : String(nodeGlobal?.version || 'unknown'),
      timestamp: new Date().toISOString()
    }
  }
}

/**
 * Tool for querying available dxt-ui packages and documentation resources.
 *
 * Инструмент для запроса доступных пакетов и ресурсов документации dxt-ui.
 */
export const dxtComponentsTool: McpToolItem = {
  name: 'dxt_components',
  description: 'Searches and returns overview information for dxt-ui design system packages / Ищет и возвращает обзорную информацию по пакетам дизайн-системы dxt-ui',
  inputSchema: {
    filter: z.string().optional().describe('Optional name/description search query / Опциональный поисковый запрос по имени или описанию')
  },
  handler: (args: Record<string, unknown>): McpDemoDxtComponentsResult => {
    const componentArguments = args as unknown as McpDemoDxtComponentsArgs
    const filterQuery = componentArguments.filter?.trim().toLowerCase()

    const filteredItems = isFilled(filterQuery)
      ? DXT_PACKAGES.filter(packageItem =>
          packageItem.name.toLowerCase().includes(filterQuery)
          || packageItem.description.toLowerCase().includes(filterQuery)
        )
      : [...DXT_PACKAGES]

    return {
      total: filteredItems.length,
      items: filteredItems
    }
  }
}

/**
 * Returns a list of all pre-configured demo tools.
 *
 * Возвращает список всех предварительно настроенных демонстрационных инструментов.
 * @returns Array of demo MCP tools / Массив демонстрационных MCP инструментов
 */
export function getDemoTools(): McpToolItem[] {
  return [
    calculateTool,
    echoTool,
    systemInfoTool,
    dxtComponentsTool
  ]
}
