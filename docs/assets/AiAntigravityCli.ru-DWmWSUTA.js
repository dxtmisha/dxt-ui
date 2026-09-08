import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiAntigravityCli - Автоконфигурируемый Google Antigravity AI через CLI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aiantigravitycli`,children:`Класс AiAntigravityCli`}),`
`,(0,c.jsxs)(t.p,{children:[`Высокоуровневая реализация для взаимодействия с Google Antigravity AI через интерфейс командной строки (`,(0,c.jsx)(t.code,{children:`agy`}),`). Класс `,(0,c.jsx)(t.code,{children:`AiAntigravityCli`}),` расширяет `,(0,c.jsx)(t.code,{children:`AiAntigravityCliLite`}),` и упрощает работу, автоматически загружая API-ключ и идентификатор модели из настроек конфигурации проекта (`,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Для работы этой реализации требуется установленная утилита `,(0,c.jsx)(t.code,{children:`agy`}),` CLI, доступная в переменной PATH вашей системы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая настройка`}),` — не требует ручной инициализации ключей или моделей; параметры считываются из окружения проекта (`,(0,c.jsx)(t.code,{children:`design.config.json`}),` / `,(0,c.jsx)(t.code,{children:`design.config.local.json`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выполнение через CLI`}),` — использует прямой вызов `,(0,c.jsx)(t.code,{children:`agy`}),` без системной оболочки для надежного выполнения запросов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление временными файлами`}),` — автоматически обрабатывает создание и удаление временных файлов промптов (`,(0,c.jsx)(t.code,{children:`ApiTmp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Строгий вывод ответов`}),` — использует флаг `,(0,c.jsx)(t.code,{children:`--yolo`}),` и специализированные инструкции, чтобы ассистент возвращал чистый результат без лишних вступлений.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`AiAntigravityCli`}),` готов к использованию без каких-либо аргументов конструктора.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiAntigravityCli } from '@dxtmisha/scripts'

const ai = new AiAntigravityCli()

// Генерация ответа с использованием настроек проекта
const response = await ai.generate('Сгенерируй TypeScript интерфейс для компонента.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`генерация`,children:`Генерация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — (Унаследовано) Анализирует ввод, управляет временными файлами и выполняет команду `,(0,c.jsx)(t.code,{children:`agy`}),` CLI для получения ответа.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — (Унаследовано) Позволяет вручную переопределить API-ключ при необходимости.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — (Унаследовано) Переключает идентификатор активной модели.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`сбор-контекста`,children:`Сбор контекста`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — (Унаследовано) Устанавливает постоянный текстовый префикс (системные инструкции).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — (Унаследовано) Добавляет текстовую часть к совокупному запросу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — (Унаследовано) Очищает постоянный префикс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — (Унаследовано) Очищает все накопленные части текста.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ограничения`,children:`Ограничения`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мультимодальность`}),` — как и базовый CLI-класс, эта реализация в настоящее время не поддерживает ввод изображений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Системные зависимости`}),` — требуется наличие инструмента `,(0,c.jsx)(t.code,{children:`agy`}),` CLI в переменной PATH.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};