import type { ErrorCenterCauseItem, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerItem, ErrorCenterHandlerList } from "../types/errorCenter"


/**
 * Class for managing and triggering error handlers.
 *
 * Класс для управления и вызова обработчиков ошибок.
 */
export class ErrorCenterHandler {
    /** Registered handlers list / Список зарегистрированных обработчиков */
    protected handlers: ErrorCenterHandlerList = []

    /**
     * Constructor
     * @param handlers initial handlers list / начальный список обработчиков
     */
    constructor(
        handlers?: ErrorCenterHandlerList
    ) {
        if (handlers) {
            this.addList(handlers)
        }
    }

    /**
     * Checks if handlers exist for a group.
     *
     * Проверяет наличие обработчиков для группы.
     * @param group error group / группа ошибки
     */
    has(group: ErrorCenterGroup): boolean {
        return Boolean(this.get(group))
    }

    /**
     * Gets handlers for a group.
     *
     * Получает обработчики для группы.
     * @param group error group / группа ошибки
     */
    get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined {
        return this.handlers.find(cause => cause.group === group)
    }

    /**
     * Adds a handler for a specific group.
     *
     * Добавляет обработчик для определенной группы.
     * @param group error group / группа ошибки
     * @param handler callback function / функция обратного вызова
     */
    add(
        group: ErrorCenterGroup,
        handler: ErrorCenterHandlerCallback
    ): this {
        const item = this.get(group)

        if (item) {
            item.handlers.push(handler)
        } else {
            this.handlers.push({
                group,
                handlers: [handler]
            })
        }

        return this
    }

    /**
     * Adds a list of group-based handlers.
     *
     * Добавляет список обработчиков по группам.
     * @param handlers handlers list / список обработчиков
     */
    addList(
        handlers: ErrorCenterHandlerList
    ): this {
        handlers.forEach(
            handlerGroup => handlerGroup.handlers.forEach(
                handler => this.add(handlerGroup.group, handler)
            )
        )
        return this
    }

    /**
     * Triggers handlers for a group and logs to console.
     *
     * Вызывает обработчики для группы и выводит ошибку в консоль.
     * @param group group identifier / идентификатор группы
     * @param cause error cause details / детали причины ошибки
     */
    on(
        group: ErrorCenterGroup,
        cause: ErrorCenterCauseItem
    ): this {
        const item = this.get(group)

        if (item) {
            item.handlers.forEach(handler => handler(cause))
        }

        this.toConsole(cause)

        return this
    }

    /**
     * Logs error cause to the console.
     *
     * Выводит причину ошибки в консоль.
     * @param cause error details / детали ошибки
     */
    protected toConsole(
        cause: ErrorCenterCauseItem
    ): this {
        console.error(`Error Center: ${cause.code}`)
        console.error(cause.message)

        return this
    }
}