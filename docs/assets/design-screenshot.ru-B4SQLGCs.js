import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-screenshot - Автоматический снимок экрана dev-сервера`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-screenshot`,children:`dxt-screenshot`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-screenshot`}),` автоматизирует визуальное сохранение макетов интерфейса. Она запускает локальный сервер разработки проекта, открывает headless-браузер, делает снимок экрана страницы в высоком разрешении и извлекает её статический HTML и CSS.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматический жизненный цикл сервера`}),`: Самостоятельно запускает dev-сервер (`,(0,c.jsx)(n.code,{children:`npm run dev`}),`) в фоновом процессе и корректно останавливает его после захвата экрана.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Снимок в headless-браузере`}),`: Использует Puppeteer через обёртку `,(0,c.jsx)(n.code,{children:`BrowserItem`}),` для рендеринга страниц с большой высотой (по умолчанию 12000px) и сохранения снимка в формате `,(0,c.jsx)(n.code,{children:`.webp`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Экспорт ассетов`}),`: Сохраняет HTML-структуру в файл `,(0,c.jsx)(n.code,{children:`screenshot-code.html`}),` и сгенерированный CSS в `,(0,c.jsx)(n.code,{children:`screenshot-styles.css`}),` для анализа стилей.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Запуск dev-сервера`}),`: Скрипт запускает процесс `,(0,c.jsx)(n.code,{children:`npm run dev`}),` в фоне.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Получение URL`}),`: Сканирует вывод терминала для определения локального адреса хоста (например, `,(0,c.jsx)(n.code,{children:`http://localhost:5173`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Захват страницы`}),`: После обнаружения адреса запускает Puppeteer и переходит по полученному URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение результатов`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Делает скриншот всей страницы и сохраняет изображение.`}),`
`,(0,c.jsxs)(n.li,{children:[`Сохраняет тело DOM в `,(0,c.jsx)(n.code,{children:`[path]-code.html`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Сохраняет таблицы стилей в `,(0,c.jsx)(n.code,{children:`[path]-styles.css`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Остановка`}),`: Принудительно завершает фоновый процесс dev-сервера.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(n.p,{children:[`Запустите инструмент создания скриншота через `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-screenshot
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Результаты захвата будут сохранены в папке `,(0,c.jsx)(n.code,{children:`./ai-screenshot/`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};