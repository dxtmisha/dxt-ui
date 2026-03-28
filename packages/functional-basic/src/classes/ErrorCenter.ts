import type { ErrorCenterCauseItem, ErrorCenterCauseList, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerList } from "../types/errorCenter"
import { ErrorCenterInstance } from "./ErrorCenterInstance"

export class ErrorCenter {
    protected static item = new ErrorCenterInstance()

    static has(
        code: string,
        group?: string
    ): boolean {
        return this.item.has(code, group)
    }

    static get(
        code: string,
        group?: string
    ): ErrorCenterCauseItem | undefined {
        return this.item.get(code, group)
    }

    static add(cause: ErrorCenterCauseItem): ErrorCenter {
        this.item.add(cause)
        return this
    }

    static addList(causes: ErrorCenterCauseList): ErrorCenter {
        this.item.addList(causes)
        return this
    }

    static addHandler(
        group: ErrorCenterGroup,
        handler: ErrorCenterHandlerCallback
    ): ErrorCenter {
        this.item.addHandler(group, handler)
        return this
    }

    static addHandlerList(handlers: ErrorCenterHandlerList): ErrorCenter {
        this.item.addHandlerList(handlers)
        return this
    }

    static on(cause: ErrorCenterCauseItem): ErrorCenter {
        this.item.on(cause)
        return this
    }
}