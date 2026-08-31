import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/10. Конфигурация (design.config.json)`}),`
`,(0,c.jsx)(t.h1,{id:`конфигурация-designconfigjson-для-ai-и-генерации-типов`,children:`Конфигурация design.config.json для AI и генерации типов`}),`
`,(0,c.jsxs)(t.p,{children:[`Файл `,(0,c.jsx)(t.code,{children:`design.config.json`}),` является единым центром управления параметрами генерации AI-документации, компиляции типов TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), сканирования исходников и подключения языковых моделей.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Конфигурационный файл размещается в корне монорепозитория или в корне отдельного пакета библиотеки. Пакеты могут переопределять базовые настройки и наследовать их через механизм `,(0,c.jsx)(t.code,{children:`"extends"`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-минимального-конфига-для-ai`,children:`Пример минимального конфига для AI`}),`
`,(0,c.jsxs)(t.p,{children:[`Для работы ИИ-генератора `,(0,c.jsx)(t.code,{children:`dxt-types`}),` и сборщика системного промпта `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` достаточно указать параметры выбранного провайдера:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`полный-пример-конфигурации-для-генерации-dts-и-ai-типов`,children:`Полный пример конфигурации для генерации .d.ts и AI-типов`}),`
`,(0,c.jsx)(t.p,{children:`Ниже приведен пример конфига со всеми параметрами, регулирующими компиляцию деклараций и сборку AI-контекста:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "extends": "../../design.config.json",
  "packagePrefix": "@dxtmisha",
  "typesPaths": [
    "src"
  ],
  "typesMatch": [
    "Button",
    "Input"
  ],
  "typesExclude": [
    "\\\\.wiki\\\\.(d\\\\.)?ts$",
    "wiki/",
    "library/"
  ],
  "typesWithoutVue": false,
  "typesDir": "ai-types-temp",
  "distDir": "dist",
  "aiResourcesDir": "ai-resources",
  "promptScanDepth": 6,
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  },
  "aiTypesConcurrency": 8
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`описание-параметров-для-ai-и-генерации-типов`,children:`Описание параметров для AI и генерации типов`}),`
`,(0,c.jsx)(t.h3,{id:`1-настройки-подключения-к-ии-провайдеру`,children:`1. Настройки подключения к ИИ-провайдеру`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiType`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, по умолчанию: `,(0,c.jsx)(t.code,{children:`'gemini'`}),`) — провайдер искусственного интеллекта для оптимизации JSDoc и генерации описаний. Поддерживаются:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`gemini`}),` — официальный Google Gemini API (через `,(0,c.jsx)(t.code,{children:`@google/genai`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`gemini-cli`}),` — вызовы через локальный интерфейс Gemini CLI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`openai`}),` — модели OpenAI (GPT-4o, GPT-4o-mini и совместимые эндпоинты).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`claude`}),` — Anthropic Claude API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`claude-cli`}),` / `,(0,c.jsx)(t.code,{children:`claude-agent`}),` — вызовы через CLI/Agent Anthropic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zai`}),` — Zhipu AI (GLM модели).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiModel`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — точный идентификатор модели нейросети (например: `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gpt-4o`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-7-sonnet`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiKey`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — API-ключ для авторизации в сервисе выбранного провайдера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiConfig`})}),` (`,(0,c.jsx)(t.code,{children:`object`}),`) — объект тонких настроек генерации (например, температура генерации `,(0,c.jsx)(t.code,{children:`temperature: 0.2`}),`, лимиты токенов и кастомные заголовки).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiTypesConcurrency`})}),` (`,(0,c.jsx)(t.code,{children:`number`}),`, по умолчанию: `,(0,c.jsx)(t.code,{children:`8`}),`) — максимальное количество файлов типов, обрабатываемых моделью параллельно во время работы команды `,(0,c.jsx)(t.code,{children:`dxt-types`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-параметры-сканирования-и-компиляции-dts`,children:`2. Параметры сканирования и компиляции .d.ts`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesPaths`})}),` (`,(0,c.jsx)(t.code,{children:`string[]`}),`, по умолчанию: `,(0,c.jsx)(t.code,{children:`['src']`}),`) — массив путей к директориям с исходным кодом, которые сканируются для извлечения TypeScript-деклараций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesMatch`})}),` (`,(0,c.jsx)(t.code,{children:`string | string[]`}),`) — строковые шаблоны или регулярные выражения для включения в сборку только определенных файлов/компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesExclude`})}),` (`,(0,c.jsx)(t.code,{children:`string | string[]`}),`) — массив регулярных выражений или путей для исключения вспомогательных файлов, тестовых утилит и внутренней wiki из анализа типов (например: `,(0,c.jsx)(t.code,{children:`["\\\\.wiki\\\\.(d\\\\.)?ts$", "wiki/", "library/"]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesWithoutVue`})}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`, по умолчанию: `,(0,c.jsx)(t.code,{children:`false`}),`) — флаг режима компиляции. Установите `,(0,c.jsx)(t.code,{children:`true`}),` для чисто TypeScript/JavaScript пакетов без `,(0,c.jsx)(t.code,{children:`.vue`}),` компонентов: скрипт отключит вызовы `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` и применит стандартный компилятор `,(0,c.jsx)(t.code,{children:`tsc`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, по умолчанию: `,(0,c.jsx)(t.code,{children:`'ai-types-temp'`}),`) — имя временной директории, в которую `,(0,c.jsx)(t.code,{children:`dxt-types`}),` извлекает сырые `,(0,c.jsx)(t.code,{children:`.d.ts`}),` файлы перед очисткой и удалением приватных сущностей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`distDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, по умолчанию: `,(0,c.jsx)(t.code,{children:`'dist'`}),`) — директория со скомпилированным бандлом пакета, используемая генератором для сопоставления экспортов.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-интеграция-в-системный-промпт`,children:`3. Интеграция в системный промпт`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiResourcesDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, по умолчанию: `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`) — папка с узкопрофильными руководствами и стандартами. `,(0,c.jsx)(t.code,{children:`dxt-types`}),` сканирует её и формирует блок `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` в `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`promptScanDepth`})}),` (`,(0,c.jsx)(t.code,{children:`number`}),`, по умолчанию: `,(0,c.jsx)(t.code,{children:`6`}),`) — максимальная глубина рекурсивного обхода каталогов при поиске пакетов и сборе сводного `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`packagePrefix`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — префикс пакетов монорепозитория (например, `,(0,c.jsx)(t.code,{children:`@dxtmisha`}),` или `,(0,c.jsx)(t.code,{children:`@my-org`}),`), используемый для корректного формирования путей импорта в промптах.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`наследование-и-безопасность-api-ключей-local`,children:`Наследование и безопасность API-ключей (.local)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Наследование (`,(0,c.jsx)(t.code,{children:`extends`}),`):`]}),`
В монорепозиториях базовый конфиг размещается в корне, а пакеты внутри `,(0,c.jsx)(t.code,{children:`packages/*`}),` наследуют его через `,(0,c.jsx)(t.code,{children:`"extends": "../../design.config.json"`}),`, переопределяя только специфичные для себя параметры (`,(0,c.jsx)(t.code,{children:`typesWithoutVue`}),`, `,(0,c.jsx)(t.code,{children:`typesPaths`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Локальные ключи (`,(0,c.jsx)(t.code,{children:`design.config.local.json`}),`):`]}),`
Чтобы не коммитить персональные API-ключи (`,(0,c.jsx)(t.code,{children:`aiKey`}),`) в Git, создайте файл `,(0,c.jsx)(t.code,{children:`design.config.local.json`}),` рядом с основным конфигом. Скрипты автоматически подхватят локальные параметры поверх базовых. Сам файл `,(0,c.jsx)(t.code,{children:`*.local.json`}),` должен быть внесен в `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};