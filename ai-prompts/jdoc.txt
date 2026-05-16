# Task: JSDoc Generation

Act as a documentation expert. Your goal is to add comprehensive JSDoc comments to all entities in the attached files.

## Mandatory Bilingual Standard
All descriptions MUST be provided in both English and Russian.

### 1. Classes
For classes, provide a detailed overview of the class's purpose and logic. Use a multiline block for the class header and method headers.
```ts
/**
 * Manager for handling API error states and global notifications.
 * It provides a centralized storage for tracking and clearing errors.
 *
 * Менеджер для обработки состояний ошибок API и глобальных уведомлений.
 * Обеспечивает централизованное хранилище для отслеживания и очистки ошибок.
 */
class ApiErrorStorage {
  /** Map of active error messages / Карта активных сообщений об ошибках */
  private errors = new Map<string, string>();

  /**
   * Registers a new error in the storage.
   *
   * Регистрирует новую ошибку в хранилище.
   * @param key unique error identifier / уникальный идентификатор ошибки
   * @param message error description / описание ошибки
   */
  setError(key: string, message: string) { ... }
}
```

### 2. Functions and Methods
Use multiline blocks for complex logic. Use `@param` and `@returns` with bilingual descriptions separated by `/`.
```ts
/**
 * Processes the raw response and extracts data.
 *
 * Обрабатывает сырой ответ и извлекает данные.
 * @param response raw fetch response / сырой ответ fetch
 * @returns parsed JSON data / распарсенные данные JSON
 */
```

### 3. Interfaces, Types, Enums, and Properties
Use a compact single line with a forward slash separator. If the description is too long, use two lines.
```ts
/** Saved value in cache / Сохраненное значение в кэше */

/**
 * Shape of API response data wrapper /
 * Структура обёртки данных ответа API
 */
```

## Requirements
- **Total Coverage**: Every exported entity, every property (public/protected/private), and every method must be documented.
- **Detailed Class Headers**: For classes, the JSDoc must explain the core logic, responsibility, and how the class should be used within the system.
- **Contextual Accuracy**: Infer the purpose from naming and logic. If it's an API-related class, use appropriate terminology.
- **Preservation**: Do NOT change any code, logic, or formatting other than adding the JSDoc comments.
- **Consistency**: Maintain the style used in `@/packages/functional-basic/src/classes` and `@/packages/functional-basic/src/types`.

## Execution
Review the attached files and provide the updated code with all JSDoc comments added.
