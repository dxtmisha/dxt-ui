import type { ErrorCenterCauseList } from "../types/errorCenter";

export const errorCauseList: ErrorCenterCauseList = [
    // Unknown API error / Неизвестная ошибка API
    {
        group: 'api',
        code: 'unknown',
        label: 'The Unknown',
        message: 'Something went wrong in the digital void'
    },
    // Timeout error / Ошибка таймаута
    {
        group: 'api',
        code: 'timeout',
        label: 'Temporal Drift',
        message: 'The request traveled too far and lost its way in time.'
    },
    // No internet connection error / Ошибка при отсутствии подключения к интернету
    {
        group: 'api',
        code: 'offline',
        label: 'Disconnected Reality',
        message: 'Silence from the world. You seem to be offline.'
    },
    // Resource not found (404) / Ресурс не найден (404)
    {
        group: 'api',
        code: 'notFound',
        label: 'Vanished',
        message: 'What you are searching for is no longer here.'
    },
    // Internal server error (500) / Внутренняя ошибка сервера (500)
    {
        group: 'api',
        code: 'server',
        label: 'Internal Chaos',
        message: 'The machines are confused. Something went wrong on the other side.'
    }
]