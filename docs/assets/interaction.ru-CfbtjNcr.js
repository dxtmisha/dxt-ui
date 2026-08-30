import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/8. Взаимодействие с AI`}),`
`,(0,c.jsx)(t.h1,{id:`взаимодействие-с-ai-ассистентами`,children:`Взаимодействие с AI-ассистентами`}),`
`,(0,c.jsxs)(t.p,{children:[`Архитектура AIDD в `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` спроектирована для максимальной прозрачности, предсказуемости и экономии контекстных токенов при взаимодействии с AI-ассистентами.`]}),`
`,(0,c.jsx)(t.p,{children:`Вместо загрузки гигабайтов кодовой базы монорепозитория в контекстное окно модели, используется многоуровневая стратегия ленивой подгрузки данных и строгая иерархия приоритетов правил.`}),`
`,(0,c.jsx)(t.h2,{id:`стратегия-многоуровневой-загрузки-контекста`,children:`Стратегия многоуровневой загрузки контекста`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Уровень 1: Обзорный контекст (Старт диалога)`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Загружается только файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Агент получает общие стандарты (AI Code Promise, Vue Style Guide) и краткие визитные карточки всех библиотек (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.em,{children:`Назначение:`}),` Агент знает обо всех модулях и возможностях системы, не перегружая память деталями.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Уровень 2: Углубленный контекст по требованию (On-Demand)`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-types.md`})}),` — детальная спецификация TypeScript (загружается только при необходимости вызвать методы пакета или изучить сигнатуры).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-developer.md`})}),` — внутренние стандарты разработки (загружается только при редактировании исходного кода библиотеки).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-resources/*.md`})}),` — узкопрофильные регламенты (загружаются только при срабатывании триггеров из блока `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-screenshot/`})}),` — визуальные снимки и DOM/CSS (загружаются при верстке и стилизации интерфейсов).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Уровень 3: Локальная память пакета`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-memory.md`})}),` — динамические правила и уроки, зафиксированные в текущем пакете.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`иерархия-приоритетов-priority-chain`,children:`Иерархия приоритетов (Priority Chain)`}),`
`,(0,c.jsx)(t.p,{children:`При возникновении любых разногласий между файлами документации агент руководствуется строгой иерархией:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`1. `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` (Высший локальный приоритет)`]}),` — локальный опыт и прямые указания разработчика для конкретного пакета переопределяют любые другие правила.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`2. `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (Высший глобальный приоритет)`]}),` — проектные директивы в корне монорепозитория, переопределяющие базовые системные регламенты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`3. `,(0,c.jsx)(t.code,{children:`ai-developer.md`})]}),` — утвержденные стандарты и архитектурные чек-листы разработки внутри пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`4. `,(0,c.jsx)(t.code,{children:`ai-resources/*.md`})]}),` — специализированные предметные стандарты (например, регламенты цветов, теней, отступов или работы с API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`5. `,(0,c.jsx)(t.code,{children:`ai-prompt.md`})]}),` — базовые системные правила кодирования (AI Code Promise, Vue Style Guide) и описания библиотек.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`6. `,(0,c.jsx)(t.code,{children:`ai-types.md`})]}),` — кодовые сигнатуры и декларации типов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`практические-сценарии-взаимодействия`,children:`Практические сценарии взаимодействия`}),`
`,(0,c.jsx)(t.h3,{id:`сценарий-1-разработка-компонента-в-dxtmishad1`,children:`Сценарий 1: Разработка компонента в @dxtmisha/d1`}),`
`,(0,c.jsxs)(t.p,{children:[`Разработчик дает задачу: `,(0,c.jsx)(t.em,{children:`«Создай компонент D1Badge в пакете @dxtmisha/d1»`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Старт:`}),` Агент считывает `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` и находит секцию пакета `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Изучение стандартов:`}),` Агент открывает `,(0,c.jsx)(t.code,{children:`packages/d1/ai-developer.md`}),` и знакомится со стандартами структуры файлов компонента и интеграции с `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Проверка ограничений памяти:`}),` Агент читает `,(0,c.jsx)(t.code,{children:`packages/d1/ai-memory.md`}),` и проверяет сохраненные правила.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Проверка Mandatory Rules:`}),` Агент сверяется с блоком `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` из `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`, открывает `,(0,c.jsx)(t.code,{children:`ai-resources/colors-and-palettes.md`}),` и `,(0,c.jsx)(t.code,{children:`ai-resources/rounded.md`}),` для корректного применения токенов скругления и палитр.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Написание кода:`}),` Компонент создается в строгом соответствии с требованиями всех четырех изученных документов.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`сценарий-2-использование-пакета-как-библиотеки-в-приложении`,children:`Сценарий 2: Использование пакета как библиотеки в приложении`}),`
`,(0,c.jsxs)(t.p,{children:[`Разработчик дает задачу: `,(0,c.jsx)(t.em,{children:`«Реализуй кэшируемый HTTP-клиент с обработкой ошибок»`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Старт:`}),` Агент читает корневой `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` приложения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Обнаружение зависимости:`}),` В сводке библиотек агент находит пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),` с описанием `,(0,c.jsx)(t.em,{children:`«HTTP client, state storage, i18n localization, ErrorCenter»`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Срабатывание триггера:`}),` Описание содержит триггер: `,(0,c.jsx)(t.em,{children:`«Study when working with HTTP requests, API caching, or ErrorCenter»`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Загрузка типов:`}),` Агент точечно открывает файл `,(0,c.jsx)(t.code,{children:`node_modules/@dxtmisha/functional-basic/ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Генерация точного кода:`}),` Агент находит класс `,(0,c.jsx)(t.code,{children:`ApiFetch`}),`, методы `,(0,c.jsx)(t.code,{children:`get()`}),` / `,(0,c.jsx)(t.code,{children:`post()`}),` и генератор ошибок `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`, создавая вызовы со 100% точностью и без выдуманных параметров.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`сценарий-3-добавление-глобальной-директивы-через-ai-instructionmd`,children:`Сценарий 3: Добавление глобальной директивы через ai-instruction.md`}),`
`,(0,c.jsx)(t.p,{children:`Тимлид решает временно ввести строгое ограничение во всех пакетах:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Создается файл `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` в корне репозитория с текстом директивы.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Выполняется команда `,(0,c.jsx)(t.code,{children:`npm run prompt`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Скрипт внедряет директиву в конец `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` в секцию `,(0,c.jsx)(t.code,{children:`High-Priority Directives`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`С этого момента любой AI-ассистент при чтении `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` немедленно исполняет требование во всех пакетах монорепозитория.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`контрольная-матрица-взаимодействия`,children:`Контрольная матрица взаимодействия`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`При добавлении нового метода или экспорта`}),` ➔ выполняется `,(0,c.jsx)(t.code,{children:`npm run types`}),` ➔ обновляются `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` и `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` ➔ выполняется `,(0,c.jsx)(t.code,{children:`npm run prompt`}),` ➔ обновляется глобальный `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`При создании нового тематического регламента`}),` ➔ создается файл в `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` ➔ выполняется `,(0,c.jsx)(t.code,{children:`npm run types`}),` ➔ выполняется `,(0,c.jsx)(t.code,{children:`npm run prompt`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`При корректировке поведения ИИ в диалоге`}),` ➔ используется триггер «Запомни» ➔ агент дописывает правило в `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` пакета без изменения существующих правил и без необходимости пересборки проекта.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};