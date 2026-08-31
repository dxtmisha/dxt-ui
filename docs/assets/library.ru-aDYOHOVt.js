import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/6. Внедрение в библиотеку`}),`
`,(0,c.jsx)(t.h1,{id:`внедрение-aidd-в-библиотеку-и-пакеты`,children:`Внедрение AIDD в библиотеку и пакеты`}),`
`,(0,c.jsx)(t.p,{children:`Для того чтобы библиотека компонентов, UI-кит или набор утилит могли полноценно взаимодействовать с AI-ассистентами в парадигме AI-Driven Development (AIDD), пакет должен самостоятельно поставлять структурированные машиночитаемые метаданные.`}),`
`,(0,c.jsxs)(t.p,{children:[`При установке такой библиотеки в проект ассистент автоматически получает доступ к выжимке публичных типов (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`), архитектурному профилю (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), специализированным регламентам (`,(0,c.jsx)(t.code,{children:`ai-resources/`}),`), визуальным снимкам (`,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`) и MCP-ресурсам (`,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`). Это позволяет ИИ использовать библиотеку с нулевыми галлюцинациями и без необходимости вручную передавать исходный код в чат.`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-1-установка-пакета-скриптов`,children:`Шаг 1: Установка пакета скриптов`}),`
`,(0,c.jsxs)(t.p,{children:[`Установите пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` в `,(0,c.jsx)(t.code,{children:`devDependencies`}),` вашей библиотеки:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/scripts --save-dev
`})}),`
`,(0,c.jsx)(t.h2,{id:`шаг-2-настройка-конфигурационного-файла-designconfigjson`,children:`Шаг 2: Настройка конфигурационного файла design.config.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Все процессы генерации AI-метаданных управляются через конфигурационный файл `,(0,c.jsx)(t.code,{children:`design.config.json`}),` в корне библиотеки (или через механизм наследования `,(0,c.jsx)(t.code,{children:`"extends"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Конфигурация создается исключительно на стороне библиотеки и определяет параметры подключения к ИИ-провайдеру для форматирования сигнатур и JSDoc:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`Параметры конфигурации:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiType`})}),` — поддерживаемый провайдер ИИ: `,(0,c.jsx)(t.code,{children:`gemini`}),` (включая `,(0,c.jsx)(t.code,{children:`gemini-cli`}),`), `,(0,c.jsx)(t.code,{children:`openai`}),`, `,(0,c.jsx)(t.code,{children:`claude`}),` (включая `,(0,c.jsx)(t.code,{children:`claude-cli`}),` и `,(0,c.jsx)(t.code,{children:`claude-agent`}),`), а также `,(0,c.jsx)(t.code,{children:`zai`}),` (Zhipu AI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiModel`})}),` — идентификатор используемой модели (например, `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gpt-4o`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-7-sonnet`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiKey`})}),` — API-ключ выбранного ИИ-провайдера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiConfig`})}),` — дополнительные параметры генерации (например, температура отклика `,(0,c.jsx)(t.code,{children:`temperature: 0.2`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-3-настройка-сборочных-скриптов-в-packagejson`,children:`Шаг 3: Настройка сборочных скриптов в package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Добавьте команды генерации типов и визуального контекста в секцию `,(0,c.jsx)(t.code,{children:`scripts`}),` файла `,(0,c.jsx)(t.code,{children:`package.json`}),` библиотеки:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "build": "vite build && vue-tsc --emitDeclarationOnly",
    "types": "npm run build && dxt-types",
    "types:save": "dxt-types-save",
    "screenshot": "dxt-screenshot"
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Критически важное правило: сборка бандла перед генерацией типов. Команда `,(0,c.jsx)(t.code,{children:`dxt-types`}),` ставится строго после команды сборки бандла (`,(0,c.jsx)(t.code,{children:`npm run build && dxt-types`}),`).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Почему это необходимо:`}),` ИИ-генератор анализирует именно скомпилированный финальный пакет. Скомпилированный бандл компактнее сырых исходников: в нем нет промежуточного мусора, приватной вспомогательной логики и неэкспортируемых сущностей. Анализ готового бандла позволяет сформировать максимально чистый и точный контракт публичного API.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Назначение команд:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run types`})}),` — полная компиляция типов, очистка AST от приватных полей, обращение к ИИ для оптимизации JSDoc и генерация файлов `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` и `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run types:save`})}),` — быстрое обновление метаданных и MCP-ресурсов из существующего кэша типов без повторных сетевых вызовов к API ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run screenshot`})}),` — запуск dev-сервера в headless-браузере, создание скриншотов компонентов (`,(0,c.jsx)(t.code,{children:`ai-screenshot/*.webp`}),`), дампа DOM (`,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),`) и стилей (`,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),`) для мультимодальных ИИ-моделей.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-4-подготовка-метаданных-кода-и-специализированных-гайдов`,children:`Шаг 4: Подготовка метаданных кода и специализированных гайдов`}),`
`,(0,c.jsx)(t.p,{children:`Качественная работа ИИ с библиотекой строится на грамотном оформлении исходного кода и сопутствующих инструкций:`}),`
`,(0,c.jsx)(t.h3,{id:`1-jsdoc-документирование-специальные-теги-и-автоматические-keywords`,children:`1. JSDoc-документирование (Специальные теги и автоматические @keywords)`}),`
`,(0,c.jsx)(t.p,{children:`Для всех публичных методов, функций, интерфейсов и компонентов добавляйте понятные JSDoc-комментарии:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@example`})}),` — практические примеры вызова методов или шаблонов компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@note`})}),` — архитектурные нюансы, правила жизненного цикла и сайд-эффекты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@warning`})}),` — ограничения среды выполнения (например, только для браузера или запрет на вызов в шаблоне).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@remarks`})}),` — пояснения сложной инженерной логики.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Автоматическая генерация `,(0,c.jsx)(t.code,{children:`@keywords`}),`:`]}),` Поисковые теги и синонимы (`,(0,c.jsx)(t.code,{children:`@keywords`}),`) `,(0,c.jsx)(t.strong,{children:`генерирует сам ИИ`}),` при выполнении `,(0,c.jsx)(t.code,{children:`npm run types`}),` (`,(0,c.jsx)(t.code,{children:`dxt-types`}),`). Разработчику не нужно писать их вручную: языковая модель сама анализирует назначение функции и дополняет сигнатуру в `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` ассоциативными ключами для быстрого поиска агентами.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`/**
 * Executes a localized HTTP request with automatic session token binding.
 *
 * Выполняет локализованный HTTP-запрос с автоматической привязкой токена сессии.
 * @example
 * const user = await fetchApi<UserProfile>('/api/user/me')
 *
 * @note Automatically attaches Bearer token from active session storage.
 * @warning Do not invoke directly in component template render cycle.
 * @param url request endpoint URL / URL адрес эндпоинта
 * @param options request options / параметры запроса
 * @returns parsed response data / распарсенные данные ответа
 */
