import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/! О пакете`}),`
`,(0,c.jsx)(n.h1,{id:`экосистема-скриптов-scripts`,children:`Экосистема скриптов (Scripts)`}),`
`,(0,c.jsxs)(n.p,{children:[`Пакет `,(0,c.jsx)(n.code,{children:`@dxtmisha/scripts`}),` — это мощный набор утилит и команд CLI, созданных специально для автоматизации создания шаблонов, сборки, документирования и тестирования компонентов в рамках дизайн-системы.`]}),`
`,(0,c.jsx)(n.p,{children:`Он объединяет компоненты, стили, дизайн-токены и документацию, избавляя разработчиков от рутины и сохраняя кодовую базу чистой и масштабируемой.`}),`
`,(0,c.jsx)(n.h2,{id:`основные-подсистемы`,children:`Основные подсистемы`}),`
`,(0,c.jsx)(n.h3,{id:`1-генерация-кода-и-документации-scaffolding`,children:`1. Генерация кода и документации (Scaffolding)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-component`})}),`: Автоматически генерирует шаблоны Vue-компонентов, файлы свойств (`,(0,c.jsx)(n.code,{children:`props.ts`}),`), стилей и экспортов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-component-wiki`})}),`: Создаёт документацию для компонентов и вики-файлы MDX с помощью ИИ Gemini или Claude.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-constructor`})}),`: Инициализирует конструкторы логики компонентов и конфигурационные классы.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`2-сборка-дизайн-системы-и-типов`,children:`2. Сборка дизайн-системы и типов`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-ui`})}),`: Главный оркестратор, координирующий сборку стилей, списков компонентов, экспорт типов и обновление документации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-types`})}),`: Извлекает и сжимает TypeScript-декларации (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`) в чистые, оптимизированные для ИИ справочники типов (`,(0,c.jsx)(n.code,{children:`ai-types.md`}),` и `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-wiki-storm`})}),`: Форматирует свойства компонентов и события в файл `,(0,c.jsx)(n.code,{children:`web-types.json`}),` для поддержки автозаполнения в IDE семейства JetBrains (WebStorm, IntelliJ IDEA).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`3-автоматизация-сборки-и-публикации`,children:`3. Автоматизация сборки и публикации`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-build-functional`})}),`: Динамически собирает и экспортирует все реактивные функции из пакета `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-build-packages`})}),`: Сканирует рабочее пространство и инкрементально собирает только изменённые пакеты.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-build-publish-packages`})}),`: Автоматизирует процесс сборки и публикации обновлённых пакетов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`4-вспомогательные-утилиты-и-тестирование`,children:`4. Вспомогательные утилиты и тестирование`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-screenshot`})}),`: Запускает dev-сервер, открывает Puppeteer для скриншота компонентов и экспортирует сырой HTML/CSS для визуального тестирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-flags`})}),`: Компилирует SVG-файлы флагов в оптимизированные спрайты и классы стилей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-library`})}),`: Автоматизирует ведение файлов точек входа (barrel) во всех пакетах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-prompt`})}),`: Собирает все стандарты SCSS, BEM и Vue в единый файл промпта (`,(0,c.jsx)(n.code,{children:`ai-prompt.md`}),`) для ИИ-ассистентов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`почему-это-важно`,children:`Почему это важно?`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отсутствие шаблонной работы`}),`: Автоматическая генерация папок компонентов, стилей и импортов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция ИИ`}),`: Использование языковых моделей для быстрого написания сложной документации и упрощения понимания API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизация монорепозитория`}),`: Сведение к минимуму накладных расходов на ручную сборку и публикацию пакетов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`репозиторий`,children:`Репозиторий`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/scripts`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/scripts`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};