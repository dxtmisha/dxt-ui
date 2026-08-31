import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/5. Генерация документации`}),`
`,(0,c.jsx)(t.h1,{id:`генерация-документации-и-типов-dxt-types`,children:`Генерация документации и типов (dxt-types)`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-types`}),` и лежащий в ее основе класс `,(0,c.jsx)(t.code,{children:`DesignTypes`}),` отвечают за автоматическую компиляцию, очистку, сжатие и формирование полного набора AI-артефактов пакета.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Скрипт превращает многотысячные файлы деклараций TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) в компактный, оптимизированный по расходу токенов справочник типов `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, формирует архитектурный профиль `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` и регистрирует ресурсы для протокола MCP.`]}),`
`,(0,c.jsx)(t.h2,{id:`архитектурный-конвейер-генерации`,children:`Архитектурный конвейер генерации`}),`
`,(0,c.jsx)(t.p,{children:`Процесс генерации разбит на четкие этапы:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`1. Сборка деклараций (`,(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),`)`]}),`
Скрипт компилирует проект и извлекает `,(0,c.jsx)(t.code,{children:`.d.ts`}),` файлы во временную изолированную директорию (например, `,(0,c.jsx)(t.code,{children:`ai-types-temp/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`2. Фильтрация и очистка структуры (`,(0,c.jsx)(t.code,{children:`DesignTypesMake`}),`)`]}),`
Из деклараций автоматически удаляются все внутренние реализации, приватные (`,(0,c.jsx)(t.code,{children:`private`}),`) и защищенные (`,(0,c.jsx)(t.code,{children:`protected`}),`) поля и методы. Остается только чистый публичный интерфейс (API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`3. Интеллектуальная оптимизация через ИИ (`,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),`)`]}),`
ИИ-модель анализирует типы и сопутствующий JavaScript-код, удаляет избыточный шум и форматирует лаконичные JSDoc-описания на английском языке, генерируя файл `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`4. Обработка локальных промптов (`,(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),`)`]}),`
Скрипт сканирует папку `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` пакета, собирает заголовки и правила узкопрофильных документов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`5. Генерация профиля пакета (`,(0,c.jsx)(t.code,{children:`DesignTypesDescription`}),`)`]}),`
Формируется файл `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` со структурированным описанием назначения пакета, триггерами изучения и списком `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`6. Регистрация ресурсов MCP (`,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),`)`]}),`
Создается файл `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`, содержащий URI-декларации всех типов, описаний, скриншотов и промптов пакета для MCP-клиентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`7. Очистка временных файлов`}),`
Временная директория сборки автоматически удаляется после завершения процесса.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`управление-генерацией-через-jsdoc-теги`,children:`Управление генерацией через JSDoc-теги`}),`
`,(0,c.jsxs)(t.p,{children:[`Движок очистки автоматически отсекает тривиальные комментарии, но `,(0,c.jsx)(t.strong,{children:`гарантированно сохраняет и переносит`}),` в `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` специальные архитектурные теги:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@example`}),` (Примеры использования)`]}),` — демонстрирует ИИ правильный способ вызова метода, сервиса или компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@note`}),` (Архитектурные примечания)`]}),` — фиксирует сайд-эффекты, правила инициализации и жизненного цикла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@warning`}),` (Предупреждения и ограничения)`]}),` — обращает внимание на критические моменты (например, «только для браузера / DOM» или «не вызывать в шаблоне»).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@remarks`}),` (Расширенные комментарии)`]}),` — передает развернутое пояснение сложной инженерной логики.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@keywords`}),` (Поисковые теги)`]}),` — ключевые слова и синонимы, по которым ИИ-агент быстро находит нужный интерфейс или функцию через текстовый поиск без чтения всего файла.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`структура-создаваемого-ai-descriptionmd`,children:`Структура создаваемого ai-description.md`}),`
`,(0,c.jsxs)(t.p,{children:[`Файл `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` формирует визитную карточку пакета для главного промпта:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Description`}),` — краткое определение технической роли пакета (1-2 предложения).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Triggers for Studying ai-types.md`}),` — четкий список сценариев, при которых агент обязан прочитать `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key Capabilities`}),` — перечень ключевых возможностей (строго по 1-3 слова на пункт).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Rules`}),` — реестр правил из `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` с краткими триггерами.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`режимы-запуска`,children:`Режимы запуска`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Стандартная генерация с ИИ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types
`})}),`
`,(0,c.jsx)(t.p,{children:`Используется для полной пересборки типов и генерации новых описаний с обращением к API ИИ.`}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Быстрое сохранение без вызова ИИ (`,(0,c.jsx)(t.code,{children:`dxt-types-save`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsx)(t.p,{children:`Быстрый режим, объединяющий существующий кэш типов и обновляющий MCP-ресурсы без сетевых запросов к ИИ.`}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};