export async function fetchApi<T>(url: string, options?: RequestOptions): Promise<T>;
`})}),`
`,(0,c.jsx)(t.h3,{id:`2-архитектурный-манифест-библиотеки-ai-docmd`,children:`2. Архитектурный манифест библиотеки (ai-doc.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`Создайте файл `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` в корне библиотеки. В нем описываются фундаментальные правила написания кода с использованием данного пакета:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Архитектурная философия (например: «все компоненты чисто презентационные, логика выносится в composables»).`}),`
`,(0,c.jsx)(t.li,{children:`Обязательные соглашения и запреты (например: «запрещено использовать сырые HEX-цвета, использовать только токены»).`}),`
`,(0,c.jsxs)(t.li,{children:[`При генерации документации содержимое `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` автоматически встраивается в `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` и попадает в сводный `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-специализированные-регламенты-ai-resources`,children:`3. Специализированные регламенты (ai-resources/)`}),`
`,(0,c.jsxs)(t.p,{children:[`Выносите узкопрофильные стандарты в отдельные файлы в папку `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` пакета (например, `,(0,c.jsx)(t.code,{children:`ai-resources/colors.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-resources/skeleton.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-resources/storage.md`}),`):`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Описывайте правила по принципу «Антипаттерн vs Рекомендуемый паттерн».`}),`
`,(0,c.jsxs)(t.li,{children:[`Скрипт `,(0,c.jsx)(t.code,{children:`dxt-types`}),` автоматически проанализирует эти файлы и сформирует блок `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` в `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-5-настройка-gitignore-библиотеки`,children:`Шаг 5: Настройка .gitignore библиотеки`}),`
`,(0,c.jsx)(t.p,{children:`Сгенерированные артефакты типов и временные директории компиляции должны быть исключены из Git:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-gitignore`,children:`ai-types.md
ai-description.md
ai-types-temp
ai-tmp
ai-mcp-resources.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Важное правило:`}),` Файл `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` и папка `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` `,(0,c.jsx)(t.strong,{children:`не должны`}),` добавляться в `,(0,c.jsx)(t.code,{children:`.gitignore`}),` — они пишутся вручную, содержат ключевые архитектурные правила и должны фиксироваться в системе контроля версий Git.`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-6-запуск-генерации-и-проверка-артефактов`,children:`Шаг 6: Запуск генерации и проверка артефактов`}),`
`,(0,c.jsx)(t.p,{children:`Выполните сборку типов:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run types
`})}),`
`,(0,c.jsx)(t.p,{children:`После выполнения команды в корне пакета появятся:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-types.md`})}),` — оптимизированная выжимка всех публичных типов и функций с тегами `,(0,c.jsx)(t.code,{children:`@keywords`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-description.md`})}),` — профиль библиотеки с описанием возможностей и блоком `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`})}),` — манифест ресурсов для протокола Model Context Protocol.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Если библиотека содержит UI-компоненты, запустите генерацию скриншотов:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`,(0,c.jsx)(t.h2,{id:`шаг-7-публикация-и-распространение-пакета`,children:`Шаг 7: Публикация и распространение пакета`}),`
`,(0,c.jsx)(t.p,{children:`Чтобы потребители вашей библиотеки (проекты и другие разработчики) получали готовую AI-инфраструктуру «из коробки», убедитесь, что файлы метаданных включаются в публикуемый пакет.`}),`
`,(0,c.jsxs)(t.p,{children:[`Проверьте секцию `,(0,c.jsx)(t.code,{children:`files`}),` в `,(0,c.jsx)(t.code,{children:`package.json`}),` библиотеки:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "files": [
    "dist",
    "ai-types.md",
    "ai-description.md",
    "ai-resources",
    "ai-screenshot",
    "ai-mcp-resources.json",
    "ai-doc.md"
  ]
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`При установке опубликованного пакета в любое клиентское приложение команда `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` автоматически обнаружит `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` и подключит контракты библиотеки в единый `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};