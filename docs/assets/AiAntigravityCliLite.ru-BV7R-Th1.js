import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiAntigravityCliLite - Легковесный класс Google Antigravity AI CLI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aiantigravityclilite`,children:`Класс AiAntigravityCliLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Специализированная легковесная реализация класса `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`, которая взаимодействует с Google Antigravity AI через интерфейс командной строки (`,(0,c.jsx)(t.code,{children:`agy`}),`).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Для работы этой реализации требуется установленная утилита `,(0,c.jsx)(t.code,{children:`agy`}),` CLI, доступная в переменной PATH вашей системы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Работа через CLI`}),` — выполняет запросы прямым запуском CLI `,(0,c.jsx)(t.code,{children:`agy`}),` с массивом аргументов через `,(0,c.jsx)(t.code,{children:`execFile`}),` (`,(0,c.jsx)(t.code,{children:`node:child_process`}),`) без использования системной оболочки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обработка длинных промптов`}),` — автоматически создает временные файлы для передачи объемного контекста в CLI через `,(0,c.jsx)(t.code,{children:`ApiTmp`}),`, обходя ограничения операционной системы на длину командной строки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Чистое выполнение`}),` — управляет созданием временных файлов и гарантирует их удаление после каждого запроса или ошибки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Режим YOLO`}),` — автоматически применяет флаг `,(0,c.jsx)(t.code,{children:`--yolo`}),` и директиву чистого вывода ответа без рассуждений.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте `,(0,c.jsx)(t.code,{children:`AiAntigravityCliLite`}),`, передав API-ключ и идентификатор модели через конструктор.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API-ключ (передается через переменные окружения).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — идентификатор модели для Antigravity CLI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`config?: Record<string, any>`}),` — дополнительные параметры конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiAntigravityCliLite } from '@dxtmisha/scripts'

const ai = new AiAntigravityCliLite('ВАШ_API_КЛЮЧ', 'gemini-3.7-flash')

// Генерация ответа
const response = await ai.generate('Проанализируй архитектуру пакета.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`генерация`,children:`Генерация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — Основной метод взаимодействия. Компилирует контекст во временные файлы, выполняет команду CLI `,(0,c.jsx)(t.code,{children:`agy`}),` и возвращает результат.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — Обновляет API-ключ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — Переключает идентификатор активной модели.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`сбор-контекста`,children:`Сбор контекста`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — Устанавливает постоянный текстовый префикс (системный промпт).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — Добавляет текстовую часть к накопительному контексту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — Очищает постоянный префикс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — Очищает все накопленные части текста.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ограничения`,children:`Ограничения`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изображения`}),` — реализация CLI в настоящее время не поддерживает передачу изображений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Окружение`}),` — требует наличия утилиты `,(0,c.jsx)(t.code,{children:`agy`}),` в переменной PATH.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};