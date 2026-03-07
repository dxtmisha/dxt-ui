import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/ApiStatus - Управление статусом API"}),`
`,s.jsx(e.h1,{id:"класс-apistatus",children:"Класс ApiStatus"}),`
`,s.jsx(e.p,{children:"Класс для отслеживания и управления состоянием API-запроса. Надежно хранит текущий HTTP-статус, сообщения об ошибках и обработанное тело ответа, позволяя приложениям реагировать на изменения в реальном времени, используя абстракции состояния."}),`
`,s.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Централизованное состояние"})," — хранит всё, что связано с результатом вызова API: HTTP-статус, пользовательские тексты, сырые данные ответа и сгенерированные сообщения."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Цепочки вызовов"})," — методы возвращают ",s.jsx(e.code,{children:"this"}),", позволяя лаконично обновлять несколько полей состояния друг за другом."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Автоматическое извлечение сообщений"})," — интеллектуально пытается разобрать и извлечь читаемые человеком поля ",s.jsx(e.code,{children:"message"})," напрямую из структурированных ответов сервера."]}),`
`]}),`
`,s.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`import { ApiStatus } from '@dxtmisha/functional'

const apiStatus = new ApiStatus()
`})}),`
`,s.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(e.h3,{id:"методы-получения-значений",children:"Методы получения значений"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"get(): ApiStatusItem"})," — Возвращает полный объект состояния последнего ответа."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"getStatus(): number | undefined"})," — Возвращает числовой HTTP статус (",s.jsx(e.code,{children:"200"}),", ",s.jsx(e.code,{children:"404"}),")."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"getStatusText(): string | undefined"})," — Возвращает текстовое объяснение (",s.jsx(e.code,{children:'"OK"'}),", ",s.jsx(e.code,{children:'"Not Found"'}),")."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"getStatusType(): ApiStatusType | undefined"})," — Возвращает тип последнего статуса."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"getError(): string | undefined"})," — Возвращает заданную строку ошибки."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"getResponse<T>(): T | undefined"})," — Возвращает переданные в качестве последнего ответа данные."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"getMessage(): string"})," — Возвращает последнюю сгенерированную или извлечённую строку сообщения сервера."]}),`
`]}),`
`,s.jsx(e.h3,{id:"методы-установки-значений",children:"Методы установки значений"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"set(data: ApiStatusItem): this"})," — Единовременно устанавливает несколько полей статуса."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"setStatus(status?: number, statusText?: string): this"})," — Устанавливает код ответов HTTP и опциональное текстовое пояснение."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"setError(error?: string): this"})," — Отмечает и сохраняет строку ошибки при неудачных запросах."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"setLastResponse(response?: any): this"})," — Сохраняет сырой ответ сервера и при наличии поля ",s.jsx(e.code,{children:"message"})," автоматически заполняет его."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"setLastStatus(status?: ApiStatusType): this"})," — Задает конкретный тип финального статуса."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"setLastMessage(message?: string): this"})," — Принудительно задает текстовое сообщение из ответа сервера."]}),`
`]})]})}function j(n={}){const{wrapper:e}={...t(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{j as default};
