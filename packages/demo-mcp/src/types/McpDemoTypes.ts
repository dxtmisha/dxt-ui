/** Arithmetic operation type / Тип арифметической операции */
export type McpDemoMathOperation = 'add' | 'subtract' | 'multiply' | 'divide'

/** Arguments for calculator tool / Аргументы инструмента калькулятора */
export interface McpDemoCalculateArgs {
  /** First operand / Первый операнд */
  firstNumber: number
  /** Second operand / Второй операнд */
  secondNumber: number
  /** Mathematical operation to perform / Выполняемая математическая операция */
  operation: McpDemoMathOperation
}

/** Result of calculator tool / Результат работы инструмента калькулятора */
export interface McpDemoCalculateResult {
  /** First operand / Первый операнд */
  firstNumber: number
  /** Second operand / Второй операнд */
  secondNumber: number
  /** Mathematical operation performed / Выполненная математическая операция */
  operation: McpDemoMathOperation
  /** Calculated result / Вычисленный результат */
  result: number
}

/** Arguments for echo tool / Аргументы инструмента эхо-ответа */
export interface McpDemoEchoArgs {
  /** Message to echo back / Сообщение для возврата */
  message: string
}

/** Result of echo tool / Результат работы инструмента эхо-ответа */
export interface McpDemoEchoResult {
  /** Original message / Исходное сообщение */
  message: string
  /** Timestamp when message was processed / Временная метка обработки сообщения */
  timestamp: string
}

/** System information structure / Структура системной информации */
export interface McpDemoSystemInfoResult {
  /** Server package name / Название пакета сервера */
  packageName: string
  /** Package version / Версия пакета */
  version: string
  /** Node.js environment runtime / Среда выполнения Node.js */
  environment: string
  /** Operating platform / Операционная платформа */
  platform: string
  /** Node.js version / Версия Node.js */
  nodeVersion: string
  /** Current system timestamp / Текущая системная временная метка */
  timestamp: string
}

/** dxt-ui component or package descriptor / Дескриптор компонента или пакета dxt-ui */
export interface McpDemoDxtComponentItem {
  /** Package name / Название пакета */
  name: string
  /** Package description / Описание пакета */
  description: string
  /** Available documentation or resource URI / Доступная документация или URI ресурса */
  resourceUri?: string
}

/** Arguments for querying dxt-ui components / Аргументы для запроса компонентов dxt-ui */
export interface McpDemoDxtComponentsArgs {
  /** Optional filter query string / Опциональная строка поискового фильтра */
  filter?: string
}

/** Result of querying dxt-ui components / Результат запроса компонентов dxt-ui */
export interface McpDemoDxtComponentsResult {
  /** Total count of matched packages / Общее количество найденных пакетов */
  total: number
  /** List of packages / Список пакетов */
  items: McpDemoDxtComponentItem[]
}
