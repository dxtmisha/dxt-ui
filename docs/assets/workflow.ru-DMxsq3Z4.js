import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/4. Полный процесс работы`}),`
`,(0,c.jsx)(t.h1,{id:`полный-процесс-работы-aidd-workflow`,children:`Полный процесс работы (AIDD Workflow)`}),`
`,(0,c.jsxs)(t.p,{children:[`Для поддержания экосистемы AI-Driven Development (AIDD) в актуальном состоянии при разработке и модификации пакетов библиотеки `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` необходимо следовать стандартному инженерному циклу.`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-1-разработка-исходного-кода`,children:`Шаг 1: Разработка исходного кода`}),`
`,(0,c.jsx)(t.p,{children:`Стандартный процесс реализации логики и интерфейсов внутри монорепозитория:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Создание Vue 3 компонентов строго с `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Вынос бизнес-логики и управления состоянием в Composables (`,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Использование SCSS-миксинов и токенов из `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` без инлайновых стилей и кастомных медиа-запросов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-2-документирование-кода-tsdoc--jsdoc`,children:`Шаг 2: Документирование кода (TSDoc / JSDoc)`}),`
`,(0,c.jsx)(t.p,{children:`Подготовка публичного API пакета для последующего машинного анализа и генерации AI-метаданных:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`JSDoc-описания`}),` — документируйте классы, методы, функции, свойства и интерфейсы в соответствии с двуязычным стандартом (English / Russian).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Специальные теги`}),` — активно используйте теги, которые генератор гарантированно переносит в `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@example`}),` — канонические примеры вызова методов или компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@note`}),` — архитектурные нюансы, правила инициализации и сайд-эффекты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@warning`}),` — критические ограничения среды исполнения (например, SSR-безопасность или DOM-only).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@keywords`}),` — ключевые слова и синонимы для быстрого поиска по файлу агентом.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`/**
 * Executes a localized HTTP request with automatic session token binding and error center routing.
 *
 * Выполняет локализованный HTTP-запрос с автоматической привязкой токена сессии и маршрутизацией через центр ошибок.
 * @example
 * const data = await apiRequest.get('/user/profile')
 *
 * @note Automatically attaches Bearer authorization headers when session token is active.
 * @warning Do not call directly in component templates; use executeUseLocal service wrappers.
 * @keywords api request http fetch get post session auth
 * @param url request endpoint url / url адрес эндпоинта запроса
 * @param options request configuration / конфигурация запроса
 * @returns parsed response data / распарсенные данные ответа
 */
export async function fetchApi<T>(url: string, options?: RequestOptions): Promise<T> {
  // ...
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`шаг-3-генерация-типов-и-описаний-пакета`,children:`Шаг 3: Генерация типов и описаний пакета`}),`
`,(0,c.jsx)(t.p,{children:`После завершения кодирования запустите генератор определений типов и метаданных в директории пакета:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run types
`})}),`
`,(0,c.jsx)(t.p,{children:`Команда автоматически:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Скомпилирует `,(0,c.jsx)(t.code,{children:`.d.ts`}),` декларации во временную директорию.`]}),`
`,(0,c.jsx)(t.li,{children:`Удалит приватные и защищенные поля.`}),`
`,(0,c.jsxs)(t.li,{children:[`Сгенерирует компактный файл `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` с оптимизированными сигнатурами и тегами `,(0,c.jsx)(t.code,{children:`@keywords`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Сформирует файл `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` с назначением пакета, триггерами изучения и блоком `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` из папки `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Обновит спецификацию ресурсов MCP в `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-4-снятие-визуального-контекста-опционально-для-ui`,children:`Шаг 4: Снятие визуального контекста (Опционально для UI)`}),`
`,(0,c.jsxs)(t.p,{children:[`Для пакетов компонентов (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`) или визуальных модулей зафиксируйте визуальное состояние:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита автоматически запустит локальный dev-сервер, перейдет по локальному URL в headless-браузере, сделает снимок страницы (`,(0,c.jsx)(t.code,{children:`ai-screenshot/*.webp`}),`), экспортирует DOM-дерево (`,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),`) и примененные стили (`,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-5-агрегация-глобального-промпта`,children:`Шаг 5: Агрегация глобального промпта`}),`
`,(0,c.jsx)(t.p,{children:`Для синхронизации всех изменений в корневом файле контекста выполните в корне монорепозитория:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Скрипт `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` соберет метаданные всех обновленных пакетов и зависимостей, перезаписав `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` и `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-6-постановка-задач-ai-и-сохранение-опыта`,children:`Шаг 6: Постановка задач AI и сохранение опыта`}),`
`,(0,c.jsx)(t.p,{children:`При взаимодействии с AI-ассистентом:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Агент читает обновленный `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` и `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, формируя безошибочный код.`]}),`
`,(0,c.jsxs)(t.li,{children:[`При выявлении специфических нюансов разработки используйте триггер `,(0,c.jsx)(t.strong,{children:`«Запомни»`}),`, чтобы агент зафиксировал правило в `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` пакета на будущее.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};