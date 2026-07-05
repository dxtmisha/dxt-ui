import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Документация для ИИ (AI Docs)`}),`
`,(0,c.jsx)(n.h1,{id:`формирование-документации-для-ии`,children:`Формирование документации для ИИ`}),`
`,(0,c.jsx)(n.p,{children:`Современная разработка всё чаще опирается на инструменты искусственного интеллекта (GitHub Copilot, Cursor, кастомные LLM-агенты). Однако сложные архитектуры, глубокая вложенность файлов и избыточные комментарии часто сбивают ИИ с толку или переполняют его контекстное окно.`}),`
`,(0,c.jsxs)(n.p,{children:[`Пакет `,(0,c.jsx)(n.code,{children:`@dxtmisha/scripts`}),` решает эту проблему, автоматически генерируя оптимизированные инструкции, типы и метаданные, специально сжатые и отформатированные для восприятия нейросетями.`]}),`
`,(0,c.jsx)(n.h2,{id:`оптимизация-типов-designtypes`,children:`Оптимизация типов (DesignTypes)`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignTypes`}),` — это интеллектуальный "сборщик" типов проекта для передачи их в контекст ИИ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Как это работает:`})}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сканирование сборки:`}),` Скрипт анализирует директорию `,(0,c.jsx)(n.code,{children:`dist/`}),`, находя все файлы деклараций (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`), за исключением служебных файлов (wiki, базовых типов).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Объединение:`}),` Найденные файлы склеиваются в единый текстовый массив.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`ИИ-компрессия (AI Edit):`}),` Скрипт отправляет полученный код внутреннему ИИ (через `,(0,c.jsx)(n.code,{children:`useAi`}),`) со строгим промптом:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Удалить все комментарии на русском языке (для экономии токенов и универсальности).`}),`
`,(0,c.jsx)(n.li,{children:`Сократить английские комментарии до минимума без потери смысла.`}),`
`,(0,c.jsxs)(n.li,{children:[`Удалить все `,(0,c.jsx)(n.code,{children:`private`}),` и `,(0,c.jsx)(n.code,{children:`protected`}),` методы, оставив только публичный API.`]}),`
`,(0,c.jsx)(n.li,{children:`Удалить импорты и огромные перечисления (Enums), не дающие практической пользы.`}),`
`,(0,c.jsxs)(n.li,{children:[`Сохранить все важные JSDoc-теги (`,(0,c.jsx)(n.code,{children:`@example`}),`, `,(0,c.jsx)(n.code,{children:`@remarks`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Результат:`}),` Генерируется файл `,(0,c.jsx)(n.code,{children:`ai-types.md`}),`, содержащий предельно сжатую, но исчерпывающую библиотеку типов, которую ИИ-ассистенты могут прочитать за долю секунды, чтобы понимать архитектуру пакета и безошибочно писать код.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`генерация-описаний-ai-description`,children:`Генерация описаний (AI Description)`}),`
`,(0,c.jsxs)(n.p,{children:[`Помимо типов, скрипт анализирует код и автоматически генерирует `,(0,c.jsx)(n.code,{children:`ai-description.md`}),`. Это высокотехничное саммари проекта, которое:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Объясняет другому ИИ-ассистенту главную цель библиотеки.`}),`
`,(0,c.jsx)(n.li,{children:`Перечисляет основные классы, хуки и утилиты.`}),`
`,(0,c.jsxs)(n.li,{children:[`Указывает строгие триггеры — в каких именно случаях ИИ обязан прочитать `,(0,c.jsx)(n.code,{children:`ai-types.md`}),` перед написанием кода.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`генерация-ии-инструкций-aidoc`,children:`Генерация ИИ-инструкций (AiDoc)`}),`
`,(0,c.jsxs)(n.p,{children:[`В системе заложен модуль `,(0,c.jsx)(n.code,{children:`AiDoc`}),`, который рекурсивно обходит директории компонентов и с помощью ИИ генерирует или обновляет markdown-инструкции для разработчиков (например, `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiDocType`}),` анализирует исходный код конкретных директорий и формирует правила поведения: как правильно расширять конструктор, какие классы (`,(0,c.jsx)(n.code,{children:`Include`}),`) использовать, какие паттерны запрещены.`]}),`
`,(0,c.jsx)(n.h2,{id:`основные-команды`,children:`Основные команды`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-types`})}),` — запуск генерации и компрессии TypeScript-типов (`,(0,c.jsx)(n.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-ai-doc`})}),` — запуск генерации ИИ-документации по директориям проекта.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};