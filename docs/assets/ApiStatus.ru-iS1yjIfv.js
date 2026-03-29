import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/ApiStatus - Управление статусом API`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apistatus`,children:`Класс ApiStatus`}),`
`,(0,c.jsx)(n.p,{children:`Класс для отслеживания и управления состоянием API-запроса. Надежно хранит текущий HTTP-статус, сообщения об ошибках и обработанное тело ответа, позволяя приложениям реагировать на изменения в реальном времени, используя абстракции состояния.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Централизованное состояние`}),` — хранит всё, что связано с результатом вызова API: HTTP-статус, пользовательские тексты, сырые данные ответа и сгенерированные сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Цепочки вызовов`}),` — методы возвращают `,(0,c.jsx)(n.code,{children:`this`}),`, позволяя лаконично обновлять несколько полей состояния друг за другом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое извлечение сообщений`}),` — интеллектуально пытается разобрать и извлечь читаемые человеком поля `,(0,c.jsx)(n.code,{children:`message`}),` напрямую из структурированных ответов сервера.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`ApiStatus()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiStatus } from '@dxtmisha/functional'

// 1. Простая инициализация
const apiStatus = new ApiStatus()

// 2. Установка статуса ответа
apiStatus.setStatus(200, 'OK')

// 3. Установка данных ответа и автоматическое извлечение сообщения
apiStatus.setLastResponse({
  status: 'success',
  message: 'Данные успешно получены',
  data: { id: 1 }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`методы-получения-значений`,children:`Методы получения значений`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiStatusItem`}),` — Возвращает полный объект состояния последнего ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): number | undefined`}),` — Возвращает числовой HTTP статус (`,(0,c.jsx)(n.code,{children:`200`}),`, `,(0,c.jsx)(n.code,{children:`404`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusText(): string | undefined`}),` — Возвращает текстовое объяснение (`,(0,c.jsx)(n.code,{children:`"OK"`}),`, `,(0,c.jsx)(n.code,{children:`"Not Found"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusType(): ApiStatusType | undefined`}),` — Возвращает тип последнего статуса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getError(): string | undefined`}),` — Возвращает заданную строку ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse<T>(): T | undefined`}),` — Возвращает переданные в качестве последнего ответа данные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMessage(): string`}),` — Возвращает последнюю сгенерированную или извлечённую строку сообщения сервера.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`методы-установки-значений`,children:`Методы установки значений`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(data: ApiStatusItem): this`}),` — Единовременно устанавливает несколько полей статуса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setStatus(status?: number, statusText?: string): this`}),` — Устанавливает код ответов HTTP и опциональное текстовое пояснение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setError(error?: string): this`}),` — Отмечает и сохраняет строку ошибки при неудачных запросах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastResponse(response?: any): this`}),` — Сохраняет сырой ответ сервера и при наличии поля `,(0,c.jsx)(n.code,{children:`message`}),` автоматически заполняет его.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastStatus(status?: ApiStatusType): this`}),` — Задает конкретный тип финального статуса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastMessage(message?: string): this`}),` — Принудительно задает текстовое сообщение из ответа сервера.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};