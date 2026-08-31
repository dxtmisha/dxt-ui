import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/1. Дизайн система`}),`
`,(0,c.jsx)(t.h1,{id:`архитектура-и-преимущества-дизайн-системы`,children:`Архитектура и преимущества дизайн-системы`}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` — это инфраструктурное ядро и кодогенератор дизайн-системы `,(0,c.jsx)(t.strong,{children:`DXT UI`}),`. Он реализует передовую архитектуру разделения абстрактной поведенческой логики и визуального представления, автоматизируя создание, связывание, типизацию и документирование всех компонентов библиотеки.`]}),`
`,(0,c.jsx)(t.p,{children:`Главная цель системы — предоставить разработчикам полностью автоматизированный конвейер, исключающий рутинный шаблонный код (boilerplate), предотвращающий ошибки человеческого фактора и обеспечивающий сквозную согласованность между дизайном, стилями, логикой и типами TypeScript.`}),`
`,(0,c.jsx)(t.h2,{id:`архитектурная-схема`,children:`Архитектурная схема`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`​
 ┌──────────────────────────────────────────────┐
 │ @dxtmisha/constructor (Headless-ядро)        │
 │ • Логика, WAI-ARIA доступность, стейт, фокус │
 └──────────────────────┬───────────────────────┘
                        │
                        │ + properties.json (Дизайн-токены)
                        ▼
 ┌──────────────────────────────────────────────┐
 │ @dxtmisha/scripts (CLI: dxt-ui)              │
 │ • Парсинг токенов и автоматическая сборка    │
 └──────────────────────┬───────────────────────┘
                        │
      ┌─────────────────┼─────────────────┐
      ▼                 ▼                 ▼
 ┌──────────┐     ┌───────────┐     ┌───────────┐
 │ props.ts │     │styleToken │     │ D1*.vue   │
 │ TS-типы  │     │CSS-токены │     │ BEM-карты │
 └────┬─────┘     └─────┬─────┘     └─────┬─────┘
      │                 │                 │
      └─────────────────┼─────────────────┘
                        ▼
 ┌──────────────────────────────────────────────┐
 │ Готовый UI-компонент                         │
 │ • 100% Type-Safe & Autocomplete              │
 │ • WAI-ARIA доступность & Zero-Boilerplate    │
 └──────────────────────────────────────────────┘
