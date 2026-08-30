import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/2. Генерация AI-типов и промптов`}),`
`,(0,c.jsx)(t.h1,{id:`генерация-ai-типов-и-системного-промпта`,children:`Генерация AI-типов и системного промпта`}),`
`,(0,c.jsxs)(t.p,{children:[`В экосистеме `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` процессы подготовки машиночитаемого контекста и обучения AI-ассистентов полностью автоматизированы с помощью двух взаимосвязанных CLI-команд: `,(0,c.jsx)(t.code,{children:`dxt-types`}),` (`,(0,c.jsx)(t.code,{children:`design-types.ts`}),`) и `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` (`,(0,c.jsx)(t.code,{children:`design-prompt.ts`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Эти инструменты избавляют разработчика от ручного копирования документации и формируют строгие, оптимизированные по токенам кодовые контракты и консолидированные файлы системных правил.`}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-автоматизации`,children:`Преимущества автоматизации`}),`
`,(0,c.jsx)(t.h3,{id:`1-нулевая-толерантность-к-галлюцинациям-zero-hallucinations`,children:`1. Нулевая толерантность к галлюцинациям (Zero Hallucinations)`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-types`}),` извлекает TypeScript-декларации (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), очищает их от приватных полей и внутренней реализации, сохраняя только публичный интерфейс. ИИ-ассистент опирается исключительно на реальные экспорты библиотеки.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-единый-источник-истины-single-source-of-truth`,children:`2. Единый источник истины (Single Source of Truth)`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` рекурсивно обходит локальные пакеты и установленные зависимости `,(0,c.jsx)(t.code,{children:`node_modules`}),`, собирает метаданные и формирует в корне монорепозитория файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`, который автоматически инициализирует контекст при старте любой AI-сессии.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-нативная-поддержка-model-context-protocol-mcp`,children:`3. Нативная поддержка Model Context Protocol (MCP)`}),`
`,(0,c.jsxs)(t.p,{children:[`Оба скрипта автоматически генерируют ресурсные манифесты `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` и `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`, позволяя современным AI-агентам подключаться к кодовой базе через протокол MCP.`]}),`
`,(0,c.jsx)(t.h2,{id:`пошаговое-руководство-что-нужно-делать`,children:`Пошаговое руководство (Что нужно делать)`}),`
`,(0,c.jsxs)(t.h3,{id:`часть-1-генерация-типов-и-профиля-пакета-dxt-types`,children:[`Часть 1. Генерация типов и профиля пакета (`,(0,c.jsx)(t.code,{children:`dxt-types`}),`)`]}),`
`,(0,c.jsx)(t.h4,{id:`шаг-11-запустите-генерацию-типов-в-директории-пакета`,children:`Шаг 1.1. Запустите генерацию типов в директории пакета`}),`
`,(0,c.jsx)(t.p,{children:`После добавления или изменения функций, компонентов или интерфейсов выполните в папке пакета:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types
`})}),`
`,(0,c.jsx)(t.p,{children:`Скрипт автоматически выполнит следующие действия:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Скомпилирует декларации TypeScript во временную изолированную директорию.`}),`
`,(0,c.jsxs)(t.li,{children:[`Удалит внутренние детали реализации, приватные (`,(0,c.jsx)(t.code,{children:`private`}),`) и защищенные (`,(0,c.jsx)(t.code,{children:`protected`}),`) свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Оптимизирует JSDoc-описания с помощью ИИ, сохранив критические архитектурные теги (`,(0,c.jsx)(t.code,{children:`@example`}),`, `,(0,c.jsx)(t.code,{children:`@note`}),`, `,(0,c.jsx)(t.code,{children:`@warning`}),`, `,(0,c.jsx)(t.code,{children:`@remarks`}),`, `,(0,c.jsx)(t.code,{children:`@keywords`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Создаст файл `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` со сжатыми спецификациями типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Сформирует профиль библиотеки `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` с блоком `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` из папки `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Запишет ресурсный файл `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`DesignTypes: making AI types...
DesignTypes: AI types saved.
`})}),`
`,(0,c.jsxs)(t.h4,{id:`шаг-12-быстрое-сохранение-без-вызова-ии-dxt-types-save`,children:[`Шаг 1.2. Быстрое сохранение без вызова ИИ (`,(0,c.jsx)(t.code,{children:`dxt-types-save`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Если требуется пересобрать типы из существующего кэша без сетевых обращений к API ИИ:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsxs)(t.h4,{id:`опции-команды-dxt-types`,children:[`Опции команды `,(0,c.jsx)(t.code,{children:`dxt-types`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types [--prompts DIR] [--dir DIR] [--dist DIR]
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`--prompts`}),` (`,(0,c.jsx)(t.code,{children:`-p`}),`)`]}),`: Путь к папке локальных промптов и регламентов (по умолчанию `,(0,c.jsx)(t.code,{children:`ai-resources`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`)`]}),`: Временная директория для промежуточных деклараций (по умолчанию `,(0,c.jsx)(t.code,{children:`ai-types-temp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`--dist`})}),`: Папка скомпилированных JS/DTS файлов пакета (по умолчанию `,(0,c.jsx)(t.code,{children:`dist`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`часть-2-консолидация-глобального-промпта-dxt-prompt`,children:[`Часть 2. Консолидация глобального промпта (`,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`)`]}),`
`,(0,c.jsx)(t.h4,{id:`шаг-21-запустите-генерацию-системного-промпта`,children:`Шаг 2.1. Запустите генерацию системного промпта`}),`
`,(0,c.jsxs)(t.p,{children:[`В корне монорепозитория выполните команду `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt
`})}),`
`,(0,c.jsx)(t.p,{children:`Скрипт выполнит сборку глобального контекста:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Рекурсивно просканирует настроенные директории модулей (`,(0,c.jsx)(t.code,{children:`packages/*`}),`, `,(0,c.jsx)(t.code,{children:`node_modules/@dxtmisha/*`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Соберет описания библиотек (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), инструкции (`,(0,c.jsx)(t.code,{children:`ai-doc.md`}),`), ссылки на типы (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`) и скриншоты (`,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Объединит системную роль, правила AI Code Promise (`,(0,c.jsx)(t.code,{children:`aiCodeGlobalPrompt`}),`) и стандарты Vue Style Guide (`,(0,c.jsx)(t.code,{children:`aiCodeVuePrompt`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Встроит высокоприоритетные директивы из `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (при наличии).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Добавит чек-лист обязательного финального самоаудита (`,(0,c.jsx)(t.code,{children:`Self-Audit`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Запишет итоговый файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` в корень проекта.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Generating AI prompt...
end
`})}),`
`,(0,c.jsx)(t.h4,{id:`шаг-22-генерация-с-реестром-mcp-ресурсов`,children:`Шаг 2.2. Генерация с реестром MCP-ресурсов`}),`
`,(0,c.jsxs)(t.p,{children:[`Для автоматической сборки единого файла `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` добавьте опцию `,(0,c.jsx)(t.code,{children:`--mcp`}),` (`,(0,c.jsx)(t.code,{children:`-m`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt --mcp
`})}),`
`,(0,c.jsx)(t.h2,{id:`внутреннее-устройство-инструментов`,children:`Внутреннее устройство инструментов`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Движок генерации типов (`,(0,c.jsx)(t.code,{children:`DesignTypes`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),` — управление временной компиляцией TypeScript-деклараций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesMake`}),` — очистка AST-деклараций и удаление приватных сущностей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` — взаимодействие с языковой моделью для нормализации JSDoc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),` — кэширование и парсинг локальных правил `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesDescription`}),` — синтез технического описания `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` — регистрация ресурсов с MIME-типами в `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Движок агрегации промптов (`,(0,c.jsx)(t.code,{children:`LibraryAiPrompt`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiPromptItem`}),` — сканер отдельного пакета и сборщик метаданных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiMcp`}),` — агрегатор реестра ресурсов `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiWiki`}),` — синхронизация MDX-документации.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-перед-ручным-ведением-контекста`,children:`Преимущества перед ручным ведением контекста`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая актуализация`}),`: Контекст ИИ всегда точно соответствует реальному исходному коду проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Экономия токенов до 80%`}),`: Очистка типов и ленивая подгрузка по триггерам предотвращают переполнение контекстного окна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инструментальная независимость`}),`: Сгенерированный `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` работает одинаково эффективно в Antigravity, Cursor, Windsurf, Claude Code и GitHub Copilot.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};