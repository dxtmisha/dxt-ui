import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/# Команды/dxt-screenshot - Автоматический снимок экрана dev-сервера`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-screenshot`,children:`dxt-screenshot`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-screenshot`}),` автоматизирует визуальное сохранение макетов интерфейса. Она запускает локальный сервер разработки проекта, открывает headless-браузер, делает снимок экрана страницы в высоком разрешении и извлекает её статический HTML и CSS.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматический жизненный цикл сервера`}),`: Самостоятельно запускает dev-сервер (`,(0,c.jsx)(t.code,{children:`npm run dev`}),`) в фоновом процессе и корректно останавливает его после захвата экрана.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Снимок в headless-браузере`}),`: Использует Puppeteer через обёртку `,(0,c.jsx)(t.code,{children:`BrowserItem`}),` для рендеринга страниц с большой высотой (по умолчанию 12000px) и сохранения снимка в формате `,(0,c.jsx)(t.code,{children:`.webp`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Экспорт ассетов`}),`: Сохраняет HTML-структуру в файл `,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),` и сгенерированный CSS в `,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),` для анализа стилей.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Запуск dev-сервера`}),`: Скрипт запускает процесс `,(0,c.jsx)(t.code,{children:`npm run dev`}),` в фоне.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Получение URL`}),`: Сканирует вывод терминала для определения локального адреса хоста (например, `,(0,c.jsx)(t.code,{children:`http://localhost:5173`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Захват страницы`}),`: После обнаружения адреса запускает Puppeteer и переходит по полученному URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение результатов`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Делает скриншот всей страницы и сохраняет изображение.`}),`
`,(0,c.jsxs)(t.li,{children:[`Сохраняет тело DOM в `,(0,c.jsx)(t.code,{children:`[path]-code.html`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Сохраняет таблицы стилей в `,(0,c.jsx)(t.code,{children:`[path]-styles.css`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Остановка`}),`: Принудительно завершает фоновый процесс dev-сервера.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Запустите инструмент создания скриншота через `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-screenshot
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Результаты захвата будут сохранены в папке `,(0,c.jsx)(t.code,{children:`./ai-screenshot/`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};