`})}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-преимущества-реализации`,children:`Ключевые преимущества реализации`}),`
`,(0,c.jsx)(t.h3,{id:`1-строгая-изоляция-логики-от-визуального-слоя-headless--design-system`,children:`1. Строгая изоляция логики от визуального слоя (Headless + Design System)`}),`
`,(0,c.jsxs)(t.p,{children:[`Поведенческая логика (обработка клавиатуры, фокус-ловушки, расчет позиционирования, доступность ARIA, синхронизация состояний) полностью вынесена в `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Легкость создания новых UI-китов:`}),` Для создания альтернативной темы оформления (например, `,(0,c.jsx)(t.code,{children:`d2`}),` или кастомной темы бренда) не нужно переписывать ни строчки сложной логики компонентов — достаточно определить новые `,(0,c.jsx)(t.code,{children:`properties.json`}),` и файлы стилей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гарантированная надежность:`}),` Исправление бага в логике конструктора автоматически чинит поведение во всех дизайн-системах, использующих этот конструктор.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-нулевой-бойлерплейт-и-колоссальная-скорость-разработки-zero-boilerplate`,children:`2. Нулевой бойлерплейт и колоссальная скорость разработки (Zero-Boilerplate)`}),`
`,(0,c.jsx)(t.p,{children:`В классическом подходе добавление каждого нового пропса требует правок в 5–7 местах (типы, пропсы Vue, валидаторы, шаблон классов, SCSS-селекторы, документация).`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`В DXT UI разработчик добавляет `,(0,c.jsx)(t.strong,{children:`одну строку`}),` в `,(0,c.jsx)(t.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` за секунду автоматически генерирует обновленный `,(0,c.jsx)(t.code,{children:`props.ts`}),`, BEM-маппинг в `,(0,c.jsx)(t.code,{children:`.vue`}),` файле, SCSS-переменные в `,(0,c.jsx)(t.code,{children:`styleToken.scss`}),` и метаданные для автодополнения в IDE.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-единый-источник-правды-и-сквозная-типизация-100-type-safety`,children:`3. Единый источник правды и сквозная типизация (100% Type Safety)`}),`
`,(0,c.jsxs)(t.p,{children:[`Файл `,(0,c.jsx)(t.code,{children:`properties.json`}),` выступает абсолютным источником правды для всей инфраструктуры:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`TypeScript`}),`: строго типизирует все возможные значения свойств (`,(0,c.jsx)(t.code,{children:`size: 'sm' | 'md' | 'lg'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Runtime-проверки`}),`: генерирует массивы допустимых значений (`,(0,c.jsx)(t.code,{children:`propsValues`}),`) для мгновенной валидации через хелперы `,(0,c.jsx)(t.code,{children:`inArray`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`IDE подсказки`}),`: автоматически обновляет `,(0,c.jsx)(t.code,{children:`web-types.json`}),`, обеспечивая полноценный IntelliSense в WebStorm и VS Code.`]}),`
`,(0,c.jsx)(t.li,{children:`Полностью исключены человеческие ошибки: опечатки в названиях классов, расхождения типов и CSS-селекторов, забытые экспорты.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`4-мгновенный-глобальный-рефакторинг-всей-дизайн-системы`,children:`4. Мгновенный глобальный рефакторинг всей дизайн-системы`}),`
`,(0,c.jsx)(t.p,{children:`Если требуется изменить префикс BEM-классов, скорректировать правила формирования CSS-переменных или поддержать новые стандарты браузеров во всех 100+ компонентах:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Достаточно внести изменение в один генератор в `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Запуск сборки мгновенно пересобирает все компоненты монорепозитория в соответствии с новыми правилами за считанные секунды.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`5-декларативное-управление-палитрами-и-темами-без-раздувания-css`,children:`5. Декларативное управление палитрами и темами без раздувания CSS`}),`
`,(0,c.jsx)(t.p,{children:`Парсер дизайн-токенов поддерживает сложные паттерны оформления:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`flag-theme`}),` и палитры`]}),`: динамическое переключение темной/светлой темы и цветовых схем без дублирования CSS-кода через CSS-переменные палитр.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разделение цвета и прозрачности`}),`: использование токенов с независимой прозрачностью (`,(0,c.jsx)(t.code,{children:`backgroundOpacity`}),`, `,(0,c.jsx)(t.code,{children:`colorOpacity`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Умные BEM-модификаторы (`,(0,c.jsx)(t.code,{children:`flag-subclass`}),`, `,(0,c.jsx)(t.code,{children:`flag-replace`}),`)`]}),`: классы-модификаторы добавляются в DOM только тогда, когда активны соответствующие флаги.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`6-автоматическая-композиция-и-dependency-injection-подкомпонентов`,children:`6. Автоматическая композиция и Dependency Injection подкомпонентов`}),`
`,(0,c.jsxs)(t.p,{children:[`Сгенерированный `,(0,c.jsx)(t.code,{children:`.vue`}),` компонент автоматически связывает и передает вспомогательные элементы (иконки `,(0,c.jsx)(t.code,{children:`D1Icon`}),`, индикаторы загрузки `,(0,c.jsx)(t.code,{children:`D1Progress`}),`, эффекты нажатия `,(0,c.jsx)(t.code,{children:`D1Ripple`}),`) напрямую в класс `,(0,c.jsx)(t.code,{children:`Design`}),`. Шаблон компонента остается предельно чистым:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script setup lang="ts">
// Вся связка сгенерирована автоматически
const design = new ButtonDesign('d1.button', props, {
  emits,
  classes: classesToken,
  styles: stylesToken,
  components: { icon: D1Icon, progress: D1Progress, ripple: D1Ripple }
})
const render = design.render()
<\/script>

<template>
  <render/>
</template>
`})}),`
`,(0,c.jsx)(t.h3,{id:`7-ai-native-экосистема-и-автоматизация-документации`,children:`7. AI-Native экосистема и автоматизация документации`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Генерация `,(0,c.jsx)(t.code,{children:`ai-types.md`})]}),`: пакет компилирует сжатые справочники типов, позволяющие LLM-моделям мгновенно понимать API библиотек без чтения гигантских файлов исходников.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI-генерация справочников и Storybook MDX`}),`: автоматическое наполнение документации описаниями и интерактивными примерами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Figma API синхронизация`}),`: прямой импорт фреймов, токенов и стилей из макетов Figma в кодовую базу.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-устроено-под-капотом`,children:`Как это устроено под капотом`}),`
`,(0,c.jsxs)(t.h3,{id:`1-описание-визуального-контракта-propertiesjson`,children:[`1. Описание визуального контракта (`,(0,c.jsx)(t.code,{children:`properties.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Разработчик описывает дизайн-свойства компонента в декларативном формате:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "size": {
    "type": "type-var",
    "value": ["sm", "md", "lg"],
    "default": "md"
  },
  "palette": {
    "type": "flag-theme",
    "value": ["primary", "secondary", "tertiary", "error"]
  },
  "outline": {
    "type": "flag-subclass"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`2-автоматическая-генерация-файлов`,children:`2. Автоматическая генерация файлов`}),`
`,(0,c.jsxs)(t.p,{children:[`Инструмент `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` компилирует JSON-конфигурацию в набор взаимосвязанных файлов:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`props.ts`})}),`: объединяет базовые свойства логического конструктора и визуальные дизайн-токены с дефолтными значениями.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`styleToken.scss`})}),`: генерирует SCSS-миксины и CSS-переменные для каждого значения токенов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1[Component].vue`})}),`: формирует реактивную BEM-карту классов (`,(0,c.jsx)(t.code,{children:`classesToken`}),`) и инициирует экземпляр `,(0,c.jsx)(t.code,{children:`Design`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`index.ts`})}),`: собирает и экспортирует компонент и все связанные типы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`основные-cli-команды-экосистемы`,children:`Основные CLI-команды экосистемы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-ui [--name NAME]`})}),` — главный оркестратор сборки UI. Сканирует `,(0,c.jsx)(t.code,{children:`properties.json`}),`, генерирует шаблоны, BEM-карты, типизированные пропсы и связывает их с классами Конструктора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-constructor`})}),` — компилирует глобальные классы и интерфейсы конструктора логики, актуализируя типы компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-library`})}),` — сканирует структуру проекта и автоматически обновляет индексные файлы экспорта во всех пакетах монорепозитория.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-screenshot`})}),` — автоматизированная среда регрессионного визуального аудита на базе Puppeteer.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-types-save`})}),` — генерирует AI-оптимизированные справочники типов `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` для интеграции с языковыми моделями.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};