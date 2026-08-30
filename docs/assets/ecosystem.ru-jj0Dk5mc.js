import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/2. Экосистема файлов`}),`
`,(0,c.jsx)(t.h1,{id:`экосистема-ai-документации`,children:`Экосистема AI-документации`}),`
`,(0,c.jsxs)(t.p,{children:[`В экосистеме `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` реализована многоуровневая структура машиночитаемых файлов для управления поведением AI-ассистентов. Центральным механизмом выступает распределенное ведение документации в пакетах с последующей автоматической агрегацией в единый глобальный контекст.`]}),`
`,(0,c.jsx)(t.p,{children:`Ниже представлен полный реестр файлов экосистемы и их зоны ответственности.`}),`
`,(0,c.jsx)(t.h2,{id:`глобальные-системные-файлы`,children:`Глобальные системные файлы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` (Главный агрегированный системный промпт)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень монорепозитория.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` файл генерируется автоматически скриптом `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`. Объединяет базовые стандарты разработки (AI Code Promise, Vue Style Guide) и обходит все пакеты репозитория (включая зависимости в `,(0,c.jsx)(t.code,{children:`node_modules`}),`), извлекая их описания (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), инструкции (`,(0,c.jsx)(t.code,{children:`ai-doc.md`}),`), ссылки на типы (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`), скриншоты (`,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`) и стандарты разработчика (`,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Использование:`}),` читается агентом в начале каждой сессии, является главным источником правил проекта.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (Глобальные высокоприоритетные директивы)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень монорепозитория.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` пишется разработчиком вручную при необходимости ввести срочные или временные правила. При выполнении `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` содержимое файла встраивается в конец `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` в секцию `,(0,c.jsx)(t.code,{children:`High-Priority Directives`}),` и переопределяет любые базовые правила.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` (Консолидированный реестр ресурсов MCP)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень монорепозитория.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` агрегированный список всех доступных ресурсов (документация, типы, скриншоты, промпты) для подключения к MCP-серверу (Model Context Protocol).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`внутреннее-использование-разработка-самого-пакета`,children:`Внутреннее использование (Разработка самого пакета)`}),`
`,(0,c.jsx)(t.p,{children:`Файлы, регламентирующие правила работы с исходным кодом конкретного пакета. Агент обращается к ним, когда разработчик просит изменить или расширить код внутри данного пакета.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-developer.md`}),` (Внутренние стандарты и паттерны разработки)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета (например, `,(0,c.jsx)(t.code,{children:`packages/d1/ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` фундаментальные правила о том, как правильно расширять функционал или создавать новые компоненты внутри библиотеки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ведение:`}),` поддерживается разработчиком вручную. В `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` встраивается путь к файлу с требованием изучить его перед изменением кода пакета.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-memory.md`}),` (Локальная память пакета / Workspace Memory)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета (например, `,(0,c.jsx)(t.code,{children:`packages/scripts/ai-memory.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` динамические архитектурные ограничения, запреты и паттерны пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ведение:`}),` обновляется агентом в процессе диалога по команде `,(0,c.jsx)(t.strong,{children:`«Запомни»`}),` / `,(0,c.jsx)(t.strong,{children:`«Remember»`}),`. Имеет высший приоритет при принятии решений внутри пакета.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`materials/`}),` (Папка рабочих материалов и ТЗ)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета или конкретного компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` хранилище первичных материалов, макетов, спецификаций и технических заданий для решения крупных задач.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`внешнее-использование-пакет-как-библиотека`,children:`Внешнее использование (Пакет как библиотека)`}),`
`,(0,c.jsx)(t.p,{children:`Публичный интерфейс пакета, используемый скриптом-агрегатором и пакетами-потребителями.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-description.md`}),` (Техническое описание пакета и триггеры правил)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` автоматически формируется при генерации документации (`,(0,c.jsx)(t.code,{children:`npm run types`}),` / `,(0,c.jsx)(t.code,{children:`dxt-types`}),`). Содержит секции `,(0,c.jsx)(t.code,{children:`Core Purpose`}),`, `,(0,c.jsx)(t.code,{children:`Key Capabilities`}),`, `,(0,c.jsx)(t.code,{children:`Triggers for Studying ai-types.md`}),` и раздел `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` с триггерами правил из `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`. Текст файла полностью встраивается в `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-doc.md`}),` (Специализированные руководства разработчика)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` создается вручную для описания уникальных нюансов логики, интеграций или стилей. Полностью встраивается в `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-resources/`}),` (Папка узкопрофильных стандартов и правил)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета (например, `,(0,c.jsx)(t.code,{children:`packages/d1/ai-resources/`}),`, `,(0,c.jsx)(t.code,{children:`packages/styles/ai-resources/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` содержит предметные регламенты (например, `,(0,c.jsx)(t.code,{children:`colors-and-palettes.md`}),`, `,(0,c.jsx)(t.code,{children:`border.md`}),`, `,(0,c.jsx)(t.code,{children:`elevation.md`}),`, `,(0,c.jsx)(t.code,{children:`spacing.md`}),`, `,(0,c.jsx)(t.code,{children:`skeleton.md`}),`, `,(0,c.jsx)(t.code,{children:`api-reference.md`}),`, `,(0,c.jsx)(t.code,{children:`storage-state.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Использование:`}),` анализируется при сборке документации для формирования триггеров в блоке `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` файла `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-types.md`}),` (Оптимизированная TypeScript-спецификация API)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` автоматически создается командой `,(0,c.jsx)(t.code,{children:`dxt-types`}),`. Содержит очищенные декларации типов, интерфейсов, классов и функций с JSDoc-описаниями и поисковыми тегами (`,(0,c.jsx)(t.code,{children:`@keywords`}),`), избавленные от приватных полей и деталей реализации.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-screenshot/`}),` (Визуальный контекст пакета)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` содержит снимки экрана интерфейса (`,(0,c.jsx)(t.code,{children:`.webp`}),`), отрендеренный DOM (`,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),`) и примененные CSS-стили (`,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),`), сгенерированные утилитой `,(0,c.jsx)(t.code,{children:`dxt-screenshot`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` (Ресурсная спецификация MCP пакета)`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расположение:`}),` корень пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суть:`}),` карта URI-ресурсов пакета для экспорта в протокол Model Context Protocol.`]}),`
`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};