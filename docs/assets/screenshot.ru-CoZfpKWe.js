import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/7. Визуальный контекст (Скриншоты)`}),`
`,(0,c.jsx)(t.h1,{id:`визуальный-контекст-ai-screenshot`,children:`Визуальный контекст (ai-screenshot)`}),`
`,(0,c.jsxs)(t.p,{children:[`Одной из самых мощных возможностей инфраструктуры AIDD в `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` является передача искусственному интеллекту не только текстовых TypeScript-контрактов, но и `,(0,c.jsx)(t.strong,{children:`визуального контекста`}),` реального интерфейса. Это позволяет мультимодальным AI-моделям «видеть» внешний вид компонентов, проверять верстку, отступы и визуальные токены.`]}),`
`,(0,c.jsxs)(t.p,{children:[`За эту функциональность отвечает директория `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`, артефакты которой генерируются утилитой `,(0,c.jsx)(t.code,{children:`dxt-screenshot`}),` (класс `,(0,c.jsx)(t.code,{children:`DesignScreenshot`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает-под-капотом`,children:`Как это работает под капотом`}),`
`,(0,c.jsx)(t.p,{children:`Генератор визуального контекста работает полностью автономно по следующему алгоритму:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Запуск сервера разработки:`}),` Скрипт программно запускает локальный сервер пакета (`,(0,c.jsx)(t.code,{children:`npm run dev`}),`) через дочерний процесс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Перехват локального URL:`}),` Скрипт в реальном времени анализирует вывод консоли (stdout) запущенного сервера и считывает адрес хоста (например, `,(0,c.jsx)(t.code,{children:`http://localhost:5173`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Запуск Headless-браузера:`}),` После получения адреса поднимается headless-браузер (без графической оболочки) и выполняет навигацию на целевую страницу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Захват состояния интерфейса:`}),` Браузер выполняет полный снимок экрана страницы в высоком разрешении, сохраняя оптимизированные изображения в формате `,(0,c.jsx)(t.code,{children:`.webp`}),`, а также извлекает отрендеренное DOM-дерево и примененные CSS-стили.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Завершение процесса:`}),` Скрипт корректно завершает работу dev-сервера и сохраняет все полученные файлы в папку `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`содержимое-директории-ai-screenshot`,children:`Содержимое директории ai-screenshot/`}),`
`,(0,c.jsx)(t.p,{children:`После генерации в корне пакета создается набор артефактов:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-*.webp`})}),` — серия графических снимков интерфейса в формате WebP с минимальным весом и высокой детализацией.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-code.html`})}),` — полный отрендеренный HTML (DOM-дерево) со всеми атрибутами и классами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-styles.css`})}),` — скомпилированные CSS-стили, реально примененные к элементам страницы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`интеграция-в-системный-промпт-и-mcp`,children:`Интеграция в системный промпт и MCP`}),`
`,(0,c.jsxs)(t.p,{children:[`При запуске `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` пути ко всем файлам из папки `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),` автоматически встраиваются в реестр пакетов файла `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`## Component Visual References (Screenshots)
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-8_1.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-code.html'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-styles.css'
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Кроме того, генератор ресурсов `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` преобразует скриншоты в мультимедийные ресурсы протокола MCP с MIME-типами `,(0,c.jsx)(t.code,{children:`image/webp`}),`, `,(0,c.jsx)(t.code,{children:`text/html`}),` и `,(0,c.jsx)(t.code,{children:`text/css`}),`, позволяя современным AI-агентам запрашивать визуальные данные напрямую через инструменты модели.`]}),`
`,(0,c.jsx)(t.h2,{id:`запуск-генерации`,children:`Запуск генерации`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Через npm-скрипт в директории пакета:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Через npx CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-screenshot
`})}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};