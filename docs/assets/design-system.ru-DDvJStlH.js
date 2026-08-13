import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/# Дизайн система`}),`
`,(0,c.jsx)(t.h1,{id:`работа-с-дизайн-системой`,children:`Работа с дизайн системой`}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` — это мощный инструмент и "мозг" автоматизации всей дизайн-системы `,(0,c.jsx)(t.strong,{children:`DXT UI`}),`. Это набор утилит и команд CLI, который берет на себя рутинную работу по созданию, связыванию, тестированию и документированию компонентов.`]}),`
`,(0,c.jsx)(t.p,{children:`Главная цель этого пакета — дать разработчикам и бизнесу единый, автоматизированный процесс развития UI-кита, где человеческий фактор и ошибки при написании шаблонного кода (boilerplate) сведены к нулю.`}),`
`,(0,c.jsxs)(t.p,{children:[`Особая ценность пакета заключается в том, что он выступает `,(0,c.jsx)(t.strong,{children:`мостом между абстрактной бизнес-логикой и визуальным дизайном`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`разделение-логики-и-дизайна`,children:`Разделение логики и дизайна`}),`
`,(0,c.jsx)(t.p,{children:`Архитектура DXT UI построена на строгом разделении:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Абстрактная логика (Конструктор)`}),` — изолированные классы, которые управляют ARIA-атрибутами, событиями, фокусом и состояниями, но ничего не знают о цветах, размерах или CSS-классах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Визуальный дизайн`}),` — конкретное воплощение (токены, отступы, палитры).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет `,(0,c.jsx)(t.code,{children:`scripts`}),` берет на себя задачу автоматически и безошибочно "сшить" эти два мира.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает-под-капотом`,children:`Как это работает под капотом:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`properties.json`}),` как единый источник правды (Single Source of Truth):`]}),`
Разработчик или дизайнер описывает только визуальные свойства компонента (токены, цвета, размеры, состояния `,(0,c.jsx)(t.code,{children:`:hover`}),`/`,(0,c.jsx)(t.code,{children:`:active`}),`, модификаторы) в одном конфигурационном файле `,(0,c.jsx)(t.code,{children:`properties.json`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Парсинг и кодогенерация (Scaffolding):`}),`
Пакет `,(0,c.jsx)(t.code,{children:`scripts`}),` читает этот конфигурационный файл и автоматически генерирует всю связующую инфраструктуру:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props.ts`}),` — TypeScript-интерфейсы, которые расширяют базовые свойства из Конструктора, добавляя в них точные типы для дизайна (например, `,(0,c.jsx)(t.code,{children:`size: 'sm' | 'md'`}),`) и значения по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleToken.scss`}),` — готовые SCSS-миксины и CSS-переменные (дизайн-токены).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignComponent.vue`}),` — Vue-шаблон, в котором происходит магия: скрипт генерирует вычисляемые BEM-классы на основе свойств и прокидывает их в абстрактный класс `,(0,c.jsx)(t.code,{children:`Design`}),` из Конструктора (внедрение зависимостей).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Оркестрация типов (`,(0,c.jsx)(t.code,{children:`dxt-constructor`}),`):`]}),`
Добавление нового свойства в `,(0,c.jsx)(t.code,{children:`properties.json`}),` автоматически обновляет глобальные интерфейсы проекта. IDE сразу начинает подсказывать новые свойства при использовании компонента (например, через `,(0,c.jsx)(t.code,{children:`web-types.json`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Генерация документации с помощью ИИ (AI-Docs):`}),`
Интеграция с искусственным интеллектом (Google Gemini / Anthropic Claude) позволяет пакету автоматически генерировать справочные материалы, описания пропсов и примеры кода прямо на основе `,(0,c.jsx)(t.code,{children:`properties.json`}),` и типов TypeScript.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`что-это-дает-бизнесу-и-команде-разработчиков`,children:`Что это дает бизнесу и команде разработчиков?`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Высокая скорость разработки:`}),` Фокус смещается с написания бойлерплейта на создание реального продукта. Создание нового компонента или модификатора занимает секунды.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гарантированная консистентность:`}),` Исключаются "забытые" экспорты, опечатки в именах CSS-классов или расхождения между TypeScript и SCSS. Логика (например, доступность ARIA) всегда работает идеально, так как наследуется от Конструктора, а визуальная часть 100% соответствует токенам.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Простота поддержки и масштабирования:`}),` Чтобы изменить логику генерации CSS-классов или структуру папок во всей библиотеке, достаточно внести правки в логику пакета `,(0,c.jsx)(t.code,{children:`scripts`}),`, после чего вся библиотека UI пересобирается одной командой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с дизайном (Figma):`}),` Встроенные клиенты Figma API позволяют извлекать структуры фреймов, дизайн-токены и стили напрямую из макетов, автоматически превращая их в код.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`основные-команды-cli`,children:`Основные команды (CLI)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-ui [ComponentName]`})}),`
Главный оркестратор. Сканирует файлы `,(0,c.jsx)(t.code,{children:`properties.json`}),`, генерирует шаблоны, "сшивает" их с классами Конструктора, обновляет пропсы и стили.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-constructor`})}),`
Пересобирает глобальные классы и типы конструктора логики, гарантируя актуальность всех типов свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-component-wiki`})}),` / `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-wiki-storm`})}),`
Запускает генерацию ИИ-справок по компонентам для Storybook/MDX и форматирует данные для автозаполнения в IDE (WebStorm).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-library`})}),`
Сканирует дерево директорий и автоматически собирает файлы экспорта `,(0,c.jsx)(t.code,{children:`index.ts`}),` во всех пакетах рабочего пространства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-screenshot`})}),`
Среда визуального регрессионного тестирования с использованием Puppeteer.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`глубокая-интеграция-стилей-и-дизайн-токенов`,children:`Глубокая интеграция стилей и дизайн-токенов`}),`
`,(0,c.jsxs)(t.p,{children:[`Модуль парсинга дизайн-токенов (классы `,(0,c.jsx)(t.code,{children:`Properties*`}),`) — это сердце кодогенератора. Скрипт распознает множество типов свойств из JSON:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`type-var`}),` / `,(0,c.jsx)(t.code,{children:`flag-var`})]}),`: Свойства, компилируемые напрямую в CSS-переменные (динамическое управление отступами, скруглениями).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`type-state`})}),`: Динамические визуальные состояния компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`flag-theme`}),` / Палитры`]}),`: Управление цветами и поддержка темной/светлой темы без дублирования CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`flag-subclass`}),` / `,(0,c.jsx)(t.code,{children:`flag-replace`})]}),`: Умное управление CSS-классами по BEM, добавляющее модификаторы только при активных флагах.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Все эти связи скрипт автоматически переводит в оптимизированный SCSS-код и строгий TypeScript, образуя безупречный мост между визуальным дизайном и логическим ядром компонентов.